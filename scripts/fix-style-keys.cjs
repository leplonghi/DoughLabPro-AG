const fs = require('fs');
const path = require('path');

const regionsDir = path.join(__dirname, '../src/data/styles/regions');

// Get all .ts files in the regions directory
const files = fs.readdirSync(regionsDir).filter(f => f.endsWith('.ts'));

console.log(`Found ${files.length} style files to process\n`);

let totalFixed = 0;

files.forEach(file => {
    const filePath = path.join(regionsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let fixCount = 0;

    // Fix name field: name: 'key' -> name: 'styles.key'
    // Match: name: 'some_key_name',
    // But NOT: name: 'styles.something'
    const nameRegex = /(\s+name:\s+['"])(?!styles\.)([a-z_]+_name)(['"],?)/g;
    const nameMatches = content.match(nameRegex);
    if (nameMatches) {
        content = content.replace(nameRegex, '$1styles.$2$3');
        fixCount += nameMatches.length;
    }

    // Fix description field: description: "key" -> description: "styles.key"
    const descRegex = /(\s+description:\s+["'])(?!styles\.)([a-z_]+_desc)(["'],?)/g;
    const descMatches = content.match(descRegex);
    if (descMatches) {
        content = content.replace(descRegex, '$1styles.$2$3');
        fixCount += descMatches.length;
    }

    // Fix history field: history: "key" -> history: "styles.key"
    const historyRegex = /(\s+history:\s+["'])(?!styles\.)([a-z_]+_history)(["'],?)/g;
    const historyMatches = content.match(historyRegex);
    if (historyMatches) {
        content = content.replace(historyRegex, '$1styles.$2$3');
        fixCount += historyMatches.length;
    }

    if (fixCount > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ ${file}: Fixed ${fixCount} translation keys`);
        totalFixed += fixCount;
    } else {
        console.log(`  ${file}: No issues found`);
    }
});

console.log(`\n✅ Total fixes applied: ${totalFixed}`);
