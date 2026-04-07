import { DoughStyle, RecipeStyle } from '../../../types/dough';

export const europeStyles: DoughStyle[] = [
    {
        id: 'baguette-tradition',
        name: "styles.baguette_tradition",
        region: 'Europe',
        subRegion: 'France',
        category: 'Bread',
        recipeStyle: RecipeStyle.BAGUETTE,
        tags: ['styles.baguette_tradition_tag_steam', 'styles.baguette_tradition_tag_crispy', 'styles.baguette_tradition_tag_autolyse', 'styles.baguette_tradition_tag_poolish'],
        description: "styles.baguette_tradition_desc",
        history_context: "baguette_tradition_history",
        base_formula: [
            { name: 'styles.baguette_tradition_ing_flour', percentage: 100 },
            { name: 'styles.baguette_tradition_ing_water', percentage: 72 },
            { name: 'styles.baguette_tradition_ing_salt', percentage: 2 },
            { name: 'styles.baguette_tradition_ing_yeast', percentage: 0.5 },
        ],
        specs: {
            hydration: { ideal: 72, min: 68, max: 78 },
            ovenTemp: { ideal: 250, min: 240, max: 260 },
            fermentationTime: '18-24h',
            difficulty: 'Hard',
            ballWeight: { recommended: 350, min: 300, max: 400 }
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: true,
            allowOil: false,
        },
        scientificProfile: {
            flourRheology: {
                w_index: "T65 (W220-240)",
                pl_ratio: "0.5 (Extensible)",
                absorption_capacity: "65-70%",
                protein_type: 'French soft wheat',
                science_explanation: "baguette_tradition_science_flour"
            },
            thermalProfile: {
                oven_type: "Deck Oven (Steam)",
                heat_distribution: 'Conduction  steam',
                crust_development: 'Thin crispy caramelized',
                crumb_structure: 'Open irregular alveoli',
            },
            fermentationScience: {
                yeast_activity: 'Controlled',
                ph_target: "~5.5",
                organic_acids: "Balanced (Lactic focus)",
                enzymatic_activity: "High (Autolyse driven)",
            },
            processScience: "baguette_tradition_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.baguette_tradition_proc_mix_title',
                duration: '30-60 min',
                action: 'styles.baguette_tradition_proc_mix_action',
                science: 'styles.baguette_tradition_proc_mix_sci',
            },
            {
                phase: 'Bulk',
                title: 'styles.baguette_tradition_proc_bulk_title',
                duration: '3-4h',
                action: 'styles.baguette_tradition_proc_bulk_action',
                science: 'styles.baguette_tradition_proc_bulk_sci',
            },
            {
                phase: 'Ball',
                title: 'styles.baguette_tradition_proc_ball_title',
                duration: '20 min',
                action: 'styles.baguette_tradition_proc_ball_action',
                science: 'styles.baguette_tradition_proc_ball_sci',
            },
            {
                phase: 'Prep',
                title: 'styles.baguette_tradition_proc_prep_title',
                duration: '5 min',
                action: 'styles.baguette_tradition_proc_prep_action',
                science: 'styles.baguette_tradition_proc_prep_sci',
            },
            {
                phase: 'Bake',
                title: 'styles.baguette_tradition_proc_bake_title',
                duration: '20-25 min',
                action: 'styles.baguette_tradition_proc_bake_action',
                science: 'styles.baguette_tradition_proc_bake_sci',
            },
        ],
        references: ['Le goût du pain  raymond calvel', 'Décret n931074 du 13 septembre 1993'],
        images: {
            hero: '/images/styles/baguette_hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png',
        },
        recommendedFlavorComponents: ["salted_butter_normandy", "brie_de_meaux", "malt_powder", "honey_raw", "vanilla_madagascar", "olive_oil_extra_virgin"]
    },
    {
        id: 'brioche-tete',
        name: "styles.brioche_tete",
        region: 'Europe',
        subRegion: 'France',
        category: 'Enriched',
        recipeStyle: RecipeStyle.BRIOCHE,
        tags: ['styles.brioche_tete_tag_highfat', 'styles.brioche_tete_tag_eggs', 'styles.brioche_tete_tag_butter', 'styles.brioche_tete_tag_sponge'],
        description: "styles.brioche_tete_desc",
        history_context: "brioche_tete_history",
        base_formula: [
            { name: 'styles.brioche_tete_ing_flour', percentage: 100 },
            { name: 'styles.brioche_tete_ing_eggs', percentage: 50 },
            { name: 'styles.brioche_tete_ing_butter', percentage: 50 },
            { name: 'styles.brioche_tete_ing_sugar', percentage: 12 },
            { name: 'styles.brioche_tete_ing_salt', percentage: 2 },
            { name: 'styles.brioche_tete_ing_yeast', percentage: 2 },
            { name: 'styles.brioche_tete_ing_milk', percentage: 10 },
        ],
        specs: {
            hydration: { ideal: 60, min: 50, max: 70 },
            ovenTemp: { ideal: 190, min: 180, max: 200 },
            fermentationTime: '12-24h',
            difficulty: 'Expert',
            ballWeight: { recommended: 400, min: 250, max: 600 }
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            allowOil: true,
            requiresSteam: false,
        },
        scientificProfile: {
            flourRheology: {
                w_index: "T45 (W350+)",
                pl_ratio: "Balanced (P/L 0.6)",
                absorption_capacity: "High (Lipids)",
                protein_type: 'Strong French Wheat',
                science_explanation: "brioche_tete_science_flour"
            },
            thermalProfile: {
                oven_type: "Convection/Deck",
                heat_distribution: 'Even',
                crust_development: "Soft, golden (Egg wash)",
                crumb_structure: "Tight, cotton-like (shreddable)",
            },
            fermentationScience: {
                yeast_activity: "High (Osmotolerant yeast often needed)",
                ph_target: "5.0-5.4",
                organic_acids: 'Lactic 2',
                enzymatic_activity: 'Moderate 3',
            },
            processScience: "brioche_tete_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.brioche_tete_proc_sponge_title',
                duration: '45 min',
                action: 'styles.brioche_tete_proc_sponge_action',
                science: 'styles.brioche_tete_proc_sponge_sci',
            },
            {
                phase: 'Mix',
                title: 'styles.brioche_tete_proc_mix_title',
                duration: '15-20 min',
                action: 'styles.brioche_tete_proc_mix_action',
                science: 'styles.brioche_tete_proc_mix_sci',
            },
            {
                phase: 'Mix',
                title: 'styles.brioche_tete_proc_bass_title',
                duration: '10 min',
                action: 'styles.brioche_tete_proc_bass_action',
                science: 'styles.brioche_tete_proc_bass_sci',
            },
            {
                phase: 'Bulk',
                title: 'styles.brioche_tete_proc_cold_title',
                duration: '12h+',
                action: 'styles.brioche_tete_proc_cold_action',
                science: 'styles.brioche_tete_proc_cold_sci',
            },
            {
                phase: 'Prep',
                title: 'styles.brioche_tete_proc_shape_title',
                duration: '10 min',
                action: "styles.brioche_tete_proc_shape_action",
                science: 'styles.brioche_tete_proc_shape_sci',
            },
            {
                phase: 'Bake',
                title: 'styles.brioche_tete_proc_bake_title',
                duration: '25-30 min',
                action: 'styles.brioche_tete_proc_bake_action',
                science: 'styles.brioche_tete_proc_bake_sci',
            },
        ],
        references: [],
        images: {
            hero: '/images/styles/brioche-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png',
        },
        recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw", "vanilla_madagascar", "dark_chocolate_70", "citrus_zest", "raisins"]
    },
    {
        id: 'laugenbrezel',
        name: "styles.laugenbrezel",
        region: 'Europe',
        subRegion: 'Germany',
        category: 'Snack',
        recipeStyle: RecipeStyle.PRETZEL,
        tags: ['styles.laugenbrezel_tag_lye', 'styles.laugenbrezel_tag_alkaline', 'styles.laugenbrezel_tag_twist'],
        description: "styles.laugenbrezel_desc",
        history_context: "laugenbrezel_history",
        base_formula: [
            { name: 'styles.laugenbrezel_ing_flour', percentage: 100 },
            { name: 'styles.laugenbrezel_ing_water', percentage: 50 },
            { name: 'styles.laugenbrezel_ing_lard', percentage: 5 },
            { name: 'styles.laugenbrezel_ing_salt', percentage: 2 },
            { name: 'styles.laugenbrezel_ing_malt', percentage: 1 },
            { name: 'styles.laugenbrezel_ing_yeast', percentage: 2 },
        ],
        specs: {
            hydration: { ideal: 50, min: 45, max: 55 },
            ovenTemp: { ideal: 220, min: 210, max: 230 },
            fermentationTime: '2-4h',
            difficulty: 'Medium',
            ballWeight: { recommended: 85, min: 70, max: 110 }
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: false,
            allowOil: true,
        },
        scientificProfile: {
            flourRheology: {
                w_index: "Type 550 (W280-300)",
                pl_ratio: "Stiff (P/L > 0.8)",
                absorption_capacity: "n/a",
                protein_type: 'German Wheat',
                science_explanation: "laugenbrezel_science_flour"
            },
            thermalProfile: {
                oven_type: 'Convection',
                heat_distribution: 'Radiant',
                crust_development: "Deep Mahogany (Alkaline reaction)",
                crumb_structure: 'Dense chewy',
            },
            fermentationScience: {
                yeast_activity: 'Restrained',
                ph_target: "Surface pH > 10 (Lye)",
                organic_acids: 'Minimal',
                enzymatic_activity: 'Low',
            },
            processScience: "laugenbrezel_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.laugenbrezel_proc_mix_title',
                duration: '5-8 min',
                action: 'styles.laugenbrezel_proc_mix_action',
                science: "styles.laugenbrezel_proc_mix_sci",
            },
            {
                phase: 'Bulk',
                title: 'styles.laugenbrezel_proc_bulk_title',
                duration: '30-60 min',
                action: 'styles.laugenbrezel_proc_bulk_action',
                science: 'styles.laugenbrezel_proc_bulk_sci',
            },
            {
                phase: 'Prep',
                title: 'styles.laugenbrezel_proc_shape_title',
                duration: '15 min',
                action: 'styles.laugenbrezel_proc_shape_action',
                science: 'styles.laugenbrezel_proc_shape_sci',
            },
            {
                phase: 'Prep',
                title: 'styles.laugenbrezel_proc_skin_title',
                duration: '30 min',
                action: 'styles.laugenbrezel_proc_skin_action',
                science: 'styles.laugenbrezel_proc_skin_sci',
            },
            {
                phase: 'Cook',
                title: 'styles.laugenbrezel_proc_lye_title',
                duration: '10 sec',
                action: 'styles.laugenbrezel_proc_lye_action',
                science: 'styles.laugenbrezel_proc_lye_sci',
            },
            {
                phase: 'Bake',
                title: 'styles.laugenbrezel_proc_bake_title',
                duration: '12-15 min',
                action: 'styles.laugenbrezel_proc_bake_action',
                science: 'styles.laugenbrezel_proc_bake_sci',
            },
        ],
        references: ['German baking standards'],
        images: {
            hero: '/images/styles/pretzel_laugen_real.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png',
        },
        recommendedFlavorComponents: ["salted_butter_normandy", "malt_powder", "lard_pork_fat", "sesame_seeds", "poppy_seeds"]
    },
    {
        id: 'english_muffin',
        name: "styles.english_muffin",
        region: 'Europe',
        subRegion: 'UK',
        category: 'Bread',
        recipeStyle: RecipeStyle.ENGLISH_MUFFIN,
        tags: ['styles.english_muffin_tag_griddle', 'styles.english_muffin_tag_nooks', 'styles.english_muffin_tag_breakfast'],
        description: "styles.english_muffin_desc",
        history_context: "english_muffin_history",
        base_formula: [
            { name: 'styles.english_muffin_ing_flour', percentage: 100 },
            { name: 'styles.english_muffin_ing_milk', percentage: 75 },
            { name: 'styles.english_muffin_ing_yeast', percentage: 1 },
            { name: 'styles.english_muffin_ing_salt', percentage: 2 },
            { name: 'styles.english_muffin_ing_sugar', percentage: 1 },
            { name: 'styles.english_muffin_ing_butter', percentage: 2 }
        ],
        specs: {
            hydration: { ideal: 78, min: 75, max: 82 },
            ovenTemp: { ideal: 200, min: 180, max: 220 },
            fermentationTime: '12-24h',
            difficulty: 'Medium',
            ballWeight: { recommended: 65, min: 55, max: 80 }
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: false,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W300-320",
                pl_ratio: "Balanced",
                absorption_capacity: "High",
                protein_type: 'Strong Bread Flour',
                science_explanation: "english_muffin_science_flour"
            },
            thermalProfile: {
                oven_type: "Griddle / Skillet",
                heat_distribution: 'Conduction',
                crust_development: 'Pale dusted with semolina',
                crumb_structure: "Large alveoli (Nooks)"
            },
            fermentationScience: {
                yeast_activity: 'High',
                ph_target: "Acidic (Sourdough/Buttermilk often used)",
                organic_acids: 'Lactic 3',
                enzymatic_activity: 'High'
            },
            processScience: "english_muffin_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.english_muffin_proc_mix_title',
                duration: '15 min',
                action: 'styles.english_muffin_proc_mix_action',
                science: 'styles.english_muffin_proc_mix_sci'
            },
            {
                phase: 'Bulk',
                title: 'styles.english_muffin_proc_bulk_title',
                duration: '12h',
                action: 'styles.english_muffin_proc_bulk_action',
                science: 'styles.english_muffin_proc_bulk_sci'
            },
            {
                phase: 'Cook',
                title: 'styles.english_muffin_proc_cook_title',
                duration: '14 min',
                action: 'styles.english_muffin_proc_cook_action',
                science: 'styles.english_muffin_proc_cook_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/english_muffin_toasted.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        },
        recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw", "cream_cheese", "strawberry_jam", "citrus_zest"]
    },
    {
        id: 'khachapuri-adjaruli',
        name: "styles.khachapuri_adjaruli",
        region: 'Europe',
        subRegion: 'Georgia',
        category: 'Enriched',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: ['styles.khachapuri_adjaruli_tag_cheeseboat', 'styles.khachapuri_adjaruli_tag_egg', 'styles.khachapuri_adjaruli_tag_rich'],
        description: "styles.khachapuri_adjaruli_desc",
        history_context: "khachapuri_adjaruli_history",
        base_formula: [
            { name: 'styles.khachapuri_adjaruli_ing_flour', percentage: 100 },
            { name: 'styles.khachapuri_adjaruli_ing_watermilk', percentage: 60 },
            { name: 'styles.khachapuri_adjaruli_ing_yeast', percentage: 1 },
            { name: 'styles.khachapuri_adjaruli_ing_salt', percentage: 1.8 },
            { name: 'styles.khachapuri_adjaruli_ing_oil', percentage: 3 },
            { name: 'styles.khachapuri_adjaruli_ing_sugar', percentage: 1 }
        ],
        specs: {
            hydration: { ideal: 60, min: 58, max: 65 },
            ovenTemp: { ideal: 250, min: 230, max: 270 },
            fermentationTime: '2-4h',
            difficulty: 'Medium',
            ballWeight: { recommended: 300, min: 200, max: 450 }
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: false,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W240-260",
                pl_ratio: "Extensible",
                absorption_capacity: "Medium",
                protein_type: 'Bread Flour',
                science_explanation: "khachapuri_adjaruli_science_flour"
            },
            thermalProfile: {
                oven_type: "Hearth / Deck",
                heat_distribution: 'Radiant',
                crust_development: 'Browned',
                crumb_structure: 'Soft airy rim'
            },
            fermentationScience: {
                yeast_activity: 'Standard',
                ph_target: 'Normal',
                organic_acids: 'Low',
                enzymatic_activity: 'Standard'
            },
            processScience: "khachapuri_adjaruli_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.khachapuri_adjaruli_proc_mix_title',
                duration: '10 min',
                action: 'styles.khachapuri_adjaruli_proc_mix_action',
                science: 'styles.khachapuri_adjaruli_proc_mix_sci'
            },
            {
                phase: 'Prep',
                title: 'styles.khachapuri_adjaruli_proc_shape_title',
                duration: '10 min',
                action: 'styles.khachapuri_adjaruli_proc_shape_action',
                science: 'styles.khachapuri_adjaruli_proc_shape_sci'
            },
            {
                phase: 'Bake',
                title: 'styles.khachapuri_adjaruli_proc_bake_title',
                duration: '15 min',
                action: 'styles.khachapuri_adjaruli_proc_bake_action',
                science: 'styles.khachapuri_adjaruli_proc_bake_sci'
            },
            {
                phase: 'Cook',
                title: 'styles.khachapuri_adjaruli_proc_cook_title',
                duration: '1 min',
                action: 'styles.khachapuri_adjaruli_proc_cook_action',
                science: 'styles.khachapuri_adjaruli_proc_cook_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/khachapuri_adjarian.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        },
        recommendedFlavorComponents: ["salted_butter_normandy", "fior_di_latte", "pecorino_romano", "cherry_tomatoes_confit", "basil_fresh"]
    },
    {
        id: 'danish-rugbrod',
        name: "styles.danish_rugbrod",
        region: 'Europe',
        subRegion: 'Denmark',
        category: 'Bread',
        recipeStyle: RecipeStyle.RYE,
        tags: ['styles.danish_rugbrod_tag_sourdough', 'styles.danish_rugbrod_tag_wholegrain', 'styles.danish_rugbrod_tag_seeds', 'styles.danish_rugbrod_tag_dense'],
        description: "styles.danish_rugbrod_desc",
        history_context: "danish_rugbrod_history",
        base_formula: [
            { name: 'styles.danish_rugbrod_ing_rye', percentage: 100 },
            { name: 'styles.ingredients_water', percentage: 90 },
            { name: 'styles.danish_rugbrod_ing_kernels', percentage: 50 },
            { name: 'styles.danish_rugbrod_ing_seeds', percentage: 30 },
            { name: 'styles.danish_rugbrod_ing_starter', percentage: 30 },
            { name: 'styles.ingredients_salt', percentage: 2 },
            { name: 'styles.danish_rugbrod_ing_malt', percentage: 3 }
        ],
        specs: {
            hydration: { ideal: 90, min: 80, max: 100 },
            ovenTemp: { ideal: 180, min: 160, max: 200 },
            fermentationTime: '12-24h',
            difficulty: 'Hard',
            ballWeight: { recommended: 900, min: 700, max: 1200 }
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: true,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "N/A (Rye)",
                pl_ratio: "Viscous (Pentosan driven)",
                absorption_capacity: 'Very high',
                protein_type: "Rye (Secalins)",
                science_explanation: "danish_rugbrod_science_flour"
            },
            thermalProfile: {
                oven_type: 'Pullman pan',
                heat_distribution: 'Conduction',
                crust_development: 'Thick',
                crumb_structure: 'Dense moist'
            },
            fermentationScience: {
                yeast_activity: 'Sourdough',
                ph_target: "<4.5 (Acidic)",
                organic_acids: 'Acetic',
                enzymatic_activity: 'Inhibited by acid'
            },
            processScience: "danish_rugbrod_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.danish_rugbrod_proc_soak_title',
                duration: '12h',
                action: 'styles.danish_rugbrod_proc_soak_action',
                science: 'styles.danish_rugbrod_proc_soak_sci'
            },
            {
                phase: 'Mix',
                title: 'styles.danish_rugbrod_proc_paste_title',
                duration: '15 min',
                action: 'styles.danish_rugbrod_proc_paste_action',
                science: 'styles.danish_rugbrod_proc_paste_sci'
            },
            {
                phase: 'Bulk',
                title: 'styles.danish_rugbrod_proc_proof_title',
                duration: '2-4h',
                action: 'styles.danish_rugbrod_proc_proof_action',
                science: 'styles.danish_rugbrod_proc_proof_sci'
            },
            {
                phase: 'Bake',
                title: 'styles.danish_rugbrod_proc_bake_title',
                duration: '60-90 min',
                action: 'styles.danish_rugbrod_proc_bake_action',
                science: 'styles.danish_rugbrod_proc_bake_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/danish_rye_slice.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        },
        recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw", "seeds", "sunflower_seeds", "caraway_seeds"]
    },
    {
        id: 'tiger-bread',
        name: "styles.tiger_bread",
        region: 'Europe',
        subRegion: 'Netherlands',
        category: 'Bread',
        recipeStyle: RecipeStyle.SANDWICH_LOAF,
        tags: ['styles.tiger_bread_tag_topping', 'styles.tiger_bread_tag_crunchy', 'styles.tiger_bread_tag_rice'],
        description: "styles.tiger_bread_desc",
        history_context: "tiger_bread_history",
        base_formula: [
            { name: 'styles.tiger_bread_ing_flour', percentage: 100 },
            { name: 'styles.tiger_bread_ing_water', percentage: 62 },
            { name: 'styles.tiger_bread_ing_yeast', percentage: 2 },
            { name: 'styles.tiger_bread_ing_salt', percentage: 2 },
            { name: 'styles.tiger_bread_ing_sugar', percentage: 2 },
            { name: 'styles.tiger_bread_ing_oil', percentage: 2 }
        ],
        specs: {
            hydration: { ideal: 62, min: 60, max: 65 },
            ovenTemp: { ideal: 200, min: 190, max: 210 },
            fermentationTime: '2-4h',
            difficulty: 'Medium',
            ballWeight: { recommended: 800, min: 500, max: 1000 }
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            requiresSteam: true,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W280",
                pl_ratio: "Balanced",
                absorption_capacity: "Medium",
                protein_type: 'White Wheat',
                science_explanation: "tiger_bread_science_flour"
            },
            thermalProfile: {
                oven_type: 'Convection',
                heat_distribution: 'Even',
                crust_development: "Cracked (Topping)",
                crumb_structure: 'Soft 3'
            },
            fermentationScience: {
                yeast_activity: 'High',
                ph_target: 'Normal',
                organic_acids: 'Low',
                enzymatic_activity: 'Standard'
            },
            processScience: "tiger_bread_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.tiger_bread_proc_mix_title',
                duration: '10 min',
                action: 'styles.tiger_bread_proc_mix_action',
                science: 'styles.tiger_bread_proc_mix_sci'
            },
            {
                phase: 'Prep',
                title: 'styles.tiger_bread_proc_prep_title',
                duration: '15 min',
                action: 'styles.tiger_bread_proc_prep_action',
                science: 'styles.tiger_bread_proc_prep_sci'
            },
            {
                phase: 'Bake',
                title: 'styles.tiger_bread_proc_bake_title',
                duration: '30 min',
                action: 'styles.tiger_bread_proc_bake_action',
                science: 'styles.tiger_bread_proc_bake_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/tiger_bread_crackled.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        },
        recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw", "sesame_seeds", "poppy_seeds", "butter_dry_84"]
    },
    {
        id: 'irish-soda-bread',
        name: "styles.irish_soda_bread",
        region: 'Europe',
        subRegion: 'Ireland',
        category: 'Bread',
        recipeStyle: RecipeStyle.COUNTRY_LOAF,
        tags: ['styles.irish_soda_bread_tag_quick', 'styles.irish_soda_bread_tag_noyeast', 'styles.irish_soda_bread_tag_buttermilk'],
        description: "styles.irish_soda_bread_desc",
        history_context: "irish_soda_bread_history",
        base_formula: [
            { name: 'styles.irish_soda_bread_ing_flour', percentage: 100 },
            { name: 'styles.irish_soda_bread_ing_buttermilk', percentage: 90 },
            { name: 'styles.irish_soda_bread_ing_soda', percentage: 2 },
            { name: 'styles.ingredients_salt', percentage: 1.5 }
        ],
        specs: {
            hydration: { ideal: 85, min: 80, max: 95 },
            ovenTemp: { ideal: 200, min: 190, max: 210 },
            fermentationTime: '0 min',
            difficulty: 'Easy',
            ballWeight: { recommended: 700, min: 450, max: 900 }
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: false,
            requiresSteam: false,
            allowOil: false
        },
        scientificProfile: {
            flourRheology: {
                w_index: "W150-180 (Soft)",
                pl_ratio: 'Weak',
                absorption_capacity: 'Low',
                protein_type: 'Irish soft wheat',
                science_explanation: "irish_soda_bread_science_flour"
            },
            thermalProfile: {
                oven_type: "Dutch Oven / Bastible",
                heat_distribution: 'Conduction',
                crust_development: 'Thick hard',
                crumb_structure: 'Dense cakelike'
            },
            fermentationScience: {
                yeast_activity: 'None',
                ph_target: "Acidic (Buttermilk)",
                organic_acids: "Lactic (added directly)",
                enzymatic_activity: 'Low'
            },
            processScience: "irish_soda_bread_science_process"
        },
        process: [
            {
                phase: 'Mix',
                title: 'styles.irish_soda_bread_proc_mix_title',
                duration: '3 min',
                action: 'styles.irish_soda_bread_proc_mix_action',
                science: 'styles.irish_soda_bread_proc_mix_sci'
            },
            {
                phase: 'Prep',
                title: 'styles.irish_soda_bread_proc_score_title',
                duration: '1 min',
                action: 'styles.irish_soda_bread_proc_score_action',
                science: 'styles.irish_soda_bread_proc_score_sci'
            },
            {
                phase: 'Bake',
                title: 'styles.irish_soda_bread_proc_bake_title',
                duration: '30-40 min',
                action: 'styles.irish_soda_bread_proc_bake_action',
                science: 'styles.irish_soda_bread_proc_bake_sci'
            }
        ],
        references: [],
        images: {
            hero: '/images/styles/irish_soda_bread_rustic.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        },
        recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw", "raisins", "seeds", "butter_dry_84"]
    }
];
