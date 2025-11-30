import { useState } from 'react';
import { analyzeOvenProfile, OvenProfileInput, OvenAnalysisResult, validateOvenInput } from '@/logic/ovenProfile';

export const useOvenProfiler = () => {
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
