import React from 'react';
import { AppSurfaceTone } from '@/components/ui/AppSurface';

interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  tone?: AppSurfaceTone;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  children,
  tone = 'neutral',
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <span
      className={[
        'dlp-badge',
        `dlp-badge--${tone}`,
        size === 'sm' ? 'px-2.5 py-1 text-[10px]' : 'px-3 py-1.5 text-[11px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  );
};

export default StatusBadge;
