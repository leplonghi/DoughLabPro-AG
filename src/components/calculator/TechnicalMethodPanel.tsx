
import React, { useState } from 'react';
import { TechnicalStep, TechnicalPhase } from '@/types';
import { useTranslation } from '@/i18n';
import {
    ClockIcon,
    FireIcon,
    BeakerIcon,
    WrenchScrewdriverIcon,
    CubeIcon,
    ExclamationCircleIcon,
    LightBulbIcon,
    BookOpenIcon,
    ChevronDownIcon,
    SparklesIcon,
    UserCircleIcon
} from '@/components/ui/Icons';

interface TechnicalMethodPanelProps {
    steps: TechnicalStep[];
}

const PhaseIcon: React.FC<{ phase: TechnicalPhase }> = ({ phase }) => {
    const { t } = useTranslation();
    const className = "h-6 w-6 text-white";
    let bgClass = "bg-slate-500";
    let ringColor = "ring-slate-100";

    switch (phase) {
        case 'PREP':
            bgClass = "bg-gradient-to-br from-purple-500 to-purple-600";
            ringColor = "ring-purple-100";
            break;
        case 'AUTO':
        case 'MIX':
            bgClass = "bg-gradient-to-br from-blue-500 to-blue-600";
            ringColor = "ring-blue-100";
            break;
        case 'KNEAD':
            bgClass = "bg-gradient-to-br from-amber-500 to-orange-500";
            ringColor = "ring-amber-100";
            break;
        case 'BULK':
            bgClass = "bg-gradient-to-br from-emerald-500 to-green-600";
            ringColor = "ring-emerald-100";
            break;
        case 'DIVIDE':
            bgClass = "bg-gradient-to-br from-cyan-500 to-teal-500";
            ringColor = "ring-cyan-100";
            break;
        case 'PROOF':
            bgClass = "bg-gradient-to-br from-green-500 to-emerald-600";
            ringColor = "ring-green-100";
            break;
        case 'BAKE':
            bgClass = "bg-gradient-to-br from-red-500 to-rose-600";
            ringColor = "ring-red-100";
            break;
        default:
            bgClass = "bg-gradient-to-br from-slate-500 to-slate-600";
            ringColor = "ring-slate-100";
            break;
    }

    const wrapperClass = `flex h-12 w-12 items-center justify-center rounded-2xl ring-4 ${ringColor} ${bgClass} shadow-lg z-10 relative transition-transform hover:scale-110`;

    switch (phase) {
        case 'PREP': return <div className={wrapperClass}><BeakerIcon className={className} /></div>;
        case 'AUTO':
        case 'MIX': return <div className={wrapperClass}><BeakerIcon className={className} /></div>;
        case 'KNEAD': return <div className={wrapperClass}><WrenchScrewdriverIcon className={className} /></div>;
        case 'BULK': return <div className={wrapperClass}><ClockIcon className={className} /></div>;
        case 'DIVIDE': return <div className={wrapperClass}><CubeIcon className={className} /></div>;
        case 'PROOF': return <div className={wrapperClass}><ClockIcon className={className} /></div>;
        case 'BAKE': return <div className={wrapperClass}><FireIcon className={className} /></div>;
        default: return <div className={wrapperClass}><BeakerIcon className={className} /></div>;
    }
};

