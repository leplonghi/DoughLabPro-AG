import React from 'react';
import { useTranslation } from '@/i18n';

export const LevainProfile: React.FC = () => {
    const { t } = useTranslation();
    return <div>{t('mylab.levain_profile_placeholder')}</div>;
};
export default LevainProfile;
