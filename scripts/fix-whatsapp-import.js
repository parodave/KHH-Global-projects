const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const UI_DIR = path.join(ROOT, 'components', 'ui');
const NEW_NAME = 'whatsapp-button.tsx';

// Recherche du fichier mal nommé (casse différente)
function findOldFile() {
  const files = fs.readdirSync(UI_DIR);
  const target = files.find(
    (f) => f.toLowerCase() === 'whatsappbutton.tsx' && f !== NEW_NAME
  );
  return target || null;
}

function renameFile(oldName) {
  const oldPath = path.join(UI_DIR, oldName);
  const newPath = path.join(UI_DIR, NEW_NAME);

  if (fs.existsSync(newPath)) {
    console.log(`⚠️  ${NEW_NAME} existe déjà. Supprimez ${oldName} manuellement si nécessaire.`);
    return;
  }

  fs.renameSync(oldPath, newPath);
  console.log(`✅ Fichier renommé : ${oldName} → ${NEW_NAME}`);
}

function getTsxFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue;
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getTsxFiles(res));
    } else if (entry.isFile() && res.endsWith('.tsx')) {
      results.push(res);
    }
  }
  return results;
}

function fixImports() {
  const files = getTsxFiles(ROOT);
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const updated = content
      .replace(/@\/components\/ui\/WhatsAppButton/g, '@/components/ui/whatsapp-button')
      .replace(/@\/components\/ui\/WhatsappButton/g, '@/components/ui/whatsapp-button');

    if (updated !== content) {
      fs.writeFileSync(file, updated);
      console.log(`🔁 Import corrigé dans : ${path.relative(ROOT, file)}`);
    }
  });
}

const oldFile = findOldFile();
if (oldFile) {
  renameFile(oldFile);
} else {
  console.log('ℹ️ Aucun fichier WhatsAppButton à renommer');
}

fixImports();
