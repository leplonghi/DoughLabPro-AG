import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-auto" }) => {
    return (
        <img
            src="/app-logo.png"
            alt="DoughLab Pro Logo"
            className={className}
        />
    );
};

export default Logo;
