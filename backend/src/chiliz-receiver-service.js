const { ethers } = require('ethers');
const EventEmitter = require('events');
const StakingService = require('./staking-service');

class ChilizReceiverService extends EventEmitter {
  constructor(chilizConnection, contractConfig) {
    super();
    this.connection = chilizConnection;
    this.contractAddress = contractConfig.address;
    this.contractABI = contractConfig.abi;
    this.contract = null;
    this.stakingService = null;
    this.eventListeners = new Map();
    this.isInitialized = false;
    this.pendingWithdrawals = new Map(); // Track withdrawal requests
  }

  async initialize() {
    try {
      if (!this.connection.wallet) {
        throw new Error('Wallet not initialized in ChilizConnection');
      }

      console.log('🏗️ Initializing ChilizReceiver smart contract service...');
      console.log(`📋 Contract Address: ${this.contractAddress}`);

      // Create contract instance with signer for write operations
      this.contract = new ethers.Contract(
        this.contractAddress,
        this.contractABI,
        this.connection.wallet // Use wallet as signer for transactions
      );

      // Verify contract owner
      const owner = await this.contract.owner();
      const walletAddress = this.connection.wallet.address;
      
      console.log(`👤 Contract Owner: ${owner}`);
      console.log(`💼 Wallet Address: ${walletAddress}`);
      
      const isOwner = owner.toLowerCase() === walletAddress.toLowerCase();
      console.log(`🔑 Is Wallet Owner: ${isOwner ? '✅ YES' : '❌ NO'}`);

      if (!isOwner) {
        console.warn('⚠️ WARNING: Wallet is not the contract owner. depositBack() will fail.');
      }

      // Initialize staking service
      try {
        this.stakingService = new StakingService();
        console.log('🎯 Staking service initialized');
      } catch (error) {
        console.error('❌ Failed to initialize staking service:', error);
        console.warn('⚠️ Continuing without staking service - staking operations will be disabled');
      }

      // Set up event listeners
      await this.setupEventListeners();

      // Get initial contract state
      await this.logContractState();

      // Start event statistics logging
      this.logEventStats();

      // Test event listening capability
      await this.testEventListening();

      this.isInitialized = true;
      console.log('✅ ChilizReceiver service initialized successfully');
      console.log('🎧 Ready to receive and process smart contract events!\n');

      return true;
    } catch (error) {
      console.error('❌ Failed to initialize ChilizReceiver service:', error);
      throw error;
    }
  }

