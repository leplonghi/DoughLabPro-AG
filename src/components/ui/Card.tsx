import React from 'react';
import { useTranslation } from '@/i18n';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  const { t } = useTranslation();
    return (
        <div
            className={`bg-dlp-bg-card border border-dlp-border rounded-xl shadow-dlp-sm ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
