import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const focaccia_genovese: StyleDefinition = {
  "id": "focaccia_genovese",
  "title": t('styles.focaccia_genovese'),
  "subtitle": t('styles.italian_rustic__high_hydration_3'),
  "category": t('styles.bread_6'),
  "family": t('styles.italian_rustic__high_hydration_4'),
  "variantName": t('styles.focaccia_genovese_2'),
  "origin": {
    "country": t('styles.italy_3'),
    "region": "Liguria (Genoa)",
    "period": t('styles.traditional_2')
  },
  "intro": "Eaten plain or with simple toppings, often as a snack or accompaniment to meals and drinks.",
  "history": "Focaccia Genovese (Fügassa in Ligurian dialect) is the ancestor of modern flatbreads, rooted in the maritime history of Genoa. Originally eaten by sailors and dockworkers for stamina, it was historically baked in communal ovens. The addition of a 'Salami' (brine) of water, salt, and oil in the holes was a clever way to keep the bread moist and savory during long voyages.",
  "culturalContext": {
    "significance": [
      "The culinary heartbeat of Genoa and the Ligurian coast",
      "One of the few savory breads traditionally eaten dipped in breakfast coffee (cappuccino)",
      "Protected as a traditional agri-food product (PAT) in Italy",
      "Symbol of Ligurian hospitality and the 'merenda' (afternoon snack) culture",
      "Historically baked on 'testi' (terracotta or metal discs) before modern pans"
    ],
    "consumptionContext": [
      "Eaten at any time of day: breakfast, lunch, snack, or dinner",
      "Specifically enjoyed dipped in coffee or dry white wine (like Vermentino)",
      "Sold in long strips or large rectangular pieces, often wrapped in wax paper",
      "Eaten exclusively upside down (salt side down) to maximize flavor impact on the tongue",
      "Commonly shared with friends at local bakeries (sciamadde) in Genoa"
    ],
    "evolution": [
      "Ancient Times: Ligurians bake simple flatbreads on hot hearthstones",
      "1500s: Use of yeast becomes common; the church tries to ban it during fasts to no avail",
      "1800s: The 'Genoese Salami' (salamoia) brine technique is perfected",
      "1900s: Industrial sheet pans become the standard, but the traditional 2cm height remains",
      "2000s: Sourdough/Levain variations become popular among artisan bakers",
      "Present: Global recognition as the benchmark for all oily flatbreads"
    ],
    "rituals": [
      "The 'Pizzicate' (Dimpling): using fingertips to create deep holes that trap pools of gold oil",
      "The Brine Bath: pouring 'la salamoia' over the dough just before the final proof",
      "Upside-Down Eating: the mandatory ritual of flipping the slice so the salt hits the taste buds first",
      "The Bread-Coffee Dip: a ritual that shocks outsiders but defines the Genoese morning",
      "Checking the Bottom: lifting the focaccia to ensure it is 'fried' golden by the oil in the pan"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Intense fruity bitterness and richness from Extra Virgin Olive Oil",
      "Sharp, crystalline salt bursts from the brine-filled dimples",
      "Mild wheat sweetness balanced with savory malt",
      "No sourness (if made traditionally); clean and focus on the oil",
      "Subtle herb notes if using traditional Ligurian toppings like rosemary"
    ],
    "aromaProfile": [
      "Dominant aroma of warm, high-quality Ligurian olive oil",
      "Freshly baked white bread with a hint of toasted yeast",
      "Salty sea-air scent from the surface brine",
      "Herbal notes (rosemary or onion) if applicable",
      "Nutty, earthy wheat aromas"
    ],
    "textureNotes": [
      "The 'Ligurian Crunch': a micro-thin, crispy top skin and fried bottom",
      "Soft and sponge-like interior that 'wakes up' when bitten",
      "Variable height - usually no more than 2cm (about 1 inch) thick",
      "Contrasting pools of soft, salty center within the dimples",
      "Extremely oily to the touch—your fingers should shine after eating"
    ],
    "pairingRecommendations": [
      "Beverage: Vermentino (white wine), dry Gin & Tonic, or Cappuccino for breakfast",
      "Toppings: Sliced onions (Cipolle), fresh rosemary, or sage",
      "Accompaniment: Ligurian olives (Taggiasca), mortadella, or soft stracchino cheese",
      "Sauce: Never dipped in sauce; the oil and brine are the sauce",
      "Dessert: Sometimes sprinkled with sugar (Focaccia Dolce) for a sweet variant"
    ],
    "flavorEvolution": [
      "Fresh (0-2 hours): Peak perfection; the oil is vibrant and the crust is crisp",
      "4-8 hours: The 'focaccia of the sailors'; becomes denser and chewier",
      "Next Day: Best reheated in a pan to restore the 'fry' or cut into cubes for soup",
      "Structural Loss: Will become 'soggy' if kept in plastic; must be kept in paper",
      "Cold: A popular 'snack in the pocket' for hikers in the Cinque Terre"
    ]
  },
  "technicalFoundations": [
    "Direct dough or mild preferment; long fermentation improves flavor.",
    "Hydration: 70-80%"
  ],
  "doughImpact": [
    "High hydration (70-80%) allows the dough to spread easily and creates a tender crumb",
    "Liberal oil in the dough (5-10%) and pan provides the signature 'fried' richness",
    "Long bulk fermentation (with folds) ensures flexibility for stretching and dimpling",
    "The use of malt or a small amount of sugar assists in browning despite the high oil film",
    "Minimal handling during the final stretch prevents degassing and maintains even height"
  ],
  "bakingImpact": [
    "Moderate heat (220-250°C) allows the oil to 'fry' the crust while keeping the center soft",
    "Baking in a heavy-duty pan is mandatory to saturate the dough in oil bottom-up",
    "The brine (water/oil/salt) creates 'micro-steam' in the dimples, preventing a hard crust",
    "A relatively short 15-20 minute bake prevents excess drying of the thin loaf",
    "Higher initial bottom heat is desirable to jumpstart the oil-frying reaction"
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      80
    ],
    "saltRange": [
      2.5,
      3
    ],
    "oilRange": [
      5,
      10
    ],
    "sugarRange": [
      0,
      3
    ],
    "flourStrength": t('styles.allpurpose_or_bread_flour_medium_strength'),
    "fermentation": {
      "bulk": "2–4 h at 23–25°C, possibly including cold retard",
      "proof": "30–90 min in pan after dimpling and brine application",
      "coldRetard": t('styles.often_824_h_for_depth_of_flavor')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        220,
        250
      ],
      "notes": t('styles.baked_in_oiled_sheet_pans_for_crisp_bottom_and_ten')
    },
    "difficulty": t('styles.difficulty_expert'),
    "recommendedUse": [
      t('common.flatbread_snack'),
      t('common.table_bread'),
      t('common.sandwich_base')
    ]
  },
  "defaults": {
    "hydration": 75,
    "salt": 2.5,
    "oil": 6,
    "sugar": 1
  },
  "regionalVariants": [
    "Focaccia di Recco - The paper-thin cheese-filled non-yeasted cousin",
    "Focaccia con le Cipolle - Loaded with thin, sweet white onions (very traditional)",
    "Focaccia di Voltri - A thinner, crunchier variant from the Voltri district of Genoa",
    "Focaccia Barese - Apulian cousin using tomatoes, olives, and often boiled potatoes",
    "Focaccia Veneta - Sweet, tall variant eaten during festivals like Christmas"
  ],
  "climateScenarios": [
    "Genoese Mistral (Cold/Dry): Use warm water (32°C) and cover pan with a damp cloth",
    "Mediterranean Summer (Hot): Reduce yeast by 30% and perform bulk ferment in the fridge",
    "Coastal Fog (High Humidity): Reduce water by 3-5% to prevent the dough from being too slack",
    "High Altitude: Reduce yeast and sugar; the dough will rise too fast and lose 'oil-tension'"
  ],
  "styleComparisons": [
    "vs. Pizza: Focaccia is much oilier, has a brine finish, and is eaten at any time (including breakfast)",
    "vs. Ciabatta: Both are hydrated, but Focaccia is an oil-enriched dough vs Ciabatta's lean dough",
    "vs. Focaccia Barese: Genovese is thinner, focuses on oil/brine vs Barese's focus on toppings",
    "vs. American Pan Pizza: Focaccia is less 'doughy' and has a unique salty/briny top vs dry cheese"
  ],
  "parameterSensitivity": [
    "Critical: Oil Quality - if the olive oil isn't excellent, the bread will be bland and greasy",
    "Highly sensitive: Brine Ratio - too much water and it becomes soggy; too much salt is inedible",
    "Dimple Depth: If you don't push through to the bottom, the oil pools will be shallow and evaporate",
    "Flour Strength: Needs enough protein to resist the oil, but not so much that it becomes 'rubbery'",
    "Proof Time in Pan: Under-proofing leads to 'tough' flatbread; it must be airy before the brine"
  ],
  "risks": [
    "The 'Leathery' Top: Caused by omitting the brine or not using enough steam in the oven",
    "Greasy Mess: Using low-quality or rancid oil, or oil with a low smoke point",
    "Sticking to Pan: Not using enough oil in the corners before panning",
    "Salt Overdose: Forgeting that the brine contains salt and over-salting the dough itself",
    "Dense Bottom: Oven floor not hot enough to start the oil-frying process quickly"
  ],
  "notes": [
    "Don't be shy with the oil - if you're not making a mess, you're not doing it right",
    "Use Taggiasca olive oil if possible for the most authentic Ligurian flavor",
    "Turn the focaccia upside down on your plate so the salt hits your tongue first",
    "The brine should look like a milky emulsion of oil and water (salamoia)",
    "If using rosemary, push the needles into the dimples so they don't burn"
  ],
  "tags": [
    t('common.flatbread_snack'),
    t('common.table_bread'),
    t('common.sandwich_base'),
    t('common.bread'),
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
      "title": t('styles.modernist_bread_5'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "La Focaccia di Genova",
      "url": "https://www.panificatori.it/focaccia-genovese/",
      "author": "Associazione Panificatori di Genova",
      "year": 2022
    },
    {
      "title": "Cucinare in Liguria",
      "url": "https://www.amazon.it/Cucinare-Liguria-Ricette-Liguri-Tradizionali/dp/8876483562",
      "author": "Enzo Rossi",
      "year": 1995
    },
    {
      "title": "Savouring Italy",
      "url": "https://www.amazon.com/Savouring-Italy-Michele-Scicolone/dp/1875169680",
      "author": "Michele Scicolone",
      "year": 1999
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What makes Focaccia Genovese unique?",
      "answer": "The main feature is the 'salamoia' (brine) - a mixture of water, salt, and plenty of olive oil that is poured into the dimples of the dough before baking. This creates reservoirs of flavor and keeps the interior moist while the surface browns."
    },
    {
      "question": "Is it true that Italians eat focaccia for breakfast?",
      "answer": "Yes! In Genoa, it is a sacred ritual to dip a piece of warm Focaccia Genovese into cappuccino or caffè latte. The contrast of the salty oil with the sweet coffee is considered sublime by locals."
    },
    {
      "question": "Why should I eat focaccia upside down?",
      "answer": "It is a Genoese tradition. By flipping the salt side down, it hits the taste buds of the tongue first, providing a much more intense and immediate explosion of flavor."
    },
    {
      "question": "What is the secret to perfect holes (dimples)?",
      "answer": "Use your fingertips and press firmly against the pan, but without tearing the dough. These holes must be deep to 'hold' the oil and brine. If they are shallow, the brine evaporates and the bread dries out."
    },
    {
      "question": "Can I use any olive oil?",
      "answer": "You can, but since olive oil is the main flavor ingredient, the final result depends 100% on its quality. Fruity, extra virgin olive oils (especially from Liguria) are ideal for this style."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
