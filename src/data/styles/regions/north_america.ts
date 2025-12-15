import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

const nycSlice: DoughStyleDefinition = {
    id: "new_york_slice_v2",
    name: 'new_york_slice_name',
    category: "pizza",
    recipeStyle: RecipeStyle.NEW_YORK,
    origin: {
        country: 'USA',
        region: 'New york city 4',
        period: 'Early 20th century 2'
    },
    description: "new_york_slice_desc",
    history: "new_york_slice_history",
    difficulty: 'Medium',
    fermentationType: "cold",

    technicalProfile: {
        hydration: [62, 65],
        salt: [2.0, 2.5],
        oil: [1, 3],
        sugar: [1, 2],
        flourStrength: "W360-400 (High Gluten)",
        ovenTemp: [280, 300],
        recommendedUse: ['Cheese slice 2', 'Pepperoni 4'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Intensive mix to windowpane. [Science: High protein flour (14%) requires significant mechanical energy to align gluten for the thin stretch.]",
            "Bulk ferment 1h. [Science: Jumpstarts yeast activity before cold shock.]",
            "Cold Maturation 24-72h. [Science: Creates micro-blisters on the crust via organic acid production and prevents over-browning by consuming excess sugars.]",
            "Warm up 2h before bake. [Science: Cold dough in a hot oven bubbles aggressively; tempering ensures even oven spring.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W360-400 (High Gluten)",
            pl_ratio: "0.6 (Elastic)",
            absorption_capacity: "High (65%)",
            protein_type: "Spring Wheat (14%)",
            science_explanation: "new_york_slice_v2_science_flour"
        },
        thermalProfile: {
            oven_type: 'Gas deck 2',
            heat_distribution: "Conduction (Stone)",
            crust_development: 'Crispy pliable golden',
            crumb_structure: 'Thin dense but airy rim'
        },
        fermentationScience: {
            yeast_activity: "Retarded (Cold)",
            ph_target: "pH 5.2",
            organic_acids: "Balanced (Acetic notes)",
            enzymatic_activity: "Controlled (Cold)"
        }
    },
    tags: ["nyc", "slice", "deck-oven", "foldable"],
    pairings: {
        canonical: ['Low moisture mozzarella', 'Oregano 2', 'Garlic powder'],
        modern: ['Vodka sauce 3'],
        regional: []
    },
    watchouts: [
        "Gummy layer: Sauce applied too cold or dough not baked long enough.",
        "Excessive chew: Flour too strong without enough oil to tenderize.",
        "Lack of browning: Sugar omitted in a <300°C oven (Maillard needs help at lower temps)."
    ],
    notes: [
        "Oil (2-3%) is crucial for tenderizing the high-gluten flour, allowing the 'fold' without cracking.",
        "Sugar effectively feeds yeast during long cold ferments and aids crust coloration.",
        "Traditionally baked on screens or directly on deck stones."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Scott Wiener's Pizza History" }, { source: 'Modernist pizza 13' }],
    images: {
        hero: "/images/styles/nyc-slice-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'The reheat rule',
                explanation: "Never microwave. Reheat in a skillet or on a hot stone (250°C) to restore the crust without drying the cheese."
            },
            {
                tip: 'Cheese temp matters',
                explanation: "Use cold, cubed Low Moisture Mozzarella. If it's warm, it separates into oil before the crust is done."
            }
        ],
        what_if: [
            {
                scenario: 'Home oven only reaches 250c',
                result: 'The crust dries out before browning',
                correction: "Add 2% sugar/malt to dough (browning aid) and use a baking steel, not a stone."
            },
            {
                scenario: 'Dough retracts when stretching',
                result: 'Gluten is too cold or overworked',
                correction: "Let dough sit at room temp for 1-2h before stretching to relax the gluten 'memory'."
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Neapolitan 3',
                difference: "NYC is larger (18inch), crisper, and has oil/sugar. Neapolitan is soft, wet, and lean.",
                why_choose_this: "Choose NYC for the \'fold, portability, and heavy cheese/toppings capability."
            }
        ],
        q_and_a: [
            {
                question: 'Is nyc water the secret',
                answer: "Myth. While mineral content affects pH, comparable bagels/pizza are made worldwide by replicating the calcium/magnesium ratio or just using good technique.",
                context: 'Kenji lopezalt'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "24-48h Cold Ferment is the definitive step for the flavor and micro-blisters."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "new_york_slice_v2_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "new_york_slice_v2_method_direct_notes" },
            biga: { suitable: true, notes: "new_york_slice_v2_method_biga_notes" },
            poolish: { suitable: true, notes: "new_york_slice_v2_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'Crust is pale and white',
                outcome: "Oven temp too low (<550°F) or forgot the sugar/oil.",
                solution: "At home temps (500°F), you MUST use 2% sugar and 3% oil to force browning."
            },
            {
                scenario: 'Dough keeps snapping back to small size',
                outcome: 'Gluten is too excited',
                solution: "Let the dough balls rest at room temp for at least 2 hours before stretching. Cold dough = Snap back."
            }
        ],
        comparisons: [
            {
                vsStyle: 'Neapolitan 4',
                difference: "NYC uses Oil, Sugar, and Malt. Neapolitan is lean. NYC is crispy/chewy; Neapolitan is soft/wet."
            }
        ],
        proTips: [
            "The 'Screen' Trick: 'Bake on a screen for 5 mins', then slide directly onto the stone to finish. Best of both worlds.",
            "Cure the balls: 48h cold fermentation is where the flavor lives."
        ]
    }
};

