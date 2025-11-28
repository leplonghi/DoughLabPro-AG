import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export const RequireAuth: React.FC<{ children: React.ReactNode; onOpenAuth?: () => void }> = ({ children, onOpenAuth }) => {
    const { firebaseUser, loading, loginAsGuest } = useAuth();

    if (loading) {
        return <div className="flex justify-center p-8"><LoadingSpinner /></div>;
    }

    if (!firebaseUser) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 space-y-4">
                <h2 className="text-xl font-semibold text-slate-800">Authentication Required</h2>
                <p className="text-slate-600">Please log in to access this page.</p>
                <div className="flex gap-4">
                    {onOpenAuth && (
                        <button
                            onClick={onOpenAuth}
                            className="px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white rounded-md font-medium transition-colors"
                        >
                            Log In
                        </button>
                    )}
                </div>
            </div>
        );
    }

    return <>{children}</>;
};
export default RequireAuth;
