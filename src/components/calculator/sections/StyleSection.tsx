import React, { useState, useMemo } from 'react';
import { DoughConfig, BakeType, DoughStylePreset } from '@/types';
import { BookOpenIcon, MagnifyingGlassIcon, PizzaSliceIcon, FlourIcon, SparklesIcon } from '@/components/ui/Icons';
import ChoiceButton from '@/components/ui/ChoiceButton';
import AccordionSection from '@/components/calculator/AccordionSection';
import { useTranslation } from '@/i18n';

interface StyleSectionProps {
    config: DoughConfig;
    onBakeTypeChange: (type: BakeType) => void;
    onStyleChange: (presetId: string) => void;
    recipeStylesToShow: DoughStylePreset[];
    isBasic: boolean;
    currentPreset?: DoughStylePreset;
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
  const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');

    // Grouping Logic
    const groupedStyles = useMemo(() => {
        let styles = recipeStylesToShow;

        // Filter by Search
        if (searchTerm) {
            styles = styles.filter(s =>
                s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (s.region && s.region.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        // Group by Region
        const groups: Record<string, DoughStylePreset[]> = {};
        styles.forEach(style => {
            const region = style.region || 'Other';
            if (!groups[region]) groups[region] = [];
            groups[region].push(style);
        });

        // Sort keys (International/Other last?)
        return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
    }, [recipeStylesToShow, searchTerm]);

    const BAKE_TYPES = [
        { id: BakeType.PIZZAS, label: 'Pizzas', icon: <PizzaSliceIcon className="h-5 w-5" /> },
        { id: BakeType.BREADS_SAVORY, label: 'Breads', icon: <FlourIcon className="h-5 w-5" /> },
        { id: BakeType.SWEETS_PASTRY, label: 'Pastry', icon: <SparklesIcon className="h-5 w-5" /> },
    ];

    return (
        <AccordionSection
            title={t('calculator.dough_style')}
            description="Start by choosing the result you're aiming for."
            icon={<BookOpenIcon className="h-6 w-6" />}
        >
            {/* 1. DISTINCT BAKE TYPE SELECTOR (Tabs) */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                {BAKE_TYPES.map((type) => {
                    const isActive = config.bakeType === type.id;
                    return (
                        <button
                            key={type.id}
                            onClick={() => onBakeTypeChange(type.id)}
                            className={`
                                relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all duration-200
                                ${isActive
                                    ? 'border-dlp-accent bg-dlp-accent/10 text-dlp-accent shadow-sm'
                                    : 'border-slate-100 bg-white text-slate-500 hover:border-slate-200 hover:bg-slate-50'
                                }
                            `}
                        >
                            <div className={`mb-1 ${isActive ? 'text-dlp-accent' : 'text-slate-400'}`}>
                                {type.icon}
                            </div>
                            <span className="text-sm font-bold">{type.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* 2. STYLE SEARCH BAR */}
            <div className="relative mb-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    className="block w-full rounded-md border-slate-200 bg-slate-50/50 py-1.5 pl-9 pr-3 text-xs placeholder-slate-400 focus:border-dlp-accent focus:bg-white focus:ring-1 focus:ring-dlp-accent transition-all"
                    placeholder={t('calculator.find_a_style')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* 3. STATIC GRID (No Scroll) */}
            <div className="space-y-8 mt-6">
                {groupedStyles.length > 0 ? (
                    groupedStyles.map(([region, styles]) => (
                        <div key={region} className="animate-fade-in relative group/section">
                            <div className="flex items-center justify-between mb-3 px-1">
                                <h4 className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-2"></span>
                                    {region}
                                </h4>
                                <span className="text-[10px] text-slate-300 font-medium">{styles.length} styles</span>
                            </div>

                            {/* Content Grid - Adapts to Mode */}
                            <div className={`
                                grid gap-3
                                ${isBasic
                                    ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' // Guided: Larger cards
                                    : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6' // Pro: Dense chips
                                }
                            `}>
                                {styles.map((preset) => {
                                    const isSelected = config.stylePresetId === preset.id;
                                    return (
                                        <button
                                            key={preset.id}
                                            onClick={() => onStyleChange(preset.id)}
                                            className={`
                                                relative flex flex-col items-start text-left transition-all duration-200
                                                ${isBasic
                                                    ? 'p-3 rounded-xl border' // Guided Styles
                                                    : 'p-2 rounded-lg border items-center text-center' // Pro Styles
                                                }
                                                ${isSelected
                                                    ? 'bg-lime-50 border-lime-500 ring-1 ring-lime-500 shadow-md transform scale-[1.02] z-10'
                                                    : 'bg-white border-slate-200 hover:border-lime-200 hover:shadow-sm hover:-translate-y-0.5'
                                                }
                                            `}
                                        >
                                            {/* Selection Indicator (Dot) */}
                                            {isSelected && (
                                                <div className={`absolute rounded-full bg-lime-500 ${isBasic ? 'top-2 right-2 w-2 h-2' : 'top-1 right-1 w-1.5 h-1.5'}`} />
                                            )}

                                            <span className={`font-bold leading-tight ${isSelected ? 'text-lime-800' : 'text-slate-700'} ${isBasic ? 'text-sm mb-1 line-clamp-2' : 'text-[11px] line-clamp-1'}`}>
                                                {preset.name}
                                            </span>

                                            {/* Description - ONLY IN GUIDED MODE */}
                                            {isBasic && preset.description && (
                                                <p className={`text-[10px] leading-tight line-clamp-3 mt-1 ${isSelected ? 'text-lime-600/80' : 'text-slate-400'}`}>
                                                    {preset.description}
                                                </p>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 flex flex-col items-center justify-center">
                        <MagnifyingGlassIcon className="h-8 w-8 text-slate-300 mb-2" />
                        <p className="text-sm text-slate-500 font-medium">No styles found matching "{searchTerm}"</p>
                        <button onClick={() => setSearchTerm('')} className="mt-2 text-xs text-lime-600 hover:underline">{t('calculator.clear_search')}</button>
                    </div>
                )}
            </div>

            {/* Custom/Selected Indicator if not in list */}
            {(config.baseStyleName && !recipeStylesToShow.some(p => p.id === config.stylePresetId)) && (
                <div className="mt-4 border-t border-dashed border-slate-200 pt-4">
                    <p className="text-xs text-slate-400 mb-2">{t('calculator.selected_custom_style')}</p>
                    <ChoiceButton
                        active={true}
                        label={config.baseStyleName}
                        onClick={() => { }} // No-op
                        className="h-full border-lime-500 bg-lime-50 text-lime-700 w-full sm:w-1/2"
                    />
                </div>
            )}
        </AccordionSection>
    );
};

export default StyleSection;
