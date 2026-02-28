# Calculator UI/UX Redesign - Task Plan

**Objective**: Redesign the calculator section to be more intuitive, responsive, clean, didactic, cohesive, logical, sequential, and easy to understand.

## Current Problems

### 1. Visual Hierarchy Issues
- ❌ Large icons and cards waste vertical space
- ❌ Mode selection buttons are too prominent (3 large buttons)
- ❌ Style cards are oversized (grid-cols-2 md:grid-cols-4 lg:grid-cols-5)
- ❌ Excessive padding/margins throughout
- ❌ No clear visual flow between sections

### 2. Information Density
- ❌ Too much white space
- ❌ Important info hidden below the fold
- ❌ Quantity section takes too much space for simple inputs
- ❌ Icons are decorative but not functional

### 3. Responsiveness
- ❌ Mobile view is cramped with large cards
- ❌ Grid layouts don't adapt well to smaller screens
- ❌ Touch targets are inconsistent

### 4. Cognitive Load
- ❌ Too many visual elements competing for attention
- ❌ Unclear which step comes next
- ❌ Mode selection is prominent but not the primary action
- ❌ Style cards show too much info at once

## Design Principles

### 1. Progressive Disclosure
- Show only what's needed at each step
- Collapse completed sections
- Expand current section
- Preview next step

### 2. Visual Hierarchy
```
Priority 1: Current Step (Expanded, Highlighted)
Priority 2: Next Step (Visible, Muted)
Priority 3: Completed Steps (Collapsed, Checkmark)
Priority 4: Future Steps (Collapsed, Disabled)
```

### 3. Information Density
- Compact mode selection (segmented control)
- Smaller style cards (grid-cols-3 md:grid-cols-6)
- Inline labels and inputs
- Remove decorative icons, keep functional ones

### 4. Mobile-First
- Single column on mobile
- Sticky headers for context
- Bottom sheet for selections
- Swipe gestures for navigation

## Implementation Plan

### Phase 1: Mode Selection Redesign
**File**: `src/components/calculator/ModeSelectionScreen.tsx`

**Changes**:
- Reduce height from `h-[60px]` to `h-[44px]`
- Simplify to icon + label only (remove description from main view)
- Use smaller icons (w-6 h-6 instead of w-8 h-8)
- Compact grid gap from `gap-3` to `gap-2`
- Add tooltip for descriptions on hover

**Before**:
```tsx
<button className="relative group flex flex-row items-center p-3 rounded-xl h-[60px]">
  <div className="w-8 h-8 rounded-lg">
    <SparklesIcon className="w-5 h-5" />
  </div>
  <div className="flex-grow">
    <h3>{mode.title}</h3>
    <p>{mode.description}</p>
  </div>
</button>
```

**After**:
```tsx
<button className="relative group flex items-center justify-center p-2 rounded-lg h-[44px]">
  <SparklesIcon className="w-4 h-4" />
  <span className="text-xs ml-2">{mode.title}</span>
  <InfoTooltip content={mode.description} />
</button>
```

### Phase 2: Style Section Optimization
**File**: `src/components/calculator/sections/StyleSection.tsx`

**Changes**:
1. **Category Tabs** - Reduce from 3 large buttons to compact pills
2. **Search Bar** - Make more compact (py-2 instead of py-3)
3. **Country Filters** - Reduce pill size (px-3 py-1 instead of px-4 py-1.5)
4. **Style Grid** - Increase density:
   - Mobile: `grid-cols-3` (instead of 2)
   - Tablet: `grid-cols-6` (instead of 4)
   - Desktop: `grid-cols-8` (instead of 5)
5. **Style Cards** - Reduce size:
   - Remove `min-h-[90px]`
   - Reduce padding from `p-4` to `p-2.5`
   - Smaller text (text-[10px] instead of text-xs)
   - Icon-only on mobile, text on hover

**Before**:
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
  <button className="relative group/item flex flex-col p-4 rounded-3xl min-h-[90px]">
    <div className="mb-auto text-xs font-bold">{preset.name}</div>
    <div className="text-[9px] mt-2">{preset.description}</div>
  </button>
