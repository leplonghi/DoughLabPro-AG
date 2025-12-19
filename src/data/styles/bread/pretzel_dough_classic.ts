import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const pretzel_dough_classic: StyleDefinition = {
  "id": "pretzel_dough_classic",
  "title": "Pretzel Dough (Boiled-Alkaline)",
  "subtitle": t('styles.specialty_breads_3'),
  "category": t('styles.bread_23'),
  "family": t('styles.specialty_breads_4'),
  "variantName": "Pretzel Dough (Boiled-Alkaline)",
  "origin": {
    "country": t('styles.germany'),
    "region": t('styles.bavaria_and_others'),
    "period": t('styles.traditional_9')
  },
  "intro": "Eaten as snacks, with beer, or as street food across German-speaking regions and beyond.",
  "history": "Pretzels (Brezeln) date back to at least the early Middle Ages in Europe, likely originating in monasteries in Italy or Southern Germany. Legend says a monk shaped dough to represent arms crossed in prayer. By the 12th century, the Brezel was the emblem of the baker's guild in Germany. The defining technical characteristic—the lye (sodium hydroxide) dip—is said to have happened by accident when a baker (possibly from Bad Urach or Munich) dropped dough into a cleaning bucket filled with lye, creating the deep brown, savory crust that became the global hallmark of the style.",
  "culturalContext": {
    "significance": [
      "The ultimate symbol of German baking and Bavarian beer garden culture",
      "Historically associated with Lent, as they were often made without dairy or eggs",
      "A symbol of the master baker's skill, specifically the 'crossed arms' shape",
      "Represented good luck, prosperity, and spiritual fulfillment in medieval Europe",
      "Essential component of the 'Weisswurstfrühstück' (traditional Bavarian white sausage breakfast)"
    ],
    "consumptionContext": [
      "Traditionally served with spicy or sweet mustard and a cold beer (Helles or Weissbier)",
      "Part of the 'Brotzeit'—a savory snack plate with cheese, ham, and radishes",
      "Street food favorite at festivals like Oktoberfest and local Christmas markets",
      "Often sliced and buttered ('Butterbrezel') as a morning or afternoon snack",
      "Varies from soft, large pretzels to small, crunchy snack versions"
    ],
    "evolution": [
      "600s: Monastic origins in Italy or Southern France as prayer-bread",
      "1200s: Becomes the official symbol of bakers' guilds across Germany",
      "1500s: The 'Lye Bath' technique is standardized in Bavaria and Swabia",
      "1700s: German immigrants (Palatines) bring 'Pretzel' culture to Pennsylvania, USA",
      "1861: Julius Sturgis founds the first commercial hard pretzel bakery in America",
      "Present: Global staple, used as buns for burgers and gourmet appetizers"
    ],
    "rituals": [
      "The 'Bow' Twist: the rapid hand-flicking ritual used by masters to twist the pretzel shape in seconds",
      "The Lye Dip: carefully submerging the proofed dough in a 3% sodium hydroxide solution",
      "Scoring the 'Belly': cutting a deep horizontal slit across the thickest part of the pretzel",
      "Coarse Salting: sprinkling large grains of 'Pretzel Salt' (halite) immediately after the dip",
      "The Weisswurst Peel: the ritual of eating a pretzel alongside peeled white sausages and spicy mustard"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Deep, savory, almost metallic tang from the lye crust",
      "Intense Maillard reaction notes (toasted, nutty, alkaline)",
      "Sweet, clean wheat interior to balance the salty exterior",
      "Distinctive saltiness from the coarse topping salt",
      "Subtle malty notes if using professional malt extracts"
    ],
    "aromaProfile": [
      "Pungent, savory, and 'pretzely' (alkaline and toasted)",
      "Warm wheat and sweet cereal interior",
      "Freshly baked heavy bread",
      "Toasted nuts and deep caramelization",
      "Aromatic hops (if paired with beer)"
    ],
    "textureNotes": [
      "Contrast: crispy, thin, dark crust vs. soft, dense, and slightly chewy interior",
      "The 'Belly': the thickest part should be soft and pillowy",
      "The 'Arms': the thin twisted parts should be crunchy or very firm",
      "Fine, uniform crumb: no large holes, providing a substantial 'bite'",
      "Smooth exterior: should be glossy and dark-brown, never dull or pale"
    ],
    "pairingRecommendations": [
      "Condiment: Sweet Bavarian mustard or hot spicy deli mustard",
      "Cheese: Obatzda (Bavarian cheese spread with beer and paprika) or Swiss cheese",
      "Meat: Weisswurst (white sausage), Frankfurter, or Black Forest ham",
      "Beverage: Bavarian Lager (Helles), Wheat Beer (Hefeweizen), or cold milk",
      "Dip: Warm cheese sauce or spicy mustard dip"
    ],
    "flavorEvolution": [
      "Fresh (0-2 hours): Peak texture; the crust is at its most savory and the inside at its softest",
      "4-8 Hours: The salt begins to melt and draw moisture, making the crust slightly tacky",
      "Next Day: Best served split and toasted with a generous layer of butter",
      "Stale: Traditionally sliced and used to make 'Semmelknödel' (bread dumplings)",
      "Freezing: Pretzels freeze well; reheat in an oven at 180°C for 5 minutes to restore crispness"
    ]
  },
  "technicalFoundations": [
    "Often straight dough; some use preferments.",
    "Hydration: 55-62%"
  ],
  "doughImpact": [
    "Low hydration (55-62%) is critical to maintain the intricate 'crossed-arms' shape",
    "High-protein flour is required for the chewy, substantial 'bite' characteristic of real pretzels",
    "Small amount of fat (2-5% lard or butter) provides internal softness and shelf life",
    "Intensive kneading is necessary to develop a strong, smooth gluten mesh for the shiny skin",
    "Cold proofing is often used to ensure the dough is skin-firm enough to handle the lye bath"
  ],
  "bakingImpact": [
    "The 3% Lye Dip (Sodium Hydroxide) triggers an extreme Maillard reaction and flavor profile",
    "High heat (220-240°C) is necessary to 'set' the lye color before it can soak into the dough",
    "Lack of steam in the oven allows the alkaline-treated surface to dry into a glossy, crisp skin",
    "Strategic scoring on the 'belly' allows for a controlled burst in the oven",
    "Coarse salt must be applied immediately after the dip while the surface is still wet/tacky"
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
      0,
      5
    ],
    "sugarRange": [
      0,
      5
    ],
    "flourStrength": t('styles.bread_flour_or_mediumstrength_wheat_flour'),
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": t('styles.short_proof_before_or_after_lye_bath_depending_on_'),
      "coldRetard": t('styles.frequently_retarded_for_flavor_and_handling')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        220,
        240
      ],
      "notes": "Dipped in alkaline solution (traditionally lye) before baking."
    },
    "difficulty": t('styles.medium_12'),
    "recommendedUse": [
      t('common.traditional_pretzels'),
      t('common.pretzel_rolls_and_sticks')
    ]
  },
  "regionalVariants": [
    "Swabian Brezel - Thinner arms, thicker belly, usually slightly less dark",
    "Bavarian Brezel - Thicker arms, very distinct lye flavor, often larger",
    "Laugengebäck - The same dough and lye-dip used for rolls, sticks, or buns",
    "Pennsylvania Hard Pretzel - American small, crunchy, snack-style evolution",
    "Soft American Pretzel - Very large, sweet-enriched variant common in malls"
  ],
  "climateScenarios": [
    "High Humidity: Lye-dipped crust becomes very 'sticky' fast; bake 2 mins longer to dry",
    "Arid/Dry: Dough can form a 'skin' too early; keep under a damp cloth while shaping",
    "Cold Winter: Use warm proofing (26°C) as the low-hydration dough is naturally slow to rise",
    "Professional/Factory: Use chilled dough to make handling for the lye machine easier"
  ],
  "styleComparisons": [
    "vs. Bagel: Both are boiled/dipped, but Pretzels use lye (alkaline) vs. Bagels use malt (sugar)",
    "vs. Brioche: Pretzels are lean and dense; Brioche is fatty and light",
    "vs. Kaiser Roll: Both are German/Austrian icons, but Kaiser is baked direct vs. Lye-dipped Pretzel",
    "vs. French Bread: Pretzels are ultra-low hydration (55%) vs. French (65-70%)"
  ],
  "parameterSensitivity": [
    "Critical: Lye Concentration - 3-4% is standard; too weak is pale, too strong is dangerous/bitter",
    "Highly sensitive: Proofing - under-proofed will burst irregularly; over-proofed collapses in the lye",
    "Mixing temp: Keeping dough cool (22-24°C) is key for the tight, uniform crumb",
    "Dough Consistency: Must be firm and 'plastic' to hold the twist/knot shape",
    "Bake Time: Over-baking makes the arms brittle; under-baking makes the belly gummy"
  ],
  "risks": [
    "Chemical Burns: Improperly handling sodium hydroxide (lye); always use gloves and eye protection",
    "Matte/Dull Crust: Lye solution was too cold or too weak",
    "Pale Belly: Scoring was too shallow or oven floor wasn't hot enough",
    "Solado (Soggy base): Dipping for too long (limit to 10-15 seconds)",
    "White Spots: Surface of the dough was too dry or floured when entering the lye bath"
  ],
  "notes": [
    "If you can't use lye (Safety First!), a boiling baking soda bath is a safer home alternative",
    "The dough should feel like 'room-temperature modeling clay'—very firm but moldable",
    "Always freeze or refrigerate the shaped pretzels for 30-60 mins before dipping for easy handling",
    "Use 'Pretzel Salt' if possible; it's a special type of salt that doesn't melt in the oven heat",
    "The lye dip must be COLD; never boil lye as it creates dangerous corrosive vapors"
  ],
  "tags": [
    t('common.traditional_pretzels'),
    t('common.pretzel_rolls_and_sticks'),
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
      "title": "History of the German Brezel",
      "url": "https://www.bavaria.by/experiences/food-drink/bavarian-specialties/pretzels/",
      "author": "Bavaria Tourism",
      "year": 2023
    },
    {
      "title": t('styles.modernist_bread_18'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Pretzel: A Twisted History",
      "url": "https://www.history.com/news/pretzel-history",
      "author": "History.com",
      "year": 2021
    },
    {
      "title": "Baking Science & Technology: Pretzels",
      "url": "https://www.aibinternational.com/",
      "author": "AIB International",
      "year": 2018
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Is lye (sodium hydroxide) dangerous for baking?",
      "answer": "Food-grade lye is highly caustic and must be handled with extreme care (gloves and eye protection required). However, it is safe to eat once baked because the heat of the oven and the carbon dioxide in the air react with the lye to neutralize it, turning it into safe carbonate."
    },
    {
      "question": "Can I use baking soda instead of lye?",
      "answer": "Yes, for home bakers, baking soda is a much safer alternative. To increase its effectiveness, you can 'bake' the baking soda in the oven first to turn it into sodium carbonate. It won't be quite as dark or 'tangy' as lye, but it's very close."
    },
    {
      "question": "Why do my pretzels have white spots after baking?",
      "answer": "White spots usually occur if there was too much flour on the surface of the dough during the dip, or if the dough was too dry/skinned over. Ensure the pretzels are smooth and relatively flour-free before dipping."
    },
    {
      "question": "What is 'Pretzel Salt'?",
      "answer": "Pretzel salt is a special type of coarse, non-melting salt (often compressed halite). Unlike regular sea salt or kosher salt, it won't dissolve as easily into the moist dough surface during baking, ensuring those iconic white crystals remain on top."
    },
    {
      "question": "Why is the dough for pretzels so firm/stiff?",
      "answer": "The low hydration (55-62%) is essential so the pretzels hold their intricate twisted shape. If the dough were soft like bread, the 'arms' would sag or merge back into the 'belly' during proofing and dipping."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
