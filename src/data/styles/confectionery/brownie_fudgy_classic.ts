import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * GOURMET FUDGY BROWNIE
 * 
 * Researched and validated content:
 * - Origin: Chicago, USA (1893 Bertha Palmer, Palmer House Hotel)
 * - Technique: Egg-Sugar foam (for papery crust), Hand-folding, Under-baking
 * - Ingredients: 70% Dark Couverture, High-fat butter, Muscovado sugar
 * - Characteristics: Dense, moist, intense chocolate heart, paper-thin crinkle top
 */
export const brownie_fudgy_classic: DoughStyleDefinition = {
    id: "brownie_fudgy_classic",
    name: "Gourmet Fudgy Brownie",
    category: "cookies_confectionery",
    recipeStyle: RecipeStyle.BROWNIE,
    family: "Classic Confectionery",

    origin: {
        country: "USA",
        region: "Chicago",
        period: "1893 (Commissioned by Bertha Palmer for the World's Columbian Exposition)"
    },

    description: "The Gourmet Fudgy Brownie is a masterclass in rich, dense chocolate confectionery. Unlike 'cakey' brownies, which rely on chemical leaveners and high flour ratios, the fudgy version is almost entirely composed of high-quality fats (butter and cocoa butter) and sugars. It features a signature paper-thin, crinkled top crust—achieved by dissolving the sugar perfectly in the eggs—and a dark, moist, and slightly elastic heart that melts on the palette.",

    history: "The brownie was born at the Palmer House Hotel in Chicago. Bertha Palmer asked the chef to create a dessert for the ladies attending the 1893 World's Fair. She wanted something that was 'smaller than a piece of cake but retained cake-like qualities and could be eaten from a lunchbox'. The original featured an apricot glaze and walnuts. Modern variations have shifted towards higher cocoa percentages and the search for the 'perfect crinkle' on top.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "70% Dark Chocolate (Couverture)", percentage: 100 },
        { name: "Unsalted Butter (82%+ fat)", percentage: 80 },
        { name: "Granulated White Sugar", percentage: 80 },
        { name: "Dark Brown Sugar", percentage: 40 },
        { name: "Whole Eggs (Room Temp)", percentage: 60 },
        { name: "All-Purpose Flour", percentage: 40 },
        { name: "Dutch-Processed Cocoa Powder", percentage: 15 },
        { name: "Vanilla Bean Paste", percentage: 3 },
        { name: "Sea Salt", percentage: 1 }
    ],

    technicalProfile: {
        hydration: [40, 50], // Moisture comes purely from eggs and the fats
        salt: [0.5, 1.2],
        oil: [0, 0], // Fat comes from butter and chocolate liquor
        sugar: [100, 130], // High sugar is essential for the fudge texture and top crust
        flourStrength: "Low (AP Flour). We want minimal gluten structure to keep the brownie melting and fudgy",
        ovenTemp: [160, 175], // Moderate heat is vital to prevent the chocolate from burning
        recommendedUse: [
            "Premium Dessert service",
            "Classic Bakery treat",
            "Ice cream accompaniment"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 800, min: 400, max: 2000 }, // Usually baked as a large slab
        fermentationSteps: [
            "Melting: Melt the dark chocolate and butter together in a bain-marie. Let cool slightly. [Science: The cocoa butter and milk solids must be fully integrated to create the 'fudge' base]",
            "The Ribbon Stage: Whisk eggs and sugars for 5-8 minutes until pale, doubled in volume, and forming a 'ribbon' when lifted. [Science: This aerates the brownie and, more importantly, fully dissolves the sugar crystals—the secret to the shiny, paper-top crust]",
            "Union: Gently fold the melted chocolate mixture into the egg foam. [Science: Maintain the air bubbles to provide a light lift without needing baking powder]",
            "Sifting & Folding: Sift flour, cocoa, and salt. Fold in by hand. [Science: Stop the moment no flour is visible. Gluten is the enemy of the fudgy brownie]",
            "Pan Preparation: Line a tray with parchment paper. Pour in the heavy batter. [Science: Even leveling ensures even baking in the dense mass]",
            "Baking: Bake at 170°C for 22-25 minutes. [Science: The center should still be slightly 'wobbly' when removed; carry-over cooking will finish the set while keeping the heart moist]",
            "The Cold Rest: Chill in the fridge for at least 4 hours before slicing. [Science: Solidifies the fats and sets the crumb, allowing for perfectly sharp 'clean' cuts]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W150-180 (Weak)",
            pl_ratio: "0.40",
            absorption_capacity: "High (due to cocoa powder)",
            protein_type: "Soft wheat with low protein content",
            science_explanation: "The flour ratio is extremely low (less than 15% of total weight). It acts as a 'glue' rather than a structure-provider. High protein flour would make the brownie chewy like bread."
        },
        thermalProfile: {
            oven_type: "Conventional Oven",
            heat_distribution: "Moderate radiation and bottom conduction",
            crust_development: "Paper-thin, shiny, and crinkled top; no bottom crust (stays moist)",
            crumb_structure: "Tight, dense, moist, and dark; no visible air cells"
        },
        fermentationScience: {
            yeast_activity: "None",
            ph_target: "pH 6.5 - 7.0 (Alkalized by Dutch cocoa)",
            organic_acids: "Low; focus is on the polyphenols and aromatics of the chocolate",
            enzymatic_activity: "Minimal."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Whisk the Sugar",
                explanation: "If you want the shiny, papery crust, you MUST whisk the eggs and sugar for at least 5 minutes. If you just mix them, the top will be matte and dull."
            },
            {
                tip: "Chocolate is Everything",
                explanation: "Never use 'baking chocolate' or cheap chips. Use a high-quality 70% Couverture (like Callebaut or Valrhona). The cocoa butter content is what provides the 'melty' sensation."
            },
            {
                tip: "Don't Over-bake!",
                explanation: "A brownie that passes the 'toothpick test' (comes out clean) is an over-baked brownie. The toothpick should have specific moist crumbs attached to it."
            },
            {
                tip: "The Salt Contrast",
                explanation: "Chocolate is complex; salt helps unlock the darker, fruitier notes of the cocoa. Use a high-quality sea salt (1%) in the batter."
            },
            {
                tip: "Add espresso",
                explanation: "Adding 1 tsp of instant espresso powder or a shot of intense coffee doesn't make it taste like coffee—it just intensifies the chocolate depth."
            }
        ],
        what_if: [
            {
                scenario: "The brownie is dry and crumbly",
                result: "Too much flour or bake was too long",
                correction: "Reduce bake time and ensure you are using 'melted chocolate' recipes rather than 'cocoa powder only' ones."
            },
            {
                scenario: "The top is dull and not crinkled",
                result: "Sugar was not fully dissolved in the eggs",
                correction: "Whisk the eggs and sugars more vigorously at the start."
            },
            {
                scenario: "The brownie fell apart when I cut it",
                result: "You cut it while it was still warm",
                correction: "Always chill brownies for at least 4 hours before slicing for a professional look."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Cakey Brownie",
                difference: "Cakey uses more flour and baking powder; Fudgy uses more butter/chocolate and zero leavening.",
                why_choose_this: "Choose Fudgy for a more decadent, truffle-like experience."
            },
            {
                target_style: "Blondie",
                difference: "Blondies focus on vanilla and brown butter; Fudgy Brownies are dominated by dark cocoa and chocolate solids.",
                why_choose_this: "Choose Brownie for the ultimate chocolate fix."
            },
            {
                target_style: "Chocolate Lava Cake",
                difference: "Lava cake is designed to be eaten hot with a liquid core; Fudgy Brownie is designed to be eaten cold with a solid but soft heart.",
                why_choose_this: "Choose Brownie for sharing and storage (lasts days)."
            }
        ],
        q_and_a: [
            {
                question: "Why use Dutch Cocoa?",
                answer: "Dutch-processing neutralizes the acidity of the cocoa, resulting in a darker color and a smoother, more mellow chocolate flavor.",
                context: "Ingredients"
            },
            {
                question: "Is it a cake or a cookie?",
                answer: "Technically, brownies are 'bar cookies'. They have more fat and sugar than cake, but are baked in a slab format.",
                context: "Classification"
            },
            {
                question: "Add-ins: Walnuts or Pecans?",
                answer: "Walnuts are traditional (Palmer House), but pecans offer a sweeter, buttery crunch. Toast them first for better results.",
                context: "Variations"
            },
            {
                question: "Why no Baking Powder?",
                answer: "Leavening creates air pockets. A fudgy brownie should have zero air pockets to maintain its dense, creamy mouthfeel.",
                context: "Science"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "No fermentation; direct mixing and baking."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Most of the liquid comes from the volume of the eggs. The sugar also liquefies during baking, acting as the primary solvent that keeps the brownie 'flowing' before it sets.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable for dense results." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You substitute oil for butter",
                outcome: "The brownie will be even moister but will lose the 'buttery' flavor and structural snap when chilled.",
                solution: "Stick to butter for the best flavor/texture balance."
            }
        ],
        comparisons: [
            {
                vsStyle: "Boxed Mix vs Scratch",
                difference: "Scratch brownies use real chocolate liquor and butter; Boxed mixes rely on oil, cocoa powder, and high amounts of cornstarch and preservatives."
            }
        ],
        proTips: [
            "Freeze your brownie slab for 30 mins before cutting with a hot, clean knife—this gives you those perfectly sharp 'Starbucks-style' edges.",
            "A splash of Dark Rum or Bourbon in the batter elevates the chocolate complexity to another level.",
            "Add 'chunks' of chocolate *in addition* to the melted chocolate for pockets of surprise texture.",
            "Bake in a heavy 'Cast Iron' skillet for the ultimate crispy edges and molten center.",
            "Dust with a tiny bit of cocoa powder before serving for a classy finish."
        ]
    },

    tags: ["brownie", "fudgy", "chocolate", "confectionery", "american", "decadent"],

    watchouts: [
        "Over-baking is the #1 sin. Err on the side of 'undone'.",
        "Not using parchment? You'll never get the brownie out of the pan in one piece.",
        "Using cold eggs? They will seize the melted chocolate. Use room temp.",
        "Not whisking long enough? You'll miss the shiny top crust."
    ],

    notes: [
        "The ultimate American chocolate dessert.",
        "Palmer House (Chicago) 1893 heritage.",
        "Focus on fat-to-flour ratio for fudge texture.",
        "Shiny crinkle top is the marker of quality.",
        "Requires 70% dark couverture for premium results."
    ],

    references: [
        {
            source: "The Palmer House Brownie Recipe",
            url: "https://www.palmerhousehiltonhotel.com/about-hotel/the-brownie/",
            author: "Palmer House Chefs",
            year: "2023"
        },
        {
            source: "Bravetart - The Brownie Evolution",
            url: "https://www.seriouseats.com/bravetart-glossy-fudge-brownies",
            author: "Stella Parks",
            year: "2018"
        },
        {
            source: "Cook's Illustrated - Fudgy Brownie Science",
            url: "https://www.americastestkitchen.com/cooksillustrated/",
            author: "Editorial Team",
            year: "2015"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/brownie-fudgy-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["dark_chocolate_70", "walnuts", "salted_butter_normandy", "vanilla_madagascar", "pecan_nuts"]
};
