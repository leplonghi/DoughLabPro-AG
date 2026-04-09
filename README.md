# DoughLab Pro

Applied baking app focused on dough formulation, fermentation workflows, My Lab logging, learning content, community sharing, and subscription unlocks.

## Stack

- `Vite + React + TypeScript`
- `Firebase Auth / Firestore / Storage`
- `Firebase Functions`
- `Stripe Checkout`

## Local setup

1. Install frontend dependencies:
   `npm install`
2. Copy `.env.example` to `.env.local` and fill the Firebase, Stripe, and Gemini values.
3. Install backend dependencies:
   `cd functions && npm install`
4. Configure Firebase Functions runtime config for Stripe and allowed hosts:
   `firebase functions:config:set stripe.secret="sk_test_..." stripe.webhook_secret="whsec_..." app.allowed_hosts="yourdomain.com,your-project.web.app"`
5. Run the app:
   `npm run dev`

## Verification

- Frontend typecheck: `npm run typecheck`
- Frontend build: `npm run build`
- Functions build: `npm run functions:build`
- Functions tests: `npm run functions:test`

## Documentation Map

- Main docs hub: [`docs/README.md`](./docs/README.md)
- Operations and rollback steps: [`docs/runbooks`](./docs/runbooks)
- Architecture and product blueprints: [`docs/architecture`](./docs/architecture)
- Historical reports and archived material: [`docs/archive`](./docs/archive)

## Security notes

- Never commit `.env`, `.env.local`, Stripe keys, or Firebase admin credentials.
- Rotate any leaked Stripe key immediately and clean it from git history before deploying.
- Publish `firestore.rules` and `storage.rules` together with the Functions release.

## Deployment checklist

- Set the production Stripe publishable key in `VITE_STRIPE_PUBLISHABLE_KEY`.
- Set production Stripe secrets in Firebase Functions config.
- Confirm `app.allowed_hosts` matches the production domains exactly.
- Run the four verification commands above before every release.
