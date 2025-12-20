import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import IngredientPageLayout from './IngredientPageLayout';
import { SparklesIcon, BeakerIcon, FireIcon, CalculatorIcon, FlaskIcon } from '@/components/ui/Icons';
import { LearnSection, LearnProTip, LearnCriticalPoint, LearnHistory } from '../LearnComponents';
import { useTranslation } from '@/i18n';

const OilsPage: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  return (
    <IngredientPageLayout
      title={t('learn.oils_on_pizza')}
      description="Technical analysis of how oils function as aroma vectors, heat conductors, and texture agents in pizza making."
      category={t('learn.ingredients_4')}
      references={[
        "Modernist Pizza (Nathan Myhrvold) – Lipids and heat transfer",
        "The Bread Baker's Apprentice (Peter Reinhart) – Enriched doughs",
        "On Food and Cooking (Harold McGee) – Oil chemistry and smoke points"
      ]}
    >
      <LearnHistory>
        <p>
          Olive oil has been a staple in the Mediterranean diet and bread making for millennia. Ancient Romans baked <em>panis adipatus</em>, a dough enriched with fat, which is an ancestor to modern focaccia.
        </p>
        <p className="mt-2">
          In the evolution of pizza, oil's role shifted from a simple condiment to a structural component. In the mid-20th century, the rise of pan pizzas (Detroit, Sicilian) utilized oil not just for flavor, but as a frying medium for the crust, creating a distinct textural category separate from the lean doughs of Naples.
        </p>
      </LearnHistory>

      <LearnSection title={t('learn.introduction_oils_as_flavor_vectors')}>
        <p>
          Oils play multiple roles beyond adding fat. They act as aroma vectors, flavor enhancers, texture agents, and crispness modulators. Chemically, lipids excel at absorbing and transporting volatile aromatic compounds (fat-soluble) from ingredients like garlic and herbs.
        </p>
        <p className="mt-4">
          Furthermore, fat conducts heat differently than water. While water evaporates and cools the dough (evaporative cooling), oil does not evaporate at baking temperatures. Instead, it transfers heat directly to the crust, promoting frying and crisping rather than steaming.
        </p>
      </LearnSection>

      <LearnSection title="Extra Virgin Olive Oil (EVOO)" icon={<BeakerIcon className="h-5 w-5" />}>
        <p>
          High-quality EVOO is rich in polyphenols, the aromatic volatiles responsible for its fruity, spicy, and bitter notes. These compounds are delicate and degrade rapidly under intense oven heat (above 200°C/400°F).
        </p>
        <p className="mt-4">
          For this reason, the best technical application of premium EVOO is <strong>post-oven</strong>. Drizzling it on a hot pizza releases the fresh aromas immediately without burning the delicate polyphenols.
        </p>
      </LearnSection>

      <LearnProTip>
        For high-temperature ovens (Neapolitan style, {'>'}400°C), avoid adding oil to the dough if you want classic leopard spotting. Oil encapsulates starch granules and inhibits the micro-blistering process. Use oil in the dough only for styles baked below 350°C (660°F) or for pan pizzas.
      </LearnProTip>

      <LearnSection title={t('learn.neutral_oils__pan_styles')}>
        <p>
          While Italian tradition focuses on olive oil, American styles like Detroit and Sicilian rely on neutral oils (corn, canola, peanut) or refined olive oil for the pan.
        </p>
        <p className="mt-4">
          The goal here is function, not flavor. The oil layer between the dough and the metal pan reaches temperatures high enough to practically "fry" the bottom of the crust. This creates the characteristic crunch and supports the formation of a "frico" (caramelized cheese edge) where cheese meets the hot oiled pan.
        </p>
      </LearnSection>

      <LearnCriticalPoint>
        Never use low-smoke point oils (like unrefined flaxseed or butter) for greasing pans in high-heat baking. They will burn before the pizza is done, creating acrid, bitter flavors and potentially toxic compounds. Stick to refined oils or high-quality olive oil for pan lubrication.
      </LearnCriticalPoint>

      <LearnSection title={t('learn.thermal_behavior')} icon={<FireIcon className="h-5 w-5" />}>
        <p>
          Oil has a lower specific heat capacity than water but does not boil off. This means it can reach temperatures far exceeding 100°C (212°F).
        </p>
        <p className="mt-4">
          However, excess oil on the surface of a pizza can insulate the dough from radiant heat, potentially leading to less browning on the top cornicione if not balanced correctly. Conversely, oil <em>in</em> the dough (enrichment) tenderizes the crumb by coating gluten strands, preventing them from bonding too strongly, resulting in a softer bite.
        </p>
      </LearnSection>

      <LearnSection title={t('learn.strategic_application')} icon={<SparklesIcon className="h-5 w-5" />}>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><strong>{t('learn.postoven_drizzle')}</strong> Best for maximizing aroma of expensive EVOO.</li>
          <li><strong>{t('learn.greased_pan')}</strong> Essential for Detroit/Sicilian styles to conduct heat and prevent sticking.</li>
          <li><strong>{t('learn.dough_enrichment')}</strong> Adding 1-3% oil to NY Style dough helps soften the crumb and improves browning in cooler home ovens (250°C-300°C).</li>
        </ul>
      </LearnSection>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <button
          onClick={() => navigate('calculator')}
          className="group block rounded-xl border border-slate-200 p-6 hover:border-dlp-brand hover:shadow-md transition-all text-left w-full"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-lime-100 p-2 text-lime-700 group-hover:bg-dlp-brand group-hover:text-white transition-colors">
              <CalculatorIcon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">{t('learn.adjust_hydration')}</h3>
          </div>
          <p className="text-sm text-slate-600">
            Oil counts as liquid but doesn't hydrate gluten. Use the Calculator to balance your formula when adding fats.
          </p>
        </button>

        <button
          onClick={() => navigate('mylab')}
          className="group block rounded-xl border border-slate-200 p-6 hover:border-dlp-brand hover:shadow-md transition-all text-left w-full"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-lime-100 p-2 text-lime-700 group-hover:bg-dlp-brand group-hover:text-white transition-colors">
              <FlaskIcon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">{t('learn.log_an_experiment')}</h3>
          </div>
          <p className="text-sm text-slate-600">
            Test different oil percentages (e.g., 0% vs 3%) and record the texture differences in MyLab.
          </p>
        </button>
      </div>

    </IngredientPageLayout>
  );
};

export default OilsPage;


