import { LearnArticleData } from '@/types/learn';

export const lowMoistureCheesesData: LearnArticleData = {
    id: 'low-moisture-cheeses',
    title: 'Low-Moisture Cheeses: The Science of Melt & Stretch',
    subtitle: 'Why "Low-Moisture Whole Milk" (LMWM) mozzarella is the gold standard for NY and American pizza styles.',
    history: {
        heading: "The American Adaptation",
        paragraphs: [
            "While fresh mozzarella is the king of Naples, low-moisture mozzarella is an American invention born of necessity. Italian immigrants in the early 20th century needed a cheese with a longer shelf life that could be transported across the vast distances of the United States.",
            "By lowering the moisture content and slightly aging the curd, cheesemakers created a product that was more durable, melted more evenly in the slower gas ovens of New York, and had a distinctively tangy, salty flavor profile.",
            "This 'pizza cheese' became the backbone of the American pizza industry. Today, even artisan pizzerias recognize that for certain styles—like NY Slice or Detroit Deep Dish—nothing beats the stretch and browning of a high-quality low-moisture block."
        ]
    },
    sections: [
        {
            title: 'Moisture Content & Baking Performance',
            content: [
                'Fresh Mozzarella (Fior di Latte) has a water content of ~50–60%. Low-Moisture Mozzarella has ~45–52%. This small difference is massive in a 300°C oven.',
                '• High Moisture: Releases water rapidly ("souping"), boiling on top of the pizza. Ideal for very fast, high-heat bakes (90 seconds) where evaporation is explosive.',
                '• Low Moisture: Melts slowly without releasing excessive water. Ideal for longer bakes (5–10 minutes) typical of NY Style or Pan Pizza.'
            ]
        },
        {
            title: 'The Protein Matrix (Casein)',
            content: [
                'Cheese stretch comes from the casein protein network. In low-moisture mozzarella, the aging and acidification process (cheddaring) aligns these proteins.',
                'When heated, the fat melts and lubricates the protein strands, allowing them to slide past each other without breaking—creating the iconic "cheese pull."'
            ]
        },
        {
            title: 'Maillard Reaction on Cheese',
            content: [
                'The brown spots on cheese are the Maillard reaction occurring on the milk proteins and residual lactose. Low-moisture cheese browns more readily than fresh cheese because the surface dries out faster, allowing the temperature to climb above 140°C.'
            ]
        },
        {
            title: 'Oil-Off (Free Oil Formation)',
            content: [
                'As cheese melts, the fat emulsion can break, releasing liquid oil. Some oil-off is desirable for flavor and mouthfeel. Excessive oil-off (greasy pizza) usually comes from:',
                '1. Over-fermented cheese (pH too low).',
                '2. Baking too long at too low a temperature.',
                '3. Using cheese with extremely high fat content without balancing it.'
            ]
        }
    ],
    proTip: {
        content: 'Shred your own block. Pre-shredded cheese is coated in anti-caking agents (cellulose, potato starch) which inhibit proper melting and can burn, creating a gritty texture and preventing the cheese from fusing into a cohesive layer.'
    },
    criticalPoint: {
        content: 'The Freezing Trap. Freezing mozzarella ruptures the fat globules. When thawed and baked, previously frozen cheese almost always separates, releasing massive amounts of oil and becoming rubbery. Always use fresh (refrigerated) cheese for optimal texture.'
    },
    references: [
        {
            title: 'Cheese and Microbes',
            author: 'Catherine W. Donnelly',
            year: '2014'
        },
        {
            title: 'American Chemical Society',
            link: 'https://www.acs.org/pressroom/newsreleases/2014/august/pizza-cheese-science.html'
        }
    ]
};
