
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

const API_KEY = process.env.VITE_GOOGLE_API_KEY || process.env.GOOGLE_API_KEY;


async function listModels() {
    console.log(`Key length: ${API_KEY ? API_KEY.length : 0}`);
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;
        console.log(`Fetching: ${url.replace(API_KEY, 'HIDDEN')}`);
        const response = await fetch(url);
        console.log(`Status: ${response.status}`);

        const data = await response.json();
        const names = data.models ? data.models.map(m => m.name.replace('models/', '')) : [];
        console.log("AVAILABLE_MODELS:", names.join(', '));

    } catch (error) {
        console.error("Error listing models:", error);
    }
}


listModels();
