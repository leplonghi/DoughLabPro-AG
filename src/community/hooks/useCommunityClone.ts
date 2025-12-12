import { useState } from 'react';
import { communityStore } from '../store/communityStore';
import { CommunityPost } from '../types';
import { useUser } from '@/contexts/UserProvider';
import { useToast } from '@/components/ToastProvider';
import { DoughConfig, BatchStatus, BakeType, RecipeStyle, FermentationTechnique, YeastType, AmbientTemperature } from '@/types';
import { useTranslation } from '@/i18n';

export const useCommunityClone = () => {
    const [loading, setLoading] = useState(false);
    const { user, addBatch } = useUser();
    const { addToast } = useToast();

    const clonePost = async (post: CommunityPost) => {
        if (!user) {
            addToast("You must be logged in to clone recipes.", "error");
            return;
        }

        setLoading(true);
        try {
            // 1. Record clone in community stats
            await communityStore.recordClone(post.id, user.uid);

            // 2. Reconstruct DoughConfig (best effort)
            // Note: This is an approximation since CommunityPost doesn't store full config yet.
            const config: DoughConfig = {
                bakeType: BakeType.PIZZAS, // Default
                recipeStyle: (post.styleKey as RecipeStyle) || RecipeStyle.NEAPOLITAN,
                flourId: post.flour || 'caputo_blue',
                ambientTemperature: AmbientTemperature.MILD,
                numPizzas: 4,
                doughBallWeight: 250,
                hydration: post.hydration || 65,
                salt: post.saltPct || 3,
                oil: 0,
                sugar: 0,
                fermentationTechnique: (post.method as FermentationTechnique) || FermentationTechnique.DIRECT,
                yeastType: YeastType.IDY,
                yeastPercentage: 0.1,
                prefermentFlourPercentage: 0,
                scale: 1,
                notes: `Cloned from ${post.username}: ${post.title || 'Community Recipe'}`,
                bakingTempC: 430,
            };

            // 3. Add to user's batches
            await addBatch({
                name: `Clone of ${post.title || 'Community Recipe'}`,
                doughConfig: config,
                status: BatchStatus.PLANNED,
                isFavorite: false,
            });

            addToast("Recipe cloned to your Lab!", "success");
        } catch (err) {
            console.error(err);
            addToast("Failed to clone recipe.", "error");
        } finally {
            setLoading(false);
        }
    };

    return { clonePost, loading };
};