  async setupEventListeners() {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    console.log('👂 Setting up smart contract event listeners...');
    console.log(`🎯 Contract Address: ${this.contractAddress}`);
    console.log(`🌐 Provider Type: ${this.connection.wsProvider ? 'WebSocket' : 'HTTP'}`);

    try {
      // Use WebSocket provider for real-time events if available
      const provider = this.connection.wsProvider || this.connection.httpProvider;
      const contractForEvents = new ethers.Contract(
        this.contractAddress,
        this.contractABI,
        provider
      );

      console.log('🔍 Setting up event filters...');
      console.log('   ➤ Listening for: Deposit, WithdrawalRequested, ClaimRequested');
      console.log('   ➤ Starting from latest block...\n');

      // Listen for Deposit events
      contractForEvents.on('Deposit', async (amount, event) => {
        console.log('\n�🚨🚨 DEPOSIT EVENT RECEIVED! 🚨🚨🚨');
        console.log('═══════════════════════════════════════');
        console.log('📢 Event Type: DEPOSIT');
        console.log(`💰 Amount (Wei): ${amount.toString()}`);
        console.log(`💰 Amount (CHZ): ${ethers.formatEther(amount)} CHZ`);
        console.log(`🔗 Transaction Hash: ${event.transactionHash}`);
        console.log(`🧱 Block Number: ${event.blockNumber}`);
        console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
        console.log(`📍 Event Log Index: ${event.logIndex}`);
        console.log(`🏷️  Topics: ${JSON.stringify(event.topics)}`);
        console.log('═══════════════════════════════════════\n');

        if (this.stakingService) {
          try {
            console.log('🎯 Starting staking process...');
            const amountInChz = ethers.formatEther(amount);
            const delegatorAddr = this.connection.wallet.address;
            console.log(`   ➤ Delegator Address: ${delegatorAddr}`);
            console.log(`   ➤ Amount to Stake: ${amountInChz} CHZ`);
            
            await this.stakingService.stakeChz(amountInChz, delegatorAddr);
            console.log(`✅ Successfully staked ${amountInChz} CHZ`);
          } catch (error) {
            console.error('❌ Failed to stake CHZ:', error);
            console.error('   Error details:', error.message);
          }
        } else {
          console.warn('⚠️ Staking service not available - skipping stake operation');
        }

        // Emit our own event for external handlers
        this.emit('deposit', {
          amount: amount.toString(),
          amountFormatted: ethers.formatEther(amount),
          transactionHash: event.transactionHash,
          blockNumber: event.blockNumber,
          timestamp: Date.now()
        });
        console.log('📡 Emitted internal deposit event\n');
      });

      // Listen for WithdrawalRequested events
      contractForEvents.on('WithdrawalRequested', async (amount, event) => {
        console.log('\n�🚨🚨 WITHDRAWAL REQUESTED EVENT RECEIVED! 🚨🚨🚨');
        console.log('═══════════════════════════════════════');
        console.log('📢 Event Type: WITHDRAWAL REQUESTED');
        console.log(`💰 Amount (Wei): ${amount.toString()}`);
        console.log(`💰 Amount (CHZ): ${ethers.formatEther(amount)} CHZ`);
        console.log(`🔗 Transaction Hash: ${event.transactionHash}`);
        console.log(`🧱 Block Number: ${event.blockNumber}`);
        console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
        console.log(`📍 Event Log Index: ${event.logIndex}`);
        console.log(`🏷️  Topics: ${JSON.stringify(event.topics)}`);
        console.log('═══════════════════════════════════════\n');

        if (this.stakingService) {
          try {
            console.log('🎯 Starting unstaking process...');
            const amountInChz = ethers.formatEther(amount);
            const fundAddr = this.connection.wallet.address;
            console.log(`   ➤ Fund Address: ${fundAddr}`);
            console.log(`   ➤ Amount to Unstake: ${amountInChz} CHZ`);
            
            await this.stakingService.unstakeChz(fundAddr, amountInChz);
            console.log(`✅ Successfully unstaked ${amountInChz} CHZ`);
          } catch (error) {
            console.error('❌ Failed to unstake CHZ:', error);
            console.error('   Error details:', error.message);
          }
        } else {
          console.warn('⚠️ Staking service not available - skipping unstake operation');
        }

        // Emit our own event for external handlers
        this.emit('withdrawalRequested', {
          amount: amount.toString(),
          amountFormatted: ethers.formatEther(amount),
          transactionHash: event.transactionHash,
          blockNumber: event.blockNumber,
          timestamp: Date.now()
        });
        console.log('📡 Emitted internal withdrawalRequested event\n');
      });

      // Listen for ClaimRequested events
      contractForEvents.on('ClaimRequested', async (user, amount, event) => {
        console.log('\n�🚨🚨 CLAIM REQUESTED EVENT RECEIVED! 🚨🚨🚨');
        console.log('═══════════════════════════════════════');
        console.log('📢 Event Type: CLAIM REQUESTED');
        console.log(`👤 User Address: ${user}`);
        console.log(`💰 Amount (Wei): ${amount.toString()}`);
        console.log(`💰 Amount (CHZ): ${ethers.formatEther(amount)} CHZ`);
        console.log(`🔗 Transaction Hash: ${event.transactionHash}`);
        console.log(`🧱 Block Number: ${event.blockNumber}`);
        console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
        console.log(`📍 Event Log Index: ${event.logIndex}`);
        console.log(`🏷️  Topics: ${JSON.stringify(event.topics)}`);
        console.log('═══════════════════════════════════════\n');

        if (this.stakingService) {
          try {
            console.log('🎯 Starting claim process...');
            console.log(`   ➤ Claiming rewards for: ${user}`);
            
            // Claim rewards and send amount to user
            await this.stakingService.claimRewards(user);
            console.log(`✅ Successfully claimed rewards for ${user}`);
            
            console.log('💸 Starting CHZ transfer to user...');
            console.log(`   ➤ Sending ${ethers.formatEther(amount)} CHZ to ${user}`);
            
            // Send the claimed amount to the user
            const tx = await this.connection.wallet.sendTransaction({
              to: user,
              value: amount,
              gasLimit: 21000
            });
            console.log(`� Transfer transaction sent: ${tx.hash}`);
            console.log('⏳ Waiting for transfer confirmation...');
            
            await tx.wait();
            console.log(`✅ Transfer confirmed! Sent ${ethers.formatEther(amount)} CHZ to ${user}`);
          } catch (error) {
            console.error('❌ Failed to claim and send CHZ:', error);
            console.error('   Error details:', error.message);
          }
        } else {
          console.warn('⚠️ Staking service not available - skipping claim operation');
        }

        // Emit our own event for external handlers
        this.emit('claimRequested', {
          user: user,
          amount: amount.toString(),
          amountFormatted: ethers.formatEther(amount),
          transactionHash: event.transactionHash,
          blockNumber: event.blockNumber,
          timestamp: Date.now()
        });
        console.log('📡 Emitted internal claimRequested event\n');
      });

      // Store listener reference for cleanup
      this.eventListeners.set('ContractEvents', contractForEvents);

      console.log('✅ Event listeners configured successfully');
      console.log('🎧 Backend is now listening for smart contract events...\n');
    } catch (error) {
      console.error('❌ Error setting up event listeners:', error);
      throw error;
    }
  }

