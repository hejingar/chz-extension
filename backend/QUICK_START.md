# Chiliz Backend - Quick Start Guide

## 🚀 Getting Started

### 1. Environment Setup

Create your `.env` file:

```bash
cp .env.example .env
```

Edit `.env` with your real values:

```env
# Chiliz Network Configuration
CHILIZ_WS_URL=wss://spicy-rpc.chiliz.com
CHILIZ_HTTP_URL=https://spicy-rpc.chiliz.com
CHILIZ_CHAIN_ID=88882

# Your Wallet (IMPORTANT: Use a real private key)
PRIVATE_KEY=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
WALLET_ADDRESS=0xYourWalletAddress

# Your Smart Contract
CONTRACT_ADDRESS=0xYourContractAddress
CONTRACT_ABI_PATH=./contracts/SampleContract.json

# Server Configuration
PORT=3001
NODE_ENV=development
LOG_LEVEL=info
```

### 2. Start the Backend

```bash
# Install dependencies (if not done already)
npm install

# Start in development mode
npm run dev

# Or start in production mode
npm start
```

### 3. Test the Connection

```bash
# Test basic connectivity
node test-connection.js

# Check server health
curl http://localhost:3001/health
```

## 📡 Real-World Usage Examples

### Wallet Operations

```bash
# Check wallet balance
curl http://localhost:3001/wallet/balance

# Send CHZ to someone
curl -X POST http://localhost:3001/wallet/send \
  -H "Content-Type: application/json" \
  -d '{
    "to": "0x742d35Cc6635C0532925a3b8D53325C1d78C41B8",
    "amount": "1.5",
    "memo": "Payment for transaction processing"
  }'

# Send batch payments (useful for paying multiple initiators)
curl -X POST http://localhost:3001/wallet/batch-send \
  -H "Content-Type: application/json" \
  -d '{
    "payments": [
      {
        "address": "0x742d35Cc6635C0532925a3b8D53325C1d78C41B8",
        "amount": "0.5",
        "memo": "Reward for stake transaction"
      },
      {
        "address": "0x123d35Cc6635C0532925a3b8D53325C1d78C41B8",
        "amount": "0.3",
        "memo": "Reward for unstake transaction"
      }
    ]
  }'
```

### Smart Contract Interactions

```bash
# Stake tokens
curl -X POST http://localhost:3001/contract/stake \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "100"
  }'

# Unstake tokens
curl -X POST http://localhost:3001/contract/unstake \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "50"
  }'

# Check staking balance
curl http://localhost:3001/contract/stake-balance

# Get pending rewards
curl http://localhost:3001/contract/rewards

# Claim rewards
curl -X POST http://localhost:3001/contract/claim-rewards
```

### Automated Payback System

```bash
# Setup automatic payback rules
curl -X POST http://localhost:3001/payback/setup-rules \
  -H "Content-Type: application/json" \
  -d '{
    "rules": [
      {
        "transactionType": "stake",
        "type": "percentage",
        "value": 2,
        "description": "Pay 2% of stake amount back to initiator"
      },
      {
        "transactionType": "unstake", 
        "type": "fixed",
        "value": 0.1,
        "description": "Pay fixed 0.1 CHZ for unstake transactions"
      },
      {
        "transactionType": "all",
        "type": "fixed", 
        "value": 0.05,
        "description": "Minimum payment for any transaction"
      }
    ]
  }'

# Manual payback to a specific address
curl -X POST http://localhost:3001/payback \
  -H "Content-Type: application/json" \
  -d '{
    "address": "0x742d35Cc6635C0532925a3b8D53325C1d78C41B8",
    "amount": "1.0",
    "reason": "Manual reward for contract interaction"
  }'
```

### Event Monitoring

```bash
# Get past stake events
curl http://localhost:3001/contract/events/Stake?fromBlock=26000000

# Get recent events
curl http://localhost:3001/contract/events/Unstake?fromBlock=latest
```

## 🔧 Integration with Your DApp

### Frontend Integration

```javascript
// Example: Stake tokens from your frontend
async function stakeTokens(amount) {
  const response = await fetch('http://localhost:3001/contract/stake', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount })
  });
  
  const result = await response.json();
  console.log('Stake result:', result);
  return result;
}

// Example: Check wallet balance
async function getWalletBalance() {
  const response = await fetch('http://localhost:3001/wallet/balance');
  const balance = await response.json();
  return balance;
}
```

### Smart Contract Event Handling

The backend automatically listens for events from your smart contract and can:

1. **Process Events**: When someone stakes/unstakes, the backend detects it
2. **Automatic Paybacks**: Based on your rules, it automatically pays back the transaction initiator
3. **Logging**: All events are logged for audit trails
4. **Notifications**: You can extend it to send notifications

### Typical Workflow

1. **User Stakes Tokens**: User calls your smart contract to stake tokens
2. **Backend Detects Event**: The websocket connection picks up the Stake event
3. **Process Payback**: Based on your rules, the backend calculates and sends a payback
4. **Logging**: Everything is logged for tracking and auditing

## 🛡️ Security Best Practices

1. **Private Key Security**:
   - Never commit your private key to git
   - Use environment variables
   - Consider using hardware wallets for production

2. **API Security**:
   - Add authentication to your endpoints
   - Use HTTPS in production
   - Implement rate limiting

3. **Monitoring**:
   - Set up alerts for large transactions
   - Monitor wallet balance
   - Log all payback transactions

## 📊 Monitoring & Debugging

### Check Server Status
```bash
curl http://localhost:3001/health
curl http://localhost:3001/connection/status
```

### View Logs
```bash
# View real-time logs
npm run dev

# Set debug logging
LOG_LEVEL=debug npm run dev
```

### Transaction History
```bash
# Get recent transactions
curl http://localhost:3001/wallet/transactions?limit=10
```

## 🚀 Production Deployment

### Using PM2
```bash
npm install -g pm2
pm2 start index.js --name chiliz-backend
pm2 save
pm2 startup
```

### Environment Variables for Production
```env
NODE_ENV=production
LOG_LEVEL=info
PORT=3001
# Add your production RPC URLs and private keys
```

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔍 Troubleshooting

### Common Issues

1. **Connection Failed**: Check if Chiliz RPC is accessible
2. **Invalid Private Key**: Ensure your private key is valid and has CHZ for gas
3. **Contract Not Found**: Verify your contract address and ABI
4. **Insufficient Funds**: Ensure wallet has enough CHZ for transactions

### Debug Mode
Set `LOG_LEVEL=debug` in your `.env` for detailed logs.

## 📈 Next Steps

1. **Add Authentication**: Secure your API endpoints
2. **Database Integration**: Store transaction history and analytics
3. **Notifications**: Add email/webhook notifications for events
4. **Dashboard**: Create a web dashboard to monitor activity
5. **Multi-contract Support**: Extend to handle multiple contracts

This backend provides a solid foundation for your Chiliz blockchain integration!