const detroitStyle: DoughStyleDefinition = {
    id: "detroit_style_classic",
    name: 'detroit_style_classic_name',
    category: "pizza",
    recipeStyle: RecipeStyle.DETROIT,
    origin: {
        country: 'USA',
        region: 'Detroit michigan',
        period: "1946"
    },
    description: "detroit_style_classic_desc",
    history: "detroit_style_classic_history",
    difficulty: 'Medium',
    fermentationType: "direct",

    technicalProfile: {
        hydration: [70, 75],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: 'W300320 2',
        ovenTemp: [260, 290],
        recommendedUse: ['Pepperoni 5'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix to moderate development. [Science: Full windowpane not needed as the dough is supported by the pan.]",
            "Bulk ferment 1h. [Science: Initial gas generation.]",
            "Pan proof 2-3h. [Science: The critical step. Dough must relax completely to fill corners and aerate into a sponge-like crumb.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: 'W300320 3',
            pl_ratio: 'Balanced',
            absorption_capacity: "High (70%+)",
            protein_type: 'Bread flour 5',
            science_explanation: "detroit_style_classic_science_flour"
        },
        thermalProfile: {
            oven_type: 'Blue steel pan',
            heat_distribution: "Conduction (Oil Fry)",
            crust_development: "Fried, caramelized (Frico)",
            crumb_structure: 'Spongelike airy'
        },
        fermentationScience: {
            yeast_activity: 'High',
            ph_target: 'Normal',
            organic_acids: 'Lactic 5',
            enzymatic_activity: "High (High water)"
        }
    },
    tags: ["pan", "frico", "deep-dish", "detroit"],
    pairings: {
        canonical: ['Wisconsin brick cheese'],
        modern: ['Hot honey 3'],
        regional: ['Coney island hot dog pizza']
    },
    watchouts: [
        "Soggy center: Sauce applied before bake sinks into the proofed dough. Apply in stripes or post-bake.",
        "No Frico: 'Cheese did not touch the pan walls', or pan was not seasoned.",
        "Dense crumb: Rushed pan proof. It needs to feel like a memory foam pillow."
    ],
    notes: [
        "The unique Brick Cheese has a high fat content that fries the crust edge.",
        "Hydration must be high (70%+) to ensure the thick crust remains light, not bread-like.",
        "Sauce on top prevents the 'gum line' from forming under the cheese."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Buddy's Archives" }],
    images: {
        hero: "/images/styles/detroit-style-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'The frico edge',
                explanation: "Spread cheese ALL the way to the metal wall. The cheese melting down the side creates the structural 'Frico' wall."
            },
            {
                tip: 'Parbake the skin',
                explanation: "For home ovens, bake the dough w/o toppings for 7 mins first to ensure the center cooks before the cheese burns."
            }
        ],
        what_if: [
            {
                scenario: "Center is raw/gummy",
                result: 'Insulated by too much sauce or dough was too cold',
                correction: "Apply sauce in 'Racing Stripes' ON TOP of cheese to allow heat to penetrate."
            },
            {
                scenario: 'Cannot find brick cheese',
                result: 'You lose the specific buttery tang',
                correction: "Use 50% Low Moisture Mozzarella + 50% Monterey Jack (or Muenster) to simulate the fat/melt profile."
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Sicilian',
                difference: "Detroit uses Brick cheese, sauce on top, and steel pans. Sicilian uses olive oil, often crumbs, and sheet pans.",
                why_choose_this: "Choose Detroit for the caramelized cheese crown (Frico)."
            }
        ],
        q_and_a: [
            {
                question: 'Why blue steel pans',
                answer: "They conduct heat faster than aluminum, frying the bottom in the oil before the top burns.",
                context: 'Automotive history'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Authentic',
                notes: 'Traditionally a direct dough but cold ferment adds'
            }
        ]
    },
    deepDive: {
        hydrationLogic: "detroit_style_classic_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "detroit_style_classic_method_direct_notes" },
            biga: { suitable: false, notes: "detroit_style_classic_method_biga_notes" },
            poolish: { suitable: true, notes: "detroit_style_classic_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: "Center is raw (Gum Line)?",
                outcome: 'Insulated by too much sauce or dough was cold',
                solution: 'Parbake the skin  cheese for 7 mins then add sauce'
            },
            {
                scenario: "No \'Frico\' (Cheese Crown)?",
                outcome: "You used Mozzarella or didn't push cheese to the edge.",
                solution: "Use Brick Cheese or Muenster/Jack blend. It must touch the metal wall."
            }
        ],
        comparisons: [
            {
                vsStyle: 'Chicago deep dish 3',
                difference: 'Detroit is a light fried dough chicago is a dense '
            }
        ],
        proTips: [
            "Season your pans: Blue steel improves with age. Never wash with soap.",
            "Sauce on Top: It prevents the gum line. Do not spread it; stripe it."
        ]
    }
};

