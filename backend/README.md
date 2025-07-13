# 🔒 Secure Chiliz Service

A **private, secure** Node.js service for interacting with the Chiliz blockchain. This service is designed with security as the top priority - **no HTTP endpoints are exposed**, ensuring your private key is never accessible from the internet.

## 🛡️ Security Features

- ✅ **No HTTP Server** - Service runs privately with no network exposure
- ✅ **Private Key Protection** - Private key never leaves the local machine
- ✅ **WebSocket Only** - Only outbound connections to Chiliz RPC
- ✅ **Local Process** - Runs as a local background service
- ✅ **Event-Driven** - Automatically processes blockchain events
- ✅ **Automated Paybacks** - Securely pays transaction initiators

## 🚀 Quick Start

### 1. Environment Setup

```bash
# Copy and configure environment
cp .env.example .env

# Edit .env with your actual values
nano .env
```

**Required Configuration:**
```env
# Chiliz Network
CHILIZ_WS_URL=wss://spicy-rpc.chiliz.com
CHILIZ_HTTP_URL=https://spicy-rpc.chiliz.com
CHILIZ_CHAIN_ID=88882

# Your Wallet (SECURE THIS!)
PRIVATE_KEY=0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
WALLET_ADDRESS=0xYourWalletAddress

# Your Smart Contract
CONTRACT_ADDRESS=0xYourContractAddress
CONTRACT_ABI_PATH=./contracts/YourContract.json
```

### 2. Install & Start

```bash
# Install dependencies
npm install

# Test connectivity (no private key needed)
npm run test-connection

# Start the secure service
npm start

# Or start in development mode
npm run dev
```

### 3. Monitor Service

```bash
# Check service status
npm run monitor

# Test RPC connectivity
npm run check-connectivity

# Continuous monitoring
npm run monitor-continuous
```

## API Endpoints

### Health & Status
- `GET /health` - Server health check
- `GET /connection/status` - Blockchain connection status

### Wallet Operations
- `GET /wallet/balance` - Get wallet balance
- `GET /wallet/balance/:address` - Get balance for specific address
- `POST /wallet/send` - Send CHZ tokens
- `POST /wallet/batch-send` - Send multiple payments
- `GET /wallet/transactions` - Get transaction history

### Smart Contract Operations
- `GET /contract/stake-balance/:address?` - Get staking balance
- `GET /contract/rewards/:address?` - Get pending rewards
- `POST /contract/stake` - Stake tokens
- `POST /contract/unstake` - Unstake tokens
- `POST /contract/claim-rewards` - Claim rewards
- `POST /contract/call` - Call any contract method
- `GET /contract/events/:eventName` - Get past events

### Payback System
- `POST /payback` - Manual payback to address
- `POST /payback/setup-rules` - Configure automatic payback rules

## Usage Examples

### Send Payment
```bash
curl -X POST http://localhost:3001/wallet/send \
  -H "Content-Type: application/json" \
  -d '{
    "to": "0x1234567890123456789012345678901234567890",
    "amount": "1.5",
    "memo": "Payment for services"
  }'
```

### Stake Tokens
```bash
curl -X POST http://localhost:3001/contract/stake \
  -H "Content-Type: application/json" \
  -d '{
    "amount": "100",
    "recipient": "0x1234567890123456789012345678901234567890"
  }'
```

### Setup Automatic Paybacks
```bash
curl -X POST http://localhost:3001/payback/setup-rules \
  -H "Content-Type: application/json" \
  -d '{
    "rules": [
      {
        "transactionType": "stake",
        "type": "percentage",
        "value": 5
      },
      {
        "transactionType": "all",
        "type": "fixed",
        "value": 0.1
      }
    ]
  }'
```

## Event Processing

The backend automatically listens for smart contract events and can:
- Process stake/unstake events
- Trigger automatic paybacks
- Log all contract interactions
- Monitor wallet activity

## Security Considerations

- Store private keys securely (use environment variables)
- Use HTTPS in production
- Implement rate limiting for API endpoints
- Monitor wallet balance and transactions
- Set up alerts for unusual activity

## Architecture

```
├── index.js                 # Main entry point
├── src/
│   ├── server.js            # Express server and API routes
│   ├── chiliz-connection.js # Blockchain connection management
│   ├── smart-contract-manager.js # Contract interaction logic
│   └── wallet-manager.js    # Wallet and payment management
├── contracts/               # Contract ABI files
└── .env                     # Environment configuration
```

## Development

### Running in Development Mode
```bash
npm run dev
```

### Testing
```bash
npm test
```

### Debugging
Set `LOG_LEVEL=debug` in your `.env` file for verbose logging.

## Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Use a process manager like PM2
3. Set up proper logging and monitoring
4. Configure firewall and security settings
5. Use a reverse proxy (nginx) for SSL termination

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License
