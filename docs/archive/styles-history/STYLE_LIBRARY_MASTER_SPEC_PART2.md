DOUGHLABPRO — MASTER SPEC 2025.2
PART 2/4 — UI/UX 2025 SYSTEM + FILTER ENGINE + BEHAVIOR RULES
============================================
/* ============================================================
   PART 2/4 — UI/UX + FILTER SYSTEM + INTERACTION BEHAVIOR
   This document defines:
     - The complete 2025 UI/UX framework for Styles Library
     - The global filter system architecture
     - Navigation and interaction rules
     - Pro-feature gating behavior
     - Learn / MyLab / Calculator / Firestore integration links
   ============================================================ */

------------------------------------------------------------
4. UI/UX SYSTEM — 2025 LIBRARY LAYOUT

The Styles Library MUST use LibraryPageLayout (shared with Learn, Tools, Flours).
This ensures a unified premium look and reduces user cognitive load.

4.1 Global Page Structure
Page
 └── LibraryPageLayout
      ├── Hero
      ├── Sticky Filter Bar
      ├── Filter Drawer (expanded)
      ├── Display Groups
      │     └── Style Cards
      └── Modals


The UI must feel:

premium

editorial

consistent

scientific but intuitive

visually aligned with DoughLabPro brand (deep green + lime highlights)

------------------------------------------------------------
4.2 HERO BLOCK (GLOBAL REQUIREMENT)
4.2.1 Visual Spec

100% width

