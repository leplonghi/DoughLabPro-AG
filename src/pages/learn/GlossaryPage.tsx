
import React from 'react';
import TechnicalPageLayout from '../../components/layouts/TechnicalPageLayout';
import { LearnSection, LearnKeyTakeaway } from './LearnComponents';
import { useTranslation } from '@/i18n';

const GlossaryTerm: React.FC<{ term: string; children: React.ReactNode }> = ({ term, children }) => (
  <div className="py-4 border-b border-slate-200  last:border-b-0">
    <dt className="font-bold text-md text-slate-900 ">{term}</dt>
    <dd className="mt-1 text-slate-700  leading-relaxed">{children}</dd>
  </div>
);

const GlossaryPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TechnicalPageLayout
      title={t('learn.technical_baking_glossary')}
      subtitle={t('learn:a_dictionary_of_the_most_important_technical_terms_in_the_wo')}
      showReferencesSection
    >
      <dl>
        <GlossaryTerm term="Alveograph (Chopin)">
          Laboratory equipment measuring dough rheological properties by inflating a bubble of dough until rupture. Generates values like Strength (W) and P/L ratio.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.autolyse')}>
          Process consisting of resting flour and water (usually for 20 to 60 minutes) before adding salt and yeast. Autolyse fully hydrates flour, activates enzymes relaxing gluten, and facilitates gluten network formation with less mechanical work, resulting in more extensible dough.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.biga_2')}>
          Type of Italian preferment characterized by low hydration (typically 45-60%). Ferments for a long period (12-24 hours) and develops subtle lactic acidity, contributing to stronger crumb structure and complex aroma.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.biscotto')}>
          Cooking surface made of porous refractory clay, traditionally used in Neapolitan pizza ovens. Low thermal conductivity allows baking pizza base at very high temperatures (above 450°C) gently without burning.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.browning')}>{t('learn:culinary_term_describing_food_surface_darkening_during_cooki')}</GlossaryTerm>
        <GlossaryTerm term={t('learn.caramelization')}>{t('learn:process_of_oxidation_and_thermal_degradation_of_sugars_at_hi')}</GlossaryTerm>
        <GlossaryTerm term={t('learn.cornicione')}>{t('learn:italian_term_for_the_puffed_airy_soft_rim_of_pizza_especiall')}</GlossaryTerm>
        <GlossaryTerm term={t('learn.crumb')}>
          Refers to internal structure of baked dough. t('learn.crumb_1') analysis evaluates size, shape, and distribution of alveoli (bubbles), as well as texture (soft, chewy, etc.).
        </GlossaryTerm>
        <GlossaryTerm term="DDT (Desired Dough Temperature)">
          Target temperature dough should reach at end of mixing/kneading. Controlling DDT is crucial for predictable and consistent fermentation regardless of environmental conditions.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.deck')}>{t('learn:base_or_floor_of_an_oven_usually_stone_steel_or_firebrick_wh')}</GlossaryTerm>
        <GlossaryTerm term={t('learn.fermentation')}>
          Metabolic process performed by microorganisms (mainly yeasts and bacteria) converting sugars into other compounds. In baking, results in CO₂ production (rising dough), ethanol, organic acids, and aromatic compounds developing flavor.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.acetic_fermentation')}>{t('learn:secondary_fermentation_type_performed_by_acetic_bacteria_pro')}</GlossaryTerm>
        <GlossaryTerm term={t('learn.lactic_fermentation')}>{t('learn:fermentation_performed_by_lactic_acid_bacteria_lab_such_as_l')}</GlossaryTerm>
        <GlossaryTerm term={t('learn.starch_gelatinization_2')}>
          Process occurring during baking where starch granules absorb water and swell under heat. t('learn.locks') moisture in crumb structure, fundamental for soft, cooked texture of final product.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.gliadin_and_glutenin')}>
          Two insoluble proteins found in wheat. When hydrated and subjected to mechanical work, connect to form gluten network. <strong>{t('learn.gliadin')}</strong> confers extensibility and <strong>glutenin</strong> elasticity and strength.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.maillard_reaction')}>
          Complex series of chemical reactions between amino acids (from proteins) and reducing sugars under heat. Responsible for most golden color and complex, "toasted" flavors and aromas of pizza and bread crust.
        </GlossaryTerm>
        <GlossaryTerm term="Oil-Out">{t('learn:phenomenon_where_fat_oil_from_cheese_or_meat_separates_from_')}</GlossaryTerm>
        <GlossaryTerm term="Overproof / Underproof">
          Terms describing fermentation state. <strong>{t('learn.overproof')}</strong> occurs when dough ferments too long; gluten network weakens, dough may collapse, and flavor becomes excessively acidic. <strong>{t('learn.underproof')}</strong> occurs when fermentation is insufficient, resulting in dense dough with little volume and undeveloped flavor.
        </GlossaryTerm>
        <GlossaryTerm term="P/L">
          Index measured by Alveograph representing ratio between Tenacity (P - resistance to deformation) and Extensibility (L - stretching capacity). Flour with balanced P/L (around 0.5-0.6) is ideal for pizza, being strong but easy to open.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.poolish_2')}>
          Type of high hydration (100%) preferment made with equal parts flour and water plus small amount of yeast. Ferments shorter than Biga and results in more extensible final dough with mild flavor.
        </GlossaryTerm>
        <GlossaryTerm term={t('learn.preferment')}>{t('learn:mixture_of_flour_water_and_yeast_commercial_or_natural_prepa')}</GlossaryTerm>
        <GlossaryTerm term={t('learn.rimacinata')}>
          Italian term for "re-milled". Refers to durum wheat semolina flour passed through second milling process to be finer. Often used on work surface to open pizzas, especially Roman style, as it doesn't burn easily and adds crispy texture.
        </GlossaryTerm>
        <GlossaryTerm term="Stretch & Fold">{t('learn:dough_manipulation_technique_especially_useful_for_high_hydr')}</GlossaryTerm>
        <GlossaryTerm term={t('learn.windowpane_test')}>{t('learn:practical_test_to_verify_if_gluten_network_is_well_developed')}</GlossaryTerm>
        <GlossaryTerm term="W (Flour Strength)">
          Index measured by Alveograph quantifying flour strength and fermentation capacity. Represents total energy needed to expand dough. High W flours are "strong" suitable for long fermentation and high hydration. Low W flours are "weak" for short fermentation.
        </GlossaryTerm>
      </dl>
    </TechnicalPageLayout>
  );
};

export default GlossaryPage;
