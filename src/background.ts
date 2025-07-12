// Background script pour l'extension Chrome
import { ethers } from 'ethers';

// Types Chrome pour Service Worker
declare const chrome: {
  runtime: {
    onStartup: {
      addListener: (callback: () => void) => void;
    };
    onInstalled: {
      addListener: (callback: () => void) => void;
    };
    onMessage: {
      addListener: (callback: (request: any, sender: any, sendResponse: (response: any) => void) => boolean) => void;
    };
    sendMessage: (message: any) => Promise<any>;
    onSuspend: {
      addListener: (callback: () => void) => void;
    };
    lastError?: any;
  };
  storage: {
    local: {
      get: (keys: string[]) => Promise<any>;
      set: (items: any) => Promise<void>;
    };
    onChanged: {
      addListener: (callback: (changes: any, namespace: string) => void) => void;
    };
  };
  notifications: {
    create: (id: string, options: any, callback?: (notificationId: string) => void) => void;
    clear: (notificationId: string) => void;
    onClicked: {
      addListener: (callback: (notificationId: string) => void) => void;
    };
  };
  tabs: {
    create: (createProperties: { url: string }) => void;
  };
};

console.log('Background script started');

// Configuration pour WebSocket EVM et polling
const CHILIZ_RPC_URL = 'wss://spicy-rpc-ws.chiliz.com/';
const POLLING_INTERVAL = 30000; // 30 secondes

// Variables globales
let provider: ethers.WebSocketProvider | null = null;
let userAddress: string | null = null;
let pollingTimer: number | null = null;
let isMonitoringBlocks = false;

// Initialisation du background script
chrome.runtime.onStartup.addListener(() => {
  console.log('Extension started');
  initializeServices();
});

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
  initializeServices();
});

// Gestion des messages depuis le popup
chrome.runtime.onMessage.addListener((request: any, _sender: any, sendResponse: (response: any) => void) => {
  console.log('Message received:', request);
  
  switch (request.action) {
    case 'connect_websocket':
      connectToChilizRPC();
      sendResponse({ success: true });
      break;
    case 'disconnect_websocket':
      disconnectFromChilizRPC();
      sendResponse({ success: true });
      break;
    case 'start_polling':
      startPolling();
      sendResponse({ success: true });
      break;
    case 'stop_polling':
      stopPolling();
      sendResponse({ success: true });
      break;
    case 'get_status':
      sendResponse({ 
        websocket: provider !== null,
        polling: pollingTimer !== null,
        monitoring: isMonitoringBlocks
      });
      break;
    default:
      sendResponse({ error: 'Unknown action' });
  }
  
  return true; // Permet les réponses asynchrones
});

// Initialisation des services
async function initializeServices() {
  try {
    // Récupérer l'adresse publique stockée
    const result = await chrome.storage.local.get(['userAddress']);
    if (result.userAddress) {
      userAddress = result.userAddress;
      console.log('User address found:', userAddress);
      
      // Démarrer automatiquement la surveillance si un utilisateur est connecté
      await connectToChilizRPC();
    }
  } catch (error) {
    console.error('Error initializing services:', error);
  }
}

// Connexion au provider WebSocket Chiliz Chain 2.0
async function connectToChilizRPC() {
  if (provider) {
    console.log('Already connected to Chiliz RPC');
    return;
  }

  try {
    console.log('Connecting to Chiliz Chain 2.0...');
    provider = new ethers.WebSocketProvider(CHILIZ_RPC_URL);
    
    // Test de connexion
    const network = await provider.getNetwork();
    console.log('Connected to network:', network.name, 'Chain ID:', network.chainId);
    
    // Démarrer la surveillance des blocs
    await startBlockMonitoring();
    
    // Gestion des erreurs WebSocket - utiliser les événements du provider
    provider.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
    
    provider.on('close', () => {
      console.log('WebSocket connection closed');
      provider = null;
      isMonitoringBlocks = false;
      
      // Reconnexion automatique après 5 secondes
      setTimeout(() => {
        connectToChilizRPC();
      }, 5000);
    });
    
  } catch (error) {
    console.error('Error connecting to Chiliz RPC:', error);
    provider = null;
  }
}

// Déconnexion du provider
function disconnectFromChilizRPC() {
  if (provider) {
    console.log('Disconnecting from Chiliz RPC');
    provider.destroy();
    provider = null;
    isMonitoringBlocks = false;
  }
}

// Démarrage de la surveillance des blocs
async function startBlockMonitoring() {
  if (!provider || isMonitoringBlocks) {
    return;
  }
  
  try {
    console.log('Starting block monitoring...');
    isMonitoringBlocks = true;
    
    // Écouter les nouveaux blocs
    provider.on('block', async (blockNumber) => {
      console.log(`New block: ${blockNumber}`);
      await inspectBlockTransactions(blockNumber);
    });
    
    console.log('Block monitoring started');
  } catch (error) {
    console.error('Error starting block monitoring:', error);
    isMonitoringBlocks = false;
  }
}

