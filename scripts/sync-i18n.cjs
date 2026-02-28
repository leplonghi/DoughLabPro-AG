
const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const sourceLang = 'en';
const targetLangs = ['es', 'pt'];

function syncTranslations() {
    console.log('🔄 Starting i18n synchronization...');

    const sourceDir = path.join(localesDir, sourceLang);

    if (!fs.existsSync(sourceDir)) {
        console.error(`❌ Source directory not found: ${sourceDir}`);
        process.exit(1);
    }

    // Get all JSON files from source
    const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.json'));

    console.log(`📂 Found ${files.length} translation files in ${sourceLang}.`);

    targetLangs.forEach(lang => {
        const targetDir = path.join(localesDir, lang);

        // Create target directory if it doesn't exist
        if (!fs.existsSync(targetDir)) {
            console.log(`✨ Creating directory for ${lang}...`);
            fs.mkdirSync(targetDir, { recursive: true });
        }

        let syncedCount = 0;
        let createdCount = 0;

        files.forEach(file => {
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, file);

            if (!fs.existsSync(targetPath)) {
                // File doesn't exist in target, copy from source
                fs.copyFileSync(sourcePath, targetPath);
                console.log(`   ➕ Created ${file} in ${lang} (copied from ${sourceLang})`);
                createdCount++;
            } else {
                // File exists, let's check for missing keys (simple shallow check)
                const sourceContent = JSON.parse(fs.readFileSync(sourcePath, 'utf-8'));
                let targetContent = {};

                try {
                    targetContent = JSON.parse(fs.readFileSync(targetPath, 'utf-8'));
                } catch (e) {
                    console.warn(`   ⚠️ Error parsing ${targetPath}, overwriting with source.`);
                    targetContent = {}; // Force overwrite if corrupt
                }

                const sourceKeys = Object.keys(sourceContent);
                let missingKeysCount = 0;
                let hasChanges = false;

                sourceKeys.forEach(key => {
                    if (targetContent[key] === undefined) {
                        // For now, identifying missing keys. 
                        // Ideally we shouldn't overwrite existing translations, just add missing ones.
                        // But if we want "complete implementation", we should add them.
                        targetContent[key] = sourceContent[key]; // Fill with source (English) as fallback
                        missingKeysCount++;
                        hasChanges = true;
                    }
                });

                if (hasChanges) {
                    fs.writeFileSync(targetPath, JSON.stringify(targetContent, null, 2));
                    console.log(`   📝 Updated ${file} in ${lang}: Added ${missingKeysCount} missing keys.`);
                    syncedCount++;
                }
            }
        });

        console.log(`✅ ${lang}: Created ${createdCount} files, Synced ${syncedCount} files.`);
    });

    console.log('🎉 i18n synchronization complete!');
}

syncTranslations();
