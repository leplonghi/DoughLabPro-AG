import React from 'react';
import { useTranslation } from '@/i18n';
export const LevainOnboardingModal: React.FC = () => {
    const { t } = useTranslation();
    return <div className="hidden">{t('general.levain_onboarding_modal')}</div>;
};
export default LevainOnboardingModal;
