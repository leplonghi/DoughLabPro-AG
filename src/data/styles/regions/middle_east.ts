import { DoughStyle, RecipeStyle } from '../../../types/dough';

export const middleEastStyles: DoughStyle[] = [
    {
        id: 'pita-bread',
        name: 'styles.pita_bread_name',
        region: 'Middle East',
        subRegion: 'Levant',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: ['Steam 6', 'Pocket', 'High heat 3', 'Vegan'],
        description: 'styles.pita_bread_desc',
        history_context: "styles.pita_bread_history",
        base_formula: [
            { name: 'All Purpose Flour', percentage: 100 },
            { name: 'Water', percentage: 60 },
            { name: 'Olive Oil', percentage: 2 },
            { name: 'Salt', percentage: 1.8 },
            { name: 'Instant Yeast', percentage: 1 },
            { name: 'Sugar', percentage: 1 }
        ],
        specs: {
            hydration: { ideal: 60, min: 58, max: 65 },
            ovenTemp: { ideal: 260, min: 250, max: 300 }, // Needs intense heat
            fermentationTime: '2h',
            difficulty: 'Medium'
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W240-260 (Medium)",
                pl_ratio: 'Extensible',
                absorption_capacity: 'Medium',
                protein_type: "Soft/Hard Blend",
                science_explanation: 'styles.pita_bread_science_flour'
            },
            thermalProfile: {
                oven_type: "Hearth/Stone",
                heat_distribution: 'Conductive  radiant',
                crust_development: 'Soft spotted',
                crumb_structure: 'Hollow center'
            },
            fermentationScience: {
                yeast_activity: 'Vigorous',
                ph_target: 'Neutral to slightly acidic',
                organic_acids: 'Lactic 4',
                enzymatic_activity: 'Moderate 8'
            },
            processScience: 'styles.pita_bread_proc_science'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.pita_bread_proc_step_1_title',
                duration: '10 min',
                action: 'styles.pita_bread_proc_step_1_action',
                science: 'styles.pita_bread_proc_step_1_science'
            },
            {
                phase: 'Ball',
                title: 'styles.pita_bread_proc_step_2_title',
                duration: '30 min',
                action: 'styles.pita_bread_proc_step_2_action',
                science: 'styles.pita_bread_proc_step_2_science'
            },
            {
                phase: 'Prep',
                title: 'styles.pita_bread_proc_step_3_title',
                duration: '10 min',
                action: 'styles.pita_bread_proc_step_3_action',
                science: 'styles.pita_bread_proc_step_3_science'
            },
            {
                phase: 'Bake',
                title: 'styles.pita_bread_proc_step_4_title',
                duration: '2-3 min',
                action: 'styles.pita_bread_proc_step_4_action',
                science: 'styles.pita_bread_proc_step_4_science'
            }
        ],
        references: ['Classical arabian cooking', 'Modernist bread 32'],
        images: {
            hero: '/images/styles/pita_fresh_steam.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'simit',
        name: 'styles.simit_name',
        region: 'Middle East',
        subRegion: 'Turkey',
        category: 'Bread',
        recipeStyle: RecipeStyle.PRETZEL, // Closest profile (dipped, sesame)
        tags: ['Sesame', 'Molasses', 'Street food 2', 'Breakfast 6'],
        description: 'styles.simit_desc',
        history_context: 'styles.simit_history',
        base_formula: [
            { name: 'Bread Flour', percentage: 100 },
            { name: 'Water', percentage: 55 },
            { name: 'Salt', percentage: 1.5 },
            { name: 'Yeast', percentage: 1 },
            { name: 'Grape Molasses (Dip)', percentage: 20 },
            { name: 'Sesame Seeds (Coating)', percentage: 30 }
        ],
        specs: {
            hydration: { ideal: 55, min: 50, max: 60 },
            ovenTemp: { ideal: 240, min: 230, max: 250 },
            fermentationTime: '1-2h',
            difficulty: 'Medium'
        },
        scientificProfile: {
            flourRheology: {
                w_index: 'W280300',
                pl_ratio: 'Balanced',
                absorption_capacity: 'Moderate 9',
                protein_type: 'Strong wheat',
                science_explanation: 'styles.simit_science_flour'
            },
            thermalProfile: {
                oven_type: "Deck / Stone",
                heat_distribution: 'Radiant',
                crust_development: "Caramelized (Molasses)",
                crumb_structure: 'Dense tight'
            },
            fermentationScience: {
                yeast_activity: 'Moderate 10',
                ph_target: 'Neutral 7',
                organic_acids: 'Low',
                enzymatic_activity: 'Standard'
            },
            processScience: 'styles.simit_proc_science'
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.simit_proc_step_1_title',
                duration: '10 min',
                action: 'styles.simit_proc_step_1_action',
                science: 'styles.simit_proc_step_1_science'
            },
            {
                phase: 'Prep',
                title: 'styles.simit_proc_step_2_title',
                duration: '15 min',
                action: 'styles.simit_proc_step_2_action',
                science: 'styles.simit_proc_step_2_science'
            },
            {
                phase: 'Cook',
                title: 'styles.simit_proc_step_3_title',
                duration: '1 min',
                action: 'styles.simit_proc_step_3_action',
                science: 'styles.simit_proc_step_3_science'
            },
            {
                phase: 'Bake',
                title: 'styles.simit_proc_step_4_title',
                duration: '15-18 min',
                action: 'styles.simit_proc_step_4_action',
                science: 'styles.simit_proc_step_4_science'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/simit-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    }
];
