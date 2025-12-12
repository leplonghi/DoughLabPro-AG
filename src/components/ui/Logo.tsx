import React from 'react';
import { useTranslation } from '@/i18n';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
  const { t } = useTranslation();
    return (
        <img
            src="/app-logo.png"
            alt={t('ui.doughlab_pro_logo')}
            className={className}
        />
    );
};

export default Logo;
