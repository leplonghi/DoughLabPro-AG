const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const languages = ['pt', 'es', 'fr', 'it', 'de', 'en'];

const tracksData = {
    fundamentals: {
        title: { en: "Fundamentals", pt: "Fundamentos", es: "Fundamentos", fr: "Fondamentaux", it: "Fondamentali", de: "Grundlagen" },
        description: { en: "Core Knowledge", pt: "Conhecimento Essencial", es: "Conocimiento Básico", fr: "Connaissances de Base", it: "Conoscenze di Base", de: "Basiswissen" }
    },
    process: {
        title: { en: "The Process", pt: "O Processo", es: "El Proceso", fr: "Le Processus", it: "Il Processo", de: "Der Prozess" },
        description: { en: "Techniques & Methods", pt: "Técnicas e Métodos", es: "Técnicas y Métodos", fr: "Techniques et Méthodes", it: "Tecniche e Metodi", de: "Techniken und Methoden" }
    },
    science: {
        title: { en: "Deep Science", pt: "Ciência Profunda", es: "Ciencia Profunda", fr: "Science Approfondie", it: "Scienza Approfondita", de: "Tiefenwissenschaft" },
        description: { en: "Physics & Chemistry", pt: "Física e Química", es: "Física y Química", fr: "Physique et Chimie", it: "Fisica e Chimica", de: "Physik und Chemie" }
    },
    troubleshooting: {
        title: { en: "The Clinic", pt: "A Clínica", es: "La Clínica", fr: "La Clinique", it: "La Clinica", de: "Die Klinik" },
        description: { en: "Diagnostics & Fixes", pt: "Diagnósticos e Soluções", es: "Diagnósticos y Soluciones", fr: "Diagnostics et Solutions", it: "Diagnostica e Soluzioni", de: "Diagnostik und Lösungen" }
    }
};

const categoriesData = {
    ingredient_science: {
        title: { en: "Ingredient Science", pt: "Ciência dos Ingredientes", es: "Ciencia de Ingredientes", fr: "Science des Ingrédients", it: "Scienza degli Ingredienti", de: "Zutatenwissenschaft" },
        description: { en: "Explore the chemistry of flour, water, salts, fats and other key ingredients.", pt: "Explore a química da farinha, água, sal, gorduras e outros ingredientes chave.", es: "Explora la química de la harina, agua, sal, grasas y otros ingredientes clave.", fr: "Explorez la chimie de la farine, de l'eau, du sel, des graisses et d'autres ingrédients clés.", it: "Esplora la chimica della farina, dell'acqua, del sale, dei grassi e di altri ingredienti chiave.", de: "Entdecken Sie die Chemie von Mehl, Wasser, Salz, Fetten und anderen wichtigen Zutaten." }
    },
    dough_science: {
        title: { en: "Dough & Gluten Science", pt: "Ciência da Massa e Glúten", es: "Ciencia de Masa y Gluten", fr: "Science de la Pâte et Gluten", it: "Scienza dell'Impasto e Glutine", de: "Teig- und Glutenwissenschaft" },
        description: { en: "Gluten behavior, rheology, extensibility and dough structure.", pt: "Comportamento do glúten, reologia, extensibilidade e estrutura da massa.", es: "Comportamiento del gluten, reología, extensibilidad y estructura de la masa.", fr: "Comportement du gluten, rhéologie, extensibilité et structure de la pâte.", it: "Comportamento del glutine, reologia, estensibilità e struttura dell'impasto.", de: "Glutenverhalten, Rheologie, Dehnbarkeit und Teigstruktur." }
    },
    fermentation_science: {
        title: { en: "Fermentation Science", pt: "Ciência da Fermentação", es: "Ciencia de Fermentación", fr: "Science de la Fermentation", it: "Scienza della Fermentazione", de: "Fermentationswissenschaft" },
        description: { en: "Fermentation curves, temperature control, preferments and proofing.", pt: "Curvas de fermentação, controle de temperatura, pré-fermentos e crescimento.", es: "Curvas de fermentación, control de temperatura, prefermentos y leudado.", fr: "Courbes de fermentation, contrôle de la température, pré-ferments et levée.", it: "Curve di fermentazione, controllo della temperatura, prefermenti e lievitazione.", de: "Gärungskurven, Temperaturkontrolle, Vorteige und Gärung." }
    },
    baking_science: {
        title: { en: "Baking Science", pt: "Ciência do Cozimento", es: "Ciencia del Horneado", fr: "Science de la Cuisson", it: "Scienza della Cottura", de: "Backwissenschaft" },
        description: { en: "Heat transfer, browning chemistry, crust formation and oven physics.", pt: "Transferência de calor, química de douramento, formação de crosta e física do forno.", es: "Transferencia de calor, química del dorado, formación de corteza y física del horno.", fr: "Transfert de chaleur, chimie du brunissement, formation de la croûte et physique du four.", it: "Trasferimento di calore, chimica della doratura, formazione della crosta e fisica del forno.", de: "Wärmeübertragung, Bräunungschemie, Krustenbildung und Ofenphysik." }
    },
    process_techniques: {
        title: { en: "Process Techniques", pt: "Técnicas de Processo", es: "Técnicas de Proceso", fr: "Techniques de Processus", it: "Tecniche di Processo", de: "Prozesstechniken" },
        description: { en: "Shaping, lamination, balling and handling techniques.", pt: "Modelagem, laminação, boleamento e técnicas de manuseio.", es: "Formado, laminado, boleado y técnicas de manejo.", fr: "Façonnage, laminage, boulage et techniques de manipulation.", it: "Formatura, laminazione, pallinatura e tecniche di manipolazione.", de: "Formgebung, Laminieren, Rundwirken und Handhabungstechniken." }
    },
    troubleshooting: {
        title: { en: "Troubleshooting", pt: "Resolução de Problemas", es: "Solución de Problemas", fr: "Dépannage", it: "Risoluzione Problemi", de: "Fehlerbehebung" },
        description: { en: "Dough diagnostics powered by DoughBot Knowledge.", pt: "Diagnósticos de massa potencializados pelo conhecimento do DoughBot.", es: "Diagnósticos de masa impulsados por el conocimiento de DoughBot.", fr: "Diagnostics de pâte propulsés par les connaissances de DoughBot.", it: "Diagnostica dell'impasto potenziata dalla conoscenza di DoughBot.", de: "Teigdiagnostik unterstützt durch DoughBot-Wissen." }
    }
};

