import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

const baguetteTradition: DoughStyleDefinition = {
    id: "baguette_tradition",
    name: "Baguette Tradition Française",
    category: "bread",
    recipeStyle: RecipeStyle.BAGUETTE,
    origin: {
        country: "France",
        region: "Paris",
        period: "1920s (Protected 1993)"
    },
    description: "The gold standard of French baking. A lean, long loaf with a creamy, open crumb and a crispy, singing crust. Strictly regulated by the 'Décret Pain' of 1993.",
    history: "While long breads existed earlier, the modern baguette crystallized in 1920s Paris. The 1993 Decree protected artisanal methods against industrialization.",
    difficulty: "Hard",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [65, 75],
        salt: [1.8, 2.0],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: "T65 / W240-280",
        ovenTemp: [240, 260],
        recommendedUse: ["Jambon-Beurre", "Table Bread"],
        difficulty: "Hard",
        fermentationSteps: [
            "Autolyse 30-60m. [Science: Hydrates flour fully and activates protease enzymes to relax gluten before mixing, essnetial for extensibility.]",
            "Mix to Windowpane. [Science: Requires well-developed gluten to hold gas during the immense expansion in the oven.]",
            "Bulk Ferment with Folds. [Science: Redistributes yeast and regulates temperature while building structure.]",
            "Shape Cylinders. [Science: Requires 'iron hand in velvet glove' to lengthen without degassing.]"
        ]
    },
    tags: ["french", "lean", "steam-bake", "classic"],
    pairings: {
        canonical: ["Butter", "Brie", "Pâté"],
        modern: ["Avocado"],
        regional: ["Wine"]
    },
    watchouts: [
        "No Ears (Grigne): Bad scoring angle or lack of steam. Steam is mandatory.",
        "Tight crumb: Overmixed or degassed during shaping.",
        "Pale crust: Underbaked. Tradition MUST be 'Bien cuit' (well cooked)."
    ],
    notes: [
        "The 1993 Decree forbids additives. Only flour, water, salt, yeast/levain.",
        "Poolish or cold ferment is often used to boost flavor in this lean dough.",
        "Steam gelatinizes surface starch, creating the shine and crispness."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Décret n°93-1074" }, { source: "Steven Kaplan" }],
    images: {
        hero: "/images/styles/baguette_hero.png",
        dough: "/images/styles/baguette_hero.png",
        crumb: "/images/styles/baguette_hero.png"
    },
    education: {
        pro_tips: [
            {
                tip: "The 45° Score",
                explanation: "To get an 'Ear' (Grigne), score at a shallow angle, not straight down. This allows the crust to lift."
            },
            {
                tip: "Steam is Life",
                explanation: "Steam keeps the crust soft for the first 5 mins, allowing expansion. Without it, the crust hardens instantly and the loaf looks dull."
            }
        ],
        what_if: [
            {
                scenario: "Crumb is tight/dense",
                result: "Overmixed or degassed during shaping.",
                correction: "Handle dough like an 'iron hand in a velvet glove'. Preserve the bubbles."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Ciabatta",
                difference: "Baguette is shaped and scored (controlled). Ciabatta is rustic and high hydration (uncontrolled).",
                why_choose_this: "Choose Baguette for the crispy crust and sandwich uniformity."
            }
        ],
        q_and_a: [
            {
                question: "Why T65 Flour?",
                answer: "It has slightly more ash (mineral) content than T55 (AP), giving the cream-colored crumb and nutty flavor.",
                context: "French Milling Standards"
            }
        ],
        fermentation_methods: [
            {
                method: "Poolish",
                suitability: "Ideal",
                notes: "Poolish adds extensibility (easier shaping) and a sweet, nutty flavor that compliments the lean dough."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "65-75% is the range. Below 65%, the crumb is tight and cottony (sandwich bread). Above 75%, handling becomes difficult for the classic shape. 70% is the sweet spot for 'wild crumb' + 'ear'.",
        methodSuitability: {
            direct: { suitable: true, notes: "The 1993 standard allows it, but flavor is superior with preferment." },
            biga: { suitable: false, notes: "Not traditional. Stiff preferment makes extensibility harder for the long shape." },
            poolish: { suitable: true, notes: "The classic French secret. Adds extensibility and a nutty aroma." }
        },
        whatIf: [
            {
                scenario: "No 'Ear' (Grigne)?",
                outcome: "Scoring angle was too vertical or steam was insufficient.",
                solution: "Score almost parallel to the surface (coupe de lame) and maximize steam."
            },
            {
                scenario: "Crust stays pale?",
                outcome: "Over-fermented (yeast ate all sugar) or temp too low.",
                solution: "Bake at 250°C+. Don't fear the dark 'Bien Cuit' bake."
            }
        ],
        comparisons: [
            {
                vsStyle: "Sourdough",
                difference: "Baguette is mild, creamy, and yeast-driven. Sourdough is acidic. Baguette stales faster."
            }
        ],
        proTips: [
            "The Sound of Singing: A good baguette 'sings' (crackles) as it cools. If it doesn't, the crust isn't crisp enough.",
            "Couche Proofing: Use linen. It wicks moisture from the surface, creating a skin that scores cleanly."
        ]
    }
};

const germanPretzel: DoughStyleDefinition = {
    id: "german_pretzel_laugenbrezel",
    name: "Laugenbrezel (German Pretzel)",
    category: "bread",
    recipeStyle: RecipeStyle.PRETZEL,
    origin: {
        country: "Germany",
        region: "Swabia / Bavaria",
        period: "Middle Ages"
    },
    description: "The iconic knotted bread dipped in lye (sodium hydroxide) solution before baking to create a deep mahogany, shiny skin and distinct alkaline flavor.",
    history: "Monastic origins representing arms crossed in prayer. The lye bath was likely an accidental discovery but became the defining characteristic.",
    difficulty: "Hard",
    fermentationType: "direct",

    technicalProfile: {
        hydration: [50, 55],
        salt: [2.0, 2.5],
        oil: [2, 4], // Butter or Lard
        sugar: [0, 1], // Malt
        flourStrength: "Type 550 / W240",
        ovenTemp: [220, 240],
        recommendedUse: ["Beer Snack", "Weisswurst accompaniment"],
        difficulty: "Hard",
        fermentationSteps: [
            "Mix stiff dough. [Science: Low hydration holds the intricate knot shape.]",
            "Short bulk. [Science: Over-fermentation leads to puffiness that ruins the definition.]",
            "Shape and Skin Formation. [Science: Uncovered rest allows a skin to form, which reacts better with the Lye.]",
            "Lye Dip (NaOH). [Science: The Maillard reaction goes into overdrive at alkaline pH, creating the deep brown color instantly.]"
        ]
    },
    tags: ["alkaline", "pretzel", "germany", "snack"],
    pairings: {
        canonical: ["Weisswurst", "Sweet Mustard", "Helles Beer"],
        modern: ["Cheese dip"],
        regional: ["Obatzda (Cheese spread)"]
    },
    watchouts: [
        "Dull Color: Used baking soda instead of Lye. Soda works but won't give the true 'Laugen' finish.",
        "Chemical Burn: Lye is caustic! Wear gloves and goggles.",
        "Blisters: Dough meant to be smooth? Don't ferment too long."
    ],
    notes: [
        "The fat (butter/lard) keeps the crumb soft despite the stiff dough.",
        "The 'belly' is slashed to allow controlled expansion.",
        "Salt is sprinkled AFTER dipping, before baking."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Bavarian Bakers Guild" }],
    images: {
        hero: "/images/styles/baguette_hero.png",
        dough: "/images/styles/baguette_hero.png",
        crumb: "/images/styles/baguette_hero.png"
    },
    education: {
        pro_tips: [
            {
                tip: "The Lye Bath",
                explanation: "Real Pretzels need Lye (NaOH). Baking soda works but you won't get the deep mahogany color or the pro flavor."
            },
            {
                tip: "Safety First",
                explanation: "Lye is caustic. Wear gloves and goggles. Add Lye to water, NEVER water to Lye (exothermic reaction)."
            }
        ],
        what_if: [
            {
                scenario: "Surface is blistered",
                result: "Dough wasn't skinned properly.",
                correction: "Let the shaped pretzels sit uncovered for 30 mins to form a dry skin before dipping."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Bagel",
                difference: "Pretzel is dipped in alkali (Lye) then baked. Bagel is boiled in water/malt then baked.",
                why_choose_this: "Choose Pretzel for the distinct Lye flavor and snack shape."
            }
        ],
        q_and_a: [
            {
                question: "Is Lye safe?",
                answer: "Yes, once baked. The heat converts the sodium hydroxide into harmless carbonates.",
                context: "Food Chemistry"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "Traditional Swabian recipes use a direct dough with a stiff preferment (Vorteig) often."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "50-55% is strictly low. We need a dense, uniform crumb without large air pockets. High hydration would make the 'rolling' impossible and the knot would fuse together.",
        methodSuitability: {
            direct: { suitable: true, notes: "Standard." },
            biga: { suitable: true, notes: "Often used as 'Vorteig' (Pre-dough) for flavor dept." },
            poolish: { suitable: false, notes: "Makes dough too extensible and soft for knotting." }
        },
        whatIf: [
            {
                scenario: "Pretzel turned white?",
                outcome: "You used Baking Soda, not Lye.",
                solution: "Lye (NaOH) is the only way to get the mahogany color. Be safe, but use it."
            },
            {
                scenario: "Blisters all over the skin?",
                outcome: "Proofed too long or didn't form a skin.",
                solution: "Air-dry the shaped pretzels for 30-60 mins (skinning) before the dip."
            }
        ],
        comparisons: [
            {
                vsStyle: "Bagel",
                difference: "Pretzel is dipped in alkali and baked dry. Bagel is boiled in water and baked wet."
            }
        ],
        proTips: [
            "Dip Cold: Chill or freeze the pretzels before dipping. It prevents them from flopping in the bath.",
            "Salt immediately: Rock salt must go on while the lye is wet."
        ]
    }
};

const briocheFrancaise: DoughStyleDefinition = {
    id: "brioche_francaise_aop",
    name: "Brioche Française AOP",
    category: "enriched_bread",
    recipeStyle: RecipeStyle.BRIOCHE,
    origin: {
        country: "France",
        region: "Normandy",
        period: "17th Century"
    },
    description: "The queen of enriched breads. Contains >50% butter to flour weight. Ethereal, shreddable crumb encased in a thin, golden crust.",
    history: "Normandy is famous for butter. Brioche evolved from a festive church bread to a daily luxury. 'Brioche à tête' is the classic shape.",
    difficulty: "Expert",
    fermentationType: "cold",

    technicalProfile: {
        hydration: [55, 60], // Milk/Eggs
        salt: [2.0, 2.2],
        oil: [50, 60], // Butter!
        sugar: [10, 15],
        flourStrength: "W350+ (High Protein)",
        ovenTemp: [170, 190],
        recommendedUse: ["Burger Buns", "French Toast", "Breakfast"],
        difficulty: "Expert",
        fermentationSteps: [
            "Intensive Mix (Cold). [Science: Friction heats dough rapidly; starting cold prevents butter melting before emulsification.]",
            "Add Butter Slowly. [Science: Emulsifying fat into water-based dough requires patience; rushing breaks the emulsion (greasy dough).]",
            "Cold Retard 12h+. [Science: Solidifies the butter, allowing the dough to be handled and shaped without turning into soup.]"
        ]
    },
    tags: ["butter", "enriched", "french", "pastry"],
    pairings: {
        canonical: ["Jam", "Coffee"],
        modern: ["Foie Gras"],
        regional: ["Pralines (Lyon)"]
    },
    watchouts: [
        "Leaking Butter: Dough got too hot (>24°C) during mix. Chill everything.",
        "Dense crumb: Underproofed. Enriched dough takes a LONG time to rise (osmotic pressure on yeast).",
        "Collapse: Weak flour. You need massive protein to hold 50% fat."
    ],
    notes: [
        "Osmotolerant yeast (Gold label) is recommended for high sugar/fat.",
        "Egg wash is mandatory for the gloss.",
        "Can be used for savory (Saucisson Brioché) or sweet."
    ],
    isPro: true,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "INRA Science of Brioche" }],
    images: {
        hero: "/images/styles/pane-toscano.png",
        dough: "/images/styles/pane-toscano.png",
        crumb: "/images/styles/pane-toscano.png"
    },
    education: {
        pro_tips: [
            {
                tip: "Cold Butter Only",
                explanation: "Butter must be pliable but cold. If it melts, you lose the emulsion and get a greasy rock."
            },
            {
                tip: "Osmotolerant Yeast",
                explanation: "Standard yeast struggles with high sugar (osmotic pressure). Use 'Gold' label yeast or double the amount of fresh yeast."
            }
        ],
        what_if: [
            {
                scenario: "Dough creates a pool of butter",
                result: "Emulsion broke. Dough got too hot.",
                correction: "Chill immediately. Next time, mix in a cold room or use ice water."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Challah",
                difference: "Brioche is dairy (Butter/Milk). Challah is pareve (Oil/Water) and strictly kosher.",
                why_choose_this: "Choose Brioche for the ultimate richness."
            }
        ],
        q_and_a: [
            {
                question: "Why mix for so long?",
                answer: "Gluten must be fully developed (windowpane) BEFORE adding butter, or the fat will coat the protein and stop gluten formation.",
                context: "Enriched Dough Science"
            }
        ],
        fermentation_methods: [
            {
                method: "Poolish",
                suitability: "Ideal",
                notes: "A sponge/poolish helps get fermentation moving before the sugar/fat shock."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "Nominally 60%, but effectively 110% due to butter. The 'hydration' comes from fat. We need strong flour to hold this emulsion. If you add more water, the gluten slides apart.",
        methodSuitability: {
            direct: { suitable: true, notes: "Works if yeast is osmotolerant." },
            biga: { suitable: false, notes: "Not typical." },
            poolish: { suitable: true, notes: "Excellent for kickstarting fermentation before fat addition." }
        },
        whatIf: [
            {
                scenario: "Butter leaks out in oven?",
                outcome: "Dough got too hot (>24°C) during mix, or proofed too hot.",
                solution: "Prove at room temperature (not a hot box). Chill dough before baking."
            },
            {
                scenario: "Dense/Heavy?",
                outcome: "Gluten wasn't developed BEFORE butter addition.",
                solution: "You must reach windowpane with flour/egg/sugar FIRST. Then add butter."
            }
        ],
        comparisons: [
            {
                vsStyle: "Challah",
                difference: "Brioche is Butter (Dairy). Challah is Oil (Pareve). Brioche is richer."
            }
        ],
        proTips: [
            "Cold Ingredients: Eggs and milk should be fridge cold. Friction will heat the dough enough.",
            "The Slap: If mixing by hand, you must 'slap and fold' to incorporate the butter. It's messy but builds strength."
        ]
    }
};

const painCampagne: DoughStyleDefinition = {
    id: "pain_de_campagne",
    name: "Pain de Campagne",
    category: "bread",
    recipeStyle: RecipeStyle.COUNTRY_LOAF,
    origin: {
        country: "France",
        region: "Nationwide",
        period: "Ancient"
    },
    description: "French Country Bread. A large sourdough boule made with wheat and a touch of rye (5-15%). Thick crust, greyish crumb, long shelf life.",
    history: "The communal village oven bread. Families baked massive loaves once a week. The rye kept it moist and the acidity prevented spoilage.",
    difficulty: "Medium",
    fermentationType: "levain",

    technicalProfile: {
        hydration: [70, 75],
        salt: [1.8, 2.0],
        oil: [0, 0],
        sugar: [0, 0],
        flourStrength: "T80 (High Extraction)",
        ovenTemp: [230, 250],
        recommendedUse: ["Tartines", "Cheese Board", "Soup"],
        difficulty: "Medium",
        fermentationSteps: [
            "Mix with Sourdough & Rye. [Science: Rye contains pentosans which absorb water and keep the crumb moist for days.]",
            "Bulk Ferment. [Science: Long bulk develops the complex acetic/lactic flavor profile.]",
            "Bake Dark. [Science: Thick crust acts as a barrier against staling.]"
        ]
    },
    tags: ["sourdough", "rye", "rustic", "french"],
    pairings: {
        canonical: ["Charcuterie", "Camembert"],
        modern: ["Avocado Toast"],
        regional: ["Rillettes"]
    },
    watchouts: [
        "Gummy rye: 100% rye is tricky, but 10% is easy. Don't overmix rye.",
        "Too Sour: Levain Maintenance. Feed it frequently if you want mild flavor.",
        "Flat loaf: Overproofed. Sourdough degrades gluten over time."
    ],
    notes: [
        "T80 flour (High Extraction) is traditional, containing some bran but mostly endosperm.",
        "Often dusted with flour before scoring for contrast.",
        "The signature 'Polka' score is a grid pattern."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Poilâne Heritage" }],
    images: {
        hero: "/images/styles/pane-toscano.png",
        dough: "/images/styles/pane-toscano.png",
        crumb: "/images/styles/pane-toscano.png"
    },
    education: {
        pro_tips: [
            {
                tip: "The Rye Effect",
                explanation: "Adding 10% Rye improves shelf life (pentosans hold water) and fermentation (enzymes feed yeast) without getting sticky."
            },
            {
                tip: "High Extraction Flour",
                explanation: "Use T80 or mix Bread Flour with 15% Whole Wheat to mimic the 'bise' flour of the French countryside."
            }
        ],
        what_if: [
            {
                scenario: "Bread is too sour",
                result: "Sourdough was too acetic.",
                correction: "Feed starter frequently and ferment at warmer temps (26°C) to favor lactic acid (milky)."
            }
        ],
        comparative_analysis: [
            {
                target_style: "White Sourdough",
                difference: "Campagne has Whole Wheat/Rye for a rustic, nuttier profile. White is milder.",
                why_choose_this: "Choose Campagne for complex flavor that pairs well with cheese."
            }
        ],
        q_and_a: [
            {
                question: "Why 'Couche' proofing?",
                answer: "Linen clothes wick moisture from the skin, allowing for easier scoring and a crisper crust.",
                context: "Traditional Methods"
            }
        ],
        fermentation_methods: [
            {
                method: "Sourdough",
                suitability: "Authentic",
                notes: "The soul of this bread is the Levain."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "70-75% is high for this flour type (T80), but the bran absorbs more water. The result is a moist, custardy crumb that lasts for a week.",
        methodSuitability: {
            direct: { suitable: false, notes: "Lacks character." },
            biga: { suitable: false, notes: "Not acidic enough." },
            poolish: { suitable: false, notes: "Not acidic enough." }
        },
        whatIf: [
            {
                scenario: "Bread is flat?",
                outcome: "Overproofed. Sourdough enzymes degrade gluten.",
                solution: "Watch the dough, not the clock. It should be domed and airy."
            },
            {
                scenario: "Not sour enough?",
                outcome: "Levain was too young.",
                solution: "Use a stiff starter and ferment longer at cooler temps."
            }
        ],
        comparisons: [
            {
                vsStyle: "Whole Wheat",
                difference: "Campagne is high extraction (sifted), so it's lighter than 100% Whole Wheat."
            }
        ],
        proTips: [
            "Use the Rye: Even 5% Rye in the starter acts as 'steroids' for the yeast activity.",
            "Score Boldly: Rustic breads need deep scores to open up."
        ]
    }
};

const danishRye: DoughStyleDefinition = {
    id: "rugbrod_danish",
    name: "Rugbrød (Danish Rye)",
    category: "bread",
    recipeStyle: RecipeStyle.RYE,
    origin: {
        country: "Denmark",
        region: "Nationwide",
        period: "Viking Age"
    },
    description: "Dense, dark, seed-packed rye bread. Baked in a rectangular tin. The foundation of Smørrebrød.",
    history: "Rye grows well in cold wet climates where wheat fails. It became the staple of Scandinavia.",
    difficulty: "Medium",
    fermentationType: "levain",

    technicalProfile: {
        hydration: [80, 90], // High due to rye absorption
        salt: [1.8, 2.2],
        oil: [0, 2],
        sugar: [1, 3], // Malt/Molasses
        flourStrength: "Rye Flour (Low Gluten)",
        ovenTemp: [180, 200], // Low and slow
        recommendedUse: ["Smørrebrød", "Liver Paste"],
        difficulty: "Medium",
        fermentationSteps: [
            "Sourdough essential. [Science: Rye is high in amylase enzymes. Without the acidity of sourdough to inhibit them, the crumb turns into starch paste (starch attack).]",
            "Soak seeds. [Science: Prevents seeds from stealing water from the dough crumb.]",
            "No Kneading. [Science: Rye has pentosans, not gluten. Kneading makes a sticky mess and does nothing useful.]"
        ]
    },
    tags: ["rye", "nordic", "seeds", "healthy"],
    pairings: {
        canonical: ["Pickled Herring", "Leverpostej"],
        modern: ["Hummus"],
        regional: ["Curry Salad"]
    },
    watchouts: [
        "Gumminess: Baked too fast or cut too warm. Rye needs to set for 24h before slicing.",
        "Flying crust: Top separates from crumb. Proofed too fast.",
        "Brick-like: Leavening failure. Verify starter activity."
    ],
    notes: [
        "Must be sliced thin.",
        "Often uses cracked rye kernels (kerner) for texture.",
        "Keeps for weeks due to acidity and rye moisture retention."
    ],
    isPro: false,
    source: "official",
    createdAt: "2025-01-01",
    releaseDate: "2025-01-01",
    references: [{ source: "Nordic Food Lab" }],
    images: {
        hero: "/images/styles/pane-toscano.png",
        dough: "/images/styles/pane-toscano.png",
        crumb: "/images/styles/pane-toscano.png"
    },
    education: {
        pro_tips: [
            {
                tip: "Must use Sourdough",
                explanation: "Rye starch degrades easily (starch attack). The acidity of sourdough inhibits amylase enzymes, preventing the bread from turning to mush."
            },
            {
                tip: "Slice Next Day",
                explanation: "Rye needs 24-48h to set its structure. Slicing warm results in a gummy knife and ruined loaf."
            }
        ],
        what_if: [
            {
                scenario: "Crumb is gummy/wet",
                result: "Starch attack or sliced too soon.",
                correction: "Ensure starter is acidic enough and wait 24h before cutting."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Pumpernickel",
                difference: "Rugbrød uses seeds/kernels and bakes faster. Pumpernickel is steamed for 12h+ to caramelize.",
                why_choose_this: "Choose Rugbrød for the quintessential open-faced sandwich base."
            }
        ],
        q_and_a: [
            {
                question: "No Knead?",
                answer: "Correct. Rye has pentosans, not gluten. Kneading just makes a sticky mess. Mix until combined.",
                context: "Rye Chemistry"
            }
        ],
        fermentation_methods: [
            {
                method: "Sourdough",
                suitability: "Authentic",
                notes: "Commercial yeast alone will likely result in a failed, gummy loaf due to lack of acidity."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "80-90%? Yes. Rye has no gluten to hold shape, so 'hydration' is misleading. It's a mud/paste. The pentosans absorb huge amounts of water.",
        methodSuitability: {
            direct: { suitable: false, notes: "Will result in gummy 'starch attack'." },
            biga: { suitable: false, notes: "Need high acidity (Sourdough)." },
            poolish: { suitable: false, notes: "Need acidity." }
        },
        whatIf: [
            {
                scenario: "Gummy/Sticky slice?",
                outcome: "Starch Attack (Amylase won).",
                solution: "Your starter wasn't acidic enough to stop the enzymes. Or you sliced it warm. Wait 24h."
            },
            {
                scenario: "Brick?",
                outcome: "Dead yeast or too dry.",
                solution: "This is a wet batter poured into a tin. Don't make it stiff."
            }
        ],
        comparisons: [
            {
                vsStyle: "Wheat Bread",
                difference: "Rye is pentosan-based (gel), Wheat is gluten-based (elastic). Different universe."
            }
        ],
        proTips: [
            "Soak the seeds: Dry seeds suck water from the dough, making it dry. Soak them overnight.",
            "The Wait: The flavor peaks after 48h. Eat it then."
        ]
    }
};

export const europeStyles: DoughStyleDefinition[] = [
    baguetteTradition,
    germanPretzel,
    briocheFrancaise,
    painCampagne,
    danishRye
];
