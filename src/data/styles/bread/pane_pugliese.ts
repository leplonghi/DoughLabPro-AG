import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pane_pugliese: StyleDefinition = {
  "id": "pane_pugliese",
  "title": t('styles.pane_pugliese'),
  "subtitle": t('styles.italian_rustic__high_hydration_5'),
  "category": t('styles.bread_18'),
  "family": t('styles.italian_rustic__high_hydration_6'),
  "variantName": t('styles.pane_pugliese_2'),
  "origin": {
    "country": t('styles.italy_4'),
    "region": t('styles.puglia'),
    "period": t('styles.traditional_7')
  },
  "intro": "Served as a flavorful table bread with a chewy crumb, pairing well with olive oil and hearty dishes.",
  "history": "Pane Pugliese is the rustic giant of Southern Italian breads, originating from the Puglia region—the 'granary of Italy'. Historically, families in Puglia made massive 2-3kg loaves (Pagnotte) using high-quality local durum wheat (semola). These large loaves were designed to last an entire week for farming families, staying moist and flavorful even after 5-7 days. It is deeply connected to the town of Altamura, though Pugliese refers to the broader regional style.",
  "culturalContext": {
    "significance": [
      "A symbol of the agricultural heritage of Southern Italy",
      "One of the only breads in Europe with a PDO (DOP) status (for the Altamura variant)",
      "Represents the 'Cucina Povera' (impoverished cooking) philosophy: simple, high-quality, and zero waste",
      "Known as the 'yellow bread' due to the natural pigments of remilled durum wheat",
      "Traditionally baked in massive wood-fired public ovens"
    ],
    "consumptionContext": [
      "The soul of the 'Bruschetta' and 'Panzanella' traditions",
      "Traditionally eaten in thick, hand-torn chunks with local olive oil",
      "Served alongside hearty Apulian dishes like Orecchiette with rapini",
      "A staple for 'Pane e Pomodoro'—rubbed with ripe tomatoes and salt",
      "Valued for its long shelf life; the flavor actually improves on day 2 and 3"
    ],
    "evolution": [
      "Ancient Times: Greeks and Romans cultivate durum wheat in the Apulian plains",
      "Middle Ages: Communal baking laws require families to mark their loaves with wooden stamps",
      "1800s: The sourdough (lievito madre) method is standardized for long-lasting loaves",
      "1900s: Puglia becomes the primary supplier of durum flour for all of Italy",
      "2003: Pane di Altamura receives the first European DOP for bread",
      "Present: A global favorite for those seeking rustic, 'big-flavored' Italian bread"
    ],
    "rituals": [
      "The 'Cappello di Prete' (Priest's Hat): a specific folding technique that creates a top dome",
      "Marking the Loaf: traditionally stamping or scoring the dough with the family initial",
      "The Tap of the Base: checking the massive loaf for a hollow sound to ensure the center is dry",
      "Hand-Tearing: many locals refuse to slice Pugliese with a knife, preferring to tear it for texture",
      "The Olive Oil Drizzle: testing the first hot slice with nothing but the current year's olive oil"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Distinctive nutty, earthy sweetness from remilled durum wheat",
      "Subtle malty notes with a lack of harsh sourdough acidity",
      "Intense toasted grain profile from the dark-baked crust",
      "A unique 'yellow' savory note, typical of semola flours",
      "Mildly salty and mineral-rich"
    ],
    "aromaProfile": [
      "Honey and toasted nuts",
      "Freshly harvested wheat fields",
      "Smoky and earthy notes from the thick, caramelized crust",
      "Mildly sweet fermentative aroma",
      "Clean and robust grain scent"
    ],
    "textureNotes": [
      "The 'Yellow Crumb': dense but soft, with a distinct pale-yellow hue",
      "Thick, dark-brown, and exceptionally crunchy 'shatter' crust",
      "Substantial chewiness (high gluten elasticity from durum)",
      "Irregular, medium-sized alveoli (holes) that persist even in large loaves",
      "Moist and 'cool' internal feel that lasts for many days"
    ],
    "pairingRecommendations": [
      "Olive Oil: Robust, spicy Southern Italian oils (like Coratina)",
      "Vegetables: Sun-dried tomatoes, artichokes, or roasted peppers",
      "Cheese: Pecorino Pugliese, fresh Burrata, or Scamorza",
      "Meat: Capocollo di Martina Franca or spicy salami",
      "Meal: Fave e Cicoria (fava bean puree and chicory)"
    ],
    "flavorEvolution": [
      "Fresh (0-6 hours): Maximum crust crunch; flavor is sweet and mild",
      "Day 2-3: The 'Peak'; the crumb sets and the nutty durum flavor intensifies",
      "Day 4-5: Perfect for 'Acquasale' (soaking in water with tomatoes and herbs)",
      "Day 7: Still edible and excellent for making homemade breadcrumbs",
      "Stale: Traditionally used for 'Polpette di Pane' (bread meatballs)"
    ]
  },
  "technicalFoundations": [
    "Levain or biga-based preferments are common.",
    "Hydration: 70-78%"
  ],
  "doughImpact": [
    "Inclusion of Remilled Durum Wheat (Semola Rimacinata) provides the yellow color and nutty sweetness",
    "High hydration (70-78%) is necessary because durum flour absorbs much more water than soft wheat",
    "Use of Lievito Madre (sourdough) or a Biga provides the enzymes needed for the long shelf life",
    "Durum gluten is strong but can be 'brittle'; requires gentle handling during the final shape",
    "Extended bulk fermentation (3-4h) allows the coarse semola particles to fully hydrate"
  ],
  "bakingImpact": [
    "Baked as very large loaves (1kg+) to preserve internal moisture over many days",
    "High initial deck heat is required to penetrate the large mass of the dense durum dough",
    "Early steam is vital, but the bake is finished 'dry' to harden the famously thick crust",
    "A 'Bold Bake' strategy—taking the crust to a dark espresso color for maximum flavor",
    "Long bake times (45-60 mins) are necessary for the heat to reach the center of the giant loaves"
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      78
    ],
    "saltRange": [
      2,
      2.3
    ],
    "oilRange": [
      0,
      2
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.blend_of_bread_flour_and_durum_wheat_flours'),
    "fermentation": {
      "bulk": "2–4 h at 23–25°C with folds",
      "proof": "45–90 min at 23–25°C",
      "coldRetard": t('styles.optional_overnight_retard')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.often_baked_as_large_loaves_with_bold_crust')
    },
    "difficulty": t('styles.hard_12'),
    "recommendedUse": [
      t('common.rustic_italian_table_bread')
    ]
  },
  "regionalVariants": [
    "Pane di Altamura (DOP) - The protected, 100% durum wheat gold standard",
    "Pane di Matera (IGP) - Neighboring style with a unique 'conical' or croissant-like shape",
    "Pane Pugliese di Grano Tenero - Variant using a blend of soft and hard wheat flours",
    "Pagnotta di Cerignola - Large, round variant known for its exceptionally thick crust",
    "Friselle - Twice-baked durum bread rings designed for extreme long-term storage"
  ],
  "climateScenarios": [
    "Mediterranean Heat: Use cooler water (18°C) to prevent the durum from fermenting too fast",
    "Arid/Dry: Keep the large loaves in a wooden box to maintain the humidity of the thick crust",
    "Winter/Cold: Extend the Biga fermentation time to ensure enough enzymatic activity for browning",
    "Coastal: The salt air helps develop the crust flavor but requires a drier finish in the oven"
  ],
  "styleComparisons": [
    "vs. Pain de Campagne: Pugliese is made with hard durum wheat (yellow) vs soft wheat/rye (grey)",
    "vs. Ciabatta: Both are hydrated, but Pugliese is much larger and has a thicker, darker crust",
    "vs. Altamura: Pugliese is a style; Altamura is a specific, legally protected recipe",
    "vs. Baguette: Pugliese is a 'marathon' bread (lasts a week) vs. Baguette's 'sprint' (lasts 4 hours)"
  ],
  "parameterSensitivity": [
    "Critical: Semola Quality - needs 'Semola Rimacinata' (remilled), not coarse semolina for pasta",
    "Highly sensitive: Water Absorption - durum can 'drink' water suddenly; look for a soft, tacky feel",
    "Lievito Madre Health: If the starter is too acidic, it will weaken the durum gluten drastically",
    "Bake Duration: Short-baking a 1kg loaf will result in a gummy, raw center",
    "Flour Temperature: Avoid overheating the dough during mixing as it can 'cook' the durum proteins"
  ],
  "risks": [
    "Gummy Center: Not baking the large loaf long enough to reach 97°C internally",
    "Brick-like Crumb: Using 'Semolina' (coarse) instead of 'Semola Rimacinata' (fine remilled)",
    "Lack of Color: Under-fermenting, which leaves no sugars for the Maillard reaction",
    "Crust Peeling: Too much steam at the end of the bake, causing the skin to separate",
    "Solado (Sunken Base): Not enough bottom heat to lift the massive weight of the dough"
  ],
  "notes": [
    "If you can't find Semola Rimacinata, pulse regular semolina in a high-speed blender",
    "Try making at least 1kg loaves—this bread needs mass to develop its true character",
    "Rub a cut tomato and olive oil on a 2-day-old slice for the best snack of your life",
    "Scoring should be deep (at least 2cm) to allow the large loaf to expand without bursting",
    "The crumb should be pale yellow—if it's white, you're not using enough durum wheat"
  ],
  "tags": [
    t('common.rustic_italian_table_bread'),
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
      "title": t('styles.modernist_bread_16'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Historical Puglia: The Bread of Altamura",
      "url": "https://www.panealtamuradop.it/en/history/",
      "author": "Consortium of Pane di Altamura",
      "year": 2023
    },
    {
      "title": "Encyclopedia of Pasta & Bread",
      "url": "https://www.amazon.com/Encyclopedia-Pasta-Bread-Italian-Heritage/dp/0520255931",
      "author": "Oretta Zanini De Vita",
      "year": 2009
    },
    {
      "title": "Baking with Italian Flours",
      "url": "https://www.mulinocaputo.it/en/flours",
      "author": "Antimo Caputo",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is Pane Pugliese?",
      "answer": "It is the iconic rustic bread from the Puglia region in Southern Italy. It is famous for using remilled durum wheat semolina (which gives the crumb a yellowish color), having a dark and very thick crust, and being made in large formats (1kg or more)."
    },
    {
      "question": "Why is the crumb yellowish?",
      "answer": "Due to the use of 'Semola Rimacinata di Grano Duro'. Unlike the common soft wheat used for white bread, durum wheat (used in Italian pastas) has natural yellowish pigments and a flavor reminiscent of nuts and honey."
    },
    {
      "question": "What is the difference between Pane Pugliese and Pane di Altamura?",
      "answer": "All Altamura bread is a type of Pugliese, but 'Pane di Altamura DOP' is the most famous and legally protected example, strictly made with 100% semolina from that specific zone and natural leaven."
    },
    {
      "question": "Is it true that this bread lasts for a week?",
      "answer": "Yes! Traditionally, it was baked in communal ovens to last the entire week. The thick crust protects the crumb, and the use of natural leaven and durum wheat helps maintain moisture and flavor for up to 7 days."
    },
    {
      "question": "How to serve Pane Pugliese traditionally?",
      "answer": "The most classic way is 'Pane e Pomodoro': take a thick slice (preferably 1 or 2 days old), rub a very ripe tomato until the bread absorbs the color and juice, sprinkle salt, and drizzle with high-quality extra virgin olive oil."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
