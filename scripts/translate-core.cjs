
const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');

const commonTranslations = {
    pt: {
        add: "Adicionar",
        back: "Voltar",
        cancel: "Cancelar",
        close: "Fechar",
        delete: "Excluir",
        details: "Detalhes",
        edit: "Editar",
        finish: "Concluir",
        next: "Próximo",
        save: "Salvar",
        save_changes: "Salvar Alterações",
        sign_in: "Entrar",
        skip: "Pular",
        loading: "Carregando...",
        thinking: "Pensando...",
        bread: "Pão",
        pizza: "Pizza",
        dough: "Massa",
        flour_183: "Farinha",
        water_184: "Água",
        salt_232: "Sal",
        yeast_233: "Fermento",
        oil: "Azeite/Óleo",
        sugar_234: "Açúcar",
        total_mass_180: "Massa Total",
        ingredients: "Ingredientes",
        general: { the_scientific_process: "O Processo Científico" },
        phase: "Fase",
        level: "Nível",
        countries: {
            usa: "EUA", italy: "Itália", france: "França", germany: "Alemanha",
            brazil: "Brasil", other: "Outro", all: "Todos"
        },
        doughy: {
            welcome: "Olá Chef! Sou o Doughy 🧑‍🍳, seu assistente inteligente. Estou aqui para ajudar você a criar receitas perfeitas e resolver problemas.",
            help: "Ajuda!",
            recipe: "Receita",
            learn: "Aprender",
            tips: "Dicas"
        }
    },
    es: {
        add: "Añadir",
        back: "Atrás",
        cancel: "Cancelar",
        close: "Cerrar",
        delete: "Eliminar",
        details: "Detalles",
        edit: "Editar",
        finish: "Finalizar",
        next: "Siguiente",
        save: "Guardar",
        save_changes: "Guardar Cambios",
        sign_in: "Iniciar Sesión",
        skip: "Omitir",
        loading: "Cargando...",
        thinking: "Pensando...",
        bread: "Pan",
        pizza: "Pizza",
        dough: "Masa",
        flour_183: "Harina",
        water_184: "Agua",
        salt_232: "Sal",
        yeast_233: "Levadura",
        oil: "Aceite",
        sugar_234: "Azúcar",
        total_mass_180: "Masa Total",
        ingredients: "Ingredientes",
        general: { the_scientific_process: "El Proceso Científico" },
        phase: "Fase",
        level: "Nivel",
        countries: {
            usa: "EE.UU.", italy: "Italia", france: "Francia", germany: "Alemania",
            brazil: "Brasil", other: "Otro", all: "Todos"
        },
        doughy: {
            welcome: "¡Hola Chef! Soy Doughy 🧑‍🍳, tu asistente inteligente. Estoy aquí para ayudarte a crear recetas perfectas y resolver problemas.",
            help: "¡Ayuda!",
            recipe: "Receta",
            learn: "Aprender",
            tips: "Consejos"
        }
    },
    fr: {
        add: "Ajouter",
        back: "Retour",
        cancel: "Annuler",
        close: "Fermer",
        delete: "Supprimer",
        details: "Détails",
        edit: "Modifier",
        finish: "Terminer",
        next: "Suivant",
        save: "Enregistrer",
        save_changes: "Enregistrer les modifications",
        sign_in: "Se connecter",
        skip: "Passer",
        loading: "Chargement...",
        thinking: "Réflexion...",
        bread: "Pain",
        pizza: "Pizza",
        dough: "Pâte",
        flour_183: "Farine",
        water_184: "Eau",
        salt_232: "Sel",
        yeast_233: "Levure",
        oil: "Huile",
        sugar_234: "Sucre",
        total_mass_180: "Masse Totale",
        ingredients: "Ingrédients",
        general: { the_scientific_process: "Le Processus Scientifique" },
        phase: "Phase",
        level: "Niveau",
        countries: {
            usa: "USA", italy: "Italie", france: "France", germany: "Allemagne",
            brazil: "Brésil", other: "Autre", all: "Tous"
        },
        doughy: {
            welcome: "Bonjour Chef! Je suis Doughy 🧑‍🍳, votre assistant intelligent. Je suis là pour vous aider à créer des recettes parfaites.",
            help: "Aide!",
            recipe: "Recette",
            learn: "Apprendre",
            tips: "Conseils"
        }
    },
    it: {
        add: "Aggiungi",
        back: "Indietro",
        cancel: "Annulla",
        close: "Chiudi",
        delete: "Elimina",
        details: "Dettagli",
        edit: "Modifica",
        finish: "Fine",
        next: "Avanti",
        save: "Salva",
        save_changes: "Salva Modifiche",
        sign_in: "Accedi",
        skip: "Salta",
        loading: "Caricamento...",
        thinking: "Elaborazione...",
        bread: "Pane",
        pizza: "Pizza",
        dough: "Impasto",
        flour_183: "Farina",
        water_184: "Acqua",
        salt_232: "Sale",
        yeast_233: "Lievito",
        oil: "Olio",
        sugar_234: "Zucchero",
        total_mass_180: "Massa Totale",
        ingredients: "Ingredienti",
        general: { the_scientific_process: "Il Processo Scientifico" },
        phase: "Fase",
        level: "Livello",
        countries: {
            usa: "USA", italy: "Italia", france: "Francia", germany: "Germania",
            brazil: "Brasile", other: "Altro", all: "Tutti"
        },
        doughy: {
            welcome: "Ciao Chef! Sono Doughy 🧑‍🍳, il tuo assistente intelligente. Sono qui per aiutarti a creare ricette perfette.",
            help: "Aiuto!",
            recipe: "Ricetta",
            learn: "Imparare",
            tips: "Consigli"
        }
    },
    de: {
        add: "Hinzufügen",
        back: "Zurück",
        cancel: "Abbrechen",
        close: "Schließen",
        delete: "Löschen",
        details: "Details",
        edit: "Bearbeiten",
        finish: "Fertig",
        next: "Weiter",
        save: "Speichern",
        save_changes: "Änderungen speichern",
        sign_in: "Anmelden",
        skip: "Überspringen",
        loading: "Laden...",
        thinking: "Nachdenken...",
        bread: "Brot",
        pizza: "Pizza",
        dough: "Teig",
        flour_183: "Mehl",
        water_184: "Wasser",
        salt_232: "Salz",
        yeast_233: "Hefe",
        oil: "Öl",
        sugar_234: "Zucker",
        total_mass_180: "Gesamtmasse",
        ingredients: "Zutaten",
        general: { the_scientific_process: "Der wissenschaftliche Prozess" },
        phase: "Phase",
        level: "Stufe",
        countries: {
            usa: "USA", italy: "Italien", france: "Frankreich", germany: "Deutschland",
            brazil: "Brasilien", other: "Andere", all: "Alle"
        },
        doughy: {
            welcome: "Hallo Chef! Ich bin Doughy 🧑‍🍳, Ihr intelligenter Assistent. Ich bin hier, um Ihnen zu helfen.",
            help: "Hilfe!",
            recipe: "Rezept",
            learn: "Lernen",
            tips: "Tipps"
        }
    }
};

