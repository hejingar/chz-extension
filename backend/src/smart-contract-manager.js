const { ethers } = require('ethers');
const EventEmitter = require('events');

class SmartContractManager extends EventEmitter {
  constructor(chilizConnection, contractAddress, contractABI) {
    super();
    this.connection = chilizConnection;
    this.contractAddress = contractAddress;
    this.contractABI = contractABI;
    this.contract = null;
    this.eventFilters = new Map();
  }

  async initialize() {
    try {
      // Initialize contract instance
      this.contract = new ethers.Contract(
        this.contractAddress,
        this.contractABI,
        this.connection.wallet
      );

      console.log(`Smart contract initialized at: ${this.contractAddress}`);
      
      // Set up event listeners
      this.setupEventListeners();
      
      return true;
    } catch (error) {
      console.error('Failed to initialize smart contract:', error);
      throw error;
    }
  }

  setupEventListeners() {
    // Listen for all events from the contract
    this.contract.on('*', (event) => {
      console.log('Contract event detected:', event);
      this.handleContractEvent(event);
    });

    // Set up specific event filters
    this.setupCommonEventFilters();
  }

  setupCommonEventFilters() {
    // Example event filters - adjust based on your contract
    const commonEvents = [
      'Transfer',
      'Approval',
      'Stake',
      'Unstake',
      'Reward',
      'Deposit',
      'Withdrawal'
    ];

    commonEvents.forEach(eventName => {
      try {
        const filter = this.contract.filters[eventName]();
        this.eventFilters.set(eventName, filter);
        
        // Listen for specific events
        this.contract.on(filter, (...args) => {
          const event = args[args.length - 1]; // Last argument is the event object
          this.emit(eventName.toLowerCase(), {
            eventName,
            args: args.slice(0, -1),
            event,
            transactionHash: event.transactionHash,
            blockNumber: event.blockNumber
          });
        });
      } catch (error) {
        // Event might not exist in contract, skip silently
      }
    });
  }

  handleContractEvent(event) {
    // Emit a general contract event
    this.emit('contractEvent', {
      event,
      contractAddress: this.contractAddress,
      timestamp: new Date().toISOString()
    });

    // Process specific event types
    if (event.fragment) {
      const eventName = event.fragment.name;
      console.log(`Contract event: ${eventName}`);
      
      // Handle specific business logic based on event type
      this.processEventForBusinessLogic(eventName, event);
    }
  }

  processEventForBusinessLogic(eventName, event) {
    switch (eventName.toLowerCase()) {
      case 'stake':
        this.handleStakeEvent(event);
        break;
      case 'unstake':
        this.handleUnstakeEvent(event);
        break;
      case 'reward':
        this.handleRewardEvent(event);
        break;
      default:
        console.log(`Unhandled event type: ${eventName}`);
    }
  }

  handleStakeEvent(event) {
    console.log('Processing stake event:', event);
    // Implement stake-specific logic
    this.emit('stakeProcessed', event);
  }

  handleUnstakeEvent(event) {
    console.log('Processing unstake event:', event);
    // Implement unstake-specific logic
    this.emit('unstakeProcessed', event);
  }

  handleRewardEvent(event) {
    console.log('Processing reward event:', event);
    // Implement reward-specific logic
    this.emit('rewardProcessed', event);
  }

  // Smart contract interaction methods
  async stakeTokens(amount, recipient = null) {
    try {
      const stakeAmount = ethers.parseEther(amount.toString());
      
      let tx;
      if (recipient) {
        tx = await this.contract.stake(stakeAmount, recipient);
      } else {
        tx = await this.contract.stake(stakeAmount);
      }

      console.log(`Stake transaction sent: ${tx.hash}`);
      const receipt = await tx.wait();
      
      return {
        success: true,
        transactionHash: tx.hash,
        receipt,
        amount: amount
      };
    } catch (error) {
      console.error('Error staking tokens:', error);
      throw error;
    }
  }

  async unstakeTokens(amount) {
    try {
      const unstakeAmount = ethers.parseEther(amount.toString());
      const tx = await this.contract.unstake(unstakeAmount);

      console.log(`Unstake transaction sent: ${tx.hash}`);
      const receipt = await tx.wait();
      
      return {
        success: true,
        transactionHash: tx.hash,
        receipt,
        amount: amount
      };
    } catch (error) {
      console.error('Error unstaking tokens:', error);
      throw error;
    }
  }

  async getStakeBalance(address = null) {
    try {
      const targetAddress = address || this.connection.wallet.address;
      const balance = await this.contract.getStakeBalance(targetAddress);
      return ethers.formatEther(balance);
    } catch (error) {
      console.error('Error getting stake balance:', error);
      throw error;
    }
  }

  async getRewards(address = null) {
    try {
      const targetAddress = address || this.connection.wallet.address;
      const rewards = await this.contract.getRewards(targetAddress);
      return ethers.formatEther(rewards);
    } catch (error) {
      console.error('Error getting rewards:', error);
      throw error;
    }
  }

  async claimRewards() {
    try {
      const tx = await this.contract.claimRewards();
      console.log(`Claim rewards transaction sent: ${tx.hash}`);
      
      const receipt = await tx.wait();
      return {
        success: true,
        transactionHash: tx.hash,
        receipt
      };
    } catch (error) {
      console.error('Error claiming rewards:', error);
      throw error;
    }
  }

  // Generic contract method caller
  async callContractMethod(methodName, args = [], options = {}) {
    try {
      if (!this.contract[methodName]) {
        throw new Error(`Method ${methodName} not found in contract`);
      }

      const tx = await this.contract[methodName](...args, options);
      
      // If it's a view function, return the result directly
      if (typeof tx === 'string' || typeof tx === 'bigint' || typeof tx === 'number') {
        return tx;
      }

      // If it's a transaction, wait for confirmation
      console.log(`Contract method ${methodName} transaction sent: ${tx.hash}`);
      const receipt = await tx.wait();
      
      return {
        success: true,
        transactionHash: tx.hash,
        receipt
      };
    } catch (error) {
      console.error(`Error calling contract method ${methodName}:`, error);
      throw error;
    }
  }

  // Payment method for paying back transaction initiators
  async paybackInitiator(initiatorAddress, amount, reason = '') {
    try {
      // This could be a direct transfer or a contract method call
      const paybackAmount = ethers.parseEther(amount.toString());
      
      const tx = await this.connection.sendTransaction(
        initiatorAddress,
        amount,
        '0x' // Simple transfer
      );

      console.log(`Payback sent to ${initiatorAddress}: ${amount} CHZ`);
      console.log(`Reason: ${reason}`);
      
      this.emit('paybackSent', {
        recipient: initiatorAddress,
        amount,
        reason,
        transactionHash: tx.hash
      });

      return tx;
    } catch (error) {
      console.error('Error sending payback:', error);
      throw error;
    }
  }

  // Get past events
  async getPastEvents(eventName, fromBlock = 0, toBlock = 'latest') {
    try {
      const filter = this.contract.filters[eventName]();
      const events = await this.contract.queryFilter(filter, fromBlock, toBlock);
      
      return events.map(event => ({
        eventName,
        args: event.args,
        transactionHash: event.transactionHash,
        blockNumber: event.blockNumber,
        address: event.address
      }));
    } catch (error) {
      console.error(`Error getting past events for ${eventName}:`, error);
      throw error;
    }
  }
}

module.exports = SmartContractManager;
