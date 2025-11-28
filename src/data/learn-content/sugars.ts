import { LearnArticleData } from '@/types/learn';

export const sugarsData: LearnArticleData = {
    id: 'sugars',
    title: 'Sugars: Fuel, Color & Tenderness',
    subtitle: 'The multiple roles of simple carbohydrates in dough rheology and baking.',
    history: {
        heading: "Honey, Molasses, and Refinement",
        paragraphs: [
            "Before the industrial refinement of sugar cane and beets, bakers relied on honey, fruit juices, or malted grains to sweeten and enrich their doughs. The Egyptians used honey in their breads, while medieval Europeans often used ale barm (rich in maltose) as both a leavening agent and a sweetener.",
            "The widespread availability of refined white sugar in the 19th century changed baking forever, allowing for consistent, high-sugar doughs that were previously impossible to manage. However, in the world of artisan pizza and bread, we often look back to malt (sprouted grains) as the superior 'sugar' for its enzymatic benefits.",
            "Understanding the source of your sugar—whether it's the simple sucrose of table sugar or the complex enzymatic package of diastatic malt—is key to controlling the color and fermentation rate of your final product."
        ]
    },
    sections: [
        {
            title: 'Yeast Food vs. Residual Sugar',
            content: [
                'Yeast consumes simple sugars (glucose, fructose, maltose).',
                '• Fermentation Fuel: The sugar consumed creates CO₂ (rise) and alcohol (flavor).',
                '• Residual Sugar: The sugar LEFT OVER after fermentation is what browns the crust (Maillard/Caramelization).',
                'If fermentation goes too long, yeast eats all the sugar. The result is a "pale" crust that refuses to brown, even at high heat.'
            ]
        },
        {
            title: 'Diastatic Malt (Enzymatic Sugar)',
            content: [
                'Diastatic malt contains active amylase enzymes. Adding it to flour converts the flour\'s own starch into sugar continuously. This ensures a steady supply of food for yeast AND residual sugar for browning, even in long fermentations.'
            ]
        },
        {
            title: 'Hygroscopy (Moisture Retention)',
            content: [
                'Sugar loves water (hygroscopic). High-sugar doughs (like brioche or some American pizza styles) hold onto moisture better, resulting in a softer crumb and longer shelf life.'
            ]
        }
    ],
    proTip: {
        content: 'Honey vs. Sugar. Honey is invert sugar (glucose + fructose) and is more hygroscopic than sucrose (table sugar). It creates a softer, moister crumb and browns faster. Adjust oven temp down by 10-15°C if swapping sugar for honey.'
    },
    criticalPoint: {
        content: 'The 2% Limit for High Heat. In a Neapolitan oven (450°C+), any added sugar will burn instantly before the dough cooks. Sugar is strictly for ovens below 350°C (Home ovens, NY Deck ovens).'
    },
    references: [
        {
            title: 'How Baking Works',
            author: 'Paula Figoni',
            year: '2010'
        },
        {
            title: 'The Bread Baker\'s Apprentice',
            author: 'Peter Reinhart',
            year: '2001'
        },
        {
            title: 'Sweeteners and Sugar Alternatives in Food Technology',
            author: 'Kay O\'Donnell',
            year: '2012'
        },
        {
            title: 'Understanding Baking',
            author: 'Joseph Amendola',
            year: '2003'
        },
        {
            title: 'Modernist Bread',
            author: 'Nathan Myhrvold',
            year: '2017'
        },
        {
            title: 'Journal of Food Science',
            author: 'IFT',
            year: 'Various'
        }
    ]
};
