import React from 'react';
import TechnicalPageLayout from './learn/TechnicalPageLayout';
import { SparklesIcon } from '@/components/ui/Icons';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import { useDoughbot } from '@/hooks/useDoughbot';
import { DoughbotResultsPlaceholder } from '@/components/tools/doughbot/DoughbotResultsPlaceholder';

const DoughbotPage: React.FC = () => {
  const {
    problem,
    setProblem,
    description,
    setDescription,
    diagnose
  } = useDoughbot();

  const commonProblems = [
    { value: '', label: 'Select a common problem...' },
    { value: 'sticky', label: 'Dough too sticky / wet' },
    { value: 'tearing', label: 'Dough tears when stretching' },
    { value: 'no_rise', label: 'Dough did not rise' },
    { value: 'dense', label: 'Dense crumb / no air bubbles' },
    { value: 'gummy', label: 'Under-cooked base / "gum line"' },
    { value: 'shrinking', label: 'Dough snaps back / shrinks' },
  ];

  return (
    <TechnicalPageLayout
      title="Doughbot"
      subtitle="Analyze your dough, understand what to adjust."
      showReferencesSection
    >
      <ProFeatureLock featureKey="tools.doughbot" customMessage="Unlock AI-powered dough diagnostics with Lab Pro.">
        <div className="space-y-8 animate-fade-in">
          {/* Input Section */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              1. Describe your problem
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="problem-select" className="block text-sm font-medium text-slate-700">
                  Common Issue (optional)
                </label>
                <select
                  id="problem-select"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="mt-1 block w-full rounded-xl border-slate-300 bg-white py-3 px-4 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-slate-700"
                >
                  {commonProblems.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="problem-description" className="block text-sm font-medium text-slate-700">
                  Detailed Description
                </label>
                <textarea
                  id="problem-description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full rounded-xl border-slate-300 bg-white py-3 px-4 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-slate-700"
                  placeholder="E.g., My 68% hydration dough sat in the fridge for 24h, but tears easily when I try to open it..."
                />
              </div>
              <button
                onClick={diagnose}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-500 py-3 px-6 text-sm font-bold text-white shadow-lg shadow-lime-500/20 hover:bg-lime-600 hover:shadow-xl hover:scale-105 transition-all active:scale-95"
              >
                <SparklesIcon className="h-5 w-5" />
                Diagnose Problem
              </button>
            </div>
          </div>

          {/* Results Section Placeholder */}
          <DoughbotResultsPlaceholder />
        </div>
      </ProFeatureLock>
    </TechnicalPageLayout>
  );
};

export default DoughbotPage;
