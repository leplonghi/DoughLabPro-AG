# DoughLabPro Mobile App Store Plan

Operational plan to transform the current web app into a publishable Android and iOS app with the least possible rewrite.

## Current assessment

The current product is a good candidate for a hybrid mobile approach because the app already runs on:

- `Vite + React + TypeScript`
- `Firebase Auth / Firestore / Storage`
- `Firebase Functions`
- hash-based client routing

Main code areas that directly affect the mobile migration:

- Google login popup flow in `src/contexts/AuthContext.tsx`
- Stripe web checkout and billing portal flow in `src/services/payment.ts`
- Stripe subscription entitlement handling in `functions/src/stripe.ts`
- web notification implementation in `src/services/fcmService.ts`
- hash router in `src/contexts/RouterContext.tsx`
- profile settings and legal access in `src/pages/ProfilePage.tsx`

## Recommended architecture

Use:

- `Capacitor` as the mobile shell
- the current React app as the shared UI layer
- Firebase as the primary backend for auth, data, storage, and entitlement sync
- native store billing for mobile
- Stripe only for web billing

This approach minimizes risk, preserves the current frontend, and aligns better with App Store and Google Play rules for digital subscriptions.

## Release strategy

1. Ship an internal Android build first.
2. Ship an internal iOS/TestFlight build second.
3. Validate billing, auth, push, and account lifecycle.
4. Publish a closed beta on both stores.
5. Roll out production gradually.

## Sprint plan

### Sprint 0 - Product and compliance decisions

Goal:
Lock the product decisions that influence architecture and store approval.

Tasks:

- Confirm package IDs:
  - Android: `com.antigravity.doughlabpro`
  - iOS bundle ID equivalent
- Confirm official app name, subtitle, short description, and support email.
- Confirm whether mobile subscriptions will be sold inside the app.
- Confirm whether web subscribers should retain Pro access in mobile.
- Confirm whether guest mode will remain in mobile or be limited.
- Confirm minimum supported OS versions.
- Confirm legal entity, tax, and banking details for Apple and Google payouts.
- Decide whether the community feature ships in v1 mobile or after launch.

Deliverables:

- final app naming
- package identifiers
- billing model decision
- launch scope definition
- store account ownership definition

Exit criteria:

- no open product decisions that would change auth or billing implementation

### Sprint 1 - Capacitor foundation and mobile build baseline

Goal:
Have the current app running inside Android and iOS shells.

Tasks:

- Add Capacitor dependencies and project config.
- Build the web app into the Capacitor `webDir`.
- Generate `android/` and `ios/` projects.
- Set app icons, splash screen, display name, package IDs, versioning.
- Configure environment variables for mobile builds.
- Validate routing and startup behavior inside WebView.
- Add a basic build command for mobile sync.
- Create `staging` and `production` mobile config values.

Technical order:

1. Add Capacitor
2. Generate native projects
3. Wire Vite build output
4. Open app in emulator/simulator
5. Fix app boot issues

Likely changes:

- new `capacitor.config.*`
- `package.json` scripts
- native project folders

Exit criteria:

- app launches on Android emulator
- app launches on iOS simulator
- navigation works end-to-end for the main flows

### Sprint 2 - Navigation, platform abstraction, and web-only dependency cleanup

Goal:
Remove assumptions that only work in the browser.

Tasks:

- Introduce a platform service abstraction:
  - `web`
  - `android`
  - `ios`
- Review every use of:
  - `window.location`
  - `window.location.hash`
  - `Notification`
  - `serviceWorker`
  - share/download APIs
  - browser popup flows
- Keep the current hash router initially, but centralize navigation helpers.
- Add deep link support design for success/cancel/payment return routes.
- Review file export and share actions for native-safe behavior.
- Validate Android back button behavior.

Priority files:

- `src/contexts/RouterContext.tsx`
- `src/services/payment.ts`
- `src/services/fcmService.ts`
- export and share components

Exit criteria:

- no critical user flow depends on unsupported browser-only behavior

### Sprint 3 - Mobile authentication

Goal:
Make auth reliable and store-review friendly on mobile.

Tasks:

- Replace Google popup sign-in with mobile-compatible authentication.
- Keep email/password login as the stable fallback.
- Add Sign in with Apple for iOS if Google sign-in remains available there.
- Ensure account creation, login, logout, password reset, and guest rules behave consistently.
- Add app review test account strategy if needed.
- Handle auth state restoration cleanly after app reopen.

Technical order:

1. Introduce auth provider abstraction
2. Implement native/mobile Google flow
3. Implement Apple sign-in on iOS
4. Verify account linking rules
5. QA auth recovery and logout

Priority file:

- `src/contexts/AuthContext.tsx`

Exit criteria:

- login works on Android
- login works on iPhone
- Apple review login expectations are covered

### Sprint 4 - Billing and entitlements

Goal:
Make subscriptions compliant and unified across platforms.

Tasks:

- Keep `Stripe` for web checkout only.
- Add Google Play Billing for Android subscriptions.
- Add StoreKit for iOS subscriptions.
- Create a unified entitlement sync layer in backend.
- Store purchase origin:
  - `web`
  - `android`
  - `ios`
- Map all stores to one Pro entitlement model in Firestore/custom claims.
- Build purchase restore flow.
- Build subscription status reconciliation and webhook/server notification handling.
- Remove direct web checkout CTAs from mobile builds.

Technical order:

