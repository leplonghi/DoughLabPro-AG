import { italianStyles } from './regions/italy';
// No future importaremos americasStyles, etc.

export const getAllStyles = () => {
    return [...italianStyles];
};

export const getStyleById = (id: string) => {
    return getAllStyles().find(s => s.id === id);
};
