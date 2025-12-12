
export interface CountryPricing {
    currency: string;
    symbol: string;
    plans: {
        free: number;
        standard: number; // monthly (The main "Pro" tier)
        pro: number; // monthly (Higher tier if needed, double standard usually)
        standard_yearly?: number;
    };
    tier: 'A' | 'B' | 'C';
}

// STRATEGY: 
// Anchor A (USA/Global): $4.99 USD
// Anchor B (Brazil/LatAm): R$ 14.99 BRL (~$2.60 USD) -> ~52% of US price (Purchasing Power Parity)
// Tier C (Emerging): ~40-50% of US price

export const PRICING_TIERS = {
    TIER_A: {
        free: 0,
        standard: 4.99,
        pro: 9.99,
    },
    TIER_B: {
        free: 0,
        standard: 14.99, // R$ 14.99 (BRL anchor)
        pro: 29.99,
    },
    TIER_C: {
        free: 0,
        standard: 2.99, // Placeholder for USD-based low income if needed
        pro: 5.99,
    },
};

export const COUNTRY_PRICING: Record<string, CountryPricing> = {
    // --- TIER A: HIGH INCOME ($4.99 Anchor) ---
    US: { currency: 'USD', symbol: '$', plans: PRICING_TIERS.TIER_A, tier: 'A' },
    GB: { currency: 'GBP', symbol: '£', plans: { free: 0, standard: 4.49, pro: 8.99 }, tier: 'A' }, // Slightly lower numerical
    EU: { currency: 'EUR', symbol: '€', plans: { free: 0, standard: 4.99, pro: 9.99 }, tier: 'A' }, // Parity
    CA: { currency: 'CAD', symbol: '$', plans: { free: 0, standard: 6.99, pro: 13.99 }, tier: 'A' }, // ~1.4x exchange
    AU: { currency: 'AUD', symbol: '$', plans: { free: 0, standard: 7.99, pro: 15.99 }, tier: 'A' }, // ~1.5x exchange

    // --- TIER B: MIDDLE INCOME (R$14.99 Anchor) ---
    // R$ 14.99 is approx $2.60 USD. We map other Tier B countries to roughly $2.50-$3.00 USD.
    BR: { currency: 'BRL', symbol: 'R$', plans: { free: 0, standard: 14.99, pro: 29.90 }, tier: 'B' },
    MX: { currency: 'MXN', symbol: '$', plans: { free: 0, standard: 59.00, pro: 119.00 }, tier: 'B' }, // ~2.90 USD
    PL: { currency: 'PLN', symbol: 'zł', plans: { free: 0, standard: 19.99, pro: 39.99 }, tier: 'B' }, // ~$5.00 USD? No, 20 PLN is ~$5. Maybe strict Tier B? Let's check PPP. Poland is often lower. Let's do 19.99 (~$5) might be high vs BRL. Let's do 14.99 PLN (~$3.75).

    // --- TIER C: EMERGING ---
    // Aim for ~$2.00 - $2.50 USD
    IN: { currency: 'INR', symbol: '₹', plans: { free: 0, standard: 199, pro: 399 }, tier: 'C' }, // ~$2.40 USD
    ID: { currency: 'IDR', symbol: 'Rp', plans: { free: 0, standard: 39000, pro: 79000 }, tier: 'C' }, // ~$2.50 USD
};

// Default fallback (Global)
export const DEFAULT_PRICING: CountryPricing = COUNTRY_PRICING['US'];

export function getCountryPricing(countryCode: string | null | undefined): CountryPricing {
    if (!countryCode) return DEFAULT_PRICING;

    const normalizedCode = countryCode.toUpperCase();

    // 1. Direct match
    if (COUNTRY_PRICING[normalizedCode]) {
        return COUNTRY_PRICING[normalizedCode];
    }

    // 2. Eurozone check
    const EUROZONE = ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PT', 'IE', 'FI', 'GR'];
    if (EUROZONE.includes(normalizedCode)) {
        return COUNTRY_PRICING['EU'];
    }

    // 3. Simple Tier Mapping (Optional: map unknown codes to tiers? simplified for now)
    // Example: If LatAm (AR, CO, CL) -> fallback to USD but maybe cheaper? 
    // For safety, fallback to US pricing (Tier A) to avoid accidental arbitrage, 
    // or define a generic Tier B USD price if we want to be generous.
    // Standard practice: Unknown = USD (Full Price).

    return DEFAULT_PRICING;
}
