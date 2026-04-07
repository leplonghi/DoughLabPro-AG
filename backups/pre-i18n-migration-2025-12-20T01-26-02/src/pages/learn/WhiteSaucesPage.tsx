
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

const WhiteSaucesPage: React.FC = () => {
  const { t } = useTranslation();
    return (
        <TechnicalPageLayout
            title={t('learn.white_sauces__emulsions')}
            subtitle={t('learn.the_science_of_consistency_in_creamy_pizza_bases')}
        >
            <LearnSection title={t('learn.introduction_emulsion_chemistry')}>
                <p>White sauces, like béchamel or cheese-based creams, are emulsions — stable suspensions of fat in liquid (usually water or milk). Stability of this emulsion is key for a creamy sauce that behaves well in the oven, rather than "breaking" and releasing oil.</p>
            </LearnSection>
            <LearnSection title={t('learn.stable_vs_unstable_emulsions')}>
                <p>A <strong>stable emulsion</strong> is maintained by an emulsifying agent (like milk proteins in béchamel or lecithin in egg yolk). These agents prevent fat droplets from joining. An <strong>unstable emulsion</strong>, like a simple vinaigrette, separates quickly. Pizza sauces need stability to resist intense heat.</p>
            </LearnSection>
            <LearnSection title={t('learn.role_of_dairy_fat')}>
                <p>Dairy fat (cream, butter, cheese) gives richness and flavor to white sauces. It also carries fat-soluble aromatic compounds. The challenge is keeping this fat emulsified. Starches (like flour in béchamel) and proteins help create a network trapping fat.</p>
            </LearnSection>
            <LearnSection title={t('learn.thermal_behavior_in_oven_2')}>
                <p>Under oven heat, water in emulsion begins to evaporate, concentrating the sauce. At the same time, heat can destabilize the emulsion. A well-made sauce thickens and browns slightly (Maillard reaction of milk proteins), while a poorly made one separates.</p>
            </LearnSection>
            <LearnSection title="Risks of Separation ('Breaking')">
                <p>{t('learn.a_white_sauce_breaks_when_emulsion_fails_and_fat_s')}</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.excessive_heat')}</strong> Intense heat can denature proteins maintaining emulsion.</li>
                    <li><strong>{t('learn.excess_acid')}</strong> Acidic ingredients can coagulate milk proteins, causing separation.</li>
                    <li><strong>{t('learn.lack_of_emulsifying_agent')}</strong> Sauce lacks sufficient structure to keep fat suspended.</li>
                </ul>
            </LearnSection>
            <LearnSection title={t('learn.uses_in_specific_pizzas')}>
                <p>White sauces are the base for "white pizzas". They offer a neutral creamy canvas pairing well with mushrooms, spinach, potatoes, or cured meats. In focaccias, an oil-water emulsion base is often used to maintain moisture and flavor.</p>
            </LearnSection>
            <LearnSection title={t('learn.technical_references_7')}>
                <ul className="list-disc pl-5 space-y-2">
                    <li>t('learn.on_food_and_cooking') by Harold McGee</li>
                    <li>{t('learn.modernist_cuisine_2')}</li>
                    <li>Wikipedia (Emulsion, Bechamel Sauce)</li>
                </ul>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default WhiteSaucesPage;