const chicagoDeepDish: DoughStyleDefinition = {
    id: "chicago_deep_dish",
    name: 'chicago_deep_dish_name',
    category: "pizza",
    recipeStyle: RecipeStyle.CHICAGO_DEEP_DISH,
    origin: {
        country: 'USA',
        region: 'Chicago illinois',
        period: "1943"
    },
    description: "chicago_deep_dish_desc",
    history: "chicago_deep_dish_history",
    difficulty: 'Medium',
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 58],
        salt: [1.5, 2.0],
        oil: [15, 25], // Often Corn Oil or Butter
        sugar: [1, 2],
        flourStrength: "W240-280 (AP/Pastry blend)",
        ovenTemp: [220, 230],
        recommendedUse: ['Sausage patty', 'Spinach'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix for short time (Undermixed). [Science: 'Minimizing gluten development ensures a \'short', biscuit-like texture rather than chewy bread.]",
            "Bulk ferment 1-2h. [Science: Flavor development only; gas retention is secondary to texture.]",
            "Laminate/Press into pan. [Science: No elasticity required; the dough should mold like pie crust.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W240 (AP/Biscuit)",
            pl_ratio: "Short (High Fat)",
            absorption_capacity: 'Low',
            protein_type: "AP/Pastry Blend",
            science_explanation: "chicago_deep_dish_science_flour"
        },
        thermalProfile: {
            oven_type: 'Deep pan',
            heat_distribution: "Conduction (Slow)",
            crust_development: "Fried/Biscuit",
            crumb_structure: 'Dense flaky'
        },
        fermentationScience: {
            yeast_activity: 'Low',
            ph_target: 'Neutral 8',
            organic_acids: 'None',
            enzymatic_activity: 'Low'
        }
    },
    tags: ["casserole", "biscuit-crust", "corn-oil"],
    pairings: {
        canonical: ['Italian sausage layer', 'Chunky tomato sauce'],
        modern: ['Giardiniera 2'],
        regional: ['"Butter Crust (Lou\'s style)"']
    },
    watchouts: [
        "Soggy bottom: Sauce drains liquid. Sauce must be thick/chunky and placed ON TOP of cheese.",
        "Burned Crust: Bake temp too high (>230°C). Deep dish needs a 'low and slow' bake (30-40 mins).",
        "Toughness: Overmixing developed gluten. Treat it like pie dough."
    ],
    notes: [
        "Corn oil is traditional for the specific flavor and 'fried' texture.",
        "Some variations laminate butter for flakiness.",
        "The 'cheese seal' on the dough bottom prevents moisture penetration."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Pizzeria uno history' }],
    images: {
        hero: "/images/styles/chicago_deep_dish_real.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'The biscuit factor',
                explanation: "Mix very briefly. Overmixing develops gluten, making it chewy instead of flaky. You want a 'short' dough."
            },
            {
                tip: 'Corn oil is king',
                explanation: "Although butter tastes great, corn oil provides the authentic specific flavor profile and texture of the original."
            }
        ],
        what_if: [
            {
                scenario: 'Dough shrinks when pressing',
                result: 'Elasticity is too high',
                correction: 'Let it rest 20 mins if it persists you overmixed n'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Pan pizza 3',
                difference: "Deep Dish is a pie/casserole with a short crust. Pan pizza (like Detroit) is a fried bread.",
                why_choose_this: 'Choose deep dish for a sitdown meal experience'
            }
        ],
        q_and_a: [
            {
                question: 'Why sauce on top',
                answer: "Insulation. The cheese and meat would burn during the long 40-minute bake if exposed. The sauce protects them.",
                context: 'Physics of baking'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Authentic',
                notes: 'Short ferment is standard flavor comes from fat an'
            }
        ]
    },
    deepDive: {
        hydrationLogic: "chicago_deep_dish_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "chicago_deep_dish_method_direct_notes" },
            biga: { suitable: false, notes: "chicago_deep_dish_method_biga_notes" },
            poolish: { suitable: false, notes: "chicago_deep_dish_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: "Crust is tough/chewy?",
                outcome: 'Overmixed you developed gluten',
                solution: 'Mix only until ingredients combine treat it like a'
            },
            {
                scenario: 'Soggy mess',
                outcome: 'Sauce was too thin or veggies released water',
                solution: "Use thick crushed tomatoes. Pre-cook spinach/mushrooms to remove water."
            }
        ],
        comparisons: [
            {
                vsStyle: "Pan Pizza (Hut/Detroit)",
                difference: "Deep Dish is 'Short' (crumbles). Pan Pizza is 'Bread' (stretches)."
            }
        ],
        proTips: [
            "Laminate: Fold butter into the dough for a flaky layer effect (Malnati style).",
            "Let it rest: 'After baking', let the pie sit 5 mins to set heavily. If you cut immediately, it flows like lava."
        ]
    }
};



