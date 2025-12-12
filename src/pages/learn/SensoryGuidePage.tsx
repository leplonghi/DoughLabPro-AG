
import React from 'react';
import IngredientPageLayout from './ingredients/IngredientPageLayout';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

const SensoryGuidePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IngredientPageLayout
      title={t('learn.sensory_guide')}
      description="Learn to balance sweet, salty, sour, bitter, and umami in your creations."
      category={t('learn.ingredient_technique')}
    >
      <p className="text-slate-700 ">This page has been moved. Content is now at /learn/sensory-profiles.</p>
    </IngredientPageLayout>
  );
};

export default SensoryGuidePage;