1. Define entitlement schema
2. Implement Android purchase flow
3. Implement iOS purchase flow
4. Add backend reconciliation
5. Update paywall UI by platform
6. Add restore purchases

Priority files:

- `src/services/payment.ts`
- `functions/src/stripe.ts`
- user/plan state in auth or user provider layers

Exit criteria:

- user can subscribe on Android
- user can subscribe on iOS
- user can restore purchase
- Pro unlock works regardless of origin

### Sprint 5 - Push notifications and mobile device services

Goal:
Replace web notification assumptions with native-ready behavior.

Tasks:

- Replace Web FCM flow with native push integration for Android/iOS.
- Add permission prompts at the right time in the UX.
- Register native device tokens.
- Store platform-specific token metadata.
- Validate foreground and background notification handling.
- Validate deep linking from a notification to app screens.

Priority file:

- `src/services/fcmService.ts`

Exit criteria:

- device token registration works on both platforms
- push arrives in foreground and background
- app opens the correct screen from a notification tap

### Sprint 6 - Account lifecycle, privacy, and store submission blockers

Goal:
Close policy gaps that commonly cause rejection.

Tasks:

- Add in-app account deletion flow.
- Add server-side deletion/anonymization workflow.
- Define what is deleted immediately vs retained for legal or billing reasons.
- Add confirmation screens and warnings.
- Update privacy policy text to reflect mobile SDKs and billing sources.
- Prepare Google Play Data safety declarations.
- Prepare Apple App Privacy responses.
- Confirm permission usage strings for iOS.
- Confirm app access instructions for reviewer accounts.

Priority area:

- `src/pages/ProfilePage.tsx`
- backend account lifecycle implementation
- legal copy

Exit criteria:

- user can request or perform account deletion from inside the app
- privacy disclosures match actual runtime behavior

### Sprint 7 - Store assets, QA, and release engineering

Goal:
Prepare production-ready submissions.

Tasks:

- Create app icon, screenshots, preview assets, and store copy.
- Prepare localized listing at least for:
  - `pt-BR`
  - `en-US`
- Configure release signing and app versioning.
- Configure Play Console and App Store Connect metadata.
- Run end-to-end QA:
  - onboarding
  - auth
  - paywall
  - subscription
  - restore purchase
  - notifications
  - profile
  - account deletion
  - offline/reopen behavior
- Add crash monitoring and release diagnostics.
- Prepare internal review checklist.

Exit criteria:

- Android build uploaded to internal testing
- iOS build uploaded to TestFlight
- release checklist passed

### Sprint 8 - Beta and production rollout

Goal:
Launch safely and learn before full scale.

Tasks:

- Release Android closed testing.
- Release iOS TestFlight external testing if desired.
- Gather crash, auth, billing, and retention data.
- Fix store review feedback.
- Gradually roll out production.
- Monitor support, refunds, purchase restore failures, and push delivery.

Exit criteria:

- both apps approved
- production rollout started
- rollback and hotfix process validated

## Technical backlog by priority

### P0 - Must do before submission

- Add Capacitor shell
- Replace popup auth flow on mobile
- Add Apple-compliant iOS auth option if keeping Google login
- Move mobile subscriptions to native store billing
- Implement unified entitlement backend
- Replace web push flow with native push flow
- Add in-app account deletion
- Complete Play Data safety and Apple privacy disclosures

### P1 - Strongly recommended before public launch

- Restore purchase flow
- native share/export behavior
- deep links from notifications
- crash reporting
- release analytics segmented by platform
- Android back button polish

### P2 - Nice to have after beta

- offline caching improvements
- better native theming and haptics
- app review prompt
- native widgets/live activities if desired

## Proposed implementation order inside this repository

1. Add Capacitor and native projects
2. Create platform abstraction layer
3. Stabilize navigation and startup
4. Replace mobile auth flow
5. Introduce mobile billing abstraction
6. Implement entitlement sync in backend
7. Replace notification layer
8. Add account deletion flow
9. Prepare store metadata and privacy declarations
10. Run closed beta and publish

## Suggested ownership split

- Frontend/mobile shell:
  - Capacitor
  - routing
  - UI adaptation
  - paywall UI
  - account settings screens
- Backend/platform:
  - entitlements
  - store receipt validation
  - account deletion workflow
  - notification token handling
- Product/ops:
  - store listings
  - legal copy
  - screenshots
  - support and review account preparation

## Acceptance checklist before store submission

- App opens without white screen on cold start
- Auth works on real Android and iPhone devices
- Pro purchase works on both stores
- Restore purchase works
- Logout works
- Delete account works
- Privacy policy link is visible in app
- Terms and support are reachable in app
- Notifications request permission contextually
- No web checkout CTA is shown inside mobile builds
- Reviewer can access the app without confusion

## Time estimate

For a focused team with the current codebase:

- baseline mobile shell: `1 week`
- auth + routing cleanup: `1 to 2 weeks`
- billing + entitlements: `2 to 3 weeks`
- push + account lifecycle + store prep: `2 weeks`
- beta fixes and approvals: `1 to 3 weeks`

Practical total:

- `6 to 10 weeks`

## First execution slice

If starting now, the first concrete execution slice should be:

1. Add Capacitor
2. Generate Android/iOS projects
3. Boot the current app on emulator and simulator
4. List every broken flow
5. Fix auth next
6. Fix billing after auth

That ordering gives the fastest path to a real mobile beta.
