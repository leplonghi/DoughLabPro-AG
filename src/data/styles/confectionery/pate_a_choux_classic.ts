import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

// SEED — expandir via StyleGeneratorPipeline
export const pateAChouxClassic: DoughStyleDefinition = {
    id: "pate_a_choux_classic",
    name: "Pâte à Choux (Classic Choux Pastry)",
    category: "confectionery",
    recipeStyle: RecipeStyle.PATE_A_CHOUX,
    family: "Classic French Pastry",
    status: "seed",

    origin: { country: "France", region: "Paris", period: "1540 — Pantanelli for Catherine de' Medici" },

    description: "Pâte à Choux is the magical French pastry dough used to make éclairs, profiteroles, Paris-Brest, and gougères. Unlike any other pastry, it is cooked twice — first on the stovetop to create a gelatinized starch paste (panade), then in the oven where steam expansion creates the hollow shells. It contains no chemical leavener; steam from the high egg and water content is the only rising agent.",

    difficulty: "Hard",
    fermentationType: "direct",

    base_formula: [
        { name: "Water", percentage: 100 },
        { name: "Unsalted butter", percentage: 50 },
        { name: "Salt", percentage: 2 },
        { name: "Sugar", percentage: 2 },
        { name: "All-purpose flour", percentage: 62 },
        { name: "Whole eggs", percentage: 100 }, // added gradually to achieve correct consistency
    ],

    technicalProfile: {
        hydration: [95, 110], // Very high — batter-like consistency
        salt: [1.5, 2.5],
        oil: [45, 55],
        sugar: [1.5, 3],
        flourStrength: "Standard all-purpose (W200-240)",
        ovenTemp: [190, 220],
        recommendedUse: ["French pastry applications (éclairs, profiteroles, choux rings)", "Savory gougères"],
        difficulty: "Hard",
        ballWeight: { recommended: 40, min: 30, max: 50 }, // per piped éclair
        fermentationSteps: [
            "Combine water, butter, salt, sugar; bring to a rolling boil.",
            "Add flour all at once; stir vigorously until dough pulls away from the pan (panade). [Science: starch gelatinization]",
            "Cool slightly; add eggs one at a time, mixing until dough falls off the spoon in a slow ribbon.",
            "Pipe into desired shapes.",
            "Bake at 200°C for 20-30 minutes without opening the oven.",
            "Pierce shells to release steam; cool completely before filling.",
        ],
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W200-240",
            pl_ratio: "0.45-0.55",
            absorption_capacity: "N/A (panade process)",
            protein_type: "Soft wheat for easy gelatinization",
            science_explanation: "Heat pre-gelatinizes the starch during the panade stage, creating a water-holding matrix that explosively releases steam during baking to form the hollow shell.",
        },
        thermalProfile: {
            oven_type: "Convection oven recommended",
            heat_distribution: "Even, moderate-high",
            crust_development: "Golden, slightly cracked, dry exterior",
            crumb_structure: "Completely hollow interior",
        },
        fermentationScience: {
            yeast_activity: "None",
            ph_target: "N/A",
            organic_acids: "None",
            enzymatic_activity: "Starch gelatinization is the key reaction, not fermentation",
        },
    },

    education: {
        pro_tips: [
            { tip: "The ribbon test", explanation: "Correct dough consistency = when the spatula is lifted, dough falls away in a smooth, slow-falling V-shaped ribbon. Too thick: shells won't rise. Too thin: shells collapse." },
            { tip: "Never open the oven", explanation: "Opening the oven before the shells are fully set will cause immediate collapse. Wait until the surface is golden and dry." },
        ],
        what_if: [],
        comparative_analysis: [
            { target_style: "Puff Pastry", difference: "Both are used in French pastry but are technically unrelated: puff pastry is laminated and cold; choux is twice-cooked and steam-leavened.", why_choose_this: "Choose Choux for hollow filled applications; puff pastry for layered, flaky ones." },
        ],
        q_and_a: [],
        fermentation_methods: [
            { method: "Scald", suitability: "Authentic", notes: "The panade (stovetop cooking of flour) is the equivalent of scalding — the core technique that makes choux work." },
        ],
    },

    tags: ["french", "choux", "éclair", "profiterole", "steam-leavened", "panade"],
    watchouts: ["If dough is too wet (too many eggs), shells will be flat and dense rather than hollow."],
    notes: ["Status: seed — requires pipeline expansion before publishing."],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    images: {
        hero: "/images/styles/placeholder-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png",
    },
    recommendedFlavorComponents: ["pastry_cream", "chocolate_ganache", "whipped_cream"],
};
