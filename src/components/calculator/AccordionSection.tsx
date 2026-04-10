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
            className={`dlp-calc-panel animate-slide-up group overflow-hidden rounded-[1.7rem] p-3 sm:rounded-[2rem] sm:p-5 ${className}`}
        >
            <div className="pointer-events-none mb-3 h-px w-full bg-[linear-gradient(90deg,rgba(81,161,69,0.22),rgba(81,161,69,0.08),transparent)] sm:mb-4" />
            <div className="mb-3 flex items-start gap-2.5 sm:mb-4 sm:gap-3">
                {icon && (
                    <div className="dlp-calc-panel--subtle flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[1.1rem] text-[#2D6A4F] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-2xl">
                        {React.cloneElement(icon as React.ReactElement, { size: 16, strokeWidth: 2.5 })}
                    </div>
                )}
                <div className="min-w-0 pt-0.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f8a77]">
                        Calculator Section
                    </p>
                    <h3 className="mt-1 text-[1.05rem] font-bold font-heading leading-tight text-slate-900 dark:text-slate-50 sm:text-[1.15rem]">
                        {title}
                    </h3>
                    {description && (
                        <p className="mt-1 max-w-2xl text-[12px] leading-relaxed text-slate-600 dark:text-slate-300 sm:mt-1.5 sm:text-[13px]">
                            {description}
                        </p>
                    )}
                </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
                {children}
            </div>
        </section>
    );
};

export default AccordionSection;

