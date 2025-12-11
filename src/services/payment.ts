import { getFunctions, httpsCallable } from "firebase/functions";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your Publishable Key
// TODO: Replace with your actual Publishable Key or use an env variable
const stripePromise = loadStripe("pk_test_placeholder");

export const checkoutProSubscription = async (priceId: string) => {
    const functions = getFunctions();
    const createCheckoutSession = httpsCallable(functions, "createCheckoutSession");

    // URLs to redirect to after checkout
    const successUrl = `${window.location.origin}/upgrade/success`;
    const cancelUrl = `${window.location.origin}/upgrade/cancel`;

    try {
        const result: any = await createCheckoutSession({
            priceId,
            successUrl,
            cancelUrl,
        });

        const { sessionId } = result.data;
        const stripe = await stripePromise;

        if (!stripe) {
            throw new Error("Stripe failed to initialize.");
        }

        const { error } = await stripe.redirectToCheckout({
            sessionId,
        });

        if (error) {
            console.error("Stripe Redirect Error:", error);
            throw error;
        }
    } catch (error) {
        console.error("Payment Error:", error);
        throw error;
    }
};
