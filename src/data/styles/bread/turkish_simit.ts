import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

// SEED — expandir via StyleGeneratorPipeline
export const turkishSimit: DoughStyleDefinition = {
    id: "turkish_simit",
    name: "Turkish Simit",
    category: "bread",
    recipeStyle: RecipeStyle.TURKISH_SIMIT,
    family: "Turkish Ring Bread",
    status: "seed",

    origin: { country: "Turkey", region: "Istanbul", period: "1525" },

    description: "Simit is the iconic circular bread of Istanbul — a golden, crunchy sesame-encrusted ring sold by street vendors across Turkey. The dough is dipped in grape molasses before being coated in sesame seeds, which caramelize during baking to create a deeply fragrant, crackling crust.",

    difficulty: "Easy",
    fermentationType: "direct",

    base_formula: [
        { name: "Bread flour", percentage: 100 },
        { name: "Water", percentage: 55 },
        { name: "Salt", percentage: 1.8 },
        { name: "Instant yeast", percentage: 1 },
        { name: "Vegetable oil", percentage: 2 },
        { name: "Grape molasses (for dipping)", percentage: 0 }, // applied externally
        { name: "Sesame seeds (for coating)", percentage: 0 },   // applied externally
    ],

    technicalProfile: {
        hydration: [53, 57],
        salt: [1.6, 2.0],
        oil: [1.5, 2.5],
        sugar: [0, 0],
        flourStrength: "Medium (W240-270)",
        ovenTemp: [230, 250],
        recommendedUse: ["Street food", "Breakfast", "Snack with tea"],
        difficulty: "Easy",
        ballWeight: { recommended: 200, min: 180, max: 220 },
        fermentationSteps: [
            "Mix all dough ingredients; knead until smooth (8-10 min).",
            "Bulk ferment 30-45 minutes.",
            "Divide and roll into long ropes; twist two ropes together and form a ring.",
            "Dip rings in diluted grape molasses, then roll in sesame seeds.",
            "Bake at 240°C for 20-25 minutes until deeply golden.",
        ],
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W240-270",
            pl_ratio: "0.50-0.60",
            absorption_capacity: "Low-moderate (53-57%)",
            protein_type: "Medium-strength wheat",
            science_explanation: "Lower hydration gives the dough enough body to hold the twisted ring shape without spreading.",
        },
        thermalProfile: {
            oven_type: "Deck oven",
            heat_distribution: "Uniform, high",
            crust_development: "Ultra-crispy, caramelized sesame crust",
            crumb_structure: "Dense, tight-crumbed",
        },
        fermentationScience: {
            yeast_activity: "Active but brief",
            ph_target: "pH 5.6-5.9",
            organic_acids: "Very mild",
            enzymatic_activity: "Molasses dip provides external sugars for rapid Maillard browning",
        },
    },

    education: {
        pro_tips: [
            { tip: "Pekmez (molasses) dip", explanation: "Dilute grape molasses 1:1 with water. This provides the sugars that caramelize the sesame seeds to a deep amber color." },
            { tip: "Twist tightly", explanation: "The two-strand twist must be firm; loose twists open during baking and lose their shape." },
        ],
        what_if: [],
        comparative_analysis: [
            { target_style: "New York Bagel", difference: "Both are boiled/dipped ring breads, but Simit uses molasses dip (not boiling) and sesame coating (not everything bagel spice).", why_choose_this: "Choose Simit for a crunchier, less chewy ring with a more delicate sesame-forward flavor." },
        ],
        q_and_a: [],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Traditional Simit uses a short, fast fermentation for same-day baking." },
        ],
    },

    tags: ["turkish", "istanbul", "ring bread", "sesame", "street food", "ottoman"],
    watchouts: ["Sesame burns quickly — watch closely in the final 5 minutes."],
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
    recommendedFlavorComponents: ["sesame_seeds", "feta", "olives", "tomato_fresh"],
};
