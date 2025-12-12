import { defineDoughStyle } from '../../builder';
import { RecipeStyle } from '@/types';
import { useTranslation } from '@/i18n';

export const NYChocolateChip = defineDoughStyle({
    name: t('styles.ny_style_chip_cookie'),
    category: "cookie",
    recipeStyle: RecipeStyle.COOKIE_NY_CHOC_CHIP,
    description: "The modern 'Levain-style' cookie: massive (170g+), tall, mountains of dough with a gooey, underbaked center and a crispy, golden exterior. Relies on cold butter cubes and minimal mixing.",
    origin: {
        country: t('styles.usa_3'),
        region: t('styles.new_york_city'),
        period: "1990s"
    },
    technicalProfile: {
        hydration: [0, 0], // Not applicable in traditional sense, but low
        salt: [0.8, 1.2],
        fat: [20, 30], // Butter
        sugar: [30, 45], // Brown + White Sugar
        fermentationSteps: [
            "Cream cold butter (briefly)",
            t('common.mix_dry_ingredients'),
            "Portion large (6oz)",
            "Freeze/Chill 12h (Crucial)",
            t('common.bake_hot_and_fast')
        ],
        ovenTemp: [200, 220],
        difficulty: t('styles.easy_4'),
    },
    fermentationType: "direct", // Chemical leavening
    notes: [
        "Use cold cubed butter, do not cream until fluffy if you want height.",
        "Cornstarch or Cake Flour is often added to lower protein % for tenderness.",
        "Must be chilled thoroughly to prevent spreading."
    ],
    watchouts: [
        "Overmixing develops gluten -> tough cookie.",
        "Baking too low/slow -> flat cookie."
    ],
    tags: ["cookie", "american", "chocolate", "gooey", "sweet"],
    images: {
        hero: "/images/styles/ny-cookie-hero.png",
        dough: "/images/styles/placeholder_dough.jpg", // Kept generic
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    references: [
        { source: t('styles.levain_bakery'), url: "" }
    ],
    education: {
        pro_tips: [
            { tip: t('styles.do_not_cream'), explanation: "Mix butter/sugar briefly. Creaming adds air, making a 'cakey' cookie. You want dense and fudgy." },
            { tip: t('styles.the_12h_rest'), explanation: t('styles.hydrates_the_flour_completely_and_solidifies_the_b') }
        ],
        what_if: [
            { scenario: t('styles.cookie_is_flat'), result: t('styles.butter_was_too_warm_or_chemical_leavener_expired'), correction: t('styles.use_ice_cold_butter_chunks_and_chill_dough_before_') }
        ],
        comparative_analysis: [
            { target_style: t('styles.toll_house'), difference: "NY Style uses cold butter, cake flour/cornstarch, and is huge. Toll House is creamed and smaller.", why_choose_this: t('styles.choose_ny_style_for_a_gooey_center') }
        ],
        q_and_a: [
            { question: t('styles.why_cornstarch'), answer: "It 'cuts' the protein of the flour, making the cookie tender despite the massive size.", context: t('styles.cookie_chemistry') }
        ],
        fermentation_methods: [
            { method: t('styles.direct_5'), suitability: t('styles.ideal_3'), notes: "Chemical leavening (Soda/Powder) replaces yeast." }
        ]
    },
    base_formula: [
        { name: "Bread/Cake Flour Blend", percentage: 100 },
        { name: t('styles.brown_sugar'), percentage: 40 },
        { name: t('styles.white_sugar'), percentage: 35 },
        { name: t('styles.cold_butter_cubes'), percentage: 65 },
        { name: t('styles.whole_eggs'), percentage: 40 },
        { name: t('styles.dark_chocolate_chips'), percentage: 90 },
        { name: "Walnuts (Optional)", percentage: 40 },
        { name: t('styles.cornstarch'), percentage: 2 },
        { name: t('styles.baking_powder'), percentage: 1.5 },
        { name: t('styles.sea_salt'), percentage: 1.5 }
    ]
});

export const FrenchCroissant = defineDoughStyle({
    name: t('styles.french_croissant'),
    category: "pastry",
    recipeStyle: RecipeStyle.SWEETS_PASTRY,
    description: "The ultimate test of a baker's skill. A laminated yeast dough (Viennoiserie) featuring alternate layers of butter and dough (managed via 'turns'). Results in a honeycomb interior structure.",
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
            "Mix Détrempe",
            "Bulk 1h",
            "Lock-in Butter",
            "Lamination (3 turns)",
            "Proof 2-3h (wobbly)",
            t('common.bake')
        ],
        ovenTemp: [190, 210],
        difficulty: t('styles.expert_14'),
    },
    fermentationType: "preferment", // Often uses Poolish or Milk starter
    notes: [
        "Temperature control (16-19°C room) is vital. If butter melts, layers fuse.",
        "Butter plasticity must match dough extensibility.",
        "Proofing too hot (>26°C) will melt the butter out."
    ],
    watchouts: [
        "Butter shatter (too cold).",
        "Butter absorption (too warm).",
        "Proofing collapse."
    ],
    tags: ["pastry", "french", "laminated", "breakfast", "butter"],
    images: {
        hero: "/images/styles/croissant-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    references: [
        { source: t('styles.viennoiserie_disciplinare'), url: "" }
    ],
    education: {
        pro_tips: [
            { tip: t('styles.plasticity_match'), explanation: "Butter and dough usually need to be the same consistency. If butter is harder, it shatters. If softer, it squirts out." },
            { tip: t('styles.the_wobble'), explanation: "A fully proofed croissant should wobble like jelly when the tray is shaken. If it's firm, wait." }
        ],
        what_if: [
            { scenario: t('styles.pool_of_butter_in_oven'), result: "Proofed too hot (>26°C) or underproofed.", correction: t('styles.ideally_proof_at_24c25c') }
        ],
        comparative_analysis: [
            { target_style: t('styles.puff_pastry'), difference: "Croissant has yeast (fermented). Puff Pastry is mechanical lift only.", why_choose_this: t('styles.choose_croissant_for_the_airy_honeycomb_interior') }
        ],
        q_and_a: [
            { question: t('styles.how_many_layers'), answer: "Modern standard is often 27 layers (3 single turns). More layers = finer crumb but less open honeycomb.", context: t('styles.lamination_math') }
        ],
        fermentation_methods: [
            { method: t('styles.poolish'), suitability: t('styles.ideal_4'), notes: t('styles.a_poolish_preferment_adds_extensibility_to_the_dou') }
        ]
    },
    customMethod: [
        {
            phase: t('styles.mix_2'),
            title: "Détrempe (Base Dough)",
            actionInstructions: "Mix water, milk, sugar, salt, yeast, and soft butter. Add flour. deeply knead until smooth (medium gluten development). Do not overdevelop.",
            grandmaInstructions: "Mix everything to make a smooth dough. Don't knead it too hard for too long.",
            technicalExplanation: "We need extensibility for rolling. Too much gluten (elasticity) makes lamination impossible (shrinkage).",
            durationLabel: "15 min"
        },
        {
            phase: t('styles.bulk'),
            title: t('styles.cold_ferment'),
            actionInstructions: t('styles.flatten_dough_into_a_rectangle_wrap_and_chill_at_4'),
            grandmaInstructions: t('styles.wrap_the_dough_and_put_it_in_the_fridge_overnight'),
            technicalExplanation: t('styles.relaxes_gluten_and_chills_the_dough_to_match_the_p'),
            durationLabel: "12h"
        },
        {
            phase: t('styles.prep'),
            title: "Lock-in (Beurrage)",
            actionInstructions: "Roll dough to twice the size of butter block. Place butter in center, fold dough over to encase. Seal edges.",
            grandmaInstructions: t('styles.put_the_butter_inside_the_dough_and_fold_the_dough'),
            technicalExplanation: t('styles.ensures_distinct_layers_of_fat_and_dough')
        },
        {
            phase: t('styles.prep_2'),
            title: "Lamination (3 Simple Turns)",
            actionInstructions: "Roll out to 8mm thick. Fold in thirds (Letter Fold). Rotate 90°. Repeat 2 more times, chilling in between if butter softens.",
            grandmaInstructions: t('styles.roll_it_out_fold_it_like_a_letter_do_this_3_times'),
            technicalExplanation: "Creates 27 layers of butter (3^3), essential for the honeycomb structure.",
            criticalPoint: "If butter melts, it fuses with the dough -> Brioche (no layers)."
        },
        {
            phase: t('styles.proof'),
            title: t('styles.final_proof'),
            actionInstructions: "Shape croissants. Proof at 26°C (max 28°C) until very wobbly and increased 2.5x in volume.",
            grandmaInstructions: "Let them rise in a warm spot (but not too hot!) until they wobble like jelly.",
            proTip: t('styles.if_proof_temperature_exceeds_29c_the_butter_will_l')
        },
        {
            phase: t('styles.bake'),
            title: t('styles.bake_2'),
            actionInstructions: t('styles.bake_at_200c_for_5_min_then_190c_for_1215_min_no_s'),
            grandmaInstructions: t('styles.bake_until_deep_golden_brown')
        }
    ],

    base_formula: [
        { name: t('styles.bread_flour'), percentage: 100 },
        { name: t('styles.water'), percentage: 28 },
        { name: t('styles.whole_milk'), percentage: 28 },
        { name: t('styles.sugar'), percentage: 12 },
        { name: t('styles.salt'), percentage: 2 },
        { name: "Yeast (Instant)", percentage: 1.2 },
        { name: "Butter (Dough)", percentage: 6 },
        { name: "Butter (Lamination Block)", percentage: 50 },
        { name: t('styles.egg_wash'), percentage: 5 }
    ]
});

