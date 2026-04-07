
import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
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
            <LearnSection title="1. The Logic of Two Stages">
                <p>
                    Parbaking (or blind baking) separates the cooking of the dough structure from the cooking of the toppings. This technique is essential for styles like Roman Teglia, Detroit, or heavy Pan Pizzas, where the time required to crisp the base would destroy delicate toppings, or the moisture from toppings would prevent the base from baking.
                </p>
            </LearnSection>

            <LearnSection title="2. Stage 1: Structure Set and Gelatinization" icon={<FireIcon className="h-5 w-5" />}>
                <p>
                    The goal of the first bake (usually sauce-only or plain dough) is <strong>{t('learn.starch_gelatinization_3')}</strong> and <strong>{t('learn.gluten_coagulation')}</strong>.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>The dough is baked until the internal temperature passes ~93°C (200°F). At this point, the crumb structure is set and will not collapse.</li>
                    <li>Without heavy cheese or wet toppings, water evaporates freely from the dough, establishing a crisp outer crust layer (t('learn.crust_formation_412')) without burning.</li>
                    <li>{t('learn.the_result_is_a_stable_cooked_sponge_that_can_be_s')}</li>
                </ul>
            </LearnSection>

            <LearnSection title="3. Moisture Management (The Anti-Gum Line Strategy)" icon={<BeakerIcon className="h-5 w-5" />}>
                <p>
                    One of the biggest technical faults in pizza is the t('learn.gum_line_413')—a raw, doughy layer beneath the sauce. Parbaking solves this by creating a hydrophobic barrier (a dry crust) on top of the dough <em>before</em> moist ingredients are added. When sauce and cheese are added for the second bake, they sit on a cooked surface, preventing liquid absorption into the crumb.
                </p>
            </LearnSection>

            <LearnSection title="4. Stage 2: The Finish (Double Bake)" icon={<ClockIcon className="h-5 w-5" />}>
                <p>
                    The second bake is short and intense. Since the dough is already cooked, the goal is purely:
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                    <li>{t('learn.melting_the_cheese')}</li>
                    <li>{t('learn.heating_the_toppings')}</li>
                    <li>Re-crisping the bottom (which may have softened).</li>
                </ol>
                <p className="mt-2">
                    This stage allows the use of delicate ingredients that cannot withstand 15-20 minutes of oven time.
                </p>
            </LearnSection>

            <LearnSection title="5. Applications by Style">
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>{t('learn.roman_teglia')}</strong> Almost always parbaked. The high hydration (80%+) requires a long initial bake to drive out moisture.</li>
                    <li><strong>{t('learn.detroit_style')}</strong> Often parbaked to ensure the center of the thick dough is fully cooked before the cheese crust (frico) burns.</li>
                    <li><strong>{t('learn.frozen_pizza')}</strong> Commercial frozen pizzas are parbaked so the consumer only needs to "finish" them.</li>
                </ul>
            </LearnSection>

            <LearnSection title="6. Technical Risks">
                <p>
                    <strong>{t('learn.drying_out')}</strong>{t('learn.the_risk_of_double_baking_is_removing')}<em>too much</em> moisture, resulting in a hard, rusk-like texture rather than a crispy-chewy one. This is mitigated by high hydration formulas and controlling the temperature of the second bake.
                </p>
            </LearnSection>
        </TechnicalPageLayout>
    );
};

export default ParbakingPage;
