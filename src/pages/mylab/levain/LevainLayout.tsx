

import React, { ReactNode } from 'react';
import { BeakerIcon, BookOpenIcon, ChartBarIcon, ListBulletIcon } from '@/components/ui/Icons';

type LevainDetailTab = 'summary' | 'feedings' | 'profile' | 'insights';

interface LevainLayoutProps {
  children: ReactNode;
  levainName: string;
  activeTab: LevainDetailTab;
  onTabChange: (tab: LevainDetailTab) => void;
}

const LevainLayout: React.FC<LevainLayoutProps> = ({ children, levainName, activeTab, onTabChange }) => {
  const navItems: { id: LevainDetailTab; label: string; icon: React.ReactNode }[] = [
    { id: 'summary', label: 'Summary', icon: <BeakerIcon className="h-5 w-5" /> },
    { id: 'feedings', label: 'Feedings', icon: <ListBulletIcon className="h-5 w-5" /> },
    { id: 'profile', label: 'Profile', icon: <BookOpenIcon className="h-5 w-5" /> },
    { id: 'insights', label: 'Insights', icon: <ChartBarIcon className="h-5 w-5" /> },
  ];

  return (
    <div className="mx-auto max-w-4xl animate-fade-in">
      <header className="mb-8">
        <a href="#/mylab/levain" className="text-slate-500  font-medium text-sm hover:text-slate-800 transition-colors inline-flex items-center gap-1">
          &larr; Back to Levain Pet
        </a>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900  mt-2">{levainName}</h1>
      </header>

      {/* Tabs Navigation */}
      <div className="mb-6">
        <div className="border-b border-slate-200 ">
          <nav className="-mb-px flex space-x-6 overflow-x-auto no-scrollbar" aria-label="Tabs">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`whitespace-nowrap flex items-center gap-2 py-3 px-1 border-b-2 font-bold text-sm transition-all ${activeTab === item.id
                    ? 'border-lime-500 text-lime-600 '
                    : 'border-transparent text-slate-500 hover:text-slate-700  hover:border-slate-300'
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <main>
        {children}
      </main>
    </div>
  );
};

export default LevainLayout;
