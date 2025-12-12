import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const crustFormationArticle: LearnArticleData = {
    id: "crust-formation-dynamics",
    title: t('learn.crust_formation_dynamics'),
    subtitle: t('learn.how_heat_moisture_and_maillard_reactions_shape_cru'),
    category: t('learn.baking_science_4'),
    difficulty: t('learn.advanced_3'),
    tags: ["crust", "maillard", "baking", "texture"],

    intro: "Crust formation results from moisture evaporation, surface drying, heat transfer and Maillard reactions. It defines texture, crispness, color and flavor.",
    history: "Crust development has been studied in food engineering to optimize texture, moisture migration and the balance between crispness and softness.",

    technicalFoundations: [
        "Surface moisture evaporates as temperature rises.",
        "Dried surface allows Maillard reactions to begin.",
        "Crust thickness depends on hydration, baking time and oven heat.",
        "Steam presence delays crust setting."
    ],

    doughImpact: [
        "Hydration influences surface drying rate.",
        "Sugar levels accelerate browning.",
        "Fat content softens crust and reduces crispness."
    ],

    bakingImpact: [
        "High heat creates blistering and thin crust.",
        "Longer bakes produce thicker, crunchier crust.",
        "Moisture migration determines post-bake crispness."
    ],

    practicalRanges: [
        { label: t('learn.surface_drying_threshold'), notes: "Recommended: 90°C (Range: 80-100°C)" },
        { label: t('learn.optimal_browning_start'), notes: "Recommended: 150°C (Range: 140-160°C)" }
    ],

    practicalApplications: [
        "Higher hydration delays crust set, requiring more heat.",
        "Neapolitan and Roman styles differ strongly in crust formation parameters.",
        "Record crust thickness at various baking times in MyLab.",
        "Levain acidity influences crust blistering.",
        "OvenProfiler links heat curves to crust behavior."
    ],

    proTips: [
        "Avoid opening the oven early—moisture balance is critical.",
        "Dusting flour blocks browning; use sparingly."
    ],

    criticalPoints: [
        "Low heat causes pale crust and poor texture.",
        "High heat can burn surface before crumb sets."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, oven heat and fermentation influence crust dynamics."
    ],

    variantsAndImplications: [
        {
            variant: "High-Heat Crust (Neapolitan)",
            implications: "Thin, blistered crust from intense radiant heat. Tender, speckled. Requires soft dough."
        },
        {
            variant: "Low-Heat Crust (NY Style)",
            implications: "Thicker, crunchier crust with gradual browning. Structured, chewy. Requires slightly stronger gluten."
        }
    ],

    references: [
        "AIB Baking Process Technical Sheets.",
        "Food Engineering Reviews on Crust Development."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, crust forms like toast—first it dries, then it turns golden and crisp.",
        whatItDoes: t('learn.makes_the_pizza_crunchy_and_tasty'),
        howToUse: t('learn.the_heat_removes_moisture_and_browns_the_surface'),
        dangerSigns: t('learn.too_little_heat_leaves_it_pale_too_much_burns_it')
    }
};
