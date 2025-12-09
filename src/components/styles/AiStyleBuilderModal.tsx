import React, { useState, useEffect } from 'react';
import { SparklesIcon, CloseIcon, BeakerIcon, FireIcon, ClockIcon, ScaleIcon } from '@/components/ui/Icons';
import { generateStyleFromDescription } from '@/ai/assistantClient';
import { DoughStyleDefinition } from '@/types';
import { useToast } from '@/components/ToastProvider';

interface AiStyleBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStyleGenerated: (style: Partial<DoughStyleDefinition>) => void;
}

const CATEGORIES = {
  texture: [
    'Ultra Crispy', 'Soft & Cloud-like', 'Chewy', 'Melt-in-mouth', 'Dense & Hearty', 'Flaky'
  ],
  crust: [
    'Thin Crust', 'Thick Crust', 'Cornicione (Puffy Rim)', 'Pan/Deep Dish', 'Flatbread', 'Stuffed'
  ],
  flavor: [
    'Sour & Complex', 'Sweet & Enriched', 'Nutty (Whole Grain)', 'Buttery', 'Neutral', 'Charred/Smoky'
  ],
  method: [
    'Sourdough (Levain)', 'Poolish', 'Biga', 'Direct Method', 'No-Knead', 'High Hydration'
  ]
};

const LOADING_STEPS = [
    "Analyzing texture requirements...",
    "Calculating optimal hydration ratio...",
    "Balancing salt and fermentation...",
    "Selecting flour strength (W)...",
    "Drafting technical method..."
];

const AiStyleBuilderModal: React.FC<AiStyleBuilderModalProps> = ({ isOpen, onClose, onStyleGenerated }) => {
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const { addToast } = useToast();

  // Reset state on open
  useEffect(() => {
    if (isOpen) {
        setDescription('');
        setIsGenerating(false);
        setLoadingStep(0);
    }
  }, [isOpen]);

  // Loading animation effect
  useEffect(() => {
    if (isGenerating) {
        const interval = setInterval(() => {
            setLoadingStep(prev => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev));
        }, 800);
        return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const handleTagClick = (tag: string) => {
    setDescription(prev => {
        if (prev.includes(tag)) return prev; // Avoid duplicates
        return prev ? `${prev}, ${tag}` : tag;
    });
  };

  const handleGenerate = async () => {
    if (!description.trim()) return;

    setIsGenerating(true);
    setLoadingStep(0);

    try {
      const generatedStyle = await generateStyleFromDescription(description);
      
      // Artificial delay to let the user see the "analysis" steps (UX best practice for AI tools)
      setTimeout(() => {
          onStyleGenerated(generatedStyle);
          addToast('Style engineered successfully!', 'success');
          onClose(); 
      }, 3500);

    } catch (error) {
      setIsGenerating(false);
      addToast('Failed to generate style. Please try again.', 'error');
    }
  };

  if (!isOpen) return null;

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-lime-950/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-gradient-to-r from-indigo-50 to-white">
          <h2 className="text-lg font-bold text-indigo-900 flex items-center gap-2">
            <SparklesIcon className="h-5 w-5 text-indigo-500" />
            AI Style Builder
          </h2>
          <button onClick={onClose} className="p-1 text-slate-400 hover:bg-slate-100 rounded-full">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
            <p className="text-sm text-indigo-800">
              Describe the dough style you want to create. Our AI will generate a technical profile based on baking science and literature.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Describe your dough</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full rounded-lg border-slate-300 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g., Argentine pizza a la piedra, extremely thin and crispy, no oil..."
              autoFocus
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-slate-500 font-medium">Try:</span>
            <button onClick={() => setDescription('100% Rye German Bread, dense and sour')} className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-700 transition-colors">German Rye</button>
            <button onClick={() => setDescription('Argentine Pizza a la Piedra')} className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-700 transition-colors">Pizza a la Piedra</button>
            <button onClick={() => setDescription('High hydration Focaccia Romana')} className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-700 transition-colors">Romana</button>
          </div>

          <div className="text-xs text-slate-400 italic mt-2 border-t border-slate-100 pt-2">
            Disclaimer: AI-generated styles are based on general patterns. Always validate with your own flour and oven.
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
          <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 rounded-lg">Cancel</button>
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !description.trim()}
            className="px-5 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isGenerating ? (
              <>
                <BeakerIcon className="h-4 w-4 animate-pulse" /> Generating...
              </>
            ) : (
              <>
                <SparklesIcon className="h-4 w-4" /> Generate Style
              </>
            )}
          </button>
        </div>
