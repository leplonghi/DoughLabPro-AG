import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const colomba_pasquale: StyleDefinition = {
  "id": "colomba_pasquale",
  "title": t('styles.colomba_pasquale'),
  "subtitle": t('styles.festive_breads'),
  "category": t('styles.pastry_4'),
  "family": t('styles.festive_breads_2'),
  "variantName": t('styles.colomba_pasquale_2'),
  "origin": {
    "country": t('styles.italy_7'),
    "region": t('styles.northern_italy_2'),
    "period": "20th century"
  },
  "intro": t('styles.consumed_mainly_at_easter_in_italy_and_in_italian_'),
  "history": "Colomba Pasquale (Easter Dove) is the spring counterpart to Panettone. While traditional Easter cakes existed for centuries, the modern Colomba was industrialized in the 1930s by the Milanese company Motta. Seeking a way to use the same machinery and specialized Lievito Madre (natural yeast) during the spring months, advertising executive Dino Villani created the dove-shaped bread. Legend, however, dates it much earlier to the 6th-century siege of Pavia, where King Alboin was purportedly offered a dove-shaped bread as a peace offering. It has since become the mandatory dessert for Easter Sunday across all of Italy.",
  "culturalContext": {
    "significance": [
      "The symbol of peace and resurrection in Italian Easter traditions",
      "Technically as demanding as Panettone, using the 'Lievito Madre' method",
      "Known for its distinct dove-shaped mold (forma a colomba)",
      "Represents the awakening of spring with its focus on bright citrus and almond notes",
      "A protected Italian product (D.M. 22/07/05) with strict ingredient standards"
    ],
    "consumptionContext": [
      "Served at the end of the traditional Italian Easter Sunday lunch",
      "Often used in the 'Pasquetta' (Easter Monday) picnics as a portable sweet",
      "Accompanied by sweet sparkling wines such as Asti Spumante or Brachetto d'Acqui",
      "Sometimes served with a side of dark chocolate to contrast the orange peel",
      "A popular gift exchanged between families during the Holy Week"
    ],
    "evolution": [
      "500s: Legendary origins in the Lombardy region (Siege of Pavia)",
      "1176: Legend of the Battle of Legnano where three doves landed on the Lombard standard",
      "1930s: Motta markets the industrial 'modern' Colomba globally",
      "1950s: Introduction of the rich amaretto (almond/sugar) glaze with whole almonds",
      "2005: Italy establishes the legal definition for the 'Colomba di Pasqua'",
      "Present: Focus on ultra-high hydration and 'gourmet' artisanal small-batch production"
    ],
    "rituals": [
      "The 'Glassatura': applying the almond and egg-white paste just before the oven",
      "The Pearl Sugar Shower: generously topping the glaze with large sugar crystals (granella)",
      "Upside-Down Cooling: just like Panettone, Colomba must be hung to prevent collapse",
      "The Dove Break: traditionally, the 'wings' are broken off and eaten first",
      "Blessing of the Food: in many regions, the Colomba is brought to church on Holy Saturday"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Bright candied orange peel (the star fruit of Colomba)",
      "Toasted almonds and amaretto sweetness in the glaze",
      "Deep buttery richness with clean lactic tang",
      "Roasted vanilla and honey aromatics",
      "Sweet, crunchy pearl sugar finish"
    ],
    "aromaProfile": [
      "Floral citrus (orange blossom and peel)",
      "Intense toasted almond and marzipan",
      "Freshly baked fermented sourdough",
      "Warm butter and vanilla",
      "Hazelnut and cocoa undertones (depending on the glaze recipe)"
    ],
    "textureNotes": [
      "The 'Silky' Pull: the crumb should shred into long, airy fibers",
      "Glaze Contrast: a hard, crackly almond shell against the pillow-soft interior",
      "Moist and Airy Alveolatura: large, vertically-stretched air pockets",
      "Soft Orange Pockets: tender bursts of essential-oil-rich fruit",
      "Overall lightness: should feel less dense than a standard brioche despite the fat"
    ],
    "pairingRecommendations": [
      "Wine: Moscato d'Asti, Passito di Pantelleria, or a dry Prosecco",
      "Spread: Mascarpone cream or a high-quality dark chocolate spread",
      "Fruit: Fresh apricots or a peach compote",
      "Hot Drink: A late-afternoon espresso or a light floral tea",
      "Chocolate: Pieces of high-quality dark Easter egg chocolate"
    ],
    "flavorEvolution": [
      "Fresh (0-3 days): Maximum glaze crunch and peak orange aroma",
      "Week 1: The sourdough complexity develops; the crumb becomes even more tender",
      "Week 2: Best for savoring the 'ripened' flavor of the butter and fruit Oils",
      "Week 3+: Artisanal versions last well due to the starter's acidity",
      "Stale: Makes incredible 'Colomba Bread Pudding' or French Toast"
    ]
  },
  "technicalFoundations": [
    "Similar multi-stage sourdough or hybrid method as panettone.",
    "Hydration: 65-75%"
  ],
  "doughImpact": [
    "Requires a perfectly balanced stiff Lievito Madre (stiff starter) to provide lift and shelf-life",
    "Two-Stage Dough (Biga and Impasto): the first dough must reach triple volume (12h) before enrichment",
    "High Fat/Yolk content (20%+) requires careful emulsification to avoid a greasy crumb",
    "Orange zest and candied orange are the only traditional fruits used, unlike Panettone's raisins",
    "Flour must be extremely strong (W380+) to survive the 36-48 hour fermentation process"
  ],
  "bakingImpact": [
    "Baked in dove-shaped paper molds that guide the distinctive rise of the 'wings' and 'tail'",
    "The almond glaze creates a moisture-trap, helping the interior stay soft while baking",
    "Hanging upside down immediately after baking for 8-12 hours is MANDATORY to prevent collapse",
    "Baking temperature (170-190°C) must be moderate to bake the dense center without burning the glaze",
    "Internal temperature of 92-94°C is the specific target for food safety and structural set"
  ],
  "technicalProfile": {
    "hydrationRange": [
      65,
      75
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      20,
      30
    ],
    "sugarRange": [
      20,
      30
    ],
    "flourStrength": t('styles.very_strong_flour_suitable_for_rich_doughs'),
    "fermentation": {
      "bulk": t('styles.long_multistage_builds_and_first_dough_rise'),
      "proof": "4–8 h at warm temperature in dove-shaped molds",
      "coldRetard": t('styles.handled_similarly_to_panettone_with_careful_temper')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        170,
        190
      ],
      "notes": t('styles.topped_with_almond_glaze_and_sugar_before_baking')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.festive_sweet_bread_for_easter')
    ]
  },
  "regionalVariants": [
    "Colomba di Milano - The classic version with candied orange and almond glaze",
    "Colomba Siciliana - Often enriched with local pistachios or Modica chocolate",
    "Piedmontese Style - Features a heavy hazelnut-based icing (glassa alle nocciole)",
    "Modern Artisan Colomba - Emerging versions with wild berries, limoncello, or salted caramel",
    "Brazilian Colomba - Known as 'Colomba Pascal', often features chocolate chips (Chococatone style)"
  ],
  "climateScenarios": [
    "Humid Spring: The glaze can become sticky; store in a dry spot or a plastic bag only after fully cooled",
    "Dry/Cold: The dough will proof very slowly; use a constant 28°C proofing environment",
    "Variable Easter Weather: Extreme pressure changes can affect the massive rise in the paper mold",
    "High Altitude: Reduce the Lievito Madre activity slightly to prevent 'mushrooming' over the mold"
  ],
  "styleComparisons": [
    "vs. Panettone: Colomba has orange but no raisins, is dove-shaped, and ALWAYS has an almond glaze",
    "vs. Pandoro: Colomba is airy and filled with fruit/toppings vs Pandoro's plain buttery sponge",
    "vs. Brioche: Colomba is 10x more technically complex and uses sourdough vs yeast",
    "vs. Hot Cross Buns: Colomba is a large-format sourdough masterpiece vs the small yeasted bun"
  ],
  "parameterSensitivity": [
    "Critical: Lievito Madre pH - must be 3.9-4.1 for the perfect balance of strength and sweetness",
    "Highly sensitive: Glaze Viscosity - too thin runs off the mold; too thick prevents the Oven spring",
    "Mixing Temp: Must stay below 26°C to prevent the butter from breaking the gluten network",
    "Orange Quality: Must use high-pulp candied orange; dry bits will ruin the textural experience",
    "Cooling Timing: If you don't hang it within 60 seconds of the oven, it may sink permanently"
  ],
  "risks": [
    "The Sink: The center of the 'dove' collapses (starters too weak or under-baked)",
    "Burnt Glaze: The sugar-heavy top browns too fast; needs foil protection 15 mins before end",
    "Gum Line: Wet layer at the bottom from using cold ingredients or improper mixing",
    "Acidic Bite: Sourdough was too old or too cold during the builds",
    "Disconnected Glaze: Top shell separates from the bread due to over-proofing"
  ],
  "notes": [
    "The secret to a great Colomba is the triple build of the starter before the first dough",
    "Wash your orange peel in warm water to release the oils into the dough more effectively",
    "The almond glaze is best made with a mix of sweet and bitter almonds (or apricot kernels)",
    "Pierce the mold with skewers BEFORE putting it in the oven for easier hanging later",
    "Patience is key: a true Colomba takes 3 full days from starter build to final cooling"
  ],
  "tags": [
    t('common.festive_sweet_bread_for_easter'),
    t('common.pastry'),
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
      "title": "Colomba di Pasqua: history and origins of the dove-shaped cake",
      "url": "https://www.lacucinaitaliana.com/italian-food/italian-dishes/colomba-pasqua-history-origins",
      "author": "La Cucina Italiana",
      "year": 2022
    },
    {
      "title": t('styles.modernist_bread_25'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Cresci: The Art of Leavened Dough",
      "url": "https://www.amazon.com/Cresci-Art-Leavened-Dough-Iginio/dp/8886561135",
      "author": "Iginio Massari",
      "year": 1999
    },
    {
      "title": "Italian Festive Breads: Technical Deep Dive",
      "url": "https://www.pasticceriaitaliana.it/",
      "author": "Accademia Maestri del Lievito Madre",
      "year": 2023
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is the main difference between Colomba and Panettone?",
      "answer": "Technically, the doughs are very similar, using the same stiff sourdough starter (Lievito Madre). However, Colomba contains only candied orange peel (no raisins), has a distinctive dove shape, and is always topped with a crunchy almond and pearl sugar glaze before baking, which Panettone (traditionally) is not."
    },
    {
      "question": "Why is it shaped like a dove?",
      "answer": "The shape represents the Dove of Peace, a powerful Christian symbol of the Holy Spirit and the end of the Flood. It was chosen to market the bread as a specifically Easter-themed product in the early 20th century, though legendary origins link it to ancient peace offerings."
    },
    {
      "question": "Is the almond glaze mandatory?",
      "answer": "Yes, for the authentic Italian 'Colomba di Pasqua'. The glaze, made from egg whites, sugar, and ground almonds (and often cornstarch), provides the signature crackly texture and helps steam the interior dough during baking, keeping it extra moist."
    },
    {
      "question": "How long does an artisanal Colomba stay fresh?",
      "answer": "Due to the natural acidity of the Lievito Madre and the high fat/sugar content, a well-made Colomba can stay fresh for up to 30-45 days if kept in its original bag. We recommend warming a slice slightly if eating it more than 10 days after baking."
    },
    {
      "question": "Why do I have to hang it upside down?",
      "answer": "The structure is so delicate and airy (like a cloud) that while it is hot, the weight of the orange peel and the high fat content would cause it to collapse into a dense mass. Hanging it allows gravity to stretch the gluten network as it sets, preserving the honeycomb internal structure."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
