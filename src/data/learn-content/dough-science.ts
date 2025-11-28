import { LearnArticleData } from '@/types/learn';

export const doughScienceData: LearnArticleData = {
    id: 'dough-science',
    title: 'Dough Science 101: The Complex System',
    subtitle: 'Understanding dough as a living biochemical ecosystem, not just a recipe.',
    history: {
        heading: "From Alchemy to Chemistry",
        paragraphs: [
            "For centuries, baking was considered more of an art or even magic than a science. Recipes were passed down orally, and success depended on 'feeling' the dough. The scientific understanding of gluten, enzymes, and yeast metabolism is a relatively recent development, pioneered in the 19th and 20th centuries.",
            "Scientists like Louis Pasteur (who discovered yeast) and the researchers at the Chopin Institute (who developed the Alveograph) transformed baking from a guessing game into a predictable engineering discipline. They allowed us to quantify properties like elasticity and extensibility.",
            "DoughLabPro is built on this scientific foundation. We treat dough as a complex biochemical system where every variable—temperature, hydration, time—can be measured and controlled to produce the perfect outcome every time."
        ]
    },
    sections: [
        {
            title: 'The Four Pillars',
            content: [
                'Dough is built on the interaction of four elements:',
                '1. Flour: The structural backbone (Gluten) and the fuel source (Starch).',
                '2. Water: The solvent that activates enzymes and hydrates proteins.',
                '3. Yeast: The biological engine producing gas and flavor.',
                '4. Salt: The regulator of structure and fermentation speed.'
            ]
        },
        {
            title: 'Viscoelasticity',
            content: [
                'Dough is a "viscoelastic" material. It is both viscous (flows like a liquid) and elastic (bounces back like a solid).',
                '• Viscosity allows it to expand.',
                '• Elasticity allows it to hold gas.',
                'The baker\'s job is to balance these two properties (P/L ratio) through hydration, mixing, and fermentation.'
            ]
        },
        {
            title: 'The Role of Time',
            content: [
                'Time is an ingredient. In baking, "Time = Flavor." Long fermentations allow enzymes to break down bland starches into sweet sugars and bland proteins into savory amino acids. A 24-hour dough is chemically different from a 2-hour dough, even if the recipe is identical.'
            ]
        }
    ],
    proTip: {
        content: 'Temperature is an Ingredient. You must treat temperature with the same precision as flour weight. A 2°C difference in final dough temperature can change the fermentation rate by 15-20%.'
    },
    criticalPoint: {
        content: 'The "W" Factor. Not all flour is created equal. You cannot make a high-hydration, long-fermentation dough with "All Purpose" flour (W180). You need strong flour (W300+) to withstand the stress of time and water.'
    },
    references: [
        {
            title: 'Bread Science: The Chemistry and Craft of Making Bread',
            author: 'Emily Buehler',
            year: '2006'
        },
        {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: '2004'
        },
        {
            title: 'The Science of Bakery Products',
            author: 'W.P. Edwards',
            year: '2007'
        },
        {
            title: 'Bakery Science and Technology',
            author: 'E.J. Pyler',
            year: '1988'
        },
        {
            title: 'Understanding Food Science and Technology',
            author: 'Peter S. Murano',
            year: '2003'
        },
        {
            title: 'Food Chemistry',
            author: 'H.-D. Belitz & W. Grosch',
            year: '2009'
        }
    ]
};
