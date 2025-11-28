import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 py-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} DoughLab Pro. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
