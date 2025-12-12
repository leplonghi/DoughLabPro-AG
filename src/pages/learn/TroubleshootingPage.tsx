import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { QuestionMarkCircleIcon, BookOpenIcon, WrenchScrewdriverIcon, BeakerIcon, LightBulbIcon } from '@/components/ui/Icons';
import { LearnCollapseSection as LearnSection } from './LearnComponents';
import { useTranslation } from '@/i18n';

// Local Section component for structuring content
const TroubleshootingPage: React.FC = () => {
  const { t } = useTranslation();
    return (
        <TechnicalPageLayout
            title={t('learn.diagnostics_common_pizza_problems')}
            subtitle={t('learn.a_scientific_guide_to_identifying_and_correcting_c')}
            showReferencesSection
        >
            <LearnSection title="1. Introduction: Pizza as a Complex System">
                <p>
                    Pizza is a complex system where multiple factors — water, flour, fermentation, heat, and ingredients — interact simultaneously. A small imbalance in any of these areas can lead to unexpected results. Understanding root causes, based on science, is the path to consistency.
                </p>
            </LearnSection>

            <LearnSection title="2. Problem: Gum Line (Raw dough under sauce)" icon={<BeakerIcon className="h-5 w-5" />}>
                <h4>{t('learn.real_causes')}</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.excess_moisture')}</strong> Too liquid sauce, wet cheese, or raw vegetables release steam that "cooks" the dough instead of baking it.</li>
                    <li><strong>{t('learn.cold_ingredients')}</strong> Very cold sauce or dough causes condensation at the interface, creating a wet layer.</li>
                    <li><strong>{t('learn.underfermented_dough')}</strong> Lacks a developed alveoli structure to allow steam to escape.</li>
                    <li><strong>Weak Oven/Floor:</strong> Lack of conduction heat at the base fails to dry the dough quickly.</li>
                    <li><strong>{t('learn.excess_toppings')}</strong> A thick layer of toppings acts as thermal insulation, blocking heat.</li>
                    <li><strong>{t('learn.flour_too_weak')}</strong> Gluten network may collapse under weight, compacting dough and preventing baking.</li>
                </ul>
            </LearnSection>

            <LearnSection title="3. Problem: Snapback (Dough shrinking when stretching)" icon={<LightBulbIcon className="h-5 w-5" />}>
                <h4>{t('learn.scientific_explanation')}</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.tensioned_gluten')}</strong> The gluten network, especially glutenin protein, is contracted and behaving like a rubber band.</li>
                    <li><strong>{t('learn.insufficient_rest')}</strong> Dough hasn't had enough time to relax after balling (handling). Rest allows gluten bonds to readjust.</li>
                    <li><strong>Flour Too Strong (High P/L):</strong> Flours with high tenacity (P) are naturally more elastic and prone to snapback.</li>
                    <li><strong>{t('learn.low_dough_temperature')}</strong> Cold stiffens the gluten network, making it less extensible and more elastic.</li>
                </ul>
            </LearnSection>

            <LearnSection title="4. Problem: Burnt Base">
                <h4>{t('learn.real_causes_2')}</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.floor_too_hot')}</strong> Excess conduction heat, common when placing pizza on an area recently exposed to embers in wood ovens.</li>
                    <li><strong>{t('learn.highly_conductive_surface')}</strong> A baking steel transfers heat much faster than stone. In extremely high-temp ovens, steel can burn the base before the top cooks.</li>
                    <li><strong>{t('learn.excess_flour_on_bench')}</strong> Loose flour on pizza base burns rapidly at high temperatures, creating bitter taste and soot.</li>
                </ul>
            </LearnSection>

            <LearnSection title="5. Problem: Soggy Pizza">
                <h4>{t('learn.real_causes_3')}</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.vegetables_releasing_water')}</strong> Ingredients like mushrooms, zucchini, and spinach, when raw, release large amounts of moisture.</li>
                    <li><strong>{t('learn.sauce_too_liquid')}</strong> Excess water in sauce doesn't evaporate in time and is absorbed by dough.</li>
                    <li><strong>{t('learn.cheese_too_wet')}</strong> Fresh mozzarella (fior di latte, buffalo) must be well drained before use.</li>
                    <li><strong>{t('learn.excess_toppings_2')}</strong> Too many cold, wet ingredients overload the oven's capacity to evaporate moisture.</li>
                    <li><strong>{t('learn.cold_oven_floor')}</strong> Not enough conduction heat to seal and dry the dough base.</li>
                </ul>
            </LearnSection>

            <LearnSection title="6. Problem: Pale Pizza">
                <h4>{t('learn.causes')}</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.lack_of_radiant_heat')}</strong> Oven ceiling isn't hot enough. In home ovens, bottom heat is often stronger.</li>
                    <li><strong>{t('learn.wet_surface')}</strong> Oven energy is spent evaporating water, preventing surface from reaching temperatures needed for Maillard/caramelization reactions.</li>
                    <li><strong>{t('learn.little_available_sugar')}</strong> Can be caused by short fermentation (didn't break down enough starch) or over-fermentation (yeast consumed all sugars).</li>
                </ul>
            </LearnSection>

            <LearnSection title="7. Problem: Dense Dough">
                <h4>{t('learn.causes_2')}</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Insufficient Fermentation (Under-proofed):</strong> Yeast didn't produce enough CO₂ to inflate gluten network.</li>
                    <li><strong>{t('learn.weak_or_poorly_hydrated_flour')}</strong> Gluten network didn't form correctly to retain gas.</li>
                    <li><strong>{t('learn.inadequate_dough_temperature')}</strong> Too cold inhibits yeast; too hot can lead to structure collapse.</li>
                    <li><strong>Over-handling (Degassing):</strong> Stretching dough too forcefully or using a rolling pin can expel all accumulated gas.</li>
                </ul>
            </LearnSection>

            <LearnSection title="8. Problem: Edge Bursts / Irregular">
                <h4>{t('learn.causes_3')}</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.uneven_gas_accumulation')}</strong> Large gas bubbles trapped in dough expanding rapidly in oven.</li>
                    <li><strong>{t('learn.inconsistent_stretching')}</strong> Leaving parts of the edge thinner creates weak points that burst.</li>
                    <li><strong>{t('learn.very_advanced_fermentation')}</strong> Gluten network is at its elasticity limit and breaks easily with gas expansion in oven.</li>
                </ul>
            </LearnSection>

            <LearnSection title="9. Technical References" icon={<BookOpenIcon className="h-5 w-5" />}>
                <ul className="list-disc pl-5 space-y-2">
                    <li>{t('learn.modernist_pizza_7')}</li>
                    <li>{t('learn.modernist_bread_5')}</li>
                    <li>{t('learn.serious_eats__pizza_troubleshooting_guides')}</li>
                    <li>{t('learn.ooni_learn__common_pizza_problems')}</li>
                    <li>{t('learn.wikipedia__maillard_reaction_caramelization_baking')}</li>
                </ul>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default TroubleshootingPage;
