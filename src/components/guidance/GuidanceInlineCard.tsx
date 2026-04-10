import React from 'react';
import { Lightbulb, X } from 'lucide-react';
import AppSurface from '@/components/ui/AppSurface';
import { useTranslation } from '@/i18n';
import type { GuidanceItem } from '@/types';

interface GuidanceInlineCardProps {
  item: GuidanceItem;
  onAction?: () => void;
  onDismiss?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const GuidanceInlineCard: React.FC<GuidanceInlineCardProps> = ({
  item,
  onAction,
  onDismiss,
  children,
  className = '',
}) => {
  const { t } = useTranslation(['common', 'ui']);
  const title = t(item.titleKey || item.id, { defaultValue: item.title });
  const body = t(item.bodyKey || item.id, { defaultValue: item.body });
  const ctaLabel = item.ctaLabel ? t(item.ctaKey || item.id, { defaultValue: item.ctaLabel }) : null;

  return (
    <AppSurface
      surface="rail"
      tone="neutral"
      className={[
        'relative overflow-hidden border border-emerald-100/80 bg-[linear-gradient(135deg,_rgba(236,253,245,0.92)_0%,_rgba(255,255,255,0.98)_100%)] p-5',
        className,
      ].join(' ')}
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-emerald-100/70 blur-2xl" aria-hidden="true" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800">
            <Lightbulb className="h-3.5 w-3.5" />
            {t('guidance.label', { defaultValue: 'Guidance' })}
          </div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{body}</p>
          {children ? <div className="mt-4">{children}</div> : null}
          {(ctaLabel || onDismiss) ? (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {ctaLabel && onAction ? (
                <button
                  type="button"
                  onClick={onAction}
                  className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                >
                  {ctaLabel}
                </button>
              ) : null}
              {onDismiss ? (
                <button
                  type="button"
                  onClick={onDismiss}
                  className="text-sm font-semibold text-slate-500 transition-colors hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                >
                  {t('common.not_now', { defaultValue: 'Not now' })}
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
        {onDismiss ? (
          <button
            type="button"
            onClick={onDismiss}
            aria-label={t('common.close', { defaultValue: 'Close' })}
            className="rounded-full border border-white/70 bg-white/85 p-2 text-slate-400 transition-colors hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </AppSurface>
  );
};

export default GuidanceInlineCard;
