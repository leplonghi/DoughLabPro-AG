/**
 * AUTOMATED STYLE CONTENT GENERATOR
 * 
 * Converts researched i18n JSON files to complete DoughStyleDefinition .ts files
 * 
 * Usage: node scripts/generate-complete-styles.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '..', 'public', 'locales', 'en');
const STYLES_DIR = path.join(__dirname, '..', 'src', 'data', 'styles', 'pizza');

// Styles with complete research ready
const STYLES_TO_GENERATE = [
    {
        id: 'new_york_style',
        file: 'new_york_style_i18n.json',
        outputFile: 'new_york_style.ts',
        recipeStyle: 'RecipeStyle.NEW_YORK',
        category: 'pizza',
        difficulty: 'Medium',
        fermentationType: 'cold'
    },
    {
        id: 'chicago_deep_dish',
        file: 'chicago_deep_dish_i18n.json',
        outputFile: 'chicago_deep_dish.ts',
        recipeStyle: 'RecipeStyle.CHICAGO_DEEP_DISH',
        category: 'pizza',
        difficulty: 'Medium',
        fermentationType: 'direct'
    },
    {
        id: 'detroit_style',
        file: 'detroit_style_i18n.json',
        outputFile: 'detroit_style_classic.ts',
        recipeStyle: 'RecipeStyle.DETROIT',
        category: 'pizza',
        difficulty: 'Medium',
        fermentationType: 'direct'
    }
];

console.log('🚀 AUTOMATED STYLE CONTENT GENERATOR\n');

for (const style of STYLES_TO_GENERATE) {
    console.log(`📝 Processing: ${style.id}...`);

    const jsonPath = path.join(LOCALES_DIR, style.file);

    if (!fs.existsSync(jsonPath)) {
        console.log(`   ⚠️  File not found: ${style.file}`);
        continue;
    }

    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    // Extract key information
    const name = data[`${style.id}`] || style.id;
    const subtitle = data[`${style.id}_subtitle`] || '';
    const intro = data[`${style.id}_intro`] || '';
    const history = data[`${style.id}_history`] || '';

    // Build the .ts file content
    const tsContent = `import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * ${name.toUpperCase()}
 * 
 * Generated from researched content
 */
export const ${style.id}: DoughStyleDefinition = {
  id: "${style.id}",
  name: "${name}",
  category: "${style.category}",
  recipeStyle: ${style.recipeStyle},
  
  origin: {
    country: "${data[`${style.id}_origin_country`] || 'Unknown'}",
    region: "${data[`${style.id}_origin_region`] || 'Unknown'}",
    period: "${data[`${style.id}_origin_period`] || 'Unknown'}"
  },
  
  description: "${intro}",
  history: "${history}",
  
  difficulty: "${style.difficulty}",
  fermentationType: "${style.fermentationType}",
  
  // TODO: Add complete base_formula, technicalProfile, scientificProfile, education, deepDive
  
  base_formula: [],
  
  technicalProfile: {
    hydration: [60, 70],
    salt: [2, 2.5],
    oil: [0, 5],
    sugar: [0, 2],
    flourStrength: "Standard",
    ovenTemp: [200, 250],
    recommendedUse: [],
    difficulty: "${style.difficulty}",
    fermentationSteps: []
  },
  
  tags: [],
  watchouts: [],
  notes: [],
  references: [],
  
  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),
  
  images: {
    hero: "/images/styles/${style.id}-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  }
};
`;

    const outputPath = path.join(STYLES_DIR, style.outputFile);
    fs.writeFileSync(outputPath, tsContent, 'utf8');

    console.log(`   ✅ Generated: ${style.outputFile}`);
}

console.log('\n🎉 Generation complete!');
console.log('⚠️  NOTE: Files generated with basic structure.');
console.log('   Manual completion needed for full content.');
