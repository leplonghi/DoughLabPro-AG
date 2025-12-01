
import { GoogleGenAI } from "@google/genai";
import { DoughConfig, DoughResult, Batch, FlourDefinition, Oven, RecipeStyle, Levain, FeedingEvent, DoughStyleDefinition } from '../types';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });

import { DOUGHY_SYSTEM_PROMPT } from './doughyPrompt';

// This function builds a detailed system prompt for the AI model.
function buildGeneralSystemPrompt(t: (key: string) => string): string {
  return DOUGHY_SYSTEM_PROMPT;
}


/**
 * Builds a rich, contextual prompt for the AI model based on the user's current state in the app.
 * @param question The user's question.
 * @param config The current dough configuration from the calculator.
 * @param flour The selected flour definition.
 * @param oven The user's default oven profile.
 * @param lastBatch The user's most recent batch for historical context.
 * @param userPlan The user's subscription plan.
 * @returns A formatted string containing both context and the user's question.
 */
function buildRichContext(
  t: (key: string, replacements?: { [key: string]: string | number | undefined }) => string,
  question: string,
  config?: DoughConfig,
  flour?: FlourDefinition,
  oven?: Oven,
  lastBatch?: Batch,
  userPlan?: 'free' | 'pro',
): string {

  const contextData: any = {
    userPlan: userPlan || 'free',
  };

  if (config) {
    contextData.calculatorSettings = {
      style: config.recipeStyle,
      flourWeight: config.totalFlour || 0, // Approximate if not set
      hydration: config.hydration,
      saltPct: config.salt,
      preferment: {
        type: config.fermentationTechnique,
        pct: config.prefermentFlourPercentage,
        hydration: 100 // Assumption, or derive if available
      }
    };
  }

  if (flour) {
    // Add flour info to calculator settings or separate field if prompt allows
    // The prompt expects flour in lastBake, but maybe we can add it to calculatorSettings or a generic context
    // The prompt example shows "flour" inside "lastBake".
    // Let's add a top-level "currentFlour" if useful, or just rely on the AI to pick it up.
    // The prompt says "Possible fields: ... If context is missing, DO NOT hallucinate."
    // It lists specific fields. Let's try to map to them as best as possible.
    // But it also says "The host application may pass dynamic context."
    contextData.currentFlour = {
      brand: flour.name,
      protein: flour.protein,
      W: flour.strengthW
    };
  }

  if (oven) {
    contextData.environment = {
      ...contextData.environment,
      ovenMaxTemp: oven.maxTemperature,
      ovenType: oven.type,
      hasStone: oven.hasStone,
      hasSteel: oven.hasSteel
    };
  }

  if (lastBatch) {
    contextData.lastBake = {
      style: lastBatch.doughConfig.recipeStyle,
      hydration: lastBatch.doughConfig.hydration,
      resultNotes: lastBatch.notes,
      rating: lastBatch.rating
    };
  }

  // Serialize context to JSON
  const contextString = JSON.stringify(contextData, null, 2);

  return `CONTEXT_JSON_BLOCK:
${contextString}

USER_QUESTION:
"${question}"`;
}


interface AssistantInput {
  question: string;
  doughConfig?: DoughConfig;
  doughResult?: DoughResult | null;
  lastBatch?: Batch;
  flour?: FlourDefinition;
  oven?: Oven;
  userPlan?: 'free' | 'pro';
  t: (key: string, replacements?: { [key: string]: string | number | undefined }) => string;
}

export async function askGeneralAssistant(input: AssistantInput): Promise<string> {
  const { question, doughConfig, flour, oven, lastBatch, userPlan, t } = input;

  const systemInstruction = buildGeneralSystemPrompt(t);
  const userPrompt = buildRichContext(t, question, doughConfig, flour, oven, lastBatch, userPlan);

  try {
    // FIX: Updated model from gemini-1.5-pro to gemini-3-pro-preview for complex tasks
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp', // Updated to latest fast model or keep pro-preview if preferred
      contents: userPrompt,
      config: {
        systemInstruction,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI model");
    }
    return text;
  } catch (error) {
    console.error('[DoughLab Assistant] Error calling AI model:', error);
    throw new Error(t('assistant_page.error'));
  }
}

// --- LEVAIN PET ASSISTANT ---

function buildLevainSystemPrompt(): string {
  return `You are a baking assistant specialized in sourdough starter (levain).
- Your role is to answer questions strictly related to levain: feeding, routine adjustments, use in recipes, and interpreting signs (smell, acidity, strength).
- Use the provided context about the user's specific levain to give practical and personalized advice.
- Be concise and direct.
- **Strict Rule**: If the user asks about human health, clinical nutrition, or advanced food safety, you MUST reply ONLY with: "I can only help with technical adjustments for levain and dough. For health or specific dietary questions, please consult a specialized professional."
- Respond in English.`;
}

