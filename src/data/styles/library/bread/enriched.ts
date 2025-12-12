import { defineDoughStyle } from '../../builder';
import { useTranslation } from '@/i18n';

export const BriocheATete = defineDoughStyle({
    name: t('styles.brioche_à_tête'),
    category: "enriched_bread",
    description: "The quintessential French enriched bread, containing a massive amount of butter (often 50%+) and eggs. The 'à Tête' shape features a small top bun (the head) nestled in a fluted round base.",
    origin: {
        country: t('styles.france_4'),
        region: t('styles.normandy'),
        period: "1404 (First recorded)"
    },
    technicalProfile: {
        hydration: [20, 30], // Liquid comes from EGGS, not water
        salt: [2.0, 2.5],
        fat: [40, 60], // Butter!
        sugar: [10, 15],
        fermentationSteps: [
            "Intensive Mix (Windowpane)",
            "Bulk 1h",
            "Cold Retard 12h (Crucial for shaping)",
            "Proof 2-3h"
        ],
        ovenTemp: [180, 200],
        difficulty: t('styles.hard_14'),
    },
    fermentationType: "direct",
    notes: [
        "Ingredients must be COLD to prevent butter from melting during mixing.",
        "Add butter only after gluten is fully developed.",
        "Must be chilled thoroughly before shaping."
    ],
    watchouts: [
        "Breaking the emulsion (greasy dough) if mixing gets too hot (>24°C).",
        "Under-proofing results in a dense, heavy crumb."
    ],
    tags: ["bread", "french", "enriched", "butter", "dessert"],
    images: {
        hero: "/images/styles/brioche-hero.png",
        dough: "/images/styles/brioche_dough.jpg",
        crumb: "/images/styles/brioche_crumb.jpg"
    },
    references: [
        { source: t('styles.the_art_of_french_baking'), url: "" }
    ],
    education: {
        pro_tips: [
            { tip: t('styles.cold_ingredients'), explanation: "Everything must be cold. If butter melts during mixing, the dough becomes greasy and won't rise properly." },
            { tip: t('styles.windowpane_first'), explanation: "Develop the gluten fully with eggs/flour BEFORE adding butter. Fat coats protein, stopping development." }
        ],
        what_if: [
            { scenario: t('styles.dough_is_an_oily_soup'), result: "Emulsion broke (got too hot).", correction: "Chill bowl immediately. If that fails, it's a loss." }
        ],
        comparative_analysis: [
            { target_style: t('styles.challah'), difference: "Brioche is dairy-rich (Butter/Milk). Challah is pareve (Oil/Water).", why_choose_this: t('styles.choose_brioche_for_decadence') }
        ],
        q_and_a: [
            { question: "Why the 'Top Knot'?", answer: "Tradition. It prevents the center from rising too high and provides a textural contrast.", context: t('styles.french_history') }
        ],
        fermentation_methods: [
            { method: t('styles.direct'), suitability: t('styles.ideal'), notes: "Often uses a sponge/poolish to help yeast start in the fat-heavy environment." }
        ]
    }
});

export const Challah = defineDoughStyle({
    name: "Challah (Braided)",
    category: "enriched_bread",
    description: "Ashkenazi Jewish ceremonial bread, traditionally braided (3, 4, or 6 strands). Enriched with oil and eggs but dairy-free (Pareve) to be eaten with meat meals.",
    origin: {
        country: t('styles.jewish_diaspora'),
        region: t('styles.eastern_europe'),
        period: t('styles.traditional_12')
    },
    technicalProfile: {
        hydration: [35, 45], // Low water, mostly eggs/oil
        salt: [1.8, 2.0],
        fat: [8, 12], // Vegetable Oil
        sugar: [8, 12], // Honey or Sugar
        fermentationSteps: [
            t('common.mix_to_medium_development'),
            "Bulk 2h",
            "Shape/Braid",
            "Proof 1.5-2h"
        ],
        ovenTemp: [175, 190],
        difficulty: t('styles.medium_14'),
    },
    fermentationType: "direct",
    notes: [
        "Use neutral oil (canola/grapeseed) for a Pareve loaf.",
        "Double egg wash (once before proof, once before bake) for profound shine.",
        "Braiding dictates the final shape and structure."
    ],
    tags: ["bread", "jewish", "braided", "dairy-free", "ceremonial"],
    images: {
        hero: "/images/styles/challah-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_crumb.jpg"
    },
    education: {
        pro_tips: [
            { tip: t('styles.double_egg_wash'), explanation: "Brush once after braiding, and again right before baking. This fills the gaps and creates a lacquer-like shine." },
            { tip: t('styles.the_3strand_rule'), explanation: t('styles.start_braiding_from_the_middle_not_the_end_it_keep') }
        ],
        what_if: [
            { scenario: t('styles.braid_tears_during_proof'), result: t('styles.braided_too_tightly'), correction: t('styles.braid_loosely_the_oven_spring_will_fill_the_gaps') }
        ],
        comparative_analysis: [
            { target_style: t('styles.brioche'), difference: "Challah uses oil (Pareve). Brioche uses butter (Dairy).", why_choose_this: "Choose Challah for meat meals (Kosher rules)." }
        ],
        q_and_a: [
            { question: "Why 'Pareve'?", answer: "To comply with Kosher laws forbidding mixing dairy and meat. Challah is the Sabbath bread for meat dinners.", context: t('styles.jewish_tradition') }
        ],
        fermentation_methods: [
            { method: t('styles.direct_2'), suitability: t('styles.authentic'), notes: "Standard direct dough. Sourdough versions (Water Challah) exist but are niche." }
        ]
    }
});