  shouldAutoDepositBack() {
    // Configuration for automatic depositBack
    // Can be made configurable via environment variables
    return process.env.AUTO_DEPOSIT_BACK === 'true' || true; // Default to true
  }

  async executeDepositBack(withdrawalData) {
    try {
      console.log('🔄 Executing automatic depositBack...');
      console.log(`💰 Amount to deposit back: ${withdrawalData.amountFormatted} CHZ`);

      // Check owner wallet balance
      const ownerBalance = await this.connection.httpProvider.getBalance(this.connection.wallet.address);
      const ownerBalanceFormatted = ethers.formatEther(ownerBalance);
      console.log(`� Owner wallet balance: ${ownerBalanceFormatted} CHZ`);

      const requiredAmount = withdrawalData.amount;
      
      // Check if we have enough funds
      if (ownerBalance < requiredAmount) {
        console.log(`❌ Insufficient owner balance for depositBack`);
        console.log(`   Required: ${withdrawalData.amountFormatted} CHZ`);
        console.log(`   Available: ${ownerBalanceFormatted} CHZ`);
        
        this.emit('depositBackFailed', {
          ...withdrawalData,
          reason: 'Insufficient owner balance',
          required: withdrawalData.amountFormatted,
          available: ownerBalanceFormatted
        });
        
        return {
          success: false,
          reason: 'Insufficient owner balance',
          required: withdrawalData.amountFormatted,
          available: ownerBalanceFormatted
        };
      }

      // Estimate gas for depositBack transaction
      const gasEstimate = await this.contract.depositBack.estimateGas({ value: requiredAmount });
      const feeData = await this.connection.httpProvider.getFeeData();
      const gasCost = gasEstimate * feeData.gasPrice;
      
      console.log(`⛽ Estimated gas cost: ${ethers.formatEther(gasCost)} CHZ`);
      
      // Check if we have enough funds including gas
      const totalRequired = requiredAmount + gasCost;
      if (ownerBalance < totalRequired) {
        console.log(`❌ Insufficient balance including gas costs`);
        console.log(`   Total required: ${ethers.formatEther(totalRequired)} CHZ`);
        console.log(`   Available: ${ownerBalanceFormatted} CHZ`);
        
        this.emit('depositBackFailed', {
          ...withdrawalData,
          reason: 'Insufficient balance including gas',
          totalRequired: ethers.formatEther(totalRequired),
          available: ownerBalanceFormatted
        });
        
        return {
          success: false,
          reason: 'Insufficient balance including gas',
          totalRequired: ethers.formatEther(totalRequired),
          available: ownerBalanceFormatted
        };
      }

      // Execute depositBack transaction
      console.log(`📤 Calling depositBack with ${withdrawalData.amountFormatted} CHZ...`);
      
      const tx = await this.contract.depositBack({
        value: requiredAmount,
        gasLimit: gasEstimate + 50000n // Add buffer
      });

      console.log(`📤 DepositBack transaction sent: ${tx.hash}`);
      console.log('⏳ Waiting for confirmation...');

      const receipt = await tx.wait();
      console.log(`✅ DepositBack confirmed in block: ${receipt.blockNumber}`);

      // Emit success event
      this.emit('depositBackExecuted', {
        transactionHash: tx.hash,
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed.toString(),
        amountDeposited: withdrawalData.amountFormatted,
        triggeredBy: withdrawalData,
        timestamp: Date.now()
      });

      // Log new balances
      await this.logContractState();

      console.log(`✅ Successfully processed withdrawal request for ${withdrawalData.user}`);
      console.log(`💰 Amount deposited back: ${withdrawalData.amountFormatted} CHZ`);

      return {
        success: true,
        transactionHash: tx.hash,
        receipt: receipt,
        amountDeposited: withdrawalData.amountFormatted
      };

    } catch (error) {
      console.error('❌ Error executing depositBack:', error);
      
      // Emit error event
      this.emit('depositBackError', {
        error: error.message,
        triggeredBy: withdrawalData,
        timestamp: Date.now()
      });

      throw error;
    }
  }

