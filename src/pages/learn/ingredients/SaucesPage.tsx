import React from 'react';
import IngredientPageLayout from './IngredientPageLayout';
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


const SaucesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IngredientPageLayout
      title={t('learn.pizza_sauces')}
      description="A technical analysis of the pizza heart: the sauce. Understand how tomato choice and preparation impact acidity, moisture, and final flavor balance."
      category={t('learn.ingredients_7')}
    >
      <LearnSection title={t('learn.introduction_the_central_role_of_sauce')}>
        <p>
          Sauce is much more than a simple wet ingredient; it defines the pizza's soul. A good sauce brings:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.acidity')}</strong> To cut through cheese and meat fat.</li>
          <li><strong>{t('learn.aroma')}</strong> Characteristic tomato scent released with oven heat.</li>
          <li><strong>{t('learn.moisture_2')}</strong> Essential for texture, but a risk factor if uncontrolled.</li>
          <li><strong>{t('learn.color')}</strong> Vibrant red from lycopene, a natural pigment and antioxidant.</li>
          <li><strong>{t('learn.balance_2')}</strong> The foundation all other topping flavors are built on.</li>
        </ul>
        <p>
          Scientifically, tomato is a natural marvel containing water (&gt;90%), natural sugars (fructose/glucose), organic acids (citric/malic), and polysaccharides like pectin giving structure/viscosity.
        </p>
      </LearnSection>

      <LearnSection title={t('learn.tomatoes_and_moisture_chemistry')} icon={<BeakerIcon className="h-5 w-5" />}>
        <p>
          Water management is challenge number one when working with tomatoes.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.cell_structure')}</strong> Whole tomatoes, especially canned, retain most water inside cell walls. Crushing breaks walls releasing water creating fluid sauce.</li>
          <li><strong>{t('learn.varieties')}</strong> Varieties like San Marzano or Roma preferred for denser pulp and fewer seeds, resulting in ideal sugar/acid balance.</li>
          <li><strong>{t('learn.pectin')}</strong> Natural thickener. Processing and cooking can alter pectin structure, influencing final viscosity.</li>
          <li><strong>{t('learn.reduction')}</strong> Slow cooking evaporates water, concentrating sugars, acids, and flavor compounds. Controls moisture and intensifies flavor.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.raw_vs_cooked_sauce_a_style_choice')}>
        <p>Deciding whether to cook sauce before pizza is a key distinction between styles, documented by sources like AVPN and NY Style guides.</p>
        <h4>Raw Sauce (Neapolitan Style)</h4>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.flavor_2')}</strong> Bright, fresh, natural acidity highlighted. Pizza bakes so fast sauce "cooks" on pizza.</li>
          <li><strong>{t('learn.prep')}</strong> High quality tomatoes (San Marzano) hand-crushed or lightly blended, seasoned only with salt.</li>
          <li><strong>{t('learn.challenge')}</strong> Requires strict moisture control as no prior evaporation.</li>
          <li><strong>{t('learn.reference')}</strong>{t('learn.mandatory_standard_of_avpn')}<em>disciplinare</em> for authentic Neapolitan Pizza.</li>
        </ul>
        <h4>Cooked Sauce (NY Style, Pan Pizzas)</h4>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.flavor_3')}</strong> Deeper, sweeter, concentrated. Slow cooking allows slight sugar caramelization and infusion of aromatics (garlic, oregano).</li>
          <li><strong>{t('learn.prep_2')}</strong> Simmered to reduce volume 25-50%, concentrating flavor and eliminating excess water.</li>
          <li><strong>{t('learn.advantage')}</strong> Greater control over final moisture, reducing soggy pizza risk, especially in home ovens with longer bake times.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.density_and_viscosity_the_sweet_spot')}>
        <p>{t('learn.sauce_consistency_is_crucial_and_must_adapt_to_piz')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.too_liquid')}</strong> Main cause of "gum line" (raw dough layer under topping). Excess water prevents base heat from baking dough, steaming it instead.</li>
          <li><strong>{t('learn.too_dense')}</strong> Can act as thermal insulator preventing heat penetration. Pasty sauce can result in dry texture.</li>
          <li><strong>{t('learn.ideal')}</strong> Thick enough to coat spoon back without running immediately, fluid enough to spread easily.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.thermal_behavior_in_oven')} icon={<FireIcon className="h-5 w-5" />}>
        <p>{t('learn.inside_oven_sauce_undergoes_rapid_transformation')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.evaporation')}</strong> Water evaporates first, concentrating components.</li>
          <li><strong>{t('learn.flavor_concentration')}</strong> Sugars and acids become pronounced. Balanced cold sauce can become overly sweet or acidic after baking.</li>
          <li><strong>{t('learn.pigment_oxidation')}</strong> Lycopene is relatively stable but can suffer slight oxidation darkening sauce color.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.classic_sauce_combinations')}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.neapolitan')}</strong> Raw tomato purity complemented only by mozzarella creaminess and fresh basil added at end.</li>
          <li><strong>{t('learn.ny_style')}</strong> Cooked sauce seasoned with oregano creates robust flavor base supporting pepperoni fat and cheese quantity.</li>
          <li><strong>{t('learn.high_topping_load')}</strong> For many ingredients (vegetables), denser cooked sauce essential not to add more moisture.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.risks_and_common_care_2')} icon={<SparklesIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.excess_water')}</strong> Main cause of soggy pizza. Always reduce moisture, either by cooking or using denser pulp tomatoes.</li>
          <li><strong>{t('learn.too_sweet')}</strong> Sugars caramelize fast and can burn in high heat, tasting bitter.</li>
          <li><strong>{t('learn.too_acidic')}</strong> Overly acidic sauce dominates flavors. Balance with pinch of sugar/baking soda if needed, or longer cooking.</li>
          <li><strong>{t('learn.overcooking')}</strong> Hours of cooking develops depth but loses freshness. 20-40 mins usually sufficient for pizza.</li>
        </ul>
      </LearnSection>
    </IngredientPageLayout>
  );
};

export default SaucesPage;
