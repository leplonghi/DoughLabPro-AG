const fs = require('fs');
const path = require('path');

const TARGET_DIR = path.join(__dirname, '../src/components');
const PATTERNS = [
    { from: /bg-black\/30/g, to: 'bg-slate-900/20' },
    { from: /bg-black\/40/g, to: 'bg-slate-900/20' },
    { from: /bg-black\/50/g, to: 'bg-slate-900/20' },
    { from: /bg-black\/60/g, to: 'bg-slate-900/20' },
    { from: /bg-black\/70/g, to: 'bg-slate-900/20' },
    { from: /bg-black\/80/g, to: 'bg-slate-900/20' },
    { from: /bg-black\/90/g, to: 'bg-slate-900/20' },
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            PATTERNS.forEach(pattern => {
                content = content.replace(pattern.from, pattern.to);
            });

            if (content !== originalContent) {
                console.log(`Fixing ${file}...`);
                fs.writeFileSync(fullPath, content);
            }
        }
    });
}

console.log('Starting dark overlay fix...');
processDirectory(TARGET_DIR);
console.log('Done.');