  // Smart contract function wrappers for native CHZ version
  async deposit(amountInCHZ) {
    try {
      console.log(`💰 Depositing ${amountInCHZ} CHZ to contract (native CHZ)...`);
      
      const amountWei = ethers.parseEther(amountInCHZ.toString());
      
      // Check if we have enough native CHZ
      const walletBalance = await this.connection.httpProvider.getBalance(this.connection.wallet.address);
      const walletBalanceFormatted = ethers.formatEther(walletBalance);
      
      console.log(`💼 Your wallet balance: ${walletBalanceFormatted} CHZ`);
      
      if (parseFloat(walletBalanceFormatted) < parseFloat(amountInCHZ) + 0.001) { // +0.001 for gas
        throw new Error(`Insufficient native CHZ balance. You have ${walletBalanceFormatted} CHZ but need ${amountInCHZ} CHZ + gas`);
      }
      
      // Check if the contract has a deposit function that accepts value
      // Since your contract now works with native CHZ, we need to send CHZ with the transaction
      
      console.log(`📤 Sending ${amountInCHZ} CHZ to contract...`);
      
      // For native CHZ contracts, we either:
      // 1. Call a deposit function with { value: amount }
      // 2. Or send directly to the contract if it has a receive() function
      
      let tx;
      try {
        // Try calling deposit function with value (if it exists and accepts native CHZ)
        const gasEstimate = await this.contract.deposit.estimateGas(amountWei, { value: amountWei });
        console.log(`⛽ Estimated Gas: ${gasEstimate.toString()}`);
        
        tx = await this.contract.deposit(amountWei, {
          value: amountWei,
          gasLimit: gasEstimate + 10000n
        });
      } catch (depositFunctionError) {
        console.log(`⚠️ deposit(uint256) function might not accept native CHZ, trying direct transfer...`);
        
        // Try direct transfer to contract (using receive() function)
        try {
          const gasEstimate = await this.connection.wallet.estimateGas({
            to: this.contractAddress,
            value: amountWei
          });
          
          console.log(`⛽ Estimated Gas for direct transfer: ${gasEstimate.toString()}`);
          
          tx = await this.connection.wallet.sendTransaction({
            to: this.contractAddress,
            value: amountWei,
            gasLimit: gasEstimate + 10000n
          });
        } catch (directTransferError) {
          console.error('❌ Both deposit function and direct transfer failed');
          console.error('Deposit function error:', depositFunctionError.message);
          console.error('Direct transfer error:', directTransferError.message);
          throw new Error('Unable to deposit: neither deposit function nor direct transfer worked');
        }
      }
      
      console.log(`📤 Deposit transaction sent: ${tx.hash}`);
      console.log('⏳ Waiting for confirmation...');
      
      const receipt = await tx.wait();
      console.log(`✅ Deposit confirmed in block: ${receipt.blockNumber}`);
      
      // Log updated state
      await this.logContractState();
      
      return {
        success: true,
        transactionHash: tx.hash,
        receipt: receipt,
        amount: amountInCHZ
      };
      
    } catch (error) {
      console.error(`❌ Error depositing ${amountInCHZ} CHZ:`, error);
      throw error;
    }
  }

