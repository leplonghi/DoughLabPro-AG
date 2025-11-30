import { useState } from "react";
import { DoughbotResult } from "../types/doughbot";

export const useDoughbot = () => {
    const [problem, setProblem] = useState("");
    const [description, setDescription] = useState("");
    const [result, setResult] = useState<DoughbotResult | null>(null);

    const validateInputs = () => {
        return problem.trim().length > 0 || description.trim().length > 0;
    };

    const diagnose = () => {
        if (!validateInputs()) return;

        // Placeholder logic; real engine will replace it
        // Simulating a result for now to show the placeholder UI if needed, 
        // or just keeping it null as per current behavior which shows static placeholder
        // But the task says "Substituir placeholder atual por componente novo" and "diagnose()".
        // The current page just logs to console.
        // Let's set a dummy result so we can conditionally render the results component if we wanted to,
        // but the current UI shows the placeholder statically. 
        // However, the prompt says "Substituir placeholder atual por componente novo".

        setResult({
            causes: ["Gluten underdeveloped"],
            solutions: ["Extend autolyse by 20–30 minutes"],
            ranges: { hydration: 65 },
        });
    };

    const reset = () => setResult(null);

    return {
        problem,
        setProblem,
        description,
        setDescription,
        result,
        diagnose,
        validateInputs,
        reset,
    };
};
