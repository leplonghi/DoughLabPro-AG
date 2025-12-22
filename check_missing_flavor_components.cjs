
const fs = require('fs');
const path = require('path');

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else if (file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const stylesDir = path.join(process.cwd(), 'src/data/styles');
const files = getFiles(stylesDir);

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Simple regex to find recommendedFlavorComponents: [...]
    const match = content.match(/recommendedFlavorComponents:\s*\[([\s\S]*?)\]/);
    if (match) {
        const componentsText = match[1];
        const components = componentsText.split(',').map(s => s.trim().replace(/['"]/g, '')).filter(s => s.length > 0);
        if (components.length < 5) {
            console.log(`${file}: ${components.length} components (${components.join(', ')})`);
        }
    } else {
        // Only check if it exports a style definition
        if (content.includes('DoughStyleDefinition')) {
            console.log(`${file}: MISSING recommendedFlavorComponents`);
        }
    }
});
