import { LearnArticleData } from '@/types/learn';

export const paleCrustData: LearnArticleData = {
    id: "pale-crust",
    title: "Pale Crust",
    subtitle: "Diagnosing insufficient heat, sugar depletion and moisture retention problems.",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    tags: ["crust", "browning", "troubleshooting", "maillard"],

    intro: "A pale crust occurs when browning reactions fail to activate. The causes include low baking temperature, excessive moisture, sugar depletion or overproofing.",
    history: "Food science research identified browning reactions as a complex interplay between heat, water activity and available sugars.",

    technicalFoundations: [
        "Maillard reaction triggers around 140–160°C.",
        "Caramelization requires sufficient sugars and heat.",
        "Excess surface moisture delays browning.",
        "Overproofing depletes available sugars."
    ],

    doughImpact: [
        "Overproofed dough consumes browning sugars.",
        "High hydration leaves surface wetter during baking.",
        "Weak gluten leads to irregular surface drying."
    ],

    bakingImpact: [
        "Low temperature produces pale, soft crust.",
        "Excess steam delays browning.",
        "Heat imbalance leads to uneven coloration."
    ],

    practicalRanges: [
        { label: "Baking Temperature for Consistent Browning", notes: "Recommended: 320°C (Range: 280-350°C)" }
    ],

    practicalApplications: [
        "Yeast % and time influence browning sugar availability in Calculator.",
        "NY and Pala expect moderate to strong browning.",
        "Track coloration at different baking temperatures in MyLab.",
        "Levain acidity accelerates coloration but can promote uneven browning.",
        "OvenProfiler correlates oven heat curves to browning issues."
    ],

    proTips: [
        "Increase heat or bake slightly longer for deeper color.",
        "Avoid opening the oven early—moisture delays browning."
    ],

    criticalPoints: [
        "Overproofing removes sugars needed for browning.",
        "Low heat cannot be compensated by long bake times alone."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Temperature, hydration and fermentation time strongly influence surface color."
    ],

    variantsAndImplications: [
        {
            variant: "Low Heat Baking",
            implications: "Insufficient energy for browning reactions. Soft crust, pale surface. Reduced caramelization potential. Weak crust structure."
        },
        {
            variant: "Overproofed Dough",
            implications: "Sugar depleted during fermentation. Fragile, wet. Surface dries slowly. Faint coloration."
        }
    ],

    references: [
        "AIB Browning Reaction Notes.",
        "Food Chemistry — Maillard Reaction Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, a pale crust is like toast you didn’t leave long enough.",
        whatItDoes: "Makes the crust soft and light-colored.",
        howToUse: "Heat is your friend — use enough of it.",
        dangerSigns: "The oven wasn’t hot enough or the dough ran out of sugar."
    }
};
