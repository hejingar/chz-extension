/**
 * Background Script pour CHZ Extension
 * Service Worker pour Chrome Extension Manifest V3
 */

console.log('CHZ Extension Background Script loaded');

// Installation de l'extension
(chrome as any).runtime.onInstalled.addListener((details: any) => {
  console.log('CHZ Extension installed:', details.reason);
  
  if (details.reason === 'install') {
    console.log('First time installation');
  } else if (details.reason === 'update') {
    console.log('Extension updated');
  }
});

// Démarrage de l'extension
(chrome as any).runtime.onStartup.addListener(() => {
  console.log('CHZ Extension started');
});

// Gestion des messages entre popup et background
(chrome as any).runtime.onMessage.addListener((request: any, _sender: any, sendResponse: any) => {
  console.log('Background received message:', request);
  
  // Répondre aux messages du popup
  if (request.type === 'ping') {
    sendResponse({ success: true, message: 'pong' });
  }
  
  return true; // Garder le canal ouvert pour les réponses asynchrones
});

// Gestion des notifications (si nécessaire)
(chrome as any).notifications.onClicked.addListener((notificationId: any) => {
  console.log('Notification clicked:', notificationId);
});

console.log('CHZ Extension Background Script initialized');