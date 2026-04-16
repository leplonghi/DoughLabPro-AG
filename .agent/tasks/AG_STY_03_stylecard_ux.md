# AG_STY_03 — StyleCard Component UI/UX Overhaul

## Goal
Transform `StyleCard.tsx` from a static, flat card into a **premium, tactile, animated card** that feels worthy of a professional baking app. The card must feel alive: image loads smoothly, hover states are satisfying, badges are crisp, and the CTA is compelling.

---

## File to Edit
`src/components/styles/StyleCard.tsx`

Also update its skeleton (if separate file): `src/components/styles/StyleCardSkeleton.tsx`

---

## Current Problems
- No hover animation (card is completely static)
- No image loading transition (hard pop or broken)
- Gradient overlay on image is too heavy — darkens too much
- Category badge and PRO/NEW badges are visually disconnected
- Difficulty/hydration badges are plain colored chips with no visual hierarchy
- Favorite button has no animation feedback
- "Use in Calculator" CTA is small and low contrast
- No visual indication of which cards are new/recently added
- Card shadow is generic — no depth system

---

## Design Reference
Target aesthetic: **Otis Kitchen App, Salt Fat Acid Heat digital edition, Modernist Cuisine UI**.
Premium, minimal, content-first. Shadows that feel like real paper elevation. Touches that reward the user.

---

## Required Changes

### 1. Card Container

```tsx
// Replace current card wrapper with:
<div
  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white
             shadow-[0_2px_8px_rgba(0,0,0,0.08)]
             hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)]
             transition-all duration-300 ease-out
             hover:-translate-y-1
             active:scale-[0.98] active:shadow-[0_2px_8px_rgba(0,0,0,0.08)]
             cursor-pointer"
  onClick={handleCardClick}
>
```

### 2. Image Area — Smooth Loading + Parallax Effect

Replace the current image `<img>` with a stateful component that:
- Shows a shimmer skeleton while the image loads (`useState(false)` → `onLoad` sets to `true`)
- Fades in the image when loaded (`opacity-0 → opacity-100` transition 400ms)
- On `group-hover`, applies a subtle zoom: `transition-transform duration-500 ease-out group-hover:scale-105`
- Reduces gradient overlay opacity: from `from-black/60` → `from-black/40 to-transparent`

```tsx
// Image wrapper
<div className="relative h-52 overflow-hidden bg-stone-100">
  {/* Skeleton shimmer while loading */}
  {!imageLoaded && (
    <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-stone-200 to-stone-100 animate-shimmer" />
  )}

  {/* The actual image */}
  <img
    src={style.images?.hero || PLACEHOLDER}
    alt={style.name}
    className={`h-full w-full object-cover transition-all duration-500 ease-out
                group-hover:scale-105
                ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
    onLoad={() => setImageLoaded(true)}
    onError={() => setImageLoaded(true)} // show fallback without flash
  />

  {/* Lighter gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

  {/* Badges (top-left, top-right) */}
  ...
</div>
```

### 3. Badges — Refined Visual Hierarchy

**Category badge (top-left over image):**
```tsx
<span className="absolute top-3 left-3
                 rounded-full bg-white/90 backdrop-blur-sm
                 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide
                 text-stone-700 shadow-sm">
  {categoryLabel}
</span>
```

**PRO badge (top-right):**
```tsx
// If style.isPro:
<span className="absolute top-3 right-3
                 rounded-full bg-amber-500
                 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white
                 shadow-md">
  PRO
</span>
```

**NEW badge (top-right, below PRO if both):**
```tsx
// If style is new (createdAt < 30 days):
<span className="absolute top-3 right-3
                 rounded-full bg-emerald-500
                 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white
                 shadow-md animate-pulse-once">
  NEW
</span>
```

**Origin country tag (bottom-right of image):**
```tsx
<span className="absolute bottom-3 right-3
                 rounded-full bg-black/40 backdrop-blur-sm
                 px-2 py-0.5 text-[10px] text-white/90">
  🌍 {style.origin?.country}
