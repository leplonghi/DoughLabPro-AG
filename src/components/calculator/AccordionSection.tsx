import React from 'react';

interface AccordionSectionProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
    title,
    description,
    icon,
    children,
    className = '',
}) => {
    return (
        <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md ${className}`}>
            <div className="mb-4 flex items-start gap-4">
                {icon && (
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-lime-100 text-lime-600">
                        {icon}
                    </div>
                )}
                <div>
                    <h3 className="text-lg font-bold text-slate-800">{title}</h3>
                    {description && (
                        <p className="text-sm text-slate-500">{description}</p>
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
