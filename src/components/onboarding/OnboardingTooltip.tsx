import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '@/i18n';

interface OnboardingTooltipProps {
  targetElement?: HTMLElement | null;
  targetId?: string;
  step: number;
  totalSteps: number;
  title: string;
  description: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  onNext: () => void;
  onBack?: () => void;
  onFinish: () => void;
  onClose: () => void;
}

const TOOLTIP_WIDTH = 320;
const TOOLTIP_HEIGHT = 176;
const GAP = 14;

export const OnboardingTooltip: React.FC<OnboardingTooltipProps> = ({
  targetElement,
  targetId,
  step,
  totalSteps,
  title,
  description,
  position = 'bottom',
  onNext,
  onBack,
  onFinish,
  onClose,
}) => {
  const { t } = useTranslation(['common', 'ui']);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const resolvedElement = useMemo(() => {
    if (targetElement) return targetElement;
    if (typeof document === 'undefined' || !targetId) return null;
    return document.getElementById(targetId);
  }, [targetElement, targetId]);

  useEffect(() => {
    const updatePosition = () => {
      setTargetRect(resolvedElement?.getBoundingClientRect() || null);
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [resolvedElement]);

  useEffect(() => {
    if (!resolvedElement) return;
    resolvedElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }, [resolvedElement, step]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (typeof document === 'undefined') return null;

  let top = window.innerHeight / 2 - TOOLTIP_HEIGHT / 2;
  let left = window.innerWidth / 2 - TOOLTIP_WIDTH / 2;

  if (targetRect) {
    switch (position) {
      case 'top':
        top = targetRect.top - TOOLTIP_HEIGHT - GAP;
        left = targetRect.left + targetRect.width / 2 - TOOLTIP_WIDTH / 2;
        break;
      case 'bottom':
        top = targetRect.bottom + GAP;
        left = targetRect.left + targetRect.width / 2 - TOOLTIP_WIDTH / 2;
        break;
      case 'left':
        top = targetRect.top + targetRect.height / 2 - TOOLTIP_HEIGHT / 2;
        left = targetRect.left - TOOLTIP_WIDTH - GAP;
        break;
      case 'right':
        top = targetRect.top + targetRect.height / 2 - TOOLTIP_HEIGHT / 2;
        left = targetRect.right + GAP;
        break;
    }
  }

  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    top = window.innerHeight / 2 - TOOLTIP_HEIGHT / 2;
    left = window.innerWidth / 2 - Math.min(TOOLTIP_WIDTH, window.innerWidth - 32) / 2;
  } else {
    left = Math.max(16, Math.min(left, window.innerWidth - TOOLTIP_WIDTH - 16));
    top = Math.max(16, Math.min(top, window.innerHeight - TOOLTIP_HEIGHT - 16));
  }

  return createPortal(
    <div className="fixed inset-0 z-[120]">
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px]" onClick={onClose} aria-hidden="true" />

      {targetRect && !isMobile ? (
        <div
          className="absolute rounded-2xl border-2 border-emerald-300 shadow-[0_0_0_9999px_rgba(15,23,42,0.16)] transition-all duration-300"
          style={{
            top: targetRect.top - 6,
            left: targetRect.left - 6,
            width: targetRect.width + 12,
            height: targetRect.height + 12,
          }}
          aria-hidden="true"
        />
      ) : null}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="guidance-coachmark-title"
        className="absolute w-[min(320px,calc(100vw-2rem))] rounded-3xl border border-white/70 bg-white p-5 shadow-2xl"
        style={{ top, left }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800">
              {t('guidance.step_label', { defaultValue: `Step ${step + 1} of ${totalSteps}` })}
            </div>
            <h3 id="guidance-coachmark-title" className="mt-3 text-lg font-bold text-slate-900">
              {title}
            </h3>
          </div>
          <button
            type="button"
            aria-label={t('common.close', { defaultValue: 'Close' })}
            onClick={onClose}
            className="rounded-full border border-slate-200 bg-white p-2 text-slate-400 transition-colors hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
        {!targetRect ? (
          <p className="mt-3 text-xs font-medium text-amber-700">
            {t('guidance.fallback_target', { defaultValue: 'This step is unavailable on the current layout, so the guide is continuing in fallback mode.' })}
          </p>
        ) : null}
        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
          >
            {t('common.skip', { defaultValue: 'Skip' })}
          </button>
          <div className="flex items-center gap-2">
            {step > 0 && onBack ? (
              <button
                type="button"
                onClick={onBack}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
              >
                {t('common.back', { defaultValue: 'Back' })}
              </button>
            ) : null}
            <button
              type="button"
              onClick={step === totalSteps - 1 ? onFinish : onNext}
              className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
            >
              {step === totalSteps - 1
                ? t('common.finish', { defaultValue: 'Finish' })
                : t('common.next', { defaultValue: 'Next' })}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default OnboardingTooltip;
