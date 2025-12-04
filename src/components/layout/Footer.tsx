import React from 'react';
import { Page } from '@/types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-slate-50 py-8 text-center text-sm text-slate-500 border-t border-slate-200">
            <p>&copy; {new Date().getFullYear()} DoughLab Pro. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
