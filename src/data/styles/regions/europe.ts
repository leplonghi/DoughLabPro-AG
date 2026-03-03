import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

// Imported V3 styles that supersede V2 definitions
import { baguette_tradition_francaise } from '../bread/baguette_tradition_francaise';
import { pretzel_dough_classic } from '../bread/pretzel_dough_classic';

export const briocheTete: DoughStyleDefinition = {
    id: "brioche-tete",
    name: "Brioche à Tête",
    category: "bread",
    recipeStyle: RecipeStyle.BRIOCHE,
    family: "Enriched Breads",
    origin: {
        country: "France",
        region: "Normandy / Paris",
        period: "15th Century"
    },
    description: "The classic French 'rich man's bread' baked in a fluted tin and adorned with a distinctive 'head' (tête) or topknot. Known for its ultra-tender, cotton-like crumb achieved through an astonishing ratio of butter and eggs.",
    history: "Originating in Normandy, where butter was plentiful, Brioche became a status symbol in pre-revolutionary France. The classic 'à tête' shape allowed the dense, heavily enriched dough to expand vertically during baking without blowing out the sides.",
    base_formula: [
        { name: 'Strong Bread Flour (T45)', percentage: 100 },
        { name: 'Eggs (Cold)', percentage: 50 },
        { name: 'Unsalted Butter (Cold but pliable)', percentage: 50 },
        { name: 'Sugar', percentage: 12 },
        { name: 'Milk', percentage: 10 },
        { name: 'Yeast', percentage: 2 },
        { name: 'Salt', percentage: 2 }
    ],
    difficulty: 'Expert',
    fermentationType: "preferment", // Often utilizes a sponge
    technicalProfile: {
        hydration: [55, 65], // Mostly hydration from eggs
        salt: [1.8, 2.2],
        oil: [40, 60], // Extreme butter content
        sugar: [10, 15],
        flourStrength: "Very Strong (W350+ / T45)",
        ovenTemp: [180, 200],
        recommendedUse: ['Breakfast pastry', 'French Toast', 'Foie Gras pairing'],
        difficulty: 'Expert',
        fermentationSteps: [
            "Prepare a sponge (preferment) with the milk, yeast, and a portion of the flour",
            "Intensive Mix: Knead eggs and flour until strong gluten forms BEFORE adding butter",
            "Slowly incorporate butter until an incredibly extensible windowpane is achieved",
            "Cold ferment for 12-24 hours (Mandatory to solidify the butter)",
            "Shape quickly while cold into a large ball with a smaller topknot",
            "Proof until doubled in a fluted tin",
            "Egg wash twice and bake"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W350+",
            pl_ratio: "Balanced (0.6)",
            absorption_capacity: 'High',
            protein_type: "Strong European Spring Wheat",
            science_explanation: "The dough must possess massive mechanical strength to entrap 50% fat and 50% eggs without collapsing into a cake batter."
        },
        thermalProfile: {
            oven_type: 'Deck or Convection',
            heat_distribution: "Even, gentle heat",
            crust_development: "Deep mahogany, blistered egg-washed crust",
            crumb_structure: 'Cottony, long vertical shreds'
        },
        fermentationScience: {
            yeast_activity: 'Severely retarded by fat and sugar',
            ph_target: 'Neutral',
            organic_acids: 'Low',
            enzymatic_activity: 'Moderate'
        },
        processScience: "Adding the butter AFTER full gluten development ensures the fat lubricates the gluten sheets without physically interrupting the protein bond formation."
    },
    tags: ["High fat", "Eggs", "Butter", "France", "Enriched"],
    pairings: {
        canonical: ['Fruit preserves', 'Foie Gras', 'Coffee'],
        modern: ['Nutella', 'Thick cut bacon'],
        regional: ['Normandy butter', 'Camembert']
    },
    watchouts: [
        "If the dough exceeds 26°C during mixing, the butter will melt, destroying the gluten network completely.",
        "Always shape the dough straight from the fridge while the butter is solid."
    ],
    notes: [
        "Osmotolerant yeast (Gold) is highly recommended due to the sugar content.",
        "Brioche is distinct from cake because it relies on yeast aeration and gluten, not chemical leaveners."
    ],
    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/brioche-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'The Double Wash',
                explanation: "For the deepest, shiniest mahogany crust, egg wash the brioche once before proofing, and again right before baking."
            }
        ],
        what_if: [
            {
                scenario: 'The dough turns into a greasy batter during mixing',
                result: "The butter melted and broke the emulsion.",
                correction: 'Chill your mixing bowl and ingredients; add butter slowly in cold pliable chunks.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Shokupan (Milk Bread)',
                difference: "Shokupan relies on Tangzhong (starch) for softness with 10% fat; Brioche achieves softness through brute-force fat enrichment (50%+ butter).",
                why_choose_this: 'Choose Brioche for extreme richness and a pastry-like eating experience.'
            }
        ],
        q_and_a: [
            {
                question: 'Why create a \"tête\" (topknot)?',
                answer: "The tête acts as an expansion valve. As the rich dough rapidly expands in the oven, the topknot lifts, allowing vertical expansion without tearing the sides.",
                context: 'History'
            }
        ],
        fermentation_methods: [
            {
                method: 'Cold Fermentation',
                suitability: 'Mandatory',
                notes: "Butter must solidify overnight in the fridge to make shaping possible."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "Water is minimal; hydration is achieved almost entirely via eggs (which contain water but also emulsifying lecithin).",
        methodSuitability: {
            direct: { suitable: true, notes: "Possible but risky." },
            biga: { suitable: false, notes: "Avoid." },
            poolish: { suitable: false, notes: "Avoid." }
        },
        whatIf: [
            {
                scenario: 'The topknot falls off to the side',
                outcome: "The two pieces were not fused properly.",
                solution: 'Use two fingers coated in flour to aggressively poke down through the center of the topknot deep into the base ball to fuse them.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Challah',
                difference: 'Challah uses oil and no dairy to remain Kosher for meat meals; Brioche is built on dairy (butter/milk).'
            }
        ],
        proTips: [
            "Use a stand mixer. You cannot successfully mix a 50% butter brioche dough by hand without the heat of your hands melting the butter."
        ]
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw", "vanilla_madagascar"]
};

export const englishMuffin: DoughStyleDefinition = {
    id: "english_muffin",
    name: "Classic English Muffin",
    category: "bread",
    recipeStyle: RecipeStyle.ENGLISH_MUFFIN,
    family: "Griddled Breads",
    origin: {
        country: "United Kingdom",
        region: "England",
        period: "10th Century"
    },
    description: "A small, round, yeast-leavened bread traditionally baked on a stovetop griddle rather than in an oven. Distinctive for its pale crust dusted with semolina and its porous interior full of 'nooks and crannies'.",
    history: "Before ovens were commonplace in homes, bread baked on a flat iron griddle over an open fire was standard fare. True English muffins are split with a fork, never a knife, to preserve their jagged interior texture perfectly suited for pooling melted butter.",
    base_formula: [
        { name: 'Bread Flour', percentage: 100 },
        { name: 'Milk (or Water)', percentage: 75 },
        { name: 'Butter', percentage: 2 },
        { name: 'Salt', percentage: 2 },
        { name: 'Yeast', percentage: 1 },
        { name: 'Sugar', percentage: 1 },
        { name: 'Semolina (Coating)', percentage: 0 }
    ],
    difficulty: 'Medium',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [75, 82],
        salt: [1.8, 2.2],
        oil: [2, 5],
        sugar: [1, 3],
        flourStrength: "Strong (W300-320)",
        ovenTemp: [180, 200], // Griddle surface temp
        recommendedUse: ['Eggs Benedict', 'Breakfast Sandwiches', 'Toasted with Jam'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix a high-hydration dough/batter until smooth",
            "Slow bulk ferment in the fridge overnight for maximum flavor",
            "Divide and gently form into rounds without degassing heavily",
            "Proof on a heavy bed of semolina flour",
            "Cook slowly on an ungreased griddle, flipping once"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W300-320",
            pl_ratio: "Balanced",
            absorption_capacity: 'High',
            protein_type: "Strong Bread Flour",
            science_explanation: "High protein is required to trap the massive gas bubbles formed in the highly hydrated dough without collapsing."
        },
        thermalProfile: {
            oven_type: 'Griddle / Skillet',
            heat_distribution: "Conduction",
            crust_development: "Pale flat top and bottom with toasted semolina spots",
            crumb_structure: 'Large irregular alveoli (Nooks & Crannies)'
        },
        fermentationScience: {
            yeast_activity: 'High',
            ph_target: 'Slightly acidic (Sourdough/Buttermilk often used)',
            organic_acids: 'Lactic',
            enzymatic_activity: 'High'
        },
        processScience: "Baking via direct conduction sets the top and bottom crusts flat, forcing the internal steam to travel laterally, creating the iconic large horizontal porous structure."
    },
    tags: ["Griddle", "Nooks", "Breakfast", "UK", "Toasteable"],
    pairings: {
        canonical: ['Poached eggs', 'Hollandaise', 'Orange Marmalade'],
        modern: ['Avocado', 'Sausage Patties'],
        regional: ['Clotted cream']
    },
    watchouts: [
        "Cooking the muffins on too high a heat will burn the semolina crust before the inside is fully cooked.",
        "Never slice them with a knife; it destroys the nooks and crannies."
    ],
    notes: [
        "A highly hydrated dough creates the best interior holes.",
        "Authentic muffins have entirely straight, un-browned vertical sides."
    ],
    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/english_muffin_toasted.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Fork splitting',
                explanation: "Pierce the equator of the muffin all the way around with the tines of a fork, then pull it apart. This creates jagged peaks and valleys that toast beautifully and hold pools of butter."
            }
        ],
        what_if: [
            {
                scenario: 'The center is raw and gummy',
                result: "Griddle was too hot.",
                correction: 'Lower the heat to low-medium and cook them for 6-8 minutes per side. You can also finish them in a 350F oven if the outside colors too quickly.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Bagel',
                difference: "Bagels are low-hydration, boiled, then baked in an oven. English Muffins are high-hydration, covered in semolina, and baked entirely on a flat griddle.",
                why_choose_this: 'Choose English Muffins for a crisper, lighter, more porous breakfast bread.'
            }
        ],
        q_and_a: [
            {
                question: 'Why bake on a griddle instead of an oven?',
                answer: "The direct conductive heat from the flat pan seals the top and bottom, trapping steam inside to blowout the beautiful large holes in the crumb.",
                context: 'Process'
            }
        ],
        fermentation_methods: [
            {
                method: 'Poolish or Sourdough Starter',
                suitability: 'Ideal',
                notes: "An overnight preferment produces the classic tang."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "Extreme hydration (75-80%) allows the yeast to work rapidly and creates massive steam pockets upon hitting the hot iron pan.",
        methodSuitability: {
            direct: { suitable: true, notes: "Fast but lacks depth of flavor." },
            biga: { suitable: false, notes: "Too stiff." },
            poolish: { suitable: true, notes: "Highly recommended for flavor and extensibility." }
        },
        whatIf: [
            {
                scenario: 'They puff up like balls instead of flat pucks',
                outcome: "Dough was too stiff.",
                solution: 'The dough should be almost batter-like. You can also rest a second heavy pan on top of them during the first few minutes of cooking to keep them flat.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Crumpet',
                difference: 'Crumpets use a literal batter poured into a ring and baked only on one side until holes appear on top. English muffins are a dough that is flipped and baked on both sides.'
            }
        ],
        proTips: [
            "Use English muffin rings (or clean tuna cans) greased with butter to force the wet dough to rise perfectly straight upwards."
        ]
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "strawberry_jam", "cream_cheese"]
};

