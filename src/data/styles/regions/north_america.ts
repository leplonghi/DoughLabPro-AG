import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

const nycSlice: DoughStyleDefinition = {
    id: "new_york_slice_v2",
    name: 'styles.new_york_slice_name',
    category: "pizza",
    recipeStyle: RecipeStyle.NEW_YORK,
    origin: {
        country: 'USA',
        region: 'New York City',
        period: 'Early 20th century'
    },
    description: "styles.new_york_slice_desc",
    history: "styles.new_york_slice_history",
    base_formula: [
        { name: 'styles.ingredients_flour_high_gluten', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 63 },
        { name: 'styles.ingredients_salt', percentage: 2.2 },
        { name: 'styles.ingredients_oil', percentage: 2 },
        { name: 'styles.ingredients_sugar', percentage: 1.5 },
        { name: 'styles.ingredients_yeast_fresh', percentage: 0.4 }
    ],
    difficulty: 'Medium',
    fermentationType: "cold",

    technicalProfile: {
        hydration: [62, 65],
        salt: [2.0, 2.5],
        oil: [1, 3],
        sugar: [1, 2],
        flourStrength: "W360-400 (High Gluten)",
        ovenTemp: [280, 300],
        recommendedUse: ['Cheese slice', 'Pepperoni'],
        difficulty: 'Medium',
        ballWeight: { recommended: 450, min: 350, max: 600 },
        fermentationSteps: [
            "styles.new_york_slice_v2_ferm_step_1",
            "styles.new_york_slice_v2_ferm_step_2",
            "styles.new_york_slice_v2_ferm_step_3",
            "styles.new_york_slice_v2_ferm_step_4"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W360-400 (High Gluten)",
            pl_ratio: "0.6 (Elastic)",
            absorption_capacity: "High (65%)",
            protein_type: "Spring Wheat (14%)",
            science_explanation: "styles.new_york_slice_v2_science_flour"
        },
        thermalProfile: {
            oven_type: 'Gas deck',
            heat_distribution: "Conduction (Stone)",
            crust_development: 'Crispy pliable golden',
            crumb_structure: 'Thin dense but airy rim'
        },
        fermentationScience: {
            yeast_activity: "Retarded (Cold)",
            ph_target: "pH 5.2",
            organic_acids: "Balanced (Acetic notes)",
            enzymatic_activity: "Controlled (Cold)"
        }
    },
    tags: ["styles.new_york_slice_v2_tag_nyc", "styles.new_york_slice_v2_tag_slice", "styles.new_york_slice_v2_tag_deck", "styles.new_york_slice_v2_tag_foldable"],
    pairings: {
        canonical: ['Low moisture mozzarella', 'Oregano', 'Garlic powder'],
        modern: ['Vodka sauce'],
        regional: []
    },
    watchouts: [
        "styles.new_york_slice_v2_watchout_gummy",
        "styles.new_york_slice_v2_watchout_chew",
        "styles.new_york_slice_v2_watchout_browning"
    ],
    notes: [
        "styles.new_york_slice_v2_note_1",
        "styles.new_york_slice_v2_note_2",
        "styles.new_york_slice_v2_note_3"
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Scott Wiener's Pizza History" }, { source: 'Modernist Pizza' }],
    images: {
        hero: "/images/styles/nyc-slice-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'styles.new_york_slice_v2_tip_reheat',
                explanation: "styles.new_york_slice_v2_tip_reheat_exp"
            },
            {
                tip: 'styles.new_york_slice_v2_tip_cheese',
                explanation: "styles.new_york_slice_v2_tip_cheese_exp"
            }
        ],
        what_if: [
            {
                scenario: 'styles.new_york_slice_v2_wi_oven_scen',
                result: 'styles.new_york_slice_v2_wi_oven_res',
                correction: "styles.new_york_slice_v2_wi_oven_corr"
            },
            {
                scenario: 'styles.new_york_slice_v2_wi_snap_scen',
                result: 'styles.new_york_slice_v2_wi_snap_res',
                correction: "styles.new_york_slice_v2_wi_snap_corr"
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Neapolitan',
                difference: "styles.new_york_slice_v2_comp_neo_diff",
                why_choose_this: "styles.new_york_slice_v2_comp_neo_why"
            }
        ],
        q_and_a: [
            {
                question: 'styles.new_york_slice_v2_qa_water_q',
                answer: "styles.new_york_slice_v2_qa_water_a",
                context: 'styles.new_york_slice_v2_qa_water_ctx'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "styles.new_york_slice_v2_ferm_direct_notes"
            }
        ]
    },
    deepDive: {
        hydrationLogic: "styles.new_york_slice_v2_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "styles.new_york_slice_v2_method_direct_notes" },
            biga: { suitable: true, notes: "styles.new_york_slice_v2_method_biga_notes" },
            poolish: { suitable: true, notes: "styles.new_york_slice_v2_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'styles.new_york_slice_v2_dd_wi_pale_scen',
                outcome: "styles.new_york_slice_v2_dd_wi_pale_out",
                solution: "styles.new_york_slice_v2_dd_wi_pale_sol"
            },
            {
                scenario: 'styles.new_york_slice_v2_dd_wi_snap_scen',
                outcome: 'styles.new_york_slice_v2_dd_wi_snap_out',
                solution: "styles.new_york_slice_v2_dd_wi_snap_sol"
            }
        ],
        comparisons: [
            {
                vsStyle: 'Neapolitan',
                difference: "styles.new_york_slice_v2_dd_comp_neo_diff"
            }
        ],
        proTips: [
            "styles.new_york_slice_v2_dd_tip_1",
            "styles.new_york_slice_v2_dd_tip_2"
        ]
    }
};

