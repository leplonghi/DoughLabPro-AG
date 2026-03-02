import { JSX } from "react";
import { FeatureKey } from '../permissions';

export interface ToolCard {
    id: string;
    title: string;
    description: string;
    isPro: boolean;
    route: string;
    icon: JSX.Element;
    preview?: string;
    isNew?: boolean;
    comingSoon?: boolean;
    featureKey?: FeatureKey | string; // Optional, for permission checking
}