const sfSourdough: DoughStyleDefinition = {
    id: "sf_sourdough",
    name: 'san_francisco_sourdough_name',
    category: "bread",
    recipeStyle: RecipeStyle.SOURDOUGH,
    origin: {
        country: 'USA',
        region: 'San francisco ca',
        period: "1849 (Gold Rush)"
    },
    description: "san_francisco_sourdough_desc",
    history: "san_francisco_sourdough_history",
    difficulty: 'Expert',
    fermentationType: "levain",

    technicalProfile: {
        hydration: [70, 78],
        salt: [2.0, 2.2],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: 'W300350',
        ovenTemp: [230, 260],
        recommendedUse: ['Clam chowder bowl', 'Toast'],
        difficulty: 'Expert',
        fermentationSteps: [
            "Maintain stiff starter. [Science: Stiff starters favor acetic acid production (sourness) and yeast vitality.]",
            "Long cold retard (12-24h). [Science: 'At low temps', bacteria produce more acid while yeast slows down, creating the signature tang.]",
            "Bake dark. [Science: 'Acidity inhibits Maillard reaction', so aggressive heat and time are needed for the dark chestnut color.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W380+ (Very Strong)",
            pl_ratio: "Balanced",
            absorption_capacity: 'Extreme',
            protein_type: "Malted Bread/High Gluten",
            science_explanation: "sf_sourdough_science_flour"
        },
        thermalProfile: {
            oven_type: "Dutch Oven / Hearth",
            heat_distribution: 'Radiant  steam',
            crust_development: 'Blistered thick',
            crumb_structure: 'Wild irregular'
        },
        fermentationScience: {
            yeast_activity: "Wild (Levain)",
            ph_target: "pH 4.0-4.5",
            organic_acids: "Acetic Dominant (Stiff Starter)",
            enzymatic_activity: "Very High (Proteolysis)"
        }
    },
    tags: ["sour", "wild-yeast", "gold-rush", "san-francisco"],
    pairings: {
        canonical: ['Clam chowder', 'Dungeness crab'],
        modern: ['Avocado'],
        regional: ['Seafood cioppino']
    },
    watchouts: [
        "Not Sour Enough: Starter too liquid or fermented too warm (lactic bias).",
        "Flat loaf: Over-acidification degraded the gluten network (proteolysis).",
        "Pale crust: Acid inhibited browning; bake hotter."
    ],
    notes: [
        "True SF flavor comes from the specific microbiome, but technique (stiff starter, cold proof) mimics it well anywhere.",
        "Scoring is critical to handle the immense oven spring.",
        "No commercial yeast allowed."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Boudin history' }, { source: 'Microbiology of sourdough' }],
    images: {
        hero: "/images/styles/sf_sourdough_real.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "The \'Tartine\' Fold",
                explanation: "Don't knead. Perform gentle 'coil folds' every 30 mins during bulk to align gluten without degassing."
            },
            {
                tip: 'Steam is nonnegotiable',
                explanation: "Use a Dutch Oven. The trapped steam keeps the crust soft, allowing massive expansion (Oven Spring) before setting."
            }
        ],
        what_if: [
            {
                scenario: "Starter is too sour (Acetic)",
                result: "Loaf is dense and tight. Acid destroys gluten structure (Proteolysis).",
                correction: "Feed starter more frequently (1:2:2 ratio) and use it younger (sweeter/lactic)."
            },
            {
                scenario: "No \'Ear\' (Burst)",
                result: 'Scoring was too shallow or oven not hot enough',
                correction: 'Score at a 45 degree angle and ensure steam is pre'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'French baguette 2',
                difference: "SF Sourdough is wild yeast (Levain) and acetic. Baguette is commercial yeast and mild.",
                why_choose_this: 'Choose sf sourdough for keeping quality and comple'
            }
        ],
        q_and_a: [
            {
                question: "Is \'Lactobacillus sanfranciscensis\' only in SF?",
                answer: "No. It's found worldwide. The 'SF Taste' is more about the cold fermentation technique and acetic acid balance than geography.",
                context: 'Modern microbiology'
            }
        ],
        fermentation_methods: [
            {
                method: 'Sourdough',
                suitability: 'Authentic',
                notes: 'Strictly pure levain no commercial yeast allowed'
            }
        ]
    },
    deepDive: {
        hydrationLogic: "sf_sourdough_dd_hydration",
        methodSuitability: {
            direct: { suitable: false, notes: "sf_sourdough_method_direct_notes" },
            biga: { suitable: false, notes: "sf_sourdough_method_biga_notes" },
            poolish: { suitable: false, notes: "sf_sourdough_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: "Bread is dense/brick-like?",
                outcome: 'Starter was weak or bulk fermentation was too shor',
                solution: "Ensure starter doubles in 4 hours. Push the bulk ferment until dough feels 'aerated'."
            },
            {
                scenario: "Too sour (Vinegar)?",
                outcome: "Fermented too warm or starter hadn't been fed.",
                solution: "Discard more starter, and ferment bulk at a cooler temp (20-22°C)."
            }
        ],
        comparisons: [
            {
                vsStyle: 'Pane toscano',
                difference: "SF is sour (Acetic) and salted. Toscano is mild and unsalted."
            }
        ],
        proTips: [
            "Feed the starter: A healthy microbiological colony is 90% of the work.",
            "The Dutch Oven: It simulates a professional steam injection deck oven perfectly."
        ]
    }
};

const newHavenApizza: DoughStyleDefinition = {
    id: "new_haven_apizza",
    name: 'new_haven_apizza_name',
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    origin: {
        country: 'USA',
        region: 'New haven ct 2',
        period: "1925"
    },
    description: "new_haven_apizza_desc",
    history: "new_haven_apizza_history",
    difficulty: 'Hard',
    fermentationType: "cold",

    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: 'W300340',
        ovenTemp: [315, 350], // Domestic adaptation target. Real ovens are 600F+
        recommendedUse: ['White clam pie'],
        difficulty: 'Hard',
        fermentationSteps: [
            "Long cold fermentation (24-48h). [Science: Necessary to break down complex starches for the high-heat charring process.]",
            "Proof at room temp. [Science: Dough must be very extensible to stretch into the signature oblong shape without snapping back.]",
            "Coal Fired Bake. [Science: 'Intense dry heat evaporates surface moisture instantly', creating char without burning the center.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W320-350 (High Gluten)",
            pl_ratio: 'Extensible',
            absorption_capacity: 'High',
            protein_type: "High Gluten (e.g., All Trumps)",
            science_explanation: "new_haven_apizza_science_flour"
        },
        thermalProfile: {
            oven_type: 'Coal fired deck',
            heat_distribution: "Intense Radiation (600°F+)",
            crust_development: 'Charred dry',
            crumb_structure: 'Chewy uneven'
        },
        fermentationScience: {
            yeast_activity: 'Retarded',
            ph_target: 'Normal',
            organic_acids: 'Balanced',
            enzymatic_activity: "High (Maillard fuel)"
        }
    },
    tags: ["coal-fired", "char", "clam-pie", "connecticut"],
    pairings: {
        canonical: ['Littleneck clams', 'Garlic 2', 'Oregano 3', 'Pecorino'],
        modern: ['Bacon'],
        regional: ['Foxon park soda']
    },
    watchouts: [
        "Sooty flavor: 'In a coal oven', poor airflow. In home oven, burnt flour.",
        "Soggy Clams: Clams must be fresh and shucked directly onto the pie to mix liquor with oil/garlic.",
        "Too thick: The rim should be minimal; it's about the crust surface."],
    notes: [
        "A 'plain' pie has no cheese (mozzarella), just tomato sauce and pecorino.",
        "The White Clam Pie is the signature masterpiece.",
        "Char is a flavor, burnt is a mistake."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Frank pepe history' }, { source: 'Pizza city usa 2' }],
    images: {
        hero: "/images/styles/new_haven_apizza_real.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Oblong is a feature',
                explanation: "Don't try to make it round. The 'Apizza' shape typically fills the peel. It's rustic."
            },
            {
                tip: 'Bake darker',
                explanation: "Char is flavor. Pulling it early 'to be safe' ruins the style. Let the edges turn black."
            }
        ],
        what_if: [
            {
                scenario: 'Oven only goes to 260c',
                result: "You won't get char.",
                correction: 'Use 2 sugar in the dough to force browning at lowe'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Nyc slice',
                difference: "Apizza is thinner, crispier, and much darker (charred). NYC is golden and pliable.",
                why_choose_this: 'Choose apizza for a crunchier smoky experience'
            }
        ],
        q_and_a: [
            {
                question: "Is \'Mozz\' standard?",
                answer: "No. A 'Plain' pie in New Haven is Tomato Sauce + Oregano + Pecorino. You must ask for Mozzarella ('Mutz').",
                context: 'Frank pepe menu'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "Long cold proof (48h+) is needed to breakdown sugars for that intense char."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "new_haven_apizza_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "new_haven_apizza_method_direct_notes" },
            biga: { suitable: false, notes: "new_haven_apizza_method_biga_notes" },
            poolish: { suitable: false, notes: "new_haven_apizza_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'It burns instantly',
                outcome: 'Oven too hot or sugar in dough',
                solution: 'Authentic new haven has no sugar if baking at 600f'
            },
            {
                scenario: 'Soggy center',
                outcome: "Clams/Toppings released water.",
                solution: 'Shuck clams last minute bake longer char is good'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Nyc slice 2',
                difference: "New Haven is drier, thinner, oblong, and cooked darker (Charred)."
            }
        ],
        proTips: [
            "Pecorino Romano: The 'salt' of the pizza. Apply liberally.",
            "Don't worry about shape: 'If it\'s round', it's not Apizza."
        ]
    }
};


