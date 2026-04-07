import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PÂTE SABLÉE (FRENCH SHORTBREAD PASTRY)
 * 
 * Researched and validated content:
 * - Origin: Sablé-sur-Sarthe, France (1670 - Marquise de Sablé)
 * - Technique: Sablage (Sanding), Cold Butter integration
 * - Ingredients: High fat, Egg yolk only (traditional), Icing sugar
 * - Characteristics: Extremely fragile, 'melting' mouthfeel, sandy (sablé) texture
 */
export const pate_sablee_classic: DoughStyleDefinition = {
    id: "pate_sablee_classic",
    name: "Pâte Sablée (French Shortcrust)",
    category: "cookies_confectionery",
    recipeStyle: RecipeStyle.SABLEE,
    family: "French Pastry Bases",

    origin: {
        country: "France",
        region: "Sablé-sur-Sarthe (Pays de la Loire)",
        period: "1670 (Presented to the King's brother at the court of Louis XIV)"
    },

    description: "Pâte Sablée is the most delicate and crumbly of all French tart doughs. Its name, meaning 'sandy', perfectly describes its texture. Unlike Pâte Sucrée, which is sturdy and cookie-like, Sablée is designed to melt on the tongue. This is achieved through the 'Sablage' (sanding) method, where cold butter is rubbed into the flour to coat the particles in fat, making it physically impossible for a strong gluten network to form.",

    history: "Legend has it that in 1670, the Marquise de Sablé presented a variety of small, round, crumbly biscuits to the brother of King Louis XIV. The Prince found them so exquisite that he ordered them to be served at the court daily. Over centuries, what started as a biscuit evolved into the premier tart dough for high-end French patisserie, now a cornerstone of the 'CAP Pâtissier' (the French professional pastry diploma).",

    difficulty: "Hard",
    fermentationType: "direct",

    base_formula: [
        { name: "T45 Pastry Flour", percentage: 100 },
        { name: "Cold Unsalted Butter (82%+ fat)", percentage: 60 },
        { name: "Icing Sugar", percentage: 35 },
        { name: "Raw Egg Yolks", percentage: 15 },
        { name: "Almond Flour (Extra Fine)", percentage: 12 },
        { name: "Sea Salt (Fine)", percentage: 0.5 }
    ],

    technicalProfile: {
        hydration: [10, 15], // Very low; moisture comes from yolks
        salt: [0.5, 1.0],
        oil: [0, 0], // Fat is purely butter
        sugar: [30, 40],
        flourStrength: "Extra Weak (W130-160). Any elasticity will ruin the melting texture",
        ovenTemp: [155, 170], // Low temp to preserve the pale gold color
        recommendedUse: [
            "Traditional French Fruit Tarts",
            "Sablé Breton (variation)",
            "Gourmet Cookies"
        ],
        difficulty: "Hard",
        ballWeight: { recommended: 300, min: 200, max: 1000 },
        fermentationSteps: [
            "Sablage (The Sanding): Rub cold cubed butter into the flour and almond flour with fingertips or a paddle. [Science: The fat molecules encapsulate the protein molecules, preventing them from bonding with water later]",
            "Inclusion: Add the icing sugar and salt to the 'sand'. Mix briefly. [Science: Fine icing sugar dissolves faster, ensuring a perfectly smooth crumb structure]",
            "Binding: Add the egg yolks. Mix until the dough JUST forms an irregular ball. [Science: Yolks provide fat and enough water to bind, but not enough to create gluten 'toughness']",
            "Fraissage: Use the palm of the hand to squash the dough once. [Science: Finalizes the homogenization of fat without adding air or strength]",
            "Chilling: Wrap and chill for 24 hours. [Science: The starch must fully absorb the limited moisture from the yolks to become stable during rolling]",
            "Rolling & Baking: Roll to 2.5mm (very thin). Bake blindly at 160°C. [Science: The high fat content causes the pastry to 'fry' slightly in its own butter, creating the rich, toasted flavor]"
        ]
    },

    scientificProfile: {
        flourRheology: {
            w_index: "W130-150 (Extra Weak)",
            pl_ratio: "0.30",
            absorption_capacity: "Very Low",
            protein_type: "Softest winter wheat flours",
            science_explanation: "Sablée is the antithesis of bread. We want the protein to be as inert as possible. The structure is held together by the 'interlocking' of fat-coated starch granules."
        },
        thermalProfile: {
            oven_type: "Conventional Oven",
            heat_distribution: "Gentle bottom heat",
            crust_development: "Uniform, fine-grained, fragile, and exceptionally crisp",
            crumb_structure: "Disintegrates upon pressure; Sandy and fine"
        },
        fermentationScience: {
            yeast_activity: "None",
            ph_target: "pH 6.8",
            organic_acids: "None",
            enzymatic_activity: "Low; focus is on the aromatic maturity of the butter."
        }
    },

    education: {
        pro_tips: [
            {
                tip: "Egg Yolks Only",
                explanation: "Whole eggs contain egg whites (water), which promotes gluten. Using only yolks (fat/lecithin) ensures the 'sablé' result—short, fragile, and melting."
            },
            {
                tip: "Cold is Everything",
                explanation: "Keep your kitchen cold. If the butter melts during the 'Sablage', you will end up with a greasy, tough dough. If needed, chill your flour in the freezer before starting."
            },
            {
                tip: "The 2.5mm Rule",
                explanation: "Sablée is at its best when rolled extremely thin. It should be a delicate 'veil' of flavor that supports the topping without dominating it."
            },
            {
                tip: "Docking with a Needle",
                explanation: "Because the dough is so fine, traditional forks can be too aggressive. Use a docking roller or a fine needle for a more professional finish."
            },
            {
                tip: "Add Orange Zest",
                explanation: "The citric oils in orange zest react beautifully with the high fat content of the butter, providing a bright contrast to the richness."
            }
        ],
        what_if: [
            {
                scenario: "The dough is too crumbly to roll",
                result: "Too cold or not enough binder (yolk)",
                correction: "Let it sit at room temp for 10 mins. If it still won't bind, add one extra yolk (never water!)."
            },
            {
                scenario: "The tart broke when I picked it up",
                result: "That's actually a sign of success! Pâte Sablée is notoriously fragile",
                correction: "Handle with care using a wide spatula. Don't unmold until completely cold."
            },
            {
                scenario: "The texture is 'gritty' rather than sandy",
                result: "Butter was too chunky or flour was too coarse",
                correction: "Ensure the 'sablage' looks like fine breadcrumbs with no visible butter chunks before adding yolks."
            }
        ],
        comparative_analysis: [
            {
                target_style: "Pâte Sucrée",
                difference: "Sablée is more crumbly and uses the 'sanding' method; Sucrée is studier and uses the 'creaming' method. Sablée uses only yolks; Sucrée uses whole eggs.",
                why_choose_this: "Choose Sablée for the ultimate gourmet 'melt-in-mouth' experience."
            },
            {
                target_style: "Shortbread (Scottish)",
                difference: "Scottish shortbread has no eggs/yolks; Pâte Sablée uses yolks for a richer, more emulsified and professional finish.",
                why_choose_this: "Choose Sablée for tart bases and French-style cookies."
            },
            {
                target_style: "Pâte Brisée",
                difference: "Brisée is flaky and savory; Sablée is crumbly and sweet.",
                why_choose_this: "Choose Sablée for sweet desserts only."
            }
        ],
        q_and_a: [
            {
                question: "Can I use a food processor?",
                answer: "Yes, the pulse function is excellent for 'Sablage' as it keeps the butter cold. But finish the 'Frasage' by hand to avoid over-mixing.",
                context: "Technique"
            },
            {
                question: "Why almond flour?",
                answer: "It adds 'fat' without adding 'protein'. It physically disrupts the flour grains, making the final crust even more tender.",
                context: "Ingredients"
            },
            {
                question: "What is 'Sablage'?",
                answer: "The process of rubbing fat into dry ingredients until it looks like sand. It's the technical heart of the Sablée style.",
                context: "Technique"
            },
            {
                question: "Best filling for Sablée?",
                answer: "Since it's so fragile, use light fillings like fruit mousses or soft ganaches. Heavy custards might break the base.",
                context: "Pairing"
            }
        ],
        fermentation_methods: [
            {
                method: "Direct",
                suitability: "Authentic",
                notes: "No fermentation; 24h rest is the professional standard."
            }
        ]
    },

    deepDive: {
        hydrationLogic: "Minimum hydration. The emulsified fat in the yolks provides the 'stick' needed to hold the shape without encouraging gluten.",
        methodSuitability: {
            direct: { suitable: true, notes: "Reliable for pastry work." },
            biga: { suitable: false, notes: "N/A" },
            poolish: { suitable: false, notes: "N/A" }
        },
        whatIf: [
            {
                scenario: "You use room-temp butter for sablage",
                outcome: "The butter will coat the flour too well and soak in, resulting in a 'greasy' paste that won't be flaky or sandy.",
                solution: "Butter must be chilled (4-8°C) for the sanding method."
            }
        ],
        comparisons: [
            {
                vsStyle: "Sablée vs Brisée",
                difference: "Sablée is 'sandy' due to fine integration; Brisée is 'flaky' due to large butter chunks remaining visible."
            }
        ],
        proTips: [
            "A pinch of Tonka bean or Nutmeg adds a mysterious, high-end profile.",
            "Egg-yolk wash the crust after blind baking for a professional glossy 'gold' finish.",
            "Line the tart ring with two separate pieces (base and rim strip) for perfectly sharp 90-degree corners.",
            "Sablée is the best dough for 'stamped' cookies—the patterns remain perfectly sharp during baking.",
            "Serve with fresh raspberries and a dollop of crème fraîche."
        ]
    },

    tags: ["pate sablee", "shortcrust", "french", "pastry", "sandy", "premium"],

    watchouts: [
        "Dough getting sticky? It's the butter melting—put it back in the fridge immediately.",
        "Crust breaking during unmolding? Use a loose-bottomed tin or a perfo-ring.",
        "Under-baked? It won't have the 'snap' and will taste like raw flour.",
        "Over-mixed? It will be as hard as a rock."
    ],

    notes: [
        "The 'Prince' of French tart doughs.",
        "Technique focused on Sablage (Sanding).",
        "Uses only Egg Yolks for maximum richness.",
        "Requires 24h maturation rest.",
        "Traditional base for haute-patisserie lemon tarts."
    ],

    references: [
        {
            source: "The Professional Pastry Chef",
            url: "https://www.amazon.com/Professional-Pastry-Chef-Fundamentals-Baking/dp/0471359254",
            author: "Bo Friberg",
            year: "2002"
        },
        {
            source: "Cédric Grolet: Opéra",
            url: "https://www.cedric-grolet.com/",
            author: "Cédric Grolet",
            year: "2019"
        },
        {
            source: "L'Ecole Valrhona - Pastry Techniques",
            url: "https://www.valrhona.com/",
            author: "Valrhona Chefs",
            year: "2023"
        }
    ],

    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),

    images: {
        hero: "/images/styles/pate-sablee-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    recommendedFlavorComponents: ["salted_butter_normandy", "vanilla_madagascar", "orange_peel", "hazelnuts"]
};
