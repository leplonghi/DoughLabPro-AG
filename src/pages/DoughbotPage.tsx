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

        {/* Input Section */}
        <div className={`transition-all duration-500 ${result || showFomo ? 'hidden' : 'block'}`}>
          <div className="space-y-6">

            {/* 1. Stage Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold ring-1 ring-slate-200">1</span>
                {t('doughbot.when_did_it_happen')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Mixing', 'Bulk Ferment', 'Shaping/Proof', 'Baking'].map((stage) => (
                  <button
                    key={stage}
                    onClick={() => setDescription(prev => prev.includes(`Stage: ${stage}`) ? prev : `Stage: ${stage}. ${prev}`)}
                    className="px-4 py-3 rounded-xl text-sm font-semibold border transition-all hover:scale-[1.02] active:scale-[0.98] border-slate-200 bg-slate-50 text-slate-600 hover:border-dlp-brand hover:text-dlp-brand focus:ring-2 focus:ring-dlp-brand/50 focus:border-dlp-brand"
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Symptom Grid */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold ring-1 ring-slate-200">2</span>
                {t('doughbot.identify_symptom')}
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { val: 'sticky', label: 'Sticky / Wet', desc: 'Impossible to handle', icon: '💧' },
                  { val: 'tearing', label: 'Tearing', desc: 'No gluten structure', icon: '🕸️' },
                  { val: 'no_rise', label: 'Flat / No Rise', desc: 'Yeast inactivity', icon: '📉' },
                  { val: 'dense', label: 'Dense Crumb', desc: 'Heavy, brick-like', icon: '🧱' },
                  { val: 'gummy', label: 'Gummy Interior', desc: 'Undercooked feel', icon: '🧖' },
                  { val: 'pale', label: 'Pale Crust', desc: 'No browning', icon: '👻' },
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setProblem(item.val)}
                    className={`relative p-4 rounded-xl text-left border-2 transition-all duration-200 ${problem === item.val
                        ? 'border-dlp-brand bg-lime-50/50 ring-1 ring-dlp-brand shadow-md transform scale-[1.02]'
                        : 'border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50'
                      }`}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-bold text-slate-800 text-sm">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                    {problem === item.val && (
                      <div className="absolute top-3 right-3 text-dlp-brand">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Description Box */}
              <div>
                <label htmlFor="problem-description" className="block text-sm font-bold text-slate-700 mb-2">
                  {t('common.specific_details')} <span className="text-slate-400 font-normal">({t('ui.optional')})</span>
                </label>
                <div className="relative">
                  <textarea
                    id="problem-description"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="block w-full rounded-xl border-slate-300 bg-slate-50 py-3 px-4 shadow-sm focus:border-dlp-brand focus:outline-none focus:ring-dlp-brand sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:bg-white"
                    placeholder={t('doughbot.description_placeholder_detailed')}
                  />
                  <div className="absolute right-3 bottom-3 text-slate-400">
                    <SparklesIcon className="w-4 h-4 opacity-50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Error & Action */}
            <div className="sticky bottom-4 z-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg ring-1 ring-black/5">
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm border border-red-100 flex items-center gap-2">
                  <span className="text-lg">⚠️</span> {error}
                </div>
              )}

              <button
                onClick={handleDiagnose}
                disabled={!problem && !description || isLoading || isFomoLoading}
                className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 py-4 px-6 text-base font-bold text-white shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:from-black hover:to-slate-900 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-shimmer" />

                {isLoading || isFomoLoading ? (
                  <LoadingSpinner className="w-5 h-5 text-white" />
                ) : (
                  <>
                    <SparklesIcon className="h-5 w-5 text-lime-400 animate-pulse" />
                    <span>{t('ui.analyze_with_dough_intelligence')}</span>
                  </>
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
                  <SparklesIcon className="w-10 h-10 text-dlp-brand-hover" />
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
                    className="w-full py-3 bg-dlp-brand hover:bg-lime-400 text-slate-900 font-bold rounded-lg transition-colors shadow-lg shadow-dlp-brand/25"
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


