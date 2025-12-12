
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // Assuming this exists
import { getCountryPricing, CountryPricing, DEFAULT_PRICING } from '../data/countryPricing';

export interface LocalizedPricing {
    countryCode: string;
    currency: string;
    planPrices: CountryPricing['plans'];
    symbol: string;
    isLocked: boolean;
    isProvisional: boolean;
    isLoading: boolean;
}

export function useLocalizedPricing(): LocalizedPricing {
    const { user, userLoading } = useAuth();
    const [pricing, setPricing] = useState<LocalizedPricing>({
        countryCode: 'US',
        currency: 'USD',
        symbol: '$',
        planPrices: DEFAULT_PRICING.plans,
        isLocked: false,
        isProvisional: true,
        isLoading: true
    });

    useEffect(() => {
        if (userLoading) return;

        // 1. Check for locked billing country in User Profile
        if (user?.billingCountry) {
            const countryPricing = getCountryPricing(user.billingCountry);
            setPricing({
                countryCode: user.billingCountry,
                currency: countryPricing.currency,
                symbol: countryPricing.symbol,
                planPrices: countryPricing.plans,
                isLocked: true,
                isProvisional: false,
                isLoading: false
            });
            return;
        }

        // 2. Provisional Strategy
        // If not locked, we try to guess. 
        // A simple robust guess is based on the browser's locale or timezone mapping, 
        // but that's imprecise. 
        // For now, we will default to US but allow a "soft" client-side guess if needed.
        // Let's stick to a safe default or maybe a very basic locale check?
        // e.g. "pt-BR" -> "BR".

        let guessedCountry = 'US'; // Default
        try {
            // Very basic heuristic
            const locale = navigator.language; // e.g., "en-US", "pt-BR"
            if (locale.includes('-')) {
                const parts = locale.split('-');
                if (parts.length === 2) {
                    guessedCountry = parts[1].toUpperCase();
                }
            }
        } catch (e) {
            // ignore
        }

        const countryPricing = getCountryPricing(guessedCountry);

        setPricing({
            countryCode: guessedCountry,
            currency: countryPricing.currency,
            symbol: countryPricing.symbol,
            planPrices: countryPricing.plans,
            isLocked: false,
            isProvisional: true, // It's a guess
            isLoading: false
        });

    }, [user, userLoading]);

    return pricing;
}
