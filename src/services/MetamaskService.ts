/**
 * Service pour gérer l'interaction avec MetaMask
 */
export class MetamaskService {
  /**
   * Vérifie si MetaMask est installé avec retry amélioré
   */
  static async isMetamaskInstalled(): Promise<boolean> {
    // Vérification immédiate synchrone
    if (this.isMetamaskInstalledSync()) {
      return true;
    }

    // Timeout plus long si on est en mode développeur
    const isDeveloperMode = this.isDeveloperModeActive();
    const maxAttempts = isDeveloperMode ? 100 : 50; // Jusqu'à 10 secondes en mode dev
    
    console.log(`Checking MetaMask installation (Developer mode: ${isDeveloperMode})`);

    // Attendre que MetaMask s'injecte
    return new Promise((resolve) => {
      let attempts = 0;
      
      const checkEthereum = () => {
        attempts++;
        
        if (this.isMetamaskInstalledSync()) {
          console.log(`MetaMask found after ${attempts} attempts`);
          resolve(true);
          return;
        }
        
        if (attempts >= maxAttempts) {
          console.log(`MetaMask not found after ${attempts} attempts`);
          resolve(false);
          return;
        }
        
        setTimeout(checkEthereum, 100);
      };
      
      checkEthereum();
    });
  }

  /**
   * Vérification synchrone robuste avec plusieurs vérifications
   */
  static isMetamaskInstalledSync(): boolean {
    try {
      // Vérifier que nous sommes dans le contexte du navigateur
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return false;
      }

      // Vérifier l'existence de l'objet ethereum
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        return false;
      }

      // Vérifier si c'est bien MetaMask
      if (ethereum.isMetaMask !== true) {
        return false;
      }

      // Vérifier les méthodes essentielles
      if (typeof ethereum.request !== 'function') {
        return false;
      }

      // Vérifier que MetaMask est actif (pas désactivé)
      if (ethereum.isCoinbaseWallet || ethereum.isRabby || ethereum.isTrust) {
        // D'autres wallets peuvent être présents, mais on veut spécifiquement MetaMask
        return ethereum.isMetaMask === true;
      }

