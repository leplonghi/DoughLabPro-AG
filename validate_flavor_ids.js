
const fs = require('fs');
const path = require('path');

const FLAVOR_FILE = 'src/data/flavorComponents.ts';
const STYLES_DIR = 'src/data/styles';

function getFlavorIds() {
    const content = fs.readFileSync(FLAVOR_FILE, 'utf8');
    const ids = [];
    const regex = /id:\s*['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        ids.push(match[1]);
    }
    return new Set(ids);
}

function getStyleFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getStyleFiles(filePath, fileList);
        } else {
            if (file.endsWith('.ts') && file !== 'index.ts' && file !== 'registry.ts' && file !== 'builder.ts') {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

function checkStyles(flavorIds) {
    const styleFiles = getStyleFiles(STYLES_DIR);
    let hasErrors = false;

    styleFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        // Look for recommendedFlavorComponents: ["a", "b"]
        const match = content.match(/recommendedFlavorComponents:\s*\[([\s\S]*?)\]/);
        if (match) {
            const arrayContent = match[1];
            // Extract strings
            const usedIds = [];
            const idRegex = /['"]([^'"]+)['"]/g;
            let idMatch;
            while ((idMatch = idRegex.exec(arrayContent)) !== null) {
                usedIds.push(idMatch[1]);
            }

            const missing = usedIds.filter(id => !flavorIds.has(id));
            if (missing.length > 0) {
                hasErrors = true;
                console.log(`File: ${path.relative(process.cwd(), file)}`);
                console.log(`  Missing IDs: ${missing.join(', ')}`);
            }
        } else {
            // console.log(`File: ${path.relative(process.cwd(), file)} - No recommendedFlavorComponents found`);
        }
    });

    if (!hasErrors) {
        console.log("All flavor IDs are valid!");
    }
}

const flavorIds = getFlavorIds();
console.log(`Found ${flavorIds.size} flavor IDs.`);
checkStyles(flavorIds);
