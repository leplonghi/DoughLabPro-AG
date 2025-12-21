import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PIZZA AL PIATTO (ITALIAN STANDARD / PIZZA CLASSICA)
 * 
 * Researched and validated content:
 * - Origin: Italy (National standard, 1980s-90s evolution)
 * - Technique: Hand-stretched, 24-48h Maturation, Deck Oven (320-350°C)
 * - Ingredients: Soft Wheat Flour (Type 0/00), EVOO, Malt, Salt, Yeast
 * - Characteristics: Balanced crunch/softness, digestible, fragrant cornicione
 */
export const pizza_al_piatto_italiana: DoughStyleDefinition = {
    id: "pizza_al_piatto_italiana",
    name: "Pizza al Piatto (Standard)",
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST, // Standard Italian "Classic"
    family: "Italian Contemporary",

    origin: {
        country: "Italy",
        region: "National (Global Standard)",
        period: "1980s (Formalization of technical pizza schools)"
    },

    description: "Pizza al Piatto (or Pizza Classica) is the most widespread pizza style in Italy. It represents a technical middle ground between the soft, flash-baked Neapolitan and the paper-thin, rigid Roman Scrocchiarella. Developed in the pizzerias of the north and center of Italy during the late 20th century, it prioritizes 'fragrance' (a balance of crunch and elasticity) and high digestibility through long cold maturation (maturazione).",

    history: "While Naples created the legend, the 'Pizza Classica' formalization happened in the 1980s as pizza moved from a regional specialty to a national industry. Schools like the 'Scuola Italiana Pizzaioli' (1988) began teaching a standardized method suited for the gas and electric deck ovens that dominated the north. This style introduced the mandatory use of olive oil in the dough to compensate for lower oven temperatures compared to wood-fired Neapolitan ovens. It is the style most often exported globally as 'Italian Pizza'.",

    difficulty: "Medium",
    fermentationType: "cold",

    base_formula: [
        { name: "Soft Wheat Flour (Type 00, W280-300)", percentage: 100 },
        { name: "Water", percentage: 60 },
        { name: "Salt", percentage: 2.5 },
        { name: "Extra Virgin Olive Oil", percentage: 2 },
        { name: "Diastatic Malt", percentage: 0.5 },
        { name: "Fresh Yeast", percentage: 0.3 }
    ],

    technicalProfile: {
        hydration: [58, 62], // Balanced for a fragrant, structured crust
        salt: [2.0, 2.5],
        oil: [1, 3], // Oil helps with 'croccantezza' (crunch) and prevents drying in longer bakes
        sugar: [0, 1], // Malt assists in browning during the 3-4 minute bake
        flourStrength: "Medium-Strong (W280-320). Capable of 48-72h cold maturation",
        ovenTemp: [310, 350],
        recommendedUse: [
            "Traditional Pizzeria sit-down service",
            "Classic Italian Margherita",
            "Standard restaurant pizza"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 250, min: 230, max: 280 },
        fermentationSteps: [
            "Mixing: Combine flour, water, yeast, and malt. Add salt towards the end, followed by the oil. [Science: Delayed oil addition prevents it from coating the protein, allowing for better gluten development first]",
            "Point Rise: 1 hour at room temperature. [Science: Wakes up the yeast and initializes the fermentation cycle]",
            "Cold Maturation: 24 to 72 hours at 4°C. [Science: Crucial stage where enzymes break down complex starches into simple sugars and proteins into amino acids, dramatically improving flavor and digestibility]",
            "Balling: Divide and shape into 250g balls. [Science: Creates a skin that traps gas for the final rise]",
            "Apre (Final Rise): 3-5 hours at room temperature until the dough is relaxed and doubled. [Science: Relaxes the protein network for easy hand-stretching]",
            "Stretching: Hand-stretch using the 'Slap' or 'Stretching' technique to create a defined edge (cornicione). [Science: Unlike Roman pizza, the cornicione here is maintained but is less puffy than Neapolitan]",
            "Baking: Bake in a deck oven for 3-5 minutes. [Science: The longer bake (compared to Neapolitan) creates a more uniform drying of the crust, leading to a long-lasting fragrance]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W280-320 (Medium-Strong)",
            pl_ratio: "0.50-0.60 (Balanced)",
            absorption_capacity: "High (60-65%)",
            protein_type: "Strong soft wheat with high stability over time",
            science_explanation: "The flour must withstand long mechanical stress and enzymatic activity during the 48h cold rest without losing its structural integrity."
        },
        thermalProfile: {
            oven_type: "Electric or Gas Deck Oven with high refractory mass",
            heat_distribution: "Moderate radiation from the dome and high conduction from the floor",
            crust_development: "Uniform golden color, fragrant, moderately crispy on the outside and soft inside",
            crumb_structure: "Small to medium, regular alveolation in the cornicione"
        },
        fermentationScience: {
            yeast_activity: "Low and constant; maintained by low yeast percentages and cold temperatures",
            ph_target: "pH 5.3 - 5.5",
            organic_acids: "Balanced lactic and acetic profile; develops 'bread-like' complex aromas",
            enzymatic_activity: "Peak protease and amylase activity happens during the cold maturation, which is the soul of this style's digestibility."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Maturation vs Fermentation",
                explanation: "Maturation is the enzymatic breakdown, while fermentation is the gas production. For a 'Classic' pizza, you want a dough that has reached its peak maturation (min 24h) even if the yeast rose it faster."
            },
            {
                tip: "The Malt Secret",
                explanation: "A small amount of diastatic malt helps the pizza brown at lower professional temperatures (320°C) and feeds the yeast during the long cold rest."
            },
            {
                tip: "Avoid 'The Snap'",
                explanation: "If the dough retracts when you stretch it, it hasn't finished its final rise (appretto). Give it another 30 minutes in a warm spot."
            },
            {
                tip: "Low Moisture Mozzarella",
                explanation: "For the best 'Classic' result in a deck oven, use low-moisture mozzarella. Fresh fior di latte can release too much water during the 4-minute bake, making the center soggy."
            },
            {
                tip: "Don't overload the center",
                explanation: "To maintain the 'Standard' balance, use approx 80g of sauce and 100g of cheese for a 32cm pizza ball of 250g."
            }
        ],
        what_if: [
            {
                scenario: "The pizza is crusty like bread but not crispy",
                result: "Oven temperature was too low or not enough oil",
                correction: "Increase the deck temperature to 330°C and ensure the oil is exactly 2%."
            },
            {
                scenario: "The dough has 'bubbles' that burn",
                result: "Under-maturation or dough used too cold",
                correction: "Always let the dough warm up to 18-20°C before stretching and ensure at least 24h cold rest."
            },
            {
                scenario: "The cornicione doesn't rise",
                result: "Dough was over-fermented or over-stretched",
                correction: "Be careful not to press the very edge of the dough during the stretching phase; keep the air trapped in the 'border'."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Neapolitan",
                difference: "Standard pizza uses oil, lower temps, and has a drier, crispier edge. Neapolitan is flash-baked and soft/elastic.",
                why_choose_this: "Choose Standard for a pizza that 'stays crispy' longer and handles delivery better."
            },
            {
                target_style: "Roman Scrocchiarella",
                difference: "Standard is hand-stretched and has a soft-inside-crunchy-outside edge; Roman is rolled with a pin and is the same 'cracker' texture throughout.",
                why_choose_this: "Choose Standard for the classic 'Pizzeria' experience that everyone loves."
            },
            {
                target_style: "New York Style",
                difference: "Standard is smaller (32cm), uses higher protein flour (typically), and has a more defined cornicione than the flat NY slice.",
                why_choose_this: "Choose Standard for an authentic Italian feel with a manageable size."
            }
        ],
        q_and_a: [
            {
                question: "Is 'Classic' pizza better than Neapolitan?",
                answer: "It's not better, just different. Classic pizza is optimized for durability and a crispy 'snap,' whereas Neapolitan is about fresh, soft elegance.",
                context: "Preference"
            },
            {
                question: "Why use 'Type 0' flour?",
                answer: "Type 0 contains more minerals and bran fragments than 00, giving a more intense wheat flavor and better browning in deck ovens.",
                context: "Ingredients"
            },
            {
                question: "How long can I keep the balls?",
                answer: "With a W300 flour, the balls are at their peak between 48h and 72h. After that, the gluten starts to break down (acidify).",
                context: "Technique"
            },
            {
                question: "Does it work in a wood oven?",
                answer: "Yes, but you must keep the temperature lower (350°C) and further from the flame than you would for a Neapolitan.",
                context: "Equipment"
            }
        ],
        fermentation_methods: [
            {
                method: "Hybrid",
                suitability: "Authentic",
                notes: "The foundation of modern Italian 'Classic' pizza quality."
            },
            {
                method: "Biga",
                suitability: "Ideal",
                notes: "Using 15-30% Biga is the 'Modern Classic' secret for incredible aroma and a crispier cornicione."
            },
            {
                method: "Direct",
                suitability: "Possible",
                notes: "Used in low-end commercial spots, but lacks the flavor and digestibility of matured dough."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Hydration is targeted at 60%—low enough to provide a stable structure that can be easily handled by pizzaioli in high-volume environments, but high enough to ensure the internal crumb stays soft during a 4-minute bake.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable for same-day catering." },
            biga: { suitable: true, notes: "Highly recommended for high-end 'Classic' pizzerias." },
            poolish: { suitable: false, notes: "Can make the dough too 'slacky' for the hand-stretching required for the cornicione." }
        },
        whatIf: [
            {
                scenario: "You use high-protein flour (Manitoba)",
                outcome: "The pizza will be very chewy and hard to digest if not matured for at least 72 hours.",
                solution: "Use a W280/300 blend specifically for pizza (e.g., Caputo Blu or similar)."
            }
        ],
        comparisons: [
            {
                vsStyle: "Pizza di Scuola vs Pizza di Tradizione",
                difference: "Scuola (Style al Piatto) focuses on chemistry and technician precision; Tradizione (Neapolitan) focuses on heritage and manual instinct."
            }
        ],
        proTips: [
            "A pinch of deactivated yeast (spent yeast) can be used as a natural dough relaxer if you need to use the balls sooner.",
            "Internal temp (if you can measure a thin pizza) should reach 98°C for the starch to be fully gelatinized.",
            "Add a tablespoon of high-quality EVOO right into the center of the pizza *before* topping to help the sauce 'cook' onto the dough.",
            "Mature the bulk dough for 24h before balling for even better flavor distribution.",
            "The best wood for the fire (if using wood) is Oak or Beech for consistent heat."
        ]
    },

    tags: ["italian", "classic", "pizza al piatto", "standard", "contemporary"],

    watchouts: [
        "Dough balls not used at room temp? They will be full of air bubbles that burn.",
        "Over-kneading? The pizza will be 'rubbery'.",
        "Flour too weak? The dough will tear during stretching.",
        "Oven floor too hot? The bottom will burn before the top cheese melts."
    ],

    notes: [
        "National standard of Italian pizzerias.",
        "Balanced crunch and softness.",
        "Uses EVOO for fragrance.",
        "Requires minimum 24h cold maturation.",
        "Optimized for deck ovens (320-350°C)."
    ],

    references: [
        {
            source: "Scuola Italiana Pizzaioli - Manuale Tecnico",
            url: "https://scuolaitalianapizzaioli.it/",
            author: "Graziano Bertuzzo",
            year: "2019"
        },
        {
            source: "API - Associazione Pizzaioli Italiani - Standards",
            url: "https://www.pizzaitaliana.it/",
            author: "API Board",
            year: "2023"
        },
        {
            source: "The Science of Pizza (Maturation vs Fermentation)",
            url: "https://modernistcuisine.com/",
            author: "Nathan Myhrvold",
            year: "2017"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/pizza-classica-piatto-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["mozzarella_low_moisture", "tomato_sauce", "basil_fresh", "olive_oil_extra_virgin", "pecorino_romano"]
};
