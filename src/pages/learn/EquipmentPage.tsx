import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BeakerIcon, BookOpenIcon, WrenchScrewdriverIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

// Local Section component for structuring content
const EquipmentPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout
      title={t('learn.essential_pizza_equipment')}
      subtitle={t('learn.technical_analysis_of_how_each_tool_impacts_final_')}
      showReferencesSection={false} // Custom references section at the end
    >
      <LearnSection title="1. Introduction: Tools Shaping Pizza">
        <p>
          Equipment is integral to process, influencing:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Thermal conduction/capacity</strong> dictating heat transfer.</li>
          <li><strong>{t('learn.manipulation')}</strong> ease.</li>
          <li><strong>{t('learn.baking_speed')}</strong> impacting hydration.</li>
          <li><strong>{t('learn.final_texture')}</strong> of crust.</li>
        </ul>
      </LearnSection>

      <LearnSection title="2. Peels">
        <h4>a) Wooden Peel</h4>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.less_sticky')}</strong> Porous wood absorbs moisture helping prevent sticking.</li>
          <li><strong>{t('learn.ideal_for_prep')}</strong> Best for assembling pizza.</li>
          <li><strong>{t('learn.lower_thermal_transfer')}</strong> Doesn't heat up much.</li>
        </ul>
        <h4>b) Metal Peel</h4>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.thinner')}</strong> Slides under baked pizza easily.</li>
          <li><strong>{t('learn.best_for_retrieval')}</strong> Ideal for turning/removing.</li>
          <li><strong>{t('learn.stickier')}</strong> Raw dough sticks to smooth metal.</li>
        </ul>
      </LearnSection>

      <LearnSection title="3. Pizza Stones">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.medium_thermal_capacity')}</strong> Stores heat well, transfers gradually.</li>
          <li><strong>{t('learn.good_stability')}</strong> Maintains temp between pizzas.</li>
          <li><strong>{t('learn.balanced_baking')}</strong> Uniform base cooking, versatile.</li>
        </ul>
      </LearnSection>

      <LearnSection title="4. Baking Steel">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.very_high_conductivity')}</strong> Transfers heat rapidly.</li>
          <li><strong>{t('learn.base_browns_faster')}</strong> Crispier base, better oven spring in home ovens.</li>
          <li><strong>{t('learn.burn_risk')}</strong> Can burn base before top cooks if top heat is weak.</li>
        </ul>
      </LearnSection>

      <LearnSection title="5. Biscotto (Refractory Clay)">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.low_conductivity')}</strong> Porous clay transfers heat gently.</li>
          <li><strong>{t('learn.ideal_for_neapolitan')}</strong> Perfect for high temp ovens, cooking base without burning.</li>
        </ul>
      </LearnSection>

      <LearnSection title="6. Detroit Pans (Steel)">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.heat_to_edges')}</strong> High conductive walls bake sides.</li>
          <li><strong>Cheese caramelization (Frico):</strong> Creates crispy cheese wall.</li>
          <li><strong>{t('learn.uniform_expansion')}</strong> Contained growth for airy crumb.</li>
        </ul>
      </LearnSection>

      <LearnSection title="7. Cutters and Spatulas">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.stainless_steel')}</strong> Durable, hygienic.</li>
          <li><strong>{t('learn.sharp_blades')}</strong> Clean cuts without dragging topping.</li>
        </ul>
      </LearnSection>

      <LearnSection title="8. Materials Science (Qualitative)" icon={<BeakerIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.metals')}</strong> High conductivity. Fast heat transfer.</li>
          <li><strong>{t('learn.ceramics')}</strong> Low conductivity, high retention. Gradual heat release.</li>
          <li><strong>{t('learn.aluminum')}</strong> Heats/cools fast.</li>
          <li><strong>{t('learn.steel')}</strong> Heats fast, holds less heat than ceramic.</li>
        </ul>
      </LearnSection>

      <LearnSection title="9. Risks">
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.steel_too_hot')}</strong> Burns base.</li>
          <li><strong>{t('learn.stone_cold')}</strong> Raw base ("gum line").</li>
          <li><strong>{t('learn.dirty_tools')}</strong> Contamination.</li>
        </ul>
      </LearnSection>

      <LearnSection title="10. Technical References" icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('learn.modernist_pizza')}</li>
          <li>{t('learn.serious_eats__steel_vs_stone')}</li>
          <li>{t('learn.ooni_learn__baking_surfaces')}</li>
          <li>{t('learn.wikipedia__thermal_properties')}</li>
        </ul>
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default EquipmentPage;
