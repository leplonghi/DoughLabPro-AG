import { LearnArticleData } from '@/types/learn';

export const ovenSpringData: LearnArticleData = {
    id: 'oven-spring',
    title: 'Oven Spring: The Thermodynamics of Expansion',
    subtitle: 'The explosive final rise of the dough in the first minutes of baking.',
    history: {
        heading: "From Wood-Fired to Electric",
        paragraphs: [
            "The phenomenon of oven spring has always been the baker's holy grail, but achieving it was difficult in ancient wood-fired ovens where temperature control was an art form. Bakers learned to read the color of the flame and the soot on the bricks to judge when the oven was hot enough to produce that critical initial burst of heat.",
            "The introduction of steam injection in the 19th century (Vienna Ovens) was a game-changer for bread, allowing for massive spring and thin, crispy crusts. For pizza, the challenge remained getting the oven hot enough (400°C+) to flash-cook the dough before it dried out.",
            "Modern electric deck ovens and high-performance home pizza ovens have democratized this process. We can now replicate the intense radiant heat of a Neapolitan wood oven or the steady saturation of a professional bread oven with the turn of a dial."
        ]
    },
    sections: [
        {
            title: 'The Mechanism of Spring',
            content: [
                'Oven spring is not just "yeast working faster." It is a physical phenomenon driven by three forces:',
                '1. Thermal Expansion of Gases: According to Charles\'s Law, gas volume increases with temperature. The CO₂ bubbles trapped in the dough expand rapidly.',
                '2. Vaporization of Water: Liquid water turns to steam, expanding 1,600 times in volume. This is the most powerful driver of volume.',
                '3. Solubility Decrease (Henry\'s Law): As dough heats up, CO₂ dissolved in the water comes out of solution and joins the gas bubbles.'
            ]
        },
        {
            title: 'The Race Against the Crust',
            content: [
                'Oven spring is a race. The dough tries to expand while the crust tries to harden (set).',
                '• If the crust sets too early (low humidity, low heat), expansion stops, resulting in a dense crumb.',
                '• If the crust stays flexible (steam, high heat), the dough can expand to its maximum potential before the structure solidifies.'
            ]
        },
        {
            title: 'The Role of Scoring (or Lack Thereof)',
            content: [
                'In bread, we score to direct this expansion. In pizza, the "cornicione" (rim) expands freely because we do not top it. The sauce and cheese in the center weigh down the dough and prevent spring, creating the distinction between the rim and the base.'
            ]
        }
    ],
    proTip: {
        content: 'Cold dough springs better. A cold dough ball has a more rigid gluten structure that traps gas better initially, and the temperature differential creates a more violent steam generation effect. However, it is harder to stretch.'
    },
    criticalPoint: {
        content: 'Over-proofing Kills Spring. If a dough is over-proofed, the gluten network is degraded and weak. When the gas expands in the oven, the weak balloon pops instead of stretching. The result is a flat, collapsed rim.'
    },
    references: [
        {
            title: 'Modernist Bread',
            author: 'Nathan Myhrvold',
            year: '2017'
        },
        {
            title: 'The Science of Baking',
            link: 'https://bakerpedia.com/processes/oven-spring/'
        },
        {
            title: 'Understanding Baking',
            author: 'Joseph Amendola',
            year: '2003'
        },
        {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: '2004'
        },
        {
            title: 'Bread Science',
            author: 'Emily Buehler',
            year: '2006'
        },
        {
            title: 'Journal of Cereal Science',
            author: 'Elsevier',
            year: 'Various'
        }
    ],
    affiliatePlacementKeys: ['learn_oven_bake']
};
