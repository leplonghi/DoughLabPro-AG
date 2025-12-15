import { DoughStyle, RecipeStyle } from '../../../types/dough';

export const middleEastStyles: DoughStyle[] = [
    {
        id: 'pita-bread',
        name: 'pita_bread_name',
        region: 'Middle East',
        subRegion: 'Levant',
        category: 'Flatbread',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: ['Steam 6', 'Pocket', 'High heat 3', 'Vegan'],
        description: 'The iconic "pocket bread" of the Middle East. It puffs up dramatically in a hot oven due to rapid steam expansion, creating a hollow center perfect for stuffing.',
        history_context: "One of the oldest breads in human history, dating back to the Natufian culture in Jordan (14,000 years ago). The \"pocket\" mechanism is a masterful use of thermodynamics discovered millennia ago.",
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
                science_explanation: 'Requires moderate strength. If too strong, it resists expansion (no pocket). If too weak, it pops. Extensibility is key for the steam to push the layers apart.'
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
            processScience: 'The Pocket mechanism: At 260°C+, water turns to steam instantly. The top crust sets slightly, but the internal pressure is so high (>100kPa) that it delaminates the dough structure in the weakest center plane, ballooning it.'
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
        references: ['Classical arabian cooking', 'Modernist bread 32'],
        images: {
            hero: '/images/styles/pita_fresh_steam.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'simit',
        name: 'simit_name',
        region: 'Middle East',
        subRegion: 'Turkey',
        category: 'Bread',
        recipeStyle: RecipeStyle.PRETZEL, // Closest profile (dipped, sesame)
        tags: ['Sesame', 'Molasses', 'Street food 2', 'Breakfast 6'],
        description: 'The ubiquitous Turkish street food. A circular bread encrusted with sesame seeds, characterized by its deep golden color and unique flavor achieved by dipping in Pekmez (grape molasses) before baking.',
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
                w_index: 'W280300',
                pl_ratio: 'Balanced',
                absorption_capacity: 'Moderate 9',
                protein_type: 'Strong wheat',
                science_explanation: 'Requires strength to hold the twisted shape. Hydration is low (55%) to ensure the "crisp" texture, not soft like a bun.'
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
        references: [],
        images: {
            hero: '/images/styles/simit-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    }
];
