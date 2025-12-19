import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const neapolitan_home_oven_adapted: StyleDefinition = {
  "id": "neapolitan_home_oven_adapted",
  "title": t('styles.neapolitan_style__home_oven_adapted'),
  "subtitle": t('styles.neapolitan_pizza_5'),
  "category": t('styles.pizza_7'),
  "family": t('styles.neapolitan_pizza_6'),
  "variantName": t('styles.neapolitan_style__home_oven_adapted_2'),
  "origin": {
    "country": t('styles.global_5'),
    "region": t('styles.home_kitchens'),
    "period": "21st century"
  },
  "intro": "Fueled by internet communities (PizzaMaking.com, Reddit) and the pandemic baking boom. It bridges the gap between commercial quality and domestic equipment limits.",
  "history": "Born from the global obsession with authentic Neapolitan pizza and the frustration of home bakers with low-temperature domestic ovens. It bridges the gap between commercial quality and domestic equipment limits (typically 250–300°C vs 485°C). The style gained massive popularity through internet communities like PizzaMaking.com, Reddit, and the pandemic baking boom of 2020.",
  "culturalContext": {
    "significance": [
      "Represents the 'DIY' enthusiast culture and the democratization of artisan pizza",
      "Symbol of the 2020 pandemic baking boom and domestic self-sufficiency",
      "A cultural bridge between Italian tradition and global domestic technology",
      "Celebrates the 'Hacker Mentality' - modifying recipes to overcome hardware limitations",
      "A testament to the power of online communities in evolving culinary styles"
    ],
    "consumptionContext": [
      "Traditionally made in home kitchens for family and friends",
      "A popular weekend project requiring multi-day planning and preparation",
      "Eaten in a casual domestic setting, often right off the baking steel or stone",
      "Associated with a high level of baker pride and the 'show and tell' of crumb results",
      "Served as a centerpiece of home gatherings and intimate pizza parties"
    ],
    "evolution": [
      "2004: Jeff Varasano's 'Pizza Quest' goes viral, inspiring home bakers to hack their ovens",
      "2010: Introduction of the 'Baking Steel' changes the game for home crust crispness",
      "2014: Ken Forkish publishes 'The Elements of Pizza', standardizing home-adapted methods",
      "2018: Rise of specialized indoor electric ovens (Breville, Ooni) further refines the style",
      "2020: Pandemic lockdowns lead to millions of home experiments with high-hydration doughs",
      "Present: A mature, highly technical sub-category with its own dedicated specialist flours"
    ],
    "rituals": [
      "The Pre-Heat: ritualistic hour-long heating of the baking steel at max oven temperature",
      "The Broiler Trick: turning on the broiler just before लॉन्च to simulate wood-fire heat",
      "Crumb Shot: the mandatory cross-section photo to share with online communities",
      "Dough Ball Monitoring: checking for 'bubbling' and gluten strength throughout the cold ferment",
      "The 'Steel-to-Rack' Dance: moving the pizza between oven levels to balance top and bottom bake"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Rich malt and toasted wheat from the inclusion of sugar and oil",
      "Balanced yeasty/sourdough notes developed over a 48-72 hour cold retard",
      "Pronounced sweetness in the crust compared to traditional Neapolitan",
      "Savory, slightly fried texture on the bottom from the oil and steel contact",
      "Fresh tomato and dairy punch, typical of the Neapolitan flavor profile"
    ],
    "aromaProfile": [
      "Warm, honeyed bread aromas from the Maillard reaction at lower temperatures",
      "Subtle olive oil and toasted wheat",
      "Classic Neapolitan profile of cooked tomatoes and molten cheese",
      "Fresh herbaceous notes if using post-bake basil",
      "Intense toasted aroma from the longer bake time compared to professional ovens"
    ],
    "textureNotes": [
      "Crispier and more 'cracker-like' exterior than authentic Neapolitan",
      "Chewy, bread-like structure that has more 'heft' and resistance",
      "Uniform crumb with medium aeration, lacking the giant 'canotto' bubbles",
      "Sturdy enough to be picked up by hand without the 'Neapolitan fold' collapse",
      "Soft and tender interior due to high hydration and oil content"
    ],
    "pairingRecommendations": [
      "Classic: Margherita with low-moisture fior di latte for better home oven performance",
      "Toppings: Salami, olives, roasted peppers, and other 'dry' ingredients",
      "Beverage: Cold lager, domestic Pilsner, or a medium-bodied red wine",
      "Finishing: Grated Parmesan or Pecorino to add salt and depth post-bake",
      "Side: Simple arugula salad with a bright lemon vinaigrette"
    ],
    "flavorEvolution": [
      "Hot (0-5 mins): The crispiness is at its peak; flavors of the sugar are prominent",
      "Warm (10-20 mins): Becomes progressively chewier; dough flavors continue to develop",
      "Room Temp: Excellent durability compared to the 90-second professional version",
      "Next Day: Reheats spectacularly well in an oven or air fryer due to the higher fat content",
      "Cold: Maintains its bread-like integrity, making it a decent cold snack"
    ]
  },
  "technicalFoundations": [
    "Any (Poolish/Biga) works well to add flavor complexity.",
    "Hydration: 65-70%"
  ],
  "doughImpact": [
    "High hydration (65-70%) is used to prevent the dough from drying out during the longer home bake",
    "Oil (2-4%) provides tenderness and a softer 'mouthfeel' to compensate for lower temperatures",
    "Sugar or Malt (1-3%) is essential to promote browning (Maillard reaction) at 275°C",
    "Long cold fermentation (48-72h) breaks down complex starches into sugars for better flavor",
    "Strong bread flour provides the structural integrity to hold moisture over 6-8 minutes"
  ],
  "bakingImpact": [
    "Baked at domestic maximum (250-300°C) requiring a thermal mass (Stone/Steel) for bottom heat",
    "Longer bake time (5-8 mins) means the dough must have enough moisture and fat to stay tender",
    "Positioning near the top broiler helps simulate the top-down radiant heat of a dome oven",
    "The 'Steel' acts as a super-conductor, providing the oven-spring normally provided by 485°C brick",
    "Lower heat allows for more creative, moisture-heavy toppings that would burn in a wood-fire"
  ],
  "technicalProfile": {
    "hydrationRange": [
      65,
      70
    ],
    "saltRange": [
      2,
      2.5
    ],
    "oilRange": [
      2,
      4
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": "Strong Bread Flour or Malted 00 (W 280–320)",
    "fermentation": {
      "bulk": "Cold fermentation (24–72h) is preferred for flavor and convenience",
      "proof": "2–4h at room temp",
      "coldRetard": t('styles.essential_for_home_schedules')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        250,
        300
      ],
      "notes": "Crucial: Use Baking Steel or Stone. Add oil/sugar/malt to dough to assist Maillard reaction."
    },
    "difficulty": t('styles.hard_23'),
    "recommendedUse": [
      t('common.home_baking_without_pizza_oven'),
      t('common.crispier_crust_lovers')
    ]
  },
  "regionalVariants": [
    "Varasano Method - Famous for sourdough and high-heat oven modifications",
    "Forkish FWSY Style - Focus on 100% hydration levain and cast-iron skillet methods",
    "The Baking Steel Method - Uses ultra-conductive metal plates for maximum bottom crisp",
    "Skillet-Broiler Method - Start in a pan on the stove, finish under the oven broiler",
    "Modern Countertop Style - Optimized for indoor electric ovens like the Breville Pizzaiolo"
  ],
  "climateScenarios": [
    "Humid Summer: Reduce hydration by 2% to prevent the dough from becoming overly sticky",
    "Dry Winter: Increase hydration by 3% and keep the dough in a sealed container throughout",
    "High Altitude: Reduce yeast and sugar slightly to control the rapid rise and browning",
    "Tropical: Use ice-cold water (2°C) and keep all fermentation in the refrigerator"
  ],
  "styleComparisons": [
    "vs. Classic Neapolitan: Home-adapted is crispier, chewier, and contains oil/sugar to assist browning",
    "vs. NY Style: Similar in bake time, but home-adapted focuses on Neapolitan flour and aesthetics",
    "vs. California: Home-adapted is more focused on the dough technique than the toppings",
    "vs. Frozen Store-Bought: Unfair comparison; home-adapted is artisan-quality bread"
  ],
  "parameterSensitivity": [
    "Critical: Thermal Mass (Steel/Stone) - without it, the bottom with be pale and soggy",
    "Highly sensitive: Sugar content - too little and it won't brown; too much and it tastes like cake",
    "Bake positioning: 1 inch too high or low in the oven can result in burnt tops or raw bottoms",
    "Water Quality: Chlorinated water should be avoided for the long 72-hour ferments",
    "Dough Temperature: Must be room-temp (2h out of fridge) before stretching to avoid snap-back"
  ],
  "risks": [
    "Cracker-Dry Crust: Caused by a bake time exceeding 10 minutes at too low a temperature",
    "Raw Center: Using a cold stone or a stone that hasn't preheated for at least 45 minutes",
    "Excessive Snap-back: Attempting to stretch a cold dough ball directly from the fridge",
    "Burnt Cheese: Using delicate fresh mozzarella for an 8-minute bake; use low-moisture instead",
    "Bland Crust: From skipping the essential 48-hour cold fermentation"
  ],
  "notes": [
    "A Baking Steel is the single best investment for this style - it transfers heat faster than stone",
    "Preheat your oven for at least 60 minutes for the most consistent results",
    "Use the broiler trick: turn it on full blast 2-3 mins before the pizza goes in",
    "Diastatic malt powder is a 'cheat code' for getting a beautiful brown crust in home ovens",
    "Low-moisture mozzarella works much better than fresh buffalo for these longer bake times"
  ],
  "tags": [
    t('common.home_baking_without_pizza_oven'),
    t('common.crispier_crust_lovers'),
    t('common.pizza'),
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
      "title": "The Elements of Pizza",
      "url": "https://www.amazon.com/Elements-Pizza-Mastering-Secrets-Dough/dp/160774731X",
      "author": "Ken Forkish",
      "year": 2014
    },
    {
      "title": "Pizza Camp: Portraits from a Pizza Summer",
      "url": "https://www.amazon.com/Pizza-Camp-Portraits-Summer/dp/1419724097",
      "author": "Joe Beddia",
      "year": 2017
    },
    {
      "title": "PizzaMaking.com Community",
      "url": "https://www.pizzamaking.com/forum/",
      "author": "Community",
      "year": 2023
    },
    {
      "title": "Serious Eats: The Pizza Lab",
      "url": "https://www.seriouseats.com/the-pizza-lab",
      "author": "J. Kenji López-Alt",
      "year": 2021
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Como conseguir uma pizza napolitana no forno comum?",
      "answer": "O segredo é usar uma pedra ou aço (baking steel) para garantir calor na base e adaptar a massa com açúcar e óleo para que ela doure em temperaturas menores (250-275°C) sem ressecar durante o tempo maior de forno (6-8 min)."
    },
    {
      "question": "Por que devo usar açúcar e óleo no forno de casa?",
      "answer": "Em fornos profissionais de 450°C, a massa doura instantaneamente. Em casa (250°C), sem açúcar a massa demoraria demais para corar e ficaria dura como um biscoito. O óleo ajuda a manter o interior macio apesar do longo tempo de cozimento."
    },
    {
      "question": "Dá para usar farinha 00 em casa?",
      "answer": "Pode, mas as farinhas 00 italianas tradicionais são projetadas para 450°C e não têm malte. Em casa, uma farinha de pão forte ou farinha 00 'malted' (específica para fornos elétricos) costuma dar resultados melhores e mais corados."
    },
    {
      "question": "Qual a vantagem do Baking Steel sobre a Pedra?",
      "answer": "O aço conduz calor muito mais rápido que a pedra. Isso dá um 'pulo' (oven spring) muito maior na massa, simulando melhor o calor intenso dos fornos a lenha napolitanos em um ambiente doméstico."
    },
    {
      "question": "Quanto tempo de pré-aquecimento é necessário?",
      "answer": "Para resultados consistentes, a pedra ou o aço devem ser aquecidos na temperatura máxima do forno por pelo menos 45 a 60 minutos. O forno esquenta rápido, mas a pedra precisa de tempo para acumular massa térmica."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
