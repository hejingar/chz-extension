import React, { useState } from 'react';
import './App.css';
import { useWallet } from './context/WalletProvider';
import AutoSaveSettings from './components/RoundUpSettings';

function App() {
  const { 
    isAuthenticated, 
    connectWallet, 
    disconnectWallet, 
    account, 
    chainId, 
    sendTransaction,
    pendingRoundUp,
    showRoundUpDialog,
    confirmRoundUp,
    declineRoundUp,
    isRoundUpActive,
    totalSaved,
    roundUpSettings
  } = useWallet();
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isTestingTx, setIsTestingTx] = useState(false);
  const [lastTxHash, setLastTxHash] = useState('');

  const handleTestTransaction = async () => {
    if (!isAuthenticated) {
      alert('Please connect your wallet first');
      return;
    }

    setIsTestingTx(true);
    try {
      // Send a small test transaction to yourself
      const txHash = await sendTransaction(account, 0.0001); // Send 0.0001 CHZ to yourself
      setLastTxHash(txHash);
      alert(`Test transaction sent! Hash: ${txHash.substring(0, 10)}...`);
    } catch (error) {
      console.error('❌ Test transaction failed:', error);
      alert('Test transaction failed. Please try again.');
    } finally {
      setIsTestingTx(false);
    }
  };

  const renderWalletTab = () => (
    <div className="tab-content">
      <div className="wallet-tab-header">
        <h2>🔗 Wallet Connection</h2>
        <p>Connect your MetaMask wallet to start using CHZ Auto-Save</p>
      </div>
      
      <div className="wallet-connection-section">
        <button 
          onClick={isAuthenticated ? disconnectWallet : connectWallet} 
          className={`wallet-connect-btn ${isAuthenticated ? 'connected' : ''}`}
        >
          {isAuthenticated ? "🔓 Disconnect Wallet" : "🔐 Connect Wallet"}
        </button>
        
        {isAuthenticated && (
          <div className="wallet-info">
            <div className="wallet-info-item">
              <strong>Account:</strong> 
              <span className="wallet-address">{account}</span>
            </div>
            <div className="wallet-info-item">
              <strong>Chain ID:</strong> 
              <span className="chain-id">{chainId}</span>
            </div>
            <div className="wallet-status">
              <span className="status-indicator"></span>
              Connected to Chiliz Spicy Testnet
            </div>
          </div>
        )}
      </div>

      {isAuthenticated && (
        <div className="test-section">
          <h3>🧪 Test Transaction</h3>
          <p>Send a test transaction to trigger the auto-save feature</p>
          <button 
            onClick={handleTestTransaction}
            disabled={isTestingTx}
            className="test-transaction-btn"
          >
            {isTestingTx ? '🔄 Sending Test Transaction...' : '🧪 Test Transaction (0.0001 CHZ)'}
          </button>
          
          {lastTxHash && (
            <div className="last-transaction">
              <p><strong>Last Transaction:</strong></p>
              <p className="tx-hash">{lastTxHash}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );

  const renderSettingsTab = () => (
    <div className="tab-content">
      <div className="settings-tab-header">
        <h2>⚙️ Auto-Save Settings</h2>
        <p>Configure your automatic CHZ saving preferences</p>
      </div>
      
      <AutoSaveSettings />
      
      <div className="settings-info">
        <h4>💡 How Auto-Save Works:</h4>
        <ul>
          <li>Enable Auto-Save to start monitoring your transactions</li>
          <li>Set a fixed amount to save with each transaction</li>
          <li>Set a daily limit to control your total savings</li>
          <li>When you send a transaction, you'll get a confirmation dialog</li>
          <li>Choose whether to save or skip for each transaction</li>
        </ul>
      </div>
    </div>
  );

  const renderDashboardTab = () => (
    <div className="tab-content">
      <div className="dashboard-header">
        <h2>💰 CHZ Auto-Save Dashboard</h2>
        <p>Track your automatic savings and manage transactions</p>
      </div>
      
      <div className="savings-summary">
        <div className="savings-card">
          <div className="savings-icon">🏦</div>
          <div className="savings-content">
            <h3>Total Saved</h3>
            <div className="savings-amount">{totalSaved.toFixed(2)} CHZ</div>
          </div>
        </div>
        
        <div className="savings-card">
          <div className="savings-icon">⚙️</div>
          <div className="savings-content">
            <h3>Auto-Save Status</h3>
            <div className={`savings-status ${roundUpSettings.enabled ? 'active' : 'inactive'}`}>
              {roundUpSettings.enabled ? 'Active' : 'Inactive'}
            </div>
          </div>
        </div>
        
        <div className="savings-card">
          <div className="savings-icon">💎</div>
          <div className="savings-content">
            <h3>Amount per Transaction</h3>
            <div className="savings-amount">{roundUpSettings.fixedAmount} CHZ</div>
          </div>
        </div>
      </div>

      {!isAuthenticated && (
        <div className="connect-prompt">
          <p>👆 Connect your wallet to start tracking your CHZ savings!</p>
          <button 
            onClick={() => setActiveTab('wallet')}
            className="connect-prompt-btn"
          >
            Go to Wallet Tab
          </button>
        </div>
      )}

      {isAuthenticated && !roundUpSettings.enabled && (
        <div className="setup-prompt">
          <p>⚙️ Enable Auto-Save in Settings to start saving CHZ automatically!</p>
          <button 
            onClick={() => setActiveTab('settings')}
            className="setup-prompt-btn"
          >
            Go to Settings
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h3>CHZ Extension</h3>
        <nav className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={`tab-btn ${activeTab === 'wallet' ? 'active' : ''}`}
            onClick={() => setActiveTab('wallet')}
          >
            🔗 Wallet
          </button>
          <button 
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            ⚙️ Settings
          </button>
        </nav>
      </header>
      
      <div className="App-body">
        {activeTab === 'dashboard' && renderDashboardTab()}
        {activeTab === 'wallet' && renderWalletTab()}
        {activeTab === 'settings' && renderSettingsTab()}
      </div>

      {/* Round-up Confirmation Dialog */}
      {showRoundUpDialog && pendingRoundUp && (
        <div className="round-up-dialog-overlay">
          <div className="round-up-dialog">
            <div className="round-up-dialog-header">
              <h3>💰 Auto-Save Available</h3>
            </div>
            <div className="round-up-dialog-body">
              <p>🎉 <strong>Transaction detected!</strong></p>
              <p>Would you like to save <strong>{pendingRoundUp.amount} CHZ</strong> to your account?</p>
              {pendingRoundUp.originalTxHash && (
                <p className="tx-details">
                  <small>Original transaction: {pendingRoundUp.originalTxHash.substring(0, 10)}...</small>
                </p>
              )}
            </div>
            <div className="round-up-dialog-actions">
              <button 
                onClick={declineRoundUp}
                className="round-up-dialog-btn round-up-dialog-btn-secondary"
                disabled={isRoundUpActive}
              >
                ❌ No, thanks
              </button>
              <button 
                onClick={confirmRoundUp}
                className="round-up-dialog-btn round-up-dialog-btn-primary"
                disabled={isRoundUpActive}
              >
                {isRoundUpActive ? '🔄 Saving...' : '✅ Yes, save it!'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 