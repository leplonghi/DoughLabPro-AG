import React from 'react';
import { useTranslation } from '@/i18n';
export const LevainAssistant: React.FC = () => {
    const { t } = useTranslation();
    return <div>{t('mylab.levain_assistant_placeholder')}</div>;
};
export default LevainAssistant;
