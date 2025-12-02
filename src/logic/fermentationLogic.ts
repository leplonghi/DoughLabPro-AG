import { FermentationTechnique, RecipeStyle, BakeType } from '../types';

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
        // Cookies, pâte sablée, brownies, and cakes use chemical leavening or no fermentation
        if (styleStr.includes('COOKIE') || styleStr.includes('PATE') || styleStr.includes('SABLEE') ||
            styleStr.includes('SHORTBREAD') || styleStr.includes('BROWNIE') || styleStr.includes('CAKE')) {
            return [FermentationTechnique.CHEMICAL, FermentationTechnique.NO_FERMENT];
        }
        // Enriched doughs like Brioche, Panettone, etc. use standard techniques
        return standardTechniques;
    }

    // All other types (pizzas, breads, flatbreads) allow all standard techniques
    // This includes:
    // - Pizzas: Neapolitan (traditionally Direct), Roman al Taglio (Biga), NY Style (Poolish)
    // - Breads: Baguette (Direct/Poolish), Ciabatta (Biga), Pain de Campagne (Levain)
    // - Flatbreads: Focaccia, Pita, etc.
    return standardTechniques;
}