  async requestWithdrawal(amountInCHZ) {
    try {
      console.log(`📤 Requesting withdrawal of ${amountInCHZ} CHZ...`);
      
      const amountWei = ethers.parseEther(amountInCHZ.toString());
      
      // Check user's deposit first
      const userDeposit = await this.getUserDepositAmount(this.connection.wallet.address);
      console.log(`👤 Your Current Deposit: ${userDeposit} CHZ`);
      
      if (parseFloat(userDeposit) < parseFloat(amountInCHZ)) {
        throw new Error(`Insufficient deposit balance. You have ${userDeposit} CHZ but trying to withdraw ${amountInCHZ} CHZ`);
      }
      
      // Check if user already has a pending withdrawal
      const currentPending = await this.getUserPendingWithdrawal(this.connection.wallet.address);
      if (parseFloat(currentPending) > 0) {
        throw new Error(`You already have a pending withdrawal of ${currentPending} CHZ`);
      }
      
      const gasEstimate = await this.contract.requestWithdrawal.estimateGas(amountWei);
      console.log(`⛽ Estimated Gas: ${gasEstimate.toString()}`);
      
      const tx = await this.contract.requestWithdrawal(amountWei, {
        gasLimit: gasEstimate + 10000n
      });
      
      console.log(`📤 Withdrawal request transaction sent: ${tx.hash}`);
      console.log('⏳ Waiting for confirmation...');
      
      const receipt = await tx.wait();
      console.log(`✅ Withdrawal request confirmed in block: ${receipt.blockNumber}`);
      
      // The WithdrawalRequested event should be automatically detected by our listener
      console.log('👂 Listening for WithdrawalRequested event...');
      
      // Log updated state
      await this.logContractState();
      
      return {
        success: true,
        transactionHash: tx.hash,
        receipt: receipt,
        amount: amountInCHZ
      };
      
    } catch (error) {
      console.error(`❌ Error requesting withdrawal of ${amountInCHZ} CHZ:`, error);
      throw error;
    }
  }

  async claimWithdrawal() {
    try {
      console.log(`🎯 Claiming withdrawal...`);
      
      // Check if user has a pending withdrawal
      const userPending = await this.getUserPendingWithdrawal(this.connection.wallet.address);
      if (parseFloat(userPending) === 0) {
        throw new Error('No pending withdrawal to claim');
      }
      
      // Check time to claim
      const timeToClaim = await this.getUserTimeToClaim(this.connection.wallet.address);
      const fourDaysInSeconds = 4 * 24 * 60 * 60; // 4 days
      
      if (parseInt(timeToClaim) < fourDaysInSeconds) {
        const remainingTime = fourDaysInSeconds - parseInt(timeToClaim);
        const remainingHours = Math.floor(remainingTime / 3600);
        const remainingMinutes = Math.floor((remainingTime % 3600) / 60);
        throw new Error(`Must wait ${remainingHours}h ${remainingMinutes}m more before claiming`);
      }
      
      console.log(`✅ Ready to claim ${userPending} CHZ`);
      
      const gasEstimate = await this.contract.claimWithdrawal.estimateGas();
      console.log(`⛽ Estimated Gas: ${gasEstimate.toString()}`);
      
      const tx = await this.contract.claimWithdrawal({
        gasLimit: gasEstimate + 10000n
      });
      
      console.log(`📤 Claim withdrawal transaction sent: ${tx.hash}`);
      console.log('⏳ Waiting for confirmation...');
      
      const receipt = await tx.wait();
      console.log(`✅ Withdrawal claimed in block: ${receipt.blockNumber}`);
      
      // Log updated state
      await this.logContractState();
      
      return {
        success: true,
        transactionHash: tx.hash,
        receipt: receipt,
        amount: userPending
      };
      
    } catch (error) {
      console.error(`❌ Error claiming withdrawal:`, error);
      throw error;
    }
  }

  async getContractBalance() {
    try {
      // Try the contractBalance() function first
      try {
        const balance = await this.contract.contractBalance();
        return ethers.formatEther(balance);
      } catch (contractBalanceError) {
        // If contractBalance() doesn't exist, get the native CHZ balance of the contract
        console.log('⚠️ contractBalance() function not found, using native balance');
        const balance = await this.connection.httpProvider.getBalance(this.contractAddress);
        return ethers.formatEther(balance);
      }
    } catch (error) {
      console.error('Error getting contract balance:', error);
      return '0';
    }
  }

  async getUserDepositAmount(userAddress) {
    try {
      const amount = await this.contract.getAmountDeposit(userAddress);
      return ethers.formatEther(amount);
    } catch (error) {
      console.error('Error getting user deposit amount:', error);
      return '0';
    }
  }

