
import { DoughConfig } from '@/types';

// Simple Rule Engine Types
type AffiliateCondition = (context: DoughConfig) => boolean;

interface AffiliateRule {
    targetIngredientKeyword: string; // partial match
    condition: AffiliateCondition;
    productName: string;
    url: string;
    priority: number; // Higher wins
}

const AMAZON_TAG = 'doughlabpro-20'; // Example tag

// Rule Definitions
const RULES: AffiliateRule[] = [
    {
        targetIngredientKeyword: 'flour',
        condition: (ctx) => ctx.hydration > 75,
        productName: 'Manitoba Oro (High Protein)',
        url: `https://amazon.com/dp/B00451?tag=${AMAZON_TAG}`, // Mock
        priority: 10
    },
    {
        targetIngredientKeyword: 'flour',
        condition: (ctx) => ctx.recipeStyle === 'NEAPOLITAN' || ctx.bakingTempC > 400,
        productName: 'Caputo Pizzeria "Blue"',
        url: `https://amazon.com/dp/CAPUTO00?tag=${AMAZON_TAG}`,
        priority: 5
    },
    {
        targetIngredientKeyword: 'yeast',
        condition: (ctx) => ctx.yeastType === 'IDY',
        productName: 'Caputo Dry Yeast',
        url: `https://amazon.com/dp/YEAST123?tag=${AMAZON_TAG}`,
        priority: 2
    },
    {
        targetIngredientKeyword: 'oil',
        condition: (ctx) => true, // Always valid fallback for oil
        productName: 'Premium EVOO',
        url: `https://amazon.com/dp/EVOO?tag=${AMAZON_TAG}`,
        priority: 1
    }
];

export interface AffiliateMatch {
    productName: string;
    url: string;
}

export function resolveAffiliateLink(
    ingredientName: string,
    context: DoughConfig
): AffiliateMatch | null {
    const lowerName = ingredientName.toLowerCase();

    // Filter applicable rules
    const candidates = RULES.filter(rule =>
        lowerName.includes(rule.targetIngredientKeyword) && rule.condition(context)
    );

    if (candidates.length === 0) return null;

    // Pick highest priority
    candidates.sort((a, b) => b.priority - a.priority);
    const best = candidates[0];

    return {
        productName: best.productName,
        url: best.url
    };
}
