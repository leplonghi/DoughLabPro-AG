const fs = require('fs');
const path = require('path');

// Files that need i18n migration
const filesToMigrate = {
    'bread/injera_flatbread.ts': 'injera',
    'bread/mixed_grain_sourdough.ts': 'mixed_grain',
    'bread/naan_flatbread.ts': 'naan',
    'bread/pain_de_campagne.ts': 'pain_campagne',
    'bread/pain_de_mie_pullman.ts': 'pain_mie',
    'bread/pane_pugliese.ts': 'pane_pugliese',
    'bread/pao_de_leite_brazil.ts': 'pao_leite',
    'bread/pao_frances_brazil.ts': 'pao_frances',
    'bread/pao_sovado_brazil.ts': 'pao_sovado',
    'bread/pita_bread_flatbread.ts': 'pita',
    'bread/pretzel_dough_classic.ts': 'pretzel',
    'bread/seventy_percent_rye_sour.ts': 'rye_70',
    'bread/tartine_country_loaf.ts': 'tartine',
    'bread/vollkornbrot_100_rye.ts': 'vollkornbrot',
    'bread/wheat_tortilla.ts': 'tortilla',
    'bread/whole_wheat_100.ts': 'whole_wheat',
    'pastry/berliner_bomboloni.ts': 'berliner',
    'pastry/yeasted_donuts.ts': 'donuts'
};

const stylesDir = './src/data/styles';
const allTranslations = {};
let totalStringsExtracted = 0;

function generateKey(text, prefix, index) {
    // Create a safe, descriptive key
    const cleanText = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '_')
        .substring(0, 40);

    return `${prefix}_${cleanText}_${index}`;
}

