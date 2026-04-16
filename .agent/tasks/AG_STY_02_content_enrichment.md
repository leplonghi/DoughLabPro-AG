# AG_STY_02 — Style Definitions Content Enrichment

## Goal
Every active `DoughStyleDefinition` file must be fully populated. Currently, the fields `flavorProfile`, `culturalContext`, `globalPresence`, `regulatoryNotes`, `pairings`, `experimentSuggestions`, and `learnLinkTags` are missing from most definitions. The `StyleDetailPage` renders these fields in rich sections that appear empty or with fallback defaults when absent.

---

## Affected Files

All `.ts` files under `src/data/styles/` (excluding `index.ts`, `registry.ts`, `builder.ts`, `regions/*.ts`, `library/*.ts`).

Priority order (most visible to users first):
1. Pizza styles (~20 files)
2. Bread styles (~26 files)
3. Buns (3 files)
4. Pastry (~14 files)
5. Confectionery (8 files)
6. Gluten-free (1 file)

---

## Fields to Add to EVERY Style Definition

### 1. `flavorProfile` (maps to "Sensory Intelligence" section in StyleDetailPage)

```ts
flavorProfile: {
  primaryFlavors: string[],      // 3-5 dominant flavor notes, e.g. ["buttery", "milky", "lightly sweet", "toasted wheat"]
  aromaProfile: string[],        // 3-5 aroma descriptors, e.g. ["warm butter", "caramelized crust", "vanilla undertones"]
  textureNotes: string[],        // 3-5 texture descriptors, e.g. ["pillowy", "feather-light crumb", "paper-thin crust"]
  pairingRecommendations: string[], // 3-5 food/beverage pairings
  flavorEvolution?: string[]     // Optional: how flavor changes from fresh → day 1 → day 2
}
```

**Rules for writing:**
- Be specific and evocative — use language a sommelier would use
- Avoid generic terms like "good" or "tasty"
- Match the character of the style (e.g., sourdough should reference "lactic tang", "mild acetic bite")

### 2. `culturalContext` (maps to "Heritage" section in StyleDetailPage)

```ts
culturalContext: string  // 1-3 sentences about the cultural significance, social context, rituals
```

**Examples:**
- Pão Francês: "The pão francês is consumed daily by over 40 million Brazilians, typically at breakfast with butter and café com leite. Buying fresh pãozinhos from the neighborhood bakery (padaria) at dawn is a deeply embedded cultural ritual."
- Neapolitan: "Recognized as UNESCO Intangible Cultural Heritage in 2017, the Neapolitan pizza-making tradition (pizzaiuolo) is a living expression of Neapolitan identity, pride, and hospitality."

### 3. `globalPresence` (maps to "Global Presence & Legal Logic" section)

```ts
globalPresence: string  // 1-2 sentences about how this style has spread globally, adaptation in other countries
```

### 4. `regulatoryNotes` (optional, only for styles with official standards)

```ts
regulatoryNotes: string  // DOP, STG, AVPN, ABNT, or other certification info
```

**Only add for styles that have real regulatory frameworks:**
- Neapolitan AVPN → AVPN + STG certification
- Baguette Tradition → Décret Pain 1993 (French law defining "Baguette de Tradition Française")
- Pão Francês → ABNT NBR 16170
- Panettone → Italian regulation on the use of "panettone"
- Stollen → Protected geographical indication in Germany

### 5. `pairings` (maps to pairing recommendation cards)

```ts
pairings: {
  canonical: string[],  // The classic/traditional pairings (3-5 items)
  modern: string[],     // Creative or modern interpretations (3-5 items)
  regional: string[]    // Region-specific traditional pairings (3-5 items)
}
```

### 6. `experimentSuggestions` (maps to "Lab Experiments" section)

```ts
experimentSuggestions: string[]  // 3-5 actionable experiments the baker can try
```

**Format:** Each should be a short directive starting with a verb:
- "Swap 10% of bread flour for semolina to add grit and nutty flavor to the crust."
- "Add 5g of honey to the dough and compare the crust color and aroma at 230°C."
- "Try a 48h cold retard vs 24h and taste the difference in acidity and complexity."

### 7. `learnLinkTags` (maps to educational links section)

```ts
learnLinkTags: string[]  // 3-6 topic tags from the learn system
```

