import { LearnArticleData } from '@/types/learn';

export const yeastsData: LearnArticleData = {
    id: 'yeasts',
    title: 'Yeasts: Commercial vs. Wild',
    subtitle: 'Understanding the biological engine of your dough.',
    history: {
        heading: "The Taming of the Microbe",
        paragraphs: [
            "For most of human history, all bread was sourdough. Bakers relied on 'starters' passed down through generations or captured from the air. It wasn't until the 1860s, thanks to Louis Pasteur, that we identified yeast as a living organism.",
            "The Fleischmann brothers introduced the first commercial compressed yeast in America in 1868, revolutionizing baking by offering consistent, predictable results without the daily maintenance of a starter. Instant yeast followed in the 1970s, further simplifying the process.",
            "DoughLabPro allows you to switch seamlessly between these historical methods—calculating precise amounts for commercial yeast or managing the complex ratios of a wild sourdough culture."
        ]
    },
    sections: [
        {
            title: 'Commercial Yeast Types',
            content: [
                'Saccharomyces cerevisiae is the single species used in all commercial baking.',
                '• Fresh Yeast (CY): 70% water. Highly active. Short shelf life. The gold standard for aroma.',
                '• Active Dry (ADY): Granules coated in dead yeast cells. Must be proofed in warm water. Slower start.',
                '• Instant Dry (IDY): Porous rods. Dissolves instantly. Potent. 3x stronger than Fresh by weight.'
            ]
        },
        {
            title: 'Conversion Rates',
            content: [
                'Because water content varies, you must convert when swapping types:',
                '• 1g Instant (IDY) = 1.2g Active Dry (ADY) = 3g Fresh (CY).',
                'Always weigh yeast with a precision scale (0.01g). Teaspoons are wildly inaccurate.'
            ]
        },
        {
            title: 'Wild Yeast (Sourdough/Levain)',
            content: [
                'A symbiotic culture of wild yeast (often Candida milleri or S. exiguus) and Lactic Acid Bacteria (Lactobacillus sanfranciscensis).',
                '• Slower fermentation (requires hours, not minutes).',
                '• Complex flavor (Acidity from bacteria).',
                '• Stronger dough structure (Acidity strengthens gluten).',
                '• Longer shelf life (Acidity inhibits mold).'
            ]
        }
    ],
    proTip: {
        content: 'Yeast never dies in the fridge. It just sleeps. You can keep fresh yeast for weeks if wrapped tightly, or freeze it (though it loses ~10% potency). Dry yeast keeps for months in the freezer.'
    },
    criticalPoint: {
        content: 'Thermal Death Point. Yeast begins to die at 50°C and is completely dead at 60°C. Never dissolve yeast in hot water. Use lukewarm (30-35°C) or cold water.'
    },
    references: [
        {
            title: 'The Art of Fermentation',
            author: 'Sandor Katz',
            year: '2012'
        },
        {
            title: 'Modernist Bread',
            author: 'Nathan Myhrvold',
            year: '2017'
        },
        {
            title: 'Yeast: The Practical Guide to Beer Fermentation',
            author: 'Chris White & Jamil Zainasheff',
            year: '2010'
        },
        {
            title: 'Bread Science: The Chemistry and Craft of Making Bread',
            author: 'Emily Buehler',
            year: '2006'
        },
        {
            title: 'The Bread Builders',
            author: 'Daniel Wing & Alan Scott',
            year: '1999'
        },
        {
            title: 'Sourdough',
            author: 'Sarah Owens',
            year: '2015'
        }
    ]
};
