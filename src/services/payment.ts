import { getFunctions, httpsCallable } from "firebase/functions";
import i18n from '@/i18n';
<<<<<<< HEAD
import { logEvent } from '@/services/analytics';
=======
import { monitor } from '@/infrastructure/monitoring';
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839

const t = i18n.t.bind(i18n);

class PaymentFlowError extends Error {
    code: string;

    constructor(code: string, message: string) {
        super(message);
        this.name = "PaymentFlowError";
        this.code = code;
    }
}

<<<<<<< HEAD
export const getPaymentErrorMessage = (
    error: unknown,
    action: "checkout" | "billingPortal"
) => {
    const fallbackMessage = action === "checkout"
        ? "We couldn't start checkout. Confirm your billing setup and try again."
        : "We couldn't open the billing portal right now. Try again in a moment.";

    if (error instanceof PaymentFlowError) {
        if (error.code === "stripe/checkout-url-missing") {
            return "Checkout did not return a valid Stripe URL. Try again in a moment.";
        }

        return error.message || fallbackMessage;
    }

    if (typeof error === "object" && error !== null) {
        const maybeCode = "code" in error ? String(error.code ?? "") : "";
        const details = "details" in error ? String(error.details ?? "") : "";
        const message = "message" in error ? String(error.message ?? "") : "";
        const combined = `${message} ${details}`.toLowerCase();

        if (maybeCode.includes("unauthenticated")) {
            return "Please sign in again before continuing with billing.";
        }

        if (maybeCode.includes("failed-precondition")) {
            if (combined.includes("billing profile")) {
                return "This account does not have a Stripe billing profile yet. Complete the first checkout on this same account before using the billing portal.";
            }

            return "Billing is not fully configured yet. Confirm the Stripe keys and try again.";
        }

        if (maybeCode.includes("invalid-argument")) {
            return "The billing request was rejected by the server. Confirm the live site URL and try again.";
        }

        if (maybeCode.includes("internal") && combined.trim()) {
            return message || fallbackMessage;
        }
    }

    return fallbackMessage;
};

export const checkoutProSubscription = async (countryHint?: string) => {
=======
export const checkoutProSubscription = async (planKey: string = 'standard') => {
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
    const functions = getFunctions();
    const createCheckoutSession = httpsCallable(functions, "createCheckoutSession");

    // URLs to redirect to after checkout
    const successUrl = `${window.location.origin}/#/upgrade/success`;
    const cancelUrl = `${window.location.origin}/#/upgrade/cancel`;

    try {
<<<<<<< HEAD
        logEvent('checkout_session_requested', {
            source: 'plans',
            countryHint: countryHint || 'unknown',
        });

        const result: any = await createCheckoutSession({
            planKey: "standard",
            successUrl,
            cancelUrl,
            countryHint,
=======
        monitor.trackEvent('checkout_started', { planKey });

        const result: any = await createCheckoutSession({
            planKey,
            successUrl,
            cancelUrl,
            countryHint: navigator.language.split('-')[1] // Optional hint
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
        });

        const { url } = result.data || {};
        if (!url || typeof url !== "string") {
            throw new PaymentFlowError("stripe/checkout-url-missing", t('ui.stripe_failed_to_initialize'));
        }

<<<<<<< HEAD
        logEvent('checkout_redirect_ready', { source: 'plans' });
        window.location.assign(url);
    } catch (error) {
        console.error("Payment Error:", error);
        logEvent('checkout_session_failed', {
            source: 'plans',
            reason: getPaymentErrorMessage(error, 'checkout'),
        });
        throw error;
    }
};

export const openBillingPortal = async () => {
    const functions = getFunctions();
    const createBillingPortalSession = httpsCallable(functions, "createBillingPortalSession");
    const returnUrl = `${window.location.origin}/#/plans`;

    try {
        logEvent('billing_portal_session_requested', { source: 'plans' });
        const result: any = await createBillingPortalSession({ returnUrl });
        const { url } = result.data || {};

        if (!url || typeof url !== "string") {
            throw new PaymentFlowError("stripe/portal-url-missing", "Billing portal did not return a valid URL.");
        }

        logEvent('billing_portal_redirect_ready', { source: 'plans' });
        window.location.assign(url);
    } catch (error) {
        console.error("Billing portal error:", error);
        logEvent('billing_portal_session_failed', {
            source: 'plans',
            reason: getPaymentErrorMessage(error, 'billingPortal'),
        });
=======
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
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
        throw error;
    }
};
