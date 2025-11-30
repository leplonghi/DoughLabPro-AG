
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { RAW_CANONICAL_STYLES } from '../src/data/stylesData';
import { StyleDefinition, StyleCategory } from '../src/types/styleDefinition';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.join(__dirname, '../src/data/styles');

// Helper to ensure directory exists
const ensureDir = (dir: string) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Helper to determine difficulty
const determineDifficulty = (hydration: number): "Easy" | "Medium" | "Hard" | "Expert" => {
    if (hydration < 60) return "Easy";
    if (hydration < 70) return "Medium";
    if (hydration < 80) return "Hard";
    return "Expert";
};

// Helper to normalize category
const normalizeCategory = (cat: string): StyleCategory => {
    const lower = cat.toLowerCase();
    if (lower.includes('pizza')) return 'Pizza';
    if (lower.includes('bread')) return 'Bread';
    if (lower.includes('enriched')) return 'Enriched';
    if (lower.includes('bun')) return 'Buns';
    if (lower.includes('pastry')) return 'Pastry';
    if (lower.includes('cookie')) return 'Cookies';
    if (lower.includes('flat')) return 'Flatbreads';
    return 'Other';
};

async function migrate() {
    console.log('Starting migration...');
    ensureDir(TARGET_DIR);

    const stylesByCategory: Record<string, string[]> = {};
    const allExports: string[] = [];

    for (const raw of RAW_CANONICAL_STYLES) {
        const category = normalizeCategory(raw.category);
        const categoryDir = path.join(TARGET_DIR, category.toLowerCase());
        ensureDir(categoryDir);

        const difficulty = determineDifficulty(raw.technicalProfile.hydrationRange[1]);

        const style: StyleDefinition = {
            id: raw.id,
            title: raw.variantName, // Using variantName as title
            subtitle: raw.family,
            category: category,
            family: raw.family,
            variantName: raw.variantName,
            origin: raw.origin,
            intro: (raw as any).culturalContext || raw.history.substring(0, 100) + '...',
            history: raw.history,
            technicalFoundations: [
                (raw.technicalProfile as any).preferment,
                `Hydration: ${raw.technicalProfile.hydrationRange[0]}-${raw.technicalProfile.hydrationRange[1]}%`
            ].filter(Boolean),
            doughImpact: [], // Placeholder
            bakingImpact: [], // Placeholder
            technicalProfile: {
                hydrationRange: raw.technicalProfile.hydrationRange as [number, number],
                saltRange: raw.technicalProfile.saltRange as [number, number],
                oilRange: (raw.technicalProfile as any).fatRange as [number, number],
                sugarRange: raw.technicalProfile.sugarRange as [number, number],
                flourStrength: raw.technicalProfile.flourStrength,
                fermentation: {
                    bulk: raw.technicalProfile.fermentation.bulk,
                    proof: raw.technicalProfile.fermentation.proof,
                    coldRetard: raw.technicalProfile.fermentation.coldRetard
                },
                oven: {
                    type: raw.technicalProfile.oven.type,
                    temperatureC: raw.technicalProfile.oven.temperatureC as [number, number],
                    notes: raw.technicalProfile.oven.notes
                },
                difficulty: difficulty,
                recommendedUse: raw.technicalProfile.recommendedUse
            },
            regionalVariants: [],
            climateScenarios: [],
            styleComparisons: [],
            parameterSensitivity: [],
            risks: [],
            notes: [],
            tags: [...raw.technicalProfile.recommendedUse, category, raw.origin.country],
            applyInApp: {
                calculator: [],
                styles: [],
                mylab: [],
                levain: [],
                tools: []
            },
            references: raw.references.map(r => ({ title: r, url: '' })),
            images: [],
            diagrams: [],
            faq: [],
            isCanonical: raw.isCanonical,
            source: raw.source as any
        };

        const fileName = `${raw.id}.ts`;
        const filePath = path.join(categoryDir, fileName);

        // Create file content
        const fileContent = `import { StyleDefinition } from '../../../types/styleDefinition';

export const ${raw.id}: StyleDefinition = ${JSON.stringify(style, null, 2)};
`;

        fs.writeFileSync(filePath, fileContent);
        console.log(`Migrated ${raw.id} to ${filePath}`);

        if (!stylesByCategory[category]) {
            stylesByCategory[category] = [];
        }
        stylesByCategory[category].push(raw.id);
    }

    // Create index.ts
    let indexContent = `import { StyleDefinition } from '../../types/styleDefinition';\n\n`;

    // Imports
    for (const [category, ids] of Object.entries(stylesByCategory)) {
        for (const id of ids) {
            indexContent += `import { ${id} } from './${category.toLowerCase()}/${id}';\n`;
        }
    }

    indexContent += `\nexport const ALL_STYLES: StyleDefinition[] = [\n`;
    for (const ids of Object.values(stylesByCategory)) {
        for (const id of ids) {
            indexContent += `  ${id},\n`;
        }
    }
    indexContent += `];\n`;

    fs.writeFileSync(path.join(TARGET_DIR, 'index.ts'), indexContent);
    console.log('Created index.ts');
    console.log('Migration complete.');
}

migrate().catch(console.error);
