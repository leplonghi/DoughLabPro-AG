
import React from 'react';
import { ArrowTopRightOnSquareIcon, BookOpenIcon } from '@/components/ui/Icons';
import AppSurface from '@/components/ui/AppSurface';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { getPageMeta } from '@/app/appShell';
import { useTranslation } from '@/i18n';

interface ReferenceItemProps {
  title: string;
  type: string;
  description: string;
  link?: string;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mt-12 first:mt-0">
    <h2 className="mb-4 text-2xl font-bold text-slate-800 ">{title}</h2>
    <div className="space-y-6">{children}</div>
  </div>
);

const ReferenceItem: React.FC<ReferenceItemProps> = ({ title, type, description, link }) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl bg-slate-50  p-4 border border-slate-100 ">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 ">{title}</h3>
        {link && (
          <ExternalLink
            href={link}
            className="flex items-center gap-1 text-sm font-bold text-dlp-primary-hover  hover:underline"
            aria-label={`Visit ${title}`}
          >
            <span>{t('general.visit')}</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </ExternalLink>
        )}
      </div>
      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500 ">{type}</p>
      <p className="mt-2 text-slate-600 ">{description}</p>
    </div>
  );
};

const ReferencesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LibraryPageLayout
      pageHeader={{
        page: 'learn',
        title: t('common.technical_references'),
        description: t('learn.references_intro', { defaultValue: 'Books, standards, and resources worth keeping close while you build repeatable bakes.' }),
        children: (
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            &larr; {t('common.back', { defaultValue: 'Back' })}
          </button>
        ),
      }}
    >
      <div className="mx-auto w-full max-w-6xl animate-fade-in pb-12">
        <div className="px-4 sm:px-6">
          <AppSurface className="p-6 sm:p-10">
            <div className="text-center">
              <BookOpenIcon className="mx-auto h-12 w-12 text-dlp-primary" />
              <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                {t('common.reference_library', { defaultValue: 'Reference Library' })}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                {t('learn.references_subtitle', { defaultValue: 'Curated sources to deepen technique, science, and terminology — without losing the practical thread.' })}
              </p>
            </div>

            <div className="mt-10">
              <Section title={t('general.pizza__official_rules_and_associations')}>
                <ReferenceItem
                  title="Associazione Verace Pizza Napoletana (AVPN)"
                  type="Association / Standard"
                  description="The organization that defines and protects the rules of authentic Neapolitan pizza. The official website contains the international regulations."
                  link="https://www.pizzanapoletana.org/"
                />
                <ReferenceItem
                  title={t('general.pizza_in_teglia_e_pizza_tonda_al_piatto')}
                  type={t('general.book')}
                  description="By Renato Bosco, an Italian baking master, focused on pan pizza (teglia) and plate pizza (tonda)."
                />
              </Section>

              <Section title={t('general.baking__technical_books')}>
                <ReferenceItem
                  title="Le Goût du Pain (The Taste of Bread)"
                  type={t('general.book')}
                  description="By Raymond Calvel. Considered one of the pillars of modern baking, focuses on the importance of temperature control and autolyse."
                />
                <ReferenceItem
                  title={t('general.flour_water_salt_yeast')}
                  type={t('general.book')}
                  description="By Ken Forkish. An essential book for home bakers wishing to master sourdough and artisan breads."
                />
                <ReferenceItem
                  title={t('general.modernist_bread_33')}
                  type={t('general.book_collection')}
                  description="A scientific and technical encyclopedia on bread, covering history, techniques, and science exhaustively."
                />
              </Section>

              <Section title="Flour – Technical Data and Strength (W)">
                <ReferenceItem
                  title={t('general.chopin_alveograph')}
                  type={t('general.technical_concept')}
                  description="Explanation of the equipment used to measure flour strength (W), tenacity (P), and extensibility (L), crucial parameters for baking."
                />
                <ReferenceItem
                  title={t('general.caputo_mill')}
                  type="Website / Manufacturer"
                  description="The website of Mulino Caputo, one of the most famous in Italy, offers detailed technical sheets for their various flours, helping to understand the use of each."
                  link="https://www.mulinocaputo.it/"
                />
              </Section>

              <Section title={t('general.terminology_and_concepts')}>
                <ReferenceItem
                  title={t('general.the_fresh_loaf')}
                  type="Community / Website"
                  description="One of the largest and oldest baking forums on the internet. An invaluable resource for learning, asking questions, and seeing experiments from other bakers."
                  link="http://www.thefreshloaf.com/"
                />
                <ReferenceItem
                  title={t('general.autolyse_fermentolyse_and_maturation')}
                  type={t('general.concepts')}
                  description="Definition and application of fundamental techniques for gluten development, flavor, and dough structure."
                />
              </Section>
            </div>
          </AppSurface>
        </div>
      </div>
    </LibraryPageLayout>
  );
};

export default ReferencesPage;

