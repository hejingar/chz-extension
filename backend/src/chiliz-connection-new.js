const { ethers } = require('ethers');
const EventEmitter = require('events');

class ChilizConnection extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;
    this.httpProvider = null;
    this.wsProvider = null;
    this.wallet = null;
    this.contract = null;
    this.isConnected = false;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectInterval = 5000;
    this.subscriptions = new Map();
    this.lastProcessedBlock = 0;
  }

  async initialize() {
    try {
      console.log('🚀 Initializing event-driven Chiliz connection...');
      
      // Initialize HTTP provider for transactions and fallback
      this.httpProvider = new ethers.JsonRpcProvider(this.config.httpUrl);
      
      // Test HTTP connection
      const network = await this.httpProvider.getNetwork();
      console.log(`Connected to Chiliz network: ${network.name} (Chain ID: ${network.chainId})`);
      
      // Initialize wallet with HTTP provider for transactions
      this.wallet = new ethers.Wallet(this.config.privateKey, this.httpProvider);
      console.log(`💼 Wallet initialized: ${this.wallet.address}`);
      
      // Initialize WebSocket provider for event-driven monitoring
      await this.initializeEventDrivenMonitoring();
      
      this.emit('connected');
      return true;
    } catch (error) {
      console.error('Failed to initialize Chiliz connection:', error);
      this.emit('error', error);
      return false;
    }
  }

  async initializeEventDrivenMonitoring() {
    try {
      console.log('🔗 Setting up event-driven transaction monitoring...');
      
      // Try WebSocket first for real-time events
      if (this.config.wsUrl) {
        try {
          this.wsProvider = new ethers.WebSocketProvider(this.config.wsUrl);
          await this.setupWebSocketEventListeners();
          console.log('✅ WebSocket provider initialized for real-time monitoring');
        } catch (wsError) {
          console.warn('⚠️ WebSocket unavailable, falling back to block polling:', wsError.message);
          this.wsProvider = null;
        }
      }
      
      // Set up block-based event monitoring (works with both HTTP and WebSocket)
      const provider = this.wsProvider || this.httpProvider;
      this.setupBlockEventListeners(provider);
      
      this.isConnected = true;
    } catch (error) {
      console.error('Failed to initialize event-driven monitoring:', error);
      throw error;
    }
  }

  async setupWebSocketEventListeners() {
    if (!this.wsProvider) return;
    
    try {
      // Listen for new blocks using ethers.js event system
      this.wsProvider.on('block', async (blockNumber) => {
        console.log(`📦 New block detected: ${blockNumber}`);
        await this.processBlock(blockNumber);
      });

      // Listen for specific transaction events involving our wallet
      const walletFilter = {
        address: null, // Listen to all addresses
        topics: [] // Listen to all topics
      };

      // Alternative: Listen for pending transactions (if supported)
      try {
        this.wsProvider.on('pending', async (txHash) => {
          console.log(`⏳ Pending transaction detected: ${txHash}`);
          await this.processPendingTransaction(txHash);
        });
        console.log('✅ Pending transaction listener active');
      } catch (pendingError) {
        console.warn('⚠️ Pending transaction events not supported:', pendingError.message);
      }

      // Handle WebSocket errors and reconnection
      this.wsProvider.websocket.on('error', (error) => {
        console.error('WebSocket error:', error);
        this.handleWebSocketReconnection();
      });

      this.wsProvider.websocket.on('close', () => {
        console.log('WebSocket connection closed, attempting reconnection...');
        this.handleWebSocketReconnection();
      });

      console.log('✅ WebSocket event listeners configured');
    } catch (error) {
      console.error('Error setting up WebSocket listeners:', error);
      throw error;
    }
  }

  setupBlockEventListeners(provider) {
    // For HTTP providers or as backup, poll for new blocks
    const pollForBlocks = async () => {
      try {
        const currentBlock = await provider.getBlockNumber();
        if (currentBlock > this.lastProcessedBlock) {
          for (let blockNum = this.lastProcessedBlock + 1; blockNum <= currentBlock; blockNum++) {
            await this.processBlock(blockNum);
          }
        }
      } catch (error) {
        console.error('Error polling for blocks:', error);
      }
    };

    // Poll every 2 seconds if using HTTP, or as backup for WebSocket
    if (!this.wsProvider) {
      console.log('📊 Starting HTTP block polling (fallback mode)');
      this.blockPollingInterval = setInterval(pollForBlocks, 2000);
    } else {
      // Even with WebSocket, have a backup polling mechanism
      this.blockPollingInterval = setInterval(pollForBlocks, 10000); // Every 10 seconds as backup
    }
  }

  async processBlock(blockNumber) {
    try {
      if (blockNumber <= this.lastProcessedBlock) return;
      
      console.log(`🔍 Processing block ${blockNumber} for wallet transactions...`);
      
      const provider = this.wsProvider || this.httpProvider;
      const block = await provider.getBlock(blockNumber, true);
      
      if (!block || !block.transactions) {
        console.log(`⚠️ Block ${blockNumber} has no transactions`);
        this.lastProcessedBlock = blockNumber;
        return;
      }

      // Emit new block event
      this.emit('newBlock', {
        blockNumber: block.number,
        blockHash: block.hash,
        timestamp: block.timestamp,
        transactionCount: block.transactions.length
      });

      // Process transactions for our wallet
      let walletTransactionsFound = 0;
      
      for (const tx of block.transactions) {
        try {
          // Handle both transaction objects and hashes
          let transaction = tx;
          if (typeof tx === 'string') {
            transaction = await provider.getTransaction(tx);
          }

          if (transaction && this.isWalletTransaction(transaction)) {
            walletTransactionsFound++;
            await this.processWalletTransaction(transaction, block);
          }
        } catch (txError) {
          console.error(`Error processing transaction in block ${blockNumber}:`, txError.message);
        }
      }

      if (walletTransactionsFound > 0) {
        console.log(`✅ Found ${walletTransactionsFound} wallet transaction(s) in block ${blockNumber}`);
      }

      this.lastProcessedBlock = blockNumber;
    } catch (error) {
      console.error(`Error processing block ${blockNumber}:`, error.message);
    }
  }

  async processPendingTransaction(txHash) {
    try {
      const provider = this.wsProvider || this.httpProvider;
      const transaction = await provider.getTransaction(txHash);
      
      if (transaction && this.isWalletTransaction(transaction)) {
        console.log(`⏳ Pending wallet transaction detected: ${txHash}`);
        
        // Emit pending transaction event
        this.emit('pendingTransaction', {
          hash: transaction.hash,
          from: transaction.from,
          to: transaction.to,
          value: ethers.formatEther(transaction.value),
          type: this.getTransactionType(transaction),
          timestamp: Date.now()
        });
      }
    } catch (error) {
      console.error(`Error processing pending transaction ${txHash}:`, error.message);
    }
  }

  isWalletTransaction(transaction) {
    if (!transaction || !this.wallet) return false;
    const walletAddress = this.wallet.address.toLowerCase();
    return transaction.from?.toLowerCase() === walletAddress || 
           transaction.to?.toLowerCase() === walletAddress;
  }

  getTransactionType(transaction) {
    if (!this.wallet) return 'unknown';
    const walletAddress = this.wallet.address.toLowerCase();
    if (transaction.from?.toLowerCase() === walletAddress) return 'outgoing';
    if (transaction.to?.toLowerCase() === walletAddress) return 'incoming';
    return 'unknown';
  }

  async processWalletTransaction(transaction, block) {
    try {
      const transactionType = this.getTransactionType(transaction);
      const value = ethers.formatEther(transaction.value);
      const gasUsed = transaction.gasLimit ? ethers.formatUnits(transaction.gasLimit, 'wei') : '0';
      const gasPrice = transaction.gasPrice ? ethers.formatUnits(transaction.gasPrice, 'gwei') : '0';

      const transactionData = {
        hash: transaction.hash,
        from: transaction.from,
        to: transaction.to,
        value: value,
        gasPrice: gasPrice,
        gasLimit: transaction.gasLimit?.toString() || '21000',
        blockNumber: block.number,
        blockHash: block.hash,
        timestamp: block.timestamp,
        type: transactionType
      };

      if (transactionType === 'incoming') {
        console.log(`💰 INCOMING TRANSACTION DETECTED`);
        console.log(`   Amount: ${value} CHZ`);
        console.log(`   From: ${transaction.from}`);
        console.log(`   To: ${transaction.to}`);
        console.log(`   Hash: ${transaction.hash}`);
        console.log(`   Block: ${block.number}`);

        this.emit('incomingTransaction', {
          ...transactionData,
          amount: value,
          direction: 'incoming'
        });
      } else if (transactionType === 'outgoing') {
        console.log(`💸 OUTGOING TRANSACTION DETECTED`);
        console.log(`   Amount: ${value} CHZ`);
        console.log(`   From: ${transaction.from}`);
        console.log(`   To: ${transaction.to}`);
        console.log(`   Hash: ${transaction.hash}`);
        console.log(`   Gas Price: ${gasPrice} Gwei`);
        console.log(`   Block: ${block.number}`);

        this.emit('outgoingTransaction', {
          ...transactionData,
          amount: value,
          direction: 'outgoing'
        });
      }

      // Emit general transaction event
      this.emit('walletTransaction', transactionData);

    } catch (error) {
      console.error('Error processing wallet transaction:', error);
    }
  }

  async handleWebSocketReconnection() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('❌ Max WebSocket reconnection attempts reached, falling back to HTTP polling');
      this.wsProvider = null;
      return;
    }

    this.reconnectAttempts++;
    console.log(`🔄 WebSocket reconnection attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts}`);

    setTimeout(async () => {
      try {
        if (this.wsProvider) {
          await this.wsProvider.destroy();
        }
        this.wsProvider = new ethers.WebSocketProvider(this.config.wsUrl);
        await this.setupWebSocketEventListeners();
        this.reconnectAttempts = 0;
        console.log('✅ WebSocket reconnected successfully');
      } catch (error) {
        console.error('WebSocket reconnection failed:', error.message);
        await this.handleWebSocketReconnection();
      }
    }, this.reconnectInterval);
  }

  async getBalance(address = null) {
    try {
      const targetAddress = address || this.wallet.address;
      const provider = this.httpProvider; // Use HTTP provider for balance queries
      const balance = await provider.getBalance(targetAddress);
      return ethers.formatEther(balance);
    } catch (error) {
      console.error('Error getting balance:', error);
      throw error;
    }
  }

  async getGasPrice() {
    try {
      const provider = this.httpProvider; // Use HTTP provider for gas queries
      const gasPrice = await provider.getFeeData();
      return gasPrice;
    } catch (error) {
      console.error('Error getting gas price:', error);
      throw error;
    }
  }

  async sendTransaction(to, value, data = '0x') {
    try {
      const transaction = {
        to,
        value: ethers.parseEther(value.toString()),
        data,
        gasLimit: 21000
      };

      if (data !== '0x') {
        // Estimate gas for contract interactions
        transaction.gasLimit = await this.httpProvider.estimateGas(transaction);
      }

      const tx = await this.wallet.sendTransaction(transaction);
      console.log(`📤 Transaction sent: ${tx.hash}`);
      console.log(`   To: ${to}`);
      console.log(`   Amount: ${value} CHZ`);
      
      // Emit immediate outgoing transaction event
      this.emit('transactionSent', {
        hash: tx.hash,
        to: to,
        from: this.wallet.address,
        amount: value.toString(),
        type: 'sent',
        timestamp: Date.now()
      });
      
      const receipt = await tx.wait();
      console.log(`✅ Transaction confirmed in block: ${receipt.blockNumber}`);
      
      return {
        hash: tx.hash,
        receipt
      };
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  }

  // Remove the old balance monitoring method as it's replaced by event-driven processing
  startBalanceMonitoring() {
    console.log('⚠️ Balance monitoring deprecated - using event-driven transaction detection');
  }

  stopBalanceMonitoring() {
    // Method kept for backward compatibility but no longer needed
    console.log('💰 Balance monitoring not active (using event-driven mode)');
  }

  stopBlockPolling() {
    if (this.blockPollingInterval) {
      clearInterval(this.blockPollingInterval);
      this.blockPollingInterval = null;
      console.log('📊 Block polling stopped');
    }
  }

  async getCurrentBlockNumber() {
    try {
      const provider = this.wsProvider || this.httpProvider;
      return await provider.getBlockNumber();
    } catch (error) {
      console.error('Error getting current block number:', error);
      throw error;
    }
  }

  disconnect() {
    console.log('🔌 Disconnecting from Chiliz network...');
    
    this.stopBlockPolling();
    
    if (this.wsProvider) {
      try {
        this.wsProvider.destroy();
        this.wsProvider = null;
        console.log('✅ WebSocket provider disconnected');
      } catch (error) {
        console.error('Error disconnecting WebSocket provider:', error);
      }
    }
    
    if (this.httpProvider) {
      this.httpProvider = null;
      console.log('✅ HTTP provider disconnected');
    }
    
    this.isConnected = false;
    this.subscriptions.clear();
    console.log('🔌 Disconnected from Chiliz network');
  }
}

module.exports = ChilizConnection;
