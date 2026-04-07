#!/usr/bin/env node

/**
 * 🎨 DoughLabPro Style Generator
 * 
 * Interactive CLI tool to generate new style definition files
 * with proper i18n structure and complete schema coverage.
 * 
 * Usage:
 *   node scripts/generate-style.js
 *   npm run generate:style
 */

import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Utility to ask questions
const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Color codes for terminal
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m'
};

const log = {
    title: (msg) => console.log(`\n${colors.bright}${colors.cyan}${msg}${colors.reset}\n`),
    success: (msg) => console.log(`${colors.green}✓ ${msg}${colors.reset}`),
    info: (msg) => console.log(`${colors.blue}ℹ ${msg}${colors.reset}`),
    warning: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
    section: (msg) => console.log(`\n${colors.magenta}${msg}${colors.reset}`)
};

// Categories available
const CATEGORIES = [
    'Pizza',
    'Bread',
    'Enriched',
    'Buns',
    'Pastry',
    'Cookies',
    'Flatbreads',
    'Other'
];

const DIFFICULTIES = ['Easy', 'Medium', 'Hard', 'Advanced', 'Expert'];

const SOURCES = ['official', 'user_manual', 'user_ai'];

/**
 * Generate TypeScript style definition file
 */
function generateStyleFile(data) {
    const { id, category } = data;

    return `import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const ${id}: StyleDefinition = {
  "id": "${id}",
  "title": t('styles.${id}'),
  "subtitle": t('styles.${id}_subtitle'),
  "category": "${category}",
  "family": t('styles.${id}_family'),
  "variantName": t('styles.${id}_variant'),
  "origin": {
    "country": t('styles.${id}_origin_country'),
    "region": t('styles.${id}_origin_region'),
    "period": t('styles.${id}_origin_period')
  },
  "intro": t('styles.${id}_intro'),
  "history": t('styles.${id}_history'),
  
  "culturalContext": {
    "significance": [
      t('styles.${id}_sig_1'),
      t('styles.${id}_sig_2'),
      t('styles.${id}_sig_3'),
      t('styles.${id}_sig_4'),
      t('styles.${id}_sig_5')
    ],
    "consumptionContext": [
      t('styles.${id}_consum_1'),
      t('styles.${id}_consum_2'),
      t('styles.${id}_consum_3'),
      t('styles.${id}_consum_4'),
      t('styles.${id}_consum_5')
    ],
    "evolution": [
      t('styles.${id}_evo_1'),
      t('styles.${id}_evo_2'),
      t('styles.${id}_evo_3'),
      t('styles.${id}_evo_4'),
      t('styles.${id}_evo_5')
    ],
    "rituals": [
      t('styles.${id}_rituals_1'),
      t('styles.${id}_rituals_2'),
      t('styles.${id}_rituals_3')
    ]
  },
  
  "flavorProfile": {
    "primaryFlavors": [
      t('styles.${id}_flavor_1'),
      t('styles.${id}_flavor_2'),
      t('styles.${id}_flavor_3'),
      t('styles.${id}_flavor_4'),
      t('styles.${id}_flavor_5')
    ],
    "aromaProfile": [
      t('styles.${id}_aroma_1'),
      t('styles.${id}_aroma_2'),
      t('styles.${id}_aroma_3'),
      t('styles.${id}_aroma_4'),
      t('styles.${id}_aroma_5')
    ],
    "textureNotes": [
      t('styles.${id}_texture_1'),
      t('styles.${id}_texture_2'),
      t('styles.${id}_texture_3'),
      t('styles.${id}_texture_4'),
      t('styles.${id}_texture_5')
    ],
    "pairingRecommendations": [
      t('styles.${id}_pair_1'),
      t('styles.${id}_pair_2'),
      t('styles.${id}_pair_3'),
      t('styles.${id}_pair_4'),
      t('styles.${id}_pair_5')
    ],
    "flavorEvolution": [
      t('styles.${id}_fe_1'),
      t('styles.${id}_fe_2'),
      t('styles.${id}_fe_3')
    ]
  },
  
  "technicalFoundations": [
    t('styles.${id}_tech_1'),
    t('styles.${id}_tech_2'),
    t('styles.${id}_tech_3')
  ],
  
  "doughImpact": [
    t('styles.${id}_di_1'),
    t('styles.${id}_di_2'),
    t('styles.${id}_di_3'),
    t('styles.${id}_di_4'),
    t('styles.${id}_di_5')
  ],
  
  "bakingImpact": [
    t('styles.${id}_bi_1'),
    t('styles.${id}_bi_2'),
    t('styles.${id}_bi_3'),
    t('styles.${id}_bi_4'),
    t('styles.${id}_bi_5')
  ],
  
  "technicalProfile": {
    "hydrationRange": [${data.hydrationMin || 60}, ${data.hydrationMax || 70}],
    "saltRange": [${data.saltMin || 2.0}, ${data.saltMax || 2.5}],
    "oilRange": [${data.oilMin || 0}, ${data.oilMax || 5}],
    "sugarRange": [${data.sugarMin || 0}, ${data.sugarMax || 5}],
    "flourStrength": t('styles.${id}_flour_strength'),
    "fermentation": {
      "bulk": t('styles.${id}_fermentation_bulk'),
      "proof": t('styles.${id}_fermentation_proof'),
      "coldRetard": t('styles.${id}_fermentation_retard')
    },
    "oven": {
      "type": "${data.ovenType || 'conventional'}",
      "temperatureC": [${data.tempMin || 200}, ${data.tempMax || 250}],
      "notes": t('styles.${id}_oven_notes')
    },
    "difficulty": t('styles.difficulty_${(data.difficulty || 'medium').toLowerCase()}'),
    "recommendedUse": [
      t('styles.${id}_use_1'),
      t('styles.${id}_use_2')
    ]
  },
  
  "regionalVariants": [
    t('styles.${id}_rv_1'),
    t('styles.${id}_rv_2'),
    t('styles.${id}_rv_3')
  ],
  
  "climateScenarios": [
    t('styles.${id}_cs_1'),
    t('styles.${id}_cs_2'),
    t('styles.${id}_cs_3')
  ],
  
  "styleComparisons": [
    t('styles.${id}_sc_1'),
    t('styles.${id}_sc_2'),
    t('styles.${id}_sc_3')
  ],
  
  "parameterSensitivity": [
    t('styles.${id}_ps_1'),
    t('styles.${id}_ps_2'),
    t('styles.${id}_ps_3')
  ],
  
  "risks": [
    t('styles.${id}_risk_1'),
    t('styles.${id}_risk_2'),
    t('styles.${id}_risk_3')
  ],
  
  "notes": [
    t('styles.${id}_note_1'),
    t('styles.${id}_note_2'),
    t('styles.${id}_note_3')
  ],
  
  "tags": [
    t('styles.${id}_tag_1'),
    t('styles.${id}_tag_2'),
    t('styles.${id}_tag_3'),
    "${category.toLowerCase()}"
  ],
  
  "applyInApp": {
    "calculator": [],
    "styles": [],
    "mylab": [],
    "levain": [],
    "tools": []
  },
  
  "references": [
    {
      "title": t('styles.${id}_ref_1_title'),
      "url": "https://example.com",
      "author": t('styles.${id}_ref_1_author'),
      "year": ${new Date().getFullYear()}
    }
  ],
  
  "images": [],
  "diagrams": [],
  
  "faq": [
    {
      "question": t('styles.${id}_faq_1_q'),
      "answer": t('styles.${id}_faq_1_a')
    },
    {
      "question": t('styles.${id}_faq_2_q'),
      "answer": t('styles.${id}_faq_2_a')
    },
    {
      "question": t('styles.${id}_faq_3_q'),
      "answer": t('styles.${id}_faq_3_a')
    }
  ],
  
  "affiliateProducts": [],
  
  "isCanonical": ${data.isCanonical || true},
  "source": "${data.source || 'official'}"
};
`;
}

