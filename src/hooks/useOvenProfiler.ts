import { useState, useEffect } from 'react';
import { analyzeOvenProfile, OvenProfileInput, OvenAnalysisResult, validateOvenInput } from '@/logic/ovenProfile';
import { useTranslation } from '@/i18n';
import { useUser } from '@/contexts/UserProvider';
import { OvenType } from '@/types';

export const useOvenProfiler = (ovenId?: string) => {
    const { ovens } = useUser();

    // Find specific oven by ID, or default oven, or use the first one
    const targetOven = ovenId
        ? ovens.find(o => o.id === ovenId)
        : (ovens.find(o => o.isDefault) || ovens[0]);

    const [profile, setProfile] = useState<OvenProfileInput>({
        ovenType: 'home_electric',
        maxTemperature: 250,
        preheatMinutes: 30,
        surface: 'stone',
        rackPosition: 'middle',
        convectionMode: false,
    });

    const [errors, setErrors] = useState<Partial<Record<keyof OvenProfileInput, string>>>({});
    const [analysis, setAnalysis] = useState<OvenAnalysisResult | null>(null);

    // Load from saved oven if available
    useEffect(() => {
        if (targetOven) {
            let mappedType = 'home_electric';
            if (targetOven.type === OvenType.GAS) mappedType = 'home_gas';
            if (targetOven.type === OvenType.WOOD) mappedType = 'wood';
            if (targetOven.type === OvenType.STONE_OVEN) mappedType = 'deck';

            let mappedSurface = 'none';
            if (targetOven.hasSteel) mappedSurface = 'steel';
            else if (targetOven.hasStone) mappedSurface = 'stone';

            setProfile(prev => ({
                ...prev,
                ovenType: mappedType,
                maxTemperature: targetOven.maxTemperature || 250,
                surface: mappedSurface
            }));
        }
    }, [targetOven]);

    const updateProfile = (field: keyof OvenProfileInput, value: any) => {
        setProfile(prev => ({
            ...prev,
            [field]: value
        }));
        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const analyze = () => {
        const validation = validateOvenInput(profile);

        if (!validation.isValid) {
            setErrors(validation.errors);
            setAnalysis(null);
            return false;
        }

        const result = analyzeOvenProfile(profile);
        setAnalysis(result);
        return true;
    };

    const reset = () => {
        setAnalysis(null);
        setErrors({});
    };

    return {
        profile,
        errors,
        analysis,
        updateProfile,
        analyze,
        reset
    };
};
