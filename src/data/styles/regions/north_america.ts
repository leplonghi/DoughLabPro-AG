import { DoughStyleDefinition, RecipeStyle } from '@/types/styles';

// Pizza imports
import { new_york_slice_shop } from '../pizza/new_york_slice_shop';
import { detroit_style_classic } from '../pizza/detroit_style_classic';
import { chicago_deep_dish } from '../pizza/chicago_deep_dish';
import { new_haven_apizza } from '../pizza/new_haven_apizza';
import { sicilian_grandma_pan } from '../pizza/sicilian_grandma_pan';
import { california_style } from '../pizza/california_style';

// Bread imports
import { sourdough_san_francisco } from '../bread/sourdough_san_francisco';
import { bagels_classic } from '../bread/bagels_classic';
import { wheat_tortilla } from '../bread/wheat_tortilla';

export const chicagoTavern: DoughStyleDefinition = {
    id: "chicago_tavern_v2",
    name: "Chicago Tavern Style",
    category: "pizza",
    recipeStyle: RecipeStyle.THIN_CRUST,
    family: "Flatbreads & pizzas",
    origin: {
        country: "USA",
        region: "Chicago / Midwest",
        period: "1940s"
    },
    description: "A cracker-thin, crispy crust pizza cut into squares, created in Chicago taverns to encourage drinking.",
    history: "Originating in Chicago taverns during the 1940s, this style pre-dates Deep Dish and is heavily favoured by locals. It was originally made as a salty snack cut into small squares (party cut) and served free on napkins to keep patrons drinking.",
    base_formula: [
        { name: 'All-Purpose Flour', percentage: 100 },
        { name: 'Water', percentage: 48 },
        { name: 'Salt', percentage: 1.5 },
        { name: 'Oil (Corn/Soy)', percentage: 5 },
        { name: 'Sugar', percentage: 1 },
        { name: 'Dry Yeast', percentage: 0.5 }
    ],
    difficulty: 'Medium',
    fermentationType: "cold",
    technicalProfile: {
        hydration: [45, 50],
        salt: [1.5, 2.0],
        oil: [0, 5.0],
        sugar: [1.0, 2.0],
        flourStrength: "All Purpose or High Gluten (Variable)",
        ovenTemp: [260, 290],
        recommendedUse: ['Sausage', 'Giardiniera', 'Pepperoni'],
        difficulty: 'Medium',
        fermentationSteps: [
            "Mix to full development",
            "Ball and rest slightly",
            "Roll thin with rolling pin",
            "Cure in fridge for 24-48 hours lightly covered to dry out"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W220 (Low protein)",
            pl_ratio: "Short",
            absorption_capacity: 'Low',
            protein_type: 'AP/Pastry',
            science_explanation: "Low hydration + low protein + rolling pin = minimal gluten development for a cracker crust."
        },
        thermalProfile: {
            oven_type: "Deck / Stone",
            heat_distribution: 'Conduction',
            crust_development: 'Cracker-like & dry',
            crumb_structure: "None (Laminated/Flat)"
        },
        fermentationScience: {
            yeast_activity: "Inhibited (Dry/Cold)",
            ph_target: 'Normal',
            organic_acids: 'None',
            enzymatic_activity: 'Low'
        },
        processScience: "Curing the rolled out skins in the cooler helps dehydrate them, enabling the signature cracker snap."
    },
    tags: ["Pizza", "American", "Midwest", "Thin", "Party Cut", "Cracker"],
    pairings: {
        canonical: ['Fennel sausage', 'Giardiniera', 'Mozzarella (Low Moisture)'],
        modern: ['Italian beef'],
        regional: ['Old Style beer']
    },
    watchouts: [
        "Avoid bubbling by docking the dough.",
        "Don't under-cure the dough otherwise it will end up chewy.",
        "Overmixing creates a tough crust."
    ],
    notes: [
        "Curing time is mandatory for the cracker texture.",
        "Always use a rolling pin.",
        "Square 'party cut' is the only authentic way to serve it."
    ],
    isPro: true,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [
        { source: "Pizza City, USA (Steve Dolinsky)" }
    ],
    images: {
        hero: "/images/styles/chicago-tavern-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            {
                tip: 'Cure the rolled dough',
                explanation: "Leaving rolled out dough uncovered in the fridge for a day dries it out, making the bake snap like a cracker."
            },
            {
                tip: 'Dock the dough',
                explanation: "Using a dough docker prevents large bubbles from forming and blowing out the toppings on such a thin crust."
            }
        ],
        what_if: [
            {
                scenario: 'The crust is chewy and bread-like',
                result: "Dough wasn't cured long enough or was too hydrated.",
                correction: 'Lower hydration to 45% and cure the skin in the fridge for 2 days.'
            }
        ],
        comparative_analysis: [
            {
                target_style: 'NYC Slice',
                difference: "Tavern style has nearly half the water, is mechanically rolled, and uses no yeast spring.",
                why_choose_this: 'Choose Tavern for a crunchy snack without floppy slices.'
            }
        ],
        q_and_a: [
            {
                question: 'Why the square cut?',
                answer: "Tavern patrons had a beer in one hand, so the pizza needed to be held easily in the other without a paper plate.",
                context: 'History'
            }
        ],
        fermentation_methods: [
            {
                method: 'Direct (Cold Cure)',
                suitability: 'Authentic',
                notes: "Fermentation is secondary to dehydration (curing) in this style."
            }
        ]
    },
    deepDive: {
        hydrationLogic: "At ~48% hydration, the dough is extremely stiff but rolling it thin with a pin and curing it creates a brittle, fried snap.",
        methodSuitability: {
            direct: { suitable: true, notes: "Allows rapid processing before rolling and long curing." },
            biga: { suitable: false, notes: "Not authentic or necessary." },
            poolish: { suitable: false, notes: "Too extensible." }
        },
        whatIf: [
            {
                scenario: 'It puffs up like a pita',
                outcome: "The dough wasn't docked.",
                solution: 'Roll it with a dough docker right before topping.'
            },
            {
                scenario: 'It cooks too dry and hard',
                outcome: "The dough lacked enough fat.",
                solution: 'Increase oil or shortening to 5-7% to tenderize the cracker.'
            }
        ],
        comparisons: [
            {
                vsStyle: 'Deep Dish',
                difference: 'Deep dish uses heavy fat and cooks slowly in a pan; Tavern is ultra-thin, dry, and bakes fast directly on the deck.'
            }
        ],
        proTips: [
            "Use a sheeter or heavy pin. This is not for hand stretching.",
            "Bring cheese all the way to the absolute edge so it caramelizes onto the crust."
        ]
    },
    recommendedFlavorComponents: ["mozzarella_low_moisture", "tomato_sauce_cooked", "italian_sausage", "oregano_dried", "garlic_fresh", "onions_fresh", "pepperoni", "bacon"]
};

