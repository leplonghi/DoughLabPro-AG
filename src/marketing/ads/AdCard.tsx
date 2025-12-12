import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { shouldShowAd, getAd, recordAdView } from './adsEngine';
import { Ad } from './adsCatalog';
import { useTranslation } from '@/i18n';

interface AdCardProps {
    context?: string; // e.g., 'calculator_footer', 'styles_list'
    className?: string;
}

export const AdCard: React.FC<AdCardProps> = ({ context = 'general', className = '' }) => {
  const { t } = useTranslation();
    const { user } = useAuth();
    const [ad, setAd] = useState<Ad | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (shouldShowAd(user)) {
            const selectedAd = getAd(context);
            if (selectedAd) {
                setAd(selectedAd);
                setIsVisible(true);
                recordAdView(selectedAd.id);
            }
        }
    }, [user, context]);

    if (!isVisible || !ad) return null;

    return (
        <div className={`bg-dlp-bg-card border border-dlp-border rounded-xl overflow-hidden shadow-dlp-lg ${className}`}>
            <div className="relative h-32 w-full overflow-hidden">
                <img
                    src={ad.imageUrl}
                    alt={ad.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-2 right-2 bg-black/60 text-[10px] text-white/90 px-1.5 py-0.5 rounded uppercase tracking-wider backdrop-blur-sm">{t('marketing.sponsored')}</div>
            </div>
            <div className="p-4">
                <h4 className="text-sm font-bold text-dlp-text-primary mb-1 line-clamp-1">{ad.title}</h4>
                <p className="text-xs text-dlp-text-secondary mb-3 line-clamp-2">{ad.description}</p>
                <a
                    href={ad.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 bg-dlp-bg-muted hover:bg-dlp-border-strong text-dlp-text-primary text-xs font-bold rounded-lg transition-colors"
                >
                    {ad.ctaText}
                </a>
            </div>
        </div>
    );
};
