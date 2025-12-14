import { defineDoughStyle } from '../../builder';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const BaguetteTradition = defineDoughStyle({
    name: t('styles.baguette_de_tradition'),
    category: "bread",
    description: "The iconic symbol of French baking. 'Tradition' status is strictly protected by the 1993 Décret Pain (Balladur Decree), allowing only flour, water, salt, and yeast/starter. Characterized by a crisp, golden crust and a cream-colored, open crumb.",
    origin: {
        country: t('styles.france_5'),
        region: t('styles.national_2'),
        period: "1993 (Decree)"
    },
    isCanonical: true,
    technicalProfile: {
        hydration: [65, 75],
        salt: [1.8, 2.0],
        fermentation: {
            bulk: "3-4h (w/ folds) or Cold Retard",
            proof: "1-2h @ 24°C"
        },
        ovenTemp: [240, 260],
        ovenRecommendations: "Deck Oven (Steam Essential)",
        difficulty: t('styles.hard_15')
    },
    notes: [
        "Steam injection is critical for the crust and expansion (grigne).",
        "Handling must be gentle to preserve gas ('makeup' stage).",
        "Scoring (lame) requires a 45° angle for proper 'ears'."
    ],
    tags: ["bread", "french", "lean", "classic", "steam"],
    references: [
        { source: t('styles.décret_n931074'), url: "https://www.legifrance.gouv.fr/" },
        { source: "The Taste of Bread (Calvel)", url: "" }
    ]
});

export const Ciabatta = defineDoughStyle({
    name: t('styles.ciabatta'),
    category: "bread",
    description: "Meaning 'slipper' in Italian, this high-hydration bread was invented in 1982 by Arnaldo Cavallari to combat the popularity of the French baguette. Known for its very open, irregular large holes and a floury, crisp crust.",
    origin: {
        country: t('styles.italy_6'),
        region: "Veneto / Adria",
        period: "1982"
    },
    technicalProfile: {
        hydration: [75, 85], // Very high hydration
        salt: [2.0, 2.2],
        sugar: [0, 0],
        fat: [1.0, 3.0], // Olive oil often added
        fermentation: {
            bulk: "Biga (18h) + 2h Bulk",
            proof: "45-60 min @ 24°C"
        },
        ovenTemp: [230, 250],
        ovenRecommendations: t('styles.deck_or_home_oven'),
        difficulty: t('styles.expert_13') // Handling 80% hydration is hard
    },
    notes: [
        "Typically uses a Biga (stiff pre-ferment) for strength and flavor.",
        "Dough structure is built via coil folds; almost no mechanical kneading.",
        "Shape is rustic and flat; strictly handle with wet hands or plenty of flour."
    ],
    tags: ["bread", "italian", "high-hydration", "biga"],
    references: [
        { source: t('styles.arnaldo_cavallari__molini_adriesi'), url: "https://en.wikipedia.org/wiki/Ciabatta" }
    ]
});

export const PainDeCampagne = defineDoughStyle({
    name: t('styles.pain_de_campagne'),
    category: "bread",
    description: "French 'Country Bread'. A large, rustic loaf typically incorporating a portion of Whole Wheat (10-20%) or Rye flour for depth, often leavened with a combination of sourdough (levain) and commercial yeast.",
    origin: {
        country: t('styles.france_6'),
        region: t('styles.rural'),
        period: t('styles.traditional_13')
    },
    technicalProfile: {
        hydration: [68, 72],
        salt: [1.8, 2.0],
        fermentation: {
            bulk: "3-5h @ Ambient",
            proof: "12-16h @ 4°C (Retard)"
        },
        ovenTemp: [230, 250],
        ovenRecommendations: t('styles.dutch_oven_or_deck'),
        difficulty: t('styles.medium_16')
    },
    notes: [
        "Adding 5-10% Rye flour improves enzymatic activity and shelf life.",
        "Long cold fermentation drastically improves crust blistering and flavor complexity."
    ],
    tags: ["bread", "french", "sourdough", "rustic", "whole-wheat"]
});

export const SanFranciscoSourdough = defineDoughStyle({
    name: t('styles.san_francisco_sourdough'),
    category: "bread",
    description: "Famous for its distinctively sour tang, attributed to the local Lactobacillus sanfranciscensis bacteria (though found worldwide). High acidity, thick blistered crust, and chewy crumb.",
    origin: {
        country: t('styles.usa_2'),
        region: t('styles.san_francisco_2'),
        period: "Gold Rush Era (1849)"
    },
    technicalProfile: {
        hydration: [70, 80],
        salt: [2.0, 2.4],
        fermentation: {
            bulk: "4-6h @ 26°C",
            proof: "12-24h @ 4°C (Crucial for sourness)"
        },
        ovenTemp: [230, 260],
        ovenRecommendations: t('styles.dutch_oven'),
        difficulty: t('styles.hard_16')
    },
    notes: [
        "To increase sourness, use a stiff starter and longer cold proof.",
        "To decrease sourness, use a liquid levain and feed it often.",
        "Scoring 'ears' requires tight shaping tension."
    ],
    tags: ["bread", "sourdough", "american", "iconic"],
    references: [
        { source: t('styles.boudin_bakery_history'), url: "https://boudinbakery.com/" }
    ]
});