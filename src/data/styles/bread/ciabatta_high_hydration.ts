import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const ciabatta_high_hydration: StyleDefinition = {
  "id": "ciabatta_high_hydration",
  "title": "Ciabatta (High Hydration Poolish)",
  "subtitle": t('styles.italian_rustic__high_hydration'),
  "category": t('styles.bread_5'),
  "family": t('styles.italian_rustic__high_hydration_2'),
  "variantName": "Ciabatta (High Hydration Poolish)",
  "origin": {
    "country": t('styles.italy_2'),
    "region": t('styles.northern_italy'),
    "period": t('styles.late_20th_century')
  },
  "intro": "Used for sandwiches, bruschetta and table bread, valued for its airy internal structure.",
  "history": "Ciabatta was developed in 1982 by Arnaldo Cavallari in Adria, Italy, as a nationalistic response to the popularity of French Baguettes. Cavallari and other bakers wanted an Italian bread that could compete for the sandwich market. The name translates to 'slipper', referring to its flat, elongated shape. It revolutionized Italian bread making through the use of high hydration and Poolish preferments.",
  "culturalContext": {
    "significance": [
      "A symbol of modern Italian culinary nationalism and innovation",
      "Redefined the Italian sandwich (Panino) culture globally",
      "One of the few globally famous breads with a known, modern 'inventor'",
      "Represents the industrial-artisanal hybrid of the late 20th century",
      "A staple of 'Modern Italian' restaurant tables and Mediterranean diets"
    ],
    "consumptionContext": [
      "The default choice for authentic Italian panini and gourmet sandwiches",
      "Ideal for 'Scarpetta'—dipping into pasta sauces or olive oil",
      "Traditionally served in long loaves or small 'Ciabattine' buns",
      "Commonly used for Bruschetta due to its sturdy, porous structure",
      "Often sliced horizontally and grilled to refresh the internal texture"
    ],
    "evolution": [
      "1982: Arnaldo Cavallari 'invents' the Ciabatta Polesana in Adria",
      "1985: Marks & Spencer introduces Ciabatta to the UK, sparking global fame",
      "1987: The style reaches the US, becoming a staple of 'Artisan' bakeries",
      "1990s: Development of the 'Ciabatta al Taglio' for industrial sandwich production",
      "2000s: High-hydration home baking movement adopts Ciabatta as a technical benchmark",
      "Present: Available in endless varieties (Whole Wheat, Olive, Walnut) globally"
    ],
    "rituals": [
      "The 'Slipper' Shape: rustic, irregular, and flour-dusted appearance",
      "Hand-Dividing: using a bench scraper to cut the wet dough into rectangular pieces without degassing",
      "The 'Windowpane' test: checking the high-hydration gluten strength before bulk ferment",
      "Dipping in Extra Virgin: the classic ritual of testing the crumb's 'wicking' ability with olive oil",
      "Checking the Alveoli: cutting the loaf to admire the large, irregular internal air pockets"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Sweet, mild wheat notes with a clean finish",
      "Subtle nutty/buttery undertones from the Poolish preferment",
      "Mild lactic tang from long bulk fermentation",
      "Significant toasted wheat aroma from the high-temp bake",
      "Absence of acidity (unlike sourdough), focusing on pure grain flavor"
    ],
    "aromaProfile": [
      "Freshly baked white bread with a hint of honey/malt",
      "Mildly alcoholic/yeasty notes from the active Poolish",
      "Warm, toasted flour from the heavy dusting on the crust",
      "Dominant cereal and grain aromas",
      "Clean and neutral, designed to highlight sandwich fillings"
    ],
    "textureNotes": [
      "The 'Big Hole' Crumb: irregular, large-celled structure (alveolatura)",
      "Thin, crisp, and slightly leathery crust with a matte flour finish",
      "Highly moist and tender interior that feels 'waxy' or translucent in parts",
      "Light and airy mouthfeel despite the large size of the loaf",
      "Significant 'crunch' when toasted, followed by a soft, melting interior"
    ],
    "pairingRecommendations": [
      "Cheese: Fresh Mozzarella, Taleggio, or Fontina",
      "Meat: Prosciutto di Parma, Mortadella, or Bresaola",
      "Vegetables: Roasted red peppers, arugula, sun-dried tomatoes",
      "Finishing: High-quality olive oil and balsamic vinegar for dipping",
      "Sandwich: The classic Caprese (mozzarella, tomato, basil, olive oil)"
    ],
    "flavorEvolution": [
      "Fresh (0-4 hours): Maximum crust crispness and internal moisture vibrancy",
      "6-12 hours: Becomes 'leathery'; the internal moisture starts to migration to the crust",
      "Day 2: Needs to be toasted; the crumb remains exceptionally moist for toasting",
      "Stale: Makes the world's best croutons or 'Panzanella' salad bread",
      "Frozen: Freezes exceptionally well due to high internal moisture"
    ]
  },
  "technicalFoundations": [
    "Poolish 30–50% of flour is classic.",
    "Hydration: 75-80%"
  ],
  "doughImpact": [
    "High hydration (75-80%) is essential for creating the large, irregular internal air pockets",
    "Poolish (liquid preferment) provides enzymatic activity that improves stretch and flavor",
    "Long bulk fermentation with frequent 'stretch and folds' builds the required gluten strength",
    "Delicate handling during division is critical to prevent degassing the high-hydration bubbles",
    "Heavy flour dusting provides the signature rustic look and prevents sticking of the wet dough"
  ],
  "bakingImpact": [
    "High heat (230-250°C) with steam provides the initial 'oven spring' needed for the holes",
    "Steam keeps the crust thin and flexible during the expansion phase",
    "A baking stone or heavy deck is vital for quick heat transfer to the wet dough base",
    "The 20-25 minute bake time ensures the large amount of internal moisture is adequately set",
    "Venturing the steam in the last 10 minutes helps achieve the signature crisp/matte crust"
  ],
  "technicalProfile": {
    "hydrationRange": [
      75,
      80
    ],
    "saltRange": [
      2,
      2.2
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.strong_bread_flour_w_260300'),
    "fermentation": {
      "bulk": "2–3 h at 23–25°C with multiple folds",
      "proof": "30–60 min after dividing and shaping",
      "coldRetard": t('styles.optional_812_h_for_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.bake_with_good_steam_handle_gently_to_preserve_gas')
    },
    "difficulty": t('styles.expert_3'),
    "recommendedUse": [
      t('common.sandwich_bread'),
      t('common.bruschetta'),
      t('common.rustic_table_bread')
    ]
  },
  "defaults": {
    "hydration": 78,
    "salt": 2,
    "oil": 1,
    "sugar": 0
  },
  "regionalVariants": [
    "Ciabatta Polesana - The original 1982 recipe from Adria/Veneto",
    "Ciabatta Integrale - Version using whole wheat or mixed grains",
    "Ciabatta al Latte - Enriched with milk for a softer, tighter crumb",
    "Ciabattine - 'Little slippers', individual-sized rolls for sandwiches",
    "Pane di Como - A high-hydration cousin from the Lake Como region"
  ],
  "climateScenarios": [
    "Hot/Humid: Use ice-cold water (4°C) for the main dough; shorten bulk ferment to prevent collapse",
    "Cold/Dry: Use warm water (30°C) for the poolish; use a proofing box to maintain 24-25°C",
    "High Altitude: Reduce yeast in the poolish by 20% to prevent over-expansion of the wet dough",
    "Coastal: The high humidity can make the thin crust go soft quickly; extend the 'dry' bake phase"
  ],
  "styleComparisons": [
    "vs. Baguette: Ciabatta is much more hydrated, uses poolish vs direct/starter, and has a flatter shape",
    "vs. Focaccia: Ciabatta is a lean dough (no oil inside), whereas Focaccia is heavily enriched with oil",
    "vs. Sourdough Loaf: Ciabatta focuses on mild wheat sweetness vs. the tang and acidity of sourdough",
    "vs. Pugliese: Similar rustic origins, but Ciabatta is wetter and more rectangular"
  ],
  "parameterSensitivity": [
    "Critical: Flour Strength - only high-protein flour (W 280+) can hold 80% hydration without sloping",
    "Highly sensitive: Stretch and Folds - skipping these will result in a flat, pancake-like loaf",
    "Poolish Age: Using an over-ripe, acidic poolish will degrade the gluten and cause collapse",
    "Dough Temperature: Controlling the 24-25°C bulk is the secret to consistent hole structure",
    "Shaping: Under-handling is better than over-handling; keep the 'slipper' rustic and irregular"
  ],
  "risks": [
    "Flat 'Pancake' Bread: Caused by using weak flour or insufficient gluten development during folds",
    "Soggy Middle: Under-baking the high-moisture dough or not enough steam during the first 10 mins",
    "Dense Crumb: Over-handling/degassing the dough during the dividing and panning process",
    "Sticking to Linen: Not using enough flour on the couches or towels during proofing",
    "Burnt Bottom: Stone is too hot or bake time is too long without balancing top/bottom heat"
  ],
  "notes": [
    "Wet your hands before performing stretch and folds to prevent the dough from sticking",
    "Don't be afraid of the mess - Ciabatta is a high-hydration, rustic 'adventure' bread",
    "A bench scraper is your best tool for moving and dividing the rectangular dough pieces",
    "The Poolish should be bubbly and smelling like fresh fruit/yeast before use",
    "Wait at least 1 hour before cutting into a fresh ciabatta to let the internal structure set"
  ],
  "tags": [
    t('common.sandwich_bread'),
    t('common.bruschetta'),
    t('common.rustic_table_bread'),
    t('common.bread'),
    t('common.italy')
  ],
  "applyInApp": {
    "calculator": [],
    "styles": [],
    "mylab": [],
    "levain": [],
    "tools": []
  },
  "references": [
    {
      "title": t('styles.bread__jeffrey_hamelman_2'),
      "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
      "author": "Jeffrey Hamelman",
      "year": 2012
    },
    {
      "title": t('styles.modernist_bread_4'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Arnaldo Cavallari: The Man Who Invented Ciabatta",
      "url": "https://www.theflourmillingjournal.com/history/cavallari-ciabatta",
      "author": "Italian Bakers Guild",
      "year": 2021
    },
    {
      "title": "The Village Baker",
      "url": "https://www.amazon.com/Village-Baker-Classic-Regional-Europe/dp/0898154157",
      "author": "Joe Ortiz",
      "year": 1993
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is Ciabatta?",
      "answer": "It is a high-hydration Italian bread (high water content), with a flat, elongated shape (resembling a 'slipper'), featuring a very airy crumb and a thin, crispy crust. It was created to compete with the French baguette in the sandwich market."
    },
    {
      "question": "Why is Ciabatta dough so soft and hard to work with?",
      "answer": "High hydration (75-80%) is what allows for the creation of large holes in the crumb. To handle it, we use the 'stretch and fold' technique instead of traditional kneading, developing gluten through time and gentle manipulation."
    },
    {
      "question": "What is the difference between Ciabatta and Focaccia?",
      "answer": "Ciabatta is a lean dough (typically little to no oil inside) focused on large holes and crispy crust. Focaccia is enriched with plenty of olive oil, has a softer, more uniform crumb, and is baked in pans, whereas Ciabatta is baked directly on the stone."
    },
    {
      "question": "Is it mandatory to use Poolish?",
      "answer": "Yes, in the classic method. Poolish (liquid preferment) ensures the necessary extensibility for the dough to expand and create holes, as well as providing a sweet fermented wheat aroma without the acidity of sourdough."
    },
    {
      "question": "How do I know if the Ciabatta turned out well?",
      "answer": "It should be light for its size (full of air), have a crust that 'crackles' when squeezed, and when cut, show alveoli (holes) of irregular sizes throughout the crumb, without dense or 'gummy' parts at the bottom."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
