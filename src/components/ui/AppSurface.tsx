import React from 'react';

export type AppSurfaceTone = 'brand' | 'info' | 'success' | 'warning' | 'danger' | 'neutral';
export type AppSurfaceVariant = 'base' | 'elevated' | 'glass' | 'soft' | 'interactive';
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
  compact: 'p-4',
  default: 'p-5 sm:p-6',
  spacious: 'p-6 sm:p-8',
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
        'relative overflow-hidden rounded-[1.75rem] border shadow-premium transition-all duration-300',
        surfaceClasses[resolvedSurface],
        toneClasses[tone],
        density ? densityClasses[density] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      {children}
    </div>
  );
};

export default AppSurface;
