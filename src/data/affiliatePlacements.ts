import { AFFILIATE_CATALOG, AffiliateProduct } from './affiliates';
import { useTranslation } from '@/i18n';

export interface AffiliatePlacement {
    id: string;
    title: string;
    description?: string;
    productIds: string[];
}

export const AFFILIATE_PLACEMENTS: Record<string, AffiliatePlacement> = {
    'learn_hydration_context': {
        id: 'learn_hydration_context',
        title: 'Hydration & Precision Kit',
        description: 'Precision is everything. Use a scale.',
        productIds: ['scale-precision', 'fermentation-box']
    },
    'learn_levain_care': {
        id: 'learn_levain_care',
        title: 'Levain Care Kit',
        description: 'Keep your starter healthy with the right tools.',
        productIds: ['sourdough-kit', 'scale-precision', 'dough-scraper']
    },
    'learn_oven_bake': {
        id: 'learn_oven_bake',
        title: 'Oven Setup',
        description: 'Transform your home oven into a pizzeria.',
        productIds: ['pizza-steel', 'pizza-stone', 'infrared-thermometer', 'pizza-peel']
    },
    'learn_mixing_tools': {
        id: 'learn_mixing_tools',
        title: 'Mixing & Handling Kit',
        description: 'Essential tools for mixing and handling dough.',
        productIds: ['scale-precision', 'dough-scraper', 'stand-mixer-1']
    },
    'tools_general': {
        id: 'tools_general',
        title: 'Pro Baking Tools',
        description: 'Upgrade your lab with professional equipment.',
        productIds: ['scale-precision', 'infrared-thermometer', 'pizza-steel']
    },
    'mylab_dashboard': {
        id: 'mylab_dashboard',
        title: 'Lab Essentials',
        description: 'Keep your workflow efficient with these essentials.',
        productIds: ['sourdough-kit', 'dough-scraper', 'scale-precision']
    }
};

export const getProductsForPlacement = (placementId: string): AffiliateProduct[] => {
    const placement = AFFILIATE_PLACEMENTS[placementId];
    if (!placement) return [];
    return placement.productIds
        .map(id => AFFILIATE_CATALOG.find(p => p.id === id))
        .filter((p): p is AffiliateProduct => !!p);
};
