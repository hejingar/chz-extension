import React, { useState, useEffect } from 'react';
import WalletProvider, { useWallet } from './context/WalletProvider';
import NetworkChecker from './components/NetworkChecker';
import RoundUpSettings from './components/RoundUpSettings';
import TestnetHelper from './components/TestnetHelper';
import { FiCreditCard, FiCheckCircle, FiCircle, FiRefreshCw, FiX, FiTrendingUp, FiWallet } from 'react-icons/fi';

const CHZ_SPICY_CHAIN_ID = '0x15b32'; // 88882 in hex

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
    executeManualDeposit,
    confirmRoundUp,
    declineRoundUp
  } = useWallet();

  // State for UI
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isConnecting, setIsConnecting] = useState(false);
  const [testAmount, setTestAmount] = useState('0.1');
  const [testAddress, setTestAddress] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');
  const [manualDepositAmount, setManualDepositAmount] = useState('');
  const [isManualDepositing, setIsManualDepositing] = useState(false);
  const [manualDepositStatus, setManualDepositStatus] = useState('');

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

  const handleManualDeposit = async () => {
    if (!manualDepositAmount || manualDepositAmount <= 0) {
      setManualDepositStatus('Please enter a valid amount');
      return;
    }

    try {
      setIsManualDepositing(true);
      setManualDepositStatus('Processing deposit...');
      
      const txHash = await executeManualDeposit(parseFloat(manualDepositAmount));
      setManualDepositStatus(`Deposit successful! Transaction hash: ${txHash}`);
      
      // Clear form
      setManualDepositAmount('');
      
    } catch (error) {
      console.error('Manual deposit failed:', error);
      setManualDepositStatus('Deposit failed: ' + error.message);
    } finally {
      setIsManualDepositing(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTransactionStatus('');
    setManualDepositStatus('');
  };

  const isCorrectNetwork = chainId === CHZ_SPICY_CHAIN_ID;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-100 to-white shadow-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <img src="1.png" alt="GoodStake Logo" className="w-12 h-12 object-contain" />
              <h1 className="text-2xl font-bold text-gray-900">GoodStake</h1>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex space-x-2">
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'dashboard' 
                    ? 'bg-white text-gray-900 shadow-md font-semibold' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => handleTabChange('dashboard')}
              >
                Dashboard
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'wallet' 
                    ? 'bg-white text-gray-900 shadow-md font-semibold' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => handleTabChange('wallet')}
              >
                Wallet
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'settings' 
                    ? 'bg-white text-gray-900 shadow-md font-semibold' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => handleTabChange('settings')}
              >
                Settings
              </button>
            </nav>

            {/* Wallet Balance/Profile Placeholder */}
            <div className="flex items-center space-x-2">
              {isAuthenticated ? (
                <div className="flex items-center space-x-2 px-3 py-1 bg-white rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connected'}
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-500">Not Connected</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 mt-10">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Title Section */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold text-gray-900">GoodStake Dashboard</h2>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                Next-gen micro-saving automation for CHZ — empowering DeFi accessibility for everyone.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Total Saved Card */}
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FiCreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Total Saved</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-gray-900">{totalSaved}</span>
                    <span className="text-lg text-gray-600">CHZ</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiTrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-500 font-medium">+5% this week</span>
                  </div>
                </div>
              </div>

              {/* Auto-Save Status Card */}
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <FiCheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Auto-Save Status</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    roundUpSettings.enabled 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {roundUpSettings.enabled ? 'Active' : 'Inactive'}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${roundUpSettings.enabled ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <span className="text-sm text-gray-700">
                      Status: {roundUpSettings.enabled ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiRefreshCw className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700">
                      Amount per transaction: {roundUpSettings.fixedAmount} CHZ
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiX className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700">
                      Daily limit: {roundUpSettings.maxPerDay} CHZ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projected Savings Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FiTrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Projected Yearly Savings</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Based on saving 5 CHZ per day, you could save approximately:
              </p>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-blue-600">1,825</span>
                <span className="text-lg text-blue-600">CHZ</span>
                <span className="text-sm text-gray-500">per year</span>
              </div>
            </div>

            {/* Manual Deposit Section */}
            {isAuthenticated && isCorrectNetwork && (
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FiWallet className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Manual Deposit</h3>
                </div>
                <p className="text-gray-600 mb-6">Deposit CHZ directly to your savings contract</p>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="manualDepositAmount" className="block text-sm font-medium text-gray-700 mb-2">
                      Amount (CHZ)
                    </label>
                    <input
                      id="manualDepositAmount"
                      type="number"
                      value={manualDepositAmount}
                      onChange={(e) => setManualDepositAmount(e.target.value)}
                      placeholder="Enter amount to deposit"
                      step="0.01"
                      min="0"
                      disabled={isManualDepositing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  
                  <button 
                    onClick={handleManualDeposit}
                    disabled={isManualDepositing || !manualDepositAmount}
                    className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isManualDepositing ? 'Processing...' : 'Deposit CHZ'}
                  </button>
                  
                  {manualDepositStatus && (
                    <div className={`p-4 rounded-lg ${
                      manualDepositStatus.includes('successful') 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      <p className="text-sm font-medium break-all">{manualDepositStatus}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Network Warning */}
            {isAuthenticated && !isCorrectNetwork && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <FiX className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-800">Wrong Network</h3>
                </div>
                <p className="text-yellow-700">
                  Please switch to CHZ Spicy Testnet to use auto-save features.
                </p>
              </div>
            )}

            {/* Connect Wallet Prompt */}
            {!isAuthenticated && (
              <div className="bg-white rounded-2xl shadow-md p-12 border border-gray-100 text-center">
                <img src="2.png" alt="GoodStake" className="w-24 h-24 mx-auto mb-6 object-contain" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Connect Your Wallet</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Connect MetaMask to start saving CHZ automatically with every transaction.
                </p>
                <button 
                  onClick={handleConnectWallet}
                  disabled={isConnecting}
                  className="bg-gray-900 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isConnecting ? 'Connecting...' : 'Connect Wallet'}
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Wallet Tab */}
        {activeTab === 'wallet' && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold text-gray-900">Wallet Connection</h2>
              <p className="text-base text-gray-500">Connect and manage your MetaMask wallet</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              {!isAuthenticated ? (
                <div className="text-center space-y-6">
                  <div className="p-4 bg-blue-100 rounded-full inline-block">
                    <FiWallet className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Connect MetaMask</h3>
                  <p className="text-gray-600">Connect your MetaMask wallet to start using GoodStake.</p>
                  <button 
                    onClick={handleConnectWallet}
                    disabled={isConnecting}
                    className="bg-gray-900 text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="p-4 bg-green-100 rounded-full inline-block mb-4">
                      <FiCheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Wallet Connected</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Account:</span>
                      <span className="text-gray-900 font-mono text-sm bg-gray-100 px-3 py-1 rounded-lg">
                        {account}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Chain ID:</span>
                      <span className="text-gray-900 font-mono text-sm bg-gray-100 px-3 py-1 rounded-lg">
                        {chainId}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-medium text-gray-700">Network:</span>
                      <span className={`text-sm font-medium px-3 py-1 rounded-lg ${
                        isCorrectNetwork 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {isCorrectNetwork ? 'CHZ Spicy Testnet ✓' : 'Wrong Network ⚠️'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      onClick={handleDisconnectWallet}
                      className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
                    >
                      Disconnect Wallet
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Network Setup */}
            {isAuthenticated && (
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <NetworkChecker />
              </div>
            )}
            
            {/* Testnet Helper */}
            {isAuthenticated && (
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <TestnetHelper />
              </div>
            )}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold text-gray-900">GoodStake Settings</h2>
              <p className="text-base text-gray-500">Configure your automatic CHZ savings</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <RoundUpSettings 
                settings={roundUpSettings}
                onUpdateSettings={updateRoundUpSettings}
                isAuthenticated={isAuthenticated}
              />
            </div>

            {!isAuthenticated && (
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <p className="text-gray-600 font-medium">Connect your wallet to setup GoodStake.</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Round-up Confirmation Dialog */}
      {showRoundUpDialog && pendingRoundUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                <FiWallet className="w-6 h-6 text-green-600" />
                <span>Auto-Save Confirmation</span>
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-600">We detected a transaction from your wallet!</p>
              <p className="text-gray-600">
                Would you like to add <strong className="text-gray-900">{pendingRoundUp.amount} CHZ</strong> to your savings?
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Amount to save:</span>
                  <span className="text-sm font-semibold text-gray-900">{pendingRoundUp.amount} CHZ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Daily limit:</span>
                  <span className="text-sm font-semibold text-gray-900">{pendingRoundUp.maxPerDay} CHZ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Saved today:</span>
                  <span className="text-sm font-semibold text-gray-900">{pendingRoundUp.dailySaved} CHZ</span>
                </div>
              </div>
            </div>
            <div className="p-6 flex space-x-3">
              <button 
                onClick={declineRoundUp}
                disabled={isRoundUpActive}
                className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Skip
              </button>
              <button 
                onClick={confirmRoundUp}
                disabled={isRoundUpActive}
                className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isRoundUpActive ? 'Processing...' : 'Save Now'}
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