import React, { useState, useEffect } from 'react';
import { DoughStyle, ProcessStep } from '@/types/dough';
import { italianStyles } from '@/data/styles/regions/italy';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { useUser } from '@/contexts/UserProvider';
import {
    ArrowLeft,
    Heart,
    Calculator,
    Clock,
    Thermometer,
    Activity,
    Lightbulb,
    ChefHat,
    MapPin,
    Info,
    BookOpen,
    Droplets,
    CheckCircle2,
    Wind,
    CloudRain,
    Flame,
    ArrowRightLeft,
    Scale,
    AlertTriangle
} from 'lucide-react';

// --- COMPONENTS ---

// 1. Science Pulse Timeline Component (Refined)
const SciencePulseTimeline: React.FC<{ steps: ProcessStep[] }> = ({ steps }) => {
    return (
        <div className="relative space-y-12 pl-4 md:pl-0">
            {/* Central Line */}
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-200 via-lime-200 to-slate-200 md:left-1/2 md:-ml-px hidden md:block"></div>

            {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">

                    {/* Left Side (Action) */}
                    <div className="w-full md:w-[45%] mb-4 md:mb-0 md:text-right pr-0 md:pr-8 order-2 md:order-1">
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-lime-50 to-transparent rounded-bl-3xl opacity-50"></div>

                            <div className="flex items-center justify-between md:justify-end gap-2 mb-3">
                                <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                                    Step {index + 1}
                                </span>
                                <h4 className="font-bold text-slate-800 text-lg">{step.title}</h4>
                            </div>

                            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                {step.action}
                            </p>

                            <div className="flex items-center justify-end gap-3 text-xs font-semibold text-slate-500">
                                {step.duration && (
                                    <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                        <Clock className="w-3 h-3 text-lime-600" /> {step.duration}
                                    </span>
                                )}
                                {step.temperature && (
                                    <span className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-md border border-red-100 text-red-600">
                                        <Thermometer className="w-3 h-3" /> {step.temperature}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Center Node */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center justify-center order-1 md:order-2 h-full z-10 w-full md:w-auto pointer-events-none md:pointer-events-auto">
                        <div className="w-8 h-8 rounded-full bg-white border-4 border-lime-500 shadow-lg relative z-10 mt-[-2rem] md:mt-0 mb-4 md:mb-0 ml-4 md:ml-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Right Side (Science) */}
                    <div className="w-full md:w-[45%] pl-0 md:pl-8 order-3">
                        <div className="bg-gradient-to-br from-indigo-50 to-white p-5 rounded-2xl border border-indigo-100 relative group-hover:border-indigo-200 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="bg-white p-1.5 rounded-full shadow-sm shrink-0 mt-1">
                                    <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-100" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1 block">The Science</span>
                                    <p className="text-sm text-indigo-900/80 italic leading-relaxed">
                                        "{step.science}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

// 2. Hydration Bar Component
const HydrationBar: React.FC<{ value: number; min: number; max: number }> = ({ value, min, max }) => {
    const percentage = Math.min(100, Math.max(0, ((value - 45) / (90 - 45)) * 100)); // Visual scale 45% -> 90%

    return (
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">

                    </span>
                </div>
                <div className="text-right">

                </div>
            </div>
            <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-slate-100">
                <div style={{ width: `${percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-500 transition-all duration-500"></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400">
                <span>{min}%</span>
                <span>{max}%</span>
            </div>
        </div>
    );
};

// --- MAIN PAGE ---

interface StyleDetailPageProps {
    style?: any;
    onLoadAndNavigate: (style: any) => void;
    onBack: () => void;
}

// 3. Education Section Component
const EducationSection: React.FC<{ education: any }> = ({ education }) => {
    if (!education) return null;

    return (
        <section className="space-y-8 animate-fade-in-up">

            {/* Pro Tips */}
            {education.pro_tips && (
                <div className="bg-lime-50 rounded-2xl p-6 border border-lime-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Lightbulb className="w-24 h-24 text-lime-900" />
                    </div>
                    <div className="flex items-center gap-3 mb-4 relative z-10">
                        <div className="p-2 bg-lime-100 rounded-lg">
                            <CheckCircle2 className="w-5 h-5 text-lime-700" />
                        </div>
                        <h3 className="text-lg font-bold text-lime-900">Pro Tips from the Masters</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                        {education.pro_tips.map((tip: any, i: number) => (
                            <div key={i} className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-lime-200/50">
                                <span className="block text-xs font-bold text-lime-800 uppercase mb-1">{tip.tip}</span>
                                <p className="text-sm text-lime-900/80 leading-snug">{tip.explanation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* What If? Scenarios */}
            {education.what_if && (
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-amber-50 rounded-lg">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">What Happens If...?</h3>
                    </div>
                    <div className="space-y-3">
                        {education.what_if.map((item: any, i: number) => (
                            <div key={i} className="group border border-slate-100 rounded-lg p-4 hover:border-amber-200 transition-colors">
                                <span className="block font-bold text-slate-700 mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                    {item.scenario}
                                </span>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pl-3.5">
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Consequence</span>
                                        <p className="text-slate-600">{item.result}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase font-bold text-emerald-500 block mb-0.5">Correction</span>
                                        <p className="text-slate-600 italic">"{item.correction}"</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Comparative Analysis */}
            {education.comparative_analysis && (
                <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                            <ArrowRightLeft className="w-5 h-5 text-indigo-300" />
                        </div>
                        <h3 className="text-lg font-bold">Style Comparisons</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4 relative z-10">
                        {education.comparative_analysis.map((comp: any, i: number) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-indigo-200">Vs. {comp.target_style}</span>
                                </div>
                                <p className="text-sm text-slate-300 mb-3 border-b border-white/5 pb-3">
                                    {comp.difference}
                                </p>
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">Why Choose This?</span>
                                    <p className="text-xs text-emerald-100/80 italic">{comp.why_choose_this}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Q&A Deep Dive */}
            {education.q_and_a && (
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-sky-50 rounded-lg">
                            <Info className="w-5 h-5 text-sky-500" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Master Class Q&A</h3>
                    </div>
                    <div className="space-y-6">
                        {education.q_and_a.map((qa: any, i: number) => (
                            <div key={i} className="pl-4 border-l-2 border-sky-100">
                                <h4 className="font-bold text-slate-800 mb-2">{qa.question}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg rounded-tl-none">
                                    {qa.answer}
                                </p>
                                {qa.context && (
                                    <span className="text-[10px] font-bold text-sky-500 uppercase mt-2 block tracking-wider">
                                        Source: {qa.context}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Fermentation Methods */}
            {education.fermentation_methods && (
                <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-orange-100 rounded-lg">
                            <Wind className="w-5 h-5 text-orange-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Fermentation Strategy</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {education.fermentation_methods.map((method: any, i: number) => (
                            <div key={i} className={`p-3 rounded-xl border ${method.suitability === 'Authentic' || method.suitability === 'Ideal' ? 'bg-white border-orange-200 shadow-sm' : 'bg-transparent border-slate-200 opacity-75'}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-slate-800">{method.method}</span>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${method.suitability === 'Authentic' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                                        {method.suitability}
                                    </span>
                                </div>
                                <p className="text-[11px] text-slate-600 leading-snug">
                                    {method.notes}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </section>
    );
};

// 4. Deep Dive Section Component (New Expert Module)
const DeepDiveSection: React.FC<{ deepDive: any }> = ({ deepDive }) => {
    if (!deepDive) return null;

    return (
        <section className="space-y-8 animate-fade-in-up mt-12 border-t border-slate-100 pt-8">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-purple-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-800">🔍 Deep Dive & Troubleshooting</h3>
                    <p className="text-sm text-slate-500">Expert analysis and logic breakdown</p>
                </div>
            </div>

            {/* 1. Hydration Logic Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Droplets className="w-32 h-32 text-indigo-300" />
                </div>
                <div className="relative z-10">
                    <h4 className="text-indigo-300 font-bold uppercase tracking-wider text-xs mb-2">The Hydration Logic</h4>
                    <p className="text-lg md:text-xl font-medium leading-relaxed font-serif italic opacity-90">
                        "{deepDive.hydrationLogic}"
                    </p>
                </div>
            </div>

            {/* 2. Method Matrix */}
            <div>
                <h4 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-slate-400" /> Method Suitability Matrix
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Direct */}
                    <div className={`p-4 rounded-xl border ${deepDive.methodSuitability?.direct?.suitable ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-100 opacity-60'}`}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-slate-800">Direct Method</span>
                            {deepDive.methodSuitability?.direct?.suitable ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <span className="text-xs font-bold text-slate-400">N/A</span>}
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">{deepDive.methodSuitability?.direct?.notes}</p>
                    </div>
                    {/* Biga */}
                    <div className={`p-4 rounded-xl border ${deepDive.methodSuitability?.biga?.suitable ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-100 opacity-60'}`}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-slate-800">Biga (Stiff)</span>
                            {deepDive.methodSuitability?.biga?.suitable ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <span className="text-xs font-bold text-slate-400">N/A</span>}
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">{deepDive.methodSuitability?.biga?.notes}</p>
                    </div>
                    {/* Poolish */}
                    <div className={`p-4 rounded-xl border ${deepDive.methodSuitability?.poolish?.suitable ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-100 opacity-60'}`}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-slate-800">Poolish (Liquid)</span>
                            {deepDive.methodSuitability?.poolish?.suitable ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <span className="text-xs font-bold text-slate-400">N/A</span>}
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">{deepDive.methodSuitability?.poolish?.notes}</p>
                    </div>
                </div>
            </div>

            {/* 3. What If Scenarios */}
            {deepDive.whatIf && deepDive.whatIf.length > 0 && (
                <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
                    <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-600" /> Troubleshooting Scenarios
                    </h4>
                    <div className="space-y-4">
                        {deepDive.whatIf.map((item: any, i: number) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm">
                                <p className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                                    <span className="text-amber-500 mt-0.5">❓</span> {item.scenario}
                                </p>
                                <div className="pl-6 border-l-2 border-amber-200 space-y-2">
                                    <p className="text-sm text-slate-600"><span className="font-bold text-red-500 text-xs uppercase mr-2">Consequence:</span>{item.outcome}</p>
                                    <p className="text-sm text-slate-600"><span className="font-bold text-green-600 text-xs uppercase mr-2">Solution:</span>{item.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 4. Comparisons */}
            {deepDive.comparisons && deepDive.comparisons.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-slate-500" /> Comparative Analysis
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                        {deepDive.comparisons.map((comp: any, i: number) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                <div className="shrink-0 font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-xs">
                                    Vs. {comp.vsStyle}
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed italic">
                                    "{comp.difference}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export const StyleDetailPage: React.FC<StyleDetailPageProps> = ({ style: initialStyle, onLoadAndNavigate, onBack }) => {
    const { isFavorite, toggleFavorite } = useUser();
    const [styleData, setStyleData] = useState<DoughStyle | null>(null);

    useEffect(() => {
        if (initialStyle && initialStyle.id) {
            const found = italianStyles.find(s => s.id === initialStyle.id);
            if (found) {
                setStyleData(found);
                return;
            }
        }
        setStyleData(italianStyles[0]);
    }, [initialStyle]);

    if (!styleData) return (
        <LibraryPageLayout>
            <div className="flex h-screen items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-500"></div>
            </div>
        </LibraryPageLayout>
    );

    const favorited = isFavorite(styleData.id);

    return (
        <LibraryPageLayout>
            {/* --- HEADER --- */}
            <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-slate-200 px-4 py-3 -mx-4 sm:-mx-6 lg:-mx-8 lg:px-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex items-center justify-between mb-0">
                <div className="flex items-center gap-3">
                    <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-slate-900 leading-none tracking-tight">{styleData.name}</h1>
                        <span className="text-[10px] uppercase font-bold text-lime-600 tracking-wider">Level 2.5 Master Spec</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => toggleFavorite({ id: styleData.id, type: 'style', title: styleData.name, metadata: {} })}
                        className={`p-2 rounded-full border transition-all ${favorited ? 'bg-pink-50 border-pink-200 text-pink-500 shadow-inner' : 'bg-white border-slate-200 text-slate-400 hover:text-pink-500 hover:border-pink-200'}`}
                    >
                        <Heart className={`w-5 h-5 ${favorited ? 'fill-current' : ''}`} />
                    </button>
                    <button
                        onClick={() => onLoadAndNavigate(styleData)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-lime-500/30 transition-all hover:scale-105 active:scale-95"
                    >
                        <Calculator className="w-4 h-4" /> <span className="hidden sm:inline">Use Formula</span>
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-6 pb-20">

                {/* --- HERO SECTION --- */}
                <div className="relative h-56 md:h-72 w-full rounded-2xl overflow-hidden mb-8 shadow-2xl transition-all">
                    {/* Modern Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-900 z-0"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 text-white">
                        <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-emerald-300" /> {styleData.subRegion}
                            </span>
                            <span className={`px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-bold uppercase tracking-wider ${styleData.specs.difficulty === 'Expert' ? 'text-purple-300 border-purple-500/30' : 'text-lime-300'}`}>
                                {styleData.specs.difficulty} Level
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 w-fit">
                            {styleData.name}
                        </h2>

                        <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                            {styleData.description}
                        </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block">
                        <ChefHat className="w-48 h-48 text-white rotate-12" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* --- LEFT COLUMN (CONTENT) --- */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* History & Context (Detailed) */}
                        <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-amber-50 rounded-lg">
                                    <BookOpen className="w-5 h-5 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">Historical & Cultural Context</h3>
                            </div>

                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg leading-relaxed text-slate-700 font-serif border-l-4 border-amber-200 pl-6 italic bg-amber-50/30 py-4 rounded-r-lg">
                                    "{styleData.history_context}"
                                </p>
                            </div>

                            {styleData.references && styleData.references.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                                    <span className="text-xs font-bold text-slate-400 uppercase mr-2 mt-1">Validated By:</span>
                                    {styleData.references.map((ref, i) => (
                                        <span key={i} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-medium text-slate-500">
                                            {ref}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </section>

                        {/* Scientific Process (Dynamic Timeline) */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-indigo-50 rounded-lg">
                                    <Activity className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">The Scientific Process</h3>
                                    <p className="text-sm text-slate-500">Step-by-step molecular breakdown</p>
                                </div>
                            </div>

                            <SciencePulseTimeline steps={styleData.process} />
                        </section>

                        {/* Deep Dive Module (New) */}
                        {styleData.deepDive && <DeepDiveSection deepDive={styleData.deepDive} />}

                        {/* Educational Content (New Level 3) */}
                        {styleData.education && <EducationSection education={styleData.education} />}


                    </div>


                    {/* --- RIGHT COLUMN (SPECS - DEEP TECH) --- */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Master Specs Panel */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden sticky top-28">
                            {/* Header */}
                            <div className="p-1 bg-gradient-to-r from-slate-800 to-slate-900"></div>
                            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                                    <Calculator className="w-4 h-4 text-lime-600" /> Tech Specs
                                </h3>
                                <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-1 rounded font-bold">LEVEL 2.5</span>
                            </div>

                            <div className="p-6 space-y-8">

                                {/* 1. Hydration Deep Dive */}
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                                            <Droplets className="w-3 h-3 text-sky-500" /> Hydration
                                        </label>
                                        <span className="text-2xl font-black text-slate-900 leading-none">{styleData.specs.hydration.ideal}<span className="text-sm text-slate-400">%</span></span>
                                    </div>
                                    <HydrationBar
                                        value={styleData.specs.hydration.ideal}
                                        min={styleData.specs.hydration.min}
                                        max={styleData.specs.hydration.max}
                                    />
                                    {/* 1. Hydration & Environment */}
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                                                <Droplets className="w-3 h-3 text-sky-500" /> Hydration Dynamics
                                            </label>
                                            <span className="text-3xl font-black text-slate-900 leading-none tracking-tighter">{styleData.specs.hydration.ideal}<span className="text-sm text-slate-400 font-bold">%</span></span>
                                        </div>
                                        <HydrationBar
                                            value={styleData.specs.hydration.ideal}
                                            min={styleData.specs.hydration.min}
                                            max={styleData.specs.hydration.max}
                                        />

                                        {/* Comparative Context */}
                                        <div className="flex items-center justify-between mt-2 mb-3 px-1">
                                            <span className="text-[10px] text-slate-400 font-medium">Standard (60%)</span>
                                            <span className="text-[10px] text-slate-400 font-medium">This Style ({styleData.specs.hydration.ideal}%)</span>
                                            <span className="text-[10px] text-slate-400 font-medium">High (80%+)</span>
                                        </div>

                                        {/* Environmental Conditionals */}
                                        <div className="bg-sky-50/50 rounded-lg p-3 border border-sky-100 space-y-2">
                                            <div className="flex items-start gap-2">
                                                <CloudRain className="w-3 h-3 text-sky-400 mt-0.5" />
                                                <div>
                                                    <span className="text-[10px] font-bold text-sky-700 uppercase block">High Humidity (&gt;70%)</span>
                                                    <p className="text-[10px] text-sky-800 leading-tight">Flour will absorb less water. Reduce hydration by <b>2-3%</b> to maintain handling properties.</p>
                                                </div>
                                            </div>
                                            <div className="w-full h-px bg-sky-200/30"></div>
                                            <div className="flex items-start gap-2">
                                                <Wind className="w-3 h-3 text-amber-400 mt-0.5" />
                                                <div>
                                                    <span className="text-[10px] font-bold text-amber-700 uppercase block">Hot/Dry Climate</span>
                                                    <p className="text-[10px] text-amber-800 leading-tight">Evaporation increases. Increase hydration by <b>1-2%</b> or cover dough immediately after mixing.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-slate-100"></div>

                                    {/* 2. Thermodynamics (Oven & Adaptation) */}
                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1 mb-3">
                                            <Thermometer className="w-3 h-3 text-orange-500" /> Thermal Engineering
                                        </label>

                                        <div className="grid grid-cols-5 gap-2 mb-3">
                                            <div className="col-span-2 bg-slate-800 rounded-lg p-2 text-center text-white">
                                                <span className="text-[9px] uppercase font-bold text-slate-400 block mb-1">Target</span>
                                                <span className="text-xl font-bold">{styleData.specs.ovenTemp.ideal}°C</span>
                                            </div>
                                            <div className="col-span-3 bg-slate-50 rounded-lg p-2 border border-slate-100 flex flex-col justify-center">
                                                <span className="text-[9px] uppercase font-bold text-slate-400 block mb-0.5">Heat Transfer</span>
                                                <span className="text-xs font-bold text-slate-700">
                                                    {styleData.specs.ovenTemp.ideal > 350 ? "Radiation Dominant" : "Conduction/Convection"}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Home Oven Adaptation Logic */}
                                        <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Flame className="w-3 h-3 text-orange-500" />
                                                <span className="text-[10px] font-bold text-orange-700 uppercase">Home Oven Strategy (Max 250°C)</span>
                                            </div>
                                            <p className="text-[11px] text-orange-900/80 leading-relaxed font-medium">
                                                {styleData.specs.ovenTemp.ideal > 300
                                                    ? "⚠️ Critical Gap: Your oven is ~" + (styleData.specs.ovenTemp.ideal - 250) + "°C too cool. Use a Pizza Steel preheated for 1hr. Bake with Broiler ON during the entire bake to simulate the dome heat of a wood oven."
                                                    : "✅ Compatible: Standard home ovens can achieve this temp. Use a stone for better bottom crust stability."}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-slate-100"></div>

                                    {/* 3. Rheology & W-Index */}
                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1 mb-3">
                                            <Activity className="w-3 h-3 text-emerald-500" /> Flour Mechanics
                                        </label>

                                        <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100/50 mb-3">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-[10px] font-bold text-emerald-800 uppercase">Recommended Strength</span>
                                                <span className="text-xs font-bold text-emerald-600 bg-white px-2 py-0.5 rounded shadow-sm border border-emerald-100">
                                                    W {styleData.specs.difficulty === 'Expert' ? '350+' : styleData.specs.difficulty === 'Hard' ? '300-320' : '260-280'}
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-emerald-900 leading-relaxed italic">
                                                "{styleData.scientificProfile.flourRheology}"
                                            </p>
                                        </div>

                                        <div className="flex gap-2">
                                            <div className="flex-1 bg-slate-50 rounded p-2 text-center border border-slate-100">
                                                <span className="block text-[9px] uppercase text-slate-400 font-bold">P/L Ratio</span>
                                                <span className="text-xs font-bold text-slate-700">0.55 - 0.65</span>
                                            </div>
                                            <div className="flex-1 bg-slate-50 rounded p-2 text-center border border-slate-100">
                                                <span className="block text-[9px] uppercase text-slate-400 font-bold">Protein</span>
                                                <span className="text-xs font-bold text-slate-700">
                                                    {styleData.specs.difficulty === 'Expert' ? '13.5%+' : '12-13%'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-slate-100"></div>

                                    {/* 4. Baker's Percentage & Variations */}
                                    <div>
                                        <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1 mb-3">
                                            <Scale className="w-3 h-3 text-slate-400" /> Formula & Variations
                                        </label>

                                        <div className="space-y-3">
                                            {/* Base Table */}
                                            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                                                <table className="w-full text-[11px]">
                                                    <thead className="bg-slate-50 text-slate-400 font-bold uppercase">
                                                        <tr>
                                                            <th className="px-3 py-1.5 text-left">Ingredient</th>
                                                            <th className="px-3 py-1.5 text-right">%</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-50">
                                                        {styleData.base_formula?.map((ing, i) => (
                                                            <tr key={i}>
                                                                <td className="px-3 py-1.5 font-medium text-slate-700">{ing.name}</td>
                                                                <td className="px-3 py-1.5 text-right font-bold text-slate-900">{ing.percentage}%</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot className="bg-slate-50">
                                                        <tr>
                                                            <td colSpan={2} className="px-3 py-2 text-center text-[10px] text-slate-400 italic">
                                                                *All based on Flour Weight (100%)
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>

                                            {/* Variations Toggle/Info */}
                                            <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                <ArrowRightLeft className="w-3 h-3 text-slate-400 mt-0.5" />
                                                <div>
                                                    <span className="text-[10px] font-bold text-slate-600 uppercase block">Common Variations</span>
                                                    <ul className="text-[10px] text-slate-500 space-y-1 mt-1 list-disc pl-3">
                                                        {styleData.specs.hydration.ideal > 70
                                                            ? <li><strong>Lower Hydration ({styleData.specs.hydration.ideal - 5}%):</strong> Easier to handle for beginners.</li>
                                                            : <li><strong>Sourdough Hybrid:</strong> Replace 20% flour with stiff starter for more depth.</li>
                                                        }
                                                        <li><strong>Cold Ferment Extension:</strong> Can be pushed to 72h for max digestibility (Watch acidity).</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </LibraryPageLayout>
    );
};
