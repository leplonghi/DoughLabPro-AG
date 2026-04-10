import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';
import {
  LEGAL_EMAIL,
  LEGAL_LAST_UPDATED,
} from './legalConfig';

const CookiesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LegalPageLayout title={t('general.cookie_policy')} lastUpdated={LEGAL_LAST_UPDATED}>
      <h3>1. What this policy covers</h3>
      <p>
        DoughLabPro uses cookies, local storage, browser permissions, service workers, and similar technologies to keep
        the app working, remember preferences, maintain authentication, support analytics, and enable optional reminders
        or integrations.
      </p>

      <h3>2. Essential technologies</h3>
      <p>These technologies are necessary for core operation and security. Examples include:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>authentication and secure session technologies from Firebase or Google;</li>
        <li>checkout or billing continuity technologies used by payment providers such as Stripe;</li>
        <li>core app storage used for route recovery, account state, and interface stability.</li>
      </ul>

      <h3>3. Preference and functional storage</h3>
      <p>
        The app stores functional preferences directly in the browser or device, including language, unit preferences,
        onboarding state, calculator mode, notification settings, scheduled local reminders, and cached workspace data.
      </p>

      <h3>4. Analytics and performance technologies</h3>
      <p>
        Depending on the deployment configuration, DoughLabPro may send sanitized usage events to tools such as `gtag`,
        `dataLayer`, or `plausible`. These events help us understand feature adoption, diagnose failures, and improve
        reliability. Where possible, direct identifiers are redacted or minimized before analytics events are emitted.
      </p>

      <h3>5. Third-party technologies</h3>
      <p>Third-party providers may also set their own technologies when you use specific features, such as:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Google account login and Firebase session management;</li>
        <li>Stripe checkout and billing portal flows;</li>
        <li>browser notification permissions and service-worker based reminder behavior on your device.</li>
      </ul>

      <h3>6. How to manage these technologies</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>You can clear cookies and local storage through your browser settings.</li>
        <li>You can revoke notification permissions through your browser or operating system settings.</li>
        <li>You can sign out to remove active authenticated sessions from the product side, although some provider technologies may remain until cleared by the browser.</li>
        <li>Blocking all cookies or storage mechanisms may reduce app functionality, including login, billing, saved preferences, and reminders.</li>
      </ul>

      <h3>7. Relationship with the Privacy Policy</h3>
      <p>
        This Cookie Policy should be read together with the Privacy Policy, which explains the purposes, legal bases,
        sharing, retention, and rights applicable to personal data processed through these technologies.
      </p>

      <h3>8. Contact</h3>
      <p>
        Questions about cookies, local storage, or tracking technologies can be sent to{' '}
        <a href={`mailto:${LEGAL_EMAIL}`} className="text-dlp-primary hover:underline">{LEGAL_EMAIL}</a>.
      </p>
    </LegalPageLayout>
  );
};

export default CookiesPage;
