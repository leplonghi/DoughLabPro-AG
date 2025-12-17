# Fix Permissions System

## Problem Analysis
User reports that in MyLab, the AI access card shows as locked with "unlock pro" message even though the user is already Pro.

## Permission System Overview

### Current Setup:
1. **User.plan** can be: `'free'`, `'calculator_unlock'`, `'lab_pro'`
2. **User.isPro** boolean flag
3. **isProUser()** function checks: `isPro || plan === 'pro' || plan === 'lab_pro' || isTrialActive()`
4. **hasProAccess** = `isProUser(user) || isSessionPro`

### Permission Keys:
- `mylab.unlimited_advanced` - requires `['lab_pro']` plan
- `mylab.quickAction` - requires `['lab_pro']` plan  
- `mylab.healthIndex` - requires `['lab_pro']` plan

## Issues Found:

1. **LockFeature component** uses `getCurrentPlan()` and `canUseFeature()` which check the permissions.ts mapping
2. The permissions are correctly mapped to `'lab_pro'`
3. Need to verify that user.plan is actually set to `'lab_pro'` and not just `isPro: true`

## Solution:

1. Ensure admin/pro users have `plan: 'lab_pro'` in Firestore
2. Add console logging to debug permission checks
3. Verify LockFeature is receiving correct user state
4. Check if there's a loading state issue causing premature lock display

## Files to Check:
- `src/contexts/UserProvider.tsx` - User state management
- `src/components/auth/LockFeature.tsx` - Lock component
- `src/permissions.ts` - Permission mappings
- `src/lib/permissions.ts` - isProUser function
