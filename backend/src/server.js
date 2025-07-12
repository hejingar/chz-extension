const express = require('express');
const cors = require('cors');
const ChilizConnection = require('./chiliz-connection');
const SmartContractManager = require('./smart-contract-manager');
const WalletManager = require('./wallet-manager');

class ChilizBackendServer {
  constructor(config) {
    this.config = config;
    this.app = express();
    this.chilizConnection = null;
    this.contractManager = null;
    this.walletManager = null;
    
    this.setupMiddleware();
    this.setupRoutes();
    this.setupEventHandlers();
  }

  setupMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    // Request logging
    this.app.use((req, res, next) => {
      console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
      next();
    });
  }

  setupRoutes() {
    // Health check
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        connected: this.chilizConnection?.isConnected || false
      });
    });

    // Wallet routes
    this.app.get('/wallet/balance', async (req, res) => {
      try {
        const balance = await this.walletManager.getBalance();
        res.json(balance);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.get('/wallet/balance/:address', async (req, res) => {
      try {
        const balance = await this.walletManager.getBalanceOf(req.params.address);
        res.json(balance);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/wallet/send', async (req, res) => {
      try {
        const { to, amount, memo } = req.body;
        const result = await this.walletManager.sendPayment(to, amount, memo);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/wallet/batch-send', async (req, res) => {
      try {
        const { payments } = req.body;
        const results = await this.walletManager.batchPayments(payments);
        res.json(results);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.get('/wallet/transactions', (req, res) => {
      try {
        const limit = parseInt(req.query.limit) || 50;
        const transactions = this.walletManager.getTransactionHistory(limit);
        res.json(transactions);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Smart contract routes
    this.app.get('/contract/stake-balance/:address?', async (req, res) => {
      try {
        const address = req.params.address;
        const balance = await this.contractManager.getStakeBalance(address);
        res.json({ address: address || 'self', stakeBalance: balance });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.get('/contract/rewards/:address?', async (req, res) => {
      try {
        const address = req.params.address;
        const rewards = await this.contractManager.getRewards(address);
        res.json({ address: address || 'self', rewards: rewards });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/contract/stake', async (req, res) => {
      try {
        const { amount, recipient } = req.body;
        const result = await this.contractManager.stakeTokens(amount, recipient);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/contract/unstake', async (req, res) => {
      try {
        const { amount } = req.body;
        const result = await this.contractManager.unstakeTokens(amount);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/contract/claim-rewards', async (req, res) => {
      try {
        const result = await this.contractManager.claimRewards();
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/contract/call', async (req, res) => {
      try {
        const { method, args, options } = req.body;
        const result = await this.contractManager.callContractMethod(method, args, options);
        res.json({ result });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.get('/contract/events/:eventName', async (req, res) => {
      try {
        const { eventName } = req.params;
        const { fromBlock = 0, toBlock = 'latest' } = req.query;
        const events = await this.contractManager.getPastEvents(eventName, fromBlock, toBlock);
        res.json(events);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Payback routes
    this.app.post('/payback', async (req, res) => {
      try {
        const { address, amount, reason } = req.body;
        const result = await this.contractManager.paybackInitiator(address, amount, reason);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    this.app.post('/payback/setup-rules', async (req, res) => {
      try {
        const { rules } = req.body;
        await this.walletManager.setupAutomaticPaybacks(rules);
        res.json({ success: true, message: 'Payback rules configured' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Connection status
    this.app.get('/connection/status', (req, res) => {
      res.json({
        connected: this.chilizConnection?.isConnected || false,
        address: this.chilizConnection?.wallet?.address,
        network: this.config.chainId
      });
    });
  }

  setupEventHandlers() {
    // Handle contract events and trigger automatic paybacks
    if (this.contractManager) {
      this.contractManager.on('contractEvent', (eventData) => {
        console.log('Contract event received:', eventData.event.fragment?.name);
        
        // Process automatic paybacks based on event
        if (eventData.event.args && eventData.event.args.length > 0) {
          this.walletManager.processAutomaticPayback({
            initiator: eventData.event.args[0], // Assuming first arg is initiator
            transactionType: eventData.event.fragment?.name,
            amount: eventData.event.args[1] || 0 // Assuming second arg is amount
          });
        }
      });

      // Handle specific events
      this.contractManager.on('stakeProcessed', (event) => {
        console.log('Stake event processed:', event);
      });

      this.contractManager.on('unstakeProcessed', (event) => {
        console.log('Unstake event processed:', event);
      });

      this.contractManager.on('paybackSent', (data) => {
        console.log('Payback sent:', data);
      });
    }

    // Handle wallet events
    if (this.walletManager) {
      this.walletManager.on('paymentSent', (transaction) => {
        console.log('Payment sent:', transaction);
      });

      this.walletManager.on('automaticPaybackSent', (data) => {
        console.log('Automatic payback sent:', data);
      });
    }

    // Handle connection events
    if (this.chilizConnection) {
      this.chilizConnection.on('newBlock', (blockData) => {
        console.log(`New block: ${blockData.blockNumber}`);
      });

      this.chilizConnection.on('connected', () => {
        console.log('Connected to Chiliz network');
      });

      this.chilizConnection.on('disconnected', () => {
        console.log('Disconnected from Chiliz network');
      });
    }
  }

  async initialize() {
    try {
      // Initialize Chiliz connection
      this.chilizConnection = new ChilizConnection({
        wsUrl: this.config.wsUrl,
        httpUrl: this.config.httpUrl,
        privateKey: this.config.privateKey
      });

      await this.chilizConnection.initialize();

      // Initialize wallet manager
      this.walletManager = new WalletManager(this.chilizConnection);

      // Initialize contract manager (if contract config is provided)
      if (this.config.contractAddress && this.config.contractABI) {
        this.contractManager = new SmartContractManager(
          this.chilizConnection,
          this.config.contractAddress,
          this.config.contractABI
        );
        await this.contractManager.initialize();
      }

      // Re-setup event handlers after initialization
      this.setupEventHandlers();

      console.log('Chiliz backend initialized successfully');
      return true;
    } catch (error) {
      console.error('Failed to initialize Chiliz backend:', error);
      throw error;
    }
  }

  start() {
    const port = this.config.port || 3001;
    
    this.server = this.app.listen(port, () => {
      console.log(`Chiliz backend server running on port ${port}`);
      console.log(`Health check: http://localhost:${port}/health`);
    });

    // Graceful shutdown
    process.on('SIGTERM', () => this.shutdown());
    process.on('SIGINT', () => this.shutdown());
  }

  shutdown() {
    console.log('Shutting down Chiliz backend...');
    
    if (this.chilizConnection) {
      this.chilizConnection.disconnect();
    }
    
    if (this.server) {
      this.server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    }
  }
}

module.exports = ChilizBackendServer;
