import { LearnArticleData } from '@/types/learn';

export const stickyDoughData: LearnArticleData = {
    id: "sticky-dough",
    title: "Sticky Dough",
    subtitle: "Understanding hydration, gluten development and fermentation conditions behind sticky dough behavior.",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    tags: ["sticky", "hydration", "troubleshooting", "handling"],

    intro: "Sticky dough is typically the result of excess hydration, weak gluten formation or fermentation issues. Identifying the correct cause is essential for restoring control.",
    history: "As modern baking shifted to higher hydration levels, stickiness became a common technical challenge requiring systematic troubleshooting.",

    technicalFoundations: [
        "Hydration above 70% significantly increases surface tackiness.",
        "Insufficient gluten development yields sticky, weak dough.",
        "Over-fermentation weakens structure and increases stickiness.",
        "Dough temperature affects protein hydration and enzymatic activity."
    ],

    doughImpact: [
        "Sticky dough is harder to shape and prone to tearing.",
        "Gas retention becomes inconsistent.",
        "Surface tension is difficult to achieve."
    ],

    bakingImpact: [
        "Sticky dough often spreads, limiting oven spring.",
        "Crumb may appear uneven or collapsed.",
        "Crust may brown inconsistently due to moisture imbalance."
    ],

    practicalRanges: [
        { label: "Hydration Threshold for Tackiness", notes: "Recommended: 72% (Range: 70-85%)" }
    ],

    practicalApplications: [
        "Hydration warnings appear when exceeding sticky thresholds in Calculator.",
        "Styles like Roman Pala tolerate higher stickiness.",
        "Record hydration vs dough feel to identify personal thresholds in MyLab.",
        "Levain acidity increases stickiness as dough ripens.",
        "DoughBot suggests fold sequences and flour adjustments."
    ],

    proTips: [
        "Wet-hand method reduces sticking.",
        "Cold dough is easier to handle than warm dough."
    ],

    criticalPoints: [
        "Too much bench flour dries the surface and alters hydration.",
        "Over-fermentation leads to irreversibly sticky dough."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, fermentation time and flour strength are key drivers."
    ],

    variantsAndImplications: [
        {
            variant: "High Hydration",
            implications: "Very wet dough with naturally tacky behavior. Soft, extensible. Needs strong gluten and folds. Promotes open crumb when handled well."
        },
        {
            variant: "Underdeveloped Gluten",
            implications: "Dough remains sticky due to insufficient strength. Weak, elastic-poor. Hard to shape. Poor structural rise."
        }
    ],

    references: [
        "Modernist Bread — High Hydration Troubleshooting.",
        "AIB Dough Consistency Research."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, sticky dough is like trying to hold jelly — it wiggles everywhere.",
        whatItDoes: "Makes shaping difficult.",
        howToUse: "It’s too wet or too soft to handle easily.",
        dangerSigns: "If too sticky, your pizza won’t hold its shape."
    }
};
