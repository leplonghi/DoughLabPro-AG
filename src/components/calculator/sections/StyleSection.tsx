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
        { id: BakeType.PIZZAS, label: t('calculator.category_pizzas'), icon: <PizzaSliceIcon className="h-5 w-5" /> },
        { id: BakeType.BREADS_SAVORY, label: t('calculator.category_breads'), icon: <FlourIcon className="h-5 w-5" /> },
        { id: BakeType.SWEETS_PASTRY, label: t('calculator.category_pastry'), icon: <SparklesIcon className="h-5 w-5" /> },
    ];

    return (
        <AccordionSection
            title={t('calculator.dough_style')}
            description={t('calculator.style_section_description')}
            icon={<BookOpenIcon className="h-6 w-6" />}
        >
            {/* 1. DISTINCT BAKE TYPE SELECTOR (Tabs) */}
            <div className="grid grid-cols-3 gap-2 mb-4">
                {BAKE_TYPES.map((type) => {
                    const isActive = config.bakeType === type.id;
                    return (
                        <button
                            key={type.id}
                            onClick={() => onBakeTypeChange(type.id)}
                            className={`
                                relative flex items-center justify-center gap-2 p-2 rounded-lg border transition-all duration-200
                                ${isActive
                                    ? 'border-dlp-accent bg-dlp-accent/10 text-dlp-accent shadow-sm'
                                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50'
                                }
                            `}
                        >
                            <div className={`${isActive ? 'text-dlp-accent' : 'text-slate-400'}`}>
                                {type.icon}
                            </div>
                            <span className="text-xs font-bold md:text-sm">{type.label}</span>
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
            <div className="space-y-6 mt-4">
                {groupedStyles.length > 0 ? (
                    groupedStyles.map(([region, styles]) => (
                        <div key={region} className="animate-fade-in relative group/section">
                            <div className="flex items-center justify-between mb-2 px-1">
                                <h4 className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                                    <span className="w-1 h-1 rounded-full bg-slate-300 mr-2"></span>
                                    {region}
                                </h4>
                                <span className="text-[9px] text-slate-300 font-medium">{styles.length}</span>
                            </div>

                            {/* Content Grid - Adapts to Mode */}
                            <div className={`
                                grid gap-2
                                ${isBasic
                                    ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5' // Guided: More compact
                                    : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8' // Pro: Very dense
                                }
                            `}>
                                {styles.map((preset) => {
                                    const isSelected = config.stylePresetId === preset.id;
                                    return (
                                        <button
                                            key={preset.id}
                                            onClick={() => onStyleChange(preset.id)}
                                            className={`
                                                relative flex flex-col items-start text-left transition-all duration-200 group
                                                ${isBasic
                                                    ? 'p-2.5 rounded-lg border min-h-[80px]' // Guided Styles
                                                    : 'p-1.5 rounded-md border items-center text-center justify-center min-h-[60px]' // Pro Styles
                                                }
                                                ${isSelected
                                                    ? 'bg-lime-50/50 border-lime-500 ring-1 ring-lime-500 shadow-sm z-10'
                                                    : 'bg-white border-slate-100 hover:border-lime-300 hover:bg-slate-50 hover:shadow-sm'
                                                }
                                            `}
                                        >
                                            {/* Selection Indicator (Dot) */}
                                            {isSelected && (
                                                <div className={`absolute rounded-full bg-lime-500 ${isBasic ? 'top-2 right-2 w-1.5 h-1.5' : 'top-1 right-1 w-1 h-1'}`} />
                                            )}

                                            <span className={`font-bold leading-tight w-full ${isSelected ? 'text-lime-700' : 'text-slate-600'} ${isBasic ? 'text-xs mb-0.5 line-clamp-2' : 'text-[10px] line-clamp-2'}`}>
                                                {preset.name}
                                            </span>

                                            {/* Description - ONLY IN GUIDED MODE */}
                                            {isBasic && preset.description && (
                                                <p className={`text-[9px] leading-tight line-clamp-2 mt-0.5 ${isSelected ? 'text-lime-600/70' : 'text-slate-400'}`}>
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
                        <p className="text-sm text-slate-500 font-medium">{t('calculator.no_styles_found')} "{searchTerm}"</p>
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
