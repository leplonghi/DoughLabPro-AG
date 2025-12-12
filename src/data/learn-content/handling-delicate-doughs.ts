import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const handlingDelicateDoughsData: LearnArticleData = {
    id: 'handling-delicate-doughs',
    title: 'Handling Delicate Doughs',
    subtitle: 'Techniques for managing wet, fermented or over-relaxed dough with precision.',
    category: 'Process Techniques',
    difficulty: 'Advanced',
    tags: ['handling', 'high-hydration', 'shaping', 'technique'],

    intro: "Delicate doughs — high hydration, long fermented, or levain-driven — require gentle and informed handling to avoid collapse, tearing and sticking.",
    history: "Professional bakers developed specialized techniques to control delicate doughs as hydration levels increased in modern artisan baking.",

    technicalFoundations: [
        "High hydration increases stickiness and fragility.",
        "Long fermentation yields high gas retention but softer structure.",
        "Surface tension must be created without degassing.",
        "Temperature affects dough firmness and handling stability."
    ],

    doughImpact: [
        "Gentle handling preserves gas and structure.",
        "Overhandling leads to tearing and collapse.",
        "Proper wet-hand or oiled-surface techniques improve control."
    ],

    bakingImpact: [
        "Maintaining structure ensures proper oven spring.",
        "Collapsed dough bakes dense and uneven.",
        "Delicate doughs deliver superior open crumb when handled correctly."
    ],

    practicalRanges: [
        { label: t('learn.hydration_threshold_for_delicate_handling'), notes: "Recommended: 72% (Range: 68-80%)" }
    ],

    practicalApplications: [
        "Hydration warnings assist users handling delicate doughs in Calculator.",
        "Roman Pala and focaccia frequently use delicate doughs.",
        "Log dough behavior at various fermentation times in MyLab.",
        "Levain dough fragility depends heavily on pH and gluten condition.",
        "DoughBot issues alerts when hydration exceeds delicate thresholds."
    ],

    proTips: [
        "Use wet or lightly oiled hands for control.",
        "Handle from underneath rather than pushing down."
    ],

    criticalPoints: [
        "Flouring excessively destroys surface hydration balance.",
        "Overhandling collapses fermentation gases."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration and fermentation time strongly dictate fragility."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.highhydration_dough'),
            implications: "Extremely wet and extensible. Sticky, soft. Needs careful folding. Produces large holes. Recommended for Ciabatta, Pan de Cristal, High Hydration Pizza."
        },
        {
            variant: t('learn.overfermented_dough'),
            implications: "Weak gluten but high gas. Fragile, puffy. Requires minimal handling. Risk of collapse. Recommended for Rescue operations, Specific rustic styles."
        }
    ],

    references: [
        "Modernist Bread — High Hydration Handling.",
        "AIB Dough Strength Studies."
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: "Sweetheart, handling delicate dough is like carrying a sleeping baby — gentle and careful.",
        whatItDoes: t('learn.keeps_the_bubbles_inside'),
        howToUse: t('learn.wet_soft_dough_needs_a_soft_touch'),
        dangerSigns: t('learn.dont_poke_or_squeeze_too_hard_or_it_collapses')
    }
};
