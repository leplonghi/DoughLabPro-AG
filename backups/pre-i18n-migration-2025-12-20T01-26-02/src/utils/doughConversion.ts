import { DoughStyleDefinition } from '@/types/styles';
import { DoughConfig, FermentationTechnique, YeastType, BakeType, IngredientConfig, RecipeStyle } from '@/types';
import { useTranslation } from '@/i18n';

export function convertStyleToDoughConfig(style: DoughStyleDefinition | any): Partial<DoughConfig> {
    // Determine BakeType based on category
    let bakeType = BakeType.PIZZAS;
    const cat = style.category;
    if (cat === 'bread' || cat === 'enriched_bread' || cat === 'burger_bun' || cat === 'flatbread') {
        bakeType = BakeType.BREADS_SAVORY;
    } else if (cat === 'pastry' || cat === 'cookie' || cat === 'cookies_confectionery') {
        bakeType = BakeType.SWEETS_PASTRY;
    }

    // Determine RecipeStyle (Heuristic mapping)
    let recipeStyle = RecipeStyle.NEAPOLITAN; // Default fallback
    if (style.recipeStyle) {
        recipeStyle = style.recipeStyle;
    } else {
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
    }

    // --- STRATEGY 1: Parse Base Formula (Highest Fidelity) ---
    if (style.base_formula && Array.isArray(style.base_formula)) {
        let parsedYeastType = YeastType.IDY;
        let parsedYeastPercentage = 0.5;
        let parsedFermentationTechnique = FermentationTechnique.DIRECT;
        let parsedPrefermentPercentage = 20;

        let totalWaterPct = 0;
        let totalSaltPct = 0;
        let totalOilPct = 0;
        let totalSugarPct = 0;
        let totalYeastPct = 0;

        // Detect Fermentation Type from ingredients
        const starterIng = style.base_formula.find((i: any) => {
            const n = i.name.toLowerCase();
            return n.includes('sourdough') || n.includes('levain') || n.includes('starter') || n.includes('masa madre');
        });
        const bigaIng = style.base_formula.find((i: any) => i.name.toLowerCase().includes('biga'));
        const poolishIng = style.base_formula.find((i: any) => i.name.toLowerCase().includes('poolish'));

        if (starterIng) {
            parsedYeastType = YeastType.SOURDOUGH_STARTER;
            parsedYeastPercentage = starterIng.percentage || 20;
            parsedFermentationTechnique = FermentationTechnique.SOURDOUGH;
        } else if (bigaIng) {
            parsedFermentationTechnique = FermentationTechnique.BIGA;
            parsedPrefermentPercentage = bigaIng.percentage || 30;
        } else if (poolishIng) {
            parsedFermentationTechnique = FermentationTechnique.POOLISH;
            parsedPrefermentPercentage = poolishIng.percentage || 30;
        }

        // Build Ingredients Mapping
        const tempIngredients: any[] = style.base_formula.map((ing: any, index: number) => {
            const n = ing.name.toLowerCase();
            let role: IngredientConfig['role'] = 'other';
            let type: 'solid' | 'liquid' = 'solid';

            // Heuristic Role Detection
            if (n.includes('flour') || n.includes('farinha') || n.includes('trigo') || n.includes('maida')) role = 'flour';
            else if (n.includes('water') || n.includes('água') || n.includes('milk') || n.includes('leite') || n.includes('whey') || n.includes('yogurt') || n.includes('iogurte') || n.includes('hydration') || n.includes('hidratação')) role = 'water';
            else if (n.includes('salt') || n.includes('sal')) role = 'salt';
            else if (n.includes('sugar') || n.includes('açúcar') || n.includes('honey') || n.includes('mel') || n.includes('syrup') || n.includes('malt')) role = 'sugar';
            else if (n.includes('oil') || n.includes('óleo') || n.includes('olive') || n.includes('azeite') || n.includes('fat') || n.includes('gordura') || n.includes('butter') || n.includes('manteiga') || n.includes('lard') || n.includes('banha') || n.includes('ghee') || n.includes('shortening')) role = 'fat';
            else if (n.includes('yeast') || n.includes('fermento') || n.includes('levain') || n.includes('starter') || n.includes('masa madre')) role = 'yeast';
            else if (n.includes('soda') || n.includes('powder') || n.includes('baking')) {
                role = 'other'; // Treat chemical leaveners as ingredients, not "yeast" slider
                parsedFermentationTechnique = FermentationTechnique.CHEMICAL;
            }
            else if (n.includes('cocoa') || n.includes('chocolate')) role = 'other';

            // ...

            const pct = ing.percentage || 0;

            // Accumulate Totals
            if (role === 'water') totalWaterPct += pct;
            if (role === 'salt') totalSaltPct += pct;
            if (role === 'fat') totalOilPct += pct;
            if (role === 'sugar') totalSugarPct += pct;
            if (role === 'yeast') {
                if (!starterIng && !bigaIng && !poolishIng) {
                    totalYeastPct += pct;
                    if (n.includes('fresh') || n.includes('fresco')) parsedYeastType = YeastType.FRESH;
                    else if (n.includes('instant') || n.includes('dry') || n.includes('secco')) parsedYeastType = YeastType.IDY;
                }
            }

            return {
                id: `ing-${Date.now()}-${index}`,
                name: ing.name,
                role,
                type,
                bakerPercentage: pct,
                manualOverride: false,
                hydrationContent: ing.hydrationContent,
                category: ing.category,
            };
        });

        // Handle duplicates / overrides
        const roleCounts: Record<string, number> = {};
        tempIngredients.forEach(i => {
            if (i.role && i.role !== 'other' && i.role !== 'flour') {
                roleCounts[i.role] = (roleCounts[i.role] || 0) + 1;
            }
        });

        const ingredients = tempIngredients.map(ing => {
            if (ing.role && roleCounts[ing.role] > 1) {
                return { ...ing, manualOverride: true };
            }
            if (ing.role === 'other') {
                return { ...ing, manualOverride: true };
            }
            return ing;
        });

        // Derive baking temp if possible, else 200
        const bakingTempC = (style.technicalProfile?.ovenTemp) ? Math.round((style.technicalProfile.ovenTemp[0] + style.technicalProfile.ovenTemp[1]) / 2) : 200;

        // Default Hydration Logic: Pizza/Bread needs ~65%, Pastry (Cookies/Brownies) can be 0% (hydration from eggs/butter)
        const defaultHydration = (bakeType === BakeType.SWEETS_PASTRY) ? 0 : 65;

        // Default Quantity Logic:
        // Pastry: 1 Batch (Tray) of 1200g (e.g. Brownies, Cinnamon Rolls)
        // Pizza/Bread: 4 Balls of default (defer to context if undefined)
        const defaultNumPizzas = (bakeType === BakeType.SWEETS_PASTRY) ? 1 : 4;

        let specificWeightStrategy1: number | undefined = undefined;
        if (bakeType === BakeType.SWEETS_PASTRY) {
            specificWeightStrategy1 = 1200;
        } else if (style.technicalProfile?.ballWeight?.recommended) {
            specificWeightStrategy1 = style.technicalProfile.ballWeight.recommended;
        } else if (style.specs?.ballWeight?.recommended) {
            specificWeightStrategy1 = style.specs.ballWeight.recommended;
        }

        return {
            bakeType,
            recipeStyle,
            baseStyleName: style.name,
            selectedStyleId: style.id,
            hydration: totalWaterPct > 0 ? totalWaterPct : defaultHydration,
            salt: totalSaltPct,
            oil: totalOilPct,
            sugar: totalSugarPct,
            bakingTempC,
            fermentationTechnique: parsedFermentationTechnique,
            yeastType: parsedYeastType,
            yeastPercentage: (totalYeastPct > 0 && !starterIng) ? totalYeastPct : parsedYeastPercentage,
            prefermentFlourPercentage: (parsedFermentationTechnique !== FermentationTechnique.DIRECT) ? parsedPrefermentPercentage : undefined,
            ingredients,
            numPizzas: defaultNumPizzas,
            doughBallWeight: specificWeightStrategy1,
            scale: 1,
            notes: `Loaded from style: ${style.name} (Formula)`
        };
    }

    // --- STRATEGY 2: Fallback to Technical Profile / Specs ---

    let fermentationTechnique = FermentationTechnique.DIRECT;
    let yeastType = YeastType.IDY;
    let yeastPercentage = 0.5;

    // Map new fermentationType to FermentationTechnique
    switch (style.fermentationType) {
        case 'preferment':
            fermentationTechnique = FermentationTechnique.POOLISH;
            if (style.technicalProfile?.preferment?.toLowerCase().includes('biga')) {
                fermentationTechnique = FermentationTechnique.BIGA;
            }
            break;
        case 'levain':
            fermentationTechnique = FermentationTechnique.SOURDOUGH;
            yeastType = YeastType.SOURDOUGH_STARTER;
            yeastPercentage = 20;
            break;
        case 'cold':
            if (style.technicalProfile?.preferment) {
                fermentationTechnique = FermentationTechnique.POOLISH;
            } else {
                fermentationTechnique = FermentationTechnique.DIRECT;
            }
            break;
        case 'direct':
        default:
            fermentationTechnique = FermentationTechnique.DIRECT;
            break;
    }

    // Handle V2.5 specs vs Legacy technicalProfile
    let hydration = 65;
    let salt = 2;
    let oil = 0;
    let sugar = 0;
    let cocoa = 0;
    let fatVal = 0;
    let bakingTempC = 250;

    if (style.specs) {
        // V2.5
        hydration = style.specs.hydration.ideal;
        bakingTempC = style.specs.ovenTemp ? style.specs.ovenTemp.ideal : 250;
        // Specs might handle these differently, defaulting to simplified if not present
    } else if (style.technicalProfile) {
        // Legacy
        hydration = style.technicalProfile.hydration
            ? (style.technicalProfile.hydration[0] + style.technicalProfile.hydration[1]) / 2
            : 65;
        salt = style.technicalProfile.salt
            ? (style.technicalProfile.salt[0] + style.technicalProfile.salt[1]) / 2
            : 2;
        oil = style.technicalProfile.oil
            ? (style.technicalProfile.oil[0] + style.technicalProfile.oil[1]) / 2
            : 0;
        sugar = style.technicalProfile.sugar
            ? (style.technicalProfile.sugar[0] + style.technicalProfile.sugar[1]) / 2
            : 0;
        cocoa = style.technicalProfile.cocoa
            ? (style.technicalProfile.cocoa[0] + style.technicalProfile.cocoa[1]) / 2
            : 0;
        fatVal = style.technicalProfile.fat
            ? (style.technicalProfile.fat[0] + style.technicalProfile.fat[1]) / 2
            : 0;
        bakingTempC = style.technicalProfile.ovenTemp
            ? Math.round((style.technicalProfile.ovenTemp[0] + style.technicalProfile.ovenTemp[1]) / 2)
            : 250;
    }

    // Resolve Fat: Prefer 'fat' (butter) over 'oil' for pastry/sweets
    let totalFat = oil;
    let fatName = 'Oil';
    let fatRole: IngredientConfig['role'] = 'fat';

    if (fatVal > 0) {
        totalFat = fatVal;
        fatName = 'Butter/Fat';
        fatRole = 'fat';
    }

    // Determine if yeast is needed (Legacy Heuristic)
    const isYeastFree = style.category === 'cookie' ||
        style.category === 'cookies_confectionery' ||
        style.id.includes('brownie') ||
        (style.category === 'pastry' && style.fermentationType === 'direct' && !style.id.includes('croissant') && !style.id.includes('danish') && !style.id.includes('roll'));

    if (isYeastFree) {
        yeastPercentage = 0;
        fermentationTechnique = FermentationTechnique.DIRECT;
    }

    // Generate Ingredients
    const ingredients: IngredientConfig[] = [
        { id: 'flour', name: 'Flour', type: 'solid', role: 'flour', bakerPercentage: 100 },
        { id: 'water', name: 'Water', type: 'liquid', role: 'water', bakerPercentage: hydration },
        { id: 'salt', name: 'Salt', type: 'solid', role: 'salt', bakerPercentage: salt },
    ];

    if (!isYeastFree) {
        ingredients.push({ id: 'yeast', name: 'Yeast', type: 'solid', role: 'yeast', bakerPercentage: yeastPercentage });
    }

    if (totalFat > 0) {
        ingredients.push({ id: 'fat', name: fatName, type: 'solid', role: 'fat', bakerPercentage: totalFat });
    }
    if (sugar > 0) {
        ingredients.push({ id: 'sugar', name: 'Sugar', type: 'solid', role: 'sugar', bakerPercentage: sugar });
    }
    if (cocoa > 0) {
        ingredients.push({ id: 'cocoa', name: 'Cocoa Powder', type: 'solid', role: 'other', bakerPercentage: cocoa });
    }

    // Determine specific weight from style, if available
    let specificWeight: number | undefined = undefined;
    if (style.technicalProfile?.ballWeight?.recommended) {
        specificWeight = style.technicalProfile.ballWeight.recommended;
    } else if (style.specs?.ballWeight?.recommended) {
        specificWeight = style.specs.ballWeight.recommended;
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
        numPizzas: 4,
        doughBallWeight: specificWeight, // Allow undefined to let Context handle defaults
        scale: 1,
        prefermentFlourPercentage: 20,
        notes: `Loaded from style: ${style.name}\n\n${style.description}`
    };
}
