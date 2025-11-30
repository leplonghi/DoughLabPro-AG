import { LearnArticleData } from '@/types/learn';

export const overproofUnderproofData: LearnArticleData = {
    id: "overproof-underproof",
    title: "Overproof vs Underproof",
    subtitle: "Recognizing fermentation extremes and how they affect dough handling and baking.",
    category: "Fermentation Science",
    difficulty: "Intermediate",
    tags: ["proofing", "fermentation", "troubleshooting", "oven-spring"],

    intro: "Proofing is the final fermentation stage before baking. Identifying whether dough is underproofed or overproofed is essential for texture, oven spring and crumb quality.",
    history: "The distinction between proofing levels became essential with commercial yeast and controlled fermentation environments in professional bakeries.",

    technicalFoundations: [
        "Underproofed dough has insufficient gas expansion and tight gluten.",
        "Overproofed dough has excessive gas and weakened gluten walls.",
        "Proofing balance depends on yeast %, temperature and fermentation curves.",
        "Gas cell structure and gluten alignment determine final stability."
    ],

    doughImpact: [
        "Underproofed: elastic, tight, prone to tearing.",
        "Overproofed: fragile, overly soft, collapses easily.",
        "Proper proofing: balanced extensibility and gas retention."
    ],

    bakingImpact: [
        "Underproofed: poor oven spring, dense crumb.",
        "Overproofed: collapsed structure and pale crust.",
        "Proper proofing: maximum oven spring and uniform crumb."
    ],

    practicalRanges: [
        { label: "Proofing Time (Warm Kitchen)", notes: "Recommended: 90 minutes (Range: 45-120 minutes)" },
        { label: "Proofing Time (Cold Dough)", notes: "Recommended: 3 hours (Range: 2-6 hours)" }
    ],

    practicalApplications: [
        "Doughbot warns when proofing time is mismatched with yeast % or DT.",
        "Neapolitan requires strict proofing to avoid collapse during hot baking.",
        "Log dough volume at intervals to understand visual proofing cues in MyLab.",
        "Levain doughs overproof faster due to LAB activity.",
        "Proofing Monitor suggests ideal temperature for stable fermentation."
    ],

    proTips: [
        "Use the finger-poke test for real-time assessment.",
        "Adjust temperature instead of drastically changing time."
    ],

    criticalPoints: [
        "Overproofing damage is irreversible.",
        "Underproofing limits oven spring potential."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature and yeast % strongly define proofing speed.",
        "Hydration influences dough fragility at high proof."
    ],

    variantsAndImplications: [
        {
            variant: "Underproofed Dough",
            implications: "Low gas buildup; structure too tight. Elastic, dense. Hard to stretch, tears easily. Low rise, compact crumb."
        },
        {
            variant: "Overproofed Dough",
            implications: "Excess gas and weakened gluten. Soft, fragile. Loses shape quickly. Collapse and pale crust."
        }
    ],

    references: [
        "Hamelman, J. Bread.",
        "Suas, M. Advanced Bread and Pastry."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, underproofed dough is like waking up too early, and overproofed dough is like staying up too long.",
        whatItDoes: "Proofing gives the dough the perfect level of puffiness.",
        howToUse: "If it hasn’t risen enough, it’s tight. If it rises too much, it gets floppy.",
        dangerSigns: "Too soon or too late and the dough just won’t behave."
    }
};
