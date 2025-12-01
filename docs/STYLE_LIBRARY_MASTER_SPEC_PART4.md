DOUGHLABPRO — MASTER SPEC 2025.2
PART 4/4 — GLOBAL CONSISTENCY + FINAL BLOCK
============================================
/* ============================================================
   PART 4/4 — GLOBAL CONSISTENCY ENGINE + FINAL EXECUTION BLOCK
   This section finalizes the entire Styles System:
     - Global consistency rules
     - Sanity check validations
     - Performance constraints
     - Release pipeline
     - Overrides
     - Antigravity execution block
   ============================================================ */

============================================================
12. GLOBAL CONSISTENCY ENGINE
============================================================

All modules must remain consistent with each other across:

Styles Library

Learn Library

Calculator

MyLab

Tools

Image Library

Firestore

This section defines how.

12.1 Naming Consistency
- All style names MUST use title case.
- No diacritics unless historically accurate.
- The JSON “id” must be kebab-case.
- No duplication of names or IDs.
- If two regional variations exist, append:
  “-style”, “-variation”, “-regional”, “-modern”, or a year.


Examples:

“neapolitan-classic-avpn”

“french-baguette-traditional-1970s”

“tokyo-style-shokupan”

12.2 Category Consistency

Allowed:

"pizza"
"bread"
"enriched_bread"
"burger_bun"
"pastry"
"cookie"
"flatbread"
"other"


No new categories allowed without overriding this master spec.

12.3 Tag Consistency

Rules:

Max 4 per style

Must match real Learn tags

Must be technical, not descriptive

Must support UI filters

Examples:

“hydration”

“gluten”

“preferment”

“cold-fermentation”

“high-protein-flour”

“lamination”

“sweet-dough”

Forbidden:

“crispy”

“soft”

“perfect”

“authentic”

12.4 Origin Consistency

Origin must include:

country (mandatory)
region (mandatory)
period (mandatory)


Examples:

"country": "Italy",
"region": "Campania",
"period": "19th century"

12.5 Difficulty Consistency

Difficulty must appear:

In the root of the JSON

Inside technicalProfile

Values must match:

Easy | Medium | Hard | Expert


Internal logic:

hydration >75% → ≥ Medium

levain fermentation → ≥ Medium

cold fermentation + high hydration → ≥ Hard

lamination → Expert

============================================================
13. SANITY CHECK RULES
============================================================

Antigravity must run these after all generation.

13.1 Hydration sanity check
IF hydration <40%:
  allowed ONLY if category is "cookie" or "cracker-style pastry"
IF hydration >90%:
  reject (unless ciabatta-type)

13.2 Salt sanity check
IF salt <1% OR salt >4%:
  reject

13.3 Temperature sanity check

All oven temps MUST be Celsius.

IF ovenTemp[1] > 550:
  reject (stone kilns excepted)

13.4 Fermentation logic check
IF fermentationType = "levain"
  → sugar range MUST be <10%

13.5 Historical accuracy check

Mandatory checks:

Country must match known historical origin

Period must be plausible

References must be real

13.6 Image presence check

Every style MUST include:

"images": {
  "hero": "url",
  "process": "url"
}


URLs must follow:

https://cdn.doughlabpro.com/styles/{styleId}/hero.jpg
https://cdn.doughlabpro.com/styles/{styleId}/process.jpg


Ratio rules:

hero → 16:9
process → 4:5 (vertical)

13.7 JSON weight check

Limit:

JSON object ≤ 8KB


If exceeded → must compress description or history.

============================================================
14. PERFORMANCE RULES
============================================================
14.1 Memoization

Antigravity must enforce:

- memoize allStyles
- memoize tags
- memoize filters

14.2 Normalization

Normalize fields before storing.

Examples:

"hydration": [56, 62]  ✔
"hydration": ["56%", "62%"] ✘

14.3 Sorting performance

Sorting must be O(n log n)
Search must be debounced 300ms.

14.4 Grid performance

Styles Grid loads only:

id

name

hero image

tags

category

The rest loads upon opening the detail page.

============================================================
15. FIRESTORE RULES
============================================================

All user-generated styles must use the SAME schema, but:

All fields optional

No refs required

No hero/process images required

No validation on references

Firestore collection:

/userStyles/{uid}/{styleId}


Rules:

Stored under authenticated user

Must not exceed 32KB

No server-side merge conflicts

============================================================
16. RELEASE PIPELINE
============================================================

Monthly:

5 new styles

must follow R→T→E→S→V

must be ≤8KB each

must include references

Themes rotate:

Regional discoveries

Classic revalidations

Historical revivals

Fermentation innovation

Modern fusion doughs

============================================================
17. OVERRIDE LOGIC
============================================================

This Master Spec has priority 100.

All previous:

style specs

UI/UX specs

integration rules

validation rules

schemas

image specs

…are fully overridden.

Nothing may contradict this file.

============================================================
18. ANTIGRAVITY FINAL EXECUTION BLOCK
============================================================
/* ============================================================
   DOUGHLABPRO — MASTER SPEC 2025.2
   REGISTER AS: "DoughLabPro_Styles_Master_v2025_2"
   PRIORITY: 100 (HIGHEST)

   Antigravity must:
     - Override all previous style-related specs
     - Enforce GOLD schema
     - Enforce UI/UX 2025 rules
     - Enforce image ratio + path rules
     - Enforce validation L1 + L2 + L3
     - Enforce Calculator, Learn, MyLab mapping
     - Enforce monthly release pipeline
     - Reject invented references
     - Reject missing fields
     - Reject invalid ranges
     - Reject invalid fermentation logic
     - Reject any JSON >8KB
     - Maintain global consistency
     - Maintain performance guarantees

   This document governs:
     - Styles creation
     - Styles integration
     - Styles rendering
     - Styles filters
     - Styles detail UI
     - Styles cross-links
     - Styles monthly expansion
     - Styles image ingestion

   Wait for the command:
     "BEGIN NEW STYLE BATCH"

   Then generate styles ONLY using this specification.
   No content generation before that command.
   ============================================================ */

============================================================
19. “BEGIN NEW STYLE BATCH” PROTOCOL
============================================================

After pasting all 4 parts into Antigravity, the process is:

User: BEGIN NEW STYLE BATCH (Pizza Core Pack)
Antigravity: acknowledges
Antigravity: generates 5 styles following the Master Spec
User: Approve / Request Fix / Regenerate


Packs suggested:

Pizza Core Pack (5 styles)

Italian Regional Pack (5 styles)

Bread Foundations Pack (5 styles)

Enriched Dough Pack (5 styles)

Pastry Pack (5 styles)

Global Flatbreads Pack (5 styles)

Historical Revival Pack (5 styles)

🎉 MASTER SPEC 2025.2 — ENTREGUE COMPLETO

As quatro partes agora formam um documento único, pronto para o Antigravity.
