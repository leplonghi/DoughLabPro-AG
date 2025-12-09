import { DoughStyle, RecipeStyle } from '../../../types/dough';

export const asiaStyles: DoughStyle[] = [
    {
        id: 'asia_shokupan',
        name: 'Shokupan (Japanese Milk Bread)',
        region: 'Asia',
        subRegion: 'Japan',
        category: 'Soft Bread',
        recipeStyle: RecipeStyle.HOKKAIDO_MILK_BREAD,
        tags: ['Tangzhong', 'Yudane', 'Milk', 'Soft'],
        description: 'Ultra-soft and fluffy Japanese milk bread, characterized by the use of Tangzhong (water roux method) for superior moisture retention and extensive shelf life.',
        history_context: 'Originating in Japan in the 20th century, Shokupan was developed to cater to the Japanese palate regarding soft and moist textures ("mochi-mochi"), adapting Western techniques.',
        base_formula: [
            { name: 'Bread Flour (High Protein)', percentage: 100 },
            { name: 'Total Hydration (Water + Milk)', percentage: 70 },
            { name: 'Sugar', percentage: 8 },
            { name: 'Butter', percentage: 8 },
            { name: 'Salt', percentage: 1.8 },
            { name: 'Instant Yeast', percentage: 1.5 }
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
            allowOil: true // Butter is common
        },
        scientificProfile: {
            flourRheology: {
                w_index: "High Protein (W350+)",
                pl_ratio: "Balanced",
                absorption_capacity: "High",
                protein_type: "Strong Wheat",
                science_explanation: 'High protein is required to support enrichment (fat/sugar) and the high hydration of the Tangzhong.'
            },
            thermalProfile: {
                oven_type: "Convection",
                heat_distribution: "Even",
                crust_development: "Soft, golden",
                crumb_structure: "Feathery, shreddable"
            },
            fermentationScience: {
                yeast_activity: "High",
                ph_target: "Normal",
                organic_acids: "Balanced",
                enzymatic_activity: "High (Starch Gelatinization)"
            },
            processScience: 'The Tangzhong method (pre-gelatinizing 5-10% of the flour at 65°C) captures water in a stable starch structure, preventing it from evaporating or migrating, resulting in prolonged softness.'
        },
        process: [
            {
                phase: 'Prep',
                title: 'Prepare Tangzhong',
                duration: '15 min',
                action: 'Cook 1 part flour with 5 parts liquid to 65°C (paste consistency). Cool.',
                science: 'Starch gelatinization allows for higher water absorption without making the dough sticky.'
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
            dough: '/images/styles/shokupan-dough.jpg',
            crumb: '/images/styles/shokupan-crumb.jpg'
        }
    },
    {
        id: 'asia_naan',
        name: 'Butter Garlic Naan',
        region: 'Asia',
        subRegion: 'India',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: ['Tandoor', 'Yogurt', 'High Heat', 'Soft'],
        description: 'Traditional Indian flatbread, baked on the walls of a Tandoor oven, flavored with garlic and butter (Ghee).',
        history_context: 'A staple in North Indian and Pakistani cuisine, Naan has Persian roots and evolved with the use of yogurt and yeast to create a soft and slightly elastic texture.',
        base_formula: [
            { name: 'Wheat Flour (Maida/AP)', percentage: 100 },
            { name: 'Hydration (Water + Yogurt)', percentage: 65 },
            { name: 'Ghee/Oil', percentage: 5 },
            { name: 'Salt', percentage: 2 },
            { name: 'Yeast', percentage: 1 },
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
                absorption_capacity: "Medium",
                protein_type: "Maida / AP",
                science_explanation: 'Extensibility is key to stretching the Naan into a teardrop shape without tearing. Gluten must be relaxed.'
            },
            thermalProfile: {
                oven_type: "Tandoor",
                heat_distribution: "Radiant (Walls)",
                crust_development: "Charred bubbles",
                crumb_structure: "Soft, irregular"
            },
            fermentationScience: {
                yeast_activity: "Fast",
                ph_target: "Acidic (Yogurt)",
                organic_acids: "Lactic",
                enzymatic_activity: "Protease (Tenderizing)"
            },
            processScience: 'The yogurt in the dough provides lactic acidity which softens the gluten network, allowing the dough to be stretched into a teardrop shape without tearing before entering the Tandoor.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Mixing',
                duration: '10 min',
                action: 'Mix flour, yogurt, water, and yeast. Moderate knead.',
                science: 'Yogurt initiates acidification and hydration of proteins.'
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
            dough: '/images/styles/naan-dough.jpg',
            crumb: '/images/styles/naan-crumb.jpg'
        }
    },
    {
        id: 'asia_guabao',
        name: 'Gua Bao (Steamed Bun)',
        region: 'Asia',
        subRegion: 'Taiwan/China',
        category: 'Buns',
        recipeStyle: RecipeStyle.ENRICHED_BRIOCHE_CLASSIC,
        tags: ['Steam', 'Low Protein', 'White'],
        description: 'Steamed bun, soft, white and slightly sweet, traditionally filled with pork belly.',
        history_context: 'Popular in Taiwan and Fujian, Gua Bao is often called the "Taiwanese burger". The steaming technique is ancient in China (Mantou/Baozi).',
        base_formula: [
            { name: 'Low Protein Flour (Hong Kong Flour)', percentage: 100 },
            { name: 'Hydration (Water/Milk)', percentage: 55 },
            { name: 'Sugar', percentage: 10 },
            { name: 'Oil', percentage: 4 },
            { name: 'Yeast', percentage: 1 },
            { name: 'Baking Powder (Optional)', percentage: 0.5 }
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
                absorption_capacity: "Low",
                protein_type: "Low Protein / Bleached",
                science_explanation: 'Low gluten content desired for "cottony" texture. Bleached flour helps with whiteness.'
            },
            thermalProfile: {
                oven_type: "Steamer",
                heat_distribution: "Steam (Convection)",
                crust_development: "None (Skin only)",
                crumb_structure: "Uniform, cottony"
            },
            fermentationScience: {
                yeast_activity: "Moderate",
                ph_target: "Neutral",
                organic_acids: "None",
                enzymatic_activity: "Low"
            },
            processScience: 'Steaming (constant 100°C) prevents the Maillard reaction (which occurs above 140°C), maintaining the pure white color and smooth skin, without a crispy crust.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Intensive Mix',
                duration: '15 min',
                action: 'Knead until dough is very smooth and white. Remove all air (degas).',
                science: 'Uniform structure is crucial to avoid bubbles on the surface after steaming.'
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
            dough: '/images/styles/guabao-dough.jpg',
            crumb: '/images/styles/guabao-crumb.jpg'
        }
    }
];
