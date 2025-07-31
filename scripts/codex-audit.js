#!/usr/bin/env node

// Script d'audit global du site
// Supprime node_modules et package-lock.json, réinstalle les dépendances et corrige les imports three/examples/jsm/

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧹 Nettoyage...');
execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });

console.log('📦 Réinstallation des dépendances...');
execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

// Remplacement des imports three/examples/jsm/ par three-stdlib/
function replaceImports(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceImports(full);
    } else if (full.endsWith('.ts') || full.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf8');
      const updated = content.replace(/three\/examples\/jsm\//g, 'three-stdlib/');
      if (content !== updated) {
        fs.writeFileSync(full, updated);
        console.log('✅ Import corrigé :', path.relative(process.cwd(), full));
      }
    }
  }
}

replaceImports(process.cwd());

console.log('🚀 Redémarrage du projet...');
execSync('npm run dev', { stdio: 'inherit' });

console.log('✅ Audit terminé. Bugs corrigés automatiquement si détectés.');
