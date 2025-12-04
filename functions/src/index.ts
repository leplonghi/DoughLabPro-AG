
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { VertexAI } from "@google-cloud/vertexai";

admin.initializeApp();
const db = admin.firestore();

// Initialize Vertex AI
// Note: Requires GOOGLE_GENAI_API_KEY environment variable or default ADC setup in Cloud Functions
// For Vertex AI in Cloud Functions, it typically uses the service account's identity.
const project = process.env.GCLOUD_PROJECT;
const location = "us-central1"; 
const vertexAI = new VertexAI({ project: project, location: location });
const model = vertexAI.getGenerativeModel({ model: "gemini-1.5-pro" }); // Using 1.5 Pro as the high-capability model

export const generateDeepStyleContent = functions.firestore
  .document("styles_raw/{styleId}")
  .onWrite(async (change, context) => {
    // Only proceed on Create or Update
    if (!change.after.exists) {
      // Document deleted
      return null;
    }

    const styleData = change.after.data();
    const styleId = context.params.styleId;

    if (!styleData) {
      console.error(`No data found for styleId: ${styleId}`);
      return null;
    }

    console.log(`Generating deep content for style: ${styleId}`);

    try {
      const prompt = `
---------------------------------
BEGIN_MASTER_PROMPT
You are the "DoughLabPro Style Deep Content Engine".

GOAL
You receive a single style object in JSON format, already validated and canonically defined by the DoughLabPro team.
Your ONLY job is to generate a long, structured, deeply technical MARKDOWN document in ENGLISH that explains and expands this style, WITHOUT inventing new numeric values, origins, or references.

You MUST:
- Respect the existing JSON fields as the SINGLE SOURCE OF TRUTH.
- Never contradict or override the JSON data.
- Never introduce new numeric ranges (hydration, salt, time, temperature, flour strength, etc.) that are not already present in the JSON.
- Never invent new bibliographic references or standards. You may ONLY re-use and rephrase references listed in the "references" array of the JSON.
- Never pretend to quote from sources that are not explicitly listed in the JSON.

INPUT FORMAT (JSON)
You will receive ONE object with this structure (example):

{
  "id": "neapolitan_avpn",
  "name": "Neapolitan (AVPN)",
  "category": "pizza",
  "origin": {
    "country": "Italy",
    "region": "Naples, Campania",
    "period": "18th–19th century; codified 1984 by AVPN"
  },
  "description": "...",
  "history": "...",
  "tags": ["high-temp", "00-flour", "..."],
  "difficulty": "medium-high",
  "fermentationType": "ambient",
  "technicalProfile": {
    "hydration": "55–62%",
    "salt": "2.5–3.0%",
    "oil": "0%",
    "sugar": "0%",
    "flourStrength": "W 250–320",
    "preferment": "None (traditional AVPN); modern variants optional",
    "fermentationSteps": [
      "8–12h bulk at 20–24°C",
      "4–6h ball fermentation at 20–24°C"
    ],
    "ovenTemp": "430–485°C",
    "recommendedUse": [
      "Wood-fired dome ovens",
      "High-heat gas or pellet ovens (+430°C)"
    ],
    "difficulty": "medium-high"
  },
  "warnings": [...],
  "notes": [...],
  "references": [
    "AVPN Disciplinare",
    "Modernist Pizza Vol.1",
    "True Italian Taste Brasil"
  ],
  "isPro": false,
  "source": "DLP Core Pack",
  "createdAt": "2025-01-01",
  "releaseDate": "2025-01-01"
}

RULES (ETHICS & NON-HALLUCINATION)
1. DO NOT invent:
   - numeric ranges,
   - temperatures,
   - times,
   - flour strengths,
   - origins,
   - dates,
   - authors,
   - standards,
   - regulation names,
   - certification bodies,
   - or any external factual data.
2. You MAY interpret and explain the CONSEQUENCES of the existing numbers and tags:
   - e.g. explain what "55–62% hydration" means for dough handling.
   - e.g. explain what "W 250–320" implies about flour strength.
3. You MAY elaborate on general science (e.g. gluten formation, heat transfer), but keep it generic and clearly separated from style-specific numeric data.
4. You MUST treat the "references" array as the ONLY bibliography. You can rephrase it, group it, or mention it as "Recommended sources", but you MUST NOT add new references.
5. If you feel tempted to add more specific data not present in the JSON, DO NOT DO IT. Instead, write neutral scientific explanations and keep style-specific details limited to the JSON values.

OUTPUT FORMAT
Produce a single MARKDOWN document with this structure:

# {name} — Deep Technical Profile

## 1. Style Overview and Cultural Context
- Summarize the style using "name", "category", and "origin".
- Integrate the existing "description" and "history" into a coherent, refined narrative.
- Explain the cultural and gastronomic significance of this style WITHOUT inventing new historical events or dates.

## 2. Dough Philosophy and Design
- Explain the overall dough concept for this style (lean, enriched, high hydration, etc.).
- Use ONLY the existing technicalProfile.hydration, salt, oil, sugar, flourStrength, preferment, fermentationSteps, ovenTemp.
- Interpret how these choices affect texture, flavor, handling, and baking behavior.
- Do NOT introduce new numeric ranges.

## 3. Flour, Gluten and Rheology
- Based on flourStrength and category, discuss gluten development, extensibility vs elasticity, and structural behavior.
- This section can use general baking science, but must NOT introduce new numeric data that is not in the JSON.
- Connect tags like "00-flour", "high-gluten", "lean-dough" to general flour and rheology characteristics.

## 4. Fermentation Model and Flavor Development
- Use fermentationType and technicalProfile.fermentationSteps to explain the fermentation strategy.
- Discuss bulk vs final proof, typical ambient vs cold conditions ONLY in qualitative terms (unless numeric times are already present in the JSON).
- Explain flavor, aroma, digestibility and structure consequences USING the existing times and type (ambient, cold, mixed).

## 5. Baking Dynamics and Thermal Behavior
- Use technicalProfile.ovenTemp and recommendedUse to discuss how the style behaves in the oven (wood-fired, deck, domestic, pan, etc.).
- Explain crust characteristics (thickness, crispness, char, color) derived from the existing data.
- Do NOT invent new temperature ranges: ONLY interpret what is already provided.

## 6. Variants, Boundaries and Non-Canonical Adaptations
- Explain what happens when bakers deviate from the canonical profile (e.g. higher hydration, cold fermentation, different ovens).
- Keep this qualitative: “if hydration is pushed higher than the given range, handling becomes stickier and structure changes…”
- DO NOT give new specific numbers or pretend those variants are canonical.

## 7. Integration with DoughLabPro Ecosystem
Describe how this style should connect inside the DoughLabPro app:

### 7.1 Calculator
- Explain how the Calculator should use hydration, salt, oil, sugar and preferment to propose default formulas.
- Do not add new numbers: just reference the given ranges.

### 7.2 MyLab (Experiments)
- Suggest 2–4 experiment ideas (A/B tests, hydration steps, fermentation comparisons) based ONLY on the existing numeric ranges and tags.
- Example: comparing ambient vs cold fermentation IF the style’s context suggests it, but without creating new numeric ranges beyond what is in the JSON.

### 7.3 Learn (Cross-Links)
- Suggest which generic Learn topics this style should link to (e.g. “gluten science”, “fermentation basics”, “high-hydration handling”).
- These are topical labels, not external references.

## 8. Warnings, Common Failures and Troubleshooting
- Expand the existing "warnings" and "notes" into deeper explanations.
- Show what typical mistakes are for this style (overproofing, underbaking, mis-handling hydration, etc.).
- Use qualitative language; do not add new exact numbers.

## 9. References and Further Reading
- Re-list the references array in a more readable way.
- You MAY group them by type (books, standards, associations, etc.).
- You MUST NOT add any new reference not present in the JSON.
- You MUST NOT fabricate URLs or pretend to quote specific pages or sections.

TONE AND STYLE
- Professional, didactic and precise.
- Target: serious home bakers, professional bakers, and culinary students.
- Always in ENGLISH.
- No marketing fluff, no exaggerations.
- You are not allowed to say "studies show" or "experts say" unless this is clearly tied to references already in the JSON.

NOW:
You will receive exactly one JSON object in the next message as "STYLE_JSON".
Read it carefully and generate the MARKDOWN document following the structure above.
Do not output anything other than the final MARKDOWN document.

STYLE_JSON:
${JSON.stringify(styleData, null, 2)}

END_MASTER_PROMPT
---------------------------------
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const deepMarkdown = response.candidates?.[0].content.parts[0].text;

      if (!deepMarkdown) {
        throw new Error("Failed to generate content from Gemini: Empty response.");
      }

      await db.collection("styles_deep").doc(styleId).set({
        id: styleId,
        deepMarkdown: deepMarkdown,
        generatedAt: admin.firestore.FieldValue.serverTimestamp(),
        version: "v3",
        generator: "Gemini-1.5-Pro-DeepEngine",
      });

      console.log(`Successfully generated and saved deep content for ${styleId}`);
      return null;

    } catch (error) {
      console.error(`Error generating deep content for ${styleId}:`, error);
      // Retrying can be handled by Cloud Functions retry policy if configured,
      // but strictly logging here to avoid infinite loops on malformed prompts.
      return null;
    }
  });
