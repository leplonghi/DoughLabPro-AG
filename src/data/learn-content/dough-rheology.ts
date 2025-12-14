import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const doughRheologyArticle: LearnArticleData = {
    id: "dough-rheology",
    title: t('learn.dough_rheology__flow_resistance__deformation'),
    subtitle: t('learn.understanding_how_dough_behaves_under_stress_strai'),
    category: t('learn.dough_science_4'),
    difficulty: t('learn.advanced_5'),
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
        { label: t('learn.extensibility_index'), notes: "Recommended: 70 XI (Range: 60-80 XI)" }
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
            variant: t('learn.highelasticity_dough'),
            implications: "Strong gluten alignment. Resists stretching, strong rebound. Difficult to shape. Chewier, tighter crumb."
        },
        {
            variant: t('learn.highviscosity_dough'),
            implications: t('learn.dense_and_firm_low_flow_low_extensibility_low_gas_')
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
        whatItDoes: t('learn.it_tells_you_how_the_dough_will_shape_and_rise'),
        howToUse: t('learn.when_you_understand_the_doughs_personality_you_kno'),
        dangerSigns: t('learn.cold_or_tired_dough_behaves_differently__be_patien')
    }
};