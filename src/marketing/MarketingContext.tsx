import React, { createContext, useContext } from 'react';
import { FomoProvider, useFomo } from './fomo/FomoContext';
import { AffiliateProvider, useAffiliate } from './affiliate/AffiliateContext';
import { shouldShowAd, getAd } from './ads/adsEngine';
import { shareContent } from './social/socialApis';
import { createPost, getCommunityFeed } from './community/CommunityService';
import { trackAffiliateClick } from './affiliate/affiliateService';

// Unified Marketing Interface
interface MarketingContextType {
    fomo: ReturnType<typeof useFomo>;
    affiliate: ReturnType<typeof useAffiliate> & { track: typeof trackAffiliateClick };
    ads: {
        shouldShowAd: typeof shouldShowAd;
        getAd: typeof getAd;
    };
    social: {
        share: typeof shareContent;
    };
    community: {
        createPost: typeof createPost;
        listFeed: typeof getCommunityFeed;
    };
}

const MarketingContext = createContext<MarketingContextType | undefined>(undefined);

const MarketingContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const fomo = useFomo();
    const affiliate = useAffiliate();

    const value: MarketingContextType = {
        fomo,
        affiliate: { ...affiliate, track: trackAffiliateClick },
        ads: { shouldShowAd, getAd },
        social: { share: shareContent },
        community: { createPost, listFeed: getCommunityFeed }
    };

    return (
        <MarketingContext.Provider value={value}>
            {children}
        </MarketingContext.Provider>
    );
};

export const MarketingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <FomoProvider>
            <AffiliateProvider>
                <MarketingContent>
                    {children}
                </MarketingContent>
            </AffiliateProvider>
        </FomoProvider>
    );
};

export const useMarketing = () => {
    const context = useContext(MarketingContext);
    if (!context) {
        throw new Error('useMarketing must be used within a MarketingProvider');
    }
    return context;
};
