const fs = require('fs');
const path = require('path');

console.log('🔄 Restoring problematic files from backup...\n');

const backupDir = './backups/pre-i18n-migration-2025-12-20T01-26-02';

const problematicFiles = [
    'src/components/calculator/HydrationVisualizer.tsx',
    'src/components/calculator/ingredients/AssemblySection.tsx',
    'src/components/calculator/ProductionTimeline.tsx',
    'src/components/calculator/UnitSelector.tsx',
    'src/components/dashboard/HydrationVisualizer.tsx',
    'src/components/dashboard/sections/AssemblySection.tsx',
    'src/components/layout/Navigation.tsx',
    'src/components/notifications/NotificationTemplatePicker.tsx',
    'src/components/notifications/TimerDashboard.tsx',
    'src/components/styles/CreateStyleModal.tsx',
    'src/components/tools/DoughRescueModal.tsx',
    'src/components/weather/WeatherWidget.tsx',
    'src/contexts/DoughSessionContext.tsx',
    'src/pages/StylesLibrary.tsx'
];

let restored = 0;

problematicFiles.forEach(file => {
    const backupPath = path.join(backupDir, file);

    if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, file);
        console.log(`✅ Restored: ${file}`);
        restored++;
    } else {
        console.log(`❌ Not found in backup: ${file}`);
    }
});

console.log(`\n📊 Summary: ${restored}/${problematicFiles.length} files restored`);
console.log(`\n✨ Restoration complete!`);
console.log(`\n🔍 Verifying TypeScript compilation...`);
