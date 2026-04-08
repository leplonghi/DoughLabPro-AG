
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import Stripe from "stripe";
import { getCountryPricing, CountryPricing } from "./countryPricing";
import { createHandler } from "./infrastructure/handler";

if (!admin.apps.length) {
    admin.initializeApp();
}

// Initialize Stripe with the secret key from environment variables
// Make sure to set this using: firebase functions:config:set stripe.secret="sk_test_..."
const stripe = new Stripe(functions.config().stripe?.secret || "sk_test_placeholder", {
    apiVersion: "2026-02-25.clover" as any,
});

const db = admin.firestore();
const ALLOWED_PLAN_KEYS = new Set(["standard"]);

function assertStripeConfigured() {
    const secret = functions.config().stripe?.secret;
    if (typeof secret !== "string" || !secret || secret === "sk_test_placeholder") {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "Stripe secret is not configured for checkout."
        );
    }
}

export function getAllowedCheckoutHosts(): string[] {
    const configuredHosts = String(functions.config().app?.allowed_hosts || "")
        .split(",")
        .map((host) => host.trim().toLowerCase())
        .filter(Boolean);
    const projectId = process.env.GCLOUD_PROJECT || process.env.PROJECT_ID || "";
    const defaultHosts = [
        "localhost:3000",
        "localhost:4173",
        "localhost:5173",
        "127.0.0.1:3000",
        "127.0.0.1:4173",
        "127.0.0.1:5173",
    ];

    if (projectId) {
        defaultHosts.push(`${projectId}.web.app`, `${projectId}.firebaseapp.com`);
    }

    return [...new Set([...defaultHosts, ...configuredHosts])];
}

export function assertAllowedCheckoutUrl(urlValue: unknown, fieldName: "successUrl" | "cancelUrl"): string {
    if (typeof urlValue !== "string" || !urlValue) {
        throw new functions.https.HttpsError(
            "invalid-argument",
            `The function must be called with a valid "${fieldName}".`
        );
    }

    let parsedUrl: URL;

    try {
        parsedUrl = new URL(urlValue);
    } catch {
        throw new functions.https.HttpsError(
            "invalid-argument",
            `The function must be called with a valid "${fieldName}".`
        );
    }

    const isLocalhost = parsedUrl.hostname === "localhost" || parsedUrl.hostname === "127.0.0.1";
    const isSecureProtocol = parsedUrl.protocol === "https:" || (parsedUrl.protocol === "http:" && isLocalhost);

    if (!isSecureProtocol) {
        throw new functions.https.HttpsError(
            "invalid-argument",
            `${fieldName} must use HTTPS unless it points to localhost.`
        );
    }

    const allowedHosts = getAllowedCheckoutHosts();
    if (!allowedHosts.includes(parsedUrl.host.toLowerCase())) {
        throw new functions.https.HttpsError(
            "invalid-argument",
            `${fieldName} must point to an approved first-party domain.`
        );
    }

    return parsedUrl.toString();
}

function normalizePlanKey(planKey: unknown): string {
    if (typeof planKey !== "string") {
        throw new functions.https.HttpsError("invalid-argument", "Invalid plan info");
    }

    const normalized = planKey.trim().toLowerCase();
    if (!ALLOWED_PLAN_KEYS.has(normalized)) {
        throw new functions.https.HttpsError("invalid-argument", "Invalid plan info");
    }

    return normalized;
}

function normalizeCountryHint(countryHint: unknown): string | undefined {
    if (typeof countryHint !== "string") return undefined;
    const normalized = countryHint.trim().toUpperCase();
    return /^[A-Z]{2}$/.test(normalized) ? normalized : undefined;
}

/**
 * Resolves the effective country for a user.
 * 
 * Strategy:
 * 1. Locked Billing Country (if exists in DB) -> Strongest
 * 2. Provisional/IP Country (if free user) -> Weakest
 */
async function resolveEffectiveCountry(userId: string, ip?: string): Promise<{ country: string, isLocked: boolean }> {
    const userDoc = await db.collection("users").doc(userId).get();
    const userData = userDoc.data();

    // 1. Check for locked billing country
    if (userData?.billingCountry) {
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
export const createCheckoutSession = createHandler<{
    planKey?: string;
    successUrl: string;
    cancelUrl: string;
    countryHint?: string;
}, { sessionId: string; url: string | null }>(
    "createCheckoutSession",
    {
        requireAuth: true,
        rateLimit: { points: 5, duration: 60, keyPrefix: "checkout" } // 5 attempts per minute
    },
    async (data, context) => {
        assertStripeConfigured();

        const { planKey = 'standard', successUrl, cancelUrl, countryHint } = data;
        const userId = context.auth!.uid;
        const userEmail = context.auth!.token.email;

        if (!successUrl || !cancelUrl) {
            throw new functions.https.HttpsError(
                "invalid-argument",
                "The function must be called with \"successUrl\" and \"cancelUrl\"."
            );
        }

        const normalizedPlanKey = normalizePlanKey(planKey);
        const safeSuccessUrl = assertAllowedCheckoutUrl(successUrl, "successUrl");
        const safeCancelUrl = assertAllowedCheckoutUrl(cancelUrl, "cancelUrl");
        const safeCountryHint = normalizeCountryHint(countryHint);

        // 2. Resolve Country & Price
        let { country: targetCountry, isLocked } = await resolveEffectiveCountry(userId);

        // Allow hint if not locked to override the Provisional default
        if (!isLocked && safeCountryHint) {
            targetCountry = safeCountryHint;
        }

        const pricing = getCountryPricing(targetCountry);
        const planPrice = pricing.plans[normalizedPlanKey as keyof CountryPricing['plans']];

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
                        unit_amount: Math.round(planPrice * 100), // cents
                        product_data: {
                            name: `DoughLab Pro (${normalizedPlanKey})`,
                            description: `Subscription for ${targetCountry}`,
                        },
                        recurring: {
                            interval: 'month',
                        },
                    },
                },
            ],
            success_url: safeSuccessUrl,
            cancel_url: safeCancelUrl,
            ...(userEmail ? { customer_email: userEmail } : {}),
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

        return { sessionId: session.id, url: session.url || null };
    }
);

