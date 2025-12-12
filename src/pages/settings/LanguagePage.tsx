import React from 'react';
import { useTranslation } from '@/i18n';
const LanguagePage: React.FC = () => <div className="p-8 text-center"><h1 className="text-2xl font-bold">{t('general.language_settings')}</h1><p>{t('ui.coming_soon')}</p></div>;
export default LanguagePage;
