#!/usr/bin/env node

/**
 * 🤖 AI-Powered Style Content Filler
 * 
 * This script uses AI to help fill in the [TODO] placeholders
 * in style i18n files with contextually appropriate content.
 * 
 * Usage:
 *   node scripts/fill-style-content.js <style_id>
 *   npm run fill:style -- neapolitan_classic
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Color codes
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    cyan: '\x1b[36m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    blue: '\x1b[34m'
};

const log = {
    title: (msg) => console.log(`\n${colors.bright}${colors.cyan}${msg}${colors.reset}\n`),
    success: (msg) => console.log(`${colors.green}✓ ${msg}${colors.reset}`),
    error: (msg) => console.log(`${colors.red}✗ ${msg}${colors.reset}`),
    info: (msg) => console.log(`${colors.blue}ℹ ${msg}${colors.reset}`),
    warning: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`)
};

/**
 * Content templates for different sections
 */
const CONTENT_TEMPLATES = {
    culturalContext: {
        significance: [
            "Represents traditional {region} baking heritage",
            "Symbol of {cultural_value} in {country}",
            "Protected by {certification} standards",
            "Integral part of {occasion} celebrations",
            "Showcases {technique} mastery"
        ],
        consumptionContext: [
            "Traditionally served during {occasion}",
            "Popular in {setting} settings",
            "Often paired with {pairing}",
            "Consumed {timing}",
            "Central to {event} gatherings"
        ],
        evolution: [
            "Originated in {period} in {region}",
            "Evolved from {predecessor} techniques",
            "Modern adaptations include {adaptation}",
            "Spread to {regions} in {period}",
            "Contemporary versions feature {innovation}"
        ],
        rituals: [
            "Traditional preparation involves {ritual}",
            "Often blessed or ceremonially {action}",
            "Shared according to {custom}"
        ]
    },

    flavorProfile: {
        primaryFlavors: [
            "{adjective} {base_flavor}",
            "Subtle notes of {secondary_flavor}",
            "{intensity} {characteristic}",
            "Balanced {quality}",
            "Distinctive {signature_taste}"
        ],
        aromaProfile: [
            "Fresh {ingredient} scent",
            "{adjective} {aroma_type} notes",
            "Hint of {subtle_aroma}",
            "Warm {characteristic} fragrance",
            "Complex {layered_aroma}"
        ],
        textureNotes: [
            "{adjective} {texture_type}",
            "{quality} crumb structure",
            "{characteristic} crust",
            "{mouthfeel} interior",
            "{finish} aftertaste"
        ],
        pairingRecommendations: [
            "Excellent with {food_pairing}",
            "Complements {beverage}",
            "Perfect alongside {dish}",
            "Traditional pairing: {classic_combo}",
            "Modern twist: {contemporary_pairing}"
        ]
    },

    technical: {
        foundations: [
            "{technique} is essential",
            "Requires {condition}",
            "Depends on {factor}"
        ],
        doughImpact: [
            "Creates {characteristic} texture",
            "Develops {quality} structure",
            "Produces {result} crumb",
            "Enhances {attribute}",
            "Influences {outcome}"
        ],
        bakingImpact: [
            "Requires {condition} environment",
            "Demands {requirement}",
            "Benefits from {technique}",
            "Sensitive to {factor}",
            "Optimized by {method}"
        ]
    }
};

/**
 * Generate contextual prompts for AI
 */
function generatePrompts(styleId, styleName, category) {
    return {
        intro: `Write a brief, engaging 2-3 sentence introduction to ${styleName}, a ${category} style. Focus on what makes it unique and appealing.`,

        history: `Write a comprehensive 4-5 sentence historical background of ${styleName}. Include origins, evolution, and cultural significance.`,

        culturalSignificance: `List 5 aspects of cultural significance for ${styleName}. Each should be a complete sentence explaining its importance in its culture of origin.`,

        consumptionContext: `List 5 traditional consumption contexts or occasions for ${styleName}. Describe when, where, and how it's typically enjoyed.`,

        evolution: `List 5 key points in the evolution of ${styleName}, from historical origins to modern adaptations.`,

        primaryFlavors: `List 5 primary flavor characteristics of ${styleName}. Be specific and descriptive.`,

        aromaProfile: `List 5 aroma descriptors for ${styleName}. Focus on what you smell when it's fresh from the oven.`,

        textureNotes: `List 5 texture characteristics of ${styleName}, covering crust, crumb, mouthfeel, etc.`,

        pairingRecommendations: `List 5 food and beverage pairing recommendations for ${styleName}.`,

        technicalFoundations: `List 3 key technical foundations or principles essential to making ${styleName}.`,

        doughImpact: `List 5 ways the ${styleName} style impacts dough characteristics and development.`,

        bakingImpact: `List 5 ways the ${styleName} style impacts the baking process and requirements.`,

        risks: `List 3 common risks, pitfalls, or challenges when making ${styleName}.`,

        notes: `List 3 important notes or tips for successfully making ${styleName}.`
    };
}

