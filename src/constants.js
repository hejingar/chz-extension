// Network Configuration
export const NETWORK = {
  CHILIZ_SPICY: {
    CHAIN_ID: 88882,
    CHAIN_ID_HEX: '0x15b32',
    NAME: 'Chiliz Spicy Testnet',
    CURRENCY: {
      NAME: 'CHZ',
      SYMBOL: 'CHZ',
      DECIMALS: 18
    },
    RPC_URLS: ['https://spicy-rpc.chiliz.com'],
    RPC_HTTP: 'https://spicy-rpc.chiliz.com',
    RPC_WS: 'wss://spicy-rpc.chiliz.com',
    BLOCK_EXPLORER: 'https://spicy-explorer.chiliz.com',
    ICON_URLS: ['https://spicy-rpc.chiliz.com/icon.png']
  }
};

// Smart Contract Configuration
export const SMART_CONTRACT = {
  SAVINGS: {
    ADDRESS: '0x73537cec4fc5f417936ec03f6d2b282e3d27654b',
    ABI: [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "ClaimRequested",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "Deposit",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "WithdrawalRequested",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "amountDeposit",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "claimWithdrawal",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "contractBalance",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "deposit",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "adr",
						"type": "address"
					}
				],
				"name": "getAmountDeposit",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "adr",
						"type": "address"
					}
				],
				"name": "getPendingWithdrawAmount",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "adr",
						"type": "address"
					}
				],
				"name": "getTimeToClaim",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "pendingWithdrawals",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "requestWithdrawal",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "timeAtWithdraw",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"stateMutability": "payable",
				"type": "receive"
			}
		]
  }
};

// Extension Configuration
export const EXTENSION_CONFIG = {
  POLLING: {
    TRANSACTION_CHECK_INTERVAL: 10000, // 10 seconds
    HEALTH_CHECK_INTERVAL: 30000, // 30 seconds
    PENDING_ROUNDUP_CHECK_INTERVAL: 3000, // 3 seconds
    TOTAL_SAVED_REFRESH_INTERVAL: 30000 // 30 seconds
  },
  TRANSACTION: {
    BLOCKS_TO_CHECK: 5,
    COOLDOWN_PERIOD: 30000, // 30 seconds
    GAS_BUFFER_MULTIPLIER: 1.2
  },
  STORAGE_KEYS: {
    WALLET: 'wallet',
    ROUNDUP_SETTINGS: 'roundUpSettings',
    TOTAL_SAVED: 'totalSaved',
    PENDING_ROUNDUP_REQUEST: 'pendingRoundUpRequest',
    DAILY_SAVED_PREFIX: 'dailySaved_'
  }
};

// Round-up Settings Defaults
export const ROUNDUP_DEFAULTS = {
  ENABLED: false,
  FIXED_AMOUNT: 5, // CHZ amount to save per transaction
  MAX_PER_DAY: 50 // Maximum CHZ to save per day
};

// UI Constants
export const UI = {
  COLORS: {
    CHZ_ORANGE: '#FF6B35',
    SUCCESS_GREEN: '#4CAF50',
    ERROR_RED: '#F44336',
    WARNING_YELLOW: '#FFC107',
    INFO_BLUE: '#2196F3'
  },
  BADGES: {
    PENDING: '💰',
    SUCCESS: '✓',
    ERROR: '✗'
  },
  TIMEOUTS: {
    BADGE_SUCCESS_DURATION: 3000, // 3 seconds
    NOTIFICATION_AUTO_HIDE: 5000, // 5 seconds
    POPUP_RETRY_DELAY: 1000 // 1 second
  }
};

// Notification Configuration
export const NOTIFICATIONS = {
  TYPES: {
    ROUNDUP_AVAILABLE: 'roundup_available',
    ROUNDUP_SUCCESS: 'roundup_success',
    ROUNDUP_ERROR: 'roundup_error'
  },
  TITLES: {
    ROUNDUP_AVAILABLE: 'CHZ Auto-Save Available',
    ROUNDUP_SUCCESS: 'CHZ Saved Successfully!',
    ROUNDUP_ERROR: 'CHZ Save Failed'
  },
  BUTTONS: {
    SAVE_NOW: 'Save Now',
    SKIP: 'Skip',
    RETRY: 'Retry'
  }
};

// Error Messages
export const ERROR_MESSAGES = {
  WALLET: {
    NOT_CONNECTED: 'Wallet not connected',
    CONNECTION_FAILED: 'Failed to connect wallet',
    WRONG_NETWORK: 'Please switch to CHZ Spicy Testnet',
    INSUFFICIENT_FUNDS: 'Insufficient CHZ balance'
  },
  TRANSACTION: {
    FAILED: 'Transaction failed',
    REJECTED: 'Transaction was rejected by user',
    GAS_ERROR: 'Transaction failed due to gas issues',
    TIMEOUT: 'Transaction timed out'
  },
  EXTENSION: {
    CHROME_RUNTIME_UNAVAILABLE: 'Chrome runtime not available',
    BACKGROUND_COMMUNICATION_FAILED: 'Failed to communicate with background script',
    NOTIFICATION_FAILED: 'Failed to show notification'
  }
};

// Success Messages
export const SUCCESS_MESSAGES = {
  WALLET: {
    CONNECTED: 'Wallet connected successfully',
    DISCONNECTED: 'Wallet disconnected'
  },
  TRANSACTION: {
    SENT: 'Transaction sent successfully',
    CONFIRMED: 'Transaction confirmed'
  },
  ROUNDUP: {
    SAVED: 'CHZ saved successfully!',
    SETTINGS_UPDATED: 'Round-up settings updated'
  }
};

// Development/Debug Configuration
export const DEBUG = {
  LOGGING_ENABLED: process.env.NODE_ENV === 'development',
  VERBOSE_LOGS: false,
  MOCK_TRANSACTIONS: false
};

// Export all constants as a single object for convenience
export const CONSTANTS = {
  NETWORK,
  SMART_CONTRACT,
  EXTENSION_CONFIG,
  ROUNDUP_DEFAULTS,
  UI,
  NOTIFICATIONS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  DEBUG
};

export default CONSTANTS;
