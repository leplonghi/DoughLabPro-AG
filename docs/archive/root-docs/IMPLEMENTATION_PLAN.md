# DoughLabPro-AG Implementation Plan (React/TypeScript Adaptation)

**Note:** The original request specified Flutter tools (Bloc, Dart, GetIt). This plan adapts those *architectural principles* to the current React/TypeScript technology stack to allow for "in-place" refactoring without a complete rewrite.

## 🏗️ Phase 1: Architectural Foundation & Clean Up
b**Goal:** Establish a clean separation of concerns using Feature-Based Architecture (Clean Architecture adapted for React).

### 1. Folder Structure Refactor
Create the following directory structure within `src/`:
```
src/
  features/
    calculator/
      domain/          # Entities, Pure Logic, Business Rules (No React)
        entities/      # e.g., DoughFormula.ts, Preferment.ts
        repositories/  # Abstract interfaces for data
        usecases/      # Pure functions/classes executing business logic
      data/            # Implementations of repositories
        repositories/  # implementation logic 
      presentation/    # React Components, Hooks, State
        components/
        hooks/
        pages/
        state/         # Context / Reducers / Stores
    inventory/
      ...
    learning/
      ...
  core/                # Shared utilities, generic entities, formatting
    di/                # Dependency Injection (Contexts or Inversify)
    error/             # Failure definitions
    theme/             # Theme definitions (Tailwind/CSS variables)
```

### 2. Dependencies & Core Libraries
- **Math Precision:** Install `decimal.js` (equivalent to Dart's `decimal`).
- **State Management:** Use `Context API + useReducer` or `Zustand` to mimic the "Bloc/Cubit" separation of state and UI.
- **Dependency Injection:** Use React Context containers for providing Repositories (`useRepository`).
- **Value Objects:** Use TypeScript `readonly` interfaces and helper classes to mimic `equatable`.
- **Localization:** Continue using `i18next`. Move hardcoded strings to `public/locales/`.

### 3. Action Items
- [ ] Install `decimal.js`.
- [ ] Create `src/features/calculator` structure.
- [ ] Create `src/core/theme` extension mechanism.

## 🧮 Phase 2: The "Lab" Engine (Core Logic)
**Goal:** Fix math and introduce scientific precision.

### 1. Domain Entities
- **DoughFormula**: A class/interface utilizing `Decimal` for all weights and percentages.
- **Preferment**: Abstract class or Discriminated Union for Poolish, Biga, Levain.
- **hydrator**: A pure TypeScript function `calculateFinalHydration` that takes a `DoughFormula` and returns the final hydration logic.

### 2. Testing Constraints
- Create `tests/core/logic.test.ts` (using Vitest/Jest).
- 100% coverage required for `calculateFinalHydration` before UI integration.
- Logic must handle floating point edge cases using `Decimal`.

## 🚀 Phase 3: State Management & Performance
**Goal:** Decouple logic from UI and fix rendering issues.

### 1. State Migration
- Move `CalculatorContext` logic into a cleaner State Manager (e.g., `CalculatorStore` using `Zustand` or a dedicated `useCalculatorBloc` hook with `useReducer`).
- Ensure logic is *outside* the component tree structure where possible (in `domain` usecases), invoked by the State Manager.

### 2. Inputs & Reactivity
- **DoughInputController**: A custom hook `useDoughInput` that handles string-to-decimal conversion, sanitization (commas/dots), and validation.
- **Bi-directional Locking**: Implement `useEffect` or store logic to update Water when Hydration changes, and vice-versa, avoiding infinite loops.

## 🎨 Phase 4: UX Professionalization
**Goal:** Kitchen usability.

### 1. Wake Lock
- Implement "Cooking Mode" using the Screen Wake Lock API (`navigator.wakeLock`) or a library like `react-use-wake-lock`.

### 2. Theme & Ergonomics
- Centralize colors in `tailwind.config.js` with semantic names (e.g., `primary-dough`, `surface-flour`).
- Create `SliderInput` component: A combined `TextField` + `Slider` for ergonomic adjustments.

---
**Status**: Awaiting Approval.
