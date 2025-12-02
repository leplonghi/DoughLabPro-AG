import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dlp-bg-muted py-8 text-center text-sm text-dlp-text-muted">
            <p>&copy; {new Date().getFullYear()} DoughLab Pro. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
