import React from 'react';
import AppSurface, { AppSurfaceTone, AppSurfaceVariant } from '@/components/ui/AppSurface';

interface SectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tone?: AppSurfaceTone;
  surface?: AppSurfaceVariant;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  children,
  tone = 'neutral',
  surface = 'glass',
  className = '',
  ...props
}) => (
  <AppSurface tone={tone} surface={surface} className={['rounded-[1.5rem]', className].filter(Boolean).join(' ')} {...props}>
    {children}
  </AppSurface>
);

export default SectionCard;
