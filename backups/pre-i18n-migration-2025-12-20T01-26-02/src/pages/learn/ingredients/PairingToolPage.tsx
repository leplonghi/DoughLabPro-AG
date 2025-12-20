
import React, { useState } from 'react';
import IngredientPageLayout from './IngredientPageLayout';
import { BookOpenIcon, SparklesIcon, BeakerIcon } from '@/components/ui/Icons';
import { LearnSection, LearnKeyTakeaway } from '../LearnComponents';
import { useTranslation } from '@/i18n';

const PairingToolPage: React.FC = () => {
  const { t } = useTranslation();
  const pairingIngredients = [
    { value: '', label: 'Select an ingredient...' },
    { value: 'mozzarella', label: 'Mozzarella' },
    { value: 'gorgonzola', label: 'Gorgonzola' },
    { value: 'pumpkin', label: 'Pumpkin' },
    { value: 'red_onion', label: 'Red Onion' },
    { value: 'mushrooms', label: 'Mushrooms' },
    { value: 'prosciutto', label: 'Prosciutto (Cured Ham)' },
  ];

  const [selectedIngredient, setSelectedIngredient] = useState('');

  const handleSearch = () => {
    // Placeholder for future search logic
  }

  return (
    <IngredientPageLayout
      title={t('learn.flavor_pairing_tool')}
      description="Discover classic and bold flavor combinations for your ingredients."
      category={t('nav.tools')}
    >
      <div className="space-y-6">
        {/* Input */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <select
            value={selectedIngredient}
            onChange={(e) => setSelectedIngredient(e.target.value)}
            className="block w-full rounded-md border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-dlp-brand focus:outline-none focus:ring-dlp-brand sm:text-sm"
          >
            {pairingIngredients.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-dlp-brand py-2.5 px-4 text-sm font-semibold text-white shadow-sm hover:bg-dlp-brand hover:text-white-hover"
          >
            <SparklesIcon className="h-5 w-5" />{t('learn.find_pairings')}</button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="rounded-lg bg-slate-50 p-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
              <BookOpenIcon className="h-5 w-5 text-slate-500" />{t('learn.classic_suggestions')}</h4>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              {/* Placeholder content */}
              <li>{t('learn.classic_combination_suggestions_for_the_selected_i')}</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 p-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
              <SparklesIcon className="h-5 w-5 text-yellow-400" />{t('learn.bold_suggestions')}</h4>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              {/* Placeholder content */}
              <li>{t('learn.creative_and_bold_pairing_suggestions_for_the_sele')}</li>
            </ul>
          </div>
          <div className="rounded-lg bg-slate-50 p-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
              <BeakerIcon className="h-5 w-5 text-slate-500" />{t('learn.technical_notes')}</h4>
            <p className="mt-4 text-slate-700">
              {/* Placeholder content */}
              Technical explanations on why pairings work (flavor balance, textures, etc.), based on flavor science and gastronomic literature, will appear here.
            </p>
          </div>
        </div>
      </div>
    </IngredientPageLayout>
  );
};

export default PairingToolPage;


