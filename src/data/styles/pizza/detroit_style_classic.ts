import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * DETROIT STYLE PIZZA
 * 
 * Researched and validated content with authoritative sources:
 * - Buddy's Rendezvous (Original Detroit style, 1946)
 * - Detroit automotive industry heritage
 * - Wisconsin brick cheese tradition
 * - Frico technique and science
 */
export const detroit_style_classic: DoughStyleDefinition = {
  id: "detroit_style_classic",
  name: "Detroit Style Pizza",
  category: "pizza",
  recipeStyle: RecipeStyle.DETROIT,

  origin: {
    country: "United States",
    region: "Detroit, Michigan",
    period: "1946, Buddy's Rendezvous"
  },

  description: "Detroit-style pizza is a rectangular pizza with a thick, airy crust and signature crispy, caramelized cheese edges called 'frico'. Invented in 1946 at Buddy's Rendezvous using repurposed automotive industry steel pans, it embodies Detroit's industrial heritage and culinary innovation.",

  history: "Detroit-style pizza originated in 1946 at Buddy's Rendezvous, a neighborhood bar owned by Gus Guerra on Detroit's east side. Guerra, with help from his wife Anna or employee Connie Piccinato, developed the pizza drawing inspiration from Sicilian-style pizza. Legend has it that Guerra acquired the distinctive blue steel pans from a friend who worked in an automotive factory, where they were originally used to hold small parts or as drip pans. These heavy, thick steel pans became crucial to the style, conducting heat evenly and creating a soft, airy crust with a crunchy exterior. The pizza gained wider recognition nationally after the 2008 financial crisis, as Detroit natives moved across the country seeking to recreate the beloved taste of home.",

  difficulty: "Medium",
  fermentationType: "cold",

  base_formula: [
    { name: "Bread flour", percentage: 100 },
    { name: "Water", percentage: 72 },
    { name: "Salt", percentage: 2.2 },
    { name: "Olive oil", percentage: 3 },
    { name: "Sugar", percentage: 1 },
    { name: "Dry yeast", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [70, 75],
    salt: [2, 2.5],
    oil: [2, 4],
    sugar: [0.5, 1.5],
    flourStrength: "Bread flour, 12-13% protein for structure and chew",
    ovenTemp: [245, 275],
    recommendedUse: [
      "Classic Detroit square with pepperoni and brick cheese",
      "Variations with sausage, mushrooms, or other toppings"
    ],
    difficulty: "Medium",
    ballWeight: { recommended: 600, min: 500, max: 800 },
    fermentationSteps: [
      "Mix: Combine flour, water, salt, oil, sugar, and yeast until smooth. [Science: High hydration (70-75%) creates light, airy crumb with open structure]",
      "Bulk Fermentation: 24-72 hours cold fermentation at 4°C. [Science: Long cold retard develops complex flavors and improves texture]",
      "Press into Pan: Press dough into heavily oiled blue steel pan. [Science: Oil creates fried bottom; pressing maintains airy texture]",
      "Final Proof: 2-4 hours at room temperature until doubled. [Science: Dough rises to fill pan, creating characteristic thickness]",
      "Top: Spread Wisconsin brick cheese ALL THE WAY to edges. [Science: Cheese against hot steel creates frico - caramelized, crispy edges]",
      "Bake: 475-525°F for 12-15 minutes until cheese edges are deeply caramelized. [Science: High heat caramelizes cheese while interior stays airy]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W320-360 (High strength)",
      pl_ratio: "0.55-0.65 (Balanced)",
      absorption_capacity: "High (70-75%)",
      protein_type: "Bread flour (12-13% protein)",
      science_explanation: "Bread flour with high hydration creates strong gluten network that supports airy, focaccia-like texture while maintaining structure"
    },
    thermalProfile: {
      oven_type: "Conventional or deck oven with blue steel pan",
      heat_distribution: "Intense conduction from steel pan bottom",
      crust_development: "Crispy, fried bottom; caramelized cheese edges (frico)",
      crumb_structure: "Light, airy, focaccia-like with open holes"
    },
    fermentationScience: {
      yeast_activity: "Retarded (cold fermentation)",
      ph_target: "pH 5.2-5.4",
      organic_acids: "Balanced lactic and acetic from long fermentation",
      enzymatic_activity: "High (cold fermentation develops flavor)"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Blue steel pans are essential",
        explanation: "The original automotive industry blue steel pans (or modern replicas) conduct heat evenly and create the signature crispy bottom and caramelized cheese edges. Aluminum pans don't work the same way."
      },
      {
        tip: "Wisconsin brick cheese is non-negotiable",
        explanation: "Brick cheese has the perfect fat content and melting properties to create frico. Mozzarella doesn't caramelize the same way. The cheese MUST reach the pan edges to create the signature crispy crust."
      },
      {
        tip: "Heavy oil coating is crucial",
        explanation: "Generously oil the pan before pressing dough. This creates the 'fried' bottom crust texture that's characteristic of Detroit style. Don't be shy with the oil."
      },
      {
        tip: "Cheese to the edges - always",
        explanation: "Spread cheese all the way to the pan edges, even slightly up the sides. As it melts, it will caramelize against the hot steel, creating the beloved frico crust."
      },
      {
        tip: "Corner pieces are gold",
        explanation: "Corner pieces have the maximum crispy cheese edge ratio and are the most prized. Friendly competition for corners is a Detroit tradition."
      }
    ],
    what_if: [
      {
        scenario: "No crispy cheese edges (frico)",
        result: "Cheese didn't reach pan edges or oven temperature too low",
        correction: "Spread cheese all the way to edges, even slightly up sides. Increase oven temperature to 500-525°F for proper caramelization."
      },
      {
        scenario: "Bottom crust is pale and soft",
        result: "Insufficient pan oiling or oven temperature too low",
        correction: "Use generous oil coating in pan. Ensure oven reaches 475-525°F. Blue steel pans are essential for heat conduction."
      },
      {
        scenario: "Dough is dense and heavy",
        result: "Insufficient hydration or over-proofing",
        correction: "Ensure 70-75% hydration. Don't over-proof - dough should double, not triple. High hydration creates airy texture."
      },
      {
        scenario: "Pizza sticks to pan",
        result: "Insufficient oil or pan not properly seasoned",
        correction: "Use generous oil coating. Season blue steel pans like cast iron before first use."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Sicilian",
        difference: "Detroit is lighter, airier with crispy cheese edges; Sicilian is denser, bread-like with traditional layering",
        why_choose_this: "Choose Detroit for signature frico edges and lighter, airier texture"
      },
      {
        target_style: "Chicago Deep Dish",
        difference: "Detroit has bread-like crust with cheese edges; Chicago has biscuit-like crust with sauce on top",
        why_choose_this: "Choose Detroit for crispy cheese edges and focaccia-like interior"
      },
      {
        target_style: "Grandma Pizza",
        difference: "Detroit uses steel pans and brick cheese; Grandma uses sheet pans and mozzarella",
        why_choose_this: "Choose Detroit for authentic frico edges and industrial heritage"
      }
    ],
    q_and_a: [
      {
        question: "What makes Detroit-style pizza unique?",
        answer: "Detroit-style pizza is defined by its rectangular shape (from automotive industry pans), thick but airy focaccia-like crust, and signature crispy, caramelized cheese edges called 'frico'. Wisconsin brick cheese is spread all the way to the pan edges where it caramelizes against the hot steel, creating a lacy, crunchy cheese crust that's the hallmark of the style.",
        context: "Detroit style characteristics"
      },
      {
        question: "Why are automotive pans used for Detroit-style pizza?",
        answer: "Legend has it that Gus Guerra, who invented Detroit-style pizza at Buddy's in 1946, acquired blue steel pans from a friend working in Detroit's automotive factories. These pans were originally used to hold small parts or as drip pans. The heavy, thick steel conducts heat evenly and creates the signature crispy bottom and caramelized cheese edges. This repurposing symbolizes Detroit's industrial resourcefulness.",
        context: "Automotive pan history"
      },
      {
        question: "What is 'frico' and why is it important to Detroit-style pizza?",
        answer: "Frico is the crispy, lacy, caramelized cheese crust that forms around the edges of Detroit-style pizza. It's created by spreading Wisconsin brick cheese all the way to the pan edges, where it melts and caramelizes against the hot steel during baking. This creates a crunchy, nutty, deeply flavorful cheese crust that's the most distinctive and beloved feature of Detroit-style pizza.",
        context: "Frico technique"
      },
      {
        question: "Can I make Detroit-style pizza without blue steel pans?",
        answer: "While blue steel pans are traditional and ideal, you can approximate Detroit style using well-seasoned cast iron pans or thick aluminum pans. The key is heavy, thick metal that conducts heat well. Thin pans won't create the proper crispy bottom and caramelized edges.",
        context: "Home baking"
      },
      {
        question: "Why is Wisconsin brick cheese used instead of mozzarella?",
        answer: "Wisconsin brick cheese has the perfect fat content and melting properties to create frico. It caramelizes beautifully against hot steel, creating crispy, lacy edges. Mozzarella has too much moisture and doesn't caramelize the same way. Brick cheese is essential for authentic Detroit style.",
        context: "Cheese selection"
      }
    ],
    fermentation_methods: [
      {
        method: "Hybrid",
        suitability: "Authentic",
        notes: "Cold Retard (24-72h). Standard practice for Detroit style. Develops complex flavors and improves texture."
      },
      {
        method: "Direct",
        suitability: "Possible",
        notes: "Same Day. Works in a pinch but lacks the complex flavors from cold fermentation. Not traditional."
      },
      {
        method: "Biga",
        suitability: "Possible",
        notes: "Modern Adaptation - Some modern pizzerias use biga for added complexity."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Detroit style uses high hydration (70-75%) to create a light, airy, focaccia-like interior crumb with open structure. The bread flour (12-13% protein) provides enough strength to support this high hydration while maintaining structure. Lower hydration would create a dense, heavy texture instead of the characteristic airy lightness.",
    methodSuitability: {
      direct: { suitable: true, notes: "Possible but not traditional. Cold fermentation is essential for authentic Detroit-style flavor and texture." },
      biga: { suitable: true, notes: "Some modern pizzerias use biga for added complexity, but cold-fermented direct dough is more traditional." },
      poolish: { suitable: true, notes: "Can add flavor complexity, but cold-fermented direct dough is standard for Detroit style." }
    },
    whatIf: [
      {
        scenario: "Dough tears when pressing into pan",
        outcome: "Insufficient gluten development or dough too cold",
        solution: "Ensure proper mixing, let dough warm to room temp before pressing, work gently"
      },
      {
        scenario: "Cheese edges burn before interior cooks",
        outcome: "Oven temperature too high or bake time too long",
        solution: "Reduce to 475-500°F, check at 12 minutes, cheese should be deeply golden but not black"
      },
      {
        scenario: "Interior is gummy",
        outcome: "Under-baked or too much moisture in toppings",
        solution: "Extend bake time, pre-cook watery vegetables, ensure oven reaches proper temperature"
      }
    ],
    comparisons: [
      {
        vsStyle: "Buddy's Original",
        difference: "The birthplace - uses original recipe and techniques with specific sauce and cheese ratios"
      },
      {
        vsStyle: "Cloverleaf Style",
        difference: "Another Detroit original with slight variations in sauce placement and cheese blend"
      }
    ],
    proTips: [
      "Blue steel pans should be seasoned like cast iron before first use",
      "Sauce is often added in stripes on top AFTER baking for visual appeal",
      "Corner pieces are most prized - maximum crispy cheese edge ratio",
      "Vernors ginger ale (Detroit's iconic soda) is the traditional pairing",
      "The 2008 financial crisis diaspora spread Detroit style nationally as natives moved seeking work"
    ]
  },

  tags: ["detroit", "square pizza", "frico edges", "automotive pans", "michigan"],

  watchouts: [
    "Cheese not reaching edges results in missing signature frico crust",
    "Insufficient pan oiling creates stuck, torn bottom instead of crispy crust",
    "Over-proofing causes dough to collapse, losing airy texture",
    "Wrong cheese (mozzarella) won't caramelize properly - brick cheese is essential",
    "Thin pans won't create proper heat conduction for crispy bottom"
  ],

  notes: [
    "Blue steel automotive pans are traditional - modern Detroit pans replicate original dimensions",
    "Wisconsin brick cheese is essential - mozzarella doesn't caramelize the same way",
    "Corner pieces are most prized for maximum crispy cheese edge ratio",
    "Invented in 1946 at Buddy's Rendezvous by Gus Guerra",
    "Spread nationally post-2008 as Detroit diaspora carried it across the country",
    "Embodies Detroit's industrial heritage and resourcefulness"
  ],

  recommendedFlavorComponents: ["brick_cheese", "mozzarella_low_moisture", "tomato_sauce_cooked", "pepperoni", "garlic_oregano"],

  references: [
    {
      source: "Buddy's Pizza - Original Detroit Style",
      url: "https://www.buddyspizza.com/"
    },
    {
      source: "Pure Michigan - Detroit-Style Pizza",
      url: "https://www.michigan.org/detroit-style-pizza"
    },
    {
      source: "Serious Eats - Detroit Pizza Guide",
      url: "https://www.seriouseats.com/detroit-style-pizza"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/detroit-style-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  }
};
