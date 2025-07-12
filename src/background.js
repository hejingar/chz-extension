/*global chrome*/
import { ethers } from 'ethers';

// Smart contract configuration
const ROUNDUP_CONTRACT_ADDRESS = '0x06693a6dcf15f0226535e0ad5dd461a76c59c485'; // CHZ Savings Contract
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
    // Initialize providers
    await this.initializeProviders();
    
    // Listen for popup messages
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      this.handleMessage(request, sender, sendResponse);
      return true; // Keep message channel open for async response
    });

    // Listen for notification clicks
    chrome.notifications.onClicked.addListener((notificationId) => {
      // Open popup when notification is clicked
      chrome.action.openPopup().catch(error => {
        console.warn('Could not open popup from notification click:', error);
      });
      
      // Clear the notification
      chrome.notifications.clear(notificationId);
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
      
      // Initialize contract
      this.contract = new ethers.Contract(
        ROUNDUP_CONTRACT_ADDRESS, 
        ROUNDUP_CONTRACT_ABI, 
        this.provider
      );
      
    } catch (error) {
      console.error('Failed to initialize providers:', error);
      throw error;
    }
  }

  async handleMessage(request, sender, sendResponse) {
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
      console.error('Background error:', error);
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
      } catch (error) {
        console.error('Failed to get initial nonce for', address, ':', error);
      }
    }
  }

  async unregisterUserAddress(address) {
    if (address) {
      const normalizedAddress = address.toLowerCase();
      this.userAddresses.delete(normalizedAddress);
      this.userNonces.delete(normalizedAddress);
    }
  }

  startTransactionMonitoring() {
    // Clear any existing interval
    if (this.transactionPollingInterval) {
      clearInterval(this.transactionPollingInterval);
    }

    // Start with immediate check, then poll every 10 seconds
    this.checkForNewTransactions();
    
    this.transactionPollingInterval = setInterval(async () => {
      if (this.userAddresses.size === 0) {
        return;
      }
      
      if (this.isMonitoring) {
        return;
      }
      
      this.isMonitoring = true;
      try {
        await this.checkForNewTransactions();
      } catch (error) {
        console.error('Error checking for new transactions:', error);
      } finally {
        this.isMonitoring = false;
      }
    }, 10000); // Check every 10 seconds for better responsiveness
  }

  async checkForNewTransactions() {
    if (this.userAddresses.size === 0) return;

    for (const userAddress of this.userAddresses) {
      try {
        // Get the current transaction count
        const currentNonce = await this.provider.getTransactionCount(userAddress, 'latest');
        const lastSeenNonce = this.userNonces.get(userAddress) || 0;
        
        if (currentNonce > lastSeenNonce) {
          // Update our stored nonce
          this.userNonces.set(userAddress, currentNonce);
          
          // Check for pending transactions to avoid spamming
          const pendingRequest = await this.getPendingRoundUpRequest();
          if (pendingRequest && pendingRequest.userAddress === userAddress) {
            continue; // Skip if already has pending request
          }
          
          // Process the new transactions
          await this.processNewTransactions(userAddress, lastSeenNonce, currentNonce);
        }
      } catch (error) {
        console.error('Error checking transactions for', userAddress, ':', error);
      }
    }
  }

  async processNewTransactions(userAddress, fromNonce, toNonce) {
    // Get settings to see if auto-save is enabled
    const settings = await this.getRoundUpSettings();
    
    if (!settings.enabled) {
      return;
    }

    try {
      // Get the latest block to find recent transactions
      const latestBlock = await this.provider.getBlock('latest');
      
      // Check the last few blocks for transactions from this address
      const blocksToCheck = Math.min(5, latestBlock.number);
      
      let shouldTriggerRoundUp = false;
      
      for (let i = 0; i < blocksToCheck; i++) {
        const blockNumber = latestBlock.number - i;
        const block = await this.provider.getBlockWithTransactions(blockNumber);
        
        if (block && block.transactions) {
          for (const tx of block.transactions) {
            if (tx.from && tx.from.toLowerCase() === userAddress.toLowerCase() && 
                tx.nonce >= fromNonce && tx.nonce < toNonce) {
              
              // IMPORTANT: Ignore transactions TO the smart contract to prevent loops
              if (tx.to && tx.to.toLowerCase() === ROUNDUP_CONTRACT_ADDRESS.toLowerCase()) {
                continue;
              }
              
              // This is a regular transaction, trigger round-up
              shouldTriggerRoundUp = true;
              break;
            }
          }
        }
        
        if (shouldTriggerRoundUp) {
          break;
        }
      }
      
      // Only trigger round-up if we found a valid non-contract transaction
      if (shouldTriggerRoundUp) {
        await this.promptUserForRoundUp(userAddress);
      }
      
    } catch (error) {
      console.error('Error processing new transactions:', error);
      // Fallback: If we can't check transaction details, don't trigger to be safe
    }
  }

  async promptUserForRoundUp(userAddress) {
    try {
      const settings = await this.getRoundUpSettings();
      
      // Get daily saved amount
      const today = new Date().toDateString();
      const savedToday = await this.getFromStorage(`dailySaved_${today}`) || 0;
      
      // Check if daily limit reached
      if (savedToday >= settings.maxPerDay) {
        return;
      }
      
      // Create round-up request
      const roundUpRequest = {
        userAddress: userAddress,
        amount: settings.fixedAmount,
        timestamp: Date.now(),
        dailySaved: savedToday,
        maxPerDay: settings.maxPerDay
      };
      
      // Store pending request
      await this.setPendingRoundUpRequest(roundUpRequest);
      
      // Show notification
      try {
        await chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon.svg',
          title: 'CHZ Auto-Save Available',
          message: `💰 Transaction detected! Click to save ${settings.fixedAmount} CHZ to your savings.`
        });
      } catch (notificationError) {
        console.warn('Could not show notification:', notificationError);
      }
      
      // Open extension popup automatically
      try {
        await chrome.action.openPopup();
      } catch (popupError) {
        console.warn('Could not open popup automatically:', popupError);
        // Popup might be blocked, notification will still alert user
      }
      
      // Send notification to popup (in case it's already open)
      try {
        await chrome.runtime.sendMessage({
          action: 'TRANSACTION_DETECTED',
          userAddress: userAddress,
          amount: settings.fixedAmount
        });
      } catch (messageError) {
        // Popup might not be open, that's okay
      }
      
    } catch (error) {
      console.error('Error prompting user for round-up:', error);
    }
  }

  async promptUserForRoundUpFromTx(userAddress, transaction) {
    try {
      const settings = await this.getRoundUpSettings();
      
      // Get daily saved amount
      const today = new Date().toDateString();
      const savedToday = await this.getFromStorage(`dailySaved_${today}`) || 0;
      
      // Check if daily limit reached
      if (savedToday >= settings.maxPerDay) {
        return;
      }
      
      // Create round-up request
      const roundUpRequest = {
        userAddress: userAddress,
        amount: settings.fixedAmount,
        timestamp: Date.now(),
        dailySaved: savedToday,
        maxPerDay: settings.maxPerDay,
        originalTx: {
          hash: transaction.hash,
          to: transaction.to,
          value: transaction.value,
          gasPrice: transaction.gasPrice,
          gasLimit: transaction.gasLimit
        }
      };
      
      // Store pending request
      await this.setPendingRoundUpRequest(roundUpRequest);
      
      // Show notification
      try {
        await chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon.svg',
          title: 'CHZ Auto-Save Available',
          message: `💰 Transaction detected! Click to save ${settings.fixedAmount} CHZ to your savings.`
        });
      } catch (notificationError) {
        console.warn('Could not show notification:', notificationError);
      }
      
      // Open extension popup automatically
      try {
        await chrome.action.openPopup();
      } catch (popupError) {
        console.warn('Could not open popup automatically:', popupError);
        // Popup might be blocked, notification will still alert user
      }
      
      // Send notification to popup (in case it's already open)
      try {
        await chrome.runtime.sendMessage({
          action: 'TRANSACTION_DETECTED',
          userAddress: userAddress,
          amount: settings.fixedAmount,
          originalTx: transaction
        });
      } catch (messageError) {
        // Popup might not be open, that's okay
      }
      
    } catch (error) {
      console.error('Error prompting user for round-up from transaction:', error);
    }
  }

  async confirmRoundUp(userAddress, amount) {
    try {
      // Update daily saved amount
      const today = new Date().toDateString();
      const savedToday = await this.getFromStorage(`dailySaved_${today}`) || 0;
      const newDailySaved = savedToday + amount;
      
      await this.setInStorage(`dailySaved_${today}`, newDailySaved);
      
      // Clear pending request
      await this.clearPendingRoundUpRequest();
      
    } catch (error) {
      console.error('Error confirming round-up:', error);
      throw error;
    }
  }

  async declineRoundUp() {
    try {
      // Clear pending request
      await this.clearPendingRoundUpRequest();
      
    } catch (error) {
      console.error('Error declining round-up:', error);
      throw error;
    }
  }

  async getPendingRoundUpRequest() {
    return await this.getFromStorage('pendingRoundUpRequest');
  }

  async setPendingRoundUpRequest(request) {
    await this.setInStorage('pendingRoundUpRequest', request);
  }

  async clearPendingRoundUpRequest() {
    await this.setInStorage('pendingRoundUpRequest', null);
  }

  async monitorTransaction(txHash, userAddress) {
    if (this.monitoringTxs.has(txHash)) {
      return; // Already monitoring
    }
    
    try {
      // Check if this transaction is to the smart contract (our own deposit)
      const tx = await this.provider.getTransaction(txHash);
      if (tx && tx.to && tx.to.toLowerCase() === ROUNDUP_CONTRACT_ADDRESS.toLowerCase()) {
        return;
      }
    } catch (error) {
      console.warn('Could not check transaction details for monitoring:', error);
      // Continue with monitoring if we can't check
    }
    
    this.monitoringTxs.add(txHash);
    
    try {
      // For now, just wait a bit and then prompt for round-up
      // In production, you might want to wait for confirmation
      setTimeout(async () => {
        try {
          const settings = await this.getRoundUpSettings();
          if (settings.enabled) {
            await this.promptUserForRoundUp(userAddress);
          }
        } catch (error) {
          console.error('Error in delayed round-up prompt:', error);
        } finally {
          this.monitoringTxs.delete(txHash);
        }
      }, 3000); // Wait 3 seconds after transaction
      
    } catch (error) {
      console.error('Error monitoring transaction:', error);
      this.monitoringTxs.delete(txHash);
    }
  }

  async getRoundUpSettings() {
    const defaultSettings = {
      enabled: false,
      fixedAmount: 5, // Fixed CHZ amount to save per transaction
      maxPerDay: 50 // Maximum CHZ to save per day
    };
    
    try {
      const savedSettings = await this.getFromStorage('roundUpSettings');
      return savedSettings ? { ...defaultSettings, ...savedSettings } : defaultSettings;
    } catch (error) {
      console.error('Error getting round-up settings:', error);
      return defaultSettings;
    }
  }

  async setRoundUpSettings(settings) {
    try {
      await this.setInStorage('roundUpSettings', settings);
    } catch (error) {
      console.error('Error setting round-up settings:', error);
      throw error;
    }
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
      chrome.storage.local.set({ [key]: value }, resolve);
    });
  }
}

// Initialize the service
new RoundUpService(); 