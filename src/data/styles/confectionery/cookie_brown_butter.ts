import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * BROWN BUTTER & SEA SALT COOKIE
 * 
 * Researched and validated content:
 * - Origin: Modern Artisan Bakeries (2010s - Sarah Kieffer, Pan-banging fame)
 * - Technique: Beurre Noisette (Browned Butter), Muscovado sugar enrichment
 * - Ingredients: Toasted Milk Solids, Maldon Sea Salt, 70% Dark Chocolate
 * - Characteristics: Deeply nutty, complex toffee notes, savory/sweet contrast
 */
export const cookie_brown_butter: DoughStyleDefinition = {
    id: "cookie_brown_butter",
    name: "Brown Butter & Sea Salt Cookie",
    category: "cookies_confectionery",
    recipeStyle: RecipeStyle.COOKIE_BROWN_BUTTER,
    family: "Artisan Cookies",

    origin: {
        country: "USA / UK",
        region: "Global Artisanal Hubs",
        period: "2010s–Present"
    },

    description: "The Brown Butter & Sea Salt Cookie is the 'adult' version of the classic chocolate chip. It is defined by the use of Beurre Noisette (browned butter), where the milk solids are toasted until they smell like hazelnuts. Combined with high-quality dark chocolate and a generous finishing sprinkle of sea salt flakes, it offers a sophisticated profile of toffee, smoke, and savory depth that standard cookies lack.",

    history: "While brown butter has been a staple of French pastry (Financials, Madeleines) for centuries, its application to the American chocolate chip cookie became a viral artisanal trend in the 2010s. Influenced by the 'third-wave' coffee culture and bakeries like Hart Bageri (Copenhagen) and various Brooklyn spots, it represents the shift towards 'complex' sweetness where salt and bitterness are used to balance the sugar.",

    difficulty: "Medium",
    fermentationType: "cold",

    base_formula: [
        { name: "Unbleached Pastry/AP Flour", percentage: 100 },
        { name: "Browned Unsalted Butter (Beurre Noisette)", percentage: 75 },
        { name: "Muscovado or Dark Brown Sugar", percentage: 65 },
        { name: "Caster Sugar", percentage: 35 },
        { name: "Whole Eggs + 1 Yolk", percentage: 25 },
        { name: "70% Dark Chocolate Discs", percentage: 100 },
        { name: "Sea Salt Flakes (Maldon)", percentage: 2 },
        { name: "Vanilla Bean Paste", percentage: 2.5 },
        { name: "Baking Soda", percentage: 0.8 }
    ],

    technicalProfile: {
        hydration: [18, 22],
        salt: [1.5, 2.5],
        oil: [0, 0], // Fat is purely from browned butter
        sugar: [90, 110],
        flourStrength: "Medium (W220). Needs enough structure to prevent the browned butter from making it too flat",
        ovenTemp: [175, 190],
        recommendedUse: [
            "Artisanal Café service",
            "High-end gift packaging",
            "Specialty dessert pairings"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 65, min: 50, max: 90 },
        fermentationSteps: [
            "Browning the Butter: Melt butter in a light-colored pan over medium heat. Continue cooking past the 'sizzle' until milk solids turn golden brown and smell nutty. [Science: The Maillard reaction occurs between amino acids and reducing sugars in the milk solids, creating complex pyrazines and furans]",
            "Cooling: Transfer the brown butter (including all brown bits) to a bowl and let cool to room temperature. [Science: If used hot, it will melt the sugar instantly and destroy the texture]",
            "Whisking: Whisk sugars with the room-temp brown butter until combined. Add eggs and yolk. [Science: Browned butter has no water content left; adding a yolk compensates with extra lecithin for emulsion]",
            "Dry Union: Fold in flour, salt, and baking soda. [Science: Minimal mixing is required to maintain a delicate crumb]",
            "Chocolate Pools: Fold in large chocolate discs. [Science: Large discs create 'layers' of chocolate rather than individual chips]",
            "Cold Maturation: Chill the dough for 48 hours. [Science: Crucial step. The flavor of the browned butter intensifies as the sugars and proteins in the dough interact during the long rest]",
            "Baking & Salting: Scoop and bake until deep golden. Immediately sprinkle with sea salt flakes while the surface is still 'tacky'. [Science: The salt acts as a flavor enhancer, specifically cutting through the richness of the toasted milk solids]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W220 (Medium)",
            pl_ratio: "0.50",
            absorption_capacity: "Moderate",
            protein_type: "Soft wheat with good extensibility",
            science_explanation: "The dough relies on the high fat content and sugar concentration to regulate its spread. A medium-protein flour ensures it doesn't become a pancake."
        },
        thermalProfile: {
            oven_type: "Convection Oven (preferred for even color)",
            heat_distribution: "Uniform radiation",
            crust_development: "Deeply caramelized 'lace' edges; soft and chewy heart",
            crumb_structure: "Dense, slightly 'fudgy' near the chocolate pools"
        },
        fermentationScience: {
            yeast_activity: "None",
            ph_target: "pH 6.5 - 7.0 (Neutrally balanced)",
            organic_acids: "Low; focus is on the toasted milk proteins (Maillard products)",
            enzymatic_activity: "High during 48h rest; specifically focused on sugar release for the dark toffee crust."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Don't leave the bits!",
                explanation: "The 'bits' at the bottom of the pan are the browned milk solids—that's where all the flavor is. Scrape every single speck into your dough."
            },
            {
                tip: "Maldon is Mandatory",
                explanation: "Fine salt will just make the cookie salty. Flake salt (like Maldon) provides 'explosions' of saltiness that contrast with the sweet toffee notes."
            },
            {
                tip: "Add water back",
                explanation: "Butter is approx 15-20% water. When you brown it, that water evaporates. Add 1 tablespoon of water back to the dough during the egg stage to restore the moisture balance."
            },
            {
                tip: "48 hours is the Magic",
                explanation: "A brown butter cookie baked immediately is good; one baked after 48h is world-class. The flavors deepen from 'sweet' to 'savory-caramel'."
            },
            {
                tip: "Light-colored pan",
                explanation: "Always use a stainless steel or light ceramic pan to brown butter. In a dark pan, it's impossible to see the color correctly, and you might burn the solids."
            }
        ],
        what_if: [
            {
                scenario: "The butter turned black and smells burnt",
                result: "Heat was too high or it stayed on the heat too long",
                correction: "Discard and start over. Burnt butter is bitter and unpleasant, not nutty."
            },
            {
                scenario: "The cookies are very greasy",
                result: "The browned butter was used while still hot/liquid",
                correction: "Ensure the butter is cooled to a 'soft-solid' state before mixing with sugars."
            },
            {
                scenario: "The chocolate didn't form pools",
                result: "You used 'oven-stable' chips instead of couverture chocolate",
                correction: "Use 70% dark chocolate bars or discs meant for melting."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Classic Soft Cookie",
                difference: "Brown Butter style is much more intensely flavored (nutty/toffee) and uses higher quality chocolate and salt flakes.",
                why_choose_this: "Choose this for a more 'refined' or 'gourmet' palate."
            },
            {
                target_style: "Financial (French)",
                difference: "Financial is a cake-like almond pastry using brown butter; this is a solid cookie with the same fat profile.",
                why_choose_this: "Choose this for a traditional cookie format with high-end French pastry flavors."
            },
            {
                target_style: "Oatmeal Raisin",
                difference: "Oatmeal is bready and textured; Brown Butter is smooth, rich, and focuses on the fat/sugar interaction.",
                why_choose_this: "Choose this for maximum flavor impact."
            }
        ],
        q_and_a: [
            {
                question: "What is Beurre Noisette?",
                answer: "French for 'Hazelnut Butter', referring to the aroma and color achieved when milk solids in the butter are toasted.",
                context: "Technique"
            },
            {
                question: "Why use Muscovado sugar?",
                answer: "It contains more natural molasses than standard brown sugar, complementing the toasted notes of the butter.",
                context: "Ingredients"
            },
            {
                question: "Does the salt on top melt?",
                answer: "No, sea salt flakes are designed to stay solid. They provide a crunch and a sudden burst of salinity.",
                context: "Texture"
            },
            {
                question: "Can I use salted butter?",
                answer: "It's better to use unsalted butter so you can precisely control the salt levels, especially with the flakes on top.",
                context: "Ingredients"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Possible",
                notes: "Acceptable for home use, but lacks the professional depth of matured dough."
            },
            {
                method: "Direct",
                suitability: "Ideal", // Reference to chill stage
                notes: "24-48h chilling is the hallmark of the artisan brown butter cookie."
            },
            {
                method: "Hybrid",
                suitability: "Not Recommended",
                notes: "N/A"
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Extremely low. Much of the water in the butter is lost during browning. The primary liquids are the eggs and the moisture-rich muscovado sugar.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable if butter is cooled correctly." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You omit the 48h chill",
                outcome: "The cookie will be flatter and the nutty flavor of the butter won't be as 'married' to the dough.",
                solution: "At least chill for the time it takes the butter to fully solidify again (2h)."
            }
        ],
        comparisons: [
            {
                vsStyle: "Artisan vs Commercial",
                difference: "Artisan uses browned butter, hand-chopped chocolate, and Maldon salt; Commercial uses vegetable shortening, artificial vanilla, and chips."
            }
        ],
        proTips: [
            "Store your browned butter in the fridge in a clear jar to admire the 'bits' sediment before use.",
            "Add a half-teaspoon of instant espresso powder to the dough—it makes the chocolate taste 'more like chocolate'.",
            "Use a large ring-cutter to 'scoot' the cookies right after they come out of the oven to make them perfectly round.",
            "The best chocolate for this is 70% acidity-forward (like Valrhona Caraïbe).",
            "Serve with a glass of cold, high-fat whole milk or a strong espresso."
        ]
    },

    tags: ["cookies", "brown butter", "beurre noisette", "sea salt", "artisan", "gourmet"],

    watchouts: [
        "Butter over-browning? It will turn into ash—be vigilant!",
        "Sugar not dissolving? whisk longer with the butter before adding dry ingredients.",
        "No sea salt flakes? Standard salt will be too intense in specific bites.",
        "Oven too hot? The milk solids in the dough will burn faster than a normal cookie."
    ],

    notes: [
        "Modern classic of 'Third-Wave' bakeries.",
        "Uses Beurre Noisette (Browned Butter).",
        "Enhanced by Muscovado sugar and Maldon salt.",
        "Requires 48h cold maturation for peak flavor.",
        "Hand-chopped 70% dark chocolate only."
    ],

    references: [
        {
            source: "The Pan-Biking Cookie Book",
            url: "https://www.sarahkieffer.com/",
            author: "Sarah Kieffer",
            year: "2020"
        },
        {
            source: "Modern French Pastry - Brown Butter Science",
            url: "https://www.lfb.it/pasticceria-francese-moderna/",
            author: "Leonardo Di Carlo",
            year: "2018"
        },
        {
            source: "Bon Appétit - The Ultimate Brown Butter Cookie",
            url: "https://www.bonappetit.com/recipe/brown-butter-and-toffee-chocolate-chip-cookies",
            author: "Rick Martinez",
            year: "2017"
        }
    ],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/brown-butter-cookie-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["dark_chocolate_70", "salted_butter_normandy", "vanilla_madagascar", "pecan_nuts", "walnuts"]
};
