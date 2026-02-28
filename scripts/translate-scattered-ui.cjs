const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const languages = ['pt', 'es', 'fr', 'it', 'de', 'en'];

// UI strings found across components
const uiStrings = {
    learn_technical_details: {
        en: "Learn Technical Details", pt: "Aprender Detalhes Técnicos", es: "Aprender Detalles Técnicos", fr: "Apprendre les Détails Techniques", it: "Dettagli Tecnici", de: "Technische Details lernen"
    },
    emergency_dough_rescue: {
        en: "Emergency Dough Rescue", pt: "Resgate de Emergência da Massa", es: "Rescate de Emergencia de Masa", fr: "Sauvetage d'Urgence de Pâte", it: "Soccorso d'Emergenza Impasto", de: "Notfall-Teigrettung"
    },
    view_full_profile: {
        en: "View Full Profile", pt: "Ver Perfil Completo", es: "Ver Perfil Completo", fr: "Voir le Profil Complet", it: "Vedi Profilo Completo", de: "Vollständiges Profil anzeigen"
    },
    view_profile: {
        en: "View Profile", pt: "Ver Perfil", es: "Ver Perfil", fr: "Voir Profil", it: "Vedi Profilo", de: "Profil anzeigen"
    },
    total_sent: {
        en: "Total Sent", pt: "Total Enviado", es: "Total Enviado", fr: "Total Envoyé", it: "Totale Inviato", de: "Gesamt Gesendet"
    },
    avg_time_to_click: {
        en: "Avg Time to Click", pt: "Tempo Médio até o Clique", es: "Tiempo Promedio hasta el Clic", fr: "Temps Moyen jusqu'au Clic", it: "Tempo Medio al Click", de: "Avg. Zeit bis zum Klick"
    },
    ask_about_your_dough: {
        en: "Ask about your dough...", pt: "Pergunte sobre sua massa...", es: "Pregunta sobre tu masa...", fr: "Demandez au sujet de votre pâte...", it: "Chiedi riguardo al tuo impasto...", de: "Frag nach deinem Teig..."
    },
    create_password: {
        en: "Create a password (min 6 chars)", pt: "Crie uma senha (mín. 6 caracteres)", es: "Crear una contraseña (mín. 6 caracteres)", fr: "Créer un mot de passe (min. 6 caractères)", it: "Crea una password (min. 6 caratteri)", de: "Passwort erstellen (mind. 6 Zeichen)"
    },
    select_flavor_profile: {
        en: "Select flavor profile...", pt: "Selecionar perfil de sabor...", es: "Seleccionar perfil de sabor...", fr: "Sélectionner le profil de saveur...", it: "Seleziona profilo di sapore...", de: "Geschmacksprofil auswählen..."
    },
    ingredients_and_instructions: {
        en: "Ingredients and special instructions...", pt: "Ingredientes e instruções especiais...", es: "Ingredientes e instrucciones especiales...", fr: "Ingrédients et instructions spéciales...", it: "Ingredienti e istruzioni speciali...", de: "Zutaten und besondere Anweisungen..."
    },
    variant_name: {
        en: "Variant Name", pt: "Nome da Variante", es: "Nombre de Variante", fr: "Nom de la Variante", it: "Nome Variante", de: "Variantenname"
    },
    search_ingredients: {
        en: "Search ingredients...", pt: "Pesquisar ingredientes...", es: "Buscar ingredientes...", fr: "Rechercher des ingrédients...", it: "Cerca ingredienti...", de: "Zutaten suchen..."
    },
    matches: {
        en: "Matches", pt: "Resultados", es: "Coincidencias", fr: "Correspondances", it: "Corrispondenze", de: "Treffer"
    },
    source: {
        en: "Source", pt: "Fonte", es: "Fuente", fr: "Source", it: "Fonte", de: "Quelle"
    },
    base: {
        en: "Base", pt: "Base", es: "Base", fr: "Base", it: "Base", de: "Basis"
    }
};

function updateFiles() {
    languages.forEach(lang => {
        // Add to common.json
        const commonPath = path.join(localesDir, lang, 'common.json');
        if (fs.existsSync(commonPath)) {
            let content = JSON.parse(fs.readFileSync(commonPath, 'utf8'));

            Object.keys(uiStrings).forEach(key => {
                content[key] = uiStrings[key][lang] || uiStrings[key].en;
            });

            fs.writeFileSync(commonPath, JSON.stringify(content, null, 2));
            console.log(`✅ Updated ${lang}/common.json with scattered UI strings`);
        }

        // Add to ui.json  
        const uiPath = path.join(localesDir, lang, 'ui.json');
        if (fs.existsSync(uiPath)) {
            let content = JSON.parse(fs.readFileSync(uiPath, 'utf8'));

            // Add doughy assistant keys
            if (!content.doughy) content.doughy = {};
            content.doughy.ask_placeholder = uiStrings.ask_about_your_dough[lang];
            content.doughy.emergency_rescue = uiStrings.emergency_dough_rescue[lang];

            // Add auth keys
            if (!content.auth) content.auth = {};
            content.auth.create_password_placeholder = uiStrings.create_password[lang];

            fs.writeFileSync(uiPath, JSON.stringify(content, null, 2));
            console.log(`✅ Updated ${lang}/ui.json with doughy/auth keys`);
        }
    });
}

updateFiles();
