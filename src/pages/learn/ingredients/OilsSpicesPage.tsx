
import React from 'react';
import IngredientPageLayout from './IngredientPageLayout';
import { BookOpenIcon, SparklesIcon, BeakerIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from '../LearnComponents';
import { useTranslation } from '@/i18n';

const OilsSpicesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IngredientPageLayout
      title={t('learn.herbs__spices')}
      description="Technical analysis of finishers: how herbs and spices modulate aroma and pizza complexity."
      category={t('learn.ingredients_5')}
    >
      <LearnSection title={t('learn.introduction_aroma_chemistry')}>
        <p>
          Herbs and spices are the aromatic signature of a pizza, adding layers of complexity. Their power lies in <strong>volatile organic compounds</strong> — light molecules evaporating with heat perceived by smell. Aromatic profile depends on chemical composition (terpenes, phenols, aldehydes) and ingredient state (fresh vs dry).
        </p>
      </LearnSection>

      <LearnSection title={t('learn.fresh_herbs_vibrancy_and_delicacy')} icon={<SparklesIcon className="h-5 w-5" />}>
        <h4>a) Basil</h4>
        <p>
          Iconic aroma comes from compounds like linalool, extremely heat sensitive. Documented by Italian tradition and AVPN rules, fresh basil should be added <strong>post-oven</strong> to preserve scent.
        </p>

        <h4>b) Arugula</h4>
        <p>
          Bitter and fresh notes used as counterpoint to richness like cured ham. Delicate like basil, added fresh on hot pizza post-oven.
        </p>

        <h4>c) Parsley</h4>
        <p>
          Clean fresh aroma, moderately heat resistant but freshness most pronounced when added at end.
        </p>
      </LearnSection>

      <LearnSection title={t('learn.dried_herbs_concentrated_flavor')} icon={<BeakerIcon className="h-5 w-5" />}>
        <p>
          Drying removes water concentrating aromatics. This alters flavor profile eliminating "green" notes. Advantage is greater heat resistance.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.dried_oregano')}</strong> Rich in phenols like carvacrol, heat resistant, ideal mixed in sauce or sprinkled on cheese before baking (NY style).</li>
          <li><strong>{t('learn.dried_basil')}</strong> Loses freshness completely, assumes clove-like notes. Not a substitute for fresh.</li>
          <li><strong>{t('learn.dried_thyme')}</strong> Main compound thymol is robust/earthy, pairs well with mushrooms/meats.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.classic_spices')}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.red_pepper_flakes')}</strong>{t('learn.heat_comes_from')}<strong>capsaicin</strong>, thermostable molecule keeping potency in oven heat.</li>
          <li><strong>Garlic Powder/Granulated:</strong> Dehydration gives sweeter flavor. Protect from direct heat to avoid burning.</li>
          <li><strong>{t('learn.rosemary')}</strong> Rich in heat resistant terpenes. Leaves used moderately before baking release resinous aroma.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.application_pre_or_postoven')} icon={<BookOpenIcon className="h-5 w-5" />}>
        <p>{t('learn.general_rule_based_on_chemical_stability_of_aromat')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.postoven')}</strong> Fresh delicate herbs (basil, arugula) to preserve aroma.</li>
          <li><strong>{t('learn.preoven')}</strong> Dried herbs (oregano) and resistant spices, as heat helps release concentrated aromas.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.risks_and_care')}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.burning')}</strong> Fresh herbs burn easily in hot ovens tasting bitter. Dried spices burn if exposed directly to intense heat.</li>
          <li><strong>{t('learn.overpowering')}</strong> Herbs/spices complement, shouldn't dominate. Excess masks other pizza flavors.</li>
        </ul>
      </LearnSection>
    </IngredientPageLayout>
  );
};

export default OilsSpicesPage;
