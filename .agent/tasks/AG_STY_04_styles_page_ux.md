# AG_STY_04 — DoughStylesPage UI/UX Overhaul

## Goal
Transform `DoughStylesPage.tsx` from a static filter + grid page into a **dynamic, responsive, premium library experience**. Filters must feel snappy, transitions smooth, and the overall page must match the premium aesthetic of the StyleCard improvements from AG_STY_03.

---

## File to Edit
`src/pages/styles/DoughStylesPage.tsx`

Also review and potentially update:
- `src/components/styles/StyleCard.tsx` (if any grid-level props need passing)
- `src/components/styles/FilterDrawer.tsx` (if exists)

---

## Current Problems
- Category/region pills have no visual state feedback on selection
- The filter bar is sticky but looks generic
- No animated transition when the grid content changes (filter results just "snap" in)
- Groups of styles have heavy/boring section headers
- Empty state is acceptable but not delightful
- No count indicator showing how many styles match current filters
- Results grid uses a fixed 2-column layout on mobile — should adapt more gracefully
- No keyboard navigation support for filter pills
- No "Clear Filters" shortcut visible when filters are active

---

## Required Changes

### 1. Animated Grid Content Transitions

Wrap the styled grid with an animation trigger:
```tsx
// When filters change, apply a brief fade + slight slide-up to the results
const [gridKey, setGridKey] = useState(0);

// When filter state changes:
useEffect(() => {
  setGridKey(prev => prev + 1);
}, [activeCategory, activeRegion, showFavoritesOnly, searchQuery]);

// In JSX:
<div
  key={gridKey}
  className="animate-fade-in-up"
>
  {/* grid content */}
</div>
```

Add to `index.css`:
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 200ms ease-out both;
}
```

### 2. Filter Pills — Active State + Press Animation

```tsx
// Category pill
<button
  key={cat}
  onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
  className={`
    px-3 py-1.5 rounded-full text-xs font-semibold
    transition-all duration-200 active:scale-95
    ${activeCategory === cat
      ? 'bg-lime-500 text-white shadow-md shadow-lime-200 scale-105'
      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
    }
  `}
>
  {categoryEmoji(cat)} {categoryLabel(cat)}
</button>
```

### 3. Results Count Badge

Add a real-time count pill next to the search bar:
```tsx
<span className={`
  rounded-full px-2.5 py-0.5 text-xs font-semibold
  transition-all duration-300
  ${filteredCount > 0 ? 'bg-lime-100 text-lime-700' : 'bg-red-100 text-red-600'}
`}>
  {filteredCount} style{filteredCount !== 1 ? 's' : ''}
</span>
```

### 4. "Clear All Filters" Button

When any filter is active (search, category, region, or favorites), show a subtle clear button:
```tsx
{hasActiveFilters && (
  <button
    onClick={clearAllFilters}
    className="flex items-center gap-1 rounded-full border border-stone-200 px-3 py-1
               text-xs text-stone-500 hover:border-stone-300 hover:text-stone-700
               transition-all duration-150 active:scale-95"
  >
    <XIcon size={11} />
    Clear
  </button>
)}
```

### 5. Group Section Headers — Refined Style

Replace heavy group headers with a lighter, more elegant design:
```tsx
// Group header
<div className="mb-3 mt-6 flex items-center gap-2 first:mt-0">
  <span className="text-xl">{groupEmoji(groupKey)}</span>
  <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400">
    {groupLabel(groupKey)}
  </h2>
  <div className="flex-1 h-px bg-stone-100" />
  <span className="text-xs text-stone-300 font-medium">
    {groupStyles.length}
  </span>
</div>
```

**Group emoji mapping:**
```ts
const groupEmojis: Record<string, string> = {
  pizza:    '🍕',
  bread:    '🍞',
  enriched: '🥐',
  buns:     '🍔',
  pastry:   '🥧',
  cookies:  '🍪',
  flatbread:'🫓',
  other:    '🫙',
};
```

### 6. Responsive Grid

Replace current grid classes with adaptive ones:
```tsx
<div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
  {groupStyles.map(style => (
    <StyleCard key={style.id} style={style} />
  ))}
