
export interface IngredientWithPrice {
    name: string;
    percentage: number;
    pricePerKg: number;
    totalWeightInGrams: number;
}

export interface CostCalculationResult {
    ingredients: {
        name: string;
        weight: number;
        cost: number;
    }[];
    totalBatchCost: number;
    costPerUnit: number;
    currency: string;
}

/**
 * Calculates the cost of a batch based on baker's percentages and prices.
 */
export function calculateBatchCost(
    totalFlourWeight: number,
    ingredients: IngredientWithPrice[],
    unitCount: number,
    overheadPercentage: number = 0, // e.g., 5% for waste
    currency: string = 'EUR'
): CostCalculationResult {
    const results: CostCalculationResult = {
        ingredients: [],
        totalBatchCost: 0,
        costPerUnit: 0,
        currency
    };

    let totalCost = 0;

    ingredients.forEach(ing => {
        const weight = (totalFlourWeight * ing.percentage) / 100;
        const cost = (weight / 1000) * ing.pricePerKg;

        results.ingredients.push({
            name: ing.name,
            weight,
            cost
        });

        totalCost += cost;
    });

    // Apply overhead (waste, energy, etc.)
    totalCost = totalCost * (1 + overheadPercentage / 100);

    results.totalBatchCost = totalCost;
    results.costPerUnit = unitCount > 0 ? totalCost / unitCount : totalCost;

    return results;
}
