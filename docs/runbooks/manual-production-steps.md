# Manual Production Steps

This is the exact order to finish the remaining non-code work safely.

## 1. Rotate the leaked Stripe key

Why this is manual:
- Only someone with access to the Stripe Dashboard can rotate live keys.

Steps:
1. Open the Stripe Dashboard.
2. Go to Developers > API keys.
3. Find the restricted live key that was exposed.
4. Rotate it or revoke it and create a new restricted key with the minimum required scopes.
5. Go to Developers > Webhooks and confirm the active webhook secret you want to keep using.

When finished, do not paste the key into chat, docs, or source files.

## 2. Update Firebase runtime config with the new Stripe values

Why this is manual:
- This uses your production secrets.

Run:

```powershell
firebase functions:config:set stripe.secret="NEW_RESTRICTED_OR_SECRET_KEY" stripe.webhook_secret="NEW_WEBHOOK_SECRET" app.allowed_hosts="doughlabpro-fire.web.app,doughlabpro-fire.firebaseapp.com"
```

Then publish backend:

```powershell
npm run deploy:backend
```

## 3. Validate checkout and billing portal with a real account

Why this is manual:
- It requires a real authenticated test flow in your live environment.

Steps:
1. Open [https://doughlabpro-fire.web.app](https://doughlabpro-fire.web.app).
2. Sign in with a test account you control.
3. Open the plans page.
4. Start checkout.
5. Confirm Stripe Checkout opens correctly.
6. Complete or cancel using your preferred Stripe test/live-safe process.
7. Return to the app and confirm the user plan changes correctly.
8. Open “Manage Subscription & Billing”.
9. Confirm the Stripe Billing Portal opens.

Expected result:
- Checkout opens.
- Successful payment upgrades the account.
- Portal opens for active subscribers.

## 4. Clean the leaked files from Git history

Why this is manual:
- This rewrites history and usually requires force-push access.

Recommended path:

```powershell
git filter-repo --path functions/temp_get_pro_price.js --path functions/temp_list_prices.js --invert-paths
```

After that:

```powershell
git push --force --all
git push --force --tags
```

Then notify collaborators:
- Everyone must re-clone or hard-reset to the cleaned history.

## 5. Confirm the repo is clean after history rewrite

Run a search locally:

```powershell
Get-ChildItem -Recurse -File | Select-String -Pattern 'sk_live_|rk_live_|whsec_|AIza'
```

Expected result:
- No real secrets in source history or current files.

## 6. Migrate away from functions.config()

Why this is still pending:
- Firebase is deprecating runtime config.

Recommended next step:
1. Export the existing config with Firebase tooling.
2. Move Stripe config to Firebase params or secrets.
3. Update `functions/src/stripe.ts` to read from params/secrets instead of `functions.config()`.
4. Re-deploy functions.

This is the last big infra item before calling the backend “future-proof”.

## 7. Final production verification

Run these checks after everything above:

```powershell
npm run deploy:check
npm run e2e
```

Then manually verify:
1. Landing page loads.
2. Plans page loads.
3. Auth modal opens and closes.
4. Community posting still works.
5. Checkout works.
6. Billing portal works.
7. Webhook updates the user plan correctly.
