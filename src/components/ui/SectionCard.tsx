import React from 'react';
import AppSurface, { AppSurfaceTone, AppSurfaceVariant } from '@/components/ui/AppSurface';
import AppSectionBlock from '@/components/ui/AppSectionBlock';

interface SectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tone?: AppSurfaceTone;
  surface?: AppSurfaceVariant;
  title?: string;
  description?: string;
  eyebrow?: string;
  action?: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  children,
  tone = 'neutral',
  surface = 'glass',
  title,
  description,
  eyebrow,
  action,
  className = '',
  ...props
}) => {
  if (title) {
    return (
      <AppSectionBlock
        title={title}
        description={description}
        eyebrow={eyebrow}
        action={action}
        tone={tone}
        surface={surface}
        className={className}
        {...props}
      >
        {children}
      </AppSectionBlock>
    );
  }

  return (
    <AppSurface tone={tone} surface={surface} className={['rounded-[1.5rem]', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </AppSurface>
  );
};

export default SectionCard;
