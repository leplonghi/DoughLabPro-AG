export interface Ad {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    ctaLink: string;
    ctaText: string;
    category: 'oven' | 'flour' | 'tool' | 'course';
    priority: number; // Higher shows more often
}

export const ADS_CATALOG: Ad[] = [
    {
        id: 'ooni_koda_16',
        title: 'Ooni Koda 16 Gas Powered Pizza Oven',
        description: 'Cook stone-baked fresh pizza in just 60 seconds.',
        imageUrl: 'https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=600',
        ctaLink: 'https://ooni.com',
        ctaText: 'Shop Ooni',
        category: 'oven',
        priority: 10
    },
    {
        id: 'caputo_00_flour',
        title: 'Antimo Caputo Pizzeria 00 Flour',
        description: 'The gold standard for Neapolitan pizza dough.',
        imageUrl: 'https://images.unsplash.com/photo-1627485937980-221c88ac04f9?auto=format&fit=crop&q=80&w=600',
        ctaLink: 'https://amazon.com',
        ctaText: 'Buy Now',
        category: 'flour',
        priority: 8
    },
    {
        id: 'gozney_dome',
        title: 'Gozney Dome',
        description: 'The professional outdoor oven. Roast, smoke, steam or bake.',
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
        ctaLink: 'https://gozney.com',
        ctaText: 'Discover Dome',
        category: 'oven',
        priority: 9
    },
    {
        id: 'challenger_bread_pan',
        title: 'Challenger Bread Pan',
        description: 'Bake the perfect loaf of sourdough bread at home.',
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
        ctaLink: 'https://challengerbreadware.com',
        ctaText: 'Get the Pan',
        category: 'tool',
        priority: 7
    }
];
