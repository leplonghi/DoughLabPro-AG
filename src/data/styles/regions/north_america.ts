import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

const nycSlice: DoughStyleDefinition = {
    id: "nyc_slice_shop",
    name: "New York Slice Shop",
    category: "pizza",
    recipeStyle: RecipeStyle.NEW_YORK,
    origin: {
        country: "USA",
        region: "New York City",
        period: "Early 20th Century"
    },
    description: "The iconic street slice. Large (18-20 inch), foldable, crispy yet pliable. Characterized by a symbiotic relationship between the cheese oil and the sauce.",
    history: "Evolved from Neapolitan immigrants adapting to coal ovens and high-gluten North American flour. The 'gas deck' era defined the modern street slice.",
    difficulty: "Medium",
    fermentationType: "cold",

    technicalProfile: {
        hydration: [62, 65],
        salt: [2.0, 2.5],
        oil: [1, 3],
        sugar: [1, 2],
        flourStrength: "W360-400 (High Gluten)",
        ovenTemp: [280, 300],
        recommendedUse: ["Cheese Slice", "Pepperoni"],
        difficulty: "Medium",
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
            science_explanation: "High protein requires oil/sugar (tenderizers) to allow the 'fold' without the crust cracking like a cracker. The gluten density supports the large 18-inch diameter."
        },
        thermalProfile: {
            oven_type: "Gas Deck",
            heat_distribution: "Conduction (Stone)",
            crust_development: "Crispy, pliable, golden",
            crumb_structure: "Thin, dense but airy rim"
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
        canonical: ["Low Moisture Mozzarella", "Oregano", "Garlic Powder"],
        modern: ["Vodka Sauce"],
        regional: ["Garlic Knots (from scraps)"]
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
    references: [{ source: "Scott Wiener's Pizza History" }, { source: "Modernist Pizza" }],
    images: {
        hero: "/images/styles/nyc-slice-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "The Reheat Rule",
                explanation: "Never microwave. Reheat in a skillet or on a hot stone (250°C) to restore the crust without drying the cheese."
            },
            {
                tip: "Cheese Temp Matters",
                explanation: "Use cold, cubed Low Moisture Mozzarella. If it's warm, it separates into oil before the crust is done."
            }
        ],
        what_if: [
            {
                scenario: "Home oven only reaches 250°C",
                result: "The crust dries out before browning.",
                correction: "Add 2% sugar/malt to dough (browning aid) and use a baking steel, not a stone."
            },
            {
                scenario: "Dough retracts when stretching",
                result: "Gluten is too cold or overworked.",
                correction: "Let dough sit at room temp for 1-2h before stretching to relax the gluten 'memory'."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Neapolitan",
                difference: "NYC is larger (18inch), crisper, and has oil/sugar. Neapolitan is soft, wet, and lean.",
                why_choose_this: "Choose NYC for the 'fold', portability, and heavy cheese/toppings capability."
            }
        ],
        q_and_a: [
            {
                question: "Is NYC water the secret?",
                answer: "Myth. While mineral content affects pH, comparable bagels/pizza are made worldwide by replicating the calcium/magnesium ratio or just using good technique.",
                context: "Kenji Lopez-Alt"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Ideal",
                notes: "24-48h Cold Ferment is the definitive step for the flavor and micro-blisters."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "62-65% is the sweet spot. It allows the dough to be extensible enough for the 18-inch stretch but provides enough structure to hold the fold ('The Fold') without flopping.",
        methodSuitability: {
            direct: { suitable: true, notes: "The classic corner slice shop method. Often same-day dough." },
            biga: { suitable: true, notes: "Adds excellent flavor but can make the dough too strong/bucky for easy stretching." },
            poolish: { suitable: true, notes: "Common in modern 'Artisan' slice shops for a lighter, puffier crust." }
        },
        whatIf: [
            {
                scenario: "Crust is pale and white?",
                outcome: "Oven temp too low (<550°F) or forgot the sugar/oil.",
                solution: "At home temps (500°F), you MUST use 2% sugar and 3% oil to force browning."
            },
            {
                scenario: "Dough keeps snapping back to small size?",
                outcome: "Gluten is too excited.",
                solution: "Let the dough balls rest at room temp for at least 2 hours before stretching. Cold dough = Snap back."
            }
        ],
        comparisons: [
            {
                vsStyle: "Neapolitan",
                difference: "NYC uses Oil, Sugar, and Malt. Neapolitan is lean. NYC is crispy/chewy; Neapolitan is soft/wet."
            }
        ],
        proTips: [
            "The 'Screen' Trick: Bake on a screen for 5 mins, then slide directly onto the stone to finish. Best of both worlds.",
            "Cure the balls: 48h cold fermentation is where the flavor lives."
        ]
    }
};

const detroitStyle: DoughStyleDefinition = {
    id: "detroit_style_classic",
    name: "Detroit Style",
    category: "pizza",
    recipeStyle: RecipeStyle.DETROIT,
    origin: {
        country: "USA",
        region: "Detroit, Michigan",
        period: "1946"
    },
    description: "Deep dish rectangular pizza baked in blue steel automotive parts pans. Famous for the 'frico'—a caramelized cheese crown around the edges.",
    history: "Created at Buddy's Rendezvous. Using industrial steel pans meant for carrying auto parts created a unique conduction heat that fried the crust in oil/fat.",
    difficulty: "Medium",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [70, 75],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: "W300-320",
        ovenTemp: [260, 290],
        recommendedUse: ["Red Top (Sauce on top)", "Pepperoni"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix to moderate development. [Science: Full windowpane not needed as the dough is supported by the pan.]",
            "Bulk ferment 1h. [Science: Initial gas generation.]",
            "Pan proof 2-3h. [Science: The critical step. Dough must relax completely to fill corners and aerate into a sponge-like crumb.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W300-320",
            pl_ratio: "Balanced",
            absorption_capacity: "High (70%+)",
            protein_type: "Bread Flour",
            science_explanation: "Structure is supported by the steel pan walls, so we don't need extreme gluten strength. High hydration aids the 'focaccia-like' open crumb."
        },
        thermalProfile: {
            oven_type: "Blue Steel Pan",
            heat_distribution: "Conduction (Oil Fry)",
            crust_development: "Fried, caramelized (Frico)",
            crumb_structure: "Sponge-like, airy"
        },
        fermentationScience: {
            yeast_activity: "High",
            ph_target: "Normal",
            organic_acids: "Lactic",
            enzymatic_activity: "High (High water)"
        }
    },
    tags: ["pan", "frico", "deep-dish", "detroit"],
    pairings: {
        canonical: ["Wisconsin Brick Cheese", "Tomato Sauce (applied post-bake)"],
        modern: ["Hot Honey"],
        regional: ["Coney Island Hot Dog Pizza"]
    },
    watchouts: [
        "Soggy center: Sauce applied before bake sinks into the proofed dough. Apply in stripes or post-bake.",
        "No Frico: Cheese did not touch the pan walls, or pan was not seasoned.",
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
                tip: "The Frico Edge",
                explanation: "Spread cheese ALL the way to the metal wall. The cheese melting down the side creates the structural 'Frico' wall."
            },
            {
                tip: "Par-bake the Skin",
                explanation: "For home ovens, bake the dough w/o toppings for 7 mins first to ensure the center cooks before the cheese burns."
            }
        ],
        what_if: [
            {
                scenario: "Center is raw/gummy",
                result: "Insulated by too much sauce or dough was too cold.",
                correction: "Apply sauce in 'Racing Stripes' ON TOP of cheese to allow heat to penetrate."
            },
            {
                scenario: "Cannot find Brick Cheese",
                result: "You lose the specific buttery tang.",
                correction: "Use 50% Low Moisture Mozzarella + 50% Monterey Jack (or Muenster) to simulate the fat/melt profile."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Sicilian",
                difference: "Detroit uses Brick cheese, sauce on top, and steel pans. Sicilian uses olive oil, often crumbs, and sheet pans.",
                why_choose_this: "Choose Detroit for the caramelized cheese crown (Frico)."
            }
        ],
        q_and_a: [
            {
                question: "Why Blue Steel pans?",
                answer: "They conduct heat faster than aluminum, frying the bottom in the oil before the top burns.",
                context: "Automotive History"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Traditionally a direct dough, but cold ferment adds welcomed flavor."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "70-75% is mandatory. This is effectively a focaccia baked with cheese. The high water ensures the thick crumb remains light and airy like a sponge, not dense like a brick.",
        methodSuitability: {
            direct: { suitable: true, notes: "Standard. The pan supports the structure, so complex gluten dev isn't strictly needed." },
            biga: { suitable: false, notes: "Unnecessary complexity for a pan pizza." },
            poolish: { suitable: true, notes: "Fantastic for an even lighter, more aerated crumb." }
        },
        whatIf: [
            {
                scenario: "Center is raw (Gum Line)?",
                outcome: "Insulated by too much sauce or dough was cold.",
                solution: "Par-bake the skin + cheese for 7 mins, THEN add sauce stripes and finish."
            },
            {
                scenario: "No 'Frico' (Cheese Crown)?",
                outcome: "You used Mozzarella or didn't push cheese to the edge.",
                solution: "Use Brick Cheese or Muenster/Jack blend. It must touch the metal wall."
            }
        ],
        comparisons: [
            {
                vsStyle: "Chicago Deep Dish",
                difference: "Detroit is a light, fried dough. Chicago is a dense, flaky biscuit pastry."
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
    name: "Chicago Deep Dish",
    category: "pizza",
    recipeStyle: RecipeStyle.CHICAGO_DEEP_DISH,
    origin: {
        country: "USA",
        region: "Chicago, Illinois",
        period: "1943"
    },
    description: "A casserole-like pizza with high sides, eaten with a knife and fork. The crust is biscuit-like, short, and flaky due to high oil/fat content.",
    history: "Invented at Pizzeria Uno. It inverted the pizza structure: Cheese on bottom, toppings middle, sauce on top to prevent burning during the long bake.",
    difficulty: "Medium",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 58],
        salt: [1.5, 2.0],
        oil: [15, 25], // Often Corn Oil or Butter
        sugar: [1, 2],
        flourStrength: "W240-280 (AP/Pastry blend)",
        ovenTemp: [220, 230],
        recommendedUse: ["Sausage Patty", "Spinach"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix for short time (Undermixed). [Science: Minimizing gluten development ensures a 'short', biscuit-like texture rather than chewy bread.]",
            "Bulk ferment 1-2h. [Science: Flavor development only; gas retention is secondary to texture.]",
            "Laminate/Press into pan. [Science: No elasticity required; the dough should mold like pie crust.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W240 (AP/Biscuit)",
            pl_ratio: "Short (High Fat)",
            absorption_capacity: "Low",
            protein_type: "AP/Pastry Blend",
            science_explanation: "A 'Short Dough'. The high fat content coats the proteins, preventing long gluten chains. This creates a flaky, biscuit-like break instead of a chew."
        },
        thermalProfile: {
            oven_type: "Deep Pan",
            heat_distribution: "Conduction (Slow)",
            crust_development: "Fried/Biscuit",
            crumb_structure: "Dense, flaky"
        },
        fermentationScience: {
            yeast_activity: "Low",
            ph_target: "Neutral",
            organic_acids: "None",
            enzymatic_activity: "Low"
        }
    },
    tags: ["casserole", "biscuit-crust", "corn-oil"],
    pairings: {
        canonical: ["Italian Sausage Layer", "Chunky Tomato Sauce"],
        modern: ["Giardiniera"],
        regional: ["Butter Crust (Lou's style)"]
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
    references: [{ source: "Pizzeria Uno History" }],
    images: {
        hero: "/images/styles/chicago-deep-dish-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "The Biscuit Factor",
                explanation: "Mix very briefly. Overmixing develops gluten, making it chewy instead of flaky. You want a 'short' dough."
            },
            {
                tip: "Corn Oil is King",
                explanation: "Although butter tastes great, corn oil provides the authentic specific flavor profile and texture of the original."
            }
        ],
        what_if: [
            {
                scenario: "Dough shrinks when pressing",
                result: "Elasticity is too high.",
                correction: "Let it rest 20 mins. If it persists, you overmixed. Next time mix less."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Pan Pizza",
                difference: "Deep Dish is a pie/casserole with a short crust. Pan pizza (like Detroit) is a fried bread.",
                why_choose_this: "Choose Deep Dish for a sit-down meal experience."
            }
        ],
        q_and_a: [
            {
                question: "Why sauce on top?",
                answer: "Insulation. The cheese and meat would burn during the long 40-minute bake if exposed. The sauce protects them.",
                context: "Physics of Baking"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Short ferment is standard. Flavor comes from fat and toppings, not yeast."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "50-55% plus high fat (15%+ Corn Oil/Butter). This is NOT bread. This is a savory pie crust. High hydration would develop gluten -> chewy -> wrong.",
        methodSuitability: {
            direct: { suitable: true, notes: "The only way. Short mix, direct use." },
            biga: { suitable: false, notes: "Completely wrong style." },
            poolish: { suitable: false, notes: "Completely wrong style." }
        },
        whatIf: [
            {
                scenario: "Crust is tough/chewy?",
                outcome: "Overmixed. You developed gluten.",
                solution: "Mix only until ingredients combine. Treat it like a pie crust or biscuit dough."
            },
            {
                scenario: "Soggy mess?",
                outcome: "Sauce was too thin or veggies released water.",
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
            "Let it rest: After baking, let the pie sit 5 mins to set heavily. If you cut immediately, it flows like lava."
        ]
    }
};



const sfSourdough: DoughStyleDefinition = {
    id: "sf_sourdough",
    name: "San Francisco Sourdough",
    category: "bread",
    recipeStyle: RecipeStyle.SOURDOUGH,
    origin: {
        country: "USA",
        region: "San Francisco, CA",
        period: "1849 (Gold Rush)"
    },
    description: "The legendary West Coast sourdough. Extremely sour (acetic), thick blistered crust, and chewy crumb. Famous for the Lactobacillus sanfranciscensis bacteria.",
    history: "Boudin Bakery (1849) kept the 'mother' alive since the Gold Rush. The cool, foggy climate promotes acetic acid production over lactic acid.",
    difficulty: "Expert",
    fermentationType: "levain",

    technicalProfile: {
        hydration: [70, 78],
        salt: [2.0, 2.2],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: "W300-350",
        ovenTemp: [230, 260],
        recommendedUse: ["Clam Chowder Bowl", "Toast"],
        difficulty: "Expert",
        fermentationSteps: [
            "Maintain stiff starter. [Science: Stiff starters favor acetic acid production (sourness) and yeast vitality.]",
            "Long cold retard (12-24h). [Science: At low temps, bacteria produce more acid while yeast slows down, creating the signature tang.]",
            "Bake dark. [Science: Acidity inhibits Maillard reaction, so aggressive heat and time are needed for the dark chestnut color.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W300-350",
            pl_ratio: "Strong/Stiff",
            absorption_capacity: "High",
            protein_type: "Strong Wheat",
            science_explanation: "Proteolysis (acid degrading gluten) is the enemy. We need very strong flour to survive the long, acidic fermentation without collapsing."
        },
        thermalProfile: {
            oven_type: "Dutch Oven / Hearth",
            heat_distribution: "Radiant & Steam",
            crust_development: "Blistered, thick",
            crumb_structure: "Wild, irregular"
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
        canonical: ["Clam Chowder", "Dungeness Crab"],
        modern: ["Avocado"],
        regional: ["Seafood Cioppino"]
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
    references: [{ source: "Boudin History" }, { source: "Microbiology of Sourdough" }],
    images: {
        hero: "/images/styles/sf-sourdough-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "The 'Tartine' Fold",
                explanation: "Don't knead. Perform gentle 'coil folds' every 30 mins during bulk to align gluten without degassing."
            },
            {
                tip: "Steam is Non-Negotiable",
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
                scenario: "No 'Ear' (Burst)",
                result: "Scoring was too shallow or oven not hot enough.",
                correction: "Score at a 45 degree angle and ensure steam is present."
            }
        ],
        comparative_analysis: [
            {
                target_style: "French Baguette",
                difference: "SF Sourdough is wild yeast (Levain) and acetic. Baguette is commercial yeast and mild.",
                why_choose_this: "Choose SF Sourdough for keeping quality and complex flavor."
            }
        ],
        q_and_a: [
            {
                question: "Is 'Lactobacillus sanfranciscensis' only in SF?",
                answer: "No. It's found worldwide. The 'SF Taste' is more about the cold fermentation technique and acetic acid balance than geography.",
                context: "Modern Microbiology"
            }
        ],
        fermentation_methods: [
            {
                method: "Sourdough",
                suitability: "Authentic",
                notes: "Strictly pure Levain. No commercial yeast allowed."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "75%+ is standard. The acidity from the Levain tightens the gluten structure, allowing it to hold significant water without becoming soup. The water is needed for the open crumb.",
        methodSuitability: {
            direct: { suitable: false, notes: "Impossible. This is Sourdough." },
            biga: { suitable: false, notes: "This is Sourdough." },
            poolish: { suitable: false, notes: "This is Sourdough." }
        },
        whatIf: [
            {
                scenario: "Bread is dense/brick-like?",
                outcome: "Starter was weak or bulk fermentation was too short.",
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
                vsStyle: "Pane Toscano",
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
    name: "New Haven Apizza",
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    origin: {
        country: "USA",
        region: "New Haven, CT",
        period: "1925"
    },
    description: "Coal-fired, oblong, thin-crust pizza known for its 'char'. Chewy, slightly smoky, and drier than Neapolitan.",
    history: "Frank Pepe (1925) started the tradition. 'Apizza' (pronounced ah-beets) is local dialect. The hallmark is the coal oven reaching 600°F+.",
    difficulty: "Hard",
    fermentationType: "cold",

    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [1, 2],
        sugar: [0, 1],
        flourStrength: "W300-340",
        ovenTemp: [315, 350], // Domestic adaptation target. Real ovens are 600F+
        recommendedUse: ["White Clam Pie", "Tomato Pie (No mutz)"],
        difficulty: "Hard",
        fermentationSteps: [
            "Long cold fermentation (24-48h). [Science: Necessary to break down complex starches for the high-heat charring process.]",
            "Proof at room temp. [Science: Dough must be very extensible to stretch into the signature oblong shape without snapping back.]",
            "Coal Fired Bake. [Science: Intense dry heat evaporates surface moisture instantly, creating char without burning the center.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W300-340",
            pl_ratio: "Extensible",
            absorption_capacity: "Medium",
            protein_type: "High Gluten",
            science_explanation: "High strength is required to stretch very thin without tearing, but extended cold fermentation relaxes the gluten (extensibility)."
        },
        thermalProfile: {
            oven_type: "Coal Fired Deck",
            heat_distribution: "Intense Radiation (600°F+)",
            crust_development: "Charred, dry",
            crumb_structure: "Chewy, uneven"
        },
        fermentationScience: {
            yeast_activity: "Retarded",
            ph_target: "Normal",
            organic_acids: "Balanced",
            enzymatic_activity: "High (Maillard fuel)"
        }
    },
    tags: ["coal-fired", "char", "clam-pie", "connecticut"],
    pairings: {
        canonical: ["Littleneck Clams", "Garlic", "Oregano", "Pecorino"],
        modern: ["Bacon"],
        regional: ["Foxon Park Soda"]
    },
    watchouts: [
        "Sooty flavor: In a coal oven, poor airflow. In home oven, burnt flour.",
        "Soggy Clams: Clams must be fresh and shucked directly onto the pie to mix liquor with oil/garlic.",
        "Too thick: The rim should be minimal; it's about the crust surface."
    ],
    notes: [
        "A 'plain' pie has no cheese (mozzarella), just tomato sauce and pecorino.",
        "The White Clam Pie is the signature masterpiece.",
        "Char is a flavor, burnt is a mistake."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Frank Pepe History" }, { source: "Pizza City, USA" }],
    images: {
        hero: "/images/styles/new-haven-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "Oblong is a Feature",
                explanation: "Don't try to make it round. The 'Apizza' shape typically fills the peel. It's rustic."
            },
            {
                tip: "Bake Darker",
                explanation: "Char is flavor. Pulling it early 'to be safe' ruins the style. Let the edges turn black."
            }
        ],
        what_if: [
            {
                scenario: "Oven only goes to 260°C",
                result: "You won't get char.",
                correction: "Use 2% sugar in the dough to force browning at lower temps."
            }
        ],
        comparative_analysis: [
            {
                target_style: "NYC Slice",
                difference: "Apizza is thinner, crispier, and much darker (charred). NYC is golden and pliable.",
                why_choose_this: "Choose Apizza for a crunchier, smoky experience."
            }
        ],
        q_and_a: [
            {
                question: "Is 'Mozz' standard?",
                answer: "No. A 'Plain' pie in New Haven is Tomato Sauce + Oregano + Pecorino. You must ask for Mozzarella ('Mutz').",
                context: "Frank Pepe Menu"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Ideal",
                notes: "Long cold proof (48h+) is needed to breakdown sugars for that intense char."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "60-65% drives the char. It needs to be dry enough to crisp rapidly, but wet enough to undergo the 48h ferment without drying out in the fridge.",
        methodSuitability: {
            direct: { suitable: true, notes: "But needs cold fermentation (Retarding) to be authentic." },
            biga: { suitable: false, notes: "Not typical." },
            poolish: { suitable: false, notes: "Not typical." }
        },
        whatIf: [
            {
                scenario: "It burns instantly?",
                outcome: "Oven too hot or sugar in dough.",
                solution: "Authentic New Haven has NO sugar. If baking at 600°F+, remove sugar."
            },
            {
                scenario: "Soggy center?",
                outcome: "Clams/Toppings released water.",
                solution: "Shuck clams last minute. Bake longer. Char is good."
            }
        ],
        comparisons: [
            {
                vsStyle: "NYC Slice",
                difference: "New Haven is drier, thinner, oblong, and cooked darker (Charred)."
            }
        ],
        proTips: [
            "Pecorino Romano: The 'salt' of the pizza. Apply liberally.",
            "Don't worry about shape: If it's round, it's not Apizza."
        ]
    }
};

const brazilianGasDeck: DoughStyleDefinition = {
    id: "brazilian_gas_deck",
    name: "Pizza Paulistana (Gas Deck)",
    category: "pizza",
    recipeStyle: RecipeStyle.PAN_PIZZA, // Closest match, though it's deck
    origin: {
        country: "Brazil",
        region: "São Paulo",
        period: "1970s"
    },
    description: "The São Paulo powerhouse. Medium thickness, capable of holding massive amounts of toppings (Catupiry, chicken, sausage). Crisp bottom, soft center.",
    history: "São Paulo has more pizzerias than NYC. This style evolved to satisfy a craving for abundance. The gas deck oven allows a slower, more penetrating heat than wood.",
    difficulty: "Easy",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [55, 60],
        salt: [2.0, 2.5],
        oil: [2, 4], // Soybean or Olive
        sugar: [1, 2],
        flourStrength: "W280-320",
        ovenTemp: [300, 330],
        recommendedUse: ["Frango com Catupiry", "Calabresa", "Portuguesa"],
        difficulty: "Easy",
        fermentationSteps: [
            "Mix to development. [Science: Strong gluten needed to support 1kg+ of toppings.]",
            "Short maturation (24h). [Science: Balances flavor with the structural integrity required for heavy loading.]",
            "Bake at 300°C. [Science: Lower temp than Napoli allows toppings to heat through without burning the crust.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W280-320",
            pl_ratio: "Balanced",
            absorption_capacity: "Medium",
            protein_type: "Standard Wheat",
            science_explanation: "A 'Workhorse' flour. It needs to be strong enough to carry heavy cheese/toppings but not so tough that it fights back when rolled out."
        },
        thermalProfile: {
            oven_type: "Gas Deck",
            heat_distribution: "Conduction (Moderate)",
            crust_development: "Crispy bottom, soft crumb",
            crumb_structure: "Dense, supporting"
        },
        fermentationScience: {
            yeast_activity: "Standard",
            ph_target: "Normal",
            organic_acids: "Low",
            enzymatic_activity: "Moderate"
        }
    },
    tags: ["brazil", "heavy-toppings", "catupiry", "sao-paulo"],
    pairings: {
        canonical: ["Catupiry", "Corn", "Peas", "Hard Boiled Eggs"],
        modern: ["Stuffed Crust (Borda Recheada)"],
        regional: ["Sweet Pizza desserts"]
    },
    watchouts: [
        "Raw dough center: Toppings insulated the dough. Pre-cook toppings and bake longer at lower temp.",
        "Collapse: Dough too weak for the weight. Use lower hydration or stronger flour.",
        "Greasy: Cheap cheese/toppings release too much oil. Use quality ingredients."
    ],
    notes: [
        "Catupiry is a proprietary Brazilian cream cheese; substitutes rarely work.",
        "Eating with a knife and fork is mandatory.",
        "The 'Borda Recheada' (stuffed crust) is a common upsell."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Associação Pizzarias Unidas" }],
    images: {
        hero: "/images/styles/brazilian-gas-deck-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "Structure First",
                explanation: "Because toppings are heavy (Catupiry, Chicken, etc), the dough must be rolled slightly thicker than Neapolitan to support the weight."
            },
            {
                tip: "The Catupiry Rim",
                explanation: "For 'Borda Recheada', pipe a thick line of chilled Catupiry on the edge, fold the dough over, and seal perfectly."
            }
        ],
        what_if: [
            {
                scenario: "Bottom is white/soft",
                result: "Toppings insulated the dough too much.",
                correction: "Bake lower and slower (300°C) to allow heat to penetrate before the bottom burns."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Neapolitan",
                difference: "Paulistana is crispier, sturdier, and designed for heavy toppings. Neapolitan is delicate.",
                why_choose_this: "Choose Paulistana when you want a meal-heavy pizza."
            }
        ],
        q_and_a: [
            {
                question: "Can I use Cream Cheese?",
                answer: "It's not the same. Catupiry has gums that prevent it from splitting at high heat. Cream cheese often turns into oil.",
                context: "Ingredient Science"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Most pizzerias use a simple direct dough fermented for 24h."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "55-60% is conservative because this pizza is heavy. 1.2kg of toppings on a 35cm disc requires structural rigidity that high hydration cannot provide.",
        methodSuitability: {
            direct: { suitable: true, notes: "The industrial standard in SP." },
            biga: { suitable: true, notes: "Used in high-end 'Gourmet' pizzerias." },
            poolish: { suitable: false, notes: "Too weak for the topping load." }
        },
        whatIf: [
            {
                scenario: "Soggy disaster (Pizza Soup)?",
                outcome: "Vegetables/Chicken released water.",
                solution: "Pre-cook everything. Sauté the onions, roast the peppers."
            },
            {
                scenario: "Crust is tough?",
                outcome: "Flour too strong or not enough oil.",
                solution: "Soybean oil is traditional and tenderizes heavily."
            }
        ],
        comparisons: [
            {
                vsStyle: "Neapolitan",
                difference: "Paulistana is a meal on a plate. Neapolitan is a light snack."
            }
        ],
        proTips: [
            "The Oregano Finish: Brazilian pizza puts oregano ON TOP of the cheese, not the sauce.",
            "Knife and Fork: Serve it boiling hot. It cannot be hand-held."
        ]
    }
};

const nycBagel: DoughStyleDefinition = {
    id: "nyc_bagel",
    name: "New York Bagel",
    category: "bread",
    recipeStyle: RecipeStyle.BAGEL,
    origin: {
        country: "USA",
        region: "New York City",
        period: "Late 19th Century"
    },
    description: "Dense, chewy, malty, and boiled before baking. The shiny, blistered crust is non-negotiable.",
    history: "Brought by Polish Jewish immigrants. The NYC water (chemistry) is often cited, but the boil + cold ferment method is the real secret.",
    difficulty: "Hard",
    fermentationType: "cold",

    technicalProfile: {
        hydration: [50, 55],
        salt: [2.0, 2.2],
        oil: [1, 2],
        sugar: [2, 4], // Malt Syrup
        flourStrength: "W380-420 (High Gluten)",
        ovenTemp: [240, 260],
        recommendedUse: ["Cream Cheese & Lox", "Bacon Egg Cheese"],
        difficulty: "Hard",
        fermentationSteps: [
            "Mix EXTREMELY stiff dough. [Science: Low hydration (50-55%) creates the signature dense chewiness.]",
            "Shape immediately. [Science: Shaping after proofing would Degas the dense structure too much.]",
            "Cold retard 24-48h. [Science: Relaxes the tight gluten and develops malt flavors.]",
            "Boil in Malt/Soda water. [Science: Gelatinizes the outer starch layer for shine and sets the crust size before baking.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W380-420 (Very High)",
            pl_ratio: "Very Elastic",
            absorption_capacity: "High (but under-hydrated)",
            protein_type: "High Gluten Spring Wheat",
            science_explanation: "The highest protein flour possible is used. Because hydration is low (50%), the gluten is incredibly tight, creating the 'jaw workout' chewiness."
        },
        thermalProfile: {
            oven_type: "Revolving Deck / Boards",
            heat_distribution: "Convection/Radiant",
            crust_development: "Shiny, Blistered (Gelatinized)",
            crumb_structure: "Dense, Tight"
        },
        fermentationScience: {
            yeast_activity: "Retarded (Cold)",
            ph_target: "Normal",
            organic_acids: "Low (Direct)",
            enzymatic_activity: "Enhanced (Malt)"
        }
    },
    tags: ["bagel", "boiled", "malty", "nyc"],
    pairings: {
        canonical: ["Schmear (Cream Cheese)", "Lox", "Capers", "Red Onion"],
        modern: ["Rainbow Bagel (Visual only)"],
        regional: ["Everything Seasoning"]
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
    references: [{ source: "Bagel Union Regulations" }],
    images: {
        hero: "/images/styles/nyc-bagel-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "Alkaline Boil",
                explanation: "Add Barley Malt Syrup and Baking Soda (or Lye for pros) to the water. This spikes the pH for intense Maillard browning."
            },
            {
                tip: "Cold Proof Shaped",
                explanation: "Shape the bagels then retard them in the fridge. Boiling cold bagels helps them hold shape."
            }
        ],
        what_if: [
            {
                scenario: "Bagels wrinkle after baking",
                result: "Boiled too long or proofed too long before boiling.",
                correction: "Keep boil to 30-60 seconds per side."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Montreal Bagel",
                difference: "NYC is salted + malt. Montreal is no salt + honey/sugar water (sweeter) and wood fired.",
                why_choose_this: "Choose NYC for the savory chew and sandwich capability."
            }
        ],
        q_and_a: [
            {
                question: "Why Barley Malt?",
                answer: "Enzymatic actvity and specific flavor. Sugar is just sweet; Malt is savory, sweet, and improves crust color.",
                context: "Bagel Tradition"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Crucial for the micro-blisters and flavor complexity."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "50-55% is stiff. Extremely stiff. This tightness + boiling is what restricts expansion, creating the dense, chewy texture. If you hydrate to 65%, you just made a circle bread roll.",
        methodSuitability: {
            direct: { suitable: true, notes: "With stiff starter or sponge." },
            biga: { suitable: true, notes: "Excellent for locking in flavor in a stiff dough." },
            poolish: { suitable: true, notes: "Commonly used as the 'Sponge' phase." }
        },
        whatIf: [
            {
                scenario: "Bagels look wrinkled like prunes?",
                outcome: "Boiled too long or overproofed.",
                solution: "Boil 30-60 secs. Proof less. They should sink slightly then float."
            },
            {
                scenario: "No shine?",
                outcome: "Water wasn't alkaline.",
                solution: "Add Barley Malt Syrup and Baking Soda to the boil water."
            }
        ],
        comparisons: [
            {
                vsStyle: "Montreal Bagel",
                difference: "NYC is saltier, bigger, and baked in standard ovens. Montreal is honey-water boiled and wood-fired."
            }
        ],
        proTips: [
            "Ice Cold Ferment: Shape, put on boards, and fridge for 24h. Boil directly from fridge.",
            "Malt Syrup: Don't use sugar. The flavor is non-negotiable."
        ]
    }
};

const grandmaPizza: DoughStyleDefinition = {
    id: "grandma_style_v2",
    name: "Grandma Pizza",
    category: "pizza",
    recipeStyle: RecipeStyle.GRANDMA_STYLE,
    family: "Flatbreads & Pizzas",
    description: "A thin, rectangular pan pizza that bridges the gap between home cooking and pizzeria style. Defined by a short proofing time (often no cold ferment) and being baked in an olive-oil coated sheet pan.",
    origin: {
        country: "USA",
        region: "Long Island, NY",
        period: "1970s"
    },
    history: "Originated from Italian grandmothers (Nonnas) in Long Island making pizza at home with whatever they had (simple dough, crushed tomatoes, standard oven) without long fermentation times.",
    difficulty: "Easy",
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 65],
        salt: [2.0, 2.5],
        oil: [3.0, 5.0], // High oil in dough + pan
        sugar: [1.0, 3.0],
        flourStrength: "All Purpose or Bread (11-12%)",
        ovenTemp: [230, 260],
        recommendedUse: ["Classic Tomato & Garlic", "Vodka Sauce"],
        difficulty: "Easy",
        fermentationSteps: [
            "Mix to moderate development. [Science: Doesn't need windowpane as it's supported by a pan.]",
            "Short bulk (1-2h). [Science: 'Grandma' style implies immediacy; rapid yeast activity is key.]",
            "Stretch into oiled pan immediately. [Science: Oil conducts heat for a fried bottom texture.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "Medium (AP/Bread)",
            pl_ratio: "Balanced",
            absorption_capacity: "Medium",
            protein_type: "All Purpose",
            science_explanation: "Does not require high protein. A softer flour helps it stretch into the corners of the pan without shrinking back."
        },
        thermalProfile: {
            oven_type: "Home Oven (Sheet Pan)",
            heat_distribution: "Conduction (Oil)",
            crust_development: "Fried bottom",
            crumb_structure: "Dense, soft"
        },
        fermentationScience: {
            yeast_activity: "Fast (Warm)",
            ph_target: "Normal",
            organic_acids: "None",
            enzymatic_activity: "High (Sugar/Oil)"
        }
    },
    tags: ["pizza", "pan-pizza", "italian-american", "beginner-friendly", "thin-crust"],
    pairings: {
        canonical: ["Garlic", "Crushed Tomatoes", "Mozzarella", "Olive Oil"],
        modern: ["Pesto", "Fresh Mozzarella"],
        regional: ["None"]
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
                tip: "Fried Bottom",
                explanation: "Use way more olive oil in the pan than you think. It should essentially fry the crust bottom."
            },
            {
                tip: "Short Proof",
                explanation: "Don't let it rise too much in the pan. It should be relatively dense and thin, not foccacia-like."
            }
        ],
        what_if: [
            {
                scenario: "Dough springs back",
                result: "Gluten is tight.",
                correction: "Stretch, wait 10 mins, stretch again. Don't fight the gluten."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Sicilian",
                difference: "Grandma is thin, short proof, domestic. Sicilian is thick, long proof, bakery style.",
                why_choose_this: "Choose Grandma for a quick weeknight sheet pan family meal."
            }
        ],
        q_and_a: [
            {
                question: "Why 'Grandma'?",
                answer: "It mimics the home cooking of Italian immigrants who didn't have pizza ovens, just standard sheet pans and home stoves.",
                context: "History"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Originally a 'making it for dinner tonight' dough."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "60-65% ensures a crisp bottom (fried in pan oil) but a dense encough crumb to support toppings. Too airy, and it loses the 'homestyle' rusticity.",
        methodSuitability: {
            direct: { suitable: true, notes: "The definition of Grandma style. Mix, short rise, bake." },
            biga: { suitable: false, notes: "Too fancy." },
            poolish: { suitable: false, notes: "Too fancy." }
        },
        whatIf: [
            {
                scenario: "Sticks to the pan?",
                outcome: "Not enough oil.",
                solution: "The pan should basically have a shallow pool of olive oil."
            },
            {
                scenario: "Soggy?",
                outcome: "Bake it lower.",
                solution: "Place pan on bottom rack for 10 mins to sear the underside."
            }
        ],
        comparisons: [
            {
                vsStyle: "Sicilian",
                difference: "Grandma is thin and quick. Sicilian is thick and sponge-like."
            }
        ],
        proTips: [
            "Garlic in the Oil: Infuse the pan oil with garlic for that signature smell.",
            "Don't crimp the edges: Let the cheese melt over the side."
        ]
    }
};

const chicagoTavern: DoughStyleDefinition = {
    id: "chicago_tavern_v2",
    name: "Chicago Tavern Style",
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    family: "Flatbreads & Pizzas",
    description: "The TRUE Chicago pizza (what locals actually eat). Ultra-thin, cracker-like crust, square-cut (party cut), and loaded with toppings under the cheese. The dough is rolled flat and cured to ensure zero rise.",
    origin: {
        country: "USA",
        region: "Chicago / Midwest",
        period: "1940s"
    },
    history: "Developed in post-Prohibition taverns as a salty, cracker-like snack to encourage drinking. The 'party cut' allowed patrons to hold a square in one hand and a beer in the other.",
    difficulty: "Medium",
    fermentationType: "cold",
    technicalProfile: {
        hydration: [45, 50],
        salt: [1.5, 2.0],
        oil: [0, 5.0], // Often corn oil or shortening
        sugar: [1.0, 2.0],
        flourStrength: "All Purpose or High Gluten (Variable)",
        ovenTemp: [260, 290],
        recommendedUse: ["Sausage & Giardiniera", "Pepperoni"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix to stiff dough. [Science: Low hydration prevents gluten mobility, ensuring potential for crispness.]",
            "Sheet/Roll flat immediately or after short rest. [Science: Mechanical degassing is key; no alveoli allowed.]",
            "Cure in fridge (24-48h). [Science: This is a 'relieving' phase where hydration equalizes and starch degrades, but no yeast rise is desired.]",
            "Dock heavily and bake. [Science: Docking prevents steam pockets from separating cheese from crust.]"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "Variable",
            pl_ratio: "Dead (No Elasticity)",
            absorption_capacity: "Low",
            protein_type: "AP or High Gluten",
            science_explanation: "The goal is 'Dead Dough'. We want zero elasticity so it rolls paper thin, and zero ovenspring (puff). Low hydration + rolling pin achieves this."
        },
        thermalProfile: {
            oven_type: "Deck / Stone",
            heat_distribution: "Conduction",
            crust_development: "Cracker-like, dry",
            crumb_structure: "None (Laminated/Flat)"
        },
        fermentationScience: {
            yeast_activity: "Inhibited (Dry/Cold)",
            ph_target: "Normal",
            organic_acids: "None",
            enzymatic_activity: "Low"
        }
    },
    tags: ["pizza", "american", "midwest", "thin-crust", "party-cut", "cracker"],
    pairings: {
        canonical: ["Fennel Sausage", "Giardiniera", "Mozzarella"],
        modern: ["Italian Beef"],
        regional: ["Old Style Beer"]
    },
    watchouts: [
        "Bubble formation: If not docked enough, it will bubble and burn.",
        "Soggy center: Sauce must be thick; vegetables should be precooked or sliced thin.",
        "Toughness: If hydration is too low without enough fat, it becomes hard hardtack instead of crisp."
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
        { source: "Pizza City, USA", author: "Steve Dolinsky" }
    ],
    images: {
        hero: "/images/styles/chicago-tavern-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: "The Cure",
                explanation: "After rolling, let the skin sit uncovered in the fridge for 24h. This dries it out to create the cracker texture."
            },
            {
                tip: "Dock Aggressively",
                explanation: "Thousands of holes are needed to prevent separation of layers (pita effect)."
            }
        ],
        what_if: [
            {
                scenario: "Crust is chewy not crisp",
                result: "Hydration too high or didn't cure enough.",
                correction: "Drop hydration to 45% and cure longer."
            }
        ],
        comparative_analysis: [
            {
                target_style: "NYC Slice",
                difference: "Tavern is unleavened (dead yeast effect), cracker thin. NYC is a bread dough.",
                why_choose_this: "Choose Tavern style for a snackable, light party food."
            }
        ],
        q_and_a: [
            {
                question: "Party Cut?",
                answer: "Essential. Small squares allow you to hold a beer in one hand and a slice in the other.",
                context: "Tavern Culture"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Possible",
                notes: "Fermentation is secondary to the drying/curing process."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "45-50%. Extremely dry. We need to prevent steam. Steam creates puff. Puff creates soft. We want a dead, flat, cracker.",
        methodSuitability: {
            direct: { suitable: true, notes: "Often used with a 'dead yeast' approach (long cure)." },
            biga: { suitable: false, notes: "We don't want volume." },
            poolish: { suitable: false, notes: "We don't want extensibility." }
        },
        whatIf: [
            {
                scenario: "It puffed up like a pita?",
                outcome: "You didn't dock it.",
                solution: "Use a docker roller. Perforate the entire surface."
            },
            {
                scenario: "Chewy?",
                outcome: "Too much water or didn't cure.",
                solution: "Let the rolled skins sit in the fridge uncovered for 24h to dehydrate."
            }
        ],
        comparisons: [
            {
                vsStyle: "Deep Dish",
                difference: "Locals eat Tavern. Tourists eat Deep Dish."
            }
        ],
        proTips: [
            "The Sheeter: Pros use a machine to get it paper thin. Use a rolling pin aggressively.",
            "Cornmeal dust: Roll in cornmeal for extra crunch and release."
        ]
    }
};

export const northAmericaStyles: DoughStyleDefinition[] = [
    nycSlice,
    detroitStyle,
    chicagoDeepDish,
    sfSourdough,
    newHavenApizza,
    brazilianGasDeck,
    nycBagel,
    grandmaPizza,
    chicagoTavern
];