Gradient:
from-[#27492E] to-[#3C773C]

Subtle texture overlays (1–2% opacity)

Floating dots in lime/sky as micro-accent

4.2.2 Text

Title:

The Global Dough Atlas


Subtitle:

Explore validated formulas, history, techniques, and regional dough traditions across 6 major global families.

4.2.3 Hero Actions (3 buttons)

Create Style (Manual)

AI Style Builder (Pro-only)

Ingredient Planner

All must follow the ShadCN button spec defined in the master UI kit.

------------------------------------------------------------
4.3 STICKY FILTER BAR

Always visible during scroll.

Components:

Category Pills

Favorites Toggle

Filter Drawer Toggle

Sort Dropdown (name, hydration, newest)

Sort Order Toggle

Search Input (debounced 250ms)

Styling:

Background: white/80

backdrop-blur-lg

Border bottom: slate-200/80

Shadow: subtle

Behavior:

Filters update grid instantly

Smooth animated transitions (150ms, ease-out)

Pills use dynamic category color system (pizza=orange, bread=amber…)

------------------------------------------------------------
4.4 FILTER DRAWER (ADVANCED FILTERS)

Required fields:

Difficulty (E/M/H/X)
Region (Italy, Japan, France, USA, Brazil, UK, Global)
Fermentation: direct / preferment / cold / levain
Tags: multi-select
Hydration range slider (optional future)

Design:

Collapsible

Animated height transitions

Clean pill-based filter selections

Neutral whites and slate tones

------------------------------------------------------------
4.5 STYLE GRID — DISPLAY GROUPS

Styles must be grouped using:

Pizzas
Breads & Rustic Loaves
Enriched Breads
Burger Buns
Pastry & Sweet Doughs
Cookies & Confectionery
Flatbreads (if any)
Other Styles

UI Rules:

Each group shows name + count badge

Grid layout:

Mobile: 1 column

Tablet: 2 columns

Desktop: 3

XL: 4

------------------------------------------------------------
4.6 STYLE CARD SPEC (2025)
Header Elements:

Status badges:

Pro (lime gradient)

AI (indigo gradient)

Custom (sky gradient)

NEW (blue gradient < 30 days)

Body:

title (bold)

category badge

origin country

short description

3 technical tags:

hydration

fermentation time

difficulty

Actions:

Use Style (primary)

Details

Delete (custom only)

Interaction:

hover shadow

negative space clean

rounded-xl

------------------------------------------------------------
4.7 STYLEDETAILPAGE — SCIENTIFIC DOSSIER UI

This is the most important UI in the entire Styles module.

Required sections:

Back button

Hero image (16:9)

Header block:

title

favorite toggle

category / region / period

Pro badge (if locked)

description

Action bar:

Load into Calculator

PDF export

Share

Main content grid (2/3 + 1/3)

Sections:

History & Cultural Context

Base Formula (Baker’s %)

Notes (chef notes)

Warnings (amber panel)

Gallery (overhead + side-profile images)

Macro (crumb close-up)

Related Learn Articles

Sidebar (right):

Technical Profile (Pro-locked if needed)

Recommended Tools (affiliate)

Quick Facts panel

Behavioral Rule:

If style.isPro = true → blur technical fields + CTA “Unlock Pro”.

============================================================
5. BEHAVIOR RULES (INTERACTIONS)
============================================================
/* ============================================================
   Behavior rules define what happens when user interacts with:
   - Use Style
   - Favorites
   - Filters
   - Sorting
   - AI Builder
   - Pro locks
   - Learn links
   ============================================================ */

------------------------------------------------------------
5.1 “Use Style” Button Behavior
IF style.isPro = true AND user.isPro = false:
    → openPaywall('styles')
ELSE
    → Load style into Calculator
    → Map technicalProfile → DoughConfig
    → Navigate to /calculator


Mapping rules will be in PART 3.

------------------------------------------------------------
5.2 Favorites

Favorites stored in Firestore via UserProvider.

Rules:

toggling must prevent event bubbling (prevent card navigation)

immediate optimistic UI update

favorites list participates in filtering

------------------------------------------------------------
5.3 Sorting Spec

Sort by:

name

newest

hydration range average

SortOrder:

asc

desc

Hydration sorting algorithm:

avgA = (A.hydration[0] + A.hydration[1]) / 2
avgB = (B.hydration[0] + B.hydration[1]) / 2

------------------------------------------------------------
5.4 Filter Matching Algorithm

Filters apply cumulatively:

searchMatch AND categoryMatch AND tagMatch AND difficultyMatch
AND fermentationMatch AND regionMatch AND favoritesMatch

------------------------------------------------------------
5.5 AI Style Builder (Pro) Behavior

Rules:

Always requires Pro

If free user → show lock overlay

After generating, AI output is passed into CreateStyleModal for manual final validation

AI-generated styles must respect the GOLD schema

AI source MUST be: "source": "user_ai"

------------------------------------------------------------
5.6 Learn Article Linking

Every style must link to at least one Learn article based on tags.
Learn article tags must correspond to style tags (e.g. “gluten”, “hydration”).

On StyleDetailPage:

Related Learn Articles:
  - list from allLearnArticles filtered by shared tags

------------------------------------------------------------
5.7 MyLab Integration

Every style must include fields that allow MyLab to generate suggestions like:

“Try A/B testing hydration from 62% to 68%”

“Compare cold vs room-temp fermentation”

“Record oven spring differences”

This uses:

technicalProfile ranges

fermentationType

tags

Rules for MyLab appear in Part 3.

------------------------------------------------------------
5.8 Affiliate Rules

Sidebar must show Recommended Tools, mapped by:

flour type

hydration range

oven temp

fermentation type

Mappings in Part 3.

------------------------------------------------------------
5.9 Pro Gating

Every Pro-gated field must follow:

IF user is free:
   blur
   overlay gradient
   show locked icon
   CTA: “Unlock DoughLab Pro”


Blur intensity: 10–20%
No hiding — user must see what exists.

------------------------------------------------------------
5.10 ReleaseDate Behavior

If releaseDate ≤ 30 days ago → show NEW badge.

Badge:

bg-gradient-to-br from-blue-400 to-blue-600
text-white
rounded-full
text-xs
px-2 py-0.5

✔ PARTE 2/4 ENTREGUE.
