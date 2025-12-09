import { DoughStyle, RecipeStyle } from '../../../types/dough';

export const latamStyles: DoughStyle[] = [
    {
        id: 'pao-de-queijo',
        name: 'Pão de Queijo (Minas Gerais)',
        region: 'South America',
        subRegion: 'Minas Gerais, Brazil',
        category: 'Snack',
        recipeStyle: RecipeStyle.PAO_DE_QUEIJO,
        tags: ['Gluten Free', 'Cassava', 'Scalded', 'Cheese'],
        description: 'A deeply affectionate staple of Minas Gerais, Pão de Queijo is a gluten-free cheese bread with a chewy, elastic crumb and a crispy, golden crust. It relies on the gelatinization of cassava starch (polvilho) rather than gluten for structure.',
        history_context: 'Originating in the 18th century in Minas Gerais, uses cassava—a native root—and cheese, which became abundant due to the dairy industry in the region. The modern "scalded" version creates its unique texture.',
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
                science_explanation: 'Cassava Starch (Polvilho) contains no gluten. Its structure comes from retrogradation and gelation of amylopectin/amylose networks.'
            },
            thermalProfile: {
                oven_type: "Convection",
                heat_distribution: "Even",
                crust_development: "Crispy, spotted",
                crumb_structure: "Chewy, airy center"
            },
            fermentationScience: {
                yeast_activity: "None",
                ph_target: "Acidic (Polvilho Azedo)",
                organic_acids: "Lactic (Fermented Starch)",
                enzymatic_activity: "None"
            },
            processScience: 'The "Scald" (Escaldo) denatures the starch proteins and pre-gelatinizes the granules, allowing them to absorb more liquid and swell. The expansion in the oven is purely physical (steam expansion) trapped by the coagulated egg proteins and starch gel.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Scalding (Escaldo)',
                duration: '10 min',
                action: 'Boil milk, oil, and salt. Pour over the starch and mix until crumbs form.',
                science: 'Heat gelatinizes the starch immediately, creating the structural backbone.',
                temperature: '100°C (Liquids)'
            },
            {
                phase: 'Mix',
                title: 'Cool & Egg Addition',
                duration: '15 min',
                action: 'Let the scald cool slightly, then knead in eggs one by one followed by cheese.',
                science: 'Eggs emulsify the fat and provide steam for expansion. Cheese adds flavor and fat.',
                temperature: 'Warm to Touch'
            },
            {
                phase: 'Bake',
                title: 'Baking',
                duration: '20-25 min',
                action: 'Bake until golden and puffed.',
                science: 'Rapid water evaporation expands the dough. Using "Polvilho Azedo" promotes more expansion due to its acidity breaking down starch chains.',
                temperature: '200°C'
            }
        ],
        references: ['História da Alimentação no Brasil - Câmara Cascudo', 'Brazilian Food - Sally Butcher'],
        images: {
            hero: '/images/styles/pao-de-queijo-hero.png',
            dough: '/images/styles/pao_de_queijo_dough.webp',
            crumb: '/images/styles/pao_de_queijo_crumb.webp'
        }
    },
    {
        id: 'pao-frances',
        name: 'Brazilian French Bread (Pão Francês)',
        region: 'South America',
        subRegion: 'Brazil',
        category: 'Bread',
        recipeStyle: RecipeStyle.PAO_FRANCES,
        tags: ['Crispy', 'Steam', 'Direct Method', '50g'],
        description: 'The "Pão Francês" is the daily bread of Brazil. Despite the name, it differs from the baguette by containing a small amount of sugar and fat, yielding a thin, crackly crust and a soft, cotton-like crumb (miolo algodonoso).',
        history_context: 'Inspired by travelers returning from France in the early 20th century who wanted short, crusty rolls. Brazilian bakers adapted the recipe adding sugar/fat to suit local flour and tastes.',
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
            requiresSteam: true, // WARNING: STEAM REQUIRED
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "Type 1 (W280)",
                pl_ratio: "Balanced",
                absorption_capacity: "Medium",
                protein_type: "Brazilian Wheat",
                science_explanation: 'Requires protein adequate for volume but extensible enough for the "pestana" (split) to open.'
            },
            thermalProfile: {
                oven_type: "Deck (Steam)",
                heat_distribution: "Conduction & Steam",
                crust_development: "Crackling, thin",
                crumb_structure: "Cotton-like"
            },
            fermentationScience: {
                yeast_activity: "High",
                ph_target: "Neutral",
                organic_acids: "Low",
                enzymatic_activity: "High (Sugar added)"
            },
            processScience: 'The "Pestana" is critical—a cut that allows expansion. Steam ensures the crust remains flexible initially for max volume, then gelatinizes surface starch for the signature "crackling" crispy finish.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Intensive Mix',
                duration: '10-12 min',
                action: 'Mix to full gluten development (Ponto de Véu).',
                science: 'Strong gluten network is required to retain gas during the rapid oven spring.',
                temperature: '24°C'
            },
            {
                phase: 'Ball',
                title: 'Scaling & Shaping',
                duration: '20 min',
                action: 'Divide into 50g portions. Shape into small torpedoes.',
                science: 'Tight shaping builds surface tension for proper opening.',
                temperature: 'Room Temp'
            },
            {
                phase: 'Bake',
                title: 'Steam Bake',
                duration: '15-18 min',
                action: 'Score deeply (Pestana). Bake with copious steam injection.',
                science: 'Steam delays crust formation, allowing the cut to burst open. Sugar creates the golden golden color (Maillard reaction).',
                temperature: '220°C'
            }
        ],
        references: ['Panificação Brasileira Tradicional'],
        images: {
            hero: '/images/styles/pao-frances-hero.png',
            dough: '/images/styles/pao_frances_dough.webp',
            crumb: '/images/styles/pao_frances_crumb.webp'
        }
    },
    {
        id: 'fugazzeta-rellena',
        name: 'Fugazzeta Rellena',
        region: 'South America',
        subRegion: 'Argentina',
        category: 'Pizza',
        recipeStyle: RecipeStyle.FOCACCIA,
        tags: ['Stuffed', 'Onion', 'Pan Pizza', 'Heavy'],
        description: 'An iconic Buenos Aires pizza style. It is a stuffed pizza (fugazza rellena) consisting of two dough layers enclosing a massive amount of cheese, topped with onions (fugazza). No tomato sauce.',
        history_context: 'Created by Genoese immigrants in La Boca, combining Focaccia (Fugassa) with cheese stuffing. It represents the abundance of Argentine dairy and wheat.',
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
                w_index: "W260-280",
                pl_ratio: "Extensible",
                absorption_capacity: "Medium",
                protein_type: "Argentine Wheat (000/0000)",
                science_explanation: 'Extensible dough needed to cover the pan and the stuffing without tearing.'
            },
            thermalProfile: {
                oven_type: "Deck/Pizza Oven",
                heat_distribution: "Conduction (Pan)",
                crust_development: "Soft/Crisp bottom",
                crumb_structure: "Dense/Bready"
            },
            fermentationScience: {
                yeast_activity: "Standard",
                ph_target: "Normal",
                organic_acids: "Low",
                enzymatic_activity: "Standard"
            },
            processScience: 'The onions on top release moisture, steaming the upper crust and preventing it from burning while the interior cheese melts. The double structure acts as an insulator, requiring lower temp/longer bake than Neapolitan.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Dough Mixing',
                duration: '10 min',
                action: 'Mix directly. Develop moderate gluten.',
                science: 'Oil inhibits gluten slightly, creating a tender ("al molde") texture.',
                temperature: '23°C'
            },
            {
                phase: 'Bulk',
                title: 'Fermentation',
                duration: '2-4h',
                action: 'Let rise until doubled.',
                science: 'Yeast activity creates alveolar structure.',
                temperature: 'RT'
            },
            {
                phase: 'Ball',
                title: 'Assembly',
                duration: '15 min',
                action: 'Divide 70/30. Place larger dough in pan, add cheese. Cover with smaller dough. Seal. Top with onions.',
                science: 'The onion layer protects the top dough from direct heat, allowing the massive cheese filling to melt.',
                temperature: 'RT'
            },
            {
                phase: 'Bake',
                title: 'Baking',
                duration: '20-30 min',
                action: 'Bake until onions are golden and dough pulls from sides.',
                science: 'Heat penetration must reach the center cheese mass (often 500g+) without burning the bottom.',
                temperature: '240°C'
            }
        ],
        references: ['La Pizza Argentina', 'Las Cuartetas'],
        images: {
            hero: '/images/styles/fugazzeta-hero.png',
            dough: '/images/styles/fugazzeta_dough.webp',
            crumb: '/images/styles/fugazzeta_crumb.webp'
        }
    }
];
