
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
    const className = "h-5 w-5 text-white";
    let bgClass = "bg-dlp-text-muted";

    switch (phase) {
        case 'PREP': bgClass = "bg-dlp-text-muted"; break;
        case 'AUTO': bgClass = "bg-dlp-info"; break;
        case 'MIX': bgClass = "bg-dlp-info"; break;
        case 'KNEAD': bgClass = "bg-dlp-warning"; break;
        case 'BULK': bgClass = "bg-dlp-accent"; break;
        case 'DIVIDE': bgClass = "bg-dlp-info"; break;
        case 'PROOF': bgClass = "bg-dlp-accent"; break;
        case 'BAKE': bgClass = "bg-dlp-error"; break;
        default: bgClass = "bg-dlp-text-muted"; break;
    }

    const wrapperClass = `flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-dlp-bg-card ${bgClass} shadow-dlp-sm z-10 relative`;

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

    const containerClasses = isPreferment
        ? "border-dlp-warning/30 bg-dlp-warning/5 hover:border-dlp-warning hover:shadow-dlp-md ring-1 ring-dlp-warning/20"
        : "border-dlp-border bg-dlp-bg-card hover:border-dlp-accent hover:shadow-dlp-md hover:ring-1 hover:ring-dlp-accent/50";

    const isGrandma = mode === 'grandma';

    return (
        <div className="relative pb-10 pl-8 sm:pl-12 last:pb-0">
            <div className="absolute left-[15px] top-8 h-full w-0.5 bg-dlp-border last:hidden" aria-hidden="true"></div>

            <div className="absolute left-0 top-0">
                <PhaseIcon phase={step.phase} />
            </div>

            <div
                className={`group relative flex flex-col rounded-2xl border p-5 shadow-dlp-sm transition-all cursor-pointer ${containerClasses}`}
                onClick={onToggle}
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${isPreferment ? 'bg-dlp-warning/20 text-dlp-warning' : 'bg-dlp-bg-muted text-dlp-text-muted'}`}>
                                {step.phase}
                            </span>
                            {isPreferment && (
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-dlp-warning text-white flex items-center gap-1">
                                    <SparklesIcon className="h-3 w-3" />{t('calculator.preferment')}</span>
                            )}
                            {step.durationLabel && !isGrandma && (
                                <span className="inline-flex items-center gap-1 rounded-md bg-dlp-bg-muted px-2 py-0.5 text-xs font-medium text-dlp-text-secondary border border-dlp-border">
                                    <ClockIcon className="h-3 w-3 text-dlp-accent" /> {step.durationLabel}
                                </span>
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-dlp-text-primary leading-tight">
                            {step.title}
                        </h3>
                    </div>
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} text-dlp-text-muted bg-dlp-bg-card/50 rounded-full p-1`}>
                        <ChevronDownIcon className="h-5 w-5" />
                    </div>
                </div>

                <p className="mt-3 text-sm font-medium text-dlp-text-secondary leading-relaxed">
                    {isGrandma ? (step.grandmaInstructions || step.actionInstructions) : step.actionInstructions}
                </p>

                <div
                    className={`grid grid-cols-1 gap-3 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'mt-5 opacity-100 max-h-[1000px]' : 'max-h-0 opacity-0'}`}
                >
                    <div className="h-px w-full bg-dlp-border/60 mb-1"></div>

                    {step.temperatureLabel && !isGrandma && (
                        <div className="flex items-center gap-2 text-sm font-semibold text-dlp-warning bg-dlp-warning/10 p-2.5 rounded-lg border border-dlp-warning/20">
                            <FireIcon className="h-4 w-4" />
                            Target Temp: {step.temperatureLabel}
                        </div>
                    )}

                    {!isGrandma && step.technicalExplanation && (
                        <div className="rounded-lg bg-dlp-bg-muted p-3.5 text-xs text-dlp-text-secondary border border-dlp-border">
                            <span className="flex items-center gap-1.5 font-bold text-dlp-text-primary mb-1.5 uppercase tracking-wide text-[10px]">
                                <BeakerIcon className="h-3 w-3" />{t('calculator.the_science')}</span>
                            {step.technicalExplanation}
                        </div>
                    )}

                    {step.proTip && (
                        <div className="rounded-lg bg-dlp-info/10 p-3.5 text-xs text-dlp-info border-l-4 border-dlp-info shadow-dlp-sm">
                            <div className="flex items-center gap-2 mb-1.5">
                                <LightBulbIcon className="h-4 w-4 text-dlp-info" />
                                <span className="font-bold uppercase tracking-wide text-[10px]">{t('calculator.pro_tip')}</span>
                            </div>
                            {step.proTip}
                        </div>
                    )}

                    {step.criticalPoint && !isGrandma && (
                        <div className="rounded-lg bg-dlp-error/10 p-3.5 text-xs text-dlp-error border-l-4 border-dlp-error shadow-dlp-sm">
                            <div className="flex items-center gap-2 mb-1.5">
                                <ExclamationCircleIcon className="h-4 w-4 text-dlp-error" />
                                <span className="font-bold uppercase tracking-wide text-[10px]">{t('calculator.critical_point')}</span>
                            </div>
                            {step.criticalPoint}
                        </div>
                    )}

                    {step.references && step.references.length > 0 && !isGrandma && (
                        <div className="flex items-center gap-1.5 text-[10px] text-dlp-text-muted mt-2">
                            <BookOpenIcon className="h-3 w-3" />
                            <span>Source: {step.references.join(', ')}</span>
                        </div>
                    )}
                </div>

                {!isExpanded && (step.proTip || step.criticalPoint) && (
                    <div className="mt-3 flex gap-2">
                        {step.criticalPoint && (
                            <span className="inline-flex items-center gap-1 rounded-md bg-dlp-error/10 border border-dlp-error/20 px-2 py-1 text-[10px] font-bold text-dlp-error uppercase tracking-wide">
                                <ExclamationCircleIcon className="h-3 w-3" />{t('calculator.critical')}</span>
                        )}
                        {step.proTip && (
                            <span className="inline-flex items-center gap-1 rounded-md bg-dlp-info/10 border border-dlp-info/20 px-2 py-1 text-[10px] font-bold text-dlp-info uppercase tracking-wide">
                                <LightBulbIcon className="h-3 w-3" />{t('calculator.tip')}</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

const TechnicalMethodPanel: React.FC<TechnicalMethodPanelProps> = ({ steps }) => {
    const { t } = useTranslation();
    const [expandedStepId, setExpandedStepId] = useState<string | null>(steps[0]?.id || null);
    const [mode, setMode] = useState<'technical' | 'grandma'>('technical');

    const handleToggle = (id: string) => {
        setExpandedStepId(prev => prev === id ? null : id);
    };

    if (steps.length === 0) return null;

    return (
        <div className="mt-8 animate-[fadeIn_0.5s_ease-out]">
            <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-dlp-bg-muted text-dlp-accent rounded-lg">
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

            <div className="mt-10 p-4 rounded-xl bg-dlp-bg-muted border border-dlp-border text-center">
                <p className="text-xs text-dlp-text-muted italic font-medium">
                    This workflow adapts dynamically to hydration, yeast type, and room temperature settings.
                </p>
            </div>
        </div>
    );
};

export default TechnicalMethodPanel;
