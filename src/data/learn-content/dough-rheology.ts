import { LearnArticleData } from '@/types/learn';

export const doughRheologyArticle: LearnArticleData = {
    id: "dough-rheology",
    title: "Dough Rheology — Flow, Resistance & Deformation",
    subtitle: "Understanding how dough behaves under stress, strain, stretching and compression.",
    category: "Dough Science",
    difficulty: "Advanced",
    tags: ["rheology", "viscoelasticity", "elasticity", "extensibility"],

    intro: "Dough rheology studies how dough flows and resists force. It defines stretchability, elasticity, gas retention and shaping behavior through measurable physical properties.",
    history: "Rheology emerged from materials science and transformed baking by quantifying dough behavior using farinographs and extensographs.",

    technicalFoundations: [
        "Viscoelasticity combines viscosity (flow) and elasticity (spring-back).",
        "Gas cells deform during fermentation; rheology defines stability.",
        "Temperature influences rheological softness.",
        "Stress–strain curves reveal dough resistance."
    ],

    doughImpact: [
        "High elasticity increases shrink-back during shaping.",
        "High viscosity resists stretching and creates dense crumb.",
        "Balanced viscoelasticity ensures predictable handling.",
        "Rheology determines how dough responds to folds and tension."
    ],

    bakingImpact: [
        "Strong rheology supports high oven spring.",
        "Weak rheology causes collapse near peak fermentation.",
        "Temperature-driven softness affects crust structure."
    ],

    practicalRanges: [
        { label: "Elasticity Index (Pizza)", notes: "Recommended: 55 EI (Range: 45-65 EI)" },
        { label: "Extensibility Index", notes: "Recommended: 70 XI (Range: 60-80 XI)" }
    ],

    practicalApplications: [
        "Hydration and protein % affect rheology parameters.",
        "Doughbot analyzes rheological balance from hydration, folds and fermentation time.",
        "NY style requires stronger rheology; Neapolitan requires softer balance.",
        "Track stretch-back and resistance during shaping tests in MyLab.",
        "Acidity reduces elasticity over long fermentation.",
        "Extensograph Predictor uses rheological markers."
    ],

    proTips: [
        "Handle dough gently when elasticity is high.",
        "Use folds to reinforce weak rheology."
    ],

    criticalPoints: [
        "Cold dough appears stiffer — rheology changes with temperature.",
        "Over fermentation ruins rheological structure permanently."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, temperature and flour quality define rheology.",
        "Folds reshape dough viscoelasticity."
    ],

    variantsAndImplications: [
        {
            variant: "High-Elasticity Dough",
            implications: "Strong gluten alignment. Resists stretching, strong rebound. Difficult to shape. Chewier, tighter crumb."
        },
        {
            variant: "High-Viscosity Dough",
            implications: "Dense and firm; low flow. Low extensibility. Low gas expansion. Dense crumb."
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
        intro: "Sweetheart, rheology is just how the dough behaves when you poke, stretch or press it.",
        whatItDoes: "It tells you how the dough will shape and rise.",
        howToUse: "When you understand the dough’s personality, you know exactly how to handle it.",
        dangerSigns: "Cold or tired dough behaves differently — be patient with it."
    }
};
