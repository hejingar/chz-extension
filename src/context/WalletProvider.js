import React from 'react';
import createMetaMaskProvider from 'metamask-extension-provider';
import Web3 from 'web3';
import { getNormalizeAddress } from '../utils';
import { EthereumEvents } from '../utils/events';
import storage from '../utils/storage';

// Smart contract configuration
const SAVINGS_CONTRACT_ADDRESS = '0x06693a6dcf15f0226535e0ad5dd461a76c59c485';
const SAVINGS_CONTRACT_ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "DepositReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "WithdrawalRequested",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "amountDeposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimWithdrawal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "adr",
          "type": "address"
        }
      ],
      "name": "getAmountDeposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAvailableBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "adr",
          "type": "address"
        }
      ],
      "name": "getPendingWithdrawAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "adr",
          "type": "address"
        }
      ],
      "name": "getTimeToClaim",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "pendingWithdrawals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "requestWithdrawal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "timeAtWithdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalPendingWithdrawals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawToStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
];

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
        fixedAmount: 5, // Fixed CHZ amount to save per transaction
        maxPerDay: 50 // Maximum CHZ to save per day
    });
    const [isRoundUpActive, setIsRoundUpActive] = React.useState(false);
    const [totalSaved, setTotalSaved] = React.useState(0);
    const [pendingRoundUp, setPendingRoundUp] = React.useState(null);
    const [showRoundUpDialog, setShowRoundUpDialog] = React.useState(false);

    const getProvider = () => {
        try {
            // First try to use window.ethereum if available
            if (typeof window !== 'undefined' && window.ethereum) {
                return window.ethereum;
            }
            
            // Fallback to creating MetaMask extension provider
            const extensionProvider = createMetaMaskProvider();
            
            // Add error handling for the provider
            if (extensionProvider) {
                extensionProvider.on('error', (error) => {
                    console.error('Provider error:', error);
                });
            }
            
            return extensionProvider;
        } catch (error) {
            console.error('Error creating provider:', error);
            return null;
        }
    }

    const connectWallet = async () => {
        try {
            const provider = getProvider();
            if (!provider) {
                throw new Error('No MetaMask provider available');
            }

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
            
            // Register user address for automatic transaction monitoring
            try {
                await sendToBackground({
                    action: 'REGISTER_USER_ADDRESS',
                    userAddress: getNormalizeAddress(accounts)
                });
            } catch (backgroundError) {
                console.warn('Could not register user address for monitoring:', backgroundError);
            }
            
            // Store connection
            await storage.set('wallet', { 
                account: getNormalizeAddress(accounts), 
                chainId,
                connected: true 
            });
            
        } catch (error) {
            console.error('Failed to connect wallet:', error);
            throw error;
        }
    };

    const disconnectWallet = async () => {
        try {
            // Unregister user address from monitoring
            if (account) {
                try {
                    await sendToBackground({
                        action: 'UNREGISTER_USER_ADDRESS',
                        userAddress: account
                    });
                } catch (backgroundError) {
                    console.warn('Could not unregister user address:', backgroundError);
                }
            }
            
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
            
        } catch (error) {
            console.error('Failed to disconnect wallet:', error);
        }
    };

    const setupEventListeners = (provider) => {
        try {
            provider.on(EthereumEvents.ACCOUNTS_CHANGED, handleAccountsChanged);
            provider.on(EthereumEvents.CHAIN_CHANGED, handleChainChanged);
            provider.on(EthereumEvents.CONNECT, handleConnect);
            provider.on(EthereumEvents.DISCONNECT, handleDisconnect);
        } catch (error) {
            console.error('Error setting up event listeners:', error);
        }
    };

    const removeEventListeners = (provider) => {
        try {
            provider.removeListener(EthereumEvents.ACCOUNTS_CHANGED, handleAccountsChanged);
            provider.removeListener(EthereumEvents.CHAIN_CHANGED, handleChainChanged);
            provider.removeListener(EthereumEvents.CONNECT, handleConnect);
            provider.removeListener(EthereumEvents.DISCONNECT, handleDisconnect);
        } catch (error) {
            console.error('Error removing event listeners:', error);
        }
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
        // Connected to chain
    };

    const handleDisconnect = (error) => {
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
            console.error('Failed to load round-up settings:', error);
        }
    };

    const loadTotalSaved = async () => {
        try {
            const saved = await storage.get('totalSaved');
            if (saved && typeof saved === 'number') {
                setTotalSaved(saved);
            }
        } catch (error) {
            console.error('Failed to load total saved:', error);
        }
    };

    const updateTotalSaved = async (amount) => {
        try {
            const newTotal = totalSaved + amount;
            setTotalSaved(newTotal);
            await storage.set('totalSaved', newTotal);
        } catch (error) {
            console.error('Failed to update total saved:', error);
        }
    };

    const checkForPendingRoundUp = async () => {
        try {
            const response = await sendToBackground({
                action: 'GET_PENDING_ROUNDUP'
            });
            
            if (response.success && response.data) {
                setPendingRoundUp(response.data);
                setShowRoundUpDialog(true);
            } else {
                setPendingRoundUp(null);
                setShowRoundUpDialog(false);
            }
        } catch (error) {
            console.error('Failed to check for pending round-up:', error);
        }
    };

    const confirmRoundUp = async () => {
        if (!pendingRoundUp) return;
        
        try {
            setIsRoundUpActive(true);
            
            // Notify background that user confirmed
            await sendToBackground({
                action: 'CONFIRM_ROUNDUP',
                userAddress: pendingRoundUp.userAddress,
                amount: pendingRoundUp.amount
            });
            
            // Execute the actual transaction
            await executeRoundUpDeposit(pendingRoundUp.amount);
            
            // Clear dialog
            setShowRoundUpDialog(false);
            setPendingRoundUp(null);
            
        } catch (error) {
            console.error('Failed to confirm round-up:', error);
            alert('Failed to process round-up: ' + error.message);
        } finally {
            setIsRoundUpActive(false);
        }
    };

    const declineRoundUp = async () => {
        try {
            // Notify background that user declined
            await sendToBackground({
                action: 'DECLINE_ROUNDUP'
            });
            
            // Clear dialog
            setShowRoundUpDialog(false);
            setPendingRoundUp(null);
            
        } catch (error) {
            console.error('Failed to decline round-up:', error);
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
            }
        } catch (error) {
            console.error('Failed to update round-up settings:', error);
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
            
        } catch (error) {
            console.error('Failed to monitor transaction:', error);
        }
    };

    const sendTransaction = async (to, value, data = '0x') => {
        if (!web3 || !account) {
            throw new Error('Wallet not connected');
        }

        try {
            const valueInWei = web3.utils.toWei(value.toString(), 'ether');

            const txParams = {
                from: account,
                to: to,
                value: valueInWei,
                data: data
            };

            const txHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [txParams]
            });
            
            // Monitor transaction for round-up if enabled
            if (roundUpSettings.enabled) {
                await monitorTransaction(txHash);
            }
            
            return txHash;
        } catch (error) {
            console.error('Transaction failed:', error);
            throw error;
        }
    };

    const executeRoundUpDeposit = async (amount) => {
        if (!web3 || !account) {
            throw new Error('Wallet not connected');
        }

        try {
            setIsRoundUpActive(true);
            
            // Create contract instance
            const contract = new web3.eth.Contract(SAVINGS_CONTRACT_ABI, SAVINGS_CONTRACT_ADDRESS);
            
            const amountInWei = web3.utils.toWei(amount.toString(), 'ether');

            // Encode the deposit function call
            const depositData = contract.methods.deposit().encodeABI();
            
            // Convert amount to hex properly (avoiding precision loss)
            const amountHex = web3.utils.toHex(amountInWei);
            
            // Estimate gas for the transaction
            let estimatedGas;
            try {
                estimatedGas = await contract.methods.deposit().estimateGas({
                    from: account,
                    value: amountInWei
                });
            } catch (gasError) {
                console.warn('Could not estimate gas, using default:', gasError);
                estimatedGas = 50000; // Default fallback
            }

            // Create transaction parameters for contract call
            const txParams = {
                from: account,
                to: SAVINGS_CONTRACT_ADDRESS,
                value: amountHex,
                data: depositData,
                gas: web3.utils.toHex(Math.ceil(estimatedGas * 1.2)) // 20% buffer on estimated gas
            };

            const txHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [txParams]
            });
            
            // Update total saved
            await updateTotalSaved(amount);
            
            return txHash;
        } catch (error) {
            console.error('Auto-save deposit to contract failed:', error);
            
            // Provide more specific error messages
            if (error.message.includes('insufficient funds')) {
                throw new Error('Insufficient CHZ balance for deposit');
            } else if (error.message.includes('gas')) {
                throw new Error('Transaction failed due to gas issues. Please try again.');
            } else if (error.message.includes('user rejected')) {
                throw new Error('Transaction was rejected by user');
            } else {
                throw new Error(`Deposit failed: ${error.message}`);
            }
        } finally {
            setIsRoundUpActive(false);
        }
    };

    const sendToBackground = (message) => {
        return new Promise((resolve, reject) => {
            // Check if chrome runtime is available
            if (typeof chrome === 'undefined' || !chrome.runtime) {
                reject(new Error('Chrome runtime not available'));
                return;
            }

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
                
                // Load total saved amount
                await loadTotalSaved();
            } catch (error) {
                console.error('Failed to initialize wallet:', error);
            }
        };

        initializeWallet();
    }, []);

    // Check for pending round-up requests when wallet connects
    React.useEffect(() => {
        if (isAuthenticated && account) {
            checkForPendingRoundUp();
            
            // Set up interval to check periodically
            const interval = setInterval(checkForPendingRoundUp, 5000); // Check every 5 seconds
            
            return () => clearInterval(interval);
        }
    }, [isAuthenticated, account]);

    // Listen for background messages
    React.useEffect(() => {
        const handleBackgroundMessage = (message, sender, sendResponse) => {
            // Check for pending round-up when any message is received
            if (isAuthenticated && account) {
                checkForPendingRoundUp();
            }
            
            sendResponse({ success: true });
        };

        // Only add listener if chrome runtime is available
        if (typeof chrome !== 'undefined' && chrome.runtime) {
            chrome.runtime.onMessage.addListener(handleBackgroundMessage);
            
            return () => {
                chrome.runtime.onMessage.removeListener(handleBackgroundMessage);
            };
        }
    }, [isAuthenticated, account]);

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
        pendingRoundUp,
        showRoundUpDialog,
        
        // Round-up methods
        updateRoundUpSettings,
        executeRoundUpDeposit,
        monitorTransaction,
        confirmRoundUp,
        declineRoundUp,
        checkForPendingRoundUp
    };

    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    );
});

export default WalletProvider; 