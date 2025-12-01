import { CommunityPost } from '../types';
import { DoughConfig, Batch, BatchStatus, BakeType, FermentationTechnique, YeastType, AmbientTemperature } from '../../types';
import { communityStore } from '../store/communityStore';

interface CloneDependencies {
    post: CommunityPost;
    addBatch: (batch: Omit<Batch, 'id' | 'createdAt' | 'updatedAt'>) => Promise<Batch>;
    handleLoadAndNavigate: (config: Partial<DoughConfig>, navigate: (path: string) => void) => void;
    navigate: (path: string) => void;
    userUid: string;
}

export const cloneBakeToMyLab = async ({
    post,
    addBatch,
    handleLoadAndNavigate,
    navigate,
    userUid
}: CloneDependencies) => {
    // 1. Convert Post to DoughConfig
    const config: Partial<DoughConfig> = {
        hydration: post.hydration,
        salt: post.saltPct || 2,
        yeastPercentage: post.levainPct || 0.5, // Default or mapped
        fermentationTechnique: post.method === 'POOLISH' ? FermentationTechnique.POOLISH :
            post.method === 'BIGA' ? FermentationTechnique.BIGA :
                FermentationTechnique.DIRECT,
        yeastType: post.levainPct ? YeastType.SOURDOUGH_STARTER : YeastType.IDY,
        notes: `Cloned from ${post.username}: ${post.fermentationNotes || ''}`,
        // Default values for required fields if missing in post
        bakeType: BakeType.PIZZAS,
        ambientTemperature: AmbientTemperature.MILD,
        numPizzas: 4,
        doughBallWeight: 250,
    };

    // 2. Create a new Batch in MyLab (Planned)
    const newBatch = await addBatch({
        name: `Clone: ${post.title || 'Community Bake'}`,
        doughConfig: config as DoughConfig, // Type assertion, handleLoadAndNavigate will normalize
        status: BatchStatus.PLANNED,
        isFavorite: false,
        styleId: post.styleKey,
        ovenType: post.ovenType,
    });

    // 3. Record Clone in Community
    await communityStore.recordClone(post.id, userUid);

    // 4. Load into Calculator and Redirect
    handleLoadAndNavigate(config, navigate);

    return newBatch;
};
