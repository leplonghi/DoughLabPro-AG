# DoughLab Pro - Comprehensive Application Blueprint

## 1. Executive Summary
**DoughLab Pro** is a professional-grade, scientific baking companion designed for serious home bakers and professionals. It goes beyond simple recipe calculation to offer a complete ecosystem for managing the baking process, from formula creation to equipment profiling and sourdough starter management.

**Core Value Proposition:** "Precision Baking Meets Modern Science."
**Target Audience:** Pizza enthusiasts, sourdough bakers, and culinary professionals.
**Current Version:** Gold Standard (v1.0-beta).

---

## 2. User Experience (UX) & Interface (UI)

### Design Philosophy: "Scientific Premium"
The application uses a "Glassmorphism" aesthetic combined with a vibrant, nature-inspired color palette to convey precision, cleanliness, and organic beauty.

### Global Styles (`index.css`)
- **Color Palette:**
  - **Primary:** `Lime` (Freshness, organic).
  - **Neutral:** `Slate` (Technical, clean).
  - **Accents:** `Sky`/`Blue` (Water, air).
  - **Gradients:** Extensive use of subtle linear gradients for backgrounds and buttons.
- **Typography:** `Inter` (Google Fonts) - Clean, legible, modern sans-serif.
- **Visual Language:**
  - **Glassmorphism:** `backdrop-filter: blur(10px)` with semi-transparent white backgrounds (`rgba(255, 255, 255, 0.9)`).
  - **Rounded Corners:** `rounded-2xl` (16px) or `rounded-3xl` for a friendly, modern feel.
  - **Shadows:** Soft, diffused shadows (`shadow-lg`, `shadow-xl`) to create depth.
  - **Animations:**
    - `fadeIn`, `fadeInUp`, `scaleIn` for page transitions.
    - `float` for hero images.
    - `shimmer` for loading states.

### Key UI Patterns
- **Sticky Layouts:** The Calculator page features a sticky right column for results, ensuring the formula is always visible while editing inputs.
- **Cards:** Content is organized in "Cards" with hover effects (`transform: translateY(-8px)`).
- **Modals:** Used for critical actions (Auth, Levain creation, Oven setup) to focus user attention.
- **Pro Gating:** "Blurred" content with lock icons (`.pro-locked`) to entice upgrades without hiding the existence of features.

---

## 3. Application Architecture

### Technology Stack
- **Frontend:** React 19 (TypeScript)
- **Build System:** Vite
- **Styling:** Tailwind CSS
- **Backend:** Firebase (Auth, Firestore, Storage, Hosting)
- **State Management:** React Context API
- **AI:** Google Gemini / OpenAI Integration

### Core Providers (`src/contexts/`)
1.  **`AuthProvider`**: Manages Firebase Authentication state (Login, Logout, Guest access).
2.  **`UserProvider`**: The central data store for user-specific data.
    - **Entities:** `User`, `Oven[]`, `Levain[]`, `Batch[]`, `Goal[]`, `TestSeries[]`, `Favorites[]`.
    - **Sync:** Real-time listeners (`onSnapshot`) to Firestore.
    - **Logic:** Handles Pro entitlements (`grantProAccess`, `openPaywall`).
3.  **`CalculatorContext`**: Manages the ephemeral state of the dough calculator.
    - **State:** `DoughConfig` (Inputs), `DoughResult` (Outputs), `errors`.
    - **Logic:** Calls `calculateDoughUniversal` for math.
4.  **`ToastProvider`**: Global notification system.

### Routing (`AppRouter.tsx`)
- **Lazy Loading:** All major pages are lazy-loaded to optimize bundle size.
- **Route Guards:**
  - `<RequireAuth>`: Redirects to login if not authenticated.
  - `<RequirePro>`: Blocks access to Pro-only routes.

---

## 4. Detailed Page Breakdown

### A. The Calculator (`/calculator`)
*The heart of the application.*
- **Layout:** Two-column responsive (Input Left, Results Right).
- **Components:**
  - `IngredientsSection`: Sliders/Inputs for Flour, Water, Salt, etc.
  - `FermentationSection`: Selectors for Direct, Poolish, Biga, Sourdough.
  - `StyleSection`: Dropdown to load presets from `stylesData.ts`.
  - `ResultsDisplay`: The "Receipt" showing final weights and Baker's Percentages.
  - `TechnicalMethodPanel`: Dynamic step-by-step instructions based on the calculated formula.
- **Correlations:** Reads `levains` from `UserProvider` to populate the "User Levain" dropdown.

### B. My Lab (`/mylab`)
*The user's command center.*
- **Dashboard (`MyLabPage.tsx`):**
  - **Quick Actions:** New Bake, Add Levain.
  - **Widgets:** Active Goals, Recent Bakes, Levain Health Status.
