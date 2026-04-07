#!/usr/bin/env node

/**
 * 🎯 APPLY COMPLETE CALIFORNIA STYLE
 * 
 * Applies the 100% complete California Style i18n to styles.json
 * 
 * Usage:
 *   node scripts/apply-california-complete.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '..', 'public', 'locales', 'en');
const STYLES_JSON_PATH = path.join(LOCALES_DIR, 'styles.json');
const COMPLETE_FILE = path.join(LOCALES_DIR, 'california_style_COMPLETE_i18n.json');
const BACKUP_PATH = path.join(LOCALES_DIR, `styles.json.backup.${Date.now()}`);

console.log('🎯 APPLY COMPLETE CALIFORNIA STYLE\n');

// Step 1: Create backup
console.log('📦 Creating backup...');
fs.copyFileSync(STYLES_JSON_PATH, BACKUP_PATH);
console.log(`✅ Backup: ${path.basename(BACKUP_PATH)}\n`);

// Step 2: Load styles.json
console.log('📖 Loading styles.json...');
let styles = JSON.parse(fs.readFileSync(STYLES_JSON_PATH, 'utf8'));
const beforeCount = Object.keys(styles).length;
console.log(`✅ Loaded ${beforeCount} keys\n`);

// Step 3: Load complete California file
console.log('📥 Loading complete California Style...');
const californiaComplete = JSON.parse(fs.readFileSync(COMPLETE_FILE, 'utf8'));
const californiaKeys = Object.keys(californiaComplete).length;
console.log(`✅ Loaded ${californiaKeys} California keys\n`);

// Step 4: Merge
console.log('🔀 Merging...');
Object.assign(styles, californiaComplete);
console.log('✅ Merged\n');

// Step 5: Sort and save
console.log('💾 Saving...');
const sortedStyles = {};
Object.keys(styles).sort().forEach(key => {
    sortedStyles[key] = styles[key];
});
fs.writeFileSync(STYLES_JSON_PATH, JSON.stringify(sortedStyles, null, 2), 'utf8');
console.log('✅ Saved\n');

// Step 6: Summary
console.log('🎉 COMPLETE!\n');
console.log('📊 Summary:');
console.log(`  • California keys: ${californiaKeys}`);
console.log(`  • Total keys: ${Object.keys(sortedStyles).length}`);
console.log(`  • Backup: ${path.basename(BACKUP_PATH)}`);

console.log('\n✅ California Style is now 100% complete!');
console.log('   Test in app to see all fields populated.');
