/*global chrome*/
import { ethers } from 'ethers';

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

// CHZ Spicy Testnet configuration
const CHZ_SPICY_CHAIN_ID = '0x15b52'; // 88882 in hex (Chiliz Spicy Testnet)
const CHZ_SPICY_RPC_URL = 'https://spicy-rpc.chiliz.com';

class RoundUpService {
  constructor() {
    this.provider = null;
    this.contract = null;
    this.monitoringTxs = new Set();
    this.userAddresses = new Set(); // Track connected user addresses
    this.userNonces = new Map(); // Track nonces for each user
    this.transactionPollingInterval = null;
    this.isMonitoring = false;
    this.init();
  }

  async init() {
    console.log('🎯 RoundUp Service initialized for Chiliz Spicy testnet');
    
    // Initialize providers
    await this.initializeProviders();
    
    // Listen for popup messages
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      this.handleMessage(request, sender, sendResponse);
      return true; // Keep message channel open for async response
    });

    // Start transaction monitoring
    this.startTransactionMonitoring();
  }

  async initializeProviders() {
    try {
      // HTTP provider for RPC calls
      this.provider = new ethers.providers.JsonRpcProvider(CHZ_SPICY_RPC_URL);
      
      // Test the connection
      const network = await this.provider.getNetwork();
      console.log('✅ Connected to network:', network.name, 'Chain ID:', network.chainId);
      
      // Initialize contract
      this.contract = new ethers.Contract(
        ROUNDUP_CONTRACT_ADDRESS, 
        ROUNDUP_CONTRACT_ABI, 
        this.provider
      );
      
      console.log('✅ Provider initialized successfully');
      
    } catch (error) {
      console.error('❌ Failed to initialize providers:', error);
      throw error;
    }
  }

  async handleMessage(request, sender, sendResponse) {
    console.log('📨 Background received message:', request);
    
    try {
      switch (request.action) {
        case 'MONITOR_TRANSACTION':
          await this.monitorTransaction(request.txHash, request.userAddress);
          sendResponse({ success: true });
          break;
          
        case 'REGISTER_USER_ADDRESS':
          await this.registerUserAddress(request.userAddress);
          sendResponse({ success: true });
          break;
          
        case 'UNREGISTER_USER_ADDRESS':
          await this.unregisterUserAddress(request.userAddress);
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
          
        case 'GET_PENDING_ROUNDUP':
          const pendingRequest = await this.getPendingRoundUpRequest();
          sendResponse({ success: true, data: pendingRequest });
          break;
          
        case 'CONFIRM_ROUNDUP':
          await this.confirmRoundUp(request.userAddress, request.amount);
          sendResponse({ success: true });
          break;
          
        case 'DECLINE_ROUNDUP':
          await this.declineRoundUp();
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

  async registerUserAddress(address) {
    if (address) {
      const normalizedAddress = address.toLowerCase();
      this.userAddresses.add(normalizedAddress);
      
      // Get initial nonce for this address
      try {
        const nonce = await this.provider.getTransactionCount(normalizedAddress, 'latest');
        this.userNonces.set(normalizedAddress, nonce);
        console.log('👤 Registered user address:', address, 'with nonce:', nonce);
      } catch (error) {
        console.error('❌ Failed to get initial nonce for', address, ':', error);
      }
    }
  }

  async unregisterUserAddress(address) {
    if (address) {
      const normalizedAddress = address.toLowerCase();
      this.userAddresses.delete(normalizedAddress);
      this.userNonces.delete(normalizedAddress);
      console.log('👤 Unregistered user address:', address);
    }
  }

  startTransactionMonitoring() {
    console.log('🔄 Starting optimized transaction monitoring');
    
    // Clear any existing interval
    if (this.transactionPollingInterval) {
      clearInterval(this.transactionPollingInterval);
    }

    // Start with immediate check, then poll every 10 seconds
    this.checkForNewTransactions();
    
    this.transactionPollingInterval = setInterval(async () => {
      if (this.userAddresses.size === 0) {
        console.log('📊 No addresses to monitor, skipping check');
        return;
      }
      
      if (this.isMonitoring) {
        console.log('⏳ Still monitoring, skipping this check');
        return;
      }
      
      this.isMonitoring = true;
      try {
        await this.checkForNewTransactions();
      } catch (error) {
        console.error('❌ Error checking for new transactions:', error);
      } finally {
        this.isMonitoring = false;
      }
    }, 10000); // Check every 10 seconds for better responsiveness
    
    console.log('✅ Transaction monitoring started (10-second intervals)');
  }

  async checkForNewTransactions() {
    if (this.userAddresses.size === 0) return;
    
    console.log('🔍 Checking', this.userAddresses.size, 'addresses for new transactions');

    for (const userAddress of this.userAddresses) {
      try {
        // Get the current transaction count
        const currentNonce = await this.provider.getTransactionCount(userAddress, 'latest');
        const lastSeenNonce = this.userNonces.get(userAddress) || 0;
        
        if (currentNonce > lastSeenNonce) {
          console.log('🎯 NEW TRANSACTION DETECTED from', userAddress);
          console.log('📊 Nonce changed from', lastSeenNonce, 'to', currentNonce);
          
          // Update tracked nonce
          this.userNonces.set(userAddress, currentNonce);
          
          // Get recent transactions to find the actual transaction
          await this.processNewTransactions(userAddress, lastSeenNonce, currentNonce);
        } else {
          console.log('✓ No new transactions for', userAddress, '(nonce:', currentNonce, ')');
        }
        
      } catch (error) {
        console.error('❌ Error checking address', userAddress, ':', error);
      }
    }
  }

  async processNewTransactions(userAddress, fromNonce, toNonce) {
    try {
      // Get the latest block to find recent transactions
      const latestBlock = await this.provider.getBlock('latest');
      
      // Check the last few blocks for transactions from this address
      const blocksToCheck = Math.min(5, latestBlock.number); // Check last 5 blocks
      
      for (let i = 0; i < blocksToCheck; i++) {
        const blockNumber = latestBlock.number - i;
        const block = await this.provider.getBlockWithTransactions(blockNumber);
        
        if (block && block.transactions) {
          for (const tx of block.transactions) {
            if (tx.from.toLowerCase() === userAddress.toLowerCase() && 
                tx.nonce >= fromNonce && tx.nonce < toNonce) {
              
              console.log('🔍 Found specific transaction:', tx.hash);
              console.log('🔍 ORIGINAL TX DEBUG: Original transaction value =', ethers.utils.formatEther(tx.value), 'CHZ');
              await this.promptUserForRoundUpFromTx(userAddress, tx);
              return; // Process only the first/most recent transaction
            }
          }
        }
      }
      
      // If we couldn't find the specific transaction, just trigger based on nonce change
      console.log('📊 Triggering round-up based on nonce change (transaction not found in recent blocks)');
      await this.promptUserForRoundUp(userAddress);
      
    } catch (error) {
      console.error('❌ Error processing new transactions:', error);
      // Fallback to generic prompt
      await this.promptUserForRoundUp(userAddress);
    }
  }

  async promptUserForRoundUp(userAddress) {
    try {
      console.log('💰 Prompting user for round-up confirmation:', userAddress);

      const settings = await this.getRoundUpSettings();
      console.log('🔍 AMOUNT DEBUG: Retrieved settings:', settings);
      
      if (!settings.enabled) {
        console.log('🚫 Auto-save disabled by user');
        return;
      }

      const savingsAmount = settings.fixedAmount;
      console.log('🔍 AMOUNT DEBUG: savingsAmount =', savingsAmount, 'type:', typeof savingsAmount);
      
      if (savingsAmount <= 0) {
        console.log('💰 No savings amount configured');
        return;
      }

      // Check daily limit
      const today = new Date().toDateString();
      const dailyKey = `dailyTotal_${today}`;
      const dailyTotal = await this.getFromStorage(dailyKey) || 0;
      
      if (dailyTotal + savingsAmount > settings.maxPerDay) {
        console.log('🚫 Daily limit reached. Would exceed', settings.maxPerDay, 'CHZ');
        return;
      }

      // Store the pending round-up request
      const pendingRequest = {
        userAddress: userAddress,
        amount: savingsAmount,
        timestamp: Date.now(),
        dailyTotal: dailyTotal
      };
      
      console.log('🔍 AMOUNT DEBUG: Storing pending request:', pendingRequest);
      await this.setPendingRoundUpRequest(pendingRequest);

      // Show notification
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.svg',
        title: 'CHZ Auto-Save Available',
        message: `💰 Transaction detected! Click to save ${savingsAmount} CHZ to your account.`
      });

      // Open extension popup
      try {
        chrome.action.openPopup();
      } catch (error) {
        console.log('⚠️ Could not open popup automatically:', error);
      }

    } catch (error) {
      console.error('❌ Error prompting user for round-up:', error);
    }
  }

  async promptUserForRoundUpFromTx(userAddress, transaction) {
    try {
      console.log('💰 Processing specific transaction:', {
        userAddress: userAddress,
        txHash: transaction.hash,
        value: ethers.utils.formatEther(transaction.value),
        nonce: transaction.nonce
      });

      const settings = await this.getRoundUpSettings();
      console.log('🔍 AMOUNT DEBUG: Retrieved settings from promptUserForRoundUpFromTx:', settings);
      
      if (!settings.enabled) {
        console.log('🚫 Auto-save disabled by user');
        return;
      }

      // Prevent duplicate processing
      const processedKey = `processed_${transaction.hash}`;
      const alreadyProcessed = await this.getFromStorage(processedKey);
      
      if (alreadyProcessed) {
        console.log('🚫 Transaction already processed:', transaction.hash);
        return;
      }

      // Mark as processed
      await this.setInStorage(processedKey, true);

      // Skip zero-value transactions
      if (transaction.value.isZero()) {
        console.log('🚫 Skipping zero-value transaction');
        return;
      }

      const savingsAmount = settings.fixedAmount;
      console.log('🔍 AMOUNT DEBUG: savingsAmount from promptUserForRoundUpFromTx =', savingsAmount, 'type:', typeof savingsAmount);

      if (savingsAmount <= 0) {
        console.log('💰 No savings amount configured');
        return;
      }

      // Check daily limit
      const today = new Date().toDateString();
      const dailyKey = `dailyTotal_${today}`;
      const dailyTotal = await this.getFromStorage(dailyKey) || 0;
      
      if (dailyTotal + savingsAmount > settings.maxPerDay) {
        console.log('🚫 Daily limit reached. Would exceed', settings.maxPerDay, 'CHZ');
        return;
      }

      // Store the pending round-up request
      const pendingRequest = {
        userAddress: userAddress,
        amount: savingsAmount,
        timestamp: Date.now(),
        dailyTotal: dailyTotal,
        originalTxHash: transaction.hash
      };
      
      console.log('🔍 AMOUNT DEBUG: Storing pending request from promptUserForRoundUpFromTx:', pendingRequest);
      await this.setPendingRoundUpRequest(pendingRequest);

      console.log(`💸 Prompting user for auto-save: ${savingsAmount} CHZ for tx: ${transaction.hash}`);

      // Show notification
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.svg',
        title: 'CHZ Auto-Save Available',
        message: `💰 Transaction detected! Click to save ${savingsAmount} CHZ to your account.`
      });

      // Open extension popup
      try {
        chrome.action.openPopup();
      } catch (error) {
        console.log('⚠️ Could not open popup automatically:', error);
      }

    } catch (error) {
      console.error('❌ Error processing transaction from monitoring:', error);
    }
  }

  async confirmRoundUp(userAddress, amount) {
    try {
      console.log('✅ User confirmed round-up:', { userAddress, amount });

      // Update daily total
      const today = new Date().toDateString();
      const dailyKey = `dailyTotal_${today}`;
      const dailyTotal = await this.getFromStorage(dailyKey) || 0;
      await this.setInStorage(dailyKey, dailyTotal + amount);

      // Clear pending request
      await this.clearPendingRoundUpRequest();

      return { success: true };

    } catch (error) {
      console.error('❌ Error confirming round-up:', error);
      throw error;
    }
  }

  async declineRoundUp() {
    try {
      console.log('❌ User declined round-up');
      
      // Clear pending request
      await this.clearPendingRoundUpRequest();

      return { success: true };

    } catch (error) {
      console.error('❌ Error declining round-up:', error);
      throw error;
    }
  }

  async getPendingRoundUpRequest() {
    const result = await this.getFromStorage('pendingRoundUpRequest');
    console.log('🔍 AMOUNT DEBUG: getPendingRoundUpRequest returning:', result);
    if (result && result.amount) {
      console.log('🔍 AMOUNT DEBUG: Pending request amount =', result.amount, 'type:', typeof result.amount);
    }
    return result;
  }

  async setPendingRoundUpRequest(request) {
    await this.setInStorage('pendingRoundUpRequest', request);
  }

  async clearPendingRoundUpRequest() {
    await this.setInStorage('pendingRoundUpRequest', null);
  }

  async monitorTransaction(txHash, userAddress) {
    if (this.monitoringTxs.has(txHash)) {
      console.log('⏳ Already monitoring transaction:', txHash);
      return;
    }

    this.monitoringTxs.add(txHash);
    console.log('🔍 Monitoring transaction on Chiliz Spicy testnet:', txHash);

    try {
      // Wait for transaction confirmation using ethers.js
      const receipt = await this.provider.waitForTransaction(txHash, 1, 600000); // 10 minute timeout
      
      if (receipt && receipt.status === 1) {
        console.log('✅ Transaction confirmed on Chiliz Spicy:', txHash);
        this.monitoringTxs.delete(txHash);
        
        // Get transaction details
        const tx = await this.provider.getTransaction(txHash);
        await this.promptUserForRoundUpFromTx(userAddress, tx);
      }
    } catch (error) {
      console.error('❌ Error monitoring transaction:', error);
      this.monitoringTxs.delete(txHash);
    }
  }

  async getRoundUpSettings() {
    return new Promise((resolve) => {
      chrome.storage.local.get(['roundUpSettings'], (result) => {
        const defaultSettings = {
          enabled: false,
          fixedAmount: 5,
          maxPerDay: 50
        };
        
        const settings = result.roundUpSettings || defaultSettings;
        console.log('🔍 AMOUNT DEBUG: getRoundUpSettings returning:', settings);
        console.log('🔍 AMOUNT DEBUG: Raw storage result:', result);
        
        resolve(settings);
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

  async getFromStorage(key) {
    return new Promise((resolve) => {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key]);
      });
    });
  }

  async setInStorage(key, value) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [key]: value }, () => {
        resolve();
      });
    });
  }
}

// Initialize the service
new RoundUpService();

console.log('🚀 CHZ Round-Up Background Service loaded with optimized polling'); 