export const CinnamonRoll = defineDoughStyle({
    name: t('styles.classic_cinnamon_roll'),
    category: "pastry", // Or Enriched Bread, but fits Pastry logic
    recipeStyle: RecipeStyle.CINNAMON_ROLL,
    description: "Soft, enriched dough rolled with a cinnamon-sugar-butter smear and cut into spirals. Topped with cream cheese icing or fondant glaze. A staple of American comfort baking.",
    origin: {
        country: "USA / Sweden",
        region: t('styles.general_2'),
        period: "1920s"
    },
    technicalProfile: {
        hydration: [60, 68],
        salt: [1.5, 2.0],
        fat: [10, 15], // In dough
        sugar: [20, 30], // Including filling
        fermentationSteps: [
            t('common.mix_enriched_dough'),
            "Bulk 1.5h",
            "Sheet & Fill",
            "Roll & Cut",
            "Proof 1h"
        ],
        ovenTemp: [180, 190],
        difficulty: t('styles.medium_17'),
    },
    fermentationType: "direct",
    notes: [
        "Can be made 'gooey' by pouring heavy cream over rolls before baking.",
        "Filling should include a binder (flour or cornstarch) to prevent leaking.",
        "Tangzhong method keeps them soft for days."
    ],
    tags: ["pastry", "american", "sweet", "breakfast", "cinnamon"],
    images: {
        hero: "/images/styles/cinnamon-roll-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    education: {
        pro_tips: [
            { tip: t('styles.dental_floss_cut'), explanation: "Use unflavored floss to cut the log. Knives squash the spiral; floss cuts cleanly from the outside in." },
            { tip: t('styles.the_cream_hack'), explanation: "Pour warm heavy cream over the rolls right before baking for Cinnabon-level gooeyness." }
        ],
        what_if: [
            { scenario: t('styles.centers_popped_up'), result: t('styles.rolled_too_tightly'), correction: t('styles.roll_the_log_loosely_to_allow_expansion') }
        ],
        comparative_analysis: [
            { target_style: t('styles.sticky_bun'), difference: "Sticky buns bake on top of caramel/nuts and are flipped. Cinnamon rolls are glazed on top.", why_choose_this: t('styles.choose_cinnamon_rolls_for_cream_cheese_frosting_lo') }
        ],
        q_and_a: [
            { question: t('styles.why_bread_flour'), answer: "You need the chewier texture to hold the heavy filling. AP flour makes them too cakey.", context: t('styles.texture_balance') }
        ],
        fermentation_methods: [
            { method: t('styles.direct_6'), suitability: t('styles.authentic_4'), notes: t('styles.enriched_direct_dough_is_standard') }
        ]
    },
    base_formula: [
        { name: t('styles.bread_flour_2'), percentage: 100 },
        { name: t('styles.whole_milk_2'), percentage: 65 },
        { name: t('styles.sugar_2'), percentage: 15 },
        { name: "Butter (Soft)", percentage: 15 },
        { name: t('styles.whole_egg'), percentage: 10 },
        { name: t('styles.instant_yeast'), percentage: 1.5 },
        { name: t('styles.salt_2'), percentage: 2 },
        { name: t('styles.filling_brown_sugar'), percentage: 25 },
        { name: t('styles.filling_cinnamon'), percentage: 2.5 },
        { name: t('styles.filling_butter'), percentage: 10 },
        { name: t('styles.frosting_cream_cheese'), percentage: 20 },
        { name: t('styles.frosting_powdered_sugar'), percentage: 15 }
    ]
});

