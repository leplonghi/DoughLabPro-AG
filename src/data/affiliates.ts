
export interface AffiliateProduct {
    id: string;
    name: string;
    category: 'equipment' | 'ingredient' | 'accessory' | 'book';
    description: string;
    affiliateLink: string;
    priceRange: 'low' | 'medium' | 'high';
    tags: string[];
    imageUrl?: string;
}

export const AFFILIATE_CATALOG: AffiliateProduct[] = [
    {
        id: 'scale-precision',
        name: 'Precision Digital Scale',
        category: 'equipment',
        description: 'Essential for accurate yeast/salt (0.01g).',
        affiliateLink: 'https://amazon.com/dp/example1',
        priceRange: 'low',
        tags: ['precision', 'yeast', 'salt', 'baking', 'general', 'calculator'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Precision+Scale'
    },
    {
        id: 'stand-mixer',
        name: 'Heavy Duty Stand Mixer',
        category: 'equipment',
        description: 'Effortless kneading for high hydration.',
        affiliateLink: 'https://amazon.com/dp/example2',
        priceRange: 'high',
        tags: ['mixer', 'kneading', 'brioche', 'panettone', 'high-hydration', 'enriched'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Stand+Mixer'
    },
    {
        id: 'pizza-steel',
        name: 'Baking Steel Pro',
        category: 'equipment',
        description: 'Restaurant-quality crusts in home ovens.',
        affiliateLink: 'https://amazon.com/dp/example3',
        priceRange: 'medium',
        tags: ['pizza', 'baking', 'oven', 'crust', 'neapolitan', 'new-york-style'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Baking+Steel'
    },
    {
        id: '00-flour',
        name: 'Premium 00 Flour',
        category: 'ingredient',
        description: 'Gold standard for Neapolitan pizza.',
        affiliateLink: 'https://amazon.com/dp/example4',
        priceRange: 'medium',
        tags: ['flour', 'neapolitan', 'pizza', 'ingredients', 'italian'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=00+Flour'
    },
    {
        id: 'dough-scraper',
        name: 'Stainless Bench Scraper',
        category: 'accessory',
        description: 'Cut, scrape, and shape with ease.',
        affiliateLink: 'https://amazon.com/dp/example5',
        priceRange: 'low',
        tags: ['tools', 'shaping', 'general', 'essentials', 'bread'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Scraper'
    },
    {
        id: 'fermentation-box',
        name: 'Dough Proofing Box',
        category: 'accessory',
        description: 'Airtight storage for perfect fermentation.',
        affiliateLink: 'https://amazon.com/dp/example6',
        priceRange: 'low',
        tags: ['fermentation', 'storage', 'proofing', 'tools', 'pizza', 'bread'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Proofing+Box'
    },
    {
        id: 'pizza-peel',
        name: 'Perforated Pizza Peel',
        category: 'equipment',
        description: 'Launch pizzas easily, remove excess flour.',
        affiliateLink: 'https://amazon.com/dp/example7',
        priceRange: 'medium',
        tags: ['pizza', 'oven', 'tools', 'launching', 'neapolitan'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Pizza+Peel'
    },
    {
        id: 'infrared-thermometer',
        name: 'Infrared Thermometer',
        category: 'equipment',
        description: 'Check stone temp for consistent bakes.',
        affiliateLink: 'https://amazon.com/dp/example8',
        priceRange: 'low',
        tags: ['temperature', 'oven', 'tools', 'baking', 'pizza'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=IR+Thermometer'
    },
    {
        id: 'sourdough-kit',
        name: 'Sourdough Starter Kit',
        category: 'equipment',
        description: 'Grow and maintain a wild yeast culture.',
        affiliateLink: 'https://amazon.com/dp/example9',
        priceRange: 'medium',
        tags: ['sourdough', 'starter', 'wild-yeast', 'fermentation', 'bread'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Sourdough+Kit'
    }
];

export const getRecommendedProducts = (contextTags: string[], limit: number = 4): AffiliateProduct[] => {
    if (!contextTags || contextTags.length === 0) return [];

    // Normalize context tags
    const normalizedContext = contextTags.map(t => t.toLowerCase());

    const scored = AFFILIATE_CATALOG.map(product => {
        let score = 0;
        // Exact tag match overlap
        const matches = product.tags.filter(tag => normalizedContext.includes(tag.toLowerCase()));
        score += matches.length * 10;

        // Bonus for category match if implicit (e.g. if context has 'pizza', bump pizza items)
        if (normalizedContext.some(c => c.includes('pizza')) && product.tags.includes('pizza')) score += 5;

        return { product, score };
    });

    // Filter out zero scores and sort descending
    const relevant = scored
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.product);

    return relevant.slice(0, limit);
};
