import React from 'react';
import { useWallet } from '../context/WalletProvider';
import './NetworkChecker.css';

const NetworkChecker = () => {
    const { chainId, isAuthenticated, provider } = useWallet();

    const CHILIZ_SPICY_CHAIN_ID = '0x15b52'; // 88882 in hex (Chiliz Spicy Testnet)
    const CHILIZ_SPICY_CONFIG = {
        chainId: '0x15b52',
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
            '0x15b52': { name: 'Chiliz Spicy Testnet', color: '#ff6b35' },
            '0xaa36a7': { name: 'Sepolia Testnet', color: '#ff6b35' }
        };
        
        return networks[chainId] || { name: `Chain ${parseInt(chainId, 16)}`, color: '#666' };
    };

    if (!isAuthenticated) {
        return null;
    }

    const networkInfo = getNetworkInfo();

    return (
        <div className="network-checker">
            <div className="network-status">
                <div className="network-info">
                    <div 
                        className="network-dot" 
                        style={{ backgroundColor: networkInfo.color }}
                    ></div>
                    <span className="network-name">{networkInfo.name}</span>
                </div>
                
                {!isOnChilizNetwork && (
                    <div className="network-warning">
                        <p>⚠️ You're not on Chiliz Spicy testnet!</p>
                        <p>Switch to Chiliz Spicy to test transactions.</p>
                        <button 
                            onClick={switchToChiliz}
                            className="switch-network-btn"
                        >
                            🔄 Switch to Chiliz Spicy
                        </button>
                    </div>
                )}

                {isOnChilizNetwork && (
                    <div className="network-success">
                        <p>✅ Connected to Chiliz Spicy testnet</p>
                        <p>Ready for transactions!</p>
                    </div>
                )}
            </div>

            <div className="network-details">
                <h4>🔗 Network Details:</h4>
                <ul>
                    <li><strong>Chain ID:</strong> {chainId} ({parseInt(chainId, 16)})</li>
                    <li><strong>Currency:</strong> {isOnChilizNetwork ? 'CHZ' : 'ETH'}</li>
                    <li><strong>RPC:</strong> {isOnChilizNetwork ? 'spicy-rpc.chiliz.com' : 'Various'}</li>
                </ul>
            </div>

            {!isOnChilizNetwork && (
                <div className="manual-setup">
                    <h4>📋 Manual Setup:</h4>
                    <p>If automatic switching fails, add Chiliz Spicy testnet manually:</p>
                    <div className="network-config">
                        <div className="config-item">
                            <strong>Network Name:</strong> Chiliz Spicy Testnet
                        </div>
                        <div className="config-item">
                            <strong>RPC URL:</strong> spicy-rpc.chiliz.com
                        </div>
                        <div className="config-item">
                            <strong>Chain ID:</strong> 88882
                        </div>
                        <div className="config-item">
                            <strong>Symbol:</strong> CHZ
                        </div>
                        <div className="config-item">
                            <strong>Explorer:</strong> scan.chiliz.com
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NetworkChecker; 