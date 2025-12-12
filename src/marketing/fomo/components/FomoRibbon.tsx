import React from 'react';
import { useTranslation } from '@/i18n';

export const FomoRibbon: React.FC = () => {
  const { t } = useTranslation();
    return (
        <div className="bg-gradient-to-r from-lime-900/80 to-zinc-900/80 backdrop-blur border-b border-lime-500/20 py-2 px-4 text-center">
            <p className="text-xs md:text-sm text-zinc-200">
                <span className="font-bold text-lime-400">{t('ui.pro_tip')}</span> Unlock advanced fermentation tracking with DoughLab Pro.
                <button className="ml-2 underline hover:text-white">{t('general.learn_more')}</button>
            </p>
        </div>
    );
};