const detroitStyle: DoughStyleDefinition = {
    id: "detroit_style_classic",
    name: 'styles.detroit_style_classic_name',
    category: "pizza",
    recipeStyle: RecipeStyle.DETROIT,
    origin: {
        country: 'USA',
        region: 'Detroit, Michigan',
        period: "1946"
    },
    description: "styles.detroit_style_classic_desc",
    history: "styles.detroit_style_classic_history",
    base_formula: [
        { name: 'styles.ingredients_flour_bread', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 73 },
        { name: 'styles.ingredients_salt', percentage: 2.2 },
        { name: 'styles.ingredients_oil', percentage: 1.5 },
        { name: 'styles.ingredients_yeast_fresh', percentage: 0.5 }
    ],
    difficulty: 'Medium',
    fermentationType: "direct",

    technicalProfile: {
        hydration: [70, 75],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: 'W300-320',
        ovenTemp: [260, 290],
        recommendedUse: ['Pepperoni'],
        difficulty: 'Medium',
        ballWeight: { recommended: 550, min: 400, max: 700 },
        fermentationSteps: [
            "styles.detroit_style_classic_ferm_step_1",
            "styles.detroit_style_classic_ferm_step_2",
            "styles.detroit_style_classic_ferm_step_3"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: 'W300-320',
            pl_ratio: 'Balanced',
            absorption_capacity: "High (70%+)",
            protein_type: 'Bread flour',
            science_explanation: "styles.detroit_style_classic_science_flour"
        },
        thermalProfile: {
            oven_type: 'Blue steel pan',
            heat_distribution: "Conduction (Oil Fry)",
            crust_development: "Fried, caramelized (Frico)",
            crumb_structure: 'Spongelike airy'
        },
        fermentationScience: {
            yeast_activity: 'High',
            ph_target: 'Normal',
            organic_acids: 'Lactic',
            enzymatic_activity: "High (High water)"
        }
    },
    tags: ["styles.detroit_style_classic_tag_pan", "styles.detroit_style_classic_tag_frico", "styles.detroit_style_classic_tag_deep", "styles.detroit_style_classic_tag_detroit"],
    pairings: {
        canonical: ['Wisconsin brick cheese'],
        modern: ['Hot honey'],
        regional: ['Coney island hot dog pizza']
    },
    watchouts: [
        "styles.detroit_style_classic_watchout_soggy",
        "styles.detroit_style_classic_watchout_nofrico",
        "styles.detroit_style_classic_watchout_dense"
    ],
    notes: [
        "styles.detroit_style_classic_note_1",
        "styles.detroit_style_classic_note_2",
        "styles.detroit_style_classic_note_3"
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Buddy's Archives" }],
    images: {
        hero: "/images/styles/detroit-style-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'styles.detroit_style_classic_tip_frico',
                explanation: "styles.detroit_style_classic_tip_frico_exp"
            },
            {
                tip: 'styles.detroit_style_classic_tip_parbake',
                explanation: "styles.detroit_style_classic_tip_parbake_exp"
            }
        ],
        what_if: [
            {
                scenario: "styles.detroit_style_classic_wi_raw_scen",
                result: 'styles.detroit_style_classic_wi_raw_res',
                correction: "styles.detroit_style_classic_wi_raw_corr"
            },
            {
                scenario: 'styles.detroit_style_classic_wi_cheese_scen',
                result: 'styles.detroit_style_classic_wi_cheese_res',
                correction: "styles.detroit_style_classic_wi_cheese_corr"
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Sicilian',
                difference: "styles.detroit_style_classic_comp_sicilian_diff",
                why_choose_this: "styles.detroit_style_classic_comp_sicilian_why"
            }
        ],
        q_and_a: [
            {
                question: 'styles.detroit_style_classic_qa_pans_q',
                answer: "styles.detroit_style_classic_qa_pans_a",
                context: 'styles.detroit_style_classic_qa_pans_ctx'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Authentic',
                notes: 'styles.detroit_style_classic_ferm_direct_notes'
            }
        ]
    },
    deepDive: {
        hydrationLogic: "styles.detroit_style_classic_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "styles.detroit_style_classic_method_direct_notes" },
            biga: { suitable: false, notes: "styles.detroit_style_classic_method_biga_notes" },
            poolish: { suitable: true, notes: "styles.detroit_style_classic_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: "styles.detroit_style_classic_dd_wi_raw_scen",
                outcome: 'styles.detroit_style_classic_dd_wi_raw_out',
                solution: 'styles.detroit_style_classic_dd_wi_raw_sol'
            },
            {
                scenario: "styles.detroit_style_classic_dd_wi_nofrico_scen",
                outcome: "styles.detroit_style_classic_dd_wi_nofrico_out",
                solution: "styles.detroit_style_classic_dd_wi_nofrico_sol"
            }
        ],
        comparisons: [
            {
                vsStyle: 'Chicago Deep Dish',
                difference: 'styles.detroit_style_classic_dd_comp_chicago_diff'
            }
        ],
        proTips: [
            "styles.detroit_style_classic_dd_tip_1",
            "styles.detroit_style_classic_dd_tip_2"
        ]
    }
};

