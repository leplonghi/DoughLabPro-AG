
import React from 'react';
import TechnicalPageLayout from '../../components/layouts/TechnicalPageLayout';
import { BeakerIcon, BookOpenIcon, FireIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

// Local Section component for structuring content
const ChemistryLibraryPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <TechnicalPageLayout title={t('learn.pizza_chemistry_library')} showReferencesSection>
            <LearnSection title={t('learn.introduction_pizza_as_a_lab')}>
                <p>{t('learn:creating_a_pizza_is_a_practical_exercise_in_chemistry_and_ph')}</p>
            </LearnSection>

            <LearnSection title={t('learn:1_hydration_solubilization')} icon={<BeakerIcon className="h-5 w-5" />}>
                <p>{t('learn:water_is_the_universal_solvent_in_baking_its_first_function_')}</p>
            </LearnSection>

            <LearnSection title={t('learn:2_gluten_formation')}>
                <p>{t('learn:gluten_is_a_complex_protein_network_formed_when_two_flour_pr')}<strong>gliadin</strong> and <strong>glutenin</strong>, are hydrated and manipulated. Intermolecular bonds (disulfide bridges) form, creating a viscoelastic structure.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.gliadin')}</strong>{t('learn.responsible_for')}<strong>extensibility</strong> (ability to stretch).</li>
                    <li><strong>{t('learn.glutenin')}</strong>{t('learn.responsible_for')}<strong>elasticity</strong> and strength (tendency to return to original shape).</li>
                </ul>
                <p>{t('learn:manipulation_kneading_folding_organizes_and_strengthens_this')}</p>
            </LearnSection>

            <LearnSection title={t('learn:3_fermentation')} icon={<BeakerIcon className="h-5 w-5" />}>
                <p>{t('learn:fermentation_is_the_metabolic_process_performed_by')}<em>{t('learn.saccharomyces_cerevisiae')}</em>. In a low-oxygen (anaerobic) environment, yeast consumes simple sugars and produces <strong>carbon dioxide (CO₂)</strong> and <strong>ethanol</strong>.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>{t('learn.co₂_gets_trapped_in_the_gluten_network_inflating_t')}</li>
                    <li>{t('learn:ethanol_and_other_byproducts_esters_organic_acids_are_primar')}</li>
                    <li>{t('learn:during_this_process_enzymes')}<strong>amylases</strong> (breaking starch into sugars) and <strong>proteases</strong> (breaking proteins) continue to modify the dough, making it tastier and more extensible.</li>
                </ul>
            </LearnSection>

            <LearnSection title={t('learn:4_maillard_reaction')} icon={<FireIcon className="h-5 w-5" />}>
                <p>{t('learn:this_is_not_a_single_reaction_but_a_complex_network_of_react')}<strong>amino acids</strong> (from proteins) and <strong>reducing sugars</strong> under heat. It is primarily responsible for the deep golden color and a vast range of complex, "toasted" flavors. The Maillard Reaction requires dry heat and high surface temperature to occur effectively.</p>
            </LearnSection>

            <LearnSection title={t('learn:5_caramelization')}>
                <p>{t('learn:distinct_from_maillard_caramelization_is_the_thermal_degrada')}<strong>sugars</strong>. It occurs at generally higher temperatures and involves only sugars. It contributes nutty, bitter, and sweet flavor notes, and darker coloring (almost amber) on crust spots and ingredients like onions.</p>
            </LearnSection>

            <LearnSection title={t('learn:6_starch_gelatinization')}>
                <p>During baking, starch granules in the dough absorb free water around them and swell dramatically when heated. This process, called gelatinization, "locks" water into the crumb structure and is fundamental for forming the soft, moist internal texture of pizza. In thicker styles like Detroit, complete gelatinization is crucial to avoid a raw center.</p>
            </LearnSection>

            <LearnSection title={t('learn:7_evaporation_and_phase_change')}>
                <p>When pizza enters the hot oven, free water on the dough surface and ingredients evaporates rapidly. Water inside the dough turns into steam. This steam expands violently, inflating gas alveoli (created by fermentation) and causing t('learn.oven_spring_442') — the rapid final rise of the rim. It is a basic thermodynamics principle in action.</p>
            </LearnSection>

            <LearnSection title={t('learn:8_lipids_and_oil_out')}>
                <p>Lipids (fats), present in cheese and oil, have a lower melting point than oven temperature. They melt quickly, lubricating the pizza structure. In cheeses with high fat content, "oil-out" may occur, where fat separates from the protein matrix and forms small pools. While it may seem excessive, this free fat is an excellent flavor conductor.</p>
            </LearnSection>

            <LearnSection title={t('learn:9_thermal_degradation_of_herbs_and_aromas')}>
                <p>{t('learn:aromas_of_fresh_herbs_like_basil_come_from_volatile_organic_')}</p>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default ChemistryLibraryPage;
