import React from 'react';
import { useRouter } from '@/contexts/RouterContext';

interface LibraryPageLayoutProps {
    children: React.ReactNode;
}

export const LibraryPageLayout: React.FC<LibraryPageLayoutProps> = ({ children }) => {
    const { navigate } = useRouter();

    return (
        <div className="min-h-screen bg-stone-50 text-slate-900 font-sans selection:bg-lime-500 selection:text-white">
            {/* Header */}
            <header className="bg-[#2F4F2F] border-b border-[#2F4F2F] sticky top-16 z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('home')}
                            className="p-2 -ml-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <h1 className="text-xl font-bold tracking-tight text-white">DoughLab Learning Hub</h1>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
};
