require('dotenv').config();
const ChilizService = require('./src/chiliz-service');
const fs = require('fs');
const path = require('path');

// Load configuration from environment variables
const config = {
  wsUrl: process.env.CHILIZ_WS_URL || 'wss://spicy-rpc.chiliz.com',
  httpUrl: process.env.CHILIZ_HTTP_URL || 'https://spicy-rpc.chiliz.com',
  privateKey: process.env.PRIVATE_KEY,
  walletAddress: process.env.WALLET_ADDRESS,
  contractAddress: process.env.CONTRACT_ADDRESS,
  contractABI: null,
  chainId: process.env.CHILIZ_CHAIN_ID || 88888
};

// Load contract ABI if specified
if (process.env.CONTRACT_ABI_PATH) {
  try {
    const abiPath = path.resolve(process.env.CONTRACT_ABI_PATH);
    if (fs.existsSync(abiPath)) {
      const abiData = JSON.parse(fs.readFileSync(abiPath, 'utf8'));
      config.contractABI = abiData.abi || abiData;
      console.log('Contract ABI loaded successfully');
    } else {
      console.warn('Contract ABI file not found:', abiPath);
    }
  } catch (error) {
    console.error('Error loading contract ABI:', error);
  }
}

// Validate required configuration
if (!config.privateKey) {
  console.error('ERROR: PRIVATE_KEY environment variable is required');
  process.exit(1);
}

if (config.privateKey === 'your_private_key_here') {
  console.error('ERROR: Please set a real private key in your .env file');
  process.exit(1);
}

async function startService() {
  try {
    console.log('Starting Chiliz Private Service...');
    console.log('Configuration:');
    console.log(`- WebSocket URL: ${config.wsUrl}`);
    console.log(`- HTTP URL: ${config.httpUrl}`);
    console.log(`- Chain ID: ${config.chainId}`);
    console.log(`- Contract Address: ${config.contractAddress || 'Not specified'}`);
    console.log(`- Contract ABI: ${config.contractABI ? 'Loaded' : 'Not loaded'}`);

    const service = new ChilizService(config);
    await service.initialize();
    service.start();

    console.log('✅ Chiliz Private Service started successfully!');
    console.log('📡 Listening for blockchain events...');
    console.log('🔗 Ready to process smart contract interactions');
    console.log('🔒 Service is private and secure - no HTTP server exposed');

  } catch (error) {
    console.error('❌ Failed to start service:', error);
    process.exit(1);
  }
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Start the service
startService();