const nycBagel: DoughStyleDefinition = {
    id: "nyc_bagel",
    name: 'nyc_bagel_name',
    category: "bread",
    recipeStyle: RecipeStyle.BAGEL,
    origin: {
        country: 'USA',
        region: 'New york city 5',
        period: 'Late 19th century'
    },
    description: "nyc_bagel_desc",
    history: "nyc_bagel_history",
    difficulty: 'Hard',
    fermentationType: "cold",

    technicalProfile: {
        hydration: [50, 55],
        salt: [2.0, 2.2],
        oil: [1, 2],
        sugar: [2, 4], // Malt Syrup
        flourStrength: "W380-420 (High Gluten)",
        ovenTemp: [240, 260],
        recommendedUse: ['Cream cheese  lox', 'Bacon egg cheese'],
        difficulty: 'Hard',
        fermentationSteps: [
            "Mix EXTREMELY stiff dough. [Science: Low hydration (50-55%) creates the signature dense chewiness.]",
            "Shape immediately. [Science: Shaping after proofing would Degas the dense structure too much.]",
            "Cold retard 24-48h. [Science: Relaxes the tight gluten and develops malt flavors.]",
            "Boil in Malt/Soda water. [Science: Gelatinizes the outer starch layer for shine and sets the crust size before baking.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W380+ (Specially Milled)",
            pl_ratio: "Tenacious (Elastic)",
            absorption_capacity: 'Moderate',
            protein_type: "High Gluten (14.5%)",
            science_explanation: "nyc_bagel_science_flour"
        },
        thermalProfile: {
            oven_type: "Revolving Deck / Boards",
            heat_distribution: "Convection/Radiant",
            crust_development: "Shiny, Blistered (Gelatinized)",
            crumb_structure: 'Dense tight 2'
        },
        fermentationScience: {
            yeast_activity: "Retarded (Cold)",
            ph_target: 'Normal',
            organic_acids: "Low (Direct)",
            enzymatic_activity: "Enhanced (Malt)"
        }
    },
    tags: ["bagel", "boiled", "malty", "nyc"],
    pairings: {
        canonical: ['Lox', 'Capers', 'Red onion'],
        modern: [],
        regional: ['Everything seasoning']
    },
    watchouts: [
        "Wrinkled skin: Boiled too long or water not hot enough.",
        "Flat bagel: Overproofed before boiling.",
        "Soft/Bun-like: Hydration too high. Keep it stiff!"
    ],
    notes: [
        "Barley malt syrup is essential for flavor and color; honey/sugar is a poor substitute.",
        "Baking on burlap soaked in water (boards) is the traditional method.",
        "Flip halfway through bake."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Bagel union regulations' }],
    images: {
        hero: "/images/styles/nyc-bagel-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Alkaline boil',
                explanation: "Add Barley Malt Syrup and Baking Soda (or Lye for pros) to the water. This spikes the pH for intense Maillard browning."
            },
            {
                tip: 'Cold proof shaped',
                explanation: "Shape the bagels then retard them in the fridge. Boiling cold bagels helps them hold shape."
            }
        ],
        what_if: [
            {
                scenario: 'Bagels wrinkle after baking',
                result: 'Boiled too long or proofed too long before boiling',
                correction: 'Keep boil to 3060 seconds per side'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Montreal bagel',
                difference: "NYC is salted + malt. Montreal is no salt + honey/sugar water (sweeter) and wood fired.",
                why_choose_this: 'Choose nyc for the savory chew and sandwich capabi'
            }
        ],
        q_and_a: [
            {
                question: 'Why barley malt',
                answer: "Enzymatic actvity and specific flavor. Sugar is just sweet; Malt is savory, sweet, and improves crust color.",
                context: 'Bagel tradition'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Authentic',
                notes: 'Crucial for the microblisters and flavor complexit'
            }
        ]
    },
    deepDive: {
        hydrationLogic: "nyc_bagel_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "nyc_bagel_method_direct_notes" },
            biga: { suitable: true, notes: "nyc_bagel_method_biga_notes" },
            poolish: { suitable: false, notes: "nyc_bagel_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'Bagels look wrinkled like prunes',
                outcome: 'Boiled too long or overproofed',
                solution: 'Boil 3060 secs proof less they should sink slightl'
            },
            {
                scenario: 'No shine',
                outcome: "Water wasn't alkaline.",
                solution: 'Add barley malt syrup and baking soda to the boil '
            }
        ],
        comparisons: [
            {
                vsStyle: 'Montreal bagel 2',
                difference: "NYC is saltier, bigger, and baked in standard ovens. Montreal is honey-water boiled and wood-fired."
            }
        ],
        proTips: [
            "Ice Cold Ferment: 'Shape', put on boards, and fridge for 24h. Boil directly from fridge.",
            "Malt Syrup: Don't use sugar. The flavor is non-negotiable."]
    }
};

