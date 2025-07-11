import React, { useState, useEffect } from 'react';
import { StorageService } from '../services/StorageService';
import { MetamaskService } from '../services/MetamaskService';
import './PopupApp.css';

interface ConnectionStatus {
  websocket: boolean;
  polling: boolean;
}

const PopupApp: React.FC = () => {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>({
    websocket: false,
    polling: false
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Charger l'adresse utilisateur au démarrage
    loadUserAddress();
    // Charger le statut de connexion
    loadConnectionStatus();
  }, []);

  const loadUserAddress = async () => {
    try {
      const address = await StorageService.getUserAddress();
      setUserAddress(address);
    } catch (error) {
      console.error('Error loading user address:', error);
    }
  };

  const loadConnectionStatus = async () => {
    try {
      const status = await new Promise<ConnectionStatus>((resolve) => {
        chrome.runtime.sendMessage({ action: 'get_status' }, (response) => {
          resolve(response);
        });
      });
      setConnectionStatus(status);
    } catch (error) {
      console.error('Error loading connection status:', error);
    }
  };

  const handleConnectMetamask = async () => {
    setIsConnecting(true);
    setError(null);

    try {
      const address = await MetamaskService.connectWallet();
      await StorageService.setUserAddress(address);
      setUserAddress(address);
      
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
      await StorageService.clearUserAddress();
      setUserAddress(null);
      
      // Arrêter les services
      chrome.runtime.sendMessage({ action: 'disconnect_websocket' });
      chrome.runtime.sendMessage({ action: 'stop_polling' });
      
      setConnectionStatus({ websocket: false, polling: false });
    } catch (error) {
      console.error('Error disconnecting:', error);
    }
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

  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1>CHZ Extension</h1>
        <div className="logo">🔗</div>
      </header>

      <main className="popup-main">
        {!userAddress ? (
          <div className="connection-section">
            <div className="welcome-message">
              <h2>Bienvenue!</h2>
              <p>Connectez votre wallet MetaMask pour commencer</p>
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
              <h2>Connecté</h2>
              <div className="address">
                <span className="label">Adresse:</span>
                <span className="value">{formatAddress(userAddress)}</span>
              </div>
            </div>

            <div className="services-section">
              <h3>Services</h3>
              
              <div className="service-item">
                <div className="service-info">
                  <span className="service-name">WebSocket</span>
                  <span className={`service-status ${connectionStatus.websocket ? 'active' : 'inactive'}`}>
                    {connectionStatus.websocket ? 'Actif' : 'Inactif'}
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
                  <span className="service-name">Polling</span>
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