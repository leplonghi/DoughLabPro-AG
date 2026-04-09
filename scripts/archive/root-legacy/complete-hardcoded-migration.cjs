const fs = require('fs');
const path = require('path');

console.log('🚀 Starting COMPLETE i18n migration for all hardcoded strings...\n');
console.log('='.repeat(70));

// Load the detailed report
const report = JSON.parse(fs.readFileSync('./hardcoded-strings-report.json', 'utf-8'));

// Translations storage by namespace
const translations = {
    common: {},
    ui: {},
    errors: {},
    calculator: {},
    learn: {},
    weather: {},
    notifications: {}
};

let totalStringsProcessed = 0;
let totalFilesUpdated = 0;

// Determine namespace based on file path and content
function determineNamespace(filePath, text) {
    if (filePath.includes('weather')) return 'weather';
    if (filePath.includes('notification')) return 'notifications';
    if (filePath.includes('calculator')) return 'calculator';
    if (filePath.includes('learn')) return 'learn';
    if (filePath.includes('error') || filePath.includes('validation')) return 'errors';
    if (filePath.includes('components') || filePath.includes('pages')) return 'ui';
    return 'common';
}

// Generate a clean i18n key
function generateKey(text, namespace, index) {
    const cleanText = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '_')
        .substring(0, 40);

    return `${cleanText}_${index}`;
}

// Process each file
report.forEach((fileReport, fileIndex) => {
    const filePath = fileReport.file;
    console.log(`\n📄 [${fileIndex + 1}/${report.length}] Processing: ${path.basename(filePath)}`);
    console.log(`   Strings to migrate: ${fileReport.count}`);

    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        let updatedContent = content;
        let stringsInFile = 0;

        // Check if file already imports useTranslation
        const hasUseTranslation = content.includes('useTranslation');
        const hasImportI18n = content.includes("from 'react-i18next'") || content.includes('from "react-i18next"');

        // Process each string in the file
        fileReport.strings.forEach((stringInfo, idx) => {
            const originalText = stringInfo.text;
            const namespace = determineNamespace(filePath, originalText);
            const key = generateKey(originalText, namespace, totalStringsProcessed + idx);

            // Store translation
            translations[namespace][key] = originalText;

            // Replace in content - be very careful with exact matching
            // Look for the exact string in quotes
            const patterns = [
                new RegExp(`["']${originalText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g'),
            ];

            patterns.forEach(pattern => {
                if (pattern.test(updatedContent)) {
                    updatedContent = updatedContent.replace(
                        pattern,
                        `t('${namespace}.${key}')`
                    );
                    stringsInFile++;
                }
            });
        });

        // Add import if needed and strings were replaced
        if (stringsInFile > 0 && !hasUseTranslation && !hasImportI18n) {
            // Determine if it's a .tsx or .ts file
            const isTsx = filePath.endsWith('.tsx');
            const isTs = filePath.endsWith('.ts');

            if (isTsx || isTs) {
                // Add import at the top
                const importStatement = "import { useTranslation } from 'react-i18next';\n";

                // Find the last import statement
                const lines = updatedContent.split('\n');
                let lastImportIndex = -1;

                lines.forEach((line, index) => {
                    if (line.trim().startsWith('import ')) {
                        lastImportIndex = index;
                    }
                });

                if (lastImportIndex >= 0) {
                    lines.splice(lastImportIndex + 1, 0, importStatement);
                    updatedContent = lines.join('\n');
                }

                // Add useTranslation hook in component/function
                if (isTsx) {
                    // Find the component/function definition
                    const componentMatch = updatedContent.match(/(export\s+(?:default\s+)?(?:const|function)\s+\w+[^{]*\{)/);
                    if (componentMatch) {
                        const hookStatement = "\n  const { t } = useTranslation();\n";
                        updatedContent = updatedContent.replace(
                            componentMatch[0],
                            componentMatch[0] + hookStatement
                        );
                    }
                }
            }
        }

        // Write updated file
        if (updatedContent !== content) {
            fs.writeFileSync(filePath, updatedContent, 'utf-8');
            totalFilesUpdated++;
            console.log(`   ✅ Updated: ${stringsInFile} strings migrated`);
        } else {
            console.log(`   ⏭️  Skipped: No changes needed`);
        }

        totalStringsProcessed += fileReport.count;

    } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
    }
});

console.log('\n' + '='.repeat(70));
console.log(`\n📊 Migration Summary:`);
console.log(`   Files processed: ${report.length}`);
console.log(`   Files updated: ${totalFilesUpdated}`);
console.log(`   Total strings processed: ${totalStringsProcessed}`);

// Count translations by namespace
Object.keys(translations).forEach(ns => {
    const count = Object.keys(translations[ns]).length;
    if (count > 0) {
        console.log(`   ${ns}.json: ${count} keys`);
    }
});

// Save translations to respective files
console.log(`\n💾 Saving translation files...`);

Object.keys(translations).forEach(namespace => {
    const keys = Object.keys(translations[namespace]);
    if (keys.length > 0) {
        const filePath = `./public/locales/en/${namespace}.json`;

        // Load existing translations if file exists
        let existing = {};
        if (fs.existsSync(filePath)) {
            existing = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }

        // Merge new translations
        const merged = { ...existing, ...translations[namespace] };

        // Sort alphabetically
        const sorted = Object.keys(merged)
            .sort()
            .reduce((obj, key) => {
                obj[key] = merged[key];
                return obj;
            }, {});

        // Write file
        fs.writeFileSync(filePath, JSON.stringify(sorted, null, 2), 'utf-8');
        console.log(`   ✅ ${namespace}.json: ${keys.length} new keys added`);
    }
});

console.log(`\n✨ Complete migration finished!`);
console.log(`\n📝 Next steps:`);
console.log(`   1. Review the updated files`);
console.log(`   2. Test the application`);
console.log(`   3. Check for any TypeScript errors`);
console.log(`   4. Commit the changes`);
