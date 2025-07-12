# 🔧 Guide de dépannage MetaMask

## Problème : MetaMask non détecté

Si vous voyez le message "MetaMask non détecté" alors que MetaMask est installé, suivez ces étapes :

### ✅ Vérifications préliminaires

1. **Vérifiez l'installation de MetaMask** :
   - Allez sur `chrome://extensions/`
   - Vérifiez que MetaMask est installé et **activé** (bouton ON)
   - Assurez-vous que MetaMask n'est pas en mode "Développeur"

2. **Vérifiez que MetaMask est déverrouillé** :
   - Cliquez sur l'icône MetaMask dans la barre d'outils
   - Entrez votre mot de passe si demandé
   - Assurez-vous d'avoir au moins un compte créé

3. **Vérifiez l'ordre des extensions** :
   - MetaMask doit être chargé avant l'extension CHZ
   - Redémarrez Chrome si nécessaire

### 🚨 Mode développeur et extensions non vérifiées

**⚠️ IMPORTANT** : Le mode développeur et les extensions non vérifiées peuvent sérieusement interférer avec MetaMask !

#### Problèmes causés par le mode développeur :
- **Injection retardée** : MetaMask peut s'injecter plus lentement
- **Contexte de sécurité** : Chrome applique des restrictions de sécurité supplémentaires
- **Ordre de chargement** : Les extensions en mode développeur se chargent différemment
- **Isolation des scripts** : Possible isolation des scripts d'injection

#### Solutions pour le mode développeur :

1. **Désactiver temporairement le mode développeur** :
   ```bash
   1. Allez sur chrome://extensions/
   2. Désactivez le "Mode développeur" (Developer mode)
   3. Redémarrez Chrome
   4. Testez l'extension CHZ
   ```

2. **Si vous devez garder le mode développeur** :
   ```bash
   1. Rechargez MetaMask en premier
   2. Attendez 10 secondes
   3. Rechargez l'extension CHZ
   4. Ouvrez MetaMask manuellement
   5. Attendez qu'il soit complètement chargé
   6. Ouvrez l'extension CHZ
   ```

3. **Ordre de chargement spécifique** :
   ```bash
   1. Désactivez TOUTES les extensions
   2. Réactivez MetaMask EN PREMIER
   3. Attendez 30 secondes
   4. Réactivez l'extension CHZ
   5. Testez la détection
   ```

#### Extensions non vérifiées problématiques :
- **Extensions de développement** : Peuvent intercepter les injections
- **Extensions de wallet** : Conflits avec MetaMask
- **Extensions de sécurité** : Peuvent bloquer l'injection ethereum
- **Extensions d'AdBlock** : Peuvent bloquer les scripts MetaMask

### 🔍 Utilisez les diagnostics intégrés

L'extension CHZ inclut maintenant des diagnostics avancés :

1. **Ouvrez l'extension CHZ**
2. **Cliquez sur "Voir diagnostics"** dans l'écran d'erreur
3. **Analysez les résultats** :
   - ✅ **window.ethereum: Présent** - MetaMask est injecté
   - ✅ **isMetaMask: Oui** - C'est bien MetaMask (pas un autre wallet)
   - ✅ **request method: Disponible** - Les méthodes MetaMask sont disponibles
   - ✅ **Extension context: Oui** - L'extension fonctionne correctement

### 🚨 Solutions selon les diagnostics

#### Si `window.ethereum: Absent`
```
❌ MetaMask n'est pas injecté dans la page
```
**Solutions** :
1. **Désactivez le mode développeur** temporairement
2. Redémarrez Chrome complètement
3. Désactivez puis réactivez MetaMask dans `chrome://extensions/`
4. Réinstallez MetaMask depuis le Chrome Web Store

#### Si `isMetaMask: Non`
```
❌ Un autre wallet interfère avec MetaMask
```
**Solutions** :
1. Désactivez temporairement les autres wallets (Coinbase, Rabby, Trust)
2. **Désactivez les extensions non vérifiées** en mode développeur
3. Assurez-vous que MetaMask est défini comme wallet par défaut
4. Redémarrez Chrome

#### Si `request method: Manquante`
```
❌ MetaMask n'est pas correctement initialisé
```
**Solutions** :
1. **Sortez du mode développeur** temporairement
2. Attendez quelques secondes et cliquez sur "Réessayer"
3. Ouvrez MetaMask manuellement puis retentez
4. Redémarrez Chrome

