import { DoughStyleDefinition, RecipeStyle, StyleTechnicalProfile } from '@/types/styles';
import { DoughStyle } from '@/types/dough';

// --- REGIONAL COLLECTIONS (V2 Standard - New Schema) ---
import { italianStyles } from './regions/italy';
import { europeStyles } from './regions/europe';
import { latamStyles } from './regions/latam';
import { asiaStyles } from './regions/asia';
import { middleEastStyles } from './regions/middle_east';

// --- REGIONAL COLLECTIONS (V1 Legacy - Old Schema) ---
import { northAmericaStyles as americasStyles } from './regions/north_america';

// --- SUPPLEMENTARY LIBRARY MODULES ---
import { Challah, BurgerBun, Shokupan as ShokupanLegacy, Panettone } from './library/bread/enriched';
import { NYChocolateChip, FrenchCroissant, CinnamonRoll, FudgyBrownie } from './library/pastry/sweets';
import { shokupan_milk_bread } from './bread/shokupan_milk_bread';
import { pretzel_dough_classic } from './bread/pretzel_dough_classic';
import { pain_de_mie_pullman } from './bread/pain_de_mie_pullman';
import { ciabatta_high_hydration } from './bread/ciabatta_high_hydration';
import { challah_braided } from './bread/challah_braided';
import { colomba_pasquale } from './pastry/colomba_pasquale';

// --- OLD-SCHEMA V2 STYLES (StyleDefinition — adapted via adaptV3ToLegacy) ---
import { berliner_bomboloni } from './pastry/berliner_bomboloni';
import { malasadas_fried_dough } from './pastry/malasadas_fried_dough';
import { pain_au_chocolat } from './pastry/pain_au_chocolat';
import { pain_aux_raisins } from './pastry/pain_aux_raisins';
import { stollen_german } from './pastry/stollen_german';
import { sweet_rolls_neutral } from './pastry/sweet_rolls_neutral';
import { injera_flatbread } from './bread/injera_flatbread';
import { pane_pugliese } from './bread/pane_pugliese';
import { seventy_percent_rye_sour } from './bread/seventy_percent_rye_sour';
import { whole_wheat_100 } from './bread/whole_wheat_100';

// --- SEED IMPORTS (status: 'seed' — not shown in public catalog) ---
import { turkishPide } from './pizza/turkish_pide';
import { sfincioneSiciliano } from './pizza/sfincione_siciliano';
import { kaisersemmelAustrian } from './bread/kaisersemmel_austrian';
import { turkishSimit } from './bread/turkish_simit';
import { kouignAmannBreton } from './pastry/kouign_amann_breton';
import { pastelDeNataPortuguese } from './pastry/pastel_de_nata_portuguese';
import { pateAChouxClassic } from './confectionery/pate_a_choux_classic';
import { brazilian_cheese_bread } from './gluten_free/brazilian_cheese_bread';

// --- GOLD STANDARD BATCH IMPORTS (V3 schema, DoughStyleDefinition) ---
import * as pizzaStyles from './pizza/index';
import * as breadStyles from './bread/index';
import * as pastryStyles from './pastry/index';
import * as confectioneryStyles from './confectionery/index';
import * as bunsStyles from './buns/index';

const allPizzaStyles = Object.values(pizzaStyles) as DoughStyleDefinition[];
const allBreadStyles = Object.values(breadStyles) as DoughStyleDefinition[];
const allPastryStyles = Object.values(pastryStyles) as DoughStyleDefinition[];
const allConfectioneryStyles = Object.values(confectioneryStyles) as DoughStyleDefinition[];
const allBunsStyles = Object.values(bunsStyles) as DoughStyleDefinition[];

/**
 * ADAPTER: Convert new DoughStyle to DoughStyleDefinition (App Legacy)
 * This prevents white-screen crashes due to schema mismatch.
 */
