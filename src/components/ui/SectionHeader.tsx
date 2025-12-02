import React from 'react';

interface SectionHeaderProps {
    title: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon, action }) => {
    return (
        <div className="flex items-center justify-between mb-6 border-b border-dlp-border pb-2">
            <h2 className="text-xl font-bold text-dlp-text-primary flex items-center gap-2">
                {icon}
                {title}
            </h2>
            {action}
        </div>
    );
};
