import React, { useState, useEffect } from 'react';
import { AssistantIcon, CloseIcon, BeakerIcon, FireIcon, ClockIcon, ScaleIcon } from '@/components/ui/Icons';
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
      const { generateStyleFromDescription } = await import('@/ai/assistantClient');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-dlp-bg-card rounded-2xl shadow-dlp-lg w-full max-w-lg overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-dlp-border bg-gradient-to-r from-dlp-bg-muted to-dlp-bg-card">
          <h2 className="text-lg font-bold text-dlp-text-primary flex items-center gap-2">
            <SparklesIcon className="h-5 w-5 text-dlp-primary" />{t('common.ai_style_builder')}</h2>
          <button onClick={onClose} className="p-1 text-dlp-text-muted hover:bg-dlp-bg-muted rounded-full">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-dlp-primary-light rounded-lg p-4 border border-dlp-border">
            <p className="text-sm text-dlp-text-primary">
              Describe the dough style you want to create. Our AI will generate a technical profile based on baking science and literature.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-dlp-text-primary mb-2">{t('ui.describe_your_dough')}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full rounded-lg border-dlp-border focus:ring-dlp-primary focus:border-dlp-primary"
              placeholder="e.g., Argentine pizza a la piedra, extremely thin and crispy, no oil..."
              autoFocus
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-dlp-text-muted font-medium">{t('styles.try')}</span>
            <button onClick={() => setDescription('100% Rye German Bread, dense and sour')} className="text-xs bg-dlp-bg-muted hover:bg-dlp-border px-2 py-1 rounded text-dlp-text-primary transition-colors">{t('ui.german_rye')}</button>
            <button onClick={() => setDescription('Argentine Pizza a la Piedra')} className="text-xs bg-dlp-bg-muted hover:bg-dlp-border px-2 py-1 rounded text-dlp-text-primary transition-colors">{t('ui.pizza_a_la_piedra')}</button>
            <button onClick={() => setDescription('High hydration Focaccia Romana')} className="text-xs bg-dlp-bg-muted hover:bg-dlp-border px-2 py-1 rounded text-dlp-text-primary transition-colors">{t('ui.romana')}</button>
          </div>

          <div className="text-xs text-dlp-text-muted italic mt-2 border-t border-dlp-border pt-2">
            Disclaimer: AI-generated styles are based on general patterns. Always validate with your own flour and oven.
          </div>
        </div>

        <div className="p-4 border-t border-dlp-border flex justify-end gap-3 bg-dlp-bg-muted">
          <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-dlp-text-secondary hover:bg-dlp-border rounded-lg">{t('common.cancel')}</button>
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !description.trim()}
            className="px-5 py-2 text-sm font-bold text-white bg-dlp-primary hover:bg-dlp-primary-hover rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isGenerating ? (
              <>
                <BeakerIcon className="h-4 w-4 animate-pulse" /> Generating...
              </>
            ) : (
              <>
                <AssistantIcon className="h-4 w-4" />{t('common.generate_style')}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiStyleBuilderModal;
