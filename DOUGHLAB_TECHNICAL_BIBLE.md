# DoughLab Pro - Technical Bible & Master Specification

**Version:** 1.0 (Gold Standard)
**Last Updated:** December 2025
**Status:** Active Development

---

## 1. System Architecture

### 1.1 Technology Stack
- **Frontend Core:** React 19, TypeScript 5.3
- **Build Tool:** Vite 5.2
- **Styling:** Tailwind CSS 3.4
- **Backend / BaaS:** Firebase v10 (Auth, Firestore, Storage, Hosting)
- **State Management:** React Context API (Distributed Providers)
- **Routing:** React Router DOM v6 (Lazy Loading)
- **Icons:** Custom SVG + Lucide React
- **AI:** Google Gemini / OpenAI Integration

### 1.2 Directory Structure
```
src/
├── ai/                 # AI Assistant Logic (assistantClient.ts)
├── components/         # UI Components
│   ├── calculator/     # Calculator-specific (CalculatorForm, ResultsDisplay)
│   ├── layout/         # Layouts (Navigation, Footer)
│   ├── mylab/          # Dashboard widgets (LabHealthIndexCard)
│   ├── ui/             # Generic UI (Buttons, Modals, Icons)
│   └── ...
├── contexts/           # React Context Providers
│   ├── AuthContext.tsx
│   ├── UserProvider.tsx
│   ├── CalculatorContext.tsx
│   └── ...
├── data/               # Static Data
│   ├── stylesData.ts   # The Master Styles Database
│   └── learn-content/  # Markdown content for Learn pages
├── hooks/              # Custom Hooks (useBatchManager, useDebounce)
├── logic/              # Core Business Logic (Pure Functions)
│   ├── doughMath.ts    # The Calculation Engine
│   ├── normalization.ts# Data Integrity Rules
│   └── ...
├── pages/              # Route Components (Lazy Loaded)
├── services/           # External Services (Analytics, Export)
├── types.ts            # Central TypeScript Definitions
└── AppRouter.tsx       # Routing Configuration
```

### 1.3 Routing Map (`AppRouter.tsx`)
| Path | Component | Protection | Description |
| :--- | :--- | :--- | :--- |
| `/` | `MyLabPage` | Auth | Default redirect to Dashboard |
| `/calculator` | `CalculatorPage` | Auth | Main Calculator Tool |
| `/mylab` | `MyLabPage` | Auth | User Dashboard |
| `/mylab/levain` | `LevainListPage` | Auth | Sourdough Starter Manager |
| `/mylab/bakes` | `MyLabBatchesPage` | Auth | Bake History |
| `/mylab/consistency` | `ConsistencyListPage` | **Pro** | Consistency Testing Tool |
| `/learn` | `LearnPage` | Auth | Educational Hub |
| `/styles` | `DoughStylesPage` | Auth | Style Library Browser |
| `/styles/detail/:id` | `StyleDetailPage` | Auth | Style Details |
| `/community` | `CommunityPage` | Auth | Social Feed |

---

## 2. Core Logic Engine

### 2.1 The Math (`src/logic/doughMath.ts`)
The `calculateDoughUniversal` function is the heart of the app. It calculates exact weights based on user configuration.

**Algorithm Steps:**
1.  **Normalize Config:** Ensure valid `fermentationTechnique` and `yeastType`.
2.  **Calculate Total Target Weight:**
    `TotalWeight = NumPizzas * BallWeight * Scale`
3.  **Determine Total Flour:**
    - If `CalculationMode` is 'mass': `Flour = TotalWeight * (100 / SumOfPercentages)`
    - If `CalculationMode` is 'flour': `Flour = InputFlour`
4.  **Calculate Ingredient Weights:**
    `Weight = TotalFlour * (BakerPercentage / 100)`
5.  **Pre-ferment Decomposition (Poolish/Biga/Sourdough):**
    - **Sourdough:**
      - `StarterWeight = TotalYeastAmount`
      - `StarterFlour = StarterWeight / (1 + (LevainHydration/100))`
      - `StarterWater = StarterWeight - StarterFlour`
      - Subtract `StarterFlour` and `StarterWater` from Final Dough.
    - **Poolish/Biga:**
      - `PrefermentFlour = TotalFlour * PrefermentPercentage`
      - `PrefermentWater = PrefermentFlour * Hydration` (100% for Poolish, 50% for Biga)
      - Subtract from Final Dough.

### 2.2 Normalization Rules (`src/logic/normalization.ts`)
Ensures data integrity when switching styles or techniques.
- **Rule 1:** If `FermentationTechnique` is `SOURDOUGH`, `YeastType` MUST be `SOURDOUGH_STARTER` or `USER_LEVAIN`.
- **Rule 2:** If `FermentationTechnique` is `DIRECT`, `YeastType` cannot be `SOURDOUGH`.
- **Rule 3:** Cookie/Pastry styles force `CHEMICAL` or `NO_FERMENT`.

---

## 3. Data Models (`src/types.ts`)

