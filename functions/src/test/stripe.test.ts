import { expect } from "chai";
import * as proxyquire from "proxyquire";

class FakeHttpsError extends Error {
    public code: string;

    constructor(code: string, message: string) {
        super(message);
        this.code = code;
    }
}

describe("Stripe URL guards", () => {
    const originalProjectId = process.env.GCLOUD_PROJECT;

    beforeEach(() => {
        process.env.GCLOUD_PROJECT = "doughlab-test";
    });

    afterEach(() => {
        process.env.GCLOUD_PROJECT = originalProjectId;
    });

    const loadStripeModule = () => proxyquire.noCallThru().load("../stripe", {
        "firebase-functions": {
            config: () => ({
                app: {
                    allowed_hosts: "app.doughlabpro.com,preview.doughlabpro.com"
                },
                stripe: {
                    secret: "sk_test_configured"
                }
            }),
            https: {
                HttpsError: FakeHttpsError,
                onCall: (handler: unknown) => handler,
                onRequest: (handler: unknown) => handler,
            },
        },
        "firebase-admin": {
            apps: [{}],
            initializeApp: () => undefined,
            firestore: () => ({
                collection: () => ({
                    doc: () => ({ get: async () => ({ data: () => ({}) }) })
                })
            }),
        },
        stripe: {
            default: class StripeStub {
                checkout = {
                    sessions: {
                        create: async () => ({ id: "cs_test_123" })
                    }
                };

                webhooks = {
                    constructEvent: () => ({})
                };
            }
        },
        "./countryPricing": {
            getCountryPricing: () => ({
                currency: "usd",
                tier: "standard",
                plans: {
                    standard: 4.99
                }
            })
        }
    });

    it("includes configured and first-party default hosts", () => {
        const stripeModule = loadStripeModule();
        const hosts = stripeModule.getAllowedCheckoutHosts();

        expect(hosts).to.include("app.doughlabpro.com");
        expect(hosts).to.include("preview.doughlabpro.com");
        expect(hosts).to.include("localhost:5173");
        expect(hosts).to.include("doughlab-test.web.app");
        expect(hosts).to.include("doughlab-test.firebaseapp.com");
    });

    it("accepts approved https urls", () => {
        const stripeModule = loadStripeModule();
        const approvedUrl = stripeModule.assertAllowedCheckoutUrl(
            "https://app.doughlabpro.com/upgrade/success",
            "successUrl"
        );

        expect(approvedUrl).to.equal("https://app.doughlabpro.com/upgrade/success");
    });

    it("accepts localhost over http during development", () => {
        const stripeModule = loadStripeModule();
        const approvedUrl = stripeModule.assertAllowedCheckoutUrl(
            "http://localhost:5173/#/upgrade",
            "cancelUrl"
        );

        expect(approvedUrl).to.equal("http://localhost:5173/#/upgrade");
    });

    it("rejects insecure non-localhost urls", () => {
        const stripeModule = loadStripeModule();

        expect(() => stripeModule.assertAllowedCheckoutUrl(
            "http://app.doughlabpro.com/upgrade",
            "successUrl"
        )).to.throw(FakeHttpsError).with.property("code", "invalid-argument");
    });

    it("rejects urls outside the first-party allowlist", () => {
        const stripeModule = loadStripeModule();

        expect(() => stripeModule.assertAllowedCheckoutUrl(
            "https://evil.example.com/checkout",
            "cancelUrl"
        )).to.throw(FakeHttpsError).with.property("code", "invalid-argument");
    });
});
