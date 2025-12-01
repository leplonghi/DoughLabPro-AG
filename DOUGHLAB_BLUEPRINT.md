# DoughLab Pro - Complete Application Blueprint

## 1. Project Overview
**Name:** DoughLab Pro
**Description:** A professional-grade dough calculator and baking companion application. It allows users to create precise dough formulas, manage baking equipment (ovens), track sourdough starters (levains), and learn about baking science. It features a "Pro" tier with advanced features gated behind a paywall.
**Current Status:** "Gold" Standard UI/UX. Active development.

## 2. Technology Stack
- **Frontend Framework:** React 19 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Utility-first)
- **Backend/BaaS:** Firebase (Auth, Firestore, Storage, Hosting)
- **State Management:** React Context API
- **Routing:** Custom `AppRouter` with `react-router-dom` and lazy loading.
- **Icons:** Custom SVG icons (`src/components/ui/Icons.tsx`) & Lucide React.
- **AI Integration:** Google Gemini / OpenAI (via `src/ai/assistantClient.ts`).

## 3. Directory Structure & Architecture
### Key Directories
- `src/ai/`: AI assistant logic.
- `src/components/`: Reusable UI components (Calculator, Layout, UI, Onboarding).
- `src/contexts/`: React Context providers (`AuthContext`, `UserProvider`, `CalculatorContext`, `ToastProvider`, `LearnContext`).
- `src/data/`: Static data (Learn content, Presets, Styles Data).
- `src/hooks/`: Custom React hooks.
- `src/logic/`: Core business logic (`methodGenerator.ts`, `permissions.ts`).
- `src/pages/`: Route components.
- `src/services/`: External service integrations (`levainDataService.ts`, `exportService.ts`).
- `src/types.ts`: Central TypeScript definitions.

### Core Architecture
- **Entry Point:** `src/main.tsx` mounts `App.tsx`.
- **Global Providers:** `AuthProvider`, `UserProvider`, `CalculatorProvider`, `ToastProvider`.
- **Routing:** `src/AppRouter.tsx` handles all routes, protection (`RequireAuth`, `RequirePro`), and lazy loading.

## 4. Core Features

### A. The Calculator (`/calculator`)
The heart of the application.
- **Inputs:**
  - **Ingredients:** Flour, Water, Salt, Yeast, Fat, Sugar, etc.
  - **Fermentation:** Direct, Poolish, Biga, Sourdough.
  - **Style:** Selection from `stylesData.ts` (Neapolitan, NY, etc.).
  - **Settings:** Pizza count, ball weight, ambient temp.
- **Outputs:**
  - **Formula:** Precise weights and percentages.
  - **Technical Method:** Step-by-step instructions (`TechnicalMethodPanel.tsx`).
- **Logic:** `src/contexts/CalculatorContext.tsx` manages `DoughConfig` and calculates `DoughResult`.

### B. My Lab (`/mylab`)
User's personal dashboard.
- **Levain Dashboard:** Track sourdough starters, feeding history, health status.
- **Oven Profiles:** Manage ovens, thermal profiling.
- **Batch History:** Log of past bakes with ratings and notes.
- **Consistency Tests:** Pro feature to track bake consistency.
- **Ingredients:** Manage custom flours and ingredients.

### C. Learn (`/learn`)
Educational content system.
- **Structure:** Categories (Fundamentals, Methods, Ingredients, etc.).
- **Content:** Markdown-based articles stored in `src/data/learn-content/`.
- **Renderer:** `LearnArticleRenderer.tsx`.
- **Pro Content:** Some articles are gated for Pro users.

### D. Styles Library (`/styles`)
Comprehensive database of dough styles.
- **Data Source:** `src/data/stylesData.ts`.
- **Features:** Detailed specs, history, technical profiles, regional variations.
- **Integration:** Styles can be loaded directly into the Calculator.

### E. Community (`/community`)
Social features.
- **Feed:** Share bakes (Batches).
- **Interaction:** Likes, comments (planned).
- **Inspiration:** Clone community recipes to Calculator.

### F. Tools (`/tools`)
Advanced utilities.
- **Oven Profiler:** Thermal analysis of ovens.
- **DoughBot:** AI baking assistant.
- **Unit Converters:** Utility tools.

## 5. Data Models (`src/types.ts`)
- **`DoughConfig`:** Input state for calculator (hydration, flourId, fermentationTechnique, etc.).
- **`DoughResult`:** Calculated output (weights, percentages).
- **`User`:** Profile, `isPro`, `plan` ('free', 'calculator_unlock', 'lab_pro').
- **`Levain`:** Sourdough starter model (hydration, feedingHistory).
- **`Oven`:** Oven profile (type, maxTemp, stone/steel).
- **`Batch`:** Saved recipe record.
- **`DoughStyleDefinition`:** Schema for dough styles (technicalProfile, history, origin).

## 6. Monetization & Permissions
- **Plans:**
  - `free`: Basic access.
  - `calculator_unlock`: Unlocks all calculator features.
  - `lab_pro`: Full access (MyLab, AI, Advanced Tools).
- **Gating:**
  - `ProFeatureLock.tsx`: UI component to block features.
  - `permissions.ts`: Maps `FeatureKey` to allowed `PlanId`s.
  - `RequirePro`: Route guard.

## 7. Design System ("Gold" Standard)
- **Aesthetics:** Premium, modern, "Glassmorphism", vibrant colors.
- **Colors:** Primary `lime`, Neutrals `slate`, Accents `sky`/`blue`.
- **Typography:** Inter/Roboto.
- **Components:** Rounded corners (`rounded-2xl`), soft shadows, smooth transitions.
- **Tailwind:** Extensive use of utility classes.

## 8. Recent Context & Known State
- **Calculator Layout:** Recently updated to a sticky layout (Results on right).
- **Styles Overhaul:** In progress. Updating all styles to "Gold" standard with expanded metadata.
- **Pro Access:** Fixed bugs related to false-negative paywalls.
- **MyLab Refactor:** UI refined for compactness and better mobile experience.
