import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const hot_dog_buns_enriched: StyleDefinition = {
  "id": "hot_dog_buns_enriched",
  "title": "Hot Dog Buns (Enriched)",
  "subtitle": t('styles.sandwich__enriched_breads_3'),
  "category": t('styles.bread_8'),
  "family": t('styles.sandwich__enriched_breads_4'),
  "variantName": "Hot Dog Buns (Enriched)",
  "origin": {
    "country": t('styles.united_states_2'),
    "region": t('styles.global_fast_food_2'),
    "period": "20th century"
  },
  "intro": "Common in fast food and home grilling contexts, designed for softness and resilience.",
  "history": "Hot dog buns evolved alongside the American frankfurter in the late 19th and early 20th centuries. Folklore suggests that a German immigrant in Missouri, Charles Feltman, used rolls specifically to hold hot sausages at Coney Island in the 1870s. The elongated shape was a practical solution to facilitate eating on-the-go at baseball games and carnivals. Since then, it has become a global standard for sausage-based sandwiches, with the New England 'top-split' variant becoming a gourmet icon for lobster rolls.",
  "culturalContext": {
    "significance": [
      "The quintessential companion to the American 'Red Hot' or Frankfurter",
      "Central to American outdoor grilling culture, 4th of July, and sporting events",
      "A masterpiece of functional industrial design: holds messy condiments without leaking",
      "Available in two major schools: Side-split (national) and Top-split (New England)",
      "Represents the efficiency of mass-produced, standardized food culture"
    ],
    "consumptionContext": [
      "Used for Hot Dogs, Bratwursts, and Italian sausages",
      "The New England variant is the mandatory vessel for a high-end Lobster Roll",
      "Commonly buttered and toasted on the outside (flat sides) for extra crunch",
      "Served at backyard BBQs, ballparks, and fast-food stands across the globe",
      "Often eaten out of hand, inside a paper sleeve or tray"
    ],
    "evolution": [
      "1870s: Charles Feltman serves the first hot sausages in elongated rolls at Coney Island",
      "1910s: Standardized production begins as hot dogs become a national baseball staple",
      "1920s: New England bakers introduce the 'Top-split' or 'Croustade' bun",
      "1960s: Preservatives and softeners are added to extend shelf life for supermarket distribution",
      "2010s: Artisan bakeries begin using Brioche and Sourdough for 'gourmet' hot dog buns",
      "Present: Focus on split options and regional specialties like the Chicago-style poppy seed bun"
    ],
    "rituals": [
      "The 'Butterfly' Split: carefully opening the side-split bun without tearing it in two",
      "Side-Toasting: buttering the flat sides of a New England bun and grilling it on a flat-top",
      "Seed Shower: applying poppy seeds (essential for a true Chicago-style dog)",
      "The Rebound Test: ensuring the bun doesn't crack when it's folded to enclose the sausage",
      "Towel Steaming: keeping a pack of buns over a steaming tray to keep them soft for service"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Neutral, slightly sweet wheat with clean yeasty notes",
      "Milky richness from enrichment with milk powder or liquids",
      "Subtle malty undertones",
      "Toasted butter notes (if grilled on the sides)",
      "Designed specifically to not compete with the intense flavors of the sausage"
    ],
    "aromaProfile": [
      "Freshly baked white rolls",
      "Warm milk and subtle sugar",
      "Yeasty, clean fermentation",
      "Toasted grain and butter (if grilled)",
      "Mild cereal sweetness"
    ],
    "textureNotes": [
      "Springy and soft: should compress easily and bounce back",
      "Tight, uniform crumb: prevents juices and sauces from soaking through",
      "Thin, soft skin: no 'crust' to speak of, unless intentionally grilled",
      "Extreme flexibility: must be able to fold deeply without snapping",
      "Tender bite: designed for easy chewing alongside the firm snap of a sausage"
    ],
    "pairingRecommendations": [
      "Protein: Beef Frankfurter, Polish Kielbasa, or Lobster tail (New England style)",
      "Condiment: Yellow mustard, sweet relish, or spicy deli brown mustard",
      "Side: Salted potato chips, coleslaw, or potato salad",
      "Topping: Sauerkraut, grilled onions, or chili/cheese (Coney style)",
      "Beverage: Ice-cold lemonade, root beer, or a light pilsner lager"
    ],
    "flavorEvolution": [
      "Fresh (0-6 hours): Maximum softness; best for cold fillings or quick grilling",
      "12-24 Hours: Becomes slightly firmer; perfect for heavy chili or 'wet' toppings",
      "Day 2: Needs to be steamed or grilled to restore the tender texture",
      "Stale: Traditionally transformed into 'Croutons' or toasted breadsticks",
      "Freezing: Freezes excellently; toast directly from frozen for the best results"
    ]
  },
  "technicalFoundations": [
    "Typically straight dough; some use pre-ferments.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [
    "Enrichment (butter/oil/sugar) provides the signature softness and long shelf life",
    "Milk powder or liquid milk creates a white, tender crumb with a delicate aroma",
    "Hydration (60-68%) is lower than artisan bread to ensure a tight, structural crumb",
    "Intense mixing is required to develop a strong gluten network that won't tear when folded",
    "Use of improvers or enzymes is common in industrial versions to ensure uniformity and volume"
  ],
  "bakingImpact": [
    "Baking close together (in 'pull-apart' packs) ensures soft sides and vertical rise",
    "Lower oven temperature (180-200°C) prevents the formation of a hard, crunchy crust",
    "Short bake time (10-12 mins) preserves internal moisture and prevents staling into 'dry cake'",
    "Egg wash or milk wash provides the glossy, deep golden-brown appearance",
    "Allowing to cool under a light towel helps 'steam' the skin for ultimate tenderness"
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
      12
    ],
    "flourStrength": t('styles.bread_flour_or_strong_allpurpose_flour_2'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–75 min after shaping in pans or on trays",
      "coldRetard": t('styles.optional_bulk_retard_2')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.baked_close_together_for_soft_pullapart_texture')
    },
    "difficulty": t('styles.difficulty_medium'),
    "recommendedUse": [
      t('common.hot_dog_buns'),
      t('common.sausage_rolls')
    ]
  },
  "regionalVariants": [
    "Side-Split (Standard) - The common elongated roll found in supermarkets",
    "Top-Split (New England) - Square-sided bun designed for toasting on a flat-top",
    "Chicago-Style - Side-split bun heavily topped with poppy seeds",
    "Brioche Hot Dog Bun - Rich, gourmet version using high butter and egg content",
    "Pretzel Bun - A dark, lye-dipped variant for a chewy, savory contrast"
  ],
  "climateScenarios": [
    "Arid/Dry Grilling: Keep the buns in the original pack until the very last second to avoid drying",
    "Humid Beach/Coastal: The extra moisture will soften the bun; a quick grill is mandatory to restore structure",
    "Tropical Heat: High sugar and yeast will move twice as fast; reduce proofing time in the room",
    "Cold Picnic: Keep buns in an insulated bag or wrap in foil to preserve their 'fresh-from-bakery' softness"
  ],
  "styleComparisons": [
    "vs. Burger Buns: Identical dough; only the shape changes (elongated vs. round)",
    "vs. Lobster Roll (New England): Standard buns are side-split; New England ones are top-split with flat sides",
    "vs. Pretzel Buns: Pretzel buns are denser and have a thicker, dark, lye-blanched crust",
    "vs. Subway-style Rolls: Hot dog buns are shorter, softer, and more highly enriched"
  ],
  "parameterSensitivity": [
    "Critical: Fat Content - too little leads to a dry, bready roll; too much makes it heavy and cakey",
    "Highly sensitive: Proofing height - over-proofing causes the 'sidewalls' to collapse",
    "Sugars: Essential for both flavor and the fast, attractive browning at low temperatures",
    "Shaping consistency: Ensuring all rolls are the same length for a uniform pack bake",
    "Scoring (Top-split): Must be done with a very sharp blade to ensure the top opens perfectly"
  ],
  "risks": [
    "The 'Snap': Bun breaks in half when folded around the sausage (usually due to under-hydration)",
    "Dull Surface: Skipping the egg/milk wash or low humidity in the oven",
    "Soggy Bottom: Not toasting the bun before adding 'wet' toppings like chili or relish",
    "Burnt ends: Oven rack too high or too close to the heating element",
    "Wrinkled skin: Exposing the hot bun to cold air immediately after baking"
  ],
  "notes": [
    "Use a Pullman-style pan or bake them touching each other to get those soft, pull-apart sides",
    "Small amount of potato starch (5-10%) significantly improves the 'pillowy' texture",
    "Egg wash (one egg + splash of water) is the difference between home-looking and pro buns",
    "Don't skip the butter brush after baking—it adds flavor and keeps the skin soft",
    "If making New England style, use a pan with high sides to force the dough to rise square"
  ],
  "tags": [
    t('common.hot_dog_buns'),
    t('common.sausage_rolls'),
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
      "title": "AIB International: Enriched Roll Technical Standards",
      "url": "https://www.aibinternational.com/knowledge-center/",
      "author": "AIB International",
      "year": 2022
    },
    {
      "title": t('styles.modernist_bread_7'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "King Arthur: Homemade Hot Dog Buns",
      "url": "https://www.kingarthurbaking.com/recipes/hot-dog-buns-recipe",
      "author": "King Arthur Baking",
      "year": 2020
    },
    {
      "title": "The History of the New England Top-Split Bun",
      "url": "https://www.eater.com/2016/5/17/11691230/lobster-roll-bun-new-england",
      "author": "Eater.com",
      "year": 2016
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is the difference between a side-split and a top-split bun?",
      "answer": "Side-split is the standard national bun opened from the side. Top-split (or New England style) is cut along the top and has flat, crustless sides designed to be buttered and toasted on a griddle, which is essential for lobster rolls."
    },
    {
      "question": "How do I prevent my hot dog buns from breaking in half?",
      "answer": "This usually happens because the dough is too dry or under-proofed. Ensure you are using enough hydration (at least 60%) and enrichments like milk and fat, which keep the crumb flexible enough to fold without snapping."
    },
    {
      "question": "Why are some hot dog buns yellow?",
      "answer": "This is typically due to the use of potato flour/starch (Potato Bun) or the addition of extra egg yolks or a small amount of turmeric for color. Potato buns are prized for being extra moist and soft."
    },
    {
      "question": "Do I need a special pan to make hot dog buns?",
      "answer": "While you can use a dedicated hot dog bun pan for perfect uniformity, you can also bake them on a standard sheet tray. The secret is to place them close enough (about 1cm apart) so that as they rise and bake, they touch, creating soft, pull-apart sides."
    },
    {
      "question": "How long do homemade hot dog buns stay fresh?",
      "answer": "Due to the enrichments (fat and sugar), they stay soft for about 24-48 hours. To keep them longer, store in an airtight bag at room temperature. They also freeze exceptionally well for up to 3 months."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
