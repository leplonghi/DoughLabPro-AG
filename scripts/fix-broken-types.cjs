const fs = require('fs');
const path = require('path');

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            fixFile(filePath);
        }
    });
}

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix Promise<T> corrupted by translation script
    // Pattern 1: { t('ui:mylab.promise_2') }<void> -> Promise<void>
    // The regex matches { t('...') } potentially with spaces
    // And replaces it with 'Promise'
    content = content.replace(/\{\s*t\(['"]ui:mylab\.promise(?:_2)?['"]\)\s*\}\s*/g, 'Promise');

    // Pattern 2: t('ui:mylab.promise') -> Promise (without brackets, e.g. in .ts files)
    content = content.replace(/t\(['"]ui:mylab\.promise(?:_2)?['"]\)/g, 'Promise');

    // Also checks for common types that might have been translated
    // Error -> t('common.error') ?
    // Map -> t('common.map') ?
    // Set -> t('common.set') ?

    // Fix imports that might be broken?
    // import { t('...') } from ... ?

    if (content !== original) {
        console.log('Fixed:', filePath);
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

walk(path.resolve(__dirname, '../src'));
console.log('Finished fixing types.');
