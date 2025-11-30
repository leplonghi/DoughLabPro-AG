import { JSX } from "react";

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
    featureKey?: string; // Optional, for permission checking if needed alongside isPro
}
