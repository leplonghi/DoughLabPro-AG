import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';
import {
  LEGAL_COMPANY_NAME,
  LEGAL_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_SUPPORT_EMAIL,
} from './legalConfig';

const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LegalPageLayout title={t('general.terms_of_use')} lastUpdated={LEGAL_LAST_UPDATED}>
      <h3>1. Acceptance of these terms</h3>
      <p>
        These Terms of Use govern access to and use of DoughLabPro, including the app, website, community features,
        subscription workflows, AI tools, and related services. By creating an account, subscribing, or continuing to
        use the service, you agree to these Terms.
      </p>

      <h3>2. Nature of the service</h3>
      <p>
        {LEGAL_COMPANY_NAME} provides digital tools for dough formulation, fermentation planning, baking logs, learning
        references, community sharing, and premium subscription features. The service is educational and operational in
        nature. It does not replace professional culinary, food safety, legal, accounting, medical, or nutritional advice.
      </p>

      <h3>3. Eligibility and account responsibility</h3>
      <p>
        You are responsible for keeping your credentials secure and for all activity performed through your account,
        including guest, email, or third-party login methods. If you suspect unauthorized access, contact{' '}
        <a href={`mailto:${LEGAL_SUPPORT_EMAIL}`} className="text-dlp-primary hover:underline">{LEGAL_SUPPORT_EMAIL}</a>.
      </p>

      <h3>4. Acceptable use</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Do not bypass subscriptions, rate limits, moderation, access controls, or security mechanisms.</li>
        <li>Do not misuse community features to harass, deceive, spam, impersonate, or publish unlawful or infringing content.</li>
        <li>Do not upload malware, abusive automation, or material that interferes with reliability, security, or other users.</li>
        <li>Do not submit sensitive personal data or third-party data without authorization and a valid legal basis.</li>
      </ul>

      <h3>5. User content</h3>
      <p>
        You retain ownership of the content you submit, including recipes, notes, photos, prompts, and posts. By
        uploading content, you grant DoughLabPro the rights necessary to host, process, display, moderate, back up, and
        operate that content within the service. You represent that you have the rights necessary to submit it.
      </p>

      <h3>6. Community and public posting</h3>
      <p>
        Community features are optional. Content you publish publicly may be visible to other users and may be shared or
        copied by them. You are responsible for what you choose to make public and for complying with intellectual
        property, privacy, and applicable law.
      </p>

      <h3>7. Subscriptions and billing</h3>
      <p>
        Paid features are governed by the active plan shown during checkout. Billing, renewals, cancellations, refunds,
        taxes, and related events may be handled by third-party payment providers. Access to premium features may be
        suspended or revoked if payment fails, a subscription ends, or misuse is detected.
      </p>

      <h3>8. AI-assisted features</h3>
      <p>
        AI features may generate technical suggestions based on the prompts and baking context you submit. You remain
        responsible for reviewing outputs before relying on them in production, especially where food safety, regulatory,
        allergen, or commercial decisions are involved.
      </p>

      <h3>9. Food safety and operational disclaimer</h3>
      <div className="rounded border border-dlp-border bg-dlp-bg-soft p-4 text-sm">
        <p className="font-bold">
          DoughLabPro is a technical aid, not a food safety authority. You remain solely responsible for ingredient
          handling, fermentation limits, labeling, allergen controls, sanitation, storage, and compliance with local law.
        </p>
      </div>

      <h3>10. Availability, suspension, and termination</h3>
      <p>
        We may change, suspend, or discontinue features, integrations, or pricing. We may suspend or terminate access if
        these Terms are violated, if fraud or abuse is suspected, if required by law, or if continued access presents a
        security or operational risk.
      </p>

      <h3>11. Warranty disclaimer</h3>
      <div className="rounded border border-dlp-border bg-dlp-bg-soft p-4 text-sm">
        <p className="font-bold">
          The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the maximum extent allowed by law,
          {` ${LEGAL_COMPANY_NAME} `}does not guarantee uninterrupted availability, error-free performance, or suitability for every workflow.
        </p>
      </div>

      <h3>12. Limitation of liability</h3>
      <p>
        To the maximum extent permitted by law, {LEGAL_COMPANY_NAME} will not be liable for indirect, incidental,
        consequential, special, exemplary, or punitive damages, including loss of data, revenue, production time,
        business opportunity, or reputation arising from use of the service.
      </p>

      <h3>13. Related policies and updates</h3>
      <p>
        These Terms should be read together with the Privacy Policy, Cookie Policy, EULA, and Intellectual Property
        notice. We may update the legal documents as the product evolves. The current version and revision date will be
        displayed on each page.
      </p>

      <h3>14. Contact</h3>
      <p>
        For contractual or legal notices, contact{' '}
        <a href={`mailto:${LEGAL_EMAIL}`} className="text-dlp-primary hover:underline">{LEGAL_EMAIL}</a>.
      </p>
    </LegalPageLayout>
  );
};

export default TermsPage;
