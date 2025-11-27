import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { PaywallModal } from '@/components/PaywallModal';

export const RequirePro: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { hasProAccess, openPaywall } = useUser();

    if (!hasProAccess) {
        return (
            <div className="text-center p-8">
                <h2 className="text-xl font-bold mb-4">Pro Feature</h2>
                <p className="mb-4">This feature requires a Pro subscription.</p>
                <button onClick={() => openPaywall('general')} className="bg-lime-500 text-white px-4 py-2 rounded">
                    Upgrade to Pro
                </button>
                <PaywallModal />
            </div>
        );
    }

    return <>{children}</>;
};
export default RequirePro;
