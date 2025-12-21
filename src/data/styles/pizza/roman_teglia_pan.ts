import { DoughStyleDefinition, RecipeStyle } from '../../../types/styles';

/**
 * PIZZA AL TAGLIO / TEGLIA ROMANA
 * 
 * Researched and validated content:
 * - Origin: Rome, Italy (Post-WWII street food, 1987 revolution by Angelo Iezzi)
 * - Technique: High hydration (80%+), long cold ferment (48-72h), folding instead of kneading
 * - Key Figure: Angelo Iezzi (Technical), Gabriele Bonci (Artisan/Toppings)
 * - Characteristics: Light, honeycomb alveolation, crispy bottom, rectangular pans
 */
export const roman_teglia_pan: DoughStyleDefinition = {
  id: "roman_teglia_pan",
  name: "Pizza al Taglio (Teglia Romana)",
  category: "pizza",
  recipeStyle: RecipeStyle.ROMAN,
  family: "Roman Pan Pizza",

  origin: {
    country: "Italy",
    region: "Rome, Lazio",
    period: "1987 (Modern revolution by Angelo Iezzi)"
  },

  description: "Pizza al Taglio, also known as Pizza in Teglia, is a quintessential Roman street food. It is baked in rectangular blue-steel pans and sold 'by the cut' (al taglio). The style is famous for its extreme lightness, characterized by a honeycomb-like interior (alveolatura) and a thin, crispy bottom crust. Modern versions use high hydration and long fermentation to ensure the dough is incredibly digestible.",

  history: "While Roman pan pizza existed as a simple street food since the 1950s, the modern 'Teglia Romana' was revolutionized in 1987 by Angelo Iezzi. He introduced the use of cold water, high hydration (80%+), and long cold fermentation (48h+) to create a product far superior in texture and digestibility to the heavy pan pizzas of the past. Later, Gabriele Bonci at Pizzarium brought the style to global gourmet status by combining Iezzi's technical foundations with stone-ground heirloom flours and experimental, high-gastronomy toppings.",

  difficulty: "Expert",
  fermentationType: "cold",

  base_formula: [
    { name: "High-protein Bread flour (W280-330)", percentage: 100 },
    { name: "Water", percentage: 80 },
    { name: "Salt", percentage: 2.5 },
    { name: "Extra Virgin Olive Oil", percentage: 3 },
    { name: "Instant Yeast", percentage: 0.5 }
  ],

  technicalProfile: {
    hydration: [75, 85],
    salt: [2, 2.8],
    oil: [2, 5],
    sugar: [0, 1],
    flourStrength: "Strong bread flour (W300+) or specialized Roman Teglia blends",
    ovenTemp: [280, 310],
    recommendedUse: [
      "White Pizza with potatoes and rosemary (Classic Roman)",
      "Red Pizza with high-quality tomato and mozzarella",
      "Gourmet toppings added after reheating"
    ],
    difficulty: "Expert",
    ballWeight: { recommended: 600, min: 500, max: 1200 }, // Scaled to pan area
    fermentationSteps: [
      "Mix: Combine flour and 70% of water. Autolyse for 30 mins. [Science: Autolyse starts gluten development without mechanical stress, essential for high hydration]",
      "Incorporate: Add yeast and salt. Slowly add remaining water (bassinage). [Science: Pushes the protein network to its maximum water-holding capacity]",
      "Folding: Perform 3 sets of stretch-and-folds every 20 minutes. [Science: Organizes the gluten into a strong 'cage' to trap gas bubbles]",
      "Cold Ferment: 48-72 hours at 4°C. [Science: Enzymatic breakdown of proteins and starches increases digestibility and creates the complex aroma]",
      "Pan Stretching: Gently transfer to a well-oiled blue steel pan. Press from center out. [Science: Oiled pan 'fries' the bottom while internal water steams the crumb]",
      "Bake: Bake at 290°C. Often a 'two-stage' bake: bottom rack first, then move to top. [Science: Intensive bottom heat is required to set the structure and crisp the base]"
    ]
  },

  scientificProfile: {
    flourRheology: {
      w_index: "W300-340 (Very Strong)",
      pl_ratio: "0.55-0.65 (Balanced)",
      absorption_capacity: "High (75-85%)",
      protein_type: "Strong wheat with high gas-retention properties",
      science_explanation: "To support 80% hydration and a 3-day ferment, the flour must have high-quality glutenins. Weak flour will lose its structure, resulting in a flat, gummy pizza."
    },
    thermalProfile: {
      oven_type: "High-power electric deck oven",
      heat_distribution: "Aggressive bottom conduction from steel pan, top radiant heat",
      crust_development: "Thin, crispy 'glassy' bottom; very light and airy interior",
      crumb_structure: "Large, irregular alveoli (honeycomb structure)"
    },
    fermentationScience: {
      yeast_activity: "Highly controlled and slowed by refrigeration",
      ph_target: "pH 5.2-5.4",
      organic_acids: "Dominant lactic acid with subtle acetic complexity",
      enzymatic_activity: "High proteolysis (protein breakdown) makes the dough remarkably light for its volume"
    }
  },

  education: {
    pro_tips: [
      {
        tip: "Use 'Blue Steel' Pans",
        explanation: "Authentic Teglia Romana is baked in blue steel (ferro azzurro) pans. They conduct heat much faster than aluminum or glass, which is essential for frying the bottom of the dough while keeping the top soft."
      },
      {
        tip: "The 80% Rule",
        explanation: "Don't drop below 75% hydration. The 'bubbles' Angelo Iezzi is famous for require a very wet environment to expand quickly when they hit the hot stone."
      },
      {
        tip: "Stretch with the 'Back of the Hand'",
        explanation: "When transferring the dough to the pan (the flip), use your forearms and backs of hands to avoid digging fingers into the delicate bubble structure."
      },
      {
        tip: "Scissors for the Cut",
        explanation: "Roman pizzerias use scissors (forbici) instead of wheels. This prevents crushing the airy structure you worked 48 hours to create."
      },
      {
        tip: "Cold Water Strategy",
        explanation: "Mixing 80% hydration dough takes time and generates heat. Use water at 4°C to ensure the final dough temperature stays under 23°C."
      }
    ],
    what_if: [
      {
        scenario: "Dough doesn't hold air (flat and dense)",
        result: "Flour was too weak or over-mixing destroyed the structure",
        correction: "Switch to a W300+ flour. Use gentle folds rather than aggressive kneading after the initial mix."
      },
      {
        scenario: "The bottom is soft and greasy instead of crispy",
        result: "Oven temp too low or pan wasn't on the deck",
        correction: "Ensure your oven is at max temp (at least 275°C) and the pan is on the lowest rack or directly on a preheated stone."
      },
      {
        scenario: "Top is burnt while bottom is raw",
        result: "Too much top heat or too many toppings",
        correction: "Bake on the bottom rack for the first 8-10 minutes. Reduce topping moisture (drain your mozzarella!)."
      },
      {
        scenario: "Dough is too elastic to fill the pan",
        result: "Not enough rest time",
        correction: "If it snaps back, walk away for 20 minutes. Once the gluten relaxes, it will fill the corners effortlessly."
      }
    ],
    comparative_analysis: [
      {
        target_style: "Focaccia Genovese",
        difference: "Focaccia is breadier and uses salted brine on top; Teglia is focused on a 'glassy' crispness and complex toppings.",
        why_choose_this: "Choose Teglia for a high-hydration pizza experience that can handle heavy toppings."
      },
      {
        target_style: "Detroit Style",
        difference: "Detroit is thicker, uses more fat in the dough, and cheese to the edge; Teglia is leaner and more about the crumb alveolation.",
        why_choose_this: "Choose Teglia for a lighter, more air-focused pan pizza."
      },
      {
        target_style: "Pizza alla Pala",
        difference: "Pala is stretched long and baked directly on the stone; Teglia is baked in a pan.",
        why_choose_this: "Choose Teglia for more oil-fried bottom texture."
      }
    ],
    q_and_a: [
      {
        question: "Why is it sold by weight?",
        answer: "In Rome, you specify the size of the piece you want with your hands, and they cut it and weigh it. This allows customers to try several different toppings in one sitting.",
        context: "Culture"
      },
      {
        question: "Who is Angelo Iezzi?",
        answer: "The 'father' of modern Teglia Romana. He introduced the scientific approach (cold water, long ferment, high W flour) that made the pizza light and bubbly in the late 1980s.",
        context: "History"
      },
      {
        question: "What is 'Alveolatura'?",
        answer: "It is the technical term for the distribution and size of the air pockets (alveoli) in the crumb. A good Teglia should look like a honeycomb inside.",
        context: "Science"
      },
      {
        question: "Why use scissors?",
        answer: "Pizza wheels press down on the dough, sealing the airy holes. Scissors cut through cleanly, preserving the visual and textural 'openness' of the crumb.",
        context: "Technique"
      },
      {
        question: "Can I use 00 flour?",
        answer: "Only if it is a 'Strong' version (W300+). Standard '00' flour used for Neapolitan is often too weak to hold 80% water for 48 hours.",
        context: "Ingredients"
      }
    ],
    fermentation_methods: [
      {
        method: "Hybrid",
        suitability: "Authentic",
        notes: "Long cold retard (48-96h) is the gold standard for Pizza al Taglio."
      },
      {
        method: "Direct",
        suitability: "Not Recommended",
        notes: "Same-day Teglia will be heavy and won't develop the iconic alveolation."
      },
      {
        method: "Poolish",
        suitability: "Possible",
        notes: "Can help with initial extensibility but requires a strong flour to maintain structure through the long ferment."
      }
    ]
  },

  deepDive: {
    hydrationLogic: "At 80% hydration, Teglia dough is more of a 'gel' than a solid. This requires 'Folding Science' - every time you fold the dough, you are aligning gluten proteins into sheets that can stretch around massive gas bubbles without popping.",
    methodSuitability: {
      direct: { suitable: true, notes: "Only with high-quality strong flour and 48h cold ferment." },
      biga: { suitable: true, notes: "Excellent for adding 'bite' and structural verticality to the bubbles." },
      poolish: { suitable: true, notes: "Great for aroma and immediate extensibility." }
    },
    whatIf: [
      {
        scenario: "You don't oil the pan enough",
        outcome: "The pizza will stick and the bottom won't 'fry', resulting in a soggy, bready base.",
        solution: "Use a generous layer of high-smoke point oil or EVOO on the pan floor."
      }
    ],
    comparisons: [
      {
        vsStyle: "Scrocchiarella",
        difference: "Scrocchiarella is ultra-thin and brittle; Teglia is thick (around 2cm) but mostly air."
      }
    ],
    proTips: [
      "Dust the top with semola before the flip - it adds a final layer of crunch.",
      "Par-bake the 'Bianca' (plain dough with oil) for 8 mins, then top and finish later for better crowd management.",
      "Eat it warm, not hot - the flavors develop as the steam leaves the crumb.",
      "Scissors should be high-quality stainless steel."
    ]
  },

  tags: ["roman", "al-taglio", "teglia-romana", "high-hydration", "pan-pizza", "honeycomb"],

  watchouts: [
    "Over-handling during pan stretch deflates the bubbles.",
    "Not enough bottom heat leads to gummy dough.",
    "Low-protein flour will collapse under high hydration.",
    "Condensation in the fridge can drip on the dough - keep it tightly sealed."
  ],

  notes: [
    "Angelo Iezzi is the technical pioneer (1987).",
    "Gabriele Bonci is the artisan pioneer (2000s).",
    "Honeycomb crumb is called 'alveolatura'.",
    "Sold by weight (hectograms/etti) in Rome.",
    "Baked in rectangular blue-steel pans."
  ],

  references: [
    {
      source: "API - Associazione Pizzerie Italiane (Angelo Iezzi)",
      url: "https://www.api-pizzerie.it/"
    },
    {
      source: "Il Gioco della Pizza",
      url: "https://www.rizzolilibri.it/libri/il-gioco-della-pizza-bonci/",
      author: "Gabriele Bonci",
      year: "2012"
    },
    {
      source: "Modernist Pizza (Roman Pan Pizza Analysis)",
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
    hero: "/images/styles/roman-teglia-hero.png",
    dough: "/images/styles/placeholder-dough.png",
    crumb: "/images/styles/placeholder-dough.png"
  },
  recommendedFlavorComponents: ["pecorino_romano", "mozzarella_low_moisture", "rosemary_fresh", "potato_slices", "stracciatella", "anchovies"]
};
