import { DoughStyle, RecipeStyle } from '../../../types/dough';
import { useTranslation } from '@/i18n';

export const europeStyles: DoughStyle[] = [
    {
        id: 'baguette-tradition',
        name: 'Baguette de Tradition',
        region: 'Europe',
        subRegion: 'France',
        category: 'Bread',
        recipeStyle: RecipeStyle.BAGUETTE,
        tags: [t('styles.steam_5'), t('styles.crispy'), t('styles.autolyse'), t('styles.poolish_2')],
        description: 'The symbol of French baking excellence. Defined by the 1993 "Pain de Tradition Française" decree, it contains only flour, water, salt, and yeast. The characteristic open crumb (alvéoles) and crispy, caramelized crust are achieved through high hydration, gentle handling, and proper steam injection.',
        history_context: 'While long loaves existed earlier, the specific t('common.tradition') designation was codified in 1993 to protect artisanal baking from industrial additives. It revived ancient techniques like autolyse (courtesy of Prof. Calvel) and slow fermentation.',
        base_formula: [
            { name: 'French Flour T65', percentage: 100 },
            { name: 'Water', percentage: 72 },
            { name: 'Salt', percentage: 2 },
            { name: 'Fresh Yeast', percentage: 0.5 },
        ],
        specs: {
            hydration: { ideal: 72, min: 68, max: 78 },
            ovenTemp: { ideal: 250, min: 240, max: 260 },
            fermentationTime: '18-24h',
            difficulty: 'Hard',
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
                protein_type: t('styles.french_soft_wheat'),
                science_explanation: 'Requires T65 flour with respectable protein (11-12%) but high extensibility. Unlike high-protein American flours, French flour allows for the signature extensible dough that does not shrink back when rolled.',
            },
            thermalProfile: {
                oven_type: "Deck Oven (Steam)",
                heat_distribution: t('styles.conduction__steam'),
                crust_development: t('styles.thin_crispy_caramelized'),
                crumb_structure: t('styles.open_irregular_alveoli'),
            },
            fermentationScience: {
                yeast_activity: t('styles.controlled'),
                ph_target: "~5.5",
                organic_acids: "Balanced (Lactic focus)",
                enzymatic_activity: "High (Autolyse driven)",
            },
            processScience: 'The "Décret Pain" of 1993 prohibits additives. Crispiness and color (Maillard) depend exclusively on natural flour caramelization and steam injection which gelatinizes the surface starch, creating a glossy, thin, crackly crust.',
        },
        process: [
            {
                phase: 'Mix',
                title: 'Autolyse',
                duration: '30-60 min',
                action: 'Mix flour and water only. Let sit.',
                science: 'Allows protease enzymes to naturally degrade some gluten, increasing extensibility, and fully hydrates starch.',
            },
            {
                phase: 'Bulk',
                title: 'Pointage (Bulk Ferment)',
                duration: '3-4h',
                action: 'Fermentation at room temp with folds every 45 mins.',
                science: 'Builds structure via folding rather than intensive mixing, preserving carotenoid pigments (creamy color) and flavor.',
            },
            {
                phase: 'Ball',
                title: 'Division & Preshape',
                duration: '20 min',
                action: 'Divide into 350g pieces. Gentle preshape into cylinders.',
                science: 'Standardizing thermal mass for even baking.',
            },
            {
                phase: 'Prep',
                title: 'Shaping',
                duration: '5 min',
                action: 'Fold and roll into 70cm batons with pointed ends.',
                science: 'Creating surface tension without degassing the large irregular alveoli formed during bulk.',
            },
            {
                phase: 'Bake',
                title: 'Baking with Steam',
                duration: '20-25 min',
                action: 'Score with 5 cuts (La Grigne). Bake at 250°C with heavy steam.',
                science: 'Steam keeps the surface flexible, allowing maximum oven spring before crust set, and gelatinizes surface starch for shine.',
            },
        ],
        references: [t('styles.le_goût_du_pain__raymond_calvel'), t('styles.décret_n931074_du_13_septembre_1993')],
        images: {
            hero: '/images/styles/baguette_hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png',
        },
    },
    {
        id: 'brioche-tete',
        name: 'Brioche à Tête',
        region: 'Europe',
        subRegion: 'France',
        category: 'Enriched',
        recipeStyle: RecipeStyle.BRIOCHE,
        tags: [t('styles.high_fat'), t('styles.eggs'), t('styles.butter'), t('styles.sponge')],
        description: 'The ultimate enriched dough. A classic Brioche à Tête features a high percentage of butter and eggs, baked in a fluted mold with a small ball of dough on top (the "head"). It is rich, tender, and distinctly buttery.',
        history_context: 'Originating in Normandy or Brittany (butter-rich regions), brioche has evolved from a blessed bread used in church services to a breakfast staple. The "à tête" (with head) shape is the most recognized Parisian style.',
        base_formula: [
            { name: 'Strong Flour (T45)', percentage: 100 },
            { name: 'Eggs', percentage: 50 },
            { name: 'Butter (Unsalted)', percentage: 50 },
            { name: 'Sugar', percentage: 12 },
            { name: 'Salt', percentage: 2 },
            { name: 'Fresh Yeast', percentage: 2 },
            { name: 'Milk', percentage: 10 },
        ],
        specs: {
            hydration: { ideal: 60, min: 50, max: 70 }, // Hydration is complex due to eggs/butter
            ovenTemp: { ideal: 190, min: 180, max: 200 },
            fermentationTime: '12-24h',
            difficulty: 'Expert',
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: true,
            allowOil: true, // Butter is the fat source
            requiresSteam: false,
        },
        scientificProfile: {
            flourRheology: {
                w_index: "T45 (W300+)",
                pl_ratio: "Balanced (0.55)",
                absorption_capacity: "High (for fat)",
                protein_type: t('styles.strong_wheat_2'),
                science_explanation: 'Requires strong gluten production to carry the heavy load of fat. However, T45 is preferred for its fineness.',
            },
            thermalProfile: {
                oven_type: "Convection/Deck",
                heat_distribution: t('styles.even_2'),
                crust_development: "Soft, golden (Egg wash)",
                crumb_structure: "Tight, cotton-like (shreddable)",
            },
            fermentationScience: {
                yeast_activity: "High (Osmotolerant yeast often needed)",
                ph_target: "5.0-5.4",
                organic_acids: t('styles.lactic_2'),
                enzymatic_activity: t('styles.moderate_3'),
            },
            processScience: 'A stable emulsion of fat and water. The butter must be added plastic (cold/malleable) only AFTER gluten development. If added too early, it coats the proteins and prevents cross-linking (shortening effect).',
        },
        process: [
            {
                phase: 'Mix',
                title: 'Sponge',
                duration: '45 min',
                action: 'Mix flour, yeast, and milk. Let rise.',
                science: 'Activates yeast and improves flavor complexity.',
            },
            {
                phase: 'Mix',
                title: 'Intensive Mix',
                duration: '15-20 min',
                action: 'Add eggs, sugar, salt, remaining flour. Develop to windowpane.',
                science: 'Full gluten development is mandatory before fat addition.',
            },
            {
                phase: 'Mix',
                title: 'Bassionage',
                duration: '10 min',
                action: 'Ideally, add butter slowly in chunks while mixing.',
                science: 'Emulsifying the fat into the dough matrix without breaking the gluten network.',
            },
            {
                phase: 'Bulk',
                title: 'Cold Fermentation',
                duration: '12h+',
                action: 'Retard in fridge overnight.',
                science: 'Solidifies the butter, making the dough handleable for shaping, and develops complex fermentation flavors.',
            },
            {
                phase: 'Prep',
                title: 'Shaping',
                duration: '10 min',
                action: 'Shape into balls, create neck, place "head" in fluted tins.',
                science: 'Cold dough prevents butter melting during handling.',
            },
            {
                phase: 'Bake',
                title: 'Bake',
                duration: '25-30 min',
                action: 'Egg wash twice. Bake at 190°C.',
                science: 'High sugar/protein content leads to rapid browning (Maillard), so lower temp than lean breads is needed.',
            },
        ],
        references: [t('styles.larousse_gastronomique'), t('styles.professional_baking__wayne_gisslen')],
        images: {
            hero: '/images/styles/brioche-hero.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png',
        },
    },
    {
        id: 'laugenbrezel',
        name: 'Laugenbrezel (German Pretzel)',
        region: 'Europe',
        subRegion: 'Germany',
        category: 'Snack',
        recipeStyle: RecipeStyle.PRETZEL,
        tags: [t('styles.lye'), t('styles.alkaline'), t('styles.twist')],
        description: 'The iconic Bavarian pretzel, known for its deep nutmeg-brown skin, contrasting white scores, and distinctive lye flavor. The dough is stiff, allowing for the intricate knot shape, and the surface is chemically altered before baking.',
        history_context: 'Associated with monks in the Early Middle Ages, the shape represents arms crossed in prayer. The lye bath was likely an accidental discovery, but became the standard for "Laugengebäck" in Southern Germany.',
        base_formula: [
            { name: 'Wheat Flour (Type 550)', percentage: 100 },
            { name: 'Water', percentage: 50 },
            { name: 'Butter/Lard', percentage: 5 },
            { name: 'Salt', percentage: 2 },
            { name: 'Malt Extract', percentage: 1 },
            { name: 'Fresh Yeast', percentage: 2 },
        ],
        specs: {
            hydration: { ideal: 50, min: 45, max: 55 },
            ovenTemp: { ideal: 220, min: 210, max: 230 },
            fermentationTime: '2-4h',
            difficulty: 'Medium',
        },
        calculation: {
            method: 'baker_percentage', // Low hydration standard method
            requiresYeast: true,
            requiresSteam: false,
            allowOil: true,
        },
        scientificProfile: {
            flourRheology: {
                w_index: "Type 550 (W210-230)",
                pl_ratio: "Stiff (P > L)",
                absorption_capacity: "Low (50%)",
                protein_type: t('styles.german_wheat'),
                science_explanation: 'Stiff dough (approx 50% hydration) required to hold the intricate shape during the dip and bake.',
            },
            thermalProfile: {
                oven_type: t('styles.convection_2'),
                heat_distribution: t('styles.radiant'),
                crust_development: "Deep Mahogany (Alkaline reaction)",
                crumb_structure: t('styles.dense_chewy'),
            },
            fermentationScience: {
                yeast_activity: t('styles.restrained'),
                ph_target: "Surface pH > 10 (Lye)",
                organic_acids: t('styles.minimal'),
                enzymatic_activity: t('styles.low_4'),
            },
            processScience: 'The dip in Sodium Hydroxide (Lye) solution (pH 13-14) breaks down proteins on the surface and promotes an extreme, accelerated Maillard reaction, resulting in the deep brown color and specific "pretzel" flavor.',
        },
        process: [
            {
                phase: 'Mix',
                title: 'Stiff Mix',
                duration: '5-8 min',
                action: 'Mix all ingredients to a smooth, stiff dough.',
                science: 'Low hydration limits gluten mobility, creating a "short" but strong structure.',
            },
            {
                phase: 'Bulk',
                title: 'Short Bulk',
                duration: '30-60 min',
                action: 'Brief rest. The dough should not double; we want tightness.',
                science: 'Too much gas makes rolling the thin arms impossible.',
            },
            {
                phase: 'Prep',
                title: 'Shaping',
                duration: '15 min',
                action: 'Roll belly thick and arms thin. Twist twice and press onto belly.',
                science: 'Differential thickness provides texture contrast (soft belly, crunchy arms).',
            },
            {
                phase: 'Prep',
                title: 'Skin Formation',
                duration: '30 min',
                action: 'Refrigerate uncovered.',
                science: 'Dries the surface (pellicle) so it withstands the liquid dip without soaking up too much lye.',
            },
            {
                phase: 'Cook',
                title: 'Lye Bath',
                duration: '10 sec',
                action: 'Dip in 4% NaOH solution (or boiling baking soda).',
                science: 'Alkaline surface treatment changes pH to facilitate rapid browning.',
            },
            {
                phase: 'Bake',
                title: 'Bake',
                duration: '12-15 min',
                action: 'Salting the belly, scoring the belly. Bake hot.',
                science: 'Score releases the pressure of the thick belly part. Salt adheres to the moist lye surface.',
            },
        ],
        references: [t('styles.german_baking_standards'), ],
        images: {
            hero: '/images/styles/pretzel_laugen_real.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png',
        },
    },
    {
        id: 'english_muffin',
        name: 'English Muffin',
        region: 'Europe',
        subRegion: 'UK',
        category: 'Bread',
        recipeStyle: RecipeStyle.ENGLISH_MUFFIN,
        tags: [t('styles.griddle'), t('styles.nooks_and_crannies'), t('styles.breakfast_2')],
        description: 'A small, round, flat yeast-leavened bread which is commonly sliced horizontally, toasted, and buttered. Famous for its "nooks and crannies" texture created by a high hydration dough cooked on a griddle.',
        history_context: 'Invented in the US by British immigrant Samuel Bath Thomas in 1880, based on the "crumpet" but drier. It became a breakfast staple.',
        base_formula: [
            { name: 'Bread Flour', percentage: 100 },
            { name: 'Water/Milk', percentage: 75 },
            { name: 'Yeast', percentage: 1 },
            { name: 'Salt', percentage: 2 },
            { name: 'Sugar', percentage: 1 },
            { name: 'Butter', percentage: 2 }
        ],
        specs: {
            hydration: { ideal: 78, min: 75, max: 82 },
            ovenTemp: { ideal: 200, min: 180, max: 220 }, // Griddle temp
            fermentationTime: '12-24h', // Cold ferment helps nooks
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
                w_index: t('styles.w300'),
                pl_ratio: t('styles.extensible'),
                absorption_capacity: t('styles.high_4'),
                protein_type: t('styles.strong_wheat_3'),
                science_explanation: 'High protein is needed to support the high hydration (80%ish) which creates the large bubbles (nooks) during the griddle cook.'
            },
            thermalProfile: {
                oven_type: "Griddle / Skillet",
                heat_distribution: t('styles.conduction_2'),
                crust_development: t('styles.pale_dusted_with_semolina'),
                crumb_structure: "Large alveoli (Nooks)"
            },
            fermentationScience: {
                yeast_activity: t('styles.high_5'),
                ph_target: "Acidic (Sourdough/Buttermilk often used)",
                organic_acids: t('styles.lactic_3'),
                enzymatic_activity: t('styles.high_6')
            },
            processScience: 'The t('common.fork_split'): Cutting with a knife shears the gluten strands and ruins the texture. Pulling apart (or using a fork) preserves the peaks and valleys (nooks) that hold the butter.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'High Hydration Mix',
                duration: '15 min',
                action: 'Mix to full windowpane.',
                science: 'Strong gluten network required to trap the steam/CO2 in large pockets.'
            },
            {
                phase: 'Bulk',
                title: 'Cold Ferment',
                duration: '12h',
                action: 'Bulk in fridge.',
                science: 'Develops flavor and allows hydration to fully penetrate.'
            },
            {
                phase: 'Cook',
                title: 'Griddle',
                duration: '14 min',
                action: 'Cook in rings on a medium-low griddle, flip halfway.',
                science: 'Direct conduction heat sets the bottom and top, while the side walls remain soft.'
            }
        ],
        references: ['Thomas History', 'Bread Baker\'s Apprentice'],
        images: {
            hero: '/images/styles/english_muffin_toasted.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'khachapuri-adjaruli',
        name: 'Khachapuri Adjaruli',
        region: 'Europe', // Or switch to Asia/General, but culturally Georgian cuisine is often grouped with Eastern Europe/Black Sea.
        subRegion: 'Georgia',
        category: 'Enriched',
        recipeStyle: RecipeStyle.FLATBREAD,
        tags: [t('styles.cheese_boat'), t('styles.egg'), t('styles.rich')],
        description: 'The famous boat-shaped bread from the Adjara region of Georgia. It is filled with cheese (Sulguni/Imeretian), butter, and topped with a raw egg yolk before serving.',
        history_context: 'Adjara is a coastal region. The shape is said to represent a boat, and the egg yolk the sun, reflecting the region\'s maritime culture.',
        base_formula: [
            { name: 'Bread Flour', percentage: 100 },
            { name: 'Water/Milk', percentage: 60 },
            { name: 'Yeast', percentage: 1 },
            { name: 'Salt', percentage: 1.8 },
            { name: 'Oil', percentage: 3 },
            { name: 'Sugar', percentage: 1 }
        ],
        specs: {
            hydration: { ideal: 60, min: 58, max: 65 },
            ovenTemp: { ideal: 250, min: 230, max: 270 },
            fermentationTime: '2-4h',
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
                w_index: t('styles.w260280'),
                pl_ratio: t('styles.extensible_2'),
                absorption_capacity: t('styles.medium_50'),
                protein_type: t('styles.strong_wheat_4'),
                science_explanation: 'Extensibility is needed to fold the "boat" sides without them snapping back open during baking.'
            },
            thermalProfile: {
                oven_type: "Hearth / Deck",
                heat_distribution: t('styles.radiant_2'),
                crust_development: t('styles.browned'),
                crumb_structure: t('styles.soft_airy_rim')
            },
            fermentationScience: {
                yeast_activity: t('styles.standard_8'),
                ph_target: t('styles.normal_2'),
                organic_acids: t('styles.low_5'),
                enzymatic_activity: t('styles.standard_9')
            },
            processScience: 'The boat shape (t('common.nave')) acts as a container. The cheese mixture melts and emulsifies with the butter. The final addition of the egg yolk relies on the residual heat of the cheese to partially cook (pasteurize) it while stirring.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Soft Dough',
                duration: '10 min',
                action: 'Mix to windowpane.',
                science: 'Standard enriched dough.'
            },
            {
                phase: 'Prep',
                title: 'Shaping',
                duration: '10 min',
                action: 'Roll oval. Cheese in center. Roll sides up and twist ends to seal.',
                science: 'Sealing the ends tightly is critical to prevent the cheese lava from leaking.'
            },
            {
                phase: 'Bake',
                title: 'Bake w/ Cheese',
                duration: '15 min',
                action: 'Bake until golden.',
                science: 'Cheese browning adds flavor.'
            },
            {
                phase: 'Cook',
                title: 'The Egg',
                duration: '1 min',
                action: 'Add egg yolk and butter 2 mins before finish or right after.',
                science: 'We want the yolk runny.'
            }
        ],
        references: [t('styles.georgian_table')],
        images: {
            hero: '/images/styles/khachapuri_adjarian.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'danish-rugbrod',
        name: 'Danish Rugbrød (Rye Bread)',
        region: 'Europe',
        subRegion: 'Denmark',
        category: 'Bread',
        recipeStyle: RecipeStyle.RYE,
        tags: [t('styles.sourdough_2'), t('styles.whole_grain'), t('styles.seeds'), t('styles.dense')],
        description: 'The foundation of the "Smørrebrød" (open-faced sandwich). A dense, dark, sour rye bread packed with cracked rye kernels and seeds. It has very little to no wheat flour.',
        history_context: 'Rye grows well in the cool, damp Nordic climate. Historically a peasant bread, it is now celebrated for its health benefits and deep flavor.',
        base_formula: [
            { name: 'Rye Flour (Dark)', percentage: 100 }, // Or split 70/30 Rye/Wheat
            { name: 'Water', percentage: 90 }, // Rye absorbs a lot
            { name: 'Cracked Rye Kernels', percentage: 50 },
            { name: 'Seeds (Sunflower/Flax)', percentage: 30 },
            { name: 'Sourdough Starter (Rye)', percentage: 30 },
            { name: 'Salt', percentage: 2 },
            { name: 'Malt Syrup', percentage: 3 }
        ],
        specs: {
            hydration: { ideal: 90, min: 80, max: 100 },
            ovenTemp: { ideal: 180, min: 160, max: 200 }, // Low and slow
            fermentationTime: '12-24h',
            difficulty: 'Hard'
        },
        calculation: {
            method: 'baker_percentage',
            requiresYeast: false, // Sourdough driven
            requiresSteam: true,
            allowOil: true
        },
        scientificProfile: {
            flourRheology: {
                w_index: "N/A (Rye)",
                pl_ratio: "Viscous (Pentosan driven)",
                absorption_capacity: t('styles.very_high'),
                protein_type: "Rye (Secalins)",
                science_explanation: 'Rye contains glutenin/gliadin but they don\'t form a network like wheat. Structure comes from Pentosans (gums) and starch gelatinization. Acid (Sourdough) is MANDATORY to prevent "starch attack" (amylase destroying structure).'
            },
            thermalProfile: {
                oven_type: t('styles.pullman_pan'),
                heat_distribution: t('styles.conduction_3'),
                crust_development: t('styles.thick'),
                crumb_structure: t('styles.dense_moist')
            },
            fermentationScience: {
                yeast_activity: t('styles.sourdough_3'),
                ph_target: "<4.5 (Acidic)",
                organic_acids: t('styles.acetic'),
                enzymatic_activity: t('styles.inhibited_by_acid')
            },
            processScience: 'The t('common.starch_attack'): Rye is high in amylase enzymes. If pH is not lowered (<4.5), these enzymes will digest the starch during baking, resulting in a gummy, collapsed loaf. The sourdough is not just for flavor; it is a structural necessity.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Soak',
                duration: '12h',
                action: 'Soak kernels and seeds.',
                science: 'Hydrates the hard grains so they don\'t pull water from the dough later.'
            },
            {
                phase: 'Mix',
                title: 'Paste Mix',
                duration: '15 min',
                action: 'Mix all ingredients. It will be a paste/mud, not a dough.',
                science: 'No gluten development windowpane possible. Mixing is for distribution and gum hydration.'
            },
            {
                phase: 'Bulk',
                title: 'Pan Proof',
                duration: '2-4h',
                action: 'Proof in the tin until pinholes appear on surface.',
                science: 'Gas production (CO2) from yeast is trapped by the viscous pentosan gel.'
            },
            {
                phase: 'Bake',
                title: 'Long Bake',
                duration: '60-90 min',
                action: 'Bake at 180°C to internal temp 98°C.',
                science: 'Long bake ensures starch gelatinization all the way through the wet mass.'
            }
        ],
        references: [t('styles.the_rye_baker'), t('styles.meyers_bageri')],
        images: {
            hero: '/images/styles/danish_rye_slice.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'tiger-bread',
        name: 'Tiger Bread (Dutch Crunch)',
        region: 'Europe',
        subRegion: 'Netherlands',
        category: 'Bread',
        recipeStyle: RecipeStyle.SANDWICH_LOAF,
        tags: [t('styles.topping'), t('styles.crunchy'), t('styles.rice_paste')],
        description: 'Known as t('common.tijgerbrood') in the Netherlands and t('common.dutch_crunch') in SF. It is a soft white bloomer loaf coated with a rice flour paste applied before baking, which cracks into a tiger-skin pattern.',
        history_context: 'Traded between the Netherlands and Southeast Asia (rice trade) in the early 20th century. The topping is the star.',
        base_formula: [
            { name: 'Bread Flour', percentage: 100 },
            { name: 'Water', percentage: 62 },
            { name: 'Yeast', percentage: 2 },
            { name: 'Salt', percentage: 2 },
            { name: 'Sugar', percentage: 2 },
            { name: 'Oil/Butter', percentage: 2 }
        ],
        specs: {
            hydration: { ideal: 62, min: 60, max: 65 },
            ovenTemp: { ideal: 200, min: 190, max: 210 },
            fermentationTime: '2-4h',
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
                w_index: t('styles.w240260'),
                pl_ratio: t('styles.balanced_6'),
                absorption_capacity: t('styles.medium_52'),
                protein_type: t('styles.strong_wheat_5'),
                science_explanation: 'The dough itself is a standard vibrant white bread. The science is in the topping.'
            },
            thermalProfile: {
                oven_type: t('styles.convection_3'),
                heat_distribution: t('styles.even_3'),
                crust_development: "Cracked (Topping)",
                crumb_structure: t('styles.soft_3')
            },
            fermentationScience: {
                yeast_activity: t('styles.high_7'),
                ph_target: t('styles.normal_3'),
                organic_acids: t('styles.low_6'),
                enzymatic_activity: t('styles.standard_10')
            },
            processScience: 'The t('common.tiger_paste') is made of Rice Flour, Yeast, Sugar, Oil, and Water. Since rice flour lacks gluten, it does not expand. As the dough loaf expands underneath (Oven Spring), the rigid rice paste cracks apart, creating the pattern and the intense crunch.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Dough Mix',
                duration: '10 min',
                action: 'Mix standard white dough.',
                science: 'Standard method.'
            },
            {
                phase: 'Prep',
                title: 'Paste Prep',
                duration: '15 min',
                action: 'Mix Rice Flour, Water, Yeast, Sugar, Sesame Oil. Let ferment 15 mins.',
                science: 'Yeast in the paste aerates it slightly, aiding the crackle.'
            },
            {
                phase: 'Bake',
                title: 'Paint & Bake',
                duration: '30 min',
                action: 'Brush paste thickly on proofed loaf. Bake immediately.',
                science: 'Paste must be wet when entering oven.'
            }
        ],
        references: [t('styles.dutch_baking_history')],
        images: {
            hero: '/images/styles/tiger_bread_crackled.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    },
    {
        id: 'irish-soda-bread',
        name: 'Irish Soda Bread',
        region: 'Europe',
        subRegion: 'Ireland',
        category: 'Bread',
        recipeStyle: RecipeStyle.COUNTRY_LOAF, // Technically chemically leavened
        tags: [t('styles.quick_bread'), t('styles.no_yeast'), t('styles.buttermilk')],
        description: 'A quick bread that uses bacteria-soured milk (Buttermilk) and sodium bicarbonate (Baking Soda) as a leavening agent instead of yeast. Dense, moist, and crusty.',
        history_context: 'Became popular in Ireland in the 1840s when bicarbonate was introduced. Wheat was soft (low protein) in Ireland, making yeast bread difficult, so chemical leavening was a perfect adaptation.',
        base_formula: [
            { name: 'Soft Wheat Flour (Pastry/AP)', percentage: 100 },
            { name: 'Buttermilk', percentage: 90 }, // Very high because it's a batter/dough hybrid
            { name: 'Baking Soda', percentage: 2 },
            { name: 'Salt', percentage: 1.5 }
        ],
        specs: {
            hydration: { ideal: 85, min: 80, max: 95 },
            ovenTemp: { ideal: 200, min: 190, max: 210 },
            fermentationTime: '0 min',
            difficulty: 'Easy'
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
                pl_ratio: t('styles.weak'),
                absorption_capacity: t('styles.low_7'),
                protein_type: t('styles.irish_soft_wheat'),
                science_explanation: 'Low protein flour is preferred. High protein would make it tough/rubbery because there is no fermentation to relax the gluten.'
            },
            thermalProfile: {
                oven_type: "Dutch Oven / Bastible",
                heat_distribution: t('styles.conduction_4'),
                crust_development: t('styles.thick_hard'),
                crumb_structure: t('styles.dense_cakelike')
            },
            fermentationScience: {
                yeast_activity: t('styles.none_5'),
                ph_target: "Acidic (Buttermilk)",
                organic_acids: "Lactic (added directly)",
                enzymatic_activity: t('styles.low_8')
            },
            processScience: 'Acid-Base Reaction: Lactic Acid (Buttermilk) + Sodium Bicarbonate = CO2 + Water + Salt. This reaction is instant. The dough must be baked immediately or the gas is lost.'
        },
        process: [
            {
                phase: 'Mix',
                title: 'Gentle Mix',
                duration: '3 min',
                action: 'Mix dry. Add wet. Stir until just combined.',
                science: 'Do not knead. Kneading develops gluten -> tough bread.'
            },
            {
                phase: 'Prep',
                title: 'Score',
                duration: '1 min',
                action: 'Shape round. Cut a deep cross (t('common.blessing_the_bread')).',
                science: 'The deep cross allows heat to penetrate the thickest part of the dense loaf to ensure even cooking.'
            },
            {
                phase: 'Bake',
                title: 'Bake',
                duration: '30-40 min',
                action: 'Bake at 200°C.',
                science: 'Immediate heat needed for the final lift.'
            }
        ],
        references: [t('styles.darina_allen'), t('styles.ballymaloe')],
        images: {
            hero: '/images/styles/irish_soda_bread_rustic.png',
            dough: '/images/styles/placeholder-dough.png',
            crumb: '/images/styles/placeholder-dough.png'
        }
    }
];
