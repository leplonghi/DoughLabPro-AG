import { LearnArticleData } from '@/types/learn';

export const laminationLayeringTechniquesArticle: LearnArticleData = {
    id: "lamination-layering-techniques",
    title: "Lamination & Layer Techniques",
    subtitle: "Stretching, folding and layering dough to create structured and flaky textures.",
    category: "Process Techniques",
    difficulty: "Advanced",
    tags: ["lamination", "folding", "layers", "structure"],

    intro: "Lamination introduces layers into dough through a repeated stretch-and-fold technique. It enhances structure, creates distinct layers, and supports specialized styles such as laminated pizzas or hybrid breads.",
    history: "Derived from Viennoiserie traditions, lamination migrated into modern pizza experimentation and high-hydration dough handling.",

    technicalFoundations: [
        "Lamination stretches gluten evenly across wide surfaces.",
        "Layering improves structural alignment and dough aeration.",
        "Rest periods between folds prevent tearing.",
        "Over-lamination can reduce extensibility."
    ],

    doughImpact: [
        "Creates an organized gluten matrix.",
        "Supports large bubbles and open crumb.",
        "Enhances dough strength for high-hydration formulas."
    ],

    bakingImpact: [
        "Produces airy, honeycomb-like crumb.",
        "Improves steam retention during baking.",
        "Supports crisp but light texture."
    ],

    practicalRanges: [
        { label: "Folds per Lamination Cycle", notes: "Recommended: 3 folds (Range: 2-4 folds)" }
    ],

    practicalApplications: [
        "Hydration above 70% benefits from lamination for structural support.",
        "Roman Pala and high-hydration focaccias benefit from lamination.",
        "Test number of folds vs crumb openness in MyLab.",
        "Levain doughs become more manageable with light lamination.",
        "DoughBot suggests lamination when hydration exceeds thresholds."
    ],

    proTips: [
        "Use wet hands to reduce sticking.",
        "Let dough rest between folds for optimal extensibility."
    ],

    criticalPoints: [
        "Over-lamination tears gluten.",
        "Under-lamination fails to develop structure."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration level dictates how effective lamination will be."
    ],

    variantsAndImplications: [
        {
            variant: "Full Lamination",
            implications: "Multiple folds, large surface expansion. Open crumb, structured layers. Stronger dough. Better oven spring."
        },
        {
            variant: "Partial Lamination",
            implications: "Light folding for minimal structure enhancement. Gentle, flexible. More extensible. Less pronounced layering."
        }
    ],

    references: [
        "Modernist Bread — Dough Folding Research.",
        "AIB Hydration Management Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, lamination is like folding a bedsheet again and again to make it smooth.",
        whatItDoes: "Makes big bubbles and light crumb.",
        howToUse: "We stretch and fold dough so it becomes airy inside.",
        dangerSigns: "Too many folds make dough stiff and tired."
    }
};
