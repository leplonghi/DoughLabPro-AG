import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

export const pitaBread: DoughStyleDefinition = {
    id: "pita_bread",
    name: "Classic Pita Bread",
    category: "bread",
    recipeStyle: RecipeStyle.FLATBREAD,
    family: "Middle Eastern Flatbreads",
    origin: {
        country: "Regional (Levant / Middle East)",
        region: "Middle East",
        period: "Antiquity"
    },
    description: "A soft, slightly leavened flatbread baked at extremely high temperatures. The rapid expansion of steam causes the dough to balloon, creating a natural pocket perfect for stuffing.",
    history: "Pita is one of the world's oldest breads, originating in the Middle East over 4,000 years ago. Its iconic pocket is formed by baking the flat dough disc in an extremely hot oven, turning the interior moisture into a blast of steam that separates the top and bottom layers.",
    base_formula: [
        { name: 'All Purpose or Bread Flour', percentage: 100 },
        { name: 'Water', percentage: 60 },
        { name: 'Olive Oil', percentage: 2 },
        { name: 'Salt', percentage: 1.8 },
        { name: 'Instant Yeast', percentage: 1 },
        { name: 'Sugar', percentage: 1 }
    ],
    difficulty: 'Medium',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [58, 65],
        salt: [1.5, 2.0],
        oil: [1, 3],
        sugar: [0, 2],
        flourStrength: "Medium (W240-260)",
        ovenTemp: [250, 300], // Intense conductive heat required
        recommendedUse: ['Falafel pockets', 'Hummus dipping', 'Shawarma'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix until a smooth dough forms",
            "Bulk ferment for 1 to 2 hours until doubled",
            "Divide into balls and bench rest for 30 mins (crucial for easy rolling)",
            "Roll into thin, even discs (1/4 inch thick)",
            "Final proof for only 10-15 minutes (overproofing prevents the pocket from forming)",
            "Bake on a pre-heated stone/steel at 500F+ for 2-3 minutes"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W240-260 (Medium)",
            pl_ratio: "Extensible",
            absorption_capacity: 'Medium',
            protein_type: "Soft/Hard Blend",
            science_explanation: "Too much protein makes the dough snap back when rolling; too little means the pocket wall won't hold the steam pressure and will tear."
        },
        thermalProfile: {
            oven_type: "Hearth / Baking Steel",
            heat_distribution: "Intense Conduction + Radiant",
            crust_development: "Soft, pale with slight brown spotting",
            crumb_structure: "Hollow center (The Pocket)"
        },
        fermentationScience: {
            yeast_activity: 'Vigorous',
            ph_target: 'Neutral',
            organic_acids: 'Lactic',
            enzymatic_activity: 'Moderate'
        },
        processScience: "The pocket is entirely a factor of temperature and shape: the intense conductive heat sets the bottom and top skins instantly, while the moisture in the center violently turns to steam, physically splitting the crumb apart."
    },
    tags: ["Pocket", "High heat", "Vegan", "Middle East", "Flatbread"],
    pairings: {
        canonical: ['Hummus', 'Falafel', 'Baba Ghanoush'],
        modern: ['Chicken Salad'],
        regional: ['Zaatar', 'Labneh']
    },
    watchouts: [
        "If your oven isn't hot enough, the pita will bake like a normal flatbread and won't puff.",
        "Wrinkles or tears in the dough disc will let the steam escape, destroying the pocket."
    ],
    notes: [
        "Store in a sealed plastic bag as soon as they cool slightly to keep them soft and pliable.",
        "Use a baking steel or thick cast iron pan for best results at home."
    ],
    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/pita_fresh_steam.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Preheat the steel',
                explanation: "Your baking surface must be screaming hot. Preheat your oven and steel at 500F (260C) for at least 45 minutes before baking."
            }
        ],
        what_if: [
            {
                scenario: 'The pita doesn\'t puff up',
                result: "Oven not hot enough, or dough was rolled unevenly (edges sealed shut).",
                correction: 'Ensure uniform thickness when rolling and increase surface heat.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Naan',
                difference: "Naan is richer (dairy/fat) and relies on radiant heat blistering without separating into a pocket. Pita is leaner and purely focused on the steam pocket.",
                why_choose_this: 'Choose Pita when you need a vehicle to stuff with fillings.'
            }
        ],
        q_and_a: [
            {
                question: 'Can I do this in a pan on the stove?',
                answer: "Yes! A heavy cast-iron skillet on medium-high heat works brilliantly. Flip when bubbles form.",
                context: 'Process'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "Rapid, predictable fermentation."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "At 60%, the dough is dry enough to handle easily with a rolling pin but wet enough to generate the massive amount of steam needed to inflate the pocket.",
        methodSuitability: {
            direct: { suitable: true, notes: "Traditional method." },
            biga: { suitable: false, notes: "Unnecessary." },
            poolish: { suitable: false, notes: "Unnecessary." }
        },
        whatIf: [
            {
                scenario: 'The pocket is lopsided or only half inflates',
                outcome: "The dough disc was rolled unevenly.",
                solution: 'Ensure perfectly even thickness, and flip the dough over halfway through the final roll so both sides are smooth.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Tortilla',
                difference: 'Tortillas are unleavened (no yeast) and fat-heavy to remain pliable; Pita relies on yeast and high-hydration steam to puff.'
            }
        ],
        proTips: [
            "Bake the pitas bottom-side up (the side that was resting on the counter during the final proof should face UP in the oven). The slightly drier top crust sets better against the hot steel."
        ]
    },
    recommendedFlavorComponents: ["olive_oil_extra_virgin", "yogurt_plain", "garlic_fresh", "oregano_dried"]
};

