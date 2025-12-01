import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    badges?: React.ReactNode;
    backgroundClass?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, badges, backgroundClass = "bg-slate-900" }) => {
    return (
        <div className={`relative rounded-3xl p-8 md:p-12 shadow-xl mb-8 overflow-hidden ${backgroundClass}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
                {badges && <div className="flex flex-wrap gap-2 mb-4">{badges}</div>}
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg text-slate-200 leading-relaxed font-light">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};
