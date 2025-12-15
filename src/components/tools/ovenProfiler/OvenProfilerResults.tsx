import React from 'react';
import { OvenAnalysisResult, OvenProfileInput } from '@/logic/ovenProfile';
import { OvenProfilerSummaryCard } from './OvenProfilerSummaryCard';
import { OvenProfilerAdviceGrid } from './OvenProfilerAdviceGrid';
import { useTranslation } from '@/i18n';
import { useUser } from '@/contexts/UserProvider';
import { OvenType } from '@/types';
import { BookmarkSquareIcon } from '@/components/ui/Icons';
import { useToast } from '@/components/ToastProvider';

interface OvenProfilerResultsProps {
    analysis: OvenAnalysisResult;
    profile: OvenProfileInput;
}

export const OvenProfilerResults: React.FC<OvenProfilerResultsProps> = ({ analysis, profile }) => {
    const { t } = useTranslation();
    const { addOven, setDefaultOven } = useUser();
    const { addToast } = useToast();

    const handleSave = async () => {
        let type = OvenType.ELECTRIC;
        if (profile.ovenType === 'home_gas') type = OvenType.GAS;
        if (profile.ovenType === 'wood') type = OvenType.WOOD;
        if (profile.ovenType === 'deck') type = OvenType.STONE_OVEN;

        // Create the oven
        const newOven = await addOven({
            name: `${analysis.category} (${profile.maxTemperature}°C)`,
            type: type,
            maxTemperature: profile.maxTemperature,
            hasStone: profile.surface === 'stone',
            hasSteel: profile.surface === 'steel',
            notes: `Profiler Analysis: ${new Date().toLocaleDateString()}`
        });

        // Set as default
        await setDefaultOven(newOven.id);

        addToast(t('common.oven_saved_default'), 'success');
    };

    return (
        <div id="analysis-results" className="animate-fade-in space-y-6 pt-4">
            <OvenProfilerSummaryCard analysis={analysis} />
            <OvenProfilerAdviceGrid analysis={analysis} />

            <div className="flex justify-center pt-2">
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 bg-dlp-accent text-white font-bold rounded-xl hover:bg-dlp-accent-hover transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    <BookmarkSquareIcon className="h-5 w-5" />
                    {t('common.save_as_default_oven') || "Save as Default Oven"}
                </button>
            </div>

            {/* Disclaimer */}
            <div className="text-center text-xs text-slate-400 italic mt-8">
                Calculations based on thermodynamic principles from Modernist Pizza and general baking physics. Real results may vary.
            </div>
        </div>
    );
};
