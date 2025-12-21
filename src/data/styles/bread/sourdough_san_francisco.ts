import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * SAN FRANCISCO SOURDOUGH
 * 
 * Researched and validated content:
 * - Origin: San Francisco, California (Isidore Boudin, 1849)
 * - Microbiology: Lactobacillus sanfranciscensis + Candida humilis
 * - Flavor Profile: Sharp, tangy, acetic-forward acidity
 * - Technique: Long cold fermentation, specific starter management
 */
export const sourdough_san_francisco: DoughStyleDefinition = {
    id: "sourdough_san_francisco",
    name: "San Francisco Sourdough",
    category: "bread",
    recipeStyle: RecipeStyle.SOURDOUGH,
    family: "American Artisan Bread",

    origin: {
        country: "United States",
        region: "San Francisco, California",
        period: "1849, California Gold Rush (Boudin Bakery)"
    },

    description: "San Francisco Sourdough is the gold standard of American sourdough bread, known for its remarkably sharp tang, thick, blistered crust, and chewy, open crumb. Its unique flavor is the result of a specific symbiotic relationship between the wild yeast Candida humilis and the bacterium Lactobacillus sanfranciscensis, which was first identified in the foggy microclimate of the Bay Area.",

    history: "The style was pioneered by Isidore Boudin, a French baker who arrived in San Francisco during the 1849 Gold Rush. He adapted traditional French techniques to the wild starters used by local miners. The Boudin family has maintained the same 'mother dough' for over 175 years, famously saving it from the 1906 earthquake. This style is not just a recipe but a biological heritage, as the specific bacteria responsible for the acidity were eventually named after the city. Historically, bakers used a very 'sour' starter and long, cool fermentation to achieve the signature vinegar-like snap that distinguished it from milder European sourdoughs.",

    difficulty: "Hard",
    fermentationType: "levain",

    base_formula: [
        { name: "Strong Bread Flour (12.7%+ protein)", percentage: 100 },
        { name: "Water", percentage: 65 },
        { name: "Salt", percentage: 2.2 },
        { name: "Stiff Levain (Mother Dough)", percentage: 25 }
    ],

    technicalProfile: {
        hydration: [60, 68], // Traditionally stiffer than modern 'Tartine' styles
        salt: [2, 2.5],
        flourStrength: "High-protein bread flour (W320-360) to support long fermentation",
        ovenTemp: [230, 250],
        recommendedUse: [
            "Clam Chowder bread bowls",
            "Classic sourdough toast with salted butter",
            "High-acid sandwiches (Reubens, etc.)"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 750, min: 500, max: 1000 },
        fermentationSteps: [
            "Levain Build: Refresh your starter at a 1:2:2 ratio and let it become slightly over-ripe/acidic. [Science: A more acidic 'stiff' starter favors acetic acid production]",
            "Mixing: Combine flour, water, and levain. Autolyse for 40-60 mins. [Science: Hydration of proteins without mechanical stress improves extensibility]",
            "Incorporate Salt: Add salt and perform initial folds. [Science: Salt strengthens the gluten network and regulates yeast activity]",
            "Bulk Fermentation: 3-5 hours at 24°C (75°F) with 4 sets of stretch-and-folds. [Science: Folds organize gluten and redistribute yeast/bacteria colonies]",
            "Pre-shape & Bench Rest: Gently shape into rounds; rest 30 mins. [Science: Relaxation of the gluten after the tension of bulk]",
            "Final Shape: Build strong tension in a 'Batard' or 'Boule' shape. [Science: Tension is critical for the 'ear' and oven spring]",
            "Cold Retard: 12-24 hours at 4°C (39°F). [Science: Cold temperatures favor the heterofermentative bacteria to produce acetic acid (vinegar-like) over lactic acid (creamy)]",
            "Bake with Steam: Bake in a Dutch oven or with heavy steam for the first 20 mins. [Science: Steam facilitates the Maillard reaction and allows maximum expansion before the crust sets]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W320-380 (Very Strong)",
            pl_ratio: "0.50-0.65 (Balanced)",
            absorption_capacity: "High (supporting 65-75% hydration)",
            protein_type: "Hard Red Spring Wheat",
            science_explanation: "The high acidity of this style can break down weak gluten over long periods. A strong, high-protein flour is essential to maintain structural integrity during the 24h cold retard."
        },
        thermalProfile: {
            oven_type: "Hearth oven or Dutch Oven",
            heat_distribution: "High thermal mass (stone/cast iron), heavy steam",
            crust_development: "Thick, dark auburn, significantly blistered (micro-bubbles)",
            crumb_structure: "Chewy, medium-to-wide alveolation, translucent cell walls"
        },
        fermentationScience: {
            yeast_activity: "Symbiotic; C. humilis thrives in low pH (high acid) environments where other yeasts fail",
            ph_target: "pH 3.8-4.2 (Lower than modern 'artisan' sourdough)",
            organic_acids: "High Acetic-to-Lactic ratio (up to 1:4), giving the 'vinegar' tang",
            enzymatic_activity: "High proteolysis due to low pH, resulting in a very tender yet chewy crumb"
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Manage for Acetic Acid",
                explanation: "To get that 'San Francisco' tang, use a stiffer starter (low hydration levain) and ferment at cooler temperatures (under 24°C). This stresses the bacteria to produce more acetic acid (vinegar-like) rather than lactic acid (yogurt-like)."
            },
            {
                tip: "Wait for the 'Over-Ripe' Levain",
                explanation: "Unlike modern styles that use a young, sweet levain, the SF tradition often uses a levain that has just started to fall. This higher initial acidity jumpstarts the tangy profile."
            },
            {
                tip: "Blistering is a sign of long fermentation",
                explanation: "The small bubbles on the crust are caused by CO2 migrating to the surface during the cold overnight retard. They indicate a mature, well-developed dough."
            },
            {
                tip: "Use Bread Flour, not AP",
                explanation: "The long, 18-hour cold proof will 'melt' lower-protein flours. You need a W350+ bread flour to hold the shape after coming out of the banneton."
            },
            {
                tip: "The 72-hour Rule",
                explanation: "Boudin's famous bread can take up to 72 hours from starter build to bake. Patience is the only way to develop the deep, complex wheat and acid profiles."
            }
        ],
        what_if: [
            {
                scenario: "The bread is sour but flat (no spring)",
                result: "Over-proofed or weak flour",
                correction: "Shorten the bulk fermentation or use a higher-protein flour. If it's too acidic, the gluten literally dissolves."
            },
            {
                scenario: "The bread is tall but not tangy enough",
                result: "Fermentation was too warm or levain was too young",
                correction: "Extend the cold retard and use a more mature starter. Aim for an ACET (acetic) profile by keeping the dough cooler."
            },
            {
                scenario: "Crust is soft/thick instead of thin/crisp",
                result: "Insufficient steam or too low bake temperature",
                correction: "Ensure 230°C+ and heavy steam for the first 15-20 minutes. Use a preheated pizza stone or Dutch oven."
            },
            {
                scenario: "Crumb is gummy and dense",
                result: "Under-baked or sliced too early",
                correction: "Bake to an internal temp of 98°C (208°F). Wait at least 2 hours before slicing to allow the starches to set."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Tartine Country Bread",
                difference: "Tartine uses high-hydration (80%+) and a very 'young' sweet levain for a mild, creamy flavor. SF sourdough is lower hydration (65-70%) and much more acidic.",
                why_choose_this: "Choose SF for the classic, bold American tang and better sandwich structure."
            },
            {
                target_style: "Pain de Campagne",
                difference: "French country bread often includes rye or whole wheat and is milder; SF is almost exclusively white flour and very tart.",
                why_choose_this: "Choose SF for a pure-white, high-acid profile."
            },
            {
                target_style: "German Rye Sourdough",
                difference: "German rye is dense and acetic due to rye's chemistry; SF achieves similar acidity levels with 100% wheat via specialized bacterial management.",
                why_choose_this: "Choose SF if you want the tang without the weight of rye."
            }
        ],
        q_and_a: [
            {
                question: "Is there really something in the 'air' of San Francisco?",
                answer: "Partially. While L. sanfranciscensis is found elsewhere, the city's consistent cool, foggy climate historically favored its dominance in the local bakeries, creating the biological legacy we now replicate.",
                context: "History"
            },
            {
                question: "Why is it so much more sour than other sourdoughs?",
                answer: "It's the specific bacterium (Fructilactobacillus sanfranciscensis) and the technique of cold retarding for long periods, which encourages acetic acid production over lactic acid.",
                context: "Science"
            },
            {
                question: "What is the 'mother dough'?",
                answer: "A portion of fermented dough saved from each batch to start the next. Boudin's mother dough is a direct living descendant of the 1849 original.",
                context: "Tradition"
            },
            {
                question: "Can I make this with commercial yeast?",
                answer: "No. The tang comes from bacteria, not yeast. Commercial yeast produces CO2 quickly but zero organic acids. True SF sourdough MUST be 100% levain-leavened.",
                context: "Ingredients"
            },
            {
                question: "What is 'Blistering'?",
                answer: "The tiny bubbles on the crust surface. They are characteristic of cold-proofed sourdough and add a pleasant textural crunch.",
                context: "Texture"
            }
        ],
        fermentation_methods: [
            {
                method: "Sourdough",
                suitability: "Authentic",
                notes: "The only authentic method. Requires a mature, active wild starter."
            },
            {
                method: "Hybrid",
                suitability: "Possible",
                notes: "Using a tiny bit of yeast with a very old starter can help with volume but reduces the 'pure' tang."
            },
            {
                method: "Direct",
                suitability: "Not Recommended",
                notes: "Impossible to achieve the SF profile with commercial yeast alone."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Traditional SF Sourdough is stiffer than modern 'slack' artisan breads. At 65% hydration, the dough is easy to handle and can be 'degassed' slightly to produce an even but open crumb. This lower moisture allows the characteristic thick, crunchy crust to develop during a long bake.",
        methodSuitability: {
            direct: { suitable: false, notes: "Requires bacterial fermentation." },
            biga: { suitable: false, notes: "Sourdough levain is the required preferment." },
            poolish: { suitable: false, notes: "Too liquid and yeast-focused." }
        },
        whatIf: [
            {
                scenario: "You use 50% Whole Wheat",
                outcome: "The bread will be much less tangy as the bran buffers the acidity. It becomes a 'Wheat Sourdough' rather than a 'San Francisco' style.",
                solution: "Keep whole grains under 10% for the authentic white sourdough profile."
            }
        ],
        comparisons: [
            {
                vsStyle: "Boudin vs Tartine",
                difference: "Boudin is the historical 'sour' classic; Tartine is the modern 'sweet/mild' artisan loaf."
            }
        ],
        proTips: [
            "Feed your starter with some whole rye occasionally to boost bacterial activity.",
            "Score deeply at a 45-degree angle to get the signature 'ear'.",
            "Keep your water temperature under 20°C for the final mix.",
            "Store in a paper bag to preserve the crunch of the thick crust."
        ]
    },

    tags: ["sourdough", "san-francisco", "tangy", "levain", "artisan-bread", "american-classic"],

    watchouts: [
        "Over-acidification can weaken the gluten until the loaf collapses in the oven.",
        "Lack of steam will result in a dull, grey, and overly hard crust.",
        "Starter not active enough? The bread will be heavy and dense.",
        "Baking too cold won't develop the deep auburn color and malt aromas."
    ],

    notes: [
        "Oldest continuous 'mother dough' in the US (1849).",
        "Acidity is the hallmark (pH 3.9-4.1).",
        "Blistered crust is highly prized.",
        "Standard for clam chowder bread bowls.",
        "The bacteria were officially named after the city in 1971."
    ],

    references: [
        {
            source: "Boudin Bakery - Our Sourdough History",
            url: "https://boudinbakery.com/our-story/"
        },
        {
            source: "MicrobeWiki - Lactobacillus sanfranciscensis",
            url: "https://microbewiki.kenyon.edu/index.php/Lactobacillus_sanfranciscensis"
        },
        {
            source: "The Sourdough Journey - San Francisco vs Modern Artisan",
            url: "https://thesourdoughjourney.com/the-history-of-sourdough/"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/sf-sourdough-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "brie_de_meaux", "malt_powder", "pecorino_romano", "rosemary_fresh"]
};
