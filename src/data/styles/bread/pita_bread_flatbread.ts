import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pita_bread_flatbread: StyleDefinition = {
  "id": "pita_bread_flatbread",
  "title": t('styles.pita_bread'),
  "subtitle": t('styles.classic_flatbreads_9'),
  "category": t('styles.bread_22'),
  "family": t('styles.classic_flatbreads_10'),
  "variantName": t('styles.pita_bread_2'),
  "origin": {
    "country": t('styles.middle_east'),
    "region": t('styles.levant_and_mediterranean'),
    "period": "Ancient/Traditional"
  },
  "intro": "Used for sandwiches, dips and wraps across Middle Eastern and Mediterranean cuisines.",
  "history": "Pita (or 'Khubz') is one of the oldest bread styles in existence, with roots stretching back over 4,000 years to the ancient Levant and Mesopotamia. Originally an unleavened or naturally leavened flatbread baked on hot stones, it evolved the characteristic 'pocket' as baking technologies (specifically high-heat ovens) improved. It is the fundamental bread of the Middle East, serving as the plate, utensil, and vessel for thousands of years.",
  "culturalContext": {
    "significance": [
      "The 'bread of life' across the Middle East, North Africa, and the Mediterranean",
      "Functionally designed as an edible utensil to scoop up mezze and dips",
      "A symbol of hospitality: 'Breaking bread' in the Levant almost always involves Pita",
      "Historically baked daily in communal or household ovens (Taboon)",
      "Essential for street food culture, from Falafel in Jerusalem to Gyros in Athens"
    ],
    "consumptionContext": [
      "Commonly split to create a 'pocket' for Falafel, Sabich, or Shawarma",
      "Served whole and warm alongside Hummus, Baba Ganoush, and Labneh",
      "Used as a wrap for grilled meats (Souvlaki or Kofta)",
      "Traditionally torn and used as a scoop rather than cut with a knife",
      "The 'base' for Manakish (Pita topped with Za'atar and olive oil)"
    ],
    "evolution": [
      "Ancient Mesopotamia: Barley-based flatbreads are baked on clay disks",
      "Biblical Era: Leavened 'Khubz' becomes a dietary staple in the Levant",
      "1500s: The Ottoman Empire standardizes bakery styles across the region",
      "1950s: Industrial Pita production introduces high-speed ovens and chemical leaveners",
      "2010s: The 'Israeli Artisan Pita' movement (e.g., Miznon) popularizes extra-fluffy, cloud-like Pita",
      "Present: High-quality sourdough Pita is gaining traction in health-conscious bakeries"
    ],
    "rituals": [
      "The 'Balloon' Watch: the excitement of seeing the flat dough puff up into a balloon in seconds",
      "Opening the Pocket: carefully slicing the edge to release the steam and reveal the cavity",
      "The Mezze Dip: the precise 'three-finger' pinch used to scoop hummus without breaking the bread",
      "Towel Wrapping: immediately placing hot pita in a cloth to keep it soft with its own steam",
      "Topping with Za'atar: rubbing the warm surface with olive oil and wild thyme as a breakfast snack"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Mild, clean toasted wheat with a delicate sweetness",
      "Neutral savory profile designed to complement intense spices",
      "Slightly nutty notes from the parchment-thin crust",
      "Clean, yeast-forward aroma",
      "Zero acidity (in standard commercial versions)"
    ],
    "aromaProfile": [
      "Freshly baked white flour",
      "Warm steam and cereal",
      "Mild toasted notes",
      "Subtle sweetness",
      "Clean, neutral grain scent"
    ],
    "textureNotes": [
      "Contrast: extremely thin, tender skin vs. soft, slightly chewy internal walls",
      "The 'Pocket': a clean, unobstructed central cavity",
      "Softness: should be flexible enough to roll without cracking",
      "Lightness: a high ratio of surface area to crumb, making it feel very light",
      "Moist Finish: the interior walls should feel slightly damp and soft from trapped steam"
    ],
    "pairingRecommendations": [
      "Dip: Hummus with tahini, smoky Mutabal, or cooling Tzatziki",
      "Filling: Crispy Falafel balls, grilled Chicken Shish, or sliced Lamb",
      "Salad: Israeli salad (cucumber/tomato) or Tabbouleh",
      "Spice: Za'atar, Sumac, or spicy Harissa",
      "Drink: Mint tea, Arak (anise spirit), or cold lemonade"
    ],
    "flavorEvolution": [
      "Hot (0-10 mins): The 'Magic' phase; maximum puff and soft, steamy interior",
      "1-6 Hours: Becomes firm; still excellent for wraps and pockets",
      "Next Day: Best used for dipping or making 'Fattoush' (toasted bread salad)",
      "Stale: Traditionally fried to make pita chips or used as a base for stews",
      "Freezing: Pita freezes exceptionally well; toast for 30 seconds to revive"
    ]
  },
  "technicalFoundations": [
    "Often direct dough; sometimes sponge-based.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [
    "Moderate hydration (60-68%) is required to generate enough steam for the 'pocket' puff",
    "Short bulk fermentation prevents the development of an open crumb, which would block the pocket",
    "Intense kneading develops the gluten strength needed to hold the steam pressure inside",
    "Small amount of oil (3-5%) keeps the bread flexible and prevents it from becoming a 'cracker'",
    "Very thin rolling (3-5mm) ensures the heat penetrates instantly to vaporize internal water"
  ],
  "bakingImpact": [
    "Extreme bottom heat (260-320°C+) is CRITICAL; a hot stone or steel is mandatory",
    "The lack of steam in the oven allows the outer skin to set quickly, trapping internal steam",
    "Ultra-fast bake (2-3 mins) is necessary to 'blow' the pocket before the dough dries out",
    "Immediate removal and covering with a cloth is vital to soften the 'baked' skin via condensation",
    "The 'Flash' bake strategy: if the bread stays in more than 4 mins, the pocket walls may fuse"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      68
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      5
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour_2'),
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": t('styles.short_bench_rest_after_shaping'),
      "coldRetard": t('styles.optional_overnight_bulk_2')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        260,
        320
      ],
      "notes": t('styles.very_hot_stone_or_deck_encourages_pocket_formation')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.pocket_flatbread'),
      t('common.wraps_and_sandwiches')
    ]
  },
  "regionalVariants": [
    "Pita (Greek Style) - Usually thicker, no pocket, designed for wrapping Souvlaki",
    "Khubz (Standard) - The classic thin Middle Eastern pocket bread",
    "Pocket Pita (Israeli) - Known for being extra thick, soft, and fluffy (cloud-like)",
    "Whole Wheat Pita - Made with high-extraction flour for a nuttier, heartier profile",
    "Manakish - The 'lebanese pizza' version using the same dough base"
  ],
  "climateScenarios": [
    "Desert Arid: Dough dries in seconds; keep rolled rounds under a damp cloth at all times",
    "Coastal Humid: Breads may become 'soggy' after baking; allow a 1-min uncovered rest",
    "Mediterranean Heat: Use cool water; at 35°C, the thin dough will over-proof while you roll them",
    "Cold Winter: Use a warm stone; if the base temp drops below 200°C, the pocket will NEVER form"
  ],
  "styleComparisons": [
    "vs. Naan: Pita is leaner (no yogurt) and has a pocket; Naan is enriched and solid",
    "vs. Tortilla: Pita is leavened (yeast) vs. Tortilla (unleavened); Pita is much thicker",
    "vs. Pizza: Pita is baked to puff up; Pizza is baked with toppings to remain flat",
    "vs. Bazari: Iranian bread similar to pita but longer and usually without a pocket"
  ],
  "parameterSensitivity": [
    "Critical: Sheet Thickness - if too thick (1cm), it's a roll; if too thin (1mm), it's a cracker",
    "Highly sensitive: Oven Temp - if too cold, the air bubbles will just escape slowly (no puff)",
    "Surface Smoothness: Any holes or tears during rolling will act as 'exhaust vents' (no pocket)",
    "Resting Time: Dough MUST rest after rolling to allow gluten to relax for the puff",
    "Oil content: Too much oil weakens the gluten skin, making the pocket prone to tearing"
  ],
  "risks": [
    "The 'No-Pocket' Pita: Oven or stone wasn't hot enough to create an immediate steam burst",
    "Brittle/Cracking: Baking too long or at too low a temperature",
    "Raw/Gummy Walls: High hydration without enough heat to dry the internal steam",
    "Fused Sides: Dough was over-rested after rolling, causing the center to stick together",
    "Burnt Bottom: Stone overheated (350°C+) without enough top heat to match"
  ],
  "notes": [
    "A baking steel or thick stone is your best friend for getting that magical puff at home",
    "Don't stack them while rolling; use separate cloths or floured surfaces to prevent sticking",
    "If it doesn't puff, it's still delicious—we call it 'Flat Pita' and it's great for dipping",
    "The dough should be smooth and elastic like a baby's skin",
    "For the fluffiest Israeli style, use a higher hydration (70%) and gentle handling"
  ],
  "tags": [
    t('common.pocket_flatbread'),
    t('common.wraps_and_sandwiches'),
    t('common.bread'),
    t('common.middle_east')
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
      "title": "A History of Khubz: The Bread of life",
      "url": "https://www.jstor.org/stable/j.ctv1v7zc5z",
      "author": "Liora Gvion",
      "year": 2012
    },
    {
      "title": t('styles.modernist_bread_17'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Ottolenghi: The Cookbook",
      "url": "https://www.amazon.com/Ottolenghi-Cookbook-Yotam-Ottolenghi/dp/1607743936",
      "author": "Yotam Ottolenghi, Sami Tamimi",
      "year": 2008
    },
    {
      "title": "Mastering the Art of Flatbreads",
      "url": "https://www.kingarthurbaking.com/recipes/homemade-pita-bread-recipe",
      "author": "King Arthur Baking",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "How does the 'pocket' form inside the Pita bread?",
      "answer": "The secret is extreme heat. When the thin dough comes into contact with a very hot surface, the water inside it instantly turns into steam. Since the outer surface bakes quickly and seals the edges, the steam gets trapped and 'inflates' the bread like a balloon, creating the pocket."
    },
    {
      "question": "Why didn't my Pita bread puff up?",
      "answer": "Usually for two reasons: either the oven/stone wasn't hot enough (it needs to be at maximum!), or the dough had a small hole or tear that let the steam escape. Also, the dough must rest after being rolled out."
    },
    {
      "question": "What is the difference between Greek Pita and Syrian/Arabic Pita (Khubz)?",
      "answer": "Greek Pita is generally thicker, doesn't have a pocket, and is used to wrap Souvlaki or Gyros. Syrian/Arabic Pita (Khubz) is thinner and is designed to create a pocket for filling like an envelope."
    },
    {
      "question": "How to keep the bread soft after baking?",
      "answer": "As soon as you take it out of the oven, immediately place the bread inside a clean kitchen towel. The steam coming off the bread will help soften the crust, keeping it pliable for folding or filling."
    },
    {
      "question": "Can I make Pita with whole wheat flour?",
      "answer": "Absolutely! Whole wheat Pita is very traditional. it tends to be slightly less elastic and the pocket might be smaller, but the flavor is rich and nutty."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