export const khachapuriAdjaruli: DoughStyleDefinition = {
    id: "khachapuri-adjaruli",
    name: "Adjaruli Khachapuri",
    category: "pizza",
    recipeStyle: RecipeStyle.FLATBREAD,
    family: "Flatbreads & pizzas",
    origin: {
        country: "Georgia",
        region: "Adjara (Black Sea Coast)",
        period: "15th Century"
    },
    description: "An iconic Georgian dish consisting of a boat-shaped yeast bread filled with a bubbling mixture of cheese, topped with a raw egg yolk and a pat of butter right as it exits the oven.",
    history: "The boat shape is deeply tied to the Adjara region's maritime history on the Black Sea; the bread represents a boat, the cheese is the sea, and the egg yolk represents the sun. It is functionally a meal acting as its own edible bread bowl.",
    base_formula: [
        { name: 'Bread Flour', percentage: 100 },
        { name: 'Water or Milk', percentage: 60 },
        { name: 'Oil', percentage: 3 },
        { name: 'Salt', percentage: 1.8 },
        { name: 'Sugar', percentage: 1 },
        { name: 'Yeast', percentage: 1 }
    ],
    difficulty: 'Medium',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [58, 65],
        salt: [1.5, 2.0],
        oil: [2, 5],
        sugar: [1, 2],
        flourStrength: "Medium (W240-260)",
        ovenTemp: [230, 270],
        recommendedUse: ['Cheese Boat (Sulguni/Imeretian Cheese)'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix a supple, pizza-like dough",
            "Bulk ferment until doubled",
            "Divide into balls and stretch into large ovals",
            "Roll the long edges inward toward the center to create a 'boat' rim",
            "Fill the center heavily with cheese mixture",
            "Bake at high heat until golden and cheese is bubbling",
            "Add egg yolk for the final 1 minute (or upon exit)"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W240-260",
            pl_ratio: "Extensible",
            absorption_capacity: 'Medium',
            protein_type: "Bread Flour",
            science_explanation: "Similar to pizza dough, it needs enough extensibility to be stretched into an oval without tearing, and enough strength to hold molten cheese."
        },
        thermalProfile: {
            oven_type: 'Hearth / Deck',
            heat_distribution: "Radiant & Conduction",
            crust_development: "Deeply browned, often crisp on the bottom",
            crumb_structure: 'Soft, airy rims designed for tearing'
        },
        fermentationScience: {
            yeast_activity: 'Standard',
            ph_target: 'Neutral',
            organic_acids: 'Low',
            enzymatic_activity: 'Standard'
        },
        processScience: "The rolled crust edges act as a structural dam holding the heavy, high-moisture cheese mixture in place from spreading."
    },
    tags: ["Cheese boat", "Egg", "Rich", "Georgia", "Bread bowl"],
    pairings: {
        canonical: ['Sulguni Cheese', 'Imeretian Cheese', 'Egg Yolk', 'Butter'],
        modern: ['Mozzarella/Feta blend (Substitute)'],
        regional: ['Tarragon']
    },
    watchouts: [
        "If you don't roll the edges tightly, the 'boat' will unfold during baking and the cheese will leak everywhere.",
        "Do not overcook the egg yolk; it must remain liquid to mix into the cheese."
    ],
    notes: [
        "To eat, you tear off the crusty ends of the boat (the 'bow' and 'stern') and use them to violently stir the raw egg yolk and butter into the molten cheese.",
        "A mix of low-moisture mozzarella and French feta is the closest substitute for authentic Georgian cheeses."
    ],
    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/placeholder-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Stuffed crust',
                explanation: "For the ultimate boat, lay a line of cheese along the long edges BEFORE you roll them inward, creating a cheese-stuffed crust rim."
            }
        ],
        what_if: [
            {
                scenario: 'The egg yolk cooks solid',
                result: "Baked too long at the end.",
                correction: 'Only add the egg yolk immediately after pulling the bread out of the oven. The residual heat of the molten cheese will cook it as you stir.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Pizza Napoletana',
                difference: "Khachapuri dough contains slight enrichments (oil/sugar) for tenderness, is shaped into a 3D vessel, and relies entirely on cheese/egg dairy for sauce.",
                why_choose_this: 'Choose Khachapuri as a rich, interactive, communal dish.'
            }
        ],
        q_and_a: [
            {
                question: 'Can I add toppings?',
                answer: "In Adjara, this is heresy. The purity of the cheese, butter, and egg is the point of the dish.",
                context: 'History'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "Rapid fermentation is all that is required."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "60% hydration yields a very pliable, easy-to-shape dough with a sturdy structure.",
        methodSuitability: {
            direct: { suitable: true, notes: "Traditional method." },
            biga: { suitable: true, notes: "Can be used for more dough strength." },
            poolish: { suitable: false, notes: "Too wet/extensible." }
        },
        whatIf: [
            {
                scenario: 'The bottom of the boat is raw and gummy',
                outcome: "The massive amount of wet cheese soaked into the dough, or the baking surface wasn't hot enough.",
                solution: 'Use a preheated pizza stone/steel to rapidly set the bottom crust before the cheese can seep in.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Calzone',
                difference: 'A calzone is fully sealed; Khachapuri is an open-faced bread bowl.'
            }
        ],
        proTips: [
            "Pinch the two ends of the boat together viciously—wetting your fingers slightly—so it doesn't un-moor in the oven heat."
        ]
    },
    recommendedFlavorComponents: ["feta", "mozzarella"]
};

