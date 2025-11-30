import { LearnArticleData } from '@/types/learn';

export const doughBallingTensioningArticle: LearnArticleData = {
    id: "dough-balling-tensioning",
    title: "Dough Balling & Tensioning",
    subtitle: "Creating consistent dough balls with controlled gluten tension.",
    category: "Process Techniques",
    difficulty: "Intermediate",
    tags: ["balling", "tension", "shaping", "consistency"],

    intro: "Balling creates individual dough portions with controlled tension, consistency and gas distribution. It’s crucial for pizza styles requiring precise stretching behavior.",
    history: "Modern balling techniques grew from Italian pizzerias, where uniformity and fermentation control became essential.",

    technicalFoundations: [
        "Balling reorganizes gluten across a spherical structure.",
        "Surface tension stabilizes expansion during fermentation.",
        "Ball shaping distributes fermentation gases evenly.",
        "Relaxation time after balling determines extensibility."
    ],

    doughImpact: [
        "Increases structure and elasticity.",
        "Predictable stretching behavior during opening.",
        "Weak balling causes tearing during stretching."
    ],

    bakingImpact: [
        "Consistent balling improves cornicione symmetry.",
        "Better uniformity yields predictable heat transfer."
    ],

    practicalRanges: [
        { label: "Post-Balling Relaxation", notes: "Recommended: 20 minutes (Range: 10-30 minutes)" }
    ],

    practicalApplications: [
        "Hydration informs the correct balling tension.",
        "Neapolitan requires soft-tension balling; NY requires slightly firmer.",
        "Experiment with tension levels and log extensibility performance in MyLab.",
        "Levain doughs require minimal balling to avoid degassing.",
        "DoughBot flags tearing symptoms linked to poor balling."
    ],

    proTips: [
        "Flour your hands lightly, not the dough.",
        "Use consistent motion and pressure for uniform balls."
    ],

    criticalPoints: [
        "Too much tension prevents stretching.",
        "Too little tension causes flat, uneven discs."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration and dough temperature strongly dictate balling difficulty."
    ],

    variantsAndImplications: [
        {
            variant: "High-Tension Balls",
            implications: "Tight gluten alignment for structured styles. Elastic, stable. More resistant during opening. Defined crust edge."
        },
        {
            variant: "Soft-Tension Balls",
            implications: "Gentler approach for extensible styles. Relaxed, soft. Easier opening. More irregular shaping."
        }
    ],

    references: [
        "Associazione Verace Pizza Napoletana Guidelines.",
        "AIB Dough Balling Standards."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, balling dough is like rolling a snowball — smooth outside, soft inside.",
        whatItDoes: "Helps the pizza open evenly.",
        howToUse: "We round the dough so it stretches nicely later.",
        dangerSigns: "If it’s too tight or loose, stretching becomes a battle."
    }
};
