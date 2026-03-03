import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';
import { shokupan_milk_bread } from '../bread/shokupan_milk_bread';

export const asiaNaan: DoughStyleDefinition = {
    id: "asia_naan",
    name: "Tandoori Naan",
    category: "bread",
    recipeStyle: RecipeStyle.FLATBREAD,
    family: "Asian Flatbreads",
    origin: {
        country: "India",
        region: "Punjab / Northern India",
        period: "1520s (Mughal Era)"
    },
    description: "A soft, tearable, yeast-leavened flatbread traditionally baked by slapping it against the extremely hot interior walls of a clay tandoor oven, yielding blistered and charred bubbles.",
    history: "Though flatbreads existed for millennia, leavened 'Naan' became a delicacy at the imperial court in Delhi during the Mughal Empire. It was traditionally flavored with ghee or butter, and its signature teardrop shape comes from it sagging while clinging to the side of the tandoor.",
    base_formula: [
        { name: 'Maida (AP Flour)', percentage: 100 },
        { name: 'Water', percentage: 65 },
        { name: 'Ghee or Oil', percentage: 5 },
        { name: 'Salt', percentage: 2 },
        { name: 'Instant Yeast', percentage: 1 },
        { name: 'Yogurt (Optional)', percentage: 5 },
        { name: 'Garlic/Cilantro (Optional)', percentage: 3 }
    ],
    difficulty: 'Medium',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [60, 70],
        salt: [1.8, 2.2],
        oil: [4.0, 6.0],
        sugar: [0, 2],
        flourStrength: "Medium (W240-260)",
        ovenTemp: [300, 500],
        recommendedUse: ['Curry dipping', 'Wraps'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix until a soft but cohesive dough forms",
            "Bulk ferment for 1 to 2 hours until doubled",
            "Divide into balls and rest",
            "Stretch into a teardrop shape (do not over-roll)",
            "Bake on intense radiant heat (Tandoor wall or hot steel/stone) for 2 minutes"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "Medium (W240-260)",
            pl_ratio: "Extensible (Low P/L)",
            absorption_capacity: 'Medium',
            protein_type: "Maida / AP",
            science_explanation: "The low protein Maida creates an extensible dough which can be easily stretched by hand without snapping back."
        },
        thermalProfile: {
            oven_type: 'Tandoor / Radiant Heat',
            heat_distribution: "Radiant (Walls) + Conduction",
            crust_development: 'Charred bubbles with an otherwise soft skin',
            crumb_structure: 'Soft and irregular'
        },
        fermentationScience: {
            yeast_activity: 'Fast',
            ph_target: "Slightly acidic if yogurt is used",
            organic_acids: 'Lactic',
            enzymatic_activity: "Protease action tenderizes the gluten."
        },
        processScience: "The intense radiant heat of the tandoor perfectly blisters the dough, instantly halting fermentation while leaving the interior fluffy."
    },
    tags: ["Tandoor", "Yogurt", "High heat", "Soft", "India", "Flatbread"],
    pairings: {
        canonical: ['Butter chicken', 'Paneer Tikka Masala', 'Daal Makhani'],
        modern: ['Cheese stuffing'],
        regional: ['Keema']
    },
    watchouts: [
        "If the surface is too dry, it won't stick to the tandoor (or pizza steel).",
        "Don't compress the dough entirely flat; leave gas for the bubbles.",
        "Will dry out and become leathery if overbaked."
    ],
    notes: [
        "A pizza steel preheated to 500°F (260°C) is the best home substitute for a Tandoor.",
        "Yogurt adds the tenderizing acidity and soft crumb characteristic of restaurant Naan.",
        "Brush with ghee immediately upon exit."
    ],
    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/naan-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Use a searing hot steel',
                explanation: "To replicate the Tandoor, blast your oven on broil with a baking steel directly under the element."
            }
        ],
        what_if: [
            {
                scenario: 'The naan is tough and chewy',
                result: "Baked too long at too low of a temperature.",
                correction: 'Bake it hotter and faster (no more than 2-3 minutes).'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Pita',
                difference: "Pita is a pocket bread baked mainly via conduction; Naan has dairy/fat for a softer crumb and relies on radiant blistering without a full pocket.",
                why_choose_this: 'Choose Naan for a richer, softer flatbread meant for tearing.'
            }
        ],
        q_and_a: [
            {
                question: 'Do I need yogurt?',
                answer: "Strictly speaking, no. But yogurt's acidity texturizes the gluten and brings the unmistakable tang of Northern Indian Naan.",
                context: 'Ingredients'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "Rapid fermentation is all that is required for this style."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "High hydration (relative to flatbreads) keeps the interior soft when subjected to extreme heat.",
        methodSuitability: {
            direct: { suitable: true, notes: "Traditional method." },
            biga: { suitable: false, notes: "Not traditional or necessary." },
            poolish: { suitable: false, notes: "Not traditional." }
        },
        whatIf: [
            {
                scenario: 'It puffs into a giant balloon like a pita',
                outcome: "The dough didn't stick to the surface properly and was rolled too evenly.",
                solution: 'Stretch by hand (creating uneven thickness) instead of using a rolling pin.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Paratha',
                difference: 'Paratha is unleavened, laminated with fat, and pan-fried. Naan is leavened and baked.'
            }
        ],
        proTips: [
            "Use wet fingers to pat the garlic and cilantro directly onto the raw dough so it sticks during baking.",
            "If using a pan, use a cast iron skillet on high heat and cover it with a lid to trap steam."
        ]
    },
    recommendedFlavorComponents: ["yogurt_plain", "ghee_clarified_butter", "garlic_fresh", "nigella_seeds", "basil_fresh", "onions_fresh"]
};

