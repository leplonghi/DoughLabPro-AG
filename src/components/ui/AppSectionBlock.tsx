import React from 'react';
import AppSurface, { AppSurfaceDensity, AppSurfaceTone, AppSurfaceVariant } from '@/components/ui/AppSurface';

interface AppSectionBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  eyebrow?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  tone?: AppSurfaceTone;
  surface?: AppSurfaceVariant;
  density?: AppSurfaceDensity;
}

export const AppSectionBlock: React.FC<AppSectionBlockProps> = ({
  title,
  description,
  eyebrow,
  action,
  children,
  tone = 'neutral',
  surface = 'glass',
  density = 'compact',
  className = '',
  ...props
}) => {
  return (
    <AppSurface
      tone={tone}
      surface={surface}
      density={density}
      className={['rounded-[1.2rem]', className].filter(Boolean).join(' ')}
      {...props}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dlp-text-muted">{eyebrow}</p>
          ) : null}
          <h2 className="mt-1 text-lg font-black tracking-tight text-slate-950">{title}</h2>
          {description ? <p className="mt-1.5 text-sm leading-6 text-dlp-text-secondary">{description}</p> : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      <div className="mt-4">{children}</div>
    </AppSurface>
  );
};

export default AppSectionBlock;
