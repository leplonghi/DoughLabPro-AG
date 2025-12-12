import { DoughStyleDefinition, RecipeStyle, StyleCategory, BakeType } from '@/types';
import { DoughStylePreset } from '@/types';
import { STYLES_DATA } from '@/data/styles/registry';
import { useTranslation } from '@/i18n';

// Helper to calculate average of a range tuple [min, max]
const getAvg = (range: [number, number] | undefined | null): number => {
    if (!range || !Array.isArray(range) || range.length < 2) return 0;
    return (range[0] + range[1]) / 2;
};

// Map generic categories to Calculator BakeTypes
const getBakeTypeFromCategory = (category: StyleCategory): BakeType => {
    switch (category) {
        case 'pizza': return BakeType.PIZZAS;
        case 'bread':
        case 'enriched_bread':
        case 'burger_bun':
        case 'flatbread': return BakeType.BREADS_SAVORY;
        case 'pastry':
        case 'cookie':
        case 'cookies_confectionery': return BakeType.SWEETS_PASTRY;
        default: return BakeType.PIZZAS;
    }
};

// Map category to a fallback RecipeStyle if missing
const inferRecipeStyle = (style: DoughStyleDefinition): RecipeStyle => {
    if (style.recipeStyle) return style.recipeStyle;

    // Fallback logic based on IDs or Categories
    if (style.id.includes('neapolitan')) return RecipeStyle.NEAPOLITAN;
    if (style.id.includes('ny_')) return RecipeStyle.NEW_YORK;
    if (style.id.includes('baguette')) return RecipeStyle.BAGUETTE;

    console.warn(`[PresetLogic] Style ${style.id} missing RecipeStyle. Defaulting to NEAPOLITAN.`);
    return RecipeStyle.NEAPOLITAN;
};

export const generatePresetsIds = (): string[] => STYLES_DATA.map(s => s.id);

/**
 * Generates Calculator Presets dynamically from the Styles Registry.
 * This ensures the calculator always uses the latest Single Source of Truth.
 */
export const getDynamicPresets = (): DoughStylePreset[] => {
    return STYLES_DATA.map(style => {
        const tech = style.technicalProfile;

        return {
            id: style.id,
            name: style.name,
            type: getBakeTypeFromCategory(style.category),
            recipeStyle: inferRecipeStyle(style),
            defaultHydration: getAvg(tech.hydration),
            defaultSalt: getAvg(tech.salt),
            defaultOil: getAvg(tech.oil || tech.fat || [0, 0]),
            defaultSugar: getAvg(tech.sugar || [0, 0]),
            region: style.origin?.country || style.country || 'Universal',
            description: style.description || '',
        };
    });
};

// Export a static list for immediate consumption (calculated at module load time)
export const DYNAMIC_PRESETS = getDynamicPresets();
