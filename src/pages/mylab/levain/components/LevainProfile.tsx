import React from 'react';
import { useTranslation } from '@/i18n';
import { Levain } from '@/types';

export const LevainProfile: React.FC<{ levain: Levain }> = ({ levain }) => {
    const { t } = useTranslation();
    return <div>{t('mylab.levain_profile_placeholder')}</div>;
};
export default LevainProfile;
