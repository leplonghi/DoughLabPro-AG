import React, { useEffect, useMemo, useRef, useState } from 'react';
import { DoughConfig, BakeType, DoughStylePreset, CustomPreset } from '@/types';
import { BookOpenIcon, MagnifyingGlassIcon, PizzaSliceIcon, FlourIcon, SignalIcon, ComposeIcon } from '@/components/ui/Icons';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import ChoiceButton from '@/components/ui/ChoiceButton';
import AccordionSection from '@/components/calculator/AccordionSection';
import { InfoTooltip } from '@/components/ui/InfoTooltip';
import { useTranslation } from '@/i18n';

interface StyleSectionProps {
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
    const [previewStyleId, setPreviewStyleId] = useState<string | null>(null);
    const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const longPressTriggeredRef = useRef(false);

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
    }, [recipeStylesToShow, searchTerm, selectedCountry, isFavorite]);

    const BAKE_TYPES = [
        { id: BakeType.PIZZAS, label: t('calculator.pizzas'), icon: <PizzaSliceIcon /> },
        { id: BakeType.BREADS_SAVORY, label: t('calculator.breads'), icon: <FlourIcon /> },
        { id: BakeType.SWEETS_PASTRY, label: t('calculator.pastry'), icon: <SignalIcon /> },
    ];

    const clearLongPressTimer = () => {
        if (longPressTimerRef.current) {
            clearTimeout(longPressTimerRef.current);
            longPressTimerRef.current = null;
        }
    };

    useEffect(() => () => clearLongPressTimer(), []);

    useEffect(() => {
        if (previewStyleId && !filteredStyles.some((style) => style.id === previewStyleId)) {
            setPreviewStyleId(null);
        }
    }, [filteredStyles, previewStyleId]);

    const startPreviewHold = (styleId: string) => {
        longPressTriggeredRef.current = false;
        clearLongPressTimer();
        longPressTimerRef.current = setTimeout(() => {
            longPressTriggeredRef.current = true;
            setPreviewStyleId(styleId);
        }, 320);
    };

    const stopPreviewHold = () => {
        clearLongPressTimer();
    };

    const handleStyleCardClick = (presetId: string) => {
        if (longPressTriggeredRef.current) {
            longPressTriggeredRef.current = false;
            return;
        }
        setPreviewStyleId(null);
        onStyleChange(presetId);
    };

    return (
        <AccordionSection
            id="style-selector"
            title={
                <div className="flex items-center gap-2">
                    <span>{t('calculator.dough_style')}</span>
                    <InfoTooltip
                        variant="tutorial"
                        size="lg"
                        position="bottom"
                        content={
                            <div>
                                <p className="font-bold mb-2">🎯 Como escolher seu estilo:</p>
                                <ul className="space-y-1.5 text-[11px]">
                                    <li>• <strong>Pizzas:</strong> Napolitana, NY, Detroit e mais</li>
                                    <li>• <strong>Pães:</strong> Baguete, Ciabatta, Focaccia</li>
                                    <li>• <strong>Confeitaria:</strong> Croissants, Brioche, Babka</li>
                                </ul>
                                <p className="mt-3 text-[10px] opacity-80">💡 Cada estilo ajusta automaticamente hidratação, fermentação e ingredientes!</p>
                            </div>
                        }
                    />
                </div>
            }
            description={t('calculator.style_section_description')}
            icon={<BookOpenIcon />}
        >
            {/* 1. Category Tabs */}
            <div className="dlp-calc-rail mb-3 grid grid-cols-3 gap-1 rounded-[1.2rem] p-1 sm:mb-6 sm:gap-2 sm:rounded-[1.6rem] sm:p-1.5">
                {BAKE_TYPES.map((type) => {
                    const isActive = config.bakeType === type.id;
                    return (
                        <button
                            key={type.id}
                            onClick={() => onBakeTypeChange(type.id)}
                            className={`
                                dlp-calc-option relative group/item flex min-h-[2.9rem] items-center justify-center gap-1 rounded-[1rem] px-2 py-2.5 sm:gap-2 sm:rounded-[1.2rem] sm:px-4 sm:py-3
                                ${isActive
                                    ? 'dlp-calc-option--active'
                                    : ''
                                }
                            `}
                        >
                            <span className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'opacity-70 group-hover/item:scale-110 group-hover/item:opacity-100 group-hover/item:text-[#51a145]'}`}>
                                {React.cloneElement(type.icon as React.ReactElement, { size: 18 })}
                            </span>
                            <span className="hidden text-xs font-bold font-heading sm:inline">{type.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* 2. Style Search Bar */}
            <div className="group relative mb-3 sm:mb-5">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <MagnifyingGlassIcon className="h-4 w-4 text-slate-400 group-focus-within:text-[#51a145] transition-colors" />
                </div>
                <input
                    type="text"
                    className="dlp-calc-field block w-full rounded-[1.25rem] border py-3 pl-11 pr-12 text-sm text-slate-800 placeholder-slate-400 outline-none dark:text-slate-100 sm:rounded-[1.45rem] sm:py-3.5"
                    placeholder={t('calculator.find_a_style')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <InfoTooltip
                        variant="tutorial"
                        position="left"
                        content="🔍 Digite para filtrar estilos por nome ou região. Ex: 'napolitana', 'francesa', 'sourdough'"
                    />
                </div>
            </div>

            {/* 3. Country & Custom Presets */}
            <div className="mb-5 space-y-3 sm:mb-8 sm:space-y-6">
                {/* Country Filter Chips */}
                <div className="grid gap-2 sm:hidden">
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={() => setSelectedCountry('All')}
                            className={`rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-all
                                ${selectedCountry === 'All' ? 'dlp-calc-option dlp-calc-option--active' : 'dlp-calc-panel--subtle border text-slate-600 hover:text-[#51a145]'}
                            `}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setSelectedCountry(t('calculator.favorites_259'))}
                            className={`flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-all
                                ${selectedCountry === t('calculator.favorites_259') ? 'border border-amber-200 bg-amber-50 text-amber-700 shadow-sm' : 'dlp-calc-panel--subtle border text-slate-600 hover:text-[#51a145]'}
                            `}
                        >
                            <BookmarkIcon className="h-3 w-3" /> {t('ui.favorites')}
                        </button>
                    </div>
                    <select
                        value={selectedCountry !== 'All' && selectedCountry !== t('calculator.favorites_259') ? selectedCountry : 'All'}
                        onChange={(event) => setSelectedCountry(event.target.value)}
                        className="dlp-calc-field w-full rounded-[1.05rem] border px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-800 outline-none"
                    >
                        <option value="All">All regions</option>
                        {uniqueCountries.map(country => (
                            <option key={country} value={country}>
                                {t('countries.' + country.toLowerCase(), { defaultValue: country })}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="hidden flex-wrap items-center gap-2 pb-2 sm:flex">
                    <button
                        onClick={() => setSelectedCountry('All')}
                        className={`flex-shrink-0 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-all
                            ${selectedCountry === 'All' ? 'dlp-calc-option dlp-calc-option--active' : 'dlp-calc-panel--subtle border text-slate-600 hover:text-[#51a145]'}
                        `}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setSelectedCountry(t('calculator.favorites_259'))}
                        className={`flex flex-shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-all
                            ${selectedCountry === t('calculator.favorites_259') ? 'border border-amber-200 bg-amber-50 text-amber-700 shadow-sm' : 'dlp-calc-panel--subtle border text-slate-600 hover:text-[#51a145]'}
                        `}
                    >
                        <BookmarkIcon className="h-3 w-3" /> {t('ui.favorites')}
                    </button>
                    {uniqueCountries.map(country => (
                        <button
                            key={country}
                            onClick={() => setSelectedCountry(country)}
                            className={`flex-shrink-0 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-all
                                ${selectedCountry === country ? 'dlp-calc-option dlp-calc-option--active' : 'dlp-calc-panel--subtle border text-slate-600 hover:text-[#51a145]'}
                            `}
                        >
                            {t('countries.' + country.toLowerCase(), { defaultValue: country })}
                        </button>
                    ))}
                </div>

                {/* My Custom Presets */}
                {customPresets.some(p => p.config.bakeType === config.bakeType) && (
                    <div className="animate-fade-in">
                        <h3 className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:mb-4">
                            <BookmarkIcon className="h-3 w-3" />
                            {t('styles.my_custom_presets')}
                        </h3>
                        <div className="grid gap-2 pb-1 sm:grid-cols-2 sm:gap-3 xl:grid-cols-3">
                            {customPresets
                                .filter(p => p.config.bakeType === config.bakeType)
                                .map(preset => {
                                    const isSelected = config.stylePresetId === preset.id;
                                    return (
                                        <button
                                            key={preset.id}
                                            onClick={() => onStyleChange(preset.id)}
                                            data-selected={isSelected ? 'true' : 'false'}
                                            className={`
                                                dlp-calc-panel dlp-style-tile relative group/item flex min-h-[104px] w-full flex-col rounded-[1.3rem] p-3.5 text-left transition-all duration-300 sm:min-h-[112px] sm:rounded-[1.5rem] sm:p-4
                                                ${isSelected
                                                    ? 'border-emerald-300/80 bg-[linear-gradient(180deg,rgba(239,250,242,0.98),rgba(229,246,234,0.98))] text-[#16351f] shadow-[0_24px_36px_-26px_rgba(47,139,73,0.45)]'
                                                    : 'text-slate-600 hover:-translate-y-1 hover:border-emerald-200/80'
                                                }
                                            `}
                                        >
                                            <span className="dlp-style-tile__title text-[13px] font-bold font-heading leading-snug line-clamp-2 sm:text-xs sm:line-clamp-1">{preset.name}</span>
                                            <span className="dlp-style-tile__meta mt-1 text-[10px] transition-colors">
                                                {new Date(preset.createdAt).toLocaleDateString()}
                                            </span>
                                        </button>
                                    );
                                })}
                        </div>
                    </div>
                )}
            </div>

            {/* 4. The Library Grid */}
            <div className="relative min-h-[200px]">
                {filteredStyles.length > 0 ? (
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
                        {filteredStyles.map((preset) => {
                            const isSelected = config.stylePresetId === preset.id;
                            const isPreviewing = previewStyleId === preset.id;
                            return (
                                <button
                                    key={preset.id}
                                    onClick={() => handleStyleCardClick(preset.id)}
                                    onPointerDown={() => startPreviewHold(preset.id)}
                                    onPointerUp={stopPreviewHold}
                                    onPointerLeave={stopPreviewHold}
                                    onPointerCancel={stopPreviewHold}
                                    onContextMenu={(event) => event.preventDefault()}
                                    data-selected={isSelected ? 'true' : 'false'}
                                    data-preview={isPreviewing ? 'true' : 'false'}
                                    aria-pressed={isSelected}
                                    className={`
                                        dlp-calc-panel dlp-style-tile relative group/item flex min-h-[118px] flex-col rounded-[1.35rem] p-3.5 text-left transition-all duration-300 sm:min-h-[104px] sm:rounded-[1.7rem] sm:p-4
                                        ${isPreviewing ? 'min-h-[208px] p-4 shadow-[0_28px_52px_-30px_rgba(47,139,73,0.36)] sm:col-span-2 sm:min-h-[196px] sm:p-5' : ''}
                                        ${isSelected
                                            ? 'border-emerald-300/80 bg-[linear-gradient(180deg,rgba(240,250,243,0.98),rgba(229,246,234,0.98))] text-[#16351f] shadow-[0_24px_40px_-28px_rgba(47,139,73,0.44)]'
                                            : 'text-slate-700 hover:-translate-y-1 hover:border-emerald-200/80'
                                        }
                                    `}
                                >
                                    <div className="dlp-style-tile__title mb-auto text-[15px] font-bold font-heading leading-[1.15] tracking-[-0.02em] transition-colors sm:text-[13px] sm:leading-snug">
                                        {t(preset.name)}
                                    </div>
                                    <div className="dlp-style-tile__meta mt-1.5 text-[10px] font-bold uppercase tracking-[0.12em] leading-relaxed line-clamp-3 transition-colors sm:mt-2 sm:text-[9px] sm:tracking-[0.16em] sm:line-clamp-2">
                                        {t(preset.description || '')}
                                    </div>
                                    {isPreviewing ? (
                                        <div className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                                            <div className="grid grid-cols-2 gap-2 text-left">
                                                <div className="rounded-[1rem] border border-emerald-100 bg-white/90 px-3 py-2">
                                                    <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-dlp-text-muted">Hydration</div>
                                                    <div className="mt-1 text-sm font-black text-dlp-text-primary">{Math.round(preset.defaultHydration)}%</div>
                                                </div>
                                                <div className="rounded-[1rem] border border-emerald-100 bg-white/90 px-3 py-2">
                                                    <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-dlp-text-muted">Salt</div>
                                                    <div className="mt-1 text-sm font-black text-dlp-text-primary">{Math.round(preset.defaultSalt * 10) / 10}%</div>
                                                </div>
                                                <div className="rounded-[1rem] border border-emerald-100 bg-white/90 px-3 py-2">
                                                    <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-dlp-text-muted">Region</div>
                                                    <div className="mt-1 text-[11px] font-bold leading-snug text-dlp-text-primary line-clamp-2">{preset.region || preset.country || 'Global'}</div>
                                                </div>
                                                <div className="rounded-[1rem] border border-emerald-100 bg-white/90 px-3 py-2">
                                                    <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-dlp-text-muted">Enrichment</div>
                                                    <div className="mt-1 text-[11px] font-bold leading-snug text-dlp-text-primary">
                                                        {preset.defaultOil > 0 || preset.defaultSugar > 0 ? 'Enriched' : 'Lean dough'}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-dlp-text-muted">
                                                Solte e toque para selecionar
                                            </div>
                                        </div>
                                    ) : null}
                                    {isSelected && <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(82,180,107,0.12)]" />}
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mx-auto mb-4">
                            <MagnifyingGlassIcon className="h-6 w-6 text-slate-300" />
                        </div>
                        <p className="text-sm text-slate-500 font-bold font-heading">{t('calculator.no_styles_found')} "{searchTerm}"</p>
                        <button onClick={() => setSearchTerm('')} className="mt-3 text-xs font-bold text-[#1B4332] hover:underline uppercase tracking-widest">{t('calculator.clear_search')}</button>
                    </div>
                )}
            </div>

            {/* Custom/Selected Indicator */}
            {(config.baseStyleName && !recipeStylesToShow.some(p => p.id === config.stylePresetId)) && (
                <div className="mt-10 border-t border-slate-100 pt-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">{t('calculator.selected_custom_style')}</p>
                    <div className="bg-gradient-to-r from-[#51a145] to-[#1B4332] text-white p-5 rounded-3xl shadow-xl shadow-emerald-900/10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                                <ComposeIcon className="text-white" />
                            </div>
                            <span className="text-lg font-bold font-heading">{config.baseStyleName}</span>
                        </div>
                        <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Custom Formula</div>
                    </div>
                </div>
            )}
        </AccordionSection>
    );
};

export default StyleSection;



