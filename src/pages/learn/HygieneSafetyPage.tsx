
import React from 'react';
import TechnicalPageLayout from '../../components/layouts/TechnicalPageLayout';
import { ShieldCheckIcon, BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

// Local Section component for structuring content
const HygieneSafetyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout
      title={t('learn.hygiene_and_food_safety_in_pizza')}
      subtitle={t('learn.universal_sanitary_principles_for_safe_responsible')}
      showReferencesSection={false} // Custom references section at the end
    >
      <LearnSection title={t('learn:1_introduction_quality_base_is_safety')}>
        <p>{t('learn:food_safety_is_non_negotiable_its_a_system_aiming_for')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.microbial_control')}</strong> reducing pathogens.</li>
          <li><strong>{t('learn.preventing_contamination')}</strong> (biological, chemical, physical).</li>
          <li><strong>{t('learn.responsible_handling')}</strong> of ingredients/tools.</li>
          <li>{t('learn.maintaining')}<strong>clean environment</strong>.</li>
        </ul>
        <p>{t('learn:following_principles_protects_health_and_ensures_sensory_int')}</p>
      </LearnSection>

      <LearnSection title={t('learn:2_personal_hygiene_starting_point')} icon={<ShieldCheckIcon className="h-5 w-5" />}>
        <p>{t('learn:handler_is_main_contamination_vector')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.wash_hands_properly')}</strong> with soap/water frequently.</li>
          <li>{t('learn.keep')}<strong>nails short/clean</strong>.</li>
          <li><strong>{t('learn.avoid_handling')}</strong> with open wounds unless covered.</li>
          <li>{t('learn.avoid')}<strong>cross contact</strong>: never touch raw meat then ready food without washing.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:3_ingredient_hygiene')}>
        <p>{t('learn:sanitary_quality_equals_sensory_quality')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{t('learn.use')}<strong>fresh ingredients</strong> from reliable sources.</li>
          <li>{t('learn.discard')}<strong>strange odors, altered colors</strong> or <strong>bloated</strong> packs.</li>
          <li><strong>{t('learn.wash_vegetables')}</strong> well.</li>
          <li>{t('learn:check_appearance_smell_of')}<strong>meats/dairy</strong> and expiry dates.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:4_cross_contamination_invisible_risk')}>
        <p>{t('learn:transfer_of_microorganisms_between_foods_surfaces')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn:segregate_boards_knives')}</strong>{t('learn:use_different_tools_for_raw_meats_veg')}</li>
          <li><strong>{t('learn:never_mix_raw_ready')}</strong> in same container.</li>
          <li><strong>{t('learn.clean_surfaces_rigorously')}</strong>.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:5_common_microorganisms')}>
        <p>{t('learn:dough_ingredients_are_nutrient_rich')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.bacteria')}</strong> Can multiply fast. Some pathogenic.</li>
          <li><strong>{t('learn.molds')}</strong> Visible colonies producing mycotoxins.</li>
          <li><strong>{t('learn.unwanted_yeasts')}</strong> Wild yeasts producing off flavors.</li>
          <li><strong>{t('learn.biofilms')}</strong> Communities on dirty surfaces.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:6_general_dough_conservation')}>
        <p>{t('learn.protect_dough_during_fermentation')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{t('learn.use')}<strong>clean closed containers</strong>.</li>
          <li>{t('learn.avoid')}<strong>contaminated air</strong> contact.</li>
          <li>{t('learn.clean_all')}<strong>tools</strong>.</li>
          <li><strong>{t('learn.avoid_unnecessary_handling')}</strong>.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:7_real_risks')}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.sensory_spoilage')}</strong> Off flavors/odors.</li>
          <li><strong>{t('learn.foodborne_illness')}</strong> Pathogens causing sickness.</li>
          <li><strong>{t('learn.visible_mold')}</strong> Discard entirely. Mycotoxins spread beyond visible mold.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:8_technical_references')} icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('learn.who__five_keys_to_safer_food')}</li>
          <li>{t('learn.fda_food_code')}</li>
          <li>{t('learn.modernist_cuisine__food_safety')}</li>
          <li>{t('learn.wikipedia__food_safety')}</li>
        </ul>
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default HygieneSafetyPage;