export const montrealBagel: DoughStyleDefinition = {
    id: "montreal_bagel",
    name: 'Montreal Bagel',
    category: "bread",
    recipeStyle: RecipeStyle.BAGEL,
    origin: {
        country: 'Canada',
        region: 'Montreal, Quebec',
        period: "1919"
    },
    description: "A distinctive bagel baked in a wood-fired oven, boiled in honey water, and made without salt. Sweeter, denser, and thinner than the New York style.",
    history: "Brought to Montreal by Jewish immigrants from Eastern Europe in 1919. The two iconic shops, Fairmount and St-Viateur, established the standard: hand-rolled, boiled in honey-sweetened water, and baked in a wood-fired oven.",
    base_formula: [
        { name: 'Bread Flour', percentage: 100 },
        { name: 'Water', percentage: 50 },
        { name: 'Eggs', percentage: 5 },
        { name: 'Sugar (or Honey/Malt)', percentage: 4 },
        { name: 'Oil', percentage: 2 },
        { name: 'Fresh Yeast', percentage: 0.5 }
    ],
    difficulty: 'Hard',
    fermentationType: "direct",

    technicalProfile: {
        hydration: [48, 52],
        salt: [0, 0], // Traditionally no salt
        oil: [1, 3],
        sugar: [3, 5],
        flourStrength: 'W300-350',
        ovenTemp: [280, 320],
        recommendedUse: ['Cream cheese', 'Smoked salmon'],
        difficulty: 'Hard',
        fermentationSteps: [
            "Mix all ingredients (excluding salt, if traditionally omitted)",
            "Bulk ferment for 1-2 hours",
            "Hand roll into long strips and loop them into bagels with large holes",
            "Boil immediately in honey-water",
            "Bake on wood planks, then transfer directly to the wood-fired hearth"
        ]
    },
    scientificProfile: {
        flourRheology: {
            w_index: "W300+",
            pl_ratio: "P/L > 0.6",
            absorption_capacity: 'Moderate',
            protein_type: 'Bread',
            science_explanation: "Strong flour is needed to withstand boiling and baking without salt's structural support."
        },
        thermalProfile: {
            oven_type: 'Wood fired oven',
            heat_distribution: 'Radiant & Conduction',
            crust_development: 'Crisp, shiny, and sweet',
            crumb_structure: 'Dense and close-textured'
        },
        fermentationScience: {
            yeast_activity: "Fast (No salt inhibition)",
            ph_target: 'Normal',
            organic_acids: 'Low',
            enzymatic_activity: 'Standard'
        },
        processScience: "Boiling in honey water gelatinizes starch and deposits sugar for the Maillard reaction in the high-heat oven."
    },
    tags: ["Honey", "No Salt", "Wood-fired", "Canada", "Bagel"],
    pairings: {
        canonical: ['Cream cheese', 'Smoked meat'],
        modern: ['Peanut butter'],
        regional: ['Montreal smoked meat', 'Maple syrup']
    },
    watchouts: [
        "Dough will rise unusually fast and be sticky due to lack of salt.",
        "Watch carefully in the oven, honey crust will burn quickly."
    ],
    notes: [
        "Always boil in honey-sweetened water.",
        "Eggs are traditionally used, unlike NY bagels.",
        "Hole should be larger than NY bagels."
    ],
    isPro: false,
    source: "official",
    createdAt: new Date().toISOString(),
    releaseDate: new Date().toISOString(),
    references: [{ source: 'Fairmount / St-Viateur Bagels History' }],
    images: {
        hero: "/images/styles/montreal-bagel-hero.png",
        dough: "/images/styles/placeholder-dough.png",
        crumb: "/images/styles/placeholder-dough.png"
    },
    education: {
        pro_tips: [
            { tip: 'Boiling in honey', explanation: 'Adding honey to the boiling water creates the classic sweetness and beautiful caramel-colored crust.' }
        ],
        what_if: [
            { scenario: 'The bagels fall apart when boiling', result: "Over-proofed, lack of salt makes yeast aggressive.", correction: 'Reduce proofing time; boil them sooner.' }
        ],
        comparative_analysis: [
            { target_style: 'NYC Bagel', difference: 'Montreal has no salt, is boiled in honey, includes egg, and uses wood-fired ovens.', why_choose_this: 'Choose Montreal for a sweeter, crunchier, denser profile.' }
        ],
        q_and_a: [
            { question: 'Why no salt?', answer: 'It is a peculiarity of the Montreal tradition that was maintained by the legacy bakeries to assert their distinction.', context: 'History' }
        ],
        fermentation_methods: [
            { method: 'Direct', suitability: 'Ideal', notes: 'Authentic Montreal bagels are mixed, rolled, and baked directly.' }
        ]
    },
    deepDive: {
        hydrationLogic: "Low hydration combined with egg creates a very tight, chewy crumb.",
        methodSuitability: {
            direct: { suitable: true, notes: "Traditional method." },
            biga: { suitable: false, notes: "Not traditional." },
            poolish: { suitable: false, notes: "Not traditional." }
        },
        whatIf: [
            { scenario: 'The hole shrinks and closes', outcome: 'Dough was rolled too fat and hole too small.', solution: 'Stretch the hole wide before boiling; the bagel expands but the hole shrinks.' }
        ],
        comparisons: [
            { vsStyle: 'NYC Bagel', difference: 'Montreal bagels are smaller, sweeter, and have a significantly larger hole.' }
        ],
        proTips: [
            'For home ovens, use a baking steel preheated to max temp (500F/260C+).',
            'Dip in copious amounts of sesame seeds directly after boiling.'
        ]
    },
    recommendedFlavorComponents: ["honey_raw", "sesame_seeds", "poppy_seeds", "cream_cheese", "butter_dry_84"]
};

export const northAmericaStyles: DoughStyleDefinition[] = [
    new_york_slice_shop,
    detroit_style_classic,
    chicago_deep_dish,
    sourdough_san_francisco,
    new_haven_apizza,
    bagels_classic,
    sicilian_grandma_pan,
    chicagoTavern,
    montrealBagel,
    wheat_tortilla,
    california_style
];
