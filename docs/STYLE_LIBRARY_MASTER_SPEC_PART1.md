DOUGHLABPRO — MASTER SPEC 2025.2
PART 1/4 — MASTER HEADER + GLOBAL PRINCIPLES + GOLD SCHEMA + IMAGE SYSTEM
============================================
/* ============================================================
   DOUGHLABPRO — STYLES SYSTEM MASTER DOCUMENT (2025.2)
   PART 1/4 — HEADER + GLOBAL PRINCIPLES + GOLD SCHEMA + IMAGE SYSTEM
   PRIORITY: ABSOLUTE (OVERRIDE ALL PREVIOUS SPECS)
   This file defines the global protocol for the Styles Library,
   including schema rules, editorial standards, UI/UX anchors,
   validation constraints, and the global Image Specification.

   All future sections MUST comply with this document.
   ============================================================ */

------------------------------------------------------------
0. PURPOSE OF THIS MASTER DOCUMENT
------------------------------------------------------------

This document is the single source of truth for:

The global Styles Library architecture

The Style GOLD Schema

The UI/UX 2025 framework

The Image System Specification

Technical validation rules

Editorial consistency rules

Data constraints (≤8KB, ranges only, references real only)

Integration rules with:

Calculator

Learn

MyLab

Firestore

Permissions & Paywall

No module may override these rules unless explicitly documented.

------------------------------------------------------------
1. GLOBAL PRINCIPLES
------------------------------------------------------------

Every style must be:

scientifically valid

historically accurate

culturally contextualized

operationally reproducible

technically documented

written in English only

referenced with real sources

internally consistent with Learn

Every style must follow a single unified schema (GOLD Schema).

All UI must follow the 2025 LibraryPageLayout.

Every field must be deterministic, typed, validated, normalized, and Pro-lock compatible.

Each style must include:

strong editorial body

technical ranges

fermentation steps

cultural context

warnings

recommended uses

real references

Monthly updates must use this same schema — 5 new styles per month minimum.

------------------------------------------------------------
2. GOLD STYLE SCHEMA (JSON REQUIRED FIELDS)
------------------------------------------------------------
/* ============================================================
   GOLD STYLE SCHEMA — REQUIRED FOR ALL STYLES
   - All fields mandatory unless marked optional.
   - JSON data must not exceed 8 KB.
   - All quantities must be numeric ranges.
   ============================================================ */

{
  "id": "string",
  "name": "string",
  "category": "pizza" | "bread" | "enriched_bread" | "burger_bun" | "pastry" | "cookie" | "flatbread" | "other",

  "origin": {
    "country": "string",
    "region": "string",
    "period": "string"
  },

  "description": "string",
  "history": "string",
  "culturalContext": "string",

  "tags": ["string"],          // max 4
  "difficulty": "Easy" | "Medium" | "Hard" | "Expert",
  "fermentationType": "direct" | "preferment" | "levain" | "cold",

  "technicalProfile": {
    "hydration": [min, max],
    "salt": [min, max],
    "oil": [min, max],
    "sugar": [min, max],
    "cocoa": [min, max],                      // optional
    "flourStrength": "string",
    "preferment": "string",
    "fermentationSteps": ["string"],          // action-oriented: “Fold every 30 min…”
    "ovenTemp": [min, max],                   // must be Celsius
    "recommendedUse": ["string"],
    "difficulty": "Easy" | "Medium" | "Hard" | "Expert"
  },

  "warnings": ["string"],
  "notes": ["string"],

  "images": {
    "hero": "string",        // required
    "gallery": ["string"],   // at least 3
    "macro": ["string"]      // optional but recommended
  },

  "references": [
    {
      "source": "string",
      "author": "string",
      "year": "string",
      "url": "string"
    }
  ],

  "isPro": true,
  "source": "official" | "user_manual" | "user_ai",
  "createdAt": "string",
  "releaseDate": "string"
}


MANDATORY CONSTRAINTS:

