import React, { useState } from 'react';
import { TechnicalStep, TechnicalPhase } from '@/types';
import { 
    ClockIcon, 
    ThermometerIcon, 
    ChevronDownIcon, 
    ChevronUpIcon,
    BeakerIcon,
    ExclamationCircleIcon,
    LightBulbIcon
} from '@/components/ui/Icons';

interface TechnicalMethodPanelProps {
    steps: TechnicalStep[];
    mode: 'technical' | 'grandma'; // Toggle between pro/simple view
    setMode: (mode: 'technical' | 'grandma') => void;
}

const PhaseIcon = ({ phase }: { phase: TechnicalPhase }) => {
    // Color mapping for phases (Light Mode)
    let bgClass = "bg-slate-400";
    switch (phase) {
        case 'PREP': bgClass = "bg-slate-500"; break;
        case 'AUTO': bgClass = "bg-blue-400"; break;
        case 'MIX': bgClass = "bg-blue-600"; break;
        case 'KNEAD': bgClass = "bg-orange-500"; break;
        case 'BULK': bgClass = "bg-purple-500"; break;
        case 'DIVIDE': bgClass = "bg-indigo-500"; break;
        case 'PROOF': bgClass = "bg-pink-500"; break;
        case 'BAKE': bgClass = "bg-red-600"; break;
        default: bgClass = "bg-slate-500"; break;
    }

    const wrapperClass = `flex h-8 w-8 items-center justify-center rounded-full ring-4 ring-white ${bgClass} shadow-sm z-10 relative`;

    return (
        <div className={wrapperClass}>
            <span className="text-xs font-bold text-white">{phase[0]}</span>
        </div>
    );
};

const StepCard: React.FC<{ step: TechnicalStep; mode: 'technical' | 'grandma' }> = ({ step, mode }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Highlight Preferment Steps
    const isPreferment = step.phase === 'PREP' && step.title.includes('Preferment');
    const borderClass = isPreferment 
        ? "border-amber-200 bg-amber-50 hover:border-amber-300 hover:shadow-md ring-1 ring-amber-100" 
        : "border-slate-200 bg-white hover:border-lime-400 hover:shadow-md hover:ring-1 hover:ring-lime-400/50";

    return (
        <div className="relative pl-10 pb-8 last:pb-0">
            {/* Timeline Connector */}
            <div className="absolute left-[15px] top-8 h-full w-0.5 bg-slate-200 last:hidden" aria-hidden="true"></div>
            
            <div className="absolute left-0 top-0">
                <PhaseIcon phase={step.phase} />
            </div>

            <div 
                onClick={() => setIsExpanded(!isExpanded)}
                className={`rounded-xl border p-4 cursor-pointer transition-all duration-200 ${borderClass}`}
            >
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${isPreferment ? 'bg-amber-200 text-amber-800' : 'bg-slate-100 text-slate-500'}`}>
                                {step.phase}
                            </span>
                            {isPreferment && (
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500 text-white flex items-center gap-1">
                                    <BeakerIcon className="h-3 w-3" /> Pre-ferment
                                </span>
                            )}
                            {step.durationLabel && (
                                <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 border border-slate-200">
                                    <ClockIcon className="h-3 w-3 text-slate-400" /> {step.durationLabel}
                                </span>
                            )}
                            {step.temperatureLabel && (
                                <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 border border-slate-200">
                                    <ThermometerIcon className="h-3 w-3 text-slate-400" /> {step.temperatureLabel}
                                </span>
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 leading-tight">
                            {step.title}
                        </h3>
                    </div>
                    <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} text-slate-400 bg-white rounded-full p-1 border border-slate-100`}>
                        <ChevronDownIcon className="h-5 w-5" />
                    </div>
                </div>

                <p className="mt-3 text-sm font-medium text-slate-700 leading-relaxed">
                    {mode === 'technical' ? step.actionInstructions : step.grandmaInstructions}
                </p>

                {/* Expanded Details */}
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="h-px w-full bg-slate-200/60 mb-4"></div>
                    
                    <div className="space-y-3">
                        {step.technicalExplanation && mode === 'technical' && (
                            <div className="rounded-lg bg-slate-50 p-3.5 text-xs text-slate-600 border border-slate-200">
                                <span className="flex items-center gap-1.5 font-bold text-slate-700 mb-1.5 uppercase tracking-wide text-[10px]">
                                    <BeakerIcon className="h-3 w-3 text-slate-500" /> The Science
                                </span>
                                {step.technicalExplanation}
                            </div>
                        )}

                        {step.proTip && (
                            <div className="rounded-lg bg-blue-50 p-3.5 text-xs text-blue-800 border-l-4 border-blue-400 shadow-sm">
                                <span className="flex items-center gap-1.5 font-bold mb-1">
                                    <LightBulbIcon className="h-4 w-4 text-blue-600" /> Pro Tip
                                </span>
                                {step.proTip}
                            </div>
                        )}

                        {step.criticalPoint && (
                            <div className="rounded-lg bg-red-50 p-3.5 text-xs text-red-800 border-l-4 border-red-400 shadow-sm">
                                <span className="flex items-center gap-1.5 font-bold mb-1">
                                    <ExclamationCircleIcon className="h-4 w-4 text-red-600" /> Critical
                                </span>
                                {step.criticalPoint}
                            </div>
                        )}
                        
                        {step.references && step.references.length > 0 && (
                            <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-2">
                                <span className="font-semibold uppercase tracking-wide">Source:</span> 
                                {step.references.join(', ')}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const TechnicalMethodPanel: React.FC<TechnicalMethodPanelProps> = ({ steps, mode, setMode }) => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-lime-100 text-lime-600 rounded-lg">
                        <ClockIcon className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Step-by-Step Method</h2>
                        <p className="text-sm text-slate-500">Workflow generated for your dough.</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
                    <button
                        onClick={() => setMode('grandma')}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${mode === 'grandma' ? 'bg-white text-pink-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Simple
                    </button>
                    <button
                        onClick={() => setMode('technical')}
                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 ${mode === 'technical' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Technical
                    </button>
                </div>
            </div>

            <div className="relative pl-2">
                {steps.map((step) => (
                    <StepCard key={step.id} step={step} mode={mode} />
                ))}
            </div>

            <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <p className="text-xs text-slate-500 italic font-medium">
                    "The dough waits for no one." — Ancient Baker's Proverb
                </p>
            </div>
        </div>
    );
};

export default TechnicalMethodPanel;
