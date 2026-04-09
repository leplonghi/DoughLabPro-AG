import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';
import {
  LEGAL_EMAIL,
  LEGAL_LAST_UPDATED,
  LEGAL_SUPPORT_EMAIL,
} from './legalConfig';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LegalPageLayout title={t('general.contact_information')} lastUpdated={LEGAL_LAST_UPDATED}>
      <h3>1. Customer support</h3>
      <p>
        For technical assistance, account access issues, billing questions, or product support, contact{' '}
        <a href={`mailto:${LEGAL_SUPPORT_EMAIL}`} className="text-dlp-accent hover:underline">{LEGAL_SUPPORT_EMAIL}</a>.
      </p>

      <h3>2. Privacy and LGPD requests</h3>
      <p>
        For requests involving privacy, personal data, LGPD rights, deletion, correction, access, portability, or
        objections to specific processing, contact{' '}
        <a href={`mailto:${LEGAL_EMAIL}`} className="text-dlp-accent hover:underline">{LEGAL_EMAIL}</a>.
      </p>
      <p>To help us handle the request securely and efficiently, please include:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>the email address associated with your account;</li>
        <li>a clear description of the request and the data or feature involved;</li>
        <li>supporting information reasonably necessary to confirm identity or authority, when applicable.</li>
      </ul>

      <h3>3. Legal notices and intellectual property matters</h3>
      <p>
        For formal notices, copyright complaints, infringement reports, contractual issues, or other legal matters,
        contact <a href={`mailto:${LEGAL_EMAIL}`} className="text-dlp-accent hover:underline">{LEGAL_EMAIL}</a>.
      </p>

      <h3>4. Response handling</h3>
      <p>
        We may need to request additional information to validate identity, confirm account ownership, or clarify the
        scope of the request. We will respond within the deadlines required by applicable law or within a reasonable
        operational period where technical review is necessary.
      </p>

      <h3>5. Corporate identification</h3>
      <p>
        If you require formal corporate identification or verified contact details for a legal or contractual purpose,
        request them through <a href={`mailto:${LEGAL_EMAIL}`} className="text-dlp-accent hover:underline">{LEGAL_EMAIL}</a>.
      </p>
    </LegalPageLayout>
  );
};

export default ContactPage;
