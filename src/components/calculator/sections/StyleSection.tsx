import React from 'react';
import { DoughConfig, BakeType, ProRecipe } from '@/types';
import { BookOpenIcon } from '@/components/ui/Icons';
import ChoiceButton from '@/components/ui/ChoiceButton';
import AccordionSection from '@/components/calculator/AccordionSection';

interface StyleSectionProps {
    config: DoughConfig;
    onBakeTypeChange: (type: BakeType) => void;
    onStyleChange: (presetId: string) => void;
    recipeStylesToShow: ProRecipe[];
    isBasic: boolean;
    currentPreset?: ProRecipe;
    onResetPreset: () => void;
}

const StyleSection: React.FC<StyleSectionProps> = ({
    config,
    onBakeTypeChange,
    onStyleChange,
    recipeStylesToShow,
    isBasic,
    currentPreset,
    onResetPreset,
}) => {
    return (
        <AccordionSection
            title="Dough Style"
            description="Start by choosing the result you're aiming for."
            icon={<BookOpenIcon className="h-6 w-6" />}
        >
            {/* Bake Type Selector */}
            <div className="grid grid-cols-3 gap-2">
                <ChoiceButton
                    active={config.bakeType === BakeType.PIZZAS}
                    label="Pizzas"
                    onClick={() => onBakeTypeChange(BakeType.PIZZAS)}
                />
                <ChoiceButton
                    active={config.bakeType === BakeType.BREADS_SAVORY}
                    label="Breads"
                    onClick={() => onBakeTypeChange(BakeType.BREADS_SAVORY)}
                />
                <ChoiceButton
                    active={config.bakeType === BakeType.SWEETS_PASTRY}
                    label="Pastry"
                    onClick={() => onBakeTypeChange(BakeType.SWEETS_PASTRY)}
                />
            </div>

            {/* Style Presets Grid */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {recipeStylesToShow.map((preset) => (
                    <ChoiceButton
                        key={preset.id}
                        active={config.stylePresetId === preset.id}
                        label={preset.name}
                        onClick={() => onStyleChange(preset.id)}
                        className="h-full"
                    />
                ))}
            </div>
        </AccordionSection>
    );
};

export default StyleSection;
