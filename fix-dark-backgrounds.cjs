#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to replace all dark backgrounds with light/white backgrounds
 * maintaining the app's design pattern
 */

const replacements = [
    // Dark slate backgrounds -> Light backgrounds
    { from: /bg-slate-900/g, to: 'bg-white' },
    { from: /bg-slate-800/g, to: 'bg-slate-50' },
    { from: /bg-slate-950/g, to: 'bg-white' },

    // Dark gray backgrounds -> Light backgrounds
    { from: /bg-gray-900/g, to: 'bg-white' },
    { from: /bg-gray-800/g, to: 'bg-gray-50' },

    // Dark zinc backgrounds -> Light backgrounds
    { from: /bg-zinc-900/g, to: 'bg-white' },
    { from: /bg-zinc-800/g, to: 'bg-zinc-50' },

    // Dark neutral backgrounds -> Light backgrounds  
    { from: /bg-neutral-900/g, to: 'bg-white' },
    { from: /bg-neutral-800/g, to: 'bg-neutral-50' },

    // Specific hex dark colors -> Light equivalents
    { from: /bg-\[#1e293b\]/g, to: 'bg-white' },
    { from: /bg-\[#1B4332\]/g, to: 'bg-gradient-to-br from-emerald-50 to-lime-50' },

    // Dark borders -> Light borders
    { from: /border-slate-900/g, to: 'border-slate-200' },
    { from: /border-slate-800/g, to: 'border-slate-200' },
    { from: /border-gray-800/g, to: 'border-gray-200' },
    { from: /border-zinc-800/g, to: 'border-zinc-200' },

    // Dark text on previously dark backgrounds -> Appropriate dark text
    { from: /dark:bg-slate-900/g, to: 'bg-white' },
    { from: /dark:bg-slate-800/g, to: 'bg-slate-50' },
    { from: /dark:bg-gray-900/g, to: 'bg-white' },
    { from: /dark:bg-gray-800/g, to: 'bg-gray-50' },

    // Dark hover states -> Light hover states
    { from: /hover:bg-slate-900/g, to: 'hover:bg-slate-100' },
    { from: /hover:bg-slate-800/g, to: 'hover:bg-slate-100' },
    { from: /hover:bg-gray-900/g, to: 'hover:bg-gray-100' },
    { from: /hover:bg-gray-800/g, to: 'hover:bg-gray-100' },
    { from: /hover:bg-zinc-900/g, to: 'hover:bg-zinc-100' },
    { from: /hover:bg-zinc-800/g, to: 'hover:bg-zinc-100' },
    { from: /hover:bg-zinc-700/g, to: 'hover:bg-zinc-200' },
];

// Files/patterns to exclude (overlays, modals backgrounds that need transparency)
const excludePatterns = [
    'bg-black/80', // Modal overlays
    'bg-black/60', // Modal overlays
    'bg-black/50', // Semi-transparent overlays
    'bg-black/40', // Tooltip overlays
    'bg-black/30', // Light overlays
    'bg-slate-900/50', // Semi-transparent overlays
    'bg-slate-900/60', // Semi-transparent overlays
];

function shouldExclude(line) {
    return excludePatterns.some(pattern => line.includes(pattern));
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const lines = content.split('\n');

    const processedLines = lines.map(line => {
        // Skip lines with excluded patterns (overlays)
        if (shouldExclude(line)) {
            return line;
        }

        let processedLine = line;
        replacements.forEach(({ from, to }) => {
            if (processedLine.match(from)) {
                processedLine = processedLine.replace(from, to);
                modified = true;
            }
        });

        return processedLine;
    });

    if (modified) {
        fs.writeFileSync(filePath, processedLines.join('\n'), 'utf8');
        console.log(`✓ Updated: ${filePath}`);
        return true;
    }

    return false;
}

function walkDir(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
                walkDir(filePath, fileList);
            }
        } else if (/\.(tsx|jsx|ts|js)$/.test(file)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

function main() {
    console.log('🎨 Fixing dark backgrounds to light backgrounds...\n');

    const srcDir = path.join(__dirname, 'src');
    const files = walkDir(srcDir);

    let updatedCount = 0;

    files.forEach(file => {
        if (processFile(file)) {
            updatedCount++;
        }
    });

    console.log(`\n✨ Done! Updated ${updatedCount} files.`);
}

main();
