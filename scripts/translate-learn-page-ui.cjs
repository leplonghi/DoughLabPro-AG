const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const languages = ['pt', 'es', 'fr', 'it', 'de', 'en'];

const learnPageUI = {
    master_the: {
        en: "Master the", pt: "Domine a", es: "Domina la", fr: "Maîtrisez la", it: "Padroneggia la", de: "Meistern Sie die"
    },
    science_of_dough: {
        en: "Science", pt: "Ciência", es: "Ciencia", fr: "Science", it: "Scienza", de: "Wissenschaft"
    },
    of_dough: {
        en: "of Dough", pt: "da Massa", es: "de la Masa", fr: "de la Pâte", it: "dell'Impasto", de: "des Teigs"
    },
    hero_subtitle: {
        en: "Elevate your craft with precise, peer-reviewed articles. From flour chemistry to thermodynamic baking profiles.",
        pt: "Eleve seu ofício com artigos precisos e revisados por pares. Da química da farinha aos perfis termodinâmicos de cozimento.",
        es: "Eleva tu oficio con artículos precisos y revisados por pares. De la química de la harina a los perfiles termodinámicos de horneado.",
        fr: "Élevez votre art avec des articles précis et révisés par des pairs. De la chimie de la farine aux profils thermodynamiques de cuisson.",
        it: "Eleva la tua arte con articoli precisi e revisionati da esperti. Dalla chimica della farina ai profili termodinamici di cottura.",
        de: "Erhöhen Sie Ihre Kunst mit präzisen, von Experten geprüften Artikeln. Von der Mehlchemie bis zu thermodynamischen Backprofilen."
    },
    knowledge_tracks: {
        en: "Knowledge Tracks", pt: "Trilhas de Conhecimento", es: "Pistas de Conocimiento", fr: "Parcours de Connaissances", it: "Percorsi di Conoscenza", de: "Wissenspfade"
    },
    min_read: {
        en: "min read", pt: "min de leitura", es: "min de lectura", fr: "min de lecture", it: "min di lettura", de: "Min. Lesezeit"
    },
    library_cta_description: {
        en: "Dive deep into our complete collection of scientific articles, guides, and baking methodologies tailored for the precision-obsessed Baker.",
        pt: "Mergulhe fundo em nossa coleção completa de artigos científicos, guias e metodologias de panificação para o padeiro obcecado por precisão.",
        es: "Sumérgete en nuestra colección completa de artículos científicos, guías y metodologías de horneado diseñadas para el panadero obsesionado con la precisión.",
        fr: "Plongez dans notre collection complète d'articles scientifiques, de guides et de méthodologies de boulangerie conçues pour le boulanger obsédé par la précision.",
        it: "Immergiti nella nostra collezione completa di articoli scientifici, guide e metodologie di panificazione su misura per il panettiere ossessionato dalla precisione.",
        de: "Tauchen Sie tief in unsere vollständige Sammlung wissenschaftlicher Artikel, Anleitungen und Backmethoden ein, die für den präzisionsbesessenen Bäcker maßgeschneidert sind."
    },
    ctrl_k: {
        en: "CTRL K", pt: "CTRL K", es: "CTRL K", fr: "CTRL K", it: "CTRL K", de: "STRG K"
    },
    back_to_academy: {
        en: "Back to Academy", pt: "Voltar à Academia", es: "Volver a la Academia", fr: "Retour à l'Académie", it: "Torna all'Accademia", de: "Zurück zur Akademie"
    },
    back_to_learn: {
        en: "Back to Learn", pt: "Voltar ao Aprendizado", es: "Volver a Aprender", fr: "Retour à l'Apprentissage", it: "Torna all'Apprendimento", de: "Zurück zum Lernen"
    },
    article_not_found: {
        en: "Article Not Found", pt: "Artigo Não Encontrado", es: "Artículo No Encontrado", fr: "Article Non Trouvé", it: "Articolo Non Trovato", de: "Artikel Nicht Gefunden"
    },
    all_articles: {
        en: "All Articles", pt: "Todos os Artigos", es: "Todos los Artículos", fr: "Tous les Articles", it: "Tutti gli Articoli", de: "Alle Artikel"
    },
    no_results_found: {
        en: "No results found", pt: "Nenhum resultado encontrado", es: "No se encontraron resultados", fr: "Aucun résultat trouvé", it: "Nessun risultato trovato", de: "Keine Ergebnisse gefunden"
    },
    search_results_for: {
        en: "Search results for", pt: "Resultados da pesquisa para", es: "Resultados de búsqueda para", fr: "Résultats de recherche pour", it: "Risultati di ricerca per", de: "Suchergebnisse für"
    },
    results: {
        en: "results", pt: "resultados", es: "resultados", fr: "résultats", it: "risultati", de: "Ergebnisse"
    },
    glossary: {
        en: "Glossary", pt: "Glossário", es: "Glosario", fr: "Glossaire", it: "Glossario", de: "Glossar"
    }
};

function updateLearnFiles() {
    languages.forEach(lang => {
        const learnPath = path.join(localesDir, lang, 'learn.json');
        let content = {};
        if (fs.existsSync(learnPath)) {
            content = JSON.parse(fs.readFileSync(learnPath, 'utf8'));
        }

        // Add all page-level UI keys
        Object.keys(learnPageUI).forEach(key => {
            content[key] = learnPageUI[key][lang] || learnPageUI[key].en;
        });

        fs.writeFileSync(learnPath, JSON.stringify(content, null, 2));
        console.log(`✅ Updated ${lang}/learn.json with page UI keys`);
    });
}

updateLearnFiles();
