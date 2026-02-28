const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const langs = ['pt', 'es', 'fr', 'it', 'de'];

const commonTranslations = {
    pt: {
        countries: {
            usa: "EUA",
            italy: "Itália",
            france: "França",
            germany: "Alemanha",
            mexico: "México",
            brazil: "Brasil",
            sweden: "Suécia",
            austria: "Áustria",
            switzerland: "Suíça",
            uk: "Reino Unido",
            other: "Outro",
            all: "Todos"
        },
        doughy: {
            welcome: "Olá Chef! Sou o Doughy 🧑‍🍳, seu assistente inteligente de panificação. Estou aqui para ajudar a criar receitas perfeitas, resolver problemas e aprender técnicas avançadas. Como posso ajudar hoje?",
            help: "Ajuda!",
            help_text: "Preciso de ajuda com minha massa",
            recipe: "Receita",
            recipe_text: "Quero criar uma receita",
            learn: "Aprender",
            learn_text: "Quero entender sobre panificação",
            error: "Desculpe, tive um problema ao processar sua pergunta. Tente novamente.",
            rescue_tool: "Ferramenta de Resgate",
            rescue_tool_text: "Abrir diagnóstico",
            tips: "Dicas",
            tips_text: "Dicas para evitar problemas"
        }
    },
    es: {
        countries: {
            usa: "EE. UU.",
            italy: "Italia",
            france: "Francia",
            germany: "Alemania",
            mexico: "México",
            brazil: "Brasil",
            sweden: "Suecia",
            austria: "Austria",
            switzerland: "Suiza",
            uk: "Reino Unido",
            other: "Otro",
            all: "Todos"
        },
        doughy: {
            welcome: "¡Hola Chef! Soy Doughy 🧑‍🍳, tu asistente inteligente de panadería. Estoy aquí para ayudarte a crear recetas perfectas, resolver problemas y aprender técnicas avanzadas. ¿Cómo puedo ayudarte hoy?",
            help: "¡Ayuda!",
            help_text: "Necesito ayuda con mi masa",
            recipe: "Receta",
            recipe_text: "Quiero crear una receta",
            learn: "Aprender",
            learn_text: "Quiero entender sobre panadería",
            error: "Lo siento, tuve un problema al procesar tu pregunta. Inténtalo de nuevo.",
            rescue_tool: "Herramienta de Rescate",
            rescue_tool_text: "Abrir diagnóstico",
            tips: "Consejos",
            tips_text: "Consejos para evitar problemas"
        }
    },
    fr: {
        countries: {
            usa: "États-Unis",
            italy: "Italie",
            france: "France",
            germany: "Allemagne",
            mexico: "Mexique",
            brazil: "Brésil",
            sweden: "Suède",
            austria: "Autriche",
            switzerland: "Suisse",
            uk: "Royaume-Uni",
            other: "Autre",
            all: "Tous"
        },
        doughy: {
            welcome: "Bonjour Chef ! Je suis Doughy 🧑‍🍳, votre assistant boulanger intelligent. Je suis là pour vous aider à créer des recettes parfaites, résoudre des problèmes et apprendre des techniques avancées. Comment puis-je vous aider aujourd'hui ?",
            help: "Aide !",
            help_text: "J'ai besoin d'aide avec ma pâte",
            recipe: "Recette",
            recipe_text: "Je veux créer une recette",
            learn: "Apprendre",
            learn_text: "Je veux comprendre la boulangerie",
            error: "Désolé, j'ai eu un problème pour traiter votre question. Veuillez réessayer.",
            rescue_tool: "Outil de Sauvetage",
            rescue_tool_text: "Ouvrir le diagnostic",
            tips: "Astuces",
            tips_text: "Astuces pour éviter les problèmes"
        }
    },
    it: {
        countries: {
            usa: "USA",
            italy: "Italia",
            france: "Francia",
            germany: "Germania",
            mexico: "Messico",
            brazil: "Brasile",
            sweden: "Svezia",
            austria: "Austria",
            switzerland: "Svizzera",
            uk: "Regno Unito",
            other: "Altro",
            all: "Tutti"
        },
        doughy: {
            welcome: "Ciao Chef! Sono Doughy 🧑‍🍳, il tuo assistente intelligente per la panificazione. Sono qui per aiutarti a creare ricette perfette, risolvere problemi e imparare tecniche avanzate. Come posso aiutarti oggi?",
            help: "Aiuto!",
            help_text: "Ho bisogno di aiuto con il mio impasto",
            recipe: "Ricetta",
            recipe_text: "Voglio creare una ricetta",
            learn: "Imparare",
            learn_text: "Voglio capire la panificazione",
            error: "Scusa, ho avuto un problema nell'elaborare la tua domanda. Riprova.",
            rescue_tool: "Strumento di Salvataggio",
            rescue_tool_text: "Apri diagnostica",
            tips: "Consigli",
            tips_text: "Consigli per evitare problemi"
        }
    },
    de: {
        countries: {
            usa: "USA",
            italy: "Italien",
            france: "Frankreich",
            germany: "Deutschland",
            mexico: "Mexiko",
            brazil: "Brasilien",
            sweden: "Schweden",
            austria: "Österreich",
            switzerland: "Schweiz",
            uk: "Vereinigtes Königreich",
            other: "Andere",
            all: "Alle"
        },
        doughy: {
            welcome: "Hallo Chef! Ich bin Doughy 🧑‍🍳, dein intelligenter Backassistent. Ich bin hier, um dir zu helfen, perfekte Rezepte zu erstellen, Probleme zu lösen und fortgeschrittene Techniken zu lernen. Wie kann ich dir heute helfen?",
            help: "Hilfe!",
            help_text: "Ich brauche Hilfe mit meinem Teig",
            recipe: "Rezept",
            recipe_text: "Ich möchte ein Rezept erstellen",
            learn: "Lernen",
            learn_text: "Ich möchte etwas über das Backen verstehen",
            error: "Entschuldigung, ich hatte ein Problem bei der Verarbeitung deiner Frage. Bitte versuche es erneut.",
            rescue_tool: "Rettungstool",
            rescue_tool_text: "Diagnose öffnen",
            tips: "Tipps",
            tips_text: "Tipps zur Vermeidung von Problemen"
        }
    }
};

function updateCommon() {
    console.log('🌍 Refining common translations...');
    langs.forEach(lang => {
        const filePath = path.join(localesDir, lang, 'common.json');
        if (fs.existsSync(filePath)) {
            let content;
            try {
                content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            } catch (e) {
                console.error(`Error reading ${lang}/common.json`);
                return;
            }

            const updates = commonTranslations[lang];
            if (updates) {
                // Update countries
                if (updates.countries) {
                    content.countries = { ...content.countries, ...updates.countries };
                }
                // Update doughy
                if (updates.doughy) {
                    content.doughy = { ...content.doughy, ...updates.doughy };
                }

                fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
                console.log(`✅ Refined ${lang}/common.json`);
            }
        }
    });
}

updateCommon();
