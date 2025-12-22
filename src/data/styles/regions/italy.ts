import { DoughStyle, RecipeStyle } from '@/types/dough';

export const italianStyles: DoughStyle[] = [
    {
        id: "pizza-napoletana",
        name: 'styles.pizza_napoletana',
        region: 'Italy',
        subRegion: 'Naples, Campania',
        category: 'Pizza',
        recipeStyle: RecipeStyle.NEAPOLITAN,
        tags: ['styles.pizza_napoletana_tag_high_heat', 'styles.pizza_napoletana_tag_direct', 'styles.pizza_napoletana_tag_stg', 'styles.pizza_napoletana_tag_wood'],
        description: "styles.pizza_napoletana_desc",
        history_context: "styles.pizza_napoletana_history",
        base_formula: [
            { name: "styles.pizza_napoletana_bf_flour", percentage: 100 },
            { name: 'styles.pizza_napoletana_bf_water', percentage: 60 },
            { name: 'styles.pizza_napoletana_bf_salt', percentage: 2.8 },
            { name: 'styles.pizza_napoletana_bf_yeast', percentage: 0.15 }
        ],
        specs: {
            hydration: { ideal: 60, min: 57, max: 62.5 },
            ovenTemp: { ideal: 450, min: 430, max: 485 },
            fermentationTime: "24h",
            difficulty: 'Expert',
            ballWeight: { recommended: 260, min: 200, max: 280 }
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W280-320",
                pl_ratio: "0.55-0.60 (Extensible)",
                absorption_capacity: "Medium-High (58-65%)",
                protein_type: "Soft Wheat Type 00",
                science_explanation: "styles.pizza_napoletana_science_flour"
            },
            thermalProfile: {
                oven_type: "Wood Fired (Dome)",
                heat_distribution: "High Conduction (Floor) & Radiation",
                crust_development: 'Leopard spotting',
                crumb_structure: 'Airy cornicione thin center'
            },
            fermentationScience: {
                yeast_activity: "Controlled (Room Temp)",
                ph_target: "pH 5.5",
                organic_acids: 'Lactic dominant',
                enzymatic_activity: "High (24h Maturation)"
            },
            processScience: "styles.pizza_napoletana_science_process"
        },
        flavorProfile: {
            primaryFlavors: ["Toasted Bread", "Lactic Tang", "Sweet Wheat", "Charred Crust"],
            aromaProfile: ["Freshly Baked Bread", "Wood Smoke", "Sweet Mozzarella", "Fresh Basil"],
            textureNotes: ["Light & Airy Cornicione", "Soft and Foldable", "Melt-in-mouth center", "Tender Elasticity"],
            pairingRecommendations: ["Classic Margherita (Tomato, Bufala, Basil)", "Marinara (Garlic, Oregano)", "Prosciutto & Arugula after bake"],
            flavorEvolution: ["Fresh yeast & flour notes", "Complex acidity after 24h maturation", "Maillard-rich charred finish"]
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.pizza_napoletana_mix_title',
                duration: "15-20 min",
                action: "styles.pizza_napoletana_mix_action",
                science: "styles.pizza_napoletana_mix_science"
            },
            {
                phase: 'Bulk',
                title: "styles.pizza_napoletana_bulk_title",
                duration: "2-4 hours",
                action: 'styles.pizza_napoletana_bulk_action',
                science: "styles.pizza_napoletana_bulk_science"
            },
            {
                phase: 'Ball',
                title: "styles.pizza_napoletana_ball_title",
                duration: "10-20 min",
                action: 'styles.pizza_napoletana_ball_action',
                science: "styles.pizza_napoletana_ball_science"
            },
            {
                phase: 'Ball',
                title: "styles.pizza_napoletana_appretto_title",
                duration: "16-20 hours",
                action: "styles.pizza_napoletana_appretto_action",
                science: "styles.pizza_napoletana_appretto_science"
            },
            {
                phase: 'Bake',
                title: 'styles.pizza_napoletana_bake_title',
                duration: "60-90 seconds",
                action: 'styles.pizza_napoletana_bake_action',
                science: "styles.pizza_napoletana_bake_science"
            }
        ],
        references: ['Avpn international regulations 2', 'The pizza bible 2'],
        images: {
            hero: "/images/styles/pizza-napoletana.png",
            dough: "/images/styles/pizza-napoletana.png",
            crumb: "/images/styles/pizza-napoletana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: "styles.pizza_napoletana_tip_1",
                    explanation: "styles.pizza_napoletana_tip_1_exp"
                },
                {
                    tip: 'styles.pizza_napoletana_tip_2',
                    explanation: "styles.pizza_napoletana_tip_2_exp"
                }
            ],
            what_if: [
                {
                    scenario: 'styles.pizza_napoletana_wi_hydration_scen',
                    result: 'styles.pizza_napoletana_wi_hydration_res',
                    correction: "styles.pizza_napoletana_wi_hydration_corr"
                },
                {
                    scenario: "styles.pizza_napoletana_wi_oven_scen",
                    result: "styles.pizza_napoletana_wi_oven_res",
                    correction: "styles.pizza_napoletana_wi_oven_corr"
                },
                {
                    scenario: "styles.pizza_napoletana_wi_cold_scen",
                    result: "styles.pizza_napoletana_wi_cold_res",
                    correction: 'styles.pizza_napoletana_wi_cold_corr'
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Roman tonda',
                    difference: "styles.pizza_napoletana_comp_romana_diff",
                    why_choose_this: 'styles.pizza_napoletana_comp_romana_why'
                },
                {
                    target_style: 'Ny style',
                    difference: "styles.pizza_napoletana_comp_ny_diff",
                    why_choose_this: 'styles.pizza_napoletana_comp_ny_why'
                }
            ],
            q_and_a: [
                {
                    question: 'styles.pizza_napoletana_qa_1_q',
                    answer: "styles.pizza_napoletana_qa_1_a",
                    context: 'styles.pizza_napoletana_qa_1_ctx'
                },
                {
                    question: 'styles.pizza_napoletana_qa_2_q',
                    answer: "styles.pizza_napoletana_qa_2_a",
                    context: 'styles.pizza_napoletana_qa_2_ctx'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct',
                    suitability: 'Authentic',
                    notes: 'styles.pizza_napoletana_ferm_direct_notes'
                },
                {
                    method: 'Poolish',
                    suitability: 'Not Recommended',
                    notes: "styles.pizza_napoletana_ferm_poolish_notes"
                },
                {
                    method: 'Biga',
                    suitability: 'Not Recommended',
                    notes: 'styles.pizza_napoletana_ferm_biga_notes'
                }
            ]
        },
        deepDive: {
            hydrationLogic: "styles.pizza_napoletana_dd_hydration",
            methodSuitability: {
                direct: { suitable: true, notes: "styles.pizza_napoletana_method_direct_notes" },
                biga: { suitable: false, notes: "styles.pizza_napoletana_method_biga_notes" },
                poolish: { suitable: false, notes: "styles.pizza_napoletana_method_poolish_notes" }
            },
            whatIf: [
                {
                    scenario: "Lowering temp to 250°C (Home Oven)?",
                    outcome: 'The dough dries out before it browns you get a har',
                    solution: "Add 2-3% sugar and oil to aid browning and softness (Technically becomes NY/Neo-Neapolitan)."
                },
                {
                    scenario: "Using weak flour (All Purpose)?",
                    outcome: 'It cannot withstand the 24h fermentation',
                    solution: "The gluten network will degrade and tear when stretching. Use a specific Pizza/Bread flour."
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Romana tonda',
                    difference: "styles.pizza_napoletana_dd_comp_romana_diff"
                }
            ],
            proTips: [
                "styles.pizza_napoletana_dd_tip_1",
                "styles.pizza_napoletana_dd_tip_2"]
        },
        recommendedFlavorComponents: ["mozzarella_di_bufala", "tomato_sauce_raw", "basil_fresh", "olive_oil_extra_virgin", "pecorino_romano", "parmesan", "oregano_dried", "garlic_fresh", "pepperoni", "italian_sausage"]
    },
    {
        id: "pizza-teglia-romana",
        name: 'styles.pizza_teglia_romana',
        region: 'Italy',
        subRegion: 'Rome, Lazio',
        category: 'Pizza',
        recipeStyle: RecipeStyle.ROMAN,
        tags: ['styles.pizza_teglia_romana_tag_high_hydration', 'styles.pizza_teglia_romana_tag_pan_pizza', 'styles.pizza_teglia_romana_tag_cold_ferment', 'styles.pizza_teglia_romana_tag_airy_crumb'],
        description: "styles.pizza_teglia_romana_desc",
        history_context: "styles.pizza_teglia_romana_history",
        base_formula: [
            { name: "styles.pizza_teglia_romana_bf_flour", percentage: 100 },
            { name: 'styles.ingredients_water', percentage: 80 },
            { name: 'styles.ingredients_salt', percentage: 2.5 },
            { name: 'styles.ingredients_oil_olive', percentage: 2.5 },
            { name: 'styles.ingredients_yeast_dry', percentage: 0.7 }
        ],
        specs: {
            hydration: { ideal: 80, min: 75, max: 90 },
            ovenTemp: { ideal: 250, min: 230, max: 270 },
            fermentationTime: "48-72h",
            difficulty: 'Expert',
            ballWeight: { recommended: 600, min: 300, max: 1200 } // Pan size dependent
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W350+ (Very Strong)",
                pl_ratio: "0.55 (Extensible but Strong)",
                absorption_capacity: "Very High (80%+)",
                protein_type: "Soft Wheat Type 0 or 00",
                science_explanation: "styles.pizza_teglia_romana_science_flour"
            },
            thermalProfile: {
                oven_type: 'Deck oven',
                heat_distribution: "Conduction (Floor)",
                crust_development: "Fried/Crispy Bottom",
                crumb_structure: 'Open alveolated'
            },
            fermentationScience: {
                yeast_activity: "Slow (Cold Retard)",
                ph_target: "Acidic (Protease Activity)",
                organic_acids: "Complex (Cold Ferment)",
                enzymatic_activity: "High (Proteolysis)"
            },
            processScience: "styles.pizza_teglia_romana_science_process"
        },
        flavorProfile: {
            primaryFlavors: ["Nutty Toasted Crust", "Intense Fermentation", "Olive Oil Bloom"],
            aromaProfile: ["Toasted Grain", "Fruity Extra Virgin Olive Oil", "Complex Wild Yeast"],
            textureNotes: ["Extremely Crunchy Base", "High Alveolation (Honeycomb)", "Soft Cloud-like Interior"],
            pairingRecommendations: ["Mortadella & Stracciatella", "Potato & Rosemary (Classic Romana)", "Red Pizza with Spicy Salami"],
            flavorEvolution: ["Sharp yeast notes in young dough", "Mellow nutty sweetness after 48h-72h maturation"]
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.pizza_teglia_romana_mix_title',
                duration: "20 min",
                action: "styles.pizza_teglia_romana_mix_action",
                science: "styles.pizza_teglia_romana_mix_science"
            },
            {
                phase: 'Bulk',
                title: "styles.pizza_teglia_romana_bulk_title",
                duration: "24-48 hours",
                action: 'styles.pizza_teglia_romana_bulk_action',
                science: "styles.pizza_teglia_romana_bulk_science"
            },
            {
                phase: 'Ball',
                title: 'styles.pizza_teglia_romana_ball_title',
                duration: "4 hours",
                action: 'styles.pizza_teglia_romana_ball_action',
                science: "styles.pizza_teglia_romana_ball_science"
            },
            {
                phase: 'Bake',
                title: 'styles.pizza_teglia_romana_bake_title',
                duration: "12-15 min",
                action: "styles.pizza_teglia_romana_bake_action",
                science: "styles.pizza_teglia_romana_bake_science"
            }
        ],
        references: [],
        images: {
            hero: "/images/styles/pizza-teglia-romana.png",
            dough: "/images/styles/pizza-teglia-romana.png",
            crumb: "/images/styles/pizza-teglia-romana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'styles.pizza_teglia_romana_tip_1',
                    explanation: "styles.pizza_teglia_romana_tip_1_exp"
                },
                {
                    tip: 'styles.pizza_teglia_romana_tip_2',
                    explanation: "styles.pizza_teglia_romana_tip_2_exp"
                }
            ],
            what_if: [
                {
                    scenario: "styles.pizza_teglia_romana_wi_low_hyd_scen",
                    result: "styles.pizza_teglia_romana_wi_low_hyd_res",
                    correction: "styles.pizza_teglia_romana_wi_low_hyd_corr"
                },
                {
                    scenario: 'styles.pizza_teglia_romana_wi_tear_scen',
                    result: 'styles.pizza_teglia_romana_wi_tear_res',
                    correction: 'styles.pizza_teglia_romana_wi_tear_corr'
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Focaccia',
                    difference: "styles.pizza_teglia_romana_comp_focaccia_diff",
                    why_choose_this: "styles.pizza_teglia_romana_comp_focaccia_why"
                }
            ],
            q_and_a: [
                {
                    question: 'styles.pizza_teglia_romana_qa_1_q',
                    answer: "styles.pizza_teglia_romana_qa_1_a",
                    context: 'styles.pizza_teglia_romana_qa_1_ctx'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct',
                    suitability: 'Ideal',
                    notes: "styles.pizza_teglia_romana_ferm_direct_notes"
                }
            ]
        },
        deepDive: {
            hydrationLogic: "styles.pizza_teglia_romana_dd_hydration",
            methodSuitability: {
                direct: { suitable: true, notes: "styles.pizza_teglia_romana_method_direct_notes" },
                biga: { suitable: false, notes: "styles.pizza_teglia_romana_method_biga_notes" },
                poolish: { suitable: true, notes: "styles.pizza_teglia_romana_method_poolish_notes" }
            },
            whatIf: [
                {
                    scenario: "styles.pizza_teglia_romana_dd_wi_soup_scen",
                    outcome: 'styles.pizza_teglia_romana_dd_wi_soup_out',
                    solution: "styles.pizza_teglia_romana_dd_wi_soup_sol"
                },
                {
                    scenario: 'styles.pizza_teglia_romana_dd_wi_pale_scen',
                    outcome: "styles.pizza_teglia_romana_dd_wi_pale_out",
                    solution: "styles.pizza_teglia_romana_dd_wi_pale_sol"
                }
            ],
            comparisons: [
                {
                    vsStyle: "Sicilian (Sfincione)",
                    difference: 'styles.pizza_teglia_romana_dd_comp_sicilian_diff'
                }
            ],
            proTips: [
                "styles.pizza_teglia_romana_dd_tip_1",
                "styles.pizza_teglia_romana_dd_tip_2"
            ]
        },
        recommendedFlavorComponents: ["tomato_sauce_cooked", "mozzarella_low_moisture", "olive_oil_extra_virgin", "pecorino_romano", "garlic_fresh", "oregano_dried", "hot_honey", "bacon", "mushrooms", "bell_pepper"]
    },
    {
        id: "pizza-tonda-romana",
        name: "styles.pizza_tonda_romana",
        region: 'Italy',
        subRegion: 'Rome, Lazio',
        category: 'Pizza',
        recipeStyle: RecipeStyle.ROMANA_TONDA,
        tags: ['styles.pizza_tonda_romana_tag_low_hyd', 'styles.pizza_tonda_romana_tag_rolling', 'styles.pizza_tonda_romana_tag_crispy', 'styles.pizza_tonda_romana_tag_cracker'],
        description: "styles.pizza_tonda_romana_desc",
        history_context: "pizza_tonda_romana_history",
        base_formula: [
            { name: "styles.ingredients_flour_00", percentage: 100 },
            { name: 'styles.ingredients_water', percentage: 56 },
            { name: 'styles.ingredients_salt', percentage: 2.0 },
            { name: 'styles.ingredients_oil_olive', percentage: 3.0 },
            { name: 'styles.ingredients_yeast_fresh', percentage: 0.5 }
        ],
        specs: {
            hydration: { ideal: 56, min: 53, max: 58 },
            ovenTemp: { ideal: 300, min: 280, max: 330 },
            fermentationTime: "24h",
            difficulty: 'Medium',
            ballWeight: { recommended: 180, min: 150, max: 200 }
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W240 (Medium)",
                pl_ratio: "0.45 (Very Extensible)",
                absorption_capacity: "Low",
                protein_type: "Soft Wheat Type 00",
                science_explanation: "styles.pizza_tonda_romana_science_flour"
            },
            thermalProfile: {
                oven_type: "Electric/Gas Deck",
                heat_distribution: 'Consistent',
                crust_development: 'Dry crispy crackerlike',
                crumb_structure: 'Tight dense'
            },
            fermentationScience: {
                yeast_activity: 'Standard',
                ph_target: 'Normal',
                organic_acids: 'Low',
                enzymatic_activity: 'Moderate 4'
            },
            processScience: "pizza_tonda_romana_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.pizza_tonda_romana_mix_title',
                duration: "10-12 min",
                action: 'styles.pizza_tonda_romana_mix_action',
                science: 'styles.pizza_tonda_romana_mix_science'
            },
            {
                phase: 'Bulk',
                title: 'styles.pizza_tonda_romana_bulk_title',
                duration: "1-2 hours",
                action: 'styles.pizza_tonda_romana_bulk_action',
                science: 'styles.pizza_tonda_romana_bulk_science'
            },
            {
                phase: 'Ball',
                title: "styles.pizza_tonda_romana_ball_title",
                duration: "2 min",
                action: "styles.pizza_tonda_romana_ball_action",
                science: "styles.pizza_tonda_romana_ball_science"
            },
            {
                phase: 'Bake',
                title: "styles.pizza_tonda_romana_bake_title",
                duration: "3-5 min",
                action: 'styles.pizza_tonda_romana_bake_action',
                science: "styles.pizza_tonda_romana_bake_science"
            }
        ],
        references: [],
        images: {
            hero: "/images/styles/pizza-tonda-romana.png",
            dough: "/images/styles/pizza-tonda-romana.png",
            crumb: "/images/styles/pizza-tonda-romana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'styles.pizza_tonda_romana_tip_1',
                    explanation: "styles.pizza_tonda_romana_tip_1_exp"
                },
                {
                    tip: 'styles.pizza_tonda_romana_tip_2',
                    explanation: "styles.pizza_tonda_romana_tip_2_exp"
                }
            ],
            what_if: [
                {
                    scenario: 'styles.pizza_tonda_romana_wi_shrink_scen',
                    result: "styles.pizza_tonda_romana_wi_shrink_res",
                    correction: 'styles.pizza_tonda_romana_wi_shrink_corr'
                },
                {
                    scenario: 'styles.pizza_tonda_romana_wi_chewy_scen',
                    result: 'styles.pizza_tonda_romana_wi_chewy_res',
                    correction: "styles.pizza_tonda_romana_wi_chewy_corr"
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Neapolitan',
                    difference: "styles.pizza_tonda_romana_comp_neo_diff",
                    why_choose_this: 'styles.pizza_tonda_romana_comp_neo_why'
                }
            ],
            q_and_a: [
                {
                    question: 'styles.pizza_tonda_romana_qa_1_q',
                    answer: "styles.pizza_tonda_romana_qa_1_a",
                    context: 'styles.pizza_tonda_romana_qa_1_ctx'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct',
                    suitability: 'Authentic',
                    notes: "styles.pizza_tonda_romana_ferm_direct_notes"
                }
            ]
        },
        deepDive: {
            hydrationLogic: "styles.pizza_tonda_romana_dd_hydration",
            methodSuitability: {
                direct: { suitable: true, notes: "styles.pizza_tonda_romana_method_direct_notes" },
                biga: { suitable: false, notes: "styles.pizza_tonda_romana_method_biga_notes" },
                poolish: { suitable: false, notes: "styles.pizza_tonda_romana_method_poolish_notes" }
            },
            whatIf: [
                {
                    scenario: 'styles.pizza_tonda_romana_dd_wi_snap_scen',
                    outcome: 'styles.pizza_tonda_romana_dd_wi_snap_out',
                    solution: "styles.pizza_tonda_romana_dd_wi_snap_sol"
                },
                {
                    scenario: 'styles.pizza_tonda_romana_dd_wi_crisp_scen',
                    outcome: 'styles.pizza_tonda_romana_dd_wi_crisp_out',
                    solution: 'styles.pizza_tonda_romana_dd_wi_crisp_sol'
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Neapolitan 2',
                    difference: "styles.pizza_tonda_romana_dd_comp_neo_diff"
                }
            ],
            proTips: [
                "styles.pizza_tonda_romana_dd_tip_1",
                "styles.pizza_tonda_romana_dd_tip_2"
            ]
        },
        recommendedFlavorComponents: ["tomato_sauce_cooked", "mozzarella_low_moisture", "olive_oil_extra_virgin", "pecorino_romano", "oregano_dried", "garlic_fresh", "pepperoni", "anchovies"]
    },
    {
        id: "focaccia-genovese",
        name: 'styles.focaccia_genovese',
        region: 'Italy',
        subRegion: 'Genoa, Liguria',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FOCACCIA,
        tags: ['styles.focaccia_genovese_tag_high_oil', 'styles.focaccia_genovese_tag_breakfast', 'styles.focaccia_genovese_tag_emulsion', 'styles.focaccia_genovese_tag_pan'],
        description: "styles.focaccia_genovese_desc",
        history_context: "styles.focaccia_genovese_history",
        base_formula: [
            { name: 'styles.ingredients_flour_00', percentage: 100 },
            { name: 'styles.ingredients_water', percentage: 65 },
            { name: "styles.ingredients_oil_olive", percentage: 6 },
            { name: 'styles.ingredients_salt', percentage: 2.2 },
            { name: 'styles.ingredients_yeast_fresh', percentage: 2 },
            { name: "styles.ingredients_brine", percentage: 15 }
        ],
        specs: {
            hydration: { ideal: 65, min: 60, max: 68 },
            ovenTemp: { ideal: 230, min: 220, max: 240 },
            fermentationTime: "12-14h",
            difficulty: 'Medium',
            ballWeight: { recommended: 600, min: 400, max: 1000 }
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W260-280",
                pl_ratio: "0.50 (Extensible)",
                absorption_capacity: "Medium (60%)",
                protein_type: "Soft Wheat Type 00",
                science_explanation: "styles.focaccia_genovese_science_flour"
            },
            thermalProfile: {
                oven_type: "Convection/Deck",
                heat_distribution: "Steam (Brine)",
                crust_development: "Golden (Fried in Oil)",
                crumb_structure: 'Soft creamy'
            },
            fermentationScience: {
                yeast_activity: 'Fast 2',
                ph_target: 'Normal',
                organic_acids: 'Low',
                enzymatic_activity: 'High'
            },
            processScience: "styles.focaccia_genovese_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.focaccia_genovese_mix_title',
                duration: "10-12 min",
                action: "styles.focaccia_genovese_mix_action",
                science: "styles.focaccia_genovese_mix_science"
            },
            {
                phase: 'Bulk',
                title: 'styles.focaccia_genovese_bulk_1_title',
                duration: "60-90 min",
                action: 'styles.focaccia_genovese_bulk_1_action',
                science: 'styles.focaccia_genovese_bulk_1_science'
            },
            {
                phase: 'Bulk',
                title: 'styles.focaccia_genovese_bulk_2_title',
                duration: "20 min",
                action: "styles.focaccia_genovese_bulk_2_action",
                science: "styles.focaccia_genovese_bulk_2_science"
            },
            {
                phase: 'Ball',
                title: 'styles.focaccia_genovese_ball_title',
                duration: "5 min",
                action: "styles.focaccia_genovese_ball_action",
                science: "styles.focaccia_genovese_ball_science"
            },
            {
                phase: 'Bake',
                title: 'styles.focaccia_genovese_bake_title',
                duration: "15-18 min",
                action: 'styles.focaccia_genovese_bake_action',
                science: "styles.focaccia_genovese_bake_science"
            }
        ],
        references: ["Ezra Pound's Letters (Historical)", 'Salt, Fat, Acid, Heat'],
        images: {
            hero: "/images/styles/focaccia-genovese.png",
            dough: "/images/styles/focaccia-genovese.png",
            crumb: "/images/styles/focaccia-genovese.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'styles.focaccia_genovese_tip_1',
                    explanation: "styles.focaccia_genovese_tip_1_exp"
                },
                {
                    tip: 'styles.focaccia_genovese_tip_2',
                    explanation: "styles.focaccia_genovese_tip_2_exp"
                }
            ],
            what_if: [
                {
                    scenario: 'styles.focaccia_genovese_wi_dimple_scen',
                    result: "styles.focaccia_genovese_wi_dimple_res",
                    correction: 'styles.focaccia_genovese_wi_dimple_corr'
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Focaccia barese',
                    difference: "styles.focaccia_genovese_comp_barese_diff",
                    why_choose_this: "styles.focaccia_genovese_comp_barese_why"
                }
            ],
            q_and_a: [
                {
                    question: 'styles.focaccia_genovese_qa_1_q',
                    answer: "styles.focaccia_genovese_qa_1_a",
                    context: 'styles.focaccia_genovese_qa_1_ctx'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct',
                    suitability: 'Authentic',
                    notes: 'styles.focaccia_genovese_ferm_direct_notes'
                }
            ]
        },
        deepDive: {
            hydrationLogic: "styles.focaccia_genovese_dd_hydration",
            methodSuitability: {
                direct: { suitable: true, notes: "styles.focaccia_genovese_method_direct_notes" },
                biga: { suitable: true, notes: "styles.focaccia_genovese_method_biga_notes" },
                poolish: { suitable: true, notes: "styles.focaccia_genovese_method_poolish_notes" }
            },
            whatIf: [
                {
                    scenario: "styles.focaccia_genovese_dd_wi_eyes_scen",
                    outcome: "styles.focaccia_genovese_dd_wi_eyes_out",
                    solution: 'styles.focaccia_genovese_dd_wi_eyes_sol'
                },
                {
                    scenario: "styles.focaccia_genovese_dd_wi_tough_scen",
                    outcome: 'styles.focaccia_genovese_dd_wi_tough_out',
                    solution: 'styles.focaccia_genovese_dd_wi_tough_sol'
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Pizza teglia',
                    difference: 'styles.focaccia_genovese_dd_comp_teglia_diff'
                }
            ],
            proTips: [
                "styles.focaccia_genovese_dd_tip_1",
                "styles.focaccia_genovese_dd_tip_2"
            ]
        },
        recommendedFlavorComponents: ["olive_oil_extra_virgin", "rosemary_fresh", "garlic_fresh", "sea_salt", "cherry_tomatoes_confit", "pesto", "olives_black", "parmesan"]
    },
    {
        id: "sfincione-palermitano",
        name: 'styles.sfincione_palermitano',
        region: 'Italy',
        subRegion: 'Palermo, Sicily',
        category: 'Pizza',
        recipeStyle: RecipeStyle.SICILIANA,
        tags: ['styles.sfincione_palermitano_tag_sponge', 'styles.sfincione_palermitano_tag_focaccia', 'styles.sfincione_palermitano_tag_street', 'styles.sfincione_palermitano_tag_onions'],
        description: "styles.sfincione_palermitano_desc",
        history_context: "styles.sfincione_palermitano_history",
        base_formula: [
            { name: "styles.ingredients_semolina_blend", percentage: 100 },
            { name: 'styles.ingredients_water', percentage: 70 },
            { name: 'styles.ingredients_salt', percentage: 2.2 },
            { name: 'styles.ingredients_yeast_fresh', percentage: 1.0 },
            { name: "styles.ingredients_lard", percentage: 5 }
        ],
        specs: {
            hydration: { ideal: 70, min: 65, max: 75 },
            ovenTemp: { ideal: 220, min: 200, max: 240 },
            fermentationTime: "4-6h",
            difficulty: 'Medium',
            ballWeight: { recommended: 800, min: 600, max: 1000 }
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W220 (Semolina)",
                pl_ratio: "High (Tenacious)",
                absorption_capacity: "High (70%)",
                protein_type: "Durum Wheat (Semola Rimacinata)",
                science_explanation: "styles.sfincione_palermitano_science_flour"
            },
            thermalProfile: {
                oven_type: "Deck (Sheet Pan)",
                heat_distribution: 'Protected top',
                crust_development: 'Fried bottom steamed top',
                crumb_structure: 'Spongy cakelike'
            },
            fermentationScience: {
                yeast_activity: 'Moderate 5',
                ph_target: 'Normal',
                organic_acids: 'Low',
                enzymatic_activity: 'Moderate 6'
            },
            processScience: "styles.sfincione_palermitano_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.sfincione_palermitano_mix_title',
                duration: "15 min",
                action: 'styles.sfincione_palermitano_mix_action',
                science: 'styles.sfincione_palermitano_mix_science'
            },
            {
                phase: 'Bulk',
                title: 'styles.sfincione_palermitano_bulk_title',
                duration: "2h + 2h",
                action: 'styles.sfincione_palermitano_bulk_action',
                science: 'styles.sfincione_palermitano_bulk_science'
            },
            {
                phase: 'Bake',
                title: 'styles.sfincione_palermitano_bake_title',
                duration: "20-25 min",
                action: 'styles.sfincione_palermitano_bake_action',
                science: "styles.sfincione_palermitano_bake_science"
            }
        ],
        references: [],
        images: {
            hero: "/images/styles/pizza-siciliana.png",
            dough: "/images/styles/pizza-siciliana.png",
            crumb: "/images/styles/pizza-siciliana.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'styles.sfincione_palermitano_tip_1',
                    explanation: "styles.sfincione_palermitano_tip_1_exp"
                },
                {
                    tip: 'styles.sfincione_palermitano_tip_2',
                    explanation: "styles.sfincione_palermitano_tip_2_exp"
                }
            ],
            what_if: [
                {
                    scenario: 'styles.sfincione_palermitano_wi_oil_scen',
                    result: "styles.sfincione_palermitano_wi_oil_res",
                    correction: 'styles.sfincione_palermitano_wi_oil_corr'
                }
            ],
            comparative_analysis: [
                {
                    target_style: "Sicilian (USA)",
                    difference: "styles.sfincione_palermitano_comp_sicilian_diff",
                    why_choose_this: 'styles.sfincione_palermitano_comp_sicilian_why'
                }
            ],
            q_and_a: [
                {
                    question: 'styles.sfincione_palermitano_qa_1_q',
                    answer: "styles.sfincione_palermitano_qa_1_a",
                    context: 'styles.sfincione_palermitano_qa_1_ctx'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Direct',
                    suitability: 'Authentic',
                    notes: 'styles.sfincione_palermitano_ferm_direct_notes'
                }
            ]
        },
        deepDive: {
            hydrationLogic: "styles.sfincione_palermitano_dd_hydration",
            methodSuitability: {
                direct: { suitable: true, notes: "styles.sfincione_palermitano_method_direct_notes" },
                biga: { suitable: false, notes: "styles.sfincione_palermitano_method_biga_notes" },
                poolish: { suitable: false, notes: "styles.sfincione_palermitano_method_poolish_notes" }
            },
            whatIf: [
                {
                    scenario: "styles.sfincione_palermitano_dd_wi_burn_scen",
                    outcome: "styles.sfincione_palermitano_dd_wi_burn_out",
                    solution: "styles.sfincione_palermitano_dd_wi_burn_sol"
                },
                {
                    scenario: "styles.sfincione_palermitano_dd_wi_veg_scen",
                    outcome: "styles.sfincione_palermitano_dd_wi_veg_out",
                    solution: "styles.sfincione_palermitano_dd_wi_veg_sol"
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Focaccia Genovese',
                    difference: 'styles.sfincione_palermitano_dd_comp_focaccia_diff'
                }
            ],
            proTips: [
                "styles.sfincione_palermitano_dd_tip_1",
                "styles.sfincione_palermitano_dd_tip_2"
            ]
        },
        recommendedFlavorComponents: ["tomato_sauce_cooked", "onions_fresh", "pecorino_romano", "oregano_dried", "olive_oil_extra_virgin", "pepperoni", "anchovies", "breadcrumbs"]
    },
    {
        id: "pane-toscano",
        name: "styles.pane_toscano",
        region: 'Italy',
        subRegion: 'Tuscany',
        category: 'Bread',
        tags: ['styles.pane_toscano_tag_no_salt', 'styles.pane_toscano_tag_sourdough', 'styles.pane_toscano_tag_dop', 'styles.pane_toscano_tag_ancient'],
        description: "styles.pane_toscano_desc",
        history_context: "styles.pane_toscano_history",
        base_formula: [
            { name: 'styles.ingredients_flour_soft_0', percentage: 100 },
            { name: 'styles.ingredients_water', percentage: 60 },
            { name: 'styles.ingredients_salt', percentage: 0 },
            { name: "styles.ingredients_sourdough", percentage: 20 }
        ],
        specs: {
            hydration: { ideal: 60, min: 55, max: 65 },
            ovenTemp: { ideal: 230, min: 220, max: 240 },
            fermentationTime: "12-16h",
            difficulty: 'Medium'
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W180-200 (Weak)",
                pl_ratio: "0.40 (Very Extensible)",
                absorption_capacity: "Low",
                protein_type: "Soft Wheat Type 0",
                science_explanation: "styles.pane_toscano_science_flour"
            },
            thermalProfile: {
                oven_type: "Wood Fired/Hearth",
                heat_distribution: 'Radiant',
                crust_development: 'Thick hard pale',
                crumb_structure: 'Irregular'
            },
            fermentationScience: {
                yeast_activity: "Explosive (Runaway)",
                ph_target: "Acidic (Sourdough Control)",
                organic_acids: "High Acetic (Biga)",
                enzymatic_activity: 'Very high 2'
            },
            processScience: "styles.pane_toscano_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.pane_toscano_mix_title',
                duration: "12h prior",
                action: 'styles.pane_toscano_mix_action',
                science: "styles.pane_toscano_mix_science"
            },
            {
                phase: 'Bulk',
                title: 'styles.pane_toscano_bulk_title',
                duration: "60-90 min",
                action: 'styles.pane_toscano_bulk_action',
                science: 'styles.pane_toscano_bulk_science'
            },
            {
                phase: 'Bake',
                title: 'styles.pane_toscano_bake_title',
                duration: "45-50 min",
                action: "styles.pane_toscano_bake_action",
                science: "styles.pane_toscano_bake_science"
            }
        ],
        references: [],
        images: {
            hero: "/images/styles/pane-toscano.png",
            dough: "/images/styles/pane-toscano.png",
            crumb: "/images/styles/pane-toscano.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'styles.pane_toscano_tip_1',
                    explanation: "styles.pane_toscano_tip_1_exp"
                },
                {
                    tip: 'styles.pane_toscano_tip_2',
                    explanation: "styles.pane_toscano_tip_2_exp"
                }
            ],
            what_if: [
                {
                    scenario: 'styles.pane_toscano_wi_brown_scen',
                    result: 'styles.pane_toscano_wi_brown_res',
                    correction: "styles.pane_toscano_wi_brown_corr"
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Sourdough',
                    difference: "styles.pane_toscano_comp_sourdough_diff",
                    why_choose_this: 'styles.pane_toscano_comp_sourdough_why'
                }
            ],
            q_and_a: [
                {
                    question: 'styles.pane_toscano_qa_1_q',
                    answer: "styles.pane_toscano_qa_1_a",
                    context: 'styles.pane_toscano_qa_1_ctx'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Sourdough',
                    suitability: 'Authentic',
                    notes: "styles.pane_toscano_ferm_sourdough_notes"
                }
            ]
        },
        deepDive: {
            hydrationLogic: "styles.pane_toscano_dd_hydration",
            methodSuitability: {
                direct: { suitable: false, notes: "styles.pane_toscano_method_direct_notes" },
                biga: { suitable: true, notes: "styles.pane_toscano_method_biga_notes" },
                poolish: { suitable: false, notes: "styles.pane_toscano_method_poolish_notes" }
            },
            whatIf: [
                {
                    scenario: 'styles.pane_toscano_dd_wi_pale_scen',
                    outcome: "styles.pane_toscano_dd_wi_pale_out",
                    solution: "styles.pane_toscano_dd_wi_pale_sol"
                },
                {
                    scenario: 'Tastes like cardboard',
                    outcome: "It's unsalted bread. By itself, it is bland.",
                    solution: 'Serve with salty prosciutto pecorino or aggressive'
                }
            ],
            comparisons: [
                {
                    vsStyle: 'French baguette',
                    difference: "styles.pane_toscano_dd_comp_baguette_diff"
                }
            ],
            proTips: [
                "styles.pane_toscano_dd_tip_1",
                "styles.pane_toscano_dd_tip_2"
            ]
        },
        recommendedFlavorComponents: ["prosciutto_crudo", "pecorino_romano", "olive_oil_extra_virgin", "garlic_fresh", "balsamic_modena", "blue_cheese", "walnuts", "honey_raw"]
    },
    {
        id: "ciabatta-classic",
        name: 'styles.ciabatta_classic',
        region: 'Italy',
        subRegion: 'Adria, Veneto',
        category: 'Bread',
        tags: ['styles.ciabatta_classic_tag_high_hyd', 'styles.ciabatta_classic_tag_preferment', 'styles.ciabatta_classic_tag_biga', 'styles.ciabatta_classic_tag_modern'],
        description: "styles.ciabatta_classic_desc",
        history_context: "styles.ciabatta_classic_history",
        base_formula: [
            { name: 'styles.ingredients_flour_strong', percentage: 100 },
            { name: "styles.ingredients_water", percentage: 78 },
            { name: 'styles.ingredients_salt', percentage: 2.2 },
            { name: 'styles.ingredients_yeast_fresh', percentage: 0.5 }
        ],
        specs: {
            hydration: { ideal: 78, min: 75, max: 85 },
            ovenTemp: { ideal: 240, min: 230, max: 250 },
            fermentationTime: "18-24h",
            difficulty: 'Hard'
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W340+ (Very Strong)",
                pl_ratio: "Balanced",
                absorption_capacity: "Very High",
                protein_type: "Soft Wheat Type 0",
                science_explanation: "styles.ciabatta_classic_science_flour"
            },
            thermalProfile: {
                oven_type: "Deck (Steam)",
                heat_distribution: 'Conduction',
                crust_development: 'Paperthin crispy',
                crumb_structure: 'Massive alveoli'
            },
            fermentationScience: {
                yeast_activity: "Controlled (Biga)",
                ph_target: "Acidic (Acetic Strength)",
                organic_acids: "Acetic (Structure)",
                enzymatic_activity: 'Controlled 2'
            },
            processScience: "styles.ciabatta_classic_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.ciabatta_classic_mix_1_title',
                duration: "16-18h prior",
                action: "styles.ciabatta_classic_mix_1_action",
                science: "styles.ciabatta_classic_mix_1_science"
            },
            {
                phase: 'Mix',
                title: "styles.ciabatta_classic_mix_2_title",
                duration: "15-20 min",
                action: "styles.ciabatta_classic_mix_2_action",
                science: "styles.ciabatta_classic_mix_2_science"
            },
            {
                phase: 'Bulk',
                title: 'styles.ciabatta_classic_bulk_title',
                duration: 'Every 45 min',
                action: 'styles.ciabatta_classic_bulk_action',
                science: "styles.ciabatta_classic_bulk_science"
            },
            {
                phase: 'Ball',
                title: 'styles.ciabatta_classic_ball_title',
                duration: 'Rapid',
                action: 'styles.ciabatta_classic_ball_action',
                science: "styles.ciabatta_classic_ball_science"
            },
            {
                phase: 'Bake',
                title: 'styles.ciabatta_classic_bake_title',
                duration: "25-30 min",
                action: "styles.ciabatta_classic_bake_action",
                science: "styles.ciabatta_classic_bake_science"
            }
        ],
        references: ['Modernist bread', "The Bread Baker's Apprentice"],
        images: {
            hero: "/images/styles/ciabatta_real.png",
            dough: "/images/styles/ciabatta.png",
            crumb: "/images/styles/ciabatta.png"
        },
        education: {
            pro_tips: [
                {
                    tip: 'styles.ciabatta_classic_tip_1',
                    explanation: "styles.ciabatta_classic_tip_1_exp"
                },
                {
                    tip: 'styles.ciabatta_classic_tip_2',
                    explanation: "styles.ciabatta_classic_tip_2_exp"
                }
            ],
            what_if: [
                {
                    scenario: "styles.ciabatta_classic_wi_dense_scen",
                    result: "styles.ciabatta_classic_wi_dense_res",
                    correction: 'styles.ciabatta_classic_wi_dense_corr'
                }
            ],
            comparative_analysis: [
                {
                    target_style: 'Baguette',
                    difference: "styles.ciabatta_classic_comp_baguette_diff",
                    why_choose_this: "styles.ciabatta_classic_comp_baguette_why"
                }
            ],
            q_and_a: [
                {
                    question: 'styles.ciabatta_classic_qa_1_q',
                    answer: "styles.ciabatta_classic_qa_1_a",
                    context: 'styles.ciabatta_classic_qa_1_ctx'
                }
            ],
            fermentation_methods: [
                {
                    method: 'Biga',
                    suitability: 'Ideal',
                    notes: 'styles.ciabatta_classic_ferm_biga_notes'
                },
                {
                    method: 'Direct',
                    suitability: 'Not Recommended',
                    notes: 'styles.ciabatta_classic_ferm_direct_notes'
                }
            ]
        },
        deepDive: {
            hydrationLogic: "styles.ciabatta_classic_dd_hydration",
            methodSuitability: {
                direct: { suitable: false, notes: "styles.ciabatta_classic_method_direct_notes" },
                biga: { suitable: true, notes: "styles.ciabatta_classic_method_biga_notes" },
                poolish: { suitable: true, notes: "styles.ciabatta_classic_method_poolish_notes" }
            },
            whatIf: [
                {
                    scenario: "styles.ciabatta_classic_dd_wi_flat_scen",
                    outcome: 'styles.ciabatta_classic_dd_wi_flat_out',
                    solution: 'styles.ciabatta_classic_dd_wi_flat_sol'
                },
                {
                    scenario: "styles.ciabatta_classic_dd_wi_mouse_scen",
                    outcome: 'styles.ciabatta_classic_dd_wi_mouse_out',
                    solution: 'styles.ciabatta_classic_dd_wi_mouse_sol'
                }
            ],
            comparisons: [
                {
                    vsStyle: 'Baguette 2',
                    difference: "styles.ciabatta_classic_dd_comp_baguette_diff"
                }
            ],
            proTips: [
                "styles.ciabatta_classic_dd_tip_1",
                "styles.ciabatta_classic_dd_tip_2"
            ]
        },
        recommendedFlavorComponents: ["olive_oil_extra_virgin", "balsamic_modena", "prosciutto_crudo", "mozzarella_di_bufala", "basil_fresh", "cherry_tomatoes_confit", "pesto", "garlic_fresh"]
    }
];
