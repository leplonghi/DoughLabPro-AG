import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

// SEED — expandir via StyleGeneratorPipeline
export const pastelDeNataPortuguese: DoughStyleDefinition = {
    id: "pastel_de_nata_portuguese",
    name: "Pastel de Nata (Portuguese Custard Tart)",
    category: "pastry",
    recipeStyle: RecipeStyle.PASTEL_DE_NATA,
    family: "Portuguese Laminated Pastry",
    status: "seed",

    origin: {
        country: "Portugal",
        region: "Belém, Lisbon",
        period: "Before 1837 — Monastery of Jerónimos",
    },

    description: "The Pastel de Nata is Portugal's most beloved pastry — a small, flaky tart shell made from hand-rolled laminated dough, filled with a silky egg custard that blisters and caramelizes at extreme heat. The secret recipe from the Fábrica de Pastéis de Belém (since 1837) is among the most closely guarded in the culinary world.",

    difficulty: "Hard",
    fermentationType: "direct",

    base_formula: [
        { name: "All-purpose flour", percentage: 100 },
        { name: "Water (cold)", percentage: 48 },
        { name: "Salt", percentage: 1 },
        { name: "Unsalted butter (for lamination)", percentage: 70 },
        // Custard filling is a separate preparation
    ],

    technicalProfile: {
        hydration: [45, 50],
        salt: [0.8, 1.2],
        oil: [60, 75], // laminated butter
        sugar: [0, 0],
        flourStrength: "Standard all-purpose (W200-240)",
        ovenTemp: [270, 300], // Very high heat essential for custard charring
        recommendedUse: ["Portuguese café", "Pastry shop", "High-volume bakery service"],
        difficulty: "Hard",
        ballWeight: { recommended: 25, min: 20, max: 30 }, // per individual tart shell
        fermentationSteps: [
            "Mix flour, water, and salt into a rough dough; rest 20 mins.",
            "Roll into thin rectangle; spread softened butter over 2/3 of surface.",
            "Fold letter-style; roll twice more for 3 total folds.",
            "Roll out thin; roll up tightly into a log.",
            "Slice into discs; press into greased tart tins.",
            "Fill with custard; bake at 280-300°C for 12-15 minutes.",
        ],
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W200-240 (standard AP)",
            pl_ratio: "0.45-0.55",
            absorption_capacity: "Low (45-50%)",
            protein_type: "Soft wheat",
            science_explanation: "Low hydration and soft flour create the ultra-flaky, crispy layers; high protein would make the dough too elastic for the thin shell.",
        },
        thermalProfile: {
            oven_type: "Deck or very hot domestic oven",
            heat_distribution: "Intense top and bottom heat",
            crust_development: "Shatteringly flaky, pale to golden",
            crumb_structure: "Multiple thin, distinct layers",
        },
        fermentationScience: {
            yeast_activity: "None — unleavened laminate",
            ph_target: "N/A",
            organic_acids: "None in pastry; custard provides subtle eggy acidity",
            enzymatic_activity: "Minimal",
        },
    },

    education: {
        pro_tips: [
            { tip: "Blistering custard", explanation: "The iconic dark blisters on the custard surface require 280°C+. Lower temperatures produce a flat, pale, underdeveloped custard." },
            { tip: "Hand press technique", explanation: "Traditional pastéis use thumb and forefinger to press the sliced dough discs into tins from the center outward — machine rolling cannot replicate the irregular layered shell." },
        ],
        what_if: [],
        comparative_analysis: [
            { target_style: "Portuguese Egg Tart (Macanese Dan Tat)", difference: "Dan Tat is similar but uses a shortcrust or flaky shell and a softer, less charred custard baked at lower temperatures.", why_choose_this: "Choose Pastel de Nata for the authentic high-heat char and flaky Portuguese shell." },
        ],
        q_and_a: [],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "No fermentation — laminated pastry, no yeast." },
        ],
    },

    tags: ["portuguese", "custard tart", "laminated", "pastry", "belém", "lisbon"],
    watchouts: ["Oven must be fully preheated to 280°C+; tarts baked at lower temperatures will be pale and un-blackened."],
    notes: ["Status: seed — requires pipeline expansion before publishing."],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    images: {
        hero: "/images/styles/pastel_de_nata_portuguese_hero.png",
        dough: "/images/styles/pastel_de_nata_portuguese_dough.png",
        crumb: "/images/styles/pastel_de_nata_portuguese_crumb.png",
    },
    recommendedFlavorComponents: ["egg_custard", "cinnamon", "lemon_zest"],
};
