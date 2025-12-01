DOUGHLABPRO — STYLES MASTER SPEC (2025.3)
==============================================================================

PURPOSE:
This document defines the complete operational system of the DoughLabPro
STYLES MODULE, including:

• Unified Style Schema (Gold 2025.3)
• Content Model (UI + Editorial)
• Technical Profile Rules
• Scientific & Historical Requirements
• Style Production Pipeline
• UI/UX 2025 Overhaul
• Integration with Calculator, Learn, MyLab
• Image System (NanoBanana ready)
• Validation, Constraints, Performance
• Monthly Expansion Framework

All components, all pages, all styles must follow this master specification.

==============================================================================
1. GLOBAL PRINCIPLES
==============================================================================

1. All Styles must be scientifically accurate, historically grounded, culturally
   correct, and technically reproducible.

2. Editorial tone: scientific, professional baking lexicon, objective, clean,
   in English only. No romanticization, no exaggeration, no invented facts.

3. All Styles must follow the Gold Schema (2025.3), including:
   • origin block
   • history block
   • global presence block
   • technicalProfile ranges
   • fermentation steps (action verbs)
   • typical pairings
   • notes
   • watch-outs
   • references REAL ONLY
   • images placeholders
   • cross-link to Learn

4. All Styles must remain ≤ 8 KB when exported as final JSON.

5. All temperatures MUST be in Celsius.

6. All components (Learn, Styles, Flours, Tools) must use LibraryPageLayout
   for UI consistency.

7. All styles must be Pro-lock ready but free styles must remain functional.

==============================================================================
2. UPDATED STYLE SCHEMA (GOLD 2025.3)
==============================================================================

Each style MUST follow this schema EXACTLY:

{
  "id": string,
  "name": string,
  "category":
    "pizza" | "bread" | "enriched_bread" | "burger_bun" |
    "pastry" | "cookie" | "flatbread" | "other",

  "origin": {
    "country": string,
    "region": string,
    "period": string
  },

  "description": string,
  "history": string,

  "regulatoryNotes": string?,   // AVPN, ICC, AIB, PDO, etc.

  "globalPresence": string,     // where practiced today

  "pairings": {
    "canonical": string[],      // historically accurate
    "modern": string[],         // contemporary popular
    "regional": string[]        // localized variants
  },

  "tags": string[],             // ≤ 4
  "difficulty": "Easy" | "Medium" | "Hard" | "Expert",

  "fermentationType": "direct" | "preferment" | "levain" | "cold",

  "technicalProfile": {
    "hydration": [number, number],
    "salt": [number, number],
    "oil"?: [number, number],
    "sugar"?: [number, number],
    "cocoa"?: [number, number],

    "flourStrength"?: string,
    "preferment"?: string,

    "fermentationSteps": string[],    // action-first

    "ovenTemp": [number, number],

    "recommendedUse": string[],
    "difficulty": "Easy" | "Medium" | "Hard" | "Expert"
  },

  "watchouts": string[],       // common mistakes (UI)
  "notes": string[],
  "references": Reference[],
  "isPro": boolean,

  "source": "official" | "user_manual" | "user_ai",
  "createdAt": string,
  "releaseDate": string,

  "images": {
    "hero": string,            // 16:9 placeholder
    "dough": string,           // 4:5 placeholder
    "crumb": string            // 4:5 placeholder
  },

  "relatedLearn": string[]     // LearnArticle ids
}

Constraints:
• JSON ≤ 8 KB
• Numeric ranges only
• REAL references
• At least 1 Learn link
• Tags ≤ 4
• Temperatures in Celsius

==============================================================================
3. FULL UI/UX — STYLE DETAIL PAGE (2025.3)
==============================================================================

All Styles follow this UI structure:

1. HERO (image)
   - hero 16:9, product centered

2. Title + Category + Region + Period + Favorite Button

3. Description (UI)

4. History (UI)
   - concise, validated, with real references

5. Regulatory Notes (UI)
   - when applicable (AVPN, PDO, ICC, etc.)

6. Global Presence & Contemporary Practice (UI)
   - artisan clusters
   - global diffusion
   - home baker adaptations
   - industrial versions (if exist)

7. Typical Pairings (UI)
   - canonical
   - modern
   - regional

8. Dough Characteristics Summary (UI)
   - hydration range
   - fermentation method
   - shaping method
   - oven type

9. Technical Profile Panel (UI)
   - ranges
   - fermentation steps
   - recommended use
   - flour strength

10. Watch-outs (UI)
11. Notes (UI)
12. Related Learn Articles (UI)
13. Images (hero, dough, crumb)
14. JSON (internal, collapsible)

==============================================================================
4. IMAGE SYSTEM — NANOBANANA READY (2025.3)
==============================================================================

All styles MUST contain:

images.hero:
  FORMAT: 16:9
  STYLE: high-end commercial food photography
  SUBJECT: final baked product
  LIGHTING: soft directional
  CAMERA: 50mm equivalent

images.dough:
  FORMAT: 4:5
  SUBJECT: dough ball, gluten surface, hydration indicators
  LIGHTING: macro, soft, side-light

images.crumb:
  FORMAT: 4:5
  SUBJECT: cross-section, alveoli structure
  STYLE: documentary baking macro

All placeholders must be present even before using NanoBanana.

==============================================================================
5. STYLE PRODUCTION PIPELINE (R → T → E → S → V)
==============================================================================

Stage R — Research
   • real references (Modernist Bread, CIA, ICC, AIB, AVPN, etc.)
   • no invented claims.

Stage T — Technical Extraction
   • numeric ranges only.

Stage E — Editorial
   • description
   • history
   • globalPresence
   • pairings
   • watchouts
   • notes

Stage S — Schema Conversion
   • conform Gold Schema

Stage V — Validation
   • L1: schema completeness
   • L2: real reference check
   • L3: cross-links to Learn

==============================================================================
6. INTEGRATION RULES
==============================================================================

6.1 Calculator Integration
   - hydration/salt/oil/sugar ranges → mapped to DoughConfig
   - fermentation type adjusts defaults
   - ovenTemp must be preserved

6.2 Learn Integration
   - every style links to ≥ 1 Learn article
   - Learn articles auto-link to styles via tags

6.3 MyLab
   - MyLab suggests experiments based on:
     hydration variability
     fermentation steps
     oven temperature ranges

6.4 Firestore
   - userStyles must respect Gold Schema
   - partial fields allowed but validated

==============================================================================
7. VALIDATION & PERFORMANCE
==============================================================================

• Memoize: allStyles, tags, groups
• Sorting: O(n log n)
• JSON ≤ 8 KB
• References must be real
• Temperatures in Celsius
• Tags ≤ 4
• All fields required unless marked optional
• No Planner references allowed
• Typical Pairings must be present

==============================================================================
END OF MASTER SPEC 2025.3
