import { LearnArticleData } from '@/types/learn';

export const denseCrumbData: LearnArticleData = {
    id: "dense-crumb",
    title: "Dense Crumb",
    subtitle: "Diagnosing poor gas retention, weak fermentation and structural imbalance.",
    category: "Troubleshooting",
    difficulty: "Intermediate",
    tags: ["crumb", "density", "troubleshooting", "fermentation"],

    intro: "Dense crumb occurs when the dough fails to retain gas or develop sufficient gluten structure. It can stem from fermentation, shaping, flour strength or hydration issues.",
    history: "Bread science has long focused on crumb density as a key performance indicator, linking it to mixing, fermentation and baking variables.",

    technicalFoundations: [
        "Dense crumb indicates low gas retention.",
        "Weak gluten fails to support bubble expansion.",
        "Underproofing restricts oven spring.",
        "Low hydration limits starch gelatinization and expansion."
    ],

    doughImpact: [
        "Reduced elasticity due to inadequate gluten.",
        "Limited expansion during fermentation.",
        "Difficulty shaping due to stiffness."
    ],

    bakingImpact: [
        "Poor oven spring.",
        "Tight crumb structure.",
        "Greater drying in thick sections."
    ],

    practicalRanges: [
        { label: "Hydration for Open Crumb", notes: "Recommended: 70% (Range: 65-78%)" }
    ],

    practicalApplications: [
        "Increase hydration slightly to loosen crumb.",
        "Ensure full fermentation before shaping.",
        "Hydration slider in Calculator influences crumb openness predictions.",
        "Some styles (NY, Roman) expect moderate crumb openness.",
        "Compare crumb density at different proofing times in MyLab.",
        "Levain acidity can tighten crumb if gluten weakens.",
        "DoughBot flags underproofing patterns based on bake logs."
    ],

    proTips: [
        "Increase hydration slightly to loosen crumb.",
        "Ensure full fermentation before shaping."
    ],

    criticalPoints: [
        "Underproofing is the most common cause of dense crumb.",
        "Flour too weak for hydration leads to collapse."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, fermentation, flour strength and mixing time."
    ],

    variantsAndImplications: [
        {
            variant: "Underproofed Dough",
            implications: "Insufficient fermentation. Stiff, tight. Low gas, minimal extensibility. Poor spring."
        },
        {
            variant: "Low Hydration Dough",
            implications: "Limited expansion potential. Firm, dry. Restrictive crumb. Dense, uniform cells."
        }
    ],

    references: [
        "Calvel — The Taste of Bread.",
        "AIB Crumb Analysis Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, a dense crumb is like bread that forgot to breathe.",
        whatItDoes: "Makes the inside heavy.",
        howToUse: "Give it time and water — dough needs both.",
        dangerSigns: "It didn’t rise enough or doesn’t have enough moisture."
    }
};
