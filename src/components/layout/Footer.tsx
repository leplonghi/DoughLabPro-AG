import React from 'react';
import { Page } from '@/types';
import { useTranslation } from '@/i18n';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
    return (
        <footer className="bg-dlp-bg-muted py-8 text-center text-sm text-dlp-text-muted">
            <p>&copy; {new Date().getFullYear()} DoughLab Pro. All rights reserved.</p>
            <div className="mt-3 flex items-center justify-center gap-4 flex-wrap">
                <button
                    onClick={() => onNavigate('legal/privacy' as Page)}
                    className="hover:text-dlp-accent transition-colors underline underline-offset-2"
                >
                    {t('general.privacy_policy', 'Política de Privacidade')}
                </button>
                <span className="text-dlp-border">·</span>
                <button
                    onClick={() => onNavigate('legal/terms' as Page)}
                    className="hover:text-dlp-accent transition-colors underline underline-offset-2"
                >
                    {t('general.terms_of_use', 'Termos de Uso')}
                </button>
                <span className="text-dlp-border">·</span>
                <button
                    onClick={() => onNavigate('legal/cookies' as Page)}
                    className="hover:text-dlp-accent transition-colors underline underline-offset-2"
                >
                    Cookies
                </button>
            </div>
        </footer>
    );
};

export default Footer;
