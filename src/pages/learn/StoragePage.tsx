
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
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
      <LearnSection title="1. Introduction: Storage as Control Tool">
        <p>
          Proper dough storage is an active tool modulating final result, influencing:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Fermentation speed/profile</strong> via temperature/oxygen.</li>
          <li><strong>Texture/surface hydration</strong> preventing drying.</li>
          <li><strong>{t('learn.flavor_development')}</strong> via stable environment.</li>
          <li><strong>Safety/Hygiene</strong> preventing contamination.</li>
          <li><strong>{t('learn.gluten_stability')}</strong> maintaining gas retention.</li>
        </ul>
      </LearnSection>

      <LearnSection title="2. Adequate Containers" icon={<ShieldCheckIcon className="h-5 w-5" />}>
        <p>
          Container choice is first defense line.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.clean_airtight_containers')}</strong> prevent contamination.</li>
          <li>{t('learn.individual_boxes_or_dividers')}<strong>prevent drying and sticking</strong>.</li>
          <li>{t('learn.must_have')}<strong>space for expansion</strong>. Inadequate space collapses gas structure.</li>
        </ul>
      </LearnSection>

      <LearnSection title="3. Air Contact: Surface Enemy">
        <p>
          Direct air exposure harms dough surface.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{t('learn.air')}<strong>dehydrates surface</strong> creating dry skin losing elasticity causing tearing.</li>
          <li>{t('learn.oxygen_contact_leads_to')}<strong>surface oxidation</strong> affecting flavor/color.</li>
        </ul>
      </LearnSection>

      <LearnSection title="4. Internal Humidity Control">
        <p>{t('learn.maintain_humidity_balance')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.closed_boxes_retain_natural_moisture')}</strong> creating stable microclimate.</li>
          <li>{t('learn.traditional_damp_cloth_offers_less_protection')}</li>
          <li><strong>{t('learn.excess_humidity_causes_condensation')}</strong> making surface sticky.</li>
        </ul>
      </LearnSection>

      <LearnSection title="5. Contamination: Real Risks">
        <p>{t('learn.dough_is_ideal_culture_medium')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.environmental_molds')}</strong> can settle on unprotected dough.</li>
          <li><strong>{t('learn.bacteria')}</strong> from dirty surfaces compete with yeast.</li>
          <li>Dough absorbs odors. Store away from strong smells (onion/fish).</li>
        </ul>
      </LearnSection>

      <LearnSection title="6. Storage During Cold Fermentation">
        <p>{t('learn.refrigerated_storage_requires_care')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.low_temp_slows_yeast')}</strong> but allows slow enzyme action developing flavor.</li>
          <li>{t('learn.cold_moist_fridge_makes')}<strong>clean sealed containers</strong> vital.</li>
        </ul>
      </LearnSection>

      <LearnSection title="7. Post-Balling Storage">
        <p>{t('learn.preserve_individual_ball_structure')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{t('learn.maintain')}<strong>shape and surface tension</strong>.</li>
          <li><strong>Avoid stacking/squashing</strong> destroying gas structure.</li>
          <li>{t('learn.each_ball_needs_space_to_expand_without_touching')}</li>
        </ul>
      </LearnSection>

      <LearnSection title="8. Common Improper Storage Risks">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.dried_dough')}</strong> Surface tears, hard crust. Cause: bad seal/air exposure.</li>
          <li><strong>{t('learn.sticky_dough')}</strong> Hard to handle. Cause: condensation.</li>
          <li><strong>{t('learn.strong_alcohol_smell')}</strong> Uncontrolled anaerobic fermentation.</li>
        </ul>
      </LearnSection>

      <LearnSection title="9. Technical References" icon={<BookOpenIcon className="h-5 w-5" />}>
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
