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

    flavorProfile: {
        primaryFlavors: ["buttery enriched wheat", "savory spiced ground meat", "salty sharp white cheese", "fresh parsley brightness"],
        aromaProfile: ["butter-toasted dough edges", "cumin and red pepper spice", "egg-washed golden crust", "fresh herb finish"],
        textureNotes: ["soft pillowy dough with slight chew", "boat-shaped open center", "golden egg-washed crust", "contrast of bread and savory filling"],
        pairingRecommendations: ["Ayran (salted yogurt drink, traditional)", "Turkish black tea", "Pickled vegetables (turşu)", "Cacık (tzatziki-style yogurt dip)"]
    },

    culturalContext: "Pide is one of Turkey's most beloved dishes — a staple of pidecis (pide restaurants) across Anatolia since the Ottoman era. The boat shape is intentional: it frames the filling as a presentation. Different regions of Turkey take pride in their local pide variants: Trabzon pide with eggs and butter, Samsun pide with extra keşkek, each a point of local gastronomy identity.",

    globalPresence: "Pide is well-known throughout the Middle East, the Balkans, and among Turkish diaspora communities in Germany, the Netherlands, and Australia. It is one of the most recognizable Turkish dishes exported globally and appears on menus of Turkish kebab and pizza restaurants worldwide.",

    pairings: {
        canonical: ["Kıymalı pide (ground meat + onion + spice)", "Peynerli pide (white cheese + egg)", "Kaşarlı pide (kashar cheese melt)"],
        modern: ["Spinach + egg + feta crumble", "Mushroom + truffle oil + kashar", "Spiced lamb + pomegranate molasses + pine nuts"],
        regional: ["Ayran (chilled salted yogurt drink)", "Turşu (pickled vegetables)", "Baklava or künefe as dessert"]
    },

    experimentSuggestions: [
        "Replace butter with sheep-tail fat (kuyruk yağı) for an authentic Anatolian flavor profile and compare richness.",
        "Apply egg wash before baking vs after 5 minutes of baking and compare golden color depth.",
        "Try kıymalı filling cooked vs raw before filling and compare moisture and spice penetration during the bake.",
        "Test a 2h room-temp rise vs 24h cold retard on the same recipe and compare the dough aroma and texture.",
        "Pinch and twist ends tightly vs leave open and compare filling containment and edge color."
    ],

    learnLinkTags: ["enriched-dough", "gluten-network", "yeast-biology", "maillard-reaction", "fermentation-chemistry"],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    images: {
        hero: "/images/styles/turkish_pide_hero.png",
        dough: "/images/styles/turkish_pide_dough.png",
        crumb: "/images/styles/turkish_pide_crumb.png",
    },
    recommendedFlavorComponents: ["ground_beef", "onion", "parsley", "feta"],
};