/**
 * Generate i18n keys template
 */
function generateI18nTemplate(data) {
    const { id, name } = data;

    return {
        // Basic Info
        [`${id}`]: name,
        [`${id}_subtitle`]: `[TODO: Add subtitle for ${name}]`,
        [`${id}_family`]: `[TODO: Add family name]`,
        [`${id}_variant`]: `[TODO: Add variant name]`,

        // Origin
        [`${id}_origin_country`]: `[TODO: Country]`,
        [`${id}_origin_region`]: `[TODO: Region]`,
        [`${id}_origin_period`]: `[TODO: Historical period]`,

        // Content
        [`${id}_intro`]: `[TODO: Brief introduction to ${name}]`,
        [`${id}_history`]: `[TODO: Historical context and background]`,

        // Cultural Context (5 items each)
        [`${id}_sig_1`]: `[TODO: Cultural significance 1]`,
        [`${id}_sig_2`]: `[TODO: Cultural significance 2]`,
        [`${id}_sig_3`]: `[TODO: Cultural significance 3]`,
        [`${id}_sig_4`]: `[TODO: Cultural significance 4]`,
        [`${id}_sig_5`]: `[TODO: Cultural significance 5]`,

        [`${id}_consum_1`]: `[TODO: Consumption context 1]`,
        [`${id}_consum_2`]: `[TODO: Consumption context 2]`,
        [`${id}_consum_3`]: `[TODO: Consumption context 3]`,
        [`${id}_consum_4`]: `[TODO: Consumption context 4]`,
        [`${id}_consum_5`]: `[TODO: Consumption context 5]`,

        [`${id}_evo_1`]: `[TODO: Evolution 1]`,
        [`${id}_evo_2`]: `[TODO: Evolution 2]`,
        [`${id}_evo_3`]: `[TODO: Evolution 3]`,
        [`${id}_evo_4`]: `[TODO: Evolution 4]`,
        [`${id}_evo_5`]: `[TODO: Evolution 5]`,

        [`${id}_rituals_1`]: `[TODO: Cultural ritual 1]`,
        [`${id}_rituals_2`]: `[TODO: Cultural ritual 2]`,
        [`${id}_rituals_3`]: `[TODO: Cultural ritual 3]`,

        // Flavor Profile (5 items each)
        [`${id}_flavor_1`]: `[TODO: Primary flavor 1]`,
        [`${id}_flavor_2`]: `[TODO: Primary flavor 2]`,
        [`${id}_flavor_3`]: `[TODO: Primary flavor 3]`,
        [`${id}_flavor_4`]: `[TODO: Primary flavor 4]`,
        [`${id}_flavor_5`]: `[TODO: Primary flavor 5]`,

        [`${id}_aroma_1`]: `[TODO: Aroma profile 1]`,
        [`${id}_aroma_2`]: `[TODO: Aroma profile 2]`,
        [`${id}_aroma_3`]: `[TODO: Aroma profile 3]`,
        [`${id}_aroma_4`]: `[TODO: Aroma profile 4]`,
        [`${id}_aroma_5`]: `[TODO: Aroma profile 5]`,

        [`${id}_texture_1`]: `[TODO: Texture note 1]`,
        [`${id}_texture_2`]: `[TODO: Texture note 2]`,
        [`${id}_texture_3`]: `[TODO: Texture note 3]`,
        [`${id}_texture_4`]: `[TODO: Texture note 4]`,
        [`${id}_texture_5`]: `[TODO: Texture note 5]`,

        [`${id}_pair_1`]: `[TODO: Pairing recommendation 1]`,
        [`${id}_pair_2`]: `[TODO: Pairing recommendation 2]`,
        [`${id}_pair_3`]: `[TODO: Pairing recommendation 3]`,
        [`${id}_pair_4`]: `[TODO: Pairing recommendation 4]`,
        [`${id}_pair_5`]: `[TODO: Pairing recommendation 5]`,

        [`${id}_fe_1`]: `[TODO: Flavor evolution 1]`,
        [`${id}_fe_2`]: `[TODO: Flavor evolution 2]`,
        [`${id}_fe_3`]: `[TODO: Flavor evolution 3]`,

        // Technical
        [`${id}_tech_1`]: `[TODO: Technical foundation 1]`,
        [`${id}_tech_2`]: `[TODO: Technical foundation 2]`,
        [`${id}_tech_3`]: `[TODO: Technical foundation 3]`,

        [`${id}_di_1`]: `[TODO: Dough impact 1]`,
        [`${id}_di_2`]: `[TODO: Dough impact 2]`,
        [`${id}_di_3`]: `[TODO: Dough impact 3]`,
        [`${id}_di_4`]: `[TODO: Dough impact 4]`,
        [`${id}_di_5`]: `[TODO: Dough impact 5]`,

        [`${id}_bi_1`]: `[TODO: Baking impact 1]`,
        [`${id}_bi_2`]: `[TODO: Baking impact 2]`,
        [`${id}_bi_3`]: `[TODO: Baking impact 3]`,
        [`${id}_bi_4`]: `[TODO: Baking impact 4]`,
        [`${id}_bi_5`]: `[TODO: Baking impact 5]`,

        // Technical Profile
        [`${id}_flour_strength`]: `[TODO: Flour strength description]`,
        [`${id}_fermentation_bulk`]: `[TODO: Bulk fermentation time]`,
        [`${id}_fermentation_proof`]: `[TODO: Proof time]`,
        [`${id}_fermentation_retard`]: `[TODO: Cold retard info]`,
        [`${id}_oven_notes`]: `[TODO: Oven notes]`,

        [`${id}_use_1`]: `[TODO: Recommended use 1]`,
        [`${id}_use_2`]: `[TODO: Recommended use 2]`,

        // Variants & Scenarios
        [`${id}_rv_1`]: `[TODO: Regional variant 1]`,
        [`${id}_rv_2`]: `[TODO: Regional variant 2]`,
        [`${id}_rv_3`]: `[TODO: Regional variant 3]`,

        [`${id}_cs_1`]: `[TODO: Climate scenario 1]`,
        [`${id}_cs_2`]: `[TODO: Climate scenario 2]`,
        [`${id}_cs_3`]: `[TODO: Climate scenario 3]`,

        [`${id}_sc_1`]: `[TODO: Style comparison 1]`,
        [`${id}_sc_2`]: `[TODO: Style comparison 2]`,
        [`${id}_sc_3`]: `[TODO: Style comparison 3]`,

        [`${id}_ps_1`]: `[TODO: Parameter sensitivity 1]`,
        [`${id}_ps_2`]: `[TODO: Parameter sensitivity 2]`,
        [`${id}_ps_3`]: `[TODO: Parameter sensitivity 3]`,

        // Risks & Notes
        [`${id}_risk_1`]: `[TODO: Risk 1]`,
        [`${id}_risk_2`]: `[TODO: Risk 2]`,
        [`${id}_risk_3`]: `[TODO: Risk 3]`,

        [`${id}_note_1`]: `[TODO: Note 1]`,
        [`${id}_note_2`]: `[TODO: Note 2]`,
        [`${id}_note_3`]: `[TODO: Note 3]`,

        // Tags
        [`${id}_tag_1`]: `[TODO: Tag 1]`,
        [`${id}_tag_2`]: `[TODO: Tag 2]`,
        [`${id}_tag_3`]: `[TODO: Tag 3]`,

        // References
        [`${id}_ref_1_title`]: `[TODO: Reference title]`,
        [`${id}_ref_1_author`]: `[TODO: Author name]`,

        // FAQ
        [`${id}_faq_1_q`]: `[TODO: FAQ question 1]`,
        [`${id}_faq_1_a`]: `[TODO: FAQ answer 1]`,
        [`${id}_faq_2_q`]: `[TODO: FAQ question 2]`,
        [`${id}_faq_2_a`]: `[TODO: FAQ answer 2]`,
        [`${id}_faq_3_q`]: `[TODO: FAQ question 3]`,
        [`${id}_faq_3_a`]: `[TODO: FAQ answer 3]`
    };
}

