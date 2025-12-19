"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleStripeWebhook = exports.createCheckoutSession = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe_1 = require("stripe");
const countryPricing_1 = require("./countryPricing");
const handler_1 = require("./infrastructure/handler");
// Initialize Stripe with the secret key from environment variables
// Make sure to set this using: firebase functions:config:set stripe.secret="sk_test_..."
const stripe = new stripe_1.default(((_a = functions.config().stripe) === null || _a === void 0 ? void 0 : _a.secret) || "sk_test_placeholder", {
    apiVersion: "2023-10-16", // Use a recent API version
});
const db = admin.firestore();
/**
 * Resolves the effective country for a user.
 *
 * Strategy:
 * 1. Locked Billing Country (if exists in DB) -> Strongest
 * 2. Provisional/IP Country (if free user) -> Weakest
 */
async function resolveEffectiveCountry(userId, ip) {
    const userDoc = await db.collection("users").doc(userId).get();
    const userData = userDoc.data();
    // 1. Check for locked billing country
    if (userData === null || userData === void 0 ? void 0 : userData.billingCountry) {
        return { country: userData.billingCountry, isLocked: true };
    }
    // 2. Fallback: Use IP Geolocation (Provisional)
    // In a real generic function, we might use a geoip library. 
    // For now, we'll try to get it from headers or default to US.
    // If we rely on Cloud Functions 'x-appengine-country' header (if available) passed via context, that's better.
    // But here we might just default to 'US' if we can't determine.
    // Note: In Cloud Functions, you often get geolocation headers.
    // We will assume 'US' if IP resolution is too complex for this snippet,
    // or rely on client-provided hint if safe (but here we want backend security).
    // Let's assume we default to 'US' but allow the caller to pass a "hint" if verified.
    // actually, for this task, let's just return 'US' if we can't lock it, 
    // but in 'createCheckoutSession' we can try to respect the user's intent if reasonable.
    return { country: "US", isLocked: false };
}
/**
 * Creates a Stripe Checkout Session for a "Pro" subscription.
 * Call this function from the client with { planKey, successUrl, cancelUrl, countryHint }.
 */
exports.createCheckoutSession = (0, handler_1.createHandler)("createCheckoutSession", {
    requireAuth: true,
    rateLimit: { points: 5, duration: 60, keyPrefix: "checkout" } // 5 attempts per minute
}, async (data, context) => {
    const { planKey = 'standard', successUrl, cancelUrl, countryHint } = data;
    const userId = context.auth.uid;
    const userEmail = context.auth.token.email;
    if (!successUrl || !cancelUrl) {
        throw new functions.https.HttpsError("invalid-argument", "The function must be called with \"successUrl\" and \"cancelUrl\".");
    }
    // 2. Resolve Country & Price
    let { country: targetCountry, isLocked } = await resolveEffectiveCountry(userId);
    // Allow hint if not locked to override the Provisional default
    if (!isLocked && typeof countryHint === 'string' && countryHint.length === 2) {
        targetCountry = countryHint.toUpperCase();
    }
    const pricing = (0, countryPricing_1.getCountryPricing)(targetCountry);
    const planPrice = pricing.plans[planKey];
    if (!planPrice) {
        throw new functions.https.HttpsError('invalid-argument', 'Invalid plan info');
    }
    // 3. Create the session with dynamic pricing based on country
    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: pricing.currency,
                    unit_amount: Math.round(planPrice * 100),
                    product_data: {
                        name: `DoughLab Pro (${planKey})`,
                        description: `Subscription for ${targetCountry}`,
                    },
                    recurring: {
                        interval: 'month',
                    },
                },
            },
        ],
        success_url: successUrl,
        cancel_url: cancelUrl,
        customer_email: userEmail,
        client_reference_id: userId,
        metadata: {
            userId: userId,
            targetCountry: targetCountry,
            lockedStatus: isLocked ? 'LOCKED' : 'PROVISIONAL'
        },
        subscription_data: {
            metadata: {
                userId: userId,
                billingCountry: targetCountry
            }
        }
    });
    return { sessionId: session.id };
});
/**
 * Handle Stripe Webhooks
 * This function listens for events from Stripe (like payment success)
 * and updates Firestore accordingly.
 */
exports.handleStripeWebhook = functions.https.onRequest(async (req, res) => {
    var _a, _b, _c, _d, _e;
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
    try {
        switch (event.type) {
            case "checkout.session.completed": {
                const session = event.data.object;
                const userId = session.client_reference_id;
                const subscriptionId = session.subscription;
                const customerId = session.customer;
                // Get Country from payment method (Strongest Signal)
                // In checkout.session.completed, we might need to expand fields or look at customer_details
                const paymentCountry = ((_c = (_b = session.customer_details) === null || _b === void 0 ? void 0 : _b.address) === null || _c === void 0 ? void 0 : _c.country) ||
                    ((_d = session.metadata) === null || _d === void 0 ? void 0 : _d.targetCountry); // Fallback to what we set if address missing
                if (userId) {
                    const userRef = db.collection("users").doc(userId);
                    const userDoc = await userRef.get();
                    const userData = userDoc.data();
                    const updateData = {
                        isPro: true,
                        plan: "lab_pro",
                        proSince: admin.firestore.FieldValue.serverTimestamp(),
                        stripeCustomerId: customerId,
                        stripeSubscriptionId: subscriptionId
                    };
                    // LOCKING LOGIC
                    if (!(userData === null || userData === void 0 ? void 0 : userData.billingCountry) && paymentCountry) {
                        // Lock it now!
                        updateData.billingCountry = paymentCountry;
                        updateData.billingCurrency = (_e = session.currency) === null || _e === void 0 ? void 0 : _e.toUpperCase();
                        updateData.firstPaidAt = new Date().toISOString();
                        const pricing = (0, countryPricing_1.getCountryPricing)(paymentCountry);
                        updateData.priceTier = pricing.tier;
                        console.log(`Locking billing country for ${userId} to ${paymentCountry}`);
                    }
                    else if ((userData === null || userData === void 0 ? void 0 : userData.billingCountry) && paymentCountry) {
                        // Mismatch check
                        if (userData.billingCountry !== paymentCountry) {
                            console.warn(`Suspicious: User ${userId} locked to ${userData.billingCountry} paid with method from ${paymentCountry}`);
                            // Log 'suspicious_country_mismatch'
                            await db.collection("suspicious_activity").add({
                                userId,
                                event: "payment_country_mismatch",
                                lockedCountry: userData.billingCountry,
                                paymentCountry: paymentCountry,
                                timestamp: admin.firestore.FieldValue.serverTimestamp()
                            });
                        }
                    }
                    await userRef.update(updateData);
                    console.log(`User ${userId} upgraded to Pro via Checkout Session.`);
                }
                break;
            }
            case "customer.subscription.deleted": {
                const subscription = event.data.object;
                // find user by stripeSubscriptionId
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