import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import IngredientPageLayout from '@/components/layouts/IngredientPageLayout';
import { ScaleIcon, ChartBarIcon, BeakerIcon, CalculatorIcon, FlaskIcon } from '@/components/ui/Icons';
import { LearnSection, LearnProTip, LearnCriticalPoint, LearnHistory } from '../LearnComponents';
import { useTranslation } from '@/i18n';

const FloursPage: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  return (
    <IngredientPageLayout
      title={t('learn:flours_strength_w_p_l_ash_content')}
      description={t('learn:decoding_technical_specs') || "Decoding the technical specifications that determine dough performance."}
      category={t('learn.ingredients_2')}
      references={[
        t('references.taste_of_bread'),
        t('learn.mulino_caputo_technical_sheets'),
        t('references.wheat_flour_milling'),
        t('references.understanding_baking'),
        t('references.elements_of_pizza'),
        t('references.italian_decree')
      ]}
    >
      <LearnHistory>
        <p>
          {t('learn:flour_history_1') || "For thousands of years, flour was stone-ground, producing a coarse meal that included the germ and bran. This flour was nutritious but spoiled quickly and produced dense loaves. The invention of the steel roller mill in Hungary in the 1870s revolutionized milling, allowing for the separation of the endosperm to create pure white, shelf-stable flour."}
        </p>
        <p className="mt-2">
          {t('learn:flour_history_2') || "This innovation led to the modern classification systems we use today, like the Italian '00' scale based on ash content (refinement) and the French 'T' system. However, it also removed much of the flavor, leading to the recent revival of stone-ground and high-extraction flours in artisan baking."}
        </p>
        <p className="mt-2">
          {t('learn:flour_history_3') || "Understanding these historical milling styles helps you choose the right flour in DoughLabPro—whether you want the pure strength of a modern 00 for Neapolitan pizza or the complex flavor of a rustic Type 1 for a country loaf."}
        </p>
      </LearnHistory>

      <LearnSection title={`${t('learn:the')} W Index (Strength)`} icon={<ScaleIcon className="h-5 w-5" />}>
        <p>
          {t('learn:chopin_alveograph_description') || 'The Chopin Alveograph measures the energy required to blow a bubble of dough until it bursts. This energy is the "W" value.'}
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('ui:flours_page.weak_w160_200')}</strong> {t('learn:cookies_cakes_cannot_hold_gas')}</li>
          <li><strong>{t('ui:flours_page.medium_w220_260')}</strong> {t('learn:direct_doughs_pizza_flour') || "Direct doughs, 4-8h fermentation. Standard pizza flour."}</li>
          <li><strong>{t('ui:flours_page.strong_w280_320')}</strong> {t('learn:long_fermentation_high_hydration') || "24-48h fermentation. High hydration. Neapolitan/NY Style."}</li>
          <li><strong>{t('ui:flours_page.manitoba_w350')}</strong> {t('learn:reinforcement_flour_panettone') || "Reinforcement flour. Extreme fermentation (72h+), Panettone."}</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:the_p_l_ratio_balance')} icon={<ChartBarIcon className="h-5 w-5" />}>
        <p>{t('learn:p_measures_tenacity_resistance_to_stretching_l_measures_exte')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>P/L {'>'} 0.7:</strong> {t('learn:buckish_tough_dough_hard_to_open_springs_back')}</li>
          <li><strong>P/L {'<'} 0.4:</strong> {t('learn:slack_sticky_dough_tears_easily_flattens_out')}</li>
          <li><strong>{t('ui:flours_page.ideal_0_5_0_6')}</strong> {t('learn:balanced_easy_to_open_but_holds_shape')}</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn:ash_content_refinement')} icon={<BeakerIcon className="h-5 w-5" />}>
        <p>{t('learn:ash_is_the_mineral_residue_left_after_burning_the_flour_it_i')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('ui:flours_page.type_00_italy')}</strong> {t('learn:very_pure_endosperm_soft_white_crumb') || "~0.55% ash. Very pure endosperm. Soft, white crumb."}</li>
          <li><strong>{t('ui:flours_page.type_0_1_2')}</strong> {t('learn:increasing_bran_content_more_flavor_more_enzyme_activity_but')}</li>
        </ul>
      </LearnSection>

      <LearnProTip>
        {t('learn:dont_trust_protein_percentage') || "Don't trust the protein percentage on the bag. A 13% protein Whole Wheat flour is WEAKER than a 12% protein Type 00 flour because the bran cuts the gluten network. Always look for the W value or technical sheet, not just the nutritional label."}
      </LearnProTip>

      <LearnCriticalPoint>
        {t('learn:falling_number_explanation') || "The Falling Number. This measures enzymatic activity (amylase). Low falling number (<250) means high enzyme activity = sticky, gummy dough. High falling number (>400) means low activity = dry, pale dough. Most professional flours are corrected to ~300."}
      </LearnCriticalPoint>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <button
          onClick={() => navigate('mylab/flours')}
          className="group block rounded-xl border border-slate-200 p-6 hover:border-dlp-brand hover:shadow-md transition-all text-left w-full"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-lime-100 p-2 text-lime-700 group-hover:bg-dlp-brand group-hover:text-white transition-colors">
              <FlaskIcon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">{t('learn.manage_my_flours')}</h3>
          </div>
          <p className="text-sm text-slate-600">{t('learn:save_your_specific_flour_brands_and_their_w_values_in_mylab_')}</p>
        </button>

        <button
          onClick={() => navigate('calculator')}
          className="group block rounded-xl border border-slate-200 p-6 hover:border-dlp-brand hover:shadow-md transition-all text-left w-full"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-lime-100 p-2 text-lime-700 group-hover:bg-dlp-brand group-hover:text-white transition-colors">
              <CalculatorIcon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">{t('learn.test_hydration')}</h3>
          </div>
          <p className="text-sm text-slate-600">{t('learn:stronger_flours_high_w_need_more_water_use_the_calculator_to')}</p>
        </button>
      </div>
    </IngredientPageLayout>
  );
};

export default FloursPage;