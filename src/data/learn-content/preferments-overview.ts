import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const prefermentsArticle: LearnArticleData = {
    id: "preferments-overview",
    title: t('learn.preferments__poolish_biga__pâte_fermentée'),
    subtitle: t('learn.flavor_extensibility_and_fermentation_stability_fr'),
    category: t('learn.fermentation_science_9'),
    difficulty: t('learn.advanced_11'),
    tags: ["preferments", "poolish", "biga", "flavor"],

    intro: "Preferments are pre-fermented mixtures of flour, water and yeast (or levain) that enhance flavor, extensibility and fermentation stability. Each type offers unique hydration, aroma and strength profiles.",
    history: "Traditional European baking developed preferments to improve flavor and dough reliability before modern yeast became standardized.",

    technicalFoundations: [
        "Poolish: liquid preferment (~100% hydration).",
        "Biga: stiff preferment (~50–60% hydration).",
        "Pâte Fermentée: piece of old dough with salt included.",
        "Preferments develop organic acids, enzymes and stable gas cells."
    ],

    doughImpact: [
        "Enhance extensibility through enzymatic action.",
        "Improve flavor complexity and aroma.",
        "Stabilize fermentation in long processes.",
        "Too much preferment softens gluten excessively."
    ],

    bakingImpact: [
        "Better oven spring due to pre-developed gluten.",
        "Enhanced browning from increased sugars.",
        "Open and aromatic crumb."
    ],

    practicalRanges: [
        { label: t('learn.poolish_'), notes: "Recommended: 30% of flour (Range: 20-50%)" },
        { label: t('learn.biga_'), notes: "Recommended: 30% of flour (Range: 20-40%)" },
        { label: t('learn.pâte_fermentée_'), notes: "Recommended: 20% of dough weight (Range: 10-30%)" }
    ],

    practicalApplications: [
        "Adjust hydration based on preferment type (poolish adds water) in Calculator.",
        "Doughbot warns for excessive preferment percentages.",
        "NY and artisan bread often use preferments; Neapolitan rarely does.",
        "Run tests: 0%, 20% and 40% preferment to compare aroma in MyLab.",
        "Levain coexists with preferments but requires careful acidity balance.",
        "Preferment assistant recommends hydration adjustments."
    ],

    proTips: [
        "Poolish adds aroma and extensibility.",
        "Biga adds strength and controlled fermentation."
    ],

    criticalPoints: [
        "Too much preferment weakens dough.",
        "Each preferment needs its own fermentation schedule."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration heavily influences preferment behavior.",
        "Temperature strongly shapes enzyme and yeast activity."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.poolish'),
            implications: "Wet, aromatic and enzymatically active. High extensibility, deep flavor. Softens dough; reduces mixing time. Open crumb and excellent aroma."
        },
        {
            variant: t('learn.biga'),
            implications: "Stiff, strong and structured. Gluten strength, controlled activity. Adds strength without excessive acidity. Great oven spring and chew."
        },
        {
            variant: t('learn.pâte_fermentée'),
            implications: "Old dough technique. Balanced flavor, salt present. Very stable fermentation. Classic European aroma."
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
        intro: t('learn.sweetheart_preferments_are_like_making_a_little_he'),
        whatItDoes: t('learn.it_makes_the_dough_tastier_softer_and_easier_to_ha'),
        howToUse: t('learn.you_mix_a_small_part_of_the_dough_ahead_of_time_to'),
        dangerSigns: t('learn.but_too_much_starter_makes_the_dough_too_soft__use')
    }
};