const EventEmitter = require('events');
const { ethers } = require('ethers');

class WalletManager extends EventEmitter {
  constructor(chilizConnection) {
    super();
    this.connection = chilizConnection;
    this.transactions = new Map();
    this.pendingTransactions = new Set();
  }

  async getBalance() {
    try {
      const balance = await this.connection.getBalance();
      return {
        address: this.connection.wallet.address,
        balance: balance,
        unit: 'CHZ'
      };
    } catch (error) {
      console.error('Error getting wallet balance:', error);
      throw error;
    }
  }

  async getBalanceOf(address) {
    try {
      const balance = await this.connection.getBalance(address);
      return {
        address: address,
        balance: balance,
        unit: 'CHZ'
      };
    } catch (error) {
      console.error(`Error getting balance for ${address}:`, error);
      throw error;
    }
  }

  async sendPayment(toAddress, amount, memo = '') {
    try {
      console.log(`Sending ${amount} CHZ to ${toAddress}`);
      
      const txId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      this.pendingTransactions.add(txId);

      const tx = await this.connection.sendTransaction(toAddress, amount);
      
      const transaction = {
        id: txId,
        from: this.connection.wallet.address,
        to: toAddress,
        amount: amount,
        memo: memo,
        hash: tx.hash,
        status: 'confirmed',
        timestamp: new Date().toISOString(),
        receipt: tx.receipt
      };

      this.transactions.set(txId, transaction);
      this.pendingTransactions.delete(txId);

      this.emit('paymentSent', transaction);
      
      return transaction;
    } catch (error) {
      console.error('Error sending payment:', error);
      this.emit('paymentFailed', { toAddress, amount, error: error.message });
      throw error;
    }
  }

  async batchPayments(payments) {
    const results = [];
    
    for (const payment of payments) {
      try {
        const result = await this.sendPayment(
          payment.address,
          payment.amount,
          payment.memo || `Batch payment ${payments.indexOf(payment) + 1}`
        );
        results.push({ success: true, ...result });
      } catch (error) {
        results.push({
          success: false,
          address: payment.address,
          amount: payment.amount,
          error: error.message
        });
      }
    }

    this.emit('batchPaymentsCompleted', results);
    return results;
  }

  async createStakeTransaction(amount, contractAddress) {
    try {
      console.log(`Creating stake transaction for ${amount} CHZ`);
      
      // This would typically interact with your staking contract
      const tx = await this.connection.sendTransaction(
        contractAddress,
        amount,
        '0x' // Add actual stake method call data here
      );

      const transaction = {
        type: 'stake',
        amount: amount,
        contract: contractAddress,
        hash: tx.hash,
        status: 'confirmed',
        timestamp: new Date().toISOString(),
        receipt: tx.receipt
      };

      this.emit('stakeTransactionCreated', transaction);
      return transaction;
    } catch (error) {
      console.error('Error creating stake transaction:', error);
      throw error;
    }
  }

  async createUnstakeTransaction(amount, contractAddress) {
    try {
      console.log(`Creating unstake transaction for ${amount} CHZ`);
      
      const tx = await this.connection.sendTransaction(
        contractAddress,
        0, // Usually unstaking doesn't send CHZ
        '0x' // Add actual unstake method call data here
      );

      const transaction = {
        type: 'unstake',
        amount: amount,
        contract: contractAddress,
        hash: tx.hash,
        status: 'confirmed',
        timestamp: new Date().toISOString(),
        receipt: tx.receipt
      };

      this.emit('unstakeTransactionCreated', transaction);
      return transaction;
    } catch (error) {
      console.error('Error creating unstake transaction:', error);
      throw error;
    }
  }

  getTransactionHistory(limit = 50) {
    const allTransactions = Array.from(this.transactions.values());
    return allTransactions
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, limit);
  }

  getTransaction(txId) {
    return this.transactions.get(txId);
  }

  getPendingTransactions() {
    return Array.from(this.pendingTransactions);
  }

  async estimateTransactionFee(toAddress, amount) {
    try {
      const gasPrice = await this.connection.getGasPrice();
      
      // Estimate gas limit based on transaction type
      let gasLimit = 21000; // Default for basic transfer
      
      if (toAddress && amount) {
        try {
          gasLimit = await this.connection.provider.estimateGas({
            to: toAddress,
            value: ethers.parseEther(amount.toString())
          });
        } catch (estimateError) {
          console.warn('Could not estimate gas, using default:', estimateError.message);
          gasLimit = 21000;
        }
      }
      
      return {
        gasPrice: gasPrice.gasPrice,
        gasLimit: gasLimit,
        estimatedFee: gasPrice.gasPrice * gasLimit,
        estimatedFeeInCHZ: ethers.formatEther(gasPrice.gasPrice * gasLimit)
      };
    } catch (error) {
      console.error('Error estimating transaction fee:', error);
      throw error;
    }
  }

  // Automated payback system for transaction initiators
  async setupAutomaticPaybacks(rules) {
    this.paybackRules = rules;
    console.log('Automatic payback rules configured:', rules);
  }

  async processAutomaticPayback(eventData) {
    if (!this.paybackRules) return;

    const { initiator, transactionType, amount } = eventData;
    
    // Find matching rule
    const rule = this.paybackRules.find(r => 
      r.transactionType === transactionType || r.transactionType === 'all'
    );

    if (rule && initiator) {
      try {
        const paybackAmount = this.calculatePaybackAmount(amount, rule);
        
        if (paybackAmount > 0) {
          await this.sendPayment(
            initiator,
            paybackAmount,
            `Automatic payback for ${transactionType}`
          );
          
          console.log(`Automatic payback sent: ${paybackAmount} CHZ to ${initiator}`);
          this.emit('automaticPaybackSent', {
            recipient: initiator,
            amount: paybackAmount,
            type: transactionType,
            rule: rule
          });
        }
      } catch (error) {
        console.error('Error processing automatic payback:', error);
        this.emit('automaticPaybackFailed', { initiator, error: error.message });
      }
    }
  }

  calculatePaybackAmount(originalAmount, rule) {
    switch (rule.type) {
      case 'percentage':
        return (originalAmount * rule.value) / 100;
      case 'fixed':
        return rule.value;
      case 'dynamic':
        return rule.calculator(originalAmount);
      default:
        return 0;
    }
  }

  // Security and monitoring
  async checkWalletSecurity() {
    try {
      const balance = await this.getBalance();
      const pendingCount = this.pendingTransactions.size;
      
      const securityStatus = {
        address: this.connection.wallet.address,
        balance: balance.balance,
        pendingTransactions: pendingCount,
        lastCheck: new Date().toISOString(),
        warnings: []
      };

      // Add security warnings
      if (parseFloat(balance.balance) < 1) {
        securityStatus.warnings.push('Low balance warning');
      }
      
      if (pendingCount > 10) {
        securityStatus.warnings.push('High number of pending transactions');
      }

      this.emit('securityCheck', securityStatus);
      return securityStatus;
    } catch (error) {
      console.error('Error checking wallet security:', error);
      throw error;
    }
  }
}

module.exports = WalletManager;
