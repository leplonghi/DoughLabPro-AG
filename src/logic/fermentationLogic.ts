import { FermentationTechnique, RecipeStyle, BakeType } from '../types';

export function getAllowedFermentationTechniques(style: RecipeStyle | string, bakeType: BakeType): FermentationTechnique[] {
    // Default for most breads/pizzas
    const standardTechniques = [
        FermentationTechnique.DIRECT,
        FermentationTechnique.POOLISH,
        FermentationTechnique.BIGA,
        FermentationTechnique.SOURDOUGH
    ];

    if (bakeType === BakeType.SWEETS_PASTRY) {
        // Check if style string contains cookie or pate
        const styleStr = String(style).toUpperCase();
        if (styleStr.includes('COOKIE') || styleStr.includes('PATE') || styleStr.includes('SABLEE') || styleStr.includes('SHORTBREAD') || styleStr.includes('BROWNIE') || styleStr.includes('CAKE')) {
            return [FermentationTechnique.CHEMICAL, FermentationTechnique.NO_FERMENT];
        }
        // Brioche, etc.
        return standardTechniques;
    }

    // Specific overrides for strict styles if needed
    if (String(style).toUpperCase().includes('NEAPOLITAN')) {
        // Neapolitan usually allows Direct, Sourdough, Biga. Poolish is less common but technically possible in modern interpretations.
        return [FermentationTechnique.DIRECT, FermentationTechnique.SOURDOUGH, FermentationTechnique.BIGA, FermentationTechnique.POOLISH];
    }

    return standardTechniques;
}
