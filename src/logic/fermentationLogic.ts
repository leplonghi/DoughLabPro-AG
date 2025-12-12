import { FermentationTechnique, RecipeStyle, BakeType } from '../types';
import { useTranslation } from '@/i18n';

export function getAllowedFermentationTechniques(style: RecipeStyle | string, bakeType: BakeType): FermentationTechnique[] {
    // All standard fermentation techniques (Direct, Poolish, Biga, Sourdough) are allowed
    // for pizzas, breads, and enriched doughs by default
    const standardTechniques = [
        FermentationTechnique.DIRECT,
        FermentationTechnique.POOLISH,
        FermentationTechnique.BIGA,
        FermentationTechnique.SOURDOUGH
    ];

    // Only restrict fermentation techniques for specific pastry items
    if (bakeType === BakeType.SWEETS_PASTRY) {
        const styleStr = String(style).toUpperCase();

        // Whitelist: Styles that explicitly use yeast
        // Brioche, Panettone, Croissant, Danish, Donut, Savarin, Baba, Colomba, Challah, Babka
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

    // All other types (pizzas, breads, flatbreads) allow all standard techniques
    return standardTechniques;
}
