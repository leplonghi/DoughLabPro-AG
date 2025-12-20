const fs = require('fs');

console.log('🔄 Merging new translations into styles.json...\n');

// Load existing translations
const stylesJsonPath = './public/locales/en/styles.json';
const existingTranslations = JSON.parse(fs.readFileSync(stylesJsonPath, 'utf-8'));

// Load new translations
const newTranslationsPath = './i18n-new-translations.json';
const newTranslations = JSON.parse(fs.readFileSync(newTranslationsPath, 'utf-8'));

// Merge
let addedCount = 0;
let skippedCount = 0;

Object.entries(newTranslations).forEach(([key, value]) => {
    if (existingTranslations[key]) {
        console.log(`⏭️  Skipped (already exists): ${key}`);
        skippedCount++;
    } else {
        existingTranslations[key] = value;
        addedCount++;
    }
});

// Sort keys alphabetically
const sortedTranslations = Object.keys(existingTranslations)
    .sort()
    .reduce((obj, key) => {
        obj[key] = existingTranslations[key];
        return obj;
    }, {});

// Write back
fs.writeFileSync(stylesJsonPath, JSON.stringify(sortedTranslations, null, 2), 'utf-8');

console.log(`\n📊 Merge Summary:`);
console.log(`   ✅ New keys added: ${addedCount}`);
console.log(`   ⏭️  Keys skipped (duplicates): ${skippedCount}`);
console.log(`   📝 Total keys in styles.json: ${Object.keys(sortedTranslations).length}`);
console.log(`\n✨ Merge complete! Updated: ${stylesJsonPath}`);
