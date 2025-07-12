require('dotenv').config();
const { ethers } = require('ethers');

async function testTransaction() {
  try {
    console.log('🧪 Testing transaction monitoring...');
    
    // Initialize provider and wallet
    const provider = new ethers.JsonRpcProvider(process.env.CHILIZ_HTTP_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    
    console.log(`Wallet address: ${wallet.address}`);
    
    // Get current balance
    const balance = await provider.getBalance(wallet.address);
    console.log(`Current balance: ${ethers.formatEther(balance)} CHZ`);
    
    // Send a small self-transaction (0.001 CHZ)
    const tx = await wallet.sendTransaction({
      to: wallet.address, // Send to self
      value: ethers.parseEther('0.001'),
      gasLimit: 21000
    });
    
    console.log(`🚀 Test transaction sent: ${tx.hash}`);
    console.log('⏳ Waiting for confirmation...');
    
    const receipt = await tx.wait();
    console.log(`✅ Transaction confirmed in block ${receipt.blockNumber}`);
    
  } catch (error) {
    console.error('❌ Error sending test transaction:', error);
  }
}

testTransaction();
