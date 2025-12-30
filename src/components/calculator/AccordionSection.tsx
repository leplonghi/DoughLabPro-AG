import React from 'react';
import { useTranslation } from '@/i18n';

interface AccordionSectionProps {
    id?: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    index?: number;
    accentColor?: 'emerald' | 'blue' | 'amber' | 'indigo' | 'rose' | 'lime';
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
    id,
    title,
    description,
    icon,
    children,
    className = '',
    index,
    accentColor = 'emerald'
}) => {
    const { t } = useTranslation();

    const colorMap = {
        emerald: {
            bg: 'bg-emerald-50/50',
            iconBg: 'bg-emerald-100/50',
            text: 'text-emerald-700',
            border: 'border-emerald-200/50',
            accent: 'bg-emerald-500'
        },
        blue: {
            bg: 'bg-blue-50/50',
            iconBg: 'bg-blue-100/50',
            text: 'text-blue-700',
            border: 'border-blue-200/50',
            accent: 'bg-blue-500'
        },
        amber: {
            bg: 'bg-amber-50/50',
            iconBg: 'bg-amber-100/50',
            text: 'text-amber-700',
            border: 'border-amber-200/50',
            accent: 'bg-amber-500'
        },
        indigo: {
            bg: 'bg-indigo-50/50',
            iconBg: 'bg-indigo-100/50',
            text: 'text-indigo-700',
            border: 'border-indigo-200/50',
            accent: 'bg-indigo-500'
        },
        rose: {
            bg: 'bg-rose-50/50',
            iconBg: 'bg-rose-100/50',
            text: 'text-rose-700',
            border: 'border-rose-200/50',
            accent: 'bg-rose-500'
        },
        lime: {
            bg: 'bg-lime-50/30',
            iconBg: 'bg-lime-100/50',
            text: 'text-lime-700',
            border: 'border-lime-200/30',
            accent: 'bg-lime-500'
        }
    };

    const colors = colorMap[accentColor] || colorMap.emerald;

    return (
        <div
            id={id}
            className={`dlp-card relative animate-slide-up transition-all duration-500 hover:shadow-premium group flex flex-col ${className} ${colors.border}`}
        >
            {/* Left Accent Bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.accent} opacity-30 group-hover:opacity-100 transition-opacity`} />

            {/* Header Area */}
            <div className={`px-6 py-5 flex items-start gap-4 border-b border-slate-50 ${colors.bg}`}>
                {index !== undefined && (
                    <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform z-10">
                        {index}
                    </div>
                )}

                {icon && (
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.text} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner`}>
                        {React.cloneElement(icon as React.ReactElement, { size: 20, strokeWidth: 2.5 })}
                    </div>
                )}

                <div className="pt-0.5">
                    <h3 className="text-base font-black font-heading text-slate-900 leading-tight uppercase tracking-tight">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-[11px] font-medium text-slate-500 mt-1 max-w-lg leading-relaxed italic opacity-80">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-5 bg-white">
                {children}
            </div>
        </div>
    );
};

export default AccordionSection;

