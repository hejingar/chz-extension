import React from 'react';
import { useWallet } from '../context/WalletProvider';
import { FiWifi, FiWifiOff, FiRefreshCw } from 'react-icons/fi';

const NetworkChecker = () => {
    const { chainId, isAuthenticated, provider } = useWallet();

    const CHILIZ_SPICY_CHAIN_ID = '0x15b32'; // 88882 in hex (Chiliz Spicy Testnet)
    const CHILIZ_SPICY_CONFIG = {
        chainId: '0x15b32',
        chainName: 'Chiliz Spicy Testnet',
        nativeCurrency: {
            name: 'CHZ',
            symbol: 'CHZ',
            decimals: 18
        },
        rpcUrls: ['https://spicy-rpc.chiliz.com'],
        blockExplorerUrls: ['https://scan.chiliz.com/']
    };

    const isOnChilizNetwork = chainId === CHILIZ_SPICY_CHAIN_ID;

    const switchToChiliz = async () => {
        if (!provider) {
            alert('Please connect your wallet first');
            return;
        }

        try {
            // Try to switch to Chiliz Spicy testnet
            await provider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: CHILIZ_SPICY_CHAIN_ID }]
            });
        } catch (switchError) {
            // If the chain is not added to MetaMask, add it
            if (switchError.code === 4902) {
                try {
                    await provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [CHILIZ_SPICY_CONFIG]
                    });
                } catch (addError) {
                    console.error('Failed to add Chiliz Spicy testnet:', addError);
                    alert('Failed to add Chiliz Spicy testnet. Please add it manually.');
                }
            } else {
                console.error('Failed to switch network:', switchError);
                alert('Failed to switch to Chiliz Spicy testnet.');
            }
        }
    };

    const getNetworkInfo = () => {
        if (!chainId) return { name: 'Unknown', color: '#666' };
        
        const networks = {
            '0x1': { name: 'Ethereum Mainnet', color: '#627eea' },
            '0x89': { name: 'Polygon', color: '#8247e5' },
            '0x38': { name: 'BSC', color: '#f3ba2f' },
            '0x15b3': { name: 'Chiliz Mainnet', color: '#ff6b35' },
            '0x15b32': { name: 'Chiliz Spicy Testnet', color: '#ff6b35' },
            '0xaa36a7': { name: 'Sepolia Testnet', color: '#ff6b35' }
        };
        
        return networks[chainId] || { name: `Chain ${parseInt(chainId, 16)}`, color: '#666' };
    };

    if (!isAuthenticated) {
        return null;
    }

    const networkInfo = getNetworkInfo();

    return (
        <div className="space-y-6">
            {/* Network Status */}
            <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                    <div 
                        className="w-3 h-3 rounded-full animate-pulse-soft"
                        style={{ backgroundColor: networkInfo.color }}
                    ></div>
                    <span className="text-lg font-semibold text-gray-900">{networkInfo.name}</span>
                </div>
                
                {!isOnChilizNetwork && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <FiWifiOff className="w-5 h-5 text-yellow-600" />
                            <p className="text-yellow-800 font-medium">You're not on Chiliz Spicy testnet!</p>
                        </div>
                        <p className="text-yellow-700 text-sm mb-3">Switch to Chiliz Spicy to test transactions.</p>
                        <button 
                            onClick={switchToChiliz}
                            className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors duration-200 flex items-center space-x-2"
                        >
                            <FiRefreshCw className="w-4 h-4" />
                            <span>Switch to Chiliz Spicy</span>
                        </button>
                    </div>
                )}

                {isOnChilizNetwork && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <FiWifi className="w-5 h-5 text-green-600" />
                            <p className="text-green-800 font-medium">Connected to Chiliz Spicy testnet</p>
                        </div>
                        <p className="text-green-700 text-sm">Ready for transactions!</p>
                    </div>
                )}
            </div>

            {/* Network Details */}
            <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <span>🔗</span>
                    <span>Network Details</span>
                </h4>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Chain ID:</span>
                        <span className="text-sm text-gray-900 font-mono bg-white px-2 py-1 rounded">
                            {chainId} ({parseInt(chainId, 16)})
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Currency:</span>
                        <span className="text-sm text-gray-900 font-mono bg-white px-2 py-1 rounded">
                            {isOnChilizNetwork ? 'CHZ' : 'ETH'}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">RPC:</span>
                        <span className="text-sm text-gray-900 font-mono bg-white px-2 py-1 rounded">
                            {isOnChilizNetwork ? 'spicy-rpc.chiliz.com' : 'Various'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Manual Setup */}
            {!isOnChilizNetwork && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <span>📋</span>
                        <span>Manual Setup</span>
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                        If automatic switching fails, add Chiliz Spicy testnet manually:
                    </p>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Network Name:</span>
                            <span className="text-sm text-gray-900 font-mono bg-white px-2 py-1 rounded">
                                Chiliz Spicy Testnet
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">RPC URL:</span>
                            <span className="text-sm text-gray-900 font-mono bg-white px-2 py-1 rounded">
                                spicy-rpc.chiliz.com
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Chain ID:</span>
                            <span className="text-sm text-gray-900 font-mono bg-white px-2 py-1 rounded">
                                88882
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Symbol:</span>
                            <span className="text-sm text-gray-900 font-mono bg-white px-2 py-1 rounded">
                                CHZ
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">Explorer:</span>
                            <span className="text-sm text-gray-900 font-mono bg-white px-2 py-1 rounded">
                                scan.chiliz.com
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NetworkChecker; 