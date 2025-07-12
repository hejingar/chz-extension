const { ethers } = require('ethers');
const WebSocket = require('ws');
const EventEmitter = require('events');

class ChilizConnection extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;
    this.provider = null;
    this.websocket = null;
    this.wallet = null;
    this.contract = null;
    this.isConnected = false;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectInterval = 5000;
  }

  async initialize() {
    try {
      // Initialize HTTP provider for transactions
      this.provider = new ethers.JsonRpcProvider(this.config.httpUrl);
      
      // Initialize wallet
      this.wallet = new ethers.Wallet(this.config.privateKey, this.provider);
      
      // Test connection
      const network = await this.provider.getNetwork();
      console.log(`Connected to Chiliz network: ${network.name} (Chain ID: ${network.chainId})`);
      
      // Initialize WebSocket connection
      await this.initializeWebSocket();
      
      this.emit('connected');
      return true;
    } catch (error) {
      console.error('Failed to initialize Chiliz connection:', error);
      this.emit('error', error);
      return false;
    }
  }

  async initializeWebSocket() {
    return new Promise((resolve, reject) => {
      try {
        this.websocket = new WebSocket(this.config.wsUrl);
        
        this.websocket.on('open', () => {
          console.log('WebSocket connection established to Chiliz');
          this.isConnected = true;
          this.reconnectAttempts = 0;
          
          // Subscribe to new blocks
          this.subscribeToNewBlocks();
          resolve();
        });

        this.websocket.on('message', (data) => {
          try {
            const message = JSON.parse(data);
            this.handleWebSocketMessage(message);
          } catch (error) {
            console.error('Error parsing WebSocket message:', error);
          }
        });

        this.websocket.on('close', () => {
          console.log('WebSocket connection closed');
          this.isConnected = false;
          this.handleReconnection();
        });

        this.websocket.on('error', (error) => {
          console.error('WebSocket error:', error);
          reject(error);
        });

      } catch (error) {
        reject(error);
      }
    });
  }

  subscribeToNewBlocks() {
    const subscription = {
      jsonrpc: '2.0',
      id: 1,
      method: 'eth_subscribe',
      params: ['newHeads']
    };
    
    if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
      this.websocket.send(JSON.stringify(subscription));
    }
  }

  handleWebSocketMessage(message) {
    if (message.method === 'eth_subscription') {
      const result = message.params.result;
      if (result.number) {
        this.emit('newBlock', {
          blockNumber: parseInt(result.number, 16),
          blockHash: result.hash,
          timestamp: parseInt(result.timestamp, 16)
        });
      }
    }
  }

  handleReconnection() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
      
      setTimeout(() => {
        this.initializeWebSocket().catch(error => {
          console.error('Reconnection failed:', error);
        });
      }, this.reconnectInterval);
    } else {
      console.error('Max reconnection attempts reached');
      this.emit('disconnected');
    }
  }

  async getBalance(address = null) {
    try {
      const targetAddress = address || this.wallet.address;
      const balance = await this.provider.getBalance(targetAddress);
      return ethers.formatEther(balance);
    } catch (error) {
      console.error('Error getting balance:', error);
      throw error;
    }
  }

  async getGasPrice() {
    try {
      const gasPrice = await this.provider.getFeeData();
      return gasPrice;
    } catch (error) {
      console.error('Error getting gas price:', error);
      throw error;
    }
  }

  async sendTransaction(to, value, data = '0x') {
    try {
      const transaction = {
        to,
        value: ethers.parseEther(value.toString()),
        data,
        gasLimit: 21000
      };

      if (data !== '0x') {
        // Estimate gas for contract interactions
        transaction.gasLimit = await this.provider.estimateGas(transaction);
      }

      const tx = await this.wallet.sendTransaction(transaction);
      console.log(`Transaction sent: ${tx.hash}`);
      
      const receipt = await tx.wait();
      console.log(`Transaction confirmed in block: ${receipt.blockNumber}`);
      
      return {
        hash: tx.hash,
        receipt
      };
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  }

  disconnect() {
    if (this.websocket) {
      this.websocket.close();
    }
    this.isConnected = false;
    console.log('Disconnected from Chiliz network');
  }
}

module.exports = ChilizConnection;
