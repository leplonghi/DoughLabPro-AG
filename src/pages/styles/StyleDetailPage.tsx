import React, { useMemo } from 'react';
import { DoughStyleDefinition } from '@/types';
import { 
  ArrowLeft, 
  FlaskConical, 
  Thermometer, 
  Droplet, 
  Clock, 
  Lightbulb,
  ChefHat,
  Wheat,
  Info
} from 'lucide-react';
import {
    CalculatorIcon,
} from '@/components/ui/Icons';

// --- Sub-Components for Modular UI ---

const TechGauge: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  value: string | number; 
  min?: number; 
  max?: number; 
  current?: number; 
  unit?: string;
  colorClass?: string;
}> = ({ icon, label, value, min = 0, max = 100, current = 0, unit, colorClass = "bg-blue-500" }) => {
  const percentage = Math.min(Math.max(((current - min) / (max - min)) * 100, 0), 100);

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
        {icon} {label}
      </div>
      <div className="text-2xl font-black text-slate-900 mb-2">
        {value}{unit && <span className="text-sm font-medium text-slate-400 ml-1">{unit}</span>}
      </div>
      {/* Progress Bar */}
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ${colorClass}`} 
          style={{ width: `${percentage}%` }}
        />
      </div>
      {(min !== undefined && max !== undefined) && (
        <div className="flex justify-between mt-1 text-[10px] text-slate-400 font-mono">
          <span>{min}{unit}</span>
          <span>{max}{unit}</span>
        </div>
      )}
    </div>
  );
};

const DifficultyStars: React.FC<{ difficulty: string }> = ({ difficulty }) => {
  const levels: Record<string, number> = { 'Easy': 1, 'Medium': 2, 'Hard': 3, 'Expert': 4, 'medium-high': 3, 'medium': 2, 'high': 3, 'low': 1 };
  const normalizedDiff = difficulty ? difficulty.toLowerCase() : 'medium';
  let currentLevel = 2;
  
  if (normalizedDiff.includes('expert') || normalizedDiff.includes('high')) currentLevel = 4;
  else if (normalizedDiff.includes('hard') || normalizedDiff.includes('complex')) currentLevel = 3;
  else if (normalizedDiff.includes('medium')) currentLevel = 2;
  else currentLevel = 1;

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
        <ChefHat className="w-4 h-4" /> Difficulty
      </div>
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4].map((star) => (
          <div 
            key={star} 
            className={`h-2 w-full rounded-full ${star <= currentLevel ? 'bg-amber-400' : 'bg-slate-100'}`}
          />
        ))}
      </div>
      <span className="text-sm font-bold text-slate-700 self-end mt-1 capitalize">{difficulty || 'Medium'}</span>
    </div>
  );
};

const ScienceCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="bg-green-50/50 rounded-xl p-5 border border-green-100 hover:border-green-200 transition-colors">
    <div className="flex items-center gap-2 mb-3 text-green-700 font-bold text-sm uppercase tracking-wide">
      {icon} {title}
    </div>
    <p className="text-slate-700 text-sm leading-relaxed font-medium">
      {text}
    </p>
  </div>
);

const TimelineItem: React.FC<{ title: string; action: string; duration?: string; isLast: boolean }> = ({ title, action, duration, isLast }) => (
  <div className="relative pl-8 pb-12 last:pb-0">
    {/* Connector Line */}
    {!isLast && (
      <div className="absolute left-[11px] top-6 w-0.5 h-full bg-slate-200" />
    )}
    
    {/* Dot */}
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-slate-300 z-10" />

    <div className="grid md:grid-cols-12 gap-6">
      {/* Left: Action */}
      <div className="md:col-span-12 pt-1">
        <div className="flex items-center gap-2 mb-1">
          {duration && (
             <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {duration}
             </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {action}
        </p>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

interface StyleDetailPageProps {
    style: DoughStyleDefinition;
    onLoadAndNavigate: (style: DoughStyleDefinition) => void;
    onBack: () => void;
}

export const StyleDetailPage: React.FC<StyleDetailPageProps> = ({ style, onLoadAndNavigate, onBack }) => {
  // Parsing technical values for gauges
  const hydrationVal = Array.isArray(style.technicalProfile?.hydration) 
        ? (style.technicalProfile.hydration[0] + style.technicalProfile.hydration[1]) / 2 
        : (style.technical.hydration || 60);
  
  const ovenTempVal = parseInt(style.technicalProfile?.ovenRecommendations?.replace(/[^0-9]/g, '') || '250');

  // Fallback for scientific data if not present in legacy types
  const scientificData = (style as any).scientificProfile || {
      flourRheology: "Standard protein content recommended for optimal gluten development.",
      processScience: "Balances fermentation time with hydration for characteristic texture."
  };

  const fermentationSteps = style.technicalProfile?.fermentationSteps || [];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* 1. Hero Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-4 transition-colors text-xs font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Library
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex gap-2 mb-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide shadow-sm">
                  {style.origin.country}
                </span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide shadow-sm">
                  {style.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-2">
                {style.name}
              </h1>
              <p className="text-slate-500 font-medium max-w-2xl text-lg">
                {style.description}
              </p>
            </div>
            
            <button 
                onClick={() => onLoadAndNavigate(style)}
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-200 flex-shrink-0 flex items-center gap-2"
            >
              <CalculatorIcon className="w-5 h-5 text-white" />
              Open in Calculator
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Visual Specs Dashboard */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Lab Parameters</h2>
            
            <TechGauge 
              icon={<Droplet className="w-4 h-4 text-blue-500" />}
              label="Hydration"
              value={hydrationVal}
              current={hydrationVal}
              min={50}
              max={100} 
              unit="%"
              colorClass="bg-blue-500"
            />

            <TechGauge 
              icon={<Thermometer className="w-4 h-4 text-orange-500" />}
              label="Oven Temp"
              value={style.technicalProfile?.ovenRecommendations || ovenTempVal}
              current={ovenTempVal}
              min={0}
              max={500}
              unit={typeof style.technicalProfile?.ovenRecommendations === 'number' ? '°C' : ''}
              colorClass="bg-gradient-to-r from-orange-400 to-red-500"
            />

            <div className="grid grid-cols-2 gap-4">
              <DifficultyStars difficulty={style.difficulty} />
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                   <Clock className="w-4 h-4" /> Time
                </div>
                <div className="text-xl font-black text-slate-900 capitalize">{style.fermentationType}</div>
                <div className="text-[10px] text-slate-400 font-mono">Process</div>
              </div>
            </div>

            {/* Scientific Profile Cards */}
            <div className="pt-6 border-t border-slate-200">
               <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4">Scientific Foundations</h2>
               <div className="space-y-4">
                 <ScienceCard 
                   icon={<Wheat className="w-4 h-4" />}
                   title="Flour Rheology"
                   text={scientificData.flourRheology}
                 />
                 <ScienceCard 
                   icon={<FlaskConical className="w-4 h-4" />}
                   title="Process Chemistry"
                   text={scientificData.processScience}
                 />
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Didactic Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-10 border-b border-slate-100 pb-6">
                <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                   <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900">Process Engineering</h2>
                  <p className="text-slate-500 text-sm font-medium">Step-by-step scientific breakdown of the method.</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {fermentationSteps.map((step, idx) => (
                  <TimelineItem 
                    key={idx} 
                    title={`Step ${idx + 1}`}
                    action={step}
                    isLast={idx === fermentationSteps.length - 1} 
                  />
                ))}
              </div>
            </div>

            {/* References */}
            <div className="mt-8 px-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Validated References</h4>
              <div className="flex flex-wrap gap-2">
                {style.references && style.references.map((ref, i) => (
                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                    {typeof ref === 'string' ? ref : (ref as any).source}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};
