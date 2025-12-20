const fs = require('fs');
const path = require('path');

// Files that need i18n migration
const filesToMigrate = [
    'bread/injera_flatbread.ts',
    'bread/mixed_grain_sourdough.ts',
    'bread/naan_flatbread.ts',
    'bread/pain_de_campagne.ts',
    'bread/pain_de_mie_pullman.ts',
    'bread/pane_pugliese.ts',
    'bread/pao_de_leite_brazil.ts',
    'bread/pao_frances_brazil.ts',
    'bread/pao_sovado_brazil.ts',
    'bread/pita_bread_flatbread.ts',
    'bread/pretzel_dough_classic.ts',
    'bread/seventy_percent_rye_sour.ts',
    'bread/tartine_country_loaf.ts',
    'bread/vollkornbrot_100_rye.ts',
    'bread/wheat_tortilla.ts',
    'bread/whole_wheat_100.ts',
    'pastry/berliner_bomboloni.ts',
    'pastry/yeasted_donuts.ts'
];

const stylesDir = './src/data/styles';
const i18nKeysGenerated = {};

function generateKey(text, prefix) {
    // Create a safe key from text
    const key = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '_')
        .substring(0, 50);

    return `${prefix}_${key}`;
}

function extractHardcodedStrings(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.ts');
    const category = path.dirname(filePath).split(path.sep).pop();

    console.log(`\n📄 Processing: ${category}/${fileName}`);

    const hardcodedStrings = [];

    // Match strings that are NOT using t() function
    // Pattern: "text" or 'text' but not t('text') or t("text")
    const stringPattern = /:\s*["']([^"']+)["']/g;
    const tFunctionPattern = /t\(['"]([^'"]+)['"]\)/g;

    // Get all t() calls to avoid duplicating them
    const existingKeys = new Set();
    let match;
    while ((match = tFunctionPattern.exec(content)) !== null) {
        existingKeys.add(match[1]);
    }

    // Find hardcoded strings
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        // Skip import lines, comments, and lines that already use t()
        if (line.includes('import') || line.trim().startsWith('//') || line.includes('t(')) {
            return;
        }

        // Match quoted strings
        const matches = line.matchAll(/["']([^"']{10,})["']/g);
        for (const match of matches) {
            const text = match[1];
            // Skip URLs, short strings, and already processed
            if (!text.includes('http') && text.length > 10 && !text.includes('\\')) {
                hardcodedStrings.push({
                    line: index + 1,
                    text: text,
                    original: match[0]
                });
            }
        }
    });

    console.log(`   Found ${hardcodedStrings.length} hardcoded strings`);

    // Generate i18n keys
    hardcodedStrings.forEach((item, idx) => {
        const keyPrefix = `${fileName}`;
        const key = generateKey(item.text, keyPrefix);

        if (!i18nKeysGenerated[key]) {
            i18nKeysGenerated[key] = item.text;
        }
    });

    return hardcodedStrings;
}

console.log('🚀 Starting i18n migration analysis...\n');

let totalStrings = 0;

filesToMigrate.forEach(file => {
    const fullPath = path.join(stylesDir, file);
    if (fs.existsSync(fullPath)) {
        const strings = extractHardcodedStrings(fullPath);
        totalStrings += strings.length;
    } else {
        console.log(`⚠️  File not found: ${file}`);
    }
});

console.log(`\n\n📊 Summary:`);
console.log(`   Total files to migrate: ${filesToMigrate.length}`);
console.log(`   Total hardcoded strings found: ${totalStrings}`);
console.log(`   Unique i18n keys to create: ${Object.keys(i18nKeysGenerated).length}`);

// Save the generated keys to a JSON file
const outputPath = './i18n-keys-to-add.json';
fs.writeFileSync(outputPath, JSON.stringify(i18nKeysGenerated, null, 2));

console.log(`\n✅ Generated i18n keys saved to: ${outputPath}`);
console.log(`\n💡 Next steps:`);
console.log(`   1. Review the generated keys in ${outputPath}`);
console.log(`   2. Add them to public/locales/en/styles.json`);
console.log(`   3. Run the replacement script to update the .ts files`);