export const asiaGuaBao: DoughStyleDefinition = {
    id: "asia_guabao",
    name: "Gua Bao (Lotus Leaf Bun)",
    category: "bread",
    recipeStyle: RecipeStyle.ENRICHED_BRIOCHE_CLASSIC,
    family: "Asian Buns",
    origin: {
        country: "Taiwan",
        region: "Fuzhou, Fujian / Taiwan",
        period: "19th Century"
    },
    description: "A soft, fluffy,, semi-circular unleavened-but-steamed bun that is folded over on itself. Famously serves as the 'bun' for Taiwanese pork belly sliders.",
    history: "Also known as the 'Tiger Bites Pig' (since the folded bun looks like a mouth biting a piece of pork). Although originating from Fuzhou cuisine, it was popularized globally and locally as iconic Taiwanese street food.",
    base_formula: [
        { name: 'Low Protein / Bleached Flour', percentage: 100 },
        { name: 'Water or Milk', percentage: 55 },
        { name: 'Sugar', percentage: 10 },
        { name: 'Oil or Pork Lard', percentage: 4 },
        { name: 'Instant Yeast', percentage: 1 },
        { name: 'Baking Powder', percentage: 0.5 }
    ],
    difficulty: 'Medium',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [50, 60],
        salt: [0.5, 1.0],
        oil: [3, 8],
        sugar: [8, 15],
        flourStrength: "Low (Hong Kong Flour / Bleached Cake-AP blend)",
        ovenTemp: [100, 100], // Steam
        recommendedUse: ['Pork Belly', 'Fried Chicken'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix to full development",
            "First bulk fermentation until double (1 hour)",
            "Degas thoroughly and sheet / roll out flat",
            "Cut into ovals, brush half with oil, and fold over",
            "Final proof until puffy but not collapsed",
            "Steam vigorously for 10-12 minutes"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "Low",
            pl_ratio: "N/A",
            absorption_capacity: 'Low',
            protein_type: "Low Protein / Bleached",
            science_explanation: "Bleached, low-protein flour is critical to achieving the ultra-white, almost cottony-smooth skin of the steamed bun without chewy gluten strands."
        },
        thermalProfile: {
            oven_type: 'Steamer',
            heat_distribution: "Convection (Steam)",
            crust_development: "Skin formation (No Maillard)",
            crumb_structure: 'Uniform cottony'
        },
        fermentationScience: {
            yeast_activity: 'Moderate',
            ph_target: 'Neutral',
            organic_acids: 'None',
            enzymatic_activity: 'Low'
        },
        processScience: "Steaming at 100C prevents any crust crustification (Maillard reaction) and rapidly gelatinizes the exterior skin into a smooth, shiny membrane."
    },
    tags: ["Steam", "Low protein", "Bao", "Taiwan", "China"],
    pairings: {
        canonical: ['Braised Pork Belly (Hong Shao Rou)', 'Pickled Mustard Greens', 'Crushed Peanuts'],
        modern: ['Fried chicken', 'Fried tofu'],
        regional: ['Duck confit']
    },
    watchouts: [
        "Do not over-proof or the bun surface will collapse and wrinkle when steamed.",
        "Ensure water does not drip from the bamboo steamer lid onto the buns."
    ],
    notes: [
        "A combination of yeast AND baking powder ensures the ultra fluffy, sponge-like texture.",
        "Always brush oil between the fold before steaming so it opens cleanly."
    ],
    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/guabao-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Rest after steaming',
                explanation: "After turning off the heat, leave the steamer lid on for 3-5 minutes. Opening it immediately causes a temperature shock that wrinkles the smooth skin."
            }
        ],
        what_if: [
            {
                scenario: 'The buns are yellowish and chewy',
                result: "Used unbleached, high-protein flour.",
                correction: 'Use bleached cake/pastry flour (Hong Kong style) for the snowy white, cotton texture.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Steamed Baozi',
                difference: "Baozi are fully enclosed and crimped around a filling; Gua Bao is steamed empty as a 'taco shell' and filled later.",
                why_choose_this: 'Choose Gua Bao when you want to showcase large, visually appealing fillings.'
            }
        ],
        q_and_a: [
            {
                question: 'Can I bake them instead of steaming?',
                answer: "No. The entire defining characteristic of a Bao is the steamed, skinless, un-browned cotton texture. If baked, it is just a sweet roll.",
                context: 'Process'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct',
                suitability: 'Ideal',
                notes: "Rapid, predictable fermentation is ideal to tightly control the volume."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "At 50-55%, the dough handles like play-dough—stiff enough to hold its folded shape without collapsing.",
        methodSuitability: {
            direct: { suitable: true, notes: "Most common." },
            biga: { suitable: false, notes: "Not used." },
            poolish: { suitable: false, notes: "Not used." }
        },
        whatIf: [
            {
                scenario: 'The buns fuse together and cannot be opened',
                outcome: "Forgot to brush oil between the fold.",
                solution: 'Always apply a generous swipe of neutral oil inside the fold before the final proof.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Burger Bun',
                difference: 'Buns are baked via dry heat initiating the Maillard browning; Bao is steamed in wet heat.'
            }
        ],
        proTips: [
            "Roll the dough through a pasta machine or sheeter a few times to de-gas perfectly for a flawless, un-pimpled skin."
        ]
    },
    recommendedFlavorComponents: ["lard_pork_fat", "condensed_milk", "black_sesame", "onions_fresh", "citrus_zest", "cilantro_fresh", "garlic_fresh"]
};