/**
 * Interactive content filler
 */
async function fillContent(styleId) {
    log.title(`🤖 AI-Powered Content Filler for: ${styleId}`);

    // Load i18n file
    const i18nPath = path.join(__dirname, '..', 'public', 'locales', 'en', 'styles.json');

    if (!fs.existsSync(i18nPath)) {
        log.error(`i18n file not found: ${i18nPath}`);
        return;
    }

    const i18nData = JSON.parse(fs.readFileSync(i18nPath, 'utf8'));

    // Find all keys for this style
    const styleKeys = Object.keys(i18nData).filter(key => key.startsWith(styleId));

    if (styleKeys.length === 0) {
        log.error(`No keys found for style: ${styleId}`);
        log.info(`Make sure you've added the i18n template to styles.json first.`);
        return;
    }

    // Find TODO items
    const todoKeys = styleKeys.filter(key =>
        i18nData[key] && i18nData[key].includes('[TODO]')
    );

    if (todoKeys.length === 0) {
        log.success(`No TODO items found! Style is complete.`);
        return;
    }

    log.info(`Found ${todoKeys.length} TODO items to fill.`);
    log.warning(`\nThis is an INTERACTIVE process. You'll be prompted for each section.`);
    log.info(`You can provide content manually or use the suggested templates.\n`);

    const proceed = await question('Continue? (y/n): ');
    if (proceed.toLowerCase() !== 'y') {
        log.info('Cancelled.');
        rl.close();
        return;
    }

    // Group TODOs by section
    const sections = {
        basic: [],
        cultural: [],
        flavor: [],
        technical: [],
        variants: [],
        faq: [],
        other: []
    };

    todoKeys.forEach(key => {
        if (key.includes('_sig_') || key.includes('_consum_') || key.includes('_evo_') || key.includes('_rituals_')) {
            sections.cultural.push(key);
        } else if (key.includes('_flavor_') || key.includes('_aroma_') || key.includes('_texture_') || key.includes('_pair_')) {
            sections.flavor.push(key);
        } else if (key.includes('_tech_') || key.includes('_di_') || key.includes('_bi_') || key.includes('_ps_')) {
            sections.technical.push(key);
        } else if (key.includes('_rv_') || key.includes('_cs_') || key.includes('_sc_')) {
            sections.variants.push(key);
        } else if (key.includes('_faq_')) {
            sections.faq.push(key);
        } else if (key.includes('intro') || key.includes('history') || key.includes('subtitle')) {
            sections.basic.push(key);
        } else {
            sections.other.push(key);
        }
    });

    // Process each section
    const updated = { ...i18nData };

    for (const [sectionName, keys] of Object.entries(sections)) {
        if (keys.length === 0) continue;

        log.section(`\n📝 ${sectionName.toUpperCase()} (${keys.length} items)`);

        for (const key of keys) {
            console.log(`\n${colors.cyan}Key: ${key}${colors.reset}`);
            console.log(`Current: ${colors.yellow}${updated[key]}${colors.reset}`);

            const newValue = await question('New value (or press Enter to skip): ');

            if (newValue.trim()) {
                updated[key] = newValue.trim();
                log.success('Updated!');
            } else {
                log.info('Skipped.');
            }
        }
    }

    // Save updated file
    const backup = `${i18nPath}.backup.${Date.now()}`;
    fs.copyFileSync(i18nPath, backup);
    log.info(`Backup created: ${backup}`);

    fs.writeFileSync(i18nPath, JSON.stringify(updated, null, 2), 'utf8');
    log.success(`\n✅ Updated ${i18nPath}`);

    // Count remaining TODOs
    const remainingTodos = Object.values(updated).filter(v =>
        typeof v === 'string' && v.includes('[TODO]')
    ).length;

    if (remainingTodos > 0) {
        log.warning(`\n⚠ ${remainingTodos} TODO items remaining.`);
        log.info('Run this script again to continue filling content.');
    } else {
        log.success('\n🎉 All TODO items completed!');
    }

    rl.close();
}

// Main
const styleId = process.argv[2];

if (!styleId) {
    log.error('Usage: node scripts/fill-style-content.js <style_id>');
    log.info('Example: node scripts/fill-style-content.js neapolitan_classic');
    process.exit(1);
}

fillContent(styleId).catch(console.error);
