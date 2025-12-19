import React from 'react';
import { FeatureKey } from '../../../permissions';
import { FOMO_TRIGGERS } from '../fomoTriggers';
import { useTranslation } from '@/i18n';

interface UpgradeModalProps {
    isOpen: boolean;
    onClose: () => void;
    featureKey: FeatureKey | null;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose, featureKey }) => {
  const { t } = useTranslation();
    if (!isOpen || !featureKey) return null;

    const trigger = FOMO_TRIGGERS[featureKey] || {
        description: 'Unlock this premium feature with DoughLab Pro.',
        cta: 'Upgrade Now'
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-zinc-900 border border-dlp-brand/30 rounded-2xl max-w-md w-full p-6 shadow-2xl relative overflow-hidden">
                {/* Decorative background effects */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-dlp-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-dlp-brand/20 text-lime-400 mb-4">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{t('general.unlock_pro_features')}</h3>
                        <p className="text-zinc-400">{trigger.description}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <span className="text-lime-400">✓</span>{t('marketing.unlimited_recipes')}</div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <span className="text-lime-400">✓</span>{t('marketing.advanced_calculator')}</div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <span className="text-lime-400">✓</span>{t('marketing.community_access')}</div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300">
                            <span className="text-lime-400">✓</span>{t('marketing.ai_assistant')}</div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={() => {
                                // Redirect to upgrade page or stripe checkout
                                console.log('Redirecting to upgrade...');
                                onClose();
                            }}
                            className="w-full py-3 px-4 bg-gradient-to-r from-dlp-brand to-dlp-brand-hover hover:from-lime-400 hover:to-dlp-brand text-black font-bold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-lime-900/20"
                        >
                            {trigger.cta}
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium rounded-xl transition-colors"
                        >{t('marketing.maybe_later')}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


