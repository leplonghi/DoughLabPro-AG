import React from 'react';

interface LibraryPageLayoutProps {
    children: React.ReactNode;
}

export const LibraryPageLayout: React.FC<LibraryPageLayoutProps> = ({ children }) => {
    return (
        <div className="text-slate-900 selection:bg-lime-200 selection:text-lime-900">
            {children}
        </div>
    );
};


