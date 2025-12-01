🔥 DOUGHLABPRO — OFFICIAL STYLE PRODUCTION PIPELINE  
Version 1.0  
Purpose: Ensure the monthly creation of 5 scientifically validated, technically consistent, premium-quality dough styles.

========================================================
1. INPUT FOUNDATIONS
========================================================

Every new batch of styles must always reference three sources:

A) MASTER SPEC (immutable)  
Defines schema, taxonomy, UI/UX, technical boundaries, naming rules, paywall integration, ranges, categories and consistency rules.

B) Style Content Masterfile (living document)  
Contains:
- all existing styles  
- pending styles  
- category distribution  
- publication dates  
- regional gaps  
- priority list  
- monthly targets

C) Research Backlog  
Contains:
- global bread and pizza trends  
- Modernist Bread and CIA references  
- ICC, AIB, AVPN technical documents  
- cultural and regional data  
- user requests and community feedback

No style may be created without referencing all three inputs.

========================================================
2. MONTHLY STYLE SELECTION RULE
========================================================

Each month, exactly 5 new styles must be produced:

1 style from Pizza  
1 style from Bread  
1 style from Enriched/Pastry  
1 style Regional or Ethnic  
1 style Experimental or Modern

Rules:
- No repeated category within the same month.  
- Diversity of geography and technique.  
- Must support MyLab experiments.  
- Must integrate with Learn keywords.  
- Must respect category, naming and tag rules from the MASTER SPEC.

========================================================
3. RESEARCH VALIDATION
========================================================

Every style must be based on real sources, including (but not limited to):

- Modernist Bread (2017, 2021 editions)  
- CIA — Baking & Pastry Fundamentals  
- ICC (International Association for Cereal Science and Technology)  
- AIB International technical bulletins  
- AVPN Regulations (for Neapolitan pizza)  
- SENAI Panificação e Confeitaria  
- Academic cereal science papers (gluten, fermentation, rheology)  
- Regional cookbooks and ethnographic sources

NO fictional references allowed.
NO invented histories.
NO arbitrary ranges.

========================================================
4. DRAFT LEVEL 1 — INITIAL STRUCTURAL OUTLINE
========================================================

Each new style must begin with:

- Name  
- Category  
- Country/Region  
- Short historical context  
- Realistic hydration/salt/oil/sugar ranges  
- Fermentation method (direct/preferment/sourdough)  
- Tags  
- Initial variations  
- Technical difficulty

This draft must align with the MASTER SPEC's schema and allowed ranges.

========================================================
5. DRAFT LEVEL 2 — FULL CONTENT EXPANSION
========================================================

Then expand into full narrative and science:

- Complete history  
- Cultural timeline  
- Regional variants  
- Technique overview  
- Ranges validated by scientific sources  
- Handling guidelines  
- Fermentation timeline  
- Thermal behavior in ovens  
- Comparisons with similar styles  
- Climate sensitivity (heat/humidity/cold)  
- Modern and classic variations  
- Apply-in-App (Calculator mapping)  
- Experiment templates for MyLab  
- At least 3 real references

========================================================
6. DRAFT LEVEL 3 — NORMALIZATION AND CONSISTENCY
========================================================

Before schema conversion, ensure:

- No conflict with Learn articles  
- No conflict with other styles  
- Hydration within allowed category ranges  
- Tags follow MASTER SPEC rules  
- Naming matches official naming rules  
- Variations follow structural consistency  
- Technical ranges match scientific references  
- Narrative tone matches the Learn/Styles editorial framework

========================================================
7. DRAFT LEVEL 4 — SCHEMA CONVERSION
========================================================

Convert the expanded content into:

DoughStyleDefinition {
   id
   name
   category
   origin
   history
   isCanonical
   technical { ... }
   technicalProfile { ... }
   variations[]
   tags[]
   references[]
   notes[]
}

The final object must:
- follow Typescript EXACTLY  
- follow field naming EXACTLY  
- follow allowed data types EXACTLY

Any field that violates the MASTER SPEC must be rejected.

========================================================
8. CROSS-MODULE INTEGRATION
========================================================

Every style must include:

Learn Integration:
- Map style → learn.topics via keywords

Calculator Integration:
- Map style.technical → DoughConfig presets

MyLab Integration:
- Generate experiments:
   • hydration steps  
   • fermentation environment tests  
   • preferment percentage ladders  
   • flour blend experiments

Tools Integration:
- Enable Doughbot diagnostics  
- Enable OvenProfiler mapping

========================================================
9. CONTENT BATCH CONSTRUCTION
========================================================

Each monthly batch must produce:

styles_YYYY_MM.ts

Containing:
- 5 new styles
- fully validated
- fully normalized
- fully referenced
- fully mapped to Learn and Calculator

========================================================
10. PUBLICATION RULES
========================================================

After schema conversion and integration:

- Add new StyleCards to DoughStylesPage  
- Ensure Pro locks are correctly applied  
- Update Learn cross-links  
- Update Tools and MyLab associations  
- Update Style Content Masterfile with publication date  
- Validate UI consistency across devices  
- Ensure responsiveness and typography rules are followed

========================================================
11. LONG-TERM GOAL (12 MONTHS)
========================================================

At the end of 12 months, the library must contain:

Minimum 60 validated styles:
- 12 Pizza  
- 12 Bread  
- 8 Enriched  
- 8 Pastry  
- 8 Regional  
- 12 Experimental/Modern

All consistent with:

- MASTER SPEC  
- Pipeline Spec  
- Global technical literature

========================================================
12. EXECUTION RULE
========================================================

This pipeline SPEC must be followed for:
- All future style creation
- All expansions
- All corrections
- All schema migrations
- All monthly content batches

This document overrides any previous content creation guidelines.