const chicagoDeepDish: DoughStyleDefinition = {
    id: "chicago_deep_dish",
    name: 'styles.chicago_deep_dish_name',
    category: "pizza",
    recipeStyle: RecipeStyle.CHICAGO_DEEP_DISH,
    origin: {
        country: 'USA',
        region: 'Chicago, Illinois',
        period: "1943"
    },
    description: "styles.chicago_deep_dish_desc",
    history: "styles.chicago_deep_dish_history",
    base_formula: [
        { name: 'styles.ingredients_flour_ap', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 54 },
        { name: 'styles.ingredients_salt', percentage: 1.8 },
        { name: 'styles.ingredients_oil_corn', percentage: 20 },
        { name: 'styles.ingredients_sugar', percentage: 1.5 },
        { name: 'styles.ingredients_yeast_dry', percentage: 0.5 }
    ],
    difficulty: 'Medium',
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 58],
        salt: [1.5, 2.0],
        oil: [15, 25], // Often Corn Oil or Butter
        sugar: [1, 2],
        flourStrength: "W240-280 (AP/Pastry blend)",
        ovenTemp: [220, 230],
        recommendedUse: ['Sausage patty', 'Spinach'],
        difficulty: 'Medium',
        ballWeight: { recommended: 800, min: 600, max: 1200 },
        fermentationSteps: [
            "styles.chicago_deep_dish_ferm_step_1",
            "styles.chicago_deep_dish_ferm_step_2",
            "styles.chicago_deep_dish_ferm_step_3"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W240 (AP/Biscuit)",
            pl_ratio: "Short (High Fat)",
            absorption_capacity: 'Low',
            protein_type: "AP/Pastry Blend",
            science_explanation: "styles.chicago_deep_dish_science_flour"
        },
        thermalProfile: {
            oven_type: 'Deep pan',
            heat_distribution: "Conduction (Slow)",
            crust_development: "Fried/Biscuit",
            crumb_structure: 'Dense flaky'
        },
        fermentationScience: {
            yeast_activity: 'Low',
            ph_target: 'Neutral',
            organic_acids: 'None',
            enzymatic_activity: 'Low'
        }
    },
    tags: ["styles.chicago_deep_dish_tag_casserole", "styles.chicago_deep_dish_tag_biscuit", "styles.chicago_deep_dish_tag_corn"],
    pairings: {
        canonical: ['Italian sausage layer', 'Chunky tomato sauce'],
        modern: ['Giardiniera'],
        regional: ['Butter Crust (Lou\'s style)']
    },
    watchouts: [
        "styles.chicago_deep_dish_watchout_soggy",
        "styles.chicago_deep_dish_watchout_burned",
        "styles.chicago_deep_dish_watchout_tough"
    ],
    notes: [
        "styles.chicago_deep_dish_note_1",
        "styles.chicago_deep_dish_note_2",
        "styles.chicago_deep_dish_note_3"
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Pizzeria uno history' }],
    images: {
        hero: "/images/styles/chicago_deep_dish_real.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'styles.chicago_deep_dish_tip_biscuit',
                explanation: "styles.chicago_deep_dish_tip_biscuit_exp"
            },
            {
                tip: 'styles.chicago_deep_dish_tip_oil',
                explanation: "styles.chicago_deep_dish_tip_oil_exp"
            }
        ],
        what_if: [
            {
                scenario: 'styles.chicago_deep_dish_wi_shrink_scen',
                result: 'styles.chicago_deep_dish_wi_shrink_res',
                correction: 'styles.chicago_deep_dish_wi_shrink_corr'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Pan Pizza',
                difference: "styles.chicago_deep_dish_comp_pan_diff",
                why_choose_this: 'styles.chicago_deep_dish_comp_pan_why'
            }
        ],
        q_and_a: [
            {
                question: 'styles.chicago_deep_dish_qa_sauce_q',
                answer: "styles.chicago_deep_dish_qa_sauce_a",
                context: 'styles.chicago_deep_dish_qa_sauce_ctx'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Authentic',
                notes: 'styles.chicago_deep_dish_ferm_direct_notes'
            }
        ]
    },
    deepDive: {
        hydrationLogic: "styles.chicago_deep_dish_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "styles.chicago_deep_dish_method_direct_notes" },
            biga: { suitable: false, notes: "styles.chicago_deep_dish_method_biga_notes" },
            poolish: { suitable: false, notes: "styles.chicago_deep_dish_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: "styles.chicago_deep_dish_dd_wi_tough_scen",
                outcome: 'styles.chicago_deep_dish_dd_wi_tough_out',
                solution: 'styles.chicago_deep_dish_dd_wi_tough_sol'
            },
            {
                scenario: 'styles.chicago_deep_dish_dd_wi_soggy_scen',
                outcome: 'styles.chicago_deep_dish_dd_wi_soggy_out',
                solution: "styles.chicago_deep_dish_dd_wi_soggy_sol"
            }
        ],
        comparisons: [
            {
                vsStyle: "Pan Pizza (Hut/Detroit)",
                difference: "styles.chicago_deep_dish_dd_comp_pan_diff"
            }
        ],
        proTips: [
            "styles.chicago_deep_dish_dd_tip_1",
            "styles.chicago_deep_dish_dd_tip_2"
        ]
    }
};



const sfSourdough: DoughStyleDefinition = {
    id: "sf_sourdough",
    name: 'styles.san_francisco_sourdough_name',
    category: "bread",
    recipeStyle: RecipeStyle.SOURDOUGH,
    origin: {
        country: 'USA',
        region: 'San Francisco, CA',
        period: "1849 (Gold Rush)"
    },
    description: "styles.san_francisco_sourdough_desc",
    history: "styles.san_francisco_sourdough_history",
    base_formula: [
        { name: 'styles.ingredients_flour_high_gluten', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 75 },
        { name: 'styles.ingredients_salt', percentage: 2.2 },
        { name: 'styles.ingredients_sourdough', percentage: 20 }
    ],
    difficulty: 'Expert',
    fermentationType: "levain",

    technicalProfile: {
        hydration: [70, 78],
        salt: [2.0, 2.2],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: 'W300350',
        ovenTemp: [230, 260],
        recommendedUse: ['Clam chowder bowl', 'Toast'],
        difficulty: 'Expert',
        ballWeight: { recommended: 900, min: 700, max: 1100 },
        fermentationSteps: [
            "styles.sf_sourdough_ferm_step_1",
            "styles.sf_sourdough_ferm_step_2",
            "styles.sf_sourdough_ferm_step_3"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W380+ (Very Strong)",
            pl_ratio: "Balanced",
            absorption_capacity: 'Extreme',
            protein_type: "Malted Bread/High Gluten",
            science_explanation: "styles.sf_sourdough_science_flour"
        },
        thermalProfile: {
            oven_type: "Dutch Oven / Hearth",
            heat_distribution: 'Radiant  steam',
            crust_development: 'Blistered thick',
            crumb_structure: 'Wild irregular'
        },
        fermentationScience: {
            yeast_activity: "Wild (Levain)",
            ph_target: "pH 4.0-4.5",
            organic_acids: "Acetic Dominant (Stiff Starter)",
            enzymatic_activity: "Very High (Proteolysis)"
        }
    },
    tags: ["styles.sf_sourdough_tag_sour", "styles.sf_sourdough_tag_wild", "styles.sf_sourdough_tag_gold", "styles.sf_sourdough_tag_sf"],
    pairings: {
        canonical: ['Clam chowder', 'Dungeness crab'],
        modern: ['Avocado'],
        regional: ['Seafood cioppino']
    },
    watchouts: [
        "styles.sf_sourdough_watchout_sour",
        "styles.sf_sourdough_watchout_flat",
        "styles.sf_sourdough_watchout_pale"
    ],
    notes: [
        "styles.sf_sourdough_note_1",
        "styles.sf_sourdough_note_2",
        "styles.sf_sourdough_note_3"
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Boudin history' }, { source: 'Microbiology of sourdough' }],
    images: {
        hero: "/images/styles/sf_sourdough_real.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "styles.sf_sourdough_tip_tartine",
                explanation: "styles.sf_sourdough_tip_tartine_exp"
            },
            {
                tip: 'styles.sf_sourdough_tip_steam',
                explanation: "styles.sf_sourdough_tip_steam_exp"
            }
        ],
        what_if: [
            {
                scenario: "styles.sf_sourdough_wi_sour_scen",
                result: "styles.sf_sourdough_wi_sour_res",
                correction: "styles.sf_sourdough_wi_sour_corr"
            },
            {
                scenario: "styles.sf_sourdough_wi_ear_scen",
                result: 'styles.sf_sourdough_wi_ear_res',
                correction: 'styles.sf_sourdough_wi_ear_corr'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'French baguette',
                difference: "styles.sf_sourdough_comp_baguette_diff",
                why_choose_this: 'styles.sf_sourdough_comp_baguette_why'
            }
        ],
        q_and_a: [
            {
                question: "styles.sf_sourdough_qa_bacteria_q",
                answer: "styles.sf_sourdough_qa_bacteria_a",
                context: 'styles.sf_sourdough_qa_bacteria_ctx'
            }
        ],
        fermentation_methods: [
            {
                method: 'Sourdough',
                suitability: 'Authentic',
                notes: 'styles.sf_sourdough_ferm_sourdough_notes'
            }
        ]
    },
    deepDive: {
        hydrationLogic: "styles.sf_sourdough_dd_hydration",
        methodSuitability: {
            direct: { suitable: false, notes: "styles.sf_sourdough_method_direct_notes" },
            biga: { suitable: false, notes: "styles.sf_sourdough_method_biga_notes" },
            poolish: { suitable: false, notes: "styles.sf_sourdough_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: "styles.sf_sourdough_dd_wi_dense_scen",
                outcome: 'styles.sf_sourdough_dd_wi_dense_out',
                solution: "styles.sf_sourdough_dd_wi_dense_sol"
            },
            {
                scenario: "styles.sf_sourdough_dd_wi_vinegar_scen",
                outcome: "styles.sf_sourdough_dd_wi_vinegar_out",
                solution: "styles.sf_sourdough_dd_wi_vinegar_sol"
            }
        ],
        comparisons: [
            {
                vsStyle: 'Pane toscano',
                difference: "styles.sf_sourdough_dd_comp_toscano_diff"
            }
        ],
        proTips: [
            "styles.sf_sourdough_dd_tip_1",
            "styles.sf_sourdough_dd_tip_2"
        ]
    }
};

