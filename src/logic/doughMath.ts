
import { DoughConfig, DoughResult, IngredientConfig, YeastType, FermentationTechnique, Levain, CalculationMode } from '../types';
import { useTranslation } from '@/i18n';

// --- Helpers ---

export function getBaseFlour(ingredients: IngredientConfig[]): IngredientConfig | undefined {
  return ingredients.find(i => i.role === 'flour');
}

// --- Normalization Logic ---

export function normalizeDoughConfigWithIngredients(config: DoughConfig): DoughConfig {
  if (config.ingredients && config.ingredients.length > 0) {
    return config; // Already has ingredients
  }

  // Build ingredients from legacy fields
  const ingredients: IngredientConfig[] = [];

  // 1. Base Flour (100%)
  ingredients.push({
    id: 'base-flour',
    name: 'Flour',
    type: 'solid',
    bakerPercentage: 100,
    role: 'flour'
  });

  // 2. Water (Hydration)
  ingredients.push({
    id: 'water',
    name: 'Water',
    type: 'liquid',
    bakerPercentage: config.hydration,
    role: 'water'
  });

  // 3. Salt
  ingredients.push({
    id: 'salt',
    name: 'Salt',
    type: 'solid',
    bakerPercentage: config.salt,
    role: 'salt'
  });

  // 4. Oil
  if (config.oil > 0) {
    ingredients.push({
      id: 'oil',
      name: 'Oil/Olive Oil',
      type: 'liquid',
      bakerPercentage: config.oil,
      role: 'fat'
    });
  }

  // 5. Sugar
  if (config.sugar && config.sugar > 0) {
    ingredients.push({
      id: 'sugar',
      name: 'Sugar',
      type: 'solid',
      bakerPercentage: config.sugar,
      role: 'sugar'
    });
  }

  // 6. Yeast
  if ([YeastType.SOURDOUGH_STARTER, YeastType.USER_LEVAIN].includes(config.yeastType)) {
    ingredients.push({
      id: 'levain',
      name: 'Levain (Sourdough Starter)',
      type: 'solid', // Semisolid
      bakerPercentage: config.yeastPercentage,
      role: 'starter'
    });
  } else {
    // Commercial Yeast or Chemical Leavening
    ingredients.push({
      id: 'yeast',
      name: 'Yeast/Leavening',
      type: 'solid',
      bakerPercentage: config.yeastPercentage,
      role: 'yeast'
    });
  }

  return {
    ...config,
    ingredients
  };
}

// --- Sync Logic ---

export function syncIngredientsFromConfig(config: DoughConfig): IngredientConfig[] {
  const normalized = normalizeDoughConfigWithIngredients(config);

  // Multi-Ingredient Logic:
  // Calculate current totals for roles that might have multiple components (Fat, Sugar)
  const aggs = { fat: 0, sugar: 0 };
  normalized.ingredients!.forEach(i => {
    // Only sum items that are not manually overridden (locked)
    if (!i.manualOverride) {
      if (i.role === 'fat') aggs.fat += i.bakerPercentage || 0;
      if (i.role === 'sugar') aggs.sugar += (i.bakerPercentage || 0);
    }
  });

  return normalized.ingredients!.map(ing => {
    // If manually overridden in the table, do not update from sliders
    if (ing.manualOverride) {
      return ing;
    }

    // Logic for Multi-Component Scaling (Fat, Sugar)
    // If we have existing ingredients of this role, we scale them to match the slider's target total
    // This preserves the relative ratio (e.g. 20% Butter / 10% Chocolate) while changing the total richness.
    let targetTotal = -1;
    let currentTotal = 0;

    if (ing.role === 'fat') {
      targetTotal = config.oil;
      currentTotal = aggs.fat;
    } else if (ing.role === 'sugar') {
      targetTotal = config.sugar || 0;
      currentTotal = aggs.sugar;
    }

    if (targetTotal >= 0 && currentTotal > 0) {
      // Apply scaling factor
      const factor = targetTotal / currentTotal;
      // Guard against extreme factors or NaN
      if (isFinite(factor) && factor >= 0) {
        return { ...ing, bakerPercentage: (ing.bakerPercentage || 0) * factor };
      }
    }

    // Fallback / Standard Sync (Single Component or First Init)
    if (ing.role === 'water') return { ...ing, bakerPercentage: config.hydration };
    if (ing.role === 'salt') return { ...ing, bakerPercentage: config.salt };

    // If total was 0 (e.g. new addition), just set the value directly
    if (ing.role === 'fat' && currentTotal === 0) return { ...ing, bakerPercentage: config.oil };
    if (ing.role === 'sugar' && currentTotal === 0) return { ...ing, bakerPercentage: config.sugar || 0 };

    if (ing.role === 'yeast' || ing.role === 'starter') return { ...ing, bakerPercentage: config.yeastPercentage };

    return ing;
  });
}


// --- Calculation Logic ---

