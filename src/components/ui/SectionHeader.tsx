import React from 'react';

interface SectionHeaderProps {
    title: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
    description?: string;
    eyebrow?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon, action, description, eyebrow }) => {
    return (
        <div className="mb-4 flex flex-col gap-2 border-b border-dlp-border/70 pb-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
                {eyebrow ? <p className="text-[10px] font-black uppercase tracking-[0.18em] text-dlp-text-muted">{eyebrow}</p> : null}
                <h2 className="flex items-center gap-2 text-lg font-black tracking-tight text-dlp-text-primary">
                    {icon}
                    {title}
                </h2>
                {description ? <p className="mt-1 text-sm leading-6 text-dlp-text-secondary">{description}</p> : null}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
        </div>
    );
};