export const steamedBaozi: DoughStyleDefinition = {
    id: "steamed_baozi",
    name: "Baozi (Stuffed Steamed Buns)",
    category: "bread",
    recipeStyle: RecipeStyle.ENRICHED_BRIOCHE_CLASSIC,
    family: "Asian Buns",
    origin: {
        country: "China",
        region: "Nationwide",
        period: "3rd Century"
    },
    description: "Fully enclosed steamed buns, filled with meat or sweet pastes, featuring a signature pleated seal at the top. The dough is tender, slightly sweet, and fiercely white.",
    history: "Legend attributes the invention of the mantou/baozi to the military strategist Zhuge Liang in the 3rd century. It is a fundamental staple of Chinese cuisine eaten at all hours, from roadside stalls to high-end dim sum parlors.",
    base_formula: [
        { name: 'Bread Flour / AP Flour', percentage: 100 },
        { name: 'Water', percentage: 50 },
        { name: 'Instant Yeast', percentage: 1 },
        { name: 'Sugar', percentage: 5 },
        { name: 'Oil', percentage: 5 },
        { name: 'Baking Powder', percentage: 1 }
    ],
    difficulty: 'Hard',
    fermentationType: "direct",
    technicalProfile: {
        hydration: [48, 55],
        salt: [0.5, 1.0],
        oil: [2, 6],
        sugar: [3, 8],
        flourStrength: "W200-240 (All Purpose / Bleached)",
        ovenTemp: [100, 100], // Steamer
        recommendedUse: ['Pork and cabbage', 'Red bean paste', 'Custard'],
        difficulty: 'Hard',
        fermentationSteps: [
            "Mix until a smooth dough forms",
            "Bulk ferment for 1 hour or use pre-ferment (Lao Mian) method",
            "Divide and roll edges thin, keeping the center thick",
            "Pleat and seal around the filling",
            "Proof for 15-20 min in the steamer basket",
            "Steam for 12-15 minutes"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W200-240",
            pl_ratio: "Balanced",
            absorption_capacity: 'Medium',
            protein_type: "All Purpose / Bleached",
            science_explanation: "Needs slightly more strength than Gua Bao to hold the heavy wet filling without breaking the skin."
        },
        thermalProfile: {
            oven_type: 'Bamboo steamer',
            heat_distribution: "Convection (Steam)",
            crust_development: "Skin formation (No Maillard)",
            crumb_structure: 'Fine dense brilliant white'
        },
        fermentationScience: {
            yeast_activity: 'Moderate',
            ph_target: 'Neutral',
            organic_acids: 'Low',
            enzymatic_activity: 'Standard'
        },
        processScience: "The use of an old dough starter (Lao Mian) coupled with alkaline powder (Jian Shui) is authentic for neutralizing acids while enhancing the bright white color."
    },
    tags: ["Steam", "Breakfast", "Bao", "China", "Dim Sum"],
    pairings: {
        canonical: ['Char Siu (BBQ Pork)', 'Pork and chive', 'Soy milk'],
        modern: ['Truffle mushroom'],
        regional: ['Spicy lamb']
    },
    watchouts: [
        "Edges must be rolled thinner than the center or the bottom will blow out and the top pleats will be pure dough.",
        "Over-proofing before steaming will cause the beautiful pleats to melt away into a smooth dome."
    ],
    notes: [
        "Pleating is an art form; 18 pleats is the gold standard for luxury buns.",
        "Like Gua Bao, wait 3-5 minutes before opening the steamer to prevent deflation."
    ],
    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/baozi_steamed.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Roll thin edges, thick center',
                explanation: "When you gather the pleats at the top, the edges stack together. If they aren't thin to begin with, you'll end up with a huge, dense knot of dough at the top of your bun."
            }
        ],
        what_if: [
            {
                scenario: 'The skin is yellow and smells sour',
                result: "Over-fermented.",
                correction: 'In professional settings, potassium carbonate (alkaline water) is added to neutralize the sourness and bleach the dough back to white.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Xiao Long Bao (Soup Dumplings)',
                difference: "Baozi are made with yeast dough; XLB uses hot-water dough with no yeast.",
                why_choose_this: 'Choose Baozi for a fluffy, bready vehicle.'
            }
        ],
        q_and_a: [
            {
                question: 'Can I freeze them?',
                answer: "Yes, steam them fully first, then freeze. Re-steam directly from frozen to eat.",
                context: 'Storage'
            }
        ],
        fermentation_methods: [
            {
                method: 'Old Dough (Lao Mian)',
                suitability: 'Authentic',
                notes: "The traditional Chinese baker's sequence of using yesterday's dough to raise today's."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "Medium-low hydration keeps the pleats crisp and stops it from becoming too sticky to fold.",
        methodSuitability: {
            direct: { suitable: true, notes: "Modern adaptation." },
            biga: { suitable: false, notes: "Not used." },
            poolish: { suitable: true, notes: "Similar action to Lao Mian." }
        },
        whatIf: [
            {
                scenario: 'The filling bursts through the bottom',
                outcome: "The center of the dough disc was rolled too thin.",
                solution: 'Leave a distinct thick \"belly\" in the center of the disc when rolling out.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Gua Bao',
                difference: 'Baozi dough often utilizes slightly stronger flour to support the heavy interior filling.'
            }
        ],
        proTips: [
            "Use a wooden dowel rolling pin and roll only the outer 1 inch of the dough disc with one hand while rotating it with the other."
        ]
    },
    recommendedFlavorComponents: ["lard_pork_fat", "onions_fresh", "garlic_fresh", "condensed_milk", "black_sesame", "cilantro_fresh"]
};