      console.log('MetaMask detected successfully');
      return true;
    } catch (error) {
      console.error('Error checking MetaMask:', error);
      return false;
    }
  }

  /**
   * Vérifie si MetaMask est débloqué
   */
  static async isMetamaskUnlocked(): Promise<boolean> {
    try {
      const ethereum = await this.getEthereum();
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      return accounts.length > 0;
    } catch (error) {
      console.error('Error checking if MetaMask is unlocked:', error);
      return false;
    }
  }

  /**
   * Obtient l'instance ethereum de MetaMask avec vérifications
   */
  private static async getEthereum(): Promise<any> {
    const isInstalled = await this.isMetamaskInstalled();
    if (!isInstalled) {
      throw new Error('MetaMask n\'est pas installé ou n\'est pas disponible');
    }

    const ethereum = (window as any).ethereum;
    
    // Vérifications supplémentaires
    if (!ethereum.isMetaMask) {
      throw new Error('Le wallet détecté n\'est pas MetaMask');
    }

    if (typeof ethereum.request !== 'function') {
      throw new Error('MetaMask n\'est pas correctement initialisé');
    }

    return ethereum;
  }

  /**
   * Attend que MetaMask soit prêt avec gestion du mode développeur
   */
  static async waitForMetamask(timeoutMs: number = 15000): Promise<boolean> {
    const startTime = Date.now();
    
    // Augmenter le timeout si on est en mode développeur
    const isDeveloperMode = this.isDeveloperModeActive();
    const actualTimeout = isDeveloperMode ? timeoutMs * 2 : timeoutMs;
    
    console.log(`Waiting for MetaMask (Developer mode: ${isDeveloperMode}, Timeout: ${actualTimeout}ms)`);
    
    while (Date.now() - startTime < actualTimeout) {
      if (this.isMetamaskInstalledSync()) {
        // Attendre plus longtemps en mode développeur
        const waitTime = isDeveloperMode ? 1000 : 500;
        await new Promise(resolve => setTimeout(resolve, waitTime));
        return true;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    return false;
  }

  /**
   * Connecte le wallet MetaMask avec une meilleure gestion d'erreurs
   */
  static async connectWallet(): Promise<string> {
    try {
      // Attendre que MetaMask soit prêt
      const isReady = await this.waitForMetamask(10000);
      if (!isReady) {
        throw new Error('MetaMask n\'est pas disponible. Veuillez vérifier qu\'il est installé et activé.');
      }

      const ethereum = await this.getEthereum();
      
      // Vérifier si MetaMask est débloqué
      const isUnlocked = await this.isMetamaskUnlocked();
      if (!isUnlocked) {
        throw new Error('Veuillez déverrouiller MetaMask et réessayer');
      }
      
      // Demander l'autorisation de connexion
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (!accounts || accounts.length === 0) {
        throw new Error('Aucun compte MetaMask trouvé. Veuillez créer un compte dans MetaMask.');
      }

      const address = accounts[0];
      console.log('Connected to MetaMask:', address);
      
      // Écouter les changements de compte
      this.setupAccountsListener();
      
      return address;
    } catch (error: any) {
      console.error('Error connecting to MetaMask:', error);
      
      // Gestion des erreurs spécifiques à MetaMask
      if (error.code === 4001) {
        throw new Error('Connexion refusée par l\'utilisateur');
      } else if (error.code === -32002) {
        throw new Error('Connexion déjà en cours. Veuillez vérifier MetaMask.');
      } else if (error.code === -32603) {
        throw new Error('Erreur interne MetaMask. Veuillez redémarrer MetaMask.');
      } else if (error.message && error.message.includes('User denied')) {
        throw new Error('Connexion refusée par l\'utilisateur');
      }
      
      // Relancer l'erreur originale ou une erreur généralisée
      throw error instanceof Error ? error : new Error('Erreur lors de la connexion à MetaMask');
    }
  }

  /**
   * Récupère l'adresse du compte connecté
   */
  static async getCurrentAccount(): Promise<string | null> {
    try {
      const isInstalled = await this.isMetamaskInstalled();
      if (!isInstalled) {
        return null;
      }

      const ethereum = await this.getEthereum();
      const accounts = await ethereum.request({
        method: 'eth_accounts',
      });

      return accounts && accounts.length > 0 ? accounts[0] : null;
    } catch (error) {
      console.error('Error getting current account:', error);
      return null;
    }
  }

  /**
   * Vérifie si le wallet est connecté
   */
  static async isConnected(): Promise<boolean> {
    try {
      const account = await this.getCurrentAccount();
      return account !== null;
    } catch (error) {
      console.error('Error checking connection:', error);
      return false;
    }
  }

  /**
   * Change de réseau
   */
  static async switchNetwork(chainId: string): Promise<void> {
    try {
      const ethereum = await this.getEthereum();
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
    try {
      const ethereum = await this.getEthereum();
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
    try {
      const ethereum = await this.getEthereum();
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
    try {
      const ethereum = await this.getEthereum();
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
    if (!this.isMetamaskInstalledSync()) {
      return;
    }

    const ethereum = (window as any).ethereum;
    
    // Supprimer les listeners existants pour éviter les doublons
    ethereum.removeAllListeners?.('accountsChanged');
    ethereum.removeAllListeners?.('chainChanged');
    
    ethereum.on('accountsChanged', (accounts: string[]) => {
      console.log('Accounts changed:', accounts);
      if (accounts.length === 0) {
        console.log('User disconnected wallet');
        // Émettre un événement personnalisé pour notifier l'application
        window.dispatchEvent(new CustomEvent('metamask_accountsChanged', { detail: { accounts } }));
      }
    });

    ethereum.on('chainChanged', (chainId: string) => {
      console.log('Chain changed:', chainId);
      // Émettre un événement personnalisé
      window.dispatchEvent(new CustomEvent('metamask_chainChanged', { detail: { chainId } }));
    });
  }

  /**
   * Déconnecte le wallet (côté application)
   */
  static async disconnect(): Promise<void> {
    console.log('Disconnecting wallet (application side)');
    
    // Nettoyer les listeners
    if (this.isMetamaskInstalledSync()) {
      const ethereum = (window as any).ethereum;
      ethereum.removeAllListeners?.('accountsChanged');
      ethereum.removeAllListeners?.('chainChanged');
    }
  }

  /**
   * Diagnostic MetaMask pour debug
   */
  static getDiagnostics(): any {
    const diagnostics = {
      windowEthereum: typeof (window as any).ethereum !== 'undefined',
      isMetaMask: (window as any).ethereum?.isMetaMask === true,
      hasRequest: typeof (window as any).ethereum?.request === 'function',
      otherWallets: {
        isCoinbaseWallet: (window as any).ethereum?.isCoinbaseWallet === true,
        isRabby: (window as any).ethereum?.isRabby === true,
        isTrust: (window as any).ethereum?.isTrust === true,
      },
      chromeExtensionInfo: {
        isDeveloperMode: this.isDeveloperModeActive(),
        extensionId: typeof chrome !== 'undefined' && chrome.runtime ? chrome.runtime.id : null,
        isExtensionContext: typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id,
        extensionManifest: this.getExtensionManifest(),
      },
      timing: {
        pageLoadTime: Date.now() - (performance.timing?.navigationStart || 0),
        documentReadyState: document.readyState,
      },
      userAgent: navigator.userAgent,
      isSecureContext: window.isSecureContext,
      hasMultipleProviders: this.hasMultipleProviders()
    };
    
    console.log('MetaMask Diagnostics:', diagnostics);
    return diagnostics;
  }

  /**
   * Détecte si Chrome est en mode développeur
   */
  private static isDeveloperModeActive(): boolean {
    try {
      // Méthode indirecte pour détecter le mode développeur
      // Les extensions en mode développeur ont certaines caractéristiques
      return (
        typeof chrome !== 'undefined' && 
        chrome.runtime && 
        chrome.runtime.id && 
        chrome.runtime.id.includes('unpacked')
      ) || false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Récupère le manifest de l'extension
   */
  private static getExtensionManifest(): any {
    try {
      if (typeof chrome !== 'undefined' && chrome.runtime) {
        return chrome.runtime.getManifest();
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Détecte s'il y a plusieurs providers Ethereum
   */
  private static hasMultipleProviders(): boolean {
    try {
      const ethereum = (window as any).ethereum;
      if (!ethereum) return false;
      
      // Vérifier s'il y a plusieurs providers
      const providers = ethereum.providers || [];
      return providers.length > 1;
    } catch (error) {
      return false;
    }
  }
} 