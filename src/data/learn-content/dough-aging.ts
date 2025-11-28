import { LearnArticleData } from '@/types/learn';

export const doughAgingData: LearnArticleData = {
    id: 'dough-aging',
    title: 'Dough Aging: Maturation, Fermentation & Degradation',
    subtitle: 'The lifecycle of dough: from the "Green" phase to the "Peak" and the inevitable decline into degradation.',
    history: {
        heading: "The Rediscovery of Time",
        paragraphs: [
            "In the rush for industrial efficiency during the mid-20th century, time was the enemy. Additives and intensive mixing were used to force dough to mature in minutes rather than hours. The result was bread that looked perfect but lacked the depth of flavor and digestibility of traditional loaves.",
            "The artisan bread revival of the 1990s brought 'retarding' (cold fermentation) back into the spotlight. Bakers rediscovered that simply putting dough in a refrigerator overnight could transform a mediocre recipe into a world-class product.",
            "Today, the concept of 'aging' dough is standard practice in top pizzerias. It's not just about convenience; it's about unlocking the full potential of the grain through the patient work of enzymes."
        ]
    },
    sections: [
        {
            title: 'Maturation vs. Fermentation',
            content: [
                'These are two parallel but distinct clocks ticking in your dough.',
                '• Fermentation is the biological activity of yeast (producing CO₂ and alcohol). It happens relatively fast.',
                '• Maturation is the enzymatic and chemical breakdown of proteins and starches. It happens relatively slowly.',
                'The goal of "Aging" (usually via Cold Fermentation) is to slow down fermentation so that maturation can catch up. A dough is "mature" when it has developed optimal flavor and extensibility.'
            ]
        },
        {
            title: 'The "Peak" Window',
            content: [
                'Every dough has a "Peak"—the moment where gas retention is maximal, gluten is extensible but strong, and sugars are available for browning.',
                '• Before Peak (Green): Dough is tough, elastic, lacks flavor, and browns poorly.',
                '• At Peak: Dough opens easily, springs oven-high, and tastes complex.',
                '• Past Peak (Overblown): Dough is sticky, tears easily, smells acidic/alcoholic, and collapses in the oven.'
            ]
        },
        {
            title: 'Proteolytic Degradation',
            content: [
                'Over time, protease enzymes cut the gluten bonds. Initially, this is good (extensibility). Eventually, it destroys the network. The dough turns into a batter-like sludge that cannot hold gas. This is irreversible.'
            ]
        },
        {
            title: 'Starch Retrogradation (Staling)',
            content: [
                'Aging also affects the final product\'s shelf life. A well-aged dough with sufficient acidity (from fermentation) resists staling (retrogradation) longer than a quick dough. The acidity inhibits the recrystallization of starch molecules.'
            ]
        }
    ],
    proTip: {
        content: 'The "Poke Test" is less reliable for cold dough. Instead, look for the "doming" at the bottom of the container. A well-proofed dough ball will have flattened slightly but still retain a convex shape. If it is completely flat and spreading like a pancake, it is likely over-aged.'
    },
    criticalPoint: {
        content: 'The 72-Hour Wall. For most standard flours (W280–320), going beyond 72 hours of cold fermentation yields diminishing returns and high risk of gluten breakdown. Only extremely strong flours (W350+, like Manitoba) can withstand 96+ hours effectively.'
    },
    references: [
        {
            title: 'The Taste of Bread',
            author: 'Raymond Calvel',
            year: '2001'
        },
        {
            title: 'Bread Science',
            author: 'Emily Buehler',
            year: '2006'
        }
    ]
};
