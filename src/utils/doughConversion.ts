import { DoughStyleDefinition } from '@/types/styles';
import { DoughConfig, FermentationTechnique, YeastType, BakeType, IngredientConfig, RecipeStyle } from '@/types';

export function convertStyleToDoughConfig(style: DoughStyleDefinition): Partial<DoughConfig> {
    // Determine BakeType based on category
    let bakeType = BakeType.PIZZAS;
    const cat = style.category;
    if (cat === 'bread' || cat === 'enriched_bread' || cat === 'burger_bun' || cat === 'flatbread') {
        bakeType = BakeType.BREADS_SAVORY;
    } else if (cat === 'pastry' || cat === 'cookie') {
        bakeType = BakeType.SWEETS_PASTRY;
    }

    // Determine RecipeStyle (Heuristic mapping)
    let recipeStyle = RecipeStyle.NEAPOLITAN; // Default fallback
    const id = style.id.toLowerCase();

    if (id.includes('neapolitan')) recipeStyle = RecipeStyle.NEAPOLITAN;
    else if (id.includes('new_york') || id.includes('ny_')) recipeStyle = RecipeStyle.NEW_YORK;
    else if (id.includes('roman')) recipeStyle = RecipeStyle.ROMAN;
    else if (id.includes('detroit')) recipeStyle = RecipeStyle.DETROIT;
    else if (id.includes('sicilian')) recipeStyle = RecipeStyle.SICILIANA;
    else if (id.includes('focaccia')) recipeStyle = RecipeStyle.FOCACCIA;
    else if (id.includes('baguette')) recipeStyle = RecipeStyle.BAGUETTE;
    else if (id.includes('ciabatta')) recipeStyle = RecipeStyle.CIABATTA;
    else if (id.includes('brioche')) recipeStyle = RecipeStyle.BRIOCHE;
    else if (id.includes('burger')) recipeStyle = RecipeStyle.BURGER_BUN;
    else if (id.includes('sourdough')) recipeStyle = RecipeStyle.SOURDOUGH;
    else if (id.includes('cookie')) recipeStyle = RecipeStyle.COOKIES;

    // Determine Fermentation Technique
    let fermentationTechnique = FermentationTechnique.DIRECT;
    let yeastType = YeastType.IDY;
    let yeastPercentage = 0.5;

    // Map new fermentationType to FermentationTechnique
    switch (style.fermentationType) {
        case 'preferment':
            // Heuristic to guess poolish vs biga if not specified
            // Default to POOLISH as it's more common for general preferments unless specified
            fermentationTechnique = FermentationTechnique.POOLISH;
            if (style.technicalProfile.preferment?.toLowerCase().includes('biga')) {
                fermentationTechnique = FermentationTechnique.BIGA;
            }
            break;
        case 'levain':
            fermentationTechnique = FermentationTechnique.SOURDOUGH;
            yeastType = YeastType.SOURDOUGH_STARTER;
            yeastPercentage = 20;
            break;
        case 'cold':
            // Cold fermentation is usually direct or poolish based, but we'll default to direct with cold proof logic if we had it
            // For now, map to DIRECT but maybe with notes?
            // Actually, if it's cold, it's often a technique, not a preferment type.
            // Let's check if there's a preferment mentioned in technicalProfile
            if (style.technicalProfile.preferment) {
                fermentationTechnique = FermentationTechnique.POOLISH; // Assumption
            } else {
                fermentationTechnique = FermentationTechnique.DIRECT;
            }
            break;
        case 'direct':
        default:
            fermentationTechnique = FermentationTechnique.DIRECT;
            break;
    }

    // Calculate averages from ranges
    const hydration = style.technicalProfile.hydration
        ? (style.technicalProfile.hydration[0] + style.technicalProfile.hydration[1]) / 2
        : 65; // Default

    const salt = style.technicalProfile.salt
        ? (style.technicalProfile.salt[0] + style.technicalProfile.salt[1]) / 2
        : 2;

    const oil = style.technicalProfile.oil
        ? (style.technicalProfile.oil[0] + style.technicalProfile.oil[1]) / 2
        : 0;

    const sugar = style.technicalProfile.sugar
        ? (style.technicalProfile.sugar[0] + style.technicalProfile.sugar[1]) / 2
        : 0;

    // Derive baking temp from ovenTemp range
    const bakingTempC = style.technicalProfile.ovenTemp
        ? Math.round((style.technicalProfile.ovenTemp[0] + style.technicalProfile.ovenTemp[1]) / 2)
        : 250;

    // Generate Ingredients
    const ingredients: IngredientConfig[] = [
        { id: 'flour', name: 'Flour', type: 'solid', role: 'flour', bakerPercentage: 100 },
        { id: 'water', name: 'Water', type: 'liquid', role: 'water', bakerPercentage: hydration },
        { id: 'salt', name: 'Salt', type: 'solid', role: 'salt', bakerPercentage: salt },
        { id: 'yeast', name: 'Yeast', type: 'solid', role: 'yeast', bakerPercentage: yeastPercentage }
    ];

    if (oil > 0) {
        ingredients.push({ id: 'oil', name: 'Oil/Fat', type: 'liquid', role: 'fat', bakerPercentage: oil });
    }
    if (sugar > 0) {
        ingredients.push({ id: 'sugar', name: 'Sugar', type: 'solid', role: 'sugar', bakerPercentage: sugar });
    }

    return {
        bakeType,
        recipeStyle,
        baseStyleName: style.name,
        selectedStyleId: style.id,
        hydration,
        salt,
        oil,
        sugar,
        bakingTempC,
        fermentationTechnique,
        yeastType,
        yeastPercentage,
        ingredients,
        // Default values for other fields
        numPizzas: 4,
        doughBallWeight: 250,
        scale: 1,
        prefermentFlourPercentage: 20, // Default if preferment used
        notes: `Loaded from style: ${style.name}\n\n${style.description}`
    };
}
