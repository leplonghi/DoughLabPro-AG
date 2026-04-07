const fs = require('fs');
const path = require('path');

const STYLES_DIR = path.join(__dirname, 'src/data/styles');

function getFiles(dir, allFiles = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, allFiles);
        } else {
            if (file.endsWith('.ts') && !file.includes('index') && !file.includes('registry') && !file.includes('builder')) {
                allFiles.push(filePath);
            }
        }
    });
    return allFiles;
}

const files = getFiles(STYLES_DIR);
const results = {
    missing: [],
    underpopulated: []
};

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relPath = path.relative(__dirname, file);
    if (!content.includes('recommendedFlavorComponents')) {
        results.missing.push(relPath);
    } else {
        const matches = content.match(/recommendedFlavorComponents:\s*\[([\s\S]*?)\]/g);
        if (matches) {
            let fileIsUnderpopulated = false;
            matches.forEach(m => {
                const items = m.match(/['"][^'"]+['"]/g);
                if (!items || items.length < 5) {
                    fileIsUnderpopulated = true;
                }
            });
            if (fileIsUnderpopulated) {
                results.underpopulated.push(relPath);
            }
        }
    }
});

fs.writeFileSync('scan_results.json', JSON.stringify(results, null, 2));
console.log('Results written to scan_results.json');
