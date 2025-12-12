import React from 'react';
import LegalPageLayout from './LegalPageLayout';
import { useTranslation } from '@/i18n';

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LegalPageLayout title={t('general.privacy_policy')} lastUpdated="August 1, 2024">
      <ul>
        <li><strong>{t('ui.local_storage')}</strong> We store user preferences (like theme and mode) and cached data (like your last calculator configuration) directly on your device to speed up the application and allow offline functionality.</li>
        <li><strong>{t('ui.cookies')}</strong> Used primarily for authentication and security purposes by our identity providers (like Google/Firebase).</li>
      </ul>

      <h3>6. Third-Party Links & Affiliates</h3>
      <p>DoughLabPro may display links to third-party websites, including affiliate links to online shops and marketplaces. If you click those links, you will be redirected to external websites that are not operated by DoughLabPro. We are not responsible for the content, privacy practices or data collection policies of those third-party sites. We encourage you to review their privacy policies before providing any personal information or completing a purchase.</p>

      <h3>7. Contact</h3>
      <p>For privacy-related questions, please contact support@doughlabpro.com.</p>
    </LegalPageLayout>
  );
};

export default PrivacyPage;
