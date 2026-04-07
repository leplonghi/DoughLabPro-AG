#!/usr/bin/env node

/**
 * 🔧 COMPLETE STYLE FILES UPDATER
 * 
 * Updates ALL style .ts files to include missing fields:
 * - defaults (hydration, salt, oil, sugar)
 * - recommendedFlavorComponents
 * - applyInApp
 * - images, diagrams
 * - isCanonical, source
 * - affiliateProducts
 * 
 * Usage:
 *   node scripts/complete-style-files.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STYLES_DIR = path.join(__dirname, '..', 'src', 'data', 'styles');

// Default values by category
const DEFAULTS_BY_CATEGORY = {
    pizza: {
        hydration: 65,
        salt: 2.5,
        oil: 2,
        sugar: 1
    },
    bread: {
        hydration: 70,
        salt: 2,
        oil: 0,
        sugar: 0
    },
    pastry: {
        hydration: 60,
        salt: 1.5,
        oil: 5,
        sugar: 10
    }
};

// Recommended flavor components by category
const FLAVOR_COMPONENTS_BY_CATEGORY = {
    pizza: ['tomato_sauce', 'mozzarella', 'olive_oil', 'basil', 'oregano'],
    bread: ['butter', 'olive_oil', 'seeds', 'herbs'],
    pastry: ['butter', 'sugar', 'vanilla', 'cinnamon', 'chocolate']
};

/**
 * Get all .ts files in styles directory
 */
function getAllStyleFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Skip library folder
            if (file !== 'library') {
                getAllStyleFiles(filePath, fileList);
            }
        } else if (file.endsWith('.ts') && !['builder.ts', 'index.ts', 'registry.ts'].includes(file)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

/**
 * Determine category from file path
 */
function getCategoryFromPath(filePath) {
    if (filePath.includes('\\pizza\\') || filePath.includes('/pizza/')) return 'pizza';
    if (filePath.includes('\\bread\\') || filePath.includes('/bread/')) return 'bread';
    if (filePath.includes('\\pastry\\') || filePath.includes('/pastry/')) return 'pastry';
    return 'bread'; // default
}

/**
 * Extract style ID from file content
 */
function extractStyleId(content) {
    const match = content.match(/"id":\s*"([^"]+)"/);
    return match ? match[1] : null;
}

/**
 * Check if field exists in content
 */
function hasField(content, fieldName) {
    return content.includes(`"${fieldName}":`);
}

/**
 * Add missing fields to style file
 */
function addMissingFields(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const category = getCategoryFromPath(filePath);
    const styleId = extractStyleId(content);

    if (!styleId) {
        console.log(`  ⚠️  Could not extract style ID from ${path.basename(filePath)}`);
        return false;
    }

    let modified = false;

    // Find the closing brace of the StyleDefinition object
    const lastBraceIndex = content.lastIndexOf('};');
    if (lastBraceIndex === -1) {
        console.log(`  ⚠️  Could not find closing brace in ${path.basename(filePath)}`);
        return false;
    }

    // Build missing fields
    const missingFields = [];

    // 1. defaults
    if (!hasField(content, 'defaults')) {
        const defaults = DEFAULTS_BY_CATEGORY[category];
        missingFields.push(`  "defaults": {
    "hydration": ${defaults.hydration},
    "salt": ${defaults.salt},
    "oil": ${defaults.oil},
    "sugar": ${defaults.sugar}
  }`);
    }

    // 2. recommendedFlavorComponents
    if (!hasField(content, 'recommendedFlavorComponents')) {
        const components = FLAVOR_COMPONENTS_BY_CATEGORY[category];
        missingFields.push(`  "recommendedFlavorComponents": ${JSON.stringify(components)}`);
    }

    // 3. applyInApp
    if (!hasField(content, 'applyInApp')) {
        missingFields.push(`  "applyInApp": {
    "calculator": [],
    "styles": [],
    "mylab": [],
    "levain": [],
    "tools": []
  }`);
    }

    // 4. images
    if (!hasField(content, 'images')) {
        missingFields.push(`  "images": []`);
    }

    // 5. diagrams
    if (!hasField(content, 'diagrams')) {
        missingFields.push(`  "diagrams": []`);
    }

    // 6. affiliateProducts
    if (!hasField(content, 'affiliateProducts')) {
        missingFields.push(`  "affiliateProducts": []`);
    }

    // 7. isCanonical
    if (!hasField(content, 'isCanonical')) {
        missingFields.push(`  "isCanonical": true`);
    }

    // 8. source
    if (!hasField(content, 'source')) {
        missingFields.push(`  "source": "official"`);
    }

    if (missingFields.length > 0) {
        // Insert missing fields before the closing brace
        const fieldsToAdd = ',\r\n' + missingFields.join(',\r\n') + '\r\n';
        content = content.slice(0, lastBraceIndex) + fieldsToAdd + content.slice(lastBraceIndex);

        fs.writeFileSync(filePath, content, 'utf8');
        modified = true;
    }

    return modified;
}

// Main execution
console.log('🔧 COMPLETE STYLE FILES UPDATER\n');

const styleFiles = getAllStyleFiles(STYLES_DIR);
console.log(`Found ${styleFiles.length} style files\n`);

let updatedCount = 0;
let skippedCount = 0;

for (const filePath of styleFiles) {
    const fileName = path.basename(filePath);
    const category = getCategoryFromPath(filePath);

    try {
        const wasModified = addMissingFields(filePath);

        if (wasModified) {
            console.log(`  ✅ Updated: ${fileName} (${category})`);
            updatedCount++;
        } else {
            console.log(`  ⏭️  Skipped: ${fileName} (already complete)`);
            skippedCount++;
        }
    } catch (error) {
        console.log(`  ❌ Error: ${fileName} - ${error.message}`);
    }
}

console.log(`\n🎉 COMPLETE!`);
console.log(`  • Files updated: ${updatedCount}`);
console.log(`  • Files skipped: ${skippedCount}`);
console.log(`  • Total processed: ${styleFiles.length}`);
console.log(`\n✅ Next steps:`);
console.log(`  1. Review updated files`);
console.log(`  2. Run: npm run validate:styles`);
console.log(`  3. Test in app: npm run dev`);