export const danishRugbrod: DoughStyleDefinition = {
    id: "danish-rugbrod",
    name: "Danish Rugbrød",
    category: "bread",
    recipeStyle: RecipeStyle.VOLLKORNBROT,
    family: "Rye Breads",
    origin: {
        country: "Denmark",
        region: "Scandinavia",
        period: "Viking Age"
    },
    description: "A very dense, dark, heavy rye bread characterized by its massive inclusion of seeds and cracked grains. It is exclusively leavened with sourdough, possessing a deep sour tang and a long shelf life.",
    history: "Scandinavia's climate is inhospitable to European wheat but perfect for hardy rye. For a thousand years, Rugbrød has been the foundational staple of the Danish diet, famously serving as the structural base for 'Smørrebrød' (open-faced sandwiches).",
    base_formula: [
        { name: 'Whole Rye Flour', percentage: 100 },
        { name: 'Water', percentage: 90 },
        { name: 'Cracked Rye Berries', percentage: 50 },
        { name: 'Mixed Seeds (Sunflower, Flax, Pumpkin)', percentage: 40 },
        { name: 'Rye Sourdough Starter', percentage: 30 },
        { name: 'Malt Syrup or Dark Treacle', percentage: 5 },
        { name: 'Salt', percentage: 2.5 }
    ],
    difficulty: 'Medium',
    fermentationType: "levain",
    technicalProfile: {
        hydration: [85, 100], // Extremely high to hydrate all the dry seeds
        salt: [2.0, 3.0], // High salt prevents aggressive rye enzymatic degradation
        oil: [0, 0],
        sugar: [3, 8],
        flourStrength: "N/A (Rye)",
        ovenTemp: [180, 200], // Low, slow bake in a tin
        recommendedUse: ['Smørrebrød (Open-faced sandwiches)'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Soak all cracked grains and seeds overnight in warm water",
            "Prepare a highly active, 100% hydration rye sourdough starter",
            "Mix until a paste forms (there is no gluten to develop)",
            "Pour the batter into a greased loaf pan and smooth the top",
            "Ferment for 4-8 hours until visibly aerated and cracked on top",
            "Bake slowly for 1.5 to 2 hours"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "N/A (No gluten)",
            pl_ratio: "N/A",
            absorption_capacity: 'Extreme',
            protein_type: "Rye Pentosans",
            science_explanation: "Structure is dictated entirely by pentosans (gums) and starch gelatinization, not gluten networking."
        },
        thermalProfile: {
            oven_type: 'Convection/Deck (in a heavy tin)',
            heat_distribution: "Conduction (Pan)",
            crust_development: "Hard, dark, deeply caramelized top with seeds",
            crumb_structure: 'Extremely dense, moist, and cohesive'
        },
        fermentationScience: {
            yeast_activity: 'Slow',
            ph_target: 'Highly acidic (pH 4.0)',
            organic_acids: 'Lactic & Acetic',
            enzymatic_activity: 'Hyper-active; acidity is REQUIRED to halt '
        },
        processScience: "Rye contains aggressive amylase enzymes that will digest the bread into a gummy mess in the oven. The extreme acidity of the sourdough starter lowers the pH sufficiently to pacify these enzymes."
    },
    tags: ["Rye", "Seeds", "Sourdough", "Dense", "Denmark"],
    pairings: {
        canonical: ['Pickled Herring', 'Salted Butter', 'Liver Pâté', 'Cured Salmon'],
        modern: ['Avocado', 'Boiled Egg'],
        regional: ['Smørrebrød']
    },
    watchouts: [
        "If you do not use sourdough, the bread will turn into raw glue inside (the 'Starch Attack').",
        "Must rest for 24-48 hours after baking before slicing."
    ],
    notes: [
        "A slice is physically heavy; the bread is practically a brick of nutrition.",
        "Dark color is often enhanced with roasted malt powder or dark treacle."
    ],
    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/placeholder-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'The 24-Hour Rule',
                explanation: "Rye breads continue cooking and setting as they cool. If you slice Rugbrød on the same day it was baked, the knife will drag and the crumb will be a gummy, sticky mess. Wait 24-48 hours minimum."
            }
        ],
        what_if: [
            {
                scenario: 'The inside is gooey and completely raw, despite an hour of baking',
                result: "Starch attack. The dough wasn't acidic enough.",
                correction: 'Ensure your sourdough starter is ripe, aggressive, and highly acidic. This halts the amylase enzymes from destroying the baked structure.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Pumpernickel',
                difference: "Pumpernickel is baked at 250F for 16+ hours creating a black, sweet loaf. Rugbrød incorporates huge amounts of seeds and bakes normally (2 hours), leaning more savory/tangy.",
                why_choose_this: 'Choose Rugbrød for the cornerstone of a Scandinavian lunch.'
            }
        ],
        q_and_a: [
            {
                question: 'Can I use commercial yeast?',
                answer: "You risk failure due to the lack of acidity. If you must use yeast, you must add acid (like buttermilk or vinegar) or 100% pure rye will likely fail.",
                context: 'Science'
            }
        ],
        fermentation_methods: [
            {
                method: 'Sourdough (Rye Culture)',
                suitability: 'Mandatory',
                notes: "Absolutely fundamentally necessary for structural integrity."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "Though 85%+ sounds insane, rye flour and the 50%+ inclusions of dry seeds drink water endlessly. The dough will resemble wet cement.",
        methodSuitability: {
            direct: { suitable: false, notes: "Fails starch attack limit." },
            biga: { suitable: false, notes: "Fails starch attack limit." },
            poolish: { suitable: false, notes: "Fails starch attack limit." }
        },
        whatIf: [
            {
                scenario: 'The top split open completely',
                outcome: "The bread was underproofed when placed in the oven.",
                solution: 'Wait until the dough paste visually develops pin-holes and cracks on the surface before baking.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Standard Sourdough',
                difference: 'Wheat sourdough relies on gluten structure and high heat spring; Rye relies on gelled carbohydrates and cooks slowly in a pan.'
            }
        ],
        proTips: [
            "Use wet hands to smooth the top of the dough flat once it is in the tin, then coat generously with oats or seeds."
        ]
    },
    recommendedFlavorComponents: ["malt_powder", "sesame_seeds", "flax_seeds"]
};

