import React from 'react';
import { useTranslation } from '@/i18n';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, children }) => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 border-b border-dlp-border pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-dlp-text-primary sm:text-4xl">{title}</h1>
        {lastUpdated && (
          <p className="mt-2 text-sm text-dlp-text-muted">Last updated: {lastUpdated}</p>
        )}
      </div>

      <div className="prose max-w-none text-dlp-text-secondary prose-a:text-dlp-accent prose-headings:text-dlp-text-primary">
        {children}
      </div>

      <div className="mt-12 border-t border-dlp-border pt-6">
        <p className="text-xs text-dlp-text-muted text-center">
          &copy; {new Date().getFullYear()} DoughLabPro. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LegalPageLayout;
