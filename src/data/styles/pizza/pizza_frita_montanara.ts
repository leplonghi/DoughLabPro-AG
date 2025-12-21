import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PIZZA FRITA (MONTANARA)
 * 
 * Researched and validated content:
 * - Origin: Naples (Poor man's pizza / Street food)
 * - Technique: Deep frying dough + Topping
 * - Ingredients: Neapolitan Dough, Tomato Sauce, Parmesan, Basil
 * - Characteristics: Puffy, airy, crispy, not oily, light
 */
export const pizza_frita_montanara: DoughStyleDefinition = {
    id: "pizza_frita_montanara",
    name: "Pizza Frita (Montanara)",
    category: "pizza",
    recipeStyle: RecipeStyle.NEAPOLITAN, // Uses base Neapolitan dough
    family: "Neapolitan Street Food",

    origin: {
        country: "Italy",
        region: "Campania (Naples)",
        period: "Post-WWII Popularity (Ancient roots)"
    },

    description: "Pizza Frita (Fried Pizza) is the indulgent cousin of the wood-fired classic. In the 'Montanara' style, a small disk of dough is deep-fried until it puffs into a golden pillow, then topped simply with tomato sauce, parmesan, and basil (sometimes finished in the oven for 30 seconds). Contrary to expectation, a well-made Montanara is incredibly light and airy, not greasy.",

    history: "Immortalized in the film 'L'Oro di Napoli' (Sophia Loren selling pizzas), fried pizza was the food of the people when they couldn't afford wood for ovens. It has recently seen a gourmet renaissance, with chefs serving it as a refined appetizer.",

    difficulty: "Hard",
    fermentationType: "direct",

    base_formula: [
        { name: "00 Flour (Medium Strength)", percentage: 100 },
        { name: "Water", percentage: 65 },
        { name: "Salt", percentage: 2.5 },
        { name: "Fresh Yeast", percentage: 0.2 },
        { name: "Frying Oil (Sunflower or Peanut)", percentage: 0 } // External
    ],

    technicalProfile: {
        hydration: [62, 68], // Slightly lower than some modern baked pizzas to prevent oil absorption
        salt: [2.5, 3.0],
        oil: [0, 0], // No oil in dough
        sugar: [0, 0],
        flourStrength: "Medium (W260-280). Needs extensibility.",
        ovenTemp: [170, 180], // Frying Temperature (Oil)
        recommendedUse: [
            "Montanara (Sauce/Cheese on top)",
            "Calzone Fritto (Stuffed)",
            "Batsoà (Sweet version)"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 100, min: 80, max: 150 },
        fermentationSteps: [
            "Process: Same as Neapolitan Pizza.",
            "Mix: Stop when smooth. 24°C final dough temp.",
            "Bulk: 2 hours.",
            "Ball: 100g balls (smaller than standard pizza).",
            "Proof: 24 hours Cold or 8 hours Ambient.",
            "Stretching: Do not stretch the edge (cornicione). Leave it slightly thick.",
            "Frying: Gently lower into 175°C oil. Spoon hot oil over the top. It will puff violently. Fry 60-90 seconds total.",
            "Draining: Drain on paper upright (vertical) to shed oil.",
            "Topping: Top with warm sauce and cheese immediately."
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W260-280",
            pl_ratio: "0.50",
            absorption_capacity: "Moderate",
            protein_type: "Soft Wheat 00",
            science_explanation: "If the dough is too strong (High W), it resists the rapid expansion in the oil and becomes tough. If too weak, it absorbs oil."
        },
        thermalProfile: {
            oven_type: "Deep Fryer",
            heat_distribution: "Convection (Oil fluid)",
            crust_development: "Maillard + Lipid Interaction (Crisp, micro-blistered)",
            crumb_structure: "Explosive alveoli due to rapid steam generation"
        },
        fermentationScience: {
            yeast_activity: "Moderate",
            ph_target: "pH 5.5",
            organic_acids: "Low",
            enzymatic_activity: "Standard"
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Oil Temperature",
                explanation: "175°C is the golden number. Below 160°C is greasy. Above 190°C is burnt outside/raw inside."
            },
            {
                tip: "Poke a hole?",
                explanation: "For Montanara (topped), poke a depression in the center while frying so the sauce has somewhere to sit. For Calzone, seal tight!"
            },
            {
                tip: "The 'Forno' Finish",
                explanation: "Some chefs fry for 45s, top, then bake for 45s to melt the mozzarella properly and dry the oil."
            }
        ],
        what_if: [
            {
                scenario: "It's greasy",
                result: "Oil too cold or dough over-proofed (collapsed)",
                correction: "Check thermometer and dough strength."
            },
            {
                scenario: "It didn't puff",
                result: "Dough too cold or under-proofed",
                correction: "Let dough hit room temp (20°C) before frying."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Standard Neapolitan",
                difference: "Fried vs Baked. Fried is crunchier and richer.",
                why_choose_this: "Choose Frita for a decadent treat."
            }
        ],
        q_and_a: [
            {
                question: "What oil?",
                answer: "Peanut or High-Oleic Sunflower. Lard is traditional but heavy.",
                context: "Ingredients"
            },
            {
                question: "Is it a donut?",
                answer: "Same principle, savory application. A sugar-rolled version is called 'Angioletti'.",
                context: "Variation"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Standard."
            },
            {
                method: "Poolish",
                suitability: "Possible",
                notes: "Makes it lighter."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Don't go too high (>70%) or it's hard to handle near hot oil. 65% is safe.",
        methodSuitability: {
            direct: { suitable: true, notes: "Best." },
            poolish: { suitable: true, notes: "Excellent." },
            biga: { suitable: true, notes: "Good structure." }
        },
        whatIf: [
            {
                scenario: "You use Bread Flour",
                outcome: "Chewy and tough. Use 00 Pizza flour.",
                solution: "Use 00."
            }
        ],
        comparisons: [
            {
                vsStyle: "Langos (Hungarian)",
                difference: "Langos has potato in dough often. Montanara is pure pizza dough."
            }
        ],
        proTips: [
            "Sauce must be warm before topping, or it cools the pizza too fast.",
            "Grate extremely fine parmesan (dust) to stick to the fried surface."
        ]
    },

    tags: ["pizza-frita", "fried", "neapolitan", "montanara", "street-food"],

    watchouts: [
        "Hot oil is dangerous.",
        "Water in oil = explosion. Dry hands.",
        "Over-crowding the fryer drops temp."
    ],

    notes: [
        "Neapolitan Street Classic.",
        "Deep Fried.",
        "Light and Airy.",
        "Top with simple Marinara."
    ],

    references: [
        {
            source: "Pizza City (Naples)",
            url: "https://www.pizzacity.com/",
            author: "Local Culture",
            year: "1950"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/pizza-frita-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["tomato_sauce_cooked", "parmesan", "basil_fresh"]
};
