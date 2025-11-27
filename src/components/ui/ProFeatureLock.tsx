import React from 'react';
export const ProFeatureLock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex items-center justify-center">
            <span className="text-sm font-bold text-slate-500">Pro Feature</span>
        </div>
        {children}
    </div>
);
export default ProFeatureLock;