</span>
```

### 4. Card Body — Better Information Architecture

```tsx
<div className="flex flex-1 flex-col gap-3 p-4">

  {/* Name + Description */}
  <div className="flex flex-col gap-1">
    <h3 className="text-base font-bold text-stone-900 leading-tight line-clamp-1">
      {style.name}
    </h3>
    <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
      {style.description}
    </p>
  </div>

  {/* Technical badges row */}
  <div className="flex flex-wrap gap-1.5">
    {/* Hydration badge */}
    <TechBadge
      icon="💧"
      label={`${style.technicalProfile.hydration[0]}–${style.technicalProfile.hydration[1]}%`}
      sublabel="Hydration"
      color="blue"
    />
    {/* Difficulty badge */}
    <TechBadge
      icon={difficultyIcon(style.difficulty)}
      label={style.difficulty}
      color={difficultyColor(style.difficulty)}
    />
    {/* Fermentation type */}
    <TechBadge
      icon="🧪"
      label={fermentationLabel(style.fermentationType)}
      color="purple"
    />
  </div>

  {/* Spacer */}
  <div className="flex-1" />

  {/* Actions row */}
  <div className="flex items-center gap-2">
    <FavoriteButton styleId={style.id} />
    <CTAButton styleId={style.id} isPro={style.isPro} />
  </div>

</div>
```

### 5. TechBadge Sub-component (create inline or in same file)

```tsx
const TechBadge = ({ icon, label, sublabel, color }: TechBadgeProps) => {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    purple: 'bg-purple-50 text-purple-700 border-purple-100',
    red: 'bg-red-50 text-red-700 border-red-100',
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[11px] font-medium ${colorMap[color]}`}>
      <span>{icon}</span>
      <span>{label}</span>
      {sublabel && <span className="text-[10px] opacity-60">· {sublabel}</span>}
    </span>
  );
};
```

### 6. Favorite Button — Animated Heart

```tsx
const FavoriteButton = ({ styleId }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const [animating, setAnimating] = useState(false);
  const fav = isFavorite(styleId);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAnimating(true);
    toggleFavorite(styleId);
    setTimeout(() => setAnimating(false), 400);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex h-9 w-9 items-center justify-center rounded-full border
                  transition-all duration-200
                  ${fav ? 'border-rose-200 bg-rose-50 text-rose-500' : 'border-stone-200 bg-stone-50 text-stone-400'}
                  hover:scale-110 active:scale-95
                  ${animating ? 'scale-125' : 'scale-100'}`}
      aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
    >
      <HeartIcon filled={fav} size={16} />
    </button>
  );
};
```

### 7. CTA Button — "Use in Calculator"

```tsx
<LockFeature styleId={style.id}>
  <button
    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl
               bg-lime-500 hover:bg-lime-400 active:bg-lime-600
               px-3 py-2 text-xs font-semibold text-white
               transition-all duration-200 hover:shadow-md hover:shadow-lime-200
               active:scale-95"
  >
    <CalculatorIcon size={13} />
    Use in Calculator
  </button>
</LockFeature>
```

### 8. Skeleton Update

Update `StyleCardSkeleton` to match the new card dimensions:
- Image skeleton: `h-52 rounded-2xl` with shimmer animation
- Two text line skeletons
- Three badge skeletons
- CTA skeleton

---

## Acceptance Criteria
- [ ] Card lifts on hover (`-translate-y-1` + heavier shadow)
- [ ] Image fades in smoothly when loaded (no pop/flash)
- [ ] Image zooms subtly on hover (scale-105)
- [ ] Gradient overlay is lighter (not too dark)
- [ ] Category badge uses glass-morphism style (`bg-white/90 backdrop-blur-sm`)
- [ ] PRO badge is amber, NEW badge is emerald
- [ ] Difficulty and hydration rendered as `TechBadge` components with icons and color coding
- [ ] Favorite button animates (scale pulse) on click
- [ ] CTA button has lime background, shadow on hover
- [ ] Skeleton matches new card structure
- [ ] All existing click handlers preserved (card → detail, CTA → calculator, heart → toggle)
- [ ] TypeScript compiles without errors
- [ ] No regressions on mobile (touch targets ≥ 44px)

---

## Notes
- Keep all existing logic (LockFeature, useFavorites, router navigation) intact — only change visuals
- Do not change the card's grid layout in DoughStylesPage (that's handled by AG_STY_04)
- Use Tailwind utility classes only — no custom CSS unless a shimmer keyframe is needed
- Add `@keyframes shimmer` to `index.css` if not already present:
  ```css
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  .animate-shimmer {
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite linear;
  }
  ```
