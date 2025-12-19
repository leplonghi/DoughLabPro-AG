
import React from 'react';
import { BookOpenIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from '../LearnComponents';
import { useTranslation } from '@/i18n';

interface IngredientPageLayoutProps {
  title: string;
  description?: string;
  category?: string;
  references?: string[];
  children: React.ReactNode;
}

const IngredientPageLayout: React.FC<IngredientPageLayoutProps> = ({ title, description, category, references, children }) => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-4xl animate-[fadeIn_0.5s_ease-in-out]">
      <button
        onClick={() => window.history.back()}
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
      >
        &larr; Back
      </button>
      <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200/50 sm:p-10">
        <div className="text-center sm:text-left border-b border-slate-200 pb-6">
          {category && <p className="text-sm font-semibold text-dlp-brand-hover mb-1">{category}</p>}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
          {description && (
            <p className="mt-4 text-lg text-slate-900">
              {description}
            </p>
          )}
        </div>

        <div className="mt-2">
          {children}
        </div>

        {references && references.length > 0 && (
          <div className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800">
              <BookOpenIcon className="h-6 w-6 text-dlp-brand" />
              <span>{t('learn.technical_references')}</span>
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-800">
              {references.map((ref, index) => (
                <li key={index}>{ref}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default IngredientPageLayout;

