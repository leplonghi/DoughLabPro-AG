import React from 'react';

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
    return (
        <section
            id={id}
            className={`dlp-calc-panel animate-slide-up group overflow-hidden rounded-[2rem] p-4 sm:p-5 ${className}`}
        >
            <div className="pointer-events-none mb-4 h-px w-full bg-[linear-gradient(90deg,rgba(81,161,69,0.22),rgba(81,161,69,0.08),transparent)]" />
            <div className="mb-4 flex items-start gap-3">
                {icon && (
                    <div className="dlp-calc-panel--subtle flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl text-[#2D6A4F] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                        {React.cloneElement(icon as React.ReactElement, { size: 16, strokeWidth: 2.5 })}
                    </div>
                )}
                <div className="min-w-0 pt-0.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f8a77]">
                        Calculator Section
                    </p>
                    <h3 className="mt-1 text-[1.15rem] font-bold font-heading text-slate-900 leading-tight dark:text-slate-50">
                        {title}
                    </h3>
                    {description && (
                        <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">
                            {description}
                        </p>
                    )}
                </div>
            </div>
            <div className="space-y-4">
                {children}
            </div>
        </section>
    );
};

export default AccordionSection;

