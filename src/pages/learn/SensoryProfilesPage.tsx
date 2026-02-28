
import React from 'react';
import TechnicalPageLayout from '../../components/layouts/TechnicalPageLayout';
import { BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

const SensoryProfilesPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <TechnicalPageLayout
            title={t('learn.sensory_profiles_in_pizza')}
            subtitle={t('learn.how_umami_fat_acidity_sweetness_and_crunch_balance')}
            showReferencesSection
        >
            <LearnSection title={t('learn.balance_of_fundamental_tastes')}>
                <p>{t('learn:successful_pizza_is_symphony_of_flavors_and_textures_secret_')}</p>
            </LearnSection>
            <LearnSection title={t('learn.umami_taste_of_satisfaction')}>
                <p>Umami, or t('learn.fifth_taste_447'), is savory depth flavor associated with glutamates. In pizza, umami is naturally present in key ingredients:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.ripe_tomatoes')}</strong> Especially when cooked concentrate glutamates.</li>
                    <li><strong>{t('learn.aged_cheeses')}</strong> Parmesan is one of richest natural sources.</li>
                    <li><strong>{t('learn.mushrooms')}</strong> Particularly when cooked release earthy umami rich flavor.</li>
                    <li><strong>{t('learn.cured_meats')}</strong> Curing process breaks proteins releasing glutamates.</li>
                </ul>
            </LearnSection>
            <LearnSection title={t('learn.fat_as_flavor_vehicle')}>
                <p>{t('learn:fat_from_cheese_oil_and_meats_is_essential_it_adds_richness_')}</p>
            </LearnSection>
            <LearnSection title={t('learn.acidity_for_contrast_and_cleansing')}>
                <p>Acidity is necessary counterpoint to fat. Tomato sauce acid "cuts" cheese richness cleansing palate preventing cloying pizza. Ingredients like pickles or olives can also add bright acidic note.</p>
            </LearnSection>
            <LearnSection title={t('learn.natural_sweetness_for_balance')}>
                <p>{t('learn:sweetness_even_subtle_is_crucial_balancing_salt_and_acidity_')}</p>
            </LearnSection>
            <LearnSection title={t('learn.crunch_as_texture_element')}>
                <p>{t('learn:pizza_experience_isnt_just_flavor_but_texture_contrast_betwe')}</p>
            </LearnSection>
            <LearnSection title={t('learn.technical_references_3')}>
                <ul className="list-disc pl-5 space-y-2">
                    <li>t('learn.the_flavor_bible') by Karen Page and Andrew Dornenburg</li>
                    <li>t('learn.on_food_and_cooking') by Harold McGee</li>
                    <li>{t('learn.modernist_cuisine')}</li>
                </ul>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default SensoryProfilesPage;
