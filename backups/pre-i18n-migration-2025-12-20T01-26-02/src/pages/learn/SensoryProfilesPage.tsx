
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
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
                <p>Successful pizza is symphony of flavors and textures. Secret isn't single ingredient but harmonious balance between fundamental tastes. Successful combo stimulates different palate parts simultaneously creating complex satisfying experience.</p>
            </LearnSection>
            <LearnSection title={t('learn.umami_taste_of_satisfaction')}>
                <p>Umami, or "fifth taste", is savory depth flavor associated with glutamates. In pizza, umami is naturally present in key ingredients:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.ripe_tomatoes')}</strong> Especially when cooked concentrate glutamates.</li>
                    <li><strong>{t('learn.aged_cheeses')}</strong> Parmesan is one of richest natural sources.</li>
                    <li><strong>{t('learn.mushrooms')}</strong> Particularly when cooked release earthy umami rich flavor.</li>
                    <li><strong>{t('learn.cured_meats')}</strong> Curing process breaks proteins releasing glutamates.</li>
                </ul>
            </LearnSection>
            <LearnSection title={t('learn.fat_as_flavor_vehicle')}>
                <p>Fat from cheese, oil, and meats is essential. It adds richness and pleasant mouthfeel and acts as solvent for many aromatic compounds carrying and distributing flavor throughout pizza.</p>
            </LearnSection>
            <LearnSection title={t('learn.acidity_for_contrast_and_cleansing')}>
                <p>Acidity is necessary counterpoint to fat. Tomato sauce acid "cuts" cheese richness cleansing palate preventing cloying pizza. Ingredients like pickles or olives can also add bright acidic note.</p>
            </LearnSection>
            <LearnSection title={t('learn.natural_sweetness_for_balance')}>
                <p>Sweetness, even subtle, is crucial balancing salt and acidity. Can come from natural caramelization of onion/pepper, tomato sugar concentration in cooked sauce, or intentional additions like honey drizzle contrasting salty cheese.</p>
            </LearnSection>
            <LearnSection title={t('learn.crunch_as_texture_element')}>
                <p>Pizza experience isn't just flavor but texture. Contrast between crispy base, soft melted cheese, and firmness of cured meat is fundamental. Crunch adds auditory and tactile dimension making experience interesting.</p>
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
