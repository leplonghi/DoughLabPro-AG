import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';

const LAST_UPDATED = 'April 6, 2026';

const TermsPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <LegalPageLayout title={t('general.terms_of_use')} lastUpdated={LAST_UPDATED}>
            <h3>1. Agreement to these terms</h3>
            <p>
                These Terms of Use form a binding agreement between you and DoughLabPro regarding access to and use of the application, website, content, and related services. By using DoughLabPro, you confirm that you understand and accept these terms.
            </p>

            <h3>2. What the service provides</h3>
            <p>
                DoughLabPro offers educational tools for dough formulation, fermentation planning, baking logs, technical references, community publishing, and premium subscription features. The service is informational and operational in nature. It does not replace professional culinary, nutrition, food safety, legal, or medical advice.
            </p>

            <h3>3. Account responsibility</h3>
            <p>
                You are responsible for keeping your login credentials secure and for all activity performed through your account. If you suspect unauthorized access, you must notify support as soon as possible.
            </p>

            <h3>4. Acceptable use</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>Do not attempt to bypass subscription, security, rate limits, or access controls.</li>
                <li>Do not misuse community features to harass, spam, impersonate, or publish unlawful content.</li>
                <li>Do not reverse engineer, scrape, or interfere with the service in a way that harms reliability or other users.</li>
            </ul>

            <h3>5. User content</h3>
            <p>
                You retain ownership of the recipes, notes, photos, and posts you submit. By uploading content, you grant DoughLabPro the limited rights necessary to host, process, display, and operate that content within the service.
            </p>

            <h3>6. Subscription and billing</h3>
            <p>
                Premium access is provided according to the active plan shown during checkout. Subscription renewals, cancellations, taxes, and billing events are handled through the configured payment provider. Access to premium features may be revoked if a subscription ends, expires, or is refunded according to the billing rules in force at the time of payment.
            </p>

            <h3>7. Food safety and operational disclaimer</h3>
            <div className="rounded border border-dlp-border bg-dlp-bg-soft p-4 text-sm">
                <p className="font-bold">
                    DoughLabPro is a technical aid, not a food safety authority. You are solely responsible for ingredient handling, fermentation limits, storage practices, allergens, sanitation, and compliance with local regulations.
                </p>
            </div>

            <h3>8. Warranty disclaimer</h3>
            <div className="rounded border border-dlp-border bg-dlp-bg-soft p-4 text-sm">
                <p className="font-bold">
                    The application is provided on an “as is” and “as available” basis. We do not guarantee uninterrupted availability, error-free operation, or suitability for every production workflow.
                </p>
            </div>

            <h3>9. Limitation of liability</h3>
            <p>
                To the maximum extent allowed by law, DoughLabPro will not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of data, revenue, production time, or business opportunity arising from use of the service.
            </p>

            <h3>10. Changes to the service or terms</h3>
            <p>
                We may update features, pricing, policies, or these terms as the product evolves. Material changes should be reflected in the legal pages with an updated effective date.
            </p>

            <h3>11. Contact</h3>
            <p>
                For contractual or legal questions, contact <a href="mailto:legal@doughlabpro.com" className="text-dlp-accent hover:underline">legal@doughlabpro.com</a>.
            </p>
        </LegalPageLayout>
    );
};

export default TermsPage;
