import { defineDoughStyle } from '../../builder';
import { RecipeStyle } from '@/types';

export const NYChocolateChip = defineDoughStyle({
    id: "ny-style-chip-cookie",
    name: "styles.ny_style_chip_cookie",
    category: "cookie",
    recipeStyle: RecipeStyle.COOKIE_NY_CHOC_CHIP,
    description: "styles.ny_style_chip_cookie_desc",
    history: "styles.ny_style_chip_cookie_history",
    origin: {
        country: "USA",
        region: "New York City",
        period: "1990s"
    },
    technicalProfile: {
        hydration: [10, 15],
        salt: [0.8, 1.2],
        fat: [20, 30],
        sugar: [30, 45],
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
    fermentationType: "direct",
    notes: [
        "styles.ny_style_chip_cookie_note_1",
        "styles.ny_style_chip_cookie_note_2",
        "styles.ny_style_chip_cookie_note_3"
    ],
    watchouts: [
        "styles.ny_style_chip_cookie_watchout_1",
        "styles.ny_style_chip_cookie_watchout_2"
    ],
    tags: ["styles.tag_cookies", "styles.tag_american", "styles.tag_chocolate", "styles.tag_gooey"],
    images: {
        hero: "/images/styles/ny-cookie-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    recommendedFlavorComponents: ["dark_chocolate_70", "walnuts", "pecan_nuts", "vanilla_madagascar", "brown_sugar", "salted_butter_normandy"],
    references: [
        { source: "The Secret to Levain Bakery Cookies", url: "https://www.seriouseats.com/levain-bakery-style-chocolate-chip-cookies-recipe", author: "Stella Parks", year: "2019" },
        { source: "Baking Science: Fats and Sugars", url: "https://vickypham.com/blog/science-behind-chocolate-chip-cookies", author: "Vicky Pham", year: "2020" }
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
            { target_style: "Classic Toll House", difference: "styles.ny_style_chip_cookie_comp_toll_diff", why_choose_this: "styles.ny_style_chip_cookie_comp_toll_why" }
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
    id: "french-croissant",
    name: "styles.french_croissant",
    category: "pastry",
    recipeStyle: RecipeStyle.SWEETS_PASTRY,
    description: "styles.french_croissant_desc",
    history: "styles.french_croissant_history",
    origin: {
        country: "France / Austria",
        region: "Paris (via Vienna)",
        period: "19th Century"
    },
    technicalProfile: {
        hydration: [55, 62],
        salt: [1.8, 2.2],
        fat: [40, 55],
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
    fermentationType: "preferment",
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
    recommendedFlavorComponents: ["butter_dry_84", "salted_butter_normandy", "dark_chocolate_70", "strawberry_jam", "pistachio", "hazelnuts", "honey_raw"],
    references: [
        { source: "Viennoiserie: The Art of Lamination", url: "https://www.kingarthurbaking.com/blog/2021/04/19/viennoiserie-at-home", author: "King Arthur Baking", year: "2021" },
        { source: "The Science of Croissants", url: "https://www.finecooking.com/article/the-science-of-croissants", author: "Fine Cooking", year: "2018" }
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
            phase: 'MIX',
            title: "styles.french_croissant_cm_mix_title",
            actionInstructions: "styles.french_croissant_cm_mix_action",
            grandmaInstructions: "styles.french_croissant_cm_mix_grandma",
            technicalExplanation: "styles.french_croissant_cm_mix_tech",
            durationLabel: "15 min"
        },
        {
            phase: 'BULK',
            title: "styles.french_croissant_cm_bulk_title",
            actionInstructions: "styles.french_croissant_cm_bulk_action",
            grandmaInstructions: "styles.french_croissant_cm_bulk_grandma",
            technicalExplanation: "styles.french_croissant_cm_bulk_tech",
            durationLabel: "12h"
        },
        {
            phase: 'PREP',
            title: "styles.french_croissant_cm_lock_title",
            actionInstructions: "styles.french_croissant_cm_lock_action",
            grandmaInstructions: "styles.french_croissant_cm_lock_grandma",
            technicalExplanation: "styles.french_croissant_cm_lock_tech"
        },
        {
            phase: 'KNEAD',
            title: "styles.french_croissant_cm_lam_title",
            actionInstructions: "styles.french_croissant_cm_lam_action",
            grandmaInstructions: "styles.french_croissant_cm_lam_grandma",
            technicalExplanation: "styles.french_croissant_cm_lam_tech",
            criticalPoint: "styles.french_croissant_cm_lam_crit"
        },
        {
            phase: 'PROOF',
            title: "styles.french_croissant_cm_proof_title",
            actionInstructions: "styles.french_croissant_cm_proof_action",
            grandmaInstructions: "styles.french_croissant_cm_proof_grandma",
            proTip: "styles.french_croissant_cm_proof_protip"
        },
        {
            phase: 'BAKE',
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
    id: "classic-cinnamon-roll",
    name: "styles.classic_cinnamon_roll",
    category: "pastry",
    recipeStyle: RecipeStyle.CINNAMON_ROLL,
    description: "styles.classic_cinnamon_roll_desc",
    history: "styles.classic_cinnamon_roll_history",
    origin: {
        country: "USA / Sweden",
        region: "General",
        period: "1920s"
    },
    technicalProfile: {
        hydration: [60, 68],
        salt: [1.5, 2.0],
        fat: [10, 15],
        sugar: [20, 30],
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
    recommendedFlavorComponents: ["cinnamon_ceylon", "brown_sugar", "pecan_nuts", "raisins", "vanilla_glaze", "cream_cheese", "salted_butter_normandy"],
    references: [
        { source: "The Ultimate Cinnamon Roll", url: "https://www.kingarthurbaking.com/recipes/ultimate-cinnamon-rolls-recipe", author: "King Arthur Baking", year: "2021" }
    ],
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
    id: "fudgy-brownie",
    name: "styles.fudgy_brownie",
    category: "cookie",
    recipeStyle: RecipeStyle.BROWNIE,
    description: "styles.fudgy_brownie_desc",
    history: "styles.fudgy_brownie_history",
    origin: {
        country: "USA",
        region: "Chicago",
        period: "1893"
    },
    technicalProfile: {
        hydration: [10, 20],
        salt: [0.5, 1.0],
        fat: [25, 35],
        sugar: [40, 60],
        fermentationSteps: [
            "styles.fudgy_brownie_ferm_step_1",
            "styles.fudgy_brownie_ferm_step_2",
            "styles.fudgy_brownie_ferm_step_3",
            "styles.fudgy_brownie_ferm_step_4"
        ],
        ovenTemp: [160, 180],
        difficulty: "Easy",
    },
    fermentationType: "direct",
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
    recommendedFlavorComponents: ["dark_chocolate_70", "walnuts", "vanilla_madagascar", "pecan_nuts", "hazelnuts", "salted_butter_normandy"],
    references: [
        { source: "The History of the Brownie", url: "https://www.palmerhousehiltonhotel.com/about-hotel/brownie-history/", author: "Palmer House Hotel", year: "2021" }
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
