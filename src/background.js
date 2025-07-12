/*global chrome*/
import Web3 from 'web3';

// Smart contract configuration
const ROUNDUP_CONTRACT_ADDRESS = '0x1234567890123456789012345678901234567890'; // Replace with your actual contract address
const ROUNDUP_CONTRACT_ABI = [
  {
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

// CHZ Chain configuration
const CHZ_CHAIN_ID = '0x15b3'; // 5555 in hex (CHZ Mainnet)
const CHZ_RPC_URL = 'https://rpc.ankr.com/chiliz';

class RoundUpService {
  constructor() {
    this.web3 = new Web3(CHZ_RPC_URL);
    this.contract = new this.web3.eth.Contract(ROUNDUP_CONTRACT_ABI, ROUNDUP_CONTRACT_ADDRESS);
    this.monitoringTxs = new Set();
    this.init();
  }

  async init() {
    console.log('🎯 RoundUp Service initialized');
    
    // Listen for popup messages
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      this.handleMessage(request, sender, sendResponse);
      return true; // Keep message channel open for async response
    });
  }

  async handleMessage(request, sender, sendResponse) {
    console.log('📨 Background received message:', request);
    
    try {
      switch (request.action) {
        case 'MONITOR_TRANSACTION':
          await this.monitorTransaction(request.txHash, request.userAddress);
          sendResponse({ success: true });
          break;
          
        case 'GET_ROUNDUP_SETTINGS':
          const settings = await this.getRoundUpSettings();
          sendResponse({ success: true, data: settings });
          break;
          
        case 'SET_ROUNDUP_SETTINGS':
          await this.setRoundUpSettings(request.settings);
          sendResponse({ success: true });
          break;
          
        default:
          sendResponse({ success: false, error: 'Unknown action' });
      }
    } catch (error) {
      console.error('❌ Background error:', error);
      sendResponse({ success: false, error: error.message });
    }
  }

  async monitorTransaction(txHash, userAddress) {
    if (this.monitoringTxs.has(txHash)) {
      console.log('⏳ Already monitoring transaction:', txHash);
      return;
    }

    this.monitoringTxs.add(txHash);
    console.log('🔍 Monitoring transaction:', txHash);

    // Poll for transaction confirmation
    const pollInterval = setInterval(async () => {
      try {
        const receipt = await this.web3.eth.getTransactionReceipt(txHash);
        
        if (receipt && receipt.status) {
          console.log('✅ Transaction confirmed:', txHash);
          clearInterval(pollInterval);
          this.monitoringTxs.delete(txHash);
          
          // Trigger round-up deposit
          await this.triggerRoundUpDeposit(userAddress, receipt);
        }
      } catch (error) {
        console.error('❌ Error polling transaction:', error);
        // Continue polling - might be network issue
      }
    }, 3000); // Check every 3 seconds

    // Stop monitoring after 10 minutes
    setTimeout(() => {
      clearInterval(pollInterval);
      this.monitoringTxs.delete(txHash);
      console.log('⏰ Stopped monitoring transaction after timeout:', txHash);
    }, 600000);
  }

  async triggerRoundUpDeposit(userAddress, originalTxReceipt) {
    try {
      const settings = await this.getRoundUpSettings();
      
      if (!settings.enabled) {
        console.log('🚫 Round-up disabled by user');
        return;
      }

      // Calculate round-up amount
      const originalTx = await this.web3.eth.getTransaction(originalTxReceipt.transactionHash);
      const txAmount = this.web3.utils.fromWei(originalTx.value, 'ether');
      const roundUpAmount = this.calculateRoundUp(parseFloat(txAmount), settings.roundUpTo);

      if (roundUpAmount <= 0) {
        console.log('💰 No round-up needed for amount:', txAmount);
        return;
      }

      console.log(`💸 Triggering round-up deposit: ${roundUpAmount} CHZ`);
      
      // Send message to popup to trigger the deposit transaction
      chrome.runtime.sendMessage({
        action: 'TRIGGER_ROUNDUP_DEPOSIT',
        amount: roundUpAmount,
        originalTx: originalTxReceipt.transactionHash
      });

      // Show notification
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.svg',
        title: 'CHZ Round-Up Savings',
        message: `Depositing ${roundUpAmount} CHZ to your savings!`
      });

    } catch (error) {
      console.error('❌ Error triggering round-up deposit:', error);
    }
  }

  calculateRoundUp(amount, roundUpTo) {
    const roundedUp = Math.ceil(amount / roundUpTo) * roundUpTo;
    return Math.max(0, roundedUp - amount);
  }

  async getRoundUpSettings() {
    return new Promise((resolve) => {
      chrome.storage.local.get(['roundUpSettings'], (result) => {
        const defaultSettings = {
          enabled: false,
          roundUpTo: 5, // Round up to nearest 5 CHZ
          maxPerTransaction: 10 // Max 10 CHZ round-up per transaction
        };
        
        resolve(result.roundUpSettings || defaultSettings);
      });
    });
  }

  async setRoundUpSettings(settings) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ roundUpSettings: settings }, () => {
        console.log('💾 Round-up settings saved:', settings);
        resolve();
      });
    });
  }
}

// Initialize the service
new RoundUpService();

console.log('🚀 CHZ Round-Up Background Service loaded'); 