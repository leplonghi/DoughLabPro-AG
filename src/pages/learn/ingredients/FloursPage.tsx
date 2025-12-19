import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import IngredientPageLayout from './IngredientPageLayout';
import { ScaleIcon, ChartBarIcon, BeakerIcon, CalculatorIcon, FlaskIcon } from '@/components/ui/Icons';
import { LearnSection, LearnProTip, LearnCriticalPoint, LearnHistory } from '../LearnComponents';
import { useTranslation } from '@/i18n';

const FloursPage: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useRouter();

  return (
    <IngredientPageLayout
      title="Flours: Strength (W), P/L & Ash Content"
      description="Decoding the technical specifications that determine dough performance."
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
          For thousands of years, flour was stone-ground, producing a coarse meal that included the germ and bran. This flour was nutritious but spoiled quickly and produced dense loaves. The invention of the steel roller mill in Hungary in the 1870s revolutionized milling, allowing for the separation of the endosperm to create pure white, shelf-stable flour.
        </p>
        <p className="mt-2">
          This innovation led to the modern classification systems we use today, like the Italian '00' scale based on ash content (refinement) and the French 'T' system. However, it also removed much of the flavor, leading to the recent revival of stone-ground and high-extraction flours in artisan baking.
        </p>
        <p className="mt-2">
          Understanding these historical milling styles helps you choose the right flour in DoughLabPro—whether you want the pure strength of a modern 00 for Neapolitan pizza or the complex flavor of a rustic Type 1 for a country loaf.
        </p>
      </LearnHistory>

      <LearnSection title="The 'W' Index (Strength)" icon={<ScaleIcon className="h-5 w-5" />}>
        <p>
          The Chopin Alveograph measures the energy required to blow a bubble of dough until it bursts. This energy is the "W" value.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Weak (W160-200):</strong> Cookies, cakes. Cannot hold gas.</li>
          <li><strong>Medium (W220-260):</strong> Direct doughs, 4-8h fermentation. Standard pizza flour.</li>
          <li><strong>Strong (W280-320):</strong> 24-48h fermentation. High hydration. Neapolitan/NY Style.</li>
          <li><strong>Manitoba (W350+):</strong> Reinforcement flour. Extreme fermentation (72h+), Panettone.</li>
        </ul>
      </LearnSection>

      <LearnSection title="The P/L Ratio (Balance)" icon={<ChartBarIcon className="h-5 w-5" />}>
        <p>
          P measures Tenacity (resistance to stretching). L measures Extensibility (length of stretch).
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>P/L {'>'} 0.7:</strong> Buckish, tough dough. Hard to open. Springs back.</li>
          <li><strong>P/L {'<'} 0.4:</strong> Slack, sticky dough. Tears easily. Flattens out.</li>
          <li><strong>Ideal (0.5 - 0.6):</strong> Balanced. Easy to open but holds shape.</li>
        </ul>
      </LearnSection>

      <LearnSection title="Ash Content (Refinement)" icon={<BeakerIcon className="h-5 w-5" />}>
        <p>
          Ash is the mineral residue left after burning the flour. It indicates how much bran is present.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Type 00 (Italy):</strong> ~0.55% ash. Very pure endosperm. Soft, white crumb.</li>
          <li><strong>Type 0/1/2:</strong> Increasing bran content. More flavor, more enzyme activity, but weaker gluten structure (bran cuts gluten).</li>
        </ul>
      </LearnSection>

      <LearnProTip>
        Don't trust the protein percentage on the bag. A 13% protein Whole Wheat flour is WEAKER than a 12% protein Type 00 flour because the bran cuts the gluten network. Always look for the W value or technical sheet, not just the nutritional label.
      </LearnProTip>

      <LearnCriticalPoint>
        The Falling Number. This measures enzymatic activity (amylase). Low falling number ({'<'}250) means high enzyme activity = sticky, gummy dough. High falling number ({'>'}400) means low activity = dry, pale dough. Most professional flours are corrected to ~300.
      </LearnCriticalPoint>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <button
          onClick={() => navigate('mylab/farinhas')}
          className="group block rounded-xl border border-slate-200 p-6 hover:border-dlp-brand hover:shadow-md transition-all text-left w-full"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-lime-100 p-2 text-lime-700 group-hover:bg-dlp-brand group-hover:text-white transition-colors">
              <FlaskIcon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">{t('learn.manage_my_flours')}</h3>
          </div>
          <p className="text-sm text-slate-600">
            Save your specific flour brands and their W values in MyLab to use them in your recipes.
          </p>
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
          <p className="text-sm text-slate-600">
            Stronger flours (High W) need more water. Use the Calculator to adjust hydration based on your flour choice.
          </p>
        </button>
      </div>

    </IngredientPageLayout>
  );
};

export default FloursPage;


