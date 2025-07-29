#!/bin/bash

# Script de déploiement pour ImmobilierDAO
# Usage: ./scripts/codex-deploy.sh

echo "🚀 Déploiement ImmobilierDAO..."

# Build du projet
echo "📦 Building project..."
npm run build

# Vérification du build
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Déploiement (à personnaliser selon votre provider)
echo "🌐 Deploying to production..."
# npm run deploy ou autre commande de déploiement

echo "✅ Déploiement terminé!"