import React from 'react';
import TechnicalPageLayout from './learn/TechnicalPageLayout';
import { SparklesIcon } from '@/components/ui/Icons';
import { LockFeature } from '@/components/auth/LockFeature';
import { useDoughbot } from '@/hooks/useDoughbot';
import { DoughbotResults } from '@/components/tools/doughbot/DoughbotResults';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useCalculator } from '@/contexts/CalculatorContext';
import { DoughbotResultsPlaceholder } from '@/components/tools/doughbot/DoughbotResultsPlaceholder';

const DoughbotPage: React.FC = () => {
  const {
    problem,
    setProblem,
    description,
    setDescription,
    diagnose,
    result,
    isLoading,
    error,
    reset
  } = useDoughbot();

  const { config } = useCalculator();

  const commonProblems = [
    { value: '', label: 'Select a common problem...' },
    { value: 'sticky', label: 'Dough too sticky / wet' },
    { value: 'tearing', label: 'Dough tears when stretching' },
    { value: 'no_rise', label: 'Dough did not rise' },
    { value: 'dense', label: 'Dense crumb / no air bubbles' },
    { value: 'gummy', label: 'Under-cooked base / "gum line"' },
    { value: 'shrinking', label: 'Dough snaps back / shrinks' },
    { value: 'flat', label: 'Dough flattened out (pancake)' },
    { value: 'pale', label: 'Crust is pale / no browning' },
    { value: 'burnt', label: 'Bottom burnt before top is done' },
  ];

  const handleDiagnose = () => {
    // Construct context from current app state
    const context = JSON.stringify({
      calculatorConfig: {
        style: config.recipeStyle,
        hydration: config.hydration,
        salt: config.salt,
        fermentation: config.fermentationTechnique
      }
    });
    diagnose(context);
  };

  return (
    <TechnicalPageLayout
      title="Doughbot"
      subtitle="AI-powered diagnostic engine. Analyze your dough faults and get instant scientific correction."
      showReferencesSection
    >
      <LockFeature featureKey="tools.doughbot" customMessage="Unlock AI-powered dough diagnostics with Lab Pro.">
        <div className="space-y-8 animate-fade-in relative min-h-[600px]">

          {/* Input Section */}
          <div className={`transition-all duration-500 ${result ? 'opacity-50 pointer-events-none blur-[2px]' : ''}`}>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">1</span>
                Describe your problem
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="problem-select" className="block text-sm font-bold text-slate-700 mb-2">
                    Common Issue (optional)
                  </label>
                  <select
                    id="problem-select"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    className="block w-full rounded-xl border-slate-300 bg-white py-3 px-4 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-slate-900"
                  >
                    {commonProblems.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="problem-description" className="block text-sm font-bold text-slate-700 mb-2">
                    Detailed Description
                  </label>
                  <textarea
                    id="problem-description"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full rounded-xl border-slate-300 bg-white py-3 px-4 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-slate-900 placeholder:text-slate-400"
                    placeholder="E.g., My 65% hydration dough sat in the fridge for 24h. When I tried to open the balls, they were super elastic and kept shrinking back..."
                  />
                  <p className="mt-2 text-xs text-slate-500">
                    The more details you provide about temperature, time, and flour, the better the diagnosis.
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleDiagnose}
                  disabled={isLoading}
                  className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-lime-600 to-lime-500 py-4 px-6 text-base font-bold text-white shadow-lg shadow-lime-500/30 hover:shadow-xl hover:from-lime-500 hover:to-lime-400 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:pointer-events-none"
                >
                  {isLoading ? (
                    <LoadingSpinner className="w-5 h-5 text-white" />
                  ) : (
                    <>
                      <SparklesIcon className="h-5 w-5 animate-pulse" />
                      Diagnose Problem
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div id="results-container">
            {isLoading && (
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-3xl">
                <LoadingSpinner size="lg" />
                <p className="mt-4 text-lime-700 font-medium animate-pulse">Running diagnosis...</p>
              </div>
            )}

            {result ? (
              <div className="relative z-20 mt-8">
                <div className="flex justify-end mb-4">
                  <button onClick={reset} className="text-sm font-medium text-slate-500 hover:text-slate-800 underline">
                    Start New Diagnosis
                  </button>
                </div>
                <DoughbotResults result={result} />
              </div>
            ) : (
              <div className="mt-8 opacity-40 grayscale pointer-events-none select-none">
                <DoughbotResultsPlaceholder />
              </div>
            )}
          </div>

        </div>
      </LockFeature>
    </TechnicalPageLayout>
  );
};

export default DoughbotPage;
