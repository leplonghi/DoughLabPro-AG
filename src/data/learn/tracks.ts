export interface LearnTrack {
    id: string;
    title: string;
    description: string;
    iconName: 'academic' | 'wrench' | 'beaker' | 'alert' | 'book';
    colorTheme: 'emerald' | 'blue' | 'purple' | 'orange';
}

export const LEARN_TRACKS: LearnTrack[] = [
    {
        id: 'fundamentals',
        title: 'Fundamentals',
        description: 'Core Knowledge',
        iconName: 'academic',
        colorTheme: 'emerald'
    },
    {
        id: 'process',
        title: 'The Process',
        description: 'Techniques & Methods',
        iconName: 'wrench',
        colorTheme: 'blue'
    },
    {
        id: 'science',
        title: 'Deep Science',
        description: 'Physics & Chemistry',
        iconName: 'beaker',
        colorTheme: 'purple'
    },
    {
        id: 'troubleshooting',
        title: 'The Clinic',
        description: 'Diagnostics & Fixes',
        iconName: 'alert',
        colorTheme: 'orange'
    }
];
