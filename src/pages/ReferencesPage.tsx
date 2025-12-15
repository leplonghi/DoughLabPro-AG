
import React from 'react';
import { BookOpenIcon, ArrowTopRightOnSquareIcon } from '@/components/ui/Icons';
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
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-bold text-lime-600  hover:underline"
            aria-label={`Visit ${title}`}
          >
            <span>{t('general.visit')}</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
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
    <div className="mx-auto max-w-4xl animate-fade-in">
      <button
        onClick={() => window.history.back()}
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500  hover:text-slate-800 transition-colors"
      >
        &larr; Back
      </button>

      <div className="rounded-2xl bg-white  p-6 shadow-lg border border-slate-200  sm:p-10">
        <div className="text-center">
          <BookOpenIcon className="mx-auto h-12 w-12 text-lime-500" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900  sm:text-4xl">{t('common.technical_references')}</h1>
          <p className="mt-4 text-lg text-slate-600 ">
            A curated collection of books, standards, and resources to deepen your knowledge.
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
      </div>
    </div>
  );
};

export default ReferencesPage;
