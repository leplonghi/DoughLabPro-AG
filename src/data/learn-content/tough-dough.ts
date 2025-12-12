import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const toughDoughData: LearnArticleData = {
    id: "tough-dough",
    title: t('learn.tough_dough'),
    subtitle: t('learn.diagnosing_dough_that_resists_stretching_tears_or_'),
    category: t('learn.troubleshooting_9'),
    difficulty: t('learn.intermediate_30'),
    tags: ["tough-dough", "elasticity", "extensibility", "troubleshooting"],

    intro: "Tough dough is characterized by excessive elasticity and low extensibility. It resists stretching, tears easily and makes shaping difficult.",
    history: "Dough toughness is widely studied in rheology, connecting gluten strength, hydration and fermentation to extensibility behavior.",

    technicalFoundations: [
        "High gluten alignment increases elasticity.",
        "Low hydration stiffens gluten strands.",
        "Insufficient fermentation keeps gluten tight.",
        "Cold dough is naturally tougher and less extensible."
    ],

    doughImpact: [
        "Dough snaps back during shaping.",
        "Tearing risk increases with low extensibility.",
        "Dough structure may become overly dense."
    ],

    bakingImpact: [
        "Tough dough bakes with reduced oven spring.",
        "Crumb becomes tight and chewy.",
        "Cornicione fails to expand properly."
    ],

    practicalRanges: [
        { label: t('learn.extensibility_temperature'), notes: "Recommended: 24°C (Range: 22-26°C)" }
    ],

    practicalApplications: [
        "Hydration and fermentation sliders influence extensibility predictions in Calculator.",
        "NY Style requires balanced extensibility; Neapolitan favors softness.",
        "Track dough temperature and extensibility across tests in MyLab.",
        "Acidity impacts gluten elasticity; over-acidic dough becomes tough.",
        "DoughBot flags elasticity issues from logged shaping failures."
    ],

    proTips: [
        "Let dough relax for 10–20 minutes before reattempting stretching.",
        "Increase hydration slightly when dealing with strong flour."
    ],

    criticalPoints: [
        "Cold dough is significantly tougher.",
        "Excessive gluten strength without rest leads to tearing."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration, flour strength, fermentation time and temperature."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.underfermented_dough'),
            implications: "Gluten remains tight and undeveloped. Elastic, resistant. Difficult stretching. Weak spring."
        },
        {
            variant: t('learn.low_hydration'),
            implications: t('learn.not_enough_water_to_soften_gluten_firm_dry_low_ext')
        }
    ],

    references: [
        "AIB Extensibility Studies.",
        "Calvel — Gluten Behavior in Fermentation."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.sweetheart_tough_dough_is_like_trying_to_stretch_a'),
        whatItDoes: t('learn.makes_shaping_hard'),
        howToUse: t('learn.its_too_stiff_and_keeps_pulling_back'),
        dangerSigns: "You can’t get a nice pizza shape this way. A little rest can soften even the toughest dough."
    }
};
