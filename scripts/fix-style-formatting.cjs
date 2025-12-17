const fs = require('fs');
const path = require('path');

const regionsDir = path.join(__dirname, '../src/data/styles/regions');

// Get all .ts files in the regions directory
const files = fs.readdirSync(regionsDir).filter(f => f.endsWith('.ts'));

console.log(`Found ${files.length} style files to process\n`);

let totalFixed = 0;

files.forEach(file => {
    const filePath = path.join(regionsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let fixCount = 0;

    // Fix region/period/country fields that have numeric suffixes
    // e.g., "New york city 4" -> "New York City"
    // e.g., "Early 20th century 2" -> "Early 20th century"

    // Pattern: Remove trailing space + number from quoted strings in origin fields
    const patterns = [
        { regex: /(region|period|country):\s+['"]([^'"]+)\s+\d+['"]/g, name: 'numeric suffix' },
        { regex: /(region|period):\s+['"]([A-Z][a-z]+)\s+([a-z]+)\s+([a-z]+)\s+(\d+)['"]/g, name: 'period suffix' }
    ];

    // Simple approach: find and replace specific patterns
    const replacements = [
        // New York variations
        { from: "'New york city 4'", to: "'New York City'" },
        { from: '"New york city 4"', to: '"New York City"' },
        { from: "'New york city 2'", to: "'New York City'" },
        { from: '"New york city 2"', to: '"New York City"' },
        { from: "'New haven ct 2'", to: "'New Haven, CT'" },
        { from: '"New haven ct 2"', to: '"New Haven, CT"' },

        // Period variations
        { from: "'Early 20th century 2'", to: "'Early 20th century'" },
        { from: '"Early 20th century 2"', to: '"Early 20th century"' },

        // Other regions
        { from: "'Detroit michigan'", to: "'Detroit, Michigan'" },
        { from: '"Detroit michigan"', to: '"Detroit, Michigan"' },
        { from: "'Chicago illinois'", to: "'Chicago, Illinois'" },
        { from: '"Chicago illinois"', to: '"Chicago, Illinois"' },
        { from: "'San francisco ca'", to: "'San Francisco, CA'" },
        { from: '"San francisco ca"', to: '"San Francisco, CA"' },

        // Other common issues
        { from: "'Gas deck 2'", to: "'Gas deck'" },
        { from: '"Gas deck 2"', to: '"Gas deck"' },
        { from: "'Cheese slice 2'", to: "'Cheese slice'" },
        { from: '"Cheese slice 2"', to: '"Cheese slice"' },
        { from: "'Pepperoni 4'", to: "'Pepperoni'" },
        { from: '"Pepperoni 4"', to: '"Pepperoni"' },
        { from: "'Pepperoni 5'", to: "'Pepperoni'" },
        { from: '"Pepperoni 5"', to: '"Pepperoni"' },
        { from: "'W300320 2'", to: "'W300-320'" },
        { from: '"W300320 2"', to: '"W300-320"' },
        { from: "'W300320 3'", to: "'W300-320'" },
        { from: '"W300320 3"', to: '"W300-320"' },
        { from: "'W300340'", to: "'W300-340'" },
        { from: '"W300340"', to: '"W300-340"' },
        { from: "'Bread flour 5'", to: "'Bread flour'" },
        { from: '"Bread flour 5"', to: '"Bread flour"' },
        { from: "'Lactic 5'", to: "'Lactic'" },
        { from: '"Lactic 5"', to: '"Lactic"' },
        { from: "'Garlic 2'", to: "'Garlic'" },
        { from: '"Garlic 2"', to: '"Garlic"' },
        { from: "'Oregano 3'", to: "'Oregano'" },
        { from: '"Oregano 3"', to: '"Oregano"' },
        { from: "'Modernist pizza 13'", to: "'Modernist Pizza'" },
        { from: '"Modernist pizza 13"', to: '"Modernist Pizza"' },
        { from: "'Pizza city usa 2'", to: "'Pizza City USA'" },
        { from: '"Pizza city usa 2"', to: '"Pizza City USA"' },
        { from: "'French baguette 2'", to: "'French baguette'" },
        { from: '"French baguette 2"', to: '"French baguette"' },
        { from: "'Nyc slice 2'", to: "'NYC slice'" },
        { from: '"Nyc slice 2"', to: '"NYC slice"' },
        { from: "'Neutral 8'", to: "'Neutral'" },
        { from: '"Neutral 8"', to: '"Neutral"' },
    ];

    replacements.forEach(({ from, to }) => {
        if (content.includes(from)) {
            content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
            fixCount++;
        }
    });

    if (fixCount > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ ${file}: Fixed ${fixCount} formatting issues`);
        totalFixed += fixCount;
    } else {
        console.log(`  ${file}: No issues found`);
    }
});

console.log(`\n✅ Total fixes applied: ${totalFixed}`);
