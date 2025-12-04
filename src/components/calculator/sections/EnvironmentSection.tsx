import React from 'react';
import { DoughConfig, AmbientTemperature } from '@/types';
import { FireIcon, ThermometerIcon, SnowIcon, SunIcon } from '@/components/ui/Icons';
import ChoiceButton from '@/components/ui/ChoiceButton';
import SliderInput from '@/components/ui/SliderInput';
import AccordionSection from '@/components/calculator/AccordionSection';

interface EnvironmentSectionProps {
  config: DoughConfig;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
}

const EnvironmentSection: React.FC<EnvironmentSectionProps> = ({ config, onConfigChange }) => {
  return (
    <AccordionSection
      title="Environment"
      description="Temperature controls."
      icon={<FireIcon className="h-6 w-6" />}
    >
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-xs font-bold text-slate-700">
            Room Temperature
          </label>
          <div className="grid grid-cols-3 gap-2">
            <ChoiceButton
              active={config.ambientTemperature === AmbientTemperature.COLD}
              label="Cold (<18°C)"
              icon={<SnowIcon className="h-4 w-4" />}
              onClick={() => onConfigChange({ ambientTemperature: AmbientTemperature.COLD })}
            />
            <ChoiceButton
              active={config.ambientTemperature === AmbientTemperature.MILD}
              label="Mild (20-24°C)"
              icon={<ThermometerIcon className="h-4 w-4" />}
              onClick={() => onConfigChange({ ambientTemperature: AmbientTemperature.MILD })}
            />
            <ChoiceButton
              active={config.ambientTemperature === AmbientTemperature.HOT}
              label="Hot (>25°C)"
              icon={<SunIcon className="h-4 w-4" />}
              onClick={() => onConfigChange({ ambientTemperature: AmbientTemperature.HOT })}
            />
          </div>
        </div>

        <SliderInput
          label="Baking Temperature (°C)"
          value={config.bakingTempC}
          onChange={(val) => onConfigChange({ bakingTempC: val })}
          min={150}
          max={500}
          step={10}
          unit="°C"
          description="Oven temperature."
        />

        {/* Dynamic Tip based on Temp */}
        {config.bakingTempC > 400 && (
          <div className="rounded-md bg-sky-50 p-3 text-xs text-sky-700 flex gap-2 items-start border border-sky-100">
            <InfoIcon className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold">High Heat Mode:</span> This range (400°C+) is for Neapolitan styles in specialized ovens (Ooni, Gozney, Wood-Fired).
              <p className="mt-1 font-mono text-[10px] bg-sky-100 inline-block px-1 rounded">
                Bake time: 60-90 seconds
              </p>
            </div>
          </div>
        )}
      </div>
    </AccordionSection>
  );
};

export default EnvironmentSection;
