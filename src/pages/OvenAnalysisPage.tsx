import React from 'react';
import TechnicalPageLayout from './learn/TechnicalPageLayout';
import { LockFeature } from '@/components/auth/LockFeature';
import { useOvenProfiler } from '@/hooks/useOvenProfiler';
import { OvenProfilerForm } from '@/components/tools/ovenProfiler/OvenProfilerForm';
import { OvenProfilerResults } from '@/components/tools/ovenProfiler/OvenProfilerResults';
import { useTranslation } from '@/i18n';
import { useRouter } from '@/contexts/RouterContext';

export const OvenAnalysisPage: React.FC = () => {
  const { t } = useTranslation();
  const { routeParams } = useRouter();
  const ovenId = routeParams || undefined;
  const { profile, errors, analysis, updateProfile, analyze } = useOvenProfiler(ovenId);

  const handleAnalyze = () => {
    if (analyze()) {
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('analysis-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <TechnicalPageLayout
      title={t('general.oven_profiler_2')}
      subtitle="Analyze your equipment to get tailored baking strategies, hydration limits, and rack positioning advice."
      showReferencesSection
    >
      <LockFeature featureKey="tools.oven_analysis" customMessage="Unlock advanced oven analysis and baking strategies with Lab Pro.">
        <div className="space-y-8 animate-fade-in">
          <OvenProfilerForm
            profile={profile}
            errors={errors}
            onChange={updateProfile}
            onAnalyze={handleAnalyze}
          />

          {analysis && (
            <OvenProfilerResults analysis={analysis} profile={profile} />
          )}
        </div>
      </LockFeature>
    </TechnicalPageLayout>
  );
};

export default OvenAnalysisPage;
