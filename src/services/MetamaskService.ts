/**
 * Service pour gérer l'interaction avec MetaMask
 */
export class MetamaskService {
  /**
   * Vérifie si MetaMask est installé
   */
  static isMetamaskInstalled(): boolean {
    return typeof (window as any).ethereum !== 'undefined';
  }

  /**
   * Obtient l'instance ethereum de MetaMask
   */
  private static getEthereum(): any {
    if (!this.isMetamaskInstalled()) {
      throw new Error('MetaMask n\'est pas installé');
    }
    return (window as any).ethereum;
  }

  /**
   * Connecte le wallet MetaMask
   */
  static async connectWallet(): Promise<string> {
    if (!this.isMetamaskInstalled()) {
      throw new Error('MetaMask n\'est pas installé. Veuillez l\'installer depuis https://metamask.io/');
    }

    try {
      const ethereum = this.getEthereum();
      
      // Demander l'autorisation de connexion
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length === 0) {
        throw new Error('Aucun compte MetaMask trouvé');
      }

      const address = accounts[0];
      console.log('Connected to MetaMask:', address);
      
      // Écouter les changements de compte
      this.setupAccountsListener();
      
      return address;
    } catch (error: any) {
      console.error('Error connecting to MetaMask:', error);
      
      if (error.code === 4001) {
        throw new Error('Connexion refusée par l\'utilisateur');
      } else if (error.code === -32002) {
        throw new Error('Connexion déjà en cours. Veuillez vérifier MetaMask.');
      }
      
      throw new Error('Erreur lors de la connexion à MetaMask');
    }
  }

  /**
   * Récupère l'adresse du compte connecté
   */
  static async getCurrentAccount(): Promise<string | null> {
    if (!this.isMetamaskInstalled()) {
      return null;
    }

    try {
      const ethereum = this.getEthereum();
      const accounts = await ethereum.request({
        method: 'eth_accounts',
      });

      return accounts.length > 0 ? accounts[0] : null;
    } catch (error) {
      console.error('Error getting current account:', error);
      return null;
    }
  }

  /**
   * Vérifie si le wallet est connecté
   */
  static async isConnected(): Promise<boolean> {
    const account = await this.getCurrentAccount();
    return account !== null;
  }

  /**
   * Change de réseau
   */
  static async switchNetwork(chainId: string): Promise<void> {
    if (!this.isMetamaskInstalled()) {
      throw new Error('MetaMask n\'est pas installé');
    }

    try {
      const ethereum = this.getEthereum();
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }],
      });
    } catch (error: any) {
      console.error('Error switching network:', error);
      throw new Error('Erreur lors du changement de réseau');
    }
  }

  /**
   * Récupère l'ID du réseau actuel
   */
  static async getCurrentChainId(): Promise<string> {
    if (!this.isMetamaskInstalled()) {
      throw new Error('MetaMask n\'est pas installé');
    }

    try {
      const ethereum = this.getEthereum();
      const chainId = await ethereum.request({
        method: 'eth_chainId',
      });
      return chainId;
    } catch (error) {
      console.error('Error getting chain ID:', error);
      throw new Error('Erreur lors de la récupération de l\'ID du réseau');
    }
  }

  /**
   * Signe un message
   */
  static async signMessage(message: string, address: string): Promise<string> {
    if (!this.isMetamaskInstalled()) {
      throw new Error('MetaMask n\'est pas installé');
    }

    try {
      const ethereum = this.getEthereum();
      const signature = await ethereum.request({
        method: 'personal_sign',
        params: [message, address],
      });
      return signature;
    } catch (error: any) {
      console.error('Error signing message:', error);
      
      if (error.code === 4001) {
        throw new Error('Signature refusée par l\'utilisateur');
      }
      
      throw new Error('Erreur lors de la signature du message');
    }
  }

  /**
   * Récupère le solde du compte
   */
  static async getBalance(address: string): Promise<string> {
    if (!this.isMetamaskInstalled()) {
      throw new Error('MetaMask n\'est pas installé');
    }

    try {
      const ethereum = this.getEthereum();
      const balance = await ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      });
      
      // Convertir de wei en ETH
      const balanceInEth = parseInt(balance, 16) / Math.pow(10, 18);
      return balanceInEth.toFixed(6);
    } catch (error) {
      console.error('Error getting balance:', error);
      throw new Error('Erreur lors de la récupération du solde');
    }
  }

  /**
   * Configure l'écoute des changements de compte
   */
  private static setupAccountsListener(): void {
    if (!this.isMetamaskInstalled()) {
      return;
    }

    const ethereum = this.getEthereum();
    
    ethereum.on('accountsChanged', (accounts: string[]) => {
      console.log('Accounts changed:', accounts);
      if (accounts.length === 0) {
        // L'utilisateur a déconnecté son wallet
        console.log('User disconnected wallet');
        // Vous pouvez émettre un événement ou appeler une fonction callback ici
      }
    });

    ethereum.on('chainChanged', (chainId: string) => {
      console.log('Chain changed:', chainId);
      // Recharger la page est recommandé par MetaMask
      window.location.reload();
    });
  }

  /**
   * Déconnecte le wallet (côté application)
   */
  static async disconnect(): Promise<void> {
    // MetaMask ne permet pas de déconnecter programmatiquement
    // Cette fonction est pour nettoyer les données côté application
    console.log('Disconnecting wallet (application side)');
  }
} 