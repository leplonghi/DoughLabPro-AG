import * as functions from "firebase-functions";
import Stripe from "stripe";

// Initialize Stripe with the secret key from environment variables
// Make sure to set this using: firebase functions:config:set stripe.secret="sk_test_..."
const stripe = new Stripe(functions.config().stripe?.secret || "sk_test_placeholder", {
    apiVersion: "2023-10-16", // Use a recent API version
});

/**
 * Creates a Stripe Checkout Session for a "Pro" subscription.
 * Call this function from the client with { priceId, successUrl, cancelUrl }.
 */
export const createCheckoutSession = functions.https.onCall(async (data, context) => {
    // 1. Ensure user is authenticated
    if (!context.auth) {
        throw new functions.https.HttpsError(
            "unauthenticated",
            "The function must be called while authenticated."
        );
    }

    const { priceId, successUrl, cancelUrl } = data;
    const userId = context.auth.uid;
    const userEmail = context.auth.token.email;

    if (!priceId || !successUrl || !cancelUrl) {
        throw new functions.https.HttpsError(
            "invalid-argument",
            "The function must be called with one argument \"priceId\", \"successUrl\", and \"cancelUrl\"."
        );
    }

    try {
        // 2. Create the session
        const session = await stripe.checkout.sessions.create({
            mode: "subscription", // or "payment" for one-time
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
    } catch (error: any) {
        console.error("Stripe Checkout Error:", error);
        throw new functions.https.HttpsError(
            "internal",
            "Unable to create Stripe checkout session.",
            error.message
        );
    }
});
