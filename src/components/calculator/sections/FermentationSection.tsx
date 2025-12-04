import React from 'react';
import { DoughConfig, FermentationTechnique } from '@/types';
import { ClockIcon } from '@/components/ui/Icons';
import ChoiceButton from '@/components/ui/ChoiceButton';
import SliderInput from '@/components/ui/SliderInput';
import AccordionSection from '@/components/calculator/AccordionSection';

interface FermentationSectionProps {
  config: DoughConfig;
  onConfigChange: (newConfig: Partial<DoughConfig>) => void;
  calculatorMode: 'basic' | 'advanced';
}

const FermentationSection: React.FC<FermentationSectionProps> = ({
  config,
  onConfigChange,
  calculatorMode,
}) => {
  return (
    <AccordionSection
      title="Fermentation Method"
      description="Preferments and timing."
      icon={<ClockIcon className="h-6 w-6" />}
    >
      <div className="space-y-6">
        {/* Method Toggles */}
        <div className="grid grid-cols-3 gap-2">
          <ChoiceButton
            active={config.fermentationTechnique === FermentationTechnique.DIRECT}
            label="Direct"
            onClick={() => onConfigChange({ fermentationTechnique: FermentationTechnique.DIRECT })}
          />
          <ChoiceButton
            active={config.fermentationTechnique === FermentationTechnique.POOLISH}
            label="Poolish"
            onClick={() => onConfigChange({ fermentationTechnique: FermentationTechnique.POOLISH })}
          />
          <ChoiceButton
            active={config.fermentationTechnique === FermentationTechnique.BIGA}
            label="Biga"
            onClick={() => onConfigChange({ fermentationTechnique: FermentationTechnique.BIGA })}
          />
        </div>

        {/* Method Description Box */}
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
          <p className="text-sm font-medium text-slate-700">
            {config.fermentationTechnique === FermentationTechnique.DIRECT && "All ingredients mixed at once. Simple and fast."}
            {config.fermentationTechnique === FermentationTechnique.POOLISH && "Liquid preferment (100% hydration). Improves extensibility and flavor."}
            {config.fermentationTechnique === FermentationTechnique.BIGA && "Stiff preferment (50% hydration). Improves strength and structure."}
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {config.fermentationTechnique === FermentationTechnique.DIRECT && "Best for: Same-day pizza, sandwich bread."}
            {config.fermentationTechnique === FermentationTechnique.POOLISH && "Best for: Baguettes, Neapolitan pizza."}
            {config.fermentationTechnique === FermentationTechnique.BIGA && "Best for: Ciabatta, Roman Pan Pizza."}
          </p>
        </div>

        {/* Preferment Slider */}
        {config.fermentationTechnique !== FermentationTechnique.DIRECT && (
          <div className="animate-fade-in pt-4 border-t border-slate-200">
            <SliderInput
              label="Preferment Flour %"
              value={config.prefermentFlourPercentage}
              onChange={(val) => onConfigChange({ prefermentFlourPercentage: val })}
              min={10}
              max={100}
              step={5}
              unit="%"
              description="Percentage of total flour used in the preferment."
            />
            <p className="text-xs text-center text-slate-500 mt-2 italic">
              Standard: 20-30% for flavor, 100% for max structure.
            </p>
          </div>
        )}
      </div>
    </AccordionSection>
  );
};

export default FermentationSection;
