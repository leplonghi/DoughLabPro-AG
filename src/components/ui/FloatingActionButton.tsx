import React from 'react';
import { useTranslation } from '@/i18n';
export const FloatingActionButton: React.FC<any> = (props) => {
    const { t } = useTranslation();
    return <button {...props} className="fixed bottom-4 right-4 bg-dlp-accent text-white p-4 rounded-full shadow-dlp-lg hover:bg-dlp-accent-hover transition-colors">{t('ui.fab')}</button>;
};
export default FloatingActionButton;
