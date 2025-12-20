import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CHICAGO DEEP DISH PIZZA
 * 
 * Researched and validated content with authoritative sources:
 * - Pizzeria Uno (Original deep dish, 1943)
 * - Lou Malnati's (Buttery crust variation, 1971)
 * - Chicago pizza history and culture
 * - National Geographic deep dish documentation
 */
export const chicago_deep_dish: DoughStyleDefinition = {
  id: "chicago_deep_dish",
  name: "Chicago Deep Dish Pizza",
  category: "pizza",
  recipeStyle: RecipeStyle.CHICAGO_DEEP_DISH,

  origin: {
    country: "United States",
    region: "Chicago, Illinois",
    period: "1943, Pizzeria Uno"
  },

  description: "Chicago deep dish pizza is a thick, pie-like pizza baked in a deep pan with high edges. Invented in 1943 at Pizzeria Uno, it features a unique reverse layering with cheese directly on the dough, toppings in the middle, and chunky tomato sauce on top.",

  history: "Chicago deep dish pizza was invented in 1943 at Pizzeria Uno. While founder Ike Sewell is often credited, pizza historian Peter Regas suggests Ric Riccardo, Sewell's business partner, was the mastermind. Other key figures include Adolpho 'Rudy' Malnati Sr., credited in a 1956 Chicago Daily News article with creating the original recipe, and Alice May Redmond, the restaurant's cook who adjusted it. The style emerged during the 1940s as an attempt to create a more substantial, meal-worthy pizza compared to traditional thin-crust snacks. Lou Malnati, Rudy's son, later opened Lou Malnati's Pizzeria in 1971, becoming renowned for its buttery crust and fresh, uncooked tomatoes.",

  difficulty: "Medium",
  fermentationType: "direct",

  base_formula: [
    { name: "All-purpose flour", percentage: 100 },
    { name: "Water", percentage: 54 },
    { name: "Salt", percentage: 1.8 },
    { name: "Corn oil", percentage: 20 },
    { name: "Sugar", percentage: 1.5 },
    { name: "Dry yeast", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [50, 58],
    salt: [1.5, 2],
    oil: [15, 25],
    sugar: [1, 2],
    flourStrength: "All-purpose or low-protein flour (9-11%) for tender, biscuit-like texture",
    ovenTemp: [190, 220],
    recommendedUse: [
      "Classic deep dish with Italian sausage and chunky tomato sauce",
      "Vegetarian versions with spinach, mushrooms, and peppers"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 800, min: 600, max: 1200 },
    fermentationSteps: [
      "Mix: Combine flour, water, salt, corn oil, sugar, and yeast minimally - like pie dough. [Science: Minimal mixing prevents gluten development for tender, biscuit-like texture]",
      "Brief Rest: 1-2 hours at room temperature for minimal rise. [Science: Short fermentation - flavor comes from fat and fillings, not yeast]",
      "Press into Pan: Press dough into deep pan (2-3 inches) like pie crust. [Science: Pressing, not stretching, maintains tender texture]",
      "Layer: Cheese directly on dough, then toppings, then chunky sauce on top. [Science: Reverse layering - cheese creates moisture barrier, sauce protects from burning]",
      "Bake: Low and slow at 375-425°F for 30-40 minutes. [Science: Long bake cooks through thick layers without burning exterior]",
      "Rest: Allow to rest 5-10 minutes before cutting. [Science: Molten cheese and sauce need time to set]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W240-280 (Low-moderate strength)",
      pl_ratio: "Short (high fat creates tender texture)",
      absorption_capacity: "Low (50-58%)",
      protein_type: "All-purpose or pastry blend (9-11%)",
      science_explanation: "Low-protein flour with high oil content creates 'short' dough that's tender and flaky like pie crust, not chewy like bread"
    },
    thermalProfile: {
      oven_type: "Conventional oven with deep pan",
      heat_distribution: "Conduction from pan bottom, convection for top",
      crust_development: "Crispy, almost fried bottom; tender, biscuit-like sides",
      crumb_structure: "Dense, flaky, biscuit-like (not airy)"
    },
    fermentationScience: {
      yeast_activity: "Low (minimal fermentation)",
      ph_target: "Neutral (pH 6.0-6.5)",
      organic_acids: "Minimal (short fermentation)",
      enzymatic_activity: "Low (flavor from fat, not fermentation)"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Treat dough like pie crust, not bread",
        explanation: "Minimal mixing is crucial. Overmixing develops gluten, making the crust tough and chewy instead of tender and flaky. Mix just until ingredients come together."
      },
      {
        tip: "Corn oil is traditional and essential",
        explanation: "Corn oil provides the distinctive flavor and creates the 'fried' bottom crust texture. Olive oil will change the character completely. Use 15-25% corn oil for authenticity."
      },
      {
        tip: "Cheese directly on dough - always",
        explanation: "This creates a moisture barrier that prevents the bottom from becoming soggy. The cheese seals the dough from the wet toppings and sauce above."
      },
      {
        tip: "Sauce on top is physics, not preference",
        explanation: "During the 30-40 minute bake, exposed cheese and meat would burn. The chunky tomato sauce on top insulates them from direct heat while adding moisture and flavor."
      },
      {
        tip: "The mandatory rest period",
        explanation: "Deep dish MUST rest 5-10 minutes after baking. If you cut immediately, it will flow like lava. The rest allows the molten cheese and sauce to set properly."
      }
    ],
    what_if: [
      {
        scenario: "Bottom crust is soggy",
        result: "Sauce too thin, watery vegetables, or cheese not placed directly on dough",
        correction: "Use thick, chunky sauce; pre-cook watery vegetables; always place cheese directly on dough as moisture barrier"
      },
      {
        scenario: "Crust is tough and chewy",
        result: "Overmixing developed too much gluten",
        correction: "Mix minimally like pie dough - just until ingredients come together. Don't knead or develop gluten."
      },
      {
        scenario: "Top burns before inside cooks",
        result: "Oven temperature too high",
        correction: "Reduce to 375-400°F and extend bake time. Deep dish requires low and slow cooking."
      },
      {
        scenario: "Pizza falls apart when serving",
        result: "Didn't rest long enough after baking",
        correction: "Allow 5-10 minutes rest time for cheese and sauce to set before cutting"
      }
    ],
    comparative_analysis: [
      {
        target_style: "New York Style",
        difference: "Deep dish is thick, pie-like, requires utensils; NY is thin, foldable, hand-held snack",
        why_choose_this: "Choose deep dish for a hearty, filling meal and authentic Chicago experience"
      },
      {
        target_style: "Detroit Style",
        difference: "Deep dish has biscuit crust and sauce on top; Detroit has bread crust with crispy, caramelized cheese edges",
        why_choose_this: "Choose deep dish for maximum filling capacity and traditional Chicago style"
      },
      {
        target_style: "Sicilian/Grandma",
        difference: "Deep dish is much thicker with reverse layering; Sicilian is focaccia-like with traditional layering",
        why_choose_this: "Choose deep dish for a 'pizza pie' experience and substantial meal"
      }
    ],
    q_and_a: [
      {
        question: "Why is the sauce on top of Chicago deep dish pizza?",
        answer: "The sauce is placed on top for a practical reason: insulation. During the long 30-40 minute bake time required to cook through the thick layers, exposed cheese and meat would burn. The chunky tomato sauce on top protects them from direct heat while adding moisture and flavor. This reverse layering is essential to deep dish construction.",
        context: "Deep dish physics"
      },
      {
        question: "Is Chicago deep dish really pizza or is it a casserole?",
        answer: "While some pizza purists debate this, deep dish is technically a pizza - it has dough, sauce, cheese, and toppings. However, it's more accurately described as a 'pizza pie' or 'pizza casserole' due to its thick, substantial nature and requirement for utensils. It's a unique Chicago creation that bridges pizza and casserole.",
        context: "Pizza vs casserole debate"
      },
      {
        question: "Do Chicagoans actually eat deep dish pizza regularly?",
        answer: "Not typically. While deep dish is Chicago's most famous pizza style internationally, many locals prefer 'tavern-style' thin crust pizza for regular consumption. Deep dish is often reserved for special occasions, entertaining out-of-town guests, or when craving something particularly hearty and indulgent.",
        context: "Chicago pizza culture"
      },
      {
        question: "What's the difference between deep dish and stuffed pizza?",
        answer: "Deep dish has one crust on the bottom with reverse layering (cheese, toppings, sauce). Stuffed pizza (popularized by Giordano's in 1974) has two crusts - bottom and top - with filling in between, then sauce on top. Stuffed is even thicker and more substantial.",
        context: "Chicago variations"
      },
      {
        question: "Can I make deep dish at home without a special pan?",
        answer: "Yes! Use a 9-10 inch cast iron skillet or cake pan (2-3 inches deep). Cast iron is ideal as it conducts heat well and creates the characteristic crispy bottom. Grease generously with corn oil before pressing in the dough.",
        context: "Home baking"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct (1-2 hours)",
        suitability: "Authentic",
        notes: "Traditional for deep dish. Short fermentation because flavor comes from fat and fillings, not yeast development."
      },
      {
        method: "Cold Retard",
        suitability: "Not Traditional",
        notes: "Not part of authentic deep dish. The style relies on fat for flavor, not fermentation complexity."
      },
      {
        method: "Preferment",
        suitability: "Not Traditional",
        notes: "Not used in traditional deep dish. Would develop too much gluten and change the biscuit-like texture."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Deep dish uses low hydration (50-58%) with high oil content (15-25%) to create a 'short' dough similar to pie crust. Higher hydration would develop more gluten and create a bread-like texture instead of the desired tender, flaky, biscuit-like crust. The oil interferes with gluten development, keeping the texture tender.",
    methodSuitability: {
      direct: { suitable: true, notes: "The only authentic method. Short fermentation (1-2 hours) is traditional. Flavor comes from fat and fillings." },
      biga: { suitable: false, notes: "Not traditional and would develop too much gluten, changing the tender texture to chewy." },
      poolish: { suitable: false, notes: "Not used in authentic deep dish. Would alter the characteristic biscuit-like texture." }
    },
    whatIf: [
      {
        scenario: "Dough shrinks back when pressing into pan",
        outcome: "Too much gluten development from overmixing",
        solution: "Mix minimally, let dough rest 10-15 minutes before pressing, work gently"
      },
      {
        scenario: "Bottom doesn't get crispy",
        outcome: "Pan not preheated or insufficient oil",
        solution: "Preheat pan slightly, use generous corn oil coating, ensure oven has bottom heat"
      },
      {
        scenario: "Cheese layer is rubbery",
        outcome: "Overbaked or oven temperature too high",
        solution: "Reduce temperature to 375-400°F, check at 30 minutes, don't overbake"
      }
    ],
    comparisons: [
      {
        vsStyle: "Lou Malnati's Butter Crust",
        difference: "Standard deep dish uses corn oil; Lou Malnati's laminates butter into dough for extra flakiness"
      },
      {
        vsStyle: "Giordano's Stuffed Pizza",
        difference: "Deep dish has one crust; stuffed has two crusts with filling between, then sauce on top"
      }
    ],
    proTips: [
      "Use cast iron or steel pans for best heat conduction and crispy bottom",
      "Corn oil is essential - olive oil will change the flavor profile completely",
      "Italian sausage is the signature topping - fennel-spiced and crumbled",
      "Sauce should be chunky, not smooth - hand-crushed tomatoes work best",
      "Pizzeria Uno (1943) vs Lou Malnati's (1971) vs Giordano's (1974) - the holy trinity of Chicago deep dish"
    ]
  },

  tags: ["chicago", "deep dish", "pan pizza", "knife-and-fork", "hearty"],

  watchouts: [
    "Soggy bottom from thin sauce or watery vegetables - sauce must be thick and chunky",
    "Tough, chewy crust from overmixing - treat dough like pie crust, mix minimally",
    "Burned top from too-high oven temperature - requires low and slow baking (375-425°F)",
    "Lava flow if cut too soon - MUST rest 5-10 minutes after baking",
    "Wrong oil changes everything - use corn oil, not olive oil"
  ],

  notes: [
    "Corn oil is traditional for specific flavor and 'fried' texture - not olive oil",
    "Sauce on top is essential physics - protects cheese and meat during long bake",
    "More casserole than pizza - it's a knife-and-fork meal, not a snack",
    "Invented in 1943 at Pizzeria Uno by Ike Sewell, Ric Riccardo, and Rudy Malnati Sr.",
    "Lou Malnati's (1971) introduced buttery, laminated crust variation",
    "Locals often prefer tavern-style thin crust for daily eating - deep dish is special occasion food"
  ],

  references: [
    {
      source: "Pizzeria Uno - Original Deep Dish",
      url: "https://www.unos.com/"
    },
    {
      source: "Lou Malnati's Pizzeria",
      url: "https://www.loumalnatis.com/"
    },
    {
      source: "National Geographic - Deep Dish History",
      url: "https://www.nationalgeographic.com/culture/food/"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/chicago-deep-dish-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  }
};
