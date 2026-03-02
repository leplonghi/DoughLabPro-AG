
import React, { useState, useMemo } from 'react';
import { DoughConfig, BakeType, DoughStylePreset, CustomPreset } from '@/types';
import { BookOpenIcon, MagnifyingGlassIcon, PizzaSliceIcon, FlourIcon, SparklesIcon } from '@/components/ui/Icons';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import AccordionSection from '@/components/calculator/AccordionSection';
import { useTranslation } from '@/i18n';

interface StyleSectionProps {
    id?: string;
    config: DoughConfig;
    onBakeTypeChange: (type: BakeType) => void;
    onStyleChange: (presetId: string) => void;
    recipeStylesToShow: DoughStylePreset[];
    isBasic: boolean;
    currentPreset?: DoughStylePreset;
    onResetPreset: () => void;
    customPresets?: CustomPreset[];
    isFavorite: (id: string, type: string) => boolean;
}

const StyleSection: React.FC<StyleSectionProps> = ({
    id,
    config,
    onBakeTypeChange,
    onStyleChange,
    recipeStylesToShow,
    isBasic,
    currentPreset,
    onResetPreset,
    customPresets = [],
    isFavorite,
}) => {
    const { t } = useTranslation(['common', 'calculator', 'styles']);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('All');

    // Filtering Logic
    const { uniqueCountries, filteredStyles } = useMemo(() => {
        let styles = recipeStylesToShow;
        if (searchTerm) {
            styles = styles.filter(s =>
                s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (s.region && s.region.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }

        const countries = Array.from(new Set(styles.map(s => s.country || t('calculator.other_257')))).sort();
        if (countries.includes(t('calculator.other_257'))) {
            countries.push(countries.splice(countries.indexOf(t('calculator.other_257')), 1)[0]);
        }

        if (selectedCountry === t('calculator.favorites_259')) {
            styles = styles.filter(s => isFavorite && isFavorite(s.id, 'style'));
        } else if (selectedCountry !== 'All') {
            styles = styles.filter(s => (s.country || t('calculator.other_257')) === selectedCountry);
        }

        return { uniqueCountries: countries, filteredStyles: styles };
    }, [recipeStylesToShow, searchTerm, selectedCountry, isFavorite, t]);

    const BAKE_TYPES = [
        { id: BakeType.PIZZAS, label: t('calculator.pizzas'), icon: <PizzaSliceIcon /> },
        { id: BakeType.BREADS_SAVORY, label: t('calculator.breads'), icon: <FlourIcon /> },
        { id: BakeType.SWEETS_PASTRY, label: t('calculator.pastry'), icon: <SparklesIcon /> },
    ];

    return (
        <AccordionSection
            id={id || "style-selector"}
            index={1}
            accentColor="lime"
            title={
                <div className="flex items-center gap-2">
                    <span>{t('calculator.dough_style')}</span>
                    {config.baseStyleName && (
                        <span className="text-[10px] bg-lime-100 text-lime-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                            {config.baseStyleName}
                        </span>
                    )}
                </div>
            }
            description={!config.baseStyleName ? t('calculator.style_section_description') : undefined}
            icon={<BookOpenIcon />}
        >
            {/* 1. Category Tabs - Compact Segmented Control */}
            <div className="flex bg-slate-100/80 p-1 rounded-xl gap-1 mb-4 overflow-x-auto">
                {BAKE_TYPES.map((type) => {
                    const isActive = config.bakeType === type.id;
                    return (
                        <button
                            key={type.id}
                            onClick={() => onBakeTypeChange(type.id)}
                            className={`
                                flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-lg transition-all duration-200 min-w-fit min-h-[44px]
                                ${isActive
                                    ? 'bg-white text-[#51a145] shadow-sm font-bold'
                                    : 'text-slate-500 hover:text-[#51a145] hover:bg-white/50 font-medium'
                                }
                            `}
                        >
                            <span className={isActive ? 'opacity-100' : 'opacity-70'}>
                                {React.cloneElement(type.icon as React.ReactElement<any>, { size: 14 })}
                            </span>
                            <span className="text-[11px] uppercase tracking-wide">{type.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* 2. Compact Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
                {/* Search Input */}
                <div className="relative flex-grow group">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-3.5 w-3.5 text-slate-400 group-focus-within:text-[#51a145] transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-xl border-slate-200 bg-slate-50 py-3 pl-9 pr-8 text-xs placeholder-slate-400 focus:border-[#51a145] focus:bg-white focus:ring-4 focus:ring-[#51a145]/5 transition-all outline-none min-h-[44px]"
                        placeholder={t('calculator.find_a_style')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 min-h-[44px] min-w-[44px] justify-center"
                        >
                            <span className="text-[10px] font-bold">✕</span>
                        </button>
                    )}
                </div>

                {/* Country Filter Chips - Horizontal Scroll */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar sm:max-w-[50%]">
                    <button
                        onClick={() => setSelectedCountry('All')}
                        className={`flex-shrink-0 px-3 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border min-h-[44px]
                            ${selectedCountry === 'All'
                                ? 'bg-[#51a145] text-white border-[#51a145] shadow-sm'
                                : 'bg-white text-slate-500 border-slate-200 hover:border-[#51a145] hover:text-[#51a145]'}
                        `}
                    >{t('calculator:ingredient_creator.all', { defaultValue: 'ALL' })}</button>
                    <button
                        onClick={() => setSelectedCountry(t('calculator.favorites_259'))}
                        className={`flex-shrink-0 px-3 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 border min-h-[44px]
                            ${selectedCountry === t('calculator.favorites_259')
                                ? 'bg-amber-50 text-amber-600 border-amber-200'
                                : 'bg-white text-slate-500 border-slate-200 hover:text-amber-500 hover:border-amber-200'}
                        `}
                    >
                        <BookmarkIcon className="h-3 w-3" />
                    </button>
                    {uniqueCountries.map(country => (
                        <button
                            key={country}
                            onClick={() => setSelectedCountry(country)}
                            className={`flex-shrink-0 px-3 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border min-h-[44px]
                                ${selectedCountry === country
                                    ? 'bg-[#51a145] text-white border-[#51a145] shadow-sm'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-[#51a145] hover:text-[#51a145]'}
                            `}
                        >
                            {t('countries.' + country.toLowerCase(), { defaultValue: country })}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3. My Custom Presets (Compact) */}
            {customPresets.some(p => p.config.bakeType === config.bakeType) && (
                <div className="mb-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {customPresets.filter(p => p.config.bakeType === config.bakeType).map(preset => {
                            const isSelected = config.stylePresetId === preset.id;
                            return (
                                <button
                                    key={preset.id}
                                    onClick={() => onStyleChange(preset.id)}
                                    className={`
                                            flex-shrink-0 relative group flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-xl transition-all duration-200 border min-h-[44px]
                                            ${isSelected
                                            ? 'bg-[#51a145] text-white border-[#51a145] shadow-md'
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-[#51a145]'
                                        }
                                        `}
                                >
                                    <BookmarkIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-500'}`} />
                                    <div className="text-left">
                                        <div className="text-[10px] font-bold">{preset.name}</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* 4. High Density Library Grid */}
            <div className="min-h-[100px]">
                {filteredStyles.length > 0 ? (
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                        {filteredStyles.map((preset) => {
                            const isSelected = config.stylePresetId === preset.id;
                            const isFav = isFavorite && isFavorite(preset.id, 'style');

                            return (
                                <button
                                    key={preset.id}
                                    onClick={() => onStyleChange(preset.id)}
                                    className={`
                                        relative group flex flex-col p-3 rounded-xl transition-all duration-200 text-left border h-full min-h-[44px]
                                        ${isSelected
                                            ? 'bg-[#51a145] text-white border-[#51a145] shadow-md ring-2 ring-[#51a145]/20'
                                            : 'bg-white text-slate-700 border-slate-100 hover:border-[#51a145]/50 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    {isFav && !isSelected && (
                                        <div className="absolute top-1.5 right-1.5 text-amber-400">
                                            <BookmarkIcon className="w-3 h-3 fill-current" />
                                        </div>
                                    )}
                                    <div className={`text-[10px] sm:text-xs font-bold leading-tight mb-1 line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                                        {t(preset.name)}
                                    </div>
                                    {/* Description only visible on hover for desktop, or very subtle text */}
                                    <div className={`text-[9px] leading-tight line-clamp-2 mt-auto ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                                        {t(preset.description || '')}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                        <p className="text-xs text-slate-500 font-bold">{t('calculator.no_styles_found')} "{searchTerm}"</p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="mt-2 text-[10px] font-bold text-[#1B4332] hover:underline uppercase tracking-widest"
                        >
                            {t('calculator.clear_search')}
                        </button>
                    </div>
                )}
            </div>
        </AccordionSection>
    );
};

export default StyleSection;