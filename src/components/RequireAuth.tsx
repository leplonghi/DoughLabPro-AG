import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useTranslation } from '@/i18n';

export const RequireAuth: React.FC<{ children: React.ReactNode; onOpenAuth?: () => void }> = ({ children, onOpenAuth }) => {
    const { t } = useTranslation();
    const { firebaseUser, loading, loginAsGuest } = useAuth();

    if (loading) {
        return <div className="flex justify-center p-8"><LoadingSpinner /></div>;
    }

    if (!firebaseUser) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 space-y-4">
                <h2 className="text-xl font-semibold text-dlp-text-primary">{t('ui.authentication_required')}</h2>
                <p className="text-dlp-text-secondary">{t('auth.please_log_in_to_access_this_page')}</p>
                <div className="flex gap-4">
                    {onOpenAuth && (
                        <button
                            onClick={onOpenAuth}
                            className="px-4 py-2 bg-dlp-accent hover:bg-dlp-accent-hover text-white rounded-md font-medium transition-colors"
                        >{t('auth.log_in')}</button>
                    )}
                </div>
            </div>
        );
    }

    return <>{children}</>;
};
export default RequireAuth;
