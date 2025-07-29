#!/bin/bash

# Script de reset pour ImmobilierDAO
# Usage: ./scripts/codex-reset.sh

echo "🔄 Reset du projet ImmobilierDAO..."

# Nettoyage des node_modules
echo "🧹 Cleaning node_modules..."
rm -rf node_modules
rm -f package-lock.json

# Réinstallation des dépendances
echo "📦 Reinstalling dependencies..."
npm install

# Nettoyage du cache Next.js
echo "🗑️ Cleaning Next.js cache..."
rm -rf .next

echo "✅ Reset terminé!"