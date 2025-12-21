import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * JAPANESE MILK BREAD (SHOKUPAN)
 * 
 * Researched and validated content:
 * - Origin: Japan (Post-Meiji Westernization, post-WWII staple)
 * - Technique: Tangzhong (65°C cooked paste) or Yudane (scalded flour)
 * - Key Figure: Yvonne Chen (Popularized Tangzhong in 2007)
 * - Characteristics: Cotton-soft, shred-able, high-moisture, long shelf life
 */
export const japanese_milk_bread: DoughStyleDefinition = {
  id: "japanese_milk_bread",
  name: "Japanese Milk Bread (Shokupan)",
  category: "bread",
  recipeStyle: RecipeStyle.HOKKAIDO_MILK_BREAD,
  family: "Asian Sweet/Soft Bread",

  origin: {
    country: "Japan",
    region: "Hokkaido / Nationwide",
    period: "Late 19th Century (Origin), 2000s (Modern Tangzhong global wave)"
  },

  description: "Japanese Milk Bread, or Shokupan, is famous for its ethereal, cotton-soft texture and its unique 'shred-ability.' Unlike Western sandwich breads, it is incredibly moist and sweet, with a fine, elastic crumb that pulls apart in long, silky strands. This is achieved using the Tangzhong or Yudane method, where a portion of the flour is pre-cooked with liquid to lock in moisture.",

  history: "Bread was introduced to Japan by the Portuguese but only became a staple after the Meiji Restoration as part of a push toward Westernization. Post-WWII, US wheat aid solidified the role of white bread in the Japanese diet. The defining modern technique, Tangzhong, involves cooking flour and water/milk into a paste (the 'roux') at exactly 65°C. This method was popularized globally in 2007 by Yvonne Chen in her book 'The 65°C Bread Doctor.' Another variant, Yudane, uses boiling water to scald the flour. Both techniques originated as a way to use Japanese domestic wheat (which had less gluten) to create a bread that stayed soft for days in high humidity.",

  difficulty: "Hard",
  fermentationType: "direct",

  base_formula: [
    { name: "Bread Flour (12.5%+ protein)", percentage: 100 },
    { name: "Whole Milk", percentage: 65 }, // Including Tangzhong liquid
    { name: "Sugar", percentage: 12 },
    { name: "Unsalted Butter", percentage: 10 },
    { name: "Salt", percentage: 1.5 },
    { name: "Instant Yeast", percentage: 1.5 },
    { name: "Egg (optional for richness)", percentage: 10 }
  ],

  technicalProfile: {
    hydration: [68, 75], // Total moisture including Tangzhong
    salt: [1.2, 1.8],
    oil: [8, 12], // As butter
    sugar: [8, 15],
    flourStrength: "High-quality Bread Flour (W300-340)",
    ovenTemp: [175, 190],
    recommendedUse: [
      "Thick-cut Honey Toast",
      "Sando (Sandwich) base for Katsu or Tamago",
      "Morning toast with condensed milk"
    ],
    difficulty: "Hard",
    ballWeight: { recommended: 450, min: 400, max: 600 }, // For a standard Pullman tin
    fermentationSteps: [
      "Tangzhong Preparation: Cook 5% of the flour with 5 times its weight in milk/water to 65°C. [Science: Pre-gelatinization of starch occurs at 65°C, allowing the granules to absorb and hold 4-5 times more water than raw flour]",
      "Mixing: Combine Tangzhong (cooled), remaining flour, milk, yeast, and sugar. Mix until smooth. [Science: Sugar and milk proteins compete with gluten for water, initially slowing development]",
      "Butter Integration: Add softened butter once gluten has partially formed. [Science: Fats coat gluten strands; adding them late allows the main structure to form first, resulting in better volume]",
      "Intensive Kneading: Mix until the 'translucent' windowpane test is achieved. [Science: The crumb must be extremely refined to achieve the 'shredding' texture]",
      "Bulk Rise: 1 hour at 28°C. [Science: Warm fermentation favors the yeast variety used in enriched, high-sugar doughs]",
      "Division and Rolling: Degas and roll each piece into a tight cylinder. [Science: Tight rolling aligns the gluten in a spiral, which creates the verticality and shred-ability of the crumb]",
      "Final Proof: Proof in a Pullman tin until it reaches 80% capacity. [Science: Enriched dough takes longer to rise due to the weight of sugar and fat]",
      "Baking: Bake at 180°C (350°F) until the top is golden. [Science: The milk and sugar facilitate rapid Maillard browning at lower temperatures than lean bread]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W300-340 (Strong)",
      pl_ratio: "0.45-0.55 (Very Extensible)",
      absorption_capacity: "Extreme (due to Tangzhong)",
      protein_type: "Hard wheat with high-quality glutenins",
      science_explanation: "The dough needs high strength to support the heavy enrichment of butter and sugar, but must remain extensible to allow for the massive expansion in the Pullman tin."
    },
    thermalProfile: {
      oven_type: "Electric home oven or convection oven",
      heat_distribution: "Low but consistent heat (convection is ideal)",
      crust_development: "Ultra-thin, soft, golden, almost non-existent",
      crumb_structure: "Cloud-like, extremely fine, pulls apart in long fibers"
    },
    fermentationScience: {
      yeast_activity: "High (boosted by sugar but challenged by fat)",
      ph_target: "pH 5.4-5.6 (closer to neutral)",
      organic_acids: "Low; aroma profile is dominated by diacetyl (butter) and milk solids",
      enzymatic_activity: "High starch-to-sugar conversion thanks to pre-cooked flour"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "65°C is the Magic Number",
        explanation: "If your Tangzhong doesn't reach 65°C, the starch won't gelatinize properly. If it goes over, it can become too thick and clumpy. Use a thermometer!"
      },
      {
        tip: "Add butter AFTER gluten forms",
        explanation: "Butter is a 'shortener' - it breaks gluten chains. By adding it once the dough is already smooth and strong, you preserve the strength needed for a tall rise."
      },
      {
        tip: "The Spiral Roll",
        explanation: "When shaping, roll the dough piece out flat, then roll it up like a sleeping bag. This orientation of gluten is what creates the 'shredding' effect in the finished loaf."
      },
      {
        tip: "Cooling is part of the bake",
        explanation: "Because of the high internal moisture, Shokupan takes longer to set. If you cut it while hot, the steam will collapse the crumb into a gummy mess. Wait at least 2 hours."
      },
      {
        tip: "Milk powder for Aroma",
        explanation: "Adding a tablespoon of dry milk powder (skim or whole) intensifies the 'creamy' aroma without adding too much liquid that might destabilize the dough."
      }
    ],
    what_if: [
      {
        scenario: "The bread is dense and doesn't shred",
        result: "Under-mixed or weak flour",
        correction: "You must reach a full windowpane test. If the flour is under 11% protein, it won't have the strength to shred."
      },
      {
        scenario: "The loaf collapsed in the center after baking",
        result: "Under-baked or too much moisture",
        correction: "Ensure internal temp reaches 93°C (200°F). Increase bake time by 5 minutes or decrease hydration slightly."
      },
      {
        scenario: "The crust is too thick and hard",
        result: "Oven temp too high or bake time too long",
        correction: "Shokupan should bake at a lower temp (~180°C). Cover with foil halfway through if it's browning too fast."
      },
      {
        scenario: "Dough didn't rise in the bulk ferment",
        result: "Yeast killed by hot Tangzhong or too much salt",
        correction: "Make sure the Tangzhong is cooled to room temperature before adding it to the yeast."
      }
    ],
    comparative_analysis: [
      {
        target_style: "French Brioche",
        difference: "Brioche has much more butter (up to 50%) and eggs, making it rich and cake-like. Shokupan is focus on airiness and moisture via the Tangzhong process.",
        why_choose_this: "Choose Shokupan for a lighter, more daily-bread sandwich experience."
      },
      {
        target_style: "Pullman Sandwich Bread",
        difference: "Standard Pullman bread is leaner and uses milk powder and oil. Shokupan is softer and stays fresh longer thanks to the Tangzhong.",
        why_choose_this: "Choose Shokupan for toast that stays soft for 3-4 days."
      },
      {
        target_style: "Hawaiian Rolls",
        difference: "Hawaiian rolls use pineapple juice for acidity and sugar. Shokupan is more 'milky' and neutral in its sweetness.",
        why_choose_this: "Choose Shokupan for savory sandwiches (Katsu Sando)."
      }
    ],
    q_and_a: [
      {
        question: "What is Tangzhong?",
        answer: "It is a water-flour roux cooked to 65°C. This pre-gelatinizes the starch, allowing it to hold significantly more moisture throughout the bake.",
        context: "Technique"
      },
      {
        question: "Why does it stay fresh so much longer than other bread?",
        answer: "Starch retrogradation (staling) is slowed down because the water is chemically trapped in the pre-gelatinized granules. It stays 'wet' longer.",
        context: "Science"
      },
      {
        question: "Is 'Hokkaido' milk better?",
        answer: "Hokkaido is famous for high-fat, high-quality dairy. While any whole milk works, higher-fat milk (like Hokkaido style) improves the tenderness and aroma.",
        context: "Ingredients"
      },
      {
        question: "What is a Pullman Tin?",
        answer: "A rectangular bread pan with a sliding lid. It forces the bread to bake into a perfect cube, resulting in a very fine, consistent crumb with no large air holes.",
        context: "Equipment"
      },
      {
        question: "Why add an egg?",
        answer: "Lecithin in the egg yolk acts as a natural emulsifier, helping to bind the fat and water for an even softer and richer crumb.",
        context: "Science"
      }
    ],
    fermentation_methods: [
      {
        method: "Direct",
        suitability: "Authentic",
        notes: "Most home and commercial recipes use a direct method with Tangzhong."
      },
      {
        method: "Sourdough",
        suitability: "Ideal",
        notes: "Adds complexity, but the acidity can slightly tighten the crumb, making it less 'cottony'."
      },
      {
        method: "Hybrid",
        suitability: "Possible",
        notes: "Excellent for the bulk rise stage; improves flavor and makes the sticky dough easier to handle."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "Shokupan hydration is deceptive. While the 'effective' hydration is high (75%), the Tangzhong locks up much of that water, making the dough behave like a 65% hydration dough (manageable and strong) while eating like an 80% hydration bread.",
    methodSuitability: {
      direct: { suitable: true, notes: "Reliable for the Shokupan Tin profile." },
      biga: { suitable: true, notes: "Adds great vertical strength to the rise." },
      poolish: { suitable: true, notes: "Enhances the sweet, wheaty aroma." }
    },
    whatIf: [
      {
        scenario: "You use 100% Water instead of Milk",
        outcome: "The bread will be less tender and will lose the characteristic 'milky' aroma; it will also brown much more slowly.",
        solution: "Use whole milk or water with 10% milk powder for best results."
      }
    ],
    comparisons: [
      {
        vsStyle: "Yudane vs Tangzhong",
        difference: "Yudane (boiling water) creates a slightly chewier, more elastic bread. Tangzhong (cooked paste) creates a slightly softer, more tender bread. Both are authentic."
      }
    ],
    proTips: [
      "Use a 'Shokupan' flour if available (very fine, high protein).",
      "Don't over-grease the tin; it can cause the dough to slip and lose tension.",
      "A 3:1 ratio of milk to water in the Tangzhong is the perfect balance.",
      "Try the 'Shred Test': tear it apart by hand rather than slicing with a knife."
    ]
  },

  tags: ["shokupan", "milk-bread", "japanese", "tangzhong", "soft-bread", "hokkaido"],

  watchouts: [
    "Dough too hot? The butter will melt into oil and ruin the crumb.",
    "Under-kneaded? The bread will be crumbly and won't shred.",
    "Tin lid stuck? Next time, grease the lid lightly too!",
    "Too much sugar? It can actually slow down the yeast if it exceeds 15%."
  ],

  notes: [
    "Also known as Hokkaido Milk Bread.",
    "Tangzhong (roux) method is the gold standard.",
    "Requires high-protein flour for shredding.",
    "Usually baked in a Pullman tin for square slices.",
    "Ideally sliced thick (3-4cm) for toast."
  ],

  references: [
    {
      source: "The 65°C Bread Doctor",
      url: "https://www.worldcat.org/title/65c-tang-zhong-mian-bao/",
      author: "Yvonne Chen",
      year: "2007"
    },
    {
      source: "Modernist Bread (Japanese Milk Bread Analysis)",
      url: "https://modernistcuisine.com/books/modernist-bread/",
      author: "Nathan Myhrvold, Francisco Migoya",
      year: "2017"
    },
    {
      source: "Just One Cookbook - Shokupan Recipe & History",
      url: "https://www.justonecookbook.com/shokupan-japanese-milk-bread/"
    }
  ],

  isPro: false,
  source: "official",
  createdAt: new Date().toISOString(),
  releaseDate: new Date().toISOString(),

  images: {
    hero: "/images/styles/shokupan-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["salted_butter_normandy", "honey_raw", "malt_powder"]
};
