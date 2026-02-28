
import React from 'react';
import TechnicalPageLayout from '../../components/layouts/TechnicalPageLayout';
import { FireIcon, BeakerIcon, BookOpenIcon, LightBulbIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

// Local Section component for structuring content
const OvenSciencePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout title={t('learn.baking_pizza_the_physics_of_the_oven')} showReferencesSection>
      <LearnSection title={t('learn:1_introduction_the_thermal_shock_that_creates_pizza')}>
        <p>
          Scientifically, baking is the most violent and transformative stage in the dough's life. When the pizza enters the oven, it undergoes a thermal shock triggering a cascade of physical and chemical events in seconds, as described in t('learn.modernist_pizza'):
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.thermal_shock')}</strong> Cold dough meets intense oven heat.</li>
          <li><strong>{t('learn.rapid_water_evaporation')}</strong> Water on dough surface and ingredients turns to steam almost instantly.</li>
          <li><strong>Gas expansion (Oven Spring):</strong> CO₂ trapped in gluten and newly formed steam expand violently, causing t('learn.oven_spring_446') and puffing the rim (cornicione).</li>
          <li><strong>{t('learn.surface_coloration')}</strong> Maillard reactions and caramelization occur on dry surface, developing color and flavor.</li>
          <li><strong>{t('learn.internal_structure_stabilization')}</strong> Starch gelatinizes and gluten proteins coagulate, fixing the aerated dough structure.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:2_heat_flow_the_three_mechanisms')}>
        <p>
          Heat isn't a single entity; it transfers in three distinct ways. Baking excellence, as Kenji López-Alt explains, depends on perfect balance between them. Different ovens drastically alter the dominance of each mechanism.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{t('learn.heat')}<strong>flows from hot oven surface (deck) to pizza base</strong> (Conduction).</li>
          <li>{t('learn.radiant_heat')}<strong>acts on upper surface</strong> of pizza, coming from ceiling and flames (Radiation).</li>
          <li>{t('learn.convective_heat')}<strong>warms air around</strong> pizza, helping cook ingredients and remove moisture (Convection).</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:3_conduction_base_heat')}>
        <p>{t('learn:conduction_is_heat_transfer_by_direct_contact_oven_floor_ste')}</p>
      </LearnSection>

      <LearnSection title={t('learn:4_radiation_top_heat')}>
        <p>{t('learn:radiation_is_heat_emitted_as_infrared_waves_in_a_pizza_oven_')}</p>
      </LearnSection>

      <LearnSection title={t('learn:5_convection_moving_air')}>
        <p>{t('learn:convection_is_heat_transfer_by_hot_air_movement_in_electric_')}</p>
      </LearnSection>

      <LearnSection title={t('learn:6_phase_change_the_power_of_steam')}>
        <p>{t('learn:transformation_of_water_to_steam_is_one_of_most_important_ev')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.rapid_water_evaporation')}</strong> in dough turns to steam. Since steam occupies much larger volume than liquid water, it violently expands existing gas bubbles, contributing to t('learn.oven_spring_446').</li>
          <li>Free water in ingredients (especially sauce and veg) also evaporates. <strong>{t('learn.controlling_this_moisture_is_critical')}</strong> to avoid soggy pizza.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:7_baking_stages')}>
        <p>{t('learn:baking_can_be_divided_into_sequential_and_overlapping_stages')}</p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li><strong>{t('learn:expansion_oven_spring')}</strong> In first 30-60 seconds, heat accelerates final yeast activity and expands CO₂ and water vapor, inflating dough.</li>
          <li><strong>{t('learn.structure_fixation')}</strong> As internal dough temperature rises, starch gelatinizes and gluten proteins coagulate, solidifying aerated structure created in expansion phase.</li>
          <li><strong>{t('learn.surface_drying')}</strong> Moisture on dough surface evaporates, creating dry "skin", prerequisite for coloring reactions.</li>
          <li><strong>{t('learn:coloration_browning')}</strong>{t('learn:with_dry_surface_and_high_temperature_maillard_reaction_and_')}</li>
        </ol>
      </LearnSection>

      <LearnSection title={t('learn:8_interaction_with_ingredients')}>
        <p>{t('learn:toppings_arent_passive_they_interact_with_heat_and_dough')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.very_wet_sauces')}</strong> release steam and delay surface drying, which can inhibit coloring and lead to raw base ("gum line").</li>
          <li><strong>{t('learn.very_fatty_cheeses')}</strong> suffer "oil-out", releasing oil that can fry surface of other ingredients.</li>
          <li><strong>{t('learn.fresh_meats')}</strong> release fat and water, impacting moisture.</li>
          <li><strong>{t('learn.raw_vegetables')}</strong> release large amount of steam, which needs managing to not soak pizza.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:9_risks_thermal_imbalance')}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn:baking_too_fast_excess_top_heat')}</strong>{t('learn:pizza_gains_color_outside_but_crumb_remains_raw')}</li>
          <li><strong>{t('learn:baking_too_slow_cold_oven')}</strong>{t('learn:dough_dehydrates_slowly_before_baking_resulting_in_dry_hard_')}</li>
          <li><strong>{t('learn:cold_floor_lack_of_conduction')}</strong>{t('learn:base_doesnt_cook_properly_staying_pale_and_soggy_even_if_top')}</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:10_technical_references')} icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('learn.modernist_pizza__nathan_myhrvold__francisco_migoya')}</li>
          <li>Serious Eats (J. Kenji López-Alt) – The Pizza Lab: Heat Transfer</li>
          <li>{t('learn.ooni_learn__the_science_of_baking_a_pizza')}</li>
          <li>Wikipedia – Conduction, Convection, Radiation (Thermodynamics)</li>
        </ul>
      </LearnSection>
    </TechnicalPageLayout>
  );
};

export default OvenSciencePage;
