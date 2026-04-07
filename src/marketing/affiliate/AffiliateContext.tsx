import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AffiliateStats, ensureAffiliateProfile, getAffiliateStats } from './affiliateService';

interface AffiliateContextType {
    affiliateCode: string | null;
    stats: AffiliateStats | null;
    isLoading: boolean;
    generateCode: () => Promise<void>;
}

const AffiliateContext = createContext<AffiliateContextType | undefined>(undefined);

export const AffiliateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [affiliateCode, setAffiliateCode] = useState<string | null>(null);
    const [stats, setStats] = useState<AffiliateStats | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user?.uid && user.isPro) {
            setIsLoading(true);
            ensureAffiliateProfile(user)
                .then((code) => {
                    setAffiliateCode(code);
                    return getAffiliateStats(user.uid);
                })
                .then((data) => {
                    setStats(data);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setAffiliateCode(null);
            setStats(null);
            setIsLoading(false);
        }
    }, [user]);

    const generateCode = async () => {
        if (user?.uid) {
            const code = await ensureAffiliateProfile(user);
            setAffiliateCode(code);
            const data = await getAffiliateStats(user.uid);
            setStats(data);
        }
    };

    return (
        <AffiliateContext.Provider value={{ affiliateCode, stats, isLoading, generateCode }}>
            {children}
        </AffiliateContext.Provider>
    );
};

export const useAffiliate = () => {
    const context = useContext(AffiliateContext);
    if (!context) {
        throw new Error('useAffiliate must be used within an AffiliateProvider');
    }
    return context;
};
