
export interface AffiliateProduct {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    affiliateLink: string;
    category: 'equipment' | 'ingredient' | 'book' | 'accessory';
    tags: string[];
    priceRange?: 'low' | 'medium' | 'high';
}

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
    {
        id: 'scale-precision',
        name: 'Precision Digital Scale',
        description: 'Essential for accurate yeast and salt measurements (0.01g accuracy).',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Precision+Scale',
        affiliateLink: 'https://amazon.com/dp/example1', // Placeholder
        category: 'equipment',
        tags: ['calculator', 'ingredients', 'precision', 'yeast', 'salt', 'baking', 'general'],
        priceRange: 'low'
    },
    {
        id: 'stand-mixer',
        name: 'Heavy Duty Stand Mixer',
        description: 'Perfect for kneading low and high hydration doughs effortlessly.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Stand+Mixer',
        affiliateLink: 'https://amazon.com/dp/example2',
        category: 'equipment',
        tags: ['mixer', 'automated', 'kneading', 'brioche', 'panettone', 'high-hydration'],
        priceRange: 'high'
    },
    {
        id: 'pizza-steel',
        name: 'Baking Steel Pro',
        description: 'Achieve restaurant-quality crusts in your home oven along with better heat retention.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Baking+Steel',
        affiliateLink: 'https://amazon.com/dp/example3',
        category: 'equipment',
        tags: ['pizza', 'baking', 'oven', 'crust', 'neapolitan', 'new-york-style'],
        priceRange: 'medium'
    },
    {
        id: '00-flour',
        name: 'Premium 00 Flour',
        description: 'The gold standard for Neapolitan pizza. Finely ground for superior elasticity.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=00+Flour',
        affiliateLink: 'https://amazon.com/dp/example4',
        category: 'ingredient',
        tags: ['flour', 'neapolitan', 'pizza', 'ingredients', 'italian'],
        priceRange: 'medium'
    },
    {
        id: 'dough-scraper',
        name: 'Stainless Steel Bench Scraper',
        description: 'Cut, scrape, and shape your dough with professional ease.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Scraper',
        affiliateLink: 'https://amazon.com/dp/example5',
        category: 'accessory',
        tags: ['tools', 'shaping', 'general', 'essentials'],
        priceRange: 'low'
    },
    {
        id: 'fermentation-container',
        name: 'Dough Proofing Box',
        description: 'Keep your doughballs airtight and prevent drying correctly during fermentation.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Proofing+Box',
        affiliateLink: 'https://amazon.com/dp/example6',
        category: 'accessory',
        tags: ['fermentation', 'storage', 'proofing', 'tools'],
        priceRange: 'low'
    },
    {
        id: 'pizza-peel-perforated',
        name: 'Perforated Pizza Peel',
        description: 'Launch pizzas easily while removing excess flour to prevent burning.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Pizza+Peel',
        affiliateLink: 'https://amazon.com/dp/example7',
        category: 'equipment',
        tags: ['pizza', 'oven', 'tools', 'launching'],
        priceRange: 'medium'
    },
    {
        id: 'infrared-thermometer',
        name: 'Infrared Thermometer Gun',
        description: 'Know exactly when your stone is ready to bake for consistent results.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=IR+Thermometer',
        affiliateLink: 'https://amazon.com/dp/example8',
        category: 'equipment',
        tags: ['temperature', 'oven', 'tools', 'baking'],
        priceRange: 'low'
    },
    {
        id: 'sourdough-starter-kit',
        name: 'Complete Sourdough Starter Kit',
        description: 'Everything you need to grow and maintain a healthy wild yeast culture.',
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Sourdough+Kit',
        affiliateLink: 'https://amazon.com/dp/example9',
        category: 'equipment',
        tags: ['sourdough', 'starter', 'wild-yeast', 'fermentation'],
        priceRange: 'medium'
    }
];

export const getRelatedProducts = (tags: string[], limit: number = 3): AffiliateProduct[] => {
    // Simple matching algorithm: sort by number of matching tags
    const scoredProducts = AFFILIATE_PRODUCTS.map(product => {
        const matchCount = product.tags.filter(tag => tags.includes(tag)).length;
        // Add a tiny random factor to rotate products with same score
        return { ...product, score: matchCount + Math.random() * 0.1 };
    });

    // Filter out products with 0 tag matches unless we want a fallback
    // For "subliminal", relevance is key, so strict filtering is better.
    const filtered = scoredProducts.filter(p => p.score >= 1);

    // If no matches, fallback to 'general' tag.
    if (filtered.length === 0) {
        return scoredProducts
            .filter(p => p.tags.includes('general'))
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    }

    return filtered.sort((a, b) => b.score - a.score).slice(0, limit);
};
