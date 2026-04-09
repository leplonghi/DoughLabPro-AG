import type { Batch, DoughConfig, DoughResult, FlourDefinition, Oven } from '@/types';

export interface DoughyAssistantContextSnapshot {
    doughConfig?: DoughConfig;
    doughResult?: DoughResult | null;
    flour?: FlourDefinition;
    oven?: Oven;
    lastBatch?: Batch;
    userPlan: 'free' | 'pro';
}
