const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const langs = ['pt', 'es', 'fr', 'it', 'de'];

const uiTranslations = {
    pt: {
        timeline: {
            title: "Cronograma",
            bake_start: "Assar",
            bake_start_desc: "Pré-aqueça forno e pedra 45 min antes.",
            balling: "Bolar & Modelar",
            balling_desc: "Divida a massa em bolas individuais.",
            bulk_start: "Início Fermentação em Bloco",
            bulk_start_desc: "Mantenha a massa coberta em temp. ambiente.",
            mixing_autolise: "Mistura / Autólise",
            mixing_desc: "Integre farinha e água para relaxar glúten.",
            preferment_start: "Iniciar Pré-fermento / Levain",
            preferment_desc: "Ative seu fermento ou prepare Biga/Poolish.",
            temp_warm_warning: "Temp. alta! Cuidado com fermentação rápida."
        },
        costs: {
            title: "Economia de Produção",
            cost_per_unit: "Custo por unidade",
            total_batch_cost: "Custo total",
            overhead: "Taxa (Overhead)"
        },
        onboarding: {
            title: "Atualizar Preferências",
            welcome_title: "Bem-vindo ao DoughLab Pro",
            welcome_desc: "Vamos personalizar sua experiência em 30 segundos.",
            who_are_you: "Conte sobre sua experiência",
            who_are_you_sub: "Isso ajuda a ajustar a dificuldade.",
            experience_level: "Nível de Experiência",
            level_beginner: "Iniciante",
            level_intermediate: "Intermediário",
            level_advanced: "Avançado",
            planning_style: "Estilo de Planejamento",
            style_feeling: "No 'Olhômetro' (Feeling)",
            style_schedule: "Agendado",
            main_goal: "Objetivo Principal",
            continue: "Continuar",
            magic_title: "Veja antes de assar",
            magic_sub: "Visualize a consistência da massa.",
            try_slider: "Teste a hidratação:",
            goal_pizza: "Pizza",
            goal_bread: "Pão",
            goal_sourdough: "Levain",
            goal_pastry: "Confeitaria",
            finish: "Começar"
        },
        batch_detail: {
            title: "Detalhes da Batelada",
            edit: "Editar",
            delete: "Excluir",
            share: "Compartilhar",
            clone: "Clonar",
            rating: "Avaliação",
            notes: "Notas",
            photos: "Fotos",
            timeline: "Cronograma",
            ingredients: "Ingredientes",
            method: "Método",
            actions: {
                duplicate: "Duplicar",
                delete: "Excluir",
                export_pdf: "Exportar PDF",
                repeat: "Repetir",
                share_visual: "Compartilhar Visual"
            }
        }
    },
    es: {
        timeline: {
            title: "Cronograma",
            bake_start: "Hornear",
            bake_start_desc: "Precalentar horno y piedra 45 min antes.",
            balling: "Boleado y Formado",
            balling_desc: "Dividir la masa en bolas individuales.",
            bulk_start: "Inicio Fermentación en Bloque",
            bulk_start_desc: "Mantener masa cubierta a temp. ambiente.",
            mixing_autolise: "Mezcla / Autólisis",
            mixing_desc: "Integrar harina y agua para relajar el gluten.",
            preferment_start: "Iniciar Prefermento / Levain",
            preferment_desc: "Activar masa madre o preparar Biga/Poolish.",
            temp_warm_warning: "¡Temp. alta! Cuidado con fermentación rápida."
        },
        costs: {
            title: "Economía de Producción",
            cost_per_unit: "Costo por unidad",
            total_batch_cost: "Costo total",
            overhead: "Gastos Generales %"
        },
        onboarding: {
            title: "Actualizar Preferencias",
            welcome_title: "Bienvenido a DoughLab Pro",
            welcome_desc: "Personalicemos tu experiencia en 30 segundos.",
            who_are_you: "Cuéntanos de tu experiencia",
            who_are_you_sub: "Ayuda a ajustar la dificultad.",
            experience_level: "Nivel de Experiencia",
            level_beginner: "Principiante",
            level_intermediate: "Intermedio",
            level_advanced: "Avanzado",
            planning_style: "Estilo de Planificación",
            style_feeling: "A ojo (Sensorial)",
            style_schedule: "Programado",
            main_goal: "Objetivo Principal",
            continue: "Continuar",
            magic_title: "Mira antes de hornear",
            magic_sub: "Visualiza la consistencia de la masa.",
            try_slider: "Prueba la hidratación:",
            goal_pizza: "Pizza",
            goal_bread: "Pan",
            goal_sourdough: "Masa Madre",
            goal_pastry: "Pastelería",
            finish: "Empezar"
        },
        batch_detail: {
            title: "Detalles del Lote",
            edit: "Editar",
            delete: "Eliminar",
            share: "Compartir",
            clone: "Clonar",
            rating: "Calificación",
            notes: "Notas",
            photos: "Fotos",
            timeline: "Cronograma",
            ingredients: "Ingredientes",
            method: "Método",
            actions: {
                duplicate: "Duplicar",
                delete: "Eliminar",
                export_pdf: "Exportar PDF",
                repeat: "Repetir",
                share_visual: "Compartir Visual"
            }
        }
    },
    fr: {
        timeline: {
            title: "Calendrier",
            bake_start: "Cuisson",
            bake_start_desc: "Préchauffer four et pierre 45 min avant.",
            balling: "Boulage & Façonnage",
            balling_desc: "Diviser la pâte en pâtons.",
            bulk_start: "Début Pointage (Vrac)",
            bulk_start_desc: "Garder la pâte couverte à temp. ambiante.",
            mixing_autolise: "Frasage / Autolyse",
            mixing_desc: "Mélanger eau et farine pour détendre le gluten.",
            preferment_start: "Démarrer Pré-ferment / Levain",
            preferment_desc: "Activer levain ou préparer Biga/Poolish.",
            temp_warm_warning: "Temp. élevée ! Attention ferment. rapide."
        },
        costs: {
            title: "Économie de Production",
            cost_per_unit: "Coût par unité",
            total_batch_cost: "Coût total",
            overhead: "Frais Généraux %"
        },
        onboarding: {
            title: "Mettre à jour les préférences",
            welcome_title: "Bienvenue sur DoughLab Pro",
            welcome_desc: "Personnalisons votre expérience en 30 secondes.",
            who_are_you: "Parlez-nous de votre expérience",
            who_are_you_sub: "Cela aide à ajuster la difficulté.",
            experience_level: "Niveau d'Expérience",
            level_beginner: "Débutant",
            level_intermediate: "Intermédiaire",
            level_advanced: "Avancé",
            planning_style: "Style de Planification",
            style_feeling: "Au feeling",
            style_schedule: "Planifié",
            main_goal: "Objectif Principal",
            continue: "Continuer",
            magic_title: "Voir avant de cuire",
            magic_sub: "Visualisez la consistance de la pâte.",
            try_slider: "Testez l'hydratation :",
            goal_pizza: "Pizza",
            goal_bread: "Pain",
            goal_sourdough: "Levain",
            goal_pastry: "Pâtisserie",
            finish: "Commencer"
        },
        batch_detail: {
            title: "Détails du Lot",
            edit: "Modifier",
            delete: "Supprimer",
            share: "Partager",
            clone: "Cloner",
            rating: "Note",
            notes: "Notes",
            photos: "Photos",
            timeline: "Calendrier",
            ingredients: "Ingrédients",
            method: "Méthode",
            actions: {
                duplicate: "Dupliquer",
                delete: "Supprimer",
                export_pdf: "Exporter PDF",
                repeat: "Répéter",
                share_visual: "Partager Visuel"
            }
        }
    },
    it: {
        timeline: {
            title: "Cronoprogramma",
            bake_start: "Cottura",
            bake_start_desc: "Preriscaldare forno e pietra 45 min prima.",
            balling: "Staglio (Formatura)",
            balling_desc: "Dividere l'impasto in panetti.",
            bulk_start: "Inizio Puntata (Massa)",
            bulk_start_desc: "Coprire l'impasto a temp. ambiente.",
            mixing_autolise: "Impasto / Autolisi",
            mixing_desc: "Unire farina e acqua per rilassare il glutine.",
            preferment_start: "Inizio Pre-fermento / Lievito",
            preferment_desc: "Attivare lievito o preparare Biga/Poolish.",
            temp_warm_warning: "Temp. alta! Attenzione alla lievitazione veloce."
        },
        costs: {
            title: "Economia di Produzione",
            cost_per_unit: "Costo per unità",
            total_batch_cost: "Costo totale",
            overhead: "Spese Generali %"
        },
        onboarding: {
            title: "Aggiorna Preferenze",
            welcome_title: "Benvenuto su DoughLab Pro",
            welcome_desc: "Personalizziamo la tua esperienza in 30 secondi.",
            who_are_you: "Raccontaci la tua esperienza",
            who_are_you_sub: "Aiuta a regolare la difficoltà.",
            experience_level: "Livello di Esperienza",
            level_beginner: "Principiante",
            level_intermediate: "Intermedio",
            level_advanced: "Avanzato",
            planning_style: "Stile di Pianificazione",
            style_feeling: "A occhio (Sensoriale)",
            style_schedule: "Programmato",
            main_goal: "Obiettivo Principale",
            continue: "Continua",
            magic_title: "Vedi prima di cuocere",
            magic_sub: "Visualizza la consistenza dell'impasto.",
            try_slider: "Prova l'idratazione:",
            goal_pizza: "Pizza",
            goal_bread: "Pane",
            goal_sourdough: "Lievito Madre",
            goal_pastry: "Pasticceria",
            finish: "Inizia"
        },
        batch_detail: {
            title: "Dettagli Impasto",
            edit: "Modifica",
            delete: "Elimina",
            share: "Condividi",
            clone: "Clona",
            rating: "Valutazione",
            notes: "Note",
            photos: "Foto",
            timeline: "Cronoprogramma",
            ingredients: "Ingredienti",
            method: "Metodo",
            actions: {
                duplicate: "Duplica",
                delete: "Elimina",
                export_pdf: "Esporta PDF",
                repeat: "Ripeti",
                share_visual: "Condividi Immagine"
            }
        }
    },
    de: {
        timeline: {
            title: "Zeitplan",
            bake_start: "Backen",
            bake_start_desc: "Ofen und Stein 45 Min. vorheizen.",
            balling: "Portionieren & Formen",
            balling_desc: "Teig in einzelne Ballen teilen.",
            bulk_start: "Start Stockgare",
            bulk_start_desc: "Teig abgedeckt bei Raumtemp. ruhen lassen.",
            mixing_autolise: "Mischen / Autolyse",
            mixing_desc: "Mehl und Wasser mischen, Gluten entspannen.",
            preferment_start: "Vorteig / Sauerteig starten",
            preferment_desc: "Anstellgut aktivieren oder Biga/Poolish ansetzen.",
            temp_warm_warning: "Hohe Temp.! Achtung schnelle Gärung."
        },
        costs: {
            title: "Produktionskosten",
            cost_per_unit: "Kosten pro Einheit",
            total_batch_cost: "Gesamtkosten",
            overhead: "Gemeinkosten %"
        },
        onboarding: {
            title: "Einstellungen aktualisieren",
            welcome_title: "Willkommen bei DoughLab Pro",
            welcome_desc: "Lassen Sie uns Ihre Erfahrung in 30 Sekunden anpassen.",
            who_are_you: "Erzählen Sie uns von Ihrer Erfahrung",
            who_are_you_sub: "Hilft bei der Anpassung der Schwierigkeit.",
            experience_level: "Erfahrungsstufe",
            level_beginner: "Anfänger",
            level_intermediate: "Fortgeschritten",
            level_advanced: "Experte",
            planning_style: "Planungsstil",
            style_feeling: "Nach Gefühl",
            style_schedule: "Geplant",
            main_goal: "Hauptziel",
            continue: "Weiter",
            magic_title: "Vor dem Backen sehen",
            magic_sub: "Visualisieren Sie die Teigkonsistenz.",
            try_slider: "Hydratation testen:",
            goal_pizza: "Pizza",
            goal_bread: "Brot",
            goal_sourdough: "Sauerteig",
            goal_pastry: "Gebäck",
            finish: "Starten"
        },
        batch_detail: {
            title: "Chargendetails",
            edit: "Bearbeiten",
            delete: "Löschen",
            share: "Teilen",
            clone: "Klonen",
            rating: "Bewertung",
            notes: "Notizen",
            photos: "Fotos",
            timeline: "Zeitplan",
            ingredients: "Zutaten",
            method: "Methode",
            actions: {
                duplicate: "Duplizieren",
                delete: "Löschen",
                export_pdf: "PDF exportieren",
                repeat: "Wiederholen",
                share_visual: "Bild teilen"
            }
        }
    }
};

function updateUI() {
    console.log('🎨 Updating UI sections (Timeline, Onboarding, Batches)...');

    langs.forEach(lang => {
        const filePath = path.join(localesDir, lang, 'ui.json');
        if (!fs.existsSync(filePath)) {
            console.warn(`Warning: ui.json not found for ${lang}`);
            return;
        }

        let content;
        try {
            content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
            console.error(`Error parsing ${lang}/ui.json`);
            return;
        }

        const updates = uiTranslations[lang];
        if (updates) {
            if (updates.timeline) content.timeline = { ...content.timeline, ...updates.timeline };
            if (updates.onboarding) content.onboarding = { ...content.onboarding, ...updates.onboarding };
            if (updates.batch_detail) content.batch_detail = { ...content.batch_detail, ...updates.batch_detail };
            if (updates.costs) content.costs = { ...content.costs, ...updates.costs };

            fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
            console.log(`✅ Updated ${lang}/ui.json`);
        }
    });
}

updateUI();
