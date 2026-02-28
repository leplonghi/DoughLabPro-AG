
import React from 'react';
import IngredientPageLayout from '@/components/layouts/IngredientPageLayout';
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
      <p className="text-slate-700 ">{t('learn:this_page_has_been_moved_content_is_now_at_learn_sensory_pro')}</p>
    </IngredientPageLayout>
  );
};

export default SensoryGuidePage;
