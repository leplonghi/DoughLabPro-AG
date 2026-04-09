import React from 'react';
import AppSurface from '@/components/ui/AppSurface';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    badges?: React.ReactNode;
    action?: React.ReactNode;
    eyebrow?: string;
    tone?: 'brand' | 'neutral' | 'info' | 'success' | 'warning' | 'danger';
}

export const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    badges,
    action,
    eyebrow = 'Overview',
    tone = 'brand',
}) => {
    return (
        <AppSurface tone={tone} surface="glass" density="compact" className="mb-4 rounded-[1.2rem]">
            <div className="relative">
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-dlp-text-muted">{eyebrow}</p>
                        {badges ? <div className="mt-2 flex flex-wrap items-center gap-2">{badges}</div> : null}
                        <h1 className="mt-2 text-[1.55rem] font-black leading-[1] tracking-[-0.045em] text-dlp-text-primary sm:text-[1.9rem]">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="mt-2 max-w-2xl text-sm leading-6 text-dlp-text-secondary sm:text-[15px]">
                                {subtitle}
                            </p>
                        )}
                    </div>
                    {action ? <div className="shrink-0">{action}</div> : null}
                </div>
            </div>
        </AppSurface>
    );
};
