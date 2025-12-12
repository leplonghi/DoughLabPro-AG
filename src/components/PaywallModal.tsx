import React from 'react';
import { PaywallOrigin } from '@/types';
import { CheckCircleIcon, StarIcon } from './ui/Icons';
import { useUser } from '@/contexts/UserProvider';
import { useTranslation } from '@/i18n';

interface PaywallModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigateToPlans: () => void;
    origin: PaywallOrigin | null;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
    isOpen,
    onClose,
    onNavigateToPlans,
    origin,
}) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    const handleUpgrade = () => {
        onClose();
        window.location.href = '/upgrade';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-dlp-bg-card rounded-2xl shadow-dlp-lg overflow-hidden transform transition-all animate-scale-in ring-1 ring-white/50">
                {/* Header / Hero */}
                <div className="bg-gradient-to-br from-dlp-bg-card to-dlp-bg-muted p-8 text-center relative overflow-hidden border-b border-dlp-border">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-dlp-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-dlp-accent-light/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-dlp-accent to-dlp-accent-hover rounded-full flex items-center justify-center mb-4 shadow-lg shadow-dlp-accent/30">
                            <StarIcon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-dlp-text-primary mb-2 tracking-tight">
                            {t('paywall.title')}
                        </h2>
                        <p className="text-dlp-text-secondary text-sm max-w-xs mx-auto">
                            {t('paywall.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Body */}
                <div className="p-8">
                    <div className="space-y-4 mb-8">
                        <BenefitItem text={t('paywall.benefits.unlimited')} />
                        <BenefitItem text={t('paywall.benefits.calculator')} />
                        <BenefitItem text={t('paywall.benefits.levain')} />
                        <BenefitItem text={t('paywall.benefits.compare')} />
                        <BenefitItem text={t('paywall.benefits.ai')} />
                    </div>

                    <div className="bg-dlp-bg-muted rounded-xl p-4 mb-6 border border-dlp-border text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-1">
                            <span className="bg-dlp-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                {t('paywall.pricing.best_value')}
                            </span>
                        </div>
                        <p className="text-xs text-dlp-text-primary uppercase tracking-wider font-bold mb-1">
                            {t('paywall.pricing.plan_name')}
                        </p>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-3xl font-extrabold text-dlp-text-primary">$4.99</span>
                            <span className="text-dlp-text-secondary font-medium">
                                {t('paywall.pricing.per_month')}
                            </span>
                        </div>
                        <p className="text-xs text-dlp-accent mt-2 font-medium">
                            {t('paywall.pricing.cancel_anytime', { currency: 'USD' })}
                        </p>
                    </div>

                    <button
                        onClick={handleUpgrade}
                        className="w-full py-3.5 bg-gradient-to-br from-dlp-accent to-dlp-accent-hover hover:from-dlp-accent-hover hover:to-dlp-accent text-white font-bold rounded-xl shadow-lg shadow-dlp-accent/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] ring-1 ring-dlp-accent/50"
                    >
                        {t('paywall.cta_trial')}
                    </button>

                    <button
                        onClick={onClose}
                        className="w-full mt-3 py-2 text-sm text-dlp-text-muted hover:text-dlp-text-secondary font-medium transition-colors"
                    >
                        {t('paywall.cta_later')}
                    </button>
                </div>
            </div>
        </div>
    );
};

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-dlp-bg-muted flex items-center justify-center border border-dlp-border">
            <CheckCircleIcon className="w-3.5 h-3.5 text-dlp-accent" />
        </div>
        <span className="text-dlp-text-secondary text-sm font-medium">{text}</span>
    </div>
);

export default PaywallModal;