function buildLevainContext(
  levain: Levain,
  question: string,
): string {
  const contextParts: string[] = [];

  contextParts.push(`**User Levain Context:**`);
  contextParts.push(`- **Name:** ${levain.name}`);
  contextParts.push(`- **Current Status:** ${levain.status}`);
  contextParts.push(`- **Hydration:** ${levain.hydration}%`);
  contextParts.push(`- **Base Flour:** ${levain.baseFlourType || 'Not specified'}`);
  contextParts.push(`- **Typical Use:** ${levain.typicalUse || 'Not specified'}`);
  contextParts.push(`- **Last Feeding:** ${new Date(levain.lastFeeding).toLocaleString()}`);

  if (levain.feedingHistory && levain.feedingHistory.length > 0) {
    contextParts.push(`- **Last ${Math.min(5, levain.feedingHistory.length)} Feeding Logs (newest first):**`);
    levain.feedingHistory.slice(0, 5).forEach(log => {
      contextParts.push(`  - **Date:** ${new Date(log.date).toLocaleString()}`);
      contextParts.push(`    - **Ratio:** ${log.ratio || 'N/A'}`);
      contextParts.push(`    - **Temperature:** ${log.ambientTemperature ? log.ambientTemperature + '°C' : 'N/A'}`);
      if (log.notes) contextParts.push(`    - **Notes:** ${log.notes}`);
    });
  }

  return `${contextParts.join('\n')}\n\n**User Question:**\n"${question}"`;
}

export async function askLevainAssistant(levain: Levain, question: string): Promise<string> {
  const systemInstruction = buildLevainSystemPrompt();
  const userPrompt = buildLevainContext(levain, question);

  // Hardcoded check for out-of-scope questions (English keywords)
  const healthKeywords = ['health', 'nutrition', 'clinical', 'medical', 'eat', 'ingest', 'safe to eat', 'safe for consumption'];
  if (healthKeywords.some(keyword => question.toLowerCase().includes(keyword))) {
    return "I can only help with technical adjustments for levain and dough. For health or specific dietary questions, please consult a specialized professional.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userPrompt,
      config: {
        systemInstruction,
      }
    });
    const text = response.text;
    if (!text) {
      throw new Error("Empty response from AI model");
    }
    return text;
  } catch (error) {
    console.error('[Levain Assistant] Error calling AI model:', error);
    throw new Error("Sorry, I couldn't process your question right now. Please try again.");
  }
}

// --- STYLE BUILDER ---

export async function generateStyleFromDescription(description: string): Promise<Partial<DoughStyleDefinition>> {
  const systemInstruction = `You are a master baker and food scientist. Your task is to convert a user's description of a bread or pizza style into a structured technical JSON object compatible with the DoughLabPro application schema.
    
    Input: A natural language description of a dough style.
    Output: A valid JSON object adhering to the following structure (do not include markdown formatting):
    
    {
      "name": "Style Name (Short)",
      "family": "General Family (e.g., 'Italian Rustic', 'Pan Pizza', 'Viennoiserie')",
      "category": "One of: 'pizza', 'bread', 'enriched_bread', 'burger_bun', 'pastry', 'cookie', 'flatbread'",
      "origin": { "country": "String", "region": "String (Optional)", "period": "String (Optional)" },
      "description": "Short UI description (max 140 chars)",
      "history": "Factual history and context (2-3 sentences)",
      "culturalContext": "How it is eaten or cultural significance",
      "technical": {
        "hydration": Number (0-120, target average),
        "salt": Number (0-5, target),
        "oil": Number (0-50, target),
        "sugar": Number (0-50, target),
        "fermentation": "String description (e.g. '24h Cold')",
        "fermentationTechnique": "One of: 'DIRECT', 'POOLISH', 'BIGA'",
        "bakingTempC": Number (100-500)
      },
      "technicalProfile": {
        "hydration": [Min, Max],
        "salt": [Min, Max],
        "oil": [Min, Max],
        "sugar": [Min, Max],
        "flourStrength": "String (e.g. 'W300' or 'High Protein')",
        "fermentation": { "bulk": "String", "proof": "String" },
        "ovenRecommendations": "String",
        "difficulty": "One of: 'Easy', 'Medium', 'Hard', 'Expert'",
        "recommendedUse": "String"
      },
      "references": [ { "source": "Real source name", "url": "Optional URL" } ],
      "recipeStyle": "NEAPOLITAN" (Map to closest enum: NEAPOLITAN, NEW_YORK, DETROIT, ROMAN, FOCACCIA, BAGUETTE, BRIOCHE, SOURDOUGH, CIABATTA, BURGER_BUN, COOKIE_NY_CHOC_CHIP)
    }
    
    Be technically accurate. If data is missing, infer reasonable defaults based on baking science.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: description,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response");

    const styleData = JSON.parse(text);
    return styleData;

  } catch (error) {
    console.error('[Style Builder] Error:', error);
    throw new Error("Failed to generate style. Please try a different description.");
  }
}
