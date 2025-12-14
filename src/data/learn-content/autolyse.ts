import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const autolyseArticle: LearnArticleData = {
    id: "autolyse-technique",
    title: t('learn.autolyse__enzymatic_relaxation__gluten_preformatio'),
    subtitle: t('learn.how_a_simple_rest_improves_extensibility_hydration'),

    category: t('learn.dough_science'), // Updated category
    difficulty: t('learn.intermediate_2'),
    tags: ["autolyse", "extensibility", "hydration", "calvel"],

    intro: "Autolyse is the rest period where flour and water hydrate before kneading. It improves extensibility, enhances gluten alignment, reduces mixing time and develops flavor naturally.",

    history: "Developed by Professor Raymond Calvel, autolyse revolutionized artisan baking by enabling stronger doughs with less oxidation during mixing.",

    technicalFoundations: [
        "Hydration activates gliadin (extensibility) and glutenin (elasticity).",
        "Proteolytic enzymes soften gluten bonds during rest.",
        "Amylases release sugars, enhancing fermentation potential.",
        "Salt and yeast are excluded to prevent premature tightening or fermentation."
    ],

    doughImpact: [
        "Greatly increases extensibility.",
        "Reduces required mixing time by 20–40%.",
        "Easier shaping and smoother dough surface.",
        "Too long autolyse may weaken dough structure."
    ],

    bakingImpact: [
        "Improved oven spring from balanced strength.",
        "Enhanced aroma due to reduced oxidation.",
        "More open and even crumb structure."
    ],

    practicalRanges: [
        { label: t('learn.short_autolyse'), notes: "Recommended: 20 min (Range: 15-25 min)" },
        { label: t('learn.standard_autolyse'), notes: "Recommended: 30 min (Range: 20-60 min)" },
        { label: t('learn.long_autolyse'), notes: "Recommended: 90 min (Range: 60-120 min)" }
    ],

    practicalApplications: [
        "Hydration affects ideal autolyse length; wetter doughs benefit more.",
        "Neapolitan and artisan bread benefit significantly from autolyse.",
        "Compare 0 min vs 30 min vs 60 min autolyse batches to see handling differences.",
        "Levain doughs should limit autolyse to avoid over-softening due to acidity.",
        "Doughbot correlates autolyse with gluten relaxation curves."
    ],

    proTips: [
        "Keep autolyse simple: only flour + water.",
        "Shorten autolyse when using high whole grain percentages."
    ],

    criticalPoints: [
        "Salt and yeast restrict enzymatic relaxation.",
        "Over-autolysed dough becomes weak and sticky."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [
        "Hydration deeply affects autolyse effectiveness.",
        "Whole grains accelerate enzymatic softening."
    ],

    variantsAndImplications: [
        {
            variant: t('learn.with_whole_grain'),
            implications: t('learn.shorter_autolyse_recommended_deeper_flavor')
        },
        {
            variant: t('learn.high_protein_flour'),
            implications: t('learn.longer_autolyse_beneficial_maximizes_oven_spring')
        }
    ],

    references: [
        "Calvel, R. The Taste of Bread.",
        "Hamelman, J. Bread."
    ],

    images: [],
    diagrams: [],

    faq: [
        {
            q: t('learn.can_i_add_salt_during_autolyse'),
            a: "Technically no, that's called a 'fermentolyse' if yeast is added too. Salt tightens gluten, counteracting the relaxation benefit of autolyse."
        }
    ],

    grandmaVersion: {
        intro: "Sweetheart, autolyse is like letting the dough take a warm bath before working. Just flour and water resting together makes the dough softer and easier to handle.",
        whatItDoes: t('learn.it_helps_the_dough_stretch_without_tearing_and_nee'),
        howToUse: t('learn.your_hands_work_less_and_the_dough_becomes_smooth_'),
        dangerSigns: t('learn.but_leave_it_too_long_and_the_dough_gets_weak__eve')
    }
};