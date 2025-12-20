#!/usr/bin/env node

/**
 * 🔄 MERGE DETAILED STYLES TO STYLES.JSON
 * 
 * Automatically merges all *_detailed_i18n.json files into the main styles.json
 * 
 * Usage:
 *   node scripts/merge-detailed-to-styles.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '..', 'public', 'locales', 'en');
const STYLES_JSON_PATH = path.join(LOCALES_DIR, 'styles.json');
const BACKUP_PATH = path.join(LOCALES_DIR, `styles.json.backup.${Date.now()}`);

// Detailed files to merge
const DETAILED_FILES = [
    'california_style_detailed_i18n.json',
    'roman_scrocchiarella_detailed_i18n.json',
    'sicilian_grandma_pan_detailed_i18n.json',
    'baguette_tradition_francaise_detailed_i18n.json',
    'ciabatta_high_hydration_detailed_i18n.json'
];

console.log('🔄 MERGE DETAILED STYLES TO STYLES.JSON\n');

// Step 1: Create backup
console.log('📦 Creating backup of styles.json...');
if (fs.existsSync(STYLES_JSON_PATH)) {
    fs.copyFileSync(STYLES_JSON_PATH, BACKUP_PATH);
    console.log(`✅ Backup created: ${path.basename(BACKUP_PATH)}\n`);
} else {
    console.log('⚠️  No existing styles.json found\n');
    process.exit(1);
}

// Step 2: Load styles.json
console.log('📖 Loading styles.json...');
let styles = {};
try {
    styles = JSON.parse(fs.readFileSync(STYLES_JSON_PATH, 'utf8'));
    console.log(`✅ Loaded ${Object.keys(styles).length} existing keys\n`);
} catch (error) {
    console.log(`❌ Error loading styles.json: ${error.message}\n`);
    process.exit(1);
}

// Step 3: Merge detailed files
console.log('🔀 Merging detailed files...\n');
let totalMerged = 0;
let totalKeys = 0;

for (const filename of DETAILED_FILES) {
    const filePath = path.join(LOCALES_DIR, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`  ⚠️  File not found: ${filename}`);
        continue;
    }

    try {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        const keyCount = Object.keys(content).length;

        // Merge into styles
        Object.assign(styles, content);

        totalMerged++;
        totalKeys += keyCount;

        console.log(`  ✅ ${filename}`);
        console.log(`     → ${keyCount} keys merged`);
    } catch (error) {
        console.log(`  ❌ Error reading ${filename}: ${error.message}`);
    }
}

console.log(`\n✅ Merged ${totalMerged} files with ${totalKeys} total keys\n`);

// Step 4: Sort keys alphabetically
console.log('🔤 Sorting keys alphabetically...');
const sortedStyles = {};
Object.keys(styles).sort().forEach(key => {
    sortedStyles[key] = styles[key];
});
console.log('✅ Keys sorted\n');

// Step 5: Write back to styles.json
console.log('💾 Writing updated styles.json...');
try {
    fs.writeFileSync(STYLES_JSON_PATH, JSON.stringify(sortedStyles, null, 2), 'utf8');
    console.log('✅ File written successfully\n');
} catch (error) {
    console.log(`❌ Error writing file: ${error.message}\n`);
    process.exit(1);
}

// Step 6: Summary
console.log('🎉 MERGE COMPLETE!\n');
console.log('📊 Summary:');
console.log(`  • Files merged: ${totalMerged}`);
console.log(`  • Keys added/updated: ${totalKeys}`);
console.log(`  • Total keys in styles.json: ${Object.keys(sortedStyles).length}`);
console.log(`  • Backup saved: ${path.basename(BACKUP_PATH)}`);

console.log('\n✅ Next steps:');
console.log('  1. Validate: npm run validate:styles');
console.log('  2. Test in app: npm run dev');
console.log('  3. Check that detailed styles render correctly');
