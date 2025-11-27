import React from 'react';
import { DoughConfig, FormErrors } from '@/types';
import { SunIcon } from '@/components/ui/Icons';
import AccordionSection from '@/components/calculator/AccordionSection';

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
    return (
        <AccordionSection
            title="Environment"
            description="Temperature affects fermentation speed."
            icon={<SunIcon className="h-6 w-6" />}
        >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="roomTemp" className="mb-1 block text-xs font-bold text-slate-700">
                        Room Temperature (°C)
                    </label>
                    <input
                        type="number"
                        id="roomTemp"
                        name="roomTemp"
                        value={config.roomTempC || 20}
                        onChange={(e) => onConfigChange({ roomTempC: parseFloat(e.target.value) || 0 })}
                        className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-slate-900 focus:border-lime-500 focus:ring-lime-500"
                    />
                </div>
                <div>
                    <label htmlFor="humidity" className="mb-1 block text-xs font-bold text-slate-700">
                        Humidity (%)
                    </label>
                    <input
                        type="number"
                        id="humidity"
                        name="humidity"
                        value={config.humidity || 60}
                        onChange={(e) => onConfigChange({ humidity: parseFloat(e.target.value) || 0 })}
                        className="w-full rounded-lg border border-slate-300 bg-slate-50 p-2 text-slate-900 focus:border-lime-500 focus:ring-lime-500"
                    />
                </div>
            </div>
        </AccordionSection>
    );
};

export default EnvironmentSection;
