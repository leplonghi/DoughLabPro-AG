import { LearnArticleData } from '@/types/learn';

export const floursData: LearnArticleData = {
    id: 'flours',
    title: 'Flours: Strength (W), P/L & Ash Content',
    subtitle: 'Decoding the technical specifications that determine dough performance.',
    history: {
        heading: "From Stone Mills to Steel Rollers",
        paragraphs: [
            "For thousands of years, flour was stone-ground, producing a coarse meal that included the germ and bran. This flour was nutritious but spoiled quickly and produced dense loaves. The invention of the steel roller mill in Hungary in the 1870s revolutionized milling, allowing for the separation of the endosperm to create pure white, shelf-stable flour.",
            "This innovation led to the modern classification systems we use today, like the Italian '00' scale based on ash content (refinement) and the French 'T' system. However, it also removed much of the flavor, leading to the recent revival of stone-ground and high-extraction flours in artisan baking.",
            "Understanding these historical milling styles helps you choose the right flour in DoughLabPro—whether you want the pure strength of a modern 00 for Neapolitan pizza or the complex flavor of a rustic Type 1 for a country loaf."
        ]
    },
    sections: [
        {
            title: 'The "W" Index (Strength)',
            content: [
                'The Chopin Alveograph measures the energy required to blow a bubble of dough until it bursts. This energy is the "W" value.',
                '• Weak (W160-200): Cookies, cakes. Cannot hold gas.',
                '• Medium (W220-260): Direct doughs, 4-8h fermentation. Standard pizza flour.',
                '• Strong (W280-320): 24-48h fermentation. High hydration. Neapolitan/NY Style.',
                '• Manitoba (W350+): Reinforcement flour. Extreme fermentation (72h+), Panettone.'
            ]
        },
        {
            title: 'The P/L Ratio (Balance)',
            content: [
                'P measures Tenacity (resistance to stretching). L measures Extensibility (length of stretch).',
                '• P/L > 0.7: Buckish, tough dough. Hard to open. Springs back.',
                '• P/L < 0.4: Slack, sticky dough. Tears easily. Flattens out.',
                '• Ideal (0.5 - 0.6): Balanced. Easy to open but holds shape.'
            ]
        },
        {
            title: 'Ash Content (Refinement)',
            content: [
                'Ash is the mineral residue left after burning the flour. It indicates how much bran is present.',
                '• Type 00 (Italy): ~0.55% ash. Very pure endosperm. Soft, white crumb.',
                '• Type 0/1/2: Increasing bran content. More flavor, more enzyme activity, but weaker gluten structure (bran cuts gluten).'
            ]
        }
    ],
    proTip: {
        content: 'Don\'t trust the protein percentage on the bag. A 13% protein Whole Wheat flour is WEAKER than a 12% protein Type 00 flour because the bran cuts the gluten network. Always look for the W value or technical sheet, not just the nutritional label.'
    },
    criticalPoint: {
        content: 'The Falling Number. This measures enzymatic activity (amylase). Low falling number (<250) means high enzyme activity = sticky, gummy dough. High falling number (>400) means low activity = dry, pale dough. Most professional flours are corrected to ~300.'
    },
    references: [
        {
            title: 'The Taste of Bread',
            author: 'Raymond Calvel',
            year: '2001'
        },
        {
            title: 'Mulino Caputo Technical Sheets',
            link: 'https://www.mulinocaputo.it/'
        },
        {
            title: 'Wheat Flour Milling',
            author: 'E.S. Posner',
            year: '2005'
        },
        {
            title: 'Understanding Baking',
            author: 'Joseph Amendola',
            year: '2003'
        },
        {
            title: 'The Elements of Pizza',
            author: 'Ken Forkish',
            year: '2016'
        },
        {
            title: 'Italian Decree on Flours (DPR 187/2001)',
            link: 'https://www.gazzettaufficiale.it/'
        }
    ]
};
