#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to adjust text colors after changing dark backgrounds to light ones
 * We need to change white text to dark text where appropriate
 */

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern: bg-white followed by text-white somewhere in the same className
    // This is a simple heuristic - we'll look for patterns like:
    // className="... bg-white ... text-white ..."
    // and replace text-white with text-slate-800

    const classNamePattern = /className=["']([^"']*bg-white[^"']*text-white[^"']*)["']/g;

    const newContent = content.replace(classNamePattern, (match, classes) => {
        // Replace text-white with text-slate-800 in this className
        const newClasses = classes.replace(/text-white/g, 'text-slate-800');
        modified = true;
        return `className="${newClasses}"`;
    });

    // Also handle bg-slate-50 with text-white
    const slatePattern = /className=["']([^"']*bg-slate-50[^"']*text-white[^"']*)["']/g;
    const newContent2 = newContent.replace(slatePattern, (match, classes) => {
        const newClasses = classes.replace(/text-white/g, 'text-slate-800');
        modified = true;
        return `className="${newClasses}"`;
    });

    // Handle text-slate-300 on light backgrounds (should be darker)
    const slateTextPattern = /className=["']([^"']*(?:bg-white|bg-slate-50)[^"']*text-slate-300[^"']*)["']/g;
    const newContent3 = newContent2.replace(slateTextPattern, (match, classes) => {
        const newClasses = classes.replace(/text-slate-300/g, 'text-slate-600');
        modified = true;
        return `className="${newClasses}"`;
    });

    if (modified) {
        fs.writeFileSync(filePath, newContent3, 'utf8');
        console.log(`✓ Fixed text colors: ${filePath}`);
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
    console.log('🎨 Fixing text colors on light backgrounds...\n');

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
