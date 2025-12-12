import { DoughStyle, RecipeStyle } from '../../../types/dough';
import { useTranslation } from '@/i18n';

export const asiaStyles: DoughStyle[] = [
    {
        id: 'asia_shokupan',
        name: 'Shokupan (Japanese Milk Bread)',
        region: 'Asia',
        subRegion: 'Japan',
        category: 'Soft Bread',
        recipeStyle: RecipeStyle.HOKKAIDO_MILK_BREAD,
        tags: [t('styles.tangzhong'), t('styles.yudane'), t('styles.milk'), t('styles.soft')],
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
                pl_ratio: t('styles.balanced_3'),
                absorption_capacity: t('styles.high'),
                protein_type: t('styles.strong_wheat'),
                science_explanation: 'High protein is required to support enrichment (fat/sugar) and the high hydration of the Tangzhong.'
            },
            thermalProfile: {
                oven_type: t('styles.convection'),
                heat_distribution: t('styles.even'),
                crust_development: t('styles.soft_golden'),
                crumb_structure: t('styles.feathery_shreddable')
            },
            fermentationScience: {
                yeast_activity: t('styles.high_2'),
                ph_target: t('styles.normal'),
                organic_acids: t('styles.balanced_4'),
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
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'asia_naan',
        name: 'Butter Garlic Naan',
        region: 'Asia',
        subRegion: 'India',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: [t('styles.tandoor'), t('styles.yogurt'), t('styles.high_heat'), t('styles.soft_2')],
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
                absorption_capacity: t('styles.medium_42'),
                protein_type: "Maida / AP",
                science_explanation: 'Extensibility is key to stretching the Naan into a teardrop shape without tearing. Gluten must be relaxed.'
            },
            thermalProfile: {
                oven_type: t('styles.tandoor_2'),
                heat_distribution: "Radiant (Walls)",
                crust_development: t('styles.charred_bubbles'),
                crumb_structure: t('styles.soft_irregular')
            },
            fermentationScience: {
                yeast_activity: t('styles.fast'),
                ph_target: "Acidic (Yogurt)",
                organic_acids: t('styles.lactic'),
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
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'asia_guabao',
        name: 'Gua Bao (Steamed Bun)',
        region: 'Asia',
        subRegion: 'Taiwan/China',
        category: 'Buns',
        recipeStyle: RecipeStyle.ENRICHED_BRIOCHE_CLASSIC,
        tags: [t('styles.steam'), t('styles.low_protein'), t('styles.white')],
        description: 'Steamed bun, soft, white and slightly sweet, traditionally filled with pork belly.',
        history_context: 'Popular in Taiwan and Fujian, Gua Bao is often called the t('common.taiwanese_burger'). The steaming technique is ancient in China (Mantou/Baozi).',
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
                absorption_capacity: t('styles.low'),
                protein_type: "Low Protein / Bleached",
                science_explanation: 'Low gluten content desired for "cottony" texture. Bleached flour helps with whiteness.'
            },
            thermalProfile: {
                oven_type: t('styles.steamer'),
                heat_distribution: "Steam (Convection)",
                crust_development: "None (Skin only)",
                crumb_structure: t('styles.uniform_cottony')
            },
            fermentationScience: {
                yeast_activity: t('styles.moderate'),
                ph_target: t('styles.neutral'),
                organic_acids: t('styles.none_2'),
                enzymatic_activity: t('styles.low_2')
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
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'steamed-baozi',
        name: 'Steamed Baozi (Mantou Form)',
        region: 'Asia',
        subRegion: 'China',
        category: 'Buns',
        recipeStyle: RecipeStyle.ENRICHED_BRIOCHE_CLASSIC, // Closest match
        tags: [t('styles.steam_2'), t('styles.breakfast')],
        description: 'The classic Northern Chinese steamed bun. Distinct from the folded t('common.gua_bao'), this is a fully sealed bun (often filled) made with a t('common.lao_mian') (old dough) starter for flavor and texture.',
        history_context: 'Attributed to Zhuge Liang in the Three Kingdoms period (3rd century AD). t('common.mantou') originally meant t('common.barbarian_head') due to its shape. It is the staple bread of Northern China where wheat dominates rice.',
        base_formula: [
            { name: 'Medium Protein Flour', percentage: 100 },
            { name: 'Water', percentage: 50 },
            { name: 'Yeast', percentage: 1 },
            { name: 'Sugar', percentage: 5 },
            { name: 'Lard/Oil', percentage: 5 },
            { name: 'Baking Powder', percentage: 1 } // Modern addition for fluffiness
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
                w_index: t('styles.w200240'),
                pl_ratio: t('styles.balanced_5'),
                absorption_capacity: t('styles.medium_45'),
                protein_type: "All Purpose / Bleached",
                science_explanation: 'Bleached flour (Hong Kong Flour) is often preferred for the snowy white color and lower protein (tenderness). Unbleached flour results in a yellowish bun.'
            },
            thermalProfile: {
                oven_type: t('styles.bamboo_steamer'),
                heat_distribution: "Convection (Steam)",
                crust_development: "Skin formation (No Maillard)",
                crumb_structure: t('styles.fine_dense_brilliant_white')
            },
            fermentationScience: {
                yeast_activity: t('styles.moderate_2'),
                ph_target: t('styles.neutral_2'),
                organic_acids: t('styles.low_3'),
                enzymatic_activity: t('styles.standard_6')
            },
            processScience: 'Steaming cooks the starch at 100°C. Since Maillard requires ~140°C, the bun stays white. The crucial step is the t('common.second_proof') - if effectively timed, the bun surface is smooth. If overproofed, it wrinkles upon cooling.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Smooth Mix',
                duration: '15 min',
                action: 'Knead until extremely smooth. Degas completely.',
                science: 'Any large air bubble left will expand during steaming and create a pitted surface (t('common.zombie_skin')).'
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
        references: [t('styles.wheat_flour_institute_of_china')],
        images: {
            hero: '/images/styles/baozi_steamed.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'paratha',
        name: 'Lacha Paratha',
        region: 'Asia',
        subRegion: 'India',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: [t('styles.laminated'), t('styles.unleavened'), t('styles.fried')],
        description: 'A layered North Indian flatbread made from whole wheat flour (Atta). It is laminated with ghee using a pleating technique to create flaky, crispy layers similar to puff pastry, but unleashed.',
        history_context: 'Paratha (Parat + Atta = Processed Dough/Layers) is a staple of North Indian breakfast. The t('common.lacha') implies the specific ring-layered style.',
        base_formula: [
            { name: 'Atta Flour (Whole Wheat)', percentage: 100 },
            { name: 'Water', percentage: 65 },
            { name: 'Salt', percentage: 2 },
            { name: 'Ghee (Lamination)', percentage: 20 },
            { name: 'Oil (fry)', percentage: 10 }
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
                absorption_capacity: t('styles.high_3'),
                protein_type: t('styles.durumlike_wheat'),
                science_explanation: 'Atta is stone-ground whole wheat. The high bran content cuts gluten strands (low elasticity), but absorbs lots of water. 30min autolyse/rest is essential to hydrate the bran.'
            },
            thermalProfile: {
                oven_type: "Tawa (Griddle)",
                heat_distribution: t('styles.conduction'),
                crust_development: t('styles.crisp_fried'),
                crumb_structure: t('styles.laminated_layers')
            },
            fermentationScience: {
                yeast_activity: t('styles.none_3'),
                ph_target: t('styles.neutral_3'),
                organic_acids: t('styles.none_4'),
                enzymatic_activity: t('styles.standard_7')
            },
            processScience: 'Lamination without yeast: The layers are separated by Ghee. Steam generated from the water in the dough pushes the layers apart (mechanical leavening) while the Ghee prevents them from fusing.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Soft Dough',
                duration: '10 min',
                action: 'Mix Atta, salt, water. Knead well.',
                science: 'Hydrate the bran effectively.'
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
        references: [t('styles.indian_breads')],
        images: {
            hero: '/images/styles/paratha_flaky_hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    }
];
