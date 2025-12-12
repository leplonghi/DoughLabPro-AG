import React from 'react';
import { useTranslation } from '@/i18n';

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
  const { t } = useTranslation();
    return (
        <div className={`rounded-xl border border-dlp-border bg-dlp-bg-card p-5 shadow-dlp-sm transition-all hover:shadow-dlp-md ${className}`}>
            <div className="mb-4 flex items-start gap-4">
                {icon && (
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-dlp-bg-muted text-dlp-accent">
                        {icon}
                    </div>
                )}
                <div>
                    <h3 className="text-lg font-bold text-dlp-text-primary">{title}</h3>
                    {description && (
                        <p className="text-sm text-dlp-text-secondary">{description}</p>
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
