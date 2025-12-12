import React from 'react';
import { useTranslation } from '@/i18n';

interface TechnicalBadgeProps {
    label: string;
    value: string | number;
    unit?: string;
    color?: 'blue' | 'green' | 'red' | 'slate';
}



export const TechnicalBadge: React.FC<TechnicalBadgeProps> = ({ label, value, unit, color = 'slate' }) => {
  const { t } = useTranslation();
    // Standardized style using design tokens
    const baseClass = 'bg-dlp-bg-muted text-dlp-text-primary border-dlp-border';

    return (
        <div className={`flex flex-col items-center justify-center p-2 rounded-lg border ${baseClass} min-w-[80px]`}>
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 text-dlp-text-secondary">{label}</span>
            <span className="text-lg font-bold leading-none mt-1">
                {value}<span className="text-xs font-normal ml-0.5 text-dlp-text-muted">{unit}</span>
            </span>
        </div>
    );
};
