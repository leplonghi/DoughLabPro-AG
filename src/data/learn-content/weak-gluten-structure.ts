import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const weakGlutenStructureData: LearnArticleData = {
    id: "weak-gluten-structure",
    title: t('learn.weak_gluten_structure'),
    subtitle: "Understanding protein development, flour strength and dough mechanics behind weak gluten.",
    category: t('learn.troubleshooting_11'),
    difficulty: t('learn.intermediate_33'),
    tags: ["gluten", "structure", "flour", "troubleshooting"],

    intro: "Weak gluten structure arises when proteins fail to form a cohesive, elastic network. It affects gas retention, dough handling, fermentation tolerance and oven spring.",
    history: "Gluten strength evaluation is foundational in cereal science and commercial baking, influencing flour classification and dough performance.",

    technicalFoundations: [
        "Gluten forms from gliadin (extensibility) and glutenin (elasticity).",
        "Under-mixing prevents full gluten alignment.",
        "Over-mixing can tear protein chains.",
        "Weak flour (low W value) cannot sustain long fermentations."
    ],

    doughImpact: [
        "Dough collapses under its own weight.",
        "Poor gas retention creates flat or dense crumb.",
        "Shaping becomes difficult due to low elasticity."
    ],

    bakingImpact: [
        "Reduced oven spring due to poor internal structure.",
        "Crumb becomes tight and uneven.",
        "Crust may blister irregularly from weak tension."
    ],

    practicalRanges: [
        { label: "Ideal Flour Strength for Long Ferments (W)", notes: "Recommended: 300W (Range: 280-340W)" }
    ],

    practicalApplications: [
        "Hydration and fermentation duration should match flour W in Calculator.",
        "Neapolitan requires flour with W 260–320 to avoid weak structure.",
        "Track dough strength across fermentation times in MyLab.",
        "Acidity can weaken gluten if fermentation runs too long.",
        "DoughBot detects gluten weakness via logged failure modes."
    ],

    proTips: [
        "Use flour matching fermentation length.",
        "Perform windowpane tests to evaluate gluten formation."
    ],

    criticalPoints: [
        "No technique can fully compensate for flour that is too weak.",
        "Over-mixing is irreversible."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Flour strength, mixing, hydration and fermentation duration."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.undermixed_dough'),
            implications: t('learn.gluten_not_fully_developed_sticky_weak_difficult_h')
        },
        {
            variant: t('learn.overmixed_dough'),
            implications: "Gluten broken down by excess mixing. Soft, tearing. Low gas retention. Collapsed structure."
        }
    ],

    references: [
        "AIB Flour Strength Handbook.",
        "Calvel — The Taste of Bread."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, weak gluten is like a loose net that can't hold anything.",
        whatItDoes: t('learn.makes_the_dough_spread_and_stay_flat'),
        howToUse: t('learn.the_dough_isnt_strong_enough_to_trap_air'),
        dangerSigns: "Without strength, the bread won’t rise well. Too much mixing or weak flour can’t be undone."
    }
};