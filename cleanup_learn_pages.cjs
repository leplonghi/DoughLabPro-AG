const fs = require('fs');
const path = require('path');

const filesToDelete = [
    'src/pages/learn/FatsPage.tsx',
    'src/pages/learn/SaltPage.tsx',
    'src/pages/learn/WaterPage.tsx',
    'src/pages/learn/PrefermentsPage.tsx',
    'src/pages/learn/DoughAgingPage.tsx',
    'src/pages/learn/MixingTechniquesPage.tsx',
    'src/pages/learn/BallingTechniquePage.tsx',
    'src/pages/learn/SensoryMaturationPage.tsx',
    'src/pages/learn/SugarsPage.tsx',
    'src/pages/learn/ingredients/AdditivesPage.tsx',
    'src/pages/learn/ingredients/WholeGrainsPage.tsx',
    'src/pages/learn/LowMoistureCheesesPage.tsx',
    'src/pages/learn/SmokedCheesesPage.tsx',
    'src/pages/learn/CuredMeatsPage.tsx',
    'src/pages/learn/SmokedAromaticsPage.tsx',
    'src/pages/learn/WaterRichVegetablesPage.tsx',
    'src/pages/learn/CaramelizableVegetablesPage.tsx',
    'src/pages/learn/RegionalCombosPage.tsx'
];

filesToDelete.forEach(file => {
    const fullPath = path.resolve(file);
    if (fs.existsSync(fullPath)) {
        try {
            fs.unlinkSync(fullPath);
            console.log(`Deleted: ${file}`);
        } catch (e) {
            console.error(`Error deleting ${file}: ${e.message}`);
        }
    } else {
        console.log(`Skipped (not found): ${file}`);
    }
});
