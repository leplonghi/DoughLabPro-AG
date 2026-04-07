const fs = require('fs');
const path = require('path');

const stylesDir = './src/data/styles';
const categories = ['bread', 'pizza', 'pastry'];

let filesFixed = 0;

function fixFormatting(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Fix the formatting issue where affiliateProducts is on the same line as faq closing
    const badPattern = /(\],)\s*"affiliateProducts":\s*\[\],/g;
    const goodReplacement = '$1\n  "affiliateProducts": [],';

    if (badPattern.test(content)) {
        content = content.replace(badPattern, goodReplacement);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ Fixed formatting: ${path.basename(filePath)}`);
        filesFixed++;
        return true;
    }

    return false;
}

console.log('🔧 Fixing formatting for affiliateProducts field...\n');

categories.forEach(category => {
    const categoryDir = path.join(stylesDir, category);
    if (fs.existsSync(categoryDir)) {
        const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.ts'));
        files.forEach(file => {
            fixFormatting(path.join(categoryDir, file));
        });
    }
});

console.log(`\n✨ Fixed ${filesFixed} files`);
