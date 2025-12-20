#!/usr/bin/env node

/**
 * 🔄 MERGE ALL STYLE I18N FILES
 * 
 * Merges all generated i18n files into the main styles.json,
 * replacing manual files with generated ones and adding all new styles.
 * 
 * Usage:
 *   node scripts/merge-all-styles-i18n.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const GENERATED_DIR = path.join(__dirname, '..', 'public', 'locales', 'en', 'generated');
const MANUAL_DIR = path.join(__dirname, '..', 'public', 'locales', 'en');
const STYLES_JSON_PATH = path.join(__dirname, '..', 'public', 'locales', 'en', 'styles.json');
const BACKUP_PATH = path.join(__dirname, '..', 'public', 'locales', 'en', `styles.json.backup.${Date.now()}`);

// Manual files to prioritize (our detailed research)
const MANUAL_FILES = [
    'neapolitan_avpn_classic_i18n.json',
    'new_york_style_i18n.json',
    'chicago_deep_dish_i18n.json',
    'detroit_style_i18n.json'
];

console.log('🔄 MERGE ALL STYLE I18N FILES\n');

// Step 1: Create backup
console.log('📦 Creating backup of current styles.json...');
if (fs.existsSync(STYLES_JSON_PATH)) {
    fs.copyFileSync(STYLES_JSON_PATH, BACKUP_PATH);
    console.log(`✅ Backup created: ${path.basename(BACKUP_PATH)}\n`);
} else {
    console.log('⚠️  No existing styles.json found, will create new one\n');
}

// Step 2: Load existing styles.json or create empty object
let stylesData = {};
if (fs.existsSync(STYLES_JSON_PATH)) {
    try {
        stylesData = JSON.parse(fs.readFileSync(STYLES_JSON_PATH, 'utf8'));
        console.log(`📖 Loaded existing styles.json (${Object.keys(stylesData).length} keys)\n`);
    } catch (error) {
        console.log('⚠️  Error reading styles.json, starting fresh\n');
        stylesData = {};
    }
}

// Step 3: Merge manual files first (priority)
console.log('🎯 Merging manual research files (high priority)...');
let manualCount = 0;
for (const filename of MANUAL_FILES) {
    const filePath = path.join(MANUAL_DIR, filename);
    if (fs.existsSync(filePath)) {
        try {
            const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            Object.assign(stylesData, content);
            manualCount++;
            console.log(`  ✅ ${filename} (${Object.keys(content).length} keys)`);
        } catch (error) {
            console.log(`  ❌ Error reading ${filename}: ${error.message}`);
        }
    }
}
console.log(`✅ Merged ${manualCount} manual files\n`);

// Step 4: Merge all generated files
console.log('🤖 Merging generated files...');
const generatedFiles = fs.readdirSync(GENERATED_DIR).filter(f => f.endsWith('_i18n.json'));
let generatedCount = 0;
let skippedCount = 0;

for (const filename of generatedFiles) {
    // Skip if we have a manual version
    if (MANUAL_FILES.includes(filename)) {
        console.log(`  ⏭️  Skipped ${filename} (manual version exists)`);
        skippedCount++;
        continue;
    }

    const filePath = path.join(GENERATED_DIR, filename);
    try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        Object.assign(stylesData, content);
        generatedCount++;
        console.log(`  ✅ ${filename} (${Object.keys(content).length} keys)`);
    } catch (error) {
        console.log(`  ❌ Error reading ${filename}: ${error.message}`);
    }
}
console.log(`✅ Merged ${generatedCount} generated files (${skippedCount} skipped)\n`);

// Step 5: Sort keys alphabetically for better organization
console.log('🔤 Sorting keys alphabetically...');
const sortedData = {};
Object.keys(stylesData).sort().forEach(key => {
    sortedData[key] = stylesData[key];
});

// Step 6: Write merged data to styles.json
console.log('💾 Writing merged data to styles.json...');
fs.writeFileSync(STYLES_JSON_PATH, JSON.stringify(sortedData, null, 2), 'utf8');

// Step 7: Summary
console.log('\n🎉 MERGE COMPLETE!\n');
console.log('📊 Summary:');
console.log(`  • Manual files merged: ${manualCount}`);
console.log(`  • Generated files merged: ${generatedCount}`);
console.log(`  • Files skipped: ${skippedCount}`);
console.log(`  • Total keys in styles.json: ${Object.keys(sortedData).length}`);
console.log(`  • Backup saved: ${path.basename(BACKUP_PATH)}`);

console.log('\n✅ Next steps:');
console.log('  1. Review the merged styles.json');
console.log('  2. Run validation: npm run validate:styles');
console.log('  3. Test in app: npm run dev');
console.log('  4. Enhance high-priority styles with detailed research');
