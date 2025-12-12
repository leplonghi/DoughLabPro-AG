import React from 'react';
import { Page } from '@/types';
import { useTranslation } from '@/i18n';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = () => {
  const { t } = useTranslation();
    return (
        <footer className="bg-dlp-bg-muted py-8 text-center text-sm text-dlp-text-muted">
            <p>&copy; {new Date().getFullYear()} DoughLab Pro. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
