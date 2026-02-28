import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

// SEED — expandir via StyleGeneratorPipeline
export const kaisersemmelAustrian: DoughStyleDefinition = {
    id: "kaisersemmel_austrian",
    name: "Austrian Kaisersemmel",
    category: "bread",
    recipeStyle: RecipeStyle.KAISERSEMMEL,
    family: "Viennese Rolls",
    status: "seed",

    origin: { country: "Austria", region: "Vienna", period: "1800s" },

    description: "The Kaisersemmel (Emperor Roll) is Vienna's iconic breakfast roll. Its signature five-petal fold pattern is achieved by hand or with a special stamp. The lard-enriched dough bakes to a crispy, crackly exterior with a soft, open crumb — the perfect vehicle for butter and jam or cold cuts.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "Type 550 flour (or bread flour)", percentage: 100 },
        { name: "Water", percentage: 58 },
        { name: "Salt", percentage: 2 },
        { name: "Instant yeast", percentage: 1.5 },
        { name: "Lard or shortening", percentage: 2 },
        { name: "Malt extract", percentage: 0.5 },
    ],

    technicalProfile: {
        hydration: [56, 60],
        salt: [1.8, 2.2],
        oil: [1.5, 2.5],
        sugar: [0, 0.5],
        flourStrength: "Medium-strong (W260-290)",
        ovenTemp: [220, 240],
        recommendedUse: ["Viennese breakfast", "Sandwich rolls", "Cold cut service"],
        difficulty: "Medium",
        ballWeight: { recommended: 80, min: 70, max: 90 },
        fermentationSteps: [
            "Mix all ingredients until a smooth, elastic dough forms.",
            "Bulk ferment 60-90 minutes at room temperature.",
            "Divide into 80g pieces, pre-shape, rest 15 minutes.",
            "Apply five-petal fold (by hand or stamp).",
            "Proof 30 minutes, bake at 230°C with steam for 18-20 minutes.",
        ],
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W260-290",
            pl_ratio: "0.50-0.60",
            absorption_capacity: "Moderate (56-60%)",
            protein_type: "Medium-strong Austrian or German wheat",
            science_explanation: "The lard retards gluten development slightly, producing the characteristic soft crumb.",
        },
        thermalProfile: {
            oven_type: "Deck oven with steam injection",
            heat_distribution: "High, even heat with initial steam",
            crust_development: "Glossy, thin, crackly golden crust",
            crumb_structure: "Soft, fine, regular crumb",
        },
        fermentationScience: {
            yeast_activity: "Active, short fermentation",
            ph_target: "pH 5.6-5.8",
            organic_acids: "Very mild; clean flavor profile",
            enzymatic_activity: "Malt extract boosts browning enzymes",
        },
    },

    education: {
        pro_tips: [
            { tip: "Steam is mandatory", explanation: "Injecting steam in the first 8 minutes creates the signature shiny, crackly crust of a Kaisersemmel." },
            { tip: "The fold", explanation: "The five-petal fold must be sealed face-down during proofing; when flipped for baking, the pattern opens dramatically in the oven." },
        ],
        what_if: [],
        comparative_analysis: [
            { target_style: "French Baguette", difference: "Kaisersemmel is enriched with lard and shaped as a round roll; baguette is lean and elongated.", why_choose_this: "Choose Kaisersemmel for the classic Austrian breakfast experience." },
        ],
        q_and_a: [],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Traditional Viennese bakers use short direct fermentation." },
            { method: "Poolish", suitability: "Ideal", notes: "Small liquid poolish (10-15%) adds subtle flavor depth." },
        ],
    },

    tags: ["austrian", "viennese", "roll", "breakfast", "lard", "emperor roll"],
    watchouts: ["Skipping steam produces a dull, bread-like crust instead of the classic crackle."],
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
    recommendedFlavorComponents: ["butter_unsalted", "jam", "cold_cuts"],
};
