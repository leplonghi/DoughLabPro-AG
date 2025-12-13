
import React from 'react';
import TechnicalPageLayout from '../TechnicalPageLayout';
import { BeakerIcon, BookOpenIcon } from '@/components/ui/Icons';
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

const IngredientDetail: React.FC<{ title: string; combos: string[]; sensory: { [key: string]: string }; analysis: string }> = ({ title, combos, sensory, analysis }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-6 rounded-lg bg-slate-50 p-4 ">
      <h4 className="text-lg font-bold text-slate-800 ">{title}</h4>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold mb-1">{t('learn.classic_combos')}</h5>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 ">
            {combos.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
          <h5 className="font-semibold mt-3 mb-1">{t('learn.technical_analysis_2')}</h5>
          <p className="text-sm text-slate-600 ">{analysis}</p>
        </div>
        <div>
          <h5 className="font-semibold mb-1">{t('learn.sensory_profile_2')}</h5>
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
};

const ClassicCombosPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout
      title={t('learn.classic_combinations')}
      subtitle={t('learn.science_and_tradition_behind_combos_that_defined_p')}
      showReferencesSection
    >
      <LearnSection title={t('learn.introduction_the_art_of_flavor_pairing')}>
        <p>
          Successful pizza combinations aren't accidents but exercises in chemical and sensory balance. Best combos, validated over decades, rely on fundamental flavor pairing principles:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.balance')}</strong> Complementary flavors, like tomato acidity cutting cheese fat.</li>
          <li><strong>{t('learn.contrast')}</strong> Interaction of opposites creating complexity.</li>
          <li><strong>{t('learn.aromatic_synergy')}</strong> Combination creating flavor more intense than sum of parts (umami amplification).</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.ingredients_and_pairings_2')} icon={<BookOpenIcon className="h-5 w-5" />}>
        <IngredientDetail
          title={t('learn.tomato')}
          combos={[t('learn.mozzarella'), t('learn.basil'), t('learn.garlic'), t('learn.olive_oil_2'), t('learn.oregano')]}
          sensory={{ [t('learn.aromatics')]: t('learn.fresh_fruity_acidic'), [t('learn.intensity')]: t('learn.medium'), [t('learn.texture')]: t('learn.smooth_liquid'), [t('learn.moisture_risk')]: t('learn.high_4') }}
          analysis="Pizza heart. Tomato acidity (citric/malic acids) essential to balance richness of cheese/meat."
        />
        <IngredientDetail
          title={t('learn.mozzarella')}
          combos={[t('learn.tomato'), t('learn.pepperoni'), t('learn.basil_2'), t('learn.provolone'), t('learn.mushroom')]}
          sensory={{ [t('learn.aromatics')]: t('learn.lactic_mild'), [t('learn.intensity')]: t('learn.low_4'), [t('learn.texture')]: t('learn.soft_elastic'), [t('learn.moisture_risk')]: t('learn.medium_to_high') }}
          analysis="Neutral textured base. Mild flavor doesn't compete, elastic melt provides expected texture."
        />
        <IngredientDetail
          title={t('learn.mushrooms')}
          combos={[t('learn.mozzarella_2'), t('learn.garlic_2'), t('learn.olive_oil_3'), t('learn.fresh_herbs')]}
          sensory={{ [t('learn.aromatics')]: t('learn.earthy_umami'), [t('learn.intensity')]: t('learn.medium_2'), [t('learn.texture')]: t('learn.soft_meaty'), [t('learn.moisture_risk')]: "Very High (if raw)" }}
          analysis="Rich in glutamates, adding umami depth. Must be pre-cooked to eliminate excess water."
        />
        <IngredientDetail
          title={t('learn.onion')}
          combos={[t('learn.sausage'), t('learn.bacon'), t('learn.mozzarella_3'), t('learn.peppers')]}
          sensory={{ [t('learn.aromatics')]: "Pungent (raw), sweet (cooked)", [t('learn.intensity')]: "Medium/High", [t('learn.texture')]: "Crisp (raw), soft (cooked)", [t('learn.moisture_risk')]: t('learn.medium_3') }}
          analysis="Sweetness of caramelized onion is perfect counterpoint to fat/salt of cured meats."
        />
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default ClassicCombosPage;
