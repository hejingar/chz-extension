import React from 'react';
import { useWallet } from '../context/WalletProvider';
import './TestnetHelper.css';

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
        <div className="testnet-helper">
            <div className="testnet-header">
                <h3>🧪 Testnet Mode</h3>
                <p>You're using Chiliz Spicy testnet - perfect for testing!</p>
            </div>

            <div className="testnet-actions">
                <div className="action-card">
                    <div className="action-icon">🚰</div>
                    <div className="action-content">
                        <h4>Get Test CHZ</h4>
                        <p>Need CHZ tokens to test transactions? Get free testnet CHZ from the faucet.</p>
                        <button onClick={openFaucet} className="action-button faucet-btn">
                            🚰 Open Faucet
                        </button>
                    </div>
                </div>

                <div className="action-card">
                    <div className="action-icon">🔍</div>
                    <div className="action-content">
                        <h4>View on Explorer</h4>
                        <p>Check your account balance and transaction history on the testnet explorer.</p>
                        <button onClick={openExplorer} className="action-button explorer-btn">
                            🔍 View Account
                        </button>
                    </div>
                </div>
            </div>

            <div className="testnet-info">
                <h4>ℹ️ Testnet Information:</h4>
                <ul>
                    <li><strong>No real value:</strong> Testnet CHZ has no monetary value</li>
                    <li><strong>Free tokens:</strong> Get unlimited test CHZ from the faucet</li>
                    <li><strong>Safe testing:</strong> Perfect for testing your round-up functionality</li>
                    <li><strong>Reset anytime:</strong> You can always get more tokens if needed</li>
                </ul>
            </div>

            <div className="quick-links">
                <h4>🔗 Quick Links:</h4>
                <div className="links-grid">
                    <a 
                        href="https://spicy-faucet.chiliz.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quick-link"
                    >
                        Testnet Faucet
                    </a>
                    <a 
                        href="https://scan.chiliz.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quick-link"
                    >
                        Block Explorer
                    </a>
                    <a 
                        href="https://docs.chiliz.com/chiliz-chain/getting-started" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="quick-link"
                    >
                        Documentation
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TestnetHelper; 