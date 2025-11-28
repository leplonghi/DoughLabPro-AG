import React from 'react';
import { DoughConfig, FormErrors, AmbientTemperature } from '@/types';
import { SunIcon, InfoIcon } from '@/components/ui/Icons';
import AccordionSection from '@/components/calculator/AccordionSection';
import { AMBIENT_TEMPERATURE_OPTIONS, ENVIRONMENT_TEMPERATURE_GUIDELINES } from '@/constants';
import ChoiceButton from '@/components/ui/ChoiceButton';
import { useToast } from '@/components/ToastProvider';

interface EnvironmentSectionProps {
    config: DoughConfig;
    onConfigChange: (newConfig: Partial<DoughConfig>) => void;
    getSelectClasses: () => string;
    errors: FormErrors;
}

const EnvironmentSection: React.FC<EnvironmentSectionProps> = ({
    config,
    onConfigChange,
    getSelectClasses,
    errors,
}) => {
    const { addToast } = useToast();

    const handleTempChange = (newTemp: AmbientTemperature) => {
        const oldTemp = config.ambientTemperature;

        // If no change, do nothing
        if (oldTemp === newTemp) return;

        const oldGuideline = ENVIRONMENT_TEMPERATURE_GUIDELINES[oldTemp];
        const newGuideline = ENVIRONMENT_TEMPERATURE_GUIDELINES[newTemp];

        let updates: Partial<DoughConfig> = { ambientTemperature: newTemp };

        // Calculate yeast adjustment
        if (oldGuideline && newGuideline && config.yeastPercentage > 0) {
            // Calculate relative factor: New / Old
            // e.g. Mild(1.0) -> Cold(1.25) = 1.25
            // e.g. Cold(1.25) -> Mild(1.0) = 0.8
            const factor = newGuideline.yeastAdjustment / oldGuideline.yeastAdjustment;

            // Apply factor and round to 2 decimals
            const newYeast = Math.round((config.yeastPercentage * factor) * 100) / 100;

            if (newYeast !== config.yeastPercentage) {
                updates.yeastPercentage = newYeast;
                addToast(`Yeast adjusted to ${newYeast}% for ${newGuideline.notes.split('.')[0].toLowerCase()}.`, 'info');
            }
        }

        onConfigChange(updates);
    };

    const currentGuideline = ENVIRONMENT_TEMPERATURE_GUIDELINES[config.ambientTemperature];

    return (
        <AccordionSection
            title="Environment"
            description="Temperature affects fermentation speed."
            icon={<SunIcon className="h-6 w-6" />}
        >
            <div className="space-y-4">
                <div>
                    <label className="mb-2 block text-xs font-bold text-slate-700">
                        Ambient Temperature
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                        {AMBIENT_TEMPERATURE_OPTIONS.map((option) => (
                            <ChoiceButton
                                key={option.value}
                                active={config.ambientTemperature === option.value}
                                onClick={() => handleTempChange(option.value)}
                                label={option.labelKey}
                                className="text-xs"
                            />
                        ))}
                    </div>
                </div>

                {currentGuideline && (
                    <div className="rounded-md bg-sky-50 p-3 text-xs text-sky-700 flex gap-2 items-start">
                        <InfoIcon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="font-semibold">Impact on Fermentation:</p>
                            <p>{currentGuideline.notes}</p>
                            {currentGuideline.yeastAdjustment !== 1.0 && (
                                <p className="mt-1 font-mono text-[10px] bg-sky-100 inline-block px-1 rounded">
                                    Yeast Factor: {currentGuideline.yeastAdjustment}x
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </AccordionSection>
    );
};

export default EnvironmentSection;
