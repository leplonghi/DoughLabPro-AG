import { LearnArticleData } from '@/types/learn';

export const caramelizableVegetablesData: LearnArticleData = {
    id: 'caramelizable-vegetables',
    title: 'Caramelizable Vegetables: The Maillard & Pyrolysis Spectrum',
    subtitle: 'Transforming simple plant sugars into complex aromatic compounds through controlled heat application.',
    history: {
        heading: "Peasant Roots",
        paragraphs: [
            "In Italian 'Cucina Povera' (peasant cooking), vegetables were often the main event, not a side dish. Slow-cooking onions or peppers until they were meltingly soft and sweet was a way to extract maximum flavor from humble ingredients.",
            "The 'Peperonata' of the south or the 'Caramelized Onion' focaccias of the north are classic examples of this technique. These toppings weren't just thrown on raw; they were treated with the same care as a ragù.",
            "Modern pizza often rushes this step, using raw veggies that steam instead of roast. DoughLabPro advocates for pre-cooking your vegetables to honor the traditional flavor profiles that only time and heat can unlock."
        ]
    },
    sections: [
        {
            title: 'Caramelization vs. Maillard Reaction',
            content: [
                'While often used interchangeably, these are distinct chemical processes. The Maillard reaction involves amino acids and reducing sugars and occurs at lower temperatures (around 140°C). Caramelization is the pyrolysis (thermal decomposition) of sugar alone and occurs at higher temperatures (160°C+).',
                'Vegetables like onions and peppers undergo both. Initially, the Maillard reaction creates savory, roasted notes. As the temperature rises and water evaporates, the natural sugars (glucose, fructose) begin to caramelize, adding sweetness and bitterness.'
            ]
        },
        {
            title: 'The Sugar Matrix',
            content: [
                'Not all vegetables caramelize equally. High-sugar vegetables are ideal candidates:',
                '• Onions: Rich in fructans that break down into fructose.',
                '• Red Peppers: High glucose content.',
                '• Carrots: High sucrose content.',
                'Low-sugar vegetables (like zucchini or spinach) will burn (carbonize) before they caramelize effectively.'
            ]
        },
        {
            title: 'Moisture Management',
            content: [
                'Water is the enemy of browning. As long as free water is evaporating, the surface temperature cannot exceed 100°C—too low for Maillard or Caramelization.',
                'To achieve proper caramelization on a pizza (which bakes quickly), vegetables must often be pre-cooked or cut very thinly to allow rapid dehydration.'
            ]
        },
        {
            title: 'Flavor Pairing',
            content: [
                'Caramelized vegetables add a distinct "agrodolce" (sweet-sour) or pure sweet note. This pairs exceptionally well with high-salt ingredients (cured meats, Pecorino) or high-acid ingredients (tomato sauce, vinegar glazes), creating a balanced flavor profile.'
            ]
        }
    ],
    proTip: {
        content: 'For onions, use the "dry sweat" technique. Start them in a pan with salt but no oil to draw out moisture rapidly, then add fat to conduct heat for browning. This accelerates the process significantly.'
    },
    criticalPoint: {
        content: 'The Acrylamide Threshold: Burning vs. Browning. Charring vegetables (blackening) creates bitter carbon and potentially harmful acrylamides. Aim for deep mahogany or amber colors, not black, unless specifically seeking a "charred" flavor profile (like in some Neapolitan styles).'
    },
    references: [
        {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: '2004'
        },
        {
            title: 'The Food Lab',
            author: 'J. Kenji López-Alt',
            year: '2015'
        }
    ]
};