**Use tags from this approved list:**
`"hydration-101"`, `"gluten-network"`, `"maillard-reaction"`, `"fermentation-chemistry"`, `"sourdough-science"`, `"lamination-technique"`, `"enriched-dough"`, `"tang-zhong"`, `"autolyse"`, `"cold-retard"`, `"steam-injection"`, `"scoring-technique"`, `"poolish-biga"`, `"flour-rheology"`, `"yeast-biology"`, `"oven-spring"`, `"ph-acidity"`, `"windowpane-test"`, `"baker-math"`, `"salt-function"`

---

## Implementation Rules

1. **Do NOT remove any existing content.** Only add missing fields.
2. **Research accuracy matters.** Content must be factually correct — no hallucinated terms or fictitious references.
3. **Language:** All content must be in English (same as existing content in the definitions).
4. **Consistency:** `flavorProfile.textureNotes` must be consistent with what `technicalProfile.rheology` says (if present).
5. **Length:** Keep each string concise — max 2 sentences per string field. Arrays should have 3-5 items.
6. **Tone:** Professional but accessible — this is for serious home bakers and semi-pros.

---

## Example Output (for `california_style.ts`)

```ts
// ADD these fields to california_style definition object:

flavorProfile: {
  primaryFlavors: ["mild wheat", "honey sweetness", "savory umami from toppings", "light olive oil richness"],
  aromaProfile: ["fresh basil", "wood smoke", "toasted wheat", "caramelized honey"],
  textureNotes: ["crispy-tender bite", "thin yet pliable base", "slight chew without resistance"],
  pairingRecommendations: ["Goat cheese + fig + honey", "Arugula + prosciutto + shaved parmesan", "Smoked salmon + crème fraîche + capers", "Roasted beet + walnut + gorgonzola"],
  flavorEvolution: ["Fresh from oven: honey sweetness dominant", "30 min later: crust softens slightly, wheat notes emerge"]
},

culturalContext: "California-style pizza emerged from the California Cuisine movement of the 1980s, championed by Wolfgang Puck at Spago and Alice Waters at Chez Panisse. It represents the Californian ethos of farm-to-table cooking: prioritizing fresh, seasonal, and locally sourced ingredients over tradition.",

globalPresence: "California Pizza Kitchen (CPK) spread this style worldwide with over 200 locations globally. The genre now influences gourmet pizza menus from Tokyo to London, particularly the 'white pizza' and 'salad pizza' concepts.",

pairings: {
  canonical: ["Smoked salmon + dill cream", "BBQ chicken + cilantro + red onion", "Fig + gorgonzola + arugula"],
  modern: ["Duck confit + cherry gastrique", "Burrata + heirloom tomato + basil oil", "Truffle cream + mushroom + fontina"],
  regional: ["Crab + avocado + lemon aioli (Bay Area)", "Fish taco pizza (San Diego)"]
},

experimentSuggestions: [
  "Replace 50% of the sugar with wildflower honey and compare the aroma and crust color.",
  "Try a San Francisco sourdough culture as the leavener instead of commercial yeast for local terroir.",
  "Make a 'salad pizza': bake the crust plain with olive oil, then top with dressed arugula and shaved parmesan after baking.",
  "Test a 24h vs 72h cold retard and compare flavor complexity."
],

learnLinkTags: ["hydration-101", "cold-retard", "maillard-reaction", "fermentation-chemistry", "scoring-technique"]
```

---

## Acceptance Criteria
- [ ] Every style definition file has `flavorProfile` with all required sub-fields
- [ ] Every style definition has `culturalContext` (1-3 sentences)
- [ ] Every style definition has `globalPresence` (1-2 sentences)
- [ ] Styles with known regulatory frameworks have `regulatoryNotes`
- [ ] Every style definition has `pairings.canonical` (min 3 items)
- [ ] Every style definition has `experimentSuggestions` (min 3 items)
- [ ] Every style definition has `learnLinkTags` (min 3 items)
- [ ] All TypeScript compiles without errors (`npx tsc --noEmit`)
- [ ] No existing fields were modified or removed

---

## Notes
- The `StyleDetailPage` `mapDefinitionToStyle()` function already maps `flavorProfile` → `style.flavorProfile` — no component changes needed
- The "Sensory Intelligence" SectionCard in StyleDetailPage is already implemented and waiting for data
- The "Global Presence" SectionCard already renders `culturalContext` + `globalPresence` + `regulatoryNotes`
- Prioritize pizza styles first since they are the most-visited styles in the app