/**
 * Creates a Stripe Billing Portal session for the authenticated customer.
 */
export const createBillingPortalSession = functions.https.onCall(async (data: any, context: any) => {
    assertStripeConfigured();

    if (!context.auth) {
        throw new functions.https.HttpsError(
            "unauthenticated",
            "The function must be called while authenticated."
        );
    }

    const requestData = (data && typeof data === "object") ? data : {};
    const safeReturnUrl = assertAllowedCheckoutUrl(requestData.returnUrl, "cancelUrl");
    const userId = context.auth.uid;

    const userDoc = await db.collection("users").doc(userId).get();
    const userData = userDoc.data();
    const stripeCustomerId = userData?.stripeCustomerId;

    if (typeof stripeCustomerId !== "string" || !stripeCustomerId) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            "No active billing profile was found for this account."
        );
    }

    try {
        const session = await stripe.billingPortal.sessions.create({
            customer: stripeCustomerId,
            return_url: safeReturnUrl,
        });

        return { url: session.url };
    } catch (error: any) {
        console.error("Stripe Billing Portal Error:", error);
        throw new functions.https.HttpsError(
            "internal",
            "Unable to create Stripe billing portal session.",
            error.message
        );
    }
});

/**
 * Handle Stripe Webhooks
 * This function listens for events from Stripe (like payment success)
 * and updates Firestore accordingly.
 */
export const handleStripeWebhook = functions.https.onRequest(async (req: any, res: any) => {
    if (!functions.config().stripe?.secret || functions.config().stripe?.secret === "sk_test_placeholder") {
        console.error("Stripe secret not configured.");
        res.status(500).send("Stripe secret not configured");
        return;
    }

    const signature = req.headers["stripe-signature"];
    const endpointSecret = functions.config().stripe?.webhook_secret;

    if (!endpointSecret) {
        console.error("Stripe Webhook Secret not configured.");
        res.status(500).send("Webhook Secret not configured");
        return;
    }

    let event: Stripe.Event;

    try {
        // Verify the webhook signature
        event = stripe.webhooks.constructEvent(
            req.rawBody,
            signature as string,
            endpointSecret
        );
    } catch (err: any) {
        console.error("Webhook signature verification failed.", err.message);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    try {
        switch (event.type) {
            case "checkout.session.completed": {
                const session = event.data.object as Stripe.Checkout.Session;
                const userId = session.client_reference_id;
                const subscriptionId = session.subscription as string;
                const customerId = session.customer as string;

                // Get Country from payment method (Strongest Signal)
                // In checkout.session.completed, we might need to expand fields or look at customer_details
                const paymentCountry = session.customer_details?.address?.country ||
                    session.metadata?.targetCountry; // Fallback to what we set if address missing

                if (userId) {
                    const userRef = db.collection("users").doc(userId);
                    const userDoc = await userRef.get();
                    const userData = userDoc.data();

                    const updateData: any = {
                        isPro: true,
                        plan: "lab_pro",
                        proSince: admin.firestore.FieldValue.serverTimestamp(),
                        stripeCustomerId: customerId,
                        stripeSubscriptionId: subscriptionId
                    };

                    // LOCKING LOGIC
                    if (!userData?.billingCountry && paymentCountry) {
                        // Lock it now!
                        updateData.billingCountry = paymentCountry;
                        updateData.billingCurrency = session.currency?.toUpperCase();
                        updateData.firstPaidAt = new Date().toISOString();

                        const pricing = getCountryPricing(paymentCountry);
                        updateData.priceTier = pricing.tier;

                        console.log(`Locking billing country for ${userId} to ${paymentCountry}`);
                    } else if (userData?.billingCountry && paymentCountry) {
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
                const subscription = event.data.object as Stripe.Subscription;
                // find user by stripeSubscriptionId
                const snapshot = await db.collection("users")
                    .where("stripeSubscriptionId", "==", subscription.id)
                    .get();

                if (!snapshot.empty) {
                    const batch = db.batch();
                    snapshot.docs.forEach((doc: any) => {
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
    } catch (error) {
        console.error("Webhook Error:", error);
        res.status(500).send("Webhook handler failed");
    }
});
