import React from 'react';

export type AppSurfaceTone = 'brand' | 'info' | 'success' | 'warning' | 'danger' | 'neutral';
export type AppSurfaceVariant = 'base' | 'elevated' | 'glass' | 'soft' | 'interactive' | 'rail';
export type AppSurfaceDensity = 'compact' | 'default' | 'spacious';

interface AppSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tone?: AppSurfaceTone;
  surface?: AppSurfaceVariant;
  density?: AppSurfaceDensity;
  interactive?: boolean;
}

const surfaceClasses: Record<AppSurfaceVariant, string> = {
  base: 'dlp-surface-base',
  elevated: 'dlp-surface-elevated',
  glass: 'dlp-surface-glass',
  soft: 'dlp-surface-soft',
  interactive: 'dlp-surface-interactive',
  rail: 'dlp-surface-rail',
};

const toneClasses: Record<AppSurfaceTone, string> = {
  brand: 'dlp-tone-brand',
  info: 'dlp-tone-info',
  success: 'dlp-tone-success',
  warning: 'dlp-tone-warning',
  danger: 'dlp-tone-danger',
  neutral: 'dlp-tone-neutral',
};

const densityClasses: Record<AppSurfaceDensity, string> = {
  compact: 'p-3.5 sm:p-4',
  default: 'p-4 sm:p-5',
  spacious: 'p-5 sm:p-6',
};

export const AppSurface: React.FC<AppSurfaceProps> = ({
  children,
  className = '',
  tone = 'neutral',
  surface = 'glass',
  density,
  interactive = false,
  ...props
}) => {
  const resolvedSurface = surface === 'interactive' || interactive ? 'interactive' : surface;

  return (
    <div
      className={[
        'relative overflow-hidden rounded-[1.45rem] border text-dlp-text-primary shadow-premium transition-all duration-300',
        surfaceClasses[resolvedSurface],
        toneClasses[tone],
        density ? densityClasses[density] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      <div className="pointer-events-none absolute -right-8 top-[-1.5rem] h-20 w-20 rounded-full bg-emerald-300/10 blur-3xl" />
      {children}
    </div>
  );
};

export default AppSurface;
