import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const smokedAromaticsData: LearnArticleData = {
    id: 'smoked-aromatics',
    title: 'Smoked Aromatics: Phenols & Flavor Saturation',
    subtitle: 'The chemistry of smoke and how to use it without overwhelming the palate.',
    category: 'Ingredient Science',
    difficulty: 'Advanced',
    tags: ['smoke', 'flavor', 'aromatics', 'phenols'],

    intro: "Smoke flavor comes primarily from phenolic compounds (guaiacol, syringol) and carbonyls produced during the incomplete combustion of wood. These compounds are extremely potent. Humans can detect them in parts per billion. They bind strongly to fat and proteins.",

    history: t('learn.historical_context_coming_soon'),

    technicalFoundations: [
        "The Saturation Problem: Because smoke compounds are so volatile and potent, they quickly saturate the olfactory receptors (nose blindness).",
        "If a pizza has smoked cheese, smoked meat, and a wood-fired crust, the brain stops registering 'smoke' and starts registering 'acrid' or 'bitter.' The nuance is lost."
    ],

    doughImpact: [],

    bakingImpact: [],

    practicalRanges: [],

    practicalApplications: [
        "Use smoke as an accent, not a base.",
        "Smoked Salt: A finishing touch that adds pops of smoke.",
        "Smoked Oil: Allows precise dosing.",
        "Cold Smoking: Smoking ingredients (like mozzarella) at low temps preserves their texture while adding flavor."
    ],

    proTips: [
        "Liquid Smoke is not the enemy. High-quality liquid smoke is just condensed smoke vapor. It allows for precise, chemical-free addition of smoke flavor to sauces or oils without the hassle of a smoker."
    ],

    criticalPoints: [
        "Wood Selection Matters. Hardwoods (Oak, Hickory) produce strong, savory smoke. Fruitwoods (Apple, Cherry) produce sweeter, milder smoke. Using a heavy wood like Mesquite on a delicate pizza can taste like gasoline."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Modernist Cuisine - Nathan Myhrvold (2011)",
        "Franklin Barbecue: A Meat-Smoking Manifesto - Aaron Franklin (2015)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_17'),
        whatItDoes: t('learn.improves_texture_and_flavor_11'),
        howToUse: t('learn.so_you_get_the_best_results_13'),
        dangerSigns: t('learn.use_it_wisely_13')
    },
};
