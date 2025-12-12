import React from 'react';
import { BeakerIcon, LightBulbIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

export const DoughbotResultsPlaceholder: React.FC = () => {
  const { t } = useTranslation();
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
                2. Preliminary Diagnosis
            </h3>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-800">
                    <BeakerIcon className="h-5 w-5 text-slate-600" />{t('common.possible_causes')}</h4>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                    <li>{t('tools.diagnosis_of_potential_causes_will_appear_here')}</li>
                    <li>{t('tools.each_cause_will_be_explained_based_on_baking_scien')}</li>
                </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-800">
                    <LightBulbIcon className="h-5 w-5 text-yellow-600" />{t('common.suggested_solutions')}</h4>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                    <li>{t('tools.technical_suggestions_for_correction_will_appear_h')}</li>
                    <li>{t('tools.solutions_will_include_recipe_and_process_adjustme')}</li>
                </ul>
            </div>
        </div>
    );
};
