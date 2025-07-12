/**
 * Service MetaMask pour extension Chrome
 * Utilise metamask-extension-provider pour une connexion directe
 */

import createExtensionProvider from 'metamask-extension-provider';

interface MetaMaskState {
  isAvailable: boolean;
  accounts: string[];
  chainId: string | null;
  isConnected: boolean;
}

export class MetaMaskService {
  private static instance: MetaMaskService;
  private provider: any = null;
  private state: MetaMaskState = {
    isAvailable: false,
    accounts: [],
    chainId: null,
    isConnected: false
  };
  private eventListeners: Map<string, ((data: any) => void)[]> = new Map();

  constructor() {
    this.initializeProvider();
  }

  public static getInstance(): MetaMaskService {
    if (!MetaMaskService.instance) {
      MetaMaskService.instance = new MetaMaskService();
    }
    return MetaMaskService.instance;
  }

  private async initializeProvider() {
    try {
      // Créer le provider MetaMask directement
      this.provider = createExtensionProvider();
      
      if (this.provider) {
        this.state.isAvailable = true;
        this.setupEventListeners();
        this.emit('metamask_ready', { available: true });
        console.log('MetaMask provider initialized successfully');
        
        // Vérifier si déjà connecté
        await this.checkExistingConnection();
      } else {
        this.state.isAvailable = false;
        this.emit('metamask_ready', { available: false });
        console.log('MetaMask provider not available');
      }
    } catch (error) {
      console.error('Error initializing MetaMask provider:', error);
      this.state.isAvailable = false;
      this.emit('metamask_ready', { available: false });
    }
  }

  private setupEventListeners() {
    if (!this.provider) return;

    // Écouter les événements MetaMask
    this.provider.on('accountsChanged', (accounts: string[]) => {
      this.state.accounts = accounts;
      this.state.isConnected = accounts.length > 0;
      this.emit('accounts_changed', { accounts });
    });

    this.provider.on('chainChanged', (chainId: string) => {
      this.state.chainId = chainId;
      this.emit('chain_changed', { chainId });
    });

    this.provider.on('connect', (connectInfo: any) => {
      this.state.isConnected = true;
      this.emit('wallet_connected', connectInfo);
    });

    this.provider.on('disconnect', (error: any) => {
      this.state.isConnected = false;
      this.state.accounts = [];
      this.emit('wallet_disconnected', { error });
    });
  }

  private async checkExistingConnection() {
    if (!this.provider) return;

    try {
      // Vérifier les comptes existants sans déclencher de popup
      const accounts = await this.provider.request({ method: 'eth_accounts' });
      if (accounts && accounts.length > 0) {
        this.state.accounts = accounts;
        this.state.isConnected = true;
        
        // Obtenir la chaîne actuelle
        const chainId = await this.provider.request({ method: 'eth_chainId' });
        this.state.chainId = chainId;
      }
    } catch (error) {
      console.error('Error checking existing connection:', error);
    }
  }

  // Méthodes publiques
  public async isMetaMaskAvailable(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.state.isAvailable) {
        resolve(true);
        return;
      }

      // Attendre que MetaMask soit prêt
      const timeout = setTimeout(() => {
        this.off('metamask_ready', onReady);
        resolve(false);
      }, 5000);

      const onReady = (data: any) => {
        clearTimeout(timeout);
        resolve(data.available);
      };