### 💡 Solutions étape par étape

#### Solution 1 : Redémarrage complet SANS mode développeur
```bash
1. Allez sur chrome://extensions/
2. Désactivez le "Mode développeur"
3. Fermez Chrome complètement
4. Attendez 5 secondes
5. Rouvrez Chrome
6. Ouvrez MetaMask manuellement
7. Attendez qu'il soit complètement chargé
8. Ouvrez l'extension CHZ
9. Réactivez le mode développeur SI NÉCESSAIRE
```

#### Solution 2 : Réinitialisation des extensions
```bash
1. Allez sur chrome://extensions/
2. Désactivez MetaMask
3. Désactivez l'extension CHZ
4. Désactivez le mode développeur
5. Redémarrez Chrome
6. Réactivez MetaMask
7. Attendez 10 secondes
8. Réactivez l'extension CHZ
9. Testez AVANT de réactiver le mode développeur
```

#### Solution 3 : Gestion des conflits de wallets
```bash
1. Listez tous les wallets installés
2. Désactivez tous sauf MetaMask
3. Désactivez le mode développeur
4. Redémarrez Chrome
5. Testez l'extension CHZ
6. Réactivez les autres wallets un par un
7. Réactivez le mode développeur en dernier
```

### 🔄 Améliorations dans cette version

L'extension CHZ a été améliorée avec :

- **Détection robuste** : Vérification en 5 étapes de MetaMask
- **Retry intelligent** : Attente jusqu'à 10 secondes pour l'injection
- **Diagnostic complet** : Analyse des conflits et de l'état
- **Gestion des erreurs** : Messages d'erreur spécifiques
- **Vérification du statut** : Détection si MetaMask est verrouillé
- **Gestion du mode développeur** : Détection des problèmes liés au mode dev

### 🐛 Problèmes connus

#### Problème : Extension bloquée sur "Vérification de MetaMask..."
**Cause** : MetaMask prend du temps à s'injecter (souvent dû au mode développeur)
**Solution** : Désactivez temporairement le mode développeur, attendez 10 secondes ou cliquez sur "Réessayer"

#### Problème : "MetaMask est installé mais verrouillé"
**Cause** : MetaMask nécessite un mot de passe
**Solution** : Cliquez sur l'icône MetaMask et entrez votre mot de passe

#### Problème : Autres wallets détectés
**Cause** : Coinbase Wallet, Rabby, ou Trust Wallet interfèrent
**Solution** : Désactivez les autres wallets temporairement

#### Problème : Mode développeur actif
**Cause** : Le mode développeur peut retarder ou bloquer l'injection MetaMask
**Solution** : Désactivez temporairement le mode développeur pour tester

### 📞 Support avancé

Si le problème persiste après avoir suivi ce guide :

1. **Collectez les informations de diagnostic** :
   - Ouvrez la console développeur (F12)
   - Onglet "Console"
   - Copiez les messages d'erreur

2. **Vérifiez les logs** :
   - Allez sur `chrome://extensions/`
   - Cliquez sur "Détails" pour l'extension CHZ
   - Cliquez sur "Inspecter les vues" > "service worker"
   - Consultez les logs dans la console

3. **Informations système** :
   - Version de Chrome
   - Version de MetaMask
   - **Mode développeur activé ou non**
   - **Liste des extensions en mode développeur**
   - Système d'exploitation
   - Autres extensions installées

### 🎯 Test de fonctionnement

Une fois MetaMask détecté, vous devriez voir :
- ✅ Bouton "Connecter MetaMask" disponible
- ✅ Connexion réussie avec affichage de l'adresse
- ✅ Services Chiliz Chain 2.0 activés
- ✅ Surveillance des transactions en temps réel

### 📚 Ressources supplémentaires

- [Documentation officielle MetaMask](https://docs.metamask.io/)
- [Guide d'installation MetaMask](https://metamask.io/download/)
- [FAQ MetaMask](https://metamask.zendesk.com/hc/en-us)
- [Chrome Extension Developer Mode](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/)

---

*Ce guide de dépannage est spécifiquement conçu pour l'extension CHZ avec surveillance Chiliz Chain 2.0.* 