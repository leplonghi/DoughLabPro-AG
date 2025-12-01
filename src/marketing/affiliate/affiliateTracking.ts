import { useEffect } from 'react';
import { trackAffiliateClick } from './affiliateService';

export const useAffiliateTracking = () => {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const refCode = params.get('ref');

        if (refCode) {
            trackAffiliateClick(refCode);
            localStorage.setItem('doughlab_affiliate_code', refCode);
        }
    }, []);
};
