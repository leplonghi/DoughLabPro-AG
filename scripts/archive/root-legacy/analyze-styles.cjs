const fs = require('fs');
const path = require('path');

const stylesDir = './src/data/styles';
const categories = ['bread', 'pizza', 'pastry'];

const requiredFields = [
    'id',
    'name',
    'category',
    'subcategory',
    'difficulty',
    'description',
    'shortDescription',
    'origin',
    'characteristics',
    'bakingTemp',
    'bakingTime',
    'steamRequired',
    'formula',
    'process',
    'tips',
    'variations',
    'commonMistakes',
    'culturalContext',
    'affiliateProducts'
];

const results = {
    complete: [],
    incomplete: []
};

function analyzeFile(filePath, category) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath, '.ts');

    const analysis = {
        file: `${category}/${fileName}`,
        missing: [],
        present: [],
        hasHardcodedStrings: false
    };

    requiredFields.forEach(field => {
        // Check if field exists in the file
        const fieldPattern = new RegExp(`${field}:\\s*`, 'g');
        if (fieldPattern.test(content)) {
            // Check if it's empty or just has a placeholder
            const emptyPattern = new RegExp(`${field}:\\s*[\\[\\{]?\\s*[\\]\\}]?\\s*,`, 'g');
            const undefinedPattern = new RegExp(`${field}:\\s*undefined`, 'g');
            const emptyStringPattern = new RegExp(`${field}:\\s*['"]\\s*['"]`, 'g');

            if (emptyPattern.test(content) || undefinedPattern.test(content) || emptyStringPattern.test(content)) {
                analysis.missing.push(field);
            } else {
                analysis.present.push(field);
            }
        } else {
            analysis.missing.push(field);
        }
    });

    // Check for hardcoded strings (not using t() function)
    const hardcodedPattern = /:\s*['"][^'"]*['"]/g;
    const tFunctionPattern = /t\(['"][^'"]*['"]\)/g;

    const hardcodedMatches = content.match(hardcodedPattern) || [];
    const tFunctionMatches = content.match(tFunctionPattern) || [];

    if (hardcodedMatches.length > tFunctionMatches.length) {
        analysis.hasHardcodedStrings = true;
    }

    if (analysis.missing.length === 0) {
        results.complete.push(analysis);
    } else {
        results.incomplete.push(analysis);
    }
}

// Analyze all style files
categories.forEach(category => {
    const categoryDir = path.join(stylesDir, category);
    if (fs.existsSync(categoryDir)) {
        const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.ts'));
        files.forEach(file => {
            analyzeFile(path.join(categoryDir, file), category);
        });
    }
});

// Generate report
console.log('\n=== ANÁLISE DE ESTILOS ===\n');
console.log(`Total de estilos: ${results.complete.length + results.incomplete.length}`);
console.log(`Estilos completos: ${results.complete.length}`);
console.log(`Estilos incompletos: ${results.incomplete.length}`);

console.log('\n\n=== ESTILOS COMPLETOS (todos os campos preenchidos) ===\n');
results.complete.forEach(style => {
    console.log(`✅ ${style.file}`);
    if (style.hasHardcodedStrings) {
        console.log(`   ⚠️  Contém strings hardcoded (não usa i18n)`);
    }
});

console.log('\n\n=== ESTILOS INCOMPLETOS (campos faltando) ===\n');
results.incomplete.forEach(style => {
    console.log(`❌ ${style.file}`);
    console.log(`   Campos faltando (${style.missing.length}): ${style.missing.join(', ')}`);
    console.log(`   Campos presentes (${style.present.length}): ${style.present.join(', ')}`);
    if (style.hasHardcodedStrings) {
        console.log(`   ⚠️  Contém strings hardcoded (não usa i18n)`);
    }
    console.log('');
});

// Save detailed report to JSON
fs.writeFileSync(
    './style-analysis-report.json',
    JSON.stringify(results, null, 2)
);

console.log('\n📄 Relatório detalhado salvo em: style-analysis-report.json\n');
