import React from 'react';
import { useTranslation } from '@/i18n';

/**
 * Mandatory Amazon Affiliate Disclaimer
 * To be used in footers, about pages, or near affiliate links.
 */
export const AffiliateDisclaimer: React.FC<{ className?: string, variant?: 'footer' | 'inline' }> = ({
    className = "",
    variant = 'footer'
}) => {
  const { t } = useTranslation();

    if (variant === 'inline') {
        return (
            <span className={`text-[10px] text-slate-400 italic block mt-2 ${className}`}>
                As an Amazon Associate, DoughLab Pro earns from qualifying purchases.
            </span>
        );
    }

    return (
        <div className={`py-4 px-6 border-t border-slate-100 bg-slate-50/50 text-center ${className}`}>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                As an Amazon Associate, DoughLab Pro earns from qualifying purchases.
                <span className="hidden sm:inline"> This helps support the development of our free calculator and tools.</span>
            </p>
        </div>
    );
};
