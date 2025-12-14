import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const extensibilityData: LearnArticleData = {
    id: "extensibility-vs-elasticity",
    title: t('learn.extensibility_vs_elasticity'),
    subtitle: t('learn.how_dough_stretches_springs_back_and_behaves_in_yo'),
    category: 'Dough Science',
    difficulty: 'Intermediate',
    tags: ['extensibility', 'elasticity', 'rheology', 'shaping'],

    intro: "Extensibility and elasticity describe how dough stretches and springs back. The right balance defines whether shaping is easy or frustrating, and whether pizzas bake thin and even or thick and stressed.",
    history: "Bakers have always judged dough by feel, but research into rheology provided language and tools to quantify 'stretchiness' and 'spring-back'. DoughLabPro uses these concepts to link Learn explanations to real handling decisions.",

    technicalFoundations: [
        "Elasticity is the tendency of dough to return to its original shape after being stretched. It is related to gluten alignment, strength and cross-linking.",
        "Extensibility is the ability of dough to stretch without tearing. It depends on gluten structure, hydration, fermentation and the presence of fat and other components.",
        "Flour strength, mixing intensity, rest times, fermentation progress and additives (fat, sugar, oxidisers, reducing agents) all influence the elasticity/extensibility balance.",
        "Cold dough tends to feel stiffer and more elastic; warmer dough is usually more extensible until structure starts to weaken."
    ],

    doughImpact: [
        "Dough that is too elastic and not extensible enough will shrink back aggressively when shaped and may resist opening into pizza bases.",
        "Dough that is very extensible but lacks elasticity can over-stretch, thin excessively or tear when loaded with toppings.",
        "Rest periods (bench rest, intermediate proof) allow elasticity to relax and extensibility to increase without needing more mixing.",
        "Fermentation gradually increases extensibility; overfermented dough may become overly slack and fragile."
    ],

    bakingImpact: [
        "Balanced extensibility and elasticity produce pizzas that open easily, hold toppings and bake evenly.",
        "Overly elastic doughs may bake with tight, dense cornicione and uneven thickness.",
        "Overly extensible, weak doughs can produce thin spots, blowouts and irregular shapes that burn or tear."
    ],

    practicalRanges: [
        {
            label: t('learn.neapolitanstyle_pizza'),
            notes: "High extensibility, moderate elasticity. Dough stretches easily by hand while retaining edge strength."
        },
        {
            label: "Roman thin / cracker-style",
            notes: "Moderate extensibility, higher elasticity. More snap and resistance; tolerates rolling."
        },
        {
            label: t('learn.highhydration_pan_styles'),
            notes: "Very extensible, moderate elasticity. Must stretch gently without tearing during panning."
        }
    ],

    practicalApplications: [
        "Show a qualitative indicator (e.g. 'target: highly extensible') tied to hydration and flour strength.",
        "Include recommendations for rest times in step-by-step modes.",
        "Each style profile should explicitly state the desired extensibility/elasticity balance.",
        "Suggest typical rest times between dividing, balling and stretching.",
        "Record subjective impressions of stretch and spring-back in MyLab.",
        "Map complaints like 'dough keeps shrinking' or 'dough rips' to likely causes in Dough Diagnostic.",
        "Suggest changes such as longer rest, higher hydration, or reduced mixing intensity."
    ],

    proTips: [
        "If dough keeps shrinking when you shape it, stop fighting: let it rest covered for 10–20 minutes and try again.",
        "Log how dough feels at different stages; over time you will build a personal map of extensibility vs elasticity for your flours and processes."
    ],

    criticalPoints: [
        "Trying to fix an overly elastic dough only at shaping time is usually too late; mixing, hydration and rest must be addressed earlier.",
        "Excessive manipulation or rolling with lots of flour can damage gas cells and undermine the texture you have developed."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Modernist Bread - Nathan Myhrvold et al. (2017)",
        "Advanced Bread and Pastry - Michel Suas (2008)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_9'),
        whatItDoes: t('learn.improves_texture_and_flavor_3'),
        howToUse: t('learn.so_you_get_the_best_results_5'),
        dangerSigns: t('learn.use_it_wisely_5')
    },
};