JSON ≤ 8KB

At least 3 real references

Numeric ranges ONLY

Oven temp must be Celsius

Tags ≤ 4

Difficulty present twice (overall + technical)

No images missing

Pathing must match /assets/styles/{id}/...

------------------------------------------------------------
3. GLOBAL IMAGE SYSTEM (FULL SPECIFICATION)
------------------------------------------------------------
/* ============================================================
   GLOBAL IMAGE SYSTEM — REQUIRED FOR ALL STYLES
   Ensures visual consistency across the entire Styles Library.
   Applies to Storage, Schema, UI, Editorial, and Validation.
   ============================================================ */

3.1 Directory Structure

All style images must be stored here:

/src/assets/styles/{styleId}/
    hero.webp
    gallery-01.webp
    gallery-02.webp
    gallery-03.webp
    macro-01.webp

Rules:

{styleId} must match style.id

.webp only

Max file size: 300 KB

Min 4 images per style

Naming required

The app must NOT generate images — only reference them

Nanobanana Pro will provide the images externally

3.2 Schema Requirements

Add this field to every style:

"images": {
  "hero": "/assets/styles/{id}/hero.webp",
  "gallery": [
    "/assets/styles/{id}/gallery-01.webp",
    "/assets/styles/{id}/gallery-02.webp",
    "/assets/styles/{id}/gallery-03.webp"
  ],
  "macro": [
    "/assets/styles/{id}/macro-01.webp"
  ]
}

3.3 UI/UX Placement Rules
Hero Image

Full width

16:9

Placed at top of StyleDetailPage

Background gradient uses color palette extracted from hero

Gallery Section

Placed after “History”:

Responsive grid (1 → 2 → 3 columns)

Lightbox

Zoom + drag

Desktop hover magnifier

Macro Section

Placed near “Warnings”:

4:5 ratio

Extreme crumb close-ups

3.4 Editorial and Styling Rules (Mandatory)
Lighting

Soft, diffused, natural

5200–5600K

Zero harsh shadows

Background & Palette

Neutral: beige, slate, charcoal

Food editorial aesthetic (Kinfolk / Bon Appétit)

Clean props only (linen, cutting board, flour)

Camera Angles

Hero: 45°

Gallery: 90° overhead

Gallery: 0° side profile

Macro: extreme close-up

Composition

Rule of thirds

Focus on crust, crumb, structure

No branding

No human hands

No chaotic props

Always minimalistic

3.5 Nanobanana Pro Prompt Templates
Hero Prompt
Ultra-realistic food photography of {styleName}, 8K, 45° angle,
soft diffused lighting, warm neutrals, editorial magazine aesthetic,
emphasize crust blistering and crumb texture, shallow DOF,
no branding, no hands, clean beige stone background.

Gallery Prompt (Overhead)
Top-down 90° overhead shot of {styleName}, high resolution,
neutral palette, baking studio environment, minimal composition,
texture and structure visible, no branding.

Gallery Prompt (Side Profile)
Side profile image of {styleName}, 0° camera angle, natural light,
crust coloration clearly visible, editorial culinary style.

Macro Prompt
Extreme macro close-up of {styleName} crumb or gluten strands,
8K resolution, shallow depth of field, highly detailed aeration,
scientific aesthetic, no props.

3.6 Validation Rules

Antigravity must reject any style if:

hero missing

gallery < 3 images

wrong path format

wrong file format

file size > 300 KB

wrong ratio (hero ≠ 16:9, macro ≠ 4:5)

invalid folder name

Fallback allowed:

/assets/placeholders/hero-default.webp


UI must show:

“Images for this style are coming soon.”

3.7 Summary Block (to remain at top of internal Antigravity memory)
GLOBAL RULE: Every style MUST include a fully valid `images` block,
with correct file paths, .webp format, ratios, and gallery items.
Reject any style that fails image validation.

✔ PARTE 1/4 ENTREGUE.
