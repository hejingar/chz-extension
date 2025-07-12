const { ethers } = require('ethers');
const EventEmitter = require('events');

class ChilizReceiverService extends EventEmitter {
  constructor(chilizConnection, contractConfig) {
    super();
    this.connection = chilizConnection;
    this.contractAddress = contractConfig.address;
    this.contractABI = contractConfig.abi;
    this.contract = null;
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
        console.warn('⚠️ WARNING: Wallet is not the contract owner. withdrawToStake() will fail.');
      }

      // Set up event listeners
      await this.setupEventListeners();

      // Get initial contract state
      await this.logContractState();

      this.isInitialized = true;
      console.log('✅ ChilizReceiver service initialized successfully');

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

    try {
      // Listen for WithdrawalRequested events
      const withdrawalFilter = this.contract.filters.WithdrawalRequested();
      
      // Use WebSocket provider for real-time events if available
      const provider = this.connection.wsProvider || this.connection.httpProvider;
      const contractForEvents = new ethers.Contract(
        this.contractAddress,
        this.contractABI,
        provider
      );

      // Set up event listener
      contractForEvents.on('WithdrawalRequested', async (user, amount, event) => {
        console.log('📢 WithdrawalRequested Event Detected!');
        console.log(`   User: ${user}`);
        console.log(`   Amount: ${ethers.formatEther(amount)} CHZ`);
        console.log(`   Transaction: ${event.transactionHash}`);
        console.log(`   Block: ${event.blockNumber}`);

        // Store withdrawal request
        const withdrawalData = {
          user: user,
          amount: amount.toString(),
          amountFormatted: ethers.formatEther(amount),
          transactionHash: event.transactionHash,
          blockNumber: event.blockNumber,
          timestamp: Date.now()
        };

        this.pendingWithdrawals.set(user.toLowerCase(), withdrawalData);

        // Emit our own event for external handlers
        this.emit('withdrawalRequested', withdrawalData);

        // Auto-execute withdrawToStake if enabled
        if (this.shouldAutoWithdraw()) {
          await this.executeWithdrawToStake(withdrawalData);
        }
      });

      // Store listener reference for cleanup
      this.eventListeners.set('WithdrawalRequested', contractForEvents);

      console.log('✅ Event listeners configured');
    } catch (error) {
      console.error('❌ Error setting up event listeners:', error);
      throw error;
    }
  }

  shouldAutoWithdraw() {
    // Configuration for automatic withdrawal
    // Can be made configurable via environment variables
    return process.env.AUTO_WITHDRAW_TO_STAKE === 'true' || true; // Default to true
  }

  async executeWithdrawToStake(withdrawalData) {
    try {
      console.log('🔄 Executing automatic withdrawToStake...');

      // Check contract balance first
      const contractBalance = await this.getContractBalance();
      console.log(`💰 Contract Balance: ${contractBalance} CHZ`);

      if (parseFloat(contractBalance) === 0) {
        console.log('⚠️ Contract balance is 0, skipping withdrawToStake');
        return {
          success: false,
          reason: 'No tokens to withdraw',
          contractBalance: contractBalance
        };
      }

      // Estimate gas for the transaction
      const gasEstimate = await this.contract.withdrawToStake.estimateGas();
      console.log(`⛽ Estimated Gas: ${gasEstimate.toString()}`);

      // Execute withdrawToStake
      const tx = await this.contract.withdrawToStake({
        gasLimit: gasEstimate + BigInt(10000) // Add some buffer
      });

      console.log(`📤 withdrawToStake transaction sent: ${tx.hash}`);
      console.log('⏳ Waiting for confirmation...');

      const receipt = await tx.wait();
      console.log(`✅ withdrawToStake confirmed in block: ${receipt.blockNumber}`);

      // Emit success event
      this.emit('withdrawToStakeExecuted', {
        transactionHash: tx.hash,
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed.toString(),
        triggeredBy: withdrawalData,
        timestamp: Date.now()
      });

      // Log new balances
      await this.logContractState();

      return {
        success: true,
        transactionHash: tx.hash,
        receipt: receipt
      };

    } catch (error) {
      console.error('❌ Error executing withdrawToStake:', error);
      
      // Emit error event
      this.emit('withdrawToStakeError', {
        error: error.message,
        triggeredBy: withdrawalData,
        timestamp: Date.now()
      });

      throw error;
    }
  }

  async manualWithdrawToStake() {
    try {
      console.log('🔧 Manual withdrawToStake requested...');
      return await this.executeWithdrawToStake({
        user: 'manual',
        reason: 'Manual execution'
      });
    } catch (error) {
      console.error('❌ Manual withdrawToStake failed:', error);
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
          gasLimit: gasEstimate + BigInt(10000)
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
            gasLimit: gasEstimate + BigInt(10000)
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
        gasLimit: gasEstimate + BigInt(10000)
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
        gasLimit: gasEstimate + BigInt(10000)
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
}

module.exports = ChilizReceiverService;
