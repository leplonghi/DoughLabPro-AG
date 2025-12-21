import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * DANISH PASTRY (WIENERBRØD)
 * 
 * Researched and validated content:
 * - Origin: Denmark (via Austrian bakers)
 * - Technique: Laminated Yeast Dough (Viennoiserie) - 3 Turns (27 layers)
 * - Ingredients: Flour, Milk, Sugar, Eggs, Yeast, Cardamom (optional), Butter
 * - Characteristics: Flaky, rich, tender, sweet, often filled with custard/fruit
 */
export const pastry_danish_classic: DoughStyleDefinition = {
    id: "pastry_danish_classic",
    name: "Danish Pastry (Wienerbrød)",
    category: "pastry",
    recipeStyle: RecipeStyle.PASTRY_DANISH,
    family: "Viennoiserie",

    origin: {
        country: "Denmark",
        region: "Copenhagen",
        period: "1850s (Austrian Bakers Strike)"
    },

    description: "Known in Denmark as 'Wienerbrød' (Vienna Bread), this is a rich, yeasted laminated dough. Unlike the croissant, which is leaner and crisper, Danish dough is enriched with eggs and sugar, resulting in a softer, cake-like texture that still possesses distinct flaky layers. It is the vessel for custards, jams, and marzipan (Remonce).",

    history: "The story goes that Danish bakers went on strike in 1850, forcing bakery owners to hire Austrian replacements. These bakers brought their laminated dough techniques. When the Danish bakers returned, they adapted the method by adding more egg and fat, creating the world-famous Danish Pastry.",

    difficulty: "Expert",
    fermentationType: "direct", // Yeasted

    base_formula: [
        { name: "Bread Flour", percentage: 100 },
        { name: "Milk (Cold)", percentage: 40 },
        { name: "Eggs", percentage: 15 },
        { name: "Sugar", percentage: 12 },
        { name: "Yeast (Osmotolerant)", percentage: 2.5 },
        { name: "Salt", percentage: 1.5 },
        { name: "Butter (in Dough)", percentage: 10 },
        { name: "Butter (Roll-in)", percentage: 50 } // 3 Single turns = 27 layers
    ],

    technicalProfile: {
        hydration: [55, 60], // Enriched liquid
        salt: [1.5, 1.8],
        oil: [60, 70], // Total fat is huge
        sugar: [10, 15],
        flourStrength: "Strong (W280-300). Needs to support heavy fillings.",
        ovenTemp: [190, 210],
        recommendedUse: [
            "Spandauer (Custard/Jam center)",
            "Cinnamon Snails (Schnecken)",
            "Bear Claws"
        ],
        difficulty: "Expert",
        ballWeight: { recommended: 80, min: 60, max: 120 },
        fermentationSteps: [
            "Mix Détrempe: Combine all ingredients except roll-in butter. Keep COLD. [Science: Do not develop full gluten; we need extensibility for rolling]",
            "Rest (Retard): Chill 4-12 hours. [Science: Cold dough matches cold butter plasticity]",
            "Lock-in: Envelope the butter block.",
            "Lamination: 3 Single Turns (Letter Folds). Rest 30 mins between turns. [Science: Fewer layers than puff pastry (27 vs 729) keeps it breadier]",
            "Final Sheet & Shape: Sheet to 4mm. Cut and shape.",
            "Proofing: 1-1.5 hours at 26°C. Do not exceed 28°C or butter will melt! [Science: The Wiggle Test]",
            "Baking: 200°C convection. [Science: Steam is good but not strictly necessary]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W280-320",
            pl_ratio: "0.55",
            absorption_capacity: "Moderate",
            protein_type: "Hard Wheat",
            science_explanation: "The protein must be strong enough to lift the heavy butter layers + heavy fruit fillings/custard without collapsing."
        },
        thermalProfile: {
            oven_type: "Convection",
            heat_distribution: "Even airflow",
            crust_development: "Golden brown, egg-washed shine",
            crumb_structure: "Open honeycomb layers, but softer cell walls than croissant"
        },
        fermentationScience: {
            yeast_activity: "High (Osmotolerant best due to sugar)",
            ph_target: "pH 5.2",
            organic_acids: "Low",
            enzymatic_activity: "High sugar speeds up browning"
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Fewer Layers",
                explanation: "Don't over-fold. Danish aims for 27 layers (3 single turns). Croissants go for 55 or more. Puff goes for hundreds. Fewer layers = more distinct separation."
            },
            {
                tip: "Remonce",
                explanation: "The secret filling: 1 part butter, 1 part sugar, flavored with marzipan or cinnamon. It caramelizes inside the pastry."
            },
            {
                tip: "Egg Wash",
                explanation: "Egg wash is mandatory for the shine and to seal fillings, but don't brush the cut edges or they won't rise."
            }
        ],
        what_if: [
            {
                scenario: "Butter pools on the tray",
                result: "Proofed too hot (>28°C)",
                correction: "Proof lower and slower. If the butter melts before the oven, the layers are lost."
            },
            {
                scenario: "Pastry unfurls",
                result: "Not glued properly",
                correction: "Press firmly when shaping and use egg wash as glue."
            }
        ],
        comparative_analysis: [ // Corrected property name
            {
                target_style: "Croissant",
                difference: "Danish has eggs and more sugar making it tender/cakey. Croissant is leaner/crisper.",
                why_choose_this: "Choose Danish for dessert."
            },
            {
                target_style: "Brioche",
                difference: "Brioche has butter mixed IN. Danish has butter LAYERED. Danish flakes; Brioche shreds.",
                why_choose_this: "Choose Danish for texture."
            }
        ],
        q_and_a: [
            {
                question: "Can I make it overnight?",
                answer: "Yes, retarding the shaped pastries overnight produces the best flavor and workflow.",
                context: "Timing"
            },
            {
                question: "Cardamom?",
                answer: "Essential for Scandinavian authenticity. Use freshly ground seeds.",
                context: "Flavor"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Yeasted."
            },
            {
                method: "Sourdough",
                suitability: "Possible",
                notes: "Modern twist, adds complexity."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Control hydration carefully; eggs add liquid. Too wet = impossible to laminate.",
        methodSuitability: {
            direct: { suitable: true, notes: "Standard." },
            poolish: { suitable: true, notes: "Good for extensibility." },
            biga: { suitable: false, notes: "Too stiff." }
        },
        whatIf: [
            {
                scenario: "You omit the chilling steps",
                outcome: "Butter will mix into the dough (Brioche) instead of layering. You lose the flakes.",
                solution: "Patience."
            }
        ],
        comparisons: [
            {
                vsStyle: "Spandauer vs Croissant",
                difference: "Spandauer is open-faced with custard; Croissant is rolled."
            }
        ],
        proTips: [
            "Use osmotolerant yeast (Gold label) if sugar > 10% to prevent slow rising.",
            "After baking, brush with apricot glaze (nappage) for that bakery shine and to seal freshness."
        ]
    },

    tags: ["danish", "pastry", "viennoiserie", "laminated", "sweet", "breakfast"],

    watchouts: [
        "Proofing too hot kills the layers.",
        "Under-baking leaves a raw, heavy center (especially under custard).",
        "Rolling too thin crushes the layers."
    ],

    notes: [
        "Danish pastry standard.",
        "Requires 'Tourage' (folding).",
        "High sugar/egg content.",
        "Fill with Custard or Jam.",
        "3 Single Turns."
    ],

    references: [
        {
            source: "The Art of French Pastry",
            url: "https://www.jacquy.com/",
            author: "Jacquy Pfeiffer",
            year: "2013"
        }
    ],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/danish-pastry-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["butter_dry_84", "vanilla_bean"] // Need vanilla?
};
