import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import IngredientPageLayout from './ingredients/IngredientPageLayout';
import { BeakerIcon, CalculatorIcon, FlaskIcon, FireIcon, ScaleIcon } from '@/components/ui/Icons';
import { LearnSection, LearnProTip, LearnCriticalPoint, LearnHistory } from './LearnComponents';

const WaterPage: React.FC = () => {
    const { navigate } = useRouter();

    return (
        <IngredientPageLayout
            title="Water: Hardness, pH & Chlorine"
            description="The invisible ingredient that makes up 40% of your dough mass."
            category="Ingredients"
            references={[
                "Modernist Bread (Nathan Myhrvold)",
                "Water Quality & Baking (King Arthur Baking)",
                "The Baker's Manual (Joseph Amendola)",
                "Water in Foods (P. Fito & A. Chiralt)",
                "Handbook of Food Science (Y.H. Hui)"
            ]}
        >
            <LearnHistory>
                <p>
                    Historically, bakers had to rely on whatever local water source was available, which heavily influenced regional bread styles. The hard, mineral-rich water of New York is often cited as a key factor in the texture of its famous bagels and pizza crusts, while softer water in other regions produced different results.
                </p>
                <p className="mt-2">
                    Before modern sanitation, water was often a source of contamination. The fermentation process and the baking heat were crucial for making grain-based foods safe to eat. Today, while safety isn't an issue, the chemical composition of tap water (chlorine, chloramines) has become a new challenge for the modern baker.
                </p>
                <p className="mt-2">
                    DoughLabPro encourages you to treat water as an ingredient, not just a utility. Understanding its mineral content and temperature is the first step towards consistent, professional-quality dough.
                </p>
            </LearnHistory>

            <LearnSection title="Water Hardness (Mineral Content)" icon={<ScaleIcon className="h-5 w-5" />}>
                <p>
                    Hardness refers to calcium and magnesium ions.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Too Soft:</strong> Dough is sticky, slack, and gluten is weak. (Minerals help cross-link gluten).</li>
                    <li><strong>Too Hard:</strong> Gluten is too tight/tough. Fermentation is slowed.</li>
                    <li><strong>Ideal:</strong> Moderately hard (100-150 ppm). Most bottled "Spring Water" is perfect.</li>
                </ul>
            </LearnSection>

            <LearnSection title="pH Levels" icon={<BeakerIcon className="h-5 w-5" />}>
                <p>
                    Yeast prefers a slightly acidic environment (pH 5-6).
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Alkaline Water ({'>'}7.5):</strong> Slows fermentation and can degrade gluten.</li>
                    <li><strong>Acidic Water ({'<'}5):</strong> Can make dough too tight initially.</li>
                    <li><strong>Tap Water:</strong> Usually neutral to slightly alkaline.</li>
                </ul>
            </LearnSection>

            <LearnSection title="Chlorine & Chloramine" icon={<FireIcon className="h-5 w-5" />}>
                <p>
                    Municipal water is treated to kill bacteria. Yeast is a fungus, but chlorine can damage it.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Chlorine:</strong> Evaporates if water sits out for 24h.</li>
                    <li><strong>Chloramine:</strong> Does NOT evaporate. Must be filtered (carbon filter) or neutralized (Campden tablet).</li>
                </ul>
                <p className="mt-2">
                    High chlorine levels can kill your sourdough starter or inhibit commercial yeast.
                </p>
            </LearnSection>

            <LearnProTip>
                Temperature Control. Water is the easiest variable to change to control final dough temperature (FDT). Use ice water in summer and warm water in winter to hit your target 24°C dough temp.
            </LearnProTip>

            <LearnCriticalPoint>
                Reverse Osmosis Warning. RO water is completely stripped of minerals. It is "too pure." If using RO water, you may need to add a pinch of mineral salt or mix it with spring water to restore the ions needed for gluten structure.
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
                        <h3 className="font-bold text-slate-900">Calculate Water Temp</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                        Use the Calculator to determine the exact water temperature needed to hit your Desired Dough Temperature (DDT).
                    </p>
                </button>

                <button
                    onClick={() => navigate('mylab')}
                    className="group block rounded-xl border border-slate-200 p-6 hover:border-lime-500 hover:shadow-md transition-all text-left w-full"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="rounded-lg bg-lime-100 p-2 text-lime-700 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                            <FlaskIcon className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-slate-900">Log Water Source</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                        Experimenting with different bottled waters? Log the brand and mineral content in MyLab notes.
                    </p>
                </button>
            </div>

        </IngredientPageLayout>
    );
};

export default WaterPage;
