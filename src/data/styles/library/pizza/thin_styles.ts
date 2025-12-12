import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';
import { useTranslation } from '@/i18n';

export const ChicagoTavern: DoughStyleDefinition = {
    id: "chicago_tavern_v2",
    name: t('styles.chicago_tavern_style'),
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    family: t('styles.flatbreads__pizzas_4'),
    description: "The TRUE Chicago pizza (what locals actually eat). Ultra-thin, cracker-like crust, square-cut (party cut), and loaded with toppings under the cheese. The dough is rolled flat and cured to ensure zero rise.",
    origin: {
        country: t('styles.usa_8'),
        region: "Chicago / Midwest",
        period: "1940s"
    },
    history: "Developed in post-Prohibition taverns as a salty, cracker-like snack to encourage drinking. The 'party cut' allowed patrons to hold a square in one hand and a beer in the other.",
    difficulty: t('styles.medium_22'),
    fermentationType: "cold",
    technicalProfile: {
        hydration: [45, 50],
        salt: [1.5, 2.0],
        oil: [0, 5.0], // Often corn oil or shortening
        sugar: [1.0, 2.0],
        flourStrength: "All Purpose or High Gluten (Variable)",
        ovenTemp: [260, 290],
        recommendedUse: [t('styles.sausage__giardiniera'), t('styles.pepperoni_3')],
        difficulty: t('styles.medium_23'),
        fermentationSteps: [
            "Mix to stiff dough. [Science: Low hydration prevents gluten mobility, ensuring potential for crispness.]",
            "Sheet/Roll flat immediately or after short rest. [Science: Mechanical degassing is key; no alveoli allowed.]",
            "Cure in fridge (24-48h). [Science: This is a 'relieving' phase where hydration equalizes and starch degrades, but no yeast rise is desired.]",
            "Dock heavily and bake. [Science: Docking prevents steam pockets from separating cheese from crust.]"
        ]
    },
    tags: ["pizza", "american", "midwest", "thin-crust", "party-cut", "cracker"],
    pairings: {
        canonical: [t('styles.fennel_sausage'), t('styles.giardiniera'), t('styles.mozzarella_2')],
        modern: [t('styles.italian_beef')],
        regional: [t('styles.old_style_beer')]
    },
    watchouts: [
        "Bubble formation: If not docked enough, it will bubble and burn.",
        "Soggy center: Sauce must be thick; vegetables should be precooked or sliced thin.",
        "Toughness: If hydration is too low without enough fat, it becomes hard hardtack instead of crisp."
    ],
    notes: [
        "Use a rolling pin or pasta sheeter.",
        "The 'Party Cut' is non-negotiable.",
        "Curing the rolled skins in the fridge uncovered can help dry them out."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [
        { source: t('styles.pizza_city_usa'), author: t('styles.steve_dolinsky') }
    ],
    images: {
        hero: "/images/styles/chicago_hero.jpg",
        dough: "/images/styles/chicago_dough.jpg",
        crumb: "/images/styles/chicago_crumb.jpg"
    }
};

export const thinStyles: DoughStyleDefinition[] = [
    ChicagoTavern
];
