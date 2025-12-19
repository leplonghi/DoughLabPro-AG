import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const new_york_artisan_cold_ferment: StyleDefinition = {
  "id": "new_york_artisan_cold_ferment",
  "title": "New York Artisan (Modern)",
  "subtitle": t('styles.new_york_style_pizza'),
  "category": t('styles.pizza_9'),
  "family": t('styles.new_york_style_pizza_2'),
  "variantName": "New York Artisan (Modern)",
  "origin": {
    "country": t('styles.united_states_9'),
    "region": "Brooklyn / Manhattan",
    "period": "2000s–Present"
  },
  "intro": "Blurs the line between a slice shop and a sit-down restaurant. The crust is often darker (charred), lighter on the stomach, and has a more complex wheat flavor.",
  "history": "A renaissance of the NY style led by pizzerias like Lucali, Scarr's, and Best Pizza. They rejected industrial ingredients (bromated flour, cheap cheese) in favor of stone-milled local flours, natural leavening (sourdough hybrids), and longer, more complex fermentations. It represents the maturation of the American pizza scene, treating the 'slice' with the same respect as a Michelin-starred meal.",
  "culturalContext": {
    "significance": [
      "Represents the 'Second Wave' of American pizza craftsmanship",
      "Celebrates New York's identity while rejecting mass production industrialization",
      "Values local heritage: use of stone-milled grains and house-made mozzarella",
      "Cultural impact: redefined the 'New York Slice' from cheap fuel to a culinary destination",
      "Associated with the 'Brooklyn Aesthetic' - rustic, honest, and high-quality"
    ],
    "consumptionContext": [
      "Often served as whole pies in candles-lit, 'no-frills' but high-end environments",
      "Pizzerias often have limited production - when they run out of dough, they close",
      "Customers value the 'terroir' of the flour and the specific age of the sourdough",
      "Eaten in vibrant neighborhoods (Brooklyn, Lower East Side) where food is a central identity",
      "Traditionally paired with high-quality natural wines or local craft beers"
    ],
    "evolution": [
      "2006: Mark Iacono opens Lucali, emphasizing a hand-rolled, ultra-thin artisan NY crust",
      "2010: Frank Pinello opens Best Pizza, bringing wood-fire techniques to the NY slice shop",
      "2016: Scarr Pimentel opens Scarr's Pizza, milling his own flour in the shop - a game changer",
      "2018-2020: The 'Artisan Slice' becomes a global trend, inspiring shops in London and Tokyo",
      "2022: Hybrid sourdough ferments (poolish + levain) become the standard for top-tier shops",
      "Present: NY Artisan is recognized as the standard for 'Modern American' pizza"
    ],
    "rituals": [
      "The Dough Ball Observation: admiring the massive fermentation bubbles in the proofing box",
      "BYOB Tradition: many top artisan NY shops have a tradition of 'Bring Your Own Beverage'",
      "Watching the Mill: (at places like Scarr's) the sound and smell of wheat being ground",
      "The 'Thin-ness' Test: holding a slice up to the light to see its translucency (Lucali style)",
      "Finishing in the Window: the baker carefully adding fresh basil and hand-grated pecorino"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Deeply nutty and whole-grain notes from stone-milled flour",
      "Complex fruity acidity from sourdough levain and 72-96h maturation",
      "Pronounced toasted wheat and 'well done' bread char",
      "Clean, vibrant tomato sweetness (often uncooked San Marzano or premium domestic)",
      "Richness from aged mozzarella and pecorino romano finishes"
    ],
    "aromaProfile": [
      "Dominant sourdough/yogurt lactic notes",
      "Freshly ground wheat and toasted malt",
      "Aromas of high-quality extra virgin olive oil and fresh garlic",
      "Sharp, nutty pecorino and sweet basil",
      "A hint of pleasant smoke if baked in wood-fired or coal-hybrid ovens"
    ],
    "textureNotes": [
      "The 'Artisan Snap': a brittle, glassy bottom that transitions into a soft, elastic crumb",
      "Impossibly thin center (sometimes called 'windowpane' thin)",
      "Cornicione is lighter and airier than a standard slice shop, but still firmly structured",
      "A subtle 'toothsome' quality from the stone-milled bran particles",
      "Sturdy enough to 'fold' but with a much lighter, less greasy mouthfeel"
    ],
    "pairingRecommendations": [
      "Classic: Plain Pie with house-made mozzarella and hand-milled tomato sauce",
      "Artisan: Pepperoni with hot honey and a dusting of aged Parmigiano Reggiano",
      "Beverage: Natural red wine (Gamay or Frappato) or a crisp Italian Lager",
      "Side: Local farm salads with heirloom tomatoes and heavy balsamic",
      "Finishing: Shaved garlic, Sicilian oregano, and chili flakes"
    ],
    "flavorEvolution": [
      "Fresh (0-5 mins): Maximum snap and sourdough aroma vibrancy",
      "Warm (10-20 mins): Flavors meld; the crust remains remarkably crisp due to lower oil content",
      "Room Temp: Excellent for artisan slices; the complexity of the wheat is most noticeable",
      "Next Day: Reheats incredibly well in a 400°F oven; the sourdough flavor intensifies",
      "Structural Integrity: Does not become 'floppy' or 'rubbery' like industrial versions"
    ]
  },
  "technicalFoundations": [
    "Sourdough starter (Levain) often mixed with small amount of commercial yeast.",
    "Hydration: 63-68%"
  ],
  "doughImpact": [
    "High hydration (63-68%) allows for a lighter crumb and supports the stone-milled flour absorption",
    "House-milled or stone-milled flour provides superior nutrients and flavor depth",
    "Sourdough levain (mixed with yeast) provides the characteristic 'artisan' tang and digestibility",
    "Extreme cold retard (48-96h) ensures complete enzymatic breakdown of complex starches",
    "Reduced oil (1-2%) compared to industrial NY style keeps the crust from being 'greasy-soft'"
  ],
  "bakingImpact": [
    "Higher bake temps (290-330°C) than commercial shops provide a more aggressive 'oven-spring'",
    "The use of sourdough allows the crust to color deeply (maillard) without high sugar levels",
    "Longer pre-heating of deck ovens (2-3 hours) is critical for heat saturation",
    "Baking 'well-done' is the default - artisans embrace dark, charred spots as flavor",
    "The lower oil content means the bake must be faster to avoid drying out the thin crust"
  ],
  "technicalProfile": {
    "hydrationRange": [
      63,
      68
    ],
    "saltRange": [
      2.2,
      2.6
    ],
    "oilRange": [
      1,
      3
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": "Unbleached Bread Flour + Whole Wheat percentage (W 300+)",
    "fermentation": {
      "bulk": "48–96h Cold Fermentation. Extreme maturation breaks down gluten for tenderness.",
      "proof": "3–4h at room temp",
      "coldRetard": "The secret to the 'Artisan' flavor profile"
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        290,
        330
      ],
      "notes": t('styles.often_baked_slightly_hotter_and_darker_than_classi')
    },
    "difficulty": t('styles.medium_37'),
    "recommendedUse": [
      t('common.premium_slice_shops'),
      t('common.whole_pie_artisan_pizzerias')
    ]
  },
  "regionalVariants": [
    "The Brooklyn Hearth Style (Lucali/Best Pizza) - Wood/Gas hybrid focus",
    "Stone-Milled Manhattan (Scarr's) - Focus on in-house milling and heritage grains",
    "Jersey Artisan (Razza) - Obsessive focus on local ingredients and sourdough science",
    "Modern Long Island - Large, thin, with 'sauce-heavy' traditional artisan toppings",
    "Global Artisan NY - High-end copies found in places like Crisp W6 (London)"
  ],
  "climateScenarios": [
    "NYC Winter (Dry/Cold): Increase hydration by 3% to combat flour dryness; use 24h room temp poolish",
    "NYC Summer (Humid): Use ice-cold water; decrease hydration by 2% to maintain dough strength",
    "Coastal (High Salt Air): Tightly seal dough boxes to prevent skin formation on the high-quality dough",
    "Variable Humidity: Use 'Touch' method to adjust final water - the stone-milled flour absorbs differently daily"
  ],
  "styleComparisons": [
    "vs. Commercial NY: Artisan has 5x the flavor, 1/2 the oil, and uses premium stone-milled flours",
    "vs. Neapolitan: Artisan is larger (18-20 inch), crunchier, and baked for 6-8 minutes vs 90 seconds",
    "vs. New Haven: Artisan is more regular in shape and uses sourdough tang vs pure coal smoke",
    "vs. California: Artisan is focused on the bread itself, whereas California focuses on exotic toppings"
  ],
  "parameterSensitivity": [
    "Critical: Flour Freshness - the oils in stone-milled flour oxidize quickly; use fresh",
    "Highly sensitive: Starter Acidity - if the levain is too acetic, the dough will tear during stretching",
    "Water pH: Sourdough/Levain is sensitive to high alkalinity; use filtered water",
    "Oven Heat Balance: Needs intense top heat to char the bubbles before the bottom gets too hard",
    "Hand-Resting: High hydration artisan doughs need careful multi-stage resting after balling"
  ],
  "risks": [
    "Tearing during stretching: Common with high-hydration sourdough doughs if gluten is over-fermented",
    "Acidic Overload: If the cold retard exceeds 96 hours, the 'tang' can become distractingly sour",
    "Tough Base: Over-handling the dough during the final stretch before launching",
    "Burnt Flour: High-quality flour left on the bottom of the pie becomes bitter in 300°C+ ovens",
    "Gummy Center: If the tomato sauce is too watery for the high-hydration dough base"
  ],
  "notes": [
    "Stone-milled flour is the key; look for flours from mills like Hayden Flour Mills or Central Milling",
    "A 72-hour cold ferment is the 'sweet spot' for flavor vs. performance for this style",
    "Don't use a rolling pin - you'll destroy the 'artisan' crumb you worked so hard to ferment",
    "Finish with high-quality aged Pecorino Romano for that specific NYC flavor punch",
    "Less is more with cheese - quality over quantity to show off the crust"
  ],
  "tags": [
    t('common.premium_slice_shops'),
    t('common.whole_pie_artisan_pizzerias'),
    t('common.pizza'),
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
      "title": t('styles.modernist_pizza_7'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": "Mastering Pizza",
      "url": "https://www.amazon.com/Mastering-Pizza-Practice-Neapolitan-Artisanal/dp/0399579226",
      "author": "Marc Vetri",
      "year": 2018
    },
    {
      "title": "The Pizza Show (Munchies)",
      "url": "https://www.youtube.com/playlist?list=PLnPDn1Lb79IEnH6-G_8pX977Uis-m3R-I",
      "author": "Frank Pinello",
      "year": 2016
    },
    {
      "title": "Pizza Camp",
      "url": "https://www.amazon.com/Pizza-Camp-Portraits-Summer/dp/1419724097",
      "author": "Joe Beddia",
      "year": 2017
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "O que diferencia a pizza NY Artisan da tradicional?",
      "answer": "A principal diferença está nos ingredientes e no tempo: usa-se farinhas moídas em moinho de pedra (Stone-milled), muitas vezes um híbrido de fermento natural (levain) com biológico, e maturações a frio extremamente longas (48-96h). O resultado é uma massa muito mais leve, aromática e com 'char' (queimadinho) proposital."
    },
    {
      "question": "É preciso ter moinho próprio para fazer este estilo?",
      "answer": "Não, mas é fundamental usar farinhas de alta qualidade, não branqueadas e preferencialmente artesanais. O uso de uma pequena porcentagem (5-10%) de farinha integral moída em pedra ajuda muito a replicar o sabor das pizzarias de elite do Brooklyn."
    },
    {
      "question": "Por que se usa fermento natural (sourdough) neste estilo?",
      "answer": "O sourdough não é usado aqui para fazer uma pizza 'ácida', mas sim para melhorar a textura, a digestibilidade e criar uma complexidade de sabor que o fermento biológico industrial sozinho não consegue entregar, especialmente em maturações longas."
    },
    {
      "question": "Qual a temperatura ideal de forno?",
      "answer": "Este estilo brilha entre 290°C e 330°C. Mais quente que uma pizzaria comum de NY, mas mais frio que uma napolitana. Esse 'meio termo' permite que a massa asse por 6-8 minutos, ficando bem crocante sem ressecar o interior."
    },
    {
      "question": "Como evitar que a massa rasgue na abertura?",
      "answer": "Devido à alta hidratação e ao fermento natural, a rede de glúten pode ficar mais frágil após 3 dias. A dica é manipular a massa com muita delicadeza, garantir que ela esteja em temperatura ambiente (2h fora da geladeira) e usar movimentos suaves do centro para fora."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
