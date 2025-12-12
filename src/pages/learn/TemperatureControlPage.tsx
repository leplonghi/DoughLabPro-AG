
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BeakerIcon, BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

// Local Section component for structuring content
const TemperatureControlPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout
      title={t('learn.dough_temperature_control')}
      subtitle={t('learn.the_most_important_concept_for_consistency_in_baki')}
      showReferencesSection
    >
      <LearnSection title="1. Introduction: Temperature is Everything">
        <p>
          Temperature is the most influential variable in dough behavior. It regulates biochemical processes transforming flour and water into structure and flavor. Temperature determines:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.fermentation_speed')}</strong> Pacing gas production.</li>
          <li><strong>Gluten strength/extensibility:</strong> Influencing handling.</li>
          <li><strong>{t('learn.enzymatic_activity')}</strong> Crucial for flavor and starch breakdown.</li>
          <li><strong>{t('learn.final_flavor')}</strong> Modulating aromatic compounds.</li>
        </ul>
        <p>{t('learn.this_concept_is_universal_and_applies_to_all_bakin')}</p>
      </LearnSection>

      <LearnSection title="2. DDT — Desired Dough Temperature">
        <p>
          DDT is the central concept. Per t('learn.modernist_bread'), it represents the <strong>target temperature dough should reach immediately after mixing</strong>. Hitting consistent DDT is key to predictability.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{t('learn.controlling_ddt_means_consistent_fermentation_star')}</li>
          <li>{t('learn.main_tool_transforming_baking_from_feeling_to_cont')}</li>
        </ul>
      </LearnSection>

      <LearnSection title="3. Factors Influencing Dough Temp">
        <p>
          Final temp sums multiple heat sources. Manage each:
        </p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.flour_temp')}</strong> Usually room temp.</li>
          <li><strong>{t('learn.water_temp')}</strong> Easiest control factor. Use cold/warm water to adjust.</li>
          <li><strong>{t('learn.room_temp')}</strong> Heat exchange during mixing.</li>
          <li><strong>{t('learn.friction_heat')}</strong> Mechanical mixing generates heat.</li>
          <li><strong>{t('learn.equipment_temp')}</strong> Bowl/bench transfer heat.</li>
        </ol>
      </LearnSection>

      <LearnSection title="4. Friction: Heat of Movement">
        <p>
          Kneading introduces mechanical energy dissipating as heat.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{t('learn.stiff_low_hydration_doughs_generate_more_friction_')}</li>
          <li>{t('learn.high_speed_mixers_generate_significant_heat')}</li>
          <li>Autolyse/rest reduces mechanical work needed, reducing friction heat.</li>
        </ul>
      </LearnSection>

      <LearnSection title="5. Temperature and Fermentation">
        <p>{t('learn.direct_relationship_temp_governs_yeast_metabolism')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.warm_doughs_ferment_faster')}</strong> Yeast active, rapid CO₂.</li>
          <li><strong>{t('learn.cold_doughs_ferment_slower')}</strong> Reduced activity, prolonged rise.</li>
          <li>In sourdough, temp influences yeast/LAB balance affecting flavor profile.</li>
        </ul>
      </LearnSection>

      <LearnSection title="6. Impact on Flavor">
        <p>{t('learn.fermentation_speed_impacts_flavor')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.long_cold_fermentations')}</strong> allow enzymes time to produce complex aromatics. Deep nuanced flavor.</li>
          <li><strong>{t('learn.fast_warm_fermentations')}</strong> favor CO₂/ethanol. Clean simple flavor.</li>
        </ul>
      </LearnSection>

      <LearnSection title="7. Practical Control">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.adjust_ingredient_temp')}</strong> Mainly water.</li>
          <li><strong>{t('learn.control_environment')}</strong> Stable room temp if possible.</li>
          <li><strong>Fridge (Retard):</strong> Effective tool to slow fermentation for flavor.</li>
          <li><strong>{t('learn.bench_rest')}</strong> t('learn.wakes_up') cold dough.</li>
        </ul>
      </LearnSection>

      <LearnSection title="8. Risks of Uncontrolled Temp">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.too_hot')}</strong> Uncontrolled fermentation, gas before flavor, gluten degradation.</li>
          <li><strong>{t('learn.too_cold')}</strong> Slow/inactive fermentation, dense heavy dough.</li>
          <li><strong>{t('learn.sudden_changes')}</strong> Stress gluten network.</li>
        </ul>
      </LearnSection>

      <LearnSection title="9. Technical References" icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 space-y-2">
          <li>t('learn.modernist_bread') (DDT)</li>
          <li>t('learn.modernist_pizza')</li>
          <li>{t('learn.king_arthur_baking_2')}</li>
          <li>{t('learn.wikipedia__thermodynamics')}</li>
        </ul>
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default TemperatureControlPage;
