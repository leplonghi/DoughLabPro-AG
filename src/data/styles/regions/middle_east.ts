import { DoughStyle, RecipeStyle } from '../../../types/dough';
import { useTranslation } from '@/i18n';

export const middleEastStyles: DoughStyle[] = [
    {
        id: 'pita-bread',
        name: 'Pita Bread (Khubz)',
        region: 'Middle East',
        subRegion: 'Levant',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: [t('styles.steam_6'), t('styles.pocket'), t('styles.high_heat_3'), t('styles.vegan')],
        description: 'The iconic "pocket bread" of the Middle East. It puffs up dramatically in a hot oven due to rapid steam expansion, creating a hollow center perfect for stuffing.',
        history_context: 'One of the oldest breads in human history, dating back to the Natufian culture in Jordan (14,000 years ago). The "pocket" mechanism is a masterful use of thermodynamics discovered millennia ago.',
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
                pl_ratio: t('styles.extensible_7'),
                absorption_capacity: t('styles.medium_72'),
                protein_type: "Soft/Hard Blend",
                science_explanation: 'Requires moderate strength. If too strong, it resists expansion (no pocket). If too weak, it pops. Extensibility is key for the steam to push the layers apart.'
            },
            thermalProfile: {
                oven_type: "Hearth/Stone",
                heat_distribution: t('styles.conductive__radiant'),
                crust_development: t('styles.soft_spotted'),
                crumb_structure: t('styles.hollow_center')
            },
            fermentationScience: {
                yeast_activity: t('styles.vigorous'),
                ph_target: t('styles.neutral_to_slightly_acidic'),
                organic_acids: t('styles.lactic_4'),
                enzymatic_activity: t('styles.moderate_8')
            },
            processScience: 'The t('common.pocket_mechanism'): At 260°C+, water turns to steam instantly. The top crust sets slightly, but the internal pressure is so high (>100kPa) that it delaminates the dough structure in the weakest center plane, ballooning it.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Smooth Mix',
                duration: '10 min',
                action: 'Knead to full windowpane.',
                science: 'Gluten network must be air-tight to trap the steam. A weak network will leak gas and not puff.'
            },
            {
                phase: 'Ball',
                title: 'Scaling & Resting',
                duration: '30 min',
                action: 'Divide into 80g balls. Rest covered.',
                science: 'Resting relaxes gluten (extensibility) so you can roll them flat without them shrinking back.'
            },
            {
                phase: 'Prep',
                title: 'Rolling',
                duration: '10 min',
                action: 'Roll to 5mm thickness. Let rest 10 mins again.',
                science: 'The second rest forms a slight dry skin (pellicle) which helps the top crust set faster than the inside, forcing the delamination.'
            },
            {
                phase: 'Bake',
                title: 'Flash Bake',
                duration: '2-3 min',
                action: 'Bake on scorching hot stone.',
                science: 'Leidenfrost effect and rapid heat transfer are non-negotiable. Low temp = dense flatbread, no pocket.'
            }
        ],
        references: [t('styles.classical_arabian_cooking'), t('styles.modernist_bread_32')],
        images: {
            hero: '/images/styles/pita_fresh_steam.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'simit',
        name: 'Simit (Turkish Bagel)',
        region: 'Middle East',
        subRegion: 'Turkey',
        category: 'Bread',
        recipeStyle: RecipeStyle.PRETZEL, // Closest profile (dipped, sesame)
        tags: [t('styles.sesame'), t('styles.molasses'), t('styles.street_food_2'), t('styles.breakfast_6')],
        description: 'The ubiquitous Turkish street food. A circular bread encrusted with sesame seeds, characterized by its deep golden color and unique flavor achieved by dipping in t('common.pekmez') (grape molasses) before baking.',
        history_context: 'Documented in Istanbul since 1525. Validated by the Ottoman court, it was a staple food for sultans and soldiers alike. The "Simitçi" (vendor) with a tray on their head is a cultural icon.',
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
                w_index: t('styles.w280300'),
                pl_ratio: t('styles.balanced_10'),
                absorption_capacity: t('styles.moderate_9'),
                protein_type: t('styles.strong_wheat_7'),
                science_explanation: 'Requires strength to hold the twisted shape. Hydration is low (55%) to ensure the "crisp" texture, not soft like a bun.'
            },
            thermalProfile: {
                oven_type: "Deck / Stone",
                heat_distribution: t('styles.radiant_4'),
                crust_development: "Caramelized (Molasses)",
                crumb_structure: t('styles.dense_tight')
            },
            fermentationScience: {
                yeast_activity: t('styles.moderate_10'),
                ph_target: t('styles.neutral_7'),
                organic_acids: t('styles.low_20'),
                enzymatic_activity: t('styles.standard_18')
            },
            processScience: 'The Maillard Reaction is supercharged by the Grape Molasses (Pekmez) dip. This abundance of reducing sugars on the surface creates the deep mahogany color and distinct metallic/sweet flavor at oven temperatures.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Stiff Dough',
                duration: '10 min',
                action: 'Mix flour, water, salt, yeast to a stiff dough.',
                science: 'Low hydration ensures the twisted strands stay defined.'
            },
            {
                phase: 'Prep',
                title: 'Twisting',
                duration: '15 min',
                action: 'Roll two strands, twist them together (rope), and seal into a ring.',
                science: 'Twisting increases surface area for maximum sesame coverage and crunch.'
            },
            {
                phase: 'Cook',
                title: 'Pekmez Dip',
                duration: '1 min',
                action: 'Dip ring into water/molasses solution, then into sesame seeds.',
                science: 'Molasses adds sugar for browning. The liquid helps seeds adhere (glue) and delays crust set slightly.'
            },
            {
                phase: 'Bake',
                title: 'Bake',
                duration: '15-18 min',
                action: 'Bake until deep golden brown.',
                science: 'The sugar-rich coating caramelizes rapidly.'
            }
        ],
        references: [t('styles.ottoman_kitchen'), t('styles.istanbul_eats')],
        images: {
            hero: '/images/styles/simit-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    }
];