  async getUserPendingWithdrawal(userAddress) {
    try {
      const amount = await this.contract.getPendingWithdrawAmount(userAddress);
      return ethers.formatEther(amount);
    } catch (error) {
      console.error('Error getting user pending withdrawal:', error);
      return '0';
    }
  }

  async getUserTimeToClaim(userAddress) {
    try {
      const time = await this.contract.getTimeToClaim(userAddress);
      return time.toString();
    } catch (error) {
      console.error('Error getting user time to claim:', error);
      return '0';
    }
  }

  async logContractState() {
    try {
      console.log('📊 Contract State Summary:');
      const contractBalance = await this.getContractBalance();
      console.log(`   💰 Contract Balance: ${contractBalance} CHZ`);
      
      const walletAddress = this.connection.wallet.address;
      const userDeposit = await this.getUserDepositAmount(walletAddress);
      const userPending = await this.getUserPendingWithdrawal(walletAddress);
      
      console.log(`   👤 Your Deposit: ${userDeposit} CHZ`);
      console.log(`   ⏳ Your Pending: ${userPending} CHZ`);
    } catch (error) {
      console.error('Error logging contract state:', error);
    }
  }

  getPendingWithdrawals() {
    return Array.from(this.pendingWithdrawals.values());
  }

  clearPendingWithdrawal(userAddress) {
    this.pendingWithdrawals.delete(userAddress.toLowerCase());
  }

  async disconnect() {
    console.log('🔌 Disconnecting ChilizReceiver service...');
    
    // Remove all event listeners
    for (const [eventName, contract] of this.eventListeners) {
      try {
        contract.removeAllListeners(eventName);
        console.log(`✅ Removed ${eventName} listener`);
      } catch (error) {
        console.error(`❌ Error removing ${eventName} listener:`, error);
      }
    }
    
    this.eventListeners.clear();
    this.pendingWithdrawals.clear();
    this.isInitialized = false;
    
    console.log('✅ ChilizReceiver service disconnected');
  }

  // Test helper functions for event monitoring
  async testEventListening() {
    console.log('\n🧪 TESTING EVENT LISTENING CAPABILITY 🧪');
    console.log('═══════════════════════════════════════');
    console.log(`🎯 Contract Address: ${this.contractAddress}`);
    console.log(`🔗 Chain ID: ${this.connection.chainId || 'Unknown'}`);
    console.log(`👤 Wallet Address: ${this.connection.wallet?.address || 'Unknown'}`);
    
    try {
      // Test if we can get the latest block
      const latestBlock = await this.connection.httpProvider.getBlockNumber();
      console.log(`🧱 Latest Block: ${latestBlock}`);
      
      // Test contract connection
      const contractBalance = await this.getContractBalance();
      console.log(`💰 Contract Balance: ${contractBalance} CHZ`);
      
      // Check if contract is responding
      try {
        const owner = await this.contract.owner();
        console.log(`👑 Contract Owner: ${owner}`);
      } catch (ownerError) {
        console.warn('⚠️ Could not get contract owner:', ownerError.message);
      }
      
      console.log('✅ Event listening setup appears to be working');
      console.log('🎧 Waiting for events... Try interacting with the contract!');
      console.log('═══════════════════════════════════════\n');
      
      return true;
    } catch (error) {
      console.error('❌ Event listening test failed:', error);
      return false;
    }
  }

  // Helper to log when events are detected
  logEventStats() {
    const stats = {
      deposits: 0,
      withdrawalRequests: 0,
      claimRequests: 0
    };
    
    this.on('deposit', () => stats.deposits++);
    this.on('withdrawalRequested', () => stats.withdrawalRequests++);
    this.on('claimRequested', () => stats.claimRequests++);
    
    // Log stats every 30 seconds
    setInterval(() => {
      if (stats.deposits > 0 || stats.withdrawalRequests > 0 || stats.claimRequests > 0) {
        console.log('\n📊 EVENT STATISTICS 📊');
        console.log(`   💰 Deposits: ${stats.deposits}`);
        console.log(`   📤 Withdrawal Requests: ${stats.withdrawalRequests}`);
        console.log(`   🎯 Claim Requests: ${stats.claimRequests}\n`);
      }
    }, 30000);
  }
}

module.exports = ChilizReceiverService;