export const paratha: DoughStyleDefinition = {
    id: "paratha",
    name: "Lacha Paratha (Flaky Flatbread)",
    category: "bread",
    recipeStyle: RecipeStyle.FLATBREAD,
    family: "Asian Flatbreads",
    origin: {
        country: "India",
        region: "Punjab",
        period: "12th Century"
    },
    description: "An incredibly flaky, multi-layered unleavened flatbread pan-fried in ghee, originating from the Indian subcontinent.",
    history: "Associated primarily with Punjabi and North Indian cooking, the paratha is an amalgmation of words meaning 'layers of cooked dough.' It is beloved as a breakfast dish or a rich accompaniment to curries.",
    base_formula: [
        { name: 'Atta (Stoneground Indian Whole Wheat)', percentage: 100 },
        { name: 'Water', percentage: 65 },
        { name: 'Salt', percentage: 2 },
        { name: 'Ghee (Lamination)', percentage: 20 },
        { name: 'Oil (Frying)', percentage: 10 }
    ],
    difficulty: 'Hard',
    fermentationType: "none",
    technicalProfile: {
        hydration: [60, 70],
        salt: [1.5, 2.5],
        oil: [15, 30], // Includes ghee for lamination
        sugar: [0, 0],
        flourStrength: "Medium-High (Durum/Wheat Blend)",
        ovenTemp: [200, 240], // Tawa pan temperature
        recommendedUse: ['Curries', 'Pickles & Yogurt', 'Stuffed (Aloo Paratha)'],
        difficulty: 'Hard',
        fermentationSteps: [
            "Mix dough and rest for 30 minutes to autolyse",
            "Divide into balls",
            "Roll extremely thin, spread with ghee and dust with flour",
            "Pleat like a paper fan, then coil tightly into a spiral",
            "Rest, then gently roll out again",
            "Shallow fry on a hot Tawa (griddle) with ghee until crisp"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "N/A (Atta)",
            pl_ratio: "Extensible (Bran)",
            absorption_capacity: 'High',
            protein_type: 'Durum/Whole Wheat Blend',
            science_explanation: "Atta flour is finely milled whole wheat with very high water absorption. Its extensibility allows it to be rolled paper thin."
        },
        thermalProfile: {
            oven_type: "Tawa (Griddle) / Pan",
            heat_distribution: 'Conduction',
            crust_development: 'Crisp, shallow-fried, golden brown spots',
            crumb_structure: 'Defined laminated flakes'
        },
        fermentationScience: {
            yeast_activity: 'None',
            ph_target: 'Neutral',
            organic_acids: 'None',
            enzymatic_activity: 'Standard'
        },
        processScience: "The pleat-and-coil lamination creates alternating layers of dough and fat. When heated, the moisture creates steam that pushes the layers apart while the fat crisps them."
    },
    tags: ["Laminated", "Unleavened", "Fried", "India", "Flatbread"],
    pairings: {
        canonical: ['Dal Makhani', 'Achaar (Pickles)', 'Yogurt'],
        modern: ['Egg roll wrap'],
        regional: ['Saag Paneer']
    },
    watchouts: [
        "Do not overwork the dough; if the gluten is too tight, it will snap back when rolled.",
        "Ensure the ghee is soft but not entirely melted during the lamination step."
    ],
    notes: [
        "Lacha refers to the visible rings/layers.",
        "Scrunch the cooked paratha between your hands right off the pan to violently crush the layers open.",
        "Can also be prepared stuffed (e.g. Aloo Paratha with potato) without the strict lamination step."
    ],
    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [],
    images: {
        hero: "/images/styles/paratha_flaky_hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Crush instantly',
                explanation: "The second it comes off the hot pan, clap your hands together from the sides to 'scrunch' the paratha. This shatters the crisp exterior and reveals the fluffy soft layers inside."
            },
            {
                tip: 'Rest the spirals',
                explanation: "After coiling the dough into the spiral bun, let it rest for 15 minutes before the final roll-out, or it will be too elastic."
            }
        ],
        what_if: [
            {
                scenario: 'The layers fuse together into a dense disc',
                result: "Not enough ghee between the layers, or it was pressed down too hard when cooking.",
                correction: 'Brush more ghee during the folding stage, and dust lightly with dry flour over the ghee before pleating.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'Naan',
                difference: "Naan is leavened (yeast) and baked. Paratha is unleavened, laminated, and shallow-fried in ghee.",
                why_choose_this: 'Choose Paratha for rich, flaky, decadent texture.'
            }
        ],
        q_and_a: [
            {
                question: 'Can I use butter instead of ghee?',
                answer: "Yes, but ghee clarifies out the water content and milk solids, meaning it allows higher frying temperatures without burning.",
                context: 'Ingredients'
            }
        ],
        fermentation_methods: [
            {
                method: 'None',
                suitability: 'Ideal',
                notes: "Unleavened bread. Rest time is purely for gluten relaxation (autolyse)."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "At 60-65% with whole wheat, it forms a pliable, soft dough similar to pasta dough.",
        methodSuitability: {
            direct: { suitable: true, notes: "No yeast." },
            biga: { suitable: false, notes: "" },
            poolish: { suitable: false, notes: "" }
        },
        whatIf: [
            {
                scenario: 'It cooks unevenly in the pan',
                outcome: "Pan was not hot enough or too little frying fat was used.",
                solution: 'Ensure the Tawa is pre-heated until very hot and aggressively swirl ghee around the edges.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Croissant',
                difference: 'Croissants use cold lamination and yeast for volume; Paratha uses room-temp lamination, no yeast, and relies purely on steam for flake separation.'
            }
        ],
        proTips: [
            "For the ultimate flaky texture, stretch the dough until you can read a newspaper through it before adding the ghee and pleating."
        ]
    },
    recommendedFlavorComponents: ["ghee_clarified_butter", "yogurt_plain", "onions_fresh", "garlic_fresh", "citrus_zest", "cilantro_fresh", "nigella_seeds"]
};

export const asiaStyles: DoughStyleDefinition[] = [
    shokupan_milk_bread,
    asiaNaan,
    asiaGuaBao,
    steamedBaozi,
    paratha
];
