
import {
    Increment,
    UserIngredient,
    AIValidationResponse,
    IncrementTechnicalProfile,
    IncrementCompatibility
} from '@/types/ingredients';
import { DoughStyleDefinition } from '@/types/styles';

// Mock AI Service until real LLM integration
export class IngredientAIService {

    // Validate a new user ingredient
    static async validateIngredient(
        name: string,
        category: string,
        inputData: {
            moisturePerception: 'low' | 'medium' | 'high';
            applicationTime: 'pre_bake' | 'post_bake'; // pre-forno, pos-forno
            loadType: 'light' | 'medium' | 'heavy'; // carga
            hasCreamyBase: boolean;
        },
        availableStyles: DoughStyleDefinition[] // To check compatibility against
    ): Promise<AIValidationResponse> {

        // SIMULATED AI PROCESSING
        // In a real app, this would call an API with the prompt context.

        console.log("AI Validating:", name, inputData);

        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

        // Heuristic Logic (Simulating "Smart" classification)

        // 1. Infer Technical Profile
        const technicalProfile: IncrementTechnicalProfile = {
            moistureLevel: inputData.moisturePerception,
            fatContent: inputData.hasCreamyBase ? 'high' : 'low', // Simple assumption
            sugarContent: 'low', // Default assumption unless specified otherwise (would need more inputs in real AI)
            weightImpact: inputData.loadType === 'heavy' ? 'Heavy load' : 'Standard load',
            thermalBehavior: inputData.applicationTime === 'post_bake'
                ? 'No thermal impact (applied after)'
                : 'Participates in heat transfer'
        };

        const assumptions: string[] = [];
        if (inputData.applicationTime === 'pre_bake' && inputData.moisturePerception === 'high') {
            assumptions.push("Assumed ingredient releases water during bake");
        }
        if (category.toLowerCase().includes('fruit') || name.toLowerCase().includes('abacaxi')) {
            technicalProfile.sugarContent = 'high';
            assumptions.push("Detected fruit/sugar content");
        }

        // 2. Classify Compatibility
        const compatibilityByStyle: Record<string, IncrementCompatibility> = {};

        availableStyles.forEach(style => {
            let status: IncrementCompatibility = 'validated'; // Optimistic default

            // Logic: High moisture on Neapolitan (High Heat) = Risk of soupiness -> Variation/Warning
            // High moisture on Pan Pizza = Validated (Pan handles it)

            if (inputData.applicationTime === 'post_bake') {
                status = 'validated'; // Generally safe
            } else {
                if (inputData.moisturePerception === 'high') {
                    if (style.recipeStyle === 'NEAPOLITAN') {
                        status = 'variation'; // Risk
                    } else if (style.recipeStyle === 'PAN_PIZZA' || style.category === 'bread') {
                        status = 'validated';
                    }
                }
            }

            compatibilityByStyle[style.id] = status;
        });

        // 3. Generate Warnings
        const warnings: string[] = [];
        if (inputData.applicationTime === 'pre_bake' && inputData.moisturePerception === 'high') {
            warnings.push("High moisture toppings can prevent crispiness. Consider pre-cooking.");
        }
        if (inputData.hasCreamyBase) {
            warnings.push("Fat-heavy bases may separate at high temperatures.");
        }

        return {
            technicalProfile,
            compatibilityByStyle,
            warnings,
            confidenceScore: 0.85,
            assumptions
        };
    }

    // Combine validation status for a Full Style (Base + Increments)
    static checkAssemblyHealth(
        style: DoughStyleDefinition,
        increments: (Increment | UserIngredient)[],
        bakingTempC: number = 250
    ): { status: 'healthy' | 'warning' | 'critical'; alerts: string[] } {

        let status: 'healthy' | 'warning' | 'critical' = 'healthy';
        const alerts: string[] = [];

        // 1. Check Load
        const heavyItems = increments.filter(i => i.technicalProfile.weightImpact?.toLowerCase().includes('heavy'));
        if (heavyItems.length > 2) {
            status = 'warning';
            alerts.push("Heavy Load: Too many heavy toppings may inhibit oven spring.");
        }

        // 2. Check Moisture Sum
        const wetItems = increments.filter(i => i.technicalProfile.moistureLevel === 'high');
        if (wetItems.length > 1 && style.recipeStyle === 'NEAPOLITAN') {
            status = 'warning';
            alerts.push("Hydro-Overload: Multiple high-moisture toppings on a fast-bake style.");
        }

        // 3. Thermal Checks (Sugar/Fat vs Temp)
        const sugaryItems = increments.filter(i => i.technicalProfile.sugarContent === 'high');
        if (sugaryItems.length > 0 && bakingTempC > 300) {
            status = 'warning';
            alerts.push(`Sugar Alert: ${sugaryItems.map(i => i.visibleName).join(', ')} will carbonize rapidly > 300°C.`);
        }

        // 4. Check Compatibility Explicitly
        increments.forEach(inc => {
            const comp = inc.compatibilityByStyle[style.id];
            if (comp === 'experimental') {
                status = 'warning'; // Don't go straight to critical, allow experimentation
                alerts.push(`Experimental: ${inc.visibleName} is not standard for ${style.name}.`);
            }
        });

        return { status, alerts };
    }
}