</div>
```

**After**:
```tsx
<div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2">
  <button className="relative group/item flex flex-col p-2.5 rounded-2xl aspect-square">
    <div className="text-[10px] font-bold line-clamp-2">{preset.name}</div>
    <InfoTooltip content={preset.description} />
  </button>
</div>
```

### Phase 3: Quantity Section Simplification
**File**: `src/components/calculator/sections/QuantitySection.tsx`

**Changes**:
1. **Mode Selector** - Horizontal scroll on mobile, compact buttons
2. **Inputs** - Side-by-side layout on desktop
3. **Labels** - Inline instead of above
4. **Remove** - Excessive spacing and decorative elements

**Before**:
```tsx
<div className="bg-slate-100/80 p-1 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-2">
  <button className="flex items-center justify-center gap-2 py-2.5 px-4">
    {item.icon}
    {item.label}
  </button>
</div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  {/* inputs */}
</div>
```

**After**:
```tsx
<div className="flex gap-2 overflow-x-auto pb-2">
  <button className="flex-shrink-0 flex items-center gap-1.5 py-1.5 px-3 text-[10px]">
    {item.icon}
    {item.label}
  </button>
</div>
<div className="grid grid-cols-2 gap-3">
  {/* inputs */}
</div>
```

### Phase 4: Accordion Behavior Enhancement
**File**: `src/components/calculator/AccordionSection.tsx`

**Changes**:
1. Auto-collapse completed sections
2. Show checkmark on completed
3. Disable future sections until prerequisites met
4. Smooth scroll to active section
5. Compact header when collapsed

**New Props**:
```tsx
interface AccordionSectionProps {
  isCompleted?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  onToggle?: () => void;
}
```

### Phase 5: Overall Layout Optimization
**File**: `src/pages/CalculatorPage.tsx`

**Changes**:
1. Reduce top-level spacing from `space-y-8` to `space-y-4`
2. Remove excessive padding from sections
3. Make mode selection less prominent
4. Sticky section headers on scroll
5. Add progress indicator (1/5, 2/5, etc.)

### Phase 6: Mobile Optimizations
**All Components**

**Changes**:
1. Bottom sheet for style selection on mobile
2. Swipe gestures between sections
3. Floating action button for "Calculate"
4. Sticky summary bar at bottom
5. Reduce all font sizes by 1-2px on mobile

## Visual Design Updates

### Color Palette Simplification
- Primary: `#51a145` (keep)
- Secondary: `#1B4332` (keep)
- Neutral: Reduce shades from 10 to 5
- Remove: Excessive gradients

### Typography Scale
```
Mobile:
- Headings: 10px → 12px
- Body: 11px → 13px
- Small: 9px → 10px

Desktop:
- Headings: 12px → 14px
- Body: 13px → 15px
- Small: 10px → 11px
```

### Spacing Scale
```
Before: 0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24
After:  0, 1, 2, 3, 4, 6, 8, 12, 16, 24
```

### Border Radius
```
Before: rounded-xl (12px), rounded-2xl (16px), rounded-3xl (24px)
After:  rounded-lg (8px), rounded-xl (12px), rounded-2xl (16px)
```

## Success Metrics

- [ ] Reduce vertical scroll by 30%
- [ ] Increase information density by 40%
- [ ] Improve mobile usability score
- [ ] Reduce cognitive load (fewer visual elements)
- [ ] Maintain accessibility (WCAG AA)
- [ ] Faster task completion time

## Implementation Order

1. ✅ Create task plan (this file)
2. ⏳ Mode Selection (15 min)
3. ⏳ Quantity Section (20 min)
4. ⏳ Style Section (30 min)
5. ⏳ Accordion Behavior (25 min)
6. ⏳ Overall Layout (15 min)
7. ⏳ Mobile Optimizations (30 min)
8. ⏳ Testing & Refinement (30 min)

**Total Estimated Time**: 2.5 hours

## Notes

- Keep existing functionality intact
- Maintain translation support
- Preserve accessibility features
- Test on multiple screen sizes
- Get user feedback before finalizing
