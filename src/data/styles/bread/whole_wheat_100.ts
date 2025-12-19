import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const whole_wheat_100: StyleDefinition = {
  "id": "whole_wheat_100",
  "title": "100% Whole Wheat Bread",
  "subtitle": t('styles.wholegrain__rye_5'),
  "category": t('styles.bread_28'),
  "family": t('styles.wholegrain__rye_6'),
  "variantName": "100% Whole Wheat Bread",
  "origin": {
    "country": t('styles.global_3'),
    "region": t('styles.healthfocused_baking'),
    "period": t('styles.modern_2')
  },
  "intro": "Used as everyday sandwich and toast bread by those seeking higher fiber and wholegrain diets.",
  "history": "Whole wheat bread has been the staple of humanity for millennia, but the '100% Whole Wheat' movement as a health-conscious specialty emerged in the mid-20th century. Pioneers like Sylvester Graham in the 19th century advocated for unsifted flour (Graham flour) to maintain the nutritional integrity of the grain. In the modern era, 100% Whole Wheat has evolved from a dense, heavy 'health brick' to a sophisticated artisan loaf through techniques like high hydration, long autolyse, and natural leavening.",
  "culturalContext": {
    "significance": [
      "The global benchmark for nutritional and high-fiber bread",
      "Represents the 'Back to Basics' and 'Slow Food' movements",
      "Historically the 'bread of the poor' that became the 'bread of the health-conscious'",
      "A symbol of sustainable agricultural practices and cereal biodiversity",
      "Technically challenging: it is the 'final exam' for many artisan bakers"
    ],
    "consumptionContext": [
      "Daily staple for high-fiber diets and health-focused households",
      "The foundation for the modern 'Avocado Toast' and artisanal sandwiches",
      "Often paired with spreads like nut butters, honey, or savory hummus",
      "Valued for its slower glycemic index and satiating properties",
      "Eaten toasted to enhance the nutty, earthy flavors of the bran"
    ],
    "evolution": [
      "Ancient Times: Most breads were 100% whole grain out of necessity",
      "Industrial Revolution: Steel roller mills allow for white flour; whole wheat becomes 'dated'",
      "1830s: Sylvester Graham popularizes 'Graham Bread' as a health food",
      "1970s: The whole-food movement in the West brings 100% whole wheat back to mainstream bakeries",
      "2010s: Bakers like Tartine and Chad Robertson revolutionize whole grain texture with high hydration",
      "Present: Focus on sprouted grains and ancient whole wheat varieties (Einkorn, Emmer)"
    ],
    "rituals": [
      "The Long Autolyse: the ritual of soaking the flour for hours to soften the sharp bran particles",
      "Checking the 'Windowpane': a difficult test for whole wheat as bran tends to tear the gluten",
      "The Cooling Wait: whole wheat needs hours to set its moist crumb properly after baking",
      "The Crumb Squeeze: testing the moistness and 'honeycomb' structure of high-hydration whole grains",
      "Grinding Fresh: many enthusiasts mill their own berries right before mixing for maximum aroma"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Intense nutty and earthy sweetness (malt-like)",
      "Deep cereal and bran profile with a hint of honey",
      "Mildly savory and mineral-rich",
      "Potential for slight bitterness if the bran is very fresh (tannins)",
      "Zero 'white bread' blandness; every bite is grain-forward"
    ],
    "aromaProfile": [
      "Toasted nuts and warm cereal",
      "Freshly harvested grain and hay",
      "Deep caramel and malty sweetness",
      "Earthiness and mild fruitiness (if naturally leavened)",
      "Robust, warm, and comforting grain scents"
    ],
    "textureNotes": [
      "Dense but soft crumb: more substantial than white bread but shouldn't be 'dry'",
      "Bran-enriched texture: slightly 'gritty' or textured feel on the tongue",
      "Moist and cool: high whole grain breads 'hold' water much longer than white ones",
      "Thin, chewy crust: usually less 'crackly' than white breads but very flavorful",
      "Uniform, small-to-medium alveoli: harder to get 'open' holes due to the weight of the bran"
    ],
    "pairingRecommendations": [
      "Spread: Salted butter, almond butter, or high-quality floral honey",
      "Vegetables: Ripe avocado, sliced radish, or fermented pickles",
      "Cheese: Sharp aged Cheddar, Gruyère, or fresh Goat cheese",
      "Soup: Hearty lentil stews or chunky tomato soup",
      "Beverage: Strong Earl Grey tea, dark roasted coffee, or stout beer"
    ],
    "flavorEvolution": [
      "Fresh (0-6 hours): Peak aroma; flavors are very sweet and nutty",
      "Day 2-3: The 'Peak'; the crumb moisture stabilizes and the grain flavor intensifies",
      "Day 4-5: Perfect for toasting; the heat revives the toasted nut aromas",
      "Next Day: Excellent for making 'Whole Wheat Panzanella' or croutons",
      "Stale: Grated for high-fiber breadcrumbs used in veggie burgers"
    ]
  },
  "technicalFoundations": [
    "Can use preferments or levain to improve flavor and structure.",
    "Hydration: 70-85%"
  ],
  "doughImpact": [
    "High hydration (75-85%+) is essential as bran acts like a sponge, absorbing much more water",
    "Bran particles act as 'mini razor blades' that cut the gluten; long autolyse is used to soften them",
    "High mineral content leads to faster fermentation; temperature control is more critical than in white dough",
    "Dough feels 'heavier' and less elastic; requires gentle handling during folding to preserve structure",
    "Weakening effect: 100% whole wheat has more protein than white flour, but less 'functional' gluten"
  ],
  "bakingImpact": [
    "Requires a longer bake at slightly lower temperatures to ensure the moist center is fully set",
    "Steam is critical at the start to allow the heavy dough to expand before the crust sets",
    "Rapid browning due to high sugar and mineral content in the whole grain (Millard reaction)",
    "Baking in a loaf pan is standard to provide vertical support to the heavy dough",
    "Internal temperature must reach 98-99°C to avoid a gummy, 'raw' feeling crumb"
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      85
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
      10
    ],
    "flourStrength": "100% whole wheat flour; quality and extraction vary",
    "fermentation": {
      "bulk": "2–4 h at 24–26°C",
      "proof": "45–90 min, often in pans",
      "coldRetard": t('styles.optional_812_h_to_improve_flavor')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        200,
        230
      ],
      "notes": t('styles.careful_baking_to_avoid_dry_crumb_pan_loaves_are_c')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.wholegrain_sandwich_bread'),
      t('common.toast')
    ]
  },
  "regionalVariants": [
    "Graham Bread - The 19th-century American health original (unsifted flour)",
    "German Vollkornbrot - Extremely dense, often uses rye and broken grains",
    "Whole Wheat Pullman - Enriched with milk/honey for a softer sandwich texture",
    "Sprouted Wheat Bread - Uses whole wheat that has been allowed to sprout for better digestion",
    "Artisan Whole Wheat Boule - High-hydration, naturally leavened, and hearth-baked"
  ],
  "climateScenarios": [
    "High Humidity: Whole wheat absorbs ambient moisture easily; bake for 5 mins longer for a drier crust",
    "Arid/Dry: Use the highest hydration (85%) to prevent the bread from turning into a 'brick'",
    "Summer Heat: Reduce fermentation time by 50% as the minerals in whole wheat act as a bio-booster for yeast",
    "Cold Winter: Use warm autolyse water (35°C) to kickstart the enzyme activity in the bran"
  ],
  "styleComparisons": [
    "vs. Whole Wheat Blend: 100% is significantly denser, darker, and more technically difficult",
    "vs. White Sourdough: 100% has much more mineral flavor and half the volume (oven spring)",
    "vs. Rye Bread: Wheat has more gluten/structure, while Rye relies on pentosans (starch)",
    "vs. Spelt: Whole wheat has stronger gluten but 'rougher' flavor compared to nutty, soft spelt"
  ],
  "parameterSensitivity": [
    "Critical: Autolyse Time - skipping 1-2 hours of soaking leads to a poor rise and gritty texture",
    "Highly sensitive: Hydration - even a 2% difference can change the dough from manageable to a 'soup'",
    "Fermentation Balance: Over-proofing whole wheat is very easy and leads to a collapsed, flat loaf",
    "Flour Freshness: Stone-ground flour goes rancid quickly; fresh flour is vital for good flavor",
    "Salt Level: 2% is necessary to balance the intense sweetness and earthiness of the grain"
  ],
  "risks": [
    "Gummy Center: Not baking long enough to 'cook' the high amount of water absorbed by the bran",
    "The 'Health Brick': Under-hydrating the bran, resulting in a dense, hard-to-swallow loaf",
    "Bitter Aftertaste: Using old, oxidized flour or over-fermenting the dough",
    "Collapse: Letting the dough proof too much; the heavy bran breaks the weak gluten walls",
    "Tough Crust: Low-temp baking that takes too long, effectively 'drying' the surface into leather"
  ],
  "notes": [
    "Always use a long autolyse (60-120 mins) for 100% whole wheat—it's the single best upgrade",
    "Try adding a small amount of honey or orange juice to neutralize potential bran bitterness",
    "Sift out the coarsest bran, soak it in boiling water, and add it back—this is called a 'Soaker'",
    "Don't expect white-bread volume; celebrate the dense, moist, and nutritious profile",
    "Internal temp of 98°C+ is mandatory for food safety and texture in whole grains"
  ],
  "tags": [
    t('common.wholegrain_sandwich_bread'),
    t('common.toast'),
    t('common.bread'),
    t('common.global')
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
      "title": t('styles.modernist_bread_21'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Whole Grain Breads: New Techniques, Extraordinary Flavor",
      "url": "https://www.amazon.com/Whole-Grain-Breads-Techniques-Extraordinary/dp/1580087590",
      "author": "Peter Reinhart",
      "year": 2007
    },
    {
      "title": "The Art of Whole Grain Bread Baking",
      "url": "https://www.breadtopia.com/",
      "author": "Eric Rusch",
      "year": 2022
    },
    {
      "title": "Sylvester Graham and the Whole Wheat Movement",
      "url": "https://www.history.com/news/sylvester-graham-whole-wheat-health-crusade",
      "author": "History.com Editors",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why is 100% whole wheat bread usually so dense?",
      "answer": "Bran and germ act like tiny razor blades that physically cut the gluten strands during mixing and rising. Additionally, whole wheat flour is heavier than white flour. To fix this, you need high hydration, long autolyse (soaking), and gentle handling."
    },
    {
      "question": "What is the secret to a soft whole wheat loaf?",
      "answer": "Higher hydration! Bran absorbs significantly more water than the endosperm. If you use white bread water ratios, the bran will steal the water from the gluten, leaving it brittle. Aim for 75-85% hydration for softness."
    },
    {
      "question": "Does whole wheat ferment faster than white flour?",
      "answer": "Yes. Whole wheat contains more minerals and natural enzymes that act as a 'turbo-charger' for yeast. You must monitor the dough closely as it will reach peak proof much faster than a white loaf."
    },
    {
      "question": "Should I use autolyse for 100% whole wheat?",
      "answer": "Absolutely. It is the single most important technique. Soaking the flour and water for 1-2 hours before adding salt and yeast allows the bran to fully hydrate and soften, which prevents it from cutting the gluten strands as much."
    },
    {
      "question": "What internal temperature should whole wheat reach?",
      "answer": "Because of the high hydration and density, whole wheat needs to reach a slightly higher internal temperature of 98-99°C (208-210°F) to ensure the crumb is fully set and not gummy."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