export const FudgyBrownie = defineDoughStyle({
    name: t('styles.fudgy_brownie'),
    category: "cookie", // Adapting to 'Confectionery' family
    recipeStyle: RecipeStyle.BROWNIE,
    description: "A dense, rich chocolate bar with zero leavening agents (relying on egg foam or just density). shiny crackly top (meringue skin) and a moist, truffle-like interior.",
    origin: {
        country: t('styles.usa_4'),
        region: t('styles.chicago'),
        period: "1893"
    },
    technicalProfile: {
        hydration: [10, 20], // Very low water content
        salt: [0.5, 1.0],
        fat: [25, 35], // Butter + Chocolate fat
        sugar: [40, 60], // Sugar dictates texture
        fermentationSteps: [
            "Melt Butter + Chocolate",
            "Whip Eggs + Sugar (Ribbon stage for skin)",
            t('common.fold_in_dry'),
            t('common.bake')
        ],
        ovenTemp: [160, 180],
        difficulty: t('styles.easy_5'),
    },
    fermentationType: "direct", // None really
    notes: [
        "The 'crinkle top' comes from dissolving sugar completely into the eggs.",
        "Do not overbake. Carryover cooking finishes the center.",
        "Cocoa powder adds depth; melted chocolate adds fudge factor."
    ],
    tags: ["sweet", "chocolate", "dessert", "american"],
    images: {
        hero: "/images/styles/brownie-hero.png",
        dough: "/images/styles/placeholder_dough.jpg",
        crumb: "/images/styles/placeholder_dough.jpg"
    },
    references: [
        { source: t('styles.palmer_house_hotel'), url: "" }
    ],
    education: {
        pro_tips: [
            { tip: t('styles.the_shiny_crust'), explanation: "Whip eggs and sugar vigorously to the 'ribbon stage' before adding chocolate/flour. This creates the meringue-like skin." },
            { tip: t('styles.ice_bath'), explanation: "Shocking the baked brownies in an ice bath halts cooking immediately, ensuring the center stays fudgy." }
        ],
        what_if: [
            { scenario: t('styles.cakey_texture'), result: t('styles.too_much_flour_or_overbaked'), correction: "Reduce flour, increase fat/sugar ratios." }
        ],
        comparative_analysis: [
            { target_style: t('styles.chocolate_cake'), difference: "Brownies have no chemical leavening and much higher fat/sugar density.", why_choose_this: t('styles.choose_brownie_for_density') }
        ],
        q_and_a: [
            { question: t('styles.cocoa_or_chocolate'), answer: t('styles.both_melted_chocolate_gives_fudge_texture_cocoa_po'), context: t('styles.flavor_profiling') }
        ],
        fermentation_methods: [
            { method: t('styles.direct_7'), suitability: t('styles.not_recommended'), notes: "No fermentation. It's a batter." }
        ]
    },
    base_formula: [
        { name: t('styles.ap_flour'), percentage: 100 },
        { name: t('styles.white_sugar_2'), percentage: 120 },
        { name: t('styles.brown_sugar_2'), percentage: 40 },
        { name: "Butter (Melted)", percentage: 100 },
        { name: "Dark Chocolate (70%)", percentage: 60 },
        { name: t('styles.cocoa_powder'), percentage: 25 },
        { name: t('styles.whole_eggs_2'), percentage: 70 },
        { name: t('styles.vanilla_extract'), percentage: 2 },
        { name: t('styles.salt_3'), percentage: 1 }
    ]
});
