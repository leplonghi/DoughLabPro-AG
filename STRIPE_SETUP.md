# 💳 Stripe Integration Setup & Configuration

This guide helps you finalize the Stripe integration for **DoughLab Pro**. The system is designed to handle global payments with local pricing (PPP) and automatic Pro status updates.

## 1. Backend Configuration (Firebase Functions)

You must set the following secrets in your Firebase environment:

```bash
# 1. Your Stripe Secret Key (from Stripe Dashboard > Developers > API keys)
firebase functions:config:set stripe.secret="sk_live_..."

# 2. Your Webhook Signing Secret (from Stripe Dashboard > Developers > Webhooks)
# Create a webhook pointing to: https://YOUR_REGION-YOUR_PROJECT.cloudfunctions.net/handleStripeWebhook
# Listen for events: checkout.session.completed, customer.subscription.deleted
firebase functions:config:set stripe.webhook_secret="whsec_..."
```

## 2. Frontend Configuration

Update your `.env` file in the root directory:

```env
# Your Stripe Publishable Key (from Stripe Dashboard > Developers > API keys)
VITE_STRIPE_PUBLISHABLE_KEY="pk_live_..."
```

## 3. Pricing Strategy

The app is currently configured with a **$5.99/month** Anchor (Tier A).

| Tier | Example Country | Monthly Price |
| :--- | :--- | :--- |
| **Tier A** | USA, Europe, UK | **$5.99 USD** / €5.99 / £4.99 |
| **Tier B** | Brazil | **R$ 29.99 BRL** |
| **Tier C** | Emerging Markets | **$3.99 USD** |

To modify these prices, edit: `functions/src/countryPricing.ts`.

## 4. Operational Flow

1.  **User Clicks Upgrade**: The app calls `createCheckoutSession` Cloud Function.
2.  **Stripe Checkout**: The user is redirected to a professional Stripe-hosted payment page.
3.  **Webhook Sync**: Upon successful payment, Stripe sends a `checkout.session.completed` event to our `handleStripeWebhook` function.
4.  **Instant Activation**: The function updates the user's document in Firestore (`plan: "pro"`, `isPro: true`).
5.  **UI Update**: The frontend detects the change in Firestore and unlocks all Pro features instantly without a page reload.

## 5. Testing (Sandbox Mode)

Use these test cards from Stripe:
- **Success**: `4242 4242 4242 4242`
- **Expiry**: Any future date
- **CVC**: Any 3 digits

**Note**: Always use `sk_test_...` and `pk_test_...` for local development and testing.

---
**Status**: 🚀 All logic implemented. Awaiting actual API Keys.