function adaptNewStyleToLegacy(style: DoughStyle): DoughStyleDefinition {
    // Extract salt range from base_formula if possible, else default
    const saltIng = style.base_formula?.find(i =>
        i.name.toLowerCase().includes('salt') ||
        i.name.toLowerCase().includes('sal')
    );
    const saltPct = saltIng ? saltIng.percentage : 2.0;

    // Map process steps to fermentationSteps string array
    const fermentationSteps = style.process?.map(p =>
        `${p.title}: ${p.action} [Science: ${p.science || ''}]`
    ) || [];


    const techProfile: StyleTechnicalProfile = {
        hydration: [style.specs?.hydration?.min || 60, style.specs?.hydration?.max || 70],
        ovenTemp: [style.specs?.ovenTemp?.min || 200, style.specs?.ovenTemp?.max || 250],
        salt: [saltPct, saltPct],
        fermentationSteps: fermentationSteps,
        difficulty: style.specs?.difficulty || 'Medium',
        recommendedUse: [],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: style.scientificProfile?.flourRheology?.w_index || "Standard",
        ballWeight: style.specs?.ballWeight
    };

    // Safely handle category mapping
    const categoryLower = style.category?.toLowerCase() || 'other';

    // Map v2 Categories to v3 StyleCategory IDs
    const catMap: Record<string, any> = {
        'pizza': 'pizza',
        'bread': 'bread',
        'flatbread': 'flatbread',
        'enriched': 'enriched_bread',
        'snack': 'other',
        'buns': 'burger_bun',
        'pastry': 'pastry',
        'soft bread': 'enriched_bread'
    };

    const validCategory = catMap[categoryLower] || 'bread';

    // Map V2 Method (DIRECT, BIGA, etc) to Legacy 'fermentationType'
    let fermType: 'direct' | 'preferment' | 'levain' | 'cold' = 'direct';
    const v2Method = style.recipeStyle ? style.recipeStyle.toString() : 'DIRECT';

    if (v2Method === 'BIGA' || v2Method === 'POOLISH') fermType = 'preferment';
    if (v2Method === 'SOURDOUGH') fermType = 'levain';
    if (style.specs?.fermentationTime?.includes('48h') || style.specs?.fermentationTime?.includes('72h')) fermType = 'cold';

    return {
        id: style.id,
        name: style.name,
        category: validCategory,
        recipeStyle: style.recipeStyle, // Directly map the enum

        origin: {
            country: style.region,
            region: style.subRegion || style.region,
            period: "Classic"
        },
        description: style.description,
        history: style.history_context,
        difficulty: style.specs?.difficulty || 'Medium',
        fermentationType: fermType,
        technicalProfile: techProfile,

        scientificProfile: style.scientificProfile as any, // Cast to any or match types strictly if possible
        tags: style.tags || [],
        pairings: { canonical: [], modern: [], regional: [] },
        watchouts: [],
        notes: [style.scientificProfile?.processScience || style.scientificProfile?.fermentationScience?.enzymatic_activity || ""],

        references: style.references?.map(r => ({ source: r })) || [],
        isPro: false,
        source: 'official',
        education: style.education,
        deepDive: style.deepDive,
        createdAt: new Date().toISOString(),
        releaseDate: new Date().toISOString(),
        images: style.images || {
            hero: "/images/styles/placeholder-dough.png",
            dough: "/images/styles/placeholder-dough.png",
            crumb: "/images/styles/placeholder-dough.png"
        },
        base_formula: style.base_formula
    };
}

/**
 * ADAPTER V3: Convert StyleDefinition (Gold Standard) to DoughStyleDefinition (App Legacy)
 */
