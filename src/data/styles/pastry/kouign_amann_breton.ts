import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

// SEED — expandir via StyleGeneratorPipeline
export const kouignAmannBreton: DoughStyleDefinition = {
    id: "kouign_amann_breton",
    name: "Kouign-Amann",
    category: "pastry",
    recipeStyle: RecipeStyle.KOUIGN_AMANN,
    family: "Breton Laminated Pastry",
    status: "seed",

    origin: { country: "France", region: "Douarnenez, Brittany", period: "1860" },

    description: "Kouign-Amann (literally 'Butter Cake' in Breton) is one of France's most extraordinary pastries — a yeasted bread dough laminated with generous amounts of salted butter and sugar. When baked in a round tin, the sugar caramelizes on the outside while the inside stays tender and flaky. Created in 1860 by Yves-René Scordia in Douarnenez, it has achieved worldwide cult status.",

    difficulty: "Hard",
    fermentationType: "direct",

    base_formula: [
        { name: "Bread flour", percentage: 100 },
        { name: "Water", percentage: 65 },
        { name: "Salt", percentage: 1.5 },
        { name: "Instant yeast", percentage: 1 },
        { name: "Unsalted butter (laminated)", percentage: 45 },
        { name: "Granulated sugar (laminated)", percentage: 30 },
        { name: "Coarse sea salt (finishing)", percentage: 1 },
    ],

    technicalProfile: {
        hydration: [62, 68],
        salt: [1.2, 2.0],
        oil: [40, 50], // laminated butter
        sugar: [28, 35],
        flourStrength: "Medium-strong (W260-300)",
        ovenTemp: [190, 210],
        recommendedUse: ["Specialty pastry shop", "French café", "Brunch service"],
        difficulty: "Hard",
        ballWeight: { recommended: 700, min: 600, max: 900 },
        fermentationSteps: [
            "Make a basic yeasted dough; bulk ferment 1 hour.",
            "Roll out to rectangle; spread cold butter slab.",
            "Fold and roll as for rough puff (3 letter folds).",
            "Sprinkle sugar between folds in the last fold.",
            "Place in round buttered tin; proof 30-45 minutes.",
            "Bake at 200°C for 35-40 minutes until deep caramel.",
            "Flip immediately onto wire rack to prevent sticking.",
        ],
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W260-300",
            pl_ratio: "0.55-0.65",
            absorption_capacity: "Moderate-high (62-68%)",
            protein_type: "Medium-strong wheat for lamination tolerance",
            science_explanation: "The dough must be strong enough to surround the butter during lamination but extensible enough to roll without tearing.",
        },
        thermalProfile: {
            oven_type: "Convection oven preferred",
            heat_distribution: "Moderate; caramel requires controlled heat",
            crust_development: "Deeply caramelized, lacquered, crystalline exterior",
            crumb_structure: "Flaky, layered, slightly doughy interior",
        },
        fermentationScience: {
            yeast_activity: "Active before lamination; weakened slightly by butter",
            ph_target: "pH 5.5-5.8",
            organic_acids: "Mild",
            enzymatic_activity: "Moderate amylase supports caramelization",
        },
    },

    education: {
        pro_tips: [
            { tip: "Flip immediately", explanation: "The caramelized base will stick if left in the tin. Flip onto a rack or sheet within 2 minutes of removal from the oven." },
            { tip: "Cold butter", explanation: "Butter must be pliable but cold (15-16°C) during lamination. Too warm and it melts into the dough; too cold and it shatters." },
        ],
        what_if: [],
        comparative_analysis: [
            { target_style: "Croissant", difference: "Both are laminated with butter, but Kouign-Amann has sugar laminated in too, producing a caramelized, denser result.", why_choose_this: "Choose Kouign-Amann for the showstopping caramel and the uniquely Breton flavor." },
        ],
        q_and_a: [],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Original Scordia recipe used a simple yeasted dough." },
            { method: "Poolish", suitability: "Ideal", notes: "A small poolish adds subtle fermentation depth." },
        ],
    },

    tags: ["french", "breton", "laminated", "caramel", "pastry", "butter cake"],
    watchouts: ["Sugar burns quickly; lower temperature if top darkens before 30 minutes."],
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
    recommendedFlavorComponents: ["salted_butter", "granulated_sugar", "sea_salt"],
};
