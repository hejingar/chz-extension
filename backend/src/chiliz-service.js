const ChilizConnection = require('./chiliz-connection');
const WalletManager = require('./wallet-manager');
const ChilizReceiverService = require('./chiliz-receiver-service');
const EventEmitter = require('events');

class ChilizService extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;
    this.chilizConnection = null;
    this.contractManager = null;
    this.walletManager = null;
    this.chilizReceiverService = null;
    this.isRunning = false;
    this.startTime = null;
    
    this.setupEventHandlers();
  }

  async initialize() {
    try {
      this.chilizConnection = new ChilizConnection({
        wsUrl: this.config.wsUrl,
        httpUrl: this.config.httpUrl,
        privateKey: this.config.privateKey
      });

      await this.chilizConnection.initialize();
      console.log('🔒 Connected to Chiliz RPC');

      // Initialize wallet manager
      this.walletManager = new WalletManager(this.chilizConnection);
      console.log('💼 Wallet manager initialized');

      // Initialize ChilizReceiver smart contract service
      if (this.config.contractAddress && this.config.contractABI) {
        this.chilizReceiverService = new ChilizReceiverService(
          this.chilizConnection,
          {
            address: this.config.contractAddress,
            abi: this.config.contractABI
          }
        );
        await this.chilizReceiverService.initialize();
        console.log('🏗️ ChilizReceiver smart contract service initialized');
      } else {
        console.log('⚠️  No smart contract configured - running in wallet-only mode');
      }
      if (!this.chilizReceiverService) {
        console.log('⚠️  Smart contract functionality disabled - running in wallet-only mode');
      }

      console.log('✅ Chiliz service initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Chiliz service:', error);
      throw error;
    }
  }

  setupEventHandlers() {
    // Handle ChilizReceiver smart contract events
    this.on('chilizReceiverInitialized', () => {
      if (this.chilizReceiverService) {
        this.chilizReceiverService.on('withdrawalRequested', (eventData) => {
          console.log('📢 Withdrawal Request Event Handler:');
          console.log(`   User: ${eventData.user}`);
          console.log(`   Amount: ${eventData.amountFormatted} CHZ`);
          console.log(`   Transaction: ${eventData.transactionHash}`);
          console.log(`   Block: ${eventData.blockNumber}`);
          
          // Log to our main event system
          this.emit('withdrawalRequested', eventData);
        });

        this.chilizReceiverService.on('depositBackExecuted', (eventData) => {
          console.log('✅ DepositBack Executed Successfully:');
          console.log(`   Transaction: ${eventData.transactionHash}`);
          console.log(`   Block: ${eventData.blockNumber}`);
          console.log(`   Gas Used: ${eventData.gasUsed}`);
          console.log(`   Amount Deposited: ${eventData.amountDeposited} CHZ`);
          
          // Log to our main event system
          this.emit('depositBackExecuted', eventData);
        });

        this.chilizReceiverService.on('depositBackError', (eventData) => {
          console.error('❌ DepositBack Failed:');
          console.error(`   Error: ${eventData.error}`);
          
          // Log to our main event system
          this.emit('depositBackError', eventData);
        });

        this.chilizReceiverService.on('depositBackFailed', (eventData) => {
          console.warn('⚠️ DepositBack Failed (Insufficient Funds):');
          console.warn(`   Reason: ${eventData.reason}`);
          console.warn(`   Required: ${eventData.required || eventData.totalRequired} CHZ`);
          console.warn(`   Available: ${eventData.available} CHZ`);
          
          // Log to our main event system
          this.emit('depositBackFailed', eventData);
        });
      }
    });

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
    
    // Emit ChilizReceiver initialization if available
    if (this.chilizReceiverService) {
      this.emit('chilizReceiverInitialized');
    }

    // Start monitoring
    this.startMonitoring();

    console.log('🚀 Chiliz service is now running in secure mode');
    console.log('🔒 No HTTP endpoints exposed - private blockchain service only');
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

  // ChilizReceiver smart contract methods
  async manualWithdrawToStake() {
    if (!this.chilizReceiverService) {
      throw new Error('ChilizReceiver service not initialized');
    }
    
    console.log('🔧 Manual withdrawToStake requested...');
    return await this.chilizReceiverService.manualWithdrawToStake();
  }

  async getContractBalance() {
    if (!this.chilizReceiverService) {
      throw new Error('ChilizReceiver service not initialized');
    }
    
    return await this.chilizReceiverService.getContractBalance();
  }

  async getUserDepositAmount(userAddress = null) {
    if (!this.chilizReceiverService) {
      throw new Error('ChilizReceiver service not initialized');
    }
    
    const address = userAddress || this.chilizConnection.wallet.address;
    return await this.chilizReceiverService.getUserDepositAmount(address);
  }

  async getUserPendingWithdrawal(userAddress = null) {
    if (!this.chilizReceiverService) {
      throw new Error('ChilizReceiver service not initialized');
    }
    
    const address = userAddress || this.chilizConnection.wallet.address;
    return await this.chilizReceiverService.getUserPendingWithdrawal(address);
  }

  async getUserTimeToClaim(userAddress = null) {
    if (!this.chilizReceiverService) {
      throw new Error('ChilizReceiver service not initialized');
    }
    
    const address = userAddress || this.chilizConnection.wallet.address;
    return await this.chilizReceiverService.getUserTimeToClaim(address);
  }

  async logContractState() {
    if (!this.chilizReceiverService) {
      throw new Error('ChilizReceiver service not initialized');
    }
    
    return await this.chilizReceiverService.logContractState();
  }

  getPendingWithdrawals() {
    if (!this.chilizReceiverService) {
      return [];
    }
    
    return this.chilizReceiverService.getPendingWithdrawals();
  }

  // Additional ChilizReceiver contract interaction methods
  async depositToContract(amountInCHZ) {
    if (!this.chilizReceiverService) {
      throw new Error('ChilizReceiver service not initialized');
    }
    
    console.log(`💰 Depositing ${amountInCHZ} CHZ to ChilizReceiver contract...`);
    return await this.chilizReceiverService.deposit(amountInCHZ);
  }

  async requestWithdrawalFromContract(amountInCHZ) {
    if (!this.chilizReceiverService) {
      throw new Error('ChilizReceiver service not initialized');
    }
    
    console.log(`📤 Requesting withdrawal of ${amountInCHZ} CHZ from contract...`);
    return await this.chilizReceiverService.requestWithdrawal(amountInCHZ);
  }

  async claimWithdrawalFromContract() {
    if (!this.chilizReceiverService) {
      throw new Error('ChilizReceiver service not initialized');
    }
    
    console.log(`🎯 Claiming withdrawal from contract...`);
    return await this.chilizReceiverService.claimWithdrawal();
  }
}

module.exports = ChilizService;
