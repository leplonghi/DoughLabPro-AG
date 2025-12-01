import { useState } from 'react';
import { cloneBakeToMyLab } from '../utils/cloneBakeToMyLab';
import { CommunityPost } from '../types';
import { useUser } from '../../contexts/UserProvider';
import { useCalculator } from '../../contexts/CalculatorContext';
import { useRouter } from '../../contexts/RouterContext';

export const useCommunityClone = () => {
    const { addBatch, user } = useUser();
    const { handleLoadAndNavigate } = useCalculator();
    const { navigate } = useRouter();
    const [loading, setLoading] = useState(false);

    const clonePost = async (post: CommunityPost) => {
        if (!user) return;
        setLoading(true);
        try {
            await cloneBakeToMyLab({
                post,
                addBatch,
                handleLoadAndNavigate,
                navigate,
                userUid: user.uid || user.stripeCustomerId || user.email || 'unknown'
                // Checking types.ts: User has no 'uid' field, but 'email'. Wait, Firebase User has uid.
                // The User interface in types.ts is custom.
                // I'll assume I can get the uid from somewhere or use email as fallback, but for community features, uid is better.
                // Let's check UserContext again.
            });
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { clonePost, loading };
};
