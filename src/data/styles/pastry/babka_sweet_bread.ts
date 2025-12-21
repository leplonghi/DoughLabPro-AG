import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * BABKA SWEET BREAD
 * 
 * Researched and validated content:
 * - Origin: Eastern Europe (Jewish communities, Poland/Ukraine)
 * - Technique: Laminated spiral, lengthwise cut, braided/twisted loaf
 * - Ingredients: Brioche-style dough, Dark Chocolate/Cocoa, Cinnamon, Streusel topping
 * - Characteristics: Striated 'marble' crumb, high filling-to-dough ratio, moist and dense
 */
export const babka_sweet_bread: DoughStyleDefinition = {
  id: "babka_sweet_bread",
  name: "Babka Sweet Bread",
  category: "pastry",
  recipeStyle: RecipeStyle.BABKA,
  family: "Enriched Braided Breads",

  origin: {
    country: "Poland / Ukraine / Eastern Europe",
    region: "Ashkenazi Jewish communities",
    period: "Early 19th Century (Origin) / 20th Century (NYC modern chocolate version)"
  },

  description: "Babka is a sweet, braided leavened bread that originated in the Jewish communities of Poland and Ukraine. Traditionally filled with cinnamon or fruit jam, the modern 'NYC-style' babka is iconic for its thick swirls of chocolate and crunchy streusel topping. The name 'Babka' means 'grandmother', referring to the skirt-like pleats formed by the classic tall molds used in its early history.",

  history: "Babka evolved as a way to use leftover Challah dough, enriched further with extra sugar and fruit. When Jewish immigrants moved to New York in the late 19th and early 20th centuries, they adapted the recipe. Chocolate was expensive in Europe and was not a traditional filling; however, it became the hallmark of the American Babka. In the 1990s and 2010s, Babka saw a global resurgence, with bakeries like Breads Bakery in NYC innovating with the 'laminated' feel—rolling the dough ultra-thin to create hundreds of fine layers of chocolate.",

  difficulty: "Hard",
  fermentationType: "direct",

  base_formula: [
    { name: "Strong Bread Flour (W300)", percentage: 100 },
    { name: "Whole Milk (cold)", percentage: 40 },
    { name: "Sugar", percentage: 15 },
    { name: "Unsalted Butter (cubed, cold)", percentage: 25 },
    { name: "Whole Eggs", percentage: 20 },
    { name: "Instant Yeast", percentage: 2 },
    { name: "Salt", percentage: 1.5 },
    { name: "Chocolate Filling (Chocolate + Butter + Cocoa)", percentage: 60 }
  ],

  technicalProfile: {
    hydration: [55, 65], // Including high egg and milk content
    salt: [1.2, 1.8],
    oil: [20, 30], // Dough fat content
    sugar: [12, 20], // Dough sugar
    flourStrength: "High-protein Bread Flour (12.5%+) to handle the heavy twisting and high filling load",
    ovenTemp: [175, 190],
    recommendedUse: [
      "Traditional Jewish celebration bread",
      "Coffee-shop loaf",
      "Dessert bread"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 600, min: 400, max: 900 },
    fermentationSteps: [
      "Mixing (Brioche Method): Mix flour, milk, eggs, sugar, and yeast until a strong windowpane is reached. Then incorporate fat slowly. [Science: The gluten map must be fully established before adding fat to ensure the loaf doesn't collapse under the heavy filling]",
      "Bulk Proof & Chill: 1 hour at room temp, then 12-24 hours in the fridge. [Science: Cold retarding the dough is essential for handling; the high fat makes it too soft to roll at room temperature]",
      "Rolling: Roll the cold dough into a very thin rectangle. [Science: The thinner the dough, the more 'swirls' you get in the final slice]",
      "Filling: Spread the chocolate or cinnamon paste evenly to the edges. [Science: The fat in the filling acts as a barrier, preventing the dough layers from merging]",
      "Rolling & Cutting: Roll into a tight log, then cut the log lengthwise down the center to expose all the interior layers. [Science: This 'NYC' method creates the beautiful striated aesthetic on top of the loaf]",
      "Braiding: Twist the two halves over each other, keeping the exposed layers facing upwards. [Science: Increases the surface area for the Maillard reaction and prevents a 'bready' top]",
      "Bake & Syrup: Bake until the internal temp is 88-90°C. Immediately brush with a simple sugar syrup while hot. [Science: The syrup seals the moisture in, creating the characteristic shiny, slightly tacky crust]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W300-340 (Strong and Elastic)",
      pl_ratio: "0.50-0.60 (Balanced)",
      absorption_capacity: "High (60%+)",
      protein_type: "Strong wheat with high glutenin content",
      science_explanation: "The dough needs extreme tenacity to support a filling that often weighs 60-100% of the dough weight itself. A weak flour will lead to 'tunneling' where the dough detaches from the chocolate layers."
    },
    thermalProfile: {
      oven_type: "Static or Convection",
      heat_distribution: "Moderate heat. A pullman or loaf pan is used to force the expansion upwards",
      crust_development: "Thin, glossy (syrup-coated), with crunchy streusel bits",
      crumb_structure: "Dense but soft, with alternating thin layers of dough and dark fudge"
    },
    fermentationScience: {
      yeast_activity: "Slowed by high sugar (osmotic pressure). Cold fermentation allows for organic acid production (lactic) which balances the sweetness",
      ph_target: "pH 5.4 - 5.6",
      organic_acids: "Lactic acid dominant due to milk and enrichment",
      enzymatic_activity: "Minimal during the cold rest, but high during the final proof (28°C) to ensure a good lift despite the heavy inclusions"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Freeze the log",
        explanation: "Before cutting the rolled log lengthwise, put it in the freezer for 10-15 minutes. This firms up the butter in the filling, allowing for a perfectly clean cut without smearing the chocolate."
      },
      {
        tip: "Don't skimp on the Syrup",
        explanation: "The sugar syrup isn't just for sweetness. It creates a moisture barrier that keeps the babka soft for up to a week. Use a 1:1 water to sugar ratio."
      },
      {
        tip: "Streusel for texture",
        explanation: "A traditional babka always has a crunchy 'crumble' on top. Mixing equal parts flour, cold butter, and sugar creates the contrast to the soft interior."
      },
      {
        tip: "Check the 'Shred'",
        explanation: "When you pull a piece of babka, it should peel away in long, vertical fibers. This is the sign of a properly developed gluten network."
      }
    ],
    what_if: [
      {
        scenario: "The chocolate filling leaks and burns",
        result: "The filling had too much butter or wasn't rolled tightly enough",
        correction: "Ensure your chocolate paste has enough cocoa powder to absorb excess fat, and roll the dough like a tight carpet."
      },
      {
        scenario: "The babka is dry like a cake",
        result: "Too much flour or over-baked",
        correction: "Use a scale! Measure your liquids precisely and use a thermometer to pull the bread at 90°C."
      },
      {
        scenario: "The layers are 'doughy' and raw",
        result: "Under-proofed or oven was too hot (outside cooked, inside raw)",
        correction: "Lower the oven temperature to 175°C and ensure the loaf has doubled in size before entering the oven."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Challah",
        difference: "Babka is enriched further with butter and sugar and contains heavy fillings; Challah is a lean-to-medium enrichment (oil/honey) without fillings.",
        why_choose_this: "Choose Babka when you want a decadent dessert-level bread."
      },
      {
        target_style: "Cinnamon Rolls",
        difference: "Babka has more layers and is baked as a loaf; Cinnamon rolls are individual portions with a higher surface-to-crumb ratio.",
        why_choose_this: "Choose Babka for a more dramatic presentation and deeper flavor development."
      },
      {
        target_style: "Povatizsa",
        difference: "A Croatian/Slovenian similar style, but rolled much thinner (paper-thin) and usually filled only with walnuts.",
        why_choose_this: "Choose Babka for the flexibility of chocolate fillings."
      }
    ],
    q_and_a: [
      {
        question: "Chocolate or Cinnamon?",
        answer: "Tradition says Cinnamon (Europe), but the 'NYC' cult status belongs to Chocolate. Both are authentic in their respective contexts.",
        context: "Culture"
      },
      {
        question: "Why is it baked in a pan?",
        answer: "The pan supports the heavy dough as it rises, preventing it from spreading out and ensuring the swirled interior cooks through evenly.",
        context: "Technique"
      },
      {
        question: "Can I use Nutella?",
        answer: "You can, but real babka filling uses melted dark chocolate and cocoa powder to achieve a less sweet, more intense 'fudge' layer.",
        context: "Ingredients"
      },
      {
        question: "Why 'Babka' (Grandmother)?",
        answer: "It refers to the old-fashioned wide, pleated skirts that grandmothers wore, which the original tall, fluted molds resembled.",
        context: "Etymology"
      }
    ],
    fermentation_methods: [
      {
        method: "Hybrid",
        suitability: "Authentic",
        notes: "Most modern artisanal babkas use a small amount of yeast combined with long cold fermentation."
      },
      {
        method: "Sourdough",
        suitability: "Ideal",
        notes: "Produces an incredible texture and shelf life, though it's much harder to achieve a light rise with heavy chocolate."
      },
      {
        method: "Direct",
        suitability: "Possible",
        notes: "Fast, but lacks the flavor and ease-of-handling that cold rest provides."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Babka dough is effectively a 'Rich Brioche'. The hydration comes mostly from eggs and milk. The goal is a dough that is firm when cold (for rolling) but melts in the mouth when baked.",
    methodSuitability: {
      direct: { suitable: true, notes: "Possible but not recommended for braiding." },
      biga: { suitable: false, notes: "Adds too much strength; makes rolling thin impossible." },
      poolish: { suitable: true, notes: "Recommended for a 15% portion of the flour to add extensibility." }
    },
    whatIf: [
      {
        scenario: "You use 100% Sourdough",
        outcome: "The rise will take 12-16 hours for the final proof. The flavor will be more balanced (less sweet) and the crumb will be softer.",
        solution: "Use a very young, sweet levain (refreshed 3 times) to avoid sourness."
      }
    ],
    comparisons: [
      {
        vsStyle: "Eastern European vs NYC Style",
        difference: "European babkas are often drier, fruit-filled, and less 'gooey' than the butter-drenched NYC chocolate versions."
      }
    ],
    proTips: [
      "Toast your nuts before adding to the chocolate filling for an extra layer of crunch.",
      "Add a pinch of salt to the syrup—it stops the babka from being cloyingly sweet.",
      "The best way to eat babka is slightly warm, toasted in a pan with a bit of butter.",
      "A 'double-braid' (4 strands) creates an even more intricate pattern but requires very firm cold dough.",
      "If the chocolate is too hard to spread, microwave it for 5 seconds—don't let it become liquid."
    ]
  },

  tags: ["polish", "jewish", "pastry", "babka", "chocolate", "dessert bread"],

  watchouts: [
    "Under-proofing is the #1 mistake—the heavy chocolate will crush the dough.",
    "Rolling the dough too thick results in a 'bready' babka with few swirls.",
    "Not retarding the dough? It will be a sticky mess that you can't shape.",
    "Baking too hot will burn the streusel before the center is done."
  ],

  notes: [
    "Jewish-Eastern European heritage.",
    "High filling-to-dough ratio.",
    "Requires strong bread flour.",
    "Must be cold-retarded for shaping.",
    "Finished with sugar syrup."
  ],

  references: [
    {
      source: "Modernist Bread (Enriched Swirled Breads)",
      url: "https://modernistcuisine.com/books/modernist-bread/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2017"
    },
    {
      source: "Zingerman's Guide to Better Baking (Babka section)",
      url: "https://www.zingermansbakehouse.com/books/",
      author: "Amy Emberling & Frank Carollo",
      year: "2017"
    },
    {
      source: "Breads Bakery NYC - Artisanal Techniques",
      url: "https://www.breadsbakery.com/",
      author: "Uri Scheft",
      year: "2023"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/babka-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["dark_chocolate_70", "salted_butter_normandy", "cinnamon_ceylon", "walnuts", "poppy_seeds", "vanilla_madagascar"]
};