function extractAndReplaceStrings(filePath, prefix) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);

    console.log(`\n📄 Processing: ${fileName}`);

    let stringCount = 0;
    let updatedContent = content;

    // Fields to migrate (simple strings)
    const simpleStringFields = ['title', 'variantName', 'intro', 'history'];

    simpleStringFields.forEach(field => {
        const pattern = new RegExp(`"${field}":\\s*"([^"]+)"`, 'g');
        const matches = [...content.matchAll(pattern)];

        matches.forEach((match, idx) => {
            const originalText = match[1];
            // Skip if already using t()
            if (match[0].includes('t(')) return;

            const key = `${prefix}_${field}`;
            allTranslations[key] = originalText;

            updatedContent = updatedContent.replace(
                match[0],
                `"${field}": t('styles.${key}')`
            );
            stringCount++;
        });
    });

    // Extract array strings (like in culturalContext.significance)
    const arrayFieldPatterns = [
        { path: 'culturalContext.significance', prefix: `${prefix}_sig` },
        { path: 'culturalContext.consumptionContext', prefix: `${prefix}_cons` },
        { path: 'culturalContext.evolution', prefix: `${prefix}_evo` },
        { path: 'culturalContext.rituals', prefix: `${prefix}_rit` },
        { path: 'flavorProfile.primaryFlavors', prefix: `${prefix}_flav` },
        { path: 'flavorProfile.aromaProfile', prefix: `${prefix}_aroma` },
        { path: 'flavorProfile.textureNotes', prefix: `${prefix}_text` },
        { path: 'flavorProfile.pairingRecommendations', prefix: `${prefix}_pair` },
        { path: 'flavorProfile.flavorEvolution', prefix: `${prefix}_fevo` },
        { path: 'regionalVariants', prefix: `${prefix}_var` },
        { path: 'climateScenarios', prefix: `${prefix}_clim` },
        { path: 'styleComparisons', prefix: `${prefix}_comp` },
        { path: 'parameterSensitivity', prefix: `${prefix}_sens` },
        { path: 'risks', prefix: `${prefix}_risk` },
        { path: 'notes', prefix: `${prefix}_note` }
    ];

    arrayFieldPatterns.forEach(({ path: fieldPath, prefix: fieldPrefix }) => {
        // Match array items like "text here",
        const fieldName = fieldPath.split('.').pop();
        const arrayPattern = new RegExp(`"${fieldName}":\\s*\\[([^\\]]+)\\]`, 's');
        const arrayMatch = content.match(arrayPattern);

        if (arrayMatch) {
            const arrayContent = arrayMatch[1];
            const stringPattern = /"([^"]{15,})"/g;
            const strings = [...arrayContent.matchAll(stringPattern)];

            strings.forEach((strMatch, idx) => {
                const originalText = strMatch[1];
                // Skip if already using t() or is a URL
                if (strMatch[0].includes('t(') || originalText.includes('http')) return;

                const key = `${fieldPrefix}_${idx + 1}`;
                allTranslations[key] = originalText;

                updatedContent = updatedContent.replace(
                    `"${originalText}"`,
                    `t('styles.${key}')`
                );
                stringCount++;
            });
        }
    });

    // Extract FAQ questions and answers
    const faqPattern = /"faq":\s*\[([^\]]+)\]/s;
    const faqMatch = content.match(faqPattern);

    if (faqMatch) {
        const faqContent = faqMatch[1];
        const questionPattern = /"question":\s*"([^"]+)"/g;
        const answerPattern = /"answer":\s*"([^"]+)"/g;

        const questions = [...faqContent.matchAll(questionPattern)];
        const answers = [...faqContent.matchAll(answerPattern)];

        questions.forEach((qMatch, idx) => {
            const originalText = qMatch[1];
            if (qMatch[0].includes('t(')) return;

            const key = `${prefix}_faq_${idx + 1}_q`;
            allTranslations[key] = originalText;

            updatedContent = updatedContent.replace(
                qMatch[0],
                `"question": t('styles.${key}')`
            );
            stringCount++;
        });

        answers.forEach((aMatch, idx) => {
            const originalText = aMatch[1];
            if (aMatch[0].includes('t(')) return;

            const key = `${prefix}_faq_${idx + 1}_a`;
            allTranslations[key] = originalText;

            updatedContent = updatedContent.replace(
                aMatch[0],
                `"answer": t('styles.${key}')`
            );
            stringCount++;
        });
    }

    // Extract origin fields
    const originFields = ['country', 'region', 'period'];
    originFields.forEach(field => {
        const pattern = new RegExp(`"${field}":\\s*"([^"]+)"`, 'g');
        const matches = [...content.matchAll(pattern)];

        matches.forEach((match) => {
            const originalText = match[1];
            if (match[0].includes('t(')) return;

            const key = `${prefix}_origin_${field}`;
            allTranslations[key] = originalText;

            updatedContent = updatedContent.replace(
                match[0],
                `"${field}": t('styles.${key}')`
            );
            stringCount++;
        });
    });

    // Extract fermentation notes
    const fermentFields = ['bulk', 'proof', 'coldRetard'];
    fermentFields.forEach(field => {
        const pattern = new RegExp(`"${field}":\\s*"([^"]+)"`, 'g');
        const matches = [...content.matchAll(pattern)];

        matches.forEach((match) => {
            const originalText = match[1];
            if (match[0].includes('t(') || originalText.length < 10) return;

            const key = `${prefix}_ferm_${field}`;
            allTranslations[key] = originalText;

            updatedContent = updatedContent.replace(
                match[0],
                `"${field}": t('styles.${key}')`
            );
            stringCount++;
        });
    });

    // Extract oven notes
    const ovenNotesPattern = /"notes":\s*"([^"]{15,})"/g;
    const ovenMatches = [...content.matchAll(ovenNotesPattern)];

    ovenMatches.forEach((match, idx) => {
        const originalText = match[1];
        if (match[0].includes('t(')) return;

        // Check if this is within the oven object
        const beforeMatch = content.substring(0, match.index);
        if (beforeMatch.lastIndexOf('"oven":') > beforeMatch.lastIndexOf('"notes":')) {
            const key = `${prefix}_oven_notes`;
            allTranslations[key] = originalText;

            updatedContent = updatedContent.replace(
                match[0],
                `"notes": t('styles.${key}')`
            );
            stringCount++;
        }
    });

    console.log(`   ✅ Extracted ${stringCount} strings`);
    totalStringsExtracted += stringCount;

    // Write updated file
    fs.writeFileSync(filePath, updatedContent, 'utf-8');

    return stringCount;
}

console.log('🚀 Starting complete i18n migration...\n');
console.log('='.repeat(60));

Object.entries(filesToMigrate).forEach(([file, prefix]) => {
    const fullPath = path.join(stylesDir, file);
    if (fs.existsSync(fullPath)) {
        extractAndReplaceStrings(fullPath, prefix);
    } else {
        console.log(`⚠️  File not found: ${file}`);
    }
});

console.log('\n' + '='.repeat(60));
console.log(`\n📊 Migration Summary:`);
console.log(`   Files processed: ${Object.keys(filesToMigrate).length}`);
console.log(`   Total strings extracted: ${totalStringsExtracted}`);
console.log(`   Unique translation keys: ${Object.keys(allTranslations).length}`);

// Save translations to JSON file
const translationsPath = './i18n-new-translations.json';
fs.writeFileSync(translationsPath, JSON.stringify(allTranslations, null, 2));

console.log(`\n✅ Translations saved to: ${translationsPath}`);
console.log(`\n📝 Next step: Merge these translations into public/locales/en/styles.json`);
