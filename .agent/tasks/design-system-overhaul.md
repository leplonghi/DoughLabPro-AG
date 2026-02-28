# Design System Overhaul & Standardization

## Goal
Transform the application UI from "generic/ugly" to a Premium, Consistent, and Aesthetic experience. Establish a strict Design System to ensure future consistency.

## Phase 1: Foundation (Design Tokens)
- [ ] **Color Palette Refinement**:
    - Move away from harsh Lime/Emerald to a more sophisticated "Artisan Dough" palette (Warm Whites, Deep Greens, Terracotta Accents).
    - Define semantic colors: `primary`, `secondary`, `accent`, `surface`, `surface-soft`, `text-main`, `text-muted`.
- [ ] **Typography**:
    - Verify `Outfit` (Headings) and `Inter` (Body) usage.
    - Establish a Type Scale (H1-H6, Body, Caption, Small).
- [ ] **Global Styles (`index.css`)**:
    - Clean up the noisy background gradients.
    - Standardize Glassmorphism effects (make them subtle).

## Phase 2: Core Components (The "Standard")
- [ ] **Buttons**: Create a definitive `Button` component with variants (Primary, Secondary, Ghost, Outline).
- [ ] **Inputs**: Standardize text inputs, sliders, and selects.
- [ ] **Cards**: Unify `Card` styles (radius, shadow, hover effects).
- [ ] **Badges**: Standardize status indicators.

## Phase 3: Layout & Patterns
- [ ] **Page Layouts**: Standardize headers, footers, and content containers.
- [ ] **Modals/Drawers**: Consistent overlay styles.

## Phase 4: Implementation
- [ ] Apply the new standard to the main "Explore Styles" page (from the screenshot) as the pilot.
- [ ] Roll out to other pages.

## Principles
- **Less is More**: Reduce visual noise.
- **Content First**: Let the dough recipes shine.
- **Tactile Feel**: Use subtle shadows and interactions to make it feel like an app, not a website.
