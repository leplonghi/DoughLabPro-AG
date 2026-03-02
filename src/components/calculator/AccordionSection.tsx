import React from 'react';
import { useTranslation } from '@/i18n';

interface AccordionSectionProps {
    id?: string;
    title: string | React.ReactNode;
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
            bg: 'bg-emerald-50/30',
            iconBg: 'bg-emerald-100/60',
            text: 'text-emerald-600',
            border: 'border-emerald-100/40',
            accent: 'bg-emerald-500',
            indexBg: 'bg-emerald-500',
        },
        blue: {
            bg: 'bg-blue-50/30',
            iconBg: 'bg-blue-100/60',
            text: 'text-blue-600',
            border: 'border-blue-100/40',
            accent: 'bg-blue-500',
            indexBg: 'bg-blue-500',
        },
        amber: {
            bg: 'bg-amber-50/30',
            iconBg: 'bg-amber-100/60',
            text: 'text-amber-600',
            border: 'border-amber-100/40',
            accent: 'bg-amber-500',
            indexBg: 'bg-amber-500',
        },
        indigo: {
            bg: 'bg-indigo-50/30',
            iconBg: 'bg-indigo-100/60',
            text: 'text-indigo-600',
            border: 'border-indigo-100/40',
            accent: 'bg-indigo-500',
            indexBg: 'bg-indigo-500',
        },
        rose: {
            bg: 'bg-rose-50/30',
            iconBg: 'bg-rose-100/60',
            text: 'text-rose-600',
            border: 'border-rose-100/40',
            accent: 'bg-rose-500',
            indexBg: 'bg-rose-500',
        },
        lime: {
            bg: 'bg-lime-50/20',
            iconBg: 'bg-lime-100/60',
            text: 'text-lime-600',
            border: 'border-lime-100/30',
            accent: 'bg-lime-500',
            indexBg: 'bg-lime-600',
        }
    };

    const colors = colorMap[accentColor] || colorMap.emerald;

    return (
        <div
            id={id}
            className={`relative rounded-xl border border-slate-100 bg-white shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md ${className}`}
        >
            {/* Compact Header */}
            <div className={`px-4 py-3 flex items-center gap-2.5 ${colors.bg} border-b border-slate-100/60`}>
                {/* Step Number Badge */}
                {index !== undefined && (
                    <div className={`w-5 h-5 rounded-full ${colors.indexBg} text-white text-[9px] font-black flex items-center justify-center flex-shrink-0`}>
                        {index}
                    </div>
                )}

                {/* Icon - compact */}
                {icon && (
                    <div className={`flex h-6 w-6 items-center justify-center rounded-lg ${colors.iconBg} ${colors.text} flex-shrink-0`}>
                        {React.cloneElement(icon as React.ReactElement<any>, { size: 14, strokeWidth: 2.5 })}
                    </div>
                )}

                {/* Title & Description inline */}
                <div className="flex-grow min-w-0 flex items-baseline gap-2">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide whitespace-nowrap">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-[10px] text-slate-400 truncate hidden sm:block italic">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {/* Content Area - tighter padding */}
            <div className="px-4 py-4 space-y-4">
                {children}
            </div>
        </div>
    );
};

export default AccordionSection;
