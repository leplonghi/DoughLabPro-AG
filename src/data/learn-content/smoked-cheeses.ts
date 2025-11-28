import { LearnArticleData } from '@/types/learn';

export const smokedCheesesData: LearnArticleData = {
    id: 'smoked-cheeses',
    title: 'Smoked Cheeses: Surface Area & Melting Point',
    subtitle: 'Provola, Scamorza, and Gouda: How smoking alters the melting behavior.',
    sections: [
        {
            title: 'The Rind Effect',
            content: [
                'Smoking creates a "rind" or skin on the cheese due to dehydration and the deposition of tars/resins from the smoke.',
                'This rind has a higher melting point than the interior paste. When baked, smoked cheese often holds its shape better (cubes stay cubes) rather than flowing into a puddle.'
            ]
        },
        {
            title: 'Scamorza vs. Provola',
            content: [
                '• Provola Affumicata: Usually a fresh mozzarella that is briefly smoked. High moisture, melts easily, subtle smoke.',
                '• Scamorza: Aged longer, lower moisture, firmer texture. Melts into a chewy, stringy consistency. Intense smoke.',
                'Neapolitan pizza often uses Provola for a "wet" melt, while Roman styles might use Scamorza for texture.'
            ]
        },
        {
            title: 'Flavor Intensity vs. Quantity',
            content: [
                'Because smoked cheese is intense, it is often cut with regular mozzarella (50/50 blend) to provide the melt and stretch without overpowering the pizza with smoke flavor.'
            ]
        }
    ],
    proTip: {
        content: 'Julienne vs. Cubes. For smoked cheese, a fine julienne (matchsticks) encourages better melting by breaking the "rind" structure. Cubes will often remain distinct and chewy.'
    },
    criticalPoint: {
        content: 'Acidity Clash. Smoked cheese is acidic. Tomato sauce is acidic. Sourdough is acidic. If you combine all three, the pizza can taste sour. Balance smoked cheese with sweet elements (caramelized onions, cream, sweet vegetables).'
    },
    references: [
        {
            title: 'The Oxford Companion to Cheese',
            author: 'Catherine Donnelly',
            year: '2016'
        },
        {
            title: 'Serious Eats: Cheese Guide',
            link: 'https://www.seriouseats.com/cheese-guide'
        }
    ]
};
