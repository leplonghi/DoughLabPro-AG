import React from 'react';
import { useTranslation } from '@/i18n';
const ProActivatedPage: React.FC = () => {
    const { t } = useTranslation();
    return <div>{t('general.pro_activated')}</div>;
};
export default ProActivatedPage;