// Inspection des transactions dans un bloc
async function inspectBlockTransactions(blockNumber: number) {
  if (!provider || !userAddress) {
    return;
  }
  
  try {
    console.log(`Inspecting block ${blockNumber} for user transactions...`);
    
    // Récupérer le bloc avec ses transactions
    const block = await provider.getBlock(blockNumber, true);
    
    if (!block || !block.transactions) {
      console.log('No transactions in block');
      return;
    }
    
    // Vérifier chaque transaction
    for (const txHash of block.transactions) {
      try {
        const tx = await provider.getTransaction(txHash);
        
        if (tx && tx.from && tx.from.toLowerCase() === userAddress.toLowerCase()) {
          console.log('User transaction found:', tx.hash);
          await notifyUserTransaction(tx);
        }
      } catch (error) {
        console.error('Error getting transaction:', error);
      }
    }
    
  } catch (error) {
    console.error('Error inspecting block transactions:', error);
  }
}

// Notification pour les transactions utilisateur
async function notifyUserTransaction(tx: ethers.TransactionResponse) {
  if (!userAddress) return;
  
  try {
    const value = ethers.formatEther(tx.value);
    const gasPrice = tx.gasPrice ? ethers.formatUnits(tx.gasPrice, 'gwei') : '0';
    
    // Créer la notification
    const notificationOptions = {
      type: 'basic' as const,
      iconUrl: './icon.png',
      title: '🔗 Transaction CHZ détectée',
      message: `Transaction sortante détectée\n` +
               `Montant: ${value} CHZ\n` +
               `Gas: ${gasPrice} Gwei\n` +
               `Hash: ${tx.hash.substring(0, 10)}...`,
      contextMessage: `Vers: ${tx.to ? tx.to.substring(0, 10) + '...' : 'Contrat'}`,
      priority: 2
    };
    
    // Afficher la notification
    chrome.notifications.create(tx.hash, notificationOptions, (notificationId: string) => {
      if (chrome.runtime.lastError) {
        console.error('Error creating notification:', chrome.runtime.lastError);
      } else {
        console.log('Notification created:', notificationId);
      }
    });
    
    // Envoyer les données vers le popup si ouvert
    chrome.runtime.sendMessage({
      type: 'user_transaction',
      data: {
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: value,
        gasPrice: gasPrice,
        blockNumber: tx.blockNumber
      }
    }).catch(() => {
      // Le popup n'est pas ouvert, c'est normal
    });
    
  } catch (error) {
    console.error('Error notifying user transaction:', error);
  }
}

// Gestion du polling (pour d'autres données)
function startPolling() {
  if (pollingTimer) {
    console.log('Polling already started');
    return;
  }

  pollingTimer = setInterval(async () => {
    try {
      const result = await chrome.storage.local.get(['userAddress']);
      if (result.userAddress) {
        userAddress = result.userAddress;
        await pollUserData(result.userAddress);
      }
    } catch (error) {
      console.error('Error in polling:', error);
    }
  }, POLLING_INTERVAL) as unknown as number;
  
  console.log('Polling started');
}

function stopPolling() {
  if (pollingTimer) {
    clearInterval(pollingTimer);
    pollingTimer = null;
    console.log('Polling stopped');
  }
}

// Fonction de polling pour données utilisateur
async function pollUserData(address: string) {
  if (!provider) return;
  
  try {
    console.log('Polling user data for address:', address);
    
    // Récupérer le solde
    const balance = await provider.getBalance(address);
    const balanceEth = ethers.formatEther(balance);
    
    // Récupérer le nombre de transactions
    const transactionCount = await provider.getTransactionCount(address);
    
    console.log(`Balance: ${balanceEth} CHZ, Transactions: ${transactionCount}`);
    
    // Envoyer les données vers le popup si ouvert
    chrome.runtime.sendMessage({
      type: 'user_data_update',
      data: {
        address: address,
        balance: balanceEth,
        transactionCount: transactionCount
      }
    }).catch(() => {
      // Le popup n'est pas ouvert, c'est normal
    });
    
  } catch (error) {
    console.error('Error polling user data:', error);
  }
}

// Écouter les changements dans le stockage
chrome.storage.onChanged.addListener((changes: any, namespace: string) => {
  if (namespace === 'local' && changes.userAddress) {
    const newAddress = changes.userAddress.newValue;
    
    if (newAddress !== userAddress) {
      console.log('User address changed:', newAddress);
      userAddress = newAddress;
      
      // Redémarrer la surveillance si nécessaire
      if (newAddress && provider) {
        console.log('Restarting monitoring with new address');
      } else if (!newAddress) {
        console.log('User disconnected, stopping monitoring');
        disconnectFromChilizRPC();
      }
    }
  }
});

// Gestion des clics sur les notifications
chrome.notifications.onClicked.addListener((notificationId: string) => {
  console.log('Notification clicked:', notificationId);
  
  // Ouvrir l'explorateur de blocs avec la transaction
  const explorerUrl = `https://testnet.chiliscan.com/tx/${notificationId}`;
  chrome.tabs.create({ url: explorerUrl });
  
  // Fermer la notification
  chrome.notifications.clear(notificationId);
});

// Nettoyage lors de la fermeture
chrome.runtime.onSuspend.addListener(() => {
  console.log('Extension suspending, cleaning up...');
  disconnectFromChilizRPC();
  stopPolling();
});