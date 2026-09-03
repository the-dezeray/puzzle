const fs = require('fs');
const path = require('path');

// Tiny asset builder: copies public/ into dist/.
const src = path.join(__dirname, '..', 'public');
const dst = path.join(__dirname, '..', 'dist');

fs.mkdirSync(dst, { recursive: true });
for (const f of fs.readdirSync(src)) {
  fs.copyFileSync(path.join(src, f), path.join(dst, f));
}
console.log('Build complete.');