</div>
```

### 7. Search Bar Enhancement

Add a clear button inside the search input when text is present:
```tsx
<div className="relative flex-1">
  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={15} />
  <input
    value={searchQuery}
    onChange={e => setSearchQuery(e.target.value)}
    placeholder="Search styles..."
    className="w-full rounded-xl border border-stone-200 bg-white
               py-2 pl-9 pr-8 text-sm text-stone-800
               placeholder:text-stone-400
               focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-100
               transition-all duration-150"
  />
  {searchQuery && (
    <button
      onClick={() => setSearchQuery('')}
      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
    >
      <XIcon size={14} />
    </button>
  )}
</div>
```

### 8. Empty State — Delightful Version

When no styles match filters:
```tsx
<div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
  <div className="text-5xl">🔍</div>
  <div>
    <p className="text-base font-semibold text-stone-700">No styles found</p>
    <p className="mt-1 text-sm text-stone-400">
      Try adjusting your filters or search query
    </p>
  </div>
  <button
    onClick={clearAllFilters}
    className="rounded-xl bg-lime-500 px-4 py-2 text-sm font-semibold text-white
               hover:bg-lime-400 transition-colors duration-150"
  >
    Show All Styles
  </button>
</div>
```

### 9. Sticky Filter Bar — Polish

Make the sticky header feel more refined:
```tsx
<div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-stone-100 px-4 py-3 shadow-sm">
  {/* Search + count + clear */}
  <div className="flex items-center gap-2 mb-2.5">
    {/* search input */}
    {/* count badge */}
    {/* clear button (conditional) */}
    {/* filter drawer toggle */}
  </div>
  {/* Category pills (horizontal scroll) */}
  <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-hide">
    {/* All pill */}
    {/* Category pills */}
  </div>
</div>
```

Add to CSS:
```css
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
```

### 10. Loading State — Staggered Skeletons

When `isLoading` is true, render staggered skeleton cards:
```tsx
{isLoading && (
  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
    {Array.from({ length: 8 }).map((_, i) => (
      <div
        key={i}
        style={{ animationDelay: `${i * 50}ms` }}
        className="animate-fade-in-up"
      >
        <StyleCardSkeleton />
      </div>
    ))}
  </div>
)}
```

---

## Acceptance Criteria
- [ ] Filter pills animate on active state change (scale-105 + lime background for selected)
- [ ] Grid fades in smoothly when filters change (200ms fade-in-up)
- [ ] Results count badge visible and updates in real-time
- [ ] "Clear Filters" button appears when any filter is active, clears all on click
- [ ] Group headers are light and elegant (emoji + uppercase label + separator line + count)
- [ ] Search bar has internal clear (X) button when text is present
- [ ] Responsive grid: 2 cols mobile, 3 cols md, 4 cols lg, 5 cols xl
- [ ] Empty state has emoji + message + "Show All" CTA
- [ ] Sticky filter bar uses backdrop-blur for glass effect
- [ ] Skeleton cards have staggered animation delay on loading
- [ ] Horizontal pill scroll hides scrollbar on mobile
- [ ] TypeScript compiles without errors
- [ ] No performance regression (avoid re-renders on every keystroke — use debounce on search)

---

## Notes
- Add 300ms debounce to the search input to avoid re-filtering on every keystroke:
  ```ts
  const [debouncedSearch, setDebouncedSearch] = useState('');
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchQuery), 300);
    return () => clearTimeout(t);
  }, [searchQuery]);
  // Use debouncedSearch for filtering instead of searchQuery
  ```
- Keep all existing routing, permissions, and data-fetching logic intact
- The favorites toggle behavior must remain unchanged
- Region pills behavior must remain unchanged
