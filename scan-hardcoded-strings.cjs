const fs = require('fs');
const path = require('path');

// Directories to scan
const dirsToScan = [
    './src/components',
    './src/pages',
    './src/contexts',
    './src/hooks',
    './src/services',
    './src/utils'
];

// Extensions to check
const extensions = ['.tsx', '.ts', '.jsx', '.js'];

// Patterns to ignore (already using i18n or are technical)
const ignorePatterns = [
    /import.*from/,
    /export.*from/,
    /console\./,
    /className=/,
    /style=/,
    /id=/,
    /key=/,
    /type=/,
    /name=/,
    /placeholder=/,
    /aria-/,
    /data-/,
    /http/,
    /\.svg/,
    /\.png/,
    /\.jpg/,
    /\.json/,
    /\/\//,  // comments
    /\/\*/,  // comments
    /t\(/,   // already using i18n
    /useTranslation/,
    /i18n/
];

const results = [];
let totalFiles = 0;
let filesWithHardcoded = 0;

function shouldIgnoreLine(line) {
    return ignorePatterns.some(pattern => pattern.test(line));
}

function findHardcodedStrings(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const hardcodedStrings = [];

    lines.forEach((line, index) => {
        if (shouldIgnoreLine(line)) return;

        // Match strings in quotes that are likely user-facing text
        // Look for strings longer than 3 chars that contain spaces or are capitalized
        const stringPattern = /["']([A-Z][a-zA-Z\s]{3,}|[a-z]+\s+[a-zA-Z\s]+)["']/g;
        const matches = [...line.matchAll(stringPattern)];

        matches.forEach(match => {
            const text = match[1];
            // Filter out technical strings
            if (
                text.length > 3 &&
                !text.match(/^[a-z]+$/) && // single lowercase word
                !text.match(/^\d+$/) && // just numbers
                !text.match(/^[A-Z_]+$/) && // CONSTANTS
                !text.includes('px') &&
                !text.includes('%') &&
                !text.includes('rem') &&
                !text.includes('vh') &&
                !text.includes('vw')
            ) {
                hardcodedStrings.push({
                    line: index + 1,
                    text: text,
                    context: line.trim()
                });
            }
        });
    });

    return hardcodedStrings;
}

function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanDirectory(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
            totalFiles++;
            const hardcoded = findHardcodedStrings(fullPath);

            if (hardcoded.length > 0) {
                filesWithHardcoded++;
                results.push({
                    file: fullPath.replace(/\\/g, '/'),
                    count: hardcoded.length,
                    strings: hardcoded
                });
            }
        }
    });
}

console.log('🔍 Scanning for hardcoded strings in the app...\n');
console.log('='.repeat(60));

dirsToScan.forEach(dir => {
    console.log(`\n📁 Scanning: ${dir}`);
    scanDirectory(dir);
});

console.log('\n' + '='.repeat(60));
console.log(`\n📊 Scan Summary:`);
console.log(`   Total files scanned: ${totalFiles}`);
console.log(`   Files with hardcoded strings: ${filesWithHardcoded}`);
console.log(`   Total hardcoded strings found: ${results.reduce((sum, r) => sum + r.count, 0)}`);

// Sort by count (most hardcoded first)
results.sort((a, b) => b.count - a.count);

console.log(`\n\n📋 Top 20 Files with Most Hardcoded Strings:\n`);

results.slice(0, 20).forEach((result, idx) => {
    console.log(`${idx + 1}. ${result.file}`);
    console.log(`   Hardcoded strings: ${result.count}`);
    console.log(`   Examples:`);
    result.strings.slice(0, 3).forEach(str => {
        console.log(`     Line ${str.line}: "${str.text}"`);
    });
    console.log('');
});

// Save detailed report
const reportPath = './hardcoded-strings-report.json';
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

console.log(`\n✅ Detailed report saved to: ${reportPath}`);
console.log(`\n💡 Next steps:`);
console.log(`   1. Review the report to identify user-facing strings`);
console.log(`   2. Create i18n keys for these strings`);
console.log(`   3. Replace hardcoded strings with t() calls`);
