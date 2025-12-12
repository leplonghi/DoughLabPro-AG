import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalPageLayout title={t('general.contact_information')} lastUpdated="August 1, 2024">
      <h3>1. Customer Support</h3>
      <p>For general inquiries, technical support, or assistance with your account, please contact our support team:</p>
      <ul className="list-disc pl-5 mt-2">
        <li><strong>{t('ui.email')}</strong> support@doughlabpro.com</li>
      </ul>

      <h3 className="mt-6">2. Legal Inquiries</h3>
      <p>For legal notices, privacy-related requests (including GDPR/CCPA data subject requests), or intellectual property matters, please direct your correspondence to our Legal Department:</p>
      <div className="mt-4 p-4 bg-dlp-bg-soft rounded border border-dlp-border">
        <p className="font-semibold text-dlp-text-primary">{t('general.doughlabpro_legal_department')}</p>
        <p>Email: <a href="mailto:legal@doughlabpro.com" className="text-dlp-accent hover:underline">legal@doughlabpro.com</a></p>
        <p className="text-sm text-dlp-text-muted mt-2">{t('ui.please_allow_up_to_30_days_for_a_response_to_forma')}</p>
      </div>

      <h3 className="mt-6">3. Corporate Address</h3>
      <p><em>{t('ui.mailing_address_available_upon_request_for_formal_')}</em></p>
    </LegalPageLayout>
  );
};

export default ContactPage;
