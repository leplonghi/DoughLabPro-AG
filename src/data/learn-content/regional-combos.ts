import { LearnArticleData } from '@/types/learn';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const regionalCombosData: LearnArticleData = {
    id: 'regional-combos',
    title: 'Regional Flavor Profiles: The Science of Tradition',
    subtitle: 'Why certain ingredient combinations have survived for centuries: a chemical analysis of balance.',
    category: 'Ingredient Science',
    difficulty: 'Intermediate',
    tags: ['flavor', 'regional', 'ingredients', 'balance'],

    intro: "Before global trade, pizza toppings were dictated by local agriculture and climate. In Naples, the volcanic soil of Mount Vesuvius produced the intense San Marzano tomato, while the marshlands were home to water buffalo for mozzarella.",

    history: "In contrast, Northern Italian styles relied more on lard and hard cheeses due to the cooler climate, while Sicilian pizza incorporated Arab influences like onions and breadcrumbs. Today, we can access ingredients from anywhere, but understanding these historical constraints helps us appreciate why specific flavor combinations—like the classic Margherita—became timeless standards rather than passing trends.",

    technicalFoundations: [
        "Campania (Neapolitan): The Acid/Fat Balance. The classic Margherita is a masterclass in pH balancing. San Marzano Tomatoes: High acidity (pH ~4.2) and sweetness. Buffalo Mozzarella: High fat (~24%) and rich mouthfeel. Basil: Volatile aromatic oils (eugenol).",
        "New York: The Umami/Oregano Punch. NY Style is defined by intensity. Low-Moisture Mozzarella: Dense protein/fat matrix. Sauce: Often cooked or heavily seasoned with garlic and dried oregano. Dried Oregano: Contains carvacrol, a potent phenolic compound.",
        "Sicily (Sfincione): The Sweet/Salty Contrast. Sicilian pizza often features onions, anchovies, and breadcrumbs. Caramelized Onions: High sugar content. Anchovies/Caciocavallo: Intense salt and glutamate (umami)."
    ],

    doughImpact: [
        "Acidity cuts through fat, cleansing the palate.",
        "Fat coats the tongue to mitigate acid burn.",
        "Aromatic oils provide top notes that lift heavy bases.",
        "High amplitude flavor profiles oscillate between sweet and salty signals."
    ],

    bakingImpact: [],

    practicalRanges: [],

    practicalApplications: [
        "Respect the 'Terroir'. Ingredients from the same region often share chemical affinities.",
        "Pairing a delicate Buffalo Mozzarella with a heavy, garlic-laden NY sauce often fails.",
        "Neapolitan is balanced (1:1:1 ratio).",
        "American styles are often top-heavy."
    ],

    proTips: [
        "Respect the 'Terroir'. Ingredients from the same region often share chemical affinities.",
        "Pairing a delicate Buffalo Mozzarella with a heavy, garlic-laden NY sauce often fails because the sauce overwhelms the subtle lactic tang of the cheese."
    ],

    criticalPoints: [
        "Ingredient Weight. Regional styles are also defined by the ratio of topping weight to dough weight. Neapolitan is balanced (1:1:1). American styles are often top-heavy. If you put NY quantities on a Neapolitan dough, it will collapse and fail to bake."
    ],

    regionalVariants: [],
    climateScenarios: [],
    styleComparisons: [],
    parameterSensitivity: [],
    variantsAndImplications: [],

    references: [
        "The Flavor Bible - Karen Page & Andrew Dornenburg (2008)",
        "Gastrophysics: The New Science of Eating - Charles Spence (2017)",
        "Pizza: A Global History - Carol Helstosky (2008)",
        "Essentials of Classic Italian Cooking - Marcella Hazan (1992)",
        "American Pie: My Search for the Perfect Pizza - Peter Reinhart (2003)",
        "Where to Eat Pizza - Daniel Young (2016)"
    ],

    images: [],
    diagrams: [],
    faq: [],

    grandmaVersion: {
        intro: t('learn.imagine_this_like_a_secret_ingredient_it_helps_mak_16'),
        whatItDoes: t('learn.improves_texture_and_flavor_10'),
        howToUse: t('learn.so_you_get_the_best_results_12'),
        dangerSigns: t('learn.use_it_wisely_12')
    }
};