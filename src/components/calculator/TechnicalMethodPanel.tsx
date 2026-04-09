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
    UserCircleIcon
} from '@/components/ui/Icons';

interface TechnicalMethodPanelProps {
    steps: TechnicalStep[];
}

const PhaseIcon: React.FC<{ phase: TechnicalPhase }> = ({ phase }) => {
    const className = "h-4 w-4 text-emerald-800";
    switch (phase) {
        case 'PREP':
        case 'AUTO':
        case 'MIX':
            return <BeakerIcon className={className} />;
        case 'KNEAD':
            return <WrenchScrewdriverIcon className={className} />;
        case 'DIVIDE':
            return <CubeIcon className={className} />;
        case 'BAKE':
            return <FireIcon className={className} />;
        default:
            return <ClockIcon className={className} />;
    }
};

const toText = (value?: string) => (typeof value === 'string' ? value : '');

const StepCard: React.FC<{
    step: TechnicalStep;
    isExpanded: boolean;
    onToggle: () => void;
    mode: 'technical' | 'grandma';
}> = ({ step, isExpanded, onToggle, mode }) => {
    const { t } = useTranslation();
    const headline = mode === 'grandma'
        ? toText(step.grandmaInstructions || step.actionInstructions)
        : toText(step.actionInstructions);

    return (
        <article className="dlp-calc-panel--subtle rounded-[1.35rem] border px-4 py-3">
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-start justify-between gap-3 text-left"
                aria-expanded={isExpanded}
            >
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50">
                            <PhaseIcon phase={step.phase} />
                        </span>
                        <span className="rounded-full border border-emerald-200/70 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/50 dark:text-emerald-100">
                            {step.phase}
                        </span>
                        {step.durationLabel && <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{step.durationLabel}</span>}
                    </div>
                    <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-50">{toText(step.title)}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{headline}</p>
                </div>
                <ChevronDownIcon className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>

            {isExpanded && (
                <div className="mt-3 space-y-2 border-t border-slate-200/70 pt-3 text-xs text-slate-700 dark:border-slate-800 dark:text-slate-200">
                    {step.temperatureLabel && (
                        <p className="rounded-lg bg-amber-50 px-3 py-2 text-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
                            <strong>{t('calculator.target_temp')}</strong>{toText(step.temperatureLabel)}
                        </p>
                    )}

                    {mode !== 'grandma' && step.technicalExplanation && (
                        <p className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-900/50">{toText(step.technicalExplanation)}</p>
                    )}

                    {step.proTip && (
                        <p className="flex items-start gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100">
                            <LightBulbIcon className="mt-0.5 h-4 w-4 shrink-0" />
                            <span>{toText(step.proTip)}</span>
                        </p>
                    )}

                    {step.criticalPoint && (
                        <p className="flex items-start gap-2 rounded-lg bg-red-50 px-3 py-2 text-red-900 dark:bg-red-950/40 dark:text-red-100">
                            <ExclamationCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                            <span>{toText(step.criticalPoint)}</span>
                        </p>
                    )}

                    {step.references && step.references.length > 0 && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">{t('calculator.source')}{step.references.join(', ')}</p>
                    )}
                </div>
            )}
        </article>
    );
};

const TechnicalMethodPanel: React.FC<TechnicalMethodPanelProps> = ({ steps }) => {
    const { t } = useTranslation(['calculator', 'common']);
    const [expandedStepId, setExpandedStepId] = useState<string | null>(steps[0]?.id || null);
    const [mode, setMode] = useState<'technical' | 'grandma'>('technical');

    if (steps.length === 0) return null;

    return (
        <section className="space-y-3">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-100">
                        <BookOpenIcon className="h-4 w-4" />
                    </span>
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#75907d]">
                            Guided Method
                        </p>
                        <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{t('calculator.stepbystep_method')}</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{t('calculator.workflow_generated_for_your_dough')}</p>
                    </div>
                </div>

                <div className="dlp-calc-rail inline-flex rounded-lg p-1">
                    <button
                        type="button"
                        onClick={() => setMode('technical')}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${mode === 'technical' ? 'dlp-calc-option dlp-calc-option--active' : 'text-slate-600 dark:text-slate-300'}`}
                    >
                        <span className="inline-flex items-center gap-1">
                            <WrenchScrewdriverIcon className="h-3.5 w-3.5" />
                            {t('calculator.technical')}
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode('grandma')}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${mode === 'grandma' ? 'dlp-calc-option dlp-calc-option--active' : 'text-slate-600 dark:text-slate-300'}`}
                    >
                        <span className="inline-flex items-center gap-1">
                            <UserCircleIcon className="h-3.5 w-3.5" />
                            {t('calculator.grandma')}
                        </span>
                    </button>
                </div>
            </header>

            <div className="space-y-2">
                {steps.map((step) => (
                    <StepCard
                        key={step.id}
                        step={step}
                        isExpanded={expandedStepId === step.id}
                        onToggle={() => setExpandedStepId((prev) => (prev === step.id ? null : step.id))}
                        mode={mode}
                    />
                ))}
            </div>
        </section>
    );
};

export default TechnicalMethodPanel;