export const tigerBread: DoughStyleDefinition = {
    id: "tiger-bread",
    name: "Tiger Bread (Dutch Crunch)",
    category: "bread",
    recipeStyle: RecipeStyle.SANDWICH_LOAF,
    family: "Specialty Breads",
    origin: {
        country: "Netherlands",
        region: "Nationwide",
        period: "1970s"
    },
    description: "A commercial white bread loaf (or sandwich roll) slathered with a thick rice flour batter before baking. As the bread rises and baking expands the loaf, the rice paste cracks brilliantly into a tiger-stripe pattern.",
    history: "Known as Tijgerbrood in the Netherlands, it became immensely popular in the late 20th century. San Francisco also adopted it vigorously under the name 'Dutch Crunch', making it the signature sandwich roll of the Bay Area deli scene.",
    base_formula: [
        { name: 'Bread Flour (For the Bread)', percentage: 100 },
        { name: 'Rice Flour (For the Paste)', percentage: 15 },
        { name: 'Water (Bread)', percentage: 65 },
        { name: 'Water (Paste)', percentage: 15 },
        { name: 'Yeast (Bread + Paste)', percentage: 2 },
        { name: 'Sugar (Paste)', percentage: 2 },
        { name: 'Sesame Oil (Paste)', percentage: 1 },
        { name: 'Salt', percentage: 2 }
    ],
    difficulty: 'Medium',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 68],
        salt: [1.8, 2.0],
        oil: [1, 3],
        sugar: [1, 5],
        flourStrength: "Medium-Strong (W260-280)",
        ovenTemp: [200, 220],
        recommendedUse: ['Deli Sandwiches (Dutch Crunch)'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix a standard lean or slightly enriched white bread dough",
            "Proof normally and shape into boules or submarine rolls",
            "Mix rice flour, warm water, yeast, sugar, and toasted sesame oil into a thick paste",
            "Rest paste for 20 minutes to bubble",
            "Slather a heavy, thick layer of paste entirely over the proofed dough",
            "Bake; the non-extensible rice paste will shatter as the gluten dough expands"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W260-280",
            pl_ratio: "Balanced",
            absorption_capacity: 'Medium',
            protein_type: "Bread Flour",
            science_explanation: "Standard bread dough parameters. The magic lies entirely in the rice flour topping."
        },
        thermalProfile: {
            oven_type: 'Convection or Deck',
            heat_distribution: "Requires radiant top heat",
            crust_development: "Deeply cracked, mottled giraffe/tiger pattern that is exceptionally crunchy",
            crumb_structure: 'Standard fluffy sandwich crumb'
        },
        fermentationScience: {
            yeast_activity: 'Moderate',
            ph_target: 'Neutral',
            organic_acids: 'Low',
            enzymatic_activity: 'Standard'
        },
        processScience: "Rice flour contains no gluten. Therefore, as the wheat dough underneath expands due to oven spring, the rigid rice casing physically tears apart into islands, yielding the cracked aesthetic. Sugar in the paste caramelizes the islands."
    },
    tags: ["Crunchy", "Dutch Crunch", "Rice paste", "Netherlands"],
    pairings: {
        canonical: ['Deli Turkey', 'Provolone', 'Secret Sauce'],
        modern: ['Roast Beef'],
        regional: ['Gouda Cheese']
    },
    watchouts: [
        "If the paste is too thin, it will just slide off and vanish. It must be applied thickly.",
        "The roof of your mouth will absolutely be shredded by a good Dutch Crunch roll."
    ],
    notes: [
        "Toasted sesame oil is the secret ingredient in the paste that gives authentic Tiger Bread its distinctly savory flavor."
    ],
    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/placeholder-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Apply heavily',
                explanation: "The paste should be the consistency of thick pancake batter. Smear it on generously with your hands or a spatula."
            }
        ],
        what_if: [
            {
                scenario: 'The paste didn\'t crack',
                result: "Applied too thin, or the bread didn't have enough oven spring.",
                correction: 'Apply a thicker layer and ensure your shaped bread is fully proofed and baked hotly to trigger rapid expansion.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'French Baguette',
                difference: "Baguettes achieve crunch through steam gelatinization of wheat starch; Tiger bread forces crunch by painting a layer of non-extensible rice concrete onto the bread.",
                why_choose_this: 'Choose Tiger bread for a thick, aggressively crunchy sandwich roll that won\'t get soggy.'
            }
        ],
        q_and_a: [
            {
                question: 'Does the paste need yeast?',
                answer: "Yes. Adding yeast to the rice paste aerates it slightly so it cracks into thick, crispy islands rather than a dense, bulletproof shell.",
                context: 'Ingredients'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "Rapid."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "Standard lean dough hydration (65%).",
        methodSuitability: {
            direct: { suitable: true, notes: "Recommended." },
            biga: { suitable: true, notes: "" },
            poolish: { suitable: true, notes: "" }
        },
        whatIf: [
            {
                scenario: 'The topping burnt',
                outcome: "Too much sugar in the paste or baked too close to the upper element.",
                solution: 'Reduce sugar in the paste slightly or tent with foil in the last 10 minutes.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Hoagie Roll',
                difference: 'Dutch crunch is the ultimate evolution of the hoagie roll purely focused on extreme crust texture.'
            }
        ],
        proTips: [
            "You must use Rice flour. Wheat flour has gluten and will stretch, preventing the dramatic cracking. Glutinous rice flour (Mochiko) will also not work well."
        ]
    },
    recommendedFlavorComponents: ["sesame_oil", "sugar_white"]
};

