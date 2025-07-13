/*global chrome*/
import React from 'react';
import createMetaMaskProvider from 'metamask-extension-provider';
import Web3 from 'web3';
import { getNormalizeAddress } from '../utils';
import { EthereumEvents } from '../utils/events';
import storage from '../utils/storage';
import { SMART_CONTRACT, ROUNDUP_DEFAULTS, ERROR_MESSAGES } from '../constants.js';

// Use smart contract configuration from constants
const SAVINGS_CONTRACT_ADDRESS = SMART_CONTRACT.SAVINGS.ADDRESS;
const SAVINGS_CONTRACT_ABI = SMART_CONTRACT.SAVINGS.ABI;

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
        enabled: ROUNDUP_DEFAULTS.ENABLED,
        fixedAmount: ROUNDUP_DEFAULTS.FIXED_AMOUNT, // Fixed CHZ amount to save per transaction
        maxPerDay: ROUNDUP_DEFAULTS.MAX_PER_DAY // Maximum CHZ to save per day
    });
    const [isRoundUpActive, setIsRoundUpActive] = React.useState(false);
    const [totalSaved, setTotalSaved] = React.useState(0);
    const [pendingRoundUp, setPendingRoundUp] = React.useState(null);
    const [showRoundUpDialog, setShowRoundUpDialog] = React.useState(false);

    // Withdrawal state
    const [pendingWithdrawal, setPendingWithdrawal] = React.useState(null);
    const [withdrawalCountdown, setWithdrawalCountdown] = React.useState(null);
    const [isWithdrawing, setIsWithdrawing] = React.useState(false);
    const [isClaiming, setIsClaiming] = React.useState(false);

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
        if (!web3 || !account) {
            console.warn('Cannot load total saved: wallet not connected');
            return;
        }

        try {
            // Create contract instance
            const contract = new web3.eth.Contract(SAVINGS_CONTRACT_ABI, SAVINGS_CONTRACT_ADDRESS);
            
            // Call getAmountDeposit view function
            const amountInWei = await contract.methods.getAmountDeposit(account).call();
            
            // Convert from Wei to CHZ
            const amountInCHZ = parseFloat(web3.utils.fromWei(amountInWei, 'ether'));
            
            setTotalSaved(amountInCHZ);
            
            console.log(`Total saved loaded from contract: ${amountInCHZ} CHZ`);
        } catch (error) {
            console.error('Failed to load total saved from contract:', error);
            // Fallback to local storage if contract call fails
            try {
                const saved = await storage.get('totalSaved');
                if (saved && typeof saved === 'number') {
                    setTotalSaved(saved);
                }
            } catch (storageError) {
                console.error('Failed to load total saved from storage:', storageError);
            }
        }
    };

    const updateTotalSaved = async (amount) => {
        // This function is now mainly for UI updates
        // The actual total will be refreshed from contract after transaction
        try {
            const newTotal = totalSaved + amount;
            setTotalSaved(newTotal);
            
            // Refresh from contract after a short delay to get accurate data
            setTimeout(async () => {
                await loadTotalSaved();
            }, 3000);
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
            console.error('Auto-Save deposit to contract failed:', error);
            
            // Provide more specific error messages
            if (error.message.includes('insufficient funds')) {
                throw new Error(ERROR_MESSAGES.WALLET.INSUFFICIENT_FUNDS);
            } else if (error.message.includes('gas')) {
                throw new Error(ERROR_MESSAGES.TRANSACTION.GAS_ERROR);
            } else if (error.message.includes('user rejected')) {
                throw new Error(ERROR_MESSAGES.TRANSACTION.REJECTED);
            } else {
                throw new Error(`Deposit failed: ${error.message}`);
            }
        } finally {
            setIsRoundUpActive(false);
        }
    };

    const executeWithdrawal = async (amount) => {
        if (!web3 || !account) {
            throw new Error('Wallet not connected');
        }

        try {
            setIsWithdrawing(true);
            
            // Create contract instance
            const contract = new web3.eth.Contract(SAVINGS_CONTRACT_ABI, SAVINGS_CONTRACT_ADDRESS);
            
            const amountInWei = web3.utils.toWei(amount.toString(), 'ether');

            // First check if user has enough balance
            const userBalance = await contract.methods.getAmountDeposit(account).call();
            const userBalanceInCHZ = parseFloat(web3.utils.fromWei(userBalance, 'ether'));
            
            if (userBalanceInCHZ < amount) {
                throw new Error(`Insufficient balance. You have ${userBalanceInCHZ} CHZ but trying to withdraw ${amount} CHZ`);
            }

            // Check if user already has a pending withdrawal
            const pendingAmount = await contract.methods.getPendingWithdrawAmount(account).call();
            const pendingAmountInCHZ = parseFloat(web3.utils.fromWei(pendingAmount, 'ether'));
            
            if (pendingAmountInCHZ > 0) {
                throw new Error(`You already have a pending withdrawal of ${pendingAmountInCHZ} CHZ`);
            }

            // Encode the requestWithdrawal function call
            const withdrawalCallData = contract.methods.requestWithdrawal(amountInWei).encodeABI();
            
            // Estimate gas for the transaction
            let estimatedGas;
            try {
                estimatedGas = await contract.methods.requestWithdrawal(amountInWei).estimateGas({
                    from: account
                });
            } catch (gasError) {
                console.warn('Could not estimate gas, using default:', gasError);
                estimatedGas = 100000; // Default fallback
            }

            // Create transaction parameters for contract call
            const txParams = {
                from: account,
                to: SAVINGS_CONTRACT_ADDRESS,
                value: '0x0', // No value sent for withdrawal request
                data: withdrawalCallData,
                gas: web3.utils.toHex(Math.ceil(estimatedGas * 1.2)) // 20% buffer on estimated gas
            };

            const txHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [txParams]
            });
            
            // Start the 1-hour countdown
            const requestTime = Date.now();
            const claimTime = requestTime + (60 * 60 * 1000); // 1 hour from now
            
            const withdrawalData = {
                amount: amount,
                requestTime: requestTime,
                claimTime: claimTime,
                txHash: txHash,
                status: 'pending'
            };
            
            setPendingWithdrawal(withdrawalData);
            startWithdrawalCountdown(claimTime);
            
            // Store in local storage for persistence
            await storage.set('pendingWithdrawal', withdrawalData);
            
            return txHash;
        } catch (error) {
            console.error('Withdrawal request failed:', error);
            throw error;
        } finally {
            setIsWithdrawing(false);
        }
    };

    const startWithdrawalCountdown = (claimTime) => {
        const updateCountdown = () => {
            const now = Date.now();
            const timeLeft = claimTime - now;
            
            if (timeLeft <= 0) {
                setWithdrawalCountdown(null);
                // Update withdrawal status to ready
                setPendingWithdrawal(prev => prev ? { ...prev, status: 'ready' } : null);
                return;
            }
            
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            setWithdrawalCountdown({ hours, minutes, seconds, timeLeft });
        };
        
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        
        // Clear interval when countdown reaches zero
        setTimeout(() => {
            clearInterval(interval);
        }, claimTime - Date.now());
    };

    const executeClaimWithdrawal = async () => {
        if (!web3 || !account) {
            throw new Error('Wallet not connected');
        }

        if (!pendingWithdrawal || pendingWithdrawal.status !== 'ready') {
            throw new Error('No withdrawal ready to claim');
        }

        try {
            setIsClaiming(true);
            
            // Create contract instance
            const contract = new web3.eth.Contract(SAVINGS_CONTRACT_ABI, SAVINGS_CONTRACT_ADDRESS);

            // Encode the claimWithdrawal function call
            const claimData = contract.methods.claimWithdrawal().encodeABI();
            
            // Estimate gas for the transaction
            let estimatedGas;
            try {
                estimatedGas = await contract.methods.claimWithdrawal().estimateGas({
                    from: account
                });
            } catch (gasError) {
                console.warn('Could not estimate gas, using default:', gasError);
                estimatedGas = 100000; // Default fallback
            }

            // Create transaction parameters for contract call
            const txParams = {
                from: account,
                to: SAVINGS_CONTRACT_ADDRESS,
                value: '0x0', // No value sent for claim
                data: claimData,
                gas: web3.utils.toHex(Math.ceil(estimatedGas * 1.2)) // 20% buffer on estimated gas
            };

            const txHash = await provider.request({
                method: 'eth_sendTransaction',
                params: [txParams]
            });
            
            // Clear withdrawal state
            setPendingWithdrawal(null);
            setWithdrawalCountdown(null);
            
            // Clear from local storage
            await storage.set('pendingWithdrawal', null);
            
            // Refresh total saved amount
            await loadTotalSaved();
            
            return txHash;
        } catch (error) {
            console.error('Claim withdrawal failed:', error);
            throw error;
        } finally {
            setIsClaiming(false);
        }
    };

    const loadPendingWithdrawal = async () => {
        try {
            const storedWithdrawal = await storage.get('pendingWithdrawal');
            if (storedWithdrawal) {
                setPendingWithdrawal(storedWithdrawal);
                
                // Check if countdown should still be running
                if (storedWithdrawal.claimTime > Date.now()) {
                    startWithdrawalCountdown(storedWithdrawal.claimTime);
                } else {
                    // Time has passed, mark as ready
                    const updatedWithdrawal = { ...storedWithdrawal, status: 'ready' };
                    setPendingWithdrawal(updatedWithdrawal);
                    await storage.set('pendingWithdrawal', updatedWithdrawal);
                }
            }
        } catch (error) {
            console.error('Failed to load pending withdrawal:', error);
        }
    };

    const cancelWithdrawal = async () => {
        setPendingWithdrawal(null);
        setWithdrawalCountdown(null);
        await storage.set('pendingWithdrawal', null);
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

    // Load total saved when wallet connects and refresh periodically
    React.useEffect(() => {
        if (isAuthenticated && account && web3) {
            // Load immediately when wallet connects
            loadTotalSaved();
            
            // Set up interval to refresh total saved every 30 seconds
            const interval = setInterval(() => {
                loadTotalSaved();
            }, 30000); // Refresh every 30 seconds
            
            return () => clearInterval(interval);
        }
    }, [isAuthenticated, account, web3]);

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

    // Load pending withdrawal when wallet connects
    React.useEffect(() => {
        if (isAuthenticated && account) {
            loadPendingWithdrawal();
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
        checkForPendingRoundUp,
        loadTotalSaved,
        
        // Withdrawal state
        pendingWithdrawal,
        withdrawalCountdown,
        isWithdrawing,
        isClaiming,
        
        // Withdrawal methods
        executeWithdrawal,
        executeClaimWithdrawal,
        loadPendingWithdrawal,
        cancelWithdrawal
    };

    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    );
});

WalletProvider.displayName = 'WalletProvider';

export default WalletProvider; 