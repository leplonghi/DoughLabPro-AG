import { defineDoughStyle } from '../../builder';

export const BriocheATete = defineDoughStyle({
    name: "styles.brioche_a_tete_name",
    category: "enriched_bread",
    description: "styles.brioche_a_tete_desc",
    origin: {
        country: "France",
        region: "Normandy",
        period: "1404 (First recorded)"
    },
    technicalProfile: {
        hydration: [20, 30], // Liquid comes from EGGS, not water
        salt: [2.0, 2.5],
        fat: [40, 60], // Butter!
        sugar: [10, 15],
        fermentationSteps: [
            "styles.brioche_a_tete_mix_title",
            "Bulk 1h",
            "styles.brioche_a_tete_bulk_title",
            "Proof 2-3h"
        ],
        ovenTemp: [180, 200],
        difficulty: "Hard",
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
    history: "styles.brioche_a_tete_history",
    tags: ["styles.tag_bread", "styles.tag_french", "styles.tag_enriched", "styles.tag_butter", "styles.tag_dessert"],
    images: {
        hero: "/images/styles/brioche-hero.png",
        dough: "/images/styles/brioche_dough.jpg",
        crumb: "/images/styles/brioche_crumb.jpg"
    },
    references: [
        { source: "The Art of French Baking", url: "" }
    ],
    education: {
        pro_tips: [
            { tip: "styles.brioche_a_tete_tip_1", explanation: "styles.brioche_a_tete_tip_1_exp" },
            { tip: "styles.brioche_a_tete_tip_2", explanation: "styles.brioche_a_tete_tip_2_exp" }
        ],
        what_if: [
            { scenario: "Dough is an oily soup", result: "Emulsion broke (got too hot).", correction: "Chill bowl immediately. If that fails, it's a loss." }
        ],
        comparative_analysis: [
            { target_style: "Challah", difference: "Brioche is dairy-rich (Butter/Milk). Challah is pareve (Oil/Water).", why_choose_this: "Choose Brioche for decadence." }
        ],
        q_and_a: [
            { question: "Why the 'Top Knot'?", answer: "Tradition. It prevents the center from rising too high and provides a textural contrast.", context: "French History" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Ideal", notes: "Often uses a sponge/poolish to help yeast start in the fat-heavy environment." }
        ]
    }
});

export const Challah = defineDoughStyle({
    name: "styles.challah_name",
    category: "enriched_bread",
    description: "styles.challah_desc",
    origin: {
        country: "Jewish Diaspora",
        region: "Eastern Europe",
        period: "Traditional"
    },
    technicalProfile: {
        hydration: [35, 45], // Low water, mostly eggs/oil
        salt: [1.8, 2.0],
        fat: [8, 12], // Vegetable Oil
        sugar: [8, 12], // Honey or Sugar
        fermentationSteps: [
            "Mix to medium development",
            "Bulk 2h",
            "Shape/Braid",
            "Proof 1.5-2h"
        ],
        ovenTemp: [175, 190],
        difficulty: "Medium",
    },
    fermentationType: "direct",
    notes: [
        "Use neutral oil (canola/grapeseed) for a Pareve loaf.",
        "Double egg wash (once before proof, once before bake) for profound shine.",
        "Braiding dictates the final shape and structure."
    ],
    history: "styles.challah_history",
    tags: ["styles.tag_bread", "styles.tag_jewish", "styles.tag_braided", "styles.tag_dairy_free", "styles.tag_ceremonial"],
    images: {
        hero: "/images/styles/challah-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_crumb.jpg"
    },
    education: {
        pro_tips: [
            { tip: "Double Egg Wash", explanation: "Brush once after braiding, and again right before baking. This fills the gaps and creates a lacquer-like shine." },
            { tip: "The 3-Strand Rule", explanation: "Start braiding from the middle, not the end. It keeps the loaf symmetrical." }
        ],
        what_if: [
            { scenario: "Braid tears during proof", result: "Braided too tightly.", correction: "Braid loosely; the oven spring will fill the gaps." }
        ],
        comparative_analysis: [
            { target_style: "Brioche", difference: "Challah uses oil (Pareve). Brioche uses butter (Dairy).", why_choose_this: "Choose Challah for meat meals (Kosher rules)." }
        ],
        q_and_a: [
            { question: "Why 'Pareve'?", answer: "To comply with Kosher laws forbidding mixing dairy and meat. Challah is the Sabbath bread for meat dinners.", context: "Jewish Tradition" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Standard direct dough. Sourdough versions (Water Challah) exist but are niche." }
        ]
    }
});

export const BurgerBun = defineDoughStyle({
    name: "styles.classic_burger_bun_name",
    category: "burger_bun",
    description: "styles.classic_burger_bun_desc",
    history: "styles.classic_burger_bun_history",
    origin: {
        country: "USA",
        region: "General",
        period: "20th Century"
    },
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.2],
        fat: [5, 10], // Butter or Shortening
        sugar: [5, 8],
        fermentationSteps: [
            "Mix to full development",
            "Bulk 1h",
            "Divide & Ball 80-100g",
            "Proof 1h (Flattened)"
        ],
        ovenTemp: [190, 210],
        difficulty: "Easy",
    },
    fermentationType: "direct",
    notes: [
        "Flatten the balls gently before proofing for a wider surface area.",
        "Use a Tangzhong (water roux) for extended softness.",
        "Sesame seeds are traditional but optional."
    ],
    tags: ["styles.tag_bread", "styles.tag_american", "styles.tag_soft", "styles.tag_sandwich"],
    images: {
        hero: "/images/styles/burger-bun-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_crumb.jpg"
    },
    education: {
        pro_tips: [
            { tip: "styles.classic_burger_bun_tip_flatten", explanation: "styles.classic_burger_bun_tip_flatten_exp" },
            { tip: "Steam is the enemy", explanation: "Do not use steam. You want a soft, thin skin, not a crust." }
        ],
        what_if: [
            { scenario: "Bun splits horizontally", result: "Underproofed.", correction: "Let it proof until it jiggles like jelly." }
        ],
        comparative_analysis: [
            { target_style: "Potato Bun", difference: "Potato starch holds more water, staying soft longer.", why_choose_this: "Choose Classic for structure." }
        ],
        q_and_a: [
            { question: "Why 80g?", answer: "The Golden Ratio. 80-90g bun matches a standard 4-6oz patty perfectly.", context: "Burger Science" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Ideal", notes: "Fast and consistent. Sometimes uses Tangzhong for shelf life." }
        ]
    }
});

export const Shokupan = defineDoughStyle({
    name: "styles.shokupan_name",
    category: "enriched_bread",
    description: "styles.shokupan_desc",
    history: "styles.shokupan_history",
    origin: {
        country: "Japan",
        region: "National",
        period: "20th Century"
    },
    technicalProfile: {
        hydration: [70, 75], // High, but bound by starch
        salt: [1.8, 2.0],
        fat: [6, 10], // Butter + Milk Powder
        sugar: [6, 10],
        fermentationSteps: [
            "Prepare Tangzhong (Cook flour+water)",
            "Mix All",
            "Bulk 1.5h",
            "Shape (3-4 lobes)",
            "Proof in Pullman Pan"
        ],
        ovenTemp: [180, 190],
        difficulty: "Medium",
    },
    fermentationType: "direct",
    notes: [
        "Tangzhong: Cook 5% of flour with 5x water to 65°C.",
        "Shaping involves rolling up logs and placing them side-by-side in the tin.",
        "Produces 'cotton-like' shreddable crumb."
    ],
    tags: ["styles.tag_bread", "styles.tag_japanese", "styles.tag_tangzhong", "styles.tag_soft", "styles.tag_sandwich"],
    images: {
        hero: "/images/styles/shokupan-hero.png",
        dough: "/images/styles/shokupan-dough.jpg",
        crumb: "/images/styles/shokupan-crumb.jpg"
    },
    education: {
        pro_tips: [
            { tip: "The 65°C Magic", explanation: "Cook the flour/water roux (Tangzhong) exactly to 65°C. This maximizes starch gelatinization without degrading the starch." },
            { tip: "Lid ON vs OFF", explanation: "Lid ON = Square (Pullman/Sandwich). Lid OFF = Mountain (Rustic top)." }
        ],
        what_if: [
            { scenario: "Dough didn't rise", result: "Tangzhong was too hot when added.", correction: "Cool Tangzhong to room temp before adding yeast." }
        ],
        comparative_analysis: [
            { target_style: "Western Sandwich Bread", difference: "Shokupan uses cooked flour (Tangzhong) for superior moisture retention.", why_choose_this: "Choose Shokupan for the softest possible texture." }
        ],
        q_and_a: [
            { question: "Yudane vs Tangzhong", answer: "Yudane uses boiling water (no cooking). Tangzhong uses 65°C cooking. Both achieve gelatinization.", context: "Asian Baking" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "Base is direct but modified by the scalded flour (Tangzhong)." }
        ]
    }
});

export const Panettone = defineDoughStyle({
    name: "styles.panettone_name",
    category: "enriched_bread",
    description: "styles.panettone_desc",
    history: "styles.panettone_history",
    origin: {
        country: "Italy",
        region: "Milan",
        period: "Renaissance"
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
            "Hang Upside Down"
        ],
        ovenTemp: [160, 175],
        difficulty: "Expert", // The hardest style here
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
    tags: ["styles.tag_bread", "styles.tag_italian", "styles.tag_christmas", "styles.tag_sourdough", "styles.tag_sweet"],
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
            { tip: "The Hang", explanation: "Gravity is the enemy. You MUST hang Panettone upside down for 12h immediately after baking, or it collapses under its own butter weight." },
            { tip: "Tripling Rule", explanation: "The First Dough (Primo Impasto) MUST triple in volume. If it doesn't, do not proceed to Second Dough. Wait." }
        ],
        what_if: [
            { scenario: "Taste is sour", result: "Starter was too acetic.", correction: "Wash the starter (Bagnetto) in sugar water to remove acidity before building." }
        ],
        comparative_analysis: [
            { target_style: "Pandoro", difference: "Pandoro contains no fruit and is shaped like a star. Panettone has fruit and is domed.", why_choose_this: "Choose Panettone for the fruit/spice complexity." }
        ],
        q_and_a: [
            { question: "Commercial Yeast?", answer: "Forbidden. True Panettone uses ONLY 'Pasta Madre' (stiff sourdough) for leavening and preservation.", context: "Italian Law" }
        ],
        fermentation_methods: [
            { method: "Sourdough", suitability: "Authentic", notes: "The most complex sourdough challenge in the world." }
        ]
    }
});