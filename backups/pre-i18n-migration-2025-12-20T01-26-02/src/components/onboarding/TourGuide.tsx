import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '@/i18n';
import { CloseIcon, ChevronRightIcon } from '@/components/ui/Icons';

interface TourStep {
    targetId: string;
    title: string;
    content: string;
    position: 'top' | 'bottom' | 'left' | 'right';
}

const TOUR_STEPS: TourStep[] = [
    {
        targetId: 'tour-style-section',
        title: 'Choose Your Style',
        content: 'Start here. Select from authentic presets like Neapolitan, NY Style, or Detroit. This sets the baseline for your formula.',
        position: 'bottom'
    },
    {
        targetId: 'tour-quantity-section',
        title: 'Define Yield',
        content: 'How much dough do you need? Set the number of pizza balls and their individual weight. The calculator adjusts everything automatically.',
        position: 'bottom'
    },
    {
        targetId: 'tour-ingredients-section',
        title: 'Customize Ratios',
        content: 'Fine-tune your recipe. Adjust Hydration (water content) and Salt levels. Add enrichments like Oil or Sugar using the sliders.',
        position: 'right'
    },
    {
        targetId: 'tour-fermentation-section',
        title: 'Fermentation Strategy',
        content: 'Advanced bakers can select their yeast type here. Choose between Instant Yeast, Fresh Yeast, or complex preferments like Biga, Poolish, or Sourdough.',
        position: 'right'
    },
    {
        targetId: 'tour-environment-section',
        title: 'Baking Environment',
        content: 'Tell us about your oven. We use this to estimate baking times and suggest temperature adjustments.',
        position: 'right'
    },
    {
        targetId: 'tour-results-metrics',
        title: 'Formula Overview',
        content: 'See your totals at a glance. Total Flour, Total Dough Weight, and expected Yield.',
        position: 'left'
    },
    {
        targetId: 'tour-results-ingredients',
        title: 'Precise Recipe',
        content: 'Here is your professional formula. Every ingredient is calculated to 0.1g precision. Hover over ingredients for pro tips.',
        position: 'left'
    },
    {
        targetId: 'tour-method',
        title: 'Step-by-Step Method',
        content: 'Follow these generated instructions. They change based on your dough style and fermentation choice.',
        position: 'left'
    },
    {
        targetId: 'tour-log-batch',
        title: 'Start Baking',
        content: 'Ready to mix? Click here to "Log" this batch. This saves it to your Journal so you can track improvements over time.',
        position: 'top'
    },
    {
        targetId: 'tour-actions',
        title: 'Share & Export',
        content: 'Share your secret formula with the community or export a professional PDF for your kitchen.',
        position: 'top'
    }
];

export const TourGuide: React.FC = () => {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        const hasSeenTour = localStorage.getItem('has_seen_tour');
        if (!hasSeenTour) {
            // Delay slightly to allow UI to render
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const step = TOUR_STEPS[currentStep];
        const element = document.getElementById(step.targetId);

        if (element) {
            setTargetRect(element.getBoundingClientRect());
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            // If element not found, skip or stop
            console.warn(`Tour target ${step.targetId} not found`);
        }
    }, [currentStep, isVisible]);

    const handleNext = () => {
        if (currentStep < TOUR_STEPS.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            handleClose();
        }
    };

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('has_seen_tour', 'true');
    };

    if (!isVisible || !targetRect) return null;

    const step = TOUR_STEPS[currentStep];

    // Calculate position
    let top = 0;
    let left = 0;
    const tooltipWidth = 320;
    const tooltipHeight = 160; // Approx
    const gap = 12;

    switch (step.position) {
        case 'bottom':
            top = targetRect.bottom + gap + window.scrollY;
            left = targetRect.left + (targetRect.width / 2) - (tooltipWidth / 2) + window.scrollX;
            break;
        case 'top':
            top = targetRect.top - tooltipHeight - gap + window.scrollY;
            left = targetRect.left + (targetRect.width / 2) - (tooltipWidth / 2) + window.scrollX;
            break;
        case 'right':
            top = targetRect.top + (targetRect.height / 2) - (tooltipHeight / 2) + window.scrollY;
            left = targetRect.right + gap + window.scrollX;
            break;
        case 'left':
            top = targetRect.top + (targetRect.height / 2) - (tooltipHeight / 2) + window.scrollY;
            left = targetRect.left - tooltipWidth - gap + window.scrollX;
            break;
    }

    // Boundary checks (simple)
    if (left < 10) left = 10;
    if (left + tooltipWidth > window.innerWidth) left = window.innerWidth - tooltipWidth - 10;

    return createPortal(
        <div className="fixed inset-0 z-[100] pointer-events-none">
            {/* Dimmed Background with cutout */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500" />

            {/* Spotlight Effect */}
            <div
                className="absolute transition-all duration-500 ease-in-out border-2 border-dlp-accent rounded-lg shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]"
                style={{
                    top: targetRect.top + window.scrollY - 4,
                    left: targetRect.left + window.scrollX - 4,
                    width: targetRect.width + 8,
                    height: targetRect.height + 8,
                }}
            />

            {/* Tooltip Card */}
            <div
                className="absolute pointer-events-auto bg-dlp-bg-card rounded-xl shadow-dlp-lg p-6 w-80 animate-fade-in transition-all duration-500 ring-1 ring-dlp-border"
                style={{ top, left }}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-dlp-text-muted hover:text-dlp-text-secondary"
                >
                    <CloseIcon className="h-5 w-5" />
                </button>

                <div className="mb-4">
                    <span className="inline-block px-2 py-1 rounded bg-dlp-bg-muted text-dlp-accent text-xs font-bold mb-2 border border-dlp-border">
                        Step {currentStep + 1} of {TOUR_STEPS.length}
                    </span>
                    <h3 className="text-lg font-bold text-dlp-text-primary">{step.title}</h3>
                    <p className="text-dlp-text-secondary text-sm mt-1 leading-relaxed">
                        {step.content}
                    </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={handleClose}
                        className="text-xs font-semibold text-dlp-text-muted hover:text-dlp-text-primary"
                    >{t('common.skip_tour')}</button>
                    <button
                        onClick={handleNext}
                        className="flex items-center gap-1 bg-dlp-accent text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-dlp-accent-hover transition-colors shadow-dlp-sm"
                    >
                        {currentStep === TOUR_STEPS.length - 1 ? 'Finish' : 'Next'}
                        <ChevronRightIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};
