import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * ST. LOUIS STYLE
 * 
 * Researched and validated content:
 * - Origin: St. Louis, Missouri (Amedeo Fiore 1945, Imo's 1964)
 * - Technique: Cracker-thin unleavened crust, square "tavern" cut
 * - Ingredients: Provel cheese (Cheddar, Swiss, Provolone), sweet sauce
 * - Science: No-yeast dough creates a dense, crispy snap without air pockets
 */
export const st_louis_thin: DoughStyleDefinition = {
  id: "st_louis_thin",
  name: "St. Louis Style",
  category: "pizza",
  recipeStyle: RecipeStyle.THIN_CRUST,
  family: "American Regional Pizza",

  origin: {
    country: "United States",
    region: "St. Louis, Missouri",
    period: "1964, popularized by Ed and Margie Imo"
  },

  description: "St. Louis-style pizza is defined by its cracker-thin, yeastless crust that provides a distinct 'snap'. It is famous for using Provel cheese—a processed blend of cheddar, swiss, and provolone—and for being sliced into small squares known as the 'tavern cut' or 'party cut'. The sauce is traditionally sweeter and heavily seasoned with oregano.",

  history: "The roots of St. Louis pizza trace back to Amedeo Fiore, who served thin-crust pizza at his restaurant in 1945. However, the style became a cultural phenomenon in 1964 when Ed and Margie Imo opened their first shop. Ed, a former tile cutter, supposedly influenced the square-cut technique. They popularized the use of Provel cheese, which was developed in 1947 by the Costa Grocery company specifically to solve the 'stringy cheese' problem on thin pizzas, allowing for a cleaner bite.",

  difficulty: "Easy",
  fermentationType: "direct",

  base_formula: [
    { name: "All-purpose or Bread flour", percentage: 100 },
    { name: "Water", percentage: 50 },
    { name: "Salt", percentage: 1.5 },
    { name: "Olive oil or Shortening", percentage: 5 },
    { name: "Baking Powder (optional for lift)", percentage: 1 },
    { name: "Sugar (for sauce-style sweetness)", percentage: 2 }
  ],

  technicalProfile: {
    hydration: [45, 52],
    salt: [1.5, 2],
    oil: [4, 8],
    sugar: [1, 3],
    flourStrength: "All-purpose or medium-protein bread flour (10-11% protein)",
    ovenTemp: [230, 260],
    recommendedUse: [
      "The Classic: Sauce, Provel, and Sausage",
      "The Deluxe: Green pepper, onion, and bacon",
      "Party snacks and shared appetizers"
    ],
    difficulty: "Easy",
    ballWeight: { recommended: 300, min: 250, max: 400 },
    fermentationSteps: [
      "Mix: Combine ingredients and mix until smooth. No extensive kneading required. [Science: Absence of yeast means we don't need a complex gluten network for gas retention]",
      "Rest: 30-60 minutes at room temperature. [Science: Relaxation of whatever gluten formed makes rolling easier]",
      "Roll: Use a rolling pin or sheeter to achieve 1/8 inch thickness. [Science: Manual degassing ensures the cracker texture]",
      "Dock: Prick the dough with a fork or docker. [Science: Prevents large steam bubbles from lifting the cheese during the bake]",
      "Pre-bake (Optional): Bake for 2-3 mins without toppings for extra snap. [Science: Removes moisture from the base before the sauce is added]",
      "Dress: Sauce to the edge, heavy Provel, and toppings. [Science: Provel's high fat and low melting point create a creamy seal over the crust]",
      "Bake: 8-10 minutes until edges are golden and cheese is molten. [Science: Low heat (compared to Neapolitan) allows the cracker to dry out and crisp completely]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W180-220 (Weak to Medium)",
      pl_ratio: "0.40-0.50 (Extensible)",
      absorption_capacity: "Low (50%)",
      protein_type: "Soft or medium wheat",
      science_explanation: "A high-protein flour is not desired here as we want a 'short' texture (like a biscuit or cracker) rather than a chewy or elastic one."
    },
    thermalProfile: {
      oven_type: "Standard electric or gas deck oven",
      heat_distribution: "Moderate bottom conduction, high convection",
      crust_development: "Uniformly crispy, snapping brittle, no rim (cornicione)",
      crumb_structure: "Dense, non-porous, similar to a saltine cracker"
    },
    fermentationScience: {
      yeast_activity: "None or minimal",
      ph_target: "pH 5.8-6.0 (closer to neutral)",
      organic_acids: "Low; flavor comes primarily from the wheat, oil, and toppings",
      enzymatic_activity: "Low; color is achieved via added sugar or longer bake times rather than fermentation-driven sugar release"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Provel is non-negotiable",
        explanation: "The flavor of St. Louis pizza is 50% the cheese. If you can't find Provel, mix 2 parts White Cheddar, 1 part Swiss, and 1 part Provolone with a tiny drop of liquid smoke. Real mozzarella will be too stringy."
      },
      {
        tip: "The Sauce must be sweet",
        explanation: "St. Louis sauce is sweeter than NY or Neapolitan. Use a bit of sugar or corn syrup in your tomato base and go heavy on the dried oregano."
      },
      {
        tip: "Roll it thin enough to see through",
        explanation: "This is a cracker, not a bread. You should roll the dough until it's almost translucent on the board. A rolling pin is your best friend here."
      },
      {
        tip: "The Tavern Cut",
        explanation: "Always cut into roughly 2-inch squares. This style was designed for bars where people could hold a small square in one hand and a beer in the other without it flopping."
      },
      {
        tip: "Don't over-knead",
        explanation: "If you knead too much, the dough will become tough. You want to mix just enough to incorporate. Think of it more like pie crust than pizza dough."
      }
    ],
    what_if: [
      {
        scenario: "The crust is leathery instead of crispy",
        result: "Dough was too thick or hydration was too high",
        correction: "Roll it thinner next time and ensure hydration is around 50%. The dough should feel stiff."
      },
      {
        scenario: "The cheese separates into oil",
        result: "Oven was too hot or cheese wasn't a processed blend",
        correction: "Provel is a processed cheese (like American cheese) and should melt smoothly. If using a custom blend, incorporate a tiny bit of sodium citrate to keep it emulsified."
      },
      {
        scenario: "The pizza has large bubbles",
        result: "You forgot to 'dock' or prick the dough",
        correction: "Use a fork to prick the entire surface of the dough before topping. This lets steam escape without lifting the cheese."
      },
      {
        scenario: "The edges are burnt but middle is raw",
        result: "Too many toppings in the center",
        correction: "Spread toppings evenly all the way to the edge. St. Louis style doesn't have a raised crust, so toppings should reach the very periphery."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Chicago Thin (Tavern Style)",
        difference: "Chicago Thin usually uses yeast and is a bit more 'bready-crisp'; St. Louis is a true cracker with no yeast and Provel cheese.",
        why_choose_this: "Choose St. Louis for the most unique cheese flavor and a lighter, snappier bite."
      },
      {
        target_style: "New York Style",
        difference: "NY is foldable and chewy. St. Louis is rigid and breaks when folded.",
        why_choose_this: "Choose St. Louis when you want a pizza that eats like a snack or appetizer."
      },
      {
        target_style: "Matzah / Unleavened Bread",
        difference: "The base technique is similar, but St. Louis pizza dough incorporates oil/shortening to soften the brittle snap into something more palatable.",
        why_choose_this: "Choose St. Louis for the ultimate thinness."
      }
    ],
    q_and_a: [
      {
        question: "Why squares instead of wedges?",
        answer: "Historically, it was served in taverns on napkins or small plates. Squares are easier to share and don't require the structural integrity of a triangular slice to stay flat.",
        context: "Tradition"
      },
      {
        question: "What exactly is Provel?",
        answer: "It's a 'processed cheese product' combining cheddar, swiss, and provolone. It was engineered in the 1940s to melt perfectly on thin pizzas without the grease or stringiness of mozzarella.",
        context: "Ingredients"
      },
      {
        question: "Is there really no yeast?",
        answer: "The 'canonical' Imo's style and many local purists use an unleavened dough. However, some shops use a tiny amount of yeast for a 'half-risen' hybrid cracker.",
        context: "Technique"
      },
      {
        question: "Why is the sauce sweet?",
        answer: "It's a regional preference influenced by the Sicilian-style sauces of the early 20th century immigrants in the Hill neighborhood of St. Louis.",
        context: "Flavor"
      },
      {
        question: "Can I use a pizza stone?",
        answer: "Yes, a stone or steel is highly recommended to get the 'cracker' snap in a home oven.",
        context: "Equipment"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "No-yeast direct mix. Quick and effective."
      },
      {
        method: "Hybrid",
        suitability: "Possible",
        notes: "A tiny amount of yeast (0.1%) can be used to add a hint of 'breadiness' if a pure cracker is too brittle for you."
      },
      {
        method: "Sourdough",
        suitability: "Not Recommended",
        notes: "The acidity and lift of sourdough would destroy the 'Provel-forward' cracker profile."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "St. Louis style relies on 'Inhibited Gluten Development'. By keeping hydration low (50%) and adding fat (oil/shortening), we prevent the long gluten chains from forming. This is why the crust snaps like a cracker instead of stretching like a pizza.",
    methodSuitability: {
      direct: { suitable: true, notes: "The only real way." },
      biga: { suitable: false, notes: "Adds too much elasticity and air." },
      poolish: { suitable: false, notes: "Too much extensibility and bubbles." }
    },
    whatIf: [
      {
        scenario: "You use high-protein flour and knead for 10 minutes",
        outcome: "The pizza will be tough and rubbery rather than crispy.",
        solution: "Use all-purpose flour and stop mixing as soon as the dough comes together."
      }
    ],
    comparisons: [
      {
        vsStyle: "Imo's vs Cecil Whittaker's",
        difference: "Imo's is the standard-bearer; Cecil's is the primary local alternative, both adhering to the thin, Provel, square-cut mantra."
      }
    ],
    proTips: [
      "Let the dough rest for 1 hour to make rolling easier.",
      "Add a pinch of cayenne to the sauce for a subtle kick.",
      "Use a 'pastry' rolling technique: roll once, rotate 90 degrees, roll again.",
      "Provel is shelf-stable longer than mozz; it's a great pantry pizza option."
    ]
  },

  tags: ["st-louis", "thin-crust", "cracker-crust", "provel-cheese", "square-cut", "unleavened"],

  watchouts: [
    "Dough shrinking back? Let it rest another 15 minutes.",
    "Cheese not melting? ensure it's at room temperature before baking.",
    "Crust too hard? Increase the fat content (oil) slightly.",
    "Middle staying soft? Bake on a screen or pre-heated stone."
  ],

  notes: [
    "Famous logo: 'The Square Beyond Compare'.",
    "Invented in St. Louis's 'The Hill' neighborhood.",
    "Provel cheese is the defining ingredient.",
    "Unleavened dough is the standard.",
    "Tavern cut is mandatory for authenticity."
  ],

  references: [
    {
      source: "Imo's Pizza - Our Story",
      url: "https://www.imospizza.com/about-us/"
    },
    {
      source: "Serious Eats - St. Louis Style Pizza Profile",
      url: "https://www.seriouseats.com/st-louis-style-pizza"
    },
    {
      source: "Modernist Pizza (Cracker Crust Analysis)",
      url: "https://modernistcuisine.com/books/modernist-pizza/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2021"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/st-louis-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["provel_cheese", "oregano_dried", "garlic_fresh", "mozzarella_low_moisture", "italian_sausage"]
};
