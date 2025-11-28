import { LearnArticleData } from '@/types/learn';

export const smokedAromaticsData: LearnArticleData = {
    id: 'smoked-aromatics',
    title: 'Smoked Aromatics: Phenols & Flavor Saturation',
    subtitle: 'The chemistry of smoke and how to use it without overwhelming the palate.',
    sections: [
        {
            title: 'The Chemistry of Smoke',
            content: [
                'Smoke flavor comes primarily from phenolic compounds (guaiacol, syringol) and carbonyls produced during the incomplete combustion of wood.',
                'These compounds are extremely potent. Humans can detect them in parts per billion. They bind strongly to fat and proteins.'
            ]
        },
        {
            title: 'The Saturation Problem',
            content: [
                'Because smoke compounds are so volatile and potent, they quickly saturate the olfactory receptors (nose blindness).',
                'If a pizza has smoked cheese, smoked meat, and a wood-fired crust, the brain stops registering "smoke" and starts registering "acrid" or "bitter." The nuance is lost.'
            ]
        },
        {
            title: 'Strategic Application',
            content: [
                'Use smoke as an accent, not a base.',
                '• Smoked Salt: A finishing touch that adds pops of smoke.',
                '• Smoked Oil: Allows precise dosing.',
                '• Cold Smoking: Smoking ingredients (like mozzarella) at low temps preserves their texture while adding flavor.'
            ]
        }
    ],
    proTip: {
        content: 'Liquid Smoke is not the enemy. High-quality liquid smoke is just condensed smoke vapor. It allows for precise, chemical-free addition of smoke flavor to sauces or oils without the hassle of a smoker.'
    },
    criticalPoint: {
        content: 'Wood Selection Matters. Hardwoods (Oak, Hickory) produce strong, savory smoke. Fruitwoods (Apple, Cherry) produce sweeter, milder smoke. Using a heavy wood like Mesquite on a delicate pizza can taste like gasoline.'
    },
    references: [
        {
            title: 'Modernist Cuisine',
            author: 'Nathan Myhrvold',
            year: '2011'
        },
        {
            title: 'Franklin Barbecue: A Meat-Smoking Manifesto',
            author: 'Aaron Franklin',
            year: '2015'
        }
    ]
};
