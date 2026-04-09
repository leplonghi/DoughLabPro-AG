

import React, { ReactNode } from 'react';
import { BeakerIcon, BookOpenIcon, ChartBarIcon, ListBulletIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';

type LevainDetailTab = 'summary' | 'feedings' | 'profile' | 'insights';

interface LevainLayoutProps {
  children: ReactNode;
  levainName: string;
  activeTab: LevainDetailTab;
  onTabChange: (tab: LevainDetailTab) => void;
}

const LevainLayout: React.FC<LevainLayoutProps> = ({ children, levainName, activeTab, onTabChange }) => {
  const { t } = useTranslation();
  const navItems: { id: LevainDetailTab; label: string; icon: React.ReactNode }[] = [
    { id: 'summary', label: 'Summary', icon: <BeakerIcon className="h-5 w-5" /> },
    { id: 'feedings', label: 'Feedings', icon: <ListBulletIcon className="h-5 w-5" /> },
    { id: 'profile', label: 'Profile', icon: <BookOpenIcon className="h-5 w-5" /> },
    { id: 'insights', label: 'Insights', icon: <ChartBarIcon className="h-5 w-5" /> },
  ];

  return (
    <div className="mx-auto max-w-4xl animate-fade-in">
      <AppShellHeader
        eyebrow="Lab Detail"
        title={levainName}
        description="Review health, feeding rhythm, and behavior for this starter without leaving the lab context."
      >
        <a
          href="#/mylab/levain"
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
        >
          &larr; Back to Levain
        </a>
      </AppShellHeader>

      {/* Tabs Navigation */}
      <div className="mb-6">
        <AppSurface className="border border-white/80 px-3 py-3 sm:px-5 sm:py-2">
          <nav className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4" aria-label={t('mylab.tabs')}>
            {navItems.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                aria-pressed={activeTab === item.id}
                className={`flex items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-center text-sm font-bold transition-all sm:justify-start sm:rounded-none sm:border-x-0 sm:border-t-0 sm:px-1 sm:py-3 ${activeTab === item.id
                    ? 'border-dlp-brand bg-emerald-50/90 text-dlp-brand-hover sm:bg-transparent'
                    : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 sm:hover:bg-transparent'
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </AppSurface>
      </div>

      <main>
        {children}
      </main>
    </div>
  );
};

export default LevainLayout;

