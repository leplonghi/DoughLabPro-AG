
import React, { ReactNode } from 'react';
import AppPageLayout, { AppPageHeaderConfig } from '@/components/ui/AppPageLayout';
import { Page } from '@/types';

interface MyLabLayoutProps {
  children: ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
  pageHeader?: Omit<AppPageHeaderConfig, 'page'> | false;
  className?: string;
}

const MyLabLayout: React.FC<MyLabLayoutProps> = ({ children, activePage, pageHeader, className = '' }) => {
  const resolvedHeader = pageHeader === false ? false : { page: activePage, ...(pageHeader ?? {}) };

  return (
    <AppPageLayout width="wide" density="default" pageHeader={resolvedHeader} className={className}>
      <div className="min-h-[500px]">{children}</div>
    </AppPageLayout>
  );
};

export default MyLabLayout;
