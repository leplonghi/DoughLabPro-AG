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

const VegetablesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IngredientPageLayout
      title={t('learn.vegetables_on_pizza')}
      description="Technical guide to handling vegetables: moisture control, precooking, and flavor maximization."
      category={t('learn.ingredients_8')}
    >
      <LearnSection title={t('learn.introduction_the_moisture_challenge')}>
        <p>
          Vegetables bring freshness, texture, and flavor, but their high water content (&gt;90% for many) is the biggest technical challenge in pizza making. When exposed to oven heat, cell walls rupture, releasing water that can pool on the pizza, leading to a soggy crust and the dreaded t('learn.gum_line_445').
        </p>
      </LearnSection>

      <LearnSection title={t('learn.precooking_techniques')} icon={<FireIcon className="h-5 w-5" />}>
        <p>
          To avoid a watery pizza, most vegetables require some form of pre-treatment to reduce moisture content before baking.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.roasting')}</strong> Essential for high-moisture vegetables like peppers, eggplant, and zucchini. It evaporates water, concentrates flavor, and caramelizes sugars.</li>
          <li><strong>{t('learn.sautéing')}</strong> Ideal for mushrooms and spinach. High heat in a pan quickly drives off moisture and develops savory browning notes (Maillard reaction).</li>
          <li><strong>Salting (Degorging):</strong> Sprinkling salt on sliced zucchini or eggplant draws out moisture via osmosis. After 20-30 mins, pat dry before using.</li>
          <li><strong>{t('learn.blanching')}</strong> Suitable for harder vegetables like broccoli or asparagus to soften texture before the quick bake on a pizza.</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.raw_application_when_it_works')} icon={<SparklesIcon className="h-5 w-5" />}>
        <p>
          Some vegetables can or should be used raw, depending on the cut and baking time.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>{t('learn.paperthin_slices')}</strong> Onions, peppers, or mushrooms sliced translucently thin will cook through and release their moisture as steam quickly enough to not soak the dough.</li>
          <li><strong>Leafy greens (Arugula/Basil):</strong>{t('learn.should_generally_be_applied')}<strong>post-oven</strong> to preserve their delicate texture and volatile aromatic compounds. Spinach can go on raw if under cheese, which protects it from burning.</li>
          <li><strong>{t('learn.cherry_tomatoes')}</strong> Can be used whole or halved. If halved, cut side up to evaporate moisture, or down to release juice into the sauce (risky but flavorful).</li>
        </ul>
      </LearnSection>

      <LearnSection title={t('learn.specific_ingredient_notes')} icon={<BeakerIcon className="h-5 w-5" />}>
        <h4>a) Mushrooms</h4>
        <p>Sponges for oil and water. Sautéing with herbs and garlic is the gold standard for pizza, creating a meaty, umami-rich topping that won't leak.</p>

        <h4>b) Onions</h4>
        <p>Raw onions add crunch and pungency. Caramelized onions add sweetness and softness. Red onions offer a nice visual contrast and slightly sweeter profile.</p>

        <h4>c) Olives & Capers</h4>
        <p>Cured ingredients are salt bombs. Rinse capers to remove excess brine. Ensure olives are pitted and patted dry to avoid briny puddles.</p>
      </LearnSection>

      <LearnSection title={t('learn.technical_references_2')} icon={<BookOpenIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 space-y-2">
          <li>{t('learn.modernist_pizza__vegetable_prep_for_baking')}</li>
          <li>{t('learn.serious_eats__the_pizza_lab')}</li>
          <li>t('learn.on_food_and_cooking') by Harold McGee</li>
        </ul>
      </LearnSection>
    </IngredientPageLayout>
  );
};

export default VegetablesPage;
