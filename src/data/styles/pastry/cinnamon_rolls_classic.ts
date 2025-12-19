import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const cinnamon_rolls_classic: StyleDefinition = {
  "id": "cinnamon_rolls_classic",
  "title": t('styles.classic_cinnamon_rolls'),
  "subtitle": t('styles.enriched_sweet_doughs_3'),
  "category": t('styles.pastry_3'),
  "family": t('styles.enriched_sweet_doughs_4'),
  "variantName": t('styles.classic_cinnamon_rolls_2'),
  "origin": {
    "country": "United States/Northern Europe",
    "region": t('styles.multiple'),
    "period": "20th century"
  },
  "intro": t('styles.common_as_a_breakfast_or_coffeeshop_pastry_in_many'),
  "history": "While cinnamon-spiced breads have long existed in various cultures, the modern Cinnamon Roll as we know it has two primary lineages: the Swedish 'Kanelbulle' (celebrated every October 4th) and the American commercial cinnamon roll. The Swedish version, established in the 1920s, is typically spiced with cardamom and less sweet. The American variant, popularized by the 1950s 'homemaker' era and later by chains like Cinnabon in the 1980s, shifted toward an ultra-soft, heavily enriched brioche-style dough topped with a thick, melting cream cheese frosting.",
  "culturalContext": {
    "significance": [
      "The 'Cozy' icon of home baking and high-end malls alike",
      "Symbolizes comfort and domesticity in North American and Scandinavian cultures",
      "Kanelbullens dag (Cinnamon Bun Day) is a major national event in Sweden",
      "One of the few pastries that spans the gap between 'Breakfast' and 'Dessert'",
      "Represents the global appeal of warm spices (cinnamon/cardamom) in leavened dough"
    ],
    "consumptionContext": [
      "A staple of the weekend 'Family Brunch' or special holiday mornings",
      "Traditionally served warm to allow the internal fats and frosting to soften",
      "Often used as a lure in shopping malls due to the intense aroma of baked cinnamon",
      "Served as a 'Fika' accompaniment (coffee break) in Swedish daily life",
      "Commonly shared from a single baking pan (pull-apart style)"
    ],
    "evolution": [
      "1700s: Early spiced buns emerge in Northern Europe as luxury items",
      "1920s: Sweden standardizes the 'Kanelbulle' with pearl sugar and cardamom",
      "1950s: American pre-made doughs (Pillsbury) bring cinnamon rolls to every home",
      "1985: Cinnabon opens, creating the 'Gourmet Large Format' roll with cream cheese frosting",
      "2015: Sourdough cinnamon rolls become a trend in the 'Real Bread' movement",
      "Present: Flavors expanding to orange, cardamom, and even savory bacon variants"
    ],
    "rituals": [
      "The Unrolling: the meditative process of peeling the spiral to save the center for last",
      "The Finger-Lick: the inevitable need to clean off the sticky frosting or glaze",
      "Center-First: the controversial debate over whether to eat the soft middle first or last",
      "Warming up: the 15-second microwave ping that restores a day-old roll to softness",
      "The Braid: in Sweden, folding and knotting the dough into aesthetic 'bullar' shapes"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Aromatic and warm cinnamon heat",
      "Rich cultured butter and sweet milk",
      "Lactic tang from cream cheese frosting (in American style)",
      "Floral cardamom notes (in Swedish style)",
      "Deep caramelized brown sugar"
    ],
    "aromaProfile": [
      "Intensity of toasted cinnamon and vanilla",
      "Sweet, warm yeast-bread smell",
      "Fresh cardamom and pearl sugar",
      "Buttery caramel",
      "The specific 'bakery-mallow' scent of melting frosting"
    ],
    "textureNotes": [
      "The 'Pillow' Crumb: ultra-soft, fine, and tenderly resilient",
      "The 'Goo': the center should be moist and slightly under-baked for maximum softness",
      "The 'Spiral': distinct layers that can be pulled apart without shattering",
      "Melting Frosting: a velvet-smooth coating that permeates the top layers of dough",
      "Crunchy Top (Swedish): pearl sugar and slivered almonds provide a textural contrast"
    ],
    "pairingRecommendations": [
      "Drink: Cold whole milk or a dark-medium roast coffee",
      "Fruit: Fresh sliced apples or a tart lingonberry jam",
      "Cheese: A small wedge of sharp cheddar (a classic US Midwest pairing)",
      "Nut: Toasted pecans or walnuts sprinkled on top",
      "Modern: A shot of Bourbon or an Oat Milk Latte"
    ],
    "flavorEvolution": [
      "Hot (0-10 mins): Peak aroma; the icing is liquid and the dough is ethereal",
      "1-2 Hours: The standard 'perfect' texture; icing is set but tacky",
      "Day 2: Requires warming; the cinnamon oil has permeated the crumb deeply",
      "Stale: Makes the best 'Cinnamon Roll Bread Pudding' ever created",
      "Freezing: Unbaked rolls (after shaping) freeze perfectly for 'bake-on-demand' mornings"
    ]
  },
  "technicalFoundations": [
    "Usually straight dough; some formulas use sponges.",
    "Hydration: 60-65%"
  ],
  "doughImpact": [
    "High enrichment (8-15% butter, plus milk and eggs) ensures the softest tender-bite",
    "Tangzhong (Water Roux) is often used in premium versions for extreme shelf-life and softness",
    "Moderate hydration (60-65%) balances the moisture of the internal cinnamon-butter filling",
    "Bread flour (High Protein) is required to support the vertical expansion in the baking pan",
    "Cold Fermentation (overnight) allows for easier rolling and cleaner spiral definition"
  ],
  "bakingImpact": [
    "Baked in high-sided pans ('touching') to prevent the rolls from drying out on the sides",
    "Relatively low temperature (175-185°C) prevents the high-sugar dough from over-browning",
    "The 'Touching' Bake forces the dough to rise vertically, creating the soft 'sides' that pull apart",
    "Internal temperature should reach 88-91°C; over-baking even slightly leads to dry rolls",
    "Adding frosting WHILE the rolls are still warm (not hot) allows some syrup to soak into the crumb"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      65
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      15,
      25
    ],
    "sugarRange": [
      15,
      25
    ],
    "flourStrength": t('styles.bread_or_strong_allpurpose_flour_2'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–90 min after shaping in pans",
      "coldRetard": t('styles.frequently_retarded_overnight_for_convenience')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        175,
        190
      ],
      "notes": t('styles.bake_until_set_but_still_soft_icing_added_after_ba')
    },
    "difficulty": t('styles.medium_26'),
    "recommendedUse": [
      t('common.breakfast_pastry'),
      "Coffee-shop pastry"
    ]
  },
  "defaults": {
    "hydration": 60,
    "salt": 1.8,
    "oil": 15,
    "sugar": 18
  },
  "regionalVariants": [
    "Swedish Kanelbulle - Cardamom-spiced, pearl sugar topping, often knotted rather than rolled",
    "American Classic - Large, soft, heavy cream cheese frosting, very sweet",
    "Finsh Korvapuusti - Ears-shaped buns with heavy cinnamon and cardamom",
    "Norwegian Skillingsbolle - A larger, rustic spiral with granulated sugar and cinnamon",
    "Chelsea Bun (UK) - Square-shaped, often containing currants and finished with a sugar glaze"
  ],
  "climateScenarios": [
    "Humid Summer: The sugar-butter filling can leak out during shaping; chill the dough ball thoroughly",
    "Arid/Dry Environment: The surface will skin fast; keep the pans covered with a damp towel",
    "Cold Winter: Enrichment slows yeast; use a warm proofing chamber (28°C) for the bulk and proof",
    "High Altitude: Reduce sugar in the dough by 10% to prevent the structure from collapsing"
  ],
  "styleComparisons": [
    "vs. Brioche: Cinnamon roll dough is similar but often has less butter to avoid 'greasy' spirals",
    "vs. Babka: Babka is a loaf format with even more filling; Rolls are individual portions",
    "vs. Chelsea Bun: Rolls focus on cinnamon heat; Chelsea buns focus on dried fruits and glaze",
    "vs. Sticky Buns: Cinnamon rolls have frosting on top; Sticky buns are baked in caramel and inverted"
  ],
  "parameterSensitivity": [
    "Critical: Roll Tightness - too tight and the center pops out; too loose and it falls apart",
    "Highly sensitive: Flour/Cinnamon ratio - too much cinnamon can actually inhibit yeast activity",
    "Oven Placement: Middle rack is vital; the bottom rack will burn the sugar/butter 'leakage'",
    "Frosting Temperature: Rolls must be at 40-50°C when frosted for the 'melt-in' effect",
    "Slicing Tool: Use dental floss or a very sharp serrated knife to avoid squashing the layers"
  ],
  "risks": [
    "The 'Volcano': The center of the roll pops up during baking due to excessive roll tension",
    "Dry Crumb: Caused by over-baking or not enough fat/milk enrichment",
    "Soggy Bottom: From too much butter in the filling leaking and 'frying' the base in the pan",
    "Tough Chew: Using a flour with too much protein without enough fat to soften it",
    "Zero Spiral Definition: The dough was too warm when rolled, causing the layers to merge"
  ],
  "notes": [
    "For the softest results, use the Tangzhong method (cooking a bit of flour/milk first)",
    "Spread the filling with a palette knife—it should be a paste, not just dry sugar",
    "Use Dental Floss for 'clean cuts' to preserve the round spiral shape",
    "The 'Secret Ingredient' in many top shops is a tiny pinch of salt in the cream cheese frosting",
    "Don't let them proof until they are massive—about 80% volume increase is perfect for oven spring"
  ],
  "tags": [
    t('common.breakfast_pastry'),
    "Coffee-shop pastry",
    t('common.pastry'),
    "United States/Northern Europe"
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
      "title": "Sweden.se: The Swedish Cinnamon Bun Ritual",
      "url": "https://sweden.se/culture/food/the-swedish-cinnamon-bun",
      "author": "Official Site of Sweden",
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread_24'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Baking with Spices: The Science of Cinnamon",
      "url": "https://www.kingarthurbaking.com/spices",
      "author": "King Arthur Baking",
      "year": 2020
    },
    {
      "title": "History of the Cinnamon Roll",
      "url": "https://www.foodandwine.com/bread/cinnamon-roll-history",
      "author": "Food & Wine Magazine",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why do my cinnamon rolls always turn out dry the next day?",
      "answer": "This is common with enriched dough. To stay soft, they need enough fat and moisture. The 'secret' used by pros is the Tangzhong (Water Roux) method. Also, ensure you don't over-bake them; an internal temp of 88-91°C is perfect. If they are dry, warm them for 10 seconds in the microwave."
    },
    {
      "question": "What is the best way to slice the dough without squashing the rolls?",
      "answer": "Use unflavored dental floss! Slide it under the rolled log, cross it over the top, and pull. It cuts through the soft dough cleanly without any pressure. If you must use a knife, use a very sharp serrated knife and a 'sawing' motion."
    },
    {
      "question": "Why did the middle of my rolls pop out like a volcano in the oven?",
      "answer": "This usually happens when you roll the dough too tightly. As the yeast expands in the oven, the pressure has nowhere to go but up. Roll them firmly but without tension to allow for even expansion."
    },
    {
      "question": "Can I make the dough at night and bake them in the morning?",
      "answer": "Yes! In fact, we recommend it. Shaping them and then letting them slow-proof in the fridge overnight improves the flavor and makes the texture even more tender. Just take them out 30-60 mins before baking to take the chill off."
    },
    {
      "question": "What is the difference between a Cinnamon Roll and a Sticky Bun?",
      "answer": "Cinnamon rolls are usually baked in a pan and frosted on top while warm. Sticky buns (or Pecan Rolls) are baked on top of a layer of caramel and nuts; they are then inverted (flipped upside down) immediately after baking so the caramel coats the top."
    }
  ],
  "isCanonical": true,
  "source": "official",
  "base_formula": [
    { "name": t('styles.bread_flour_3'), "percentage": 100, "category": "base", "role": "flour" },
    { "name": t('styles.whole_milk_3'), "percentage": 65, "hydrationContent": 0.87, "category": "liquid", "role": "other" },
    { "name": t('styles.sugar_3'), "percentage": 15, "category": "sugar", "role": "sugar" },
    { "name": "Butter (Soft)", "percentage": 15, "hydrationContent": 0.15, "category": "fat", "role": "fat" },
    { "name": t('styles.whole_egg_2'), "percentage": 10, "hydrationContent": 0.74, "category": "liquid", "role": "other" },
    { "name": t('styles.instant_yeast_2'), "percentage": 1.5, "role": "yeast" },
    { "name": t('styles.salt_4'), "percentage": 2, "role": "salt" },
    { "name": t('styles.filling_brown_sugar_2'), "percentage": 25, "role": "other" },
    { "name": t('styles.filling_cinnamon_2'), "percentage": 2.5, "role": "other" },
    { "name": t('styles.filling_butter_2'), "percentage": 10, "role": "other" },
    { "name": t('styles.frosting_cream_cheese_2'), "percentage": 20, "role": "other" },
    { "name": t('styles.frosting_powdered_sugar_2'), "percentage": 15, "role": "other" }
  ]
};
