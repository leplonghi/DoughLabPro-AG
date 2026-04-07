<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
import { DoughStyleDefinition, EditorialTextBlock } from '@/types/styles';
=======
import React, { useState, useEffect, useMemo } from 'react';
import { DoughStyle, ProcessStep, FlavorProfile } from '@/types/dough';
import { STYLES_DATA } from '@/data/styles/registry';
import { DoughStyleDefinition } from '@/types/styles';
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import AppShellHeader from '@/components/ui/AppShellHeader';
import AppSurface from '@/components/ui/AppSurface';
import { useUser } from '@/contexts/UserProvider';
<<<<<<< HEAD
=======
import {
    ArrowLeftIcon as ArrowLeft,
    HeartIcon as Heart,
    CalculatorIcon as Calculator,
    ClockIcon as Clock,
    ThermometerIcon as Thermometer,
    YeastIcon as Activity,
    LightBulbIcon as Lightbulb,
    ChefHatIcon as ChefHat,
    GlobeAltIcon as MapPin,
    BookOpenIcon as BookOpen,
    WaterIcon as Droplets,
    CheckCircleIcon as CheckCircle2,
    FermentationIcon as Wind,
    FireIcon as Flame,
    WeightIcon as Scale,
    AlertTriangleIcon as AlertTriangle,
    PhotoIcon as Camera,
    FlourIcon as Wheat,
    ChevronDownIcon as ChevronDown,
    ChevronUpIcon as ChevronUp,
    BookmarkSquareIcon as Bookmark,
    HistoryIcon as HistoryIcon,
    GlobeAmericasIcon as Globe,
    FlaskIcon as Lab,
    TargetIcon as Target,
    HelpCircleIcon as Help,
    ArrowsRightLeftIcon as Compare,
    UtensilsIcon as Tool
} from '@/components/ui/Icons';
import { uploadImage } from '@/services/storageService';
import { AffiliateGrid } from '@/components/AffiliateGrid';
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
import { useTranslation } from '@/i18n';
import { FLAVOR_COMPONENTS } from '@/data/flavorComponents';
import FlavorComponentProfileModal from '@/components/FlavorComponentProfileModal';
import { FlavorComponent } from '@/types/flavor';
<<<<<<< HEAD
import { getPageMeta } from '@/app/appShell';
import { learnContent } from '@/data/learn-content';
import { getStyleEditorialViewModel } from '@/utils/styleEditorialAdapter';
import { useStyles } from '@/contexts/StylesProvider';
import { AffiliateGrid } from '@/components/AffiliateGrid';
import {
    ArrowLeftIcon as ArrowLeft,
    CalculatorIcon as Calculator,
    CheckCircleIcon as CheckCircle,
    ChefHatIcon as ChefHat,
    ClockIcon as Clock,
    FireIcon as Flame,
    HeartIcon as Heart,
    InfoIcon as Info,
    InsightsIcon as Sparkline,
    LightBulbIcon as Lightbulb,
    ThermometerIcon as Thermometer,
    WaterIcon as Droplets,
} from '@/components/ui/Icons';

interface StyleDetailPageProps {
    style?: DoughStyleDefinition | null;
    onLoadAndNavigate: (style: DoughStyleDefinition) => void;
    onBack: () => void;
    onNavigate?: (page: string, params?: string) => void;
}

const blockClass = 'rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.35)]';

const CitationPills = ({ ids }: { ids?: string[] }) =>
    ids?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
            {ids.map((id, index) => (
                <a key={`${id}-${index}`} href={`#reference-${id}`} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700">
                    [{index + 1}]
                </a>
            ))}
        </div>
    ) : null;

const TextBlockCard: React.FC<{ block: EditorialTextBlock }> = ({ block }) => (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
        {block.title ? <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{block.title}</div> : null}
        <p className="mt-3 text-sm leading-7 text-slate-700">{block.body}</p>
        <CitationPills ids={block.citationIds} />
    </div>
);

