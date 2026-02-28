/**
 * generateStylesData.ts
 *
 * Build script helper — run via: npx tsx src/data/content/generateStylesData.ts
 * Produces styles.index.json and styles.full.json
 */

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

const outDir = path.resolve(__dirname, 'styles');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// 1. Generate Index
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
fs.writeFileSync(path.join(outDir, 'styles.index.json'), JSON.stringify(index, null, 2));

// 2. Generate Full
const full = STYLES_DATA;
fs.writeFileSync(path.join(outDir, 'styles.full.json'), JSON.stringify(full, null, 2));

// 3. Generate Aliases (dummy or basic aliases)
const aliases = {
    // Example: "old_neapolitan" : "neapolitan_avpn_classic"
};
if (!fs.existsSync(path.join(outDir, 'aliases.json'))) {
    fs.writeFileSync(path.join(outDir, 'aliases.json'), JSON.stringify(aliases, null, 2));
}

// 4. Generate Content Version
const version = { version: "1.0.0", date: new Date().toISOString() };
if (!fs.existsSync(path.join(outDir, 'content.version.json'))) {
    fs.writeFileSync(path.join(outDir, 'content.version.json'), JSON.stringify(version, null, 2));
}

console.log(`[StylesData] Written data to ${outDir}`);

