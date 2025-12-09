import React from 'react';
import { Page } from '@/types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = () => {
    return (
<<<<<<< HEAD
        <footer className="bg-dlp-bg-muted py-8 text-center text-sm text-dlp-text-muted">
=======
        <footer className="bg-slate-50 py-8 text-center text-sm text-slate-500 border-t border-slate-200">
>>>>>>> ad5a9e64e26d1cde0eb3356f2ab61228d0734ff1
            <p>&copy; {new Date().getFullYear()} DoughLab Pro. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
