---
description: How to integrate ProFeatureLock and manage permissions
---

# Monetization Integration Workflow

This workflow describes how to gate features using the `ProFeatureLock` component and the `permissions` module.

## 1. Define the Feature

1.  Open `src/permissions.ts`.
2.  Add a new key to the `FeatureKey` type definition (e.g., `'my_new_feature'`).
3.  Add the key to `FEATURE_PLAN_MAP` and specify which plans have access (e.g., `['lab_pro']`).

```typescript
export type FeatureKey =
    // ...
    | 'my_new_feature';

export const FEATURE_PLAN_MAP: Record<FeatureKey, PlanId[]> = {
    // ...
    'my_new_feature': ['lab_pro'],
};
```

## 2. Gate the UI Component

### Option A: Block Access Entirely (Overlay)

Use `ProFeatureLock` to wrap the content you want to hide. This will blur the content and show a lock overlay with a call-to-action.

```tsx
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';

// ...

<ProFeatureLock
    featureKey="my_new_feature"
    customMessage="Unlock this amazing feature with Lab Pro."
>
    <MyPremiumComponent />
</ProFeatureLock>
```

### Option B: Check Access Logic (Conditional Rendering)

Use `canUseFeature` to conditionally render elements or change behavior without a full block.

```tsx
import { useUser } from '@/contexts/UserProvider';
import { getCurrentPlan, canUseFeature } from '@/permissions';
import { LockClosedIcon } from '@/components/ui/Icons';

// ...

const { user } = useUser();
const plan = getCurrentPlan(user);
const hasAccess = canUseFeature(plan, 'my_new_feature');

return (
    <div>
        {hasAccess ? (
            <PremiumButton />
        ) : (
            <button disabled className="opacity-50">
                <LockClosedIcon /> Locked
            </button>
        )}
    </div>
);
```

## 3. Verify Navigation

Ensure that any links to the gated feature are either:
-   Allowed, so the user hits the `ProFeatureLock` overlay (good for teasers).
-   Or visually indicated as locked (e.g., with a lock icon) using the logic in Option B.

## 4. Testing

1.  Test with a user on the `free` plan.
2.  Test with a user on the `calculator_unlock` plan (if applicable).
3.  Test with a user on the `lab_pro` plan.
