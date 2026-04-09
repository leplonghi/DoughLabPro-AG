import React from 'react';
import AppSurface from '@/components/ui/AppSurface';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
    return (
        <AppSurface
            surface="glass"
            tone="neutral"
            density="compact"
            className={['rounded-[1.2rem]', className].filter(Boolean).join(' ')}
            {...props}
        >
            {children}
        </AppSurface>
    );
};
