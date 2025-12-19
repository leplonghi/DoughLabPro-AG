import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pao_sovado_brazil: StyleDefinition = {
  "id": "pao_sovado_brazil",
  "title": t('styles.pão_sovado'),
  "subtitle": t('styles.brazilian_professional_breads_5'),
  "category": t('styles.bread_21'),
  "family": t('styles.brazilian_professional_breads_6'),
  "variantName": t('styles.pão_sovado_2'),
  "origin": {
    "country": t('styles.brazil_3'),
    "region": t('styles.various_regions'),
    "period": t('styles.traditional_8')
  },
  "intro": t('styles.popular_in_bakeries_and_home_consumption_as_a_brea'),
  "history": "Pão Sovado is a classic of the Brazilian countryside and neighborhood bakeries. Its name comes from the verb 'sovar' (to knead/thump), referring to the intensive mechanical processing the dough undergoes. Traditionally, this was done by hand with great effort, but in modern pizzerias and bakeries, it is achieved using a 'cilindro' (heavy dough roller). This processing degasses the dough completely and creates an ultra-tight, silky crumb that is nearly void of visible air bubbles. It shares ancestry with the Portuguese 'pão de massa sovada' and emerged as a more durable, semi-enriched alternative to crusty breads.",
  "culturalContext": {
    "significance": [
      "Known as the 'Road Trip Bread' because its dense crumb remains fresh for days",
      "Symbolizes the 'hands-on' rustic heritage of Brazilian rural baking",
      "The 'Pão de Padilla' of the interior; a staple of the 'Interior Paulista' and 'Minas Gerais'",
      "Distinctive for its slash (corte) that typical reveals the ultra-white, dense interior",
      "Represents the transition between a savory bread and a slightly sweet snack"
    ],
    "consumptionContext": [
      "Traditionally sliced into thick wedges and spread with cold butter or lard",
      "A favorite for 'Café com Leite'—it absorbs liquid like a sponge without falling apart",
      "Commonly found in roadside 'Graal' stops and country markets across Brazil",
      "Used for making simple sandwiches with thick slices of 'Queijo Minas' or 'Goiabada'",
      "A popular choice for breakfast because it doesn't make crumbs (migalhas)"
    ],
    "evolution": [
      "1800s: Portuguese settlers bring 'Massa Sovada' techniques to Brazil",
      "1920s: The introduction of the first mechanical 'Cilindros' standardizes the style",
      "1960s: Becomes a staple of industrial bakeries due to its long shelf-life",
      "2010s: Gourmet versions adding potato flakes or specialized fats emerge",
      "Present: Return to high-quality butter and slow fermentation in artisan bakeries",
      "Future: Adaptation to sourdough (Levain) to reduce the commercial yeast profile"
    ],
    "rituals": [
      "The 'Cilindro' Pass: folding the dough through the metal rollers dozens of times until it 'pops'",
      "Checking the 'Window': looking for a dough so smooth it looks like silk or porcelain",
      "The Deep Center Slash: creating the iconic lengthwise cut that opens up during baking",
      "Post-Bake Steam: briefly covering the loaves to soften the crust even further",
      "The Squeeze: pressing the dense loaf to feel its unique firm-yet-soft resistance"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Clean, sweet wheat with mild lactic undertones",
      "Subtle butter or high-quality fat notes",
      "Dominant yeast aroma (classic bakery style)",
      "Hint of salt to balance the slight sugar enrichment",
      "Toasted grain notes on the thin crust"
    ],
    "aromaProfile": [
      "Warm, sweet fermented dough",
      "Aromatic wheat flour",
      "Creamy butter (if used)",
      "Mildly floral (from the sugar/yeast interaction)",
      "Subtle 'toasted' scent from the egg-wash finish"
    ],
    "textureNotes": [
      "Ultra-Dense Crumb: nearly zero visible alveoli; a solid, silky mass of dough",
      "Velvety Mouthfeel: feels smooth and substantial on the tongue",
      "Thin, Non-Hard Crust: a delicate skin that should have a slight sheen/tug",
      "Heavy lift: the bread feels heavier in the hand than it looks",
      "The 'Shred': despite its density, it should shred into fine, thin sheets when pulled"
    ],
    "pairingRecommendations": [
      "Cheese: Fresh 'Queijo Minas', 'Canastra', or a sharp Prato cheese",
      "Spread: Salted butter, Requeijão, or a thick layer of honey",
      "Sweet: Guava paste (Goiabada) for a classic 'Romeu e Julieta' pairing",
      "Beverage: Strong filtered coffee (Cafezinho) or a hot chocolate",
      "Savory: Sliced smoked sausage or 'Salame Tipo Italiano'"
    ],
    "flavorEvolution": [
      "Fresh (0-4 hours): Peak aroma and the softest velvety texture",
      "Day 2: Still excellent; the density prevents it from drying out",
      "Day 4: Best for toasting; the sugars caramelize beautifully on a flat-top",
      "Day 7: If stored well, still decent for dipping in warm coffee",
      "Stale: Makes the most substantial 'Rabanada' or savory bread pudding"
    ]
  },
  "technicalFoundations": [
    "Usually straight dough; some use sponge.",
    "Hydration: 60-68%"
  ],
  "doughImpact": [
    "Intensive mechanical degasification (Cilindro) creates the unique bubble-free structure",
    "Moderate enrichment (sugar and fat) provides the characteristic tenderness and shelf-life",
    "Low-to-moderate hydration (60-63%) is critical to allow the dough to pass through the rollers",
    "High protein flour is needed to withstand the 'punishment' of the rolling process",
    "A relatively short bulk fermentation prevents the build-up of large gas pockets"
  ],
  "bakingImpact": [
    "Baked at moderate temperatures (180-195°C) to ensure even heat penetration in a dense loaf",
    "Egg wash or a simple water spray is used for the signature dull-gloss finish",
    "Moderate steam at the start of the bake helps the deep slash to open neatly",
    "Avoid convection (fan) if possible to prevent the crust from becoming too hard/crispy",
    "Must be cooled completely before slicing; the dense crumb needs time to 'set'"
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
      3,
      8
    ],
    "sugarRange": [
      5,
      12
    ],
    "flourStrength": t('styles.brazilian_bread_flour'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–90 min after shaping",
      "coldRetard": t('styles.optional_to_improve_flavor_and_scheduling')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.often_glazed_for_a_slightly_glossy_crust')
    },
    "difficulty": t('styles.medium_10'),
    "recommendedUse": [
      t('common.breakfast_bread'),
      t('common.snacks'),
      t('common.sweet_or_savory_fillings')
    ]
  },
  "regionalVariants": [
    "Pão Sovado do Interior - The most rustic and dense version, often using lard",
    "Pão de Seda (Silk Bread) - A lighter, more enriched version with extra milk",
    "Pão Suíço (Brazilian version) - Often uses pão sovado dough in braided forms",
    "Pão Careca - Small round rolls made from the same intensive-knead dough",
    "Artisanal Sovado - Slow-fermented version using real butter and ancient grains"
  ],
  "climateScenarios": [
    "Tropical Heat: High risk of the fat 'bleeding' if the dough gets too warm during rolling; keep dough chilled",
    "High Humidity: The thin crust can lose its sheen; store in paper first, then plastic",
    "Arid Environment: The dough will crack if not kept perfectly covered during the rolling breaks",
    "High Altitude: The density of the bread is an advantage; it holds volume better than airy styles"
  ],
  "styleComparisons": [
    "vs. Brioche: Sovado is much denser and uses less egg/butter; focused on silkiness over air",
    "vs. Japanese Shokupan: Shokupan uses the 'Yudane' method for softness; Sovado uses mechanical rolling",
    "vs. Pão de Leite: Pão de leite is airy and fluffy; Sovado is dense and substantial",
    "vs. Sandwich Bread: Sovado has a much tighter crumb and a more complex, sweet-savory flavor"
  ],
  "parameterSensitivity": [
    "Critical: Number of 'Cilindro' passes - too few leaves bubbles; too many can tear the gluten",
    "Highly sensitive: Fat Type - Butter gives better flavor, but Lard provides the most traditional 'interior' texture",
    "Slash Depth: Must be exactly 1/3 into the loaf for the characteristic 'lips' to form",
    "Dough Temperature: Must stay below 24°C during rolling to prevent yeast from over-activating",
    "Sugar Percentage: Over 12% starts to slow down the structural development in the rollers"
  ],
  "risks": [
    "The 'Flying' Crust: Crust separating from the crumb due to improper rolling or under-proofing",
    "Internal Voids: Large bubbles left behind from insufficient passes through the rollers",
    "Toughness: Over-baking or using a flour with too much 'strength' without enough fat",
    "The 'Gummy' Line: Loaf was sliced while still warm, compressing the dense crumb",
    "Excessive Browning: Too much sugar or the oven was too hot for a dense loaf"
  ],
  "notes": [
    "If you don't have a 'cilindro', use a heavy rolling pin and fold the dough like a letter 20-30 times",
    "The dough post-rolling should feel like 'cold pizza dough'—extremely smooth and dense",
    "Use a very sharp blade for the slash to prevent dragging the delicate top skin",
    "Adding a small amount of liquid malt can enhance the 'bakery' aroma significantly",
    "For the best shine, brush with a mixture of egg yolk and coffee or milk"
  ],
  "tags": [
    t('common.breakfast_bread'),
    t('common.snacks'),
    t('common.sweet_or_savory_fillings'),
    t('common.bread'),
    t('common.brazil')
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
      "title": "Técnicas de Padaria: O Pão Sovado e o uso do Cilindro",
      "url": "https://www.sp.senai.br/",
      "author": "SENAI São Paulo",
      "year": 2021
    },
    {
      "title": "Pão Nosso: Receitas e Técnicas de Padaria Brasileira",
      "url": "https://www.amazon.com/Pao-Nosso-receitas-tecnicas-panificacao-caseira/dp/8565339233",
      "author": "Luiz Américo Camargo",
      "year": 2017
    },
    {
      "title": "Dona Benta: Comer Bem (Bread Section)",
      "url": "https://www.editorasaraiva.com.br/",
      "author": "Companhia Editora Nacional",
      "year": 2015
    },
    {
      "title": "A History of the Brazilian Bakery",
      "url": "https://www.abip.org.br/",
      "author": "ABIP Association",
      "year": 2019
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What does 'Sovado' mean?",
      "answer": "'Sovado' comes from 'sovar', which means to knead or thump vigorously. It refers to the intensive mechanical work the dough receives to expel all large air bubbles, resulting in a unique, velvet-like dense crumb."
    },
    {
      "question": "Can I make this at home without a professional roller (cilindro)?",
      "answer": "Yes! While it requires more effort, you can use a heavy rolling pin. Roll the dough flat, fold it over itself, and repeat this process 20 to 30 times. This mimics the mechanical 'cilindro' and will give you that characteristic tight, silky crumb."
    },
    {
      "question": "Why does Pão Sovado stay fresh for so long?",
      "answer": "The high density of the crumb and the enrichment of fat and sugar act as natural barriers to moisture loss. Because there are no large air pockets, the crumb is less exposed to the air that usually causes bread to go stale."
    },
    {
      "question": "What is the best way to slice it?",
      "answer": "Due to its density, use a sharp serrated bread knife and let the weight of the knife do the work. Never slice it while hot, as the crumb is still 'setting' and you will squash the silky layers into a gummy mass."
    },
    {
      "question": "Is it supposed to be sweet or savory?",
      "answer": "It's a semi-sweet bread (pão de semidocinho). It has enough sugar to be enjoyed with jam or coffee, but it is neutral enough to be delicious with ham, cheese, or savory spreads. This versatility is why it's a Brazilian breakfast staple."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
