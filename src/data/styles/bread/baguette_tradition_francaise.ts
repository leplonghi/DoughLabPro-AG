import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const baguette_tradition_francaise: StyleDefinition = {
  "id": "baguette_tradition_francaise",
  "title": t('styles.baguette_tradition_française'),
  "subtitle": t('styles.french_lean_breads'),
  "category": t('styles.bread_3'),
  "family": t('styles.french_lean_breads_2'),
  "variantName": t('styles.baguette_tradition_française_2'),
  "origin": {
    "country": t('styles.france'),
    "region": t('styles.nationwide'),
    "period": "20th century"
  },
  "intro": "Consumed daily as a staple bread in France, often bought fresh from artisan boulangeries.",
  "history": "Baguette tradition is a protected style of French lean bread with restrictions on additives and methods, relying on slow fermentation and quality flour.",
  "culturalContext": {
    "significance": [
      "Ultimate symbol of French culture and daily life - as iconic as the Eiffel Tower",
      "Protected by French law (Décret Pain 1993) defining 'Baguette de Tradition Française'",
      "Represents French artisanal craftsmanship and resistance to industrialization",
      "UNESCO consideration for Intangible Cultural Heritage status",
      "Embodies French values: quality, tradition, and daily ritual over convenience"
    ],
    "consumptionContext": [
      "Purchased fresh daily (often twice daily) from local boulangerie",
      "Eaten at every meal: breakfast with butter and jam, lunch/dinner with cheese and wine",
      "Carried unwrapped under the arm, often with the end torn off and eaten while walking home",
      "Central to French social gatherings: cheese course, charcuterie boards, dinner parties",
      "Never stored in plastic - paper bag only, consumed within hours of baking"
    ],
    "evolution": [
      "Pre-1800s: Various bread shapes existed, but not the modern baguette form",
      "1830s-1920s: Long, thin bread emerges in Paris, possibly due to new deck ovens",
      "1920: Law prohibits bakers from working before 4 AM - quick-rising baguette becomes practical",
      "1993: Décret Pain law protects 'Baguette de Tradition' from industrial methods and additives",
      "2000s-present: Artisan revival, return to traditional methods, sourdough variations",
      "2021: UNESCO application submitted for cultural heritage recognition"
    ],
    "rituals": [
      "The morning boulangerie run - social ritual and daily exercise for many French people",
      "Breaking bread at the table - tearing, never cutting with knife",
      "The 'quignon' (end piece) is prized, often eaten first while still warm",
      "Scoring pattern (grignes) is the baker's signature and point of pride",
      "Tapping the bottom to hear the hollow sound - test of proper baking"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Nutty, toasted wheat with subtle sweetness from French T65 flour",
      "Complex fermentation notes: slightly tangy, yeasty, with hint of alcohol",
      "Caramelized crust with deep, toasted flavors from Maillard reaction",
      "Mineral, earthy notes from high-extraction flour",
      "Clean, pure bread flavor - no fat or enrichment to mask the wheat"
    ],
    "aromaProfile": [
      "Intense toasted wheat and caramelized crust aromas",
      "Yeasty, fermented notes with slight acidity",
      "Nutty, almost hazelnut-like from browned crust",
      "Fresh-baked bread smell that fills the boulangerie",
      "Subtle mineral, earthy notes from the flour"
    ],
    "textureNotes": [
      "Thin, crispy, shattering crust that 'sings' when cooling",
      "Open, irregular crumb with glossy, cream-colored interior",
      "Chewy, resilient texture from gluten development",
      "Airy holes with thin, translucent cell walls",
      "Overall: crispy-chewy contrast, never dense or gummy"
    ],
    "pairingRecommendations": [
      "Classic French: Butter and jam for breakfast, cheese for dinner",
      "Traditional: Pâté, rillettes, charcuterie, soft-ripened cheeses",
      "Beverage: Red wine (Bordeaux, Burgundy), café au lait, or mineral water",
      "Soups: Perfect for dipping in French onion soup or bouillabaisse",
      "Avoid: Heavy spreads that mask the bread's flavor - let the bread shine"
    ],
    "flavorEvolution": [
      "Fresh from oven (0-1 hour): Peak aroma and crust crispness, interior still warm and tender",
      "2-4 hours: Crust softens slightly, flavors meld, still excellent quality",
      "4-6 hours: Crust becomes chewy, interior firms up, flavors deepen but texture declines",
      "After 6 hours: Staling accelerates, crust tough, interior dry - use for toast or croutons",
      "Next day: Make pain perdu (French toast), croutons, or breadcrumbs - never waste"
    ]
  },
  "technicalFoundations": [
    "Poolish, pâte fermentée or liquid levain commonly 20–50%.",
    "Hydration: 65-72%"
  ],
  "doughImpact": [
    "High hydration (65-72%) creates open, irregular crumb structure with thin cell walls",
    "Poolish or pâte fermentée (20-50%) develops complex, nutty flavor and improves extensibility",
    "French T65/T55 flour provides mineral-rich flavor and cream-colored crumb",
    "Minimal mixing and gentle folding preserve gas structure for open crumb",
    "Long, cool fermentation (2-4h bulk + optional overnight retard) develops acidity and aroma"
  ],
  "bakingImpact": [
    "Strong initial steam creates thin, crispy crust with distinctive shine",
    "High temperature (230-250°C) with falling heat develops deep golden color",
    "Scoring pattern controls expansion and creates signature 'ears' (grignes)",
    "Deck baking provides bottom heat for crispy base and even browning",
    "Proper baking creates audible 'singing' crust that crackles when cooling"
  ],
  "technicalProfile": {
    "hydrationRange": [
      65,
      72
    ],
    "saltRange": [
      1.8,
      2.2
    ],
    "oilRange": [
      0,
      0
    ],
    "sugarRange": [
      0,
      0.5
    ],
    "flourStrength": "French T65/T55 or equivalent, W ~200–260",
    "fermentation": {
      "bulk": "2–4 h at 23–25°C with folds, or partially retarded",
      "proof": "45–75 min at 23–25°C",
      "coldRetard": t('styles.optional_overnight_retard_for_flavor')
    },
    "oven": {
      "type": "deck",
      "temperatureC": [
        230,
        250
      ],
      "notes": t('styles.requires_strong_steam_at_the_beginning_of_the_bake')
    },
    "difficulty": "Hard",
    "recommendedUse": [
      t('common.daily_table_bread'),
      t('common.sandwiches'),
      t('common.toast')
    ]
  },
  "defaults": {
    "hydration": 68,
    "salt": 2,
    "oil": 0,
    "sugar": 0
  },
  "regionalVariants": [
    "Baguette de Tradition Française - Protected by French law (Décret Pain 1993)",
    "Baguette Ordinaire - Standard commercial version with additives allowed",
    "Baguette de Campagne - Rustic version with whole wheat or rye addition",
    "Ficelle - Thinner version (half the weight), crispier crust ratio",
    "Flûte - Slightly thicker than baguette, softer crumb"
  ],
  "climateScenarios": [
    "Hot/Humid (>25°C, >70% RH): Reduce poolish fermentation to 8-10h, use cooler water (15-18°C), reduce bulk time by 30%",
    "Cold/Dry (<15°C, <40% RH): Extend poolish fermentation to 14-16h, use warmer water (25-28°C), extend bulk time by 50%",
    "Tropical: Refrigerate poolish after 6-8h, use ice water for final dough, work in air-conditioned space",
    "High Altitude (>1500m): Increase hydration by 3-5%, reduce proof time by 15-20%, increase oven humidity"
  ],
  "styleComparisons": [
    "vs. Italian Ciabatta: Baguette is shaped, scored, less hydration, tighter crumb, more structured",
    "vs. Pain Rustique: Baguette is more refined, shaped vs free-form, tighter crumb, thinner crust",
    "vs. Sourdough: Baguette uses commercial yeast or poolish, faster fermentation, milder flavor",
    "vs. Pain de Campagne: Baguette is all white flour, lighter, crispier, shorter shelf life"
  ],
  "parameterSensitivity": [
    "Critical: Steam in first 10-15 minutes - insufficient steam prevents proper crust development",
    "Highly sensitive to scoring depth and angle - affects ear formation and expansion",
    "Proof time is critical - over-proofed baguettes collapse, under-proofed are dense",
    "Flour type matters: French T65 creates authentic flavor, substitutes alter taste significantly",
    "Oven temperature must be accurate - 10°C difference dramatically affects crust color and texture"
  ],
  "risks": [
    "Over-proofing: Baguettes flatten during baking, lose volume, develop pale crust",
    "Insufficient steam: Crust sets too early, prevents oven spring, creates thick tough crust",
    "Poor scoring: Irregular expansion, no ears, blowouts on sides",
    "Under-baking: Pale color, gummy crumb, crust softens quickly",
    "Over-mixing: Tight crumb, loss of artisan character, tough texture"
  ],
  "notes": [
    "French law (Décret Pain 1993) defines 'Baguette de Tradition Française' - no additives, no freezing",
    "Authentic baguettes stale within 4-6 hours - this is normal and expected",
    "The 'singing' sound when cooling indicates proper crust development",
    "Scoring should be done with a lame (razor blade) at 30-45° angle for best ears",
    "Traditional weight is 250g, length 65cm, but varies by region and baker"
  ],
  "tags": [
    t('common.daily_table_bread'),
    t('common.sandwiches'),
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
      "title": t('styles.bread__jeffrey_hamelman'),
      "url": "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
      "author": "Jeffrey Hamelman",
      "year": 2012
    },
    {
      "title": t('styles.the_taste_of_bread__raymond_calvel'),
      "url": "https://www.amazon.com/Taste-Bread-Raymond-Calvel/dp/0834216469",
      "author": "Raymond Calvel",
      "year": 2001
    },
    {
      "title": "Modernist Bread",
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "The French Baker's Handbook",
      "url": "https://www.amazon.com/French-Bakers-Handbook-Artisan-Breads/dp/1624143547",
      "author": "Ferrandi Paris",
      "year": 2018
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "Why does my baguette have a thick, tough crust instead of thin and crispy?",
      "answer": "This is almost always caused by insufficient steam during the first 10-15 minutes of baking. Steam keeps the crust flexible during oven spring, allowing maximum expansion. Without it, the crust sets too early and becomes thick and tough. Use a steam pan, spray bottle, or professional steam injection. Also ensure your oven is fully preheated to 230-250°C."
    },
    {
      "question": "What is poolish and why is it important for baguettes?",
      "answer": "Poolish is a pre-ferment made from equal parts flour and water with a small amount of yeast, fermented 12-16 hours. It develops complex flavor compounds, improves dough extensibility, and creates a more open crumb structure. While you can make baguettes without poolish, the flavor will be significantly less complex. Poolish typically comprises 20-50% of the total flour weight."
    },
    {
      "question": "How do I achieve the characteristic 'ears' (grignes) on my baguette?",
      "answer": "Ears form when you score at the correct angle (30-45°) with a very sharp blade (lame). The cut should be about 1/4 inch deep and overlap slightly with the previous cut. The dough must be properly proofed (not over or under) and the oven must have strong steam. The ear is the flap of dough that lifts up during oven spring - it's a sign of proper technique."
    },
    {
      "question": "Can I use all-purpose flour instead of French T65?",
      "answer": "Yes, but the flavor and color will differ. French T65 has higher mineral content (ash) which creates a cream-colored crumb and nutty, complex flavor. All-purpose flour (similar to T55) will work but produces whiter crumb and milder flavor. For best results, use a blend of 70% all-purpose and 30% whole wheat, or seek out high-extraction flour (85-90% extraction)."
    },
    {
      "question": "Why does my baguette go stale so quickly?",
      "answer": "This is normal and authentic! Traditional French baguettes are designed to be consumed within 4-6 hours of baking. The thin crust and lean formula (no fat) mean they stale rapidly through retrogradation. This is why French people buy bread twice daily. To extend freshness slightly, store in a paper bag (not plastic) at room temperature. Never refrigerate - this accelerates staling."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
