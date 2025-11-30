import React from 'react';
import TechnicalPageLayout from './TechnicalPageLayout';
import { Page } from '@/types';
import { WrenchScrewdriverIcon, CubeIcon, FireIcon, BeakerIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

// Reusing the card component style from LearnPage for consistency, but adapted for this layout
const TechniqueCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}> = ({ icon, title, description, onClick }) => (
  <button
    onClick={onClick}
    className="group h-full text-left flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
  >
    <div className="flex-shrink-0 text-lime-500">{icon}</div>
    <div className="mt-4 flex-grow">
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-lime-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-900 leading-relaxed">{description}</p>
    </div>
    <p className="mt-4 text-sm font-semibold text-slate-500 group-hover:text-lime-500 transition-colors">
      Read More &rarr;
    </p>
  </button>
);

interface TechniquesPageProps {
  onNavigate: (page: Page) => void;
}

const TechniquesPage: React.FC<TechniquesPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const techniques = [
    {
      page: 'learn/article/autolyse' as Page,
      title: 'Autolyse',
      description: 'The simple pause that transforms dough extensibility and structure.',
      icon: <BeakerIcon className="h-8 w-8" />,
    },
    {
      page: 'learn/article/mixing-techniques' as Page,
      title: 'Mixing Techniques',
      description: 'From hand kneading to Rubaud and mechanical mixing strategies.',
      icon: <WrenchScrewdriverIcon className="h-8 w-8" />,
    },
    {
      page: 'learn/article/balling-technique' as Page,
      title: 'Balling (Staglio)',
      description: 'Creating surface tension for perfect fermentation and shape.',
      icon: <CubeIcon className="h-8 w-8" />,
    },
    {
      page: 'learn/article/parbaking' as Page,
      title: 'Parbaking',
      description: 'Techniques for pre-baking bases for events or high-volume service.',
      icon: <FireIcon className="h-8 w-8" />,
    },
  ];

  return (
    <TechnicalPageLayout
      title="Baking Techniques"
      subtitle="Master the physical manipulations that define your dough's structure."
      showReferencesSection
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {techniques.map((tech) => (
          <TechniqueCard
            key={tech.page}
            icon={tech.icon}
            title={tech.title}
            description={tech.description}
            onClick={() => onNavigate(tech.page)}
          />
        ))}
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h3>Why Technique Matters</h3>
        <p>
          Even with the perfect recipe, the way you handle the dough determines the final outcome.
          Technique controls gluten development, gas retention, and the final texture of the crumb.
          Consistent practice of these methods is what separates a good baker from a great one.
        </p>
      </div>
    </TechnicalPageLayout>
  );
};

export default TechniquesPage;