/**
 * Main interactive flow
 */
async function main() {
    log.title('🎨 DoughLabPro Style Generator');
    log.info('This tool will help you create a new style definition with proper structure.');

    const data = {};

    // Basic Information
    log.section('📋 Basic Information');
    data.name = await question('Style name (e.g., "Neapolitan Pizza"): ');
    data.id = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    log.info(`Generated ID: ${data.id}`);

    // Category
    log.section('📂 Category');
    CATEGORIES.forEach((cat, i) => console.log(`  ${i + 1}. ${cat}`));
    const catIndex = parseInt(await question('Select category (1-8): ')) - 1;
    data.category = CATEGORIES[catIndex] || 'Other';

    // Subcategory folder
    const subcategory = data.category.toLowerCase();
    const subcategoryPath = path.join(__dirname, '..', 'src', 'data', 'styles', subcategory);

    if (!fs.existsSync(subcategoryPath)) {
        log.warning(`Directory ${subcategory} doesn't exist. Creating it...`);
        fs.mkdirSync(subcategoryPath, { recursive: true });
    }

    // Technical Parameters
    log.section('⚙️ Technical Parameters');
    data.hydrationMin = parseInt(await question('Min hydration % (e.g., 60): ') || '60');
    data.hydrationMax = parseInt(await question('Max hydration % (e.g., 70): ') || '70');
    data.saltMin = parseFloat(await question('Min salt % (e.g., 2.0): ') || '2.0');
    data.saltMax = parseFloat(await question('Max salt % (e.g., 2.5): ') || '2.5');
    data.tempMin = parseInt(await question('Min oven temp °C (e.g., 200): ') || '200');
    data.tempMax = parseInt(await question('Max oven temp °C (e.g., 250): ') || '250');

    // Difficulty
    log.section('🎯 Difficulty Level');
    DIFFICULTIES.forEach((diff, i) => console.log(`  ${i + 1}. ${diff}`));
    const diffIndex = parseInt(await question('Select difficulty (1-5): ')) - 1;
    data.difficulty = DIFFICULTIES[diffIndex] || 'Medium';

    // Source
    log.section('📚 Source');
    SOURCES.forEach((src, i) => console.log(`  ${i + 1}. ${src}`));
    const srcIndex = parseInt(await question('Select source (1-3): ')) - 1;
    data.source = SOURCES[srcIndex] || 'official';

    data.isCanonical = (await question('Is this canonical? (y/n): ')).toLowerCase() === 'y';

    // Generate files
    log.section('📝 Generating files...');

    const styleFilePath = path.join(subcategoryPath, `${data.id}.ts`);
    const styleContent = generateStyleFile(data);

    fs.writeFileSync(styleFilePath, styleContent, 'utf8');
    log.success(`Created: ${styleFilePath}`);

    // Generate i18n template
    const i18nPath = path.join(__dirname, '..', 'public', 'locales', 'en', 'styles.json');
    const i18nTemplate = generateI18nTemplate(data);

    const i18nOutputPath = path.join(__dirname, '..', `${data.id}_i18n_template.json`);
    fs.writeFileSync(i18nOutputPath, JSON.stringify(i18nTemplate, null, 2), 'utf8');
    log.success(`Created i18n template: ${i18nOutputPath}`);

    // Instructions
    log.section('✅ Next Steps');
    console.log(`
1. Open ${styleFilePath} and review the structure
2. Copy the contents of ${i18nOutputPath} into ${i18nPath}
3. Replace all [TODO] placeholders with actual content
4. Add the style to the registry in src/data/styles/registry.ts
5. Run validation: npm run validate:styles
  `);

    log.success('Style template generated successfully! 🎉');

    rl.close();
}

// Run
main().catch(console.error);