const grandmaPizza: DoughStyleDefinition = {
    id: "grandma_style_v2",
    name: 'grandma_pizza_2',
    category: "pizza",
    recipeStyle: RecipeStyle.GRANDMA_STYLE,
    family: 'Flatbreads  pizzas 5',
    origin: {
        country: 'USA',
        region: 'Long island ny 2',
        period: "1970s"
    },
    description: "grandma_pizza_desc",
    history: "grandma_pizza_history",
    difficulty: 'Easy',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [3.0, 5.0], // High oil in dough + pan
        sugar: [1.0, 3.0],
        flourStrength: "All Purpose or Bread (11-12%)",
        ovenTemp: [230, 260],
        recommendedUse: ['Classic tomato  garlic 2', 'Vodka sauce 4'],
        difficulty: 'Easy',
        fermentationSteps: [
            "Mix to moderate development. [Science: Doesn't need windowpane as it's supported by a pan.]",
            "Short bulk (1-2h). [Science: 'Grandma' style implies immediacy; rapid yeast activity is key.]",
            "Stretch into oiled pan immediately. [Science: Oil conducts heat for a fried bottom texture.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W260 (AP)",
            pl_ratio: 'Extensible',
            absorption_capacity: 'Medium',
            protein_type: 'All-Purpose',
            science_explanation: "Does not require high protein. A softer flour helps it stretch into the corners of the pan without shrinking back."
        },
        thermalProfile: {
            oven_type: "Home Oven (Sheet Pan)",
            heat_distribution: "Conduction (Oil)",
            crust_development: 'Fried bottom',
            crumb_structure: 'Dense soft'
        },
        fermentationScience: {
            yeast_activity: "Fast (Warm)",
            ph_target: 'Normal',
            organic_acids: 'None',
            enzymatic_activity: "High (Sugar/Oil)"
        }
    },
    tags: ["pizza", "pan-pizza", "italian-american", "beginner-friendly", "thin-crust"],
    pairings: {
        canonical: ['Garlic 3', 'Crushed tomatoes 2', 'Mozzarella 3', 'Olive oil 4'],
        modern: ['Pesto 2', 'Fresh mozzarella 2'],
        regional: ['None 12']
    },
    watchouts: [
        "Sticking: Use plenty of oil in the pan.",
        "Soggy: Bake on the bottom rack of the oven.",
        "Blandness: Heavy garlic usage in the sauce is characteristic."
    ],
    notes: [
        "Often lightly par-baked with sauce before adding cheese.",
        "Texture should be crispy on bottom but dense/soft inside, not airy like Roman.",
        "Garlic is usually sliced, not minced, or infused in the oil."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Pizza History (Long Island)" }],
    images: {
        hero: "/images/styles/grandma-pizza-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Fried bottom 2',
                explanation: "Use way more olive oil in the pan than you think. It should essentially fry the crust bottom."
            },
            {
                tip: 'Short proof',
                explanation: "Don't let it rise too much in the pan. It should be relatively dense and thin, not foccacia-like."
            }
        ],
        what_if: [
            {
                scenario: 'Dough springs back',
                result: 'Gluten is tight',
                correction: "Stretch, wait 10 mins, stretch again. Don't fight the gluten."
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Sicilian 2',
                difference: "Grandma is thin, short proof, domestic. Sicilian is thick, long proof, bakery style.",
                why_choose_this: 'Choose grandma for a quick weeknight sheet pan fam'
            }
        ],
        q_and_a: [
            {
                question: "Why \'Grandma\'?",
                answer: "It mimics the home cooking of Italian immigrants who didn\'t have pizza ovens, just standard sheet pans and home stoves.",
                context: 'History'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Authentic',
                notes: "Originally a 'making it for dinner tonight' dough."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "grandma_style_v2_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "grandma_style_v2_method_direct_notes" },
            biga: { suitable: false, notes: "grandma_style_v2_method_biga_notes" },
            poolish: { suitable: false, notes: "grandma_style_v2_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'Sticks to the pan',
                outcome: 'Not enough oil',
                solution: 'The pan should basically have a shallow pool of ol'
            },
            {
                scenario: 'Soggy',
                outcome: 'Bake it lower',
                solution: 'Place pan on bottom rack for 10 mins to sear the u'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Sicilian 3',
                difference: 'Grandma is thin and quick sicilian is thick and sp'
            }
        ],
        proTips: [
            "Garlic in the Oil: Infuse the pan oil with garlic for that signature smell.",
            "Don't crimp the edges: Let the cheese melt over the side."]
    }
};

