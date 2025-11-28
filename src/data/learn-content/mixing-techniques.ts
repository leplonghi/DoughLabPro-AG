import { LearnArticleData } from '@/types/learn';

export const mixingTechniquesData: LearnArticleData = {
    id: 'mixing-techniques',
    title: 'Mixing Techniques: Energy & Oxidation',
    subtitle: 'How mechanical energy transforms flour and water into a structured network.',
    history: {
        heading: "From Troughs to Spirals",
        paragraphs: [
            "For most of human history, mixing was done by hand in wooden troughs. This was back-breaking labor that naturally limited the amount of oxidation and development a dough could receive, preserving the creamy color and flavor of the grain.",
            "The industrial revolution brought mechanical mixers, initially designed to mimic hand kneading. However, the invention of high-speed mixers in the 20th century led to the 'Chorleywood Bread Process'—a method of ultra-high-speed mixing that produced fluffy but flavorless white bread in minutes.",
            "Modern artisan baking has returned to 'improved' or 'short' mix techniques, often using spiral mixers that gently fold the dough without overheating it. DoughLabPro advocates for this balanced approach: mixing just enough to develop structure, but stopping before you bleach out the flavor."
        ]
    },
    sections: [
        {
            title: 'The Phases of Mixing',
            content: [
                '1. Incorporation: Combining ingredients. No structure yet.',
                '2. Development: Gluten bonds form. Dough becomes cohesive.',
                '3. Peak Development: Maximum strength. Dough cleans the bowl. Windowpane test passes.',
                '4. Breakdown (Overmixing): Gluten bonds shatter due to excessive oxidation and mechanical stress. Dough becomes sticky and wet.'
            ]
        },
        {
            title: 'Friction Factor',
            content: [
                'Mixing generates heat. The "Friction Factor" is the temperature increase caused by the mixer.',
                '• Spiral Mixer: Low friction (+5°C to +8°C). Ideal for pizza.',
                '• Planetary/Stand Mixer: High friction (+10°C to +15°C). Heats dough rapidly.',
                '• Hand Mixing: Zero friction. Requires warm water to compensate.',
                'You must calculate your water temperature based on your mixer\'s friction factor to hit the target FDT (Final Dough Temp).'
            ]
        },
        {
            title: 'Oxidation',
            content: [
                'Mixing introduces oxygen. Oxygen strengthens gluten (good) but destroys carotenoid pigments (flavor/color) (bad).',
                '• Intensive Mixing: Very white crumb, huge volume, bland flavor (Supermarket bread).',
                '• Improved/Short Mixing: Creamy crumb, lower volume, superior flavor (Artisan bread/Pizza).'
            ]
        }
    ],
    proTip: {
        content: 'Bassinage (Double Hydration). For high hydration doughs (>70%), do not add all water at once. Mix with 60-65% water until gluten forms, then slowly trickle in the remaining water. This allows the gluten to build strength before being diluted.'
    },
    criticalPoint: {
        content: 'Don\'t Mix by Time, Mix by Feel. "Mix for 10 minutes" is a useless instruction. 10 minutes in a KitchenAid is different from 10 minutes in a Sunmix. Stop when the dough is smooth and passes the windowpane test, regardless of the clock.'
    },
    references: [
        {
            title: 'Advanced Bread and Pastry',
            author: 'Michel Suas',
            year: '2008'
        },
        {
            title: 'Modernist Bread',
            author: 'Nathan Myhrvold',
            year: '2017'
        },
        {
            title: 'The Taste of Bread',
            author: 'Raymond Calvel',
            year: '2001'
        },
        {
            title: 'Bread: A Baker\'s Book of Techniques and Recipes',
            author: 'Jeffrey Hamelman',
            year: '2004'
        },
        {
            title: 'Baking Science & Technology',
            author: 'E.J. Pyler',
            year: '1988'
        },
        {
            title: 'Journal of Food Engineering',
            author: 'Various Authors',
            year: '2010'
        }
    ],
    affiliatePlacementKeys: ['learn_mixing_tools']
};
