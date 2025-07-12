import React, { useState } from 'react';
import './App.css';
import { useWallet } from './context/WalletProvider';
import RoundUpSettings from './components/RoundUpSettings';

function App() {
  const { isAuthenticated, connectWallet, disconnectWallet, account, chainId, sendTransaction } = useWallet();
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
      const txHash = await sendTransaction(account, 0.1); // Send 0.1 CHZ to yourself
      setLastTxHash(txHash);
      alert(`Test transaction sent! Hash: ${txHash.substring(0, 10)}...`);
    } catch (error) {
      console.error('❌ Test transaction failed:', error);
      alert('Test transaction failed. Please try again.');
    } finally {
      setIsTestingTx(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>CHZ Extension</h3>
        <button onClick={isAuthenticated ? disconnectWallet : connectWallet} id="wallet-connect">
          {isAuthenticated ? "Disconnect Wallet" : "Connect Wallet"}
        </button>
      </header>
      
      <div className="App-body">
        {isAuthenticated && (
          <div className="wallet-info">
            <p><strong>Account:</strong> {account}</p>
            <p><strong>Chain ID:</strong> {chainId}</p>
          </div>
        )}
        
        <RoundUpSettings />
        
        {isAuthenticated && (
          <div className="app-actions">
            <button 
              onClick={handleTestTransaction}
              disabled={isTestingTx}
              className="test-transaction-btn"
            >
              {isTestingTx ? '🔄 Sending Test Transaction...' : '🧪 Test Transaction (0.1 CHZ)'}
            </button>
            
            {lastTxHash && (
              <div className="last-transaction">
                <p><strong>Last Transaction:</strong></p>
                <p className="tx-hash">{lastTxHash}</p>
              </div>
            )}
            
            <div className="instructions">
              <h4>💡 How to test Round-Up:</h4>
              <ol>
                <li>Enable Round-Up Savings above</li>
                <li>Set your preferred round-up amount</li>
                <li>Click "Test Transaction" to send 0.1 CHZ to yourself</li>
                <li>Watch for the automatic round-up deposit!</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; 