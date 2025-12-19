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
    },
    'burger_buns_essentials': {
        id: 'burger_buns_essentials',
        title: 'Burger Bun Essentials',
        description: 'Professional tools for the perfect bun.',
        productIds: ['bun-pan', 'dry-milk', 'potato-flour', 'sesame-seeds']
    },
    'pizza_essentials': {
        id: 'pizza_essentials',
        title: 'Pizza Essentials',
        description: 'Professional tools for the perfect pizza crust.',
        productIds: ['pizza-steel', 'pizza-peel', 'infrared-thermometer', '00-flour-1']
    },
    'artisan_bread_essentials': {
        id: 'artisan_bread_essentials',
        title: 'Artisan Bread Kit',
        description: 'Everything you need for sourdough and artisan loaves.',
        productIds: ['sourdough-kit', 'bread-lame', 'banneton', 'dutch-oven']
    },
    'enriched_dough_essentials': {
        id: 'enriched_dough_essentials',
        title: 'Enriched Dough Tools',
        description: 'Master brioche and sweet breads with these tools.',
        productIds: ['stand-mixer-1', 'scale-precision', 'dry-milk', 'dough-scraper']
    },
    'pastry_essentials': {
        id: 'pastry_essentials',
        title: 'Pastry Essentials',
        description: 'Bake professional-grade pastries at home.',
        productIds: ['stand-mixer-1', 'rolling-pin', 'sourdough-kit', 'pure-fat-enrichment']
    },
    'flatbread_essentials': {
        id: 'flatbread_essentials',
        title: 'Flatbread Essentials',
        description: 'Tools for perfect naan, tortillas, and more.',
        productIds: ['rolling-pin', 'pizza-stone', 'scale-precision', 'bench-scraper']
    }
};

export const CATEGORY_PLACEMENT_MAP: Record<string, string> = {
    'Pizza': 'pizza_essentials',
    'Bread': 'artisan_bread_essentials',
    'Enriched': 'enriched_dough_essentials',
    'Buns': 'burger_buns_essentials',
    'Pastry': 'pastry_essentials',
    'Cookies': 'pastry_essentials',
    'Flatbreads': 'flatbread_essentials',
};

export const getCategoryPlacement = (category: string): string | undefined => {
    return CATEGORY_PLACEMENT_MAP[category];
};

export const getProductsForPlacement = (placementId: string): AffiliateProduct[] => {
    const placement = AFFILIATE_PLACEMENTS[placementId];
    if (!placement) return [];
    return placement.productIds
        .map(id => AFFILIATE_CATALOG.find(p => p.id === id))
        .filter((p): p is AffiliateProduct => !!p);
};
