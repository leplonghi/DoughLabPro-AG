export interface DoughbotResult {
    causes: string[];
    solutions: string[];
    ranges?: {
        hydration?: number;
        fermentation?: string;
        flour?: string;
    };
}
