import { AFFILIATE_PRODUCTS } from './affiliateLinks';

export interface AffiliatePlacement {
    id: string;
    title: string; // e.g., "Recommended Tools"
    description?: string;
    productIds: string[];
}

export const AFFILIATE_PLACEMENTS: Record<string, AffiliatePlacement> = {
    'learn_hydration_context': {
        id: 'learn_hydration_context',
        title: 'Hydration & Precision Kit',
        description: 'Precision is everything when it comes to hydration.',
        productIds: ['precision_scale', 'measuring_jug']
    },
    'learn_levain_care': {
        id: 'learn_levain_care',
        title: 'Levain Care Kit',
        description: 'Keep your starter healthy with the right tools.',
        productIds: ['glass_jar', 'thermometer_probe', 'dough_scraper']
    },
    'learn_oven_bake': {
        id: 'learn_oven_bake',
        title: 'Oven Setup',
        description: 'Transform your home oven into a pizzeria.',
        productIds: ['baking_steel', 'pizza_stone', 'ir_thermometer']
    },
    'learn_mixing_tools': {
        id: 'learn_mixing_tools',
        title: 'Mixing & Handling Kit',
        description: 'Essential tools for mixing and handling dough.',
        productIds: ['precision_scale', 'dough_scraper', 'thermometer_probe']
    },
    'tools_general': {
        id: 'tools_general',
        title: 'Pro Baking Tools',
        description: 'Upgrade your lab with professional equipment.',
        productIds: ['precision_scale', 'ir_thermometer', 'baking_steel']
    },
    'mylab_dashboard': {
        id: 'mylab_dashboard',
        title: 'Lab Essentials',
        description: 'Keep your workflow efficient with these essentials.',
        productIds: ['glass_jar', 'dough_scraper', 'thermometer_probe']
    }
};

export const getProductsForPlacement = (placementId: string) => {
    const placement = AFFILIATE_PLACEMENTS[placementId];
    if (!placement) return [];
    return placement.productIds
        .map(id => AFFILIATE_PRODUCTS.find(p => p.id === id))
        .filter((p): p is typeof AFFILIATE_PRODUCTS[0] => !!p);
};
