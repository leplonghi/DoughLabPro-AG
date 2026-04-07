import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PUFF PASTRY (PÂTE FEUILLETÉE)
 * 
 * Researched and validated content:
 * - Origin: France (Perfected by Carême)
 * - Technique: Lamination (Butter lock-in + Turns) without Yeast
 * - Ingredients: Flour, Water, Salt, Butter (Dry/High Fat)
 * - Characteristics: Thousands of layers, extreme crispness, neutral flavor
 */
export const puff_pastry_classic: DoughStyleDefinition = {
    id: "puff_pastry_classic",
    name: "Puff Pastry (Classic/Inverted)",
    category: "pastry",
    recipeStyle: RecipeStyle.PUFF_PASTRY,
    family: "French Laminated Dough",

    origin: {
        country: "France",
        region: "Paris",
        period: "17th Century (Claude Gelée / Carême)"
    },

    description: "Pâte Feuilletée is the ultimate test of a pastry chef's precision. It is a non-yeasted laminated dough consisting of a 'Détrempe' (base dough) and a 'Beurrage' (butter block) that are folded together to create hundreds (classically 729) of alternating layers of fat and dough. When baked, the water in the butter turns to steam, pushing the layers apart (mechanical leavening) to create a light, shattering crispness.",

    history: "While early versions existed in the Middle East, the French perfected the technique of 'Tourage' (turning). Marie-Antoine Carême codified the 'Traditional' method (butter inside dough), though modern pastry chefs often prefer the 'Inverted' method (dough inside butter) which yields a flakier, higher-rising product.",

    difficulty: "Expert",
    fermentationType: "direct", // Mechanical only

    base_formula: [
        { name: "Pastry Flour (Low-Med Protein)", percentage: 100 },
        { name: "Water (Cold)", percentage: 50 },
        { name: "Salt", percentage: 2 },
        { name: "Butter (Melted, for Détrempe)", percentage: 10 },
        { name: "Vinegar (White)", percentage: 1 }, // Relaxant + preservative
        { name: "Butter (Tourage Block)", percentage: 50 } // usually 50% of dough weight
    ],

    technicalProfile: {
        hydration: [50, 55],
        salt: [1.8, 2.0],
        oil: [50, 60], // Massive fat content
        sugar: [0, 0], // Usually savory base
        flourStrength: "Medium (W220-240). Too strong = shrinking. Too weak = tearing.",
        ovenTemp: [200, 220], // Start high for steam, drop to finish
        recommendedUse: [
            "Mille-Feuille",
            "Vol-au-vent",
            "Palmiers",
            "Beef Wellington"
        ],
        difficulty: "Expert",
        ballWeight: { recommended: 500, min: 200, max: 2000 },
        fermentationSteps: [
            "Mix Détrempe: Combine flour, water, salt, melted butter, and vinegar. Do not overwork. [Science: Vinegar prevents oxidation and relaxes gluten]",
            "Chill Détrempe: Rest 2 hours. [Science: Butter and dough must be same consistency]",
            "Lock-in (Beurrage): Encase the butter block in the dough (Traditional) or dough in butter (Inverse).",
            "Tourage (Turns): Perform a Double Turn (Book fold) followed by a Single Turn (Letter fold).",
            "Rest: Chill 1 hour. [Science: Gluten must relax, fat must re-solidify]",
            "Tourage 2: Perform another Double Turn + Single Turn. (Total 5-6 turns).",
            "Final Rest: Cheat 2 hours minimum before sheeting.",
            "Baking: Bake at 200°C. Do not open door. [Science: The 'Puff' happens in the first 10 mins]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W220-250",
            pl_ratio: "0.45 (Extensible)",
            absorption_capacity: "Low",
            protein_type: "Standard Wheat",
            science_explanation: "The structure comes from the LAYERS, not the gluten matrix bubble capability. We need extensibility to roll thin without snapping back (creeping)."
        },
        thermalProfile: {
            oven_type: "Convection Fan High",
            heat_distribution: "Airflow fundamental",
            crust_development: "Entire dough becomes crust",
            crumb_structure: "Laminar separation (Phyllo-like)"
        },
        fermentationScience: {
            yeast_activity: "None",
            ph_target: "Neutral",
            organic_acids: "None",
            enzymatic_activity: "Low"
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Temperature Control",
                explanation: "If the butter melts, the layers fuse (brioche). If the butter shatters, the layers break. The sweet spot is 16°C."
            },
            {
                tip: "Sharp Knife",
                explanation: "When cutting puff pastry, push DOWN with a sharp blade. Do not drag. Dragging seals the layers shut, preventing rise."
            },
            {
                tip: "Resting is baking",
                explanation: "If you don't rest the final sheet for 2 hours, it will shrink into a frantic oval in the oven."
            }
        ],
        what_if: [
            {
                scenario: "Butter leaks out in the oven",
                result: "Under-proofed (not applicable here) or Warm Dough",
                correction: "Chill the dough longer before baking."
            },
            {
                scenario: "It didn't rise",
                result: "Layers mashed together (rolling too hard) or oven too cold",
                correction: "Roll gently and check oven temp."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Croissant",
                difference: "Croissant has Yeast. Puff has none. Croissant is soft inside; Puff is crisp all the way through.",
                why_choose_this: "Choose Puff for crispness."
            },
            {
                target_style: "Rough Puff",
                difference: "Rough puff mixes chunks of butter (biscuit method). It rises irregularly. Classic puff is uniform.",
                why_choose_this: "Choose Classic for precision pastry."
            }
        ],
        q_and_a: [
            {
                question: "Inverse vs Traditional?",
                answer: "Inverse (butter outside) shrinks less and rises more evenly, but is messier to roll.",
                context: "Technique"
            },
            {
                question: "Can I use low fat butter?",
                answer: "No. You need 'Dry Butter' (84% fat) if possible. Water in butter creates steam but too much creates a mess.",
                context: "Ingredients"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "No fermentation."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Low hydration (50%) helps crispness. The moisture comes from the butter layers.",
        methodSuitability: {
            direct: { suitable: true, notes: "Only method." },
            poolish: { suitable: false, notes: "N/A" },
            biga: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "Turn count too high",
                outcome: "Layers become so thin they merge. 6 single turns is the limit.",
                solution: "Stop at 5 or 6."
            }
        ],
        comparisons: [
            {
                vsStyle: "Phyllo",
                difference: "Phyllo is individual sheets stacked with oil. Puff is a solid block rolled out. Puff is richer."
            }
        ],
        proTips: [
            "Add a splash of vodka instead of vinegar; it evaporates faster for extra crispness.",
            "Use a ruler. Precision is flavor."
        ]
    },

    tags: ["puff-pastry", "french", "laminated", "butter", "classic", "expert"],

    watchouts: [
        "Hot kitchen = disaster.",
        "Dull knife = sealed edges.",
        "Uneven rolling = lopsided rise."
    ],

    notes: [
        "King of Pastry doughs.",
        "Butter quality is everything.",
        "Requires significant resting time.",
        "Freeze well raw."
    ],

    references: [
        {
            source: "Professional Baking",
            url: "https://www.wiley.com/",
            author: "Wayne Gisslen",
            year: "2016"
        }
    ],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/puff-pastry-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["butter_dry_84"]
};