export const StyleDetailPage: React.FC<StyleDetailPageProps> = ({ style, onLoadAndNavigate, onBack, onNavigate }) => {
    const { t } = useTranslation(['common', 'styles']);
    const { styles: allStyles } = useStyles();
    const { isFavorite, toggleFavorite } = useUser();
=======

// --- ADAPTER ---
function smartTranslate(value: string | undefined, t: (key: string) => string): string {
    if (!value) return '';
    if (value.length > 200 || value.startsWith(' ') || value.includes('. ')) return value;
    if (value.startsWith('styles.') || value.startsWith('common.') || value.startsWith('ui.') || value.startsWith('general.')) return t(value);
    if (value.includes('_') && value.length < 60) return t(value);
    return value;
}

function mapDefinitionToStyle(def: DoughStyleDefinition, t: (key: string, options?: any) => string): DoughStyle {
    const processSteps: ProcessStep[] = (def.technicalProfile.fermentationSteps || []).map((stepStr, index) => {
        const scienceMatch = stepStr.match(/\[Science: (.*?)\]/);
        const scienceKey = scienceMatch ? scienceMatch[1] : '';
        const scienceText = scienceKey ? t(scienceKey) : t('styles.control_of_enzymatic_activity_and_gluten_developme');
        const cleanText = (stepStr.startsWith('styles.') || stepStr.startsWith('common.')) ? t(stepStr) : stepStr.replace(/\[Science:.*?\]/, '').trim();

        let phase: any = t('ui.bulk_243');
        if (index === 0) phase = 'Mix';
        if (index === (def.technicalProfile.fermentationSteps?.length || 1) - 1) phase = t('ui.bake_244');

        const separatorMatch = cleanText.match(/[:.\-]/);
        let title = `Step ${index + 1}`;
        let action = cleanText;
        if (separatorMatch && separatorMatch.index !== undefined) {
            title = cleanText.substring(0, separatorMatch.index).trim();
            action = cleanText.substring(separatorMatch.index + 1).trim();
        }

        return {
            phase: phase,
            title: t(title),
            duration: t('styles.variable_2'),
            action: t(action),
            science: scienceText
        };
    });

    const scientificProfile = def.scientificProfile || {
        flourRheology: {
            w_index: def.technicalProfile.flourStrength || t('styles.na'),
            pl_ratio: "0.55-0.65",
            absorption_capacity: t('styles.mediumhigh_2'),
            protein_type: t('styles.soft_wheat_4'),
            science_explanation: def.notes?.[0] || t('styles.standard_flour_properties_apply')
        },
        thermalProfile: {
            oven_type: t('styles.standard_22'),
            heat_distribution: "Conduction/Convection",
            crust_development: t('styles.maillard_dominant'),
            crumb_structure: t('styles.open'),
            ...def.scientificProfile?.thermalProfile
        },
        fermentationScience: {
            yeast_activity: t('styles.standard_23'),
            ph_target: "5.5",
            organic_acids: t('styles.balanced_14'),
            enzymatic_activity: t('styles.moderate_11'),
            ...def.scientificProfile?.fermentationScience
        }
    };

    return {
        id: def.id,
        name: smartTranslate(def.name, t),
        region: (def.origin.country === 'Italy' ? 'Italy' : def.origin.country === 'USA' ? 'Americas' : 'Europe') as any,
        subRegion: smartTranslate(def.origin.region, t),
        category: def.category as any,
        tags: (def.tags || []).map(tag => smartTranslate(tag, t)),
        description: smartTranslate(def.description, t),
        history_context: smartTranslate(def.history, t),
        culturalContext: def.culturalContext ? t(def.culturalContext) : undefined,
        base_formula: def.base_formula ? def.base_formula.map(ing => ({ ...ing, name: t(ing.name) })) : [
            { name: t('results.flour'), percentage: 100 },
            { name: t('results.water'), percentage: (def.technicalProfile.hydration[0] + def.technicalProfile.hydration[1]) / 2 },
            { name: t('results.salt'), percentage: (def.technicalProfile.salt[0] + def.technicalProfile.salt[1]) / 2 },
            { name: t('results.yeast'), percentage: 0.5 }
        ],
        specs: {
            hydration: {
                ideal: Math.round((def.technicalProfile.hydration[0] + def.technicalProfile.hydration[1]) / 2),
                min: def.technicalProfile.hydration[0],
                max: def.technicalProfile.hydration[1]
            },
            ovenTemp: {
                ideal: Math.round((def.technicalProfile.ovenTemp[0] + def.technicalProfile.ovenTemp[1]) / 2),
                min: def.technicalProfile.ovenTemp[0],
                max: def.technicalProfile.ovenTemp[1]
            },
            fermentationTime: "24-48h",
            difficulty: def.technicalProfile.difficulty
        },
        scientificProfile: scientificProfile,
        regulatory_info: def.regulatoryNotes ? t(def.regulatoryNotes) : undefined,
        global_presence: def.globalPresence ? t(def.globalPresence) : undefined,
        watchouts: def.watchouts ? def.watchouts.map(w => t(w)) : undefined,
        experimentSuggestions: def.experimentSuggestions ? def.experimentSuggestions.map(e => t(e)) : undefined,
        notes: def.notes ? def.notes.map(n => t(n)) : undefined,
        variations: (def.variations || []).map((v: any) => ({
            ...v,
            name: t(v.name),
            ingredients: (v.ingredients || v.formula || []).map((ing: any) => ({ ...ing, name: t(ing.name) }))
        })),
        education: def.education ? {
            ...def.education,
            pro_tips: def.education.pro_tips?.map((p: any) => ({ ...p, tip: t(p.tip), explanation: t(p.explanation) })),
            what_if: def.education.what_if?.map((w: any) => ({ ...w, scenario: t(w.scenario), result: t(w.result), correction: t(w.correction) })),
            comparative_analysis: def.education.comparative_analysis?.map((c: any) => ({ ...c, target_style: t(c.target_style), difference: t(c.difference), why_choose_this: t(c.why_choose_this) })),
            q_and_a: def.education.q_and_a?.map((q: any) => ({ ...q, question: t(q.question), answer: t(q.answer) })),
            fermentation_methods: def.education.fermentation_methods?.map((m: any) => ({ ...m, notes: t(m.notes) })),
        } : undefined,
        deepDive: def.deepDive ? {
            ...def.deepDive,
            hydrationLogic: t(def.deepDive.hydrationLogic),
        } : undefined,
        process: processSteps,
        flavorProfile: def.flavorProfile ? {
            primaryFlavors: (def.flavorProfile.primaryFlavors || []).map(f => smartTranslate(f, t)),
            aromaProfile: (def.flavorProfile.aromaProfile || []).map(a => smartTranslate(a, t)),
            textureNotes: (def.flavorProfile.textureNotes || []).map(tn => smartTranslate(tn, t)),
            pairingRecommendations: (def.flavorProfile.pairingRecommendations || []).map(pr => smartTranslate(pr, t)),
        } : undefined,
        references: (def.references || []).map((r: any) => {
            if (typeof r === 'string') return r;
            return r?.source || r?.url || '';
        }).filter(Boolean),
        images: def.images,
        recommendedFlavorComponents: def.recommendedFlavorComponents
    };
}

// --- STANDARD COMPONENTS ---

const SectionCard: React.FC<{
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    defaultExpanded?: boolean;
    className?: string;
    variant?: 'default' | 'accent' | 'warning' | 'dark';
}> = ({ title, icon, children, defaultExpanded = true, className = "", variant = 'default' }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    const variants = {
        default: "bg-white border-slate-100",
        accent: "bg-white border-indigo-100",
        warning: "bg-white border-amber-100",
        dark: "bg-slate-900 border-slate-800 text-white"
    };

    return (
        <div className={`rounded-[2rem] border shadow-sm transition-all overflow-hidden ${variants[variant]} ${className}`}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full h-14 px-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${variant === 'dark' ? 'bg-white/10 text-white' : 'bg-slate-100/80 text-slate-600'}`}>
                        {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })}
                    </div>
                    <h3 className={`text-[13px] font-black uppercase tracking-widest ${variant === 'dark' ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
                </div>
                <div className="p-2 rounded-full hover:bg-slate-200/50 transition-colors">
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </div>
            </button>
            {isExpanded && (
                <div className="px-6 pb-6 animate-fade-in origin-top">
                    <div className="pt-2">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

// ... Internal helper components (ScientificProcessTimeline, FlavorIntelligenceSection) ...
const ScientificProcessTimeline: React.FC<{ steps: ProcessStep[] }> = ({ steps }) => {
    const { t } = useTranslation(['common', 'styles', 'general']);
    return (
        <div className="relative space-y-4">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 rounded-full md:-ml-px" />
            {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                    <div key={index} className={`relative flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className={`flex-1 md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} relative`}>
                            <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 hover:border-indigo-100 transition-all group">
                                <span className="text-[8px] uppercase font-black text-slate-400 mb-1 block tracking-widest">{t('common.phase')} {index + 1}</span>
                                <h4 className="font-black text-slate-800 text-[12px] mb-1 tracking-tight">{step.title}</h4>
                                <p className="text-slate-500 text-[11px] leading-relaxed mb-2">{step.action}</p>
                                <div className={`flex flex-wrap gap-1 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {step.duration && <span className="text-[8px] font-black bg-white text-slate-500 px-1.5 py-0.5 rounded border border-slate-100 flex items-center gap-1"><Clock className="w-2 h-2" /> {step.duration}</span>}
                                    {step.temperature && <span className="text-[8px] font-black bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded border border-orange-100 flex items-center gap-1"><Thermometer className="w-2 h-2" /> {step.temperature}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                            <div className="w-7 h-7 rounded-full bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center font-black text-slate-500 text-[9px] ring-4 ring-white">
                                {index + 1}
                            </div>
                        </div>
                        <div className={`flex-1 md:w-1/2 ${!isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} hidden md:block opacity-40 hover:opacity-100 transition-opacity`}>
                            <p className="text-[10px] text-slate-400 italic leading-snug max-w-[200px] inline-block">"{step.science}"</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const FlavorIntelligenceSection: React.FC<{ flavorProfile: FlavorProfile, recommendedComponents?: string[], onComponentClick: (component: FlavorComponent) => void }> = ({ flavorProfile, recommendedComponents, onComponentClick }) => {
    const { t } = useTranslation(['common', 'styles', 'general']);
    const components = useMemo(() => {
        if (!recommendedComponents || recommendedComponents.length === 0) return [];
        return FLAVOR_COMPONENTS.filter(c => recommendedComponents.includes(c.id));
    }, [recommendedComponents]);

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100">
                    <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><Activity className="w-2.5 h-2.5 text-orange-500" /> {t('general.primary_flavors')}</h4>
                    <div className="flex flex-wrap gap-1">{flavorProfile.primaryFlavors.map((f: string, i: number) => (<span key={i} className="px-1.5 py-0.5 bg-orange-50 text-orange-700 text-[9px] font-black rounded border border-orange-100">{f}</span>))}</div>
                </div>
                <div className="bg-slate-50/50 rounded-xl p-3 border border-slate-100">
                    <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5"><Wind className="w-2.5 h-2.5 text-sky-500" /> {t('general.aroma_profile')}</h4>
                    <div className="flex flex-wrap gap-1">{flavorProfile.aromaProfile.map((a: string, i: number) => (<span key={i} className="px-1.5 py-0.5 bg-sky-50 text-sky-700 text-[9px] font-black rounded border border-sky-100">{a}</span>))}</div>
                </div>
            </div>
            {components.length > 0 && (
                <div className="pt-2">
                    <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 px-1">{t('general.recommended_pairings')}</h4>
                    <div className="flex flex-wrap gap-2">
                        {components.map(c => (
                            <button key={c.id} onClick={() => onComponentClick(c)} className="flex items-center gap-2 px-2.5 py-1.5 bg-white hover:bg-orange-50 border border-slate-100 hover:border-orange-200 rounded-lg transition-all group"><ChefHat className="w-3 h-3 text-slate-300 group-hover:text-orange-500" /><span className="text-[10px] font-black text-slate-600 group-hover:text-orange-900">{c.name}</span></button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export const StyleDetailPage: React.FC<any> = ({ style: initialStyle, onLoadAndNavigate, onBack, onNavigate }) => {
    const { t } = useTranslation(['common', 'styles', 'general']);
    const { isFavorite, toggleFavorite } = useUser();
    const [styleData, setStyleData] = useState<DoughStyle | null>(null);
    const [viewFormula, setViewFormula] = useState<any[]>([]);
    const [activeFormulaId, setActiveFormulaId] = useState<string>('base');
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
    const [selectedFlavorComponent, setSelectedFlavorComponent] = useState<FlavorComponent | null>(null);
    const stylesMeta = getPageMeta('styles');

<<<<<<< HEAD
    const editorial = useMemo(
        () =>
            style
                ? getStyleEditorialViewModel(style, {
                      allStyles,
                      learnArticles: Object.values(learnContent),
                      flavorComponents: FLAVOR_COMPONENTS,
                      t,
                  })
                : null,
        [allStyles, style, t],
    );
=======
    useEffect(() => {
        if (initialStyle?.id) {
            const foundDef = STYLES_DATA.find(s => s.id === initialStyle.id) || (initialStyle as unknown as DoughStyleDefinition);
            if (foundDef) {
                const adapted = mapDefinitionToStyle(foundDef, t);
                setStyleData(adapted);
                setViewFormula(adapted.base_formula || []);
            }
        }
    }, [initialStyle, t]);

    const handleFormulaSwitch = (id: string, formula: any[]) => {
        setActiveFormulaId(id);
        setViewFormula(formula);
    };

    if (!styleData) return null;
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839

    const flavorMatches = useMemo(
        () => (editorial ? FLAVOR_COMPONENTS.filter(component => (editorial.integrationLinks.flavorComponentIds || []).includes(component.id)) : []),
        [editorial],
    );

    const learnArticles = useMemo(
        () => (editorial ? (editorial.integrationLinks.learnArticleIds || []).map(id => learnContent[id]).filter(Boolean) : []),
        [editorial],
    );

    const groupedCitations = useMemo(() => {
        if (!editorial) return [];
        return Object.entries(
            editorial.citations.reduce<Record<string, typeof editorial.citations>>((groups, citation) => {
                if (!groups[citation.sourceType]) groups[citation.sourceType] = [];
                groups[citation.sourceType].push(citation);
                return groups;
            }, {}),
        );
    }, [editorial]);

    if (!style || !editorial) {
        return (
            <LibraryPageLayout>
                <div className="flex min-h-[60vh] items-center justify-center">
                    <div className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm">Loading style reference…</div>
                </div>
            </LibraryPageLayout>
        );
    }

    const hero = editorial.mediaGallery[0];
    const favorited = isFavorite(style.id);
    const formula = style.base_formula || [];

    return (
        <LibraryPageLayout>
<<<<<<< HEAD
            <AppShellHeader eyebrow={stylesMeta.eyebrow} title={editorial.title} description={editorial.subtitle}>
                <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
                    <ArrowLeft className="h-4 w-4" />
                    Back to styles
                </button>
                <button
                    onClick={() => toggleFavorite({ id: style.id, type: 'style', title: editorial.title, metadata: { category: style.category } })}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition-all ${favorited ? 'border-pink-200 bg-pink-50 text-pink-600' : 'border-slate-200 bg-white text-slate-600 hover:border-pink-200 hover:text-pink-500'}`}
                >
                    <Heart className={`h-4 w-4 ${favorited ? 'fill-current' : ''}`} />
                    {favorited ? 'Saved' : 'Save style'}
                </button>
                <button onClick={() => onLoadAndNavigate(style)} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-slate-800">
                    <Calculator className="h-4 w-4" />
                    Use in calculator
                </button>
            </AppShellHeader>

            <div className="mx-auto max-w-7xl pb-20 pt-6">
                <AppSurface className="mb-8 overflow-hidden p-0">
                    <div className="relative min-h-[340px] overflow-hidden">
                        <img src={hero?.src} alt={hero?.alt} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/78 to-slate-950/30" />
                        <div className="relative z-10 grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
                            <div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/80">{editorial.familyLabel}</span>
                                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/80">{editorial.regionLabel}</span>
                                    <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-200">{editorial.libraryCuration.tier}</span>
                                    <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-lime-200">{editorial.contentCompleteness}</span>
                                </div>
                                <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">{editorial.title}</h2>
                                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">{editorial.editorialSummary.promise}</p>
                                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                    <div className="rounded-3xl border border-white/10 bg-white/10 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Difficulty</div><div className="mt-2 text-2xl font-black tracking-tight text-white">{editorial.difficulty}</div></div>
                                    <div className="rounded-3xl border border-white/10 bg-white/10 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Hydration</div><div className="mt-2 text-2xl font-black tracking-tight text-white">{editorial.hydrationRange[0]}-{editorial.hydrationRange[1]}%</div></div>
                                    <div className="rounded-3xl border border-white/10 bg-white/10 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Signature trait</div><div className="mt-2 text-sm font-semibold leading-6 text-white">{editorial.signatureTrait}</div></div>
                                </div>
                            </div>
                            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6">
                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-lime-200/80">Quick guidance</div>
                                <div className="mt-4 grid gap-4">
                                    <div>
                                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Library role</div>
                                        <p className="mt-2 text-sm leading-6 text-white">{editorial.libraryCuration.rationale}</p>
                                    </div>
                                    {editorial.quickRead.map(block => (
                                        <div key={block.id}>
                                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">{block.title}</div>
                                            <p className="mt-2 text-sm leading-6 text-white">{block.body}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AppSurface>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
                    <div className="space-y-8">
                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Identity</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Origin, context, and defining character</h3>
                            <div className="mt-5 grid gap-4 md:grid-cols-2">
                                {editorial.identity.map(block => <TextBlockCard key={block.id} block={block} />)}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Technical profile</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">The practical spec sheet</h3>
                            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {editorial.technicalProfile.map(item => (
                                    <div key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                                        <div className="mt-3 text-xl font-black tracking-tight text-slate-950">{item.value}</div>
                                        {item.detail ? <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p> : null}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Process map</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Step-by-step timeline with logic</h3>
                            <div className="mt-5 space-y-4">
                                {editorial.processTimeline.map((step, index) => (
                                    <div key={step.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">{index + 1}</div>
                                                <div>
                                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{step.phase}</div>
                                                    <h4 className="text-lg font-black tracking-tight text-slate-950">{step.title}</h4>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"><Clock className="h-3.5 w-3.5 text-slate-400" />{step.duration}</span>
                                                {step.temperature ? <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"><Thermometer className="h-3.5 w-3.5 text-orange-500" />{step.temperature}</span> : null}
                                            </div>
                                        </div>
                                        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                                            <div>
                                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Action</div>
                                                <p className="mt-2 text-sm leading-7 text-slate-700">{step.summary}</p>
                                            </div>
                                            <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-4">
                                                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-500"><Lightbulb className="h-4 w-4" />Science and checkpoint</div>
                                                <p className="mt-2 text-sm leading-6 text-indigo-900">{step.science || 'Use dough feel, tension, and fermentation behavior to calibrate this step.'}</p>
                                                {step.criticalPoint ? <p className="mt-3 text-sm font-semibold text-indigo-700">{step.criticalPoint}</p> : null}
                                            </div>
                                        </div>
                                        <CitationPills ids={step.citationIds} />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Science</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">The fermentation and baking logic behind the style</h3>
                            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {editorial.scienceNotes.map(block => <TextBlockCard key={block.id} block={block} />)}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Variations & flexibility</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Regional variants, production shifts, and practical adaptations</h3>
                            <div className="mt-5 grid gap-6 xl:grid-cols-2">
                                <div className="space-y-4">
                                    {editorial.variations.length ? editorial.variations.map(variation => (
                                        <div key={variation.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{variation.category}</div>
                                            <h4 className="mt-2 text-lg font-black tracking-tight text-slate-950">{variation.name}</h4>
                                            <p className="mt-4 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">What changes:</span> {variation.changes}</p>
                                            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Why:</span> {variation.rationale}</p>
                                            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Expected result:</span> {variation.expectedResult}</p>
                                            <CitationPills ids={variation.citationIds} />
                                        </div>
                                    )) : <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500">This page is ready for richer regional and formula variations as more source-backed content is added.</div>}
                                </div>
                                <div className="space-y-4">
                                    {editorial.flexibilityGuides.map(guide => (
                                        <div key={guide.id} className="rounded-3xl border border-amber-100 bg-amber-50 p-5">
                                            <h4 className="text-lg font-black tracking-tight text-slate-950">{guide.scenario}</h4>
                                            {guide.substitutions?.length ? <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">{guide.substitutions.map(item => <li key={item}>{item}</li>)}</ul> : null}
                                            <p className="mt-4 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Process changes:</span> {guide.processChanges}</p>
                                            <p className="mt-3 text-sm leading-6 text-slate-700"><span className="font-bold text-slate-900">Tradeoffs:</span> {guide.tradeoffs}</p>
                                            <CitationPills ids={guide.citationIds} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Comparisons</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Understand this style by contrast</h3>
                            <div className="mt-5 space-y-4">
                                {editorial.comparisonSet.length ? editorial.comparisonSet.map(comparison => (
                                    <div key={comparison.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <div>
                                                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Compared against</div>
                                                <h4 className="mt-2 text-lg font-black tracking-tight text-slate-950">{comparison.targetStyleName}</h4>
                                            </div>
                                            {comparison.targetStyleId ? <button type="button" onClick={() => onNavigate?.('styles/detail', comparison.targetStyleId)} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700">Open style</button> : null}
                                        </div>
                                        <div className="mt-4 grid gap-4 md:grid-cols-3">
                                            <div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Difference</div><p className="mt-2 text-sm leading-6 text-slate-700">{comparison.difference}</p></div>
                                            <div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">When to choose it</div><p className="mt-2 text-sm leading-6 text-slate-700">{comparison.whenToChoose}</p></div>
                                            <div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Risk of confusion</div><p className="mt-2 text-sm leading-6 text-slate-700">{comparison.riskOfConfusion || 'Use process, bake profile, and service context to keep the distinction clear.'}</p></div>
                                        </div>
                                        <CitationPills ids={comparison.citationIds} />
                                    </div>
                                )) : <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500">Comparison slots are ready and will stay in the same structure as the library expands.</div>}
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Pairings & service</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">How the style behaves on the plate</h3>
                            <div className="mt-5 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                                <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                                    {[{ title: 'Canonical pairings', items: editorial.pairingContext.canonical }, { title: 'Modern pairings', items: editorial.pairingContext.modern }, { title: 'Regional expressions', items: editorial.pairingContext.regional }].map(group => (
                                        <div key={group.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{group.title}</div>
                                            {group.items.length ? <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">{group.items.map(item => <li key={item} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" /><span>{item}</span></li>)}</ul> : <p className="mt-3 text-sm leading-6 text-slate-500">This slot is ready for service notes, topping logic, and regional pairing variations.</p>}
                                        </div>
                                    ))}
                                </div>
                                <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Flavor components from the app</div>
                                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                        {flavorMatches.length ? flavorMatches.map(component => <button key={component.id} type="button" onClick={() => setSelectedFlavorComponent(component)} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-orange-200 hover:bg-orange-50"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-500">{component.category}</div><h4 className="mt-2 text-base font-black tracking-tight text-slate-950">{component.name}</h4><p className="mt-2 text-sm leading-6 text-slate-600">{component.description}</p></button>) : <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-500 sm:col-span-2">No mapped flavor components yet. The structure is ready to connect this style to toppings and pairing logic.</div>}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Integrations</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Connected actions across the app</h3>
                            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                <button type="button" onClick={() => onLoadAndNavigate(style)} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-lime-200 hover:bg-lime-50"><Calculator className="h-5 w-5 text-lime-600" /><h4 className="mt-4 text-lg font-black tracking-tight text-slate-950">Open in calculator</h4><p className="mt-2 text-sm leading-6 text-slate-600">Use this style as the base formula and move straight into the bake workspace.</p></button>
                                <button type="button" onClick={() => onNavigate?.('mylab')} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-indigo-200 hover:bg-indigo-50"><Sparkline className="h-5 w-5 text-indigo-600" /><h4 className="mt-4 text-lg font-black tracking-tight text-slate-950">Start a My Lab loop</h4><p className="mt-2 text-sm leading-6 text-slate-600">Track experiments and compare adaptations using this style as a repeatable test base.</p></button>
                                <button type="button" onClick={() => onNavigate?.('community')} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-left transition hover:border-orange-200 hover:bg-orange-50"><ChefHat className="h-5 w-5 text-orange-500" /><h4 className="mt-4 text-lg font-black tracking-tight text-slate-950">Browse community examples</h4><p className="mt-2 text-sm leading-6 text-slate-600">See how other bakers interpret the same style in real ovens and workflows.</p></button>
                            </div>
                            <div className="mt-6 grid gap-4 lg:grid-cols-2">
                                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Related Learn articles</div>
                                    {learnArticles.length ? <div className="mt-4 space-y-3">{learnArticles.map(article => <button key={article.id} type="button" onClick={() => onNavigate?.('learn/article', article.id)} className="w-full rounded-3xl border border-slate-200 bg-white p-4 text-left transition hover:border-indigo-200"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-500">{article.category}</div><h4 className="mt-2 text-base font-black tracking-tight text-slate-950">{article.title}</h4><p className="mt-2 text-sm leading-6 text-slate-600">{article.subtitle}</p></button>)}</div> : <p className="mt-4 text-sm leading-6 text-slate-500">This style already has learn-link slots prepared and they will surface here automatically as related science content grows.</p>}
                                </div>
                                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Production experiments</div>
                                    <div className="mt-4 grid gap-3">
                                        {(style.experimentSuggestions || []).length ? style.experimentSuggestions?.map(experiment => <div key={experiment} className="rounded-3xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">{experiment}</div>) : <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-4 text-sm leading-6 text-slate-500">Experiment prompts can live here for hydration pushes, fermentation changes, oven swaps, or ingredient substitutions.</div>}
                                        {(style.recommendedIncrements || []).length ? <div className="rounded-3xl border border-slate-200 bg-white p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Recommended increments</div><div className="mt-3 flex flex-wrap gap-2">{style.recommendedIncrements?.map(increment => <span key={increment} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">{increment}</span>)}</div></div> : null}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Gallery</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">A didactic media sequence</h3>
                            <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                                <figure className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50"><img src={hero?.src} alt={hero?.alt} className="aspect-[4/3] w-full object-cover" /><figcaption className="space-y-2 p-5"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{hero?.role}</div><p className="text-sm leading-6 text-slate-700">{hero?.caption}</p><p className="text-xs font-medium text-slate-500">Credit: {hero?.credit || 'Editorial placeholder'}</p></figcaption></figure>
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">{editorial.mediaGallery.filter(asset => asset.id !== hero?.id).map(asset => <figure key={asset.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50"><img src={asset.src} alt={asset.alt} className="aspect-[4/3] w-full object-cover" /><figcaption className="space-y-2 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{asset.role}</div><p className="text-sm leading-6 text-slate-700">{asset.caption}</p><p className="text-xs font-medium text-slate-500">Credit: {asset.credit || 'Editorial placeholder'}</p></figcaption></figure>)}</div>
                            </div>
                        </section>

                        <section className={blockClass}>
                            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">References</div>
                            <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Bibliography and validation</h3>
                            <div className="mt-5 rounded-[28px] border border-emerald-100 bg-emerald-50 p-5"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle className="h-5 w-5" /></div><div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">Validation note</div><p className="mt-1 text-sm leading-6 text-emerald-900">This page uses inline source markers and a grouped bibliography so readers can either scan quickly or verify each technical claim in depth.</p></div></div></div>
                            <div className="mt-6 grid gap-4">{groupedCitations.map(([sourceType, citations]) => <div key={sourceType} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{sourceType}</div><div className="mt-4 space-y-4">{citations.map(citation => <div key={citation.id} id={`reference-${citation.id}`} className="rounded-3xl border border-slate-200 bg-white p-4"><div className="flex flex-wrap items-start justify-between gap-3"><div><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">[{citation.label}]</div><h4 className="mt-2 text-base font-black tracking-tight text-slate-950">{citation.title}</h4></div>{citation.url ? <a href={citation.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 transition hover:border-indigo-200 hover:text-indigo-700">Open source</a> : null}</div><div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">{citation.authors?.length ? <span>Authors: {citation.authors.join(', ')}</span> : null}{citation.publisher ? <span>Publisher: {citation.publisher}</span> : null}{citation.year ? <span>Year: {citation.year}</span> : null}</div>{citation.notes ? <p className="mt-3 text-sm leading-6 text-slate-600">{citation.notes}</p> : null}</div>)}</div></div>)}</div>
                        </section>
                    </div>

                    <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                        <AppSurface className="overflow-hidden">
                            <div className="border-b border-slate-100 bg-slate-50 px-6 py-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Control panel</div><h3 className="mt-2 text-lg font-black tracking-tight text-slate-950">Use and monitor this style</h3></div>
                            <div className="space-y-6 p-6">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Hydration</div><div className="mt-2 text-2xl font-black tracking-tight text-slate-950">{editorial.hydrationRange[0]}-{editorial.hydrationRange[1]}%</div></div>
                                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4"><div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Status</div><div className="mt-2 text-2xl font-black tracking-tight text-slate-950">{editorial.contentCompleteness}</div></div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400"><Droplets className="h-4 w-4 text-sky-500" />Baker's percentage baseline</div>
                                    <div className="mt-3 overflow-hidden rounded-3xl border border-slate-200">{formula.length ? <table className="min-w-full divide-y divide-slate-200 bg-white text-sm"><thead className="bg-slate-50 text-left text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400"><tr><th className="px-4 py-3">Ingredient</th><th className="px-4 py-3 text-right">%</th></tr></thead><tbody className="divide-y divide-slate-100">{formula.map(ingredient => <tr key={ingredient.name}><td className="px-4 py-3 font-medium text-slate-700">{ingredient.name}</td><td className="px-4 py-3 text-right font-bold text-slate-950">{ingredient.percentage}%</td></tr>)}</tbody></table> : <div className="p-4 text-sm leading-6 text-slate-500">This style can display a normalized baker's percentage table as formula data becomes available.</div>}</div>
                                </div>
                                <div className="grid gap-3">
                                    <button type="button" onClick={() => onLoadAndNavigate(style)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"><Calculator className="h-4 w-4" />Load style in calculator</button>
                                    <button type="button" onClick={() => onNavigate?.('tools/oven-profiler')} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700"><Flame className="h-4 w-4" />Open oven profiler</button>
                                    <button type="button" onClick={() => onNavigate?.('community/create')} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"><ChefHat className="h-4 w-4" />Share your variation</button>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4"><div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400"><Info className="h-4 w-4 text-indigo-500" />Growth-ready structure</div><p className="mt-3 text-sm leading-6 text-slate-600">This page is built on a fixed editorial skeleton. New citations, media, variations, comparisons, and integrations can be added without redesigning the layout.</p></div>
                            </div>
                        </AppSurface>
                        <AffiliateGrid tags={[...(style.tags || []), 'styles', style.category || 'general']} title={`Gear that supports ${editorial.title}`} />
                    </aside>
                </div>
            </div>

=======
            {/* STICKY HEADER */}
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 px-4 py-2.5 -mx-4 sm:-mx-6 lg:-mx-8 lg:px-8 shadow-sm flex items-center justify-between transition-all">
                <div className="flex items-center gap-3">
                    <button onClick={onBack} className="p-1.5 hover:bg-slate-100 rounded-lg transition-all text-slate-400 border border-transparent hover:border-slate-200"><ArrowLeft className="w-4 h-4" /></button>
                    <div>
                        <h1 className="text-[15px] font-black text-slate-900 leading-tight tracking-tight font-heading">{styleData.name}</h1>
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest hidden md:block">{styleData.category}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => toggleFavorite({ id: styleData.id, type: 'style', title: styleData.name, metadata: {} })} className={`p-2 rounded-lg border transition-all ${favorited ? 'bg-pink-500 border-pink-500 text-white' : 'bg-white border-slate-200 text-slate-400'}`}><Heart className={`w-3.5 h-3.5 ${favorited ? 'fill-current' : ''}`} /></button>
                    <button onClick={() => onLoadAndNavigate(styleData)} className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-sm hover:scale-[1.02] active:scale-95"><Calculator className="w-3.5 h-3.5" /> <span className="hidden sm:inline">{t('general.use_formula')}</span></button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
                {/* HERO - Ultra Compact */}
                <div className="relative h-[11rem] md:h-[13rem] w-full rounded-[1.5rem] overflow-hidden mb-6 shadow-sm border border-slate-100 group">
                    {styleData.images?.hero ? (
                        <>
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105 z-0" style={{ backgroundImage: `url(${styleData.images.hero})` }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0"><div className="absolute inset-0 opacity-[0.05] pattern-grid-lg" /></div>
                    )}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8 z-20">
                        <div className="max-w-2xl space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest text-white shadow-xl"><MapPin className="w-2.5 h-2.5 text-lime-400" />{styleData.subRegion || t('common.global')}</span>
                                <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest shadow-xl ${styleData.specs.difficulty === t('ui.expert_248') ? 'text-rose-400' : 'text-lime-400'}`}><ChefHat className="w-2.5 h-2.5" />{styleData.specs.difficulty}</span>
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white leading-tight font-heading drop-shadow-lg">{styleData.name}</h2>
                                <p className="text-[11px] md:text-[13px] text-white/80 font-medium max-w-xl leading-relaxed font-sans line-clamp-1 opacity-90">{styleData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-start">
                    {/* MAIN COLUMN */}
                    <div className="w-full lg:col-span-8 space-y-4">
                        {/* Heritage & Cultural Science */}
                        <SectionCard title="Heritage & Cultural Science" icon={<HistoryIcon />} defaultExpanded={true}>
                            <div className="space-y-4">
                                <p className="text-sm md:text-base leading-relaxed text-slate-600 font-serif border-l-2 border-amber-200 pl-4 italic opacity-95">"{styleData.history_context}"</p>
                                {styleData.culturalContext && (
                                    <div className="pt-2 p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">Cultural Significance</span>
                                        <p className="text-[11px] text-slate-500 leading-normal">{styleData.culturalContext}</p>
                                    </div>
                                )}
                            </div>
                        </SectionCard>

                        {/* Sensory Intelligence */}
                        <SectionCard title="Sensory Intelligence" icon={<ChefHat />} defaultExpanded={true} variant="accent">
                            {styleData.flavorProfile && (
                                <FlavorIntelligenceSection flavorProfile={styleData.flavorProfile} recommendedComponents={styleData.recommendedFlavorComponents} onComponentClick={setSelectedFlavorComponent} />
                            )}
                        </SectionCard>

                        {/* Technical Blueprint */}
                        <SectionCard title="The Physical Blueprint (Rheology)" icon={<Lab />} defaultExpanded={false}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Flour & Dough Property</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between p-2 bg-slate-50/50 rounded-lg border border-slate-100"><span className="text-[10px] font-bold text-slate-500">Strength (W)</span><span className="text-[10px] font-black text-slate-800">{styleData.scientificProfile.flourRheology.w_index}</span></div>
                                        <div className="flex justify-between p-2 bg-slate-50/50 rounded-lg border border-slate-100"><span className="text-[10px] font-bold text-slate-500">P/L Ratio</span><span className="text-[10px] font-black text-slate-800">{styleData.scientificProfile.flourRheology.pl_ratio}</span></div>
                                        <div className="flex justify-between p-2 bg-slate-50/50 rounded-lg border border-slate-100"><span className="text-[10px] font-bold text-slate-500">Water Absorption</span><span className="text-[10px] font-black text-slate-800">{styleData.scientificProfile.flourRheology.absorption_capacity}</span></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Thermal Thermodynamics</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between p-2 bg-orange-50/30 rounded-lg border border-orange-100/50"><span className="text-[10px] font-bold text-slate-500 px-1">Heat Transfer</span><span className="text-[10px] font-black text-orange-700">{styleData.scientificProfile.thermalProfile.heat_distribution}</span></div>
                                        <div className="flex justify-between p-2 bg-orange-50/30 rounded-lg border border-orange-100/50"><span className="text-[10px] font-bold text-slate-500 px-1">Crust Reaction</span><span className="text-[10px] font-black text-orange-700">{styleData.scientificProfile.thermalProfile.crust_development}</span></div>
                                        <div className="flex justify-between p-2 bg-orange-50/30 rounded-lg border border-orange-100/50"><span className="text-[10px] font-bold text-slate-500 px-1">Structure</span><span className="text-[10px] font-black text-orange-700">{styleData.scientificProfile.thermalProfile.crumb_structure}</span></div>
                                    </div>
                                </div>
                            </div>
                        </SectionCard>

                        {/* Scientific Timeline */}
                        <SectionCard title="The Scientific Process" icon={<Activity />} defaultExpanded={false}>
                            <ScientificProcessTimeline steps={styleData.process} />
                        </SectionCard>

                        {/* Educational Deep Dive */}
                        <SectionCard title="Lab Education & Pro Logic" icon={<BookOpen />} defaultExpanded={false}>
                            <div className="space-y-6">
                                {styleData.education?.pro_tips && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {styleData.education.pro_tips.map((tip: any, i: number) => (
                                            <div key={i} className="bg-slate-50/50 p-3 rounded-xl border border-slate-100 hover:border-indigo-100 transition-all group">
                                                <span className="block text-[9px] font-black text-indigo-600 uppercase mb-1 tracking-widest flex items-center gap-1.5"><Lightbulb className="w-2.5 h-2.5" />{tip.tip}</span>
                                                <p className="text-[11px] text-slate-600 leading-normal">{tip.explanation}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {styleData.education?.comparative_analysis && (
                                    <div className="space-y-3">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Comparative Analysis</h4>
                                        <div className="grid grid-cols-1 gap-2">
                                            {styleData.education.comparative_analysis.map((comp: any, i: number) => (
                                                <div key={i} className="p-3 bg-white border border-slate-100 rounded-xl flex items-start gap-3">
                                                    <div className="p-1.5 bg-slate-100 rounded-lg"><Compare className="w-3 h-3 text-slate-400" /></div>
                                                    <div>
                                                        <span className="text-[10px] font-black text-slate-800 block">vs {comp.target_style}</span>
                                                        <p className="text-[11px] text-slate-500 mb-1">{comp.difference}</p>
                                                        <p className="text-[10px] text-indigo-600 font-bold">Why choose this: {comp.why_choose_this}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {styleData.education?.q_and_a && (
                                    <div className="space-y-3">
                                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Practical Q&A</h4>
                                        <div className="space-y-2">
                                            {styleData.education.q_and_a.map((qa: any, i: number) => (
                                                <div key={i} className="p-3 bg-slate-50/50 rounded-xl border border-slate-100">
                                                    <div className="flex items-start gap-2 mb-1">
                                                        <span className="text-[11px] font-black text-slate-700 leading-tight">Q: {qa.question}</span>
                                                    </div>
                                                    <p className="text-[10px] text-slate-500 pl-4 border-l border-slate-200">A: {qa.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </SectionCard>

                        {/* Method Suitability */}
                        {styleData.education?.fermentation_methods && (
                            <SectionCard title="Method Suitability Logic" icon={<Wind />} defaultExpanded={false}>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {styleData.education.fermentation_methods.map((m: any, i: number) => (
                                        <div key={i} className={`p-3 rounded-xl border ${m.suitability === 'Ideal' || m.suitability === 'Authentic' ? 'bg-emerald-50/30 border-emerald-100' : 'bg-slate-50/50 border-slate-100'} text-center`}>
                                            <span className="text-[9px] font-black uppercase tracking-widest block mb-1">{m.method}</span>
                                            <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${m.suitability === 'Ideal' || m.suitability === 'Authentic' ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'}`}>{m.suitability}</span>
                                            <p className="text-[9px] text-slate-400 mt-2 leading-tight">{m.notes}</p>
                                        </div>
                                    ))}
                                </div>
                            </SectionCard>
                        )}

                        {/* Critical Lab Watchouts */}
                        {styleData.watchouts && (
                            <SectionCard title="Critical Lab Watchouts" icon={<AlertTriangle />} defaultExpanded={false} variant="warning">
                                <ul className="space-y-2">
                                    {styleData.watchouts.map((w, i) => (
                                        <li key={i} className="flex items-start gap-2 text-[11px] text-amber-900/80 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 flex-shrink-0" />
                                            {w}
                                        </li>
                                    ))}
                                </ul>
                            </SectionCard>
                        )}

                        {/* Global Presence & Preservations */}
                        {(styleData.global_presence || styleData.regulatory_info) && (
                            <SectionCard title="Global Presence & Legal Logic" icon={<Globe />} defaultExpanded={false}>
                                <div className="space-y-4">
                                    {styleData.global_presence && (
                                        <div>
                                            <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 px-1">Geographic Footprint</h4>
                                            <p className="text-[11px] text-slate-500 leading-relaxed p-3 bg-slate-50/50 rounded-xl border border-slate-100">{styleData.global_presence}</p>
                                        </div>
                                    )}
                                    {styleData.regulatory_info && (
                                        <div>
                                            <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 px-1">Regulatory & Standardizing Notes</h4>
                                            <p className="text-[11px] text-slate-500 leading-relaxed p-3 bg-slate-50/50 rounded-xl border border-slate-100">{styleData.regulatory_info}</p>
                                        </div>
                                    )}
                                </div>
                            </SectionCard>
                        )}

                        {/* Master Footnote References */}
                        {styleData.references?.length > 0 && (
                            <div className="pt-4 px-2 flex flex-wrap gap-4 items-center opacity-40 hover:opacity-100 transition-opacity">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{t('general.primary_sources')}:</span>
                                {styleData.references.map((ref, i) => (<span key={i} className="text-[9px] font-bold text-slate-500 flex items-center gap-1"><Bookmark className="w-2.5 h-2.5" /> Source {i + 1}</span>))}
                            </div>
                        )}
                    </div>

                    {/* SIDEBAR */}
                    <div className="w-full lg:col-span-4 space-y-4 lg:sticky lg:top-20">
                        {/* Technical Dashboard */}
                        <section className="bg-white rounded-[2rem] p-5 border border-slate-100 shadow-sm space-y-5">
                            <div className="space-y-4 pt-1">
                                <div className="flex items-center gap-2"><div className="p-1.5 bg-indigo-50 rounded-lg"><Activity className="w-3.5 h-3.5 text-indigo-600" /></div><h3 className="text-[10px] font-black tracking-widest uppercase text-slate-400">Technical Model</h3></div>
                                <div className="space-y-5">
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-end"><div className="flex items-center gap-1.5"><Droplets className="w-3.5 h-3.5 text-sky-500" /><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hydration</span></div><span className="text-xl font-black text-slate-900 tracking-tighter">{styleData.specs.hydration.ideal}%</span></div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden p-0"><div className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full" style={{ width: `${styleData.specs.hydration.ideal}%` }} /></div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-end"><div className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-orange-500" /><span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Oven Temp</span></div><span className="text-xl font-black text-slate-900 tracking-tighter">{styleData.specs.ovenTemp.ideal}°C</span></div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden p-0"><div className="h-full bg-gradient-to-r from-orange-400 to-rose-500 rounded-full" style={{ width: '85%' }} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-indigo-900 rounded-[1.5rem] text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none" />
                                <div className="flex items-center gap-2 mb-1.5"><Activity className="w-3 h-3 text-indigo-300" /><span className="text-[8px] font-black text-indigo-300 uppercase tracking-widest">Science Deep Dive</span></div>
                                <p className="text-[10px] font-bold leading-relaxed italic opacity-95">"{styleData.deepDive?.hydrationLogic || styleData.scientificProfile.flourRheology.science_explanation}"</p>
                            </div>
                        </section>

                        {/* Master Model / Registry */}
                        <section className="bg-lime-50/20 rounded-[2rem] p-5 border border-lime-100/30 space-y-4">
                            <div className="flex items-center justify-between px-1"><h3 className="text-[10px] font-black text-lime-900/60 uppercase tracking-widest flex items-center gap-2"><Scale className="w-3.5 h-3.5 text-lime-700" />Master Model</h3>
                                {styleData.variations && styleData.variations.length > 0 && (
                                    <div className="flex bg-white/50 p-0.5 rounded-lg border border-lime-200">
                                        <button onClick={() => handleFormulaSwitch('base', styleData.base_formula || [])} className={`px-2 py-0.5 text-[8px] font-black rounded transition-all ${activeFormulaId === 'base' ? 'bg-lime-600 text-white shadow-sm' : 'text-lime-700 hover:bg-lime-100'}`}>Base</button>
                                        {styleData.variations.map((v: any, i: number) => (<button key={i} onClick={() => handleFormulaSwitch(v.name, v.ingredients || [])} className={`px-2 py-0.5 text-[8px] font-black rounded transition-all ${activeFormulaId === v.name ? 'bg-lime-600 text-white shadow-sm' : 'text-lime-700 hover:bg-lime-100'}`}>{v.name}</button>))}
                                    </div>
                                )}
                            </div>
                            <div className="space-y-1.5">{viewFormula.map((ing, i) => (<div key={i} className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-lime-100/50 shadow-sm"><span className="font-bold text-slate-500 text-[10px] uppercase tracking-tight">{ing.name}</span><span className="font-black text-base text-lime-700 tracking-tighter">{ing.percentage}%</span></div>))}</div>
                        </section>

                        {/* Knowledge Experiments */}
                        {styleData.experimentSuggestions && (
                            <section className="bg-slate-50 border border-slate-200 p-5 rounded-[2rem] space-y-3">
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Target className="w-3.5 h-3.5 text-indigo-500" />Lab Experiments</h3>
                                <div className="space-y-2">
                                    {styleData.experimentSuggestions.map((e, i) => (
                                        <div key={i} className="p-2.5 bg-white rounded-xl border border-slate-100 text-[10px] font-bold text-slate-600 flex items-center gap-2 active:scale-95 transition-transform cursor-pointer group hover:border-indigo-200"><div className="w-1 h-1 rounded-full bg-indigo-400 group-hover:scale-150 transition-transform" />{e}</div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <div className="space-y-4 pt-2"><AffiliateGrid tags={[...(styleData.tags || []), 'baking']} category={styleData.category} /></div>
                    </div>
                </div>
            </div>
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
            <FlavorComponentProfileModal isOpen={!!selectedFlavorComponent} onClose={() => setSelectedFlavorComponent(null)} component={selectedFlavorComponent} />
        </LibraryPageLayout>
    );
};
