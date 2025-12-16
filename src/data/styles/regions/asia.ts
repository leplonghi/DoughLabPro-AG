import { DoughStyle, RecipeStyle } from '../../../types/dough';

export const asiaStyles: DoughStyle[] = [
    {
        id: 'asia_shokupan',
        name: 'shokupan_name',
        region: 'Asia',
        subRegion: 'Japan',
        category: 'Soft Bread',
        recipeStyle: RecipeStyle.HOKKAIDO_MILK_BREAD,
        tags: ['Tangzhong', 'Yudane', 'Milk', 'Soft'],
        description: "styles.shokupan_desc",
        history_context: "styles.asia_shokupan_history",
        base_formula: [
            { name: 'styles.ingredients_flour_high_gluten', percentage: 100 },
            { name: 'styles.ingredients_water_milk', percentage: 70 },
            { name: 'styles.ingredients_sugar', percentage: 8 },
            { name: 'styles.ingredients_butter', percentage: 8 },
            { name: 'styles.ingredients_salt', percentage: 1.8 },
            { name: 'styles.ingredients_yeast_instant', percentage: 1.5 }
        ],
        specs: {
            hydration: { ideal: 70, min: 65, max: 75 },
            ovenTemp: { ideal: 180, min: 170, max: 200 },
            fermentationTime: '4h - 6h total',
            difficulty: 'Medium'
        },
        calculation: {
            method: 'starch_scald',
            requiresYeast: true,
            requiresSteam: false,
            allowOil: true,
        },
        scientificProfile: {
            flourRheology: {
                w_index: "High Protein (W350+)",
                pl_ratio: 'Balanced',
                absorption_capacity: 'High',
                protein_type: 'Strong wheat',
                science_explanation: 'styles.asia_shokupan_science_flour'
            },
            thermalProfile: {
                oven_type: 'Convection',
                heat_distribution: 'Even',
                crust_development: 'Soft golden',
                crumb_structure: 'Feathery shreddable'
            },
            fermentationScience: {
                yeast_activity: 'High',
                ph_target: 'Normal',
                organic_acids: 'Balanced',
                enzymatic_activity: "High (Starch Gelatinization)"
            },
            processScience: 'styles.asia_shokupan_science_process'
        },
        process: [
            {
                phase: 'Prep',
                title: 'styles.asia_shokupan_process_1_title',
                duration: '15 min',
                action: 'styles.asia_shokupan_process_1_action',
                science: 'styles.asia_shokupan_process_1_science'
            },
            {
                phase: 'Mix',
                title: 'Mix and Knead',
                duration: '20-30 min',
                action: 'Incorporate Tangzhong with dry and liquid ingredients. Knead to a very thin windowpane.',
                science: 'Full gluten development is crucial for the airy structure and shreddability.'
            },
            {
                phase: 'Bake',
                title: 'Bake',
                duration: '30-40 min',
                action: 'Bake at medium heat (180°C) until golden, but without forming a thick crust.',
                science: 'Moderate temperature preserves moisture and softness, avoiding a hard crust.'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/shokupan-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'asia_naan',
        name: 'naan_name',
        region: 'Asia',
        subRegion: 'India',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: ['Tandoor', 'Yogurt', 'High heat', 'Soft 2'],
        description: 'styles.asia_naan_desc',
        history_context: 'styles.asia_naan_history',
        base_formula: [
            { name: 'styles.ingredients_flour_maida', percentage: 100 },
            { name: 'styles.ingredients_water', percentage: 65 },
            { name: 'styles.ingredients_ghee', percentage: 5 },
            { name: 'styles.ingredients_salt', percentage: 2 },
            { name: 'styles.ingredients_yeast_instant', percentage: 1 },
            { name: 'Garlic/Cilantro', percentage: 3 }
        ],
        specs: {
            hydration: { ideal: 65, min: 60, max: 70 },
            ovenTemp: { ideal: 450, min: 300, max: 500 }, // Tandoor is very hot
            fermentationTime: '2h - 4h',
            difficulty: 'Medium'
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "Medium (W240-260)",
                pl_ratio: "Extensible (Low P/L)",
                absorption_capacity: 'Medium',
                protein_type: "Maida / AP",
                science_explanation: 'styles.asia_naan_science_flour'
            },
            thermalProfile: {
                oven_type: 'Tandoor 2',
                heat_distribution: "Radiant (Walls)",
                crust_development: 'Charred bubbles',
                crumb_structure: 'Soft irregular'
            },
            fermentationScience: {
                yeast_activity: 'Fast',
                ph_target: "Acidic (Yogurt)",
                organic_acids: 'Lactic',
                enzymatic_activity: "Protease (Tenderizing)"
            },
            processScience: 'styles.asia_naan_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.asia_naan_process_1_title',
                duration: '10 min',
                action: 'styles.asia_naan_process_1_action',
                science: 'styles.asia_naan_process_1_science'
            },
            {
                phase: 'Ball',
                title: 'Ball and Relax',
                duration: '1-2h',
                action: 'Divide and let relax well.',
                science: 'Relaxation is vital for extensibility (teardrop shape).'
            },
            {
                phase: 'Bake',
                title: 'Bake (Tandoor/Oven)',
                duration: '2-3 min',
                action: 'Extreme and unilateral heat (oven wall) creates characteristic charred bubbles.',
                science: 'Rapid gas expansion (oven spring) due to thermal shock.'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/naan-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'asia_guabao',
        name: 'gua_bao_name',
        region: 'Asia',
        subRegion: 'Taiwan/China',
        category: 'Buns',
        recipeStyle: RecipeStyle.ENRICHED_BRIOCHE_CLASSIC,
        tags: ['Steam', 'Low protein', 'White'],
        description: 'styles.asia_guabao_desc',
        history_context: 'styles.asia_guabao_history',
        base_formula: [
            { name: 'styles.ingredients_low_protein_flour', percentage: 100 },
            { name: 'styles.ingredients_water_milk', percentage: 55 },
            { name: 'styles.ingredients_sugar', percentage: 10 },
            { name: 'styles.ingredients_oil', percentage: 4 },
            { name: 'styles.ingredients_yeast_instant', percentage: 1 },
            { name: 'styles.ingredients_baking_powder', percentage: 0.5 }
        ],
        specs: {
            hydration: { ideal: 55, min: 50, max: 60 },
            ovenTemp: { ideal: 100, min: 100, max: 100 }, // Steam
            fermentationTime: '1h - 2h',
            difficulty: 'Medium'
        },
        calculation: {
            method: 'simple_mix',
            requiresYeast: true,
            requiresSteam: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "Low (Hong Kong Flour)",
                pl_ratio: "N/A",
                absorption_capacity: 'Low',
                protein_type: "Low Protein / Bleached",
                science_explanation: 'styles.asia_guabao_science_flour'
            },
            thermalProfile: {
                oven_type: 'Steamer',
                heat_distribution: "Steam (Convection)",
                crust_development: "None (Skin only)",
                crumb_structure: 'Uniform cottony'
            },
            fermentationScience: {
                yeast_activity: 'Moderate',
                ph_target: 'Neutral',
                organic_acids: 'None',
                enzymatic_activity: 'Low'
            },
            processScience: 'styles.asia_guabao_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.asia_guabao_process_1_title',
                duration: '15 min',
                action: 'styles.asia_guabao_process_1_action',
                science: 'styles.asia_guabao_process_1_science'
            },
            {
                phase: 'Prep',
                title: 'Shaping',
                duration: '20 min',
                action: 'Roll out disc, brush with oil, fold in half (tongue).',
                science: 'Oil prevents the halves from sticking together during cooking.'
            },
            {
                phase: 'Cook',
                title: 'Steam',
                duration: '10-12 min',
                action: 'Steam cook. Turn off and wait before opening to prevent collapsing.',
                science: 'Sudden change in pressure/temperature can collapse the delicate structure.'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/guabao-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'steamed-baozi',
        name: 'baozi_name',
        region: 'Asia',
        subRegion: 'China',
        category: 'Buns',
        recipeStyle: RecipeStyle.ENRICHED_BRIOCHE_CLASSIC, // Closest match
        tags: ['Steam 2', 'Breakfast'],
        description: 'styles.steamed_baozi_desc',
        history_context: 'styles.steamed_baozi_history',
        base_formula: [
            { name: 'styles.ingredients_flour_bread', percentage: 100 },
            { name: 'styles.ingredients_water', percentage: 50 },
            { name: 'styles.ingredients_yeast_instant', percentage: 1 },
            { name: 'styles.ingredients_sugar', percentage: 5 },
            { name: 'styles.ingredients_oil', percentage: 5 },
            { name: 'styles.ingredients_baking_powder', percentage: 1 }
        ],
        specs: {
            hydration: { ideal: 52, min: 48, max: 55 },
            ovenTemp: { ideal: 100, min: 100, max: 100 },
            fermentationTime: '4-12h (Lao Mian)',
            difficulty: 'Medium'
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: true,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: 'W200240',
                pl_ratio: 'Balanced',
                absorption_capacity: 'Medium',
                protein_type: "All Purpose / Bleached",
                science_explanation: 'styles.steamed_baozi_science_flour'
            },
            thermalProfile: {
                oven_type: 'Bamboo steamer',
                heat_distribution: "Convection (Steam)",
                crust_development: "Skin formation (No Maillard)",
                crumb_structure: 'Fine dense brilliant white'
            },
            fermentationScience: {
                yeast_activity: 'Moderate 2',
                ph_target: 'Neutral 2',
                organic_acids: 'Low',
                enzymatic_activity: 'Standard'
            },
            processScience: 'styles.steamed_baozi_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.steamed_baozi_process_1_title',
                duration: '15 min',
                action: 'styles.steamed_baozi_process_1_action',
                science: 'styles.steamed_baozi_process_1_science'
            },
            {
                phase: 'Prep',
                title: 'Shaping',
                duration: '20 min',
                action: 'Roll into circles, pleat to seal filling.',
                science: 'Pleating creates a thicker top to balance the bottom thickness..'
            },
            {
                phase: 'Cook',
                title: 'Steam',
                duration: '15 min',
                action: 'Steam over vigorously boiling water. Do not open lid.',
                science: 'Opening the lid causes a pressure drop and thermal shock, collapsing the structure immediately.'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/baozi_steamed.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'paratha',
        name: 'paratha_name',
        region: 'Asia',
        subRegion: 'India',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: ['Laminated', 'Unleavened', 'Fried'],
        description: 'styles.paratha_desc',
        history_context: 'styles.paratha_history',
        base_formula: [
            { name: 'styles.ingredients_atta', percentage: 100 },
            { name: 'styles.ingredients_water', percentage: 65 },
            { name: 'styles.ingredients_salt', percentage: 2 },
            { name: 'styles.ingredients_ghee', percentage: 20 },
            { name: 'styles.ingredients_oil', percentage: 10 }
        ],
        specs: {
            hydration: { ideal: 65, min: 60, max: 70 },
            ovenTemp: { ideal: 220, min: 200, max: 240 }, // Griddle temp
            fermentationTime: '30m Rest',
            difficulty: 'Medium'
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: false,
            requiresSteam: false,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "N/A (Atta)",
                pl_ratio: "Extensible (Bran)",
                absorption_capacity: 'High',
                protein_type: 'Durumlike wheat',
                science_explanation: 'styles.paratha_science_flour'
            },
            thermalProfile: {
                oven_type: "Tawa (Griddle)",
                heat_distribution: 'Conduction',
                crust_development: 'Crisp fried',
                crumb_structure: 'Laminated layers'
            },
            fermentationScience: {
                yeast_activity: 'None',
                ph_target: 'Neutral 3',
                organic_acids: 'None',
                enzymatic_activity: 'Standard'
            },
            processScience: 'styles.paratha_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.paratha_process_1_title',
                duration: '10 min',
                action: 'styles.paratha_process_1_action',
                science: 'styles.paratha_process_1_science'
            },
            {
                phase: 'Bulk',
                title: 'Rest',
                duration: '30 min',
                action: 'Cover and rest.',
                science: 'Gluten relaxation is mandatory for rolling thin without tearing.'
            },
            {
                phase: 'Prep',
                title: 'Laminate',
                duration: '15 min',
                action: 'Roll thin. Brush Ghee. Pleat like a fan. Coil into a spiral.',
                science: 'The fan pleat maximizes the number of layers in a vertical orientation.'
            },
            {
                phase: 'Cook',
                title: 'Fry',
                duration: '5 min',
                action: 'Cook on hot Tawa with Ghee until spots appear.',
                science: 'Direct heat crisps the outer layers while steam cooks the inner layers.'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/paratha_flaky_hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    }
];
