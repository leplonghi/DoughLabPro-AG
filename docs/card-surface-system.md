# Card And Surface System

## Goal
Keep the app visually green-first, clean, and coherent without letting local Tailwind colors redefine cards page by page.

## Surface Variants
- `base`: standard reading cards
- `elevated`: more premium sections and key summaries
- `glass`: default premium shell surface
- `soft`: quiet supporting cards
- `interactive`: hoverable cards and tiles

## Semantic Tones
- `brand`: primary DoughLab identity and premium emphasis
- `neutral`: default structural content
- `info`: technical notes, references, comparisons, passive educational cues
- `success`: confirmations and healthy states
- `warning`: caution, incomplete setup, risky conditions
- `danger`: failures and destructive actions

## Rules
- Do not use raw `blue/slate/indigo/cyan` classes to define card identity.
- Blue is allowed only as scoped `info` semantics.
- Warning stays amber.
- Danger stays red.
- Default titles and body copy should use the design-system ink colors, not page-local slate stacks.
- New cards must start from shared primitives:
  - `AppSurface`
  - `MetricCard`
  - `StatusBadge`
  - `InlineNotice`
  - `SectionCard`
  - `InfoCard`
  - `EmptyStateCard`

## Migration Checklist
1. Choose a primitive.
2. Choose `surface`.
3. Choose `tone`.
4. Use semantic badges/notices instead of local color pills.
5. Avoid raw Tailwind color classes unless the use is truly semantic and intentional.

## Review Guidance
- If a new card looks dark navy, SaaS blue, or slate-heavy, it is probably outside the system.
- If a blue tone is driving an entire card background, it should almost always be reworked into `neutral`, `brand`, or `soft`.
- If a component needs a new visual treatment more than once, promote it into a shared primitive instead of repeating custom class stacks.