const newHavenApizza: DoughStyleDefinition = {
    id: "new_haven_apizza",
    name: 'styles.new_haven_apizza_name',
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    origin: {
        country: 'USA',
        region: 'New Haven, CT',
        period: "1925"
    },
    description: "styles.new_haven_apizza_desc",
    history: "styles.new_haven_apizza_history",
    base_formula: [
        { name: 'styles.ingredients_flour_bread', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 63 },
        { name: 'styles.ingredients_salt', percentage: 2.2 },
        { name: 'styles.ingredients_yeast_fresh', percentage: 0.3 }
    ],
    difficulty: 'Hard',
    fermentationType: "cold",

    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: 'W300-340',
        ovenTemp: [315, 350], // Domestic adaptation target. Real ovens are 600F+
        recommendedUse: ['White clam pie'],
        difficulty: 'Hard',
        ballWeight: { recommended: 350, min: 300, max: 450 },
        fermentationSteps: [
            "styles.new_haven_apizza_ferm_step_1",
            "styles.new_haven_apizza_ferm_step_2",
            "styles.new_haven_apizza_ferm_step_3"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W320-350 (High Gluten)",
            pl_ratio: 'Extensible',
            absorption_capacity: 'High',
            protein_type: "High Gluten (e.g., All Trumps)",
            science_explanation: "styles.new_haven_apizza_science_flour"
        },
        thermalProfile: {
            oven_type: 'Coal fired deck',
            heat_distribution: "Intense Radiation (600°F+)",
            crust_development: 'Charred dry',
            crumb_structure: 'Chewy uneven'
        },
        fermentationScience: {
            yeast_activity: 'Retarded',
            ph_target: 'Normal',
            organic_acids: 'Balanced',
            enzymatic_activity: "High (Maillard fuel)"
        }
    },
    tags: ["styles.new_haven_apizza_tag_coal", "styles.new_haven_apizza_tag_char", "styles.new_haven_apizza_tag_clam", "styles.new_haven_apizza_tag_ct"],
    pairings: {
        canonical: ['Littleneck clams', 'Garlic', 'Oregano', 'Pecorino'],
        modern: ['Bacon'],
        regional: ['Foxon park soda']
    },
    watchouts: [
        "styles.new_haven_apizza_watchout_sooty",
        "styles.new_haven_apizza_watchout_soggy",
        "styles.new_haven_apizza_watchout_thick"],
    notes: [
        "styles.new_haven_apizza_note_1",
        "styles.new_haven_apizza_note_2",
        "styles.new_haven_apizza_note_3"
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Frank pepe history' }, { source: 'Pizza City USA' }],
    images: {
        hero: "/images/styles/new_haven_apizza_real.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'styles.new_haven_apizza_tip_oblong',
                explanation: "styles.new_haven_apizza_tip_oblong_exp"
            },
            {
                tip: 'styles.new_haven_apizza_tip_darker',
                explanation: "styles.new_haven_apizza_tip_darker_exp"
            }
        ],
        what_if: [
            {
                scenario: 'styles.new_haven_apizza_wi_oven_scen',
                result: "styles.new_haven_apizza_wi_oven_res",
                correction: 'styles.new_haven_apizza_wi_oven_corr'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Nyc slice',
                difference: "styles.new_haven_apizza_comp_nyc_diff",
                why_choose_this: 'styles.new_haven_apizza_comp_nyc_why'
            }
        ],
        q_and_a: [
            {
                question: "styles.new_haven_apizza_qa_mozz_q",
                answer: "styles.new_haven_apizza_qa_mozz_a",
                context: 'styles.new_haven_apizza_qa_mozz_ctx'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "styles.new_haven_apizza_ferm_direct_notes"
            }
        ]
    },
    deepDive: {
        hydrationLogic: "styles.new_haven_apizza_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "styles.new_haven_apizza_method_direct_notes" },
            biga: { suitable: false, notes: "styles.new_haven_apizza_method_biga_notes" },
            poolish: { suitable: false, notes: "styles.new_haven_apizza_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'styles.new_haven_apizza_dd_wi_burn_scen',
                outcome: 'styles.new_haven_apizza_dd_wi_burn_out',
                solution: 'styles.new_haven_apizza_dd_wi_burn_sol'
            },
            {
                scenario: 'styles.new_haven_apizza_dd_wi_soggy_scen',
                outcome: "styles.new_haven_apizza_dd_wi_soggy_out",
                solution: 'styles.new_haven_apizza_dd_wi_soggy_sol'
            }
        ],
        comparisons: [
            {
                vsStyle: 'NYC slice',
                difference: "styles.new_haven_apizza_dd_comp_nyc_diff"
            }
        ],
        proTips: [
            "styles.new_haven_apizza_dd_tip_1",
            "styles.new_haven_apizza_dd_tip_2"
        ]
    }
};


