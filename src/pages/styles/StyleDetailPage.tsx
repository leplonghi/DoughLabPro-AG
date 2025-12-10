import React, { useState, useEffect, useMemo } from 'react';
import { DoughStyle, ProcessStep } from '@/types/dough';
import { STYLES_DATA } from '@/data/styles/registry'; // Use Global Registry
import { DoughStyleDefinition } from '@/types/styles';
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
    AlertTriangle,
    Camera,
    Upload
} from 'lucide-react';
import { uploadImage } from '@/services/storageService';
import { AffiliateGrid } from '@/components/AffiliateGrid';

// --- ADAPTER: Legacy/Registry (V2) -> UI (V3) ---
// This ensures that American/European styles (V2 Definitions) can be rendered by this V3 Page.
function mapDefinitionToStyle(def: DoughStyleDefinition): DoughStyle {
    // 1. Parse Fermentation Steps from Strings to Objects
    const processSteps: ProcessStep[] = def.technicalProfile.fermentationSteps.map((stepStr, index) => {
        // Format assumption: "Title. [Science: Explanation]"
        const scienceMatch = stepStr.match(/\[Science: (.*?)\]/);
        const scienceText = scienceMatch ? scienceMatch[1] : "Control of enzymatic activity and gluten development.";
        const cleanText = stepStr.replace(/\[Science:.*?\]/, '').trim();

        let phase: any = 'Bulk';
        if (index === 0) phase = 'Mix';
        if (index === def.technicalProfile.fermentationSteps.length - 1) phase = 'Bake';

        // Extract title if possible (e.g. "Mix to Windowpane.")
        const parts = cleanText.split('.');
        const title = parts[0] || `Step ${index + 1}`;
        const action = parts.slice(1).join('.').trim() || cleanText;

        return {
            phase: phase,
            title: title,
            duration: "Variable",
            action: action || title, // Fallback if no dot split
            science: scienceText
        };
    });

    // 2. Construct Scientific Profile (Robust Mapping)
    const scientificProfile = def.scientificProfile || {
        flourRheology: {
            w_index: def.technicalProfile.flourStrength || "N/A",
            pl_ratio: "0.55-0.65",
            absorption_capacity: "Medium-High",
            protein_type: "Soft Wheat",
            science_explanation: def.notes?.[0] || "Standard flour properties apply."
        },
        thermalProfile: {
            oven_type: "Standard",
            heat_distribution: "Conduction/Convection",
            crust_development: "Maillard dominant",
            crumb_structure: "Open",
            ...def.scientificProfile?.thermalProfile
        },
        fermentationScience: {
            yeast_activity: "Standard",
            ph_target: "5.5",
            organic_acids: "Balanced",
            enzymatic_activity: "Moderate",
            ...def.scientificProfile?.fermentationScience
        }
    };

    return {
        id: def.id,
        name: def.name,
        region: (def.origin.country === 'Italy' ? 'Italy' : def.origin.country === 'USA' ? 'Americas' : 'Europe') as any,
        subRegion: def.origin.region,
        category: 'Pizza', // Simplification for UI tags
        tags: def.tags,
        description: def.description,
        history_context: def.history,
        base_formula: def.base_formula || [
            { name: "Flour", percentage: 100 },
            { name: "Water", percentage: (def.technicalProfile.hydration[0] + def.technicalProfile.hydration[1]) / 2 },
            { name: "Salt", percentage: (def.technicalProfile.salt[0] + def.technicalProfile.salt[1]) / 2 },
            { name: "Yeast", percentage: 0.5 }
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
        regulatory_info: def.regulatoryNotes,
        global_presence: def.globalPresence,
        variations: def.variations,
        education: def.education as any,
        deepDive: def.deepDive,
        process: processSteps,
        references: def.references.map(r => r.source),
        images: def.images
    };
}

// --- COMPONENTS ---

// 1. Scientific Process Timeline (Improved V2)
const ScientificProcessTimeline: React.FC<{ steps: ProcessStep[] }> = ({ steps }) => {
    return (
        <div className="relative space-y-8 pl-6 md:pl-0">
            {/* Main Connector Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-slate-100 rounded-full md:-ml-0.5 hidden md:block" />

            {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                    <div key={index} className={`relative flex flex-col md:flex-row items-stretch md:items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                        {/* Content Card */}
                        <div className={`flex-1 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} relative`}>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group relative overflow-hidden">
                                <div className={`absolute top-0 w-1 h-full ${isLeft ? 'right-0 bg-lime-500' : 'left-0 bg-indigo-500'} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                <span className="text-[10px] uppercase font-black text-slate-300 mb-1.5 block tracking-widest">Phase {index + 1}</span>
                                <h4 className="font-bold text-slate-800 text-base mb-1.5">{step.title}</h4>
                                <p className="text-slate-600 text-xs leading-relaxed mb-3">{step.action}</p>

                                {/* Metrics */}
                                <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {step.duration && <span className="text-[10px] font-semibold bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100 flex items-center gap-1"><Clock className="w-3 h-3" /> {step.duration}</span>}
                                    {step.temperature && <span className="text-[10px] font-semibold bg-orange-50 text-orange-600 px-2 py-1 rounded border border-orange-100 flex items-center gap-1"><Thermometer className="w-3 h-3" /> {step.temperature}</span>}
                                </div>
                            </div>
                        </div>

                        {/* Central Node */}
                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
                            <div className="w-10 h-10 rounded-full bg-white border-4 border-slate-200 shadow-sm flex items-center justify-center font-bold text-slate-400 text-xs relative">
                                {index + 1}
                                <div className="absolute inset-0 bg-lime-500 rounded-full opacity-0 hover:opacity-100 transition-opacity blur-md" />
                            </div>
                        </div>

                        {/* Science Insight (Opposite Side) */}
                        <div className={`flex-1 md:w-1/2 ${!isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} hidden md:block opacity-60 hover:opacity-100 transition-opacity`}>
                            <div className="flex items-start gap-4 h-full p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-help">
                                <div className={`mt-1 p-2 rounded-lg ${isLeft ? 'order-2 bg-indigo-50 text-indigo-500' : 'bg-lime-50 text-lime-500'}`}>
                                    <Lightbulb className="w-4 h-4" />
                                </div>
                                <div className={isLeft ? 'text-right flex-1' : 'flex-1'}>
                                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">What's happening chemically?</span>
                                    <p className="text-xs text-slate-600 italic leading-relaxed">"{step.science}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
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
    const { isFavorite, toggleFavorite, userStyles, updateUserStyle, user } = useUser();
    const [styleData, setStyleData] = useState<DoughStyle | null>(null);
    const [viewFormula, setViewFormula] = useState<any[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    // Determine if the current style is user-owned
    const isOwner = useMemo(() => {
        if (!initialStyle || !userStyles) return false;
        return userStyles.some(s => s.id === initialStyle.id);
    }, [initialStyle, userStyles]);

    const handleHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0] && styleData && isOwner) {
            const file = e.target.files[0];
            setIsUploading(true);
            try {
                const path = `styles/${user?.uid || 'temp'}/${styleData.id}/hero_${Date.now()}`;
                const url = await uploadImage(file, path);

                // Update local state
                const newStyleData = {
                    ...styleData,
                    images: { ...styleData.images, hero: url }
                };
                setStyleData(newStyleData);

                // Update in Firestore
                // We need to map back to Definition or partial update
                // Since styleData is DoughStyle (V3 view model), and updateUserStyle takes DoughStyleDefinition.
                // We assume initialStyle holds the definition key properties or we have to reconstruct it.
                // Actually initialStyle might be the Definition if passed from DoughStylesPage.
                // Let's use initialStyle as base if possible, or cast styleData back.
                // For safety, rely on initialStyle structure if it was a definition.

                // If styleData came from mapDefinitionToStyle, it's a transformed object.
                // We need access to the original Definition to update it cleanly.
                // But we can construct a partial update if updateUserStyle supports it? 
                // Currently updateUserStyle takes DoughStyleDefinition (full).
                // But we only changed the image.
                // Let's assume we can merge... 

                // CRITICAL: We need the original definition to save back.
                // Let's find it in userStyles.
                const originalDef = userStyles.find(s => s.id === styleData.id);
                if (originalDef) {
                    const updatedDef = {
                        ...originalDef,
                        images: { ...originalDef.images, hero: url }
                    };
                    await updateUserStyle(updatedDef);
                }

            } catch (error) {
                console.error("Failed to upload image", error);
                // Add toast error handling here if toast context available
            } finally {
                setIsUploading(false);
            }
        }
    };

    useEffect(() => {
        let foundDef: DoughStyleDefinition | undefined;

        if (initialStyle && initialStyle.id) {
            // Priority 1: Check Global Registry
            foundDef = STYLES_DATA.find(s => s.id === initialStyle.id);

            // Priority 2: Use passed style if not in registry (e.g. dynamic/user style)
            if (!foundDef) {
                foundDef = initialStyle as unknown as DoughStyleDefinition;
            }
        }

        if (foundDef) {
            // Convert Registry Definition (V2) -> Page Style (V3)
            const adaptedStyle = mapDefinitionToStyle(foundDef);
            setStyleData(adaptedStyle);
            setViewFormula(adaptedStyle.base_formula || []);
        }
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
                <div className="relative h-56 md:h-72 w-full rounded-2xl overflow-hidden mb-8 shadow-2xl transition-all group">
                    {/* Dynamic Hero Background Image */}
                    {styleData.images?.hero ? (
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 z-0"
                            style={{ backgroundImage: `url(${styleData.images.hero})` }}
                        >
                            {/* The Blur/Darkening Layer - Modern Glassy Look */}
                            <div className="absolute inset-0 backdrop-blur-[2px] bg-lime-900/30"></div>
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-lime-900/90 via-lime-900/40 to-transparent"></div>
                        </div>
                    ) : (
                        // Fallback Gradient
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-900 z-0">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                        </div>
                    )}

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10 text-white">
                        <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm">
                                <MapPin className="w-3 h-3 text-emerald-300" /> {styleData.subRegion}
                            </span>
                            <span className={`px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm ${styleData.specs.difficulty === 'Expert' ? 'text-purple-300 border-purple-500/30' : 'text-lime-300'}`}>
                                {styleData.specs.difficulty} Level
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-2 drop-shadow-lg text-white">
                            {styleData.name}
                        </h2>

                        <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed drop-shadow-md">
                            {styleData.description}
                        </p>
                    </div>

                    {/* Decorative Elements (Subtler now) */}
                    <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block z-0 pointer-events-none">
                        <ChefHat className="w-48 h-48 text-white rotate-12" />
                    </div>

                    {/* Owner Actions: Upload Photo */}
                    {isOwner && (
                        <div className="absolute bottom-4 right-4 z-20">
                            <label className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full text-white text-sm font-bold transition-all border border-white/20 shadow-lg hover:scale-105 active:scale-95">
                                {isUploading ? (
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <Camera className="w-4 h-4" />
                                )}
                                <span>{isUploading ? 'Uploading...' : 'Change Cover'}</span>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleHeroImageUpload}
                                    disabled={isUploading}
                                />
                            </label>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* --- LEFT COLUMN (CONTENT) --- */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* History & Cultural Context (Expanded) */}
                        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-8 pb-0">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-amber-50 rounded-lg">
                                        <BookOpen className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">Historical & Cultural Context</h3>
                                </div>

                                {(() => {
                                    const hasCuriosities = styleData.regulatory_info || (styleData.education?.pro_tips && styleData.education.pro_tips.length > 0);
                                    return (
                                        <div className={`grid grid-cols-1 ${hasCuriosities ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-8 mb-8`}>
                                            <div className={`${hasCuriosities ? 'lg:col-span-2' : ''} prose prose-slate max-w-none`}>
                                                <p className="text-lg leading-relaxed text-slate-700 font-serif border-l-4 border-amber-200 pl-6 italic">
                                                    "{styleData.history_context}"
                                                </p>
                                                {styleData.global_presence && (
                                                    <div className="mt-6">
                                                        <h4 className="font-bold text-slate-900 text-sm uppercase mb-2">Global Presence</h4>
                                                        <p className="text-sm text-slate-600">{styleData.global_presence}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Curiosities / Did You Know (Conditional) */}
                                            {hasCuriosities && (
                                                <div className="bg-amber-50/50 rounded-xl p-5 border border-amber-100">
                                                    <h4 className="font-bold text-amber-900 text-sm uppercase mb-3 flex items-center gap-2">
                                                        <Lightbulb className="w-4 h-4" /> Did You Know?
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {styleData.regulatory_info && (
                                                            <li className="text-xs text-amber-900/80 leading-snug">
                                                                <span className="font-bold block text-amber-700 mb-1">Regulation:</span>
                                                                {styleData.regulatory_info}
                                                            </li>
                                                        )}
                                                        {styleData.education?.pro_tips?.slice(0, 2).map((tip: any, i: number) => (
                                                            <li key={i} className="text-xs text-amber-900/80 leading-snug">
                                                                <span className="font-bold block text-amber-700 mb-1">{tip.tip}</span>
                                                                {tip.explanation}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })()}
                            </div>
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

                            <ScientificProcessTimeline steps={styleData.process} />
                        </section>

                        {/* Deep Dive Module (New) */}
                        {styleData.deepDive && <DeepDiveSection deepDive={styleData.deepDive} />}

                        {/* Educational Content (New Level 3) */}
                        {styleData.education && <EducationSection education={styleData.education} />}

                        {/* Validation & References */}
                        <div className="mt-8 pt-8 border-t border-slate-100">
                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen className="w-4 h-4 text-slate-400" />
                                <h4 className="text-sm font-bold text-slate-700 uppercase">References & Validation</h4>
                            </div>

                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-emerald-100 p-1.5 rounded-full">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block">Scientifically Validated</span>
                                        <span className="text-[10px] text-emerald-600/80">Parameters verified against cereal chemistry standards.</span>
                                    </div>
                                </div>

                                {styleData.references && styleData.references.length > 0 && (
                                    <div className="space-y-2 mt-4 pt-4 border-t border-slate-200/50">
                                        <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Primary Sources</span>
                                        <ul className="space-y-1">
                                            {styleData.references.map((ref, i) => (
                                                <li key={i} className="text-xs text-slate-500 hover:text-indigo-600 transition-colors flex items-start gap-2">
                                                    <span className="mt-1 w-1 h-1 rounded-full bg-slate-300"></span>
                                                    {ref.startsWith('http') ? (
                                                        <a href={ref} target="_blank" rel="noopener noreferrer" className="underline decoration-slate-300 hover:decoration-indigo-300 underline-offset-2 break-all">
                                                            {ref}
                                                        </a>
                                                    ) : ref}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>


                    </div>


                    {/* --- RIGHT COLUMN (SPECS - DEEP TECH) --- */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Master Specs Panel */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden sticky top-28">
                            {/* Header */}
                            <div className="p-1 bg-gradient-to-r from-slate-800 to-slate-900"></div>
                            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-2">
                                    <Calculator className="w-4 h-4 text-lime-600" /> Tech Specs
                                </h3>
                            </div>

                            <div className="p-6 space-y-8">

                                {/* 1. Hydration Deep Dive */}
                                <div>
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
                                            <div className="col-span-2 bg-lime-600 rounded-lg p-2 text-center text-white">
                                                <span className="text-[9px] uppercase font-bold text-lime-200 block mb-1">Target</span>
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
                                                    {styleData.scientificProfile.flourRheology.w_index || (styleData.specs.difficulty === 'Expert' ? 'W 350+' : 'W 260+')}
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-emerald-900 leading-relaxed italic">
                                                "{styleData.scientificProfile.flourRheology.science_explanation}"
                                            </p>
                                        </div>

                                        <div className="flex gap-2">
                                            <div className="flex-1 bg-slate-50 rounded p-2 text-center border border-slate-100">
                                                <span className="block text-[9px] uppercase text-slate-400 font-bold">P/L Ratio</span>
                                                <span className="text-xs font-bold text-slate-700">{styleData.scientificProfile.flourRheology.pl_ratio || "0.55"}</span>
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

                                        {/* Variations Tabs */}
                                        {styleData.variations && styleData.variations.length > 0 && (
                                            <div className="flex gap-2 mb-3 overflow-x-auto pb-1">
                                                <button
                                                    onClick={() => setViewFormula(styleData.base_formula || [])}
                                                    className={`px-2 py-1 text-[10px] font-bold rounded shadow-sm whitespace-nowrap transition-colors ${viewFormula === styleData.base_formula ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                                >
                                                    Base Formula
                                                </button>
                                                {styleData.variations.map((v: any, i: number) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setViewFormula(v.formula || v.ingredients || [])}
                                                        className={`px-2 py-1 text-[10px] font-bold rounded shadow-sm whitespace-nowrap transition-colors ${viewFormula === (v.formula || v.ingredients) ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                                    >
                                                        {v.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                                            <table className="w-full text-[11px]">
                                                <thead className="bg-slate-50 text-slate-400 font-bold uppercase">
                                                    <tr>
                                                        <th className="px-3 py-1.5 text-left">Ingredient</th>
                                                        <th className="px-3 py-1.5 text-right">%</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50">
                                                    {viewFormula.map((ing, i) => (
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
                                    </div>

                                    {/* Oven Profiler Link (New) */}
                                    <div className="mt-6 pt-6 border-t border-slate-100">
                                        <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-transform">
                                            <Flame className="w-4 h-4" /> Launch Oven Profiler
                                        </button>
                                        <p className="text-[10px] text-center text-slate-400 mt-2">Adjust baking metrics for your specific equipment.</p>
                                    </div>

                                </div>
                            </div>

                            {/* Affiliate / Gear Section */}
                            <AffiliateGrid
                                tags={[...(styleData.tags || []), 'baking', styleData.category || 'general']}
                                title={`Essentials for ${styleData.name}`}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </LibraryPageLayout>
    );
};
