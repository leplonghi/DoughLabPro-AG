import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { AffiliateStats, generateAffiliateCode, getAffiliateStats } from './affiliateService';

interface AffiliateContextType {
    affiliateCode: string | null;
    stats: AffiliateStats | null;
    isLoading: boolean;
    generateCode: () => void;
}

const AffiliateContext = createContext<AffiliateContextType | undefined>(undefined);

export const AffiliateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [affiliateCode, setAffiliateCode] = useState<string | null>(null);
    const [stats, setStats] = useState<AffiliateStats | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (user && user.isPro) {
            // In real app, fetch from DB
            const code = generateAffiliateCode(user);
            setAffiliateCode(code);

            setIsLoading(true);
            getAffiliateStats(user.uid || 'unknown').then(data => {
                setStats(data);
                setIsLoading(false);
            });
        }
    }, [user]);

    const generateCode = () => {
        if (user) {
            const code = generateAffiliateCode(user);
            setAffiliateCode(code);
            // Save to DB
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
