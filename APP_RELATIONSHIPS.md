# DoughLabPro Application Relationships & Logic Map

This document provides a comprehensive analysis of the logical relationships, dependencies, and interconnections within the DoughLabPro application. It serves as a map for understanding how different system components interacting with one another.

## 1. Core State & Data Flow Architecture

The application relies on a React Context-based architecture where state flows downwards and updates bubble up via actions.

### **Central Nervous System: Contexts**
*   **`UserProvider` (`UserContext`)**: The root of user identity.
    *   **dependency**: `Firebase Auth` + `Firestore` (User Profile).
    *   **influences**: Access Control (`permissions.ts`), User Preferences (Units, Theme), Saved Data (MyLab).
    *   **connects to**: `CalculatorContext` (to load user defaults/presets), `AppRouter` (for gated routes).
*   **`DoughSessionContext`**: The "RAM" of the calculator.
    *   **function**: Manages the transient state of the *current* dough being designed.
    *   **persistence**: Auto-saves to `localStorage` (`doughlab_session_v2`) to prevent data loss on refresh.
    *   **structure**: Contains `dough` (ingredients), `schedule` (timing), `meta` (session ID), `settings` (buffers).
*   **`CalculatorContext`**: The logical orchestrator.
    *   **dependency**: `DoughSessionContext` (reads/writes raw values).
    *   **dependency**: `doughMath.ts` (the calculation engine).
    *   **outputs**: `DoughResult` (Final weights, Total yield, Validation errors).
    *   **triggers**: Re-runs calculations whenever `dough` state in Session changes.

## 2. The Calculator Logic Engine

The Calculator is the heart of the app. Its behavior is non-linear and highly interdependent.

### **Inputs & Transformers**
1.  **Style Selection (`stylesData.ts` / `registry.ts`)**
    *   **Trigger**: User selects a style (e.g., "Neapolitan").
    *   **Effect**:
        *   Loads `default values` (Hydration, Salt, Oil, Sugar) from `StyleDefinition`.
        *   Sets `fermentationTechnique` defaults (Direct vs Biga/Poolish).
        *   Sets `fermentationTime` targets.
    *   **Files**: `src/data/styles/registry.ts` -> `src/contexts/CalculatorContext.tsx`.

2.  **Calculation Modes (`doughMath.ts`)**
    The app supports three distinct calculation modes that change the formula direction:
    *   **`TARGET_POW` (Total Weight)**:
        *   *Input*: Total desired dough weight (e.g., 1000g).
        *   *Formula*: `Flour = TotalWeight / (1 + Hydration% + Salt% + ...)`
    *   **`TARGET_FLOUR` (Flour Base)**:
        *   *Input*: Fixed flour weight (e.g., 500g).
        *   *Formula*: `TotalWeight = Flour * (1 + Sum(Percentages))`
    *   **`TARGET_BALLS` (Pizzeria Mode)**:
        *   *Input*: `BallWeight` * `Count`.
        *   *Formula*: `TotalWeight = BallWeight * Count`. Then solves for Flour.

3.  **Preferment Logic (The "Levain" Factor)**
    *   **Condition**: If `yeastType == 'SOURDOUGH'` or `technique == 'BIGA'/'POOLISH'`.
    *   **Logic**:
        *   The math engine performs a **Decomposition**.
        *   It subtracts the flour and water contributed by the pre-ferment from the *Initial Mix*.
        *   *Example*: 20% Levain (100% hydration) means 10% of total flour and 10% water comes from the starter.
    *   **Interdependency**: Changing `Levain %` -> Instantly recalculates `Initial Flour` and `Initial Water`.

## 3. The Schedule Engine (`reverseTimeline.ts`)

The Scheduler is dynamic and responsive to the dough configuration. It is not just a static list of steps.

### **Influence Chain**
*   **`config.bakeType`** -> Determines `Bake` duration (Pizza = 30m vs Bread = 2h cool enabled).
*   **`config.recipeStyle`** -> Can force specific proof timings (e.g., Neapolitan = 6h proof vs Standard = 4h).
*   **`config.ambientTemperature`** -> *Logical connection exists but simple implementation currently.* Hot temp -> Shorter proof (hardcoded modifier).
*   **`config.hydration`** -> **Critical Branching**:
    *   IF `hydration >= 65%` -> Adds **1 Stretch & Fold**.
    *   IF `hydration >= 70%` -> Adds **Autolyse** step + **2 Stretch & Folds**.
    *   IF `hydration >= 75%` -> Adds **3 Stretch & Folds**.
    *   *Visual Result*: The Timeline UI expands/contracts based on water content.
*   **`config.fermentationTechnique`** -> Adds upstream steps efficiently:
    *   `POOLISH` -> Adds "Make Poolish" step (-14 hours from mix).
    *   `BIGA` -> Adds "Make Biga" step (-18 hours from mix).
    *   `SOURDOUGH` -> Adds "Feed Levain" step (Duration based on `Levain.idealFeedingIntervalHours`).

## 4. Feature Gating System (`permissions.ts`)

The app uses a robust Permission/Plan map that controls UI visibility and functionality.

*   **Mapping**: `FEATURE_PLAN_MAP` connects `FeatureKey` strings to arrays of `PlanId`s (['free', 'pro']).
*   **Logic**: `canUseFeature(userPlan, featureKey)` is called in components.
*   **Visual Impact**:
    *   **Calculator**: Advanced sliders (Sugar, Oil) may be locked/disabled.
    *   **MyLab**: "History Unlimited" checks restrict list view to recent 3 items for free users.
    *   **Styles**: Only "Pick 3" styles are unlockable for free users; Pro gets `styles.full_access`.

## 5. Levain & User Assets

*   **Levain Management**:
    *   Levains are stored in `User` profile or separate collection.
    *   **Relationship**: In `BatchDetailPage` or `Calculator`, selecting a specific Levain ID pulls its unique properties (feeding ratio, peak time) to adjust the `Schedule` precision.
*   **MyLab (Batches)**:
    *   **Creation**: A "Batch" is a snapshot of `DoughConfig` + `Timeline`.
    *   **Drafting**: `MyLabPage` creates explicit "Draft" batches from current Calculator state using `doughSession`.

## 6. Integration: Learn & Styles

*   **Content Injection**: `LearnArticlePage.tsx` acts as a CMS renderer.
*   **Contextual Linking**:
    *   The "Style" chosen in Calculator links to specific Learn articles.
    *   Learn articles link back to Calculator ("Apply this Science" CTA).
    *   *Example*: Reading about "Neapolitan" -> specific CTA to open Calculator in "Neapolitan Mode".

## 7. App Router & Navigation

*   **Structure**: `AppRouter` -> `lazyPages` (Code Splitting).
*   **Protection**: Wraps sensitive routes (`MyLab`, `Profile`) with `protect()` HOC which checks `UserContext`.
*   **Navigation**: Uses `window.location.hash` (HashRouter pattern) manually handled in some places, moving towards standard orchestration.

## Summary of Critical Paths
1.  **User Input** (Hydration Slider) -> **Session State** Update -> **Calculator Context** Recalc -> **DoughMath** (Ball Weight Check) -> **Schedule Engine** (Add Autolyse) -> **UI Render**.
2.  **User Plan** (Free) -> **Permissions** Check -> **Style Registry** (Filter Locked Styles) -> **Mode Selection** (Disable "Pro Mode").

This map highlights that `DoughConfig` is the single source of truth that drives Math, Schedule, Validation, and UI state simultaneously.