=======
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
             <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <SparklesIcon className="h-6 w-6 text-lime-600" />
                    AI Style Architect
                </h2>
                <p className="text-sm text-slate-500 mt-1">Design a scientifically balanced dough profile from scratch.</p>
             </div>
             <button onClick={onClose} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
                 <CloseIcon className="h-6 w-6" />
             </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 relative">
             {isGenerating ? (
                 <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-8 space-y-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-lime-500 rounded-full opacity-20 animate-ping"></div>
                        <div className="relative bg-white p-4 rounded-full border-2 border-lime-100 shadow-xl">
                            <BeakerIcon className="h-12 w-12 text-lime-600 animate-pulse" />
                        </div>
                    </div>
                    
                    <div className="w-full max-w-sm space-y-4">
                        {LOADING_STEPS.map((step, index) => (
                            <div 
                                key={index} 
                                className={`flex items-center gap-3 transition-all duration-500 ${
                                    index <= loadingStep ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'
                                }`}
                            >
                                <div className={`h-2 w-2 rounded-full ${index <= loadingStep ? 'bg-lime-500' : 'bg-slate-200'}`} />
                                <span className={`text-sm font-medium ${index === loadingStep ? 'text-lime-700' : 'text-slate-500'}`}>
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                 </div>
             ) : (
                 <div className="space-y-6">
                    {/* Input Area */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 flex justify-between">
                            <span>Target Profile Description</span>
                            <span className="text-xs font-normal text-slate-400">Be as specific or vague as you like</span>
                        </label>
                        <textarea 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            rows={3} 
                            className="w-full rounded-xl border-slate-300 shadow-sm focus:ring-lime-500 focus:border-lime-500 text-base p-4"
                            placeholder="e.g., I want a pizza dough that is extremely crispy but has a very open, airy crumb. It should handle a 48h cold ferment..."
                            autoFocus
                        />
                    </div>

                    {/* Tags Section */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                            <FireIcon className="h-3 w-3" /> Structure & Texture
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.texture.map(tag => (
                                <button 
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                        description.includes(tag) 
                                        ? 'bg-lime-100 text-lime-800 border border-lime-200 shadow-sm' 
                                        : 'bg-white border border-slate-200 text-slate-600 hover:border-lime-300 hover:text-lime-700 hover:bg-lime-50'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                            <ScaleIcon className="h-3 w-3" /> Form Factor
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.crust.map(tag => (
                                <button 
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                        description.includes(tag) 
                                        ? 'bg-lime-100 text-lime-800 border border-lime-200 shadow-sm' 
                                        : 'bg-white border border-slate-200 text-slate-600 hover:border-lime-300 hover:text-lime-700 hover:bg-lime-50'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                            <BeakerIcon className="h-3 w-3" /> Chemistry & Method
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.method.concat(CATEGORIES.flavor).map(tag => (
                                <button 
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                        description.includes(tag) 
                                        ? 'bg-blue-100 text-blue-800 border border-blue-200 shadow-sm' 
                                        : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50'
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex gap-3">
                        <div className="mt-1">
                            <SparklesIcon className="h-5 w-5 text-purple-500" />
                        </div>
                        <div className="text-sm text-slate-600">
                            <p className="font-semibold text-slate-800 mb-1">How it works</p>
                            DoughLab AI analyzes your description against thousands of technical parameters to determine the ideal hydration, salt %, fermentation time, and method.
                        </div>
                    </div>
                 </div>
             )}
        </div>
        
        {/* Footer */}
        {!isGenerating && (
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
                <button 
                    onClick={() => setDescription('')}
                    className="text-sm text-slate-400 hover:text-red-500 transition-colors"
                >
                    Clear all
                </button>
                <div className="flex gap-3">
                    <button onClick={onClose} className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-white hover:shadow-sm rounded-xl transition-all border border-transparent hover:border-slate-200">
                        Cancel
                    </button>
                    <button 
                        onClick={handleGenerate} 
                        disabled={!description.trim()}
                        className="px-6 py-2.5 text-sm font-bold text-white bg-lime-600 hover:bg-lime-700 rounded-xl shadow-lg shadow-lime-600/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                    >
                        <SparklesIcon className="h-4 w-4" />
                        Generate Style
                    </button>
                </div>
            </div>
        )}
>>>>>>> ad5a9e64e26d1cde0eb3356f2ab61228d0734ff1
      </div>
    </div>
  );
};

export default AiStyleBuilderModal;
