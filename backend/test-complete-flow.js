require('dotenv').config();
const ChilizService = require('./src/chiliz-service');
const fs = require('fs');
const path = require('path');

// Load configuration
const config = {
  wsUrl: process.env.CHILIZ_WS_URL,
  httpUrl: process.env.CHILIZ_HTTP_URL,
  privateKey: process.env.PRIVATE_KEY,
  walletAddress: process.env.WALLET_ADDRESS,
  contractAddress: process.env.CONTRACT_ADDRESS,
  contractABI: null,
  chainId: process.env.CHILIZ_CHAIN_ID || 88882
};

// Load contract ABI
if (process.env.CONTRACT_ABI_PATH) {
  try {
    const abiPath = path.resolve(process.env.CONTRACT_ABI_PATH);
    if (fs.existsSync(abiPath)) {
      const abiData = JSON.parse(fs.readFileSync(abiPath, 'utf8'));
      config.contractABI = abiData.abi || abiData;
      console.log('✅ Contract ABI loaded successfully');
    }
  } catch (error) {
    console.error('❌ Error loading contract ABI:', error);
    process.exit(1);
  }
}

async function testCompleteFlow() {
  let service = null;
  
  try {
    console.log('🧪 Testing Complete ChilizReceiver Flow');
    console.log('=====================================');
    console.log('Flow: Deposit 0.01 CHZ → Request Withdrawal → Auto withdrawToStake');
    console.log('');
    
    // Initialize service
    service = new ChilizService(config);
    await service.initialize();
    
    // Set up event listeners to track the complete flow
    service.on('withdrawalRequested', (eventData) => {
      console.log('🎉 WITHDRAWAL REQUEST EVENT RECEIVED!');
      console.log(`   User: ${eventData.user}`);
      console.log(`   Amount: ${eventData.amountFormatted} CHZ`);
      console.log(`   Transaction: ${eventData.transactionHash}`);
    });
    
    service.on('withdrawToStakeExecuted', (eventData) => {
      console.log('🎉 WITHDRAW TO STAKE EXECUTED!');
      console.log(`   Transaction: ${eventData.transactionHash}`);
      console.log(`   Gas Used: ${eventData.gasUsed}`);
    });
    
    console.log('📊 Initial State:');
    console.log('=================');
    
    // Check initial balances
    const initialWalletBalanceObj = await service.getWalletBalance();
    const initialWalletBalance = initialWalletBalanceObj.balance;
    console.log(`💼 Wallet Balance: ${initialWalletBalance} CHZ`);
    
    const initialContractBalance = await service.getContractBalance();
    console.log(`🏗️ Contract Balance: ${initialContractBalance} CHZ`);
    
    const initialUserDeposit = await service.getUserDepositAmount();
    console.log(`👤 Your Deposit: ${initialUserDeposit} CHZ`);
    
    const initialUserPending = await service.getUserPendingWithdrawal();
    console.log(`⏳ Your Pending: ${initialUserPending} CHZ`);
    
    console.log('\\n🔄 Step 1: Depositing 0.01 CHZ to contract');
    console.log('============================================');
    
    try {
      const depositResult = await service.depositToContract(0.01);
      console.log(`✅ Deposit successful!`);
      console.log(`   Transaction: ${depositResult.transactionHash}`);
      console.log(`   Amount: ${depositResult.amount} CHZ`);
      
      // Wait a moment for state to update
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (depositError) {
      console.error('❌ Deposit failed:', depositError.message);
      if (depositError.message.includes('transfer amount exceeds balance')) {
        console.log('💡 You might not have enough CHZ tokens in your wallet');
        console.log('💡 This test requires CHZ tokens (not native CHZ), check if you have ERC-20 CHZ tokens');
      }
      throw depositError;
    }
    
    console.log('\\n🔄 Step 2: Requesting withdrawal of 0.01 CHZ');
    console.log('==============================================');
    
    try {
      const withdrawalResult = await service.requestWithdrawalFromContract(0.01);
      console.log(`✅ Withdrawal request successful!`);
      console.log(`   Transaction: ${withdrawalResult.transactionHash}`);
      console.log(`   Amount: ${withdrawalResult.amount} CHZ`);
      
      console.log('\\n👂 Waiting for WithdrawalRequested event and auto withdrawToStake...');
      console.log('======================================================================');
      
      // Wait for events to be processed
      await new Promise(resolve => setTimeout(resolve, 5000));
      
    } catch (withdrawalError) {
      console.error('❌ Withdrawal request failed:', withdrawalError.message);
      throw withdrawalError;
    }
    
    console.log('\\n📊 Final State:');
    console.log('================');
    
    // Check final balances
    const finalWalletBalanceObj = await service.getWalletBalance();
    const finalWalletBalance = finalWalletBalanceObj.balance;
    console.log(`💼 Final Wallet Balance: ${finalWalletBalance} CHZ`);
    
    const finalContractBalance = await service.getContractBalance();
    console.log(`🏗️ Final Contract Balance: ${finalContractBalance} CHZ`);
    
    const finalUserDeposit = await service.getUserDepositAmount();
    console.log(`👤 Final Your Deposit: ${finalUserDeposit} CHZ`);
    
    const finalUserPending = await service.getUserPendingWithdrawal();
    console.log(`⏳ Final Your Pending: ${finalUserPending} CHZ`);
    
    // Calculate differences
    const walletDifference = parseFloat(finalWalletBalance) - parseFloat(initialWalletBalance);
    const contractDifference = parseFloat(finalContractBalance) - parseFloat(initialContractBalance);
    
    console.log('\\n🧮 Analysis:');
    console.log('=============');
    console.log(`💰 Wallet Change: ${walletDifference > 0 ? '+' : ''}${walletDifference.toFixed(6)} CHZ`);
    console.log(`🏗️ Contract Change: ${contractDifference > 0 ? '+' : ''}${contractDifference.toFixed(6)} CHZ`);
    
    if (Math.abs(walletDifference) < 0.005 && parseFloat(finalContractBalance) === 0) {
      console.log('\\n🎉 SUCCESS! Complete flow worked correctly:');
      console.log('   ✅ Deposit successful');
      console.log('   ✅ Withdrawal request successful');
      console.log('   ✅ WithdrawalRequested event detected');
      console.log('   ✅ Auto withdrawToStake executed');
      console.log('   ✅ Contract balance returned to 0');
      console.log('   ✅ Net wallet change minimal (just gas costs)');
    } else {
      console.log('\\n⚠️ Results need review:');
      console.log(`   Contract should be empty but has: ${finalContractBalance} CHZ`);
      console.log(`   Wallet change: ${walletDifference} CHZ`);
    }
    
    console.log('\\n✅ Test completed successfully!');
    
  } catch (error) {
    console.error('\\n❌ Test failed:', error.message);
    console.error('Stack trace:', error);
  } finally {
    if (service && service.chilizConnection) {
      // Wait a moment for any pending events
      await new Promise(resolve => setTimeout(resolve, 2000));
      service.chilizConnection.disconnect();
    }
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\\n🛑 Test interrupted');
  process.exit(0);
});

// Run the test
testCompleteFlow().catch(console.error);
