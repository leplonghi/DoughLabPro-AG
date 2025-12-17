# Ingredient Sections Guide

## Overview
DoughLabPro has two distinct ingredient sections that serve different purposes. Understanding the difference is crucial for proper recipe formulation.

---

## 🧪 Dough Composition (Advanced Ingredients)

**Location:** Step 3 - Ingredients Section  
**Purpose:** Ingredients that are **mixed INTO the dough** during preparation  
**Feature Key:** `calculator.advanced_ingredients`

### What Goes Here?
Ingredients that become part of the dough matrix itself:

#### For Pizzas (PIZZAS)
- Olive oil
- Sugar
- Malt powder
- Dried herbs (mixed in)
- Garlic powder (in dough)

#### For Breads (BREADS_SAVORY)
- Seeds (sesame, poppy, sunflower)
- Nuts (walnuts, pecans)
- Dried fruits (raisins, cranberries)
- Cheese (mixed into dough, like cheddar bread)
- Herbs and spices (rosemary, oregano)

#### For Pastries (SWEETS_PASTRY)
- Chocolate chips
- Cocoa powder
- Vanilla extract
- Butter (enrichment)
- Eggs
- Cream cheese (in dough)
- Nuts (in cookie dough)

### Technical Impact
These ingredients affect:
- Dough hydration (if they contain moisture)
- Gluten development
- Fermentation speed
- Final dough weight
- Baker's percentages

---

## 🍕 Assembly & Toppings (Assembly Lab)

**Location:** Step 6 - After Environment  
**Purpose:** Components added **ON or INSIDE** the final product  
**No Lock:** Always available

### What Goes Here?
Ingredients applied after dough is shaped:

#### For Pizzas (PIZZAS)
- Tomato sauce
- Mozzarella cheese
- Pepperoni
- Vegetables (on top)
- Finishing oil (drizzle)

#### For Breads (BREADS_SAVORY)
- Ricotta filling (for calzones)
- Cheese topping
- Herb butter (brushed on)
- Garlic spread
- Stuffing ingredients

#### For Pastries (SWEETS_PASTRY)
- Cream filling
- Chocolate ganache (topping)
- Glaze
- Frosting
- Fruit preserves (filling)

### Technical Impact
These ingredients affect:
- Baking temperature behavior
- Moisture release during baking
- Browning patterns
- Final product weight (not dough weight)

---

## Key Differences

| Aspect | Dough Composition | Assembly & Toppings |
|--------|------------------|---------------------|
| **When Added** | During mixing | After shaping |
| **Affects Dough** | Yes | No |
| **Baker's %** | Included | Not included |
| **Hydration Impact** | Yes | No |
| **Fermentation** | Can affect | No effect |
| **Pro Feature** | Yes (locked) | No (free) |

---

## Examples by Product Type

### Chocolate Chip Cookie
- **Dough Composition:** Butter, eggs, vanilla, chocolate chips (mixed in)
- **Assembly:** None (or chocolate drizzle on top)

### Calzone
- **Dough Composition:** Olive oil, sugar (in dough)
- **Assembly:** Ricotta filling, mozzarella, ham, tomato sauce

### Pepperoni Pizza
- **Dough Composition:** Olive oil, sugar (in dough)
- **Assembly:** Tomato sauce, mozzarella, pepperoni

### Cinnamon Raisin Bread
- **Dough Composition:** Raisins, cinnamon (in dough)
- **Assembly:** Butter glaze (brushed on top)

---

## UI Implementation

### Context-Aware Labels
The UI automatically adjusts based on `bakeType`:

```typescript
// Dough Composition
PIZZAS: "Core ingredients that form the pizza dough base"
BREADS_SAVORY: "Ingredients incorporated into the bread dough"
SWEETS_PASTRY: "Mix-ins and enrichments for your pastry dough"

// Assembly & Toppings
PIZZAS: "Sauces, cheeses, and toppings applied to the pizza"
BREADS_SAVORY: "Fillings and toppings for your bread"
SWEETS_PASTRY: "Fillings, glazes, and finishing touches"
```

### Visual Examples
Each section shows contextual examples:

**Dough Composition:**
- Pizza: "e.g., Olive oil, sugar, malt"
- Bread: "e.g., Seeds, nuts, dried fruits"
- Pastry: "e.g., Chocolate, butter, eggs, vanilla"

**Assembly & Toppings:**
- Pizza: "e.g., Tomato sauce, mozzarella, pepperoni"
- Bread: "e.g., Ricotta filling, herbs, cheese"
- Pastry: "e.g., Chocolate chips, cream filling, glaze"

---

## Translation Keys

### Dough Composition
- `calculator.dough_composition`
- `calculator.dough_composition_desc`
- `calculator.dough_composition_desc_pizza`
- `calculator.dough_composition_desc_bread`
- `calculator.dough_composition_desc_pastry`
- `calculator.advanced_ingredients_example_pizza`
- `calculator.advanced_ingredients_example_bread`
- `calculator.advanced_ingredients_example_pastry`

### Assembly & Toppings
- `calculator.assembly_toppings`
- `calculator.assembly_toppings_desc`
- `calculator.assembly_toppings_desc_pizza`
- `calculator.assembly_toppings_desc_bread`
- `calculator.assembly_toppings_desc_pastry`
- `calculator.assembly_lab_example_pizza`
- `calculator.assembly_lab_example_bread`
- `calculator.assembly_lab_example_pastry`

---

## Developer Notes

### Props Required
```typescript
// AssemblySection now requires bakeType
<AssemblySection
  style={assemblyStyle}
  selectedIncrements={config.assemblyIncrements || []}
  onUpdateIncrements={(incs) => onConfigChange({ assemblyIncrements: incs })}
  bakingTempC={config.bakingTempC}
  bakeType={config.bakeType} // NEW: Required for context-aware labels
/>
```

### Data Structure
- **Dough Composition:** Stored in `config.ingredients[]` (IngredientConfig[])
- **Assembly & Toppings:** Stored in `config.assemblyIncrements[]` (Increment[] | UserIngredient[])

These are separate arrays and do not conflict.
