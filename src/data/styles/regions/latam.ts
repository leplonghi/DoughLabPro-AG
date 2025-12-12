import { DoughStyle, RecipeStyle } from '../../../types/dough';
import { useTranslation } from '@/i18n';

export const latamStyles: DoughStyle[] = [
    {
        id: 'pao-de-queijo',
        name: 'Pão de Queijo (Minas Gerais)',
        region: 'South America',
        subRegion: 'Minas Gerais, Brazil',
        category: 'Snack',
        recipeStyle: RecipeStyle.PAO_DE_QUEIJO,
        tags: [t('styles.gluten_free'), t('styles.cassava'), t('styles.scalded'), t('styles.cheese')],
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
                oven_type: t('styles.convection_4'),
                heat_distribution: t('styles.even_4'),
                crust_development: t('styles.crispy_spotted'),
                crumb_structure: t('styles.chewy_airy_center')
            },
            fermentationScience: {
                yeast_activity: t('styles.none_6'),
                ph_target: "Acidic (Polvilho Azedo)",
                organic_acids: "Lactic (Fermented Starch)",
                enzymatic_activity: t('styles.none_7')
            },
            processScience: 'The t('common.scald') (Escaldo) denatures the starch proteins and pre-gelatinizes the granules, allowing them to absorb more liquid and swell. The expansion in the oven is purely physical (steam expansion) trapped by the coagulated egg proteins and starch gel.'
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
                science: 'Rapid water evaporation expands the dough. Using t('common.polvilho_azedo') promotes more expansion due to its acidity breaking down starch chains.',
                temperature: '200°C'
            }
        ],
        references: [t('styles.história_da_alimentação_no_brasil__câmara_cascudo'), t('styles.brazilian_food__sally_butcher')],
        images: {
            hero: '/images/styles/pao-de-queijo-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
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
                pl_ratio: t('styles.balanced_7'),
                absorption_capacity: t('styles.medium_63'),
                protein_type: t('styles.brazilian_wheat'),
                science_explanation: 'Requires protein adequate for volume but extensible enough for the "pestana" (split) to open.'
            },
            thermalProfile: {
                oven_type: "Deck (Steam)",
                heat_distribution: t('styles.conduction__steam_2'),
                crust_development: t('styles.crackling_thin'),
                crumb_structure: t('styles.cottonlike')
            },
            fermentationScience: {
                yeast_activity: t('styles.high_9'),
                ph_target: t('styles.neutral_4'),
                organic_acids: t('styles.low_12'),
                enzymatic_activity: "High (Sugar added)"
            },
            processScience: 'The t('common.pestana') is critical—a cut that allows expansion. Steam ensures the crust remains flexible initially for max volume, then gelatinizes surface starch for the signature "crackling" crispy finish.'
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
        references: [t('styles.panificação_brasileira_tradicional')],
        images: {
            hero: '/images/styles/pao-frances-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'fugazzeta-rellena',
        name: 'Fugazzeta Rellena',
        region: 'South America',
        subRegion: 'Argentina',
        category: 'Pizza',
        recipeStyle: RecipeStyle.FOCACCIA,
        tags: [t('styles.stuffed'), t('styles.onion'), t('styles.pan_pizza_2'), t('styles.heavy')],
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
                w_index: t('styles.w260280_2'),
                pl_ratio: t('styles.extensible_4'),
                absorption_capacity: t('styles.medium_65'),
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
                yeast_activity: t('styles.standard_12'),
                ph_target: t('styles.normal_7'),
                organic_acids: t('styles.low_13'),
                enzymatic_activity: t('styles.standard_13')
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
        references: [t('styles.la_pizza_argentina'), t('styles.las_cuartetas')],
        images: {
            hero: '/images/styles/fugazzeta-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'medialunas',
        name: 'Medialunas de Manteca',
        region: 'South America',
        subRegion: 'Argentina',
        category: 'Pastry',
        recipeStyle: RecipeStyle.PASTRY_DANISH, // Laminated
        tags: [t('styles.laminated_2'), t('styles.sweet_syrup'), t('styles.breakfast_4')],
        description: 'The Argentine croissant. Smaller, denser, and sweeter than the French version, made with a distinct "almibar" (syrup) glaze applied hot out of the oven. A staple of Buenos Aires café culture.',
        history_context: 'Derived from the European croissant but adapted to local tastes (sweeter, moister) and ingredients (heavy syrup). The t('common.medialuna') (Half Moon) is a national symbol.',
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
                w_index: t('styles.w300320'),
                pl_ratio: t('styles.extensible_5'),
                absorption_capacity: t('styles.medium_66'),
                protein_type: t('styles.strong_wheat_6'),
                science_explanation: 'Strong flour is needed to support lamination, but the dough is richer and heavier than croissant dough.'
            },
            thermalProfile: {
                oven_type: t('styles.convection_5'),
                heat_distribution: t('styles.even_5'),
                crust_development: "Sticky (Syrup)",
                crumb_structure: t('styles.tight_layers')
            },
            fermentationScience: {
                yeast_activity: t('styles.standard_14'),
                ph_target: t('styles.normal_8'),
                organic_acids: t('styles.low_14'),
                enzymatic_activity: t('styles.standard_15')
            },
            processScience: 'The "Almíbar" (Syrup) soak is scientifically crucial. It keeps the pastry moist for days (hygroscopic) and softens the crust, differentiating it from the shattering crispness of a French croissant.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Enriched Mix',
                duration: '15 min',
                action: 'Mix dough with eggs, sugar, honey. Develop moderate gluten.',
                science: 'Sugar delays gluten development, so mixing takes longer.'
            },
            {
                phase: 'Prep',
                title: 'Lamination',
                duration: '1h',
                action: 'Lock in butter (25% of dough weight). Perform 3 single turns.',
                science: 'Fewer turns/less butter than croissant results in a denser, cake-like layer structure.'
            },
            {
                phase: 'Bake',
                title: 'Bake & Glaze',
                duration: '15 min',
                action: 'Bake until gold. Brush immediately with hot syrup.',
                science: 'Hot syrup on hot pastry = Absorption. Cold syrup on hot pastry = Crystalization. We want absorption.'
            }
        ],
        references: [t('styles.instituto_argentino_de_gastronomía')],
        images: {
            hero: '/images/styles/medialunas_argentina.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'conchas',
        name: 'Conchas (Mexican Sweet Bread)',
        region: 'North America', // Actually Mexico is NA, but usually grouped in LatAm for cultural styles in this app context? The file is latam.ts.
        subRegion: 'Mexico',
        category: 'Enriched',
        recipeStyle: RecipeStyle.ENRICHED_DINNER_ROLL,
        tags: [t('styles.sweet_crust'), t('styles.breakfast_5'), t('styles.colorful')],
        description: 'Mexico\'s most famous pan dulce. A soft, enriched sweet bun topped with a crumbly sugar cookie crust stamped with a shell (concha) pattern.',
        history_context: 'Dating back to the colonial era, influenced by French brioche recipes. The shell pattern symbolizes Saint James.',
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
                w_index: t('styles.w240260_2'),
                pl_ratio: t('styles.balanced_8'),
                absorption_capacity: t('styles.medium_68'),
                protein_type: "AP",
                science_explanation: 'We want softness, not chew. AP flour is perfect. The strength comes from the egg/butter structure.'
            },
            thermalProfile: {
                oven_type: t('styles.convection_6'),
                heat_distribution: t('styles.even_6'),
                crust_development: t('styles.cookie_topping'),
                crumb_structure: t('styles.soft_cottony')
            },
            fermentationScience: {
                yeast_activity: "High (Sugar)",
                ph_target: t('styles.normal_9'),
                organic_acids: t('styles.low_15'),
                enzymatic_activity: t('styles.standard_16')
            },
            processScience: 'The topping is a separate t('common.short_dough') (1:1:1 Sugar/Fat/Flour). It has no gluten development, so it cracks as the bun expands, creating the pattern.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Bun Dough',
                duration: '15 min',
                action: 'Mix enriched dough to windowpane.',
                science: 'Standard enriched dough protocol.'
            },
            {
                phase: 'Prep',
                title: 'Topping Prep',
                duration: '10 min',
                action: 'Cream butter and sugar, add flour. Make a paste.',
                science: 'Do not overmix or it becomes tough.'
            },
            {
                phase: 'Prep',
                title: 'Assembly',
                duration: '10 min',
                action: 'Flatten ball of topping, place over bun. Score pattern.',
                science: 'The scoring directs the expansion cracks.'
            },
            {
                phase: 'Bake',
                title: 'Bake',
                duration: '20 min',
                action: 'Bake at 180°C.',
                science: 'Low temp preserves the color of the topping.'
            }
        ],
        references: [t('styles.panes_mexicanos')],
        images: {
            hero: '/images/styles/conchas_mexican.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: "brazilian_gas_deck",
        name: "Pizza Paulistana (Gas Deck)",
        region: t('styles.south_america'),
        subRegion: t('styles.são_paulo_brazil'),
        category: t('styles.pizza_19'),
        recipeStyle: RecipeStyle.PAN_PIZZA,
        tags: ["brazil", "heavy-toppings", "catupiry", "sao-paulo"],
        description: "The São Paulo powerhouse. Medium thickness, capable of holding massive amounts of toppings (Catupiry, chicken, sausage). Crisp bottom, soft center.",
        history_context: "São Paulo has more pizzerias than NYC. This style evolved in the 1970s (Vila Clementino/Bixiga) to satisfy a craving for abundance. The gas deck oven allows a slower, more penetrating heat than wood.",
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
                w_index: t('styles.w280320_2'),
                pl_ratio: t('styles.balanced_9'),
                absorption_capacity: t('styles.medium_69'),
                protein_type: t('styles.standard_wheat'),
                science_explanation: "A 'Workhorse' flour. It needs to be strong enough to carry heavy cheese/toppings but not so tough that it fights back when rolled out."
            },
            thermalProfile: {
                oven_type: t('styles.gas_deck'),
                heat_distribution: "Conduction (Moderate)",
                crust_development: t('styles.crispy_bottom_soft_crumb'),
                crumb_structure: t('styles.dense_supporting')
            },
            fermentationScience: {
                yeast_activity: t('styles.standard_17'),
                ph_target: t('styles.normal_10'),
                organic_acids: t('styles.low_16'),
                enzymatic_activity: t('styles.moderate_7')
            },
            processScience: 'The dough must support 1kg+ of toppings. A short maturation (24h) balances flavor with structural integrity.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Mix',
                duration: '10 min',
                action: 'Mix to development.',
                science: 'Strong gluten needed.'
            },
            {
                phase: 'Bulk',
                title: 'Proof',
                duration: '24h',
                action: 'Cold ferment.',
                science: 'Flavor development.'
            },
            {
                phase: 'Bake',
                title: 'Bake',
                duration: '4-6 min',
                action: 'Bake at 300°C.',
                science: 'Moderate heat for deep cooking.'
            }
        ],
        references: [t('styles.associação_pizzarias_unidas')],
        images: {
            hero: '/images/styles/brazilian_gas_deck_real.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: "arepa",
        name: t('styles.venezuelan_arepa'),
        region: t('styles.south_america_2'),
        subRegion: "Venezuela/Colombia",
        category: t('styles.flatbread_4'),
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: [t('styles.corn'), t('styles.gluten_free_2'), t('styles.stuffed_2')],
        description: "A round cornmeal cake made from pre-cooked corn flour (Harina P.A.N.). Crunchy outside, soft and steamy inside, perfect for stuffing.",
        history_context: "Pre-Columbian staple of the Timoto-Cuica people. 'Arepa' comes from the indigenous word 'Erepa' (corn).",
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
                absorption_capacity: t('styles.extreme'),
                protein_type: "Corn (Zein)",
                science_explanation: 'Masarepa is pre-cooked and dried. The starch is pre-gelatinized, meaning it absorbs water instantly to form a dough without heating. No gluten network.'
            },
            thermalProfile: {
                oven_type: "Budare (Griddle)",
                heat_distribution: t('styles.conduction_6'),
                crust_development: t('styles.charred_spots'),
                crumb_structure: t('styles.dense_moist_steamy')
            },
            fermentationScience: {
                yeast_activity: t('styles.none_8'),
                ph_target: t('styles.neutral_5'),
                organic_acids: t('styles.none_9'),
                enzymatic_activity: t('styles.low_17')
            },
            processScience: 'Gelatinization is already done at the factory. We are just re-hydrating the matrix. The rest period allows the water to distribute evenly into the largest particles.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Hydrate',
                duration: '5 min',
                action: 'Add flour to salted water gradually while mixing with hand.',
                science: 'Prevent lumps. Agitation ensures even hydration.'
            },
            {
                phase: 'Bulk',
                title: 'Rest',
                duration: '5 min',
                action: 'Let sit.',
                science: 'Allows full absorption.'
            },
            {
                phase: 'Cook',
                title: 'Sear & Bake',
                duration: '15 min',
                action: 'Sear on griddle for spots, then bake 10 mins to dry interior.',
                science: 'Two-stage cooking ensures crisp shell and cooked center without burning.'
            }
        ],
        references: [t('styles.lorenzo_mendoza')],
        images: {
            hero: '/images/styles/arepa_corn_grill.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: "empanada-dough",
        name: "Empanada Dough (Tapas)",
        region: t('styles.south_america_3'),
        subRegion: t('styles.argentina'),
        category: t('styles.pastry_13'),
        recipeStyle: RecipeStyle.MASSA_TORTA, // Fallback if no Pastry style
        tags: [t('styles.lard'), t('styles.fried_2'), t('styles.frying_dough')],
        description: "The wrapper for the famous Argentine empanada. Known as 'Masa para Tapas'. It is a low-hydration, high-fat dough designed to bubble and blister when fried.",
        history_context: "Came from Spain (Galicia), adapted in Argentina with beef fat (Grasa de Pella).",
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
                w_index: t('styles.w200240_2'),
                pl_ratio: t('styles.extensible_6'),
                absorption_capacity: t('styles.low_18'),
                protein_type: t('styles.soft_wheat_2'),
                science_explanation: 'Low hydration + High Fat = Short dough. The hot water denatures some protein, reducing elasticity (snap-back) so it can be rolled very thin.'
            },
            thermalProfile: {
                oven_type: "Fryer / Oven",
                heat_distribution: "Convection/Conduction",
                crust_development: t('styles.blistered'),
                crumb_structure: t('styles.flaky')
            },
            fermentationScience: {
                yeast_activity: t('styles.none_10'),
                ph_target: t('styles.neutral_6'),
                organic_acids: t('styles.none_11'),
                enzymatic_activity: t('styles.low_19')
            },
            processScience: 'The high fat content creates microscopic layers (shortening). When fried, trapped steam forms blisters on the surface.'
        },
        process: [
            {
                phase: 'Mix',
                title: t('common.scald'),
                duration: '10 min',
                action: 'Melt fat in hot salted water. Add to flour.',
                science: 'Partial gelatinization and protein denaturation.'
            },
            {
                phase: 'Prep',
                title: 'Sheet',
                duration: '15 min',
                action: 'Roll to 2mm thickness. Cut discs.',
                science: 'Thinness is key for the filling-to-dough ratio.'
            },
            {
                phase: 'Cook',
                title: 'Fry/Bake',
                duration: '5 min',
                action: 'Fry in hot lard or bake.',
                science: 'Rapid heat transfer causes bubbling.'
            }
        ],
        references: [t('styles.doña_petrona')],
        images: {
            hero: '/images/styles/empanada_dough_raw.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    }
];