export const turkishSimit: DoughStyleDefinition = {
    id: "turkish_simit",
    name: "Turkish Simit",
    category: "bread",
    recipeStyle: RecipeStyle.PRETZEL, // Closest profile (dipped, sesame)
    family: "Turkish Ring Bread",
    origin: {
        country: "Turkey",
        region: "Istanbul",
        period: "1525"
    },
    description: "Simit is the iconic circular bread of Istanbul — a golden, crunchy sesame-encrusted ring. The dough is dipped in grape molasses (pekmez) before being coated in sesame seeds, which caramelize during baking.",
    history: "A staple of Ottoman cuisine since the 16th century, Simit is deeply ingrained in Turkish culture. It is famously sold by street vendors (simitçi) carrying massive trays of the rings on their heads.",
    base_formula: [
        { name: 'Bread Flour', percentage: 100 },
        { name: 'Water', percentage: 55 },
        { name: 'Salt', percentage: 1.5 },
        { name: 'Yeast', percentage: 1 },
        { name: 'Oil', percentage: 2 },
        { name: 'Grape Molasses (Dip)', percentage: 0 }, // applied externally
        { name: 'Sesame Seeds (Coating)', percentage: 0 } // applied externally
    ],
    difficulty: 'Medium',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [50, 58],
        salt: [1.5, 2.0],
        oil: [1, 3],
        sugar: [0, 0], // Sugar comes from the exterior molasses dip
        flourStrength: "Medium-Strong (W280-300)",
        ovenTemp: [230, 250],
        recommendedUse: ['Tea pairing', 'Cheese, olives, and tomato breakfasts'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix until a tight dough forms (8-10 min)",
            "Bulk ferment for 30-45 minutes",
            "Divide and roll into long ropes",
            "Twist two ropes together and fuse the ends to form a ring",
            "Dip rings in diluted grape molasses (pekmez)",
            "Roll heavily in sesame seeds",
            "Bake at 240°C for 20-25 minutes until deeply caramelized"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W280-300",
            pl_ratio: "Balanced",
            absorption_capacity: 'Moderate',
            protein_type: "Strong wheat",
            science_explanation: "Lower hydration and strong flour gives the dough enough body/tension to hold the twisted ring form without losing definition during baking."
        },
        thermalProfile: {
            oven_type: "Deck oven or Wood-fired",
            heat_distribution: "Radiant & Conductive",
            crust_development: "Ultra-crisp, caramelized sesame crust",
            crumb_structure: "Dense, tight crumb"
        },
        fermentationScience: {
            yeast_activity: 'Moderate',
            ph_target: 'Neutral',
            organic_acids: 'Low',
            enzymatic_activity: 'Standard'
        },
        processScience: "The molasses dip performs the dual action of adhering the sesame seeds and providing robust exterior sugars for immediate Maillard browning at high temperatures."
    },
    tags: ["Sesame", "Molasses", "Street food", "Breakfast", "Turkey"],
    pairings: {
        canonical: ['Feta cheese', 'Black Olives', 'Turkish Tea (Çay)'],
        modern: ['Nutella'],
        regional: ['Kashar cheese']
    },
    watchouts: [
        "Sesame burns quickly due to the molasses sugar — watch closely in the final 5 minutes.",
        "Ensure the fusion seam is tight or the ring will unravel in the oven."
    ],
    notes: [
        "Dilute the grape molasses 1:1 with water for the dip.",
        "Do not overproof before baking; a tight, dense structure is authentic."
    ],
    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/simit-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Pekmez (molasses) dip',
                explanation: "Grape molasses is traditional, but if unavailable, Date or Pomegranate molasses (diluted) provides similar color and bonding, though a slightly different flavor profile."
            }
        ],
        what_if: [
            {
                scenario: 'The rings lose their twisted shape in the oven',
                result: "The twist was too loose or the dough was too hydrated.",
                correction: 'Twist the two ropes very tightly under tension before forming the circle.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'New York Bagel',
                difference: "Both are dipped/boiled rings with toppings. However, Simit is dipped in cold molasses (not boiled), uses a twisted double-rope structure, is larger, and has a crisper crust.",
                why_choose_this: 'Choose Simit for a shattering crunch and heavy sesame flavor.'
            }
        ],
        q_and_a: [
            {
                question: 'Can I boil them like bagels?',
                answer: "No. Boiling gelatinizes the crust for a chewy exterior. Simit is only dipped instantly into cold liquid for adherence and color.",
                context: 'Process'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "Traditional vendors mix and bake rapidly."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "At ~55%, it is a stiff dough, essential for keeping the pronounced ridges of the twist intact when wet-dipped and rolled in heavy seeds.",
        methodSuitability: {
            direct: { suitable: true, notes: "Traditional method." },
            biga: { suitable: false, notes: "Not authentic." },
            poolish: { suitable: false, notes: "Not authentic." }
        },
        whatIf: [
            {
                scenario: 'Sesame seeds fall off after baking',
                outcome: "The dip wasn't tacky enough.",
                solution: 'Ensure the molasses dilution isn\'t too watery (1 part molasses : 1 part water max).'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Pretzel',
                difference: 'Pretzels are dipped in a highly alkaline bath (lye or baking soda) to alter the pH for browning. Simit uses natural fruit sugars for browning.'
            }
        ],
        proTips: [
            "Toast your sesame seeds lightly before assembling/baking for an incredibly deep, nutty flavor."
        ]
    },
    recommendedFlavorComponents: ["sesame_seeds", "molasses", "honey_raw"]
};

export const middleEastStyles: DoughStyleDefinition[] = [
    pitaBread,
    turkishSimit
];