const uiTranslations = {
    pt: {
        dashboard: {
            greeting_morning: "Bom dia, {name}",
            greeting_afternoon: "Boa tarde, {name}",
            greeting_evening: "Boa noite, {name}",
            action_new_dough: "Nova Massa"
        },
        auth: {
            login: "Entrar",
            sign_up: "Cadastrar",
            sign_out: "Sair",
            guest_user: "Visitante"
        },
        community_page: {
            title: "Comunidade",
            subtitle: "Receitas compartilhadas por outros padeiros."
        },
        nav: {
            settings: "Configurações",
            profile: "Perfil",
            notifications: "Notificações",
            help: "Ajuda",
            legal: "Legal"
        }
    },
    es: {
        dashboard: {
            greeting_morning: "Buenos días, {name}",
            greeting_afternoon: "Buenas tardes, {name}",
            greeting_evening: "Buenas noches, {name}",
            action_new_dough: "Nueva Masa"
        },
        auth: {
            login: "Entrar",
            sign_up: "Registrarse",
            sign_out: "Cerrar Sesión",
            guest_user: "Invitado"
        },
        community_page: {
            title: "Comunidad",
            subtitle: "Recetas compartidas por otros panaderos."
        },
        nav: {
            settings: "Ajustes",
            profile: "Perfil",
            notifications: "Notificaciones",
            help: "Ayuda",
            legal: "Legal"
        }
    },
    fr: {
        dashboard: {
            greeting_morning: "Bonjour, {name}",
            greeting_afternoon: "Bonne après-midi, {name}",
            greeting_evening: "Bonsoir, {name}",
            action_new_dough: "Nouvelle Pâte"
        },
        auth: {
            login: "Connexion",
            sign_up: "S'inscrire",
            sign_out: "Déconnexion",
            guest_user: "Invité"
        },
        community_page: {
            title: "Communauté",
            subtitle: "Recettes partagées par d'autres boulangers."
        },
        nav: {
            settings: "Paramètres",
            profile: "Profil",
            notifications: "Notifications",
            help: "Aide",
            legal: "Légal"
        }
    },
    it: {
        dashboard: {
            greeting_morning: "Buongiorno, {name}",
            greeting_afternoon: "Buon pomeriggio, {name}",
            greeting_evening: "Buonasera, {name}",
            action_new_dough: "Nuovo Impasto"
        },
        auth: {
            login: "Accedi",
            sign_up: "Iscriviti",
            sign_out: "Disconnetti",
            guest_user: "Ospite"
        },
        community_page: {
            title: "Comunità",
            subtitle: "Ricette condivise da altri panettieri."
        },
        nav: {
            settings: "Impostazioni",
            profile: "Profilo",
            notifications: "Notifiche",
            help: "Aiuto",
            legal: "Legale"
        }
    },
    de: {
        dashboard: {
            greeting_morning: "Guten Morgen, {name}",
            greeting_afternoon: "Guten Tag, {name}",
            greeting_evening: "Guten Abend, {name}",
            action_new_dough: "Neuer Teig"
        },
        auth: {
            login: "Anmelden",
            sign_up: "Registrieren",
            sign_out: "Abmelden",
            guest_user: "Gast"
        },
        community_page: {
            title: "Community",
            subtitle: "Rezepte von anderen Bäckern geteilt."
        },
        nav: {
            settings: "Einstellungen",
            profile: "Profil",
            notifications: "Benachrichtigungen",
            help: "Hilfe",
            legal: "Rechtliches"
        }
    }
};

