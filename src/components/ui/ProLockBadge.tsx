import React from 'react';
import { Lock } from 'lucide-react';

interface ProLockBadgeProps {
    size?: 'sm' | 'md' | 'lg';
}

export const ProLockBadge: React.FC<ProLockBadgeProps> = ({ size = 'sm' }) => {
    const sizeClass = size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5';

    return (
        <span className="inline-flex items-center justify-center bg-slate-900 text-amber-400 rounded-full p-1 shadow-sm border border-slate-700" title="Pro Feature">
            <Lock className={sizeClass} />
        </span>
    );
};
