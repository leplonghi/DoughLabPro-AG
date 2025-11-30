import { StyleDefinition } from '../types/styleDefinition';
import { DoughConfig, FermentationTechnique, YeastType, BakeType, IngredientConfig } from '../types';

export function convertStyleToDoughConfig(style: StyleDefinition): Partial<DoughConfig> {
    // Determine BakeType based on category
    let bakeType = BakeType.PIZZAS;
    const cat = style.category.toLowerCase();
    if (cat === 'bread' || cat === 'enriched_bread' || cat === 'burger_bun' || cat === 'flatbread') {
        bakeType = BakeType.BREADS_SAVORY;
    } else if (cat === 'pastry' || cat === 'cookies_confectionery') {
        bakeType = BakeType.SWEETS_PASTRY;
    }

    // Determine Fermentation Technique
    let fermentationTechnique = FermentationTechnique.DIRECT;
    let yeastType = YeastType.IDY;
    let yeastPercentage = 0.5;

    // Infer preferment from fermentation description or foundations
    // style.technicalProfile.fermentation is an object { bulk: string, proof: string, ... }
    const fermentation = style.technicalProfile.fermentation.bulk.toLowerCase();

    const foundations = style.technicalFoundations ? style.technicalFoundations.join(' ').toLowerCase() : '';
    const combinedText = fermentation + ' ' + foundations;

    if (combinedText.includes('poolish')) {
        fermentationTechnique = FermentationTechnique.POOLISH;
    } else if (combinedText.includes('biga')) {
        fermentationTechnique = FermentationTechnique.BIGA;
    } else if (combinedText.includes('sourdough') || combinedText.includes('levain') || combinedText.includes('starter')) {
        fermentationTechnique = FermentationTechnique.SOURDOUGH;
        yeastType = YeastType.SOURDOUGH_STARTER;
        yeastPercentage = 20; // Default starter %
    }

    // Calculate averages
    const hydration = (style.technicalProfile.hydrationRange[0] + style.technicalProfile.hydrationRange[1]) / 2;
    const salt = (style.technicalProfile.saltRange[0] + style.technicalProfile.saltRange[1]) / 2;
    const oil = style.technicalProfile.oilRange ? (style.technicalProfile.oilRange[0] + style.technicalProfile.oilRange[1]) / 2 : 0;
    const sugar = style.technicalProfile.sugarRange ? (style.technicalProfile.sugarRange[0] + style.technicalProfile.sugarRange[1]) / 2 : 0;
    const bakingTempC = (style.technicalProfile.oven.temperatureC[0] + style.technicalProfile.oven.temperatureC[1]) / 2;

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
        baseStyleName: style.title,
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
        notes: `Loaded from style: ${style.title}\n\n${style.intro}`
    };
}
