import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pao_de_leite_brazil: StyleDefinition = {
  "id": "pao_de_leite_brazil",
  "title": "Pão de Leite / Pão Doce Brasileiro",
  "subtitle": t('styles.brazilian_professional_breads'),
  "category": t('styles.bread_19'),
  "family": t('styles.brazilian_professional_breads_2'),
  "variantName": "Pão de Leite / Pão Doce Brasileiro",
  "origin": {
    "country": t('styles.brazil'),
    "region": t('styles.nationwide_3'),
    "period": "20th century"
  },
  "intro": "Common in bakeries as rolls and loaves for breakfast, snacks and simple sandwiches.",
  "history": "Pão de Leite (Milk Bread) and its sweeter variant, Pão Doce, are pillars of the 'Padaria Brasileira' (Brazilian Bakery) culture. These styles evolved from European enriched bread traditions (like brioche and Portuguese sweet breads) adapted to local tropical ingredients and industrial bakery practices in the mid-20th century. In Brazil, the 'padaria' is more than a store; it is a community hub, and the smell of fresh Pão de Leite at 4:30 PM is a national ritual. While Pão de Leite is neutral/savory, Pão Doce often features a signature coconut or vanilla cream topping (creme de confeiteiro) that differentiates it.",
  "culturalContext": {
    "significance": [
      "The quintessential childhood snack bread (merenda) for generations of Brazilians",
      "Central to the 'Café da Tarde' (afternoon coffee) ritual",
      "Represents the softer, sweeter side of Brazilian professional baking vs. the crusty Pão Francês",
      "Symbol of the neighborhood 'Padaria' and its role as a daily meeting point",
      "Often used as the base for 'Pão de Cachorro-Quente' (hot dog buns) and 'Pão de Hambúrguer' in Brazil"
    ],
    "consumptionContext": [
      "Commonly eaten for breakfast with butter and 'Requeijão' (Brazilian cream cheese)",
      "A staple of 'lanches' (snacks), often filled with ham and cheese (misto-quente soft)",
      "Traditional at children's birthday parties in the form of 'bisnaguinhas'",
      "Served warm with 'Café com Leite' (coffee with milk) or 'Pingado'",
      "Used for 'Rabanada' (Brazilian French Toast) during the Christmas season"
    ],
    "evolution": [
      "1900s: European immigrants bring soft, enriched dough recipes to Brazilian urban centers",
      "1950s: Modern bakery associations standardize the 'Pão Doce' with coconut topping",
      "1970s: The 'Bisnaguinha' becomes a national industrial success as a packaged pão de leite",
      "2000s: Rise of 'Pão de Leite Ninho' (using powdered milk) as a premium gourmet variant",
      "Present: Artisanal bakeries returning to slow fermentation and real butter for these styles",
      "Future: Clean-label versions reducing high sugar and artificial softeners"
    ],
    "rituals": [
      "The 'Puxa': checking the elasticity of the crumb by pulling the rolls apart",
      "The Egg Wash: the satisfying shine of the golden-brown crust",
      "The 'Bisnaguinha' squeeze: the childhood habit of squishing the soft rolls",
      "Dipping in Requeijão: using the soft roll as a scoop for Brazilian processed cheese",
      "The 5 PM Fresh Batch: waiting for the specific time the padaria brings out the hot rolls"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Mildly sweet, lactic, and milky wheat base",
      "Rich butter or high-quality margarine notes",
      "Subtle yeast and vanilla (in sweeter versions)",
      "Toasted coconut or vanilla cream (for Pão Doce variants)",
      "Clean, non-acidic finish"
    ],
    "aromaProfile": [
      "Fresh warm milk and sweet fermented dough",
      "Caramelized sugar and egg wash",
      "Vanilla and coconut (specifically for Brazilian sweet buns)",
      "Subtle toasted wheat",
      "Butter and lard (traditional to some older recipes)"
    ],
    "textureNotes": [
      "The 'Cotton' Crumb: ultra-soft, fine-pored, and extremely tender",
      "Delicate Crust: almost paper-thin and never crunchy; should be soft to the bite",
      "Resilient Stretch: when pulled, the dough should stretch into feathery layers before breaking",
      "Moist mouthfeel: should not feel dry or crumbly",
      "Uniform Alveolatura: very small, even bubbles throughout the interior"
    ],
    "pairingRecommendations": [
      "Spread: Requeijão Cremoso (mandatory!), salted butter, or Dulce de Leche",
      "Beverage: Café com Leite, hot chocolate, or a fresh fruit juice",
      "Savory side: Sliced Mortadella or 'Queijo Minas'",
      "Fruit: Fresh papaya or mango for breakfast",
      "Contemporary: A splash of honey or Guava paste (Goiabada)"
    ],
    "flavorEvolution": [
      "Hot (0-1 hour): Peak 'melt-in-mouth' softness; best with melting butter",
      "6-12 Hours: Flavors settle; best for sandwiches",
      "Day 2: Still soft; the traditional 'bisnaguinha' experience",
      "Day 3+: Excellent for toasting with lots of butter (Pão na Chapa)",
      "Stale: Best transformed into 'Pudim de Pão' (Bread Pudding) or Rabanada"
    ]
  },
  "technicalFoundations": [
    "Most often straight dough; sponge methods possible.",
    "Hydration: 60-70%"
  ],
  "doughImpact": [
    "High enrichment (milk, sugar, and fat) creates the signature tender, non-chewy bite",
    "Moderate hydration (60-65%) ensures the dough can be shaped into tight rolls or braids",
    "Intense mechanical mixing (often using a 'Cilindro' in Brazil) is needed for the ultra-fine crumb",
    "Lower salt levels (around 1.5%) allow the sweetness and lactic flavors to dominate",
    "Addition of milk powder (optional) can further soften the crumb and enhance the aroma"
  ],
  "bakingImpact": [
    "Lower oven temperatures (170-185°C) ensure the bread cooks through without burning the sugars",
    "Heavy egg wash creates the iconic deep-mahogany, high-gloss finish",
    "Steam is rarely used; the focus is on a soft skin rather than a hard crust",
    "Baking in close proximity in the pan ('pull-apart') keeps the sides soft and pale",
    "Quick cooling on a covered rack prevents the thin crust from drying out and becoming tough"
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
      8,
      20
    ],
    "flourStrength": t('styles.brazilian_bread_flour_or_strong_allpurpose'),
    "fermentation": {
      "bulk": "1–2 h at 24–26°C",
      "proof": "45–90 min after shaping",
      "coldRetard": t('styles.optional_bulk_or_shaped_retard')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        175,
        195
      ],
      "notes": t('styles.often_finished_with_egg_wash_or_sugar_toppings')
    },
    "difficulty": t('styles.difficulty_hard'),
    "recommendedUse": [
      t('common.sweet_rolls'),
      t('common.milk_bread_loaves'),
      t('common.snack_sandwiches')
    ]
  },
  "regionalVariants": [
    "Pão Doce Tradicional - Filled with vanilla custard (creme) and topped with coconut",
    "Bisnaguinha - Small, pillow-shaped industrial rolls popular for kids' lunchboxes",
    "Pão de Leite de Ninho - Gourmet version using the famous Brazilian powdered milk",
    "Pão de Cachorro-Quente - Elongated version optimized for hot dogs",
    "Pão Coroa - A festive crown-shaped braid of sweet dough"
  ],
  "climateScenarios": [
    "Tropical Summer: The high sugar content can lead to runaway fermentation; use cold milk (4°C)",
    "High Humidity: The roll surface can become sticky after cooling; store in a dry, ventilated box",
    "Arid Environment: The dough skins very fast; keep covered at all times during proofing",
    "High Altitude: Reduce sugar by 10% to prevent the structure from weakening during the rise"
  ],
  "styleComparisons": [
    "vs. Japanese Shokupan: Shokupan is less sweet and focuses on vertical height (Pullman)",
    "vs. Brioche: Pão de Leite uses less butter and often uses milk instead of mostly eggs",
    "vs. Hawaiian Rolls: Very similar, but Pão de Leite lacks the pineapple-juice acidity",
    "vs. Pão Francês: Opposite ends; Pão de Leite is soft/sweet/fine vs crusty/salty/airy"
  ],
  "parameterSensitivity": [
    "Critical: Mixing Time - under-developed dough will be crumbly rather than feathery",
    "Highly sensitive: Proofing - over-proofing leads to a 'yeasty' taste and collapsed surface",
    "Sugar Ratio: Over 15% sugar starts to significantly inhibit yeast; requires 'osmotoerant' yeast",
    "Milk Quality: Whole milk provides the essential fats for the 'milky' aroma",
    "Oven Heat: Too high will blacken the sugar/egg wash before the center is baked"
  ],
  "risks": [
    "The 'Crumbly' Bite: Insufficient gluten development or not enough fat",
    "Pale Crust: Skipping the egg wash or oven temperature too low",
    "Mushrooming: Rolls were proofed too close together or for too long",
    "Soggy Center: Dough was too hydrated or not baked for long enough at low heat",
    "Sour Aroma: Uncontrolled fermentation in tropical heat"
  ],
  "notes": [
    "For the classic 'Padaria' smell, add a drop of vanilla extract and citrus zest to the dough",
    "The use of a food processor or a high-speed mixer is best for achieving the 'cotton' crumb",
    "Always apply the egg wash twice: once before proofing and once just before the oven",
    "If making Pão Doce, apply the custard filling only after the rolls are 80% proofed",
    "To store, place in a plastic bag as soon as they reach room temperature to trap moisture"
  ],
  "tags": [
    t('common.sweet_rolls'),
    t('common.milk_bread_loaves'),
    t('common.snack_sandwiches'),
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
      "title": "Apostila de Panificação: Pães Doces e de Leite",
      "url": "https://www.sp.senai.br/",
      "author": "SENAI São Paulo",
      "year": 2021
    },
    {
      "title": "Padaria Brasileira: A History of the Neighborhood Bakery",
      "url": "https://www.abip.org.br/",
      "author": "ABIP (Associação Brasileira da Indústria de Panificação)",
      "year": 2022
    },
    {
      "title": "The Bread Bible: Brazilian Artisan Traditions",
      "url": "https://www.amazon.com/Pao-Nosso-receitas-tecnicas-panificacao-caseira/dp/8565339233",
      "author": "Luiz Américo Camargo",
      "year": 2017
    },
    {
      "title": "Technologia da Panificação",
      "url": "https://www.casadopadeiro.com.br/",
      "author": "Alispec Technical Team",
      "year": 2020
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What is the difference between Pão de Leite and Pão Doce?",
      "answer": "Pão de Leite is a soft, enriched roll with a neutral to slightly sweet flavor, often used for sandwiches. Pão Doce (Sweet Bread) uses the same base dough but has a higher sugar content and usually features sweet toppings like coconut, vanilla cream, or sugar glazes."
    },
    {
      "question": "How do I get that ultra-shiny, golden crust typical of Brazilian bakeries?",
      "answer": "The secret is the 'Double Egg Wash'. Mix an egg yolk with a teaspoon of milk and brush the rolls once before they start proofing. Then, right before putting them in the oven, brush them again gently. This builds a deep, glossy lacquer that is iconic to the style."
    },
    {
      "question": "Why is my crumb crumbly like cake rather than feathery like bread?",
      "answer": "This usually means the gluten wasn't developed enough during mixing. Pão de Leite needs intensive mixing to create the fine, elastic network that pulls into 'feathers'. If mixing by hand, you must use the 'slap and fold' technique for a long time until the dough is smooth and silky."
    },
    {
      "question": "Can I replace the milk with water?",
      "answer": "You can, but it won't be 'Pão de Leite'. The milk provides the proteins, fats, and lactose (milk sugar) that give this bread its unique aroma, soft crumb, and tender crust. If you must use a substitute, use a high-fat plant milk like soy or oat."
    },
    {
      "question": "What is 'Pão na Chapa'?",
      "answer": "It is the favorite breakfast of São Paulo. A Pão de Leite (or more commonly Pão Francês) is sliced, spread generously with butter, and pressed onto a hot flat-top grill until the crumb is golden, crispy, and the butter is caramelized. It's often served with a 'Pingado' (coffee with a splash of milk)."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
