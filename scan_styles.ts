import fs from 'fs';
import path from 'path';

const baseDir = 'c:/Users/eduar/OneDrive/Desktop/Antigravity/doughlabpro/src/data/styles';

function checkFile(filePath: string) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const hasCultural = content.includes('culturalContext');
    const hasFlavor = content.includes('flavorProfile');
    const hasFaq = content.includes('faq: [') && !content.includes('faq: []');

    return {
        path: filePath,
        hasCultural,
        hasFlavor,
        hasFaq,
        incomplete: !hasCultural || !hasFlavor || !hasFaq
    };
}

const results: any[] = [];

function scanDir(dir: string) {
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
    console.log(`- ${i.path}: Cultural=${i.hasCultural}, Flavor=${i.hasFlavor}, Faq=${i.hasFaq}`);
});
