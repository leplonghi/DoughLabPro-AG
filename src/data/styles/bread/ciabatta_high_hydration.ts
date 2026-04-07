import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * CIABATTA HIGH HYDRATION
 * 
 * Researched and validated content:
 * - 1982 invention by Arnaldo Cavallari (Adria, Veneto)
 * - Italian response to French Baguettes
 * - "Ciabatta" (Slipper) etymology and shape
 * - Science of high hydration (70%+) and open crumb
 */
export const ciabatta_high_hydration: DoughStyleDefinition = {
  id: "ciabatta_high_hydration",
  name: "Ciabatta High Hydration",
  category: "bread",
  recipeStyle: RecipeStyle.CIABATTA,
  family: "Italian Artisan Bread",

  origin: {
    country: "Italy",
    region: "Adria, Veneto",
    period: "1982, created by Arnaldo Cavallari"
  },

  description: "Ciabatta was created in 1982 by Arnaldo Cavallari, a miller and baker in Adria, Veneto, as Italy's response to the popularity of French baguettes. The name means 'slipper' in Italian, referencing its characteristic flat, elongated shape and open, airy crumb structure with large, irregular holes.",

  history: "Ciabatta is a remarkably recent invention in the world of bread. In 1982, Arnaldo Cavallari, a miller and baker in Adria, Veneto, developed ciabatta as a direct response to French baguettes threatening traditional Italian bread sales for sandwiches. He initially named it 'ciabatta polesana' after Polesine, his home region. The defining characteristic is its high hydration dough (often 75% or more water), which creates a light, airy texture with large, irregular holes (alvéolage). This high water content, combined with long fermentation using a biga, creates a chewy texture and signature open crumb. By 1999, Cavallari's company, Molini Adriesi, had licensed the recipe to bakers in 11 countries. It was introduced to the US in 1987, quickly becoming a global favorite for sandwiches.",

  difficulty: "Hard",
  fermentationType: "preferment",

  base_formula: [
    { name: "High-protein Bread flour", percentage: 100 },
    { name: "Water", percentage: 80 },
    { name: "Salt", percentage: 2.2 },
    { name: "Instant Yeast", percentage: 0.4 },
    { name: "Olive oil (optional)", percentage: 2 },
    { name: "Biga (Preferment)", percentage: 30 }
  ],

  technicalProfile: {
    hydration: [75, 85],
    salt: [2.0, 2.5],
    oil: [0, 3],
    sugar: [0, 0],
    flourStrength: "Strong bread flour, 12.5-13.5% protein to support high hydration",
    ovenTemp: [230, 250],
    recommendedUse: [
      "Italian panini and sandwiches",
      "Bruschetta and crostini base",
      "Dipping in high-quality olive oil"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 500, min: 300, max: 800 },
    fermentationSteps: [
      "Biga Preparation: Mix flour, water, and a tiny amount of yeast. Ferment 12-16 hours. [Science: Develops organic acids and strengthens gluten network through long enzyme activity]",
      "Mixing: Combine biga, remaining flour, water, yeast, and salt. Use high-speed mixing initially, then rest. [Science: High hydration requires intensive early development to build structure]",
      "Stretch & Fold: Perform 3-4 sets of folds directly in the bowl during bulk fermentation. [Science: Builds strength gently while preserving large gas bubbles (alveoli)]",
      "Bulk Fermentation: 3-4 hours until dough is jiggly and full of air. [Science: Gas production expands the high-hydration network]",
      "Shaping: Gently pour onto a heavily floured surface. Cut into rectangles without degassing. [Science: Minimal handling is critical to keep the 'slipper' airy]",
      "Baking with Steam: Bake at 450°F with steam for the first 10-12 mins. [Science: Steam facilitates oven spring and creates a thin, shattering crust]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W320-380 (Very strong)",
      pl_ratio: "0.50-0.65 (Balanced-Extensible)",
      absorption_capacity: "High (75-85%)",
      protein_type: "Strong wheat with high glutenin content",
      science_explanation: "Only high-protein flour with a strong gluten network can support 80% hydration without turning into a puddle. The W index must be high enough to resist the enzymatic breakdown during long fermentation."
    },
    thermalProfile: {
      oven_type: "Hearth or deck oven with high thermal mass",
      heat_distribution: "Strong bottom conduction (stone), steam convection",
      crust_development: "Thin, pale-to-golden, shattering crispness",
      crumb_structure: "Gigantic, irregular holes (alveoli) with gelatinized, translucent walls"
    },
    fermentationScience: {
      yeast_activity: "High; accelerated in the high-moisture environment",
      ph_target: "pH 5.2 - 5.5",
      organic_acids: "Acetic acids from the biga provide the classic Italian tang",
      enzymatic_activity: "Protease activity is high, which helps create the extensible dough that stretches around large gas bubbles"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Water temperature is your control",
        explanation: "High hydration doughs heat up fast during intensive mixing. Use ice-cold water to keep the final dough temperature around 24°C (75°F) for controlled fermentation."
      },
      {
        tip: "Don't over-mix—stretch and fold instead",
        explanation: "While you need initial strength, the best open crumb in Ciabatta comes from time and folds. Folds align the gluten fibers without knocking out the air."
      },
      {
        tip: "Heavily flour the workspace",
        explanation: "Ciabatta dough is very sticky. Use a generous amount of semolina or flour on your board and hands. You are 'floating' the dough rather than handling it."
      },
      {
        tip: "Proof on linen (Couche)",
        explanation: "Proofing the cut 'slippers' on floured linen helps maintain their rectangular shape and prevents the dough from spreading too flat before it hits the oven."
      },
      {
        tip: "Listen for the 'hollow' sound",
        explanation: "Because Ciabatta is so airy, it should feel remarkably light for its size when done. Tap the bottom; it should sound like a drum."
      }
    ],
    what_if: [
      {
        scenario: "The dough is a liquid puddle and won't hold shape",
        result: "Flour was too weak or over-hydration",
        correction: "Next time, use a higher protein flour (W350+) or reduce hydration by 5% until technique improves."
      },
      {
        scenario: "The inside is gummy and wet",
        result: "Under-baked or not enough steam at the start",
        correction: "Increase bake time; ensure the steam is heavy in the first 10 mins and then vented for the final 10 mins."
      },
      {
        scenario: "The holes are small and even like white bread",
        result: "Over-handling/degassing during shaping",
        correction: "Be extremely gentle after bulk fermentation. Don't 'knead' the dough after it's fermented; just cut and lift."
      },
      {
        scenario: "The crust is too thick and hard",
        result: "Steam was insufficient or oven too cold",
        correction: "Preheat the oven longer (at least 1 hour) and use a steam-generating pan with lava rocks."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Baguette",
        difference: "Ciabatta is flatter, much wetter (80% vs 68%), and has much larger, irregular holes",
        why_choose_this: "Choose Ciabatta for sandwiches (panini) where you want a soft, holey carrier for oil and fillings."
      },
      {
        target_style: "Focaccia",
        difference: "Ciabatta is leaner (no or low oil) and baked on a hearth; focaccia is baked in a pan with significant oil",
        why_choose_this: "Choose Ciabatta for a lighter, crispier bread with a clean wheat flavor."
      },
      {
        target_style: "Pain Rustique",
        difference: "Pain Rustique is similar but often uses poolish and has a slightly tighter crumb than high-hydration Ciabatta",
        why_choose_this: "Choose Ciabatta for the absolute maximum airiness possible in a loaf."
      }
    ],
    q_and_a: [
      {
        question: "Why is ciabatta so holey and airy?",
        answer: "It's the combination of 80% hydration and very gentle handling. The high water content creates steam, and the strong gluten network (from biga and folds) traps large bubbles that aren't squeezed out during shaping.",
        context: "Technique"
      },
      {
        question: "Is Ciabatta a centuries-old tradition?",
        answer: "Surprisingly, no. It was invented in 1982 by Arnaldo Cavallari to compete with the French baguette which was dominating the sandwich market in Italy.",
        context: "History"
      },
      {
        question: "What does 'Ciabatta' actually mean?",
        answer: "It means 'slipper' in Italian. The bread is flat, elongated, and slightly irregular, resembling a house slipper or old shoe.",
        context: "Etymology"
      },
      {
        question: "Can I make this without a biga?",
        answer: "You can use a direct method, but you'll lose the characteristic Italian 'tang' and the enzyme-driven gluten strength that helps the bread hold its shape.",
        context: "Methods"
      },
      {
        question: "What kind of flour is best?",
        answer: "You need a 'Manitoba' style flour or a strong bread flour with at least 13% protein. Low-protein '00' flour will collapse under this much water.",
        context: "Ingredients"
      }
    ],
    fermentation_methods: [
      {
        method: "Hybrid",
        suitability: "Authentic",
        notes: "Using a biga (preferment) with a small addition of yeast in the final mix is the authentic 1982 Cavallari method."
      },
      {
        method: "Direct",
        suitability: "Possible",
        notes: "Easier for beginners but produces a less aromatic and less structural result."
      },
      {
        method: "Sourdough",
        suitability: "Possible",
        notes: "Modern Adaptation - Known as 'Ciabatta al Lievito Naturale'. Produces a thicker crust and more acidic crumb."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Ciabatta pushes the limits of wheat flour. At 80% hydration, the dough is technically a 'thick batter'. This moisture levels are essential for the Maillard reaction to occur on a very thin crust and for the gelatinization of starches that makes the crumb look translucent and taste moist.",
    methodSuitability: {
      direct: { suitable: true, notes: "Requires very careful folding to build enough strength." },
      biga: { suitable: true, notes: "The classic method. Biga provides the necessary tenacity to balance the high hydration's extensibility." },
      poolish: { suitable: true, notes: "Produces a very extensible dough, though it can be harder to shape into the 'slipper' form." }
    },
    whatIf: [
      {
        scenario: "You omit the folds",
        outcome: "The dough will never develop enough strength to hold the gas, resulting in a flat, dense pancake",
        solution: "Perform at least 3 sets of strength-building folds every 30 minutes"
      },
      {
        scenario: "You handle the dough like pizza dough (stretching it)",
        outcome: "You will degas the large alveoli, losing the signature open crumb",
        solution: "Treat the dough like a 'cloud'—lift and place, never pull or press"
      },
      {
        scenario: "You bake without enough top heat",
        outcome: "The bread won't get enough oven spring, leading to a pale and gummy top",
        solution: "Ensure the oven is fully preheated to at least 450°F (230°C)"
      }
    ],
    comparisons: [
      {
        vsStyle: "Pane di Genzano",
        difference: "Genzano is a large round loaf with a dark, bran-coated crust; Ciabatta is a small, elongated slipper with a lighter crust."
      },
      {
        vsStyle: "Focaccia Barese",
        difference: "Barese is loaded with olive oil and potatoes; Ciabatta is a lean dough focused on pure wheat flavor."
      }
    ],
    proTips: [
      "Use 'Double Zero' flour only if it's the high-protein reinforced version (W300+)",
      "Dust the top with extra flour before baking for that classic rustic, white-streaked look",
      "Let the bread cool completely on a wire rack; cutting while warm will make the high-moisture crumb gummy",
      "Arnaldo Cavallari's original company was Molini Adriesi, which still promotes the 'Ciabatta Italia' brand",
      "If the dough is too wet to shape rectangles, bake it in a pan as a 'Pan Focaccia'—it's still delicious!"
    ]
  },

  tags: ["italian", "ciabatta", "high hydration", "open crumb", "lean dough"],

  watchouts: [
    "Over-mixing deflates dough and destroys open crumb structure",
    "Insufficient fermentation results in weak gluten and flat bread",
    "Wrong flour type creates dense, gummy texture instead of airy",
    "Degassing during shaping is the most common mistake",
    "Cold oven causes the dough to spread before it can rise"
  ],

  notes: [
    "Created in 1982 by Arnaldo Cavallari",
    "Name 'ciabatta' means 'slipper'",
    "High hydration (75-85%) is key to signature holes",
    "Traditionally uses a biga (preferment)",
    "Icon of modern Italian baking innovation"
  ],

  recommendedFlavorComponents: ["olive_oil_extra_virgin", "balsamic_modena", "prosciutto_crudo", "azeitonas"],

  references: [
    {
      source: "The Guardian - The rise and rise of the ciabatta",
      url: "https://www.theguardian.com/food/2019/apr/30/the-rise-and-rise-of-the-ciabatta"
    },
    {
      source: "Molini Adriesi - History of Ciabatta",
      url: "http://www.moliniadriesi.it/ciabatta-italia/"
    },
    {
      source: "Arnaldo Cavallari - Wikipedia",
      url: "https://it.wikipedia.org/wiki/Arnaldo_Cavallari"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/ciabatta-high-hydration-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  }
};
