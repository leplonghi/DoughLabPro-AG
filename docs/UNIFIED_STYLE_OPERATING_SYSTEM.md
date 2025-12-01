# Unified Style Operating System (USOS)

This document unifies the **PIPELINE SPEC** and the **STYLES OVERHAUL SPEC** into a single coordinated operating system for DoughLabPro. It serves as the authoritative source for all style production, validation, and integration.

## 1. Production Cycle (Pipeline Spec)
The **PIPELINE SPEC** controls the monthly style production cycle. All style batches must proceed through the following stages:
1.  **Research**: Gathering data from authoritative sources (Modernist Bread, CIA, ICC, AIB, AVPN, etc.).
2.  **Draft**: Creating initial definitions.
3.  **Expansion**: Adding regional, historical, and technical depth.
4.  **Normalization**: Aligning with the unified schema.
5.  **Schema Conversion**: Transforming into the strict JSON format.
6.  **Integration**: Committing to the codebase.

## 2. Schema & UX Governance (Overhaul Spec)
The **OVERHAUL SPEC** governs the UI/UX, schema normalization, data format, and behavior requirements for 2025.
*   **Unified Schema**: ALL styles must follow the unified schema defined in the Overhaul.
*   **UI/UX Constraints**:
    *   Tags: Maximum 4.
    *   Region: Required.
    *   Period: Required.
    *   Difficulty: Required.
    *   Fermentation Type: Required.
*   **Filtering Support**: All styles must include values for tags, difficulty, region, and fermentation type to support the new filtering system.

## 3. Hierarchy of Authority
The **PIPELINE SPEC** is **SUBORDINATED** to the Overhaul schema.
*   **Conflict: Content vs. Schema** → **SCHEMA** (Overhaul) wins.
*   **Conflict: Content vs. UX Behavior** → **UX RULES** win.
*   **Conflict: References vs. Naming/Taxonomy** → **MASTER SPEC** wins.

## 4. Output Format
ALL new styles must use the **3-block hybrid format**:
1.  **Technical Summary** (Internal Comment): Brief overview of technical parameters.
2.  **Historical Extract** (Internal Comment): Context and history.
3.  **Final JSON Schema** (Strict `DoughStyleDefinition`): The executable code block.

## 5. Mandatory Fields
The following fields are **MANDATORY** for any style created by the pipeline:
*   `id`
*   `name`
*   `category`
*   `origin` (`country`, `region`, `period`)
*   `description`
*   `history`
*   `tags[]`
*   `difficulty`
*   `fermentationType` (mapped to `technicalProfile`)
*   `technicalProfile`:
    *   `hydration` [min, max]
    *   `salt` [min, max]
    *   `oil` [min, max] (optional/0 if none)
    *   `sugar` [min, max] (optional/0 if none)
    *   `cocoa` (optional)
    *   `flourStrength` (optional)
    *   `preferment` (optional)
    *   `fermentationSteps[]` (mapped to `fermentation` object)
    *   `ovenTemp` (mapped to `ovenRecommendations` or `oven` object)
    *   `recommendedUse[]`
    *   `difficulty`
*   `warnings[]` (mapped to `risks`)
*   `notes[]`
*   `references[]`
*   `releaseDate` (optional/internal tracking)

## 6. Technical Constraints
*   **Size Limit**: ALL new styles must be **≤ 8KB JSON**.
*   **Validation**: ALL technical ranges, historical claims, and cultural origins MUST be validated by real sources (Modernist Bread, CIA, ICC, AIB, AVPN, etc.).

## 7. Delivery & Compatibility
ALL new monthly 5-style batches must be delivered fully compatible with:
*   **Styles Library 2025 layout**
*   **Style Detail Page scientific dossier model**
*   **Calculator preload mapping**
*   **Learn article cross-links**
*   **Firestore userStyles compatibility**
