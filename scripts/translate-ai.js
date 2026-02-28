
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import { Client } from '@google/genai'; // Removing problematic import

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables manually
const envPath = path.join(__dirname, '../.env');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf-8');
    envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    });
}

// CONFIGURATION
const API_KEY = process.env.VITE_GOOGLE_API_KEY || process.env.GOOGLE_API_KEY || process.env.VITE_FIREBASE_API_KEY;
const MODEL_NAME = "gemini-2.0-flash";

if (!API_KEY) {
    console.error("❌ Error: No API Key found. Please set VITE_GOOGLE_API_KEY or GOOGLE_API_KEY in your .env file.");
    process.exit(1);
}

const LOCALES_DIR = path.join(__dirname, '../public/locales');
const SOURCE_LANG = 'en';
const TARGET_LANGS = ['pt', 'es'];
const BATCH_SIZE = 200; // Increased to 200 for Gemini Flash capability

// Glossary for consistency
const GLOSSARY = `
- DoughLab Pro -> DoughLab Pro (Do not translate)
- Poolish -> Poolish
- Biga -> Biga
- Autolyse -> Autólise (PT) / Autólisis (ES)
- Bulk Fermentation -> Fermentação em Bloco (PT) / Fermentación en Bloque (ES)
- Cold Ferment -> Fermentação a Frio (PT) / Fermentación en Frío (ES)
- Levain -> Levain
- Sourdough -> Levain (when referring to starter) or Pão de Fermentação Natural (when referring to bread)
- Baker's Percentage -> Porcentagem de Padeiro (PT) / Porcentaje Panadero (ES)
- Hydration -> Hidratação (PT) / Hidratación (ES)
- Crumbs -> Miolo (internal texture) or Migalhas (residue) - Context dependent
- Oven Spring -> Salto de Forno (PT) / Salto de Horno (ES)
- Proofing -> Fermentação Final (PT) / Fermentación Final (ES)
- Balling -> Bolear (PT) / Boleado (ES)
- Strength (W) -> Força (W)
`;

const KEEP_AS_IS = ["PDF", "ID", "URL", "OK", "30", "1", "2", "3", "cm", "mm", "kg", "g", "%", "°C", "°F"];

// 1. Traverse and Flatten JSON
function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + '.' : '';
        if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k]))
            Object.assign(acc, flattenObject(obj[k], pre + k));
        else
            acc[pre + k] = obj[k];
        return acc;
    }, {});
}


// 2. Unflatten JSON - Fixed to avoid string collisions
function unflattenObject(data) {
    const result = {};
    for (const i in data) {
        const keys = i.split('.');
        let current = result;
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            const isLast = j === keys.length - 1;

            if (isLast) {
                current[key] = data[i];
            } else {
                // If the path doesn't exist or is a string (collision), reset it to an object
                if (!current[key] || typeof current[key] !== 'object') {
                    current[key] = {};
                }
                current = current[key];
            }
        }
    }
    return result;
}


// 3. Raw AI Translation Function (fetch)
async function translateBatch(batchObj, targetLang) {
    const jsonString = JSON.stringify(batchObj, null, 2);

    const prompt = `
    Role: Professional Translator for a Baking App.
    Task: Translate the values of the following JSON object from English to ${targetLang === 'pt' ? 'Portuguese (Brazil)' : 'Spanish'}.
    
    Rules:
    1. KEEP KEYS EXACTLY THE SAME.
    2. Output ONLY clean, valid JSON. Do not include markdown formatting like \`\`\`json.
    3. Use technical baking terminology appropriate for professional bakers.
    4. Respect the Glossary variables: ${GLOSSARY}
    5. Maintain all formatting variables like {{value}}, <0>, etc. exactly as is.
    
    Input JSON:
    ${jsonString}
    `;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!responseText) throw new Error("No text in response");

        // Clean up markdown if AI adds it
        const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanJson);
    } catch (error) {
        console.error(`❌ AI Error for batch:`, error.message);
        return null;
    }
}

async function processFile(fileName, targetLang) {
    console.log(`\n📂 Processing: ${fileName} -> ${targetLang.toUpperCase()}`);

    const sourcePath = path.join(LOCALES_DIR, SOURCE_LANG, fileName);
    const targetPath = path.join(LOCALES_DIR, targetLang, fileName);

    if (!fs.existsSync(sourcePath)) return;

    const sourceContent = JSON.parse(fs.readFileSync(sourcePath, 'utf-8'));
    let targetContent = {};

    if (fs.existsSync(targetPath)) {
        try {
            targetContent = JSON.parse(fs.readFileSync(targetPath, 'utf-8'));
        } catch (e) {
            console.warn(`Warning: Could not parse target file ${targetPath}, starting fresh.`);
            targetContent = {};
        }
    }

    const flatSource = flattenObject(sourceContent);
    const flatTarget = flattenObject(targetContent);

    // Identify missing or untranslated keys
    const toTranslate = {};
    let count = 0;

    for (const [key, value] of Object.entries(flatSource)) {
        // Skip empty or purely numeric/symbolic values
        if (!value || typeof value !== 'string' || KEEP_AS_IS.includes(value)) continue;

        const targetVal = flatTarget[key];

        // Criteria for translation:
        // 1. Missing in target
        // 2. Identical to source (and long enough to likely be untranslated sentence)
        // Adjust length heuristic to avoid false positives on short words like "Ok"
        if (!targetVal || (targetVal === value && value.length > 3 && !value.match(/^\d+$/))) {
            toTranslate[key] = value;
            count++;
        }
    }

    if (count === 0) {
        console.log(`✅ ${fileName}: All up to date.`);
        return;
    }

    console.log(`⚠️ ${fileName}: Found ${count} strings to translate.`);

    // Batch Process
    const keys = Object.keys(toTranslate);

    // Process strictly sequentially to avoid rate limits
    for (let i = 0; i < keys.length; i += BATCH_SIZE) {
        const batchKeys = keys.slice(i, i + BATCH_SIZE);
        const batchObj = {};
        batchKeys.forEach(k => batchObj[k] = toTranslate[k]);

        console.log(`   🔄 Translating batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(keys.length / BATCH_SIZE)}...`);

        const translatedBatch = await translateBatch(batchObj, targetLang);

        if (translatedBatch) {
            // Merge results immediately
            Object.assign(flatTarget, translatedBatch);

            // Save progress effectively
            const newContent = unflattenObject(flatTarget);
            fs.writeFileSync(targetPath, JSON.stringify(newContent, null, 2));
        } else {
            console.warn(`   ⚠️ Skipping batch due to error.`);
        }

        // Small delay to prevent rate limiting
        await new Promise(r => setTimeout(r, 2000)); // 2s delay between batches
    }

    console.log(`✅ ${fileName}: Completed.`);
}

async function run() {
    console.log("🚀 Starting AI Translation Engine...");

    // Get all source files
    const files = fs.readdirSync(path.join(LOCALES_DIR, SOURCE_LANG)).filter(f => f.endsWith('.json'));

    for (const lang of TARGET_LANGS) {
        console.log(`\n🌍 Language: ${lang.toUpperCase()}`);
        for (const file of files) {
            await processFile(file, lang);
        }
    }

    console.log("\n✨ All done! Don't forget to check the results.");
}

run();
