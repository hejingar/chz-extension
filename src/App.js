import React, { useState, useEffect } from 'react';
import './App.css';
import WalletProvider, { useWallet } from './context/WalletProvider';
import NetworkChecker from './components/NetworkChecker';
import RoundUpSettings from './components/RoundUpSettings';
import TestnetHelper from './components/TestnetHelper';
import { NETWORK } from './constants.js';

const CHZ_SPICY_CHAIN_ID = NETWORK.CHILIZ_SPICY.CHAIN_ID_HEX;

function App() {
  const {
    // Wallet state
    account,
    chainId,
    isAuthenticated,
    
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
    confirmRoundUp,
    declineRoundUp
  } = useWallet();

  // State for UI
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isConnecting, setIsConnecting] = useState(false);
  const [testAmount, setTestAmount] = useState('0.1');
  const [testAddress, setTestAddress] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  // Initialize test address with user's address
  useEffect(() => {
    if (account && !testAddress) {
      setTestAddress(account);
    }
  }, [account, testAddress]);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    setTransactionStatus('');
    
    try {
      await connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setTransactionStatus('Failed to connect wallet: ' + error.message);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnectWallet = async () => {
    try {
      await disconnectWallet();
      setTransactionStatus('Wallet disconnected');
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      setTransactionStatus('Failed to disconnect wallet: ' + error.message);
    }
  };

  const handleSendTestTransaction = async () => {
    if (!testAddress || !testAmount) {
      setTransactionStatus('Please enter both address and amount');
      return;
    }

    try {
      setTransactionStatus('Sending transaction...');
      
      const txHash = await sendTransaction(testAddress, testAmount);
      setTransactionStatus('Transaction sent! Hash: ' + txHash);
      
      // Clear form
      setTestAmount('0.1');
      setTestAddress(account);
      
    } catch (error) {
      console.error('Transaction failed:', error);
      setTransactionStatus('Transaction failed: ' + error.message);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTransactionStatus('');
  };

  const isCorrectNetwork = chainId === CHZ_SPICY_CHAIN_ID;

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <div className="logo-section">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L22.5 6v12L12 24L1.5 18V6L12 0z" fill="#FF6B35"/>
              <path d="M12 4L19.5 8v8L12 20L4.5 16V8L12 4z" fill="#FFF"/>
            </svg>
            <h1>GoodStake</h1>
          </div>
          
          <div className="connection-status">
            {isAuthenticated ? (
              <div className="connected-info">
                <span className="status-dot connected"></span>
                <span className="address">
                  {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connected'}
                </span>
              </div>
            ) : (
              <div className="disconnected-info">
                <span className="status-dot disconnected"></span>
                <span>Not Connected</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="App-main">
        {/* Navigation Tabs */}
        <nav className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleTabChange('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`tab-button ${activeTab === 'wallet' ? 'active' : ''}`}
            onClick={() => handleTabChange('wallet')}
          >
            Wallet
          </button>
          <button 
            className={`tab-button ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => handleTabChange('settings')}
          >
            Settings
          </button>
        </nav>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="dashboard-tab">
              <div className="dashboard-header">
                <h2>GoodStake Dashboard</h2>
                <p>Track your CHZ savings automatically</p>
              </div>

              <div className="savings-summary">
                <div className="summary-card total-saved">
                  <h3>Total Saved</h3>
                  <div className="amount">
                    <span className="value">{totalSaved}</span>
                    <span className="currency">CHZ</span>
                  </div>
                </div>

                <div className="summary-card auto-save-status">
                  <h3>GoodStake Status</h3>
                  <div className="status-indicator">
                    <span className={`status-dot ${roundUpSettings.enabled ? 'enabled' : 'disabled'}`}></span>
                    <span className="status-text">
                      {roundUpSettings.enabled ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="status-details">
                    <p>Amount per transaction: {roundUpSettings.fixedAmount} CHZ</p>
                    <p>Daily limit: {roundUpSettings.maxPerDay} CHZ</p>
                  </div>
                </div>
              </div>

              {isAuthenticated && !isCorrectNetwork && (
                <div className="network-warning">
                  <h3>⚠️ Wrong Network</h3>
                  <p>Please switch to CHZ Spicy Testnet to use GoodStake features.</p>
                </div>
              )}

              {!isAuthenticated && (
                <div className="connect-prompt">
                  <h3>Connect Your Wallet</h3>
                  <p>Connect MetaMask to start saving CHZ automatically with every transaction.</p>
                  <button 
                    className="btn btn-primary"
                    onClick={handleConnectWallet}
                    disabled={isConnecting}
                  >
                    {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Wallet Tab */}
          {activeTab === 'wallet' && (
            <div className="wallet-tab">
              <div className="wallet-header">
                <h2>Wallet Connection</h2>
                <p>Connect and manage your MetaMask wallet</p>
              </div>

              <div className="wallet-section">
                {!isAuthenticated ? (
                  <div className="connect-wallet">
                    <h3>Connect MetaMask</h3>
                    <p>Connect your MetaMask wallet to start using GoodStake.</p>
                    <button 
                      className="btn btn-primary"
                      onClick={handleConnectWallet}
                      disabled={isConnecting}
                    >
                      {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
                    </button>
                  </div>
                ) : (
                  <div className="wallet-connected">
                    <h3>Wallet Connected</h3>
                    <div className="wallet-info">
                      <div className="info-row">
                        <span className="label">Account:</span>
                        <span className="value">{account}</span>
                      </div>
                      <div className="info-row">
                        <span className="label">Chain ID:</span>
                        <span className="value">{chainId}</span>
                      </div>
                      <div className="info-row">
                        <span className="label">Network:</span>
                        <span className={`value ${isCorrectNetwork ? 'correct' : 'incorrect'}`}>
                          {isCorrectNetwork ? 'CHZ Spicy Testnet ✓' : 'Wrong Network ⚠️'}
                        </span>
                      </div>
                    </div>
                    
                    <button 
                      className="btn btn-secondary"
                      onClick={handleDisconnectWallet}
                    >
                      Disconnect Wallet
                    </button>
                  </div>
                )}
              </div>

              {/* Network Setup */}
              {isAuthenticated && (
                <div className="network-section">
                  <NetworkChecker />
                </div>
              )}

              {/* Testnet Helper */}
              {isAuthenticated && (
                <div className="testnet-helper">
                  <TestnetHelper />
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="settings-tab">
              <div className="settings-header">
                <h2>GoodStake Settings</h2>
                <p>Configure your automatic CHZ savings</p>
              </div>

              <div className="settings-section">
                <RoundUpSettings 
                  settings={roundUpSettings}
                  onUpdateSettings={updateRoundUpSettings}
                  isAuthenticated={isAuthenticated}
                />
              </div>

              {!isAuthenticated && (
                <div className="settings-notice">
                  <p>Connect your wallet to setup GoodStake.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Round-up Confirmation Dialog */}
      {showRoundUpDialog && pendingRoundUp && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>💰 Auto-Save Confirmation</h3>
            </div>
            <div className="modal-body">
              <p>We detected a transaction from your wallet!</p>
              <p>Would you like to add <strong>{pendingRoundUp.amount} CHZ</strong> to your savings?</p>
              <div className="savings-info">
                <div className="info-row">
                  <span>Amount to save:</span>
                  <span>{pendingRoundUp.amount} CHZ</span>
                </div>
                <div className="info-row">
                  <span>Daily limit:</span>
                  <span>{pendingRoundUp.maxPerDay} CHZ</span>
                </div>
                <div className="info-row">
                  <span>Saved today:</span>
                  <span>{pendingRoundUp.dailySaved} CHZ</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={declineRoundUp}
                disabled={isRoundUpActive}
              >
                Not Now
              </button>
              <button 
                className="btn btn-primary"
                onClick={confirmRoundUp}
                disabled={isRoundUpActive}
              >
                {isRoundUpActive ? 'Processing...' : 'Save CHZ'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Main App component wrapped with WalletProvider
function AppWrapper() {
  return (
    <WalletProvider>
      <App />
    </WalletProvider>
  );
}

export default AppWrapper; 