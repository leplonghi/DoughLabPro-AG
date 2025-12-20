import React, { useState, useEffect } from 'react';
import { SparklesIcon, CloseIcon, BeakerIcon, FireIcon, ClockIcon, ScaleIcon } from '@/components/ui/Icons';
import { generateStyleFromDescription } from '@/ai/assistantClient';
import { DoughStyleDefinition } from '@/types';
import { useToast } from '@/components/ToastProvider';
import { useTranslation } from '@/i18n';

interface AiStyleBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStyleGenerated: (style: Partial<DoughStyleDefinition>) => void;
}

const LOADING_STEPS = [
  "Analyzing texture requirements...",
  "Calculating optimal hydration ratio...",
  "Balancing salt and fermentation...",
  "Selecting flour strength (W)...",
  "Drafting technical method..."
];

const AiStyleBuilderModal: React.FC<AiStyleBuilderModalProps> = ({ isOpen, onClose, onStyleGenerated }) => {
  const { t } = useTranslation(['common', 'ui', 'styles']);
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const { addToast } = useToast();

  // Categories with translations - moved inside component to use t()
  const CATEGORIES = {
    texture: [
      t('ui.ultra_crispy_92'), 'Soft & Cloud-like', t('ui.chewy_93'), 'Melt-in-mouth', 'Dense & Hearty', t('ui.flaky_94')
    ],
    crust: [
      t('ui.thin_crust_95'), t('ui.thick_crust_96'), 'Cornicione (Puffy Rim)', 'Pan/Deep Dish', t('ui.flatbread_97'), t('ui.stuffed_98')
    ],
    flavor: [
      'Sour & Complex', 'Sweet & Enriched', 'Nutty (Whole Grain)', t('ui.buttery_99'), t('ui.neutral_100'), 'Charred/Smoky'
    ],
    method: [
      'Sourdough (Levain)', t('ui.poolish_101'), t('ui.biga_102'), t('ui.direct_method_103'), 'No-Knead', t('ui.high_hydration_104')
    ]
  };

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-lime-950/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-gradient-to-r from-indigo-50 to-white">
          <h2 className="text-lg font-bold text-indigo-900 flex items-center gap-2">
            <SparklesIcon className="h-5 w-5 text-indigo-500" />{t('common.ai_style_builder')}</h2>
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
            <label className="block text-sm font-medium text-slate-700 mb-2">{t('ui.describe_your_dough')}</label>
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
            <span className="text-xs text-slate-500 font-medium">{t('styles.try')}</span>
            <button onClick={() => setDescription('100% Rye German Bread, dense and sour')} className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-700 transition-colors">{t('ui.german_rye')}</button>
            <button onClick={() => setDescription('Argentine Pizza a la Piedra')} className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-700 transition-colors">{t('ui.pizza_a_la_piedra')}</button>
            <button onClick={() => setDescription('High hydration Focaccia Romana')} className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded text-slate-700 transition-colors">{t('ui.romana')}</button>
          </div>

          <div className="text-xs text-slate-400 italic mt-2 border-t border-slate-100 pt-2">
            Disclaimer: AI-generated styles are based on general patterns. Always validate with your own flour and oven.
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50">
          <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 rounded-lg">{t('common.cancel')}</button>
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
                <SparklesIcon className="h-4 w-4" />{t('common.generate_style')}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiStyleBuilderModal;
