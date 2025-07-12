import React, { useState, useEffect } from 'react';
import { StorageService } from '../services/StorageService';
import { MetamaskService } from '../services/MetamaskService';
import './PopupApp.css';

interface ConnectionStatus {
  websocket: boolean;
  polling: boolean;
  monitoring: boolean;
}

interface UserData {
  balance?: string;
  transactionCount?: number;
}

interface UserTransaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gasPrice: string;
  blockNumber: number;
}

const PopupApp: React.FC = () => {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isCheckingMetamask, setIsCheckingMetamask] = useState(true);
  const [metamaskAvailable, setMetamaskAvailable] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>({
    websocket: false,
    polling: false,
    monitoring: false
  });
  const [userData, setUserData] = useState<UserData>({});
  const [recentTransactions, setRecentTransactions] = useState<UserTransaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  useEffect(() => {
    // Vérifier MetaMask au démarrage
    checkMetamaskAvailability();
    // Charger l'adresse utilisateur au démarrage
    loadUserAddress();
    // Charger le statut de connexion
    loadConnectionStatus();
    // Écouter les messages du background script
    setupMessageListener();
  }, []);

  const checkMetamaskAvailability = async () => {
    setIsCheckingMetamask(true);
    setError(null);
    
    try {
      console.log('Checking MetaMask availability...');
      
      // Faire un diagnostic immédiat
      const diagnostics = MetamaskService.getDiagnostics();
      console.log('MetaMask diagnostics:', diagnostics);
      
      // Vérifier avec la méthode améliorée
      const available = await MetamaskService.isMetamaskInstalled();
      console.log('MetaMask available:', available);
      
      setMetamaskAvailable(available);
      
      if (!available) {
        setError('MetaMask n\'est pas installé ou n\'est pas disponible. Veuillez l\'installer ou redémarrer Chrome.');
      } else {
        // Vérifier si MetaMask est débloqué
        const isUnlocked = await MetamaskService.isMetamaskUnlocked();
        console.log('MetaMask unlocked:', isUnlocked);
        
        if (!isUnlocked) {
          setError('MetaMask est installé mais verrouillé. Veuillez le déverrouiller.');
        } else {
          setError(null);
        }
      }
    } catch (error) {
      console.error('Error checking MetaMask:', error);
      setMetamaskAvailable(false);
      setError('Erreur lors de la vérification de MetaMask: ' + (error instanceof Error ? error.message : 'Erreur inconnue'));
    } finally {
      setIsCheckingMetamask(false);
    }
  };

  const loadUserAddress = async () => {
    try {
      const address = await StorageService.getUserAddress();
      setUserAddress(address);
      
      // Si on a une adresse, vérifier si MetaMask est toujours connecté
      if (address) {
        const isConnected = await MetamaskService.isConnected();
        if (!isConnected) {
          // L'utilisateur a déconnecté MetaMask, nettoyer les données
          await StorageService.clearUserAddress();
          setUserAddress(null);
        }
      }
    } catch (error) {
      console.error('Error loading user address:', error);
    }
  };

  const loadConnectionStatus = async () => {
    try {
      const status = await new Promise<ConnectionStatus>((resolve) => {
        chrome.runtime.sendMessage({ action: 'get_status' }, (response) => {
          resolve(response || { websocket: false, polling: false, monitoring: false });
        });
      });
      setConnectionStatus(status);
    } catch (error) {
      console.error('Error loading connection status:', error);
    }
  };

  const setupMessageListener = () => {
    chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
      switch (message.type) {
        case 'user_data_update':
          setUserData({
            balance: message.data.balance,
            transactionCount: message.data.transactionCount
          });
          break;
        case 'user_transaction':
          setRecentTransactions(prev => [message.data, ...prev.slice(0, 4)]);
          break;
      }
      sendResponse({ received: true });
    });
  };

  const handleConnectMetamask = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      console.log('Attempting to connect to MetaMask...');
      
      // Vérifier à nouveau que MetaMask est disponible
      const available = await MetamaskService.isMetamaskInstalled();
      if (!available) {
        throw new Error('MetaMask n\'est pas disponible. Veuillez l\'installer et redémarrer Chrome.');
      }

      const address = await MetamaskService.connectWallet();
      await StorageService.setUserAddress(address);
      setUserAddress(address);
      
      console.log('MetaMask connected successfully:', address);
      
      // Démarrer les services en arrière-plan
      chrome.runtime.sendMessage({ action: 'connect_websocket' });
      chrome.runtime.sendMessage({ action: 'start_polling' });
      
      // Mettre à jour le statut
      setTimeout(() => {
        loadConnectionStatus();
      }, 1000);
      
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      setError(error instanceof Error ? error.message : 'Erreur de connexion');
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      await MetamaskService.disconnect();
      await StorageService.clearUserAddress();
      setUserAddress(null);
      setUserData({});
      setRecentTransactions([]);
      
      // Arrêter les services
      chrome.runtime.sendMessage({ action: 'disconnect_websocket' });
      chrome.runtime.sendMessage({ action: 'stop_polling' });
      
      setConnectionStatus({ websocket: false, polling: false, monitoring: false });
    } catch (error) {
      console.error('Error disconnecting:', error);
    }
  };

  const handleRetryMetamask = () => {
    checkMetamaskAvailability();
  };

  const handleShowDiagnostics = () => {
    setShowDiagnostics(!showDiagnostics);
  };

  const toggleWebSocket = () => {
    const action = connectionStatus.websocket ? 'disconnect_websocket' : 'connect_websocket';
    chrome.runtime.sendMessage({ action }, () => {
      setTimeout(() => {
        loadConnectionStatus();
      }, 500);
    });
  };

  const togglePolling = () => {
    const action = connectionStatus.polling ? 'stop_polling' : 'start_polling';
    chrome.runtime.sendMessage({ action }, () => {
      setTimeout(() => {
        loadConnectionStatus();
      }, 500);
    });
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatBalance = (balance: string) => {
    return parseFloat(balance).toFixed(4);
  };

  const openTransaction = (hash: string) => {
    chrome.tabs.create({ url: `https://testnet.chiliscan.com/tx/${hash}` });
  };

  const openMetamaskInstall = () => {
    chrome.tabs.create({ url: 'https://metamask.io/' });
  };

  const renderDiagnostics = () => {
    if (!showDiagnostics) return null;
    
    const diagnostics = MetamaskService.getDiagnostics();
    
    return (
      <div className="diagnostics-section">
        <h3>🔍 Diagnostics MetaMask</h3>
        <div className="diagnostics-info">
          <div className="diagnostic-item">
            <span className="diagnostic-label">window.ethereum:</span>
            <span className={`diagnostic-value ${diagnostics.windowEthereum ? 'success' : 'error'}`}>
              {diagnostics.windowEthereum ? '✅ Présent' : '❌ Absent'}
            </span>
          </div>
          <div className="diagnostic-item">
            <span className="diagnostic-label">isMetaMask:</span>
            <span className={`diagnostic-value ${diagnostics.isMetaMask ? 'success' : 'error'}`}>
              {diagnostics.isMetaMask ? '✅ Oui' : '❌ Non'}
            </span>
          </div>
          <div className="diagnostic-item">
            <span className="diagnostic-label">request method:</span>
            <span className={`diagnostic-value ${diagnostics.hasRequest ? 'success' : 'error'}`}>
              {diagnostics.hasRequest ? '✅ Disponible' : '❌ Manquante'}
            </span>
          </div>
          <div className="diagnostic-item">
            <span className="diagnostic-label">Extension context:</span>
            <span className={`diagnostic-value ${diagnostics.chromeExtensionInfo.isExtensionContext ? 'success' : 'warning'}`}>
              {diagnostics.chromeExtensionInfo.isExtensionContext ? '✅ Oui' : '⚠️ Non'}
            </span>
          </div>
          <div className="diagnostic-item">
            <span className="diagnostic-label">Mode développeur:</span>
            <span className={`diagnostic-value ${diagnostics.chromeExtensionInfo.isDeveloperMode ? 'warning' : 'success'}`}>
              {diagnostics.chromeExtensionInfo.isDeveloperMode ? '⚠️ ACTIF' : '✅ Désactivé'}
            </span>
          </div>
          {diagnostics.hasMultipleProviders && (
            <div className="diagnostic-item">
              <span className="diagnostic-label">Providers multiples:</span>
              <span className="diagnostic-value warning">
                ⚠️ Oui
              </span>
            </div>
          )}
          {(diagnostics.otherWallets.isCoinbaseWallet || diagnostics.otherWallets.isRabby || diagnostics.otherWallets.isTrust) && (
            <div className="diagnostic-item">
              <span className="diagnostic-label">Autres wallets:</span>
              <span className="diagnostic-value warning">
                {diagnostics.otherWallets.isCoinbaseWallet && '🔸 Coinbase '}
                {diagnostics.otherWallets.isRabby && '🔸 Rabby '}
                {diagnostics.otherWallets.isTrust && '🔸 Trust '}
              </span>
            </div>
          )}
          <div className="diagnostic-item">
            <span className="diagnostic-label">Document ready:</span>
            <span className={`diagnostic-value ${diagnostics.timing.documentReadyState === 'complete' ? 'success' : 'warning'}`}>
              {diagnostics.timing.documentReadyState === 'complete' ? '✅ Complet' : '⚠️ En cours'}
            </span>
          </div>
          <div className="diagnostic-item">
            <span className="diagnostic-label">Contexte sécurisé:</span>
            <span className={`diagnostic-value ${diagnostics.isSecureContext ? 'success' : 'warning'}`}>
              {diagnostics.isSecureContext ? '✅ Oui' : '⚠️ Non'}
            </span>
          </div>
        </div>
        
        {diagnostics.chromeExtensionInfo.isDeveloperMode && (
          <div className="diagnostic-warning">
            <h4>⚠️ Mode développeur détecté</h4>
            <p>Le mode développeur peut causer des problèmes de détection MetaMask. Essayez de le désactiver temporairement.</p>
          </div>
        )}
        
        {diagnostics.hasMultipleProviders && (
          <div className="diagnostic-warning">
            <h4>⚠️ Plusieurs providers détectés</h4>
            <p>Plusieurs wallets sont installés. Cela peut causer des conflits avec MetaMask.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1>CHZ Extension</h1>
        <div className="logo">⚽</div>
      </header>

      <main className="popup-main">
        {isCheckingMetamask ? (
          <div className="checking-section">
            <div className="loading-message">
              <h2>Vérification de MetaMask...</h2>
              <div className="loading-spinner">🔄</div>
            </div>
          </div>
        ) : !metamaskAvailable ? (
          <div className="metamask-error-section">
            <div className="error-message-detailed">
              <h2>❌ MetaMask non détecté</h2>
              <p>MetaMask n'est pas installé ou n'est pas disponible.</p>
              <div className="error-actions">
                <button 
                  className="install-button"
                  onClick={openMetamaskInstall}
                >
                  Installer MetaMask
                </button>
                <button 
                  className="retry-button"
                  onClick={handleRetryMetamask}
                >
                  Réessayer
                </button>
              </div>
              <div className="error-actions">
                <button 
                  className="diagnostics-button"
                  onClick={handleShowDiagnostics}
                >
                  {showDiagnostics ? 'Masquer' : 'Voir'} diagnostics
                </button>
              </div>
              {renderDiagnostics()}
              <div className="help-text">
                <small>
                  Si MetaMask est installé, essayez de:<br/>
                  • Redémarrer Chrome<br/>
                  • Activer MetaMask dans les extensions<br/>
                  • Déverrouiller MetaMask<br/>
                  • Cliquer sur "Réessayer"
                </small>
              </div>
            </div>
          </div>
        ) : !userAddress ? (
          <div className="connection-section">
            <div className="welcome-message">
              <h2>Bienvenue sur Chiliz Chain 2.0!</h2>
              <p>Connectez votre wallet MetaMask pour surveiller vos transactions</p>
            </div>
            
            <button 
              className="connect-button"
              onClick={handleConnectMetamask}
              disabled={isConnecting}
            >
              {isConnecting ? 'Connexion...' : 'Connecter MetaMask'}
            </button>
            
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
          </div>
        ) : (
          <div className="connected-section">
            <div className="user-info">
              <h2>Connecté sur Chiliz Chain 2.0</h2>
              <div className="address">
                <span className="label">Adresse:</span>
                <span className="value">{formatAddress(userAddress)}</span>
              </div>
              {userData.balance && (
                <div className="balance">
                  <span className="label">Solde:</span>
                  <span className="value">{formatBalance(userData.balance)} CHZ</span>
                </div>
              )}
              {userData.transactionCount !== undefined && (
                <div className="tx-count">
                  <span className="label">Transactions:</span>
                  <span className="value">{userData.transactionCount}</span>
                </div>
              )}
            </div>

            <div className="services-section">
              <h3>Services Chiliz Chain 2.0</h3>
              
              <div className="service-item">
                <div className="service-info">
                  <span className="service-name">WebSocket RPC</span>
                  <span className={`service-status ${connectionStatus.websocket ? 'active' : 'inactive'}`}>
                    {connectionStatus.websocket ? 'Connecté' : 'Déconnecté'}
                  </span>
                </div>
                <button 
                  className="service-toggle"
                  onClick={toggleWebSocket}
                >
                  {connectionStatus.websocket ? 'Déconnecter' : 'Connecter'}
                </button>
              </div>

              <div className="service-item">
                <div className="service-info">
                  <span className="service-name">Surveillance des blocs</span>
                  <span className={`service-status ${connectionStatus.monitoring ? 'active' : 'inactive'}`}>
                    {connectionStatus.monitoring ? 'Actif' : 'Inactif'}
                  </span>
                </div>
                <div className="service-indicator">
                  {connectionStatus.monitoring && (
                    <div className="monitoring-indicator">🔍</div>
                  )}
                </div>
              </div>

              <div className="service-item">
                <div className="service-info">
                  <span className="service-name">Polling des données</span>
                  <span className={`service-status ${connectionStatus.polling ? 'active' : 'inactive'}`}>
                    {connectionStatus.polling ? 'Actif' : 'Inactif'}
                  </span>
                </div>
                <button 
                  className="service-toggle"
                  onClick={togglePolling}
                >
                  {connectionStatus.polling ? 'Arrêter' : 'Démarrer'}
                </button>
              </div>
            </div>

            {recentTransactions.length > 0 && (
              <div className="transactions-section">
                <h3>Transactions récentes</h3>
                <div className="transactions-list">
                  {recentTransactions.map((tx, index) => (
                    <div key={index} className="transaction-item" onClick={() => openTransaction(tx.hash)}>
                      <div className="tx-info">
                        <span className="tx-hash">{tx.hash.substring(0, 10)}...</span>
                        <span className="tx-value">{formatBalance(tx.value)} CHZ</span>
                      </div>
                      <div className="tx-details">
                        <span className="tx-to">→ {formatAddress(tx.to)}</span>
                        <span className="tx-block">Bloc #{tx.blockNumber}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="actions-section">
              <button 
                className="disconnect-button"
                onClick={handleDisconnect}
              >
                Déconnecter
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PopupApp; 