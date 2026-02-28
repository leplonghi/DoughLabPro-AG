# Architecture Refactoring Plan

## Status
- [ ] Phase 1: Structural Cleanup (Modals)
- [ ] Phase 2: App.tsx Optimization (Hooks)
- [ ] Phase 3: UserProvider Decomposition

## Phase 1: Move Modals
Move the following files from `src/components/` to `src/components/modals/`:
- `AuthModal.tsx`
- `LevainModal.tsx`
- `OvenModal.tsx`
- `PaywallModal.tsx`
- `FlavorComponentProfileModal.tsx`

## Phase 2: App.tsx Hooks
Extract:
- `useOnboardingFlow`
- `useAppInitialization`

## Phase 3: UserProvider
Extract `subscription` logic.
