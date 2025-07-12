import React from 'react';
import { createRoot } from 'react-dom/client';
import MetaMaskConnect from './components/MetaMaskConnect';
import './styles/popup.css';

const Popup: React.FC = () => {
  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1>CHZ Extension</h1>
        <span className="version">v1.0.0</span>
      </header>
      
      <main className="popup-main">
        <MetaMaskConnect />
      </main>
      
      <footer className="popup-footer">
        <p>Extension Chrome pour Chiliz Chain 2.0</p>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Popup />);
} 