import React from 'react';
import { useTranslation } from '@/i18n';
export const GoalModal: React.FC = () => {
    const { t } = useTranslation();
    return <div className="hidden">{t('mylab.goal_modal')}</div>;
};
export default GoalModal;
