
import Decimal from 'decimal.js';
import { DoughFormula } from '../entities/DoughFormula';
import { Preferment } from '../entities/Preferment';

/**
 * Calculates the total effective hydration of the dough.
 * 
 * Formula: (BaseWater + PrefermentWater) / (BaseFlour + PrefermentFlour)
 */
export function calculateFinalHydration(formula: DoughFormula): Decimal {
    let totalFlour = formula.baseFlourWeight;
    let totalWater = formula.baseWaterWeight;

    for (const pref of formula.preferments) {
        totalFlour = totalFlour.plus(pref.flourWeight);
        totalWater = totalWater.plus(pref.waterWeight);
    }

    if (totalFlour.isZero()) return new Decimal(0);

    // Return percentage (e.g., 70.0 for 70%)
    return totalWater.dividedBy(totalFlour).times(100);
}

/**
 * Calculates the amount of water to add to the main dough to achieve a target hydration.
 * 
 * Formula: 
 * TargetTotalWater = TargetHydrationRatio * (BaseFlour + PrefermentFlour)
 * RequiredBaseWater = TargetTotalWater - PrefermentWater
 */
export function calculateRequiredWater(
    targetHydrationPercent: Decimal,
    baseFlourWeight: Decimal,
    preferments: Preferment[]
): Decimal {
    const targetHydrationRatio = targetHydrationPercent.dividedBy(100);

    let prefermentFlour = new Decimal(0);
    let prefermentWater = new Decimal(0);

    for (const pref of preferments) {
        prefermentFlour = prefermentFlour.plus(pref.flourWeight);
        prefermentWater = prefermentWater.plus(pref.waterWeight);
    }

    const totalFlour = baseFlourWeight.plus(prefermentFlour);
    const requiredTotalWater = totalFlour.times(targetHydrationRatio);
    const requiredBaseWater = requiredTotalWater.minus(prefermentWater);

    // Cannot add negative water
    return requiredBaseWater.isNegative() ? new Decimal(0) : requiredBaseWater;
}
