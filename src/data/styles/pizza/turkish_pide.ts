import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

// SEED — expandir via StyleGeneratorPipeline
export const turkishPide: DoughStyleDefinition = {
    id: "turkish_pide",
    name: "Turkish Pide",
    category: "pizza",
    recipeStyle: RecipeStyle.TURKISH_PIDE,
    family: "Turkish Flatbread",
    status: "seed",

    origin: { country: "Turkey", region: "Anatolia", period: "Ottoman era" },

    description: "Pide is a Turkish flatbread baked in a boat-like shape, often topped with ground meat (kıymalı), cheese, spinach, or egg. The dough is soft and pillowy thanks to an enrichment of butter, baked in high-heat stone ovens.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "Bread flour", percentage: 100 },
        { name: "Water", percentage: 60 },
        { name: "Salt", percentage: 2 },
        { name: "Instant yeast", percentage: 1 },
        { name: "Butter (in dough)", percentage: 3 },
    ],

    technicalProfile: {
        hydration: [58, 62],
        salt: [1.8, 2.2],
        oil: [2, 4],
        sugar: [0, 1],
        flourStrength: "Medium (W240-280)",
        ovenTemp: [260, 300],
        recommendedUse: ["Traditional Turkish restaurant service", "Street food"],
        difficulty: "Medium",
        ballWeight: { recommended: 280, min: 250, max: 320 },
        fermentationSteps: [
            "Mix all ingredients until smooth dough forms.",
            "Bulk ferment 1 hour at room temperature.",
            "Shape into elongated boats, fill with desired topping.",
            "Bake at 270-300°C for 8-12 minutes until golden.",
        ],
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W240-280",
            pl_ratio: "0.50-0.60",
            absorption_capacity: "Moderate (58-62%)",
            protein_type: "Medium-strong wheat",
            science_explanation: "Butter enrichment adds tenderness; moderate protein for the open, boat shape.",
        },
        thermalProfile: {
            oven_type: "Deck or stone oven",
            heat_distribution: "High bottom heat",
            crust_development: "Soft, pillowy, golden",
            crumb_structure: "Open and soft",
        },
        fermentationScience: {
            yeast_activity: "Active, short fermentation",
            ph_target: "pH 5.5-5.8",
            organic_acids: "Mild",
            enzymatic_activity: "Low",
        },
    },

    education: {
        pro_tips: [
            { tip: "Egg wash", explanation: "Brush exposed dough edges with egg wash for a deep golden sheen." },
            { tip: "Boat shape", explanation: "Pinch and twist the ends to create the traditional pointed oval; this prevents toppings from spilling." },
        ],
        what_if: [],
        comparative_analysis: [
            { target_style: "Lahmacun", difference: "Lahmacun is paper-thin and rolled with a pin; Pide is thicker and softer.", why_choose_this: "Choose Pide for a more filling, bread-like experience." },
        ],
        q_and_a: [],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Short, same-day fermentation is traditional." },
        ],
    },

    tags: ["turkish", "flatbread", "ottoman", "boat", "kiyma"],
    watchouts: ["Don't over-fill or the boat will collapse in the oven."],
    notes: ["Status: seed — requires pipeline expansion before publishing."],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    images: {
        hero: "/images/styles/placeholder-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png",
    },
    recommendedFlavorComponents: ["ground_beef", "onion", "parsley", "feta"],
};
