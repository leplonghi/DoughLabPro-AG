import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const stollen_german: StyleDefinition = {
  "id": "stollen_german",
  "title": t('styles.german_stollen'),
  "subtitle": t('styles.festive_breads_5'),
  "category": t('styles.pastry_10'),
  "family": t('styles.festive_breads_6'),
  "variantName": t('styles.german_stollen_2'),
  "origin": {
    "country": t('styles.germany_4'),
    "region": t('styles.dresden_and_others'),
    "period": t('styles.traditional_15')
  },
  "intro": t('styles.associated_with_christmas_markets_and_holiday_cele'),
  "history": "Stollen (or Christstollen) is one of Germany's oldest festive traditions, with records dating back to 1474 in Dresden. Originally a simple, lean fasting bread for Advent (made only of flour, yeast, and water as the Catholic Church forbade butter and milk), it was transformed in 1491 when Pope Innocent VIII issued the 'Butterbrief' (Butter Letter), allowing the use of milk and butter in exchange for a contribution to the church. Over centuries, it evolved into a dense, rich loaf packed with rum-soaked fruits, nuts, and marzipan, shaped to represent the swaddled Christ Child—hence its traditional name, Christstollen.",
  "culturalContext": {
    "significance": [
      "The ultimate symbol of German Christmas hospitality",
      "Dresdner Christstollen is a protected geographical indication (PGI)",
      "Traditionally baked weeks in advance to allow the flavors to 'ripen'",
      "Represents the transition from Advent fasting to Christmas feasting",
      "Every year, Dresden hosts the 'Stollenfest', featuring a giant multi-ton stollen"
    ],
    "consumptionContext": [
      "Served in thin slices during Adventskaffee (Sunday afternoon coffee in December)",
      "Traditionally stored in a cool, dark place for 2-4 weeks before the first cut",
      "Often given as a high-value homemade gift between friends and family",
      "Eaten at room temperature; the cold butter coating should be firm but yield to the knife",
      "Typically paired with a warm glass of Glühwein (mulled wine) or coffee"
    ],
    "evolution": [
      "1400s: Lean, tasteless fasting bread for Advent",
      "1491: The 'Butterbrief' allows enrichment, revolutionizing the flavor",
      "1730: Augustus the Strong orders a 1.8-ton stollen for a military festival",
      "1990s: Specific regional protections (PGI) ensure traditional quality standards in Dresden",
      "2010s: Rising popularity of 'Quick Stollen' variants using baking powder (untraditional)",
      "Present: High-end versions using organic ancient grains and rare nut varieties"
    ],
    "rituals": [
      "The 'Ripening': resisting the urge to eat the bread for at least 14 days after baking",
      "The Butter Bath: drenching the hot loaf in clarifies butter multiple times",
      "The Sugar Seal: applying a thick, snow-like layer of powdered sugar to preserve freshness",
      "Cutting from the Center: slicing the loaf in half and cutting outward to keep the ends pressed together for storage",
      "Marzipan Core: the 'prize' of finding the rich almond paste center in your slice"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Dense, sweet buttery crumb",
      "Dominant rum-soaked raisins and candied citrus",
      "Warm spices: cardamom, mace, and cinnamon",
      "Sweet, nutty almond marzipan",
      "Toasted hazelnuts or almonds"
    ],
    "aromaProfile": [
      "Intense rum and vanilla",
      "Spicy citrus oils (lemon and orange peel)",
      "Roasted nuts and warm butter",
      "Powdered sugar sweetness",
      "Aged fermentation notes (after ripening)"
    ],
    "textureNotes": [
      "Dense and crumbly: more like a heavy cake than a light bread",
      "Moist fruit pockets: bursts of juicy, alcohol-soaked raisins",
      "The 'Sugar Crust': a thick, slightly crunchy exterior of butter and sugar",
      "Velvety Marzipan: a soft, creamy center that contrasts the firmer crumb",
      "Short Texture: heavy fat content prevents long gluten strands, creating a 'short' bite"
    ],
    "pairingRecommendations": [
      "Drink: Glühwein (mulled wine), dark roasted coffee, or a rich Earl Grey tea",
      "Spirits: A small glass of aged Rum or Cognac",
      "Cheese: A mild, nutty semi-hard cheese like Gouda or Emmental",
      "Spreads: Unsalted butter (if the slice is toasted, though rare)",
      "Atmosphere: Best enjoyed by a fireplace or during a winter afternoon"
    ],
    "flavorEvolution": [
      "Fresh (0-3 days): Tastes like an unfinished rich bread; flavors are disconnected",
      "2 Weeks: The 'Magic' window; spices and alcohol have permeated the crumb perfectly",
      "1 Month: Peak maturity; the texture is slightly drier but the flavor is most intense",
      "3 Months: If stored correctly (cool/dark), it remains edible and highly complex",
      "Post-Holiday: Makes incredible 'Stollen Bread Pudding' or trifles"
    ]
  },
  "technicalFoundations": [
    "Can use sponge or direct dough with long maturation.",
    "Hydration: 55-65%"
  ],
  "doughImpact": [
    "Ultra-high fat content (30-50% butter to flour) requires a very strong starter or large yeast dose",
    "Heavy fruit load (up to 100% of flour weight) requires careful mixing to avoid tearing the gluten",
    "Low hydration (55-60% counting liquids) ensures the dense, cake-like structure that survives long storage",
    "Spices (cinnamon/cardamom) can inhibit yeast; often added in a second mixing stage",
    "Marzipan is added after bulk fermentation as a core or 'log' during final shaping"
  ],
  "bakingImpact": [
    "Baked at lower temperatures (170-185°C) due to the high density and sugar content",
    "The 'Stollen Shape': folded over itself to create a tapered ridge, representing the swaddle",
    "Baking to exactly 92-94°C internal temperature ensures the center is safe but moist",
    "The Butter Bath: brushing with melted butter immediately after the oven is CRITICAL for the seal",
    "The Sugar Coating: applying granulated sugar first, then a thick layer of powdered sugar after cooling"
  ],
  "technicalProfile": {
    "hydrationRange": [
      55,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      15,
      30
    ],
    "sugarRange": [
      15,
      30
    ],
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour_4'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "60–90 min after shaping",
      "coldRetard": t('styles.resting_after_baking_improves_flavor_storage_is_pa')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        170,
        190
      ],
      "notes": t('styles.heavily_buttered_and_sugared_after_baking_improves')
    },
    "difficulty": t('styles.medium_30'),
    "recommendedUse": [
      t('common.christmas_bread'),
      t('common.festive_sweet_loaf')
    ]
  },
  "regionalVariants": [
    "Dresdner Christstollen - The original, strictly regulated with specific minimum butter/fruit %",
    "Marzipanstollen - Featuring a thick log of almond paste in the center",
    "Mandelstollen - Almond-heavy version without raisins (for those who dislike them)",
    "Mohnstollen - Filled with a sweet poppy-seed paste, usually not aged as long",
    "Quarkstollen - Made with quark cheese; faster to make but doesn't store as well"
  ],
  "climateScenarios": [
    "Humid Environment: The thick sugar coating will absorb moisture and turn yellow/wet; store in airtight tins",
    "Very Cold: The butter in the dough will harden; bring to room temperature for 1-2 hours before eating",
    "Arid/Dry: The bread can dry out; ensure the 'butter seal' is perfect and well-wrapped in foil",
    "High Altitude: Use slightly less yeast to prevent the dense dough from over-expanding and cracking"
  ],
  "styleComparisons": [
    "vs. Panettone: Stollen is dense/crumbly/aged vs Panettone's light/feathery/fresh-style",
    "vs. Fruitcake: Stollen is a leavened yeast bread vs Fruitcake's chemically leavened cake base",
    "vs. Brioche: Stollen has much more fat/fruit and a vastly denser 'short' crumb",
    "vs. Pandoro: Opposite ends: Stollen is packed with 'bits' vs Pandoro's absolute simplicity"
  ],
  "parameterSensitivity": [
    "Critical: Fruit Soaking - if raisins aren't fully hydrated in rum, they will suck moisture from the dough",
    "Highly sensitive: Butter Quality - 82%+ fat is mandatory; lower quality butter has too much water",
    "Ripening Temperature: Must stay between 8-12°C for the best flavor development",
    "The Fold: If folded too loosely, the 'swaddle' will collapse and bake unevenly",
    "Sugar Seal: If the first granulated sugar layer is missed, the powdered sugar will just soak in and disappear"
  ],
  "risks": [
    "The 'Brick': Dough didn't rise due to yeast being overwhelmed by fat/sugar/spices",
    "Mold: Result of under-baking or improper storage in a warm, damp spot",
    "Dryness: Result of missing the internal temp mark or skipping the butter bath",
    "Cracked Crust: Oven was too hot, causing the dense dough to burst open too fast",
    "The 'Leaked' Marzipan: Log wasn't centered correctly and melted out of the side"
  ],
  "notes": [
    "Soak your fruits in rum for at least 24 hours (up to a week) before starting the dough",
    "Clarify your butter (Ghee) for the post-bake bath for a cleaner, more stable finish",
    "Weight the marzipan to be about 20-30% of the total loaf weight for the best balance",
    "Don't be afraid of the spice amounts—the ripening process will mellow them significantly",
    "Wrap the cooled, sugared loaf in parchment paper, then foil, then place in a tin for ripening"
  ],
  "tags": [
    t('common.christmas_bread'),
    t('common.festive_sweet_loaf'),
    t('common.pastry'),
    t('common.germany')
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
      "title": "Dresdner Stollen: The History of the Original",
      "url": "https://www.dresdnerstollen.de/en/dresden-christstollen/history",
      "author": "The Dresden Stollen Association",
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread_31'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "German Christmas Baking",
      "url": "https://www.germanfoods.org/recipes/stollen/",
      "author": "German Foods North America",
      "year": 2021
    },
    {
      "title": "The Science of Ripening Rich Breads",
      "url": "https://www.foodandwine.com/desserts/cakes/christmas-cakes/stollen-guide",
      "author": "Food & Wine Magazine",
      "year": 2019
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Can I eat the Stollen as soon as it's baked?",
      "answer": "You can, but it will taste like a heavy, unfinished bread. The true magic of Stollen happens during the 2-4 week ripening period. This time allows the moisture from the fruit to migrate into the crumb and the spices to mellow and blend. It's the difference between a good bread and a legendary Christmas treat."
    },
    {
      "question": "How do I store a Stollen so it doesn't mold or dry out?",
      "answer": "The secret is the 'Butter and Sugar Seal'. Brushing it with lots of butter and coating it in sugar creates a hermetic barrier. Wrap the cooled loaf tightly in parchment paper, then several layers of foil, and store in a cool, dark place (like a cellar or a pantry, but not the fridge)."
    },
    {
      "question": "Why is my Stollen so dense and crumbly?",
      "answer": "Stollen should be dense! It's closer to a cake in texture than a sandwich bread. This is due to the very high fat and fruit content which inhibits long gluten strands. If it's *too* crumbly, you might have over-baked it or used a flour with too low protein."
    },
    {
      "question": "What is the marzipan in the middle?",
      "answer": "Marzipan is a sweet paste made from ground almonds and sugar. In a 'Marzipanstollen', a log of this paste is placed in the center during shaping. It adds a moist, creamy heart to the slice and complements the citrus and rum flavors beautifully."
    },
    {
      "question": "How long does a properly made Stollen last?",
      "answer": "A well-made, well-sealed Christstollen can last up to 3 months in a cool, dark place. The high sugar, alcohol-soaked fruit, and fat content act as natural preservatives. In fact, many people say it tastes best 6 weeks after baking."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
