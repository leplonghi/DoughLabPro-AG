const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const languages = ['pt', 'es', 'fr', 'it', 'de', 'en'];

const translations = {
    en: {
        primary_flavors: "Primary Flavors",
        aroma_profile: "Aroma Profile",
        recommended_pairings: "Recommended Pairings",
        use_formula: "Use Formula",
        global: "Global",
        style_fingerprint: "Style Fingerprint",
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        expert: "Expert"
    },
    pt: {
        primary_flavors: "Sabores Primários",
        aroma_profile: "Perfil Aromático",
        recommended_pairings: "Combinações Recomendadas",
        use_formula: "Usar Fórmula",
        global: "Global",
        style_fingerprint: "Impressão Digital do Estilo",
        easy: "Fácil",
        medium: "Médio",
        hard: "Difícil",
        expert: "Expert"
    },
    es: {
        primary_flavors: "Sabores Primarios",
        aroma_profile: "Perfil Aromático",
        recommended_pairings: "Maridajes Recomendados",
        use_formula: "Usar Fórmula",
        global: "Global",
        style_fingerprint: "Huella Digital del Estilo",
        easy: "Fácil",
        medium: "Medio",
        hard: "Difícil",
        expert: "Experto"
    },
    fr: {
        primary_flavors: "Saveurs Primaires",
        aroma_profile: "Profil Aromatique",
        recommended_pairings: "Accords Recommandés",
        use_formula: "Utiliser la Formule",
        global: "Mondial",
        style_fingerprint: "Empreinte du Style",
        easy: "Facile",
        medium: "Moyen",
        hard: "Difficile",
        expert: "Expert"
    },
    it: {
        primary_flavors: "Sapori Primari",
        aroma_profile: "Profilo Aromatico",
        recommended_pairings: "Abbinamenti Consigliati",
        use_formula: "Usa Formula",
        global: "Globale",
        style_fingerprint: "Impronta dello Stile",
        easy: "Facile",
        medium: "Medio",
        hard: "Difficile",
        expert: "Esperto"
    },
    de: {
        primary_flavors: "Primärgeschmäcker",
        aroma_profile: "Aromaprofil",
        recommended_pairings: "Empfohlene Kombinationen",
        use_formula: "Formel Verwenden",
        global: "Weltweit",
        style_fingerprint: "Stil-Fingerabdruck",
        easy: "Leicht",
        medium: "Mittel",
        hard: "Schwer",
        expert: "Experte"
    }
};

function updateCommonFiles() {
    languages.forEach(lang => {
        const commonPath = path.join(localesDir, lang, 'common.json');
        if (fs.existsSync(commonPath)) {
            let content = JSON.parse(fs.readFileSync(commonPath, 'utf8'));

            // Ensure general object exists (optional if distinct keys)
            // I'll put specific keys in specific objects or root

            if (!content.general) content.general = {};
            content.general.primary_flavors = translations[lang].primary_flavors;
            content.general.aroma_profile = translations[lang].aroma_profile;
            content.general.recommended_pairings = translations[lang].recommended_pairings;
            content.general.use_formula = translations[lang].use_formula; // Adding to general object

            // Root keys
            content.global = translations[lang].global;
            content.style_fingerprint = translations[lang].style_fingerprint;
            content.easy = translations[lang].easy;
            content.medium = translations[lang].medium;
            content.hard = translations[lang].hard;
            content.expert = translations[lang].expert;

            fs.writeFileSync(commonPath, JSON.stringify(content, null, 2));
            console.log(`✅ Updated ${lang}/common.json`);
        } else {
            console.log(`❌ File not found: ${commonPath}`);
        }
    });
}

updateCommonFiles();
