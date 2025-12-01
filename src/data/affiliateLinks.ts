export interface AffiliateProduct {
    id: string;
    name: string;
    url: string;
    category: string; // e.g., 'tools', 'ingredients'
    description?: string;
    imageUrl?: string; // Optional for now
}

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
    // Hydration Tools
    {
        id: 'precision_scale',
        name: 'Precision Scale 0.1g',
        url: 'https://amazon.com/s?k=precision+kitchen+scale',
        category: 'tools',
        description: 'Essential for measuring salt and yeast accurately.'
    },
    {
        id: 'measuring_jug',
        name: 'Graduated Measuring Jug',
        url: 'https://amazon.com/s?k=measuring+jug',
        category: 'tools',
        description: 'Makes measuring and pouring water easier.'
    },

    // Levain Tools
    {
        id: 'glass_jar',
        name: 'Glass Jar with Lid',
        url: 'https://amazon.com/s?k=weck+jars',
        category: 'tools',
        description: 'Ideal for maintaining and observing levain growth.'
    },
    {
        id: 'thermometer_probe',
        name: 'Digital Probe Thermometer',
        url: 'https://amazon.com/s?k=digital+food+thermometer',
        category: 'tools',
        description: 'Control your dough and water temperature.'
    },
    {
        id: 'dough_scraper',
        name: 'Dough Scraper (Bench Knife)',
        url: 'https://amazon.com/s?k=dough+scraper',
        category: 'tools',
        description: 'Indispensable for handling high-hydration doughs.'
    },

    // Oven Tools
    {
        id: 'baking_steel',
        name: 'Baking Steel',
        url: 'https://amazon.com/s?k=baking+steel',
        category: 'tools',
        description: 'Transfers heat much faster than stone for better oven spring.'
    },
    {
        id: 'pizza_stone',
        name: 'Pizza Stone',
        url: 'https://amazon.com/s?k=pizza+stone',
        category: 'tools',
        description: 'Classic option for baking pizza in home ovens.'
    },
    {
        id: 'ir_thermometer',
        name: 'Infrared Thermometer',
        url: 'https://amazon.com/s?k=infrared+thermometer',
        category: 'tools',
        description: 'Measure the surface temperature of your stone or steel.'
    },
    {
        id: 'pizza_peel',
        name: 'Pizza Peel',
        url: 'https://amazon.com/s?k=pizza+peel',
        category: 'tools',
        description: 'Essential for launching pizzas into the oven.'
    }
];

export const affiliateLinks = AFFILIATE_PRODUCTS; // Backwards compatibility if needed
