import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FILE = path.resolve(__dirname, '../docs/STYLE_LIBRARY_MASTER_SPEC_PART3.md');
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/stylesData.ts');

function parseStyles() {
    const content = fs.readFileSync(INPUT_FILE, 'utf-8');
    const styles = [];

    const markers = [
        '3C — JSON Schema Block',
        'JSON Block',
        '5A-3 — JSON Schema Block',
        '4C — JSON Schema Block',
        'JSON Schema Block'
    ];

    let currentIndex = 0;
    while (currentIndex < content.length) {
        // Find next marker
        let markerIndex = -1;
        let foundMarkerLength = 0;

        for (const marker of markers) {
            const idx = content.indexOf(marker, currentIndex);
            if (idx !== -1 && (markerIndex === -1 || idx < markerIndex)) {
                markerIndex = idx;
                foundMarkerLength = marker.length;
            }
        }

        if (markerIndex === -1) break;

        // Find start of JSON
        const openBraceIndex = content.indexOf('{', markerIndex + foundMarkerLength);
        if (openBraceIndex === -1) break;

        // Count braces to find end
        let braceCount = 0;
        let closeBraceIndex = -1;
        let inString = false;
        let escape = false;

        for (let i = openBraceIndex; i < content.length; i++) {
            const char = content[i];

            if (escape) {
                escape = false;
                continue;
            }

            if (char === '\\') {
                escape = true;
                continue;
            }

            if (char === '"') {
                inString = !inString;
                continue;
            }

            if (!inString) {
                if (char === '{') braceCount++;
                if (char === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        closeBraceIndex = i;
                        break;
                    }
                }
            }
        }

        if (closeBraceIndex !== -1) {
            const jsonStr = content.substring(openBraceIndex, closeBraceIndex + 1);
            try {
                const style = JSON.parse(jsonStr);
                styles.push(style);
            } catch (e) {
                console.error('Failed to parse JSON block at index ' + openBraceIndex, e);
            }
            currentIndex = closeBraceIndex + 1;
        } else {
            console.error('Could not find closing brace for block at ' + markerIndex);
            currentIndex = openBraceIndex + 1;
        }
    }

    return styles;
}

function generateFile(styles) {
    const fileContent = `import { DoughStyleDefinition } from '@/types/styles';

export const STYLES_DATA: DoughStyleDefinition[] = ${JSON.stringify(styles, null, 4)};
`;

    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`Generated ${styles.length} styles in ${OUTPUT_FILE}`);
}

const styles = parseStyles();

// Post-processing fixes for specific styles
styles.forEach(style => {
    // Fix Oat Cookie structure to satisfy TS
    if (style.id === 'oat_cookie_dual') {
        style.technicalProfile.hydration = [0, 5]; // Dummy value
        style.technicalProfile.salt = [0, 0]; // Dummy
        // Merge US profile as default
        if (style.technicalProfile.us) {
            Object.assign(style.technicalProfile, style.technicalProfile.us);
        }
    }

    // Ensure mandatory fields
    if (!style.technicalProfile.hydration) style.technicalProfile.hydration = [0, 0];
    if (!style.technicalProfile.salt) style.technicalProfile.salt = [0, 0];

    // Normalize difficulty
    if (!style.technicalProfile.difficulty) {
        style.technicalProfile.difficulty = 'Medium';
    }

    // Normalize recommendedUse
    if (!style.technicalProfile.recommendedUse) {
        style.technicalProfile.recommendedUse = [];
    } else if (typeof style.technicalProfile.recommendedUse === 'string') {
        style.technicalProfile.recommendedUse = [style.technicalProfile.recommendedUse];
    }

    // Convert variations from string[] to StyleVariation[]
    if (style.variations && Array.isArray(style.variations) && style.variations.length > 0 && typeof style.variations[0] === 'string') {
        style.variations = style.variations.map((v, index) => ({
            id: `${style.id}_var_${index}`,
            title: v,
            description: `Variation of ${style.name}`,
            isNew: false
        }));
    } else if (!style.variations) {
        style.variations = [];
    }

    // Convert references from string[] to Reference[]
    if (style.references && Array.isArray(style.references) && style.references.length > 0 && typeof style.references[0] === 'string') {
        style.references = style.references.map(ref => ({
            source: ref,
            url: ''
        }));
    } else if (!style.references) {
        style.references = [];
    }

    // Add missing required fields
    if (style.isCanonical === undefined) style.isCanonical = true;
    if (!style.source) style.source = 'official';
    if (style.isPro === undefined) style.isPro = false;

    // Ensure description exists
    if (!style.description) {
        // If description is missing, try to use history or a default
        style.description = style.history ? style.history.substring(0, 150) + '...' : `Standard ${style.name} style definition.`;
    }

    // Ensure country exists (map from origin)
    if (!style.country && style.origin && style.origin.country) {
        style.country = style.origin.country;
    }

    // Fix category mapping
    if (style.category === 'cookie') {
        style.category = 'cookies_confectionery';
    }

    // Fix property names
    if (style.technicalProfile.potatoPercentage) {
        style.technicalProfile.potato = style.technicalProfile.potatoPercentage;
        delete style.technicalProfile.potatoPercentage;
    }
    if (style.origin && style.origin.city) {
        style.origin.region = style.origin.city;
        delete style.origin.city;
    }
    if (style.technicalProfile.levain) {
        style.technicalProfile.preferments = style.technicalProfile.levain;
        delete style.technicalProfile.levain;
    }
});

generateFile(styles);
