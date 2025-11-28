import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { LearnSection } from './LearnComponents';
import { BeakerIcon, FireIcon, SparklesIcon, CubeIcon } from '@/components/ui/Icons';

const FermentationBiochemistryPage: React.FC = () => {
    return (
        <TechnicalPageLayout title="Fermentation Biochemistry" subtitle="The metabolic engine of bread and pizza">
            <LearnSection title="Introduction: The Living Dough">
                <p>
                    Fermentation is not merely a rising agent; it is a complex biological process where microorganisms (yeast and bacteria) transform simple ingredients into a flavorful, digestible, and aerated structure. Understanding the biochemistry behind this allows a baker to control flavor, texture, and shelf life with precision.
                </p>
            </LearnSection>

            <LearnSection title="Yeast Metabolism: The Primary Engine" icon={<SparklesIcon className="h-5 w-5" />}>
                <p>
                    The primary microorganism in most baking is <em>Saccharomyces cerevisiae</em>. Its metabolism can be broken down into two main pathways depending on oxygen availability, though in dough, it is primarily anaerobic fermentation.
                </p>
                <h3 className="font-bold mt-4 mb-2">1. Respiration (Aerobic)</h3>
                <p className="mb-2">
                    In the very early stages of mixing, when oxygen is present, yeast consumes sugars and oxygen to produce water, CO₂, and energy (ATP). This phase is short-lived in dough as oxygen is depleted.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono text-xs mb-4">
                    C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy
                </div>

                <h3 className="font-bold mt-4 mb-2">2. Fermentation (Anaerobic)</h3>
                <p className="mb-2">
                    Once oxygen is depleted, yeast switches to anaerobic fermentation. This is the key process for bread making.
                </p>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono text-xs mb-4">
                    C₆H₁₂O₆ (Glucose) → 2C₂H₅OH (Ethanol) + 2CO₂ (Carbon Dioxide) + Energy
                </div>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Carbon Dioxide (CO₂):</strong> Trapped by the gluten network, causing the dough to rise (leaven).</li>
                    <li><strong>Ethanol:</strong> Evaporates during baking but contributes to the aroma and dough maturity.</li>
                </ul>
            </LearnSection>

            <LearnSection title="Bacterial Activity: The Flavor Architects" icon={<BeakerIcon className="h-5 w-5" />}>
                <p>
                    While yeast provides the lift, bacteria (specifically Lactic Acid Bacteria or LAB) provide the complexity. This is most prominent in sourdough (levain) but occurs to a lesser degree in all long-fermented doughs.
                </p>
                <h3 className="font-bold mt-4 mb-2">Homofermentative LAB</h3>
                <p className="mb-2">
                    Produce primarily <strong>Lactic Acid</strong>.
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Flavor: Mild, creamy, yogurt-like acidity.</li>
                    <li>Conditions: Favored by wetter doughs (high hydration) and warmer temperatures (25°C–30°C).</li>
                </ul>

                <h3 className="font-bold mt-4 mb-2">Heterofermentative LAB</h3>
                <p className="mb-2">
                    Produce <strong>Lactic Acid</strong>, <strong>Acetic Acid</strong>, CO₂, and ethanol.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Flavor: Sharp, vinegary, punchy acidity.</li>
                    <li>Conditions: Favored by stiffer doughs and cooler temperatures.</li>
                    <li>Function: Acetic acid strengthens gluten structure but can inhibit yeast if levels get too high.</li>
                </ul>
            </LearnSection>

            <LearnSection title="Enzymatic Hydrolysis: Breaking Down the Fuel" icon={<CubeIcon className="h-5 w-5" />}>
                <p>
                    Yeast cannot consume complex starches directly. They rely on enzymes present in the flour (or added via malt) to break starches down into simple sugars.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>Amylase (Alpha & Beta):</strong> The "scissors" of the dough. They cut long starch chains into:
                        <ul className="list-circle pl-5 mt-1 text-sm text-slate-600">
                            <li><em>Dextrins:</em> Larger chunks (food for alpha-amylase).</li>
                            <li><em>Maltose:</em> A disaccharide (two glucose units).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Maltase:</strong> An enzyme produced by the yeast itself to break Maltose down into Glucose, which it can finally consume.
                    </li>
                    <li>
                        <strong>Protease:</strong> Breaks down protein bonds. Over time, this relaxes the gluten network (increasing extensibility). If unchecked (e.g., extremely long fermentation), it can destroy the gluten structure entirely, turning dough into a soupy mess.
                    </li>
                </ul>
            </LearnSection>

            <LearnSection title="The Crabtree Effect" icon={<FireIcon className="h-5 w-5" />}>
                <p>
                    An interesting phenomenon in baker's yeast is the <strong>Crabtree Effect</strong>. Even in the presence of oxygen, if the concentration of sugar (glucose) is high enough, yeast will prefer fermentation over respiration.
                </p>
                <p className="mt-2">
                    This is why very sweet doughs (like Brioche or Panettone) can be slow to rise—the high osmotic pressure stresses the yeast, and the metabolic pathway is forced. Special osmotolerant yeasts are often used for these enriched doughs.
                </p>
            </LearnSection>

            <LearnSection title="Practical Application">
                <p>
                    How do we use this science in the bakery?
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Temperature Control:</strong> We use temperature to steer the population. Warmer = more yeast activity (gas) and homofermentative LAB (creamy). Cooler = slower yeast, more heterofermentative LAB (acetic/sharp).</li>
                    <li><strong>Hydration:</strong> Higher hydration increases enzymatic mobility and favors lactic acid production. Lower hydration slows enzymes and favors acetic acid.</li>
                    <li><strong>Time:</strong> Time is a flavor ingredient. Long, cold fermentation (retarding) slows yeast gas production but allows enzymes (protease/amylase) to continue working, creating more free sugars (better crust color/flavor) and amino acids (savory/umami notes).</li>
                </ul>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default FermentationBiochemistryPage;
