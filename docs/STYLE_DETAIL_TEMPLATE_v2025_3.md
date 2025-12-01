===========================================
==  DOUGHLABPRO — STYLES DETAIL TEMPLATE ==
==  FINAL VERSION (2025.3)               ==
==  SAFE FOR ANTIGRAVITY INGESTION       ==
===========================================

# NOTE FOR THE ENGINE:
# This file defines the exact textual structure for all Style Detail pages.
# Every generated style must follow this order and naming, without rearranging sections.
# Comments starting with (#) are internal guidance for the generator and must NOT appear in the final rendered UI.

--------------------------------------------------
SECTION 1 — NAME & ORIGIN
--------------------------------------------------
Name:
Country / Region:
Period:

# Editorial rule:
# • Name must be canonical (not nicknames)
# • Country/Region must reflect true historical origin
# • Period should be a historically consistent era, not exact dates

--------------------------------------------------
SECTION 2 — DESCRIPTION
--------------------------------------------------
[Short, elegant, scientific description of the style]

# Editorial rule:
# • Must fit 2–3 lines
# • Must mention what makes the dough unique
# • No recipes, no steps here — only identity

--------------------------------------------------
SECTION 3 — HISTORY
--------------------------------------------------
[Deep historical context with real validated sources]

# Editorial rule:
# • 2–4 paragraphs of real history
# • Always reference real books, institutions, or regulations
# • Must be globally consistent with Learn articles

--------------------------------------------------
SECTION 4 — GLOBAL PRESENCE & CONTEMPORARY PRACTICE
--------------------------------------------------
[Where it is common today; how bakers interpret it now]

# Editorial rule:
# • Explain geographic spread
# • Mention modern adaptations
# • Mention professional vs home baker differences
# • No generic “worldwide”; be precise

--------------------------------------------------
SECTION 5 — REGULATORY NOTES (IF APPLICABLE)
--------------------------------------------------
[Only for styles with actual institutions or standards]

# Examples:
# • AVPN rules (Neapolitan)
# • Roman Pizza associations
# • International bread conventions
# • French AOP, DOC, Japanese standards, etc.

--------------------------------------------------
SECTION 6 — TYPICAL PAIRINGS (UI)
--------------------------------------------------
Canonical:
Modern:
Regional:

# Editorial rule:
# • NOT a topping planner
# • Informational only
# • Keep 3–10 items per group
# • Must reflect cultural and professional practice

--------------------------------------------------
SECTION 7 — DOUGH CHARACTERISTICS SUMMARY
--------------------------------------------------
• Hydration
• Gluten profile
• Texture
• Fermentation style
• Oven method
• Signature features

# Editorial rule:
# • This is the “elevator pitch” for the dough’s behavior
# • Must match the ranges in Technical Profile

--------------------------------------------------
SECTION 8 — TECHNICAL PROFILE (TEXT VERSION)
--------------------------------------------------
Hydration:
Salt:
Fat/Oil:
Sugar:
Preferment or Levain %:
Flour Strength:
Fermentation Steps:
Oven Temperature:
Recommended Use:
Difficulty:

# Editorial rule:
# • Must match JSON
# • Values ALWAYS in ranges
# • Oven temperature ALWAYS Celsius
# • Steps must be verbs-first (“Fold…”, “Proof…”, “Bake…”)
# • Difficulty must reflect actual complexity

--------------------------------------------------
SECTION 9 — WATCH-OUTS
--------------------------------------------------
[Common mistakes and failure points]

# Editorial rule:
# • 3–8 items
# • Short, technical, practical

--------------------------------------------------
SECTION 10 — NOTES
--------------------------------------------------
[Special remarks, variations, important comments]

# Editorial rule:
# • 1–5 items
# • Optional but recommended

--------------------------------------------------
SECTION 11 — RELATED LEARN ARTICLES
--------------------------------------------------
[List of Learn article IDs that match this style]

# Editorial rule:
# • Must match Learn tags
# • Minimum 2 Learn links

--------------------------------------------------
SECTION 12 — IMAGES (PLACEHOLDERS)
--------------------------------------------------
Hero Image (16:9):  placeholder/<style>_hero_16x9.jpg
Dough Image (4:5):  placeholder/<style>_dough_4x5.jpg
Crumb Image (4:5):  placeholder/<style>_crumb_4x5.jpg

# Editorial rule:
# • These are placeholders for NanoBanana Pro
# • Filenames must match this pattern
# • No deviation allowed

--------------------------------------------------
SECTION 13 — JSON SCHEMA BLOCK (≤ 8KB)
--------------------------------------------------
[Final JSON for the style]

# Editorial rule:
# • MUST follow the DoughLabPro StyleSchema (Gold Standard)
# • MUST contain real references
# • MUST include:
#     id
#     name
#     category
#     origin
#     description
#     history (condensed)
#     globalPresence
#     pairings
#     tags (max 4)
#     difficulty
#     fermentationType
#     technicalProfile
#     watchouts
#     notes
#     references (REAL ONLY)
#     images
#     relatedLearn
#     isPro
#     source
#     createdAt
#     releaseDate
# • All numeric values must be ranges
# • Oven temps in Celsius
# • JSON must never exceed 8kb
# • Difficulty must match the textual version

--------------------------------------------------
END OF TEMPLATE
--------------------------------------------------
