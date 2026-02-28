const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const languages = ['en', 'pt', 'es', 'fr', 'it', 'de'];

const extraKeys = {
    emergency_dough_rescue: {
        en: "Emergency Dough Rescue", pt: "Resgate de Emergência da Massa", es: "Rescate de Emergencia de la Masa", fr: "Sauvetage d'Urgence de la Pâte", it: "Salvataggio d'Emergenza dell'Impasto", de: "Teig-Notfallrettung"
    },
    ask_about_your_dough: {
        en: "Ask about your dough...", pt: "Pergunte sobre sua massa...", es: "Pregunta sobre tu masa...", fr: "Demandez à propos de votre pâte...", it: "Chiedi informazioni sul tuo impasto...", de: "Fragen Sie nach Ihrem Teig..."
    },
    search_ingredients: {
        en: "Search ingredients...", pt: "Buscar ingredientes...", es: "Buscar ingredientes...", fr: "Rechercher des ingrédients...", it: "Cerca ingredienti...", de: "Zutaten suchen..."
    }
};

languages.forEach(lang => {
    const filePath = path.join(localesDir, lang, 'common.json');
    if (fs.existsSync(filePath)) {
        let content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        Object.keys(extraKeys).forEach(key => {
            if (!content[key]) {
                content[key] = extraKeys[key][lang] || extraKeys[key].en;
            }
        });
        fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
        console.log(`✅ Updated ${lang}/common.json`);
    }
});
