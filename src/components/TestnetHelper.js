import React from 'react';
import { useWallet } from '../context/WalletProvider';
import { FiDroplet, FiEye, FiExternalLink, FiBook } from 'react-icons/fi';

const TestnetHelper = () => {
    const { chainId, isAuthenticated, account } = useWallet();

    const CHILIZ_SPICY_CHAIN_ID = '0x15b32'; // 88882 in hex
    const isOnSpicyTestnet = chainId === CHILIZ_SPICY_CHAIN_ID;

    const openFaucet = () => {
        window.open('https://spicy-faucet.chiliz.com/', '_blank');
    };

    const openExplorer = () => {
        if (account) {
            window.open(`https://scan.chiliz.com/address/${account}`, '_blank');
        }
    };

    if (!isAuthenticated || !isOnSpicyTestnet) {
        return null;
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center pb-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-center space-x-2">
                    <span>🧪</span>
                    <span>Testnet Mode</span>
                </h3>
                <p className="text-gray-600">
                    You're using Chiliz Spicy testnet - perfect for testing!
                </p>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 hover:from-blue-100 hover:to-blue-200 transition-all duration-200">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg text-white mb-3">
                            <FiDroplet className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Get Test CHZ</h4>
                        <p className="text-sm text-gray-700 mb-4">
                            Need CHZ tokens to test transactions? Get free testnet CHZ from the faucet.
                        </p>
                        <button 
                            onClick={openFaucet} 
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
                        >
                            <FiDroplet className="w-4 h-4" />
                            <span>Open Faucet</span>
                        </button>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4 hover:from-orange-100 hover:to-orange-200 transition-all duration-200">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg text-white mb-3">
                            <FiEye className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">View on Explorer</h4>
                        <p className="text-sm text-gray-700 mb-4">
                            Check your account balance and transaction history on the testnet explorer.
                        </p>
                        <button 
                            onClick={openExplorer} 
                            className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
                        >
                            <FiEye className="w-4 h-4" />
                            <span>View Account</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Testnet Information */}
            <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <span>ℹ️</span>
                    <span>Testnet Information</span>
                </h4>
                <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                        <div>
                            <span className="font-medium text-gray-900">No real value:</span>
                            <span className="text-gray-700 ml-1">Testnet CHZ has no monetary value</span>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                        <div>
                            <span className="font-medium text-gray-900">Free tokens:</span>
                            <span className="text-gray-700 ml-1">Get unlimited test CHZ from the faucet</span>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                        <div>
                            <span className="font-medium text-gray-900">Safe testing:</span>
                            <span className="text-gray-700 ml-1">Perfect for testing your round-up functionality</span>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                        <div>
                            <span className="font-medium text-gray-900">Reset anytime:</span>
                            <span className="text-gray-700 ml-1">You can always get more tokens if needed</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                    <span>🔗</span>
                    <span>Quick Links</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <a 
                        href="https://spicy-faucet.chiliz.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 justify-center"
                    >
                        <FiDroplet className="w-4 h-4" />
                        <span>Testnet Faucet</span>
                        <FiExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                        href="https://scan.chiliz.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 justify-center"
                    >
                        <FiEye className="w-4 h-4" />
                        <span>Block Explorer</span>
                        <FiExternalLink className="w-3 h-3" />
                    </a>
                    <a 
                        href="https://docs.chiliz.com/chiliz-chain/getting-started" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white bg-opacity-20 text-white hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 justify-center"
                    >
                        <FiBook className="w-4 h-4" />
                        <span>Documentation</span>
                        <FiExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TestnetHelper; 