
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
    ): {
        status: 'healthy' | 'warning' | 'critical';
        alerts: string[];
        aiAnalysis?: {
            classification: 'Standard' | 'Variation' | 'Experimental';
            impact: string[];
            suggestions: string[];
            freedomStatement: string;
        }
    } {

        let status: 'healthy' | 'warning' | 'critical' = 'healthy';
        const alerts: string[] = [];
        const impact: string[] = [];
        const suggestions: string[] = [];
        let classification: 'Standard' | 'Variation' | 'Experimental' = 'Standard';

        // 1. Check Load
        const heavyItems = increments.filter(i => i.technicalProfile.weightImpact?.toLowerCase().includes('heavy'));
        if (heavyItems.length > 2) {
            status = 'warning';
            impact.push("High Structural Load: Excessive weight may inhibit proper oven spring.");
            suggestions.push("Consider reducing portion size of heavy ingredients.");
        }

        // 2. Check Moisture Sum
        const wetItems = increments.filter(i => i.technicalProfile.moistureLevel === 'high');
        const isHighTemp = bakingTempC > 300;

        if (wetItems.length >= 2) {
            if (isHighTemp) {
                // High Heat + Moisture = Soup
                status = 'critical';
                classification = 'Experimental';
                impact.push("Hydro-Overload: High moisture ingredients in high heat will release water faster than evaporation.");
                suggestions.push("Pre-cook ingredients to remove moisture.");
                suggestions.push("Drain fresh cheeses thoroughly.");
            } else {
                // Low Heat + Moisture = Soggy
                status = 'warning';
                classification = 'Variation';
                impact.push("Moisture Accumulation: Long bake times with wet ingredients risk center sogginess.");
            }
            alerts.push(impact[impact.length - 1]);
        }

        // 3. Thermal Checks (Sugar/Fat vs Temp)
        const sugaryItems = increments.filter(i => i.technicalProfile.sugarContent === 'high');
        const fattyItems = increments.filter(i => i.technicalProfile.fatContent === 'high');

        if (sugaryItems.length > 0 && isHighTemp) {
            status = 'warning';
            impact.push("Carbonization Risk: High sugar ingredients will burn rapidly above 300°C.");
            suggestions.push(`Apply ${sugaryItems.map(i => i.visibleName).join(', ')} post-bake or foil-shield.`);
            alerts.push(`Sugar Alert: Burning risk for ${sugaryItems.map(i => i.visibleName).join(', ')}`);
        }

        if (fattyItems.length > 2 && isHighTemp) {
            impact.push("Grease Separation: Multiple high-fat items may result in excessive oil pooling.");
        }

        // 4. Check Compatibility Explicitly & Determine Classification
        let experimentalCount = 0;
        let variationCount = 0;

        increments.forEach(inc => {
            const comp = inc.compatibilityByStyle[style.id];
            if (comp === 'experimental') {
                experimentalCount++;
                classification = 'Experimental'; // Immediate trigger
            } else if (comp === 'variation') {
                variationCount++;
            }
        });

        if (classification !== 'Experimental' && variationCount > 0) {
            classification = 'Variation';
        }

        // 5. Contextual Logic (The "Smart" part)
        // Example: Burrata (Post-oven assumption) in pre-oven context
        // NOTE: In a real implementation we would inspect the *applicationMoment* of the ingredient if available directly on the generic Increment type,
        // but currently generic Increments don't strictly enforce 'applicationMoment' in the interface displayed here.
        // We will infer valid standard behavior.

        return {
            status,
            alerts,
            aiAnalysis: {
                classification,
                impact,
                suggestions,
                freedomStatement: "You have full creative freedom. These technical insights help predict the outcome."
            }
        };
    }
}
