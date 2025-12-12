import { DoughConfig, Levain, DoughStyleDefinition } from '../../types';
import { useTranslation } from '@/i18n';

export interface SharePayload {
    title: string;
    text: string;
    url: string;
    image?: string;
    data?: DoughConfig | Levain | DoughStyleDefinition; // For rich previews
}

export const generatePreviewImage = async (data: DoughConfig | Levain | DoughStyleDefinition): Promise<string> => {
    // In a real app, this would call a serverless function to generate an OG image.
    // We simulate this by using a dynamic image service that accepts text.

    let title = 'DoughLab Pro';
    let subtitle = 'Share your bake';
    let color = '84cc16'; // Lime

    if ('hydration' in data && 'name' in data) {
        // Levain
        title = `Levain: ${data.name}`;
        subtitle = `Hydration: ${data.hydration}%`;
        color = 'f97316'; // Orange
    } else if ('bakeType' in data) {
        // DoughConfig
        title = data.notes || 'My Pizza Recipe';
        subtitle = `${data.hydration}% Hydration • ${data.fermentationTechnique}`;
    } else if ('technicalProfile' in data) {
        // DoughStyleDefinition
        title = data.name;
        subtitle = `${data.origin.country} • ${data.category}`;
        color = '6366f1'; // Indigo
    }

    const encodedTitle = encodeURIComponent(title);
    const encodedSubtitle = encodeURIComponent(subtitle);

    // Using placehold.co for dynamic text images
    return `https://placehold.co/1200x630/1a1a1a/${color}?text=${encodedTitle}+%0A+${encodedSubtitle}&font=roboto`;
};

export const shareContent = async (payload: SharePayload) => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: payload.title,
                text: payload.text,
                url: payload.url,
            });
            return true;
        } catch (error) {
            console.warn('Native share failed', error);
        }
    }

    // Fallback: Copy to clipboard
    try {
        await navigator.clipboard.writeText(`${payload.title}\n${payload.text}\n${payload.url}`);
        alert('Link copied to clipboard!');
        return true;
    } catch (err) {
        console.error('Failed to copy', err);
        return false;
    }
};
