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
            <div className="mb-3 flex flex-wrap items-center justify-center gap-4 px-4">
                <button onClick={() => onNavigate('landing')} className="hover:text-dlp-text-primary transition-colors">Home</button>
                <button onClick={() => onNavigate('plans')} className="hover:text-dlp-text-primary transition-colors">Plans</button>
                <button onClick={() => onNavigate('help')} className="hover:text-dlp-text-primary transition-colors">Help</button>
                <button onClick={() => onNavigate('legal')} className="hover:text-dlp-text-primary transition-colors">Legal</button>
            </div>
            <p>&copy; {new Date().getFullYear()} DoughLab Pro. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
