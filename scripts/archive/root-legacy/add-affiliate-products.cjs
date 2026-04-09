const fs = require('fs');
const path = require('path');

const stylesDir = './src/data/styles';
const categories = ['bread', 'pizza', 'pastry'];

let filesUpdated = 0;
let filesSkipped = 0;

function addAffiliateProducts(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Check if affiliateProducts already exists
    if (content.includes('affiliateProducts')) {
        console.log(`⏭️  Skipped (already has affiliateProducts): ${path.basename(filePath)}`);
        filesSkipped++;
        return false;
    }

    // Find the position to insert affiliateProducts
    // We'll add it after the 'faq' field and before 'isCanonical'
    const faqEndPattern = /(\],\s*\n\s*"faq":\s*\[[\s\S]*?\]\s*,)/;
    const isCanonicalPattern = /(\s*"isCanonical":)/;

    let newContent = content;

    // Try to insert after faq
    if (faqEndPattern.test(content) && isCanonicalPattern.test(content)) {
        newContent = content.replace(
            isCanonicalPattern,
            '  "affiliateProducts": [],\n$1'
        );
    } else {
        // Fallback: insert before isCanonical
        newContent = content.replace(
            /(\s*"isCanonical":)/,
            '  "affiliateProducts": [],\n$1'
        );
    }

    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`✅ Updated: ${path.basename(filePath)}`);
        filesUpdated++;
        return true;
    } else {
        console.log(`⚠️  Could not update: ${path.basename(filePath)}`);
        return false;
    }
}

console.log('🚀 Adding affiliateProducts field to all style files...\n');

categories.forEach(category => {
    const categoryDir = path.join(stylesDir, category);
    if (fs.existsSync(categoryDir)) {
        console.log(`\n📁 Processing ${category}/`);
        const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.ts'));

        files.forEach(file => {
            const filePath = path.join(categoryDir, file);
            addAffiliateProducts(filePath);
        });
    }
});

console.log(`\n\n📊 Summary:`);
console.log(`   ✅ Files updated: ${filesUpdated}`);
console.log(`   ⏭️  Files skipped: ${filesSkipped}`);
console.log(`\n✨ Done! All style files now have the affiliateProducts field.`);
