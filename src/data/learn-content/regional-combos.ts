import { LearnArticleData } from '@/types/learn';

export const regionalCombosData: LearnArticleData = {
    id: 'regional-combos',
    title: 'Regional Flavor Profiles: The Science of Tradition',
    subtitle: 'Why certain ingredient combinations have survived for centuries: a chemical analysis of balance.',
    history: {
        heading: "Geography as Destiny",
        paragraphs: [
            "Before global trade, pizza toppings were dictated by local agriculture and climate. In Naples, the volcanic soil of Mount Vesuvius produced the intense San Marzano tomato, while the marshlands were home to water buffalo for mozzarella.",
            "In contrast, Northern Italian styles relied more on lard and hard cheeses due to the cooler climate, while Sicilian pizza incorporated Arab influences like onions and breadcrumbs.",
            "Today, we can access ingredients from anywhere, but understanding these historical constraints helps us appreciate why specific flavor combinations—like the classic Margherita—became timeless standards rather than passing trends."
        ]
    },
    sections: [
        {
            title: 'Campania (Neapolitan): The Acid/Fat Balance',
            content: [
                'The classic Margherita is a masterclass in pH balancing.',
                '• San Marzano Tomatoes: High acidity (pH ~4.2) and sweetness.',
                '• Buffalo Mozzarella: High fat (~24%) and rich mouthfeel.',
                '• Basil: Volatile aromatic oils (eugenol).',
                'The acidity cuts through the fat, cleansing the palate, while the fat coats the tongue to mitigate the acid burn. The basil provides the aromatic "top note" that lifts the heavy base.'
            ]
        },
        {
            title: 'New York: The Umami/Oregano Punch',
            content: [
                'NY Style is defined by intensity.',
                '• Low-Moisture Mozzarella: Dense protein/fat matrix.',
                '• Sauce: Often cooked or heavily seasoned with garlic and dried oregano.',
                '• Dried Oregano: Contains carvacrol, a potent phenolic compound that survives high heat better than fresh basil, providing an earthy, savory backbone that stands up to the heavy cheese.'
            ]
        },
        {
            title: 'Sicily (Sfincione): The Sweet/Salty Contrast',
            content: [
                'Sicilian pizza often features onions, anchovies, and breadcrumbs.',
                '• Caramelized Onions: High sugar content.',
                '• Anchovies/Caciocavallo: Intense salt and glutamate (umami).',
                'This creates a "high amplitude" flavor profile where the brain oscillates between sweet and salty signals, increasing the desire for the next bite.'
            ]
        }
    ],
    proTip: {
        content: 'Respect the "Terroir". Ingredients from the same region often share chemical affinities. Pairing a delicate Buffalo Mozzarella with a heavy, garlic-laden NY sauce often fails because the sauce overwhelms the subtle lactic tang of the cheese.'
    },
    criticalPoint: {
        content: 'Ingredient Weight. Regional styles are also defined by the ratio of topping weight to dough weight. Neapolitan is balanced (1:1:1). American styles are often top-heavy. If you put NY quantities on a Neapolitan dough, it will collapse and fail to bake.'
    },
    references: [
        {
            title: 'The Flavor Bible',
            author: 'Karen Page & Andrew Dornenburg',
            year: '2008'
        },
        {
            title: 'Gastrophysics: The New Science of Eating',
            author: 'Charles Spence',
            year: '2017'
        },
        {
            title: 'Pizza: A Global History',
            author: 'Carol Helstosky',
            year: '2008'
        },
        {
            title: 'Essentials of Classic Italian Cooking',
            author: 'Marcella Hazan',
            year: '1992'
        },
        {
            title: 'American Pie: My Search for the Perfect Pizza',
            author: 'Peter Reinhart',
            year: '2003'
        },
        {
            title: 'Where to Eat Pizza',
            author: 'Daniel Young',
            year: '2016'
        }
    ]
};
