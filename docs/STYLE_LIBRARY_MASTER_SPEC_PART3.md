DOUGHLABPRO — MASTER SPEC 2025.2
PART 3/4 — INTEGRATION ENGINE + PIPELINES + VALIDATION
============================================
/* ============================================================
   PART 3/4 — INTEGRATION ENGINE + PIPELINES + VALIDATION
   This file defines:
     - Calculator Mapping Rules (mandatory)
     - Learn/Styles Cross-Link Engine
     - MyLab Experiment Engine
     - Affiliate Mapping Engine
     - Full Validation Rules (Antigravity L2 + L3 checks)
     - The Style Production Pipeline (R→T→E→S→V)
   ============================================================ */

============================================================
6. CALCULATOR INTEGRATION ENGINE
============================================================

The Calculator must correctly ingest any style from the Styles Library using the rules below.

6.1 Mapping Overview
Style.technicalProfile → DoughConfig (calculator inputs)


Full mapping specification:

Style Field	Mapping to Calculator	Notes
hydration[min, max]	Set hydration slider midpoint	Users can adjust manually
salt[min, max]	Set salt slider midpoint	hydrated from range
oil[min, max]	Set oil slider midpoint	optional
sugar[min, max]	Set sugar slider midpoint	required when >0
flourStrength	Show flour recommendation message	does not affect grams
preferment	Activate preferment mode	poolish/biga/levain
fermentationType	Auto-set fermentation preset	direct / cold / levain
fermentationSteps	Display in fermentation module	read-only
ovenTemp	Pre-fill target oven temp	Celsius only
6.2 Hydration Mapping Rule
avgHydration = (hydration[0] + hydration[1]) / 2
calculator.hydration = avgHydration

6.3 Salt, Oil, Sugar Mapping

Same averaging rule:

calculator.salt = (salt[0] + salt[1]) / 2
calculator.oil  = (oil[0]  + oil[1])  / 2
calculator.sugar = (sugar[0] + sugar[1]) / 2

6.4 Preferment Behavior

If preferment is mentioned:

- enable preferment section
- auto-fill hydration % and preferment %
- adjust main flour accordingly


If preferment is "not used": disable.

6.5 FermentationType Presets
Type	Calculator Behavior
direct	room-temp workflow, no cold retard
preferment	enable preferment block
levain	enable sourdough mode
cold	activate cold-retard suggestion
6.6 Oven Temperature Mapping

Always map:

calculator.ovenTemp = (ovenTemp[0] + ovenTemp[1]) / 2


UI displays the entire range.

6.7 Difficulty Mapping

difficulty → skill badge on Calculator page.

6.8 Warnings Mapping

Warnings must appear in calculator as toast alerts for:

excessive hydration (>80%)

very low hydration (<50%)

very high salt (>3%)

extremely high oven ranges (>400°C)

============================================================
7. LEARN × STYLES CROSS-LINK ENGINE
============================================================
/* ============================================================
   Every style MUST link to at least one Learn article.
   Link is based on matching tags.
   ============================================================ */

7.1 Tag-Based Linking
relatedArticles = allLearnArticles.filter(
  article => article.tags.some(t => style.tags.includes(t))
)


UI Placement:

On StyleDetailPage, after Warnings → “Related Learn Articles”

Rules:

Minimum 1 article

If none → error in validation

Articles must match content (editorial rule)

7.2 Learn Article Validation

Tags must be consistent:

IF style.tags contains "hydration" → Learn must have a Hydration article
IF style.tags contains "gluten" → Learn must have Gluten Formation
...


Antigravity must enforce tag coherence.

7.3 Learn Back-Linking

Learn article detail pages must show:

Styles using this concept:
  • Neapolitan AVPN Classic (hydration, gluten)
  • Ciabatta High Hydration (hydration, fermentation)

============================================================
8. MYLAB EXPERIMENT ENGINE
============================================================

This part makes DoughLabPro truly scientific.

8.1 Core Engine Logic

Based on:

hydration range

salt range

fermentationType

flourStrength

ovenTemp

difficulty

warnings

The system must generate experiments like:

Experiment A/B (Hydration):
Try comparing 62% vs 68% hydration. Record differences in extensibility and oven spring.

8.2 Required Experiments per Style

Each style must supply:

A/B hydration test

Fermentation curve comparison

Oven spring analysis

Flour strength evaluation

Technique-dependent test
(stretch-and-fold vs slap-and-fold)

8.3 Experiment Generation Template
{
  "title": "Hydration A/B Test",
  "description": "Compare two hydration levels within the style’s range.",
  "steps": [
    "Mix dough at lower hydration bound.",
    "Mix dough at upper hydration bound.",
    "Keep fermentation variables constant.",
    "Bake both and log differences in crumb, extensibility, and elasticity."
  ],
  "expectedOutcomes": [
    "Lower hydration → tighter crumb",
    "Higher hydration → more open alveoli"
  ]
}

============================================================
9. AFFILIATE MAPPING ENGINE
============================================================

Used in StyleDetailPage sidebar.

9.1 Mapping Rules

Affiliate products must be shown based on:

flourStrength

ovenTemp

fermentationType

category

difficulty

9.2 Mapping Table
Flour Strength → Affiliate
FlourStrength	Suggest
W200–260	All-purpose flour options
W260–300	High-protein options
W300–360	Bread flour premium
>360	Pizza napoletana certified flours
FermentationType → Tools
Type	Suggest
direct	bench scraper & proofing box
preferment	digital thermometer & fermentation box
cold	airtight dough boxes
levain	starter kit, rye flour, fermentation jar
OvenTemp → Equipment
Temp Range	Suggest
220–260°C	home oven upgrades
260–320°C	steel plate
350–500°C	outdoor pizza oven
9.3 Output Format
{
  "affiliateSuggestions": [
    {
      "title": "High-Protein Bread Flour",
      "reason": "Matches W300–350 strength",
      "url": "..."
    }
  ]
}

============================================================
10. STYLE PRODUCTION PIPELINE (R → T → E → S → V)
============================================================

This is one of the most important sections.
Defines how every style must be created.

10.1 Stage 1 — Research (R)

Sources:

Modernist Bread / Modernist Pizza

CIA (Culinary Institute of America)

ICC/ICIM (Italian Culinary Institute standards)

AVPN Regulations (for Neapolitan pizza)

AIB Technical Papers

Bread Science (Emily Buehler)

Peer-reviewed cereal science journals

Regional culinary archives

Deliverables:

origin (country/region/period)

cultural context

traditional hydration

flour types

fermentation tradition

oven technology

10.2 Stage 2 — Technical Extraction (T)

Extract:

hydration range

salt, oil, sugar ranges

flourStrength

fermentation steps

ovenTemp range

difficulty

All values must be numeric.

10.3 Stage 3 — Editorial Construction (E)

Write:

intro

description

history

cultural context

warnings

notes

recommended uses

references (real)

Tone:

clear

authoritative

compact

professional editorial quality

10.4 Stage 4 — Schema Conversion (S)

Convert all data to GOLD SCHEMA.

Auto-checks:

ranges ONLY

tags ≤4

difficulty set twice

images present

references real

JSON ≤8KB

10.5 Stage 5 — Validation (V)

Validation has 3 levels:

L1 — Schema validation

fields exist

types correct

ranges numeric

L2 — Editorial validation

references real

cultural context consistent

Learn tags correct

L3 — Technical validation

hydration plausible

salt in global 1.8–3.2% range

oven temp plausible

fermentation steps correct sequence

If any check fails → reject style.

============================================================
11. ANTIGRAVITY ENFORCEMENT RULES
============================================================
/* ============================================================
   Antigravity must enforce:
   - schema correctness
   - editorial tone
   - validation levels
   - integration rules
   - ratio/image/path correctness
   ============================================================ */

Hard rules:

No missing fields

No styles > 8KB

No invented references

No fake URLs

No Celsius conversion errors

No English mistakes in technical terms

No tags unrelated to Learn

No images missing or wrong ratio

No style without cultural context

No conflicting data (hydration <40% unless cracker style)

✔ PARTE 3/4 ENTREGUE.