export const irishSodaBread: DoughStyleDefinition = {
    id: "irish-soda-bread",
    name: "Irish Soda Bread",
    category: "bread",
    recipeStyle: RecipeStyle.QUICK_BREAD,
    family: "Quick Breads",
    origin: {
        country: "Ireland",
        region: "Nationwide",
        period: "1830s"
    },
    description: "A fast, yeast-free bread that utilizes baking soda reacting with the lactic acid in buttermilk to provide instant leavening. Characterized by a cross slashed deeply into the top.",
    history: "Born out of necessity in 1830s Ireland when bicarbonate of soda was introduced. Ireland’s climate was incapable of growing hard wheat, so the soft, low-protein native wheat could not form gluten for yeast bread. Chemical leavening solved this, and the bread became the cornerstone of survival.",
    base_formula: [
        { name: 'Soft Wheat/Pastry Flour (or Low-Protein AP)', percentage: 100 },
        { name: 'Buttermilk', percentage: 90 },
        { name: 'Baking Soda', percentage: 1.5 },
        { name: 'Salt', percentage: 1.5 }
    ],
    difficulty: 'Easy',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [85, 95], // Buttermilk is viscous, meaning high relative hydration
        salt: [1.0, 1.5],
        oil: [0, 0],
        sugar: [0, 5],
        flourStrength: "Low (W150-180 / Cake/AP Blend)",
        ovenTemp: [200, 220],
        recommendedUse: ['Soups and Stews', 'Slathered with Irish Butter'],
        difficulty: 'Easy',
        fermentationSteps: [
            "Whisk dry ingredients (Flour, Salt, Soda) thoroughly",
            "Add buttermilk and mix very rapidly with your hand or a spoon",
            "Turn out and gently gather into a loose, shaggy round (Do not knead!)",
            "Score a deep cross into the top",
            "Bake immediately"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W150-180",
            pl_ratio: "N/A",
            absorption_capacity: 'Low',
            protein_type: "Soft Wheat",
            science_explanation: "Gluten development is the ENEMY here. We want a tender, cake-like crumb. Use low-protein flour."
        },
        thermalProfile: {
            oven_type: 'Convection or Cast Iron Skillet',
            heat_distribution: "Conduction",
            crust_development: "Hard, jagged, rustic crust",
            crumb_structure: 'Dense but tender, cake-like'
        },
        fermentationScience: {
            yeast_activity: 'None',
            ph_target: 'Highly acidic (Buttermilk)',
            organic_acids: 'Lactic',
            enzymatic_activity: 'None'
        },
        processScience: "Baking soda (a base) reacts instantly with buttermilk (an acid) to create carbon dioxide gas. The chemical reaction is immediate, meaning the dough must hit the oven within minutes of mixing."
    },
    tags: ["No Yeast", "Quick bread", "Buttermilk", "Ireland"],
    pairings: {
        canonical: ['Irish Stew', 'Kerrygold Butter', 'Smoked Salmon'],
        modern: ['Marmalade'],
        regional: ['Colcannon']
    },
    watchouts: [
        "If you knead it like normal bread, you will develop gluten and end up with a brick.",
        "You must bake it immediately. If it sits on the counter, the chemical reaction will exhaust itself and the bread won't rise."
    ],
    notes: [
        "The cross on top traditionally \"let the fairies out\" or \"warded off the devil,\" but scientifically it allows the dense center of the bread to expand and bake evenly."
    ],
    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/placeholder-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'The Claw Technique',
                explanation: "Mix the dough using your hand shaped like a rigid claw. Stir rapidly in circles. This incorporates the buttermilk quickly without pressing the dough together and developing gluten."
            }
        ],
        what_if: [
            {
                scenario: 'The crumb is green/yellow and tastes soapy',
                result: "Too much baking soda, or it wasn't whisked evenly into the dry flour.",
                correction: 'Sift your baking soda and ensure accurate measurement. Excess unreacted baking soda tastes metallic and soapy.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Sourdough Boule',
                difference: "Sourdough relies on biological fermentation (yeast/bacteria) over days. Soda bread relies on a chemical reaction over 5 seconds.",
                why_choose_this: 'Choose Soda bread when you have absolutely zero time and want bread on the table in 45 minutes.'
            }
        ],
        q_and_a: [
            {
                question: 'Can I add raisins and sugar?',
                answer: "The 'Spotted Dog' (enriched with egg, sugar, raisins, and caraway) is famous in the US as 'Irish Soda Bread', but authentic everyday Irish Soda Bread is lean (flour, salt, soda, buttermilk).",
                context: 'History'
            }
        ],
        fermentation_methods: [
            {
                method: 'None (Chemical)',
                suitability: 'Mandatory',
                notes: "Acid-base chemical lift."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "High hydration guarantees enough moisture to trigger the chemical reaction and keeps the low-protein crumb tender.",
        methodSuitability: {
            direct: { suitable: true, notes: "Instant." },
            biga: { suitable: false, notes: "No yeast." },
            poolish: { suitable: false, notes: "No yeast." }
        },
        whatIf: [
            {
                scenario: 'It is a tough, dense hockey puck',
                outcome: "You over-mixed it.",
                solution: 'The dough should look a mess when it goes into the oven. Rough, shaggy, barely holding together.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Biscuit',
                difference: 'A US buttermilk biscuit uses the exact same chemistry but adds a massive amount of cold cut-in fat for flakiness.'
            }
        ],
        proTips: [
            "If you don't have buttermilk, mix 1 cup of whole milk with 1 tablespoon of white vinegar or lemon juice and let sit for 10 minutes."
        ]
    },
    recommendedFlavorComponents: ["salted_butter_normandy"]
};

export const europeStyles: DoughStyleDefinition[] = [
    baguette_tradition_francaise,
    pretzel_dough_classic,
    briocheTete,
    englishMuffin,
    khachapuriAdjaruli,
    danishRugbrod,
    tigerBread,
    irishSodaBread
];
