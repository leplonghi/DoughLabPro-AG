import { DoughStyleDefinition } from '@/types/styles';

// --- REGIONAL COLLECTIONS (V2 Standard) ---
import { italyStyles } from './regions/italy';
import { americasStyles } from './regions/americas';
import { europeStyles } from './regions/europe';

// --- SUPPLEMENTARY LIBRARY MODULES ---
// These contain styles not yet migrated to a specific Region file or representing Global/Other categories.
import { Challah, BurgerBun, Shokupan, Panettone } from './library/bread/enriched';
import { NYChocolateChip, FrenchCroissant, CinnamonRoll, FudgyBrownie } from './library/pastry/sweets';

/**
 * THE CENTRAL REGISTRY
 * Imports all modules and combines them into the master list.
 */

// Flatten all sources into one massive list
const RAW_STYLES: DoughStyleDefinition[] = [
    italyStyles,
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
