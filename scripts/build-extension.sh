#!/bin/bash

# Script pour construire l'extension Chrome

echo "🚀 Construction de l'extension CHZ..."

# Nettoyer le dossier dist
if [ -d "dist" ]; then
    echo "🧹 Nettoyage du dossier dist..."
    rm -rf dist
fi

# Construire l'extension
echo "🔨 Construction avec Vite..."
npm run build

# Copier le manifest
echo "📋 Copie du manifest.json..."
cp manifest.json dist/

# Vérifier que tous les fichiers sont présents
echo "✅ Vérification des fichiers..."
required_files=("manifest.json" "background.js" "popup.html" "popup.js" "popup.css")
missing_files=()

for file in "${required_files[@]}"; do
    if [ ! -f "dist/$file" ]; then
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -eq 0 ]; then
    echo "✅ Extension construite avec succès dans le dossier dist/"
    echo "📦 Fichiers générés :"
    ls -la dist/
    echo ""
    echo "🎉 L'extension est prête à être chargée dans Chrome !"
    echo "   1. Ouvrez Chrome et allez à chrome://extensions/"
    echo "   2. Activez le 'Mode développeur'"
    echo "   3. Cliquez sur 'Charger l'extension non empaquetée'"
    echo "   4. Sélectionnez le dossier 'dist'"
else
    echo "❌ Erreur : Fichiers manquants :"
    for file in "${missing_files[@]}"; do
        echo "   - $file"
    done
    exit 1
fi 