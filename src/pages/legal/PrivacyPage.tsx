import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';
import {
  LEGAL_COMPANY_NAME,
  LEGAL_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_SUPPORT_EMAIL,
  LGPD_RIGHTS,
} from './legalConfig';

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LegalPageLayout title={t('general.privacy_policy')} lastUpdated={LEGAL_LAST_UPDATED}>
      <p>
        This Privacy Policy explains how {LEGAL_COMPANY_NAME} processes personal data when you use the DoughLabPro app,
        website, subscription flows, community features, support channels, and related services. It is intended to
        support transparency under the Brazilian General Data Protection Law (LGPD) and other applicable privacy rules.
      </p>

      <h3>1. Controller and scope</h3>
      <p>
        For product, account, subscription, support, and community operations, DoughLabPro acts as the controller of
        personal data processed within the service. In some stages, third-party providers such as identity, cloud, AI,
        or payment providers may act as processors or independent controllers under their own terms.
      </p>

      <h3>2. Categories of personal data we may process</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Account data:</strong> name, email, authentication identifiers, avatar, and login provider.</li>
        <li><strong>Profile data:</strong> optional bio, location, website, Instagram handle, skill level, birth date, and gender fields you choose to provide.</li>
        <li><strong>Workspace data:</strong> dough configurations, batches, notes, levains, ovens, flours, goals, custom presets, favorites, toppings, and uploaded images.</li>
        <li><strong>Community data:</strong> posts, comments, likes, follows, cloned records, and profile details you intentionally publish.</li>
        <li><strong>Subscription metadata:</strong> plan status, Stripe customer and subscription references, and billing-related workflow events.</li>
        <li><strong>Usage and security data:</strong> device or browser information, navigation events, language and timezone signals, diagnostics, monitoring data, and abuse-prevention logs.</li>
        <li><strong>AI interaction data:</strong> prompts and baking context you actively submit when using AI-assisted features.</li>
        <li><strong>Local device data:</strong> local storage preferences, notification settings, scheduled reminders, and cached app states stored on your device.</li>
      </ul>

      <h3>3. Why we process personal data and the LGPD legal bases we rely on</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Account creation, authentication, workspace synchronization, and subscription access:</strong> contract execution and preliminary procedures requested by you.</li>
        <li><strong>Billing, tax, accounting, refund, audit, and entitlement reconciliation:</strong> contract execution, legal or regulatory obligation, and regular exercise of rights.</li>
        <li><strong>Security, fraud prevention, reliability, performance monitoring, and service improvement:</strong> legitimate interest, with minimization and proportionality controls.</li>
        <li><strong>Optional AI, community, and notification features that you intentionally use:</strong> contract execution at your request and, where relevant, consent reflected in your device or product choices.</li>
        <li><strong>Support, incident response, and legal defense:</strong> legal obligation, regular exercise of rights, and legitimate interest.</li>
      </ul>

      <h3>4. Sharing with third parties</h3>
      <p>We may share personal data only as necessary to operate the service or comply with law, including with:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Firebase / Google Cloud:</strong> authentication, database, hosting, storage, and cloud function infrastructure.</li>
        <li><strong>Google login providers:</strong> when you choose to sign in with Google.</li>
        <li><strong>Google AI providers:</strong> when you intentionally send prompts or baking context to optional AI features.</li>
        <li><strong>Stripe:</strong> checkout, billing portal, customer management, subscription state, and payment support workflows.</li>
        <li><strong>Analytics and monitoring integrations configured in the deployment:</strong> event collection tools such as `gtag`, `dataLayer`, or `plausible`, when enabled.</li>
        <li><strong>Authorities, courts, auditors, or advisors:</strong> when required by law or reasonably necessary to protect rights, security, or compliance interests.</li>
      </ul>

      <h3>5. International transfers</h3>
      <p>
        Because DoughLabPro relies on global cloud and payment providers, personal data may be processed outside Brazil.
        When that occurs, we rely on contractual, technical, and organizational safeguards compatible with applicable
        law and the provider structures in force at the time of processing.
      </p>

      <h3>6. Public community content</h3>
      <p>
        If you publish a post, comment, public profile element, recipe image, or other community-facing content, that
        information may become visible to other users and may be copied or shared by them. Avoid posting sensitive
        personal data or third-party data without permission.
      </p>

      <h3>7. Retention</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Account and workspace data:</strong> retained while the account is active and for a limited period afterward when needed for backup, recovery, dispute handling, or compliance.</li>
        <li><strong>Billing and financial records:</strong> retained for the period required by applicable tax, accounting, anti-fraud, and audit obligations.</li>
        <li><strong>Support and legal records:</strong> retained for as long as necessary to answer the request and defend rights in potential disputes.</li>
        <li><strong>Local browser or device data:</strong> retained until you clear local storage, revoke permissions, or remove the relevant app data.</li>
      </ul>

      <h3>8. Cookies, local storage, and similar technologies</h3>
      <p>
        DoughLabPro uses cookies, local storage, browser permissions, and related technologies to authenticate sessions,
        remember preferences, preserve app state, run reminders, and support analytics or monitoring when these tools are
        enabled by the deployment. More details are available in the Cookie Policy.
      </p>

      <h3>9. Security</h3>
      <p>
        We use provider security features, access controls, authenticated cloud resources, and data minimization
        practices designed to reduce risk. No digital environment is entirely risk-free, so you should also protect
        your password, devices, and any content you choose to publish.
      </p>

      <h3>10. Your LGPD rights</h3>
      <p>The LGPD provides rights that may apply depending on the context and legal basis of processing, including:</p>
      <ul className="list-disc pl-5 space-y-1">
        {LGPD_RIGHTS.map((right) => (
          <li key={right}>{right}</li>
        ))}
      </ul>

      <h3>11. How to exercise privacy and LGPD rights</h3>
      <p>
        Send your request to <a href={`mailto:${LEGAL_EMAIL}`} className="text-dlp-accent hover:underline">{LEGAL_EMAIL}</a>.
        We may request information reasonably necessary to confirm identity, understand scope, or validate authority.
        When applicable, requests will be handled within the deadlines established by law or within a reasonable
        operational timeframe when technical review is required.
      </p>
      <p>
        If you are not satisfied with our response, applicable law may allow you to seek consumer-protection channels
        and, where relevant, submit a petition to the ANPD after contacting the controller.
      </p>

      <h3>12. Children and adolescents</h3>
      <p>
        DoughLabPro is not intentionally designed for children. If a child&apos;s or adolescent&apos;s personal data is
        processed in a specific context, an appropriate legal basis and the best-interest standard required by Brazilian
        law must be observed. If you believe this occurred improperly, contact us immediately.
      </p>

      <h3>13. External links and affiliates</h3>
      <p>
        The service may display links to third-party websites, marketplaces, or affiliate partners. Once you leave
        DoughLabPro, the privacy practices of those external environments are governed by their own notices and policies.
      </p>

      <h3>14. Changes to this policy</h3>
      <p>
        We may update this Privacy Policy to reflect changes in the product, providers, or applicable law. The current
        version and revision date will always appear on this page.
      </p>

      <h3>15. Contact</h3>
      <p>
        Privacy and LGPD channel: <a href={`mailto:${LEGAL_EMAIL}`} className="text-dlp-accent hover:underline">{LEGAL_EMAIL}</a><br />
        General support: <a href={`mailto:${LEGAL_SUPPORT_EMAIL}`} className="text-dlp-accent hover:underline">{LEGAL_SUPPORT_EMAIL}</a>
      </p>
    </LegalPageLayout>
  );
};

export default PrivacyPage;
