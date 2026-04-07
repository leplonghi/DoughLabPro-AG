import React from 'react';
import AppSurface, { AppSurfaceTone } from '@/components/ui/AppSurface';

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  hint?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: AppSurfaceTone;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  hint,
  icon,
  tone = 'neutral',
  className = '',
  ...props
}) => {
  return (
    <AppSurface
      surface="soft"
      tone={tone}
      className={['flex flex-col items-start gap-3 rounded-2xl p-4', className].filter(Boolean).join(' ')}
      {...props}
    >
      {icon ? (
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-current shadow-sm">
          {icon}
        </div>
      ) : null}
      <div className="space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-dlp-text-muted">{label}</p>
        <div className="text-2xl font-black text-dlp-text-primary">{value}</div>
        {hint ? <p className="text-xs leading-relaxed text-dlp-text-muted">{hint}</p> : null}
      </div>
    </AppSurface>
  );
};

export default MetricCard;
