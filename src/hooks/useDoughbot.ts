import { useState } from "react";
import { DoughbotResult } from "../types/doughbot";
import { diagnoseDoughIssue } from "@/ai/assistantClient";
import { useTranslation } from '@/i18n';

export const useDoughbot = () => {
    const [problem, setProblem] = useState("");
    const [description, setDescription] = useState("");
    const [result, setResult] = useState<DoughbotResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const validateInputs = () => {
        return problem.trim().length > 0 || description.trim().length > 0;
    };

    const diagnose = async (context: string = "") => {
        if (!validateInputs()) return;

        setIsLoading(true);
        setError(null);

        try {
            const diagnosis = await diagnoseDoughIssue(problem, description, context);
            setResult(diagnosis);
        } catch (err) {
            setError(err instanceof Error ? err.message : t('ui.an_error_occurred'));
        } finally {
            setIsLoading(false);
        }
    };

    const reset = () => {
        setResult(null);
        setError(null);
    };

    return {
        problem,
        setProblem,
        description,
        setDescription,
        result,
        isLoading,
        error,
        diagnose,
        validateInputs,
        reset,
    };
};
