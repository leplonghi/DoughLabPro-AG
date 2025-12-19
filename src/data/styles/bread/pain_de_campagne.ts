import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pain_de_campagne: StyleDefinition = {
  "id": "pain_de_campagne",
  "title": "Pain de Campagne (Country French)",
  "subtitle": t('styles.french_lean_breads_3'),
  "category": t('styles.bread_15'),
  "family": t('styles.french_lean_breads_4'),
  "variantName": "Pain de Campagne (Country French)",
  "origin": {
    "country": t('styles.france_2'),
    "region": t('styles.rural_bakeries'),
    "period": t('styles.traditional_6')
  },
  "intro": "Served as a versatile table bread, used for slicing, toast and sandwiches with a robust flavor profile.",
  "history": "Pain de Campagne (Country Bread) is the soul of rural French baking. Historically, villagers would bring their dough to a communal oven (four banal) to be baked into large, sturdy loaves designed to last a week. Unlike the city's white baguette, the country loaf retained more of the grain's bran and used natural leavening (levain), which acted as a preservative and provided a deep, complex flavor that improved over several days.",
  "culturalContext": {
    "significance": [
      "The 'staff of life' for rural France for centuries",
      "Represents the transition from communal baking to artisan boulangerie",
      "Symbolizes a return to traditional values (le retour au pain naturel)",
      "Known for its 'Miche' shape—large, round, and deeply scored",
      "A culinary bridge between pure white bread and dense whole-grain loaves"
    ],
    "consumptionContext": [
      "A multi-day bread; the flavor matures and acidity develops over time",
      "Served in thick slices with rustic soups, stews, and pâtés",
      "The quintessential base for Tartines (French open-faced sandwiches)",
      "Often used to clean the plate of rich sauces in French dining",
      "Pairing with aged cheeses like Comté or Roquefort is a national ritual"
    ],
    "evolution": [
      "Pre-Industrial: Villagers use sourdough and mixed grains (wheat/rye) in large Miche loaves",
      "Late 1800s: The rise of white flour and yeast leads to the 'city bread' (baguette)",
      "1920s: Pain de Campagne starts to be redefined as a 'specialty' bread in Paris",
      "1970s: Lionel Poilâne revitalizes the style, making the large sourdough Miche world-famous",
      "2000s: The 'Artisan Bread' movement adopts it as the standard for naturally leavened loaves",
      "Present: A global benchmark for 'Country' sourdough in modern bakeries"
    ],
    "rituals": [
      "The Cross Score: traditionally marked with a cross or a grid (grignage) for even expansion",
      "The 'Tap' Test: tapping the bottom of the hot loaf to hear a hollow sound (sonner le pain)",
      "Aging: intentionally waiting 24 hours before cutting to allow the crumb to set and flavor to peak",
      "Sharing the Miche: cutting large wedges from a giant loaf centrally placed on the table",
      "Flour Dusting: the dusting of flour on the dark crust represents the rustic, farm-gate origin"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Complex lactic and acetic tang from natural levain",
      "Savory, earthy notes from the inclusion of whole wheat and rye",
      "Caramelized, almost bitter sweetness from the dark-baked crust",
      "Deep toasted grain and cereal profile",
      "Mildly nutty finish from the wheat germ"
    ],
    "aromaProfile": [
      "Deeply toasted, smoky notes from the thick crust",
      "Distinct sourdough tang with hints of green apple or yogurt",
      "Warm, wet earth and harvested grain",
      "Subtle spice notes if using a higher percentage of rye",
      "Clean, fermentative aromas"
    ],
    "textureNotes": [
      "The 'Sturdy' Crumble: denser than a baguette but with irregular, medium-sized holes",
      "Thick, crunchy, and dark-caramelized crust (La Croûte)",
      "Moist, almost 'chewy' interior that feels substantial in the mouth",
      "Substantial 'spring'—the crumb should bounce back when pressed",
      "The crust provides a significant structural contrast to the soft, tangy middle"
    ],
    "pairingRecommendations": [
      "Cheese: Strong blue cheeses, Camembert, or aged goat cheeses",
      "Meat: Pâté de campagne, terrines, or dry-cured saucisson",
      "Spreads: Salted butter (beurre demi-sel) or high-quality honey",
      "Meal: Beef Bourguignon, French Onion Soup, or Coq au Vin",
      "Beverage: Robust red wines (Bordeaux) or farmhouse ciders"
    ],
    "flavorEvolution": [
      "Fresh (4-8 hours): Crust is maximum crunch; internal moisture is at its highest",
      "24 Hours: The 'Sweet Spot'; acidity is balanced and the crumb has set perfectly",
      "Day 3: Acidity becomes more pronounced; ideal for charcuterie pairings",
      "Day 5: Perfect for toasting; the tang intensifies and the interior remains moist",
      "Stale: Used for 'Pain Perdu' (French Toast) or rustic garlic croutons"
    ]
  },
  "technicalFoundations": [
    "Levain or pâte fermentée, typically 20–40% of flour.",
    "Hydration: 68-75%"
  ],
  "doughImpact": [
    "Mixed flour profile (white + 10-20% whole grain/rye) provides the signature rustic color and flavor",
    "Medium-high hydration (68-75%) facilitates the open, moist crumb without being too difficult to shape",
    "Natural levain (sourdough) provides the enzymes needed for long fermentation and crust color",
    "Extended bulk fermentation (often with a cold retard) develops organic acids and technical strength",
    "Gentle shaping is required to maintain the irregular gas pockets created during floor time"
  ],
  "bakingImpact": [
    "High initial heat (230-250°C) is critical for 'shattering' the crust and inducing oven spring",
    "Ample steam during the first 10-15 minutes ensures the crust stays flexible for expansion",
    "Direct hearth or Dutch oven baking provides the thermal mass needed for a thick, dark base",
    "The 'Bold Bake': traditionally baked longer and darker than white breads to develop caramelized notes",
    "Venting the steam for the final 20% of the bake hardens the crust and sets the rustic texture"
  ],
  "technicalProfile": {
    "hydrationRange": [
      68,
      75
    ],
    "saltRange": [
      1.8,
      2.1
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      1
    ],
    "flourStrength": t('styles.blend_of_bread_flour_with_1030_wholegrain_or_rye'),
    "fermentation": {
      "bulk": "2–4 h at 23–25°C, sometimes followed by cold retard",
      "proof": "45–90 min at 23–25°C",
      "coldRetard": t('styles.common_816_h_at_48c')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.works_well_in_dutch_ovens_or_steaminjected_decks')
    },
    "difficulty": t('styles.hard_9'),
    "recommendedUse": [
      t('common.country_loaves'),
      t('common.rustic_sandwiches'),
      t('common.toast')
    ]
  },
  "regionalVariants": [
    "Miche Poilâne - The giant, round, 100% sourdough benchmark from Paris",
    "Pain au Seigle - Variation containing much higher percentages of rye flour",
    "Tourte de Meule - Traditional stone-ground flour loaf with a very 'grey' crumb",
    "Pain Paillasse - A long, twisted country loaf from Switzerland/Eastern France",
    "Pain de Gascogne - Southwestern variant often containing local corn or buckwheat"
  ],
  "climateScenarios": [
    "Humid Atlantic Coast: Extend the bake time by 5 minutes to prevent the thick crust from going soft",
    "Dry Continental Interior: Use a slightly higher hydration (+2%) to keep the large loaf moist long-term",
    "Hot Summer: Perform bulk fermentation entirely in the fridge to control the levain's acidity",
    "Winter Chill: Use warm water (30°C) and extend the final proof to ensure adequate volume"
  ],
  "styleComparisons": [
    "vs. Baguette: Campagne has more whole grain, uses levain vs yeast, and has a much thicker crust",
    "vs. Pain de Mie: Opposite ends of the spectrum; Campagne is lean/crusty while Mie is enriched/soft",
    "vs. San Francisco Sourdough: Campagne is traditionally less acidic and uses more mixed grains",
    "vs. Rye Bread: Campagne is wheat-dominant, providing more height and a lighter crumb"
  ],
  "parameterSensitivity": [
    "Critical: Flour Quality - needs stone-ground (T80 or T110) flours for the true authentic taste",
    "Highly sensitive: Levain Activity - an under-active starter will lead to a dense, 'brick-like' loaf",
    "Scoring Depth: If not scored deeply, the thick crust will burst irregularly in the oven",
    "Salt Balance: Needs enough salt (2%+) to stand up to the acidity and complex grain flavors",
    "Oven Temperature: Too low a temp will result in a thick, leathery crust without the 'shatter' crunch"
  ],
  "risks": [
    "The 'Flying Crust': Caused by under-proofing where the crust separates from the crumb",
    "Excessive Sourness: Leaving the levain to ripen too long or too hot before mixing",
    "Dense Bottom: Not using a pre-heated stone or baking sheet, leading to poor heat transfer",
    "Grey/Gummy Crumb: Using too much rye or whole wheat without adequate gluten development",
    "Pale Floury Look: Excessive dusting or not enough steam, missing the dark caramelization"
  ],
  "notes": [
    "If you don't have a Dutch oven, use a heavy pre-heated stone and a pan of boiling water below",
    "The goal is a 'bold bake'—don't be afraid if the crust looks nearly black in some spots",
    "Let the bread 'sing' (crackle) for at least an hour on a wire rack before cutting",
    "Mixing 5% rye flour is the 'secret' to achieving that traditional French country aroma",
    "Store in a linen bag or wrapped in a tea towel to preserve the crust's texture"
  ],
  "tags": [
    t('common.country_loaves'),
    t('common.rustic_sandwiches'),
    t('common.toast'),
    t('common.bread'),
    t('common.france')
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
      "title": t('styles.bread__jeffrey_hamelman_3'),
      "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
      "author": "Jeffrey Hamelman",
      "year": 2012
    },
    {
      "title": "The Poilâne Bakery: Success Through Tradition",
      "url": "https://www.poilane.com/pages/our-history",
      "author": "Apollonia Poilâne",
      "year": 2019
    },
    {
      "title": "Tartine Bread",
      "url": "https://www.amazon.com/Tartine-Bread-Chad-Robertson/dp/0811870413",
      "author": "Chad Robertson",
      "year": 2010
    },
    {
      "title": "Larousse du Pain",
      "url": "https://www.amazon.fr/Larousse-du-Pain-Eric-Kayser/dp/2035884457",
      "author": "Éric Kayser",
      "year": 2013
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Qual a diferença entre o Pain de Campagne e o pão branco comum?",
      "answer": "O Pain de Campagne (Pão de Campanha) leva uma mistura de farinhas (trigo branco, integral e às vezes centeio) e é tradicionalmente fermentado com levain (fermento natural), o que resulta em um pão com sabor mais profundo, casca mais grossa e maior durabilidade."
    },
    {
      "question": "Por que a casca do Pain de Campagne é tão escura?",
      "answer": "Esse estilo pede o que chamamos de 'bold bake' (assamento intenso). A temperatura alta e o tempo prolongado caramelizam os açúcares da farinha misturada, criando uma casca crocante, quase amarga, que protege o miolo úmido."
    },
    {
      "question": "É preciso usar centeio no Pain de Campagne?",
      "answer": "Não é obrigatório, mas é muito comum (cerca de 5 a 10%). O centeio ajuda na retenção de umidade e dá aquele toque 'terroso' e rústico que define o aroma das padarias do interior da França."
    },
    {
      "question": "Por que o pão de campanha dura mais que a baguete?",
      "answer": "Devido ao uso do fermento natural (levain), que aumenta a acidez da massa e retarda o envelhecimento, e à casca grossa que atua como uma barreira protetora contra a desidratação do miolo."
    },
    {
      "question": "Como saber se meu Pain de Campagne está bem assado?",
      "answer": "A cor deve ser um marrom profundo (cor de avelã torrada), e, ao bater no fundo do pão, ele deve emitir um som oco e claro. Além disso, as 'pestanas' (cortes) devem estar bem abertas e crocantes."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
