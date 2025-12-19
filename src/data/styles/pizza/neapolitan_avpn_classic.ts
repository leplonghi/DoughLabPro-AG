import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const neapolitan_avpn_classic: StyleDefinition = {
  "id": "neapolitan_avpn_classic",
  "title": t('styles.neapolitan_avpn_classic'),
  "subtitle": t('styles.neapolitan_pizza'),
  "category": t('styles.pizza_5'),
  "family": t('styles.neapolitan_pizza_2'),
  "variantName": t('styles.neapolitan_avpn_classic_2'),
  "origin": {
    "country": t('styles.italy_9'),
    "region": t('styles.naples'),
    "period": "18th–19th century (Codified 1984)"
  },
  "intro": "A UNESCO Intangible Cultural Heritage item. It is not just food but a social ritual in Naples. Traditionally eaten with a knife and fork or folded 'a libretto' (like a booklet) as street food. It is soft, wet, and digestible, never crispy.",
  "history": "The 'Verace Pizza Napoletana' is the protected ancestor of modern pizza. While flatbreads existed for millennia, the tomato-topped pizza emerged in 18th-century Naples. The legend of the Margherita (1889) honors Queen Margherita of Savoy, but the style predates her. In 1984, the Associazione Verace Pizza Napoletana (AVPN) codified the rules to protect the tradition against industrialization.",
  "culturalContext": {
    "significance": [
      "UNESCO Intangible Cultural Heritage (2017) - recognized as 'Art of Neapolitan Pizzaiuolo'",
      "Symbol of Neapolitan identity and working-class culture since 18th century",
      "Represents the democratization of food - originally poor man's meal, now global icon",
      "Protected by AVPN (Associazione Verace Pizza Napoletana) with strict certification standards",
      "Embodies the Italian concept of 'campanilismo' - intense local pride and tradition"
    ],
    "consumptionContext": [
      "Traditionally eaten at pizzerias, not made at home - pizza-making is a specialized craft",
      "Consumed for lunch or dinner, often as a complete meal with minimal accompaniments",
      "Social ritual: eaten at communal tables, shared with family and friends",
      "Street food tradition: folded 'a libretto' (like a booklet) and eaten while walking",
      "Never reheated or saved - must be consumed immediately while hot and fresh"
    ],
    "evolution": [
      "Pre-1700s: Flatbreads with various toppings existed in Naples",
      "1700s-1800s: Tomatoes introduced from Americas, pizza as we know it emerges",
      "1889: Pizza Margherita created for Queen Margherita (red tomato, white mozzarella, green basil)",
      "1984: AVPN founded to codify and protect traditional methods against industrialization",
      "2017: UNESCO recognition elevates pizza-making to intangible cultural heritage",
      "Modern: Global spread while maintaining strict traditional standards in Naples"
    ],
    "rituals": [
      "The pizzaiuolo's theatrical hand-stretching and tossing is performance art",
      "Wood-fired oven tending is a continuous ritual requiring constant attention",
      "Traditional pizzerias display the AVPN certification plaque with pride",
      "Eating with hands vs fork-and-knife debate reflects class and regional identity",
      "The 'cornicione' (puffy edge) is left uneaten by some as a sign of quality assessment"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Sweet-tart tomato with bright acidity from San Marzano DOP tomatoes",
      "Creamy, milky richness from fresh fior di latte or buffalo mozzarella",
      "Subtle wheat and yeast notes from the dough's fermentation",
      "Delicate char and smoke from wood-fired baking",
      "Fresh basil's peppery, anise-like aromatics (when used)"
    ],
    "aromaProfile": [
      "Wood smoke with hints of oak or fruitwood",
      "Yeasty, bread-like fermentation aromas",
      "Bright, fresh tomato with herbaceous notes",
      "Milky, lactic sweetness from fresh mozzarella",
      "Charred crust with caramelized, toasted notes"
    ],
    "textureNotes": [
      "Soft, tender, pliable crust that folds easily without breaking",
      "Slightly wet, almost creamy center from quick bake and fresh cheese",
      "Puffy, airy cornicione (edge) with large irregular holes",
      "Delicate leopard spotting provides textural contrast - crispy char spots",
      "Overall: tender and digestible, never tough or chewy"
    ],
    "pairingRecommendations": [
      "Classic: San Marzano tomatoes + fior di latte + fresh basil (Margherita)",
      "Traditional: Tomato + garlic + oregano + olive oil (Marinara)",
      "Authentic additions: Anchovies, capers, black olives (Napoletana)",
      "Beverage: Light Italian lager, Aglianico red wine, or sparkling water",
      "Avoid: Heavy meats, excessive cheese, thick sauces - keep it simple and light"
    ],
    "flavorEvolution": [
      "Fresh from oven (0-5 min): Peak flavor, cheese molten, crust crispy-soft, aromas intense",
      "Cooling (5-15 min): Flavors meld, cheese sets, still excellent but losing peak freshness",
      "After 15 min: Crust begins to toughen, cheese congeals, flavors flatten - quality declines",
      "Cold/reheated: Not recommended - texture becomes tough, flavors muted, authenticity lost"
    ]
  },
  "technicalFoundations": [
    "Direct dough (impasto diretto) is the standard. Sourdough (Criskito) is allowed but rare in strict tradition.",
    "Hydration: 58-62.5%"
  ],
  "doughImpact": [
    "Soft, extensible dough with minimal gluten development - requires gentle handling",
    "Low hydration (58-62.5%) creates a tender, pliable texture that stretches easily without tearing",
    "Room temperature fermentation develops flavor while maintaining dough elasticity",
    "Dough must be soft enough to stretch by hand into a thin disc with raised cornicione",
    "Zero fat content ensures authentic Neapolitan texture and digestibility"
  ],
  "bakingImpact": [
    "Extreme heat (430-485°C) causes rapid oven spring and leopard spotting in 60-90 seconds",
    "Wood-fired dome creates intense top heat for characteristic charring",
    "Quick bake preserves moisture, creating the signature soft, wet center",
    "High temperature caramelizes sugars rapidly, developing complex flavor",
    "Minimal bake time prevents drying, maintaining the tender, foldable texture"
  ],
  "technicalProfile": {
    "hydrationRange": [
      58,
      62.5
    ],
    "saltRange": [
      2.5,
      3
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      0
    ],
    "flourStrength": "Medium-High strength (W 280–320), P/L 0.50–0.60, protein 11.5–12.5%",
    "fermentation": {
      "bulk": "2h bulk at room temp, then balling",
      "proof": "6–24h total maturation at room temp (18–25°C)",
      "coldRetard": t('styles.traditionally_not_used_modern_avpn_rules_allow_it')
    },
    "oven": {
      "type": "wood_fired",
      "temperatureC": [
        430,
        485
      ],
      "notes": t('styles.dome_temp_485c_floor_430c_cook_time_strictly_6090_')
    },
    "difficulty": t('styles.medium_35'),
    "recommendedUse": [
      t('common.authentic_neapolitan_margherita'),
      t('common.marinara')
    ]
  },
  "defaults": {
    "hydration": 60,
    "salt": 2.8,
    "oil": 0,
    "sugar": 0
  },
  "recommendedFlavorComponents": [
    "fior_di_latte",
    "garlic_oregano",
    "parmesan",
    "anchovies",
    "cherry_tomatoes"
  ],
  "regionalVariants": [
    "Neapolitan STG (Specialità Tradizionale Garantita) - EU protected designation",
    "Neapolitan Contemporary - Higher hydration (65-70%) for home ovens",
    "Canotto style - Ultra-high edge with air pockets in the cornicione",
    "Pizza a Metro - Elongated Neapolitan style sold by the meter"
  ],
  "climateScenarios": [
    "Hot/Humid (>25°C, >70% RH): Reduce fermentation time by 20-30%, use cooler water (15-18°C)",
    "Cold/Dry (<15°C, <40% RH): Extend fermentation time by 30-50%, use warmer water (25-28°C)",
    "Tropical: Refrigerate dough after 4-6h to prevent over-fermentation",
    "High Altitude (>1500m): Increase hydration by 2-3% to compensate for faster evaporation"
  ],
  "styleComparisons": [
    "vs. New York: Neapolitan is softer, wetter, lower hydration, wood-fired vs gas deck",
    "vs. Roman: Neapolitan is thicker, softer, less crispy, shorter bake time",
    "vs. Detroit: Neapolitan is hand-stretched, wood-fired, no pan, much thinner",
    "vs. Contemporary Neapolitan: Classic AVPN is stricter on ingredients, lower hydration, traditional methods only"
  ],
  "parameterSensitivity": [
    "Highly sensitive to oven temperature - below 400°C will not achieve proper leoparding",
    "Critical: Fermentation time - over-fermented dough tears during stretching",
    "Flour protein content must be 11.5-12.5% - higher creates tough texture",
    "Salt timing: Must be added after initial mixing to avoid inhibiting gluten development",
    "Water temperature critical: 20-25°C for proper fermentation control"
  ],
  "risks": [
    "Over-proofing: Dough becomes sticky, tears easily, loses structure",
    "Under-baking: Center remains raw and doughy (common in home ovens)",
    "Incorrect stretching: Pressing with rolling pin destroys gas structure",
    "Too much sauce: Creates soggy center, prevents proper baking",
    "Insufficient oven heat: Results in pale, tough crust without char"
  ],
  "notes": [
    "AVPN certification requires strict adherence to ingredient and method specifications",
    "Traditional Neapolitan pizza should be consumed immediately - does not hold well",
    "The 'wet center' is intentional and authentic, not a defect",
    "Tipo 00 flour is traditional but not mandatory - protein content matters more",
    "Wood-fired oven is traditional but AVPN now accepts gas ovens reaching proper temperature"
  ],
  "tags": [
    t('common.authentic_neapolitan_margherita'),
    t('common.marinara'),
    t('common.pizza'),
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
      "title": t('styles.avpn_international_regulations'),
      "url": "https://www.pizzanapoletana.org/en/ricetta_pizza_napoletana",
      "author": "Associazione Verace Pizza Napoletana",
      "year": 2022
    },
    {
      "title": t('styles.modernist_pizza_4'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": t('styles.unesco_intangible_cultural_heritage'),
      "url": "https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722",
      "author": "UNESCO",
      "year": 2017
    },
    {
      "title": "The Pizza Bible",
      "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
      "author": "Tony Gemignani",
      "year": 2014
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why is my Neapolitan pizza dough tearing when I stretch it?",
      "answer": "This is typically caused by over-fermentation, insufficient gluten development, or dough that's too cold. Ensure your fermentation time is within 6-24 hours at room temperature, and let cold dough warm up for 30-60 minutes before stretching. Always stretch gently from the center outward, never using a rolling pin."
    },
    {
      "question": "Can I make authentic Neapolitan pizza in a home oven?",
      "answer": "True AVPN-certified Neapolitan pizza requires 430-485°C, which home ovens cannot reach. However, you can make Neapolitan-style pizza using a pizza steel or stone at maximum temperature (usually 260-290°C), with longer bake times (5-7 minutes). Consider the 'Contemporary Neapolitan' style adapted for home ovens."
    },
    {
      "question": "Is the wet, soft center a mistake?",
      "answer": "No! The soft, slightly wet center is the authentic characteristic of Neapolitan pizza. It should be eaten with a knife and fork or folded 'a libretto'. The high moisture content and quick bake time are intentional, creating a tender, digestible pizza. If it's truly raw or doughy, then the oven wasn't hot enough."
    },
    {
      "question": "Do I need Tipo 00 flour for Neapolitan pizza?",
      "answer": "Tipo 00 is traditional but not mandatory. What matters most is the protein content (11.5-12.5%) and flour strength (W 280-320). You can use bread flour or all-purpose flour with similar protein levels. Tipo 00 refers to the fineness of the grind, which affects texture but isn't essential for authenticity."
    },
    {
      "question": "How do I achieve the leopard spotting on the crust?",
      "answer": "Leopard spotting (charred spots) requires three things: 1) Proper fermentation (6-24h) to develop sugars, 2) Very high oven temperature (430-485°C), and 3) Intense top heat from a dome or broiler. The spots form where air bubbles in the dough char from the extreme heat. Home ovens typically cannot achieve this without modifications."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
