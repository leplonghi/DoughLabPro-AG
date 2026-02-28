
import React from 'react';
import TechnicalPageLayout from '../../components/layouts/TechnicalPageLayout';
import { BeakerIcon, BookOpenIcon, ShieldCheckIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

// Local Section component for structuring content
const StoragePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout
      title={t('learn.technical_dough_storage')}
      subtitle={t('learn.the_science_of_storing_dough_to_control_fermentati')}
      showReferencesSection={false} // Custom references section at the end
    >
      <LearnSection title={t('learn:1_introduction_storage_as_control_tool')}>
        <p>{t('learn:proper_dough_storage_is_an_active_tool_modulating_final_resu')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn:fermentation_speed_profile')}</strong> via temperature/oxygen.</li>
          <li><strong>{t('learn:texture_surface_hydration')}</strong> preventing drying.</li>
          <li><strong>{t('learn.flavor_development')}</strong> via stable environment.</li>
          <li><strong>{t('learn:safety_hygiene')}</strong> preventing contamination.</li>
          <li><strong>{t('learn.gluten_stability')}</strong> maintaining gas retention.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:2_adequate_containers')} icon={<ShieldCheckIcon className="h-5 w-5" />}>
        <p>{t('learn:container_choice_is_first_defense_line')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.clean_airtight_containers')}</strong> prevent contamination.</li>
          <li>{t('learn.individual_boxes_or_dividers')}<strong>prevent drying and sticking</strong>.</li>
          <li>{t('learn.must_have')}<strong>space for expansion</strong>. Inadequate space collapses gas structure.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:3_air_contact_surface_enemy')}>
        <p>{t('learn:direct_air_exposure_harms_dough_surface')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{t('learn.air')}<strong>dehydrates surface</strong> creating dry skin losing elasticity causing tearing.</li>
          <li>{t('learn.oxygen_contact_leads_to')}<strong>surface oxidation</strong> affecting flavor/color.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:4_internal_humidity_control')}>
        <p>{t('learn.maintain_humidity_balance')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.closed_boxes_retain_natural_moisture')}</strong> creating stable microclimate.</li>
          <li>{t('learn.traditional_damp_cloth_offers_less_protection')}</li>
          <li><strong>{t('learn.excess_humidity_causes_condensation')}</strong> making surface sticky.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:5_contamination_real_risks')}>
        <p>{t('learn.dough_is_ideal_culture_medium')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.environmental_molds')}</strong> can settle on unprotected dough.</li>
          <li><strong>{t('learn.bacteria')}</strong> from dirty surfaces compete with yeast.</li>
          <li>{t('learn:dough_absorbs_odors_store_away_from_strong_smells_onion_fish')}</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:6_storage_during_cold_fermentation')}>
        <p>{t('learn.refrigerated_storage_requires_care')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.low_temp_slows_yeast')}</strong> but allows slow enzyme action developing flavor.</li>
          <li>{t('learn.cold_moist_fridge_makes')}<strong>clean sealed containers</strong> vital.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:7_post_balling_storage')}>
        <p>{t('learn.preserve_individual_ball_structure')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{t('learn.maintain')}<strong>shape and surface tension</strong>.</li>
          <li><strong>{t('learn:avoid_stacking_squashing')}</strong> destroying gas structure.</li>
          <li>{t('learn.each_ball_needs_space_to_expand_without_touching')}</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:8_common_improper_storage_risks')}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.dried_dough')}</strong> Surface tears, hard crust. Cause: bad seal/air exposure.</li>
          <li><strong>{t('learn.sticky_dough')}</strong> Hard to handle. Cause: condensation.</li>
          <li><strong>{t('learn.strong_alcohol_smell')}</strong> Uncontrolled anaerobic fermentation.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:9_technical_references')} icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('learn.modernist_pizza_4')}</li>
          <li>{t('learn.modernist_bread_3')}</li>
          <li>{t('learn.king_arthur_baking__storage_guides')}</li>
          <li>{t('learn.ooni_learn__storing_dough')}</li>
          <li>{t('learn.wikipedia__food_safety_microbiology')}</li>
        </ul>
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default StoragePage;
