import { LearnArticleData } from '@/types/learn';

export const sensoryMaturationData: LearnArticleData = {
    id: 'sensory-maturation',
    title: 'Sensory Maturation: The Flavor Curve',
    subtitle: 'Why dough that looks ready might not taste ready.',
    history: {
        heading: "The Lost Art of Tasting",
        paragraphs: [
            "In the era of commodity bread, the definition of 'good bread' shifted from flavor to visual volume and whiteness. The sensory complexity of a naturally leavened loaf was often considered a defect (too sour, too dense) by industrial standards.",
            "The Slow Food movement and the artisan baking renaissance challenged this. Bakers began to talk about 'terroir' in grain and the 'finish' of a crust, borrowing language from wine tasting.",
            "DoughLabPro encourages you to develop your palate alongside your dough. Learning to recognize the subtle notes of lactic acid (yogurt) vs. acetic acid (vinegar) is just as important as reading a thermometer."
        ]
    },
    sections: [
        {
            title: 'The Disconnect Between Structure and Flavor',
            content: [
                'Dough development has two timelines:',
                '1. Structural Maturity (Gas Retention): Achieved when the gluten is strong and the yeast has produced enough CO₂ to inflate the ball.',
                '2. Sensory Maturity (Flavor): Achieved when enzymes have generated enough organic acids, amino acids, and sugars to create a complex profile.',
                'Often, structural maturity happens BEFORE sensory maturity. If you bake then, the pizza looks good but tastes bland.'
            ]
        },
        {
            title: 'The Role of Cold Fermentation',
            content: [
                'Cold fermentation aligns these two curves. By slowing down the yeast (structure), we allow the enzymes (flavor) to catch up. A 48-hour cold dough has a massive accumulation of flavor precursors compared to a 4-hour warm dough, even if they have the same volume.'
            ]
        },
        {
            title: 'Identifying Sensory Maturity',
            content: [
                '• Smell: Should be pleasant, slightly sour, yeasty, and fruity. Not sharp like vinegar or alcohol.',
                '• Touch: Should be soft and relaxed, leaving a fingerprint that slowly bounces back.',
                '• Sight: Small "fermentation freckles" (bubbles) on the surface indicate enzymatic activity.'
            ]
        }
    ],
    proTip: {
        content: 'The "Biga" Cheat Code. Using a preferment like Biga allows you to pre-ferment a portion of the flour to develop flavor (sensory maturity) before mixing the final dough, giving you a complex taste in a shorter overall timeframe.'
    },
    criticalPoint: {
        content: 'Over-Maturation. If you wait too long for flavor, the gluten degrades. You might get the best tasting pizza you\'ve ever made, but it will be flat and dense because the structure collapsed. Balance is key.'
    },
    references: [
        {
            title: 'Modernist Bread',
            author: 'Nathan Myhrvold',
            year: '2017'
        },
        {
            title: 'Flour Water Salt Yeast',
            author: 'Ken Forkish',
            year: '2012'
        }
    ]
};
