import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CLASSIC POUND CAKE (QUATRE-QUARTS)
 * 
 * Researched and validated content:
 * - Origin: UK (Early 1700s) / France (Quatre-Quarts)
 * - Technique: Intense Creaming (Cold Start), Mechanical Leavening (Air), Basting
 * - Ingredients: Equal weights (Butter, Sugar, Eggs, Flour), No baking powder (traditional)
 * - Characteristics: Dense, velvet-like crumb, intensely buttery, golden 'burst' top
 */
export const pound_cake_classic: DoughStyleDefinition = {
    id: "pound_cake_classic",
    name: "Classic Pound Cake (Quatre-Quarts)",
    category: "cookies_confectionery",
    recipeStyle: RecipeStyle.POUND_CAKE,
    family: "Classic Confectionery",

    origin: {
        country: "United Kingdom",
        region: "Northern Europe / England",
        period: "Early 1700s (First recorded in English cookbooks)"
    },

    description: "Pound Cake is the mother of all European butter cakes. In its truest form, it follows the '1:1:1:1' ratio: one pound each of flour, butter, sugar, and eggs. It is a masterpiece of mechanical leavening, where the rise is achieved through the physical aeration of butter and eggs rather than chemical agents. The result is a cake with a tight, velvety crumb, a rich buttery aroma, and a characteristic 'crack' down the center of the golden loaf.",

    history: "The recipe first appeared in 'The Art of Cookery' by Hannah Glasse (1747). In France, it is known as 'Quatre-Quarts' (Four-Quarters). Because many people in the 1700s were illiterate, the simple 1:1:1:1 ratio made the recipe easy to remember. Over time, salt, vanilla, and citrus zests were added to cut through the richness, but the fundamental architecture of the dough remained the same for over 300 years.",

    difficulty: "Medium",
    fermentationType: "direct",

    base_formula: [
        { name: "All-Purpose Flour (Weak)", percentage: 100 },
        { name: "Unsalted Butter (High Fat 82%+)", percentage: 100 },
        { name: "Granulated Sugar (Extra Fine)", percentage: 100 },
        { name: "Whole Eggs (Room Temp)", percentage: 100 },
        { name: "Vanilla Bean Paste", percentage: 2.5 },
        { name: "Sea Salt", percentage: 1.2 }
    ],

    technicalProfile: {
        hydration: [45, 55], // Moisture comes purely from the eggs
        salt: [1.0, 1.5],
        oil: [0, 0], // Fat is 100% butter
        sugar: [90, 110], // Follows the 1:1 ratio with flour
        flourStrength: "Weak (W130-160). Cake flour is ideal to prevent a 'bready' structure",
        ovenTemp: [150, 165], // Low and slow bake is essential for such a dense, tall mass
        recommendedUse: [
            "Traditional Afternoon Tea",
            "Base for Trifle",
            "Classic breakfast cake (Bolo de café)"
        ],
        difficulty: "Medium",
        ballWeight: { recommended: 1000, min: 500, max: 2000 }, // Usually baked as a 1kg loaf
        fermentationSteps: [
            "Temperature Prep: Ensure butter and eggs are at exactly 18-20°C. [Science: Butter is most 'plastic' at this temp, allowing for the maximum capture of air bubbles during creaming]",
            "The Creaming Stage: Beat butter and sugar for 8-10 minutes on medium-high speed. [Science: We are creating millions of tiny air pockets. The more air captured here, the better the cake will rise without baking powder]",
            "The Egg Emulsion: Add eggs one at a time, beating for 1 minute between each. [Science: Lecithin in yolks must slowly bond the fat with the egg water. If added too fast, the batter will 'split' (curdle), resulting in a heavy, greasy cake]",
            "Adding Aromatics: Fold in vanilla and salt. [Science: Enhances the butter profile]",
            "The Flour Fold: Gently fold in the sifted flour. Use a spatula, not a mixer. [Science: Minimal mixing prevents gluten development, ensuring the VELVET crumb that defines a pound cake]",
            "The Pan Notch: Fill a loaf tin, then run a knife coated in melted butter down the center. [Science: Creates a weakened line that allows the cake to 'bloom' and crack in the center rather than at the sides]",
            "Baking: Bake at a low 160°C for 50-65 minutes. [Science: Intensive central heat is required to set the protein network while the air expands, without burning the exterior]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W130-150 (Very Weak)",
            pl_ratio: "0.40",
            absorption_capacity: "Low",
            protein_type: "Soft wheat with low glutenin levels",
            science_explanation: "The high fat content (100% of flour weight) 'coats' the starch, making water absorption difficult. A weak flour ensures that the resulting structure is delicate and 'melts' on the tongue."
        },
        thermalProfile: {
            oven_type: "Conventional Oven (Bottom/Top heat)",
            heat_distribution: "Moderate convection",
            crust_development: "Deep golden, thick, slightly chewy exterior; characteristic central burst",
            crumb_structure: "Dense, tight, uniform, and velvety; zero large air pockets"
        },
        fermentationScience: {
            yeast_activity: "None",
            ph_target: "pH 6.5 - 7.0",
            organic_acids: "None; flavor is driven by the butyrate compounds in the butter",
            enzymatic_activity: "Minimal."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Beat long, Fold short",
                explanation: "The rise comes from the creaming stage. Beat the butter and sugar until it looks like white clouds. But once the flour goes in, touch it as little as possible."
            },
            {
                tip: "Warm your eggs",
                explanation: "If you add cold eggs to creamed butter, the butter will solidify into small chunks, and your emulsion will break. Put cold eggs in warm water for 5 minutes before use."
            },
            {
                tip: "The Melted Butter Line",
                explanation: "Professional pastry chefs pipe a thin line of softened butter down the center of the batter before baking. This guarantees that beautiful, iconic split on the top of the loaf."
            },
            {
                tip: "Wrap when warm",
                explanation: "Once the cake has cooled for 20 minutes, wrap it tightly in plastic wrap while still warm. The trapped steam will keep the pound cake moist for a week."
            },
            {
                tip: "Quality of Butter",
                explanation: "In a Pound Cake, butter is not an ingredient; butter IS the cake. Use the highest quality cultured butter you can find (82-84% fat)."
            }
        ],
        what_if: [
            {
                scenario: "The cake is heavy and has a 'wet' bottom layer",
                result: "The emulsion broke during the egg addition (curdling)",
                correction: "Ensure butter and eggs are at room temp and add eggs much more slowly next time."
            },
            {
                scenario: "The cake is dry and crumbly",
                result: "Flour protein was too high or bake was too long",
                correction: "Use Pastry/Cake flour and check the internal temperature (should be 92-95°C when done)."
            },
            {
                scenario: "The cake didn't rise and is tiny",
                result: "Not enough creaming time",
                correction: "Cream the butter and sugar for at least 8 minutes. It should change color from yellow to almost white."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Sponge Cake (Victoria Sponge)",
                difference: "Sponge uses more eggs and less butter, resulting in a lighter airier texture; Pound Cake is dense and rich.",
                why_choose_this: "Choose Pound Cake for a more substantial, buttery, and long-lasting treat."
            },
            {
                target_style: "Bolo de Rolo (Brazilian)",
                difference: "Bolo de Rolo is a Pound Cake batter spread paper-thin and rolled with guava paste; the base batter is identical.",
                why_choose_this: "Choose this loaf version for classic European morning vibes."
            },
            {
                target_style: "Chiffon Cake",
                difference: "Chiffon uses oil and whipped egg whites for a 'cloud' texture; Pound Cake uses butter and whole egg emulsion for a 'velvet' texture.",
                why_choose_this: "Choose Pound Cake for the richest possible dairy flavor."
            }
        ],
        q_and_a: [
            {
                question: "Why no Baking Powder?",
                answer: "Authentic 18th-century pound cake relies solely on the air whipped into the butter. Chemical leaveners make the crumb more 'open' and 'messy'.",
                context: "Tradition"
            },
            {
                question: "What is Quatre-Quarts?",
                answer: "French for 'Four Quarters', referring to the equal weights of the four primary ingredients.",
                context: "Linguistics"
            },
            {
                question: "Does the salt matter?",
                answer: "Yes. Salt cuts through the extreme fat of the butter and sugar, making the cake taste 'buttier' rather than just 'greasy'.",
                context: "Ingredients"
            },
            {
                question: "Can I add lemon?",
                answer: "Yes, citrus zest is the most common addition. Add it to the sugar during the creaming stage to release the oils.",
                context: "Variations"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "The only method for pound cake."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Water is supplied by the whole eggs (approx 75% water). This water must be perfectly emulsified into the butter fat to create the stable structure that supports the flour.",
        methodSuitability: {
            direct: { suitable: true, notes: "Mandatory." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You use 00 Pizza Flour",
                outcome: "The cake will be very tough and rubbery due to the higher gluten strength and different starch damage profile.",
                solution: "Stick to Cake or Pastry flour (T45)."
            }
        ],
        comparisons: [
            {
                vsStyle: "British Pound Cake vs US Southern Pound Cake",
                difference: "Southern style often adds a touch of sour cream or buttermilk for extra moisture and tang; British classic is 'leaner' and more focused on the 1:1 ratio."
            }
        ],
        proTips: [
            "A tablespoon of Brandy or Cognac helps stabilize the egg emulsion and adds a wonderful 'aged' aroma.",
            "Dust the buttered pan with caster sugar instead of flour for a beautiful, crunchy, caramelized exterior.",
            "Serve with a dollop of clotted cream and fresh berries.",
            "Wait 24 hours before eating—the flavor of a pound cake 'ripens' and improves significantly by the second day.",
            "The best way to toast a slice? In a pan with even more butter."
        ]
    },

    tags: ["pound cake", "quatre-quarts", "butter cake", "british", "traditional", "confectionery"],

    watchouts: [
        "Battery curdling? The eggs were too cold.",
        "Cake sunk in the middle? You opened the oven door too early.",
        "Tunnels in the crumb? You over-mixed the flour or baked too hot.",
        "Greasy texture? Emulsion failed or butter quality was low."
    ],

    notes: [
        "The mother of all European butter cakes.",
        "1:1:1:1 ratio architecture.",
        "No chemical leaveners traditionally.",
        "Velvety, tight crumb structure.",
        "Requires high-quality room-temp butter (82%+)."
    ],

    references: [
        {
            source: "The Art of Cookery Made Plain and Easy",
            url: "https://www.gutenberg.org/files/32616/32616-h/32616-h.htm",
            author: "Hannah Glasse",
            year: "1747"
        },
        {
            source: "Le Répertoire de la Pâtisserie",
            url: "https://www.flammarion.com/",
            author: "Léon Gringoire",
            year: "2015"
        },
        {
            source: "Southern Living: Heirloom Pound Cakes",
            url: "https://www.southernliving.com/food/desserts/cakes/pound-cake-recipes",
            author: "Southern Living Team",
            year: "2023"
        }
    ],

    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/pound-cake-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "vanilla_madagascar", "lemon_peel", "orange_peel"]
};
