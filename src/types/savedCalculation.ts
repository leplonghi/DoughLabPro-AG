export interface SavedCalculation {
    id: string;
    userId: string;
    styleId: string;
    styleName: string;
    name: string;           // "Minha Focaccia #3"
    inputs: Record<string, number>;
    result: Record<string, number>;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}
