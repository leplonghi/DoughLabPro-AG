import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import IngredientPageLayout from './IngredientPageLayout';
import { BeakerIcon, CalculatorIcon, FlaskIcon, FireIcon, ScaleIcon, FermentationIcon } from '@/components/ui/Icons';
import { LearnSection, LearnProTip, LearnCriticalPoint, LearnHistory } from '../LearnComponents';

const YeastsPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <IngredientPageLayout
      title="Yeasts: Commercial vs. Wild"
      description="Understanding the biological engine of your dough."
      category="Ingredients"
      references={[
        "The Art of Fermentation (Sandor Katz)",
        "Modernist Bread (Nathan Myhrvold)",
        "Yeast: The Practical Guide (Chris White)",
        "Bread Science (Emily Buehler)",
        "The Bread Builders (Wing & Scott)",
        "Sourdough (Sarah Owens)"
      ]}
    >
      <LearnHistory>
        <p>
          For most of human history, all bread was sourdough. Bakers relied on 'starters' passed down through generations or captured from the air. It wasn't until the 1860s, thanks to Louis Pasteur, that we identified yeast as a living organism.
        </p>
        <p className="mt-2">
          The Fleischmann brothers introduced the first commercial compressed yeast in America in 1868, revolutionizing baking by offering consistent, predictable results without the daily maintenance of a starter. Instant yeast followed in the 1970s, further simplifying the process.
        </p>
        <p className="mt-2">
          DoughLabPro allows you to switch seamlessly between these historical methods—calculating precise amounts for commercial yeast or managing the complex ratios of a wild sourdough culture.
        </p>
      </LearnHistory>

      <LearnSection title="Commercial Yeast Types" icon={<BeakerIcon className="h-5 w-5" />}>
        <p>
          <em>Saccharomyces cerevisiae</em> is the single species used in all commercial baking.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Fresh Yeast (CY):</strong> 70% water. Highly active. Short shelf life. The gold standard for aroma.</li>
          <li><strong>Active Dry (ADY):</strong> Granules coated in dead yeast cells. Must be proofed in warm water. Slower start.</li>
          <li><strong>Instant Dry (IDY):</strong> Porous rods. Dissolves instantly. Potent. 3x stronger than Fresh by weight.</li>
        </ul>
      </LearnSection>

      <LearnSection title="Conversion Rates" icon={<ScaleIcon className="h-5 w-5" />}>
        <p>
          Because water content varies, you must convert when swapping types:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>1g Instant (IDY)</strong> = 1.2g Active Dry (ADY) = 3g Fresh (CY).</li>
        </ul>
        <p className="mt-2">
          Always weigh yeast with a precision scale (0.01g). Teaspoons are wildly inaccurate.
        </p>
      </LearnSection>

      <LearnSection title="Wild Yeast (Sourdough/Levain)" icon={<FermentationIcon className="h-5 w-5" />}>
        <p>
          A symbiotic culture of wild yeast (often <em>Candida milleri</em> or <em>S. exiguus</em>) and Lactic Acid Bacteria (<em>Lactobacillus sanfranciscensis</em>).
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Slower fermentation:</strong> Requires hours, not minutes.</li>
          <li><strong>Complex flavor:</strong> Acidity from bacteria.</li>
          <li><strong>Stronger dough structure:</strong> Acidity strengthens gluten.</li>
          <li><strong>Longer shelf life:</strong> Acidity inhibits mold.</li>
        </ul>
      </LearnSection>

      <LearnProTip>
        Yeast never dies in the fridge. It just sleeps. You can keep fresh yeast for weeks if wrapped tightly, or freeze it (though it loses ~10% potency). Dry yeast keeps for months in the freezer.
      </LearnProTip>

      <LearnCriticalPoint>
        Thermal Death Point. Yeast begins to die at 50°C and is completely dead at 60°C. Never dissolve yeast in hot water. Use lukewarm (30-35°C) or cold water.
      </LearnCriticalPoint>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <button
          onClick={() => navigate('calculator')}
          className="group block rounded-xl border border-slate-200 p-6 hover:border-lime-500 hover:shadow-md transition-all text-left w-full"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-lime-100 p-2 text-lime-700 group-hover:bg-lime-500 group-hover:text-white transition-colors">
              <CalculatorIcon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">Calculate Yeast</h3>
          </div>
          <p className="text-sm text-slate-600">
            Switch between Fresh, ADY, IDY, or Sourdough in the Calculator settings to get the exact amount for your recipe.
          </p>
        </button>

        <button
          onClick={() => navigate('mylab/levain')}
          className="group block rounded-xl border border-slate-200 p-6 hover:border-lime-500 hover:shadow-md transition-all text-left w-full"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="rounded-lg bg-lime-100 p-2 text-lime-700 group-hover:bg-lime-500 group-hover:text-white transition-colors">
              <FlaskIcon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-900">Manage My Levain</h3>
          </div>
          <p className="text-sm text-slate-600">
            Track your sourdough starter's feeding schedule, ratios, and activity in the Levain Pet feature.
          </p>
        </button>
      </div>

    </IngredientPageLayout>
  );
};

export default YeastsPage;
