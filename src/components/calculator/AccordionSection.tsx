import React, { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/Icons';

interface AccordionSectionProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
    title,
    description,
    icon,
    children,
    defaultOpen = true,
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-lime-50 text-lime-600 border border-lime-100">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                        {description && (
                            <p className="text-sm text-slate-500">{description}</p>
                        )}
                    </div>
                </div>
                <ChevronDownIcon
                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
            >
                {children}
            </div>
        </div>
    );
};

export default AccordionSection;
