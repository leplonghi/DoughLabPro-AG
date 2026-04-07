# 🎨 DoughLabPro - Enhanced UI Components Guide

## Overview

This guide documents the new dynamic and responsive UI components created to make the DoughLabPro app more interactive, intuitive, and visually engaging.

## 📦 New Components

### 1. AnimatedCard

A reusable card component with smooth animations and hover effects.

**Usage:**
```tsx
import { AnimatedCard } from '@/components/ui/AnimatedCard';

<AnimatedCard
  variant="hover-lift"
  animation="fade-in-scale"
  delay={1}
  onClick={() => console.log('Clicked!')}
>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</AnimatedCard>
```

**Props:**
- `variant`: 'default' | 'hover-lift' | 'hover-scale' | 'hover-glow'
- `animation`: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'fade-in-scale'
- `delay`: 0-5 (for stagger effects)
- `onClick`: Optional click handler

---

### 2. Skeleton Loading Components

Loading placeholders with shimmer animation.

**Usage:**
```tsx
import { Skeleton, SkeletonCard, SkeletonList } from '@/components/ui/Skeleton';

// Simple skeleton
<Skeleton variant="text" count={3} />

// Pre-configured card skeleton
<SkeletonCard />

// Pre-configured list skeleton
<SkeletonList items={5} />
```

**Variants:**
- `text`: Single line text placeholder
- `title`: Larger title placeholder
- `card`: Full card placeholder
- `circle`: Circular placeholder (for avatars)
- `custom`: Custom dimensions

---

### 3. AnimatedButton

Enhanced button with multiple variants and loading states.

**Usage:**
```tsx
import { AnimatedButton } from '@/components/ui/AnimatedButton';

<AnimatedButton
  variant="primary"
  size="md"
  loading={isLoading}
  icon={<PlusIcon />}
  iconPosition="left"
  onClick={handleClick}
>
  Click Me
</AnimatedButton>
```

**Variants:**
- `primary`: Green gradient (main CTA)
- `secondary`: Gray background
- `outline`: Bordered with transparent background
- `ghost`: Transparent with hover effect
- `danger`: Red for destructive actions

**Sizes:**
- `sm`: Small (compact)
- `md`: Medium (default)
- `lg`: Large (prominent)

---

### 4. AnimatedInput

Enhanced input field with floating labels and smooth animations.

**Usage:**
```tsx
import { AnimatedInput } from '@/components/ui/AnimatedInput';

<AnimatedInput
  label="Email Address"
  type="email"
  value={email}
  onChange={setEmail}
  placeholder="Enter your email"
  error={emailError}
  hint="We'll never share your email"
  icon={<MailIcon />}
  iconPosition="left"
  required
/>
```

**Features:**
- Floating label animation
- Icon support (left or right)
- Error and hint messages
- Number input with increment/decrement buttons
- Smooth focus states

---

### 5. PageTransition

Smooth page transition wrapper.

**Usage:**
```tsx
import { PageTransition } from '@/components/ui/PageTransition';

<PageTransition pageKey={currentPage} animation="slide-up">
  <YourPageContent />
</PageTransition>
```

**Animations:**
- `fade`: Simple fade in/out
- `slide-up`: Slide from bottom
- `slide-left`: Slide from right
- `slide-right`: Slide from left
- `scale`: Scale up from center

---

### 6. Toast Notifications

Dynamic toast notifications with auto-dismiss.

**Usage:**
```tsx
import { Toast, ToastContainer } from '@/components/ui/AnimatedToast';

// Single toast
<Toast
  message="Successfully saved!"
  type="success"
  duration={5000}
  action={{
    label: "Undo",
    onClick: handleUndo
  }}
/>

// Toast container (for managing multiple toasts)
<ToastContainer
  toasts={toastList}
  onRemove={removeToast}
  position="top-right"
/>
```

**Types:**
- `success`: Green (positive actions)
- `error`: Red (errors)
- `warning`: Amber (warnings)
- `info`: Blue (informational)

---

## 🎨 CSS Utilities

### Animation Classes

```css
/* Slide Animations */
.animate-slide-up
.animate-slide-down
.animate-slide-in-left
.animate-slide-in-right

/* Fade Animations */
.animate-fade-in
.animate-fade-in-scale

/* Other Animations */
.animate-bounce
.animate-pulse
.animate-spin

/* Stagger Delays */
.stagger-1  /* 0.1s delay */
.stagger-2  /* 0.2s delay */
.stagger-3  /* 0.3s delay */
.stagger-4  /* 0.4s delay */
.stagger-5  /* 0.5s delay */
```

