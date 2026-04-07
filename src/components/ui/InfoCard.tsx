import React from 'react';
import AppSurface, { AppSurfaceTone, AppSurfaceVariant } from '@/components/ui/AppSurface';

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tone?: AppSurfaceTone;
  surface?: AppSurfaceVariant;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  children,
  tone = 'info',
  surface = 'soft',
  className = '',
  ...props
}) => (
  <AppSurface tone={tone} surface={surface} className={['rounded-2xl p-4', className].filter(Boolean).join(' ')} {...props}>
    {children}
  </AppSurface>
);

export default InfoCard;
