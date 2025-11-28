import { LearnArticleData } from '@/types/learn';

export const autolyseData: LearnArticleData = {
    id: 'autolyse',
    title: 'Autolyse: The Passive Development Technique',
    subtitle: 'Letting time and enzymes do the work of the mixer.',
    history: {
        heading: "Origins: Professor Calvel's Revolution",
        paragraphs: [
            "The term 'autolyse' was coined by Professor Raymond Calvel in France during the 1970s. At the time, French bakers were using intensive mechanical mixing to speed up production, which resulted in white, tasteless bread with a bleached crumb due to excessive oxidation.",
            "Calvel introduced the autolyse rest period to allow the dough to develop structure passively through enzymatic action rather than brute force. This restored the creamy color and rich flavor of traditional French bread while improving the dough's extensibility.",
            "Today, this technique is a cornerstone of artisan baking worldwide, used in everything from Tartine-style sourdough to high-hydration pizza doughs, allowing home bakers to achieve professional texture with less kneading."
        ]
    },
    sections: [
        {
            title: 'The Definition',
            content: [
                'True Autolyse is the mixing of ONLY flour and water, followed by a rest period (20 min to several hours). No salt. No yeast. No levain.',
                'During this rest, two things happen:',
                '1. Hydration: The flour particles absorb water completely.',
                '2. Enzymatic Action: Protease enzymes begin to degrade the gluten bonds slightly, and amylase enzymes turn starch into sugar.'
            ]
        },
        {
            title: 'The Biochemistry of Extensibility',
            content: [
                'The key player here is Protease. By snipping some of the gluten bonds, protease reduces the elasticity (snap-back) of the dough. This makes the dough more extensible (stretchy).',
                'This is crucial for high-hydration doughs or pizza styles that need to be stretched thin without tearing. It essentially "tames" the dough.'
            ]
        },
        {
            title: 'Autolyse vs. Fermentolyse',
            content: [
                '• Autolyse: Flour + Water only. Pure enzymatic activity. No fermentation.',
                '• Fermentolyse: Flour + Water + Leaven (Starter/Yeast). Fermentation begins immediately.',
                'Many bakers use Fermentolyse for convenience, but salt is always added LATER. Salt tightens the gluten network and inhibits enzymes, which counteracts the relaxation benefit of the autolyse.'
            ]
        }
    ],
    proTip: {
        content: 'The "Salt Shock". When adding salt after autolyse, the dough will tighten up dramatically. This is normal. Do not add all the remaining water at once; add it gradually (bassinage) to help the salt dissolve and incorporate without breaking the gluten structure.'
    },
    criticalPoint: {
        content: 'Duration Limits. A pure autolyse can go for hours (even overnight in the fridge). A fermentolyse is limited by the yeast activity; if you leave it too long, the dough will over-ferment and degrade before you even finish mixing.'
    },
    references: [
        {
            title: 'The Taste of Bread',
            author: 'Raymond Calvel',
            year: '2001'
        },
        {
            title: 'Modernist Bread',
            author: 'Nathan Myhrvold',
            year: '2017'
        },
        {
            title: 'Bread: A Baker\'s Book of Techniques and Recipes',
            author: 'Jeffrey Hamelman',
            year: '2004'
        },
        {
            title: 'Tartine Bread',
            author: 'Chad Robertson',
            year: '2010'
        },
        {
            title: 'Advanced Bread and Pastry',
            author: 'Michel Suas',
            year: '2008'
        },
        {
            title: 'Influence of Autolyse on Wheat Bread Quality',
            author: 'Journal of Food Processing',
            year: '2020'
        }
    ],
    affiliatePlacementKeys: ['learn_mixing_tools']
};
