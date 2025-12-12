import { LearnArticleData } from '@/types/learn';
import { useTranslation } from '@/i18n';

export const smokedCheesesData: LearnArticleData = {
    id: 'smoked-cheeses',
    title: 'Smoked Cheeses: Surface Area & Melting Point',
    subtitle: 'Provola, Scamorza, and Gouda: How smoking alters the melting behavior.',
    category: 'Ingredient Science',
    difficulty: 'Intermediate',
    tags: ['cheese', 'smoke', 'melting', 'flavor'],

    intro: "Smoking creates a 'rind' or skin on the cheese due to dehydration and the deposition of tars/resins from the smoke. This rind has a higher melting point than the interior paste. When baked, smoked cheese often holds its shape better (cubes stay cubes) rather than flowing into a puddle.",

    history: t('learn.historical_context_coming_soon_2'),

    technicalFoundations: [
        "The Rind Effect: Smoking creates a 'rind' or skin on the cheese due to dehydration and the deposition of tars/resins from the smoke.",
        "Scamorza vs. Provola: Provola Affumicata is usually a fresh mozzarella that is briefly smoked. Scamorza is aged longer, lower moisture, firmer texture.",
        "Flavor Intensity vs. Quantity: Because smoked cheese is intense, it is often cut with regular mozzarella (50/50 blend) to provide the melt and stretch without overpowering the pizza with smoke flavor."
    ],

    doughImpact: [],

    bakingImpact: [
        "Smoked cheese often holds its shape better (cubes stay cubes) rather than flowing into a puddle."
    ],

    practicalRanges: [],

    practicalApplications: [
        "Neapolitan pizza often uses Provola for a 'wet' melt.",
        "Roman styles might use Scamorza for texture.",
        "Cut smoked cheese with regular mozzarella (50/50 blend) to balance flavor."
    ],

    proTips: [
        "Julienne vs. Cubes. For smoked cheese, a fine julienne (matchsticks) encourages better melting by breaking the 'rind' structure. Cubes will often remain distinct and chewy."
    ],

    criticalPoints: [
        "Acidity Clash. Smoked cheese is acidic. Tomato sauce is acidic. Sourdough is acidic. If you combine all three, the pizza can taste sour. Balance smoked cheese with sweet elements (caramelized onions, cream, sweet vegetables)."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "The Oxford Companion to Cheese - Catherine Donnelly (2016)",
        "Serious Eats: Cheese Guide"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_18'),
        whatItDoes: t('learn.improves_texture_and_flavor_12'),
        howToUse: t('learn.so_you_get_the_best_results_14'),
        dangerSigns: t('learn.use_it_wisely_14')
    },
};
