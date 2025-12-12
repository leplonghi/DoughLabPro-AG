import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { LearnSection } from './LearnComponents';
import { BeakerIcon, FireIcon, SparklesIcon, CubeIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

const FermentationBiochemistryPage: React.FC = () => {
  const { t } = useTranslation();
    return (
        <TechnicalPageLayout title={t('learn.fermentation_biochemistry')} subtitle={t('learn.the_metabolic_engine_of_bread_and_pizza')}>
            <LearnSection title={t('learn.introduction_the_living_dough')}>
                <p>
                    Fermentation is not merely a rising agent; it is a complex biological process where microorganisms (yeast and bacteria) transform simple ingredients into a flavorful, digestible, and aerated structure. Understanding the biochemistry behind this allows a baker to control flavor, texture, and shelf life with precision.
                </p>
            </LearnSection>

            <LearnSection title={t('learn.yeast_metabolism_the_primary_engine')} icon={<SparklesIcon className="h-5 w-5" />}>
                <p>{t('learn.the_primary_microorganism_in_most_baking_is')}<em>{t('learn.saccharomyces_cerevisiae_2')}</em>. Its metabolism can be broken down into two main pathways depending on oxygen availability, though in dough, it is primarily anaerobic fermentation.
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
                    <li><strong>{t('learn.ethanol')}</strong> Evaporates during baking but contributes to the aroma and dough maturity.</li>
                </ul>
            </LearnSection>

            <LearnSection title={t('learn.bacterial_activity_the_flavor_architects')} icon={<BeakerIcon className="h-5 w-5" />}>
                <p>
                    While yeast provides the lift, bacteria (specifically Lactic Acid Bacteria or LAB) provide the complexity. This is most prominent in sourdough (levain) but occurs to a lesser degree in all long-fermented doughs.
                </p>
                <h3 className="font-bold mt-4 mb-2">{t('learn.homofermentative_lab')}</h3>
                <p className="mb-2">{t('learn.produce_primarily')}<strong>{t('learn.lactic_acid')}</strong>.
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>{t('learn.flavor_mild_creamy_yogurtlike_acidity')}</li>
                    <li>Conditions: Favored by wetter doughs (high hydration) and warmer temperatures (25°C–30°C).</li>
                </ul>

                <h3 className="font-bold mt-4 mb-2">{t('learn.heterofermentative_lab')}</h3>
                <p className="mb-2">{t('learn.produce')}<strong>{t('learn.lactic_acid')}</strong>, <strong>{t('learn.acetic_acid')}</strong>, CO₂, and ethanol.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>{t('learn.flavor_sharp_vinegary_punchy_acidity')}</li>
                    <li>{t('learn.conditions_favored_by_stiffer_doughs_and_cooler_te')}</li>
                    <li>{t('learn.function_acetic_acid_strengthens_gluten_structure_')}</li>
                </ul>
            </LearnSection>

            <LearnSection title={t('learn.enzymatic_hydrolysis_breaking_down_the_fuel')} icon={<CubeIcon className="h-5 w-5" />}>
                <p>
                    Yeast cannot consume complex starches directly. They rely on enzymes present in the flour (or added via malt) to break starches down into simple sugars.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>
                        <strong>Amylase (Alpha & Beta):</strong> The "scissors" of the dough. They cut long starch chains into:
                        <ul className="list-circle pl-5 mt-1 text-sm text-slate-600">
                            <li><em>{t('learn.dextrins')}</em> Larger chunks (food for alpha-amylase).</li>
                            <li><em>{t('learn.maltose')}</em> A disaccharide (two glucose units).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>{t('learn.maltase')}</strong> An enzyme produced by the yeast itself to break Maltose down into Glucose, which it can finally consume.
                    </li>
                    <li>
                        <strong>{t('learn.protease')}</strong> Breaks down protein bonds. Over time, this relaxes the gluten network (increasing extensibility). If unchecked (e.g., extremely long fermentation), it can destroy the gluten structure entirely, turning dough into a soupy mess.
                    </li>
                </ul>
            </LearnSection>

            <LearnSection title={t('learn.the_crabtree_effect')} icon={<FireIcon className="h-5 w-5" />}>
                <p>
                    An interesting phenomenon in baker's yeast is the <strong>{t('learn.crabtree_effect')}</strong>. Even in the presence of oxygen, if the concentration of sugar (glucose) is high enough, yeast will prefer fermentation over respiration.
                </p>
                <p className="mt-2">
                    This is why very sweet doughs (like Brioche or Panettone) can be slow to rise—the high osmotic pressure stresses the yeast, and the metabolic pathway is forced. Special osmotolerant yeasts are often used for these enriched doughs.
                </p>
            </LearnSection>

            <LearnSection title={t('learn.practical_application')}>
                <p>
                    How do we use this science in the bakery?
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>{t('learn.temperature_control')}</strong> We use temperature to steer the population. Warmer = more yeast activity (gas) and homofermentative LAB (creamy). Cooler = slower yeast, more heterofermentative LAB (acetic/sharp).</li>
                    <li><strong>{t('learn.hydration')}</strong> Higher hydration increases enzymatic mobility and favors lactic acid production. Lower hydration slows enzymes and favors acetic acid.</li>
                    <li><strong>{t('learn.time')}</strong> Time is a flavor ingredient. Long, cold fermentation (retarding) slows yeast gas production but allows enzymes (protease/amylase) to continue working, creating more free sugars (better crust color/flavor) and amino acids (savory/umami notes).</li>
                </ul>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default FermentationBiochemistryPage;
