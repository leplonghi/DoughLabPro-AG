import React from 'react';
import { useTranslation } from '@/i18n';
import { Levain } from '@/types';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    levain: Levain;
}

export const LevainAssistant: React.FC<Props> = ({ isOpen, onClose, levain }) => {
    const { t } = useTranslation();
    if (!isOpen) return null;
    return <div>{t('mylab.levain_assistant_placeholder')}</div>;
};
export default LevainAssistant;
