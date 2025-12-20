# Task List: DoughLabPro Refactor

## Phase 1: Foundation (Current)
- [ ] Install `decimal.js` for precision math.
- [ ] Create folder structure: `src/features/calculator/{domain,data,presentation}`.
- [ ] Create `AppStrings` or update `i18n` structure for centralization.
- [ ] Verify build passes (`npm run build` / `flutter analyze` equivalent).

## Phase 2: Core Logic (The Lab Engine)
- [ ] Create `DoughFormula` entity in `src/features/calculator/domain/entities`.
  - [ ] Use `Decimal` for all calculations.
- [ ] Create `Preferment` hierarchy (Poolish, Biga, Levain).
- [ ] Implement `calculateFinalHydration` pure function.
- [ ] Write Unit Tests for `calculateFinalHydration` (100% coverage).

## Phase 3: State & Performance
- [ ] Refactor `CalculatorContext` to `CalculatorStore` (Separation of Concerns).
- [ ] Implement `DoughInputController` for safe decimal input.
- [ ] Implement bi-directional hydration locking (Water <-> %).

## Phase 4: UX
- [ ] Implement Wake Lock (Cooking Mode).
- [ ] Refactor Theme to use centralized variables/Tailwind extension.
- [ ] Create `SliderTextField` component.
- [ ] Final Build & Deployment Check.
