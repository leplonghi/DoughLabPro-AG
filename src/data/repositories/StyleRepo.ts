import { RecipeStyle, DoughStyleDefinition } from '@/types';
// In a real app we might fetch this from a server, but here we read the canonical content files
import stylesIndex from '../content/styles/styles.index.json';
import stylesFull from '../content/styles/styles.full.json';
import { resolveStyleId } from '../content/resolveStyleId';

export class StyleRepo {
    static async getAll(): Promise<DoughStyleDefinition[]> {
        return stylesFull as unknown as DoughStyleDefinition[];
    }

    static async getById(id: string): Promise<DoughStyleDefinition | undefined> {
        const canonicalId = resolveStyleId(id);
        const allStyles = await this.getAll();
        return allStyles.find(s => s.id === canonicalId);
    }

    static getIndex(): any[] {
        return stylesIndex;
    }
}