function updateFiles() {
    ['pt', 'es', 'fr', 'it', 'de'].forEach(lang => {
        // 1. Update common.json
        const commonPath = path.join(localesDir, lang, 'common.json');
        if (fs.existsSync(commonPath)) {
            const content = JSON.parse(fs.readFileSync(commonPath, 'utf8'));
            const newTranslations = commonTranslations[lang];

            // Merge top-level keys
            Object.assign(content, newTranslations);

            // Special case for 'countries' and 'doughy' nested objects
            if (newTranslations.countries) {
                content.countries = { ...content.countries, ...newTranslations.countries };
            }
            if (newTranslations.doughy) {
                content.doughy = { ...content.doughy, ...newTranslations.doughy };
            }

            fs.writeFileSync(commonPath, JSON.stringify(content, null, 2));
            console.log(`Updated ${lang}/common.json`);
        }

        // 2. Update ui.json
        const uiPath = path.join(localesDir, lang, 'ui.json');
        if (fs.existsSync(uiPath)) {
            const content = JSON.parse(fs.readFileSync(uiPath, 'utf8'));
            const newTranslations = uiTranslations[lang];

            if (newTranslations.dashboard) {
                content.dashboard = { ...content.dashboard, ...newTranslations.dashboard };
            }
            if (newTranslations.auth) {
                content.auth = { ...content.auth, ...newTranslations.auth };
            }
            if (newTranslations.community_page) {
                content.community_page = { ...content.community_page, ...newTranslations.community_page };
            }

            // Manually map nav items if they don't exist in nested form (assuming they might be flat or nested differently in legacy files)
            // But for our new clean files, we can just inject them.
            // CHECK: In en/common.json, nav items were actually "common.nav.settings" in the UserMenu.tsx, 
            // but 'common.json' file usually holds 'common' namespace keys. 
            // Actually the code uses t('common.nav.settings').
            // Let's add 'nav' to common.json instead of ui.json to match typical structure if that's where they are called.
            // Wait, looking at UserMenu.tsx in step 73: t('common.nav.settings'). 
            // So 'nav' object should be in 'common.json'.

            const commonPathAgain = path.join(localesDir, lang, 'common.json');
            const commonContent = JSON.parse(fs.readFileSync(commonPathAgain, 'utf8'));
            commonContent.nav = { ...commonContent.nav, ...newTranslations.nav }; // Inject nav into common
            fs.writeFileSync(commonPathAgain, JSON.stringify(commonContent, null, 2));

            fs.writeFileSync(uiPath, JSON.stringify(content, null, 2));
            console.log(`Updated ${lang}/ui.json`);
        }
    });
}

updateFiles();
