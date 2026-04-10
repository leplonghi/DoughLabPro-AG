import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';
import {
  LEGAL_COMPANY_NAME,
  LEGAL_EMAIL,
  LEGAL_LAST_UPDATED,
} from './legalConfig';

const IpPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LegalPageLayout title={t('general.intellectual_property')} lastUpdated={LEGAL_LAST_UPDATED}>
      <h3>1. Ownership of the service</h3>
      <p>
        The DoughLabPro brand, interface, product structure, software, documentation, page design, editorial materials,
        and other original elements of the service are owned by {LEGAL_COMPANY_NAME} or its licensors and are protected
        by applicable intellectual property laws.
      </p>

      <h3>2. User-generated content</h3>
      <p>
        You retain ownership of the content you create and upload. By using the service, you grant DoughLabPro the
        limited, non-exclusive rights necessary to host, store, display, back up, moderate, and operate that content
        within the service and related support or compliance workflows.
      </p>
      <p>
        This license is not a transfer of ownership and does not authorize DoughLabPro to sell your content as if it
        were our own. It is limited to service operation, improvement, support, moderation, legal defense, and the
        normal display of content within the community or product context you selected.
      </p>

      <h3>3. Feedback</h3>
      <p>
        If you submit suggestions, bug reports, product ideas, or workflow feedback, we may use that feedback to improve
        the service without any obligation to compensate you, unless a separate written agreement states otherwise.
      </p>

      <h3>4. Infringement reports</h3>
      <p>
        If you believe content in the service infringes copyright, trademark, image rights, or other intellectual
        property rights, send a detailed notice to{' '}
        <a href={`mailto:${LEGAL_EMAIL}`} className="text-dlp-primary hover:underline">{LEGAL_EMAIL}</a>.
      </p>
      <p>Please include enough detail for review, such as:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>your identification and contact details;</li>
        <li>the protected work or right allegedly infringed;</li>
        <li>the exact URL, account, or content location involved;</li>
        <li>the basis for the claim and any supporting documents you can provide.</li>
      </ul>
    </LegalPageLayout>
  );
};

export default IpPage;
