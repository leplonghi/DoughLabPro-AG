#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to fix gradient backgrounds that were changed from dark to light
 * but still have white text
 */

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern: from-emerald-50 to-lime-50 with text-white
    // This gradient is light, so text should be dark
    const lightGradientPattern = /from-emerald-50 to-lime-50([^"']*?)text-white/g;

    const newContent = content.replace(lightGradientPattern, (match) => {
        modified = true;
        return match.replace(/text-white/g, 'text-slate-800');
    });

    if (modified) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`✓ Fixed gradient text colors: ${filePath}`);
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
    console.log('🎨 Fixing text colors on light gradient backgrounds...\n');

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
