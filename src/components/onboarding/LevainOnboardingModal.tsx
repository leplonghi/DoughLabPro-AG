import React from 'react';
import { useTranslation } from '@/i18n';

interface LevainOnboardingModalProps {
    onComplete?: () => void;
    onNavigate?: (page: string, params?: string) => void;
}

export const LevainOnboardingModal: React.FC<LevainOnboardingModalProps> = ({ onComplete }) => {
    const { t } = useTranslation();
    return <div className="hidden">{t('general.levain_onboarding_modal')}</div>;
};
export default LevainOnboardingModal;
