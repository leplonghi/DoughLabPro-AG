export const addMinutes = (date: Date, minutes: number): Date => {
    return new Date(date.getTime() + minutes * 60000);
};

export const subMinutes = (date: Date, minutes: number): Date => {
    return new Date(date.getTime() - minutes * 60000);
};

export const subHours = (date: Date, hours: number): Date => {
    return new Date(date.getTime() - hours * 60 * 60000);
};

export const isBefore = (date: Date, dateToCompare: Date): boolean => {
    return date.getTime() < dateToCompare.getTime();
};

export const format = (date: Date, formatStr: string): string => {
    // Basic implementation for HH:mm and generic formats
    // formatStr support: 'HH:mm', 'yyyy-MM-dd'

    // Helper to pad
    const p = (n: number) => n.toString().padStart(2, '0');

    const year = date.getFullYear();
    const month = p(date.getMonth() + 1);
    const day = p(date.getDate());
    const hours = p(date.getHours());
    const minutes = p(date.getMinutes());

    if (formatStr === 'HH:mm') {
        return `${hours}:${minutes}`;
    }

    if (formatStr === 'yyyy-MM-ddTHH:mm') {
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