### 3.1 DoughConfig (The Input)
```typescript
interface DoughConfig {
  // Core Settings
  bakeType: BakeType;             // PIZZAS, BREADS, PASTRIES
  recipeStyle: RecipeStyle;       // NEAPOLITAN, NY_STYLE, etc.
  stylePresetId?: string;         // ID of the loaded preset
  
  // Quantities
  numPizzas: number;
  doughBallWeight: number;
  scale: number;                  // Multiplier (1.0 = standard)
  
  // Percentages (Baker's %)
  hydration: number;
  salt: number;
  oil: number;
  sugar?: number;
  yeastPercentage: number;
  
  // Fermentation
  fermentationTechnique: FermentationTechnique; // DIRECT, POOLISH, BIGA, SOURDOUGH
  yeastType: YeastType;           // IDY, ADY, FRESH, SOURDOUGH_STARTER
  prefermentFlourPercentage: number; // % of total flour in preferment
  
  // Metadata
  notes: string;
  flourId: string;                // Link to FlourDefinition
  levainId?: string;              // Link to User Levain
}
```

### 3.2 DoughResult (The Output)
```typescript
interface DoughResult {
  totalFlour: number;
  totalWater: number;
  totalSalt: number;
  totalYeast: number;
  totalDough: number;
  
  // Sub-components
  preferment?: {
    flour: number;
    water: number;
    yeast: number;
  };
  finalDough?: {
    flour: number;
    water: number;
    salt: number;
    yeast: number;
    // ... other ingredients
  };
  
  // Detailed breakdown
  ingredientWeights: Array<{
    id: string;
    name: string;
    weight: number;
    role: string;
  }>;
}
```

### 3.3 User Profile
```typescript
interface User {
  uid: string;
  email: string;
  plan: 'free' | 'calculator_unlock' | 'lab_pro';
  isPro: boolean;
  ovens: Oven[];
  levains: Levain[];
  batches: Batch[]; // History
}
```

---

## 4. Design System (Gold Standard)

### 4.1 Aesthetics
- **Theme:** "Scientific Premium"
- **Colors:**
  - Primary: `Lime-500` (#84cc16) to `Lime-600`
  - Neutral: `Slate-50` to `Slate-900`
  - Accent: `Sky-500`, `Orange-500` (for Levain), `Blue-500` (for Water)
- **Typography:** `Inter` (Sans-serif)

### 4.2 Common Patterns (Tailwind)
- **Card:** `bg-white rounded-2xl shadow-lg ring-1 ring-slate-200/50 p-6`
- **Primary Button:** `bg-lime-500 text-white font-bold rounded-xl shadow-lg shadow-lime-200 hover:bg-lime-600 transition-all`
- **Input:** `bg-slate-50 border-slate-300 rounded-lg focus:ring-lime-500 focus:border-lime-500`
- **Glass Effect:** `backdrop-blur-md bg-white/90`

---

## 5. Feature Specifications

### 5.1 The Calculator
- **Sticky Layout:** Right column (`ResultsDisplay`) stays fixed on desktop.
- **Dynamic Inputs:** Sliders update `config` in real-time.
- **Validation:** `CalculatorContext` validates ranges (e.g., Hydration 0-120%) and sets `errors`.
- **Pro Features:**
  - Environmental Insights (Temp/Humidity) -> **Locked**
  - Save Custom Preset -> **Locked**
  - Notes -> **Locked**

### 5.2 My Lab Dashboard
- **Quick Actions:** Grid of buttons for common tasks (New Bake, Feed Levain).
- **Status Cards:**
  - **Levain:** Shows active starter status (Active/Hungry).
  - **Recent Activity:** Last bake summary.
- **Lab Health Index:** *[Pro]* Composite score of baking frequency and success rate.

### 5.3 Styles Library
- **Data Source:** `src/data/stylesData.ts`
- **Schema:**
  - `technicalProfile`: { hydration: [min, max], fermentation: string }
  - `history`: Text block
  - `origin`: { country, region, period }
- **Integration:** Clicking "Use Style" loads the style's specs into the Calculator.

---

## 6. Monetization & Permissions

### 6.1 Plan Levels
1.  **Free:**
    - Basic Calculator (Direct method only).
    - 3 Basic Styles (Neapolitan, Sourdough, Cinnamon Roll).
    - Limited MyLab (1 Levain).
2.  **Calculator Unlock:**
    - All Styles.
    - All Fermentation Methods (Poolish, Biga).
    - Advanced Calculator Settings.
3.  **Lab Pro:**
    - Everything in Unlock.
    - Unlimited Levains.
    - Consistency Testing.
    - AI Assistant (DoughBot).
    - Export to PDF.

### 6.2 Implementation
- **`permissions.ts`:** Central registry mapping `FeatureKey` -> `PlanId[]`.
- **`ProFeatureLock` Component:** Wraps UI elements. If user lacks permission, renders a blurred overlay with a lock icon and upgrade CTA.
- **`RequirePro` Component:** Route guard for full-page Pro features.

---

## 7. Development Workflow
- **State:** Managed via `UserProvider` (Persistent) and `CalculatorContext` (Ephemeral).
- **Persistence:** Firestore for User data; LocalStorage for settings/preferences.
- **Testing:** Manual verification via `TESTING_CHECKLIST.md`.
