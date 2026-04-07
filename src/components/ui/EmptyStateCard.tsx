import React from 'react';
import AppSurface, { AppSurfaceTone } from '@/components/ui/AppSurface';

interface EmptyStateCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tone?: AppSurfaceTone;
}

export const EmptyStateCard: React.FC<EmptyStateCardProps> = ({
  children,
  tone = 'neutral',
  className = '',
  ...props
}) => (
  <AppSurface
    tone={tone}
    surface="soft"
    className={['flex min-h-[220px] flex-col items-center justify-center rounded-[1.75rem] border-dashed p-8 text-center', className].filter(Boolean).join(' ')}
    {...props}
  >
    {children}
  </AppSurface>
);

export default EmptyStateCard;
