import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`dlp-surface-base dlp-tone-neutral overflow-hidden rounded-2xl ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
