import React from 'react';

interface LibraryPageLayoutProps {
    children: React.ReactNode;
}

export const LibraryPageLayout: React.FC<LibraryPageLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-stone-50 text-slate-900 font-sans">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
};
