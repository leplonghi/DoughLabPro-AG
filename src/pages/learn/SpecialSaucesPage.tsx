
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

const SpecialSaucesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout
      title={t('learn.special_sauces_pesto_ricotta__others')}
      subtitle={t('learn.behavior_and_risks_of_alternative_pizza_bases')}
    >
      <LearnSection title={t('learn.introduction_expanding_the_palate')}>
        <p>Beyond tomato and white sauces, alternative bases like pesto and ricotta creams offer unique flavor profiles. However, their oven behavior differs and requires technical consideration to avoid texture and flavor issues.</p>
      </LearnSection>
      <LearnSection title={t('learn.pesto_oxidation_and_green_notes')}>
        <p>Pesto is an emulsion of oil, basil, pine nuts, garlic, and cheese. t('learn.green') aromatic notes of basil come from extremely volatile and heat-sensitive compounds. When pesto is exposed to intense oven heat, these compounds degrade and chlorophyll oxidizes, resulting in dark color and bitter "cooked herb" taste. Best way to use pesto on pizza is adding it <strong>post-oven</strong> or in small dollops protected under cheese.</p>
      </LearnSection>
      <LearnSection title={t('learn.creamy_ricotta_moisture_vehicle')}>
        <p>Ricotta is a fresh cheese with high moisture content. When used as a base, it doesn't melt like mozzarella, but its moisture evaporates creating a steam environment that can cook dough underneath instead of baking it. Best way to use ricotta is in small "dollops" on pizza, not as a uniform layer. This allows surrounding dough to bake correctly. Mixing ricotta with a little salt and oil can improve stability and flavor.</p>
      </LearnSection>
      <LearnSection title={t('learn.bechamel_and_other_dairy_bases')}>
        <p>Bechamel, a flour, butter, and milk emulsion, serves as a neutral creamy base. Its structure, stabilized by flour starch, is more heat resistant than simple cream. It browns well (milk protein Maillard reaction) creating rich texture, excellent base for vegetable or smoked meat pizzas.</p>
      </LearnSection>
      <LearnSection title={t('learn.qualitative_risks_of_wet_sauces')}>
        <p>Main risk of using any alternative sauce is excess moisture. Too liquid sauces or those releasing water during cooking are main cause of t('learn.gum_line_448') (dense raw dough layer under topping). Key is always seeking thicker consistency and using sauces strategically, not as a uniform heavy layer insulating dough from heat.</p>
      </LearnSection>
      <LearnSection title={t('learn.technical_references_4')}>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('learn.modernist_pizza_3')}</li>
          <li>t('learn.the_flavor_bible') by Karen Page and Andrew Dornenburg</li>
          <li>{t('learn.serious_eats')}</li>
        </ul>
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default SpecialSaucesPage;