const chicagoTavern: DoughStyleDefinition = {
    id: "chicago_tavern_v2",
    name: 'chicago_tavern_style_2',
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    family: 'Flatbreads  pizzas 6',
    origin: {
        country: 'Usa 16',
        region: "Chicago / Midwest",
        period: "1940s"
    },
    description: "chicago_tavern_desc",
    history: "chicago_tavern_history",
    difficulty: 'Medium',
    fermentationType: "cold",
    technicalProfile: {
        hydration: [45, 50],
        salt: [1.5, 2.0],
        oil: [0, 5.0], // Often corn oil or shortening
        sugar: [1.0, 2.0],
        flourStrength: "All Purpose or High Gluten (Variable)",
        ovenTemp: [260, 290],
        recommendedUse: ['Sausage  giardiniera 2', 'Pepperoni 6'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix to stiff dough. [Science: 'Low hydration prevents gluten mobility', ensuring potential for crispness.]",
            "Sheet/Roll flat immediately or after short rest. [Science: Mechanical degassing is key; no alveoli allowed.]",
            "Cure in fridge (24-48h). [Science: 'This is a \'relieving\' phase where hydration equalizes and starch degrades', but no yeast rise is desired.]",
            "Dock heavily and bake. [Science: Docking prevents steam pockets from separating cheese from crust.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W220 (Low protein)",
            pl_ratio: "Short",
            absorption_capacity: 'Low',
            protein_type: 'AP/Pastry',
            science_explanation: "The goal is 'Dead Dough'. We want zero elasticity so it rolls paper thin, and zero ovenspring (puff). Low hydration + rolling pin achieves this."
        },
        thermalProfile: {
            oven_type: "Deck / Stone",
            heat_distribution: 'Conduction',
            crust_development: 'Crackerlike dry',
            crumb_structure: "None (Laminated/Flat)"
        },
        fermentationScience: {
            yeast_activity: "Inhibited (Dry/Cold)",
            ph_target: 'Normal',
            organic_acids: 'None',
            enzymatic_activity: 'Low'
        }
    },
    tags: ["pizza", "american", "midwest", "thin-crust", "party-cut", "cracker"],
    pairings: {
        canonical: ['Fennel sausage 2', 'Giardiniera 3', 'Mozzarella 4'],
        modern: ['Italian beef 2'],
        regional: ['Old style beer 2']
    },
    watchouts: [
        "Bubble formation: 'If not docked enough', it will bubble and burn.",
        "Soggy center: Sauce must be thick; vegetables should be precooked or sliced thin.",
        "Toughness: 'If hydration is too low without enough fat', it becomes hard hardtack instead of crisp."
    ],
    notes: [
        "Use a rolling pin or pasta sheeter.",
        "The 'Party Cut' is non-negotiable.",
        "Curing the rolled skins in the fridge uncovered can help dry them out."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [
        { source: "Pizza city usa 3, author: Steve dolinsky 2" }
    ],
    images: {
        hero: "/images/styles/chicago-tavern-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'The cure',
                explanation: "After rolling, let the skin sit uncovered in the fridge for 24h. This dries it out to create the cracker texture."
            },
            {
                tip: 'Dock aggressively',
                explanation: "Thousands of holes are needed to prevent separation of layers (pita effect)."
            }
        ],
        what_if: [
            {
                scenario: 'Crust is chewy not crisp',
                result: "Hydration too high or didn't cure enough.",
                correction: 'Drop hydration to 45 and cure longer'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Nyc slice 3',
                difference: "Tavern is unleavened (dead yeast effect), cracker thin. NYC is a bread dough.",
                why_choose_this: 'Choose tavern style for a snackable light party fo'
            }
        ],
        q_and_a: [
            {
                question: 'Party cut',
                answer: "Essential. Small squares allow you to hold a beer in one hand and a slice in the other.",
                context: 'Tavern culture'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Possible',
                notes: "Fermentation is secondary to the drying/curing process."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "chicago_tavern_v2_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "chicago_tavern_v2_method_direct_notes" },
            biga: { suitable: false, notes: "chicago_tavern_v2_method_biga_notes" },
            poolish: { suitable: false, notes: "chicago_tavern_v2_method_poolish_notes" }
        },
        whatIf: [
            {
                scenario: 'It puffed up like a pita',
                outcome: "You didn't dock it.",
                solution: 'Use a docker roller perforate the entire surface'
            },
            {
                scenario: 'Chewy',
                outcome: "Too much water or didn't cure.",
                solution: 'Let the rolled skins sit in the fridge uncovered f'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Deep dish',
                difference: 'Locals eat tavern tourists eat deep dish'
            }
        ],
        proTips: [
            "The Sheeter: Pros use a machine to get it paper thin. Use a rolling pin aggressively.",
            "Cornmeal dust: Roll in cornmeal for extra crunch and release."
        ]
    }
};

