/**
 * Types pour l'extension Chrome
 */

export interface UserData {
  address: string;
  balance?: string;
  chainId?: string;
  isConnected: boolean;
}

export interface ConnectionStatus {
  websocket: boolean;
  polling: boolean;
}

export interface ExtensionSettings {
  websocketUrl?: string;
  pollingInterval?: number;
  autoConnect?: boolean;
  notifications?: boolean;
}

export interface WebSocketMessage {
  type: string;
  data?: any;
  timestamp?: number;
}

export interface PollingData {
  address: string;
  data: any;
  timestamp: number;
}

export interface BackgroundMessage {
  action: string;
  data?: any;
}

export interface BackgroundResponse {
  success?: boolean;
  error?: string;
  data?: any;
}

// Types pour les événements MetaMask
export interface MetamaskError {
  code: number;
  message: string;
}

export interface ChainData {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

// Types pour le stockage Chrome
export interface StorageData {
  userAddress?: string;
  settings?: ExtensionSettings;
  userData?: UserData;
}

// Types pour les messages entre background et popup
export type MessageType = 
  | 'connect_websocket'
  | 'disconnect_websocket'
  | 'start_polling'
  | 'stop_polling'
  | 'get_status'
  | 'websocket_data'
  | 'polling_data'; 