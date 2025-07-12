import React, { useState, useEffect } from 'react';
import { MetaMaskService } from '../services/MetaMaskService';

interface MetaMaskState {
  isAvailable: boolean;
  isConnected: boolean;
  account: string | null;
  balance: string | null;
  chainId: string | null;
  error: string | null;
}

export const MetaMaskConnect: React.FC = () => {
  const [state, setState] = useState<MetaMaskState>({
    isAvailable: false,
    isConnected: false,
    account: null,
    balance: null,
    chainId: null,
    error: null
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const [metaMaskService] = useState(() => MetaMaskService.getInstance());

  useEffect(() => {
    initializeMetaMask();
    setupEventListeners();
  }, []);

  const initializeMetaMask = async () => {
    try {
      const isAvailable = await metaMaskService.isMetaMaskAvailable();
      setState(prev => ({ ...prev, isAvailable }));

      if (isAvailable) {
        const account = await metaMaskService.getCurrentAccount();
        if (account) {
          setState(prev => ({ 
            ...prev, 
            isConnected: true, 
            account,
            error: null 
          }));
          await loadAccountData(account);
        }
      } else {
        setState(prev => ({ 
          ...prev, 
          error: 'MetaMask n\'est pas installé ou n\'est pas accessible' 
        }));
      }
    } catch (error: any) {
      setState(prev => ({ 
        ...prev, 
        error: error.message || 'Erreur lors de l\'initialisation' 
      }));
    }
  };

  const setupEventListeners = () => {
    metaMaskService.on('accounts_changed', (data) => {
      if (data.accounts.length > 0) {
        setState(prev => ({ 
          ...prev, 
          account: data.accounts[0], 
          isConnected: true,
          error: null 
        }));
        loadAccountData(data.accounts[0]);
      } else {
        setState(prev => ({ 
          ...prev, 
          account: null, 
          isConnected: false,
          balance: null 
        }));
      }
    });

    metaMaskService.on('chain_changed', (data) => {
      setState(prev => ({ ...prev, chainId: data.chainId }));
      // Recharger les données du compte avec le nouveau réseau
      if (state.account) {
        loadAccountData(state.account);
      }
    });

    metaMaskService.on('wallet_disconnected', () => {
      setState(prev => ({ 
        ...prev, 
        isConnected: false, 
        account: null, 
        balance: null 
      }));
    });
  };

  const loadAccountData = async (account: string) => {
    try {
      const [balance, chainId] = await Promise.all([
        metaMaskService.getBalance(account),
        metaMaskService.getCurrentChainId()
      ]);

      setState(prev => ({ 
        ...prev, 
        balance, 
        chainId 
      }));
    } catch (error: any) {
      console.error('Error loading account data:', error);
      setState(prev => ({ 
        ...prev, 
        error: `Erreur lors du chargement des données: ${error.message}` 
      }));
    }
  };

  const handleConnect = async () => {
    setIsConnecting(true);
    setState(prev => ({ ...prev, error: null }));

    try {
      const account = await metaMaskService.connectWallet();
      setState(prev => ({ 
        ...prev, 
        account, 
        isConnected: true,
        error: null 
      }));
      await loadAccountData(account);
    } catch (error: any) {
      setState(prev => ({ 
        ...prev, 
        error: error.message || 'Erreur lors de la connexion' 
      }));
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setState(prev => ({ 
      ...prev, 
      account: null, 
      isConnected: false, 
      balance: null,
      error: null 
    }));
  };

  const handleSwitchToChiliz = async () => {
    try {
      // Chiliz Chain 2.0 configuration
      const chilizNetwork = {
        chainId: '0x15B32', // 88888 en hexadécimal
        chainName: 'Chiliz Chain',
        nativeCurrency: {
          name: 'CHZ',
          symbol: 'CHZ',
          decimals: 18
        },
        rpcUrls: ['https://spicy-rpc.chiliz.com'],
        blockExplorerUrls: ['https://chiliscan.com']
      };

      try {
        await metaMaskService.switchNetwork(chilizNetwork.chainId);
      } catch (switchError: any) {
        // Si le réseau n'existe pas, l'ajouter
        if (switchError.message.includes('Unrecognized chain ID')) {
          await metaMaskService.addNetwork(chilizNetwork);
        } else {
          throw switchError;
        }
      }
    } catch (error: any) {
      setState(prev => ({ 
        ...prev, 
        error: `Erreur lors du changement de réseau: ${error.message}` 
      }));
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatBalance = (balance: string) => {
    return parseFloat(balance).toFixed(4);
  };

  const getChainName = (chainId: string) => {
    const chains: { [key: string]: string } = {
      '0x1': 'Ethereum',
      '0x89': 'Polygon',
      '0x15B32': 'Chiliz Chain',
      '0x15B38': 'Chiliz Testnet'
    };
    return chains[chainId] || `Chain ${chainId}`;
  };

  const showDiagnostics = () => {
    const diagnostics = metaMaskService.getDiagnostics();
    console.log('MetaMask Diagnostics:', diagnostics);
    alert('Diagnostics affichés dans la console');
  };

  return (
    <div className="metamask-connect">
      <div className="metamask-header">
        <h2>🦊 MetaMask Connection</h2>
        <button 
          onClick={showDiagnostics}
          className="diagnostics-btn"
          title="Afficher les diagnostics"
        >
          🔍
        </button>
      </div>

      {!state.isAvailable && (
        <div className="metamask-error">
          <p>❌ MetaMask n'est pas détecté</p>
          <p>Veuillez installer MetaMask et redémarrer Chrome</p>
          <button 
            onClick={() => window.open('https://metamask.io/', '_blank')}
            className="install-btn"
          >
            Installer MetaMask
          </button>
        </div>
      )}

      {state.isAvailable && !state.isConnected && (
        <div className="metamask-connect-section">
          <p>✅ MetaMask détecté</p>
          <button 
            onClick={handleConnect}
            disabled={isConnecting}
            className="connect-btn"
          >
            {isConnecting ? '⏳ Connexion...' : '🔗 Connecter MetaMask'}
          </button>
        </div>
      )}

      {state.isConnected && state.account && (
        <div className="metamask-connected">
          <div className="account-info">
            <p><strong>Compte:</strong> {formatAddress(state.account)}</p>
            {state.balance && (
              <p><strong>Solde:</strong> {formatBalance(state.balance)} ETH</p>
            )}
            {state.chainId && (
              <p><strong>Réseau:</strong> {getChainName(state.chainId)}</p>
            )}
          </div>
          
          <div className="action-buttons">
            <button 
              onClick={handleSwitchToChiliz}
              className="switch-network-btn"
            >
              🌶️ Passer à Chiliz Chain
            </button>
            <button 
              onClick={handleDisconnect}
              className="disconnect-btn"
            >
              🔌 Déconnecter
            </button>
          </div>
        </div>
      )}

      {state.error && (
        <div className="metamask-error">
          <p>❌ {state.error}</p>
          <button 
            onClick={() => setState(prev => ({ ...prev, error: null }))}
            className="clear-error-btn"
          >
            ✖️ Effacer
          </button>
        </div>
      )}
    </div>
  );
};

export default MetaMaskConnect; 