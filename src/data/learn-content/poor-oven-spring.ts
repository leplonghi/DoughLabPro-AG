import { LearnArticleData } from '@/types/learn';

export const poorOvenSpringData: LearnArticleData = {
    id: "poor-oven-spring",
    title: "Poor Oven Spring",
    subtitle: "Diagnosing weak rise during the first minutes of baking.",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    tags: ["oven-spring", "troubleshooting", "rise", "volume"],

    intro: "Oven spring is driven by rapid gas expansion, steam formation and gluten stretch. Weak oven spring indicates structural, fermentation or baking temperature issues.",
    history: "Oven spring has been studied extensively in baking science, correlating internal dough temperature rise to elastic properties and gas expansion.",

    technicalFoundations: [
        "Oven spring occurs between ~40°C and 70°C internal temp.",
        "Gluten must be elastic enough to stretch before setting.",
        "Gas cells expand rapidly under heat.",
        "Insufficient heat or poor shaping reduces spring."
    ],

    doughImpact: [
        "Underproofed dough restricts expansion.",
        "Weak gluten collapses instead of stretching.",
        "High acidity tightens gluten, reducing elasticity."
    ],

    bakingImpact: [
        "Flat or dense result with low loft.",
        "Poor crumb aeration.",
        "Reduced crust definition."
    ],

    practicalRanges: [
        { label: "Optimal Oven Spring Internal Temp", notes: "Recommended: 55°C (Range: 40-70°C)" }
    ],

    practicalApplications: [
        "Proofing predictions connect directly to oven spring readiness in Calculator.",
        "Thick styles need staged temperature curves for spring.",
        "Record profiles to find ideal balance between proofing and baking temperature in MyLab.",
        "Acidic levain doughs require careful timing for optimal spring.",
        "OvenProfiler ensures proper heat curves for spring."
    ],

    proTips: [
        "Preheat thoroughly — underheated ovens are the #1 cause of weak spring.",
        "Avoid degassing during shaping."
    ],

    criticalPoints: [
        "Underproofing dramatically reduces oven spring.",
        "Weak or acidic gluten collapses instead of stretching."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Proofing level, gluten strength, hydration and oven heat."
    ],

    variantsAndImplications: [
        {
            variant: "Low Heat",
            implications: "Oven not hot enough for rapid expansion. Slow rise, weak spring. Fails to inflate. Dense bake."
        },
        {
            variant: "Overproofed Dough",
            implications: "Weakens gluten before baking. Soft, fragile. Collapses under heat. Minimal rise."
        }
    ],

    references: [
        "AIB Oven Spring Dynamics.",
        "Modernist Bread — Gas Expansion Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, good oven spring is like a balloon filling with warm air — but only if the balloon is strong.",
        whatItDoes: "Makes bread tall and airy.",
        howToUse: "The dough needs strength and heat to puff up.",
        dangerSigns: "If the dough is weak or the oven cold, it won’t rise."
    }
};