      this.on('metamask_ready', onReady);
    });
  }

  public async connectWallet(): Promise<string> {
    if (!this.provider) {
      throw new Error('MetaMask provider not available');
    }

    try {
      const accounts = await this.provider.request({ method: 'eth_requestAccounts' });
      
      if (accounts && accounts.length > 0) {
        this.state.accounts = accounts;
        this.state.isConnected = true;
        
        // Obtenir la chaîne actuelle
        const chainId = await this.provider.request({ method: 'eth_chainId' });
        this.state.chainId = chainId;
        
        return accounts[0];
      } else {
        throw new Error('No accounts returned from MetaMask');
      }
    } catch (error: any) {
      if (error.message.includes('User rejected') || error.code === 4001) {
        throw new Error('Connexion refusée par l\'utilisateur');
      }
      throw new Error(`Erreur lors de la connexion: ${error.message}`);
    }
  }

  public async getCurrentAccount(): Promise<string | null> {
    if (!this.provider) return null;

    try {
      const accounts = await this.provider.request({ method: 'eth_accounts' });
      return accounts && accounts.length > 0 ? accounts[0] : null;
    } catch (error) {
      console.error('Error getting current account:', error);
      return null;
    }
  }

  public async getBalance(address: string): Promise<string> {
    if (!this.provider) {
      throw new Error('MetaMask provider not available');
    }

    try {
      const balance = await this.provider.request({ 
        method: 'eth_getBalance', 
        params: [address, 'latest'] 
      });
      
      // Convertir de wei en ETH
      const balanceInEth = parseInt(balance, 16) / Math.pow(10, 18);
      return balanceInEth.toFixed(6);
    } catch (error) {
      console.error('Error getting balance:', error);
      throw new Error('Erreur lors de la récupération du solde');
    }
  }

  public async getCurrentChainId(): Promise<string> {
    if (!this.provider) {
      throw new Error('MetaMask provider not available');
    }

    try {
      const chainId = await this.provider.request({ method: 'eth_chainId' });
      this.state.chainId = chainId;
      return chainId;
    } catch (error) {
      console.error('Error getting chain ID:', error);
      throw new Error('Erreur lors de la récupération de l\'ID du réseau');
    }
  }

  public async switchNetwork(chainId: string): Promise<void> {
    if (!this.provider) {
      throw new Error('MetaMask provider not available');
    }

    try {
      await this.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }]
      });
    } catch (error) {
      console.error('Error switching network:', error);
      throw new Error('Erreur lors du changement de réseau');
    }
  }

  public async addNetwork(network: any): Promise<void> {
    if (!this.provider) {
      throw new Error('MetaMask provider not available');
    }

    try {
      await this.provider.request({
        method: 'wallet_addEthereumChain',
        params: [network]
      });
    } catch (error) {
      console.error('Error adding network:', error);
      throw new Error('Erreur lors de l\'ajout du réseau');
    }
  }

  public async signMessage(message: string, address: string): Promise<string> {
    if (!this.provider) {
      throw new Error('MetaMask provider not available');
    }

    try {
      const signature = await this.provider.request({
        method: 'personal_sign',
        params: [message, address]
      });
      return signature;
    } catch (error: any) {
      if (error.message.includes('User rejected') || error.code === 4001) {
        throw new Error('Signature refusée par l\'utilisateur');
      }
      throw new Error(`Erreur lors de la signature: ${error.message}`);
    }
  }

  public async sendTransaction(transaction: any): Promise<string> {
    if (!this.provider) {
      throw new Error('MetaMask provider not available');
    }

    try {
      const txHash = await this.provider.request({
        method: 'eth_sendTransaction',
        params: [transaction]
      });
      return txHash;
    } catch (error: any) {
      if (error.message.includes('User rejected') || error.code === 4001) {
        throw new Error('Transaction refusée par l\'utilisateur');
      }
      throw new Error(`Erreur lors de l\'envoi: ${error.message}`);
    }
  }

  // Getters pour l'état
  public get isAvailable(): boolean {
    return this.state.isAvailable;
  }

  public get isConnected(): boolean {
    return this.state.isConnected;
  }

  public get accounts(): string[] {
    return this.state.accounts;
  }

  public get chainId(): string | null {
    return this.state.chainId;
  }

  // Système d'événements
  public on(event: string, listener: (data: any) => void): void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event)!.push(listener);
  }

  public off(event: string, listener: (data: any) => void): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  private emit(event: string, data: any): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  // Diagnostics
  public getDiagnostics(): any {
    return {
      state: this.state,
      hasProvider: !!this.provider,
      providerType: this.provider ? 'metamask-extension-provider' : 'none',
      isExtensionContext: typeof chrome !== 'undefined' && (chrome as any).runtime && (chrome as any).runtime.id
    };
  }
} 