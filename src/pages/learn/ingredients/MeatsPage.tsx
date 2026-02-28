
import React from 'react';
import IngredientPageLayout from '@/components/layouts/IngredientPageLayout';
import { BookOpenIcon, SparklesIcon, BeakerIcon, FireIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from '../LearnComponents';
import { useTranslation } from '@/i18n';

const Section: React.FC<{ title: string, icon?: React.ReactNode, children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="mt-8">
    <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-3">
      {icon}
      {title}
    </h3>
    <div className="prose-sm max-w-none text-slate-900 leading-relaxed">
      {children}
    </div>
  </div>
);

const MeatsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IngredientPageLayout
      title={t('learn.meats_and_cured_meats')}
      description="A technical analysis of how meats, cured products, and sausages behave on pizza, from curing science to oven reaction."
      category={t('learn.ingredients_3')}
    >
      <LearnSection title={t('learn.introduction_chemical_impact_of_meat')}>
        <p>{t('learn:meats_and_sausages_are_more_than_just_a_topping_they_are_a_c')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.salinity_and_fat')}</strong> Contribute salt and fat, needing balance with sauce acidity and cheese smoothness.</li>
          <li><strong>{t('learn.umami_flavor')}</strong> Curing and fermentation processes concentrate glutamates, providing depth of umami flavor.</li>
          <li><strong>{t('learn.crispness_2')}</strong> Rendered fat and Maillard reaction on proteins create crispy textures contrasting with soft dough.</li>
        </ul>
        <p>
          Cured meats like salami and pepperoni undergo sophisticated chemical processes before reaching pizza, including curing (salt/nitrites), fermentation (acidity/flavor), smoking, and dehydration concentrating flavor and ensuring safety.
        </p>
      </LearnSection>

      <LearnSection title={t('learn:technical_properties_real_chemistry')} icon={<BeakerIcon className="h-5 w-5" />}>
        <p>{t('learn:behavior_of_meats_in_oven_is_dictated_by_composition')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.fat_rendering')}</strong> Fat melts and spreads. Saturated fats (like bacon) melt slower at higher temps. Process can lead to "oil-out".</li>
          <li><strong>{t('learn.water_content')}</strong> Cured meats (salami, prosciutto) have low water, making them stable and prone to crisping. Fresh meats (raw sausage, chicken) release significant water, risking soggy pizza.</li>
          <li><strong>{t('learn.salinity')}</strong> Curing salt is concentrated. Crucial to consider meat salt when balancing total pizza salt including sauce and cheese.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.oven_behavior')} icon={<FireIcon className="h-5 w-5" />}>
        <p>{t('learn.each_meat_type_reacts_differently_to_intense_heat')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.pepperoni_cupping')}</strong> Thin slices cup upwards because top (exposed to radiant heat) cooks and contracts faster than bottom (protected). Rendered fat pools in cups, frying edges crisp.</li>
          <li><strong>{t('learn.fresh_meat_water_release')}</strong> Fresh sausage, ground beef, or chicken, if raw, release steam creating "gum line" on dough. Often pre-cooked for this reason.</li>
          <li><strong>{t('learn.prosciutto_and_delicate_cured_meats')}</strong> Per Italian tradition and sources like Ooni Pizza School, prosciutto crudo must be applied <strong>post-oven</strong>. Intense heat destroys delicate aromatics and alters silky texture, making it salty and tough.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.common_meat_types')}>
        <h4>a) Pepperoni</h4>
        <p>{t('learn:cured_dry_sausage_of_italian_american_origin_with_paprika_ch')}</p>

        <h4>b) Italian Salami</h4>
        <p>{t('learn:hundreds_of_varieties_generally_fermented_giving_acidic_note')}</p>

        <h4>c) Smoked Sausage / Calabresa</h4>
        <p>{t('learn:often_cooked_processed_differently_than_dry_cured_salami_str')}</p>

        <h4>d) Prosciutto Crudo (Parma, San Daniele)</h4>
        <p>{t('learn:dry_cured_with_salt_only_delicate_flavor_and_melt_in_mouth_t')}</p>

        <h4>e) Bacon</h4>
        <p>{t('learn:dense_fat_needs_time_to_render_in_fast_bake_pizzas_neapolita')}</p>
      </LearnSection>

      <LearnSection title={t('learn:classic_combinations_tradition_validated')} icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.pepperoni__mozzarella')}</strong> American classic. Pepperoni spice and fat balanced by mozzarella mildness.</li>
          <li><strong>{t('learn.salami__provolone')}</strong> Robust combination. Strong salami complements sharper provolone.</li>
          <li><strong>{t('learn.prosciutto__arugula__parmesan_shavings')}</strong> Modern classic. Added post-oven; salty ham, bitter arugula, umami cheese create fresh contrast.</li>
          <li><strong>{t('ui:meats_page.bacon_onion_caramelized_or_red')}</strong>{t('learn:onion_sweetness_cuts_bacon_richness_and_salt')}</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.risks_and_common_care')} icon={<SparklesIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn:excess_fat_oil_out')}</strong> Multiple fatty meats (pepperoni + bacon) lead to oily pizza. Balance with lower fat cheese or less quantity.</li>
          <li><strong>{t('learn.raw_fresh_meats')}</strong> High risk of releasing water and undercooking. Pre-cooking is safest effective practice.</li>
          <li><strong>{t('learn:curing_agents_nitrites')}</strong>{t('learn:stable_and_dont_change_significantly_with_oven_heat_function')}</li>
          <li><strong>{t('learn.aroma_loss_in_fine_cured_meats')}</strong> Never bake high quality prosciutto. You pay for aromatic complexity destroyed by heat.</li>
        </ul>
      </LearnSection>
    </IngredientPageLayout>
  );
};

export default MeatsPage;
