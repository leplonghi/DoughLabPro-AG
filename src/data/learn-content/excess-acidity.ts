import { LearnArticleData } from '@/types/learn';

export const excessAcidityData: LearnArticleData = {
    id: "excess-acidity",
    title: "Excess Acidity",
    subtitle: "Diagnosing sourness, gluten weakening and fermentation imbalance.",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    tags: ["acidity", "ph", "troubleshooting", "gluten"],

    intro: "Excess acidity results from prolonged fermentation, overactive levain or imbalanced bacteria-to-yeast ratio. It impacts flavor, gluten stability and dough handling.",
    history: "Acidification studies in bread science show how pH, lactic acid bacteria and yeasts interact to shape dough flavor and structure.",

    technicalFoundations: [
        "pH drops as bacteria produce lactic and acetic acids.",
        "Lower pH weakens gluten, reducing elasticity.",
        "Over-acidified dough becomes sticky and collapses.",
        "Acid profile depends on fermentation time and temperature."
    ],

    doughImpact: [
        "Dough becomes slack and fragile.",
        "Sticky surface due to gluten degradation.",
        "Gas retention becomes inconsistent."
    ],

    bakingImpact: [
        "Over-acidified dough yields limited oven spring.",
        "Crumb becomes gummy or irregular.",
        "Flavor becomes excessively sour."
    ],

    practicalRanges: [
        { label: "Ideal Dough pH (Levain Dough)", notes: "Recommended: 4.3 pH (Range: 4.1-4.4 pH)" }
    ],

    practicalApplications: [
        "Levain ratio suggestions help prevent excess acidity.",
        "Levain-heavy styles require precise fermentation curves.",
        "Record pH readings to correlate acidity with dough performance in MyLab.",
        "Levain maintenance routines minimize runaway acidity.",
        "DoughBot suggests pH-based adjustments in fermentation time."
    ],

    proTips: [
        "Refresh levain more frequently to reduce acidity.",
        "Reduce fermentation time when temperatures are warm."
    ],

    criticalPoints: [
        "Acidic dough loses gluten strength quickly.",
        "Over-acidity is difficult to reverse without rebalancing levain."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Levain ratio, fermentation duration and temperature."
    ],

    variantsAndImplications: [
        {
            variant: "Lactic Acid Dominance",
            implications: "Mild, creamy acidity. Smooth, soft. Gentle gluten weakening. Balanced flavor."
        },
        {
            variant: "Acetic Acid Dominance",
            implications: "Sharply sour, vinegar-like profile. Sharp, intense. Stronger gluten breakdown. Irregular rise."
        }
    ],

    references: [
        "Debra Wink — The Pineapple Juice Solution.",
        "AIB Sour Dough Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, too much acidity is like lemonade that’s all lemon and no sugar.",
        whatItDoes: "Makes it collapse easily.",
        howToUse: "Balanced sourness makes delicious bread.",
        dangerSigns: "The dough gets too sour and too soft."
    }
};
