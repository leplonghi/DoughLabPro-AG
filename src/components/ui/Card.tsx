import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`bg-dlp-bg-card border border-dlp-border rounded-xl shadow-dlp-sm ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
