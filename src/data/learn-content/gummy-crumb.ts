import { LearnArticleData } from '@/types/learn';

export const gummyCrumbData: LearnArticleData = {
    id: "gummy-crumb",
    title: "Gummy Crumb",
    subtitle: "Understanding incomplete baking, hydration imbalance and starch gelatinization failure.",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    tags: ["crumb", "gumminess", "troubleshooting", "baking"],

    intro: "Gummy crumb results when starch gelatinization is incomplete or when the crumb retains excessive moisture. It is a classic sign of underbaking or poor structural development.",
    history: "Gummy crumb has been documented extensively in cereal science, particularly in relation to gelatinization thresholds and moisture migration.",

    technicalFoundations: [
        "Starch must reach ~60–70°C internally to fully gelatinize.",
        "High hydration delays internal temperature rise.",
        "Underbaking leaves interior moisture trapped.",
        "Weak gluten allows moisture pooling in dense zones."
    ],

    doughImpact: [
        "Dense or wet zones trap water.",
        "Underproofed dough retains moisture unevenly.",
        "Weak gluten fails to enable moisture escape."
    ],

    bakingImpact: [
        "Sticky or paste-like centers.",
        "Wet crumb that collapses when pressed.",
        "Pale crust and weak structure."
    ],

    practicalRanges: [
        { label: "Internal Temp for Complete Bake", notes: "Recommended: 94°C (Range: 92-98°C)" }
    ],

    practicalApplications: [
        "Hydration affects bake-time recommendations in Calculator.",
        "Thick styles require extended bake times for full set.",
        "Log internal temperature to track proper baking curves in MyLab.",
        "Acidic doughs may set earlier but still retain moisture.",
        "OvenProfiler suggests temperature curves to avoid gummy results."
    ],

    proTips: [
        "Use a thermometer to confirm internal temperature.",
        "Avoid slicing too soon after baking."
    ],

    criticalPoints: [
        "Gummy crumb is almost always underbaking.",
        "High hydration requires structured gluten for proper moisture release."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, thickness, fermentation and baking temperature."
    ],

    variantsAndImplications: [
        {
            variant: "High Hydration Dough",
            implications: "Retains moisture longer. Wet, slow-setting. Needs longer bake. Risk of gummy center."
        },
        {
            variant: "Underbaked Dough",
            implications: "Insufficient heat exposure. Soft, sticky. Incomplete gelatinization. Gummy sections."
        }
    ],

    references: [
        "Food Chemistry — Starch Gelatinization Studies.",
        "AIB Moisture Migration Papers."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, gummy crumb is like cake batter in the middle — not cooked yet.",
        whatItDoes: "Makes the bread soggy and sticky.",
        howToUse: "Let it bake fully and cool properly before slicing.",
        dangerSigns: "The inside didn’t heat enough to firm up."
    }
};
