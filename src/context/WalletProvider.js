import React from 'react';
import createMetaMaskProvider from 'metamask-extension-provider';
import Web3 from 'web3';
import { getNormalizeAddress } from '../utils';
import { EthereumEvents } from '../utils/events';
import storage from '../utils/storage';

export const WalletContext = React.createContext();
export const useWallet = () => React.useContext(WalletContext);

export function withWallet(Component) {
    const WalletComponent = props => (
        <WalletContext.Consumer>
            {contexts => <Component {...props} {...contexts} />}
        </WalletContext.Consumer>
    );
    return WalletComponent;
}

const WalletProvider = React.memo(({ children }) => {
    const [chainId, setChainId] = React.useState(null);
    const [account, setAccount] = React.useState(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [web3, setWeb3] = React.useState(null);
    const [provider, setProvider] = React.useState(null);
    const [roundUpSettings, setRoundUpSettings] = React.useState({
        enabled: false,
        roundUpTo: 5,
        maxPerTransaction: 10
    });
    const [isRoundUpActive, setIsRoundUpActive] = React.useState(false);
    const [totalSaved, setTotalSaved] = React.useState(0);

    const getProvider = () => {
        if (window.ethereum) {
            console.log('🔗 Found window.ethereum');
            return window.ethereum;
        } else {
            console.log('🔗 Creating MetaMask provider');
            const provider = createMetaMaskProvider();
            return provider;
        }
    }

    const connectWallet = async () => {
        try {
            const provider = getProvider();
            const web3Instance = new Web3(provider);
            
            // Request account access
            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            const chainId = await provider.request({ method: 'eth_chainId' });
            
            setProvider(provider);
            setWeb3(web3Instance);
            setAccount(getNormalizeAddress(accounts));
            setChainId(chainId);
            setIsAuthenticated(true);
            
            // Load round-up settings
            await loadRoundUpSettings();
            
            // Set up event listeners
            setupEventListeners(provider);
            
            // Store connection
            await storage.set('wallet', { 
                account: getNormalizeAddress(accounts), 
                chainId,
                connected: true 
            });
            
            console.log('✅ Wallet connected successfully');
            
        } catch (error) {
            console.error('❌ Failed to connect wallet:', error);
            throw error;
        }
    };

    const disconnectWallet = async () => {
        try {
            // Remove event listeners
            if (provider) {
                removeEventListeners(provider);
            }
            
            // Clear state
            setProvider(null);
            setWeb3(null);
            setAccount(null);
            setChainId(null);
            setIsAuthenticated(false);
            setIsRoundUpActive(false);
            
            // Clear storage
            await storage.set('wallet', { connected: false });
            
            console.log('✅ Wallet disconnected');
        } catch (error) {
            console.error('❌ Failed to disconnect wallet:', error);
        }
    };

    const setupEventListeners = (provider) => {
        provider.on(EthereumEvents.ACCOUNTS_CHANGED, handleAccountsChanged);
        provider.on(EthereumEvents.CHAIN_CHANGED, handleChainChanged);
        provider.on(EthereumEvents.CONNECT, handleConnect);
        provider.on(EthereumEvents.DISCONNECT, handleDisconnect);
    };

    const removeEventListeners = (provider) => {
        provider.removeListener(EthereumEvents.ACCOUNTS_CHANGED, handleAccountsChanged);
        provider.removeListener(EthereumEvents.CHAIN_CHANGED, handleChainChanged);
        provider.removeListener(EthereumEvents.CONNECT, handleConnect);
        provider.removeListener(EthereumEvents.DISCONNECT, handleDisconnect);
    };

    const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
            disconnectWallet();
        } else {
            setAccount(getNormalizeAddress(accounts));
        }
    };

    const handleChainChanged = (chainId) => {
        setChainId(chainId);
    };

    const handleConnect = (connectInfo) => {
        console.log('🔗 Connected to chain:', connectInfo.chainId);
    };

    const handleDisconnect = (error) => {
        console.log('🔌 Disconnected:', error);
        disconnectWallet();
    };

    // Round-up functionality
    const loadRoundUpSettings = async () => {
        try {
            const response = await sendToBackground({
                action: 'GET_ROUNDUP_SETTINGS'
            });
            
            if (response.success) {
                setRoundUpSettings(response.data);
            }
        } catch (error) {
            console.error('❌ Failed to load round-up settings:', error);
        }
    };

    const updateRoundUpSettings = async (newSettings) => {
        try {
            const response = await sendToBackground({
                action: 'SET_ROUNDUP_SETTINGS',
                settings: newSettings
            });
            
            if (response.success) {
                setRoundUpSettings(newSettings);
                console.log('✅ Round-up settings updated');
            }
        } catch (error) {
            console.error('❌ Failed to update round-up settings:', error);
            throw error;
        }
    };

    const monitorTransaction = async (txHash) => {
        if (!account) return;
        
        try {
            await sendToBackground({
                action: 'MONITOR_TRANSACTION',
                txHash: txHash,
                userAddress: account
            });
            
            console.log('🔍 Transaction monitoring started:', txHash);
        } catch (error) {
            console.error('❌ Failed to monitor transaction:', error);
        }
    };

    const sendTransaction = async (to, value, data = '0x') => {
        if (!web3 || !account) {
            throw new Error('Wallet not connected');
        }

        try {
            const txParams = {
                from: account,
                to: to,
                value: web3.utils.toWei(value.toString(), 'ether'),
                data: data
            };

            const txHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [txParams]
            });

            console.log('📤 Transaction sent:', txHash);
            
            // Monitor transaction for round-up if enabled
            if (roundUpSettings.enabled) {
                await monitorTransaction(txHash);
            }
            
            return txHash;
        } catch (error) {
            console.error('❌ Transaction failed:', error);
            throw error;
        }
    };

    const executeRoundUpDeposit = async (amount) => {
        if (!web3 || !account) {
            throw new Error('Wallet not connected');
        }

        try {
            setIsRoundUpActive(true);
            
            // TODO: Replace with your actual smart contract address
            const contractAddress = '0x1234567890123456789012345678901234567890';
            
            const txParams = {
                from: account,
                to: contractAddress,
                value: web3.utils.toWei(amount.toString(), 'ether'),
                data: '0x' // Call deposit function
            };

            const txHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [txParams]
            });

            console.log('💰 Round-up deposit sent:', txHash);
            
            // Update total saved
            setTotalSaved(prev => prev + amount);
            
            return txHash;
        } catch (error) {
            console.error('❌ Round-up deposit failed:', error);
            throw error;
        } finally {
            setIsRoundUpActive(false);
        }
    };

    const sendToBackground = (message) => {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage(message, (response) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(response);
                }
            });
        });
    };

    // Initialize wallet connection on mount
    React.useEffect(() => {
        const initializeWallet = async () => {
            try {
                const walletData = await storage.get('wallet');
                if (walletData && walletData.connected) {
                    await connectWallet();
                }
            } catch (error) {
                console.error('❌ Failed to initialize wallet:', error);
            }
        };

        initializeWallet();
    }, []);

    // Listen for round-up triggers from background
    React.useEffect(() => {
        const handleBackgroundMessage = (message, sender, sendResponse) => {
            if (message.action === 'TRIGGER_ROUNDUP_DEPOSIT') {
                executeRoundUpDeposit(message.amount)
                    .then(txHash => {
                        sendResponse({ success: true, txHash });
                    })
                    .catch(error => {
                        sendResponse({ success: false, error: error.message });
                    });
                return true; // Keep message channel open
            }
        };

        chrome.runtime.onMessage.addListener(handleBackgroundMessage);
        
        return () => {
            chrome.runtime.onMessage.removeListener(handleBackgroundMessage);
        };
    }, [account, web3, roundUpSettings]);

    const value = {
        // Wallet state
        account,
        chainId,
        isAuthenticated,
        web3,
        provider,
        
        // Wallet methods
        connectWallet,
        disconnectWallet,
        sendTransaction,
        
        // Round-up state
        roundUpSettings,
        isRoundUpActive,
        totalSaved,
        
        // Round-up methods
        updateRoundUpSettings,
        executeRoundUpDeposit,
        monitorTransaction
    };

    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    );
});

export default WalletProvider; 