const nycBagel: DoughStyleDefinition = {
    id: "nyc_bagel",
    name: 'styles.nyc_bagel_name',
    category: "bread",
    recipeStyle: RecipeStyle.BAGEL,
    origin: {
        country: 'USA',
        region: 'New york city 5',
        period: 'Late 19th century'
    },
    description: "styles.nyc_bagel_desc",
    history: "styles.nyc_bagel_history",
    base_formula: [
        { name: 'styles.ingredients_flour_high_gluten', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 52 },
        { name: 'styles.ingredients_salt', percentage: 2.2 },
        { name: 'styles.ingredients_sugar_malt', percentage: 1.5 },
        { name: 'styles.ingredients_yeast_fresh', percentage: 0.5 }
    ],
    difficulty: 'Hard',
    fermentationType: "cold",

    technicalProfile: {
        hydration: [50, 55],
        salt: [2.0, 2.2],
        oil: [1, 2],
        sugar: [2, 4], // Malt Syrup
        flourStrength: "W380-420 (High Gluten)",
        ovenTemp: [240, 260],
        recommendedUse: ['Cream cheese  lox', 'Bacon egg cheese'],
        difficulty: 'Hard',
        ballWeight: { recommended: 120, min: 100, max: 150 },
        fermentationSteps: [
            "styles.nyc_bagel_ferm_step_1",
            "styles.nyc_bagel_ferm_step_2",
            "styles.nyc_bagel_ferm_step_3",
            "styles.nyc_bagel_ferm_step_4"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W380+ (Specially Milled)",
            pl_ratio: "Tenacious (Elastic)",
            absorption_capacity: 'Moderate',
            protein_type: "High Gluten (14.5%)",
            science_explanation: "styles.nyc_bagel_science_flour"
        },
        thermalProfile: {
            oven_type: "Revolving Deck / Boards",
            heat_distribution: "Convection/Radiant",
            crust_development: "Shiny, Blistered (Gelatinized)",
            crumb_structure: 'Dense tight 2'
        },
        fermentationScience: {
            yeast_activity: "Retarded (Cold)",
            ph_target: 'Normal',
            organic_acids: "Low (Direct)",
            enzymatic_activity: "Enhanced (Malt)"
        }
    },
    tags: ["styles.nyc_bagel_tag_bagel", "styles.nyc_bagel_tag_boiled", "styles.nyc_bagel_tag_malty", "styles.nyc_bagel_tag_nyc"],
    pairings: {
        canonical: ['Lox', 'Capers', 'Red onion'],
        modern: [],
        regional: ['Everything seasoning']
    },
    watchouts: [
        "styles.nyc_bagel_watchout_wrinkled",
        "styles.nyc_bagel_watchout_flat",
        "styles.nyc_bagel_watchout_soft"
    ],
    notes: [
        "styles.nyc_bagel_note_1",
        "styles.nyc_bagel_note_2",
        "styles.nyc_bagel_note_3"
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Bagel union regulations' }],
    images: {
        hero: "/images/styles/nyc-bagel-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'styles.nyc_bagel_tip_alkaline',
                explanation: "styles.nyc_bagel_tip_alkaline_exp"
            },
            {
                tip: 'styles.nyc_bagel_tip_shape',
                explanation: "styles.nyc_bagel_tip_shape_exp"
            }
        ],
        what_if: [
            {
                scenario: 'styles.nyc_bagel_wi_wrinkle_scen',
                result: 'styles.nyc_bagel_wi_wrinkle_res',
                correction: 'styles.nyc_bagel_wi_wrinkle_corr'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Montreal bagel',
                difference: "styles.nyc_bagel_comp_montreal_diff",
                why_choose_this: 'styles.nyc_bagel_comp_montreal_why'
            }
        ],
        q_and_a: [
            {
                question: 'styles.nyc_bagel_qa_malt_q',
                answer: "styles.nyc_bagel_qa_malt_a",
                context: 'styles.nyc_bagel_qa_malt_ctx'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Authentic',
                notes: 'styles.nyc_bagel_ferm_direct_notes'
            }
        ]
    },
    deepDive: {
        hydrationLogic: "styles.nyc_bagel_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "styles.nyc_bagel_method_direct_notes" },
            biga: { suitable: true, notes: "styles.nyc_bagel_method_biga_notes" },
            poolish: { suitable: false, notes: "styles.nyc_bagel_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'styles.nyc_bagel_dd_wi_prune_scen',
                outcome: 'styles.nyc_bagel_dd_wi_prune_out',
                solution: 'styles.nyc_bagel_dd_wi_prune_sol'
            },
            {
                scenario: 'styles.nyc_bagel_dd_wi_shine_scen',
                outcome: "styles.nyc_bagel_dd_wi_shine_out",
                solution: 'styles.nyc_bagel_dd_wi_shine_sol'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Montreal bagel 2',
                difference: "styles.nyc_bagel_dd_comp_montreal_diff"
            }
        ],
        proTips: [
            "styles.nyc_bagel_dd_tip_1",
            "styles.nyc_bagel_dd_tip_2"]
    }
};