/**
 * THE CORE CALCULATOR ENGINE
 * 
 * This function takes the configuration and outputs exact weights.
 * It handles:
 * 1. Baker's Percentage Math (Weight = Flour * %)
 * 2. Pre-ferment decomposition (Splitting flour/water/yeast into Day 1 vs Day 2)
 * 3. Sourdough Hydration logic
 */
export const calculateDoughUniversal = (
  config: DoughConfig,
  calculatorMode: 'basic' | 'advanced',
  calculationMode: CalculationMode,
  userLevain?: Levain | null
): DoughResult => {
  // Ensure we have ingredients
  const normalizedConfig = normalizeDoughConfigWithIngredients(config);
  const ingredients = normalizedConfig.ingredients || [];

  // ============================================
  // REACTIVE HYDRATION ENGINE (Step 2 Implementation)
  // ============================================

  // 1. Calculate water contributed by t('common.other') ingredients (Eggs, Milk, Butter, etc.)
  let waterFromOthers = 0;

  ingredients.forEach(ing => {
    // Determine Hydration Factor (0 to 1)
    let hydrationFactor = 0;

    if (ing.hydrationContent !== undefined) {
      hydrationFactor = ing.hydrationContent;
    } else {
      // Legacy Fallbacks
      if (ing.role === 'water') hydrationFactor = 1.0;
      else if (ing.type === 'liquid') hydrationFactor = 1.0; // Assume 100% for unknown liquids (e.g. Oil usually treated as fat, but if labeled liquid, safe bet?) 
      // Note: Oil usually has role='fat', so we should check role.
      if (ing.role === 'fat') hydrationFactor = 0; // Oil is 0% water
    }

    // Accumulate if it's NOT the primary adjustable water source
    // (We treat the valid adjustable 'water' role as the one used to balance the equation)
    if (ing.role !== 'water' && ing.role !== 'flour') {
      waterFromOthers += (ing.bakerPercentage * hydrationFactor);
    }
  });

  // 2. Adjust t('common.added_water') to hit Target Hydration (if controllable)
  const waterIng = ingredients.find(i => i.role === 'water');

  // Only adjust if the water ingredient exists and IS NOT locked (manualOverride)
  // And if we have a target hydration from the config (slider)
  if (waterIng && !waterIng.manualOverride) {
    const targetHydration = config.hydration;

    // Calculate required added water
    // If Eggs provide 10% water and Target is 65%, we need 55% Added Water.
    // If Eggs provide 70% water and Target is 65%, we need 0% Added Water (and result will be 70%).
    const requiredAddedWater = Math.max(0, targetHydration - waterFromOthers);

    waterIng.bakerPercentage = requiredAddedWater;
  }

  // ============================================
  // Standard Calculation (with updated percentages)
  // ============================================

  // 1. Calculate Total Target Weight
  // Standard calc: Total Dough = NumPizzas * BallWeight * Scale
  let totalTargetWeight = config.numPizzas * config.doughBallWeight * config.scale;

  // If calculating by total flour input, logic reverses
  let totalFlour = 0;

  // Calculate Sum of Percentages (The t('common.factor'))
  // Example: 100 (flour) + 65 (water) + 3 (salt) = 168%
  let totalPercentage = 0;
  ingredients.forEach(ing => {
    totalPercentage += ing.bakerPercentage;
  });

  if (calculationMode === 'flour' && config.totalFlour) {
    // Mode: t('ui.i_have_1kg_of_flour_how_much_dough_does_it_make')
    totalFlour = config.totalFlour;
    totalTargetWeight = totalFlour * (totalPercentage / 100);
  } else {
    // Mode: t('ui.i_need_1kg_of_dough_how_much_flour_do_i_need')
    // Formula: Flour = TotalDough * (100 / SumPercentages)
    totalFlour = totalTargetWeight * (100 / totalPercentage);
  }

  // 2. Calculate Absolute Weights for ALL ingredients based on Total Flour
  const ingredientWeights = ingredients.map(ing => ({
    id: ing.id,
    name: ing.name,
    weight: totalFlour * (ing.bakerPercentage / 100),
    role: ing.role,
    bakerPercentage: ing.bakerPercentage
  }));

  const result: DoughResult = {
    totalFlour: totalFlour,
    totalWater: 0,
    totalSalt: 0,
    totalOil: 0,
    totalSugar: 0,
    totalYeast: 0,
    totalDough: totalTargetWeight,
    ingredientWeights: ingredientWeights
  };

  // Extract base weights for easy access. 
  // NOTE: result.totalWater should represent ACTUAL Hydration, not just t('common.added_water').
  // So we sum (Weight * HydrationContent).

  let actualTotalWater = 0;
  ingredientWeights.forEach(iw => {
    // Find orig config for hydration factor (inefficient but safe)
    const ingDef = ingredients.find(i => i.id === iw.id);
    let hVal = ingDef?.hydrationContent ?? 0;
    if (ingDef?.role === 'water') hVal = 1.0;
    else if (ingDef?.role === 'fat') hVal = 0; // Oil
    else if (ingDef?.type === 'liquid' && ingDef?.role !== 'fat') hVal = 1.0; // Fallback

    actualTotalWater += iw.weight * hVal;
  });

  const waterWeight = ingredientWeights.find(i => i.role === 'water')?.weight || 0;
  const saltWeight = ingredientWeights.find(i => i.role === 'salt')?.weight || 0;
  const oilWeight = ingredientWeights.find(i => i.role === 'fat')?.weight || 0;
  const sugarWeight = ingredientWeights.find(i => i.role === 'sugar')?.weight || 0;
  const yeastOrStarterWeight = ingredientWeights.find(i => i.role === 'yeast' || i.role === 'starter')?.weight || 0;

  result.totalWater = actualTotalWater; // Updated to Real Hydration
  result.totalSalt = saltWeight;
  result.totalOil = oilWeight;
  result.totalSugar = sugarWeight;
  result.totalYeast = yeastOrStarterWeight;

  // 3. PRE-FERMENT DECOMPOSITION LOGIC
  // If using Biga/Poolish, we must subtract their flour/water from the main mix.

  const isChemicalOrNoFerment = config.fermentationTechnique === FermentationTechnique.CHEMICAL || config.fermentationTechnique === FermentationTechnique.NO_FERMENT;

  // CASE A: Sourdough / Levain
  if (!isChemicalOrNoFerment && (config.yeastType === YeastType.SOURDOUGH_STARTER || config.yeastType === YeastType.USER_LEVAIN)) {
    const starterWeight = yeastOrStarterWeight;

    // Determine starter hydration (default 100% or user defined)
    let levainHydration = 100;
    if (config.yeastType === YeastType.USER_LEVAIN && userLevain) {
      levainHydration = userLevain.hydration;
    }

    // Math: StarterWeight = Flour + Water
    // Water = Flour * Hydration
    // StarterWeight = Flour + (Flour * Hydration) = Flour * (1 + Hydration)
    // Flour = StarterWeight / (1 + Hydration)
    const starterFlour = starterWeight / (1 + (levainHydration / 100));
    const starterWater = starterWeight - starterFlour;

    result.preferment = {
      flour: starterFlour,
      water: starterWater,
      yeast: 0 // The starter IS the yeast culture
    };

    result.finalDough = {
      flour: totalFlour - starterFlour, // "Reforço" flour
      water: waterWeight - starterWater, // "Reforço" water
      salt: saltWeight,
      oil: oilWeight,
      sugar: sugarWeight,
      yeast: 0
    };

    // CASE B: Poolish or Biga (Commercial Yeast Preferments)
  } else if (!isChemicalOrNoFerment && (config.fermentationTechnique === FermentationTechnique.POOLISH || config.fermentationTechnique === FermentationTechnique.BIGA)) {

    // How much of the Total Flour goes into the preferment?
    // defined by prefermentFlourPercentage (e.g., 30%)
    const prefermentFlour = totalFlour * (config.prefermentFlourPercentage / 100);

    let prefermentWater = 0;

    if (config.fermentationTechnique === FermentationTechnique.BIGA) {
      // BIGA: Traditionally 45-50% hydration. We use 50% for calculation simplicity.
      prefermentWater = prefermentFlour * 0.5;
    } else {
      // POOLISH: Always 100% hydration (1:1 ratio)
      prefermentWater = prefermentFlour * 1.0;
    }

    // Yeast in preferment
    // Standard practice: Use a tiny fraction (0.1% - 0.2%) of the preferment flour for the preferment,
    // and put the rest in the final dough if needed.
    // For this calculator, we assume a fixed small amount for the preferment to ensure it activates.
    const prefermentYeast = prefermentFlour * 0.002; // 0.2% of preferment flour

    result.preferment = {
      flour: prefermentFlour,
      water: prefermentWater,
      yeast: prefermentYeast
    };

    // Final Dough (The Mix Day)
    // NOTE: We subtract preferment water from 'waterWeight' (Added Water).
    // If the water comes from Eggs/Milk, this might be tricky (Pre-ferments usually use PURE water).
    // For now, assume biga/poolish use Added Water.

    result.finalDough = {
      flour: totalFlour - prefermentFlour,
      water: Math.max(0, waterWeight - prefermentWater),
      salt: saltWeight,
      oil: oilWeight,
      sugar: sugarWeight,
      // Remaining yeast is added to final dough. 
      // If yeastOrStarterWeight (total yeast) is less than what we put in preferment, we assume 0 added.
      yeast: Math.max(0, yeastOrStarterWeight - prefermentYeast)
    };

  } else {
    // CASE C: Direct Method (Everything mixed at once)
    result.finalDough = {
      flour: totalFlour,
      water: waterWeight,
      salt: saltWeight,
      oil: oilWeight,
      sugar: sugarWeight,
      yeast: yeastOrStarterWeight
    };
  }

  return result;
};
