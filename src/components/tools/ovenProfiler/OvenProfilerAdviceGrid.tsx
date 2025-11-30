import React from 'react';
import { FireIcon, BeakerIcon, ClockIcon, InfoIcon } from '@/components/ui/Icons';
import { OvenAnalysisResult } from '@/logic/ovenProfile';

interface OvenProfilerAdviceGridProps {
    analysis: OvenAnalysisResult;
}

const AdviceItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start gap-3 text-sm text-slate-600">
        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-500"></span>
        <span className="leading-relaxed">{text}</span>
    </li>
);

const Tooltip: React.FC<{ label: string; content: string }> = ({ label, content }) => (
    <div className="group relative inline-block ml-2 align-middle">
        <button className="text-slate-400 hover:text-lime-600 transition-colors block">
            <InfoIcon className="h-4 w-4" />
        </button>
        <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-64 -translate-x-1/2 rounded-xl bg-slate-900 p-3 text-xs text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 border border-slate-700">
            <strong className="text-lime-400">{label}</strong><br />
            {content}
            <svg className="absolute left-0 top-full h-2 w-full text-slate-900" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
        </div>
    </div>
);

export const OvenProfilerAdviceGrid: React.FC<OvenProfilerAdviceGridProps> = ({ analysis }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Preheat */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <ClockIcon className="h-5 w-5 text-orange-500" />
                    Preheating & Rack
                </h4>
                <ul className="space-y-3 mb-4 flex-grow">
                    {analysis.preheatAdvice.map((item, i) => (
                        <AdviceItem key={i} text={item} />
                    ))}
                </ul>
            </div>

            {/* Card 2: Strategy */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <FireIcon className="h-5 w-5 text-red-500" />
                    Baking Strategy
                    <Tooltip
                        label="Low Power Strategy"
                        content="Thermodynamics: Lower temps mean slower heat transfer. The dough dries out before it browns. Strategies like adding oil/sugar or using the broiler mimic high-heat results chemically."
                    />
                </h4>
                <ul className="space-y-3 mb-4 flex-grow">
                    {analysis.bakingStrategy.map((item, i) => (
                        <AdviceItem key={i} text={item} />
                    ))}
                </ul>
            </div>

            {/* Card 3: Dough */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <BeakerIcon className="h-5 w-5 text-blue-500" />
                    Dough Adjustments
                    <Tooltip
                        label="High Hydration Risks"
                        content="In weak ovens, high hydration dough releases steam too slowly, creating a 'boiled' or gummy texture instead of a crispy rise. Lowering hydration helps the structure set faster."
                    />
                </h4>
                <ul className="space-y-3 mb-4 flex-grow">
                    {analysis.doughAdjustments.map((item, i) => (
                        <AdviceItem key={i} text={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
