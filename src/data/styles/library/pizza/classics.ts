import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';
import { useTranslation } from '@/i18n';

export const NewYorkSlice: DoughStyleDefinition = {
    id: "new_york_slice_v2",
    name: t('styles.new_york_slice'),
    category: "pizza",
    recipeStyle: RecipeStyle.NEW_YORK,
    family: t('styles.flatbreads__pizzas'),
    description: "The quintessential American street pizza. Large, wide, foldable slices with a crispy bottom, tender chew, and slight drooping tip. Characterized by the use of oil and sugar/malt for browning at lower deck oven temperatures.",
    origin: {
        country: t('styles.usa_5'),
        region: t('styles.new_york_city_2'),
        period: "Early 1900s (Lombardi's)"
    },
    history: " evolved from the Neapolitan pizza brought by Italian immigrants. Coal ovens turned into gas deck ovens, and the dough adapted with oil and sugar to retain moisture and brown at lower temperatures (500-550°F) for longer bakes.",
    difficulty: t('styles.medium_18'),
    fermentationType: "cold",
    technicalProfile: {
        hydration: [58, 65],
        salt: [2.0, 2.5],
        oil: [2.0, 3.0],
        sugar: [1.0, 2.0],
        flourStrength: "High Gluten (13-14%)",
        ovenTemp: [260, 300], // 500-575F
        recommendedUse: [t('styles.cheese_slice'), t('styles.pepperoni'), t('styles.white_pie')],
        difficulty: t('styles.medium_19'),
        fermentationSteps: [
            "Mix to full gluten development. [Science: Strong gluten network required to support the large surface area during stretching and baking.]",
            "Ball and cold ferment (24-72h). [Science: Cold environment slows yeast but allows protease enzymes to relax gluten for extensibility and amylase to generate sugars for browning.]",
            "Bring to room temp (2h) and stretch using knuckles/tossing. [Science: Warming up restores dough elasticity slightly, preventing tears.]"
        ]
    },
    tags: ["pizza", "american", "commercial", "foldable", "street-food"],
    pairings: {
        canonical: [t('styles.lowmoisture_mozzarella'), t('styles.oregano'), t('styles.pepperoni_2')],
        modern: [t('styles.vodka_sauce'), t('styles.hot_honey')],
        regional: []
    },
    watchouts: [
        "Overheating the mixer: High gluten flour generates friction. Use ice water.",
        "Gummy layer: Sauce too watery or baked too fast.",
        "Pale crust: Lack of sugar/malt in a home oven environment."
    ],
    notes: [
        "Sugar or Diastatic Malt is essential for browning below 300°C.",
        "Oil (usually olive or soy blend) allows the slice to fold without cracking.",
        "The 'screen' method is often used initially to set the crust before finishing on the deck."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [
        { source: t('styles.the_pizza_bible'), author: t('styles.tony_gemignani') },
        { source: t('styles.pmq_pizza_magazine') }
    ],
    images: {
        hero: "/images/styles/ny_hero.jpg",
        dough: "/images/styles/ny_dough.jpg",
        crumb: "/images/styles/ny_crumb.jpg"
    }
};

// Export as array for registry consumption
export const classicStyles: DoughStyleDefinition[] = [
    NewYorkSlice
];
