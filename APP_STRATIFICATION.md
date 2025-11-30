# DoughLab Pro - Application Stratification

## 1. Project Overview
DoughLab Pro is a professional-grade dough calculator and baking companion application. It allows users to create precise dough formulas, manage their baking equipment (ovens), track sourdough starters (levains), and learn about baking science. It features a "Pro" tier with advanced features gated behind a paywall.

## 2. Technology Stack
- **Frontend Framework**: React (with TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend/BaaS**: Firebase (Auth, Firestore, Storage, Hosting)
- **State Management**: React Context API
- **Icons**: Custom SVG icons in `src/components/ui/Icons.tsx`

## 3. Directory Structure
- `src/`
  - `ai/`: AI assistant logic (`assistantClient.ts`).
  - `components/`: Reusable UI components.
    - `calculator/`: Calculator-specific components (`sections/`, `TechnicalMethodPanel`, etc.).
    - `layout/`: Layout components (`Navigation`, `Footer`, `UserMenu`).
    - `onboarding/`: Tour and onboarding modals.
    - `social/`: Social sharing functionality.
    - `ui/`: Generic UI elements (`Icons`, `SliderInput`, `ChoiceButton`).
  - `contexts/`: React Context providers (`AuthContext`, `UserProvider`, `CalculatorContext`, `ToastProvider`).
  - `data/`: Static data and content (`learn-content/`, `presets/`).
  - `helpers/`: Utility functions (`index.ts`).
  - `hooks/`: Custom React hooks.
  - `logic/`: Core business logic (`methodGenerator.ts`, `permissions.ts`).
  - `pages/`: Route components (`HomePage`, `CalculatorPage`, `MyLabPage`, `LearnPage`, `CommunityPage`).
  - `services/`: External service integrations (`exportService.ts`, `levainDataService.ts`).
  - `App.tsx`: Main application entry point.
  - `AppRouter.tsx`: Routing configuration.
  - `types.ts`: TypeScript definitions.

## 4. Core Architecture

### Entry Point
- **`src/main.tsx`**: Mounts the React app.
- **`src/App.tsx`**: Sets up the global providers (`AuthProvider`, `UserProvider`, `CalculatorProvider`, `ToastProvider`) and the `AppRouter`. Handles global initialization.

### Routing (`src/AppRouter.tsx`)
- Uses `react-router-dom`.
- Defines routes for:
  - `/`: Home (Calculator)
  - `/calculator`: Calculator (alias)
  - `/mylab/*`: User's lab (Ovens, Levains, Batches)
  - `/learn/*`: Educational content
  - `/community`: Community feed
  - `/assistant`: AI Assistant
  - `/settings`: User settings
- Implements route protection using `RequireAuth` and `RequirePro`.

### Authentication (`src/contexts/AuthContext.tsx`)
- Manages Firebase Auth state.
- Provides `user` object, `login`, `logout`, `register` functions.
- Handles guest login.

### User Data (`src/contexts/UserProvider.tsx`)
- Manages user profile and Firestore data.
- Syncs: `ovens`, `levains`, `batches`, `favorites`.
- Handles "Pro" status and paywall logic (`upgradeToPro`, `openPaywall`).

### Calculator Engine (`src/contexts/CalculatorContext.tsx`)
- Central logic for the dough calculator.
- Manages `DoughConfig` state (hydration, flour, salt, etc.).
- Triggers calculations and updates `DoughResult`.
- Handles unit conversion (Metric/Imperial/Volume).

## 5. Key Features & Components

### The Calculator
- **`CalculatorPage.tsx`**: Main view.
- **`IngredientsSection.tsx`**: Inputs for flour, water, salt, yeast, etc.
- **`FermentationSection.tsx`**: Choice of Direct, Poolish, Biga, Sourdough.
- **`StyleSection.tsx`**: Selection of dough styles (Neapolitan, NY, etc.).
- **`ResultsDisplay.tsx`**: Shows the calculated formula and technical method.
- **`TechnicalMethodPanel.tsx`**: Generates step-by-step instructions based on the formula.

### My Lab
- **`MyLabPage.tsx`**: Dashboard for user's assets.
- **`LevainDashboard.tsx`**: Sourdough starter management (feedings, tracking).
- **`OvenProfilePage.tsx`**: Oven configuration and thermal profiling.
- **`BatchHistory.tsx`**: Log of past bakes.

### Learn
- **`LearnPage.tsx`**: Grid of educational articles.
- **`LearnArticleRenderer.tsx`**: Renders markdown-like content for articles.
- Content stored in `src/data/learn-content/`.

### Community
- **`CommunityPage.tsx`**: Feed of user-shared batches.
- **`CommunityFeed.tsx`**: Displays posts.
- **`CommunityCreatePost.tsx`**: Interface to share a batch.

### Pro Features
- **`ProFeatureLock.tsx`**: UI component to gate features.
- **`permissions.ts`**: Logic defining which features are free vs. Pro.
- **`PaywallModal.tsx`**: Upsell modal for Pro subscription.

## 6. Styling & UI
- **Tailwind CSS**: Utility-first styling.
- **`index.css`**: Global styles, custom animations (`fade-in`, `slide-up`), and variables.
- **Design System**:
  - Colors: `lime` (primary), `slate` (neutral), `sky`/`blue` (accents).
  - Typography: Modern sans-serif (Inter/Roboto).
  - Components: Rounded corners (`rounded-2xl`), soft shadows, glassmorphism effects.

## 7. Data Models (`src/types.ts`)
- **`DoughConfig`**: The input state for the calculator.
- **`DoughResult`**: The calculated output (weights, percentages).
- **`User`**: User profile including `isPro` status.
- **`Levain`**: Sourdough starter model.
- **`Oven`**: Oven profile model.
- **`Batch`**: Saved recipe record.

## 8. AI Integration
- **`src/ai/assistantClient.ts`**: Interface with the AI backend (Gemini/OpenAI) for the "Dough Doctor" assistant.
- **`AssistantPage.tsx`**: Chat interface for the AI assistant.

## 9. Recent Changes (Session Context)
- **Auth Modal**: Refined to be minimal (white background, no logo).
- **Feature Gating**: `ProFeatureLock` now supports a `minimal` variant for cleaner UI in lists (used in Style and Fermentation selectors).
- **Hosting**: Configured for Firebase Hosting.
