import React from 'react';
import TechnicalPageLayout from './learn/TechnicalPageLayout';
import { SparklesIcon } from '@/components/ui/Icons';
import { LockFeature } from '@/components/auth/LockFeature';
import { useDoughbot } from '@/hooks/useDoughbot';
import { DoughbotResults } from '@/components/tools/doughbot/DoughbotResults';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useCalculator } from '@/contexts/CalculatorContext';
import { DoughbotResultsPlaceholder } from '@/components/tools/doughbot/DoughbotResultsPlaceholder';
import { useUser } from '@/contexts/UserProvider';
import { LockClosedIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

const DoughbotPage: React.FC = () => {
  const { t } = useTranslation(['doughbot', 'common']);
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
  const { hasProAccess, openPaywall } = useUser();
  const [showFomo, setShowFomo] = React.useState(false);
  const [isFomoLoading, setIsFomoLoading] = React.useState(false);

  const commonProblems = [
    { value: '', label: t('doughbot.common_problems.placeholder') },
    { value: 'sticky', label: t('doughbot.common_problems.sticky') },
    { value: 'tearing', label: t('doughbot.common_problems.tearing') },
    { value: 'no_rise', label: t('doughbot.common_problems.no_rise') },
    { value: 'dense', label: t('doughbot.common_problems.dense') },
    { value: 'gummy', label: t('doughbot.common_problems.gummy') },
    { value: 'shrinking', label: t('doughbot.common_problems.shrinking') },
    { value: 'flat', label: t('doughbot.common_problems.flat') },
    { value: 'pale', label: t('doughbot.common_problems.pale') },
    { value: 'burnt', label: t('doughbot.common_problems.burnt') },
  ];

  const handleDiagnose = () => {
    if (!description && !problem) return;

    if (!hasProAccess) {
      setIsFomoLoading(true);
      setTimeout(() => {
        setIsFomoLoading(false);
        setShowFomo(true);
      }, 2000);
      return;
    }

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

  const handleReset = () => {
    reset();
    setShowFomo(false);
  };

  return (
    <TechnicalPageLayout
      title={t('general.doughbot')}
      subtitle={t('ui.aipowered_diagnostic_engine_analyze_your_dough_fau')}
      showReferencesSection
    >
      <div className="space-y-8 animate-fade-in relative min-h-[600px]">

        {/* Input Section */}
        <div className={`transition-all duration-500 ${result || showFomo ? 'opacity-50 pointer-events-none blur-[2px]' : ''}`}>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm">1</span>{t('common.describe_your_problem')}</h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="problem-select" className="block text-sm font-bold text-slate-700 mb-2">
                  {t('doughbot.common_issue_label')}
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
                <label htmlFor="problem-description" className="block text-sm font-bold text-slate-700 mb-2">{t('common.detailed_description')}</label>
                <textarea
                  id="problem-description"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-xl border-slate-300 bg-white py-3 px-4 shadow-sm focus:border-lime-500 focus:outline-none focus:ring-lime-500 sm:text-sm text-slate-900 placeholder:text-slate-400"
                  placeholder={t('doughbot.description_placeholder')}
                />
                <p className="mt-2 text-xs text-slate-500">
                  {t('doughbot.tips_hint')}
                </p>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">
                  {error}
                </div>
              )}

              <button
                onClick={handleDiagnose}
                disabled={isLoading || isFomoLoading}
                className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-lime-600 to-lime-500 py-4 px-6 text-base font-bold text-white shadow-lg shadow-lime-500/30 hover:shadow-xl hover:from-lime-500 hover:to-lime-400 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:pointer-events-none"
              >
                {isLoading || isFomoLoading ? (
                  <LoadingSpinner className="w-5 h-5 text-white" />
                ) : (
                  <>
                    <SparklesIcon className="h-5 w-5 animate-pulse" />{t('common.diagnose_problem')}</>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div id="results-container">
          {(isLoading || isFomoLoading) && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-3xl">
              <LoadingSpinner size="lg" />
              <p className="mt-4 text-lime-700 font-medium animate-pulse">{t('ui.running_diagnosis')}</p>
            </div>
          )}

          {showFomo ? (
            <div className="relative z-20 mt-8 rounded-2xl bg-white p-8 shadow-xl border border-lime-200 animate-scale-in">
              <div className="flex justify-end mb-4">
                <button onClick={handleReset} className="text-sm font-medium text-slate-500 hover:text-slate-800 underline">{t('common.try_again')}</button>
              </div>

              <div className="text-center max-w-lg mx-auto space-y-6">
                <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-10 h-10 text-lime-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-800 mb-2">{t('ui.diagnosis_complete')}</h3>
                  <p className="text-slate-600 text-lg" dangerouslySetInnerHTML={{ __html: t('doughbot.analysis_result', { count: 3 }) }} />
                </div>

                <div className="bg-slate-50 rounded-xl p-2 border border-slate-200 text-left space-y-3 opacity-60 blur-[1px] select-none pointer-events-none overflow-hidden h-64 relative">
                  <img
                    src="/images/marketing/doughbot-pro.png"
                    alt={t('general.doughbot_pro_diagnosis')}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-white/20"></div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white shadow-lg transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <LockClosedIcon className="w-6 h-6 text-lime-400" />
                    <span className="font-bold text-lg">{t('general.unlock_full_solution')}</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-6">
                    {t('doughbot.upgrade_hint')}
                  </p>
                  <button
                    onClick={() => openPaywall('doughbot')}
                    className="w-full py-3 bg-lime-500 hover:bg-lime-400 text-slate-900 font-bold rounded-lg transition-colors shadow-lg shadow-lime-500/25"
                  >
                    {t('doughbot.upgrade_cta')}
                  </button>
                </div>
              </div>
            </div>
          ) : result ? (
            <div className="relative z-20 mt-8">
              <div className="flex justify-end mb-4">
                <button onClick={handleReset} className="text-sm font-medium text-slate-500 hover:text-slate-800 underline">{t('common.start_new_diagnosis')}</button>
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
    </TechnicalPageLayout>
  );
};

export default DoughbotPage;
