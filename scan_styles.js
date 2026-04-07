const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/eduar/OneDrive/Desktop/Antigravity/doughlabpro/src/data/styles';

function checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasCultural = content.includes('culturalContext');
    const hasFlavor = content.includes('flavorProfile');
    // Check if faq matches faq: [ but NOT faq: []
    // This is a simple heuristic.
    const hasFaq = content.includes('faq: [') && !content.includes('faq: []');

    return {
        path: filePath,
        hasCultural,
        hasFlavor,
        hasFaq,
        incomplete: !hasCultural || !hasFlavor || !hasFaq
    };
}

const results = [];

function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            scanDir(fullPath);
        } else if (entry.name.endsWith('.ts') && entry.name !== 'registry.ts' && entry.name !== 'builder.ts' && entry.name !== 'index.ts') {
            results.push(checkFile(fullPath));
        }
    }
}

scanDir(baseDir);

const incomplete = results.filter(r => r.incomplete);
console.log(`Found ${results.length} styles, ${incomplete.length} are incomplete.`);
incomplete.forEach(i => {
    // Format path to be relative for easier reading
    const relativePath = path.relative(baseDir, i.path);
    console.log(`- ${relativePath}: Cultural=${i.hasCultural}, Flavor=${i.hasFlavor}, Faq=${i.hasFaq}`);
});
