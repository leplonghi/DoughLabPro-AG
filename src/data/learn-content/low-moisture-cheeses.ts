import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const lowMoistureCheesesData: LearnArticleData = {
    id: 'low-moisture-cheeses',
    title: 'Low-Moisture Cheeses: The Science of Melt & Stretch',
    subtitle: 'Why "Low-Moisture Whole Milk" (LMWM) mozzarella is the gold standard for NY and American pizza styles.',
    category: 'Ingredient Science',
    difficulty: 'Beginner',
    tags: ['cheese', 'mozzarella', 'melting', 'browning'],

    intro: "While fresh mozzarella is the king of Naples, low-moisture mozzarella is an American invention born of necessity. Italian immigrants in the early 20th century needed a cheese with a longer shelf life that could be transported across the vast distances of the United States.",

    history: "By lowering the moisture content and slightly aging the curd, cheesemakers created a product that was more durable, melted more evenly in the slower gas ovens of New York, and had a distinctively tangy, salty flavor profile. This 'pizza cheese' became the backbone of the American pizza industry.",

    technicalFoundations: [
        "Moisture Content: Fresh Mozzarella (~50–60%) vs Low-Moisture (~45–52%).",
        "Protein Matrix: Casein alignment determines stretch.",
        "Maillard Reaction: Low-moisture cheese browns faster as surface dries quicker.",
        "Oil-Off: Fat emulsion breaks during melting; excessive oil comes from over-fermentation or high fat."
    ],

    doughImpact: [
        "High Moisture Cheese: Releases water ('souping'), ideal for fast, high-heat bakes.",
        "Low Moisture Cheese: Melts slowly, ideal for longer bakes (NY Style, Pan Pizza)."
    ],

    bakingImpact: [
        "Low-moisture cheese allows for golden brown spots (Maillard reaction).",
        "Prevents soggy crust in longer bake times."
    ],

    practicalRanges: [],

    practicalApplications: [
        "Use Low-Moisture Whole Milk (LMWM) for NY Style and Detroit Deep Dish.",
        "Use Fresh Mozzarella for Neapolitan style.",
        "Shred your own block to avoid anti-caking agents."
    ],

    proTips: [
        "Shred your own block. Pre-shredded cheese is coated in anti-caking agents (cellulose, potato starch) which inhibit proper melting and can burn."
    ],

    criticalPoints: [
        "The Freezing Trap. Freezing mozzarella ruptures the fat globules. When thawed and baked, previously frozen cheese almost always separates, releasing massive amounts of oil and becoming rubbery."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "Cheese and Microbes - Catherine W. Donnelly (2014)",
        "American Chemical Society - Pizza Cheese Science"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_12'),
        whatItDoes: t('learn.improves_texture_and_flavor_6'),
        howToUse: t('learn.so_you_get_the_best_results_8'),
        dangerSigns: t('learn.use_it_wisely_8')
    }
};