---
description: How to deploy DoughLabPro to Firebase Hosting
---

# Deploy DoughLabPro to Firebase Hosting

This workflow guides you through deploying the DoughLabPro application to Firebase Hosting.

## Prerequisites
- Firebase CLI installed (`firebase-tools` is in devDependencies)
- Firebase project configured
- Authenticated with Firebase CLI

## Deployment Steps

### 1. Build the production bundle
// turbo
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### 2. Deploy to Firebase Hosting
// turbo
```bash
npx firebase deploy --only hosting
```
This deploys the contents of the `dist` folder to Firebase Hosting.

## Alternative: Full Firebase Deploy

If you need to deploy Firestore rules, Storage rules, and Functions as well:

```bash
npx firebase deploy
```

## Verification

After deployment:
1. Check the Firebase Console for the hosting URL
2. Visit the deployed site to verify it's working correctly
3. Test key features:
   - Authentication
   - Calculator functionality
   - Community features
   - MyLab features

## Troubleshooting

### Build Errors
- Run `npm run build` locally first to catch any TypeScript or build errors
- Fix any errors before attempting deployment

### Authentication Issues
- Ensure Firebase authentication is properly configured
- Check that authorized domains include your Firebase hosting domain

### Missing Environment Variables
- Verify all Firebase config is properly set in `src/config/firebase.ts`

## Notes
- The `firebase.json` configuration points to the `dist` folder as the public directory
- All routes are rewritten to `/index.html` for SPA routing support
- The deployment includes Firestore rules, Storage rules, and Functions if configured
