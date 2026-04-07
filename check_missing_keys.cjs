
const fs = require('fs');
const path = require('path');

const STYLES_DIR = 'src/data/styles';

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

function checkMissingKeys() {
    const styleFiles = getStyleFiles(STYLES_DIR);
    let count = 0;

    styleFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        if (!content.includes('recommendedFlavorComponents')) {
            console.log(`Missing key in: ${path.relative(process.cwd(), file)}`);
            count++;
        }
    });

    if (count === 0) {
        console.log("All style files have recommendedFlavorComponents key!");
    } else {
        console.log(`Found ${count} files missing the key.`);
    }
}

checkMissingKeys();
