const fs = require('fs');

console.log('🔧 Adding missing useTranslation imports...\n');

const filesToFix = [
    'src/components/onboarding/TourGuide.tsx',
    'src/components/styles/AiStyleBuilderModal.tsx',
    'src/components/ui/CategoryBadge.tsx',
    'src/components/ui/PDFExportButton.tsx',
    'src/components/ui/RecommendedProducts.tsx',
    'src/components/ui/ShareButton.tsx',
    'src/contexts/NotificationContext.tsx',
    'src/hooks/useBatchVariants.ts',
    'src/hooks/useReverseSchedule.ts',
    'src/pages/CalculatorPage.tsx',
    'src/pages/legal/LegalIndexPage.tsx',
    'src/pages/mylab/levain/LevainListPage.tsx',
    'src/services/fcmService.ts',
    'src/services/geolocation/geolocationService.ts',
    'src/services/geolocation/weatherService.ts',
    'src/services/IngredientAIService.ts',
    'src/services/levainDataService.ts',
    'src/services/notificationTemplates.ts',
    'src/services/storageService.ts',
    'src/utils/doughConversion.ts',
    'src/utils/learnSearch.ts',
    'src/utils/styleAdapter.ts',
    'src/utils/styleValidation.ts'
];

let fixed = 0;

filesToFix.forEach(file => {
    if (!fs.existsSync(file)) {
        console.log(`⏭️  Skipped: ${file} (not found)`);
        return;
    }

    let content = fs.readFileSync(file, 'utf-8');

    // Check if already has useTranslation
    if (content.includes('useTranslation') || content.includes('from \'react-i18next\'')) {
        console.log(`⏭️  Skipped: ${file} (already has import)`);
        return;
    }

    // Check if file uses t()
    if (!content.includes('t(\'')) {
        console.log(`⏭️  Skipped: ${file} (no t() calls)`);
        return;
    }

    // Add import
    const lines = content.split('\n');
    let lastImportIndex = -1;

    lines.forEach((line, index) => {
        if (line.trim().startsWith('import ')) {
            lastImportIndex = index;
        }
    });

    if (lastImportIndex >= 0) {
        const importStatement = "import { useTranslation } from 'react-i18next';";
        lines.splice(lastImportIndex + 1, 0, importStatement);

        // Add hook usage for .tsx files
        if (file.endsWith('.tsx')) {
            // Find component/function definition
            const componentMatch = content.match(/(export\s+(?:default\s+)?(?:const|function)\s+\w+[^{]*\{)/);
            if (componentMatch) {
                const hookStatement = "\n  const { t } = useTranslation();\n";
                content = lines.join('\n');
                content = content.replace(componentMatch[0], componentMatch[0] + hookStatement);
                fs.writeFileSync(file, content, 'utf-8');
                console.log(`✅ Fixed: ${file}`);
                fixed++;
                return;
            }
        }

        // For .ts files, we need a different approach - create a t function
        if (file.endsWith('.ts')) {
            lines.splice(lastImportIndex + 2, 0, "import i18n from '@/i18n';");
            lines.splice(lastImportIndex + 3, 0, "const t = i18n.t.bind(i18n);");
            content = lines.join('\n');
            fs.writeFileSync(file, content, 'utf-8');
            console.log(`✅ Fixed: ${file}`);
            fixed++;
            return;
        }

        content = lines.join('\n');
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`✅ Fixed: ${file}`);
        fixed++;
    }
});

console.log(`\n📊 Summary: ${fixed} files fixed`);
console.log(`\n✨ Import fixes complete!`);