const montrealBagel: DoughStyleDefinition = {
    id: "montreal_bagel",
    name: 'montreal_bagel',
    category: "bread",
    recipeStyle: RecipeStyle.BAGEL,
    origin: {
        country: 'Canada',
        region: 'Montreal quebec',
        period: "1919"
    },
    description: "montreal_bagel_desc",
    history: "montreal_bagel_history",
    difficulty: 'Hard',
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 55],
        salt: [0, 0],
        oil: [1, 2],
        sugar: [2, 4],
        flourStrength: 'W300350 3',
        ovenTemp: [260, 300],
        recommendedUse: ['Cream cheese', 'Smoked salmon'],
        difficulty: 'Hard',
        fermentationSteps: [
            "Mix stiff dough. [Science: Low hydration + No Salt + Sugar = Dense structure.]",
            "Short proof. [Science: Just enough to relax gluten for rolling.]",
            "Boil in Honey Water. [Science: Honey penetrates crust for sheen and flavor.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W300+",
            pl_ratio: "P/L > 0.6",
            absorption_capacity: 'Moderate',
            protein_type: 'Bread',
            science_explanation: "High gluten needed for shape retention during boil. Lack of salt weakens network, so stiff dough compensates."
        },
        thermalProfile: {
            oven_type: 'Wood fired 2',
            heat_distribution: 'Radiant',
            crust_development: 'Crisp shiny',
            crumb_structure: 'Dense 2'
        },
        fermentationScience: {
            yeast_activity: "Fast (No salt)",
            ph_target: 'Normal',
            organic_acids: 'Low',
            enzymatic_activity: 'Standard'
        }
    },
    tags: ["honey", "no-salt", "wood-fired", "canada"],
    pairings: {
        canonical: ['Cream cheese 2', 'Smoked meat'],
        modern: ['Peanut butter'],
        regional: ['Montreal smoked meat']
    },
    watchouts: ["Don't add salt."],
    notes: ['Boiling water must contain honey'],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Fairmount bagel' }],
    images: {
        hero: "/images/styles/montreal-bagel-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [{ tip: 'tip', explanation: 'Essential for the glaze' }],
        what_if: [{ scenario: 'scenario', result: "It's unsalted.", correction: 'Add salted toppings' }],
        comparative_analysis: [{ target_style: 'target_style', difference: 'Montreal is unsalted smaller honeyboiled', why_choose_this: 'Sweeter crunchier' }],
        q_and_a: [{ question: 'question', answer: 'Tradition', context: 'History 2' }],
        fermentation_methods: [{ method: 'Direct', suitability: 'Possible', notes: 'Short ferment' }]
    },
    deepDive: {
        hydrationLogic: "montreal_bagel_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "montreal_bagel_method_direct_notes" },
            biga: { suitable: false, notes: "montreal_bagel_method_biga_notes" },
            poolish: { suitable: false, notes: "montreal_bagel_method_poolish_notes" }
        },
        whatIf: [{ scenario: 'scenario', outcome: 'Overproofed', solution: 'Proof less' }],
        comparisons: [{ vsStyle: 'vsStyle', difference: 'Montreal is denser' }],
        proTips: ['Soak boards', 'Seed heavily']
    }
};

const flourTortilla: DoughStyleDefinition = {
    id: "flour_tortilla_sonora",
    name: "flour_tortilla_sonora",
    category: "flatbread",
    recipeStyle: RecipeStyle.FLATBREAD,
    origin: {
        country: 'Mexico 3',
        region: 'Sonora',
        period: "16th Century"
    },
    description: "flour_tortilla_sonora_desc",
    history: "flour_tortilla_sonora_history",
    difficulty: 'Medium',
    fermentationType: "direct",

    technicalProfile: {
        hydration: [45, 55],
        salt: [1.5, 2.0],
        oil: [15, 20],
        sugar: [0, 0],
        flourStrength: 'W200240 3',
        ovenTemp: [200, 230],
        recommendedUse: ['Burritos', 'Quesadillas'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Hot water mix. [Science: Denatures proteins for extensibility.]",
            "Rest. [Science: Relaxes gluten.]",
            "Flash cook. [Science: Steam puff separates layers.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W200",
            pl_ratio: 'Extensible',
            absorption_capacity: 'Low',
            protein_type: 'AP',
            science_explanation: 'High fat  hot water  tenderness and extensibility'
        },
        thermalProfile: {
            oven_type: 'Comal',
            heat_distribution: 'Conduction',
            crust_development: 'Spotted',
            crumb_structure: 'Layered'
        },
        fermentationScience: {
            yeast_activity: 'None',
            ph_target: 'Neutral 9',
            organic_acids: 'None',
            enzymatic_activity: 'None'
        }
    },
    tags: ["lard", "sonora", "mexico"],
    pairings: {
        canonical: ['Carne asada', 'Cheese 2'],
        modern: ['Nutella'],
        regional: ['Burrito percherón']
    },
    watchouts: ["Don't overcook.", "Use hot water."],
    notes: ['Lard is traditional'],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: 'Sonoran heritage' }],
    images: {
        hero: "/images/styles/flour_tortilla_sonora.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [{ tip: 'tip', explanation: 'Should be translucent' }],
        what_if: [{ scenario: 'scenario', result: 'Cooked too long', correction: 'Cook faster' }],
        comparative_analysis: [{ target_style: 'target_style', difference: 'Flour is larger contains gluten', why_choose_this: 'Burritos 2' }],
        q_and_a: [{ question: 'question', answer: 'Lard is better', context: 'Texture' }],
        fermentation_methods: [{ method: 'Direct', suitability: 'Possible', notes: 'Unleavened 2' }]
    },
    deepDive: {
        hydrationLogic: "flour_tortilla_sonora_dd_hydration",
        methodSuitability: {
            direct: { suitable: true, notes: "flour_tortilla_sonora_method_direct_notes" },
            biga: { suitable: false, notes: "flour_tortilla_sonora_method_biga_notes" },
            poolish: { suitable: false, notes: "flour_tortilla_sonora_method_poolish_notes" }
        },
        whatIf: [{ scenario: 'scenario', outcome: 'Rest longer', solution: 'Rest 30m' }],
        comparisons: [{ vsStyle: 'vsStyle', difference: 'Tortilla is unleavened' }],
        proTips: ['Use manteca']
    }
};

export const northAmericaStyles: DoughStyleDefinition[] = [
    nycSlice,
    detroitStyle,
    chicagoDeepDish,
    sfSourdough,
    newHavenApizza,
    nycBagel,
    grandmaPizza,
    chicagoTavern,
    montrealBagel,
    flourTortilla
];
