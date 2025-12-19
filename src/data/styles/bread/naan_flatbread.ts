import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const naan_flatbread: StyleDefinition = {
  "id": "naan_flatbread",
  "title": "Naan (Yogurt-Enriched Flatbread)",
  "subtitle": t('styles.classic_flatbreads_7'),
  "category": t('styles.bread_14'),
  "family": t('styles.classic_flatbreads_8'),
  "variantName": "Naan (Yogurt-Enriched Flatbread)",
  "origin": {
    "country": "India / Central Asia",
    "region": t('styles.south_and_central_asia'),
    "period": t('styles.traditional_5')
  },
  "intro": t('styles.served_with_curries_and_grilled_dishes_in_indian_a'),
  "history": "Naan has roots in Central Asia, migrating to India with the Persian and Mughal influences. The first record of Naan in the Indian subcontinent dates back to the 13th century in the notes of Amir Khusrau. Historically a luxury item for royalty due to the use of white flour and enriching agents like yogurt and ghee, it was baked in a Tandoor (cylindrical clay oven) and remains the most iconic leavened flatbread of South Asian cuisine.",
  "culturalContext": {
    "significance": [
      "The gold standard for leavened flatbreads in South and Central Asia",
      "Symbolizes social gathering and shared meals (eating from a common platter)",
      "Traditionally baked by specialists (Nanbai) in dedicated community ovens",
      "One of the few globally recognized Indian breads that uses yeast (or a sourdough starter)",
      "Known for its distinct teardrop or oval shape, influenced by the way it hangs in the Tandoor"
    ],
    "consumptionContext": [
      "Served primarily as an accompaniment to gravies, dals, and grilled kebabs",
      "Torn by hand and used as a 'spoon' to scoop up curries",
      "Must be eaten immediately; it is at its best while still hot from the oven",
      "Commonly brushed with 'Ghee' (clarified butter) and topped with garlic or Kalonji seeds",
      "A staple of 'Dhaba' (roadside eatery) and fine-dining Indian restaurant culture"
    ],
    "evolution": [
      "1200s: Naan emerges as a royal court bread, often using a wild starter",
      "1500s: Traditional Tandoor oven technology spreads across the Mughal Empire",
      "1900s: Migration and the rise of Indian cuisine make Naan a global household name",
      "1980s: The 'Garlic Naan' becomes the most ordered variant in Western restaurants",
      "Present: High-heat home appliances and cast iron pans allow for authentic home replication",
      "Future: Integration of ancient grains and healthier flour blends into the enriched base"
    ],
    "rituals": [
      "Slapping the Wall: the rhythmic sound of dough balls being flattened and slapped against Tandoor walls",
      "The Hook Retrieval: pulling the blistered, charred bread out using specialized long metal hooks",
      "Hand-Tearing: the sensory experience of tearing the soft, layered crumb",
      "Ghee Basting: the final brush of molten butter that provides the signature gloss and aroma",
      "The 'Puff' Check: ensuring the bread has developed large, charred air bubbles (alveoli)"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Light lactic acidity and tang from the yogurt enrichment",
      "Sweet, nutty toasted wheat flavor",
      "Savory, smoky notes from high-heat charring",
      "Richness from Ghee (clarified butter) finish",
      "Pungent aromatics if topped with garlic or nigella (Kalonji) seeds"
    ],
    "aromaProfile": [
      "Distinctively smoky and charred (Tandoori aroma)",
      "Freshly baked white bread with a hint of yogurt-acid",
      "Intense garlic and warm butter (in Garlic Naan)",
      "Earthy wheat and cereal",
      "Nutty notes from toasted seeds"
    ],
    "textureNotes": [
      "Contrast: crispy, charred 'blisters' on the outside vs. soft, pillow-like interior",
      "The 'Pillow' Chew: a light, spongy resistance when bitten",
      "Layered structure: ideally, it should have a degree of internal lamination/layers",
      "Oily/Velvety: surface is rich with molten ghee or butter",
      "Springy: the dough should be extensible enough to stretch into a teardrop shape"
    ],
    "pairingRecommendations": [
      "Curry: Butter Chicken (Murgh Makhani), Paneer Tikka Masala, or Dal Makhani",
      "Grill: Seekh Kebabs, Tandoori Chicken, or Lamb Chops",
      "Condiment: Fresh Mint Chutney, Raita, or Mango Pickle",
      "Topping: Minced garlic, coriander (cilantro), or Kalonji (Nigella) seeds",
      "Beverage: Mango Lassi, salted Chaas, or a cold Indian lager"
    ],
    "flavorEvolution": [
      "Hot (0-5 mins): Peak perfection; maximum contrast between char and softness",
      "10-20 Mins: Becomes chewier; the 'pillowy' texture is still pleasant",
      "1 Hour+: Becomes firm; requires reheating to restore flexibility",
      "Next Day: Best reheated in a pan with a splash of water to 're-steam' the crumb",
      "Stale: Traditionally not used; Naan is almost always made to order and consumed fresh"
    ]
  },
  "technicalFoundations": [
    "Yeast-based; sometimes uses yogurt as mild acidity and enrichment.",
    "Hydration: 60-70%"
  ],
  "doughImpact": [
    "Yogurt inclusion provides lactic acid that tenderizes the gluten and adds a mild tang",
    "High enrichment (oil/milk/sugar) ensures the bread stays soft despite the ultra-high heat bake",
    "Moderate hydration (60-70%) allows the dough to be extensible enough for the teardrop stretch",
    "Natural yeasts or commercial yeast works with the yogurt for a complex fermentation profile",
    "Minimal handling after bulk preserves the internal gas bubbles needed for the surface char"
  ],
  "bakingImpact": [
    "Ultra-high heat (300-450°C) is mandatory to produce the signature 'char' bubbles quickly",
    "Baking against a clay wall (Tandoor) or scorching-hot cast iron pan creates bottom-up spring",
    "A extremely fast bake (60-90 seconds) prevents the thin dough from drying out and becoming brittle",
    "The lack of steam results in a dry, matte surface that is immediately softened by basting butter",
    "Direct contact with a hot surface (stone/iron) creates the characteristic dark spots (char)"
  ],
  "technicalProfile": {
    "hydrationRange": [
      60,
      70
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      5,
      15
    ],
    "sugarRange": [
      2,
      8
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour'),
    "fermentation": {
      "bulk": "1–2 h at warm room temperature",
      "proof": t('styles.short_rest_after_shaping'),
      "coldRetard": t('styles.optional_overnight_bulk_for_flavor')
    },
    "oven": {
      "type": "tandoor_or_hot_surface",
      "temperatureC": [
        300,
        450
      ],
      "notes": t('styles.home_versions_use_very_hot_cast_iron_pans_or_stone')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.accompaniment_to_curries'),
      t('common.flatbread_for_dipping')
    ]
  },
  "regionalVariants": [
    "Garlic Naan - The international favorite topped with garlic and coriander",
    "Peshawari Naan - Sweet variant filled with nuts, raisins, and coconut",
    "Keema Naan - Stuffed with savory minced meat (usually lamb)",
    "Kulcha - A leavened Punjabi flatbread, cousin to Naan but often using soda/baking powder",
    "Kandahari Naan - Extra large, long AFghan variant often topped with seeds"
  ],
  "climateScenarios": [
    "Standard Monsoonal Heat: Use chilled yogurt to prevent the dough from becoming too slack",
    "Winter in the Himalayas: Use warm milk/water and double the bulk rise time",
    "Dry Continental: Brush with water before placing in the oven to induce a better puff",
    "Coastal Humidity: Ensure the Naan is kept in a warm towel after baking to prevent sogginess"
  ],
  "styleComparisons": [
    "vs. Pita: Naan is enriched (yogurt/oil) and soft throughout; Pita is lean and has a central pocket",
    "vs. Roti/Chapati: Naan is leavened (yeast) and soft; Roti is unleavened and thinner/denser",
    "vs. Pizza: Naan is an enriched flatbread; Pizza is a lean dough focused on the crust 'edge'",
    "vs. Focaccia: Naan is high-heat 'slap' baked vs Focaccia's pan-oil-frying finish"
  ],
  "parameterSensitivity": [
    "Critical: Yogurt Freshness - old, sour yogurt can make the dough too acidic and weak",
    "Highly sensitive: Surface Temp - if the pan/oven isn't hot enough, you get white bread, not Naan",
    "Dough Stretch: Over-working individual dough balls leads to a 'tough' final flatbread",
    "Enrichment Ratio: Finding the balance between enough fat for softness and enough gluten for char",
    "Proof Timing: Under-proofing results in a flat, dense disc instead of a puffy flatbread"
  ],
  "risks": [
    "The 'Cardboard' Naan: Over-baking at too low a temperature, drying out the dough",
    "Falling off the Wall: Tandoor wall not hot enough or dough was too wet to stick",
    "Zero Char: Oven/Pan was cold, or dough surface was too floured",
    "Dense Interior: Too much flour added during shaping or insufficient fermentation",
    "Greasy mess: Brushing butter too early or using cold butter instead of molten Ghee"
  ],
  "notes": [
    "If you don't have a tandoor, use a pre-heated cast iron skillet for the best char",
    "Wet one side of the naan with water before putting it on the hot pan to help it 'stick' and puff",
    "Use full-fat Greek yogurt for the most authentic and rich flavor",
    "Don't skip the rest after shaping; it lets the gluten relax for the final teardrop stretch",
    "Serve immediately—Naan waits for no one"
  ],
  "tags": [
    t('common.accompaniment_to_curries'),
    t('common.flatbread_for_dipping'),
    t('common.bread'),
    "India / Central Asia"
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
      "title": "Historical Diet of the Mughal Emperors",
      "url": "https://www.jstor.org/stable/25188556",
      "author": "Journal of the Economic and Social History of the Orient",
      "year": 1995
    },
    {
      "title": t('styles.modernist_bread_13'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Dishoom: From Bombay with Love",
      "url": "https://www.amazon.com/Dishoom-From-Bombay-with-Love/dp/1408827441",
      "author": "Shamil Thakrar, Kavi Thakrar, Naved Nasir",
      "year": 2019
    },
    {
      "title": "The Art of Indian Baking",
      "url": "https://www.indianhealthyrecipes.com/naan/",
      "author": "Swasthi Shreekanth",
      "year": 2023
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What makes Naan different from a tortilla or pita bread?",
      "answer": "Naan is enriched with yogurt or milk, which makes it much softer and fluffier. Additionally, it is fermented with yeast, resulting in large, charred air bubbles, while pita focuses on creating a central pocket and tortillas are usually unleavened."
    },
    {
      "question": "How to make authentic Naan without a Tandoor oven?",
      "answer": "The best home substitute is a very hot cast iron skillet. Brush one side of the dough with water, 'stick' it to the skillet, and if you're feeling adventurous, flip the skillet upside down over the stove flame so the top bakes and chars slightly on the high points."
    },
    {
      "question": "Why is yogurt used in the Naan dough?",
      "answer": "Yogurt has two functions: its acidity helps tenderize the gluten network (making the bread softer to bite) and the natural sugars help achieve those delicious dark spots in the intense heat."
    },
    {
      "question": "What is the difference between Naan and Roti/Chapati?",
      "answer": "Naan is made with white flour (maida) and is leavened (contains yeast). Roti or Chapati is made with whole wheat flour and contains no yeast (unleavened bread), being denser and drier."
    },
    {
      "question": "What is the secret to preventing Naan from getting hard?",
      "answer": "The heat must be extremely high and the baking time very short (less than 2 minutes). If the oven is cool, the bread will take too long to bake and will dehydrate, turning into a hard biscuit. As soon as it's out, brush with melted butter and wrap in a cloth."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
