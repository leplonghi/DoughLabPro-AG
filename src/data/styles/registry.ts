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
import { burger_buns_enriched } from './bread/burger_buns_enriched';

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
        // Filter out ShokupanLegacy if it conflicts with new Asia Shokupan, or keep as variant
        Challah,
        BurgerBun,
        // ShokupanLegacy, // Commented out to prefer the new Asia module version if desired
        Panettone,

        // Sweets & Pastry
        NYChocolateChip,
        FrenchCroissant,
        CinnamonRoll,
        FudgyBrownie,

        // New Additions
        adaptV3ToLegacy(burger_buns_enriched)
    ]
].flat(2) as DoughStyleDefinition[];

// Deduplicate by ID using a Map (Last entry wins if IDs clash)

export const STYLES_MAP = new Map<string, DoughStyleDefinition>();

RAW_STYLES.forEach(style => {
    if (style && style.id) {
        STYLES_MAP.set(style.id, style);
    }
});

// Convert Map back to Array for the app to consume
export const STYLES_DATA = Array.from(STYLES_MAP.values()).sort((a, b) => {
    const nameA = a.name || '';
    const nameB = b.name || '';
    return nameA.localeCompare(nameB);
});

export const getStyleById = (id: string) => STYLES_MAP.get(id);

// Debug: Log the total count
console.log(`[Registry] Loaded ${STYLES_DATA.length} unique dough styles.`);

export const COMING_SOON_STYLES = [
    {
        id: 'sfogliatella',
        name: 'Sfogliatella Riccia',
        region: 'Italy',
        type: 'Pastry',
        image: '/images/styles/sfogliatella_hero.png',
        releaseDate: 'February 2026'
    },
];
