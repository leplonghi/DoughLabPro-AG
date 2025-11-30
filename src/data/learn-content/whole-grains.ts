import { LearnArticleData } from '@/types/learn';

export const wholeGrainsArticle: LearnArticleData = {
    id: "whole-grains-specialty-flours",
    title: "Whole Grains & Specialty Flours",
    subtitle: "Flavor, texture, absorption and enzyme activity across diverse grain types.",
    category: "Ingredient Science",
    difficulty: "Advanced",
    tags: ["whole-grains", "flour", "nutrition", "flavor"],

    intro: "Whole grains and specialty flours introduce bran, germ, enzymes and unique flavor compounds. They increase absorption, fermentation activity and texture complexity.",
    history: "Whole grains were the norm before industrial sifting. Modern baking uses them for nutritional value, flavor depth and enzymatic intensity.",

    technicalFoundations: [
        "Bran increases absorption and can weaken gluten by cutting strands.",
        "Germ adds oils and flavor but shortens shelf life.",
        "Whole grains increase enzyme activity and fermentation speed.",
        "Alternative grains (rye, spelt, einkorn) have distinct protein structures."
    ],

    doughImpact: [
        "Higher absorption requires increased hydration.",
        "Fermentation speeds increase with whole grain enzymes.",
        "Excess bran can reduce dough elasticity and gas retention.",
        "Spelt and einkorn form weaker gluten networks."
    ],

    bakingImpact: [
        "Whole grains brown faster and produce deeper aromas.",
        "Lower gluten strength reduces oven spring if not blended.",
        "Rye and spelt create denser, moist crumb structures."
    ],

    practicalRanges: [
        { label: "Whole Wheat (blend)", notes: "Recommended: 20% (Range: 10-40%)" },
        { label: "Rye (blend)", notes: "Recommended: 10% (Range: 5-20%)" },
        { label: "Spelt", notes: "Recommended: 25% (Range: 10-50%)" }
    ],

    practicalApplications: [
        "Hydration auto-adjusts upward for whole grain percentages in Calculator.",
        "Warn when gluten-weak grains exceed structural limits.",
        "Specialty blends can be suggested for artisan styles.",
        "Run blend tests (10%, 25%, 40%) to compare texture in MyLab.",
        "Whole grains accelerate levain fermentation significantly.",
        "Doughbot detects enzyme-driven overactivity."
    ],

    proTips: [
        "Blend strong flour with specialty grains for structure.",
        "Increase hydration progressively as whole grain % rises."
    ],

    criticalPoints: [
        "Too much bran cuts gluten strands.",
        "Rye dough behaves fundamentally differently — never treat it like wheat."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Absorption increases sharply with whole grains.",
        "Enzyme activity varies dramatically by grain type."
    ],

    variantsAndImplications: [
        {
            variant: "Whole Wheat Flour",
            implications: "High fiber, high absorption, high enzyme activity. Nutty flavor, dense crumb. Requires more hydration. Rich flavor, darker crust."
        },
        {
            variant: "Rye Flour",
            implications: "Low gluten; rich in pentosans. Sticky texture, strong flavor. Weak structure; best in blends. Moist, compact crumb."
        },
        {
            variant: "Ancient Grains (Spelt, Einkorn)",
            implications: "Unique protein structures. Weak gluten, soft extensibility. Fragile networks; gentle handling. Aromatic but less oven spring."
        }
    ],

    references: [
        "Hamelman, J. Bread.",
        "Calvel, R. The Taste of Bread."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, whole grains are like adding nuts and seeds to the dough — more flavor, more personality.",
        whatItDoes: "They add flavor, color and healthy fibers.",
        howToUse: "They drink more water and make the dough sturdier and more rustic.",
        dangerSigns: "But they make the dough less stretchy, so it needs more water and a softer touch. Rye and spelt behave differently — they can’t hold as much air as regular flour."
    }
};
