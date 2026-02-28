"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryPricing = exports.DEFAULT_PRICING = exports.COUNTRY_PRICING = exports.PRICING_TIERS = void 0;
// STRATEGY: 
// Anchor A (USA/Global): $4.99 USD
// Anchor B (Brazil/LatAm): R$ 14.99 BRL (~$2.60 USD) -> ~52% of US price (Purchasing Power Parity)
// Tier C (Emerging): ~40-50% of US price
exports.PRICING_TIERS = {
    TIER_A: {
        free: 0,
        standard: 5.99,
        pro: 11.99, // Keep as secondary just in case, but unused in UI
    },
    TIER_B: {
        free: 0,
        standard: 29.99,
        pro: 59.90,
    },
    TIER_C: {
        free: 0,
        standard: 3.99,
        pro: 7.99,
    },
};
exports.COUNTRY_PRICING = {
    // --- TIER A: HIGH INCOME ($5.99 Anchor) ---
    US: { currency: 'USD', symbol: '$', plans: exports.PRICING_TIERS.TIER_A, tier: 'A' },
    GB: { currency: 'GBP', symbol: '£', plans: { free: 0, standard: 4.99, pro: 9.99 }, tier: 'A' },
    EU: { currency: 'EUR', symbol: '€', plans: { free: 0, standard: 5.99, pro: 11.99 }, tier: 'A' },
    CA: { currency: 'CAD', symbol: '$', plans: { free: 0, standard: 7.99, pro: 15.99 }, tier: 'A' },
    AU: { currency: 'AUD', symbol: '$', plans: { free: 0, standard: 8.99, pro: 17.99 }, tier: 'A' },
    // --- TIER B: MIDDLE INCOME (R$29.99 Anchor) ---
    BR: { currency: 'BRL', symbol: 'R$', plans: exports.PRICING_TIERS.TIER_B, tier: 'B' },
    MX: { currency: 'MXN', symbol: '$', plans: { free: 0, standard: 99.00, pro: 199.00 }, tier: 'B' },
    PL: { currency: 'PLN', symbol: 'zł', plans: { free: 0, standard: 24.99, pro: 49.99 }, tier: 'B' },
    // --- TIER C: EMERGING ---
    IN: { currency: 'INR', symbol: '₹', plans: { free: 0, standard: 299, pro: 599 }, tier: 'C' },
    ID: { currency: 'IDR', symbol: 'Rp', plans: { free: 0, standard: 59000, pro: 119000 }, tier: 'C' },
};
// Default fallback (Global)
exports.DEFAULT_PRICING = exports.COUNTRY_PRICING['US'];
function getCountryPricing(countryCode) {
    if (!countryCode)
        return exports.DEFAULT_PRICING;
    const normalizedCode = countryCode.toUpperCase();
    // 1. Direct match
    if (exports.COUNTRY_PRICING[normalizedCode]) {
        return exports.COUNTRY_PRICING[normalizedCode];
    }
    // 2. Eurozone check
    const EUROZONE = ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PT', 'IE', 'FI', 'GR'];
    if (EUROZONE.includes(normalizedCode)) {
        return exports.COUNTRY_PRICING['EU'];
    }
    // 3. Simple Tier Mapping (Optional: map unknown codes to tiers? simplified for now)
    // Example: If LatAm (AR, CO, CL) -> fallback to USD but maybe cheaper? 
    // For safety, fallback to US pricing (Tier A) to avoid accidental arbitrage, 
    // or define a generic Tier B USD price if we want to be generous.
    // Standard practice: Unknown = USD (Full Price).
    return exports.DEFAULT_PRICING;
}
exports.getCountryPricing = getCountryPricing;
//# sourceMappingURL=countryPricing.js.map