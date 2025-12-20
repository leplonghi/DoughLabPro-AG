
import Decimal from 'decimal.js';

export type PrefermentType = 'poolish' | 'biga' | 'levain' | 'custom';

export class Preferment {
    /**
     * @param id Unique identifier
     * @param name Display name (e.g., "Poolish")
     * @param type Type of preferment
     * @param weight Total weight of the preferment (flour + water)
     * @param hydration Hydration ratio (e.g., 1.0 for 100%, 0.5 for 50%)
     */
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly type: PrefermentType,
        public readonly weight: Decimal,
        public readonly hydration: Decimal
    ) { }

    /**
     * Calculates the amount of flour contributed by this preferment.
     * Formula: Weight / (1 + Hydration)
     */
    get flourWeight(): Decimal {
        return this.weight.dividedBy(new Decimal(1).plus(this.hydration));
    }

    /**
     * Calculates the amount of water contributed by this preferment.
     * Formula: Weight - FlourWeight
     */
    get waterWeight(): Decimal {
        return this.weight.minus(this.flourWeight);
    }
}
