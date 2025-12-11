# Architecture Analysis: Unified Ingredient Engine (Scalable & Variable)

## Current State Analysis
The current `DoughLabPro` architecture uses a **Hybrid Model**:
1.  **Core Parameters:** Hardcoded properties (`hydration`, `salt`, `sugar`, `oil`) drive the main logic (`doughMath.ts`).
2.  **Ingredient Overrides:** An `ingredients` array exists but acts primarily as a "Topping/Extra" list for Pizza/Bread, or a "Full Replacement" for Pastry.
3.  **Bottleneck:** Adding new styles (e.g., enriched doughs like Brioche or Panettone) requires modifying code in `CalculatorForm`, `IngredientsSection`, `doughMath`, and `doughConversion` because the "Core Parameters" don't capture the complexity (e.g., Eggs contribute to both Hydration and Fat).

## Proposed Architecture: The "Reactive Ingredient Engine"

To achieve maximum scalability, variability, and speed, we must shift from **Parameter-Driven** to **Ingredient-Driven** logic.

### 1. The Unified Ingredient Model
Everything is an ingredient. There are no "special" fields.
- **Water** is an ingredient.
- **Salt** is an ingredient.
- **Sourdough Starter** is an ingredient (composed of Flour + Water).

**New Data Structure:**
```typescript
interface IngredientDef {
  id: string;
  name: string;
  category: 'base' | 'liquid' | 'fat' | 'sugar' | 'leaven' | 'additive';
  bakerPercentage: number; // Rel to Total Flour
  hydrationContribution: number; // 0.0 to 1.0 (e.g. Milk = 0.87, Egg = 0.74, Butter = 0.15)
  isFlour: boolean; // Contributes to Total Flour?
}

interface RecipeConfig {
  ingredients: IngredientDef[];
  // No explicit 'hydration' field. Hydration is COMPUTED.
}
```

### 2. The Calculation Engine (Pure Function)
The math becomes a simple iteration, making it infinitely scalable.

**Logic:**
1.  **Total Flour:** Sum of all `ingredients.filter(i => i.isFlour)`.
2.  **Total Hydration (Output):** Sum of `(ing.weight * ing.hydrationContribution)`.
3.  **Target Hydration (Input Variable):**
    If the user sets a "Target Hydration" slider (e.g., 70%), the engine automatically solves for **Water**:
    `Water % = Target % - Sum(Other Ingredients * Contribution)`

### 3. Dynamic UI Generation
The UI (`IngredientsSection`) no longer hardcodes "Sugar Slider" or "Salt Slider".
Instead, it renders controls based on the **Recipe Blueprint**.

- **Blueprint:** "This recipe allows varying Sugar (0-20%) and Butter (10-50%)".
- **Generator:** Loops through Blueprint -> Renders Sliders -> Updates `ingredients` array.

### 4. Benefits
- **Speed:** Adding a "Pumpkin Puree" bread requires ZERO code changes. Just add the ingredient JSON with `hydrationContribution: 0.9`. The engine auto-adjusts water.
- **Scalability:** Supports 1 ingredient or 100.
- **Variability:** We can introduce "Meta-Variables" (e.g., "Richness") that adjust multiple ingredients (Butter + Egg) simultaneously via a simple mapping function.

## Implementation Roadmap

### Phase 1: Data Enrichment (JSON)
Update `flours-constants.ts` and Style definitions to include `hydrationContribution` and strictly defined roles.

### Phase 2: Refactor `doughMath.ts`
Rewrite the core function to calculate strictly from the `ingredients` array, ignoring legacy `config.hydration` unless it's treating it as the "Water Ingredient".

### Phase 3: Dynamic Form Builder
Refactor `IngredientsSection.tsx` to fully utilize the "Dynamic Slider" pattern we just implemented for Pastry, applying it to ALL styles (Pizza, Bread, etc.).