const grandmaPizza: DoughStyleDefinition = {
    id: "grandma_style_v2",
    name: 'styles.grandma_pizza_2',
    category: "pizza",
    recipeStyle: RecipeStyle.GRANDMA_STYLE,
    family: 'Flatbreads  pizzas 5',
    origin: {
        country: 'USA',
        region: 'Long island ny 2',
        period: "1970s"
    },
    description: "styles.grandma_pizza_desc",
    history: "styles.grandma_pizza_history",
    base_formula: [
        { name: 'styles.ingredients_flour_bread', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 65 },
        { name: 'styles.ingredients_salt', percentage: 2.2 },
        { name: 'styles.ingredients_oil', percentage: 3 },
        { name: 'styles.ingredients_yeast_fresh', percentage: 0.5 }
    ],
    difficulty: 'Easy',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [3.0, 5.0], // High oil in dough + pan
        sugar: [1.0, 3.0],
        flourStrength: "All Purpose or Bread (11-12%)",
        ovenTemp: [230, 260],
        recommendedUse: ['Classic tomato  garlic 2', 'Vodka sauce 4'],
        difficulty: 'Easy',
        fermentationSteps: [
            "styles.grandma_style_v2_ferm_step_1",
            "styles.grandma_style_v2_ferm_step_2",
            "styles.grandma_style_v2_ferm_step_3"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W260 (AP)",
            pl_ratio: 'Extensible',
            absorption_capacity: 'Medium',
            protein_type: 'All-Purpose',
            science_explanation: "styles.grandma_pizza_science_flour"
        },
        thermalProfile: {
            oven_type: "Home Oven (Sheet Pan)",
            heat_distribution: "Conduction (Oil)",
            crust_development: 'Fried bottom',
            crumb_structure: 'Dense soft'
        },
        fermentationScience: {
            yeast_activity: "Fast (Warm)",
            ph_target: 'Normal',
            organic_acids: 'None',
            enzymatic_activity: "High (Sugar/Oil)"
        }
    },
    tags: ["styles.grandma_pizza_tag_pizza", "styles.grandma_pizza_tag_pan", "styles.grandma_pizza_tag_italian_american", "styles.grandma_pizza_tag_beginner", "styles.grandma_pizza_tag_thin"],
    pairings: {
        canonical: ['Garlic 3', 'Crushed tomatoes 2', 'Mozzarella 3', 'Olive oil 4'],
        modern: ['Pesto 2', 'Fresh mozzarella 2'],
        regional: ['None 12']
    },
    watchouts: [
        "styles.grandma_pizza_watchout_stick",
        "styles.grandma_pizza_watchout_soggy",
        "styles.grandma_pizza_watchout_bland"
    ],
    notes: [
        "styles.grandma_pizza_note_1",
        "styles.grandma_pizza_note_2",
        "styles.grandma_pizza_note_3"
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Pizza History (Long Island)" }],
    images: {
        hero: "/images/styles/grandma-pizza-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'styles.grandma_pizza_tip_fried',
                explanation: "styles.grandma_pizza_tip_fried_exp"
            },
            {
                tip: 'styles.grandma_pizza_tip_short',
                explanation: "styles.grandma_pizza_tip_short_exp"
            }
        ],
        what_if: [
            {
                scenario: 'styles.grandma_pizza_wi_spring_scen',
                result: 'styles.grandma_pizza_wi_spring_res',
                correction: "styles.grandma_pizza_wi_spring_corr"
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Sicilian 2',
                difference: "styles.grandma_pizza_comp_sicilian_diff",
                why_choose_this: 'styles.grandma_pizza_comp_sicilian_why'
            }
        ],
        q_and_a: [
            {
                question: "styles.grandma_pizza_qa_grandma_q",
                answer: "styles.grandma_pizza_qa_grandma_a",
                context: 'styles.grandma_pizza_qa_grandma_ctx'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Authentic',
                notes: "styles.grandma_pizza_ferm_direct_notes"
            }
        ]
    },
    deepDive: {
        hydrationLogic: "styles.grandma_style_v2_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "styles.grandma_style_v2_method_direct_notes" },
            biga: { suitable: false, notes: "styles.grandma_style_v2_method_biga_notes" },
            poolish: { suitable: false, notes: "styles.grandma_style_v2_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'styles.grandma_pizza_dd_wi_stick_scen',
                outcome: 'styles.grandma_pizza_dd_wi_stick_out',
                solution: 'styles.grandma_pizza_dd_wi_stick_sol'
            },
            {
                scenario: 'styles.grandma_pizza_dd_wi_soggy_scen',
                outcome: 'styles.grandma_pizza_dd_wi_soggy_out',
                solution: 'styles.grandma_pizza_dd_wi_soggy_sol'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Sicilian 3',
                difference: 'styles.grandma_pizza_dd_comp_sicilian_diff'
            }
        ],
        proTips: [
            "styles.grandma_pizza_dd_tip_1",
            "styles.grandma_pizza_dd_tip_2"]
    }
};

