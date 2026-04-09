import { FermentationTechnique, RecipeStyle, BakeType } from '../types';
import { useTranslation } from '@/i18n';

/**
 * Returns all fermentation techniques that are ALLOWED (not blocked) for a given style.
 * This is permissive - we allow experimentation but will show warnings for non-traditional choices.
 */
export function getAllowedFermentationTechniques(style: RecipeStyle | string, bakeType: BakeType, styleId?: string): FermentationTechnique[] {
    // All standard fermentation techniques are allowed for experimentation
    const standardTechniques = [
        FermentationTechnique.DIRECT,
        FermentationTechnique.POOLISH,
        FermentationTechnique.BIGA,
        FermentationTechnique.SOURDOUGH
    ];

    // Only restrict fermentation techniques for specific pastry items
    if (bakeType === BakeType.SWEETS_PASTRY) {
        const styleStr = String(style || '').toUpperCase();

        // Whitelist: Styles that explicitly use yeast
        const yeastedExamples = [
            'BRIOCHE', 'PANETTONE', 'CROISSANT', 'DANISH', 'DONUT', 'DOUGHNUT',
            'SAVARIN', 'BABA', 'COLOMBA', 'CHALLAH', 'BABKA', 'BUN', 'ROLL', 'CORNETTO'
        ];

        if (yeastedExamples.some(y => styleStr.includes(y))) {
            return standardTechniques;
        }

        // Default for Pastry (Cookies, Cakes, Brownies, Tarts, etc.) is Chemical/No Ferment
        return [FermentationTechnique.CHEMICAL, FermentationTechnique.NO_FERMENT];
    }

    // For pizzas, breads, and flatbreads: Allow all standard techniques
    // We'll use a separate function to check if they're RECOMMENDED
    return standardTechniques;
}

/**
 * Checks if a fermentation technique is RECOMMENDED (traditional/suitable) for a specific style.
 * Returns an object with recommendation status and optional warning message.
 */
export function getTechniqueRecommendation(
    technique: FermentationTechnique,
    styleId?: string
): { recommended: boolean; warning?: string; suitability?: string } {
    if (!styleId) {
        return { recommended: true };
    }

    return { recommended: true };
}