export const BurgerBun = defineDoughStyle({
    name: t('styles.classic_burger_bun'),
    category: "burger_bun",
    description: "Soft, slightly sweet, and sturdy enough to hold a juicy patty without disintegrating. Often basically a lean brioche or potato bun.",
    origin: {
        country: t('styles.usa'),
        region: t('styles.general'),
        period: "20th Century"
    },
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.2],
        fat: [5, 10], // Butter or Shortening
        sugar: [5, 8],
        fermentationSteps: [
            t('common.mix_to_full_development'),
            "Bulk 1h",
            "Divide & Ball 80-100g",
            "Proof 1h (Flattened)"
        ],
        ovenTemp: [190, 210],
        difficulty: t('styles.easy_3'),
    },
    fermentationType: "direct",
    notes: [
        "Flatten the balls gently before proofing for a wider surface area.",
        "Use a Tangzhong (water roux) for extended softness.",
        "Sesame seeds are traditional but optional."
    ],
    tags: ["bread", "american", "soft", "sandwich"],
    images: {
        hero: "/images/styles/burger-bun-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_crumb.jpg"
    },
    education: {
        pro_tips: [
            { tip: t('styles.flatten_the_ball'), explanation: "Don't just round them. Flattening gently before proofing ensures a wide bun for the patty, rather than a tennis ball." },
            { tip: t('styles.steam_is_the_enemy'), explanation: t('styles.do_not_use_steam_you_want_a_soft_thin_skin_not_a_c') }
        ],
        what_if: [
            { scenario: t('styles.bun_splits_horizontally'), result: t('styles.underproofed'), correction: t('styles.let_it_proof_until_it_jiggles_like_jelly') }
        ],
        comparative_analysis: [
            { target_style: t('styles.potato_bun'), difference: t('styles.potato_starch_holds_more_water_staying_soft_longer'), why_choose_this: t('styles.choose_classic_for_structure') }
        ],
        q_and_a: [
            { question: t('styles.why_80g'), answer: t('styles.the_golden_ratio_8090g_bun_matches_a_standard_46oz'), context: t('styles.burger_science') }
        ],
        fermentation_methods: [
            { method: t('styles.direct_3'), suitability: t('styles.ideal_2'), notes: t('styles.fast_and_consistent_sometimes_uses_tangzhong_for_s') }
        ]
    }
});

