import { LearnArticleData } from '@/types/learn';

export const waterData: LearnArticleData = {
    id: 'water',
    title: 'Water: Hardness, pH & Chlorine',
    subtitle: 'The invisible ingredient that makes up 40% of your dough mass.',
    history: {
        heading: "From Aqueducts to Filtration",
        paragraphs: [
            "Historically, bakers had to rely on whatever local water source was available, which heavily influenced regional bread styles. The hard, mineral-rich water of New York is often cited as a key factor in the texture of its famous bagels and pizza crusts, while softer water in other regions produced different results.",
            "Before modern sanitation, water was often a source of contamination. The fermentation process and the baking heat were crucial for making grain-based foods safe to eat. Today, while safety isn't an issue, the chemical composition of tap water (chlorine, chloramines) has become a new challenge for the modern baker.",
            "DoughLabPro encourages you to treat water as an ingredient, not just a utility. Understanding its mineral content and temperature is the first step towards consistent, professional-quality dough."
        ]
    },
    sections: [
        {
            title: 'Water Hardness (Mineral Content)',
            content: [
                'Hardness refers to calcium and magnesium ions.',
                '• Too Soft: Dough is sticky, slack, and gluten is weak. (Minerals help cross-link gluten).',
                '• Too Hard: Gluten is too tight/tough. Fermentation is slowed.',
                '• Ideal: Moderately hard (100-150 ppm). Most bottled "Spring Water" is perfect.'
            ]
        },
        {
            title: 'pH Levels',
            content: [
                'Yeast prefers a slightly acidic environment (pH 5-6).',
                '• Alkaline Water (>7.5): Slows fermentation and can degrade gluten.',
                '• Acidic Water (<5): Can make dough too tight initially.',
                'Tap water is usually neutral to slightly alkaline.'
            ]
        },
        {
            title: 'Chlorine & Chloramine',
            content: [
                'Municipal water is treated to kill bacteria. Yeast is a fungus, but chlorine can damage it.',
                '• Chlorine: Evaporates if water sits out for 24h.',
                '• Chloramine: Does NOT evaporate. Must be filtered (carbon filter) or neutralized (Campden tablet).',
                'High chlorine levels can kill your sourdough starter or inhibit commercial yeast.'
            ]
        }
    ],
    proTip: {
        content: 'Temperature Control. Water is the easiest variable to change to control final dough temperature (FDT). Use ice water in summer and warm water in winter to hit your target 24°C dough temp.'
    },
    criticalPoint: {
        content: 'Reverse Osmosis Warning. RO water is completely stripped of minerals. It is "too pure." If using RO water, you may need to add a pinch of mineral salt or mix it with spring water to restore the ions needed for gluten structure.'
    },
    references: [
        {
            title: 'Water Quality & Baking',
            link: 'https://www.kingarthurbaking.com/blog/2019/02/19/water-for-bread-baking'
        },
        {
            title: 'Modernist Bread',
            author: 'Nathan Myhrvold',
            year: '2017'
        },
        {
            title: 'Water in Foods',
            author: 'P. Fito & A. Chiralt',
            year: '1994'
        },
        {
            title: 'The Baker\'s Manual',
            author: 'Joseph Amendola',
            year: '2001'
        },
        {
            title: 'Handbook of Food Science, Technology, and Engineering',
            author: 'Y.H. Hui',
            year: '2006'
        },
        {
            title: 'Journal of Agricultural and Food Chemistry',
            author: 'ACS Publications',
            year: 'Various'
        }
    ],
    affiliatePlacementKeys: ['learn_hydration_context']
};