function updateLearnFiles() {
    languages.forEach(lang => {
        const learnPath = path.join(localesDir, lang, 'learn.json');
        let content = {};
        if (fs.existsSync(learnPath)) {
            content = JSON.parse(fs.readFileSync(learnPath, 'utf8'));
        }

        // Add tracks
        if (!content.tracks) content.tracks = {};
        Object.keys(tracksData).forEach(key => {
            content.tracks[key] = {
                title: tracksData[key].title[lang] || tracksData[key].title.en,
                description: tracksData[key].description[lang] || tracksData[key].description.en
            };
        });

        // Add categories
        if (!content.categories) content.categories = {};
        Object.keys(categoriesData).forEach(key => {
            content.categories[key] = {
                title: categoriesData[key].title[lang] || categoriesData[key].title.en,
                description: categoriesData[key].description[lang] || categoriesData[key].description.en
            };
        });

        // Add specific UI keys for LearnHomePage
        content.doughlab_academy = {
            en: "DoughLab Academy",
            pt: "Academia DoughLab",
            es: "Academia DoughLab",
            fr: "Académie DoughLab",
            it: "Accademia DoughLab",
            de: "DoughLab Akademie"
        }[lang] || "DoughLab Academy";

        content.search_placeholder = {
            en: "Search topics, chemical reactions...",
            pt: "Pesquisar tópicos, reações químicas...",
            es: "Buscar temas, reacciones químicas...",
            fr: "Rechercher des sujets, réactions chimiques...",
            it: "Cerca argomenti, reazioni chimiche...",
            de: "Themen, chemische Reaktionen suchen..."
        }[lang] || "Search topics, chemical reactions...";

        content.featured = {
            en: "Featured",
            pt: "Destaque",
            es: "Destacado",
            fr: "En Vedette",
            it: "In Primo Piano",
            de: "Vorgestellt"
        }[lang] || "Featured";

        content.read_article = {
            en: "Read Article",
            pt: "Ler Artigo",
            es: "Leer Artículo",
            fr: "Lire l'Article",
            it: "Leggi Articolo",
            de: "Artikel Lesen"
        }[lang] || "Read Article";

        content.explore_the_full_library = {
            en: "Explore the full library",
            pt: "Explore a biblioteca completa",
            es: "Explora la biblioteca completa",
            fr: "Explorez toute la bibliothèque",
            it: "Esplora l'intera libreria",
            de: "Erkunden Sie die gesamte Bibliothek"
        }[lang] || "Explore the full library";

        content.view_all_articles = {
            en: "View all articles",
            pt: "Ver todos os artigos",
            es: "Ver todos los artículos",
            fr: "Voir tous les articles",
            it: "Vedi tutti gli articoli",
            de: "Alle Artikel anzeigen"
        }[lang] || "View all articles";


        fs.writeFileSync(learnPath, JSON.stringify(content, null, 2));
        console.log(`✅ Updated ${lang}/learn.json with structured data`);
    });
}

updateLearnFiles();
