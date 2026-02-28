import { calculateDoughUniversal } from '@/logic/doughMath';
import { convertStyleToDoughConfig } from '@/utils/doughConversion';
import { DoughConfig, CalculationMode, YeastType } from '@/types';
import { ComputeFormulaParams, FormulaResult } from './EngineTypes';
import { buildTimeline } from './buildTimeline';

/**
 * CORE DOMAIN ENGINE - computeFormula
 * Takes canonical inputs and returns exact ingredients and warnings.
 */
export function computeFormula(params: ComputeFormulaParams): FormulaResult {
    const { style, variantId, targetInputs, equipmentProfile, ambientTempC } = params;

    // 1. Convert Canonical Style to legacy DoughConfig format (to feed the math engine)
    const baseConfig = convertStyleToDoughConfig(style);

    // 2. Override with User Target Inputs
    const overrides: Partial<DoughConfig> = {
        doughBallWeight: targetInputs.doughWeight,
        numPizzas: targetInputs.numBalls,
    };

    if (targetInputs.targetHydration !== undefined) overrides.hydration = targetInputs.targetHydration;
    if (targetInputs.targetSalt !== undefined) overrides.salt = targetInputs.targetSalt;
    if (targetInputs.targetYeastPct !== undefined) overrides.yeastPercentage = targetInputs.targetYeastPct;
    if (targetInputs.flourTypeOverride !== undefined) overrides.flourId = targetInputs.flourTypeOverride;
    if (ambientTempC !== undefined) overrides.ambientTemperature = ambientTempC as any; // Note: mapping might be needed if AmbientTemperature enum is strict

    const configToCalculate = {
        ...baseConfig,
        ...overrides,
    } as DoughConfig;

    // 3. Run the Universal Calculator Engine
    // For pure formula calculation, mode is usually 'mass' and 'wizard'/basic.
    // If targetInputs has a yeast override, we just use it.
    const calcResult = calculateDoughUniversal(
        configToCalculate,
        'wizard',
        'mass', // Standard mass mode
        null // We pass null for userLevain for now unless we add it to params
    );

    // 4. Map DoughResult to the new FormulaResult shape
    const warnings: string[] = [];

    // Simple warnings logic based on heuristics
    if (configToCalculate.hydration > 75 && (!equipmentProfile || equipmentProfile.type === 'home_oven')) {
        warnings.push('High hydration may be difficult to bake in a standard home oven without a baking steel.');
    }
    if (equipmentProfile?.maxTempC && equipmentProfile.maxTempC < 250 && style.category === 'pizza') {
        warnings.push('Oven temperature is low for pizza making. Expect longer bake times and potentially drier crust.');
    }

    const ingredients = (calcResult.ingredientWeights || []).map(ing => ({
        key: ing.id,
        label: ing.name,
        grams: ing.weight,
        bakerPct: ing.bakerPercentage
    }));

    // Generate accurate timeline steps
    const steps = buildTimeline(params);

    return {
        ingredients,
        steps,
        warnings
    };
}
