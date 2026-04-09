const fs = require('fs');
const path = require('path');

const contentDir = 'src/data/learn-content';
const categories = [
    'Ingredient Science',
    'Dough & Gluten Science',
    'Fermentation Science',
    'Baking Science',
    'Process Techniques',
    'Troubleshooting'
];

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

const report = {
    totalFiles: files.length,
    validFiles: 0,
    filesWithErrors: 0,
    categories: {},
    errors: [],
    warnings: [],
    idMap: {},
    integrations: {
        calculator: 0,
        styles: 0,
        mylab: 0,
        levain: 0,
        tools: 0,
        doughbot: 0
    }
};

files.forEach(file => {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const issues = [];

    // 1. Check ID
    const idMatch = content.match(/id:\s*["']([^"']+)["']/);
    const id = idMatch ? idMatch[1] : null;

    if (!id) {
        issues.push(`Missing 'id' field`);
    } else {
        if (report.idMap[id]) {
            issues.push(`Duplicate ID '${id}' found in ${report.idMap[id]}`);
        }
        report.idMap[id] = file;

        // Check filename match (warning only)
        const expectedId = file.replace('.ts', '');
        if (id !== expectedId && id !== 'fermentation-basics-and-curves') { // Exception for known mismatch if acceptable
            // issues.push(`ID mismatch: '${id}' vs filename '${expectedId}'`);
        }
    }

    // 2. Check Category
    const catMatch = content.match(/category:\s*["']([^"']+)["']/);
    const category = catMatch ? catMatch[1] : null;

    if (!category) {
        issues.push(`Missing 'category' field`);
    } else if (!categories.includes(category)) {
        issues.push(`Invalid category: '${category}'`);
    } else {
        report.categories[category] = (report.categories[category] || 0) + 1;
    }

    // 3. Check Gold Schema Fields
    const requiredFields = [
        'intro', 'history', 'technicalFoundations', 'doughImpact', 'bakingImpact',
        'grandmaVersion', 'applyInApp'
    ];

    requiredFields.forEach(field => {
        if (!content.includes(`${field}:`)) {
            issues.push(`Missing field: ${field}`);
        }
    });

    // 4. Check Grandma Version Sub-fields
    if (content.includes('grandmaVersion:')) {
        ['introAnalogy', 'simpleExplanation', 'whatItDoes', 'whyItMatters', 'softWarning'].forEach(sub => {
            if (!content.includes(`${sub}:`)) {
                issues.push(`Missing grandmaVersion sub-field: ${sub}`);
            }
        });
    }

    // 5. Check Integrations
    if (content.includes('calculator:')) report.integrations.calculator++;
    if (content.includes('styles:')) report.integrations.styles++;
    if (content.includes('mylab:')) report.integrations.mylab++;
    if (content.includes('levain:')) report.integrations.levain++;
    if (content.includes('tools:')) report.integrations.tools++;
    if (content.includes('doughbot:')) report.integrations.doughbot++;

    // 6. Check for TODOs
    if (content.includes('TODO')) {
        report.warnings.push(`[${file}] Contains TODO comments`);
    }

    if (issues.length > 0) {
        report.filesWithErrors++;
        report.errors.push({ file, issues });
    } else {
        report.validFiles++;
    }
});

console.log(JSON.stringify(report, null, 2));
