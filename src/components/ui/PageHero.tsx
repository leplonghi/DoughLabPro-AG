import React from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    badges?: React.ReactNode;
    backgroundClass?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, badges, backgroundClass = "bg-gradient-to-br from-dlp-accent to-dlp-accent-hover" }) => {
    return (
        <div className={`relative rounded-3xl p-8 md:p-12 shadow-dlp-lg mb-8 overflow-hidden ${backgroundClass}`}>
            <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        {badges && <div className="mb-4">{badges}</div>}
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-lg text-white/90 font-medium max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
