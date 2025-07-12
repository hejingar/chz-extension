import React from 'react';
import './App.css';
import { useWallet } from './context/WalletProvider';

function App() {
  const { isAuthenticated, connectWallet, disconnectWallet, account, chainId } = useWallet();
  
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
        <div className="app-actions">
          <button disabled={!isAuthenticated}>Send Transaction</button>
          <button disabled={!isAuthenticated}>Sign Message</button>
          <button disabled={!isAuthenticated}>Get Balance</button>
          <button disabled={!isAuthenticated}>CHZ Operations</button>
        </div>
      </div>
    </div>
  );
}

export default App; 