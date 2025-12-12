"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleStripeWebhook = exports.createCheckoutSession = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe_1 = require("stripe");
// Initialize Stripe with the secret key from environment variables
// Make sure to set this using: firebase functions:config:set stripe.secret="sk_test_..."
const stripe = new stripe_1.default(((_a = functions.config().stripe) === null || _a === void 0 ? void 0 : _a.secret) || "sk_test_placeholder", {
    apiVersion: "2023-10-16", // Use a recent API version
});
/**
 * Creates a Stripe Checkout Session for a "Pro" subscription.
 * Call this function from the client with { priceId, successUrl, cancelUrl }.
 */
exports.createCheckoutSession = functions.https.onCall(async (data, context) => {
    // 1. Ensure user is authenticated
    if (!context.auth) {
        throw new functions.https.HttpsError("unauthenticated", "The function must be called while authenticated.");
    }
    const { priceId, successUrl, cancelUrl } = data;
    const userId = context.auth.uid;
    const userEmail = context.auth.token.email;
    if (!priceId || !successUrl || !cancelUrl) {
        throw new functions.https.HttpsError("invalid-argument", "The function must be called with one argument \"priceId\", \"successUrl\", and \"cancelUrl\".");
    }
    try {
        // 2. Create the session
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            success_url: successUrl,
            cancel_url: cancelUrl,
            customer_email: userEmail,
            client_reference_id: userId,
            metadata: {
                userId: userId,
                // Add any other metadata you need
            },
        });
        // 3. Return the session ID to the client
        return { sessionId: session.id };
    }
    catch (error) {
        console.error("Stripe Checkout Error:", error);
        throw new functions.https.HttpsError("internal", "Unable to create Stripe checkout session.", error.message);
    }
});
/**
 * Handle Stripe Webhooks
 * This function listens for events from Stripe (like payment success)
 * and updates Firestore accordingly.
 */
exports.handleStripeWebhook = functions.https.onRequest(async (req, res) => {
    var _a;
    const signature = req.headers["stripe-signature"];
    const endpointSecret = (_a = functions.config().stripe) === null || _a === void 0 ? void 0 : _a.webhook_secret;
    if (!endpointSecret) {
        console.error("Stripe Webhook Secret not configured.");
        res.status(500).send("Webhook Secret not configured");
        return;
    }
    let event;
    try {
        // Verify the webhook signature
        event = stripe.webhooks.constructEvent(req.rawBody, signature, endpointSecret);
    }
    catch (err) {
        console.error("Webhook signature verification failed.", err.message);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }
    const db = admin.firestore();
    try {
        switch (event.type) {
            case "checkout.session.completed": {
                const session = event.data.object;
                const userId = session.client_reference_id;
                const subscriptionId = session.subscription;
                const customerId = session.customer;
                if (userId) {
                    // Update user to PRO
                    await db.collection("users").doc(userId).update({
                        isPro: true,
                        plan: "lab_pro",
                        proSince: admin.firestore.FieldValue.serverTimestamp(),
                        stripeCustomerId: customerId,
                        stripeSubscriptionId: subscriptionId
                    });
                    console.log(`User ${userId} upgraded to Pro via Checkout Session.`);
                }
                else {
                    console.warn("No client_reference_id found in Checkout Session.");
                }
                break;
            }
            case "customer.subscription.deleted": {
                const subscription = event.data.object;
                // find user by stripeSubscriptionId
                // This might require a composite index or just querying
                const snapshot = await db.collection("users")
                    .where("stripeSubscriptionId", "==", subscription.id)
                    .get();
                if (!snapshot.empty) {
                    const batch = db.batch();
                    snapshot.docs.forEach(doc => {
                        batch.update(doc.ref, {
                            isPro: false,
                            plan: "free",
                            proExpiresAt: admin.firestore.FieldValue.serverTimestamp()
                        });
                    });
                    await batch.commit();
                    console.log(`Subscription deleted for ${snapshot.size} user(s). Revoked Pro.`);
                }
                break;
            }
            // Handle other events like payment_failed if needed
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
        res.json({ received: true });
    }
    catch (error) {
        console.error("Webhook Error:", error);
        res.status(500).send("Webhook handler failed");
    }
});
//# sourceMappingURL=stripe.js.map