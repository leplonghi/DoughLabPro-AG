import React from 'react';
import { AffiliateDisclaimer } from './AffiliateDisclaimer';
import { useTranslation } from '@/i18n';

interface LibraryPageLayoutProps {
    children: React.ReactNode;
}

export const LibraryPageLayout: React.FC<LibraryPageLayoutProps> = ({ children }) => {
  const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-[var(--dlp-bg-soft)] text-[var(--dlp-text-primary)] font-sans flex flex-col">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
                {children}
            </main>
            <AffiliateDisclaimer className="bg-transparent mb-6 border-t border-slate-200/50" />
        </div>
    );
};
