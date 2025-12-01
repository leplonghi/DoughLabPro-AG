import { DoughStyleDefinition } from '@/types/styles';
import { DoughConfig, FermentationTechnique, YeastType, BakeType, IngredientConfig } from '@/types';

export function convertStyleToDoughConfig(style: DoughStyleDefinition): Partial<DoughConfig> {
    // Determine BakeType based on category
    let bakeType = BakeType.PIZZAS;
    const cat = style.category;
    if (cat === 'bread' || cat === 'enriched_bread' || cat === 'burger_bun' || cat === 'flatbread') {
        bakeType = BakeType.BREADS_SAVORY;
    } else if (cat === 'pastry' || cat === 'cookies_confectionery') {
        bakeType = BakeType.SWEETS_PASTRY;
    }

    // Determine Fermentation Technique
    let fermentationTechnique = FermentationTechnique.DIRECT;
    let yeastType = YeastType.IDY;
    let yeastPercentage = 0.5;

    // Use explicit technique if available, otherwise infer
    if (style.technical?.fermentationTechnique) {
        fermentationTechnique = style.technical.fermentationTechnique;
    } else {
        const fermentation = style.technicalProfile?.fermentation?.bulk?.toLowerCase() || '';
        const prefermentDesc = style.technicalProfile?.prefermentDescription?.toLowerCase() || '';
        const combinedText = fermentation + ' ' + prefermentDesc;

        if (combinedText.includes('poolish')) {
            fermentationTechnique = FermentationTechnique.POOLISH;
        } else if (combinedText.includes('biga')) {
            fermentationTechnique = FermentationTechnique.BIGA;
        } else if (combinedText.includes('sourdough') || combinedText.includes('levain') || combinedText.includes('starter')) {
            fermentationTechnique = FermentationTechnique.SOURDOUGH;
            yeastType = YeastType.SOURDOUGH_STARTER;
            yeastPercentage = 20; // Default starter %
        }
    }

    // Calculate averages from ranges
    const hydration = style.technicalProfile?.hydration
        ? (style.technicalProfile.hydration[0] + style.technicalProfile.hydration[1]) / 2
        : style.technical.hydration;

    const salt = style.technicalProfile?.salt
        ? (style.technicalProfile.salt[0] + style.technicalProfile.salt[1]) / 2
        : style.technical.salt;

    const oil = style.technicalProfile?.oil
        ? (style.technicalProfile.oil[0] + style.technicalProfile.oil[1]) / 2
        : style.technical.oil;

    const sugar = style.technicalProfile?.sugar
        ? (style.technicalProfile.sugar[0] + style.technicalProfile.sugar[1]) / 2
        : style.technical.sugar;

    const bakingTempC = style.technical.bakingTempC;

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
