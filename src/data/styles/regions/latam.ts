import { DoughStyle, RecipeStyle } from '../../../types/dough';

export const latamStyles: DoughStyle[] = [
    {
        id: 'pao-de-queijo',
        name: 'pao_de_queijo_name',
        region: 'South America',
        subRegion: 'Minas Gerais, Brazil',
        category: 'Snack',
        recipeStyle: RecipeStyle.PAO_DE_QUEIJO,
        tags: ['Gluten free', 'Cassava', 'Scalded', 'Cheese'],
        description: 'styles.pao_de_queijo_desc',
        history_context: 'styles.pao_de_queijo_history',
        base_formula: [
            { name: 'Polvilho Azedo (Sour Cassava Starch)', percentage: 100 },
            { name: 'Milk', percentage: 40 },
            { name: 'Oil', percentage: 20 },
            { name: 'Eggs', percentage: 30 },
            { name: 'Minas Cheese (Cured)', percentage: 80 },
            { name: 'Salt', percentage: 2 }
        ],
        specs: {
            hydration: { ideal: 40, min: 35, max: 50 }, // Liquid (Milk/Oil/Eggs) ratio varies
            ovenTemp: { ideal: 200, min: 180, max: 220 },
            fermentationTime: 'N/A', // No fermentation
            difficulty: 'Medium'
        },
        calculation: {
            method: 'starch_scald',
            requiresYeast: false,
            requiresSteam: false,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "N/A (Gluten Free)",
                pl_ratio: "Rubber-like (Gelatin)",
                absorption_capacity: "High (Scalded)",
                protein_type: "None (Cassava Starch)",
                science_explanation: 'styles.pao_de_queijo_science_flour'
            },
            thermalProfile: {
                oven_type: 'Convection',
                heat_distribution: 'Even',
                crust_development: 'Crispy spotted',
                crumb_structure: 'Chewy airy center'
            },
            fermentationScience: {
                yeast_activity: 'None',
                ph_target: "Acidic (Polvilho Azedo)",
                organic_acids: "Lactic (Fermented Starch)",
                enzymatic_activity: 'None'
            },
            processScience: 'styles.pao_de_queijo_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.pao_de_queijo_proc_scald_title',
                duration: '10 min',
                action: 'styles.pao_de_queijo_proc_scald_action',
                science: 'styles.pao_de_queijo_proc_scald_sci',
                temperature: '100°C (Liquids)'
            },
            {
                phase: 'Mix',
                title: 'styles.pao_de_queijo_proc_cool_title',
                duration: '15 min',
                action: 'styles.pao_de_queijo_proc_cool_action',
                science: 'styles.pao_de_queijo_proc_cool_sci',
                temperature: 'Warm to Touch'
            },
            {
                phase: 'Bake',
                title: 'styles.pao_de_queijo_proc_bake_title',
                duration: '20-25 min',
                action: 'styles.pao_de_queijo_proc_bake_action',
                science: 'styles.pao_de_queijo_proc_bake_sci',
                temperature: '200°C'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/pao-de-queijo-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'pao-frances',
        name: 'pao_frances_name',
        region: 'South America',
        subRegion: 'Brazil',
        category: 'Bread',
        recipeStyle: RecipeStyle.PAO_FRANCES,
        tags: ['Crispy', 'Steam', 'Direct Method', '50g'],
        description: 'styles.pao_frances_desc',
        history_context: 'styles.pao_frances_history',
        base_formula: [
            { name: 'Wheat Flour (Type 1)', percentage: 100 },
            { name: 'Water', percentage: 58 },
            { name: 'Fresh Yeast', percentage: 3 },
            { name: 'Salt', percentage: 2 },
            { name: 'Sugar', percentage: 1 },
            { name: 'Fat (Lard/Butter)', percentage: 1 } // Often 1% or less, or specialized improvers
        ],
        specs: {
            hydration: { ideal: 58, min: 55, max: 62 },
            ovenTemp: { ideal: 220, min: 200, max: 240 },
            fermentationTime: '3-4h',
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
                w_index: "Type 1 (W280)",
                pl_ratio: 'Balanced',
                absorption_capacity: 'Medium',
                protein_type: 'Brazilian wheat',
                science_explanation: 'styles.pao_frances_science_flour'
            },
            thermalProfile: {
                oven_type: "Deck (Steam)",
                heat_distribution: 'Conduction  steam',
                crust_development: 'Crackling thin',
                crumb_structure: 'Cottonlike'
            },
            fermentationScience: {
                yeast_activity: 'High',
                ph_target: 'Neutral 4',
                organic_acids: 'Low',
                enzymatic_activity: "High (Sugar added)"
            },
            processScience: 'styles.pao_frances_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.pao_frances_proc_mix_title',
                duration: '10-12 min',
                action: 'styles.pao_frances_proc_mix_action',
                science: 'styles.pao_frances_proc_mix_sci',
                temperature: '24°C'
            },
            {
                phase: 'Ball',
                title: 'styles.pao_frances_proc_ball_title',
                duration: '20 min',
                action: 'styles.pao_frances_proc_ball_action',
                science: 'styles.pao_frances_proc_ball_sci',
                temperature: 'Room Temp'
            },
            {
                phase: 'Bake',
                title: 'styles.pao_frances_proc_bake_title',
                duration: '15-18 min',
                action: 'styles.pao_frances_proc_bake_action',
                science: 'styles.pao_frances_proc_bake_sci',
                temperature: '220°C'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/pao-frances-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'fugazzeta-rellena',
        name: 'fugazzeta_rellena_name',
        region: 'South America',
        subRegion: 'Argentina',
        category: 'Pizza',
        recipeStyle: RecipeStyle.FOCACCIA,
        tags: ['Stuffed', 'Onion', 'Pan pizza 2', 'Heavy'],
        description: 'styles.fugazzeta_rellena_desc',
        history_context: 'styles.fugazzeta_rellena_history',
        base_formula: [
            { name: 'Flour (000 or 0000)', percentage: 100 },
            { name: 'Water', percentage: 60 },
            { name: 'Fresh Yeast', percentage: 2.5 },
            { name: 'Salt', percentage: 2 },
            { name: 'Olive Oil', percentage: 3 }
        ],
        specs: {
            hydration: { ideal: 60, min: 55, max: 70 },
            ovenTemp: { ideal: 240, min: 220, max: 260 },
            fermentationTime: '4-24h',
            difficulty: 'Medium'
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: 'W260280 2',
                pl_ratio: 'Extensible',
                absorption_capacity: 'Medium',
                protein_type: "Argentine Wheat (000/0000)",
                science_explanation: 'styles.fugazzeta_rellena_science_flour'
            },
            thermalProfile: {
                oven_type: "Deck/Pizza Oven",
                heat_distribution: "Conduction (Pan)",
                crust_development: "Soft/Crisp bottom",
                crumb_structure: "Dense/Bready"
            },
            fermentationScience: {
                yeast_activity: 'Standard',
                ph_target: 'Normal',
                organic_acids: 'Low',
                enzymatic_activity: 'Standard'
            },
            processScience: 'styles.fugazzeta_rellena_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.fugazzeta_rellena_proc_mix_title',
                duration: '10 min',
                action: 'styles.fugazzeta_rellena_proc_mix_action',
                science: 'styles.fugazzeta_rellena_proc_mix_sci',
                temperature: '23°C'
            },
            {
                phase: 'Bulk',
                title: 'styles.fugazzeta_rellena_proc_bulk_title',
                duration: '2-4h',
                action: 'styles.fugazzeta_rellena_proc_bulk_action',
                science: 'styles.fugazzeta_rellena_proc_bulk_sci',
                temperature: 'RT'
            },
            {
                phase: 'Ball',
                title: 'styles.fugazzeta_rellena_proc_asm_title',
                duration: '15 min',
                action: 'styles.fugazzeta_rellena_proc_asm_action',
                science: 'styles.fugazzeta_rellena_proc_asm_sci',
                temperature: 'RT'
            },
            {
                phase: 'Bake',
                title: 'styles.fugazzeta_rellena_proc_bake_title',
                duration: '20-30 min',
                action: 'styles.fugazzeta_rellena_proc_bake_action',
                science: 'styles.fugazzeta_rellena_proc_bake_sci',
                temperature: '240°C'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/fugazzeta-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'medialunas',
        name: 'medialunas_name',
        region: 'South America',
        subRegion: 'Argentina',
        category: 'Pastry',
        recipeStyle: RecipeStyle.PASTRY_DANISH, // Laminated
        tags: ['Laminated 2', 'Sweet syrup', 'Breakfast 4'],
        description: 'styles.medialunas_desc',
        history_context: 'styles.medialunas_history',
        base_formula: [
            { name: 'Flour (0000)', percentage: 100 },
            { name: 'Water/Milk', percentage: 45 },
            { name: 'Butter (Lamintation)', percentage: 25 }, // Less than croissant (50%)
            { name: 'Sugar', percentage: 15 },
            { name: 'Eggs', percentage: 10 },
            { name: 'Yeast', percentage: 2 },
            { name: 'Honey', percentage: 2 }
        ],
        specs: {
            hydration: { ideal: 50, min: 45, max: 55 },
            ovenTemp: { ideal: 200, min: 190, max: 210 },
            fermentationTime: '12-24h',
            difficulty: 'Expert'
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: false,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: 'W300320',
                pl_ratio: 'Extensible',
                absorption_capacity: 'Medium',
                protein_type: 'Strong wheat',
                science_explanation: 'styles.medialunas_science_flour'
            },
            thermalProfile: {
                oven_type: 'Convection',
                heat_distribution: 'Even',
                crust_development: "Sticky (Syrup)",
                crumb_structure: 'Tight layers'
            },
            fermentationScience: {
                yeast_activity: 'Standard',
                ph_target: 'Normal',
                organic_acids: 'Low',
                enzymatic_activity: 'Standard'
            },
            processScience: 'styles.medialunas_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.medialunas_proc_mix_title',
                duration: '15 min',
                action: 'styles.medialunas_proc_mix_action',
                science: 'styles.medialunas_proc_mix_sci'
            },
            {
                phase: 'Prep',
                title: 'styles.medialunas_proc_lam_title',
                duration: '1h',
                action: 'styles.medialunas_proc_lam_action',
                science: 'styles.medialunas_proc_lam_sci'
            },
            {
                phase: 'Bake',
                title: 'styles.medialunas_proc_bake_title',
                duration: '15 min',
                action: 'styles.medialunas_proc_bake_action',
                science: 'styles.medialunas_proc_bake_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/medialunas_argentina.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'conchas',
        name: 'conchas_name',
        region: 'North America', // Actually Mexico is NA, but usually grouped in LatAm for cultural styles in this app context? The file is latam.ts.
        subRegion: 'Mexico',
        category: 'Enriched',
        recipeStyle: RecipeStyle.ENRICHED_DINNER_ROLL,
        tags: ['Sweet crust', 'Breakfast 5', 'Colorful'],
        description: 'styles.conchas_desc',
        history_context: 'styles.conchas_history',
        base_formula: [
            { name: 'All Purpose Flour', percentage: 100 },
            { name: 'Eggs', percentage: 20 },
            { name: 'Butter', percentage: 15 },
            { name: 'Sugar', percentage: 20 },
            { name: 'Milk', percentage: 40 },
            { name: 'Yeast', percentage: 1.5 }
        ],
        specs: {
            hydration: { ideal: 60, min: 55, max: 65 },
            ovenTemp: { ideal: 180, min: 170, max: 190 },
            fermentationTime: '4-6h',
            difficulty: 'Medium'
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: false,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: 'W240260 2',
                pl_ratio: 'Balanced',
                absorption_capacity: 'Medium',
                protein_type: "AP",
                science_explanation: 'styles.conchas_science_flour'
            },
            thermalProfile: {
                oven_type: 'Convection',
                heat_distribution: 'Even',
                crust_development: 'Cookie topping',
                crumb_structure: 'Soft cottony'
            },
            fermentationScience: {
                yeast_activity: "High (Sugar)",
                ph_target: 'Normal',
                organic_acids: 'Low',
                enzymatic_activity: 'Standard'
            },
            processScience: 'styles.conchas_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.conchas_proc_mix_title',
                duration: '15 min',
                action: 'styles.conchas_proc_mix_action',
                science: 'styles.conchas_proc_mix_sci'
            },
            {
                phase: 'Prep',
                title: 'styles.conchas_proc_top_title',
                duration: '10 min',
                action: 'styles.conchas_proc_top_action',
                science: 'styles.conchas_proc_top_sci'
            },
            {
                phase: 'Prep',
                title: 'styles.conchas_proc_asm_title',
                duration: '10 min',
                action: 'styles.conchas_proc_asm_action',
                science: 'styles.conchas_proc_asm_sci'
            },
            {
                phase: 'Bake',
                title: 'styles.conchas_proc_bake_title',
                duration: '20 min',
                action: 'styles.conchas_proc_bake_action',
                science: 'styles.conchas_proc_bake_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/conchas_mexican.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: "brazilian_gas_deck",
        name: 'pizza_paulistana_name',
        region: 'South America',
        subRegion: 'São paulo brazil',
        category: 'Pizza',
        recipeStyle: RecipeStyle.PAN_PIZZA,
        tags: ["brazil", "heavy-toppings", "catupiry", "sao-paulo"],
        description: "styles.pizza_paulistana_desc",
        history_context: "styles.pizza_paulistana_history",
        base_formula: [
            { name: 'Flour (W280-320)', percentage: 100 },
            { name: 'Water', percentage: 55 },
            { name: 'Oil (Soybean/Olive)', percentage: 3 },
            { name: 'Sugar', percentage: 1.5 },
            { name: 'Salt', percentage: 2.2 },
            { name: 'Yeast', percentage: 0.5 }
        ],
        specs: {
            hydration: { ideal: 58, min: 55, max: 60 },
            ovenTemp: { ideal: 300, min: 280, max: 330 },
            fermentationTime: '24h',
            difficulty: 'Easy'
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: false,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: 'W280320 2',
                pl_ratio: 'Balanced',
                absorption_capacity: 'Medium',
                protein_type: 'Standard wheat',
                science_explanation: "styles.pizza_paulistana_science_flour"
            },
            thermalProfile: {
                oven_type: 'Gas deck',
                heat_distribution: "Conduction (Moderate)",
                crust_development: 'Crispy bottom soft crumb',
                crumb_structure: 'Dense supporting'
            },
            fermentationScience: {
                yeast_activity: 'Standard',
                ph_target: 'Normal',
                organic_acids: 'Low',
                enzymatic_activity: 'Moderate 7'
            },
            processScience: 'styles.pizza_paulistana_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.pizza_paulistana_proc_mix_title',
                duration: '10 min',
                action: 'styles.pizza_paulistana_proc_mix_action',
                science: 'styles.pizza_paulistana_proc_mix_sci'
            },
            {
                phase: 'Bulk',
                title: 'styles.pizza_paulistana_proc_proof_title',
                duration: '24h',
                action: 'styles.pizza_paulistana_proc_proof_action',
                science: 'styles.pizza_paulistana_proc_proof_sci'
            },
            {
                phase: 'Bake',
                title: 'styles.pizza_paulistana_proc_bake_title',
                duration: '4-6 min',
                action: 'styles.pizza_paulistana_proc_bake_action',
                science: 'styles.pizza_paulistana_proc_bake_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/brazilian_gas_deck_real.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: "arepa",
        name: 'arepa_name',
        region: 'South America',
        subRegion: "Venezuela/Colombia",
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: ['Corn', 'Gluten free 2', 'Stuffed 2'],
        description: "styles.arepa_desc",
        history_context: "styles.arepa_history",
        base_formula: [
            { name: 'Masarepa (Pre-cooked Corn Flour)', percentage: 100 },
            { name: 'Water (Warm)', percentage: 120 },
            { name: 'Salt', percentage: 2 },
            { name: 'Oil/Butter', percentage: 5 }
        ],
        specs: {
            hydration: { ideal: 120, min: 110, max: 130 },
            ovenTemp: { ideal: 200, min: 180, max: 220 },
            fermentationTime: '5m Rest',
            difficulty: 'Easy'
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: false,
            requiresSteam: false,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "N/A",
                pl_ratio: "N/A",
                absorption_capacity: 'Extreme',
                protein_type: "Corn (Zein)",
                science_explanation: 'styles.arepa_science_flour'
            },
            thermalProfile: {
                oven_type: "Budare (Griddle)",
                heat_distribution: 'Conduction',
                crust_development: 'Charred spots',
                crumb_structure: 'Dense moist steamy'
            },
            fermentationScience: {
                yeast_activity: 'None',
                ph_target: 'Neutral 5',
                organic_acids: 'None',
                enzymatic_activity: 'Low'
            },
            processScience: 'styles.arepa_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.arepa_proc_hydrate_title',
                duration: '5 min',
                action: 'styles.arepa_proc_hydrate_action',
                science: 'styles.arepa_proc_hydrate_sci'
            },
            {
                phase: 'Bulk',
                title: 'styles.arepa_proc_rest_title',
                duration: '5 min',
                action: 'styles.arepa_proc_rest_action',
                science: 'styles.arepa_proc_rest_sci'
            },
            {
                phase: 'Cook',
                title: 'styles.arepa_proc_cook_title',
                duration: '15 min',
                action: 'styles.arepa_proc_cook_action',
                science: 'styles.arepa_proc_cook_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/arepa_corn_grill.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: "empanada-dough",
        name: 'empanada_dough_name',
        region: 'South America',
        subRegion: 'Argentina',
        category: 'Pastry',
        recipeStyle: RecipeStyle.MASSA_TORTA, // Fallback if no Pastry style
        tags: ['Lard', 'Fried 2', 'Frying dough'],
        description: "styles.empanada_dough_desc",
        history_context: "styles.empanada_dough_history",
        base_formula: [
            { name: 'AP Flour', percentage: 100 },
            { name: 'Water (Hot)', percentage: 35 },
            { name: 'Beef Fat (Lard)', percentage: 20 },
            { name: 'Salt', percentage: 2 }
        ],
        specs: {
            hydration: { ideal: 35, min: 30, max: 40 },
            ovenTemp: { ideal: 180, min: 160, max: 200 },
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
                w_index: 'W200240 2',
                pl_ratio: 'Extensible',
                absorption_capacity: 'Low',
                protein_type: 'Soft wheat',
                science_explanation: 'styles.empanada_dough_science_flour'
            },
            thermalProfile: {
                oven_type: "Fryer / Oven",
                heat_distribution: "Convection/Conduction",
                crust_development: 'Blistered',
                crumb_structure: 'Flaky'
            },
            fermentationScience: {
                yeast_activity: 'None',
                ph_target: 'Neutral 6',
                organic_acids: 'None',
                enzymatic_activity: 'Low'
            },
            processScience: 'styles.empanada_dough_science_process'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.empanada_dough_proc_scald_title',
                duration: '10 min',
                action: 'styles.empanada_dough_proc_scald_action',
                science: 'styles.empanada_dough_proc_scald_sci'
            },
            {
                phase: 'Prep',
                title: 'styles.empanada_dough_proc_sheet_title',
                duration: '15 min',
                action: 'styles.empanada_dough_proc_sheet_action',
                science: 'styles.empanada_dough_proc_sheet_sci'
            },
            {
                phase: 'Cook',
                title: 'styles.empanada_dough_proc_fry_title',
                duration: '5 min',
                action: 'styles.empanada_dough_proc_fry_action',
                science: 'styles.empanada_dough_proc_fry_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/empanada_dough_raw.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    }
];
