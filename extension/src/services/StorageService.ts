/**
 * Service pour gérer le stockage local via chrome.storage
 */
export class StorageService {
  private static readonly USER_ADDRESS_KEY = 'userAddress';
  private static readonly SETTINGS_KEY = 'settings';

  /**
   * Récupère l'adresse publique de l'utilisateur
   */
  static async getUserAddress(): Promise<string | null> {
    return new Promise((resolve) => {
      chrome.storage.local.get([this.USER_ADDRESS_KEY], (result) => {
        resolve(result[this.USER_ADDRESS_KEY] || null);
      });
    });
  }

  /**
   * Stocke l'adresse publique de l'utilisateur
   */
  static async setUserAddress(address: string): Promise<void> {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [this.USER_ADDRESS_KEY]: address }, () => {
        console.log('User address stored:', address);
        resolve();
      });
    });
  }

  /**
   * Supprime l'adresse publique de l'utilisateur
   */
  static async clearUserAddress(): Promise<void> {
    return new Promise((resolve) => {
      chrome.storage.local.remove([this.USER_ADDRESS_KEY], () => {
        console.log('User address cleared');
        resolve();
      });
    });
  }

  /**
   * Récupère les paramètres de l'extension
   */
  static async getSettings(): Promise<Record<string, any>> {
    return new Promise((resolve) => {
      chrome.storage.local.get([this.SETTINGS_KEY], (result) => {
        resolve(result[this.SETTINGS_KEY] || {});
      });
    });
  }

  /**
   * Stocke les paramètres de l'extension
   */
  static async setSettings(settings: Record<string, any>): Promise<void> {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [this.SETTINGS_KEY]: settings }, () => {
        console.log('Settings stored:', settings);
        resolve();
      });
    });
  }

  /**
   * Met à jour un paramètre spécifique
   */
  static async updateSetting(key: string, value: any): Promise<void> {
    const settings = await this.getSettings();
    settings[key] = value;
    await this.setSettings(settings);
  }

  /**
   * Récupère un paramètre spécifique
   */
  static async getSetting(key: string, defaultValue?: any): Promise<any> {
    const settings = await this.getSettings();
    return settings[key] !== undefined ? settings[key] : defaultValue;
  }

  /**
   * Supprime tous les données stockées
   */
  static async clearAll(): Promise<void> {
    return new Promise((resolve) => {
      chrome.storage.local.clear(() => {
        console.log('All storage cleared');
        resolve();
      });
    });
  }

  /**
   * Écoute les changements dans le stockage
   */
  static onStorageChanged(callback: (changes: Record<string, chrome.storage.StorageChange>) => void): void {
    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace === 'local') {
        callback(changes);
      }
    });
  }
} 