const chicagoTavern: DoughStyleDefinition = {
    id: "chicago_tavern_v2",
    name: 'styles.chicago_tavern_style_2',
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    family: 'Flatbreads  pizzas 6',
    origin: {
        country: 'Usa 16',
        region: "Chicago / Midwest",
        period: "1940s"
    },
    description: "styles.chicago_tavern_desc",
    history: "styles.chicago_tavern_history",
    base_formula: [
        { name: 'styles.ingredients_flour_ap', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 48 },
        { name: 'styles.ingredients_salt', percentage: 1.5 },
        { name: 'styles.ingredients_oil', percentage: 5 },
        { name: 'styles.ingredients_sugar', percentage: 1 },
        { name: 'styles.ingredients_yeast_dry', percentage: 0.5 }
    ],
    difficulty: 'Medium',
    fermentationType: "cold",
    technicalProfile: {
        hydration: [45, 50],
        salt: [1.5, 2.0],
        oil: [0, 5.0], // Often corn oil or shortening
        sugar: [1.0, 2.0],
        flourStrength: "All Purpose or High Gluten (Variable)",
        ovenTemp: [260, 290],
        recommendedUse: ['Sausage  giardiniera 2', 'Pepperoni 6'],
        difficulty: 'Medium',
        fermentationSteps: [
            "styles.chicago_tavern_v2_ferm_step_1",
            "styles.chicago_tavern_v2_ferm_step_2",
            "styles.chicago_tavern_v2_ferm_step_3",
            "styles.chicago_tavern_v2_ferm_step_4"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W220 (Low protein)",
            pl_ratio: "Short",
            absorption_capacity: 'Low',
            protein_type: 'AP/Pastry',
            science_explanation: "styles.chicago_tavern_science_flour"
        },
        thermalProfile: {
            oven_type: "Deck / Stone",
            heat_distribution: 'Conduction',
            crust_development: 'Crackerlike dry',
            crumb_structure: "None (Laminated/Flat)"
        },
        fermentationScience: {
            yeast_activity: "Inhibited (Dry/Cold)",
            ph_target: 'Normal',
            organic_acids: 'None',
            enzymatic_activity: 'Low'
        }
    },
    tags: ["styles.chicago_tavern_v2_tag_pizza", "styles.chicago_tavern_v2_tag_american", "styles.chicago_tavern_v2_tag_midwest", "styles.chicago_tavern_v2_tag_thin", "styles.chicago_tavern_v2_tag_party", "styles.chicago_tavern_v2_tag_cracker"],
    pairings: {
        canonical: ['Fennel sausage 2', 'Giardiniera 3', 'Mozzarella 4'],
        modern: ['Italian beef 2'],
        regional: ['Old style beer 2']
    },
    watchouts: [
        "styles.chicago_tavern_v2_watchout_bubble",
        "styles.chicago_tavern_v2_watchout_soggy",
        "styles.chicago_tavern_v2_watchout_tough"
    ],
    notes: [
        "styles.chicago_tavern_v2_note_1",
        "styles.chicago_tavern_v2_note_2",
        "styles.chicago_tavern_v2_note_3"
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [
        { source: "Pizza city usa 3, author: Steve dolinsky 2" }
    ],
    images: {
        hero: "/images/styles/chicago-tavern-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'styles.chicago_tavern_v2_tip_cure',
                explanation: "styles.chicago_tavern_v2_tip_cure_exp"
            },
            {
                tip: 'styles.chicago_tavern_v2_tip_dock',
                explanation: "styles.chicago_tavern_v2_tip_dock_exp"
            }
        ],
        what_if: [
            {
                scenario: 'styles.chicago_tavern_v2_wi_chewy_scen',
                result: "styles.chicago_tavern_v2_wi_chewy_res",
                correction: 'styles.chicago_tavern_v2_wi_chewy_corr'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Nyc slice 3',
                difference: "styles.chicago_tavern_v2_comp_nyc_diff",
                why_choose_this: 'styles.chicago_tavern_v2_comp_nyc_why'
            }
        ],
        q_and_a: [
            {
                question: 'styles.chicago_tavern_v2_qa_party_q',
                answer: "styles.chicago_tavern_v2_qa_party_a",
                context: 'styles.chicago_tavern_v2_qa_party_ctx'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Possible',
                notes: "styles.chicago_tavern_v2_ferm_direct_notes"
            }
        ]
    },
    deepDive: {
        hydrationLogic: "styles.chicago_tavern_v2_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "styles.chicago_tavern_v2_method_direct_notes" },
            biga: { suitable: false, notes: "styles.chicago_tavern_v2_method_biga_notes" },
            poolish: { suitable: false, notes: "styles.chicago_tavern_v2_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'styles.chicago_tavern_v2_dd_wi_pita_scen',
                outcome: "styles.chicago_tavern_v2_dd_wi_pita_out",
                solution: 'styles.chicago_tavern_v2_dd_wi_pita_sol'
            },
            {
                scenario: 'styles.chicago_tavern_v2_dd_wi_chewy_scen',
                outcome: "styles.chicago_tavern_v2_dd_wi_chewy_out",
                solution: 'styles.chicago_tavern_v2_dd_wi_chewy_sol'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Deep dish',
                difference: 'styles.chicago_tavern_v2_dd_comp_deep_diff'
            }
        ],
        proTips: [
            "styles.chicago_tavern_v2_dd_tip_1",
            "styles.chicago_tavern_v2_dd_tip_2"
        ]
    }
};

const montrealBagel: DoughStyleDefinition = {
    id: "montreal_bagel",
    name: 'styles.montreal_bagel',
    category: "bread",
    recipeStyle: RecipeStyle.BAGEL,
    origin: {
        country: 'Canada',
        region: 'Montreal quebec',
        period: "1919"
    },
    description: "styles.montreal_bagel_desc",
    history: "styles.montreal_bagel_history",
    base_formula: [
        { name: 'styles.ingredients_flour_bread', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 50 },
        { name: 'styles.ingredients_egg', percentage: 5 },
        { name: 'styles.ingredients_sugar', percentage: 4 },
        { name: 'styles.ingredients_oil', percentage: 2 },
        { name: 'styles.ingredients_yeast_fresh', percentage: 0.5 }
    ],
    difficulty: 'Hard',
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 55],
        salt: [0, 0],
        oil: [1, 2],
        sugar: [2, 4],
        flourStrength: 'W300350 3',
        ovenTemp: [260, 300],
        recommendedUse: ['Cream cheese', 'Smoked salmon'],
        difficulty: 'Hard',
        fermentationSteps: [
            "styles.montreal_bagel_ferm_step_1",
            "styles.montreal_bagel_ferm_step_2",
            "styles.montreal_bagel_ferm_step_3"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W300+",
            pl_ratio: "P/L > 0.6",
            absorption_capacity: 'Moderate',
            protein_type: 'Bread',
            science_explanation: "styles.montreal_bagel_science_flour"
        },
        thermalProfile: {
            oven_type: 'Wood fired 2',
            heat_distribution: 'Radiant',
            crust_development: 'Crisp shiny',
            crumb_structure: 'Dense 2'
        },
        fermentationScience: {
            yeast_activity: "Fast (No salt)",
            ph_target: 'Normal',
            organic_acids: 'Low',
            enzymatic_activity: 'Standard'
        }
    },
    tags: ["styles.montreal_bagel_tag_honey", "styles.montreal_bagel_tag_nosalt", "styles.montreal_bagel_tag_wood", "styles.montreal_bagel_tag_canada"],
    pairings: {
        canonical: ['Cream cheese 2', 'Smoked meat'],
        modern: ['Peanut butter'],
        regional: ['Montreal smoked meat']
    },
    watchouts: ["styles.montreal_bagel_watchout"],
    notes: ['styles.montreal_bagel_note'],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Fairmount bagel' }],
    images: {
        hero: "/images/styles/montreal-bagel-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [{ tip: 'styles.montreal_bagel_tip_honey', explanation: 'styles.montreal_bagel_tip_honey_exp' }],
        what_if: [{ scenario: 'styles.montreal_bagel_wi_salt_scen', result: "styles.montreal_bagel_wi_salt_res", correction: 'styles.montreal_bagel_wi_salt_corr' }],
        comparative_analysis: [{ target_style: 'Nyc slice', difference: 'styles.montreal_bagel_comp_nyc_diff', why_choose_this: 'styles.montreal_bagel_comp_nyc_why' }],
        q_and_a: [{ question: 'styles.montreal_bagel_qa_tradition_q', answer: 'styles.montreal_bagel_qa_tradition_a', context: 'styles.montreal_bagel_qa_tradition_ctx' }],
        fermentation_methods: [{ method: 'Direct', suitability: 'Possible', notes: 'styles.montreal_bagel_ferm_direct_notes' }]
    },
    deepDive: {
        hydrationLogic: "styles.montreal_bagel_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "styles.montreal_bagel_method_direct_notes" },
            biga: { suitable: false, notes: "styles.montreal_bagel_method_biga_notes" },
            poolish: { suitable: false, notes: "styles.montreal_bagel_method_poolish_notes" }
        },
        whatIf: [{ scenario: 'styles.montreal_bagel_dd_wi_proof_scen', outcome: 'styles.montreal_bagel_dd_wi_proof_out', solution: 'styles.montreal_bagel_dd_wi_proof_sol' }],
        comparisons: [{ vsStyle: 'NYC Bagel', difference: 'styles.montreal_bagel_dd_comp_nyc_diff' }],
        proTips: ['styles.montreal_bagel_dd_tip_1', 'styles.montreal_bagel_dd_tip_2']
    }
};

