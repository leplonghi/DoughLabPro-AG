import React from 'react';
import { useTranslation } from '@/i18n';
interface GoalModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (goalData: any) => Promise<void>;
    goalToEdit?: any;
}

export const GoalModal: React.FC<GoalModalProps> = ({ isOpen }) => {
    const { t } = useTranslation();
    if (!isOpen) return null;
    return <div className="hidden">{t('common.mylab.goal_modal')}</div>;
};
export default GoalModal;
