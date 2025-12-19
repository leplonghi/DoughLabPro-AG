import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const brazilian_pizzeria_gas_deck: StyleDefinition = {
  "id": "brazilian_pizzeria_gas_deck",
  "title": t('styles.brazilian_pizzeria_title'),
  "subtitle": t('styles.brazilian_pizzeria'),
  "category": t('styles.pizza'),
  "family": t('styles.brazilian_pizzeria_2'),
  "variantName": t('styles.brazilian_pizzeria_title'),
  "origin": {
    "country": t('styles.brazil_4'),
    "region": t('styles.urban_pizzerias'),
    "period": t('styles.late_20th_century_2')
  },
  "intro": t('styles.brazilian_pizzeria_intro'),
  "history": "Developed in the bustling urban centers of Brazil, notably São Paulo, this style adapted Italian traditions to massive delivery and commercial demands. Using gas-powered deck ovens instead of wood, and emphasizing a slightly sweeter, oil-enriched dough that can carry immense amounts of diverse toppings, it has become one of the most unique and varied pizza cultures in the world.",
  "culturalContext": {
    "significance": [
      "São Paulo is arguably the pizza capital of the world by sheer volume and variety",
      "Represents the 'melting pot' of Brazilian culture - immigrant roots meeting local ingredients",
      "Pizza is a massive Sunday family ritual in Brazil, often ordered for delivery",
      "Known for its extreme topping creativity - nothing is 'forbidden' on a Brazilian pizza",
      "The 'bordas recheadas' (stuffed crusts) are a distinct and beloved cultural hallmark"
    ],
    "consumptionContext": [
      "Traditionally consumed for dinner, rarely as a lunch item",
      "The 'Pizzaria Rodízio' (all-you-can-eat) is a unique Brazilian dining phenomenon",
      "Eaten almost exclusively with a knife and fork in sit-down pizzerias",
      "Condiment culture is huge: ketchup and mayonnaise are common (though controversial in SP)",
      "Olive oil is always present on the table to be drizzled liberally over the slice"
    ],
    "evolution": [
      "Early 1900s: Italian immigrants in Brás (SP) start selling flatbreads and simple pizzas",
      "1950s-70s: Pizzerias multiply; the 'Portuguesa' and 'Calabresa' flavors become staples",
      "1980s: Gas deck ovens become the standard for neighborhood pizzerias due to efficiency",
      "1990s: Invention of the stuffed crust (bordas recheadas) by local pizzaiolos",
      "2000s: Professionalization of the sector with high-quality national flours and cheeses",
      "Present: A massive export of the Brazilian style to other countries, including the US"
    ],
    "rituals": [
      "The Sunday Night Delivery: the busiest time for pizzerias across the entire country",
      "Borda Recheada: choosing between Catupiry, Cheddar, or Chocolate for the stuffed crust",
      "Sweet Pizza: ordering a smaller 'dessert pizza' (Romeo & Juliet or Brigadeiro) to finish the meal",
      "The 'Ketchup Debate': a playful rivalry between Paulistanos (anti) and Cariocas (pro)",
      "Olive Oil Drizzle: a ritualistic finishing of every slice before the first forkful"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Rich and salty from heavy use of 'Queijo Mussarela' and 'Catupiry'",
      "Savory and slightly smoky from 'Calabresa' or 'Lombo' meats",
      "Slightly sweet dough with a clean, toasted wheat finish",
      "Heavy presence of dried oregano - the 'signature' smell of Brazilian pizza",
      "Vibrant vegetable notes from onions, tomatoes, and hearts of palm (Palmito)"
    ],
    "aromaProfile": [
      "Dominant dried oregano and warm olive oil",
      "Roasted onions and salty ham/sausage",
      "Molten creamy cheese with a hint of cultured dairy fermentation",
      "Toasted bread with a slight sweetness from the sugar in the dough",
      "Distinctive 'deck oven' baked aroma - clean and consistent"
    ],
    "textureNotes": [
      "Sturdy but tender bottom with a uniform golden bake",
      "Soft and pillowy cornicione, often containing a creamy stuffed center",
      "Significant 'heft' - the slices are heavy due to the density of toppings",
      "Uniform, tight interior crumb with small aeration",
      "Contrasting textures: crunchy onions, creamy cheese, and firm meats"
    ],
    "pairingRecommendations": [
      "Classic Toppings: Portuguesa (ham, eggs, onions, peas), Calabresa, Frango com Catupiry",
      "Cheeses: Brazilian Mussarela, Catupiry (original), Provolone, Gorgonzola",
      "Beverage: Ice-cold Brazilian Pilsner, Guaraná soda, or a glass of red table wine",
      "Condiments: Extra-virgin olive oil, dried oregano, and optionally, chili oil",
      "Sweet: Romeo & Juliet (Guava paste and cheese) for dessert"
    ],
    "flavorEvolution": [
      "Fresh (0-10 mins): Best for cheese-heavy pizzas to enjoy the 'stretch' and creaminess",
      "Warm (15-30 mins): Excellent delivery quality; the dough structure is designed to hold heat and moisture",
      "Room Temp: Slices like Calabresa remain flavorful and savory even after cooling",
      "Next Day: The 'breakfast slice' is a national tradition; heats up well in a pan or microwave",
      "Reheated: Gas deck style is very resilient to reheating, maintaining its soft/firm balance"
    ]
  },
  "technicalFoundations": [
    t('styles.brazilian_pizzeria_tech_1'),
    t('styles.brazilian_pizzeria_tech_2')
  ],
  "doughImpact": [
    "Lower hydration (55-62%) creates a strong, manageable dough that handles heavy loads",
    "Addition of oil (2-4%) provides a tender bite and prevents the dough from drying in gas ovens",
    "Sugar (1-3%) assists with rapid browning and fermentation in high-volume settings",
    "Short to medium fermentation (8-24h) yields a clean, predictable wheat flavor",
    "The dense dough structure provides a sturdy base that doesn't sag under Brazilian 'rodízio' weight"
  ],
  "bakingImpact": [
    "Gas deck ovens (280-320°C) provide consistent, even heat for large-scale production",
    "Longer bake times (6-9 mins) ensure that massive amounts of cold toppings are fully heated",
    "Baking on a screen (often used in Brazil) helps circulate air for a more even bottom bake",
    "The lower temperature compared to wood avoid burning the cheese before the dough is done",
    "Trapped humidity in the gas oven keeps the crust soft and pillowy rather than cracker-crisp"
  ],
  "technicalProfile": {
    "hydrationRange": [
      55,
      62
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      2,
      4
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": t('styles.brazilian_pizzeria_flour'),
    "fermentation": {
      "bulk": t('styles.brazilian_pizzeria_ferm_bulk'),
      "proof": t('styles.brazilian_pizzeria_ferm_proof'),
      "coldRetard": t('styles.optional_up_to_24_h_for_flavor')
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        280,
        320
      ],
      "notes": t('styles.designed_for_repeated_baking_cycles_in_commercial_')
    },
    "difficulty": t('styles.medium_32'),
    "recommendedUse": [
      t('styles.brazilian_pizzeria_use_1'),
      t('styles.brazilian_pizzeria_use_2')
    ]
  },
  "regionalVariants": [
    "Paulistana - The gold standard; focus on high-quality ingredients and anti-ketchup tradition",
    "Carioca - More focused on diverse cheese blends and the common use of condiments",
    "Sulista (South) - Often features heavier meat toppings and artisanal local cheeses",
    "Pizzaria de Bairro - The neighborhood 'take-out' style, optimized for delivery and speed",
    "Gourmet/Artesanal - Modern movement returning to 00 flour and longer ferments"
  ],
  "climateScenarios": [
    "Tropical/Humid: Use 20% less yeast and very cold water to prevent over-proofing in the heat",
    "Seasonal (Dry Winters): Increase dough hydration by 2% to combat dry air during stretching",
    "High Altitude: Brazilians in mountainous regions like Campos do Jordão reduce sugar slightly",
    "Coastal/Salt Air: Careful with flour storage to prevent moisture absorption before mixing"
  ],
  "styleComparisons": [
    "vs. NY Style: Brazilian is smaller, thicker, has more toppings, and uses more oil/sugar",
    "vs. Neapolitan: Brazilian is baked much lower/longer and values topping variety over simplicity",
    "vs. Chicago: Smaller and not a 'deep dish', but similar in its 'meal-on-a-slice' philosophy",
    "vs. Argentinian: Similar in cheese volume, but Brazilian crust is generally thinner and less 'fugazza'"
  ],
  "parameterSensitivity": [
    "Critical: Flour protein content - must be strong enough to hold heavy toppings without tearing",
    "Highly sensitive: Yeast amount - high sugar/oil can retard yeast if not balanced correctly",
    "Sauce thickness: Needs a thick, seasoned sauce to prevent soaking into the dough",
    "Topping drainage: Wet ingredients (corn, peas, palmito) must be drained to avoid 'soupy' pizza",
    "Oven stone temp: Must recover quickly between pies in high-volume commercial deck ovens"
  ],
  "risks": [
    "Soggy Center: Caused by overloaded wet toppings or under-baking the middle",
    "Burnt 'Borda': If the stuffed crust isn't sealed correctly, the cheese can leak and burn",
    "Gummy Texture: Using low-protein flour that cannot support the long bake time",
    "Excessive Greasiness: From cheap mozzarella or calabresa that releases too much oil",
    "Over-Stretched Dough: Making it too thin for the weight of the traditional Brazilian flavors"
  ],
  "notes": [
    "Catupiry is the essential creamy cheese - accept no substitutes for the authentic flavor",
    "Dried oregano is almost mandatory as a post-bake finisher for this specific style",
    "Don't skimp on the salt in the sauce; it needs to stand up to the rich toppings",
    "If doing stuffed crust, use a specialist nozzle to inject the cheese evenly",
    "The dough should be easy to handle, almost like a soft modeling clay"
  ],
  "tags": [
    t('styles.brazilian_pizzeria_use_1'),
    t('styles.brazilian_pizzeria_use_2'),
    t('common.pizza'),
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
      "title": "A Cozinha Paulista",
      "url": "https://www.estantevirtual.com.br/livros/ari-valter-do-carmo/a-cozinha-paulista/135965410",
      "author": "Ari Valter do Carmo",
      "year": 2004
    },
    {
      "title": "Pizzas de São Paulo: Tradição e Regionalismo",
      "url": "https://revistas.sp.senac.br/index.php/itinerarium/article/view/15",
      "author": "Senac São Paulo",
      "year": 2018
    },
    {
      "title": "Guia de Pizzarias de São Paulo",
      "url": "https://www.terra.com.br/diversao/comer-e-beber/as-melhores-pizzarias-de-sao-paulo,4d31e977f6b8b310VgnVCM4000009bc1b40aRCRD.html",
      "author": "Terra Gastronomia",
      "year": 2022
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What characterizes the typical Brazilian pizzeria style?",
      "answer": "It is characterized by a dough slightly enriched with oil and sugar, baked in deck ovens (usually gas-powered), with a very generous and varied topping layer, and a soft, pillowy crust (cornicione) that is frequently stuffed with Catupiry or cream cheese."
    },
    {
      "question": "Why is sugar used in Brazilian pizza dough?",
      "answer": "Sugar helps with browning at commercial oven temperatures (around 300°C), ensuring the crust color develops quickly before the heavy toppings dry out. It also feeds the yeast in short fermentation processes common in busy urban pizzerias."
    },
    {
      "question": "What is the difference between Brazilian and Italian mozzarella?",
      "answer": "Brazilian 'mussarela' used in pizzerias is a pasta filata cheese with higher fat and salt content, designed to melt uniformly and create a protective savory layer over the dough that can support the weight of multiple other toppings."
    },
    {
      "question": "How do I make a perfect stuffed crust (borda recheada)?",
      "answer": "The secret is to leave about 2cm of extra dough at the edges, apply the filling (usually via a piping bag), and fold the dough back over the filling, pressing firmly against the base to seal it and prevent the cheese from leaking during the bake."
    },
    {
      "question": "Can I use Italian 00 flour for this style?",
      "answer": "You can, but premium Brazilian Type 1 flours are more traditional. They offer the specific extensibility needed for a dough that is stretched quickly and must support significant topping weight without tearing."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
