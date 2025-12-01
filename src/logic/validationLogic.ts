export function getRange(field: string): [number, number] | undefined {
    switch (field) {
        case 'hydration':
            return [50, 90];
        case 'salt':
            return [1.5, 3.5];
        case 'oil':
            return [0, 10];
        case 'sugar':
            return [0, 10];
        case 'yeastPercentage':
            return [0.1, 5];
        default:
            return undefined;
    }
}
