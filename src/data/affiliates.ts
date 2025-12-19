
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
    // --- SCALES ---
    {
        id: 'scale-precision',
        name: 'Precision Digital Scale',
        category: 'equipment',
        description: 'Essential for accurate yeast/salt (0.01g).',
        affiliateLink: 'https://amzn.to/4pOK3N3',
        priceRange: 'low',
        tags: ['precision', 'yeast', 'salt', 'baking', 'general', 'calculator'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Precision+Scale'
    },

    // --- MIXERS ---
    {
        id: 'stand-mixer-1',
        name: 'Heavy Duty Stand Mixer (Model A)',
        category: 'equipment',
        description: 'Effortless kneading for high hydration doughs.',
        affiliateLink: 'https://amzn.to/499tDaX',
        priceRange: 'high',
        tags: ['mixer', 'kneading', 'brioche', 'panettone', 'high-hydration', 'enriched'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Stand+Mixer+A'
    },
    {
        id: 'stand-mixer-2',
        name: 'Professional Stand Mixer (Model B)',
        category: 'equipment',
        description: 'Reliable power for frequent large batches.',
        affiliateLink: 'https://amzn.to/4oQ35kC',
        priceRange: 'high',
        tags: ['mixer', 'kneading', 'professional', 'large-batch', 'bread'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Stand+Mixer+B'
    },

    // --- BAKING SURFACES ---
    {
        id: 'pizza-steel',
        name: 'Baking Steel Pro',
        category: 'equipment',
        description: 'The ultimate surface for home oven crusts.',
        affiliateLink: 'https://amzn.to/4rQKkA6',
        priceRange: 'medium',
        tags: ['pizza', 'baking', 'oven', 'crust', 'neapolitan', 'new-york-style'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Baking+Steel'
    },
    {
        id: 'pizza-stone',
        name: 'Cordierite Pizza Stone',
        category: 'equipment',
        description: 'Classic stone for consistent heat retention.',
        affiliateLink: 'https://amzn.to/4aDK8OE',
        priceRange: 'medium',
        tags: ['pizza', 'baking', 'oven', 'stone', 'bread'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Pizza+Stone'
    },

    // --- FLOURS ---
    {
        id: '00-flour-1',
        name: 'Premium 00 Pizza Flour',
        category: 'ingredient',
        description: 'The standard for authentic Neapolitan pizza.',
        affiliateLink: 'https://amzn.to/4iNiK2V',
        priceRange: 'medium',
        tags: ['flour', 'neapolitan', 'pizza', 'ingredients', 'italian'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=00+Flour+A'
    },
    {
        id: '00-flour-2',
        name: 'Professional Pizza Flour (Bulk)',
        category: 'ingredient',
        description: 'High protein content for long fermentation.',
        affiliateLink: 'https://amzn.to/499ueJJ',
        priceRange: 'medium',
        tags: ['flour', 'bread', 'pizza', 'high-protein', 'fermentation'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=00+Flour+B'
    },

    // --- TOOLS ---
    {
        id: 'dough-scraper',
        name: 'Stainless Bench Scraper',
        category: 'accessory',
        description: 'Cut, scrape, and shape with ease.',
        affiliateLink: 'https://amzn.to/3MEsekR',
        priceRange: 'low',
        tags: ['tools', 'shaping', 'general', 'essentials', 'bread'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Scraper'
    },
    {
        id: 'fermentation-box',
        name: 'Dough Proofing Box',
        category: 'accessory',
        description: 'Airtight storage for controlled fermentation.',
        affiliateLink: 'https://amzn.to/4iTlnQH',
        priceRange: 'low',
        tags: ['fermentation', 'storage', 'proofing', 'tools', 'pizza', 'bread'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Proofing+Box'
    },
    {
        id: 'pizza-peel',
        name: 'Perforated Pizza Peel',
        category: 'equipment',
        description: 'Launch pizzas easily, remove excess flour.',
        affiliateLink: 'https://amzn.to/493hEMZ',
        priceRange: 'medium',
        tags: ['pizza', 'oven', 'tools', 'launching', 'neapolitan'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Pizza+Peel'
    },
    {
        id: 'infrared-thermometer',
        name: 'Infrared Thermometer',
        category: 'equipment',
        description: 'Instant surface temp checks.',
        affiliateLink: 'https://amzn.to/4j9gGT7',
        priceRange: 'low',
        tags: ['temperature', 'oven', 'tools', 'baking', 'pizza'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=IR+Thermometer'
    },
    {
        id: 'sourdough-kit',
        name: 'Sourdough Starter Kit',
        category: 'equipment',
        description: 'Everything to start your wild yeast journey.',
        affiliateLink: 'https://amzn.to/48N6f2u',
        priceRange: 'medium',
        tags: ['sourdough', 'starter', 'wild-yeast', 'fermentation', 'bread'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Sourdough+Kit'
    },

    // --- OVENS ---
    {
        id: 'pizza-oven-1',
        name: 'Premium Outdoor Pizza Oven',
        category: 'equipment',
        description: 'Reach 900°F+ for authentic Neapolitan.',
        affiliateLink: 'https://amzn.to/3Y71Vqd',
        priceRange: 'high',
        tags: ['oven', 'pizza', 'outdoor', 'neapolitan', 'gas'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Outdoor+Oven+1'
    },
    {
        id: 'pizza-oven-2',
        name: 'Versatile Pizza Oven',
        category: 'equipment',
        description: 'Great for various styles and fast baking.',
        affiliateLink: 'https://amzn.to/4pwCiLu',
        priceRange: 'high',
        tags: ['oven', 'pizza', 'versatile', 'fast-bake'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Pizza+Oven+2'
    },
    {
        id: 'pizza-oven-3',
        name: 'Electric Indoor Pizza Oven',
        category: 'equipment',
        description: 'High heat safely inside your kitchen.',
        affiliateLink: 'https://amzn.to/4iPYsWf',
        priceRange: 'high',
        tags: ['oven', 'pizza', 'indoor', 'electric', 'convenient'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Indoor+Oven'
    },
    {
        id: 'pizza-oven-4',
        name: 'Compact Portable Oven',
        category: 'equipment',
        description: 'Take your pizza making anywhere.',
        affiliateLink: 'https://amzn.to/4aHEkne',
        priceRange: 'high',
        tags: ['oven', 'pizza', 'portable', 'compact'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Portable+Oven'
    },

    // --- BURGER BUNS ---
    {
        id: 'bun-pan',
        name: 'USA Pan Burger Bun Pan',
        category: 'equipment',
        description: 'Commercial grade aluminized steel for perfect uniform buns.',
        affiliateLink: 'https://amzn.to/3vIeZ6r',
        priceRange: 'medium',
        tags: ['burger buns', 'sandwich rolls', 'buns', 'tools', 'pan', 'baking', 'united states'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Bun+Pan'
    },
    {
        id: 'dry-milk',
        name: 'Baker\'s Dry Milk Powder',
        category: 'ingredient',
        description: 'Essential for soft, enriched crumb structure.',
        affiliateLink: 'https://amzn.to/3TKgP0d',
        priceRange: 'low',
        tags: ['burger buns', 'sandwich rolls', 'enriched', 'milk', 'ingredients', 'softness'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Dry+Milk'
    },
    {
        id: 'potato-flour',
        name: 'Potato Flour',
        category: 'ingredient',
        description: 'Attracts water for incredibly moist rolls.',
        affiliateLink: 'https://amzn.to/3TMxI9A',
        priceRange: 'low',
        tags: ['burger buns', 'sandwich rolls', 'potato', 'enriched', 'ingredients'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Potato+Flour'
    },
    {
        id: 'sesame-seeds',
        name: 'White Sesame Seeds',
        category: 'ingredient',
        description: 'The classic topping for authentic burger buns.',
        affiliateLink: 'https://amzn.to/4aHOv7p',
        priceRange: 'low',
        tags: ['burger buns', 'sandwich rolls', 'topping', 'seeds', 'ingredients'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Sesame+Seeds'
    },

    // --- BREAD TOOLS ---
    {
        id: 'bread-lame',
        name: 'Professional Bread Lame',
        category: 'accessory',
        description: 'Sharp scoring tool for beautiful artisan crust control.',
        affiliateLink: 'https://amzn.to/3TKgP0d',
        priceRange: 'low',
        tags: ['bread', 'tools', 'scoring', 'artisan'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Lame'
    },
    {
        id: 'banneton',
        name: 'Round Banneton Proofing Basket',
        category: 'accessory',
        description: 'Natural rattan for perfect moisture wicking during proofing.',
        affiliateLink: 'https://amzn.to/3vIeZ6r',
        priceRange: 'medium',
        tags: ['bread', 'tools', 'proofing', 'sourdough'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Banneton'
    },
    {
        id: 'dutch-oven',
        name: 'Enameled Cast Iron Dutch Oven',
        category: 'equipment',
        description: 'Traps steam for the ultimate bakery-style oven spring.',
        affiliateLink: 'https://amzn.to/499tDaX',
        priceRange: 'high',
        tags: ['bread', 'baking', 'oven', 'artisan', 'sourdough'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Dutch+Oven'
    },

    // --- PASTRY & COOKIE TOOLS ---
    {
        id: 'rolling-pin',
        name: 'Professional French Rolling Pin',
        category: 'accessory',
        description: 'Tapered design for maximum control and tactile feedback.',
        affiliateLink: 'https://amzn.to/3MEsekR',
        priceRange: 'low',
        tags: ['pastry', 'cookies', 'tools', 'rolling', 'flatbreads'],
        imageUrl: 'https://placehold.co/400x400/e2e8f0/475569?text=Rolling+Pin'
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
        if (normalizedContext.some(c => c.includes('oven')) && product.tags.includes('oven')) score += 5;
        if (normalizedContext.some(c => c.includes('flour')) && product.tags.includes('flour')) score += 5;

        // Randomize slightly to rotate equal scoring items (like the multiple ovens)
        score += Math.random() * 2;

        return { product, score };
    });

    // Filter out zero scores and sort descending
    const relevant = scored
        .filter(item => item.score > 2) // Minimum relevance
        .sort((a, b) => b.score - a.score)
        .map(item => item.product);

    return relevant.slice(0, limit);
};
