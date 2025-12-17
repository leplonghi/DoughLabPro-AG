import { defineDoughStyle } from '../../builder';
import { RecipeStyle } from '@/types';

export const NYChocolateChip = defineDoughStyle({
    name: "styles.ny_style_chip_cookie_name",
    category: "cookie",
    recipeStyle: RecipeStyle.COOKIE_NY_CHOC_CHIP,
    description: "styles.ny_style_chip_cookie_desc",
    origin: {
        country: "USA",
        region: "New York City",
        period: "1990s"
    },
    technicalProfile: {
        hydration: [0, 0], // Not applicable in traditional sense, but low
        salt: [0.8, 1.2],
        fat: [20, 30], // Butter
        sugar: [30, 45], // Brown + White Sugar
        fermentationSteps: [
            "styles.ny_style_chip_cookie_ferm_step_1",
            "styles.ny_style_chip_cookie_ferm_step_2",
            "styles.ny_style_chip_cookie_ferm_step_3",
            "styles.ny_style_chip_cookie_ferm_step_4",
            "styles.ny_style_chip_cookie_ferm_step_5"
        ],
        ovenTemp: [200, 220],
        difficulty: "Easy",
    },
    fermentationType: "direct", // Chemical leavening
    notes: [
        "styles.ny_style_chip_cookie_note_1",
        "styles.ny_style_chip_cookie_note_2",
        "styles.ny_style_chip_cookie_note_3"
    ],
    watchouts: [
        "styles.ny_style_chip_cookie_watchout_1",
        "styles.ny_style_chip_cookie_watchout_2"
    ],
    tags: ["styles.tag_cookies", "styles.tag_american", "styles.tag_chocolate", "styles.tag_gooey", "styles.tag_sweet"],
    images: {
        hero: "/images/styles/ny-cookie-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    references: [
        { source: "Levain Bakery", url: "" }
    ],
    education: {
        pro_tips: [
            { tip: "styles.ny_style_chip_cookie_tip_1", explanation: "styles.ny_style_chip_cookie_tip_1_exp" },
            { tip: "styles.ny_style_chip_cookie_tip_2", explanation: "styles.ny_style_chip_cookie_tip_2_exp" }
        ],
        what_if: [
            { scenario: "styles.ny_style_chip_cookie_wi_flat_scen", result: "styles.ny_style_chip_cookie_wi_flat_res", correction: "styles.ny_style_chip_cookie_wi_flat_corr" }
        ],
        comparative_analysis: [
            { target_style: "Toll House", difference: "styles.ny_style_chip_cookie_comp_toll_diff", why_choose_this: "styles.ny_style_chip_cookie_comp_toll_why" }
        ],
        q_and_a: [
            { question: "styles.ny_style_chip_cookie_qa_corn_q", answer: "styles.ny_style_chip_cookie_qa_corn_a", context: "styles.ny_style_chip_cookie_qa_corn_ctx" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Ideal", notes: "styles.ny_style_chip_cookie_ferm_direct_notes" }
        ]
    },
    base_formula: [
        { name: "styles.ingredients_flour_bread", percentage: 100 },
        { name: "styles.ingredients_sugar_brown", percentage: 40 },
        { name: "styles.ingredients_sugar_white", percentage: 35 },
        { name: "styles.ingredients_butter_cold", percentage: 65 },
        { name: "styles.ingredients_egg", percentage: 40 },
        { name: "styles.ingredients_chocolate_chips", percentage: 90 },
        { name: "styles.ingredients_walnuts", percentage: 40 },
        { name: "styles.ingredients_cornstarch", percentage: 2 },
        { name: "styles.ingredients_baking_powder", percentage: 1.5 },
        { name: "styles.ingredients_salt", percentage: 1.5 }
    ]
});

export const FrenchCroissant = defineDoughStyle({
    name: "styles.french_croissant_name",
    category: "pastry",
    recipeStyle: RecipeStyle.SWEETS_PASTRY,
    description: "styles.french_croissant_desc",
    origin: {
        country: "France / Austria",
        region: "Paris (via Vienna)",
        period: "19th Century"
    },
    technicalProfile: {
        hydration: [55, 62],
        salt: [1.8, 2.2],
        fat: [40, 55], // Butter in dough + Butter Block
        sugar: [8, 12],
        fermentationSteps: [
            "styles.french_croissant_ferm_step_1",
            "styles.french_croissant_ferm_step_2",
            "styles.french_croissant_ferm_step_3",
            "styles.french_croissant_ferm_step_4",
            "styles.french_croissant_ferm_step_5",
            "styles.french_croissant_ferm_step_6"
        ],
        ovenTemp: [190, 210],
        difficulty: "Expert",
    },
    fermentationType: "preferment", // Often uses Poolish or Milk starter
    notes: [
        "styles.french_croissant_note_1",
        "styles.french_croissant_note_2",
        "styles.french_croissant_note_3"
    ],
    watchouts: [
        "styles.french_croissant_watchout_1",
        "styles.french_croissant_watchout_2",
        "styles.french_croissant_watchout_3"
    ],
    tags: ["styles.tag_pastry", "styles.tag_french", "styles.tag_laminated", "styles.tag_breakfast", "styles.tag_butter"],
    images: {
        hero: "/images/styles/croissant-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    references: [
        { source: "Viennoiserie Disciplinare", url: "" }
    ],
    education: {
        pro_tips: [
            { tip: "styles.french_croissant_tip_1", explanation: "styles.french_croissant_tip_1_exp" },
            { tip: "styles.french_croissant_tip_2", explanation: "styles.french_croissant_tip_2_exp" }
        ],
        what_if: [
            { scenario: "styles.french_croissant_wi_pool_scen", result: "styles.french_croissant_wi_pool_res", correction: "styles.french_croissant_wi_pool_corr" }
        ],
        comparative_analysis: [
            { target_style: "Puff Pastry", difference: "styles.french_croissant_comp_puff_diff", why_choose_this: "styles.french_croissant_comp_puff_why" }
        ],
        q_and_a: [
            { question: "styles.french_croissant_qa_layers_q", answer: "styles.french_croissant_qa_layers_a", context: "styles.french_croissant_qa_layers_ctx" }
        ],
        fermentation_methods: [
            { method: "Poolish", suitability: "Ideal", notes: "styles.french_croissant_ferm_poolish_notes" }
        ]
    },
    customMethod: [
        {
            phase: "Mix",
            title: "styles.french_croissant_cm_mix_title",
            actionInstructions: "styles.french_croissant_cm_mix_action",
            grandmaInstructions: "styles.french_croissant_cm_mix_grandma",
            technicalExplanation: "styles.french_croissant_cm_mix_tech",
            durationLabel: "15 min"
        },
        {
            phase: "Bulk",
            title: "styles.french_croissant_cm_bulk_title",
            actionInstructions: "styles.french_croissant_cm_bulk_action",
            grandmaInstructions: "styles.french_croissant_cm_bulk_grandma",
            technicalExplanation: "styles.french_croissant_cm_bulk_tech",
            durationLabel: "12h"
        },
        {
            phase: "Prep",
            title: "styles.french_croissant_cm_lock_title",
            actionInstructions: "styles.french_croissant_cm_lock_action",
            grandmaInstructions: "styles.french_croissant_cm_lock_grandma",
            technicalExplanation: "styles.french_croissant_cm_lock_tech"
        },
        {
            phase: "Prep",
            title: "styles.french_croissant_cm_lam_title",
            actionInstructions: "styles.french_croissant_cm_lam_action",
            grandmaInstructions: "styles.french_croissant_cm_lam_grandma",
            technicalExplanation: "styles.french_croissant_cm_lam_tech",
            criticalPoint: "styles.french_croissant_cm_lam_crit"
        },
        {
            phase: "Proof",
            title: "styles.french_croissant_cm_proof_title",
            actionInstructions: "styles.french_croissant_cm_proof_action",
            grandmaInstructions: "styles.french_croissant_cm_proof_grandma",
            proTip: "styles.french_croissant_cm_proof_protip"
        },
        {
            phase: "Bake",
            title: "styles.french_croissant_cm_bake_title",
            actionInstructions: "styles.french_croissant_cm_bake_action",
            grandmaInstructions: "styles.french_croissant_cm_bake_grandma"
        }
    ],

    base_formula: [
        { name: "styles.ingredients_flour_bread", percentage: 100 },
        { name: "styles.ingredients_water", percentage: 28 },
        { name: "styles.ingredients_milk_whole", percentage: 28 },
        { name: "styles.ingredients_sugar", percentage: 12 },
        { name: "styles.ingredients_salt", percentage: 2 },
        { name: "styles.ingredients_yeast_instant", percentage: 1.2 },
        { name: "styles.ingredients_butter", percentage: 6 },
        { name: "styles.ingredients_butter_block", percentage: 50 },
        { name: "styles.ingredients_egg_wash", percentage: 5 }
    ]
});

export const CinnamonRoll = defineDoughStyle({
    name: "styles.classic_cinnamon_roll_name",
    category: "pastry", // Or Enriched Bread, but fits Pastry logic
    recipeStyle: RecipeStyle.CINNAMON_ROLL,
    description: "styles.classic_cinnamon_roll_desc",
    origin: {
        country: "USA / Sweden",
        region: "General",
        period: "1920s"
    },
    technicalProfile: {
        hydration: [60, 68],
        salt: [1.5, 2.0],
        fat: [10, 15], // In dough
        sugar: [20, 30], // Including filling
        fermentationSteps: [
            "styles.classic_cinnamon_roll_ferm_step_1",
            "styles.classic_cinnamon_roll_ferm_step_2",
            "styles.classic_cinnamon_roll_ferm_step_3",
            "styles.classic_cinnamon_roll_ferm_step_4",
            "styles.classic_cinnamon_roll_ferm_step_5"
        ],
        ovenTemp: [180, 190],
        difficulty: "Medium",
    },
    fermentationType: "direct",
    notes: [
        "styles.classic_cinnamon_roll_note_1",
        "styles.classic_cinnamon_roll_note_2",
        "styles.classic_cinnamon_roll_note_3"
    ],
    tags: ["styles.tag_pastry", "styles.tag_american", "styles.tag_sweet", "styles.tag_breakfast", "styles.tag_cinnamon"],
    images: {
        hero: "/images/styles/cinnamon-roll-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    education: {
        pro_tips: [
            { tip: "styles.classic_cinnamon_roll_tip_1", explanation: "styles.classic_cinnamon_roll_tip_1_exp" },
            { tip: "styles.classic_cinnamon_roll_tip_2", explanation: "styles.classic_cinnamon_roll_tip_2_exp" }
        ],
        what_if: [
            { scenario: "styles.classic_cinnamon_roll_wi_pop_scen", result: "styles.classic_cinnamon_roll_wi_pop_res", correction: "styles.classic_cinnamon_roll_wi_pop_corr" }
        ],
        comparative_analysis: [
            { target_style: "Sticky Bun", difference: "styles.classic_cinnamon_roll_comp_sticky_diff", why_choose_this: "styles.classic_cinnamon_roll_comp_sticky_why" }
        ],
        q_and_a: [
            { question: "styles.classic_cinnamon_roll_qa_flour_q", answer: "styles.classic_cinnamon_roll_qa_flour_a", context: "styles.classic_cinnamon_roll_qa_flour_ctx" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Authentic", notes: "styles.classic_cinnamon_roll_ferm_direct_notes" }
        ]
    },
    base_formula: [
        { name: "styles.ingredients_flour_bread", percentage: 100 },
        { name: "styles.ingredients_milk_whole", percentage: 65 },
        { name: "styles.ingredients_sugar", percentage: 15 },
        { name: "styles.ingredients_butter_soft", percentage: 15 },
        { name: "styles.ingredients_egg", percentage: 10 },
        { name: "styles.ingredients_yeast_instant", percentage: 1.5 },
        { name: "styles.ingredients_salt", percentage: 2 },
        { name: "styles.ingredients_sugar_brown", percentage: 25 },
        { name: "styles.ingredients_cinnamon", percentage: 2.5 },
        { name: "styles.ingredients_butter", percentage: 10 },
        { name: "styles.ingredients_cream_cheese", percentage: 20 },
        { name: "styles.ingredients_sugar_powdered", percentage: 15 }
    ]
});

export const FudgyBrownie = defineDoughStyle({
    name: "styles.fudgy_brownie_name",
    category: "cookie", // Adapting to 'Confectionery' family
    recipeStyle: RecipeStyle.BROWNIE,
    description: "styles.fudgy_brownie_desc",
    origin: {
        country: "USA",
        region: "Chicago",
        period: "1893"
    },
    technicalProfile: {
        hydration: [10, 20], // Very low water content
        salt: [0.5, 1.0],
        fat: [25, 35], // Butter + Chocolate fat
        sugar: [40, 60], // Sugar dictates texture
        fermentationSteps: [
            "styles.fudgy_brownie_ferm_step_1",
            "styles.fudgy_brownie_ferm_step_2",
            "styles.fudgy_brownie_ferm_step_3",
            "styles.fudgy_brownie_ferm_step_4"
        ],
        ovenTemp: [160, 180],
        difficulty: "Easy",
    },
    fermentationType: "direct", // None really
    notes: [
        "styles.fudgy_brownie_note_1",
        "styles.fudgy_brownie_note_2",
        "styles.fudgy_brownie_note_3"
    ],
    tags: ["styles.tag_sweet", "styles.tag_chocolate", "styles.tag_dessert", "styles.tag_american"],
    images: {
        hero: "/images/styles/brownie-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    references: [
        { source: "Palmer House Hotel", url: "" }
    ],
    education: {
        pro_tips: [
            { tip: "styles.fudgy_brownie_tip_1", explanation: "styles.fudgy_brownie_tip_1_exp" },
            { tip: "styles.fudgy_brownie_tip_2", explanation: "styles.fudgy_brownie_tip_2_exp" }
        ],
        what_if: [
            { scenario: "styles.fudgy_brownie_wi_cakey_scen", result: "styles.fudgy_brownie_wi_cakey_res", correction: "styles.fudgy_brownie_wi_cakey_corr" }
        ],
        comparative_analysis: [
            { target_style: "Chocolate Cake", difference: "styles.fudgy_brownie_comp_cake_diff", why_choose_this: "styles.fudgy_brownie_comp_cake_why" }
        ],
        q_and_a: [
            { question: "styles.fudgy_brownie_qa_cocoa_q", answer: "styles.fudgy_brownie_qa_cocoa_a", context: "styles.fudgy_brownie_qa_cocoa_ctx" }
        ],
        fermentation_methods: [
            { method: "Direct", suitability: "Not Recommended", notes: "styles.fudgy_brownie_ferm_direct_notes" }
        ]
    },
    base_formula: [
        { name: "styles.ingredients_flour_ap", percentage: 100 },
        { name: "styles.ingredients_sugar_white", percentage: 120 },
        { name: "styles.ingredients_sugar_brown", percentage: 40 },
        { name: "styles.ingredients_butter_melted", percentage: 100 },
        { name: "styles.ingredients_chocolate_dark", percentage: 60 },
        { name: "styles.ingredients_cocoa_powder", percentage: 25 },
        { name: "styles.ingredients_egg", percentage: 70 },
        { name: "styles.ingredients_vanilla", percentage: 2 },
        { name: "styles.ingredients_salt", percentage: 1 }
    ]
});
