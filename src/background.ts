// Background script pour l'extension Chrome
console.log('Background script started');

// Configuration pour WebSocket et polling
const WEBSOCKET_URL = 'ws://localhost:8080';
const POLLING_INTERVAL = 30000; // 30 secondes

let websocket: WebSocket | null = null;
let pollingTimer: number | null = null;

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
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  console.log('Message received:', request);
  
  switch (request.action) {
    case 'connect_websocket':
      connectWebSocket();
      sendResponse({ success: true });
      break;
    case 'disconnect_websocket':
      disconnectWebSocket();
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
        websocket: websocket?.readyState === WebSocket.OPEN,
        polling: pollingTimer !== null
      });
      break;
    default:
      sendResponse({ error: 'Unknown action' });
  }
  
  return true; // Permet les réponses asynchrones
});

// Initialisation des services
function initializeServices() {
  // Récupérer l'adresse publique stockée
  chrome.storage.local.get(['userAddress'], (result) => {
    if (result.userAddress) {
      console.log('User address found:', result.userAddress);
      // Démarrer automatiquement les services si un utilisateur est connecté
      connectWebSocket();
    }
  });
}

// Gestion WebSocket
function connectWebSocket() {
  if (websocket && websocket.readyState === WebSocket.OPEN) {
    console.log('WebSocket already connected');
    return;
  }

  try {
    websocket = new WebSocket(WEBSOCKET_URL);
    
    websocket.onopen = () => {
      console.log('WebSocket connected');
      // Envoyer l'adresse de l'utilisateur si disponible
      chrome.storage.local.get(['userAddress'], (result) => {
        if (result.userAddress && websocket) {
          websocket.send(JSON.stringify({
            type: 'auth',
            address: result.userAddress
          }));
        }
      });
    };
    
    websocket.onmessage = (event) => {
      console.log('WebSocket message:', event.data);
      try {
        const data = JSON.parse(event.data);
        handleWebSocketMessage(data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };
    
    websocket.onclose = () => {
      console.log('WebSocket disconnected');
      websocket = null;
      // Reconnexion automatique après 5 secondes
      setTimeout(() => {
        connectWebSocket();
      }, 5000);
    };
    
    websocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    
  } catch (error) {
    console.error('Error connecting WebSocket:', error);
  }
}

function disconnectWebSocket() {
  if (websocket) {
    websocket.close();
    websocket = null;
  }
}

// Gestion du polling
function startPolling() {
  if (pollingTimer) {
    console.log('Polling already started');
    return;
  }

  pollingTimer = setInterval(() => {
    chrome.storage.local.get(['userAddress'], (result) => {
      if (result.userAddress) {
        pollData(result.userAddress);
      }
    });
  }, POLLING_INTERVAL);
  
  console.log('Polling started');
}

function stopPolling() {
  if (pollingTimer) {
    clearInterval(pollingTimer);
    pollingTimer = null;
    console.log('Polling stopped');
  }
}

// Fonction de polling
async function pollData(userAddress: string) {
  try {
    // Ici vous pouvez ajouter votre logique de polling
    // Par exemple, appeler une API pour récupérer des données
    console.log('Polling data for address:', userAddress);
    
    // Exemple d'appel API
    // const response = await fetch(`https://api.example.com/data/${userAddress}`);
    // const data = await response.json();
    // handlePollingData(data);
    
  } catch (error) {
    console.error('Error polling data:', error);
  }
}

// Gestion des messages WebSocket
function handleWebSocketMessage(data: any) {
  // Traiter les messages WebSocket
  console.log('Handling WebSocket message:', data);
  
  // Envoyer les données vers le popup si ouvert
  chrome.runtime.sendMessage({
    type: 'websocket_data',
    data: data
  }).catch(() => {
    // Le popup n'est pas ouvert, c'est normal
  });
}

// Gestion des données de polling
function handlePollingData(data: any) {
  console.log('Handling polling data:', data);
  
  // Envoyer les données vers le popup si ouvert
  chrome.runtime.sendMessage({
    type: 'polling_data',
    data: data
  }).catch(() => {
    // Le popup n'est pas ouvert, c'est normal
  });
} 