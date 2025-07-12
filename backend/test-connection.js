const ChilizConnection = require('./src/chiliz-connection');

async function testConnection() {
  console.log('Testing Chiliz connection...');
  
  const config = {
    wsUrl: 'wss://spicy-rpc.chiliz.com',
    httpUrl: 'https://spicy-rpc.chiliz.com',
    privateKey: '0x' + '0'.repeat(64) // Dummy private key for testing
  };

  const connection = new ChilizConnection(config);

  try {
    // Test only the public RPC connection (without wallet)
    const { ethers } = require('ethers');
    const provider = new ethers.JsonRpcProvider(config.httpUrl);
    
    console.log('Testing public RPC connection...');
    const network = await provider.getNetwork();
    console.log(`✅ Connected to network: ${network.name} (Chain ID: ${network.chainId})`);
    
    const blockNumber = await provider.getBlockNumber();
    console.log(`✅ Latest block number: ${blockNumber}`);
    
    console.log('🎉 Basic connection test successful!');
    console.log('📝 To use wallet features, please set up your .env file with a real private key');
    
  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
  }
}

if (require.main === module) {
  testConnection();
}

module.exports = testConnection;