- **Sub-Modules:**
  - **Levain Dashboard (`/mylab/levain`):** Track starter health, log feedings, visualize hydration.
  - **Batches (`/mylab/bakes`):** History of all baked recipes.
  - **Ovens (`/mylab/ovens`):** Manage oven profiles (Max temp, stone/steel type).
  - **Consistency (`/mylab/consistency`):** *[Pro]* Track variables across multiple bakes.
  - **Ingredients (`/mylab/flours`):** *[Pro]* Custom flour library.

### C. Learn (`/learn`)
*Educational content hub.*
- **Structure:** Grid of categories (Fundamentals, Ingredients, Methods, etc.).
- **Article Viewer (`LearnArticlePage.tsx`):** Renders Markdown content with custom styling (`.prose-editorial`).
- **Content Source:** `src/data/learn-content/*.ts`.
- **Pro Content:** Specific advanced articles are gated.

### D. Styles Library (`/styles`)
*Encyclopedia of dough.*
- **List View:** Grid of style cards with images and tags.
- **Detail View (`StyleDetailPage.tsx`):**
  - **Hero:** High-res image and description.
  - **Specs:** Hydration range, fermentation time, difficulty.
  - **History:** Cultural context and origins.
  - **Action:** "Load into Calculator" button.
- **Data Source:** `src/data/stylesData.ts`.

### E. Community (`/community`)
*Social sharing.*
- **Feed:** Stream of `CommunityBatch` cards.
- **Interactions:** View details, "Clone" recipe to local calculator.

### F. Tools (`/tools`)
*Advanced utilities.*
- **Oven Profiler:** Thermal analysis tool.
- **DoughBot:** AI Chat interface (`/tools/doughbot`).
- **Unit Converters:** Simple utility helpers.

---

## 5. Data Models & State Management

### Key Entities (`types.ts`)

| Entity | Description | Key Fields |
| :--- | :--- | :--- |
| **User** | User Profile | `uid`, `email`, `plan` ('free', 'lab_pro'), `isPro` |
| **DoughConfig** | Calculator Input | `hydration`, `flourId`, `fermentationTechnique`, `yeastType` |
| **DoughResult** | Calculator Output | `totalFlour`, `totalWater`, `finalDough` (weights) |
| **Levain** | Sourdough Starter | `id`, `hydration`, `feedingHistory[]`, `status` |
| **Batch** | Saved Recipe | `id`, `doughConfig`, `doughResult`, `notes`, `rating` |
| **Oven** | Equipment Profile | `type`, `maxTemperature`, `hasStone` |
| **Style** | Static Definition | `id`, `technicalProfile`, `history`, `origin` |

### Data Flow
1.  **User Action:** User moves a slider in `CalculatorPage`.
2.  **State Update:** `handleConfigChange` in `CalculatorContext` updates `config`.
3.  **Calculation:** `calculateDoughUniversal` runs immediately (memoized).
4.  **Result:** `results` state is updated.
5.  **UI Update:** `ResultsDisplay` re-renders with new weights.

---

## 6. Monetization & Entitlements

### Plans
- **Free:** Basic calculator, limited styles, basic MyLab.
- **Calculator Unlock:** Full calculator features (all styles, advanced settings).
- **Lab Pro:** Full access (AI, Unlimited Levains, Consistency Tests, Pro Content).

### Implementation
- **`permissions.ts`:** Maps `FeatureKey` (e.g., `tools.doughbot`) to allowed `PlanId`s.
- **`ProFeatureLock.tsx`:** Wrapper component. If user lacks permission, it shows a blur + lock overlay.
- **`RequirePro.tsx`:** Route wrapper that redirects non-Pro users.

---

## 7. Content Strategy

### Styles Library (`stylesData.ts`)
Currently contains ~10-15 high-quality definitions including:
- **Pizza:** Neapolitan, NY Style, Roman Teglia, Detroit, Sicilian.
- **Bread:** Ciabatta, Baguette, Pain de Campagne, Pane Pugliese.
- **Enriched:** Brioche, Vienna Bread.

### Educational Modules (`src/data/learn-content/`)
Extensive library covering:
- **Science:** Gluten network, Fermentation, Enzymes.
- **Ingredients:** Flours, Yeasts, Fats, Sugars.
- **Techniques:** Autolyse, Folding, Shaping, Scoring.
- **Equipment:** Ovens, Steaming.

---

## 8. Future Roadmap & Known Issues
- **AI Integration:** Deepening the "Dough Doctor" capabilities.
- **Community:** Adding comments and likes.
- **Mobile App:** Potential React Native port.
- **Known Issue:** Complex circular dependencies in some legacy context files (mostly resolved).
