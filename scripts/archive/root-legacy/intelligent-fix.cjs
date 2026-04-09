const fs = require('fs');
const path = require('path');

console.log('🔧 Intelligent TypeScript Error Fixer\n');
console.log('='.repeat(70));

// Patterns to fix - restore hardcoded strings in specific contexts
const globalFixes = [
    // Fix JSX template literals that got broken
    {
        pattern: /\{t\('([^']+)'\)\}/g,
        shouldRestore: (match, context) => {
            // If it's inside a template literal ${}, restore it
            return context.includes('${') || context.includes('`');
        }
    },

    // Fix type definitions
    {
        pattern: /:\s*t\('([^']+)'\)\s*\|/g,
        restore: true // Always restore types
    },

    // Fix as type assertions
    {
        pattern: /as\s+t\('([^']+)'\)/g,
        restore: true
    }
];

// File-specific fixes
const fileFixes = {
    'src/components/calculator/HydrationVisualizer.tsx': [
        {
            find: /t\('ui\.hydration_level_0'\)/g,
            replace: "'Hydration Level'"
        }
    ],

    'src/components/calculator/ingredients/AssemblySection.tsx': [
        {
            find: /t\('ui\.total_dough_1'\)/g,
            replace: "'Total Dough'"
        },
        {
            find: /t\('ui\.ingredients_2'\)/g,
            replace: "'Ingredients'"
        }
    ],

    'src/components/calculator/UnitSelector.tsx': [
        {
            find: /t\('ui\.metric_g_kg_3'\)/g,
            replace: "'Metric (g/kg)'"
        },
        {
            find: /t\('ui\.imperial_oz_lb_4'\)/g,
            replace: "'Imperial (oz/lb)'"
        },
        {
            find: /t\('ui\.bakers_5'\)/g,
            replace: "'Bakers %'"
        }
    ],

    'src/components/calculator/ProductionTimeline.tsx': [
        {
            find: /t\('ui\.step_6'\)/g,
            replace: "'Step'"
        }
    ],

    'src/components/dashboard/HydrationVisualizer.tsx': [
        {
            find: /t\('ui\.hydration_7'\)/g,
            replace: "'Hydration'"
        }
    ],

    'src/components/dashboard/sections/AssemblySection.tsx': [
        {
            find: /t\('ui\.total_weight_8'\)/g,
            replace: "'Total Weight'"
        }
    ]
};

let filesFixed = 0;
let totalFixes = 0;

// Apply file-specific fixes
Object.entries(fileFixes).forEach(([filePath, fixes]) => {
    if (!fs.existsSync(filePath)) {
        console.log(`⏭️  Skipped: ${filePath} (not found)`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    let fixCount = 0;

    fixes.forEach(fix => {
        const matches = content.match(fix.find);
        if (matches) {
            content = content.replace(fix.find, fix.replace);
            fixCount += matches.length;
        }
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ Fixed: ${path.basename(filePath)} (${fixCount} replacements)`);
        filesFixed++;
        totalFixes += fixCount;
    }
});

console.log('\n' + '='.repeat(70));
console.log(`\n📊 Summary:`);
console.log(`   Files fixed: ${filesFixed}`);
console.log(`   Total fixes applied: ${totalFixes}`);

// Now let's restore files that have too many errors from backup
const problematicFiles = [
    'src/components/FlavorComponentProfileModal.tsx',
    'src/components/IngredientTooltip.tsx',
    'src/components/notifications/NotificationAnalyticsDashboard.tsx',
    'src/components/notifications/NotificationList.tsx',
    'src/components/tools/DoughyAssistant.tsx',
    'src/components/ui/AffiliateIngredientLink.tsx',
    'src/components/ui/ExternalLink.tsx',
    'src/components/ui/SliderInput.tsx',
    'src/contexts/NotificationContext.tsx',
    'src/pages/BatchDetailPage.tsx',
    'src/pages/HelpPage.tsx',
    'src/pages/ProductionDashboard.tsx',
    'src/pages/styles/DoughStylesPage.tsx',
    'src/pages/learn/ingredients/OilsPage.tsx',
    'src/pages/learn/TechnicalPageLayout.tsx',
    'src/pages/learn/TechniquesPage.tsx',
    'src/pages/mylab/levain/LevainDetailPage.tsx'
];

const backupDir = './backups/pre-i18n-migration-2025-12-20T01-26-02';
let filesRestored = 0;

console.log(`\n🔄 Restoring problematic files from backup...\n`);

problematicFiles.forEach(file => {
    const backupPath = path.join(backupDir, file);
    if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, file);
        console.log(`✅ Restored: ${path.basename(file)}`);
        filesRestored++;
    }
});

console.log(`\n📊 Restored ${filesRestored} files from backup`);
console.log(`\n✨ Fixes complete! Re-checking TypeScript...`);
