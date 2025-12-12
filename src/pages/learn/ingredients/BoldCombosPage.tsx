
import React from 'react';
import TechnicalPageLayout from '../TechnicalPageLayout';
import { BeakerIcon, SparklesIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from '../LearnComponents';
import { useTranslation } from '@/i18n';

const Section: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="mt-8 first:mt-0">
    <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-3">
      {icon}
      {title}
    </h3>
    <div className="prose-sm max-w-none text-slate-700 leading-relaxed">
      {children}
    </div>
  </div>
);

const IngredientDetail: React.FC<{ title: string; combos: string[]; sensory: { [key: string]: string }; analysis: string }> = ({ title, combos, sensory, analysis }) => (
  <div className="mt-6 rounded-lg bg-slate-50 p-4 ">
    <h4 className="text-lg font-bold text-slate-800 ">{title}</h4>
    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h5 className="font-semibold mb-1">{t('learn.bold_combos')}</h5>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 ">
          {combos.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
        <h5 className="font-semibold mt-3 mb-1">{t('learn.technical_analysis')}</h5>
        <p className="text-sm text-slate-600 ">{analysis}</p>
      </div>
      <div>
        <h5 className="font-semibold mb-1">{t('learn.sensory_profile')}</h5>
        <dl className="text-sm space-y-1">
          {Object.entries(sensory).map(([key, value]) => (
            <div key={key}>
              <dt className="font-medium text-slate-500 ">{key}:</dt>
              <dd className="text-slate-700 ">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

const BoldCombosPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout
      title="Bold Combinations (Validated)"
      subtitle={t('learn.exploring_flavor_frontiers_in_modern_pizza_based_o')}
      showReferencesSection
    >
      <LearnSection title={t('learn.introduction_innovating_on_tradition')}>
        <p>
          Bold combos in contemporary pizza aren't random. They follow same balance principles as classics but apply unexpected ingredients for new contrasts. Renowned places like Pizzarium (Rome) or Roberta's (NY) are flavor labs popularizing challenging pairings.
        </p>
      </LearnSection>

      <LearnSection title={t('learn.ingredients_and_pairings')} icon={<SparklesIcon className="h-5 w-5" />}>
        <IngredientDetail
          title={t('learn.pepperoni')}
          combos={[t('learn.honey'), t('learn.pickled_jalapeño')]}
          sensory={{ t('learn.aromatics'): t('learn.spicy_smoky'), t('learn.intensity'): t('learn.high'), t('learn.texture'): t('learn.firm_crisp'), t('learn.moisture_risk'): "Low (oil release)" }}
          analysis="Pairing with honey (e.g., Roberta's) creates highly addictive 'sweet & heat' contrast."
        />
        <IngredientDetail
          title={t('learn.gorgonzola')}
          combos={[t('learn.honey_2'), t('learn.walnuts'), t('learn.pear')]}
          sensory={{ t('learn.aromatics'): t('learn.pungent_complex'), t('learn.intensity'): t('learn.high_2'), t('learn.texture'): t('learn.creamy'), t('learn.moisture_risk'): t('learn.low') }}
          analysis="Sweet-salty contrast is key. Intense blue cheese balanced by honey/pear sweetness is classic Italian pairing."
        />
        <IngredientDetail
          title={t('learn.zucchini')}
          combos={[t('learn.ricotta'), t('learn.lemon_zest'), t('learn.mint')]}
          sensory={{ t('learn.aromatics'): t('learn.mild_vegetal'), t('learn.intensity'): t('learn.low_2'), t('learn.texture'): t('learn.soft'), t('learn.moisture_risk'): t('learn.very_high') }}
          analysis="Light fresh combo. Ricotta offers creamy base, lemon zest (added end) brightens mild zucchini flavor."
        />
        <IngredientDetail
          title={t('learn.prosciutto_crudo')}
          combos={[t('learn.fig'), t('learn.goat_cheese'), ]}
          sensory={{ t('learn.aromatics'): t('learn.salty_cured'), t('learn.intensity'): t('learn.high_3'), t('learn.texture'): t('learn.thin_silky'), t('learn.moisture_risk'): t('learn.low_3') }}
          analysis="Fig combo is Californian/Italian modern classic. Concentrated fig sweetness cuts ham saltiness."
        />
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default BoldCombosPage;