const flourTortilla: DoughStyleDefinition = {
    id: "flour_tortilla_sonora",
    name: "styles.flour_tortilla_sonora",
    category: "flatbread",
    recipeStyle: RecipeStyle.FLATBREAD,
    origin: {
        country: 'Mexico 3',
        region: 'Sonora',
        period: "16th Century"
    },
    description: "styles.flour_tortilla_sonora_desc",
    history: "styles.flour_tortilla_sonora_history",
    base_formula: [
        { name: 'styles.ingredients_flour_ap', percentage: 100 },
        { name: 'styles.ingredients_water', percentage: 50 },
        { name: 'styles.ingredients_lard', percentage: 15 },
        { name: 'styles.ingredients_salt', percentage: 1.5 },
        { name: 'styles.ingredients_baking_powder', percentage: 0.5 }
    ],
    difficulty: 'Medium',
    fermentationType: "direct",

    technicalProfile: {
        hydration: [45, 55],
        salt: [1.5, 2.0],
        oil: [15, 20],
        sugar: [0, 0],
        flourStrength: 'W200240 3',
        ovenTemp: [200, 230],
        recommendedUse: ['Burritos', 'Quesadillas'],
        difficulty: 'Medium',
        fermentationSteps: [
            "styles.flour_tortilla_sonora_ferm_step_1",
            "styles.flour_tortilla_sonora_ferm_step_2",
            "styles.flour_tortilla_sonora_ferm_step_3"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W200",
            pl_ratio: 'Extensible',
            absorption_capacity: 'Low',
            protein_type: 'AP',
            science_explanation: "styles.flour_tortilla_science_flour"
        },
        thermalProfile: {
            oven_type: 'Comal',
            heat_distribution: 'Conduction',
            crust_development: 'Spotted',
            crumb_structure: 'Layered'
        },
        fermentationScience: {
            yeast_activity: 'None',
            ph_target: 'Neutral 9',
            organic_acids: 'None',
            enzymatic_activity: 'None'
        }
    },
    tags: ["styles.flour_tortilla_sonora_tag_lard", "styles.flour_tortilla_sonora_tag_sonora", "styles.flour_tortilla_sonora_tag_mexico"],
    pairings: {
        canonical: ['Carne asada', 'Cheese 2'],
        modern: ['Nutella'],
        regional: ['Burrito percherón']
    },
    watchouts: ["styles.flour_tortilla_sonora_watchout_overcook", "styles.flour_tortilla_sonora_watchout_water"],
    notes: ['styles.flour_tortilla_sonora_note'],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Sonoran heritage' }],
    images: {
        hero: "/images/styles/flour_tortilla_sonora.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [{ tip: 'styles.flour_tortilla_sonora_tip_thin', explanation: 'styles.flour_tortilla_sonora_tip_thin_exp' }],
        what_if: [{ scenario: 'styles.flour_tortilla_sonora_wi_cracker_scen', result: 'styles.flour_tortilla_sonora_wi_cracker_res', correction: 'styles.flour_tortilla_sonora_wi_cracker_corr' }],
        comparative_analysis: [{ target_style: 'Corn Tortilla', difference: 'styles.flour_tortilla_sonora_comp_flour_diff', why_choose_this: 'styles.flour_tortilla_sonora_comp_flour_why' }],
        q_and_a: [{ question: 'styles.flour_tortilla_sonora_qa_lard_q', answer: 'styles.flour_tortilla_sonora_qa_lard_a', context: 'styles.flour_tortilla_sonora_qa_lard_ctx' }],
        fermentation_methods: [{ method: 'Direct', suitability: 'Possible', notes: 'styles.flour_tortilla_sonora_ferm_direct_notes' }]
    },
    deepDive: {
        hydrationLogic: "styles.flour_tortilla_sonora_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "styles.flour_tortilla_sonora_method_direct_notes" },
            biga: { suitable: false, notes: "styles.flour_tortilla_sonora_method_biga_notes" },
            poolish: { suitable: false, notes: "styles.flour_tortilla_sonora_method_poolish_notes" }
        },
        whatIf: [{ scenario: 'styles.flour_tortilla_sonora_dd_wi_rest_scen', outcome: 'styles.flour_tortilla_sonora_dd_wi_rest_out', solution: 'styles.flour_tortilla_sonora_dd_wi_rest_sol' }],
        comparisons: [{ vsStyle: 'Corn Tortilla', difference: 'styles.flour_tortilla_sonora_dd_comp_corn_diff' }],
        proTips: ['styles.flour_tortilla_sonora_dd_tip_1']
    }
};

export const northAmericaStyles: DoughStyleDefinition[] = [
    nycSlice,
    detroitStyle,
    chicagoDeepDish,
    sfSourdough,
    newHavenApizza,
    nycBagel,
    grandmaPizza,
    chicagoTavern,
    montrealBagel,
    flourTortilla
];
