
import React from 'react';
import IngredientPageLayout from './IngredientPageLayout';
import { BookOpenIcon, SparklesIcon, BeakerIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from '../LearnComponents';
import { useTranslation } from '@/i18n';

const Section: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="mt-8 first:mt-0">
    <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-3">
      {icon}
      {title}
    </h3>
    <div className="prose-sm max-w-none text-slate-700 leading-relaxed">
      {children}
    </div>
  </div>
);

const ReadyToppingsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IngredientPageLayout
      title={t('learn.readytouse_toppings_guide')}
      description="Technical analysis of pre-prepared ingredients to optimize time and ensure quality."
      category={t('learn.ingredients_6')}
    >
      <LearnSection title={t('learn.introduction_quality_speed')}>
        <p>
          t('learn.ready_toppings_1') are ingredients processed industrially or artisanally before your kitchen. They offer convenience but require technical evaluation to ensure quality. Includes:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.ready_sauces')}</strong> Passatas, seasoned pizza sauces.</li>
          <li><strong>{t('learn.precooked_meats')}</strong> Shredded chicken, bacon cubes, cooked sausage.</li>
          <li><strong>{t('learn.prepared_vegetables')}</strong> Roasted peppers, caramelized onions, sautéed mushrooms.</li>
          <li><strong>Preserves/Premium:</strong> Artichokes, sun-dried tomatoes, anchovies, olives.</li>
        </ul>
        <p>
          Evaluate based on: <strong>texture, moisture, acidity, salinity, and flavor concentration</strong>.
        </p>
      </LearnSection>

      <LearnSection title={t('learn.ready_sauces')} icon={<BeakerIcon className="h-5 w-5" />}>
        <p>
          Convenient but inspect properties.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.moisture')}</strong> Many have high water content. Liquid sauce causes "gum line". <strong>{t('learn.tip')}</strong> If it runs easily off spoon, reduce on low heat 10-15 min.</li>
          <li><strong>{t('learn.stabilizers')}</strong> Modified starch/gums give artificial viscosity. Can result in gelatinous texture.</li>
          <li><strong>Acidity/Flavor:</strong> Often contain sugar balancing poor tomato acidity. Taste and adjust salt/acid.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.precooked_meats')}>
        <p>
          Behave predictably in oven.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.less_water_release')}</strong> Main advantage. Won't release moisture onto dough.</li>
          <li><strong>{t('learn.concentrated_flavor')}</strong> Initial cooking concentrated flavors via Maillard.</li>
          <li><strong>{t('learn.rendered_fat')}</strong> Bacon fat already rendered. Reduced risk of excessive oil-out.</li>
          <li><strong>{t('learn.ideal_for_home_ovens')}</strong> Essential for food safety in short bake times.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.prepared_vegetables')}>
        <p>
          Raw veg is mostly water. Pre-prep controls moisture.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Roasted/Grilled:</strong> Removes water, breaks cellulose, caramelizes sugars. Deep flavor and soft texture.</li>
          <li><strong>{t('learn.pickled')}</strong> Pickles/peppers bring sharp acidity cutting fat. Use moderately.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.high_quality_preserves')} icon={<SparklesIcon className="h-5 w-5" />}>
        <p>
          Professional shortcut to intense flavor.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.artichoke')}</strong> Often in oil/brine. Drain well.</li>
          <li><strong>{t('learn.sundried_tomato')}</strong> Dehydration concentrates sugar/umami. Rehydrate in warm water for softness.</li>
          <li><strong>{t('learn.roasted_pepper')}</strong> Jarred, peeled, smoky sweet. Great time saver.</li>
          <li><strong>{t('learn.anchovies')}</strong> Salt cured umami bomb. Use sparingly.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.technical_risks__mitigation')} icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.excess_topping')}</strong> Too many cold ingredients reduce surface temp drastically, impairing oven spring.</li>
          <li><strong>{t('learn.oily_ingredients')}</strong> Drain oil preserves well to avoid greasy pizza.</li>
          <li><strong>{t('learn.watery_ingredients')}</strong> Dry olives/brined items with paper towel. Moisture is enemy of crispness.</li>
        </ul>
      </LearnSection>
    </IngredientPageLayout>
  );
};

export default ReadyToppingsPage;
