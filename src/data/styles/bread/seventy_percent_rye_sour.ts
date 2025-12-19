import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const seventy_percent_rye_sour: StyleDefinition = {
  "id": "seventy_percent_rye_sour",
  "title": "70% Rye Sour Bread",
  "subtitle": t('styles.wholegrain__rye'),
  "category": t('styles.bread_24'),
  "family": t('styles.wholegrain__rye_2'),
  "variantName": "70% Rye Sour Bread",
  "origin": {
    "country": t('styles.germany_2'),
    "region": t('styles.central_europe'),
    "period": t('styles.traditional_10')
  },
  "intro": t('styles.consumed_as_dense_flavorful_loaves_sliced_thin_oft'),
  "history": "The 70% Rye Sour is the classic 'Mischbrot' (Mixed Bread) of Central Europe, particularly Germany, Poland, and Austria. While 100% rye is often viewed as a specialty or 'health' bread, the 70/30 blend became the daily industrial and artisanal standard. This specific ratio provides the deep, satisfying earthiness of rye while the 30% wheat content offers just enough gluten to create a slightly lighter, more aerated crumb that can be baked as free-standing loaves ('freigeschoben') rather than always being confined to tins.",
  "culturalContext": {
    "significance": [
      "The 'Workhorse' of the German bakery, representing the most common daily loaf",
      "A bridge between the rustic past (pure rye) and the modern preference for softer breads",
      "Technically balanced: requires careful acidification but is more forgiving than 100% rye",
      "Central to the 'UNESCO Intangible Cultural Heritage' status of German Bread Culture",
      "Represents the preference for 'Sourdough-only' fermentation in traditional rye-belt countries"
    ],
    "consumptionContext": [
      "Commonly enjoyed with 'Leberwurst' (liver sausage), deli meats, and hard cheeses",
      "The mandatory base for a classic Reuben sandwich (though often marbled with lighter rye)",
      "Served at every 'Brotzeit' or 'Abendbrot' as the default savory bread",
      "Excellent when lightly toasted and topped with salted butter and sliced radishes",
      "Stays moist for 3-5 days, making it ideal for large family households"
    ],
    "evolution": [
      "1700s: Traditional village bakers blend excess rye with available wheat for 'Village Loaves'",
      "1800s: Urban bakeries standardize the 70/30 ratio to appeal to broader tastes",
      "1920s: Introduction of 'Detmolder' multi-stage sourdough builds to optimize the 70% rye mix",
      "2000s: Artisanal comeback: focus on stone-ground, long-fermented high-percentage rye",
      "Present: High focus on sourdough biodiversity and the health benefits of rye's high fiber"
    ],
    "rituals": [
      "The 'Sour' Refresh: the daily ritual of feeding the rye-specific sourdough starter",
      "Hand-Rounding: the technique of shaping the sticky, low-gluten dough with wet hands",
      "The Wood-Box Rest: proofing the loaves in flour-dusted wicker baskets (Brotformen)",
      "Steam Bursting: the initial burst of steam to allow the thick, heavy dough to expand",
      "The Thump Test: checking for a deep, hollow sound from the bottom of the baked loaf"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Earthy and malted with a robust, tangy acidity",
      "Toasted hazelnut and dark cereal sweetness",
      "Savory and spicy (natural caraway-like notes from rye)",
      "Mildly floral and fruity (lactic acid profile)",
      "Deeply caramelized crust flavor"
    ],
    "aromaProfile": [
      "Tangy and sour (acetic/lactic balance)",
      "Warm grain and fermented straw",
      "Freshly brewed coffee or dark chocolate (if baked dark)",
      "Nutty and savory",
      "Earthy yeast notes"
    ],
    "textureNotes": [
      "Dense and Hearty: a significant, satisfying chewiness",
      "Close Crumb: small, uniform holes with a moist, 'fudgy' mouthfeel",
      "Substantial Crust: thick, dark-brown, and protective",
      "Tender but Firm: can hold heavy fillings without sagging or tearing",
      "Moist Finish: the high water content (bound by pentosans) keeps the crumb cool"
    ],
    "pairingRecommendations": [
      "Cheese: Sharp Aged Swiss (Emmental), Smoked Provolone, or creamy Brie",
      "Meat: Corned beef, Salami, Black Forest Ham, or Liverwurst",
      "Fat: Salted cultured butter or lard with crispy onions (Schmalz)",
      "Vegetable: Pickled cucumbers (Gherkins), sauerkraut, or fresh radishes",
      "Beverage: Dark Lager (Dunkel), strong black tea, or a dry Riesling"
    ],
    "flavorEvolution": [
      "Fresh (0-4 hours): Too moist and gummy inside; flavor is 'sharp' and yeasty",
      "Day 1: The 'Golden Window'; acidity and grain sweetness are perfectly balanced",
      "Day 3: The flavor deepens; becomes more savory and the tang mellows",
      "Day 5: Still excellent for sandwiches; moisture is perfectly distributed",
      "Stale: Best used for traditional rye bread croutons or 'Kvass' (fermented beverage) base"
    ]
  },
  "technicalFoundations": [
    "Rye sour at 30–50% of total rye flour.",
    "Hydration: 80-90%"
  ],
  "doughImpact": [
    "Sourdough (Rye Sour) at 30-50% of the rye flour provides the mandatory acidity",
    "Wheat content (30%) provides a 'gluten backbone' allowing for more volume and free-standing shapes",
    "Hydration (80-90%) is high; rye 'pentosans' absorb and hold water differently than wheat starch",
    "Short mixing time: the dough should only be developed until uniform; over-mixing weakens the rye",
    "The dough will feel sticky and 'clay-like' compared to wheat bread dough"
  ],
  "bakingImpact": [
    "Requires a hot initial oven floor (220-230°C) to prevent the heavy loaf from spreading flat",
    "Moderate bake time (50-70 mins) is needed to cook through the dense, moist interior",
    "Steam is essential in the first 10 minutes to allow the low-elasticity crust to expand",
    "Baked to a 'bold' dark-brown color to develop the characteristic earthy flavors",
    "Cooling on a wire rack is mandatory to prevent the bottom from becoming soggy"
  ],
  "technicalProfile": {
    "hydrationRange": [
      80,
      90
    ],
    "saltRange": [
      1.8,
      2
    ],
    "oilRange": [
      0,
      3
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": "70% rye, 30% wheat or bread flour",
    "fermentation": {
      "bulk": t('styles.short_bulk_much_development_occurs_in_sour_build'),
      "proof": "50–90 min in pans or forms",
      "coldRetard": t('styles.occasional_short_retards_possible')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        200,
        220
      ],
      "notes": t('styles.longer_bake_to_set_crumb_often_rested_before_slici')
    },
    "difficulty": t('styles.expert_8'),
    "recommendedUse": [
      t('common.traditional_rye_loaves'),
      t('common.cold_cuts_and_cheese')
    ]
  },
  "regionalVariants": [
    "Berliner Landbrot - A classic 70% rye from northern Germany, usually oval and dark",
    "Polish Rye - Often containing caraway seeds and a slightly lighter sour profile",
    "Austrian Bauernbrot - Rustic village style, sometimes using a mix of wheat and rye meals",
    "Jewish Deli Rye - The US evolution, often 40-60% rye and heavily spiced with caraway",
    "Russian Borodinsky - Dark, spiced variant using malt and coriander (often higher rye %)"
  ],
  "climateScenarios": [
    "High Humidity: Crust can become leathery; bake 5 mins longer and leave in a cooling oven",
    "Arid/Dry: Crust sets too fast; use a Dutch Oven or intense steam for the first half of bake",
    "Cold/Winter: Dough is heavy and sluggish; proof in a warm spot (26-28°C) to ensure lift",
    "Coastal/Salt Air: Salt slows the already sensitive rye yeast; reduce salt by 0.2% if needed"
  ],
  "styleComparisons": [
    "vs. 100% Vollkornbrot: 70% Rye is lighter and can be baked without a tin (free-standing)",
    "vs. Sourdough (Wheat): 70% Rye is much denser, moister, and focus on 'starch' vs 'gluten'",
    "vs. 50/50 Mischbrot: 70% Rye is more acidic, earthy, and has a significantly tighter crumb",
    "vs. Pumpernickel: 70% Rye is a 'fast' hot bake (1h) vs Pumpernickel's 'slow' steam (16h)"
  ],
  "parameterSensitivity": [
    "Critical: Acidity (pH) - too low and the bread will be gummy (amylase attack)",
    "Highly sensitive: Proofing Timing - rye has a narrow window; catch it just as the surface cracks",
    "Water Quality: Rye loves mineral-rich water which helps the enzymatic activity",
    "Wheat Strength: Use high-protein bread flour for the 30% wheat to give maximum support",
    "Spicing: Even 0.5% Caraway or Anise completely transforms the flavor profile"
  ],
  "risks": [
    "The 'Flounder' (Flat Loaf): Oven was too cold or dough was over-proofed/too wet",
    "Gummy 'Wet' Streak: Under-baked in the center or not enough sourdough acidity",
    "Internal Voids (Cave): Dough was shaped too loosely or fermented too hot/fast",
    "Cracked 'Wild' Crust: Not enough steam or dough 'skinned over' before the bake",
    "Bitter/Sharp Soul: Starter was too old or fermented at too low a temperature"
  ],
  "notes": [
    "Use wet hands for all shaping—flour will just make the surface dry and mottled",
    "Wait at least 12 hours before slicing; the moisture needs time to stabilize",
    "If using seeds, always toast them first and soak them in part of the recipe water",
    "A bit of 'Backmalz' (diastatic malt) can help with browning and flavor development",
    "Dock the top with a fork or score deeply to prevent the heavy gas from blowing out the sides"
  ],
  "tags": [
    t('common.traditional_rye_loaves'),
    t('common.cold_cuts_and_cheese'),
    t('common.bread'),
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
      "title": "Bread: A Baker's Book of Techniques and Recipes",
      "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
      "author": "Jeffrey Hamelman",
      "year": 2012
    },
    {
      "title": t('styles.modernist_bread_12'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Traditional German Baking",
      "url": "https://www.amazon.com/Classic-German-Baking-Recipes-Christmas/dp/1607748258",
      "author": "Luisa Weiss",
      "year": 2016
    },
    {
      "title": "The Rye Baker: Classic Breads from Europe and America",
      "url": "https://www.ryebaker.com/",
      "author": "Stanley Ginsberg",
      "year": 2016
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why is 70% rye easier to bake than 100% rye?",
      "answer": "The 30% wheat flour provides a gluten network that acts like a 'cage', holding the gases produced by the yeast. This allows the bread to have more volume and to be shaped as free-standing loaves (boules or batards) instead of having to be baked in a tin."
    },
    {
      "question": "Can I make this without caraway seeds?",
      "answer": "Absolutely. While caraway is traditional in many regions (especially for 'Jewish Rye' or Polish varieties), many German 'Landbrot' styles are made with pure rye and wheat, focusing entirely on the flavor of the fermented grain."
    },
    {
      "question": "What is the best way to shape 70% rye dough?",
      "answer": "Rye dough is very sticky. Do not use excessive flour, which will make the crust dry and dusty. Instead, use wet hands to shape the dough into a smooth ball or oval. Work quickly—the more you handle rye, the stickier it becomes."
    },
    {
      "question": "Why did my rye bread burst at the bottom?",
      "answer": "This is usually a sign of under-proofing or lack of oven steam. If the top crust sets too quickly before the dough has finished expanding, the gas will take the path of least resistance and blow out through the bottom or sides."
    },
    {
      "question": "How long does 70% rye bread stay fresh?",
      "answer": "Due to the high percentage of rye and the sourdough acidity, it stays fresh and moist for 4-6 days. In fact, it often tastes better on the second or third day as the flavors 'mature' and the acidity mellows."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
