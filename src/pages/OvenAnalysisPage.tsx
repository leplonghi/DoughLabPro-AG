import React from 'react';
import TechnicalPageLayout from './learn/TechnicalPageLayout';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import { useOvenProfiler } from '@/hooks/useOvenProfiler';
import { OvenProfilerForm } from '@/components/tools/ovenProfiler/OvenProfilerForm';
import { OvenProfilerResults } from '@/components/tools/ovenProfiler/OvenProfilerResults';

export const OvenAnalysisPage: React.FC = () => {
  const { profile, errors, analysis, updateProfile, analyze } = useOvenProfiler();

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
      title="Oven Profiler"
      subtitle="Analyze your equipment to get tailored baking strategies, hydration limits, and rack positioning advice."
      showReferencesSection
    >
      <ProFeatureLock featureKey="tools.oven_analysis" customMessage="Unlock advanced oven analysis and baking strategies with Lab Pro.">
        <div className="space-y-8 animate-fade-in">
          <OvenProfilerForm
            profile={profile}
            errors={errors}
            onChange={updateProfile}
            onAnalyze={handleAnalyze}
          />

          {analysis && (
            <OvenProfilerResults analysis={analysis} />
          )}
        </div>
      </ProFeatureLock>
    </TechnicalPageLayout>
  );
};

export default OvenAnalysisPage;
