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
    
    // Round-up state
    roundUpSettings,
    isRoundUpActive,
    totalSaved,
    pendingRoundUp,
    showRoundUpDialog,
    
    // Round-up methods
    updateRoundUpSettings,
    executeRoundUpDeposit,
    confirmRoundUp,
    declineRoundUp,
    loadTotalSaved,
    
    // Withdrawal state
    pendingWithdrawal,
    withdrawalCountdown,
    isWithdrawing,
    isClaiming,
    
    // Withdrawal methods
    executeWithdrawal,
    executeClaimWithdrawal,
    cancelWithdrawal
  } = useWallet();

  // State for UI
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isConnecting, setIsConnecting] = useState(false);
  const [testAddress, setTestAddress] = useState('');
  
  // State for manual deposit
  const [depositAmount, setDepositAmount] = useState('');
  const [isDepositing, setIsDepositing] = useState(false);
  const [depositError, setDepositError] = useState('');

  // State for withdrawal
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [withdrawalError, setWithdrawalError] = useState('');

  // Initialize test address with user's address
  useEffect(() => {
    if (account && !testAddress) {
      setTestAddress(account);
    }
  }, [account, testAddress]);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    
    try {
      await connectWallet();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnectWallet = async () => {
    try {
      await disconnectWallet();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleManualDeposit = async () => {
    if (!depositAmount || isNaN(depositAmount) || parseFloat(depositAmount) <= 0) {
      setDepositError('Please enter a valid amount');
      return;
    }

    const amount = parseFloat(depositAmount);
    
    // Basic validation
    if (amount < 0.01) {
      setDepositError('Minimum deposit is 0.01 CHZ');
      return;
    }

    setIsDepositing(true);
    setDepositError('');

    try {
      const txHash = await executeRoundUpDeposit(amount);
      
      // Reset form on success
      setDepositAmount('');
      
      // Reload total saved amount
      if (loadTotalSaved) {
        await loadTotalSaved();
      }
      
      console.log('Manual deposit successful:', txHash);
    } catch (error) {
      console.error('Manual deposit failed:', error);
      setDepositError(error.message || 'Deposit failed. Please try again.');
    } finally {
      setIsDepositing(false);
    }
  };

  const handleWithdrawal = async () => {
    if (!withdrawalAmount || isNaN(withdrawalAmount) || parseFloat(withdrawalAmount) <= 0) {
      setWithdrawalError('Please enter a valid withdrawal amount');
      return;
    }

    const amount = parseFloat(withdrawalAmount);
    
    if (amount > totalSaved) {
      setWithdrawalError(`Cannot withdraw ${amount} CHZ. You only have ${totalSaved} CHZ saved.`);
      return;
    }

    try {
      setWithdrawalError('');
      await executeWithdrawal(amount);
      setWithdrawalAmount('');
      alert(`Withdrawal request successful! You can claim your ${amount} CHZ in 1 hour.`);
    } catch (error) {
      console.error('Withdrawal failed:', error);
      setWithdrawalError(error.message || 'Withdrawal failed. Please try again.');
    }
  };

  const handleClaimWithdrawal = async () => {
    try {
      setWithdrawalError('');
      await executeClaimWithdrawal();
      alert(`Withdrawal claimed successfully! Your CHZ has been transferred to your wallet.`);
    } catch (error) {
      console.error('Claim failed:', error);
      setWithdrawalError(error.message || 'Claim failed. Please try again.');
    }
  };

  const handleCancelWithdrawal = async () => {
    const confirm = window.confirm('Are you sure you want to cancel your withdrawal request?');
    if (confirm) {
      await cancelWithdrawal();
    }
  };

  const formatCountdown = (countdown) => {
    if (!countdown) return '';
    const { hours, minutes, seconds } = countdown;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
          <button 
            className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleTabChange('about')}
          >
            About
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

              {/* Manual Deposit Section */}
              {isAuthenticated && isCorrectNetwork && (
                <div className="manual-deposit-section">
                  <div className="deposit-card">
                    <h3>💰 Manual Deposit</h3>
                    <p>Instantly add CHZ to your savings</p>
                    
                    <div className="deposit-form">
                      <div className="input-group">
                        <input
                          type="number"
                          placeholder="Enter CHZ amount"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          min="0.01"
                          step="0.01"
                          disabled={isDepositing}
                          className="deposit-input"
                        />
                        <span className="input-suffix">CHZ</span>
                      </div>
                      
                      {depositError && (
                        <div className="error-message">
                          {depositError}
                        </div>
                      )}
                      
                      <button 
                        className="btn btn-primary deposit-btn"
                        onClick={handleManualDeposit}
                        disabled={isDepositing || !depositAmount || isNaN(depositAmount) || parseFloat(depositAmount) <= 0}
                      >
                        {isDepositing ? 'Processing...' : 'Deposit CHZ'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Withdrawal Section */}
              {isAuthenticated && isCorrectNetwork && (
                <div className="withdrawal-section">
                  <div className="withdrawal-card">
                    <h3>🔄 Withdraw CHZ</h3>
                    <p>Withdraw your saved CHZ back to your wallet</p>
                    
                    {!pendingWithdrawal ? (
                      <div className="withdrawal-form">
                        <div className="input-group">
                          <input
                            type="number"
                            placeholder="Enter CHZ amount to withdraw"
                            value={withdrawalAmount}
                            onChange={(e) => setWithdrawalAmount(e.target.value)}
                            min="0.01"
                            step="0.01"
                            max={totalSaved}
                            disabled={isWithdrawing}
                            className="withdrawal-input"
                          />
                          <span className="input-suffix">CHZ</span>
                        </div>
                        
                        <div className="available-balance">
                          Available to withdraw: {totalSaved} CHZ
                        </div>
                        
                        {withdrawalError && (
                          <div className="error-message">
                            {withdrawalError}
                          </div>
                        )}
                        
                        <button 
                          className="btn btn-secondary withdrawal-btn"
                          onClick={handleWithdrawal}
                          disabled={isWithdrawing || !withdrawalAmount || isNaN(withdrawalAmount) || parseFloat(withdrawalAmount) <= 0 || parseFloat(withdrawalAmount) > totalSaved}
                        >
                          {isWithdrawing ? 'Processing...' : 'Request Withdrawal'}
                        </button>
                      </div>
                    ) : (
                      <div className="withdrawal-status">
                        {pendingWithdrawal.status === 'pending' && (
                          <div className="pending-withdrawal">
                            <div className="status-header">
                              <span className="status-icon">⏳</span>
                              <h4>Withdrawal Pending</h4>
                            </div>
                            <div className="withdrawal-details">
                              <div className="detail-row">
                                <span>Amount:</span>
                                <span>{pendingWithdrawal.amount} CHZ</span>
                              </div>
                              <div className="detail-row">
                                <span>Time remaining:</span>
                                <span className="countdown">{formatCountdown(withdrawalCountdown)}</span>
                              </div>
                            </div>
                            <div className="withdrawal-info">
                              <p>⏰ Your withdrawal will be ready to claim in <strong>{formatCountdown(withdrawalCountdown)}</strong></p>
                              <p>💡 The 1-hour waiting period is required by the validator for the unstacking process.</p>
                            </div>
                          </div>
                        )}
                        
                        {pendingWithdrawal.status === 'ready' && (
                          <div className="ready-withdrawal">
                            <div className="status-header">
                              <span className="status-icon">✅</span>
                              <h4>Ready to Claim</h4>
                            </div>
                            <div className="withdrawal-details">
                              <div className="detail-row">
                                <span>Amount:</span>
                                <span>{pendingWithdrawal.amount} CHZ</span>
                              </div>
                            </div>
                            <div className="withdrawal-info">
                              <p>🎉 Your withdrawal is ready! Click below to claim your CHZ.</p>
                            </div>
                            <div className="withdrawal-actions">
                              <button 
                                className="btn btn-primary claim-btn"
                                onClick={handleClaimWithdrawal}
                                disabled={isClaiming}
                              >
                                {isClaiming ? 'Claiming...' : `Claim ${pendingWithdrawal.amount} CHZ`}
                              </button>
                              <button 
                                className="btn btn-outline cancel-btn"
                                onClick={handleCancelWithdrawal}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* PSG Foundation Impact */}
              <div className="psg-foundation-info">
                <div className="impact-card">
                  <h3>🏆 Making a Difference</h3>
                  <p>When you save CHZ with GoodStake, your tokens are staked to earn rewards. All staking rewards are donated to the <strong><a href="https://www.psg.fr/psg-for-communities/fondation" target="_blank" rel="noopener noreferrer" className="psg-link">PSG Foundation</a></strong>, which helps disadvantaged youth and sick children by financing education and sports programs.</p>
                  <div className="impact-highlights">
                    <div className="highlight">
                      <span className="icon">🎓</span>
                      <span>Education Programs</span>
                    </div>
                    <div className="highlight">
                      <span className="icon">⚽</span>
                      <span>Sports Programs</span>
                    </div>
                    <div className="highlight">
                      <span className="icon">❤️</span>
                      <span>Helping Children</span>
                    </div>
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

          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="about-tab">
              <div className="about-header">
                <h2>About GoodStake</h2>
                <p>Learn how GoodStake works and helps make a difference</p>
              </div>

              <div className="about-section">
                <div className="feature-card">
                  <h3>🔄 How It Works</h3>
                  <p>When you make any transaction with your MetaMask wallet connected to GoodStake, you'll be prompted to save an amount of CHZ tokens by making a transaction to our smart contract, which will stake these tokens.</p>
                </div>

                <div className="feature-card">
                  <h3>💰 Flexible Withdrawals</h3>
                  <p>You can withdraw any amount of your saved tokens at any time, with a 3-day delay (imposed by the validators). You'll get back the original amount of saved tokens.</p>
                </div>

                <div className="feature-card">
                  <h3>🎯 Your Impact</h3>
                  <p>The rewards from staking your tokens are donated to the <a href="https://www.psg.fr/psg-for-communities/fondation" target="_blank" rel="noopener noreferrer" className="psg-link">PSG Foundation</a>, which helps disadvantaged youth and sick children by financing education and sports programs. Your savings make a real difference!</p>
                </div>

                <div className="feature-card">
                  <h3>🔒 Security & Control</h3>
                  <p>You maintain full control of your tokens. The staking is done on your behalf, and you can withdraw your original amount at any time. Only the staking rewards are donated to charity.</p>
                </div>

                {/* Technical Details Section */}
                <div className="feature-card">
                  <h3>🔐 Delegation Process</h3>
                  <p>Since CHZ does not allow delegating tokens directly in smart contracts, you entrust us with the staking of your tokens. Your tokens go through the owner wallet of the smart contract before being directly staked to a Chiliz validator, and then withdrawn at your demand.</p>
                </div>

                <div className="feature-card">
                  <h3>🗃️ Data Storage</h3>
                  <p>All data is stored on-chain. We do not have a database or an API. This ensures transparency and decentralization - everything is verifiable on the blockchain.</p>
                </div>

                <div className="feature-card">
                  <h3>⚡ Smart Contract</h3>
                  <p>Our smart contract handles all the logic for deposits, withdrawals, and tracking your savings. The contract is transparent and auditable on the blockchain.</p>
                </div>

                <div className="feature-card">
                  <h3>🔄 Staking Flow</h3>
                  <div className="flow-steps">
                    <div className="step">1. You deposit CHZ to our contract</div>
                    <div className="step">2. Contract owner stakes tokens to validator</div>
                    <div className="step">3. Staking rewards go to <a href="https://www.psg.fr/psg-for-communities/fondation" target="_blank" rel="noopener noreferrer" className="psg-link">PSG Foundation</a></div>
                    <div className="step">4. You can withdraw original amount anytime</div>
                  </div>
                </div>
              </div>
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