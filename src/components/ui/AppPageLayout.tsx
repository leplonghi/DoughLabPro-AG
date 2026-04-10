import React from 'react';
import { getPageMeta } from '@/app/appShell';
import { Page } from '@/types';
import { AffiliateDisclaimer } from './AffiliateDisclaimer';
import AppShellHeader from './AppShellHeader';

export interface AppPageHeaderConfig {
  page?: Page;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  size?: 'default' | 'compact' | 'micro';
  variant?: 'workspace' | 'editorial';
  hidden?: boolean;
}

interface AppPageLayoutProps {
  children: React.ReactNode;
  className?: string;
  width?: 'content' | 'wide';
  density?: 'compact' | 'default';
  showAffiliateDisclaimer?: boolean;
  pageHeader?: AppPageHeaderConfig | false;
}

const widthClasses: Record<NonNullable<AppPageLayoutProps['width']>, string> = {
  content: 'max-w-6xl',
  wide: 'max-w-[96rem]',
};

const densityClasses: Record<NonNullable<AppPageLayoutProps['density']>, string> = {
  compact: '[--app-page-gutter:0.75rem] px-[var(--app-page-gutter)] py-3 sm:[--app-page-gutter:1rem] sm:px-[var(--app-page-gutter)] sm:py-4 lg:[--app-page-gutter:1.5rem] lg:px-[var(--app-page-gutter)] xl:[--app-page-gutter:2rem]',
  default: '[--app-page-gutter:0.75rem] px-[var(--app-page-gutter)] py-4 sm:[--app-page-gutter:1rem] sm:px-[var(--app-page-gutter)] sm:py-5 lg:[--app-page-gutter:1.5rem] lg:px-[var(--app-page-gutter)] xl:[--app-page-gutter:2rem]',
};

export const AppPageLayout: React.FC<AppPageLayoutProps> = ({
  children,
  className = '',
  width = 'wide',
  density = 'compact',
  showAffiliateDisclaimer = true,
  pageHeader = false,
}) => {
  const headerConfig: AppPageHeaderConfig | null =
    pageHeader && typeof pageHeader === 'object' ? pageHeader : null;
  const resolvedMeta = headerConfig?.page ? getPageMeta(headerConfig.page) : null;
  const shouldRenderHeader = Boolean(
    headerConfig &&
    !headerConfig.hidden &&
    (headerConfig.page || headerConfig.title || headerConfig.description || headerConfig.eyebrow) &&
    (!resolvedMeta || resolvedMeta.showHeader !== false),
  );

  const headerEyebrow = headerConfig?.eyebrow ?? resolvedMeta?.eyebrow ?? '';
  const headerTitle = headerConfig?.title ?? resolvedMeta?.title ?? '';
  const headerDescription = headerConfig?.description ?? resolvedMeta?.description ?? '';

  return (
    <div className="min-h-screen bg-[var(--dlp-bg-soft)] text-[var(--dlp-text-primary)]">
      <main
        className={[
          'mx-auto w-full',
          widthClasses[width],
          densityClasses[density],
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="space-y-4 sm:space-y-5">
          {shouldRenderHeader ? (
            <AppShellHeader
              eyebrow={headerEyebrow}
              title={headerTitle}
              description={headerDescription}
              size={headerConfig?.size ?? 'micro'}
              variant={headerConfig?.variant ?? 'workspace'}
            >
              {headerConfig?.children}
            </AppShellHeader>
          ) : null}
          {children}
        </div>
      </main>
      {showAffiliateDisclaimer ? (
        <AffiliateDisclaimer className="mb-6 border-t border-dlp-border/60 bg-transparent" />
      ) : null}
    </div>
  );
};

export default AppPageLayout;