function adaptV3ToLegacy(style: any): DoughStyleDefinition {
    return {
        id: style.id,
        name: style.title || style.name || 'Unknown Style',
        category: style.category?.toLowerCase() || 'bread',
        recipeStyle: style.recipeStyle,
        origin: {
            country: style.origin?.country || 'Unknown',
            region: style.origin?.region || '',
            period: style.origin?.period || ''
        },
        description: style.intro || style.description || '',
        history: style.history || '',
        difficulty: style.technicalProfile?.difficulty || 'Medium',
        fermentationType: style.technicalProfile?.fermentation?.coldRetard ? 'cold' : 'direct',
        technicalProfile: {
            hydration: style.technicalProfile?.hydrationRange || [60, 70],
            salt: style.technicalProfile?.saltRange || [2, 2],
            oil: style.technicalProfile?.oilRange || [0, 0],
            sugar: style.technicalProfile?.sugarRange || [0, 0],
            flourStrength: style.technicalProfile?.flourStrength || 'Standard',
            ovenTemp: style.technicalProfile?.oven?.temperatureC || [200, 250],
            recommendedUse: style.technicalProfile?.recommendedUse || [],
            difficulty: style.technicalProfile?.difficulty || 'Medium',
            ballWeight: style.technicalProfile?.ballWeight,
            fermentationSteps: []
        },
        tags: style.tags || [],
        notes: style.notes || [],
        references: style.references || [],
        isPro: false,
        source: 'official',
        createdAt: new Date().toISOString(),
        releaseDate: new Date().toISOString(),
        images: style.images?.[0] ? {
            hero: style.images[0],
            dough: style.images[1] || style.images[0],
            crumb: style.images[2] || style.images[0]
        } : {
            hero: "/images/styles/placeholder-dough.png",
            dough: "/images/styles/placeholder-dough.png",
            crumb: "/images/styles/placeholder-dough.png"
        }
    };
}

// consolidate all V2 styles
const allNewStyles: DoughStyle[] = [
    ...italianStyles,
    ...europeStyles,
    ...latamStyles,
    ...asiaStyles,
    ...middleEastStyles
];

const adaptedStyles = allNewStyles.map(adaptNewStyleToLegacy);

/**
 * THE CENTRAL REGISTRY
 * Imports all modules and combines them into the master list.
 */

// Flatten all sources into one massive list
const RAW_STYLES: DoughStyleDefinition[] = [
    adaptedStyles,
    americasStyles,
    [
        // Enriched Breads (Legacy imports)
        Panettone,

        // Sweets & Pastry
        NYChocolateChip,
        FrenchCroissant,
        CinnamonRoll,
        FudgyBrownie,

        // New Additions
        shokupan_milk_bread,
        pain_de_mie_pullman,
        ciabatta_high_hydration,
        challah_braided,
        pretzel_dough_classic,
        adaptV3ToLegacy(colomba_pasquale),

        // Old-schema V2 styles — adapted to DoughStyleDefinition
        adaptV3ToLegacy(berliner_bomboloni),
        adaptV3ToLegacy(malasadas_fried_dough),
        adaptV3ToLegacy(pain_au_chocolat),
        adaptV3ToLegacy(pain_aux_raisins),
        adaptV3ToLegacy(stollen_german),
        adaptV3ToLegacy(sweet_rolls_neutral),
        adaptV3ToLegacy(injera_flatbread),
        adaptV3ToLegacy(pane_pugliese),
        adaptV3ToLegacy(seventy_percent_rye_sour),
        adaptV3ToLegacy(whole_wheat_100),

        // Seed styles (status: 'seed' — filtered below)
        turkishPide,
        sfincioneSiciliano,
        kaisersemmelAustrian,
        turkishSimit,
        kouignAmannBreton,
        pastelDeNataPortuguese,
        pateAChouxClassic,
        brazilian_cheese_bread,
    ],
    // --- GOLD STANDARD V3: batch-loaded from index files ---
    allPizzaStyles,
    allBreadStyles,
    allPastryStyles,
    allConfectioneryStyles,
    allBunsStyles,
].flat(2) as DoughStyleDefinition[];

/**
 * V1 region entries superseded by Gold Standard (V3) equivalents.
 * These IDs are excluded from STYLES_DATA to prevent duplicate catalog entries.
 * When a new Gold Standard file replaces a V1 entry, add the old V1 ID here.
 */
const SUPERSEDED_V1_IDS = new Set<string>([
    // Pizza — replaced by pizza/*.ts Gold Standard files
    'pizza-napoletana',        // → neapolitan_avpn_classic
    'pizza-teglia-romana',     // → roman_teglia_pan
    'pizza-tonda-romana',      // → roman_scrocchiarella
    'sfincione-palermitano',   // → sfincione_siciliano (seed, will promote)

    // Italian Bread — replaced by bread/*.ts Gold Standard files
    'ciabatta-classic',        // → ciabatta_high_hydration
    'focaccia-genovese',       // → focaccia_genovese (bread/)

    // European Bread — replaced by bread/*.ts Gold Standard files
    'baguette-tradition',      // → baguette_tradition_francaise
]);

