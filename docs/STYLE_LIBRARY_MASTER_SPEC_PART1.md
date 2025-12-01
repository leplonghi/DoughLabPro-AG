MASTER DOCUMENT — PART 1/3

(Global Spec + Category Traits)
DoughLabPro – Style Library / Hybrid Technical Specification
Version: 1.0 (Canonical)
Author: DoughLabPro Knowledge Architecture
All content validated using scientific sources including Modernist Bread, Modernist Pizza, Hamelman, AVPN, BBGA, CIA Baking & Pastry, King Arthur, ISO/AFNOR flour standards, and EU DOP/IGP documentation.

============================================
SECTION 1 — GLOBAL SPEC
============================================
1.1 Purpose of the Style Library

The DoughLabPro Style Library exists to:

Provide scientifically validated dough style definitions for use across Calculator, Learn, MyLab, Levain, Tools, and future modules.

Standardize terminology, ranges, and technical envelopes across all styles.

Serve as a foundational “knowledge graph” that enforces accuracy, internal consistency, and reproducibility.

Offer historically and culturally grounded descriptions of global dough traditions.

Enable monthly expansion with new styles while preserving backward compatibility.

The Style Library is the single source of truth for:

Hydration envelopes

Salt and sugar ranges

Fat content and enrichment levels

Preferment formats

Flour strength requirements

Fermentation pathways

Mixing and dough handling

Baking profiles

Regional variants

Climate adaptations

Risk conditions

1.2 What a “Style” Represents

A Style is a codified technical identity of a dough tradition.

A style always includes:

Technical Envelope
Scientifically defined ranges for hydration, salt, oil, sugar, flour strength, preferments, temperatures, and timings.

Process Identity
Mixing method, fermentation method, shaping logic, baking profile.

Historical-Cultural Identity
Region, era, regulatory body (if applicable), and culinary purpose.

Functional Identity
How the dough behaves, how it is used, and what outcomes it produces.

JSON Schema Instance
A fully structured machine-readable object.

1.3 Style Library → App Integration

Styles integrate with:

Calculator

Loads technicalProfile ranges

Pre-fills dough configuration

Enforces validated hydration/salt limits

Triggers warnings (e.g., high hydration sensitivity)

Learn

Shows theory behind each style

Links technical foundations to articles

Provides deeper science

MyLab

Allows A/B experiments

Tracks deviations from canonical values

Stores personal variants

Levain

Specifies levain percentage usage

Adjusts fermentation timing

Tools (OvenProfiler, DoughBot, Timeline)

Uses style parameters to simulate fermentation curves, baking graphs, timelines.

1.4 Validation Rules (Global Constraints)

These constraints apply to ALL styles.

Hydration (global envelope)

Based on Modernist Bread + King Arthur hydration analysis:

Minimum: 35% (some enriched doughs, cookies)

Maximum: 105% (high-hydration pan breads; Roman Pala upper limit ~95–100%)
Values outside these ranges trigger automatic warnings.

Salt (baker’s %)

Scientific envelope from BBGA and Hamelman:

Typical: 1.8% – 3.0%

Maximum allowed in DoughLabPro: 3.5%

Minimum palatable threshold: 1.5%

Oil/Fat

Based on Modernist Pizza + CIA Baking & Pastry:

Lean doughs: 0–3%

Medium enriched: 3–15%

Highly enriched (brioche): 15–50%

Sugar

Lean doughs: 0–2%

Sweet doughs: 5–20%

Pastry/cookie: 10–50%

Flour Strength (W value or protein)

When W unavailable, fallback to protein.

Weak flours: W < 180

Medium: W 180–260

Strong: W 260–320

Very strong: W > 320

Sources: Caputo Tech Sheets, French AFNOR classification, Modernist Bread.

Fermentation Time Constraints

Room temp: 18–26°C

Cold fermentation: 2–8°C

Max safe cold fermentation time: 120 h
(beyond this, enzymatic degradation risk)

Oven Profiles

Standardized categories:

Wood-fired (400–485°C)

Deck oven (260–330°C)

Home oven (230–290°C)

Pan-style (200–260°C)

Each style references a subset.

1.5 Naming Rules

To avoid collisions, naming follows:

Primary name (canonical): "Neapolitan AVPN Classic"

Secondary name (variant): "Neapolitan Contemporary"

All lowercase id: "neapolitan_avpn_classic"

User-created styles receive:

"user_manual_*" or "user_ai_*" prefix.

1.6 JSON Gold Schema (Field-by-field definition)

This is the schema used in Section 3C for each style.

{
  "id": "string",
  "name": "string",
  "category": "pizza|bread|enriched_bread|burger_bun|pastry|cookie|flatbread|other",
  "origin": {
    "country": "string",
    "region": "string | optional",
    "period": "string | optional"
  },
  "history": "string",
  "technicalProfile": {
      "hydration": [number, number],
      "salt": [number, number],
      "oil": [number, number],
      "sugar": [number, number],
      "flourStrength": "string | optional",
      "prefermentDescription": "string | optional",
      "fermentation": {
        "bulk": "string",
        "proof": "string",
        "coldRetard": "string | optional"
      },
      "ovenRecommendations": "string",
      "difficulty": "Easy|Medium|Hard|Expert",
      "recommendedUse": "string"
  },
  "risks": ["string"],
  "notes": ["string"],
  "variations": ["string"],
  "tags": ["string"],
  "references": ["string"]
}
