import { getFunctions, httpsCallable } from "firebase/functions";
import { loadStripe } from "@stripe/stripe-js";
import i18n from '@/i18n';
import { monitor } from '@/infrastructure/monitoring';

const t = i18n.t.bind(i18n);

// Initialize Stripe with your Publishable Key
// TODO: Replace with your actual Publishable Key or use an env variable
const stripePromise = loadStripe("mk_1SdC7315wYiGE65BTazQrfp5");


export const checkoutProSubscription = async (planKey: string = 'standard') => {
    const functions = getFunctions();
    const createCheckoutSession = httpsCallable(functions, "createCheckoutSession");

    // URLs to redirect to after checkout
    const successUrl = `${window.location.origin}/upgrade/success`;
    const cancelUrl = `${window.location.origin}/upgrade/cancel`;

    try {
        monitor.trackEvent('checkout_started', { planKey });

        const result: any = await createCheckoutSession({
            planKey,
            successUrl,
            cancelUrl,
            countryHint: navigator.language.split('-')[1] // Optional hint
        });

        const { sessionId } = result.data;
        const stripe = await stripePromise;

        if (!stripe) {
            throw new Error(t('ui.stripe_failed_to_initialize'));
        }

        const { error } = await (stripe as any).redirectToCheckout({
            sessionId,
        });

        if (error) {
            console.error("Stripe Redirect Error:", error);
            monitor.trackError(error, { phase: 'stripe_redirect' });
            throw error;
        }
    } catch (error: any) {
        console.error("Payment Error:", error);
        monitor.trackError(error, { phase: 'checkout_session_creation' });
        throw error;
    }
};
