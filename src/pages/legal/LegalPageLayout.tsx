import React from 'react';
import { useTranslation } from '@/i18n';
import { LEGAL_COMPANY_NAME } from './legalConfig';
import AppPageLayout from '@/components/ui/AppPageLayout';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, children }) => {
  const { t } = useTranslation();
  return (
    <AppPageLayout width="content" density="default" showAffiliateDisclaimer={false}>
      <div className="animate-fade-in space-y-6 pb-10">
        <AppShellHeader
          eyebrow={t('general.legal', { defaultValue: 'Legal' })}
          title={title}
          description={t('general.legal_intro', { defaultValue: 'Clear, readable terms and policies for how DoughLabPro works and what you can expect.' })}
          variant="editorial"
          size="micro"
        >
          {lastUpdated ? (
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {t('general.last_updated', { defaultValue: 'Last updated' })}: {lastUpdated}
            </div>
          ) : null}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            &larr; {t('common.back', { defaultValue: 'Back' })}
          </button>
        </AppShellHeader>

        <AppSurface className="p-6 sm:p-10">
          <div className="prose max-w-none text-dlp-text-secondary prose-a:text-dlp-accent prose-headings:text-dlp-text-primary">
            {children}
          </div>
        </AppSurface>

        <div className="mt-6 border-t border-dlp-border/70 pt-6">
          <p className="text-center text-xs text-dlp-text-muted">
            &copy; {new Date().getFullYear()} {LEGAL_COMPANY_NAME}. {t('general.all_rights_reserved', { defaultValue: 'All rights reserved.' })}
          </p>
        </div>
      </div>
    </AppPageLayout>
  );
};

export default LegalPageLayout;
