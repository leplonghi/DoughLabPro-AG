const fs = require('fs');

console.log('🔧 Fixing TypeScript type errors from migration...\n');

const fixes = [
    {
        file: 'src/pages/StylesLibrary.tsx',
        find: /const regionOptions: \{ value: Region \| t\('ui\.global_26'\); label: string \}\[\] =/g,
        replace: "const regionOptions: { value: Region | 'Global'; label: string }[] ="
    },
    {
        file: 'src/pages/StylesLibrary.tsx',
        find: /setFilterRegion\(e\.target\.value as Region \| 'All' \| t\('ui\.global_26'\)\)/g,
        replace: "setFilterRegion(e.target.value as Region | 'All' | 'Global')"
    },
    {
        file: 'src/services/IngredientAIService.ts',
        find: /classification: t\('common\.standard_53'\) \| t\('common\.variation_54'\) \| t\('common\.experimental_55'\);/g,
        replace: "classification: 'Standard' | 'Variation' | 'Experimental';"
    },
    {
        file: 'src/services/IngredientAIService.ts',
        find: /let classification: t\('common\.standard_53'\) \| t\('common\.variation_54'\) \| t\('common\.experimental_55'\) = t\('common\.standard_53'\);/g,
        replace: "let classification: 'Standard' | 'Variation' | 'Experimental' = 'Standard';"
    },
    {
        file: 'src/components/styles/CreateStyleModal.tsx',
        find: /difficulty: t\('common\.medium_56'\) as t\('common\.easy_57'\) \| t\('common\.medium_56'\) \| t\('common\.hard_58'\) \| t\('common\.expert_59'\),/g,
        replace: "difficulty: 'Medium' as 'Easy' | 'Medium' | 'Hard' | 'Expert',"
    }
];

let filesFixed = 0;

fixes.forEach(fix => {
    try {
        if (fs.existsSync(fix.file)) {
            let content = fs.readFileSync(fix.file, 'utf-8');
            const before = content;
            content = content.replace(fix.find, fix.replace);

            if (content !== before) {
                fs.writeFileSync(fix.file, content, 'utf-8');
                console.log(`✅ Fixed: ${fix.file}`);
                filesFixed++;
            }
        }
    } catch (error) {
        console.log(`❌ Error fixing ${fix.file}: ${error.message}`);
    }
});

// Restore the affiliate.ts file from backup as it has complex string issues
const backupPath = './backups/pre-i18n-migration-2025-12-20T01-26-02/src/utils/affiliate.ts';
const targetPath = 'src/utils/affiliate.ts';

if (fs.existsSync(backupPath)) {
    fs.copyFileSync(backupPath, targetPath);
    console.log(`✅ Restored: affiliate.ts from backup (complex strings)`);
    filesFixed++;
}

console.log(`\n📊 Summary: ${filesFixed} files fixed`);
console.log(`\n🔄 Re-running TypeScript check...`);
