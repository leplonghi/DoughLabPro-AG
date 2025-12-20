
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

const TomatoPreservationPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout
      title={t('learn.tomato_science_acidity_sweetness__preservation')}
      subtitle={t('learn.how_tomato_choice_and_preparation_define_the_sauce')}
    >
      <LearnSection title={t('learn.introduction_the_acidic_soul_of_pizza')}>
        <p>Tomato sauce is the heart of many pizzas, providing acidity, moisture, and a fundamental flavor base. The science behind a good sauce lies in the balance between tomato compounds and how they are transformed by processing and heat.</p>
      </LearnSection>
      <LearnSection title={t('learn.qualitative_differences_raw_vs_cooked')}>
        <p>A <strong>raw tomato</strong> sauce (like Neapolitan) preserves volatile and fresh compounds, resulting in a bright, fruity flavor with pronounced acidity. A <strong>cooked</strong> sauce (typical of NY Style) undergoes chemical reactions: water evaporates concentrating sugars and umami, and heat breaks down cell walls releasing more flavor compounds creating deeper, sweeter notes.</p>
      </LearnSection>
      <LearnSection title={t('learn.how_acidity_and_sweetness_influence_perception')}>
        <p>Tomato flavor is a delicate balance between natural sugars (fructose and glucose) and organic acids (citric and malic). <strong>{t('learn.acidity')}</strong> is crucial to cut through cheese fat and highlight other flavors. <strong>{t('learn.sweetness')}</strong> balances this acidity. Cooking tends to decrease acidity perception and increase sweetness as water evaporates.</p>
      </LearnSection>
      <LearnSection title={t('learn.impact_of_oxidation_and_storage')}>
        <p>Contact with oxygen and metals (like in unlined cans) can oxidize tomato compounds, leading to metallic taste and loss of freshness. This is why high-quality canned tomatoes come in protective lined cans and transferring sauce to glass or plastic containers after opening is recommended.</p>
      </LearnSection>
      <LearnSection title={t('learn.fresh_notes_vs_cooked_notes')}>
        <p>t('learn.fresh_notes') come from volatile compounds easily lost with heat. t('learn.cooked_notes') are developed through sugar caramelization and Maillard reactions (to a lesser degree), creating a robust and complex flavor profile. The choice between one and other depends entirely on pizza style and desired result.</p>
      </LearnSection>
      <LearnSection title={t('learn.tomato_behavior_in_baking')}>
        <p>In the oven, sauce water evaporates rapidly. If sauce is too liquid, this evaporation can "cook" the dough underneath, creating a t('learn.gum_line_450'). If sauce is too concentrated and has added sugars, it can burn in high-temperature ovens. The goal is to have the right consistency so the sauce concentrates its flavor without soaking the dough or burning.</p>
      </LearnSection>
      <LearnSection title={t('learn.technical_references_6')}>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('learn.modernist_pizza_6')}</li>
          <li>{t('learn.serious_eats__the_pizza_lab_tomato_sauce')}</li>
          <li>t('learn.on_food_and_cooking') by Harold McGee</li>
        </ul>
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default TomatoPreservationPage;