const StepCard: React.FC<{ step: TechnicalStep; isExpanded: boolean; onToggle: () => void; mode: 'technical' | 'grandma' }> = ({ step, isExpanded, onToggle, mode }) => {
    const { t } = useTranslation();
    const isPreferment = (step.title || '').toLowerCase().includes('poolish') ||
        (step.title || '').toLowerCase().includes('biga') ||
        (step.title || '').toLowerCase().includes('sponge') ||
        (step.phase === 'PREP' && (step.title || '').toLowerCase().includes('levain'));

    const isGrandma = mode === 'grandma';

    // Define vibrant color schemes for each phase
    let phaseColors = {
        bg: "bg-white",
        border: "border-slate-200",
        hoverBorder: "hover:border-slate-300",
        gradient: "",
        badgeBg: "bg-slate-100",
        badgeText: "text-slate-700"
    };

    if (!isGrandma && !isPreferment) {
        switch (step.phase) {
            case 'PREP':
                phaseColors = {
                    bg: "bg-gradient-to-br from-purple-50 to-white",
                    border: "border-purple-200",
                    hoverBorder: "hover:border-purple-400",
                    gradient: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/5 before:to-transparent before:rounded-2xl",
                    badgeBg: "bg-purple-100",
                    badgeText: "text-purple-700"
                };
                break;
            case 'AUTO':
            case 'MIX':
                phaseColors = {
                    bg: "bg-gradient-to-br from-blue-50 to-white",
                    border: "border-blue-200",
                    hoverBorder: "hover:border-blue-400",
                    gradient: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/5 before:to-transparent before:rounded-2xl",
                    badgeBg: "bg-blue-100",
                    badgeText: "text-blue-700"
                };
                break;
            case 'KNEAD':
                phaseColors = {
                    bg: "bg-gradient-to-br from-amber-50 to-white",
                    border: "border-amber-200",
                    hoverBorder: "hover:border-amber-400",
                    gradient: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-amber-500/5 before:to-transparent before:rounded-2xl",
                    badgeBg: "bg-amber-100",
                    badgeText: "text-amber-700"
                };
                break;
            case 'BULK':
                phaseColors = {
                    bg: "bg-gradient-to-br from-emerald-50 to-white",
                    border: "border-emerald-200",
                    hoverBorder: "hover:border-emerald-400",
                    gradient: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-500/5 before:to-transparent before:rounded-2xl",
                    badgeBg: "bg-emerald-100",
                    badgeText: "text-emerald-700"
                };
                break;
            case 'DIVIDE':
                phaseColors = {
                    bg: "bg-gradient-to-br from-cyan-50 to-white",
                    border: "border-cyan-200",
                    hoverBorder: "hover:border-cyan-400",
                    gradient: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/5 before:to-transparent before:rounded-2xl",
                    badgeBg: "bg-cyan-100",
                    badgeText: "text-cyan-700"
                };
                break;
            case 'PROOF':
                phaseColors = {
                    bg: "bg-gradient-to-br from-green-50 to-white",
                    border: "border-green-200",
                    hoverBorder: "hover:border-green-400",
                    gradient: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-500/5 before:to-transparent before:rounded-2xl",
                    badgeBg: "bg-green-100",
                    badgeText: "text-green-700"
                };
                break;
            case 'BAKE':
                phaseColors = {
                    bg: "bg-gradient-to-br from-red-50 to-white",
                    border: "border-red-200",
                    hoverBorder: "hover:border-red-400",
                    gradient: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500/5 before:to-transparent before:rounded-2xl",
                    badgeBg: "bg-red-100",
                    badgeText: "text-red-700"
                };
                break;
        }
    }

    const containerClasses = isGrandma
        ? "bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 hover:border-amber-400 hover:shadow-xl"
        : isPreferment
            ? "bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 hover:border-yellow-400 hover:shadow-xl ring-2 ring-yellow-200"
            : `${phaseColors.bg} border-2 ${phaseColors.border} ${phaseColors.hoverBorder} hover:shadow-xl ${phaseColors.gradient}`;

    return (
        <div className="relative pb-8 pl-10 sm:pl-16 last:pb-0">
            <div className={`absolute left-[23px] top-12 h-full w-1 last:hidden ${isGrandma ? 'bg-gradient-to-b from-amber-300 to-orange-200' : 'bg-gradient-to-b from-slate-200 to-slate-100'}`} aria-hidden="true"></div>

            <div className="absolute left-0 top-0">
                <PhaseIcon phase={step.phase} />
            </div>

            <div
                className={`group relative flex flex-col rounded-2xl p-6 shadow-lg transition-all cursor-pointer ${containerClasses} overflow-hidden`}
                onClick={onToggle}
            >
                <div className="flex items-start justify-between gap-4 relative z-10">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full ${isGrandma ? 'bg-amber-200 text-amber-900' : isPreferment ? 'bg-yellow-200 text-yellow-900' : `${phaseColors.badgeBg} ${phaseColors.badgeText}`} shadow-sm`}>
                                {step.phase}
                            </span>
                            {isPreferment && (
                                <span className="text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white flex items-center gap-1.5 shadow-md">
                                    <SparklesIcon className="h-4 w-4" />{t('calculator.preferment')}</span>
                            )}
                            {step.durationLabel && !isGrandma && (
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs font-bold text-slate-700 border-2 border-slate-200 shadow-sm">
                                    <ClockIcon className="h-4 w-4 text-[#51a145]" /> {step.durationLabel}
                                </span>
                            )}
                        </div>
                        <h3 className={`text-xl font-black leading-tight ${isGrandma ? 'text-amber-950 font-serif' : 'text-slate-900'}`}>
                            {step.title}
                        </h3>
                    </div>
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} text-slate-600 bg-white/60 backdrop-blur-sm rounded-full p-2 shadow-sm`}>
                        <ChevronDownIcon className="h-5 w-5" />
                    </div>
                </div>

                <p className={`mt-4 text-base font-medium leading-relaxed relative z-10 ${isGrandma ? 'text-amber-900 font-serif italic text-lg' : 'text-slate-700'}`}>
                    {isGrandma ? (step.grandmaInstructions || step.actionInstructions) : step.actionInstructions}
                </p>

                <div
                    className={`grid grid-cols-1 gap-4 overflow-hidden transition-all duration-300 ease-in-out relative z-10 ${isExpanded ? 'mt-6 opacity-100 max-h-[1000px]' : 'max-h-0 opacity-0'}`}
                >
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-2"></div>

                    {step.temperatureLabel && !isGrandma && (
                        <div className="flex items-center gap-3 text-sm font-bold text-orange-700 bg-gradient-to-r from-orange-100 to-red-50 p-4 rounded-xl border-2 border-orange-200 shadow-md">
                            <FireIcon className="h-5 w-5 text-orange-600" />
                            <span>{t('calculator.target_temp')}{step.temperatureLabel}</span>
                        </div>
                    )}

                    {!isGrandma && step.technicalExplanation && (
                        <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-4 text-sm text-slate-700 border-2 border-slate-200 shadow-md">
                            <span className="flex items-center gap-2 font-black text-slate-900 mb-2 uppercase tracking-wide text-xs">
                                <BeakerIcon className="h-4 w-4 text-[#51a145]" />{t('calculator.the_science')}</span>
                            {step.technicalExplanation}
                        </div>
                    )}

                    {step.proTip && (
                        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4 text-sm text-blue-900 border-l-4 border-blue-500 shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                                <LightBulbIcon className="h-5 w-5 text-blue-600" />
                                <span className="font-black uppercase tracking-wide text-xs text-blue-700">{t('calculator.pro_tip')}</span>
                            </div>
                            {step.proTip}
                        </div>
                    )}

                    {step.criticalPoint && !isGrandma && (
                        <div className="rounded-xl bg-gradient-to-br from-red-50 to-rose-50 p-4 text-sm text-red-900 border-l-4 border-red-500 shadow-md">
                            <div className="flex items-center gap-2 mb-2">
                                <ExclamationCircleIcon className="h-5 w-5 text-red-600" />
                                <span className="font-black uppercase tracking-wide text-xs text-red-700">{t('calculator.critical_point')}</span>
                            </div>
                            {step.criticalPoint}
                        </div>
                    )}

                    {step.references && step.references.length > 0 && !isGrandma && (
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                            <BookOpenIcon className="h-4 w-4" />
                            <span>{t('calculator.source')}{step.references.join(', ')}</span>
                        </div>
                    )}
                </div>

                {!isExpanded && (step.proTip || step.criticalPoint) && (
                    <div className="mt-4 flex gap-2 relative z-10">
                        {step.criticalPoint && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-100 to-rose-100 border-2 border-red-300 px-3 py-1.5 text-xs font-black text-red-700 uppercase tracking-wide shadow-sm">
                                <ExclamationCircleIcon className="h-4 w-4" />{t('calculator.critical')}</span>
                        )}
                        {step.proTip && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-300 px-3 py-1.5 text-xs font-black text-blue-700 uppercase tracking-wide shadow-sm">
                                <LightBulbIcon className="h-4 w-4" />{t('calculator.tip')}</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

const TechnicalMethodPanel: React.FC<TechnicalMethodPanelProps> = ({ steps }) => {
    const { t } = useTranslation(['calculator', 'common']);
    const [expandedStepId, setExpandedStepId] = useState<string | null>(steps[0]?.id || null);
    const [mode, setMode] = useState<'technical' | 'grandma'>('technical');

    const handleToggle = (id: string) => {
        setExpandedStepId(prev => prev === id ? null : id);
    };

    if (steps.length === 0) return null;

    return (
        <div className="mt-5 animate-[fadeIn_0.5s_ease-out]">
            <div className="mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#51a145] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#51a145]/20">
                        <BookOpenIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-dlp-text-primary">{t('calculator.stepbystep_method')}</h2>
                        <p className="text-sm text-dlp-text-muted">{t('calculator.workflow_generated_for_your_dough')}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-dlp-bg-muted p-1 rounded-lg border border-dlp-border">
                    <button
                        onClick={() => setMode('technical')}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${mode === 'technical' ? 'bg-dlp-bg-card text-dlp-text-primary shadow-dlp-sm' : 'text-dlp-text-muted hover:text-dlp-text-secondary'}`}
                    >
                        <WrenchScrewdriverIcon className="h-3 w-3" />{t('calculator.technical')}</button>
                    <button
                        onClick={() => setMode('grandma')}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${mode === 'grandma' ? 'bg-dlp-bg-card text-dlp-accent shadow-dlp-sm' : 'text-dlp-text-muted hover:text-dlp-text-secondary'}`}
                    >
                        <UserCircleIcon className="h-3 w-3" />{t('calculator.grandma')}</button>
                </div>
            </div>

            <div className="space-y-0">
                {steps.map((step) => (
                    <StepCard
                        key={step.id}
                        step={step}
                        isExpanded={expandedStepId === step.id}
                        onToggle={() => handleToggle(step.id)}
                        mode={mode}
                    />
                ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-dlp-bg-muted border border-dlp-border text-center">
                <p className="text-xs text-dlp-text-muted italic font-medium">
                    {t('calculator.workflow_disclaimer')}
                </p>
            </div>
        </div>
    );
};

export default TechnicalMethodPanel;
