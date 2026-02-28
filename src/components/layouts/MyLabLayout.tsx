
import React, { ReactNode } from 'react';
import { Page } from '@/types';
import { useTranslation } from '@/i18n';
import { PlusIcon } from '@heroicons/react/24/solid';

interface MyLabLayoutProps {
  children: ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const MyLabLayout: React.FC<MyLabLayoutProps> = ({ children, onNavigate }) => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[500px] bg-slate-50/50 relative">
      {children}

      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => onNavigate('calculator')}
          className="h-14 w-14 bg-dlp-brand hover:bg-dlp-brand-hover text-white rounded-full shadow-xl shadow-dlp-brand/30 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dlp-brand"
          aria-label={t('mylab.new_bake')}
        >
          <PlusIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default MyLabLayout;
