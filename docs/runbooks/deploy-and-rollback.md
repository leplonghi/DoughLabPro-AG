# Deploy & Rollback

## Pre-release

1. Run `npm run deploy:check`.
2. Confirm Firebase project with `firebase use`.
3. Verify production Stripe secrets are configured and `app.allowed_hosts` matches production domains.

## Deploy

1. Deploy everything:
   `npm run deploy:prod`
2. If only hosting changed:
   `npm run deploy:hosting`
3. If only backend/rules changed:
   `npm run deploy:rules`
   `npm run deploy:backend`

## Verify

1. Open the production site landing page and pricing page.
2. Validate authentication modal opens and closes correctly.
3. Validate checkout entrypoint for an authenticated test user.
4. Validate billing portal for an active subscriber.
5. Confirm community create flow and protected writes still work.

## Rollback

1. Re-deploy the previous good git revision:
   `git checkout <known-good-commit>`
   `npm run deploy:prod`
2. If the issue is only frontend:
   deploy the last good hosting build only.
3. If the issue is Stripe/billing:
   disable checkout CTA in production and keep portal available until the backend is fixed.
