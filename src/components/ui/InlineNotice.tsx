import React from 'react';
import { AppSurfaceTone } from '@/components/ui/AppSurface';

interface InlineNoticeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tone?: AppSurfaceTone;
}

export const InlineNotice: React.FC<InlineNoticeProps> = ({
  children,
  tone = 'neutral',
  className = '',
  ...props
}) => {
  return (
    <div
      className={['dlp-inline-notice', `dlp-inline-notice--${tone}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

export default InlineNotice;
