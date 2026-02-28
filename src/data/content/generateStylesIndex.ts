/**
 * generateStylesIndex.ts
 *
 * Build script helper — run via: npx tsx src/data/content/generateStylesIndex.ts
 * Produces src/data/content/styles.index.json from the registry.
 *
 * NOT imported at runtime. Runtime reads styles.index.json directly.
 */

// This is a Node.js script — not a browser module.
// For development use only.

import { STYLES_DATA } from '../styles/registry';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRO_STYLE_IDS = new Set<string>([
    'sf_sourdough',
    'new_york_artisan_cold_ferment',
    'neapolitan_contemporary_high_hydration',
    'roman_pinsa_modern',
    'croissant_francais',
    'panettone_milanese',
    'colomba_pasquale',
    'babka_chocolate',
    'pain_de_mie_pullman',
]);

const index = STYLES_DATA.map(style => {
    const hydMin = style.technicalProfile?.hydration?.[0] || 0;
    const hydMax = style.technicalProfile?.hydration?.[1] || 0;
    const hydrationMid = Math.round((hydMin + hydMax) / 2);

    return {
        id: style.id,
        name: style.name,
        category: style.category,
        family: style.family ?? null,
        tags: style.tags ?? [],
        proGate: style.isPro === true || PRO_STYLE_IDS.has(style.id),
        hasImage: !!(style.images?.hero && !style.images.hero.includes('placeholder')),
        hydrationMid,
        difficulty: style.technicalProfile?.difficulty ?? style.difficulty,
        fermentationType: style.fermentationType,
        releaseDate: style.releaseDate ?? style.createdAt ?? '2025-01-01',
    };
});

const outPath = path.resolve(__dirname, 'styles.index.json');
fs.writeFileSync(outPath, JSON.stringify(index, null, 2));
console.log(`[StylesIndex] Written ${index.length} entries to ${outPath}`);