### Interaction Classes

```css
/* Interactive Elements */
.interactive          /* Hover lift + shadow */
.hover-lift          /* Lift on hover */
.hover-scale         /* Scale on hover */
.hover-glow          /* Glow effect on hover */
.btn-press           /* Press effect on click */

/* Transitions */
.transition-smooth   /* 300ms smooth transition */
.transition-fast     /* 150ms fast transition */
.transition-slow     /* 500ms slow transition */

/* Focus States */
.focus-ring          /* Accessible focus ring */
```

### Skeleton Loading

```css
.skeleton            /* Base skeleton with shimmer */
.skeleton-text       /* Text line skeleton */
.skeleton-title      /* Title skeleton */
.skeleton-card       /* Card skeleton */
```

### Responsive Utilities

```css
/* Mobile-specific (< 640px) */
.touch-target        /* Min 44x44px for touch */
.mobile-padding      /* 1rem horizontal padding */
.mobile-text-lg      /* Larger text on mobile */
```

---

## 🎯 Best Practices

### 1. **Use Stagger Effects for Lists**

When rendering lists of items, use stagger delays for a polished entrance:

```tsx
{items.map((item, index) => (
  <AnimatedCard
    key={item.id}
    animation="slide-in-left"
    delay={Math.min(index + 1, 5)}
  >
    {item.content}
  </AnimatedCard>
))}
```

### 2. **Show Loading States**

Always provide visual feedback during async operations:

```tsx
{isLoading ? (
  <SkeletonCard />
) : (
  <AnimatedCard animation="fade-in-scale">
    {content}
  </AnimatedCard>
)}
```

### 3. **Use Appropriate Button Variants**

- **Primary**: Main actions (Save, Submit, Continue)
- **Secondary**: Secondary actions (Cancel, Back)
- **Outline**: Alternative actions
- **Ghost**: Tertiary actions
- **Danger**: Destructive actions (Delete, Remove)

### 4. **Provide User Feedback**

Use toasts for important notifications:

```tsx
// Success
showToast({ message: "Recipe saved!", type: "success" });

// Error
showToast({ message: "Failed to save", type: "error" });

// With action
showToast({
  message: "Recipe deleted",
  type: "info",
  action: { label: "Undo", onClick: handleUndo }
});
```

### 5. **Optimize Mobile Experience**

- Use `touch-target` class for clickable elements
- Ensure minimum 44x44px touch targets
- Test all interactions on mobile devices
- Use appropriate font sizes for mobile

---

## 🚀 Performance Tips

1. **Lazy Load Heavy Components**: Use React.lazy() for large components
2. **Debounce Input Handlers**: Prevent excessive re-renders
3. **Use Skeleton Screens**: Better perceived performance than spinners
4. **Optimize Animations**: Keep animations under 300ms for snappy feel
5. **Reduce Animation Complexity**: Avoid animating expensive properties

---

## 📱 Responsive Design

All components are mobile-first and fully responsive:

- **Mobile (< 640px)**: Touch-optimized, larger targets
- **Tablet (640px - 1024px)**: Balanced layout
- **Desktop (> 1024px)**: Full feature set with hover effects

---

## 🎨 Design Tokens

The app uses a consistent design system:

```css
/* Colors */
--dlp-brand: #51a145
--dlp-brand-hover: #36782c
--dlp-text-primary: #0F172A
--dlp-text-secondary: #334155
--dlp-text-muted: #64748B

/* Shadows */
--dlp-shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--dlp-shadow-md: 0 10px 15px -3px rgba(0,0,0,0.05)
--dlp-shadow-lg: 0 20px 25px -5px rgba(0,0,0,0.05)

/* Timing */
cubic-bezier(0.4, 0, 0.2, 1) /* Smooth easing */
```

---

## 🔧 Customization

All components accept `className` prop for custom styling:

```tsx
<AnimatedButton
  className="my-custom-class"
  variant="primary"
>
  Custom Styled Button
</AnimatedButton>
```

---

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Animation Best Practices](https://react.dev/learn/adding-interactivity)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated**: December 2024
**Version**: 1.0.0
