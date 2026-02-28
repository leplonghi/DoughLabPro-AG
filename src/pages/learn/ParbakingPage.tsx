
import React from 'react';
import TechnicalPageLayout from '../../components/layouts/TechnicalPageLayout';
import { FireIcon, BeakerIcon, ClockIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

const Section: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="mt-8 first:mt-0">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900 mb-3">
            {icon}
            {title}
        </h3>
        <div className="prose-sm max-w-none text-slate-700 leading-relaxed">
            {children}
        </div>
    </div>
);

const ParbakingPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <TechnicalPageLayout
            title={t('learn.parbaking__double_baking')}
            subtitle={t('learn.the_thermodynamics_of_twostage_baking_for_texture_')}
            showReferencesSection
        >
            <LearnSection title={t('learn:1_the_logic_of_two_stages')}>
                <p>{t('learn:parbaking_or_blind_baking_separates_the_cooking_of_the_dough')}</p>
            </LearnSection>

            <LearnSection title={t('learn:2_stage_1_structure_set_and_gelatinization')} icon={<FireIcon className="h-5 w-5" />}>
                <p>
                    The goal of the first bake (usually sauce-only or plain dough) is <strong>{t('learn.starch_gelatinization_3')}</strong> and <strong>{t('learn.gluten_coagulation')}</strong>.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>The dough is baked until the internal temperature passes ~93°C (200°F). At this point, the crumb structure is set and will not collapse.</li>
                    <li>Without heavy cheese or wet toppings, water evaporates freely from the dough, establishing a crisp outer crust layer (t('learn.crust_formation_412')) without burning.</li>
                    <li>{t('learn.the_result_is_a_stable_cooked_sponge_that_can_be_s')}</li>
                </ul>
            </LearnSection>

            <LearnSection title={t('learn:3_moisture_management_the_anti_gum_line_strategy')} icon={<BeakerIcon className="h-5 w-5" />}>
                <p>
                    One of the biggest technical faults in pizza is the t('learn.gum_line_413')—a raw, doughy layer beneath the sauce. Parbaking solves this by creating a hydrophobic barrier (a dry crust) on top of the dough <em>before</em> moist ingredients are added. When sauce and cheese are added for the second bake, they sit on a cooked surface, preventing liquid absorption into the crumb.
                </p>
            </LearnSection>

            <LearnSection title={t('learn:4_stage_2_the_finish_double_bake')} icon={<ClockIcon className="h-5 w-5" />}>
                <p>{t('learn:the_second_bake_is_short_and_intense_since_the_dough_is_alre')}</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>{t('learn.melting_the_cheese')}</li>
                    <li>{t('learn.heating_the_toppings')}</li>
                    <li>{t('learn:re_crisping_the_bottom_which_may_have_softened')}</li>
                </ol>
                <p className="mt-2">
                    This stage allows the use of delicate ingredients that cannot withstand 15-20 minutes of oven time.
                </p>
            </LearnSection>

            <LearnSection title={t('learn:5_applications_by_style')}>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.roman_teglia')}</strong> Almost always parbaked. The high hydration (80%+) requires a long initial bake to drive out moisture.</li>
                    <li><strong>{t('learn.detroit_style')}</strong> Often parbaked to ensure the center of the thick dough is fully cooked before the cheese crust (frico) burns.</li>
                    <li><strong>{t('learn.frozen_pizza')}</strong> Commercial frozen pizzas are parbaked so the consumer only needs to "finish" them.</li>
                </ul>
            </LearnSection>

            <LearnSection title={t('learn:6_technical_risks')}>
                <p>
                    <strong>{t('learn.drying_out')}</strong>{t('learn.the_risk_of_double_baking_is_removing')}<em>too much</em> moisture, resulting in a hard, rusk-like texture rather than a crispy-chewy one. This is mitigated by high hydration formulas and controlling the temperature of the second bake.
                </p>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default ParbakingPage;
