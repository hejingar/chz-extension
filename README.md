# CHZ Extension

Une extension Chrome moderne avec Manifest V3 développée en TypeScript et React, intégrant MetaMask pour la connexion wallet et offrant des fonctionnalités de WebSocket et polling.

## 🚀 Fonctionnalités

- **Connexion MetaMask** : Intégration complète avec MetaMask
- **Interface moderne** : Interface utilisateur élégante avec React et CSS moderne
- **WebSocket** : Connexion temps réel avec un serveur WebSocket
- **Polling** : Système de polling configurable pour récupérer des données
- **Stockage local** : Persistance des données avec `chrome.storage`
- **TypeScript** : Code entièrement typé pour une meilleure maintenabilité
- **Build moderne** : Système de build avec Vite pour un développement rapide

## 📦 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn
- Chrome/Chromium

### Installation des dépendances

```bash
npm install
```

### Build de l'extension

```bash
npm run build
```

### Développement

```bash
npm run dev
```

## 🔧 Configuration

### Chargement de l'extension dans Chrome

1. Ouvrez Chrome et allez à `chrome://extensions/`
2. Activez le "Mode développeur" (Developer mode)
3. Cliquez sur "Charger l'extension non empaquetée" (Load unpacked)
4. Sélectionnez le dossier `dist` généré après le build

### Configuration WebSocket

Par défaut, l'extension tente de se connecter à `ws://localhost:8080`. Vous pouvez modifier cette URL dans le fichier `src/background.ts` :

```typescript
const WEBSOCKET_URL = 'ws://votre-serveur-websocket.com';
```

### Configuration du polling

L'intervalle de polling est défini à 30 secondes par défaut. Vous pouvez le modifier dans `src/background.ts` :

```typescript
const POLLING_INTERVAL = 30000; // en millisecondes
```

## 🏗️ Structure du projet

```
chz-extension/
├── src/
│   ├── components/
│   │   ├── PopupApp.tsx        # Composant principal du popup
│   │   └── PopupApp.css        # Styles du popup
│   ├── services/
│   │   ├── StorageService.ts   # Service de stockage Chrome
│   │   └── MetamaskService.ts  # Service MetaMask
│   ├── types/
│   │   └── index.ts           # Types TypeScript
│   ├── background.ts          # Script de background
│   └── popup.tsx             # Point d'entrée du popup
├── manifest.json             # Manifest de l'extension
├── popup.html               # HTML du popup
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Utilisation

### Connexion MetaMask

1. Cliquez sur l'icône de l'extension dans la barre d'outils Chrome
2. Cliquez sur "Connecter MetaMask"
3. Autorisez la connexion dans MetaMask
4. Votre adresse sera automatiquement sauvegardée

### Gestion des services

Une fois connecté, vous pouvez :

- **Activer/Désactiver WebSocket** : Connexion temps réel
- **Démarrer/Arrêter le polling** : Récupération périodique de données
- **Voir le statut** : Statut en temps réel des services

### Déconnexion

Cliquez sur "Déconnecter" pour nettoyer les données locales et arrêter tous les services.

## 🛠️ Développement

### Scripts disponibles

- `npm run dev` : Mode développement avec rechargement automatique
- `npm run build` : Build de production
- `npm run preview` : Aperçu du build

### Ajout de nouvelles fonctionnalités

1. **Nouveau service** : Ajoutez vos services dans `src/services/`
2. **Nouveaux types** : Définissez vos types dans `src/types/`
3. **Nouveaux composants** : Créez vos composants React dans `src/components/`
4. **Logic background** : Modifiez `src/background.ts` pour la logique en arrière-plan

### Gestion des messages

L'extension utilise un système de messages entre le popup et le background script :

```typescript
// Depuis le popup
chrome.runtime.sendMessage({ action: 'connect_websocket' });

// Dans le background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case 'connect_websocket':
      // Votre logique ici
      break;
  }
});
```

## 📝 API

### StorageService

```typescript
// Sauvegarder l'adresse utilisateur
await StorageService.setUserAddress(address);

// Récupérer l'adresse utilisateur
const address = await StorageService.getUserAddress();

// Sauvegarder des paramètres
await StorageService.setSettings({ theme: 'dark' });
```

### MetamaskService

```typescript
// Vérifier si MetaMask est installé
const isInstalled = MetamaskService.isMetamaskInstalled();

// Connecter le wallet
const address = await MetamaskService.connectWallet();

// Récupérer le solde
const balance = await MetamaskService.getBalance(address);
```

## 🔒 Sécurité

- L'extension utilise uniquement les permissions minimales requises
- Les données sont stockées localement via `chrome.storage`
- Toutes les interactions avec MetaMask sont sécurisées
- Le code est entièrement typé avec TypeScript

## 🐛 Dépannage

### Problèmes courants

1. **Extension non chargée** : Vérifiez que le mode développeur est activé
2. **MetaMask non détecté** : Assurez-vous que MetaMask est installé et activé
3. **WebSocket non connecté** : Vérifiez l'URL et que le serveur est démarré
4. **Build échoue** : Supprimez `node_modules` et `dist`, puis relancez `npm install`

### Debug

Utilisez les outils de développement Chrome :

1. **Background script** : `chrome://extensions/` > Détails > Inspecter les vues > background.html
2. **Popup** : Clic droit sur l'extension > Inspecter
3. **Console** : Vérifiez les logs dans la console

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité
3. Commitez vos changements
4. Pushez vers la branche
5. Ouvrez une Pull Request

## 📄 License

Ce projet est sous licence MIT.

## 🔗 Liens utiles

- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [MetaMask Developer Docs](https://docs.metamask.io/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
