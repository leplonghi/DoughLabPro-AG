import { LearnArticleData } from '@/types/learn';

export const prefermentsData: LearnArticleData = {
    id: 'preferments',
    title: 'Preferments: Biga, Poolish & Sponge',
    subtitle: 'Pre-fermenting a portion of flour to boost flavor, strength, and shelf life.',
    history: {
        heading: "European Traditions: Poland vs. Italy",
        paragraphs: [
            "The **Poolish** technique originated in Poland (hence the name) in the 1840s before being adopted by Viennese and then French bakers. It was the secret behind the lighter, airier breads that became popular in Paris, transitioning away from dense sourdoughs.",
            "**Biga** is the Italian answer to preferments. Traditionally used to strengthen weak Italian flours, the stiff Biga allowed bakers to create airy structures like Ciabatta even with lower-protein wheat. It became a staple for developing complex flavor without sourness.",
            "Modern pizza makers have adopted these techniques to engineer specific crust characteristics—Poolish for crispiness and Biga for massive, open corniciones—all of which you can calculate precisely in DoughLabPro."
        ]
    },
    sections: [
        {
            title: 'Poolish (Liquid Preferment)',
            content: [
                '• Hydration: 100% (Equal parts flour and water).',
                '• Fermentation: 8-16 hours at room temp or fridge.',
                '• Character: Creates a milky, creamy, nutty flavor. High protease activity leads to a very extensible dough with a thin, crispy crust.',
                '• Best For: Neapolitan Pizza, Baguettes.'
            ]
        },
        {
            title: 'Biga (Stiff Preferment)',
            content: [
                '• Hydration: 45-50% (Very dry, shaggy).',
                '• Fermentation: 16-48 hours (often cold).',
                '• Character: Creates an acidic, complex, aromatic flavor. The stiffness strengthens the gluten network, providing massive oven spring and an open, honeycomb crumb.',
                '• Best For: High hydration breads, Ciabatta, Roman Teglia, "Canotto" style pizza.'
            ]
        },
        {
            title: 'Sponge',
            content: [
                '• Hydration: Variable (60-65%).',
                '• Fermentation: Short (30 min - 4 hours).',
                '• Character: Used mainly to "jump start" the yeast in enriched doughs (sugar/fat) where yeast might struggle.'
            ]
        }
    ],
    proTip: {
        content: 'The 30% Rule. For pizza, pre-fermenting 30% of your total flour is the sweet spot. It gives you all the flavor benefits without making the final dough mixing overly complicated or difficult to manage.'
    },
    criticalPoint: {
        content: 'Biga Management. Biga is hard to mix. Do not knead it! It should be loose, shaggy chunks. If you knead it into a ball, you destroy the anaerobic core and it will over-heat. When mixing the final dough, cut the biga into small pieces to ensure it incorporates.'
    },
    references: [
        {
            title: 'Flour Water Salt Yeast',
            author: 'Ken Forkish',
            year: '2012'
        },
        {
            title: 'The Pizza Bible',
            author: 'Tony Gemignani',
            year: '2014'
        },
        {
            title: 'The Bread Baker\'s Apprentice',
            author: 'Peter Reinhart',
            year: '2001'
        },
        {
            title: 'Professional Baking',
            author: 'Wayne Gisslen',
            year: '2016'
        },
        {
            title: 'Baking and Pastry: Mastering the Art and Craft',
            author: 'The Culinary Institute of America',
            year: '2015'
        },
        {
            title: 'Bianco: Pizza, Pasta, and Other Food I Like',
            author: 'Chris Bianco',
            year: '2017'
        }
    ]
};
