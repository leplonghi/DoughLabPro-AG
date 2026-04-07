

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
        <AppSurface className="border border-white/80 px-5 py-2">
          <nav className="-mb-px flex space-x-6 overflow-x-auto no-scrollbar" aria-label={t('mylab.tabs')}>
            {navItems.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => onTabChange(item.id)}
                aria-pressed={activeTab === item.id}
                className={`whitespace-nowrap flex items-center gap-2 py-3 px-1 border-b-2 font-bold text-sm transition-all ${activeTab === item.id
                    ? 'border-dlp-brand text-dlp-brand-hover '
                    : 'border-transparent text-slate-500 hover:text-slate-700  hover:border-slate-300'
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

