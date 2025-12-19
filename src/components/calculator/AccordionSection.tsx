import React from 'react';
import { useTranslation } from '@/i18n';

interface AccordionSectionProps {
    id?: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
    id,
    title,
    description,
    icon,
    children,
    className = '',
}) => {
    const { t } = useTranslation();
    return (
        <div id={id} className={`dlp-card p-4 animate-slide-up bg-white/70 backdrop-blur-sm transition-all duration-300 hover:shadow-premium group ${className}`}>
            <div className="mb-4 flex items-start gap-3">
                {icon && (
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[#2D6A4F] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#2D6A4F]/10">
                        {React.cloneElement(icon as React.ReactElement, { size: 16, strokeWidth: 2.5 })}
                    </div>
                )}
                <div className="pt-0.5">
                    <h3 className="text-lg font-bold font-heading text-slate-900 leading-tight">{title}</h3>
                    {description && (
                        <p className="text-[11px] text-slate-500 mt-1 max-w-lg leading-relaxed">{description}</p>
                    )}
                </div>
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
};

export default AccordionSection;