// Deduplicate by ID using a Map (Last entry wins if IDs clash)

export const STYLES_MAP = new Map<string, DoughStyleDefinition>();

RAW_STYLES.forEach(style => {
    if (style && style.id) {
        STYLES_MAP.set(style.id, style);
    }
});

// Convert Map back to Array for the app to consume
// Seeds (status: 'seed') and superseded V1 entries are excluded from the public catalog
export const STYLES_DATA = Array.from(STYLES_MAP.values())
    .filter(s => s.status !== 'seed' && !SUPERSEDED_V1_IDS.has(s.id))
    .sort((a, b) => {
        const nameA = a.name || '';
        const nameB = b.name || '';
        return nameA.localeCompare(nameB);
    });

/** All styles including seeds — for admin/pipeline use only */
export const STYLES_DATA_ALL = Array.from(STYLES_MAP.values()).sort((a, b) =>
    (a.name || '').localeCompare(b.name || '')
);

export const STYLES_DATA_SEEDS = Array.from(STYLES_MAP.values())
    .filter(s => s.status === 'seed');

export const getStyleById = (id: string) => STYLES_MAP.get(id);

// Debug: Log the total count
console.log(`[Registry] Loaded ${STYLES_DATA.length} unique dough styles.`);

export const COMING_SOON_STYLES = [
    // ── Pastry Europeu ───────────────────────────────────────────────────────
    {
        id: 'sfogliatella_riccia',
        name: 'Sfogliatella Riccia',
        region: 'Italy',
        type: 'Pastry',
        image: '/images/styles/sfogliatella_hero.png',
        releaseDate: 'Q2 2026',
        teaser: 'Pastel napolitano em camadas com ricota e semolina',
    },
    {
        id: 'kouign_amann',
        name: 'Kouign-Amann',
        region: 'France',
        type: 'Pastry',
        image: '/images/styles/kouign_hero.png',
        releaseDate: 'Q2 2026',
        teaser: 'Cake de manteiga caramelizada da Bretanha',
    },
    {
        id: 'pastel_de_nata',
        name: 'Pastel de Nata',
        region: 'Portugal',
        type: 'Pastry',
        image: '/images/styles/nata_hero.png',
        releaseDate: 'Q3 2026',
        teaser: 'Massa folhada com creme de ovo caramelizado',
    },
    // ── Bread Internacional ──────────────────────────────────────────────────
    {
        id: 'turkish_pide',
        name: 'Turkish Pide',
        region: 'Turkey',
        type: 'Bread',
        image: '/images/styles/pide_hero.png',
        releaseDate: 'Q2 2026',
        teaser: 'Flatbread fermentado em formato de barco com coberturas',
    },
    {
        id: 'georgian_khachapuri',
        name: 'Khachapuri Adjarian',
        region: 'Georgia',
        type: 'Bread',
        image: '/images/styles/khachapuri_hero.png',
        releaseDate: 'Q3 2026',
        teaser: 'Pão recheado com queijo suluguni e gema de ovo',
    },
    {
        id: 'pain_epi',
        name: 'Pain Épi',
        region: 'France',
        type: 'Bread',
        image: '/images/styles/pain_epi_hero.png',
        releaseDate: 'Q3 2026',
        teaser: 'Baguette espiralada em forma de espiga de trigo',
    },
    // ── Pizza Especial ───────────────────────────────────────────────────────
    {
        id: 'pizza_romana_al_taglio',
        name: 'Pizza Romana al Taglio',
        region: 'Italy',
        type: 'Pizza',
        image: '/images/styles/al_taglio_hero.png',
        releaseDate: 'Q3 2026',
        teaser: 'Pizza em assadeira retangular, alta hidratação, vendida ao corte',
    },
    // ── Brasil ───────────────────────────────────────────────────────────────
    {
        id: 'broa_de_milho',
        name: 'Broa de Milho',
        region: 'Brazil',
        type: 'Bread',
        image: '/images/styles/broa_hero.png',
        releaseDate: 'Q4 2026',
        teaser: 'Pão denso de farinha de milho — tradicional do Sul e Minas',
    },
];
