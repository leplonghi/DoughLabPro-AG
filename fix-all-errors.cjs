const fs = require('fs');

console.log('🔧 Fixing all TypeScript errors systematically...\n');

// Files and their fixes
const fixes = [
    {
        file: 'src/hooks/useReverseSchedule.ts',
        fixes: [
            {
                find: /\): ScheduleResult => \{\r?\n\r?\n    return useMemo/,
                replace: `): ScheduleResult => {
    const { t } = useTranslation();

    return useMemo`
            }
        ]
    },
    {
        file: 'src/hooks/useBatchVariants.ts',
        fixes: [
            {
                find: /export const useBatchVariants = \(\) => \{\r?\n/,
                replace: `export const useBatchVariants = () => {
    const { t } = useTranslation();
`
            }
        ]
    },
    // For .ts files (non-React), use i18n.t directly
    {
        file: 'src/services/geolocation/weatherService.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/services/IngredientAIService.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/services/notificationTemplates.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/services/fcmService.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/services/geolocation/geolocationService.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/services/levainDataService.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/services/storageService.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/utils/doughConversion.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/utils/learnSearch.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/utils/styleAdapter.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    },
    {
        file: 'src/utils/styleValidation.ts',
        fixes: [
            {
                find: /import { useTranslation } from 'react-i18next';\r?\n/,
                replace: `import i18n from '@/i18n';\nconst t = i18n.t.bind(i18n);\n`
            }
        ]
    }
];

// For .tsx files, add const { t } = useTranslation(); inside component
const tsxFiles = [
    'src/components/onboarding/TourGuide.tsx',
    'src/components/styles/AiStyleBuilderModal.tsx',
    'src/components/ui/CategoryBadge.tsx',
    'src/components/ui/PDFExportButton.tsx',
    'src/components/ui/RecommendedProducts.tsx',
    'src/components/ui/ShareButton.tsx',
    'src/pages/CalculatorPage.tsx',
    'src/pages/legal/LegalIndexPage.tsx',
    'src/pages/mylab/levain/LevainListPage.tsx'
];

let totalFixed = 0;

// Apply specific fixes
fixes.forEach(({ file, fixes: fileFixes }) => {
    if (!fs.existsSync(file)) {
        console.log(`⏭️  Skipped: ${file} (not found)`);
        return;
    }

    let content = fs.readFileSync(file, 'utf-8');
    let changed = false;

    fileFixes.forEach(fix => {
        if (fix.find.test(content)) {
            content = content.replace(fix.find, fix.replace);
            changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`✅ Fixed: ${file}`);
        totalFixed++;
    }
});

// For .tsx files, ensure they have const { t } = useTranslation();
tsxFiles.forEach(file => {
    if (!fs.existsSync(file)) return;

    let content = fs.readFileSync(file, 'utf-8');

    // Check if it already has the hook call
    if (content.includes('const { t } = useTranslation()')) {
        return;
    }

    // Find the component/function body and add the hook
    const componentMatch = content.match(/(export\s+(?:default\s+)?(?:const|function)\s+\w+[^{]*\{)/);
    if (componentMatch) {
        const hookStatement = "\n  const { t } = useTranslation();\n";
        content = content.replace(componentMatch[0], componentMatch[0] + hookStatement);
        fs.writeFileSync(file, content, 'utf-8');
        console.log(`✅ Added hook to: ${file}`);
        totalFixed++;
    }
});

console.log(`\n📊 Summary: ${totalFixed} files fixed`);
console.log(`\n✨ All fixes applied!`);
console.log(`\n🔍 Re-checking TypeScript...`);
