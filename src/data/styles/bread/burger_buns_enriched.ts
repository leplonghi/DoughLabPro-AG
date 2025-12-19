import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const burger_buns_enriched: StyleDefinition = {
  "id": "burger_buns_enriched",
  "title": "Burger Buns (Enriched)",
  "subtitle": t('styles.sandwich__enriched_breads'),
  "category": t('styles.bread_4'),
  "family": t('styles.sandwich__enriched_breads_2'),
  "variantName": "Burger Buns (Enriched)",
  "origin": {
    "country": t('styles.united_states'),
    "region": t('styles.global_fast_food'),
    "period": "20th century"
  },
  "intro": "Widely produced in industrial and artisan bakeries as a standard element of burgers and sandwiches.",
  "history": "Modern burger buns evolved in the early 20th century alongside the American fast-food industry. Walter Anderson, co-founder of White Castle, is often credited with creating the first dedicated bun in 1916 to replace the sliced bread initially used for burgers. The style shifted from a basic yeast roll to a highly enriched 'Brioche-style' or 'Potato-style' bun to meet the gourmet burger craze of the 2010s, prioritizing structural softness and flavor richness.",
  "culturalContext": {
    "significance": [
      "The global standard for the 'vessel' of the most popular sandwich in the world",
      "Represents the American contribution to global 'Bread Enrichment' culture",
      "A culinary engineering feat: must be soft enough for a bite, yet strong enough for juice",
      "Symbol of modern 'Gourmet Fast Food'—where the bun is as important as the meat",
      "Evokes nostalgia and comfort across diverse world cultures"
    ],
    "consumptionContext": [
      "The foundation of the Cheeseburger, Smashburger, and Chicken Sandwich",
      "Traditionally toasted on the cut side (with butter) to prevent sauce soaking",
      "Almost always topped with sesame seeds for a classic 'look' and nutty crunch",
      "Sold in packs of 4, 6, or 8, designed to fit standard patty sizes",
      "Prized for 'rebound'—the ability to spring back after being squeezed"
    ],
    "evolution": [
      "1910s: Walter Anderson invents the square Slider bun for the first burger chain",
      "1950s: The 'Mass Industrial Bun' era; high volume, spongy, and low nutrition",
      "1980s: Introduction of the 'Sesame Seed Bun' as a premium global standard",
      "2010s: The Brioche Revolution; bakeries begin adding heavy butter and eggs for gourmet use",
      "2020s: The 'Sourdough Potato Bun' becomes the new technical benchmark for flavor and health",
      "Present: Focus on clean labels (no artificial preservatives) even in industrial settings"
    ],
    "rituals": [
      "The 'Smush' Test: squeezing the bun to feel its softness and elasticity",
      "The Butter Toast: the ritual of toasting the bun on a flat-top grill until golden-brown",
      "Seeding: the final decorative step that defines the visual identity of the burger",
      "The Bottom-Bun Check: ensuring it's sturdy enough to not collapse under the patty juices",
      "The Egg Wash Brush: the delicate hand-paint to achieve the 'Mirror' shine"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Sweet, milky, and rich (buttery)",
      "Mild toasted wheat with clean yeasty notes",
      "Aromatic from the egg wash coating",
      "Subtle malty undertones",
      "Nutty notes if topped with sesame seeds"
    ],
    "aromaProfile": [
      "Freshly baked butter cake or brioche",
      "Warm milk and sweet cream",
      "Toasted sesame seeds",
      "Sweet cereal and yeast",
      "Mild vanilla-like notes when hot"
    ],
    "textureNotes": [
      "The 'Cloud' Crumb: uniform, fine, and ultra-soft (no large holes)",
      "Thin, non-crusty skin: should be glossy and soft, never crunchy",
      "High Elasticity: must spring back immediately after being compressed",
      "Moist and tender: should melt in the mouth without being gummy",
      "Structural strength: a 'closed' crumb structure that prevents sauce from weeping through"
    ],
    "pairingRecommendations": [
      "Protein: 80/20 Beef Chuck, Fried Chicken, or Portobello Mushroom",
      "Cheese: American, Sharp Cheddar, or Pepper Jack",
      "Condiment: Secret Sauce (mayo-based), truffle garlic aioli, or spicy BBQ",
      "Pickles: Brined dill pickles to contrast the sweet bread",
      "Beverage: Craft beer (IPA), thick milkshakes, or cold soda"
    ],
    "flavorEvolution": [
      "Fresh (0-4 hours): At its softest; ideal for eating without toasting",
      "12-24 Hours: Peak structural strength; best for heavy, juicy burgers",
      "Day 2: Needs to be toasted; the sugars caramelize perfectly on a griddle",
      "Stale: Excellent for bread pudding or savory 'bun-croutons' for salads",
      "Freezing: Freezes perfectly; should be thawed in the bag to preserve moisture"
    ]
  },
  "technicalFoundations": [
    "Usually straight dough; sponge or poolish variants exist.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [
    "High enrichment (8-18% oil/butter, 5-15% sugar) weakens the gluten, creating a tender 'tender-bite'",
    "Milk or milk powder replaces water to provide the signature white crumb and sweet aroma",
    "Egg inclusion (in brioche styles) provides structure and a rich, golden color",
    "Intense mixing is required to ensure the large amount of fat is fully emulsified for softness",
    "Short to medium fermentation prevents the development of large holes, maintaining structural density"
  ],
  "bakingImpact": [
    "Baked at lower temperatures (180-200°C) to prevent a hard, crusty exterior",
    "Egg wash provides the iconic glossy, deep-brown 'commercial' shine",
    "Baking close together (or in pans) encourages upward rise rather than spreading",
    "Short bake times (10-14 mins) are essential to prevent moisture loss and 'staling' in the oven",
    "Immediately covering with a towel after baking helps 'steam' the crust, ensuring it stays soft"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      8,
      18
    ],
    "sugarRange": [
      5,
      15
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–75 min after shaping, until puffy",
      "coldRetard": t('styles.optional_bulk_retard')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.often_topped_with_seeds_avoid_overbaking_to_keep_c')
    },
    "difficulty": "Medium",
    "recommendedUse": [
      t('common.burger_buns'),
      t('common.sandwich_rolls')
    ]
  },
  "regionalVariants": [
    "Potato Bun - Uses potato flour/starch for extreme moisture and yellow color",
    "Brioche Bun - The French-inspired gourmet king, high in butter and whole eggs",
    "Slider Bun - Mini versions (often square) for small catering-style burgers",
    "Ciabatta Bun - Crusty, Italian-style variant for high-end panini-burgers",
    "Kaiser Burger Bun - A sturdier roll with the iconic stamped star pattern"
  ],
  "climateScenarios": [
    "High Summer Heat: Use cold milk; the high sugar content will cause rapid over-fermentation",
    "Arid/Dry Environment: Brush with water immediately after baking to prevent the skin from drying",
    "Winter/Cold: Use a warm proofing box at 28°C; enriched dough is 'lazy' and needs the heat",
    "Humid Coastal: Do not cover while cooling or they will become 'soggy' and lose their shape"
  ],
  "styleComparisons": [
    "vs. Brioche Loaf: Similar dough, but the bun has less fat to remain light enough for a burger",
    "vs. Sandwich Bread: Bun dough is more enriched and focus on horizontal strength/shaping",
    "vs. Baguette: Opposite worlds; Buns are soft/enriched vs Baguette's lean/crusty",
    "vs. Hot Dog Buns: Nearly identical dough; the difference is purely the elongated vs round shape"
  ],
  "parameterSensitivity": [
    "Critical: Fat Content - too much and it's a greasy cake; too little and it's a dry roll",
    "Highly sensitive: Proofing - under-proofing leads to 'bursting' during the oven spring",
    "Sugar Ratio: Essential for the dark, fast color; also acts as a tenderizer for the crumb",
    "Flour Strength: Needs enough protein to hold the heavy fat/sugar load without collapsing",
    "Egg Wash Quality: Needs careful application to avoid 'scrambled egg' drips on the sides"
  ],
  "risks": [
    "The 'Flying Top': Crust separating from the crumb due to under-proofing or dry surface",
    "Soggy Bottom: Not toasting the internal cut side, allowing meat juices to melt the bread",
    "Doughy/Raw Center: Baking too many buns too close together, blocking heat circulation",
    "Collapsing: Loaves falling after baking due to weak flour or over-proofing",
    "Wrinkled Surface: Steam over-exposure or moving hot buns too much while they are setting"
  ],
  "notes": [
    "Potato starch or flour is the 'secret weapon' for the softest, most moist buns",
    "Always weigh your dough balls (90-100g for standard, 50-60g for sliders) for consistency",
    "Toast the bun cut-side down in butter before assembly—it creates a moisture barrier",
    "The egg wash should be one egg plus a splash of milk or water for the best shine",
    "Let them cool completely before bagging, or they will turn into a soggy mess"
  ],
  "tags": [
    t('common.burger_buns'),
    t('common.sandwich_rolls'),
    t('common.bread'),
    t('common.united_states')
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
      "title": "AIB International: Hamburger Bun Technical Standards",
      "url": "https://www.aibinternational.com/knowledge-center/",
      "author": "AIB International",
      "year": 2022
    },
    {
      "title": t('styles.modernist_bread_3'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Baking with Potato Flour",
      "url": "https://www.kingarthurbaking.com/blog/2017/11/17/potato-buns",
      "author": "King Arthur Baking",
      "year": 2017
    },
    {
      "title": "History of the Hamburger Bun",
      "url": "https://www.whitecastle.com/about/history",
      "author": "White Castle System",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What defines a quality burger bun?",
      "answer": "A good bun should be soft (marshmallow-like), elastic (spring back to its original shape after being squeezed), and have structural strength to withstand the weight and juices of the meat without turning into a 'mush'."
    },
    {
      "question": "What is the difference between a standard bun and a Brioche bun?",
      "answer": "A Brioche bun is enriched with significantly more butter and eggs. This makes it much more flavorful, golden-brown, and gives it a sweet aroma, making it the preferred choice for 'gourmet' burger shops."
    },
    {
      "question": "Why use potato (Potato Bun) in the dough?",
      "answer": "Potato starch retains much more moisture than wheat flour. This makes the bread stay moist for much longer and gives it an almost 'spongy' texture that melts in the mouth."
    },
    {
      "question": "Why should I toast the bun before assembling the burger?",
      "answer": "In addition to adding flavor (caramelization), toasting the internal side with butter creates a protective barrier that prevents meat juices and sauces from penetrating the dough and leaving the bun soggy."
    },
    {
      "question": "How do I get that shine on top of the bun?",
      "answer": "The secret is the 'Egg Wash'. Mix a whole egg with a tablespoon of milk or water and gently brush it over the buns right before they go into the oven."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
