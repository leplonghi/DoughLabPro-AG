import React from 'react';
import { HelpCircle } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { useGuidance } from '@/contexts/GuidanceContext';
import { logEvent } from '@/services/analytics';
import { InfoTooltip } from '@/components/ui/InfoTooltip';

interface GuidanceTooltipTriggerProps {
  itemId: string;
  onAction?: () => void;
  completeOnAction?: boolean;
  className?: string;
}

export const GuidanceTooltipTrigger: React.FC<GuidanceTooltipTriggerProps> = ({
  itemId,
  onAction,
  completeOnAction = false,
  className = '',
}) => {
  const { t } = useTranslation(['common', 'ui']);
  const {
    activeTooltipId,
    closeTooltip,
    completeItem,
    dismissItem,
    getItem,
    openTooltip,
    shouldShowItem,
  } = useGuidance();

  const item = getItem(itemId);
  const isOpen = activeTooltipId === itemId;

  if (!item || !shouldShowItem(itemId)) {
    return null;
  }

  const title = t(item.titleKey || item.id, { defaultValue: item.title });
  const body = t(item.bodyKey || item.id, { defaultValue: item.body });
  const ctaLabel = item.ctaLabel ? t(item.ctaKey || item.id, { defaultValue: item.ctaLabel }) : null;

  return (
    <InfoTooltip
      open={isOpen}
      onOpenChange={(nextOpen) => {
        if (nextOpen) {
          openTooltip(itemId);
        } else {
          closeTooltip(itemId);
        }
      }}
      position={item.placement || 'top'}
      size="md"
      variant="tutorial"
      showIcon={false}
      stopPropagation
      ariaLabel={t('guidance.open_tip', { defaultValue: 'Open tip' })}
      content={(
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-bold text-slate-900">{title}</h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">{body}</p>
          </div>
          {(ctaLabel || item.dismissible) ? (
            <div className="flex flex-wrap items-center gap-2">
              {ctaLabel && onAction ? (
                <button
                  type="button"
                  onClick={() => {
                    logEvent('tooltip_action_clicked', { itemId });
                    logEvent('help_cta_clicked', { itemId, surface: 'tooltip' });
                    onAction();
                    if (completeOnAction) {
                      completeItem(itemId);
                    } else {
                      closeTooltip(itemId);
                    }
                  }}
                  className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                >
                  {ctaLabel}
                </button>
              ) : null}
              {item.dismissible ? (
                <button
                  type="button"
                  onClick={() => dismissItem(itemId)}
                  className="rounded-xl px-2 py-2 text-xs font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                >
                  {t('common.not_now', { defaultValue: 'Not now' })}
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      )}
    >
      <span
        className={[
          'inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200/80 bg-white/90 text-emerald-700 shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50 focus-visible:outline-none',
          className,
        ].join(' ')}
      >
        <HelpCircle className="h-4 w-4" />
      </span>
    </InfoTooltip>
  );
};

export default GuidanceTooltipTrigger;
