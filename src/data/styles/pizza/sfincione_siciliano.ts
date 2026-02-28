import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

// SEED — expandir via StyleGeneratorPipeline
export const sfincioneSiciliano: DoughStyleDefinition = {
    id: "sfincione_siciliano",
    name: "Sfincione Siciliano",
    category: "pizza",
    recipeStyle: RecipeStyle.SFINCIONE_SICILIANO,
    family: "Sicilian Street Food",
    status: "seed",

    origin: { country: "Italy", region: "Palermo, Sicily", period: "1800s" },

    description: "The Sfincione Palermitano is Palermo's iconic street food — a thick, spongy focaccia-like pizza base topped with a rich sauce of onions, anchovies, caciocavallo cheese, and breadcrumbs. Distinct from Sicilian pizza exported to the US, the genuine Sfincione is a street food sold from three-wheeled carts in Palermo's markets.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "Semolina rimacinata", percentage: 50 },
        { name: "Type 0 flour", percentage: 50 },
        { name: "Water", percentage: 70 },
        { name: "Salt", percentage: 2.5 },
        { name: "Fresh yeast", percentage: 2 },
        { name: "Olive oil", percentage: 5 },
    ],

    technicalProfile: {
        hydration: [68, 72],
        salt: [2.2, 2.8],
        oil: [4, 6],
        sugar: [0, 0],
        flourStrength: "Medium (semolina blend)",
        ovenTemp: [220, 250],
        recommendedUse: ["Street food service", "Antipasto", "Aperitivo"],
        difficulty: "Medium",
        ballWeight: { recommended: 700, min: 600, max: 900 },
        fermentationSteps: [
            "Mix semolina and flour with water, yeast, and olive oil.",
            "Bulk ferment 2 hours at room temperature.",
            "Transfer to oiled baking tin, dimple generously.",
            "Top with onion sauce, caciocavallo, and breadcrumbs.",
            "Bake at 230°C for 25-30 minutes until deeply golden.",
        ],
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W220-260 (semolina blend)",
            pl_ratio: "0.55-0.65",
            absorption_capacity: "High (68-72%)",
            protein_type: "Durum semolina + soft wheat blend",
            science_explanation: "Semolina provides a golden crumb color and a slightly grainy texture; the blend with soft flour adds extensibility.",
        },
        thermalProfile: {
            oven_type: "Deck or home oven",
            heat_distribution: "Moderate, needs full tin contact",
            crust_development: "Thick, golden, slightly crunchy bottom",
            crumb_structure: "Open and airy despite high thickness",
        },
        fermentationScience: {
            yeast_activity: "Active; high hydration supports rapid fermentation",
            ph_target: "pH 5.5-5.7",
            organic_acids: "Mild lactic profile",
            enzymatic_activity: "Moderate amylase from semolina",
        },
    },

    education: {
        pro_tips: [
            { tip: "Onion base", explanation: "Cook the onions low and slow until caramelized before topping — this is the defining flavor of authentic Sfincione." },
            { tip: "Breadcrumb finish", explanation: "Add 'molica' (toasted breadcrumbs) before the last 5 minutes for a signature crunchy top." },
        ],
        what_if: [],
        comparative_analysis: [
            { target_style: "Detroit Style", difference: "Both are pan-baked and thick, but Sfincione uses a semolina dough and very different toppings (no cheese-boundary caramelization).", why_choose_this: "Choose Sfincione for an authentic Sicilian street-food experience." },
        ],
        q_and_a: [],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Traditional same-day to overnight rise." },
            { method: "Poolish", suitability: "Ideal", notes: "A poolish adds extra flavor depth to the semolina base." },
        ],
    },

    tags: ["sicilian", "street food", "palermo", "thick crust", "semolina"],
    watchouts: ["Under-baking leaves raw dough center; the thick base needs full heat penetration."],
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
    recommendedFlavorComponents: ["caciocavallo", "anchovy", "onion_caramelized", "tomato_sauce_cooked"],
};
