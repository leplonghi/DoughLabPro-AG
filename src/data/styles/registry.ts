import { DoughStyleDefinition, RecipeStyle, StyleTechnicalProfile } from '@/types/styles';
import { DoughStyle } from '@/types/dough';

// --- REGIONAL COLLECTIONS (V2 Standard) ---
import { italianStyles } from './regions/italy';
import { americasStyles } from './regions/americas';
import { europeStyles } from './regions/europe';

// --- SUPPLEMENTARY LIBRARY MODULES ---
import { Challah, BurgerBun, Shokupan, Panettone } from './library/bread/enriched';
import { NYChocolateChip, FrenchCroissant, CinnamonRoll, FudgyBrownie } from './library/pastry/sweets';

/**
 * ADAPTER: Convert new DoughStyle (italy.ts) to DoughStyleDefinition (App Legacy)
 * This prevents white-screen crashes due to schema mismatch.
 */
function adaptNewStyleToLegacy(style: DoughStyle): DoughStyleDefinition {
    // Extract salt range from base_formula if possible, else default
    const saltIng = style.base_formula?.find(i => i.name.toLowerCase().includes('salt'));
    const saltPct = saltIng ? saltIng.percentage : 2.5;

    // Map process steps to fermentationSteps string array
    const fermentationSteps = style.process?.map(p =>
        `${p.title}: ${p.action} [Science: ${p.science}]`
    ) || [];

    const techProfile: StyleTechnicalProfile = {
        hydration: [style.specs.hydration.min, style.specs.hydration.max],
        ovenTemp: [style.specs.ovenTemp.min, style.specs.ovenTemp.max],
        salt: [saltPct, saltPct], // Single value to range
        fermentationSteps: fermentationSteps,
        difficulty: style.specs.difficulty,
        recommendedUse: [], // Placeholder
        oil: [0, 0], // Default
        sugar: [0, 0], // Default
        flourStrength: style.scientificProfile?.flourRheology || "W280"
    };

    return {
        id: style.id,
        name: style.name,
        category: style.category.toLowerCase() as any, // "Pizza" -> "pizza"
        recipeStyle: RecipeStyle.NEAPOLITAN, // Fallback, should be refined per style
        origin: {
            country: style.region,
            region: style.subRegion,
            period: "Classic"
        },
        description: style.description,
        history: style.history_context,
        difficulty: style.specs.difficulty,
        fermentationType: 'direct', // Defaulting
        technicalProfile: techProfile,
        tags: style.tags,
        pairings: { canonical: [], modern: [], regional: [] }, // Empty for now
        watchouts: [],
        notes: [style.scientificProfile?.processScience || ""],
        references: style.references?.map(r => ({ source: r })) || [],
        isPro: false,
        source: 'official',
        education: style.education, // Pass through rich content
        deepDive: style.deepDive, // Pass through deep dive module
        createdAt: new Date().toISOString(),
        releaseDate: new Date().toISOString(),
        images: style.images || {
            hero: "/images/styles/placeholder_hero.jpg",
            dough: "/images/styles/placeholder_dough.jpg",
            crumb: "/images/styles/placeholder_crumb.jpg"
        }
    };
}

const italyStylesAdapted = italianStyles.map(adaptNewStyleToLegacy);

/**
 * THE CENTRAL REGISTRY
 * Imports all modules and combines them into the master list.
 */

// Flatten all sources into one massive list
const RAW_STYLES: DoughStyleDefinition[] = [
    italyStylesAdapted,
    americasStyles,
    europeStyles,
    [
        // Enriched Breads
        Challah,
        BurgerBun,
        Shokupan,
        Panettone,

        // Sweets & Pastry
        NYChocolateChip,
        FrenchCroissant,
        CinnamonRoll,
        FudgyBrownie
    ]
].flat(2) as DoughStyleDefinition[];

// Deduplicate by ID using a Map (Last entry wins if IDs clash)
export const STYLES_MAP = new Map<string, DoughStyleDefinition>();

RAW_STYLES.forEach(style => {
    STYLES_MAP.set(style.id, style);
});

// Convert Map back to Array for the app to consume
export const STYLES_DATA = Array.from(STYLES_MAP.values()).sort((a, b) => a.name.localeCompare(b.name));

export const getStyleById = (id: string) => STYLES_MAP.get(id);

// Debug: Log the total count (visible in console)
console.log(`[Registry] Loaded ${STYLES_DATA.length} unique dough styles.`);
