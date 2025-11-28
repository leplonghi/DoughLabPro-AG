import { LearnArticleData } from '@/types/learn';

export const fatsData: LearnArticleData = {
    id: 'fats',
    title: 'Fats (Lipids): The Shortening Effect & Flavor',
    subtitle: 'How oil, lard, and butter modify the gluten network and alter the texture of the crumb.',
    history: {
        heading: "Lard, Oil, and Luxury",
        paragraphs: [
            "In the history of Italian baking, fat was often a luxury. The original Neapolitan pizza was a street food for the poor, typically made with a lean dough (flour, water, salt, yeast). However, the addition of lard (strutto) was common in richer variations or for special occasions, providing calories and tenderness.",
            "Olive oil, while abundant in the Mediterranean, was historically more expensive than pork fat in many inland regions. It wasn't until the mid-20th century that olive oil became the standard fat for pizza doughs globally, prized for its health benefits and flavor profile.",
            "Today, the choice of fat is a stylistic signature. Roman Teglia often uses olive oil for crunch, while some traditionalists still swear by a touch of lard for the ultimate flaky crust. DoughLabPro helps you balance these fats without compromising your gluten structure."
        ]
    },
    sections: [
        {
            title: 'The "Shortening" Effect',
            content: [
                'Fats are hydrophobic. When introduced to dough, they coat the flour proteins (gliadin and glutenin). This physical barrier prevents these proteins from hydrating fully and linking up to form long gluten chains.',
                'The result is "shorter" gluten strands. This translates to a softer, more tender crumb (like a brioche or a soft bun) rather than a chewy, tough crumb (like a baguette). In pizza, oil contributes to a tender "melt-in-the-mouth" bite.'
            ]
        },
        {
            title: 'Moisture Retention',
            content: [
                'Fat does not evaporate. It remains liquid (or semi-solid) in the baked product, providing a sensation of moistness even when the water content is lower. It also creates a barrier that slows down staling (moisture loss) after baking.'
            ]
        },
        {
            title: 'Heat Transfer & Frying',
            content: [
                'Fat on the surface of the dough (from the pan or added on top) conducts heat much more efficiently than air. This leads to the "frying" effect seen in Pan Pizzas or Focaccia, creating a crispy, golden micro-crust that is distinct from the dry crunch of a lean dough.'
            ]
        },
        {
            title: 'Types of Fat',
            content: [
                '• Olive Oil: Liquid at room temp. Adds distinct flavor and tenderness. Standard for many Italian styles.',
                '• Lard (Strutto): Solid at room temp. Creates a flaky texture. Traditional in Neapolitan doughs historically and Roman styles.',
                '• Butter: Contains water and milk solids. Adds flavor but burns easily at high pizza temps.'
            ]
        }
    ],
    proTip: {
        content: 'Always add fat LATE in the mixing process (after the pumpkin stage). If you add oil before the water hydrates the flour, you will coat the dry flour and permanently inhibit gluten formation, leading to a dough that never comes together.'
    },
    criticalPoint: {
        content: 'The 3% Threshold. Going beyond 3% fat by weight significantly changes the dough rheology. It becomes much softer and less elastic. High-fat doughs (5%+) often require stronger flour to compensate for the weakening of the gluten network.'
    },
    references: [
        {
            title: 'How Baking Works',
            author: 'Paula Figoni',
            year: '2010'
        },
        {
            title: 'The Pizza Bible',
            author: 'Tony Gemignani',
            year: '2014'
        },
        {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: '2004'
        },
        {
            title: 'Bakery Products: Science and Technology',
            author: 'Y.H. Hui',
            year: '2006'
        },
        {
            title: 'Fats in Food Technology',
            author: 'K.K. Rajah',
            year: '2002'
        },
        {
            title: 'Journal of the American Oil Chemists\' Society',
            author: 'Springer',
            year: 'Various'
        }
    ]
};