export const Shokupan = defineDoughStyle({
    name: "Shokupan (Japanese Milk Bread)",
    category: "enriched_bread",
    description: "Ultra-fluffy, white Japanese sandwich bread. The secret is the 'Tangzhong' or 'Yudane' method (gelatinized flour paste), which locks in moisture for days.",
    origin: {
        country: t('styles.japan_3'),
        region: t('styles.national'),
        period: "20th Century"
    },
    technicalProfile: {
        hydration: [70, 75], // High, but bound by starch
        salt: [1.8, 2.0],
        fat: [6, 10], // Butter + Milk Powder
        sugar: [6, 10],
        fermentationSteps: [
            "Prepare Tangzhong (Cook flour+water)",
            t('common.mix_all'),
            "Bulk 1.5h",
            "Shape (3-4 lobes)",
            t('common.proof_in_pullman_pan')
        ],
        ovenTemp: [180, 190],
        difficulty: t('styles.medium_15'),
    },
    fermentationType: "direct",
    notes: [
        "Tangzhong: Cook 5% of flour with 5x water to 65°C.",
        "Shaping involves rolling up logs and placing them side-by-side in the tin.",
        "Produces 'cotton-like' shreddable crumb."
    ],
    tags: ["bread", "japanese", "tangzhong", "soft", "sandwich"],
    images: {
        hero: "/images/styles/shokupan-hero.png",
        dough: "/images/styles/shokupan-dough.jpg",
        crumb: "/images/styles/shokupan-crumb.jpg"
    },
    education: {
        pro_tips: [
            { tip: t('styles.the_65c_magic'), explanation: "Cook the flour/water roux (Tangzhong) exactly to 65°C. This maximizes starch gelatinization without degrading the starch." },
            { tip: t('styles.lid_on_vs_off'), explanation: "Lid ON = Square (Pullman/Sandwich). Lid OFF = Mountain (Rustic top)." }
        ],
        what_if: [
            { scenario: "Dough didn't rise", result: t('styles.tangzhong_was_too_hot_when_added'), correction: t('styles.cool_tangzhong_to_room_temp_before_adding_yeast') }
        ],
        comparative_analysis: [
            { target_style: t('styles.western_sandwich_bread'), difference: "Shokupan uses cooked flour (Tangzhong) for superior moisture retention.", why_choose_this: t('styles.choose_shokupan_for_the_softest_possible_texture') }
        ],
        q_and_a: [
            { question: t('styles.yudane_vs_tangzhong'), answer: "Yudane uses boiling water (no cooking). Tangzhong uses 65°C cooking. Both achieve gelatinization.", context: t('styles.asian_baking') }
        ],
        fermentation_methods: [
            { method: t('styles.direct_4'), suitability: t('styles.authentic_2'), notes: t('styles.base_is_direct_but_modified_by_the_scalded_flour_p') }
        ]
    }
});

export const Panettone = defineDoughStyle({
    name: t('styles.panettone_artigianale'),
    category: "enriched_bread",
    description: "The Mount Everest of baking. A sweet Italian bread loaded with candied fruit/raisins, leavened EXCLUSIVELY by a stiff sourdough starter (Pasta Madre). Extremely complex, multistage fermentation.",
    origin: {
        country: t('styles.italy_5'),
        region: t('styles.milan'),
        period: t('styles.renaissance')
    },
    technicalProfile: {
        hydration: [55, 65], // Complex calculation including yolks
        salt: [0.5, 0.8], // Low salt
        fat: [30, 45], // Massive butter load
        sugar: [20, 30],
        fermentationSteps: [
            "Refresh Pasta Madre (3x daily)",
            "First Dough (Primo Impasto) 12h",
            "Second Dough (Secondo Impasto)",
            "Proof 6-8h",
            t('common.hang_upside_down')
        ],
        ovenTemp: [160, 175],
        difficulty: t('styles.expert_12'), // The hardest style here
    },
    fermentationType: "levain", // Use 'levain' instead of 'sourdough' based on type def
    notes: [
        "Requires 'Pasta Madre' maintained in water or bound in cloth.",
        "Temperature control (26-28°C) is critical. Must use strict pH management.",
        "Must be hung upside down immediately after baking to prevent collapse."
    ],
    watchouts: [
        "Acidity too high degrades gluten structure.",
        "Temperature drop collapses the dome.",
        "Mixing too hot separates the butter."
    ],
    tags: ["bread", "italian", "christmas", "sourdough", "sweet"],
    images: {
        hero: "/images/styles/panettone-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_crumb.jpg"
    },
    references: [
        { source: "Panettone Disciplinare (Italy)", url: "" }
    ],
    education: {
        pro_tips: [
            { tip: t('styles.the_hang'), explanation: "Gravity is the enemy. You MUST hang Panettone upside down for 12h immediately after baking, or it collapses under its own butter weight." },
            { tip: t('styles.tripling_rule'), explanation: "The First Dough (Primo Impasto) MUST triple in volume. If it doesn't, do not proceed to Second Dough. Wait." }
        ],
        what_if: [
            { scenario: t('styles.taste_is_sour'), result: t('styles.starter_was_too_acetic'), correction: "Wash the starter (Bagnetto) in sugar water to remove acidity before building." }
        ],
        comparative_analysis: [
            { target_style: t('styles.pandoro'), difference: "Pandoro contains no fruit and is shaped like a star. Panettone has fruit and is domed.", why_choose_this: "Choose Panettone for the fruit/spice complexity." }
        ],
        q_and_a: [
            { question: t('styles.commercial_yeast'), answer: "Forbidden. True Panettone uses ONLY 'Pasta Madre' (stiff sourdough) for leavening and preservation.", context: t('styles.italian_law') }
        ],
        fermentation_methods: [
            { method: t('styles.sourdough'), suitability: t('styles.authentic_3'), notes: t('styles.the_most_complex_sourdough_challenge_in_the_world') }
        ]
    }
});
