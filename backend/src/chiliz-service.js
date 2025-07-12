const ChilizConnection = require('./chiliz-connection');
const SmartContractManager = require('./smart-contract-manager');
const WalletManager = require('./wallet-manager');
const EventEmitter = require('events');

class ChilizService extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;
    this.chilizConnection = null;
    this.contractManager = null;
    this.walletManager = null;
    this.isRunning = false;
    this.startTime = null;
    
    this.setupEventHandlers();
  }

  async initialize() {
    try {
      console.log('🔒 Initializing secure Chiliz service...');
      
      // Initialize Chiliz connection (WebSocket only)
      this.chilizConnection = new ChilizConnection({
        wsUrl: this.config.wsUrl,
        httpUrl: this.config.httpUrl,
        privateKey: this.config.privateKey
      });

      await this.chilizConnection.initialize();

      // Initialize wallet manager
      this.walletManager = new WalletManager(this.chilizConnection);
      console.log('💼 Wallet manager initialized');

      // Initialize contract manager (if contract config is provided)
      // TEMPORARILY DISABLED - Smart contract functionality disabled to prevent filter errors
      /*
      if (this.config.contractAddress && this.config.contractABI) {
        this.contractManager = new SmartContractManager(
          this.chilizConnection,
          this.config.contractAddress,
          this.config.contractABI
        );
        await this.contractManager.initialize();
        console.log('📋 Smart contract manager initialized');
      } else {
        console.log('⚠️  No smart contract configured - running in wallet-only mode');
      }
      */
      console.log('⚠️  Smart contract functionality disabled - running in wallet-only mode');

      console.log('✅ Chiliz service initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Chiliz service:', error);
      throw error;
    }
  }

  setupEventHandlers() {
    // Handle contract events and trigger automatic paybacks
    /*
    this.on('contractInitialized', () => {
      if (this.contractManager) {
        this.contractManager.on('contractEvent', (eventData) => {
          console.log(`📡 Contract event received: ${eventData.event.fragment?.name}`);
          this.handleContractEvent(eventData);
        });

        // Handle specific events
        this.contractManager.on('stakeProcessed', (event) => {
          console.log('🥩 Stake event processed:', {
            user: event.args?.[0],
            amount: event.args?.[1]?.toString()
          });
        });

        this.contractManager.on('unstakeProcessed', (event) => {
          console.log('📤 Unstake event processed:', {
            user: event.args?.[0],
            amount: event.args?.[1]?.toString()
          });
        });

        this.contractManager.on('paybackSent', (data) => {
          console.log('💰 Payback sent:', data);
        });
      }
    });
    */

    // Handle wallet events
    this.on('walletInitialized', () => {
      if (this.walletManager) {
        this.walletManager.on('paymentSent', (transaction) => {
          console.log('💸 Payment sent:', {
            to: transaction.to,
            amount: transaction.amount,
            hash: transaction.hash
          });
        });

        this.walletManager.on('automaticPaybackSent', (data) => {
          console.log('🤖 Automatic payback sent:', data);
        });

        this.walletManager.on('paymentFailed', (data) => {
          console.error('❌ Payment failed:', data);
        });
      }
    });

    // Handle connection events
    this.on('connectionInitialized', () => {
      if (this.chilizConnection) {
        // Handle wallet transaction events from the new event-driven system
        this.chilizConnection.on('walletTransaction', (txData) => {
          console.log(`🔄 Wallet transaction processed: ${txData.type.toUpperCase()}`);
          console.log(`   Amount: ${txData.value} CHZ`);
          console.log(`   Hash: ${txData.hash}`);
          console.log(`   Block: ${txData.blockNumber}`);
          this.emit('walletTransaction', txData);
        });

        this.chilizConnection.on('incomingTransaction', (txData) => {
          // Connection layer already logs details, just emit for external handlers
          this.emit('incomingTransaction', txData);
        });

        this.chilizConnection.on('outgoingTransaction', (txData) => {
          // Connection layer already logs details, just emit for external handlers
          this.emit('outgoingTransaction', txData);
        });

        this.chilizConnection.on('pendingTransaction', (txData) => {
          console.log(`⏳ Pending wallet transaction: ${txData.type.toUpperCase()}`);
          console.log(`   Amount: ${txData.value} CHZ`);
          console.log(`   Hash: ${txData.hash}`);
          this.emit('pendingTransaction', txData);
        });

        this.chilizConnection.on('transactionSent', (txData) => {
          console.log(`📤 SENT: ${txData.amount} CHZ to ${txData.to}`);
          console.log(`   Hash: ${txData.hash}`);
          this.emit('transactionSent', txData);
        });

        this.chilizConnection.on('newBlock', (blockData) => {
          console.log(`📦 New block processed: ${blockData.blockNumber} (${blockData.transactionCount} txs)`);
          this.emit('newBlock', blockData);
        });

        this.chilizConnection.on('connected', () => {
          console.log('🌐 Connected to Chiliz network');
        });

        this.chilizConnection.on('disconnected', () => {
          console.log('❌ Disconnected from Chiliz network');
          this.handleDisconnection();
        });

        this.chilizConnection.on('error', (error) => {
          console.error('🚨 Connection error:', error);
        });
      }
    });
  }

  async handleContractEvent(eventData) {
    const eventName = eventData.event.fragment?.name;
    const args = eventData.event.args;

    if (!eventName || !args) return;

    console.log(`🔍 Processing contract event: ${eventName}`);

    // Extract common event data
    const initiator = args[0]; // Assuming first argument is usually the user address
    const amount = args[1]; // Assuming second argument is usually the amount

    // Process automatic paybacks based on event
    if (initiator && amount) {
      try {
        await this.walletManager.processAutomaticPayback({
          initiator: initiator,
          transactionType: eventName.toLowerCase(),
          amount: amount.toString(),
          transactionHash: eventData.event.transactionHash,
          blockNumber: eventData.event.blockNumber
        });
      } catch (error) {
        console.error('❌ Error processing automatic payback:', error);
      }
    }

    // Emit event for external handling
    this.emit('contractEventProcessed', {
      eventName,
      initiator,
      amount: amount?.toString(),
      transactionHash: eventData.event.transactionHash
    });
  }

  handleDisconnection() {
    console.log('🔄 Handling disconnection...');
    // The connection class handles reconnection automatically
    // We just log the event here
  }

  start() {
    if (this.isRunning) {
      console.log('⚠️  Service is already running');
      return;
    }

    this.isRunning = true;
    this.startTime = new Date();

    // Emit initialization events
    this.emit('connectionInitialized');
    this.emit('walletInitialized');
    // Contract manager initialization disabled
    /*
    if (this.contractManager) {
      this.emit('contractInitialized');
    }
    */

    // Set up automatic payback rules (example configuration)
    this.setupDefaultPaybackRules();

    // Start monitoring
    this.startMonitoring();

    console.log('🚀 Chiliz service is now running in secure mode');
    console.log('🔒 No HTTP endpoints exposed - private blockchain service only');
  }

  async setupDefaultPaybackRules() {
    if (!this.walletManager) return;

    // Example payback rules - customize based on your needs
    const defaultRules = [
      {
        transactionType: 'stake',
        type: 'percentage',
        value: 2, // 2% of stake amount
        description: 'Reward for staking transaction'
      },
      {
        transactionType: 'unstake',
        type: 'fixed',
        value: 0.1, // 0.1 CHZ fixed
        description: 'Fixed reward for unstaking'
      }
    ];

    try {
      await this.walletManager.setupAutomaticPaybacks(defaultRules);
      console.log('🔧 Default payback rules configured');
    } catch (error) {
      console.error('❌ Error setting up payback rules:', error);
    }
  }

  startMonitoring() {
    // Periodic status checks
    setInterval(() => {
      this.logStatus();
    }, 5 * 60 * 1000); // Every 5 minutes

    // Initial status log
    setTimeout(() => this.logStatus(), 10000); // After 10 seconds
  }

  async logStatus() {
    try {
      const balance = await this.walletManager.getBalance();
      const uptime = this.getUptime();
      
      console.log('📊 Service Status:');
      console.log(`   Uptime: ${uptime}`);
      console.log(`   Connected: ${this.chilizConnection?.isConnected || false}`);
      console.log(`   Wallet Balance: ${balance.balance} ${balance.unit}`);
      console.log(`   Pending Transactions: ${this.walletManager.getPendingTransactions().length}`);
      
      // Security check
      const securityStatus = await this.walletManager.checkWalletSecurity();
      if (securityStatus.warnings.length > 0) {
        console.warn('⚠️  Security warnings:', securityStatus.warnings);
      }
    } catch (error) {
      console.error('❌ Error during status check:', error);
    }
  }

  getUptime() {
    if (!this.startTime) return 'Not started';
    
    const uptime = Date.now() - this.startTime.getTime();
    const hours = Math.floor(uptime / (1000 * 60 * 60));
    const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
  }

  async stop() {
    console.log('🛑 Stopping Chiliz service...');
    
    this.isRunning = false;
    
    if (this.chilizConnection) {
      this.chilizConnection.disconnect();
    }
    
    console.log('✅ Service stopped gracefully');
  }

  // Manual operations (for debugging/testing)
  async sendPayment(toAddress, amount, memo = '') {
    if (!this.walletManager) {
      throw new Error('Wallet manager not initialized');
    }
    
    console.log(`💸 Manual payment: ${amount} CHZ to ${toAddress}`);
    return await this.walletManager.sendPayment(toAddress, amount, memo);
  }

  async stakeTokens(amount, recipient = null) {
    if (!this.contractManager) {
      throw new Error('Contract manager not initialized');
    }
    
    console.log(`🥩 Manual stake: ${amount} CHZ`);
    return await this.contractManager.stakeTokens(amount, recipient);
  }

  async unstakeTokens(amount) {
    if (!this.contractManager) {
      throw new Error('Contract manager not initialized');
    }
    
    console.log(`📤 Manual unstake: ${amount} CHZ`);
    return await this.contractManager.unstakeTokens(amount);
  }

  async getWalletBalance() {
    if (!this.walletManager) {
      throw new Error('Wallet manager not initialized');
    }
    
    return await this.walletManager.getBalance();
  }

  async getStakeBalance(address = null) {
    if (!this.contractManager) {
      throw new Error('Contract manager not initialized');
    }
    
    return await this.contractManager.getStakeBalance(address);
  }
}

module.exports = ChilizService;
