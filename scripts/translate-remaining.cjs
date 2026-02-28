const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const languages = ['pt', 'es', 'fr', 'it', 'de'];

const translations = {
    pt: {
        heritage_and_cultural_science: "Patrimônio & Ciência Cultural",
        cultural_significance: "Significado Cultural",
        sensory_intelligence: "Inteligência Sensorial",
        technical_blueprint: "Projeto Técnico (Reologia)",
        flour_and_dough_property: "Propriedade da Farinha e Massa",
        thermal_thermodynamics: "Termodinâmica Térmica",
        heat_transfer: "Transferência de Calor",
        crust_reaction: "Reação da Casca",
        structure_crumb: "Estrutura",
        scientific_process: "O Processo Científico",
        lab_education_and_pro_logic: "Educação de Lab & Lógica Pro",
        comparative_analysis: "Análise Comparativa",
        practical_qa: "Perguntas e Respostas Práticas",
        method_suitability_logic: "Lógica de Adequação do Método",
        critical_lab_watchouts: "Alertas Críticos de Laboratório",
        global_presence_and_legal_logic: "Presença Global & Lógica Legal",
        geographic_footprint: "Pegada Geográfica",
        regulatory_and_standardizing_notes: "Notas Regulatórias e de Padronização",
        technical_model: "Modelo Técnico",
        science_deep_dive: "Mergulho Profundo na Ciência",
        master_model: "Modelo Mestre",
        lab_experiments: "Experimentos de Laboratório",
        primary_sources: "Fontes Primárias",
        use_formula: "Usar Fórmula",
        strength_w: "Força (W)",
        pl_ratio: "Relação P/L",
        water_absorption: "Absorção de Água",
        why_choose_this: "Por que escolher isso",
        vs: "vs"
    },
    es: {
        heritage_and_cultural_science: "Patrimonio y Ciencia Cultural",
        cultural_significance: "Importancia Cultural",
        sensory_intelligence: "Inteligencia Sensorial",
        technical_blueprint: "Plano Técnico (Reología)",
        flour_and_dough_property: "Propiedad de Harina y Masa",
        thermal_thermodynamics: "Termodinámica Térmica",
        heat_transfer: "Transferencia de Calor",
        crust_reaction: "Reacción de la Corteza",
        structure_crumb: "Estructura",
        scientific_process: "El Proceso Científico",
        lab_education_and_pro_logic: "Educación de Lab y Lógica Pro",
        comparative_analysis: "Análisis Comparativo",
        practical_qa: "Preguntas y Respuestas Prácticas",
        method_suitability_logic: "Lógica de Adecuación del Método",
        critical_lab_watchouts: "Alertas Críticas de Laboratorio",
        global_presence_and_legal_logic: "Presencia Global y Lógica Legal",
        geographic_footprint: "Huella Geográfica",
        regulatory_and_standardizing_notes: "Notas Regulatorias y de Estandarización",
        technical_model: "Modelo Técnico",
        science_deep_dive: "Inmersión Profunda en Ciencia",
        master_model: "Modelo Maestro",
        lab_experiments: "Experimentos de Laboratorio",
        primary_sources: "Fuentes Primarias",
        use_formula: "Usar Fórmula",
        strength_w: "Fuerza (W)",
        pl_ratio: "Relación P/L",
        water_absorption: "Absorción de Agua",
        why_choose_this: "Por qué elegir esto",
        vs: "vs"
    },
    fr: {
        heritage_and_cultural_science: "Héritage et Science Culturelle",
        cultural_significance: "Signification Culturelle",
        sensory_intelligence: "Intelligence Sensorielle",
        technical_blueprint: "Plan Technique (Rhéologie)",
        flour_and_dough_property: "Propriété de la Farine et de la Pâte",
        thermal_thermodynamics: "Thermodynamique Thermique",
        heat_transfer: "Transfert de Chaleur",
        crust_reaction: "Réaction de la Croûte",
        structure_crumb: "Structure",
        scientific_process: "Le Processus Scientifique",
        lab_education_and_pro_logic: "Éducation Lab & Logique Pro",
        comparative_analysis: "Analyse Comparative",
        practical_qa: "Questions et Réponses Pratiques",
        method_suitability_logic: "Logique d'Adéquation de la Méthode",
        critical_lab_watchouts: "Alertes Critiques de Laboratoire",
        global_presence_and_legal_logic: "Présence Mondiale et Logique Juridique",
        geographic_footprint: "Empreinte Géographique",
        regulatory_and_standardizing_notes: "Notes Réglementaires et de Normalisation",
        technical_model: "Modèle Technique",
        science_deep_dive: "Plongée Profonde dans la Science",
        master_model: "Modèle Maître",
        lab_experiments: "Expériences de Laboratoire",
        primary_sources: "Sources Primaires",
        use_formula: "Utiliser la Formule",
        strength_w: "Force (W)",
        pl_ratio: "Rapport P/L",
        water_absorption: "Absorption d'Eau",
        why_choose_this: "Pourquoi choisir ceci",
        vs: "c."
    },
    it: {
        heritage_and_cultural_science: "Patrimonio e Scienza Culturale",
        cultural_significance: "Significato Culturale",
        sensory_intelligence: "Intelligenza Sensoriale",
        technical_blueprint: "Progetto Tecnico (Reologia)",
        flour_and_dough_property: "Proprietà della Farina e dell'Impasto",
        thermal_thermodynamics: "Termodinamica Termica",
        heat_transfer: "Trasferimento di Calore",
        crust_reaction: "Reazione della Crosta",
        structure_crumb: "Struttura",
        scientific_process: "Il Processo Scientifico",
        lab_education_and_pro_logic: "Educazione Lab & Logica Pro",
        comparative_analysis: "Analisi Comparativa",
        practical_qa: "Domande e Risposte Pratiche",
        method_suitability_logic: "Logica di Idoneità del Metodo",
        critical_lab_watchouts: "Avvisi Critici di Laboratorio",
        global_presence_and_legal_logic: "Presenza Globale e Logica Legale",
        geographic_footprint: "Impronta Geografica",
        regulatory_and_standardizing_notes: "Note Normative e di Standardizzazione",
        technical_model: "Modello Tecnico",
        science_deep_dive: "Approfondimento Scientifico",
        master_model: "Modello Maestro",
        lab_experiments: "Esperimenti di Laboratorio",
        primary_sources: "Fonti Primarie",
        use_formula: "Usa Formula",
        strength_w: "Forza (W)",
        pl_ratio: "Rapporto P/L",
        water_absorption: "Assorbimento d'Acqua",
        why_choose_this: "Perché scegliere questo",
        vs: "contro"
    },
    de: {
        heritage_and_cultural_science: "Erbe & Kulturwissenschaft",
        cultural_significance: "Kulturelle Bedeutung",
        sensory_intelligence: "Sensorische Intelligenz",
        technical_blueprint: "Technischer Entwurf (Rheologie)",
        flour_and_dough_property: "Mehl- und Teigeigenschaften",
        thermal_thermodynamics: "Thermische Thermodynamik",
        heat_transfer: "Wärmeübertragung",
        crust_reaction: "Krustenreaktion",
        structure_crumb: "Struktur",
        scientific_process: "Der wissenschaftliche Prozess",
        lab_education_and_pro_logic: "Laborausbildung & Pro-Logik",
        comparative_analysis: "Vergleichende Analyse",
        practical_qa: "Praktische Fragen & Antworten",
        method_suitability_logic: "Logik der Verfahrenseignung",
        critical_lab_watchouts: "Kritische Laborhinweise",
        global_presence_and_legal_logic: "Globale Präsenz & Rechtslogik",
        geographic_footprint: "Geografischer Fußabdruck",
        regulatory_and_standardizing_notes: "Regulatorische & Standardisierungsnotizen",
        technical_model: "Technisches Modell",
        science_deep_dive: "Wissenschaftlicher Deep Dive",
        master_model: "Master-Modell",
        lab_experiments: "Laborexperimente",
        primary_sources: "Primärquellen",
        use_formula: "Formel verwenden",
        strength_w: "Stärke (W)",
        pl_ratio: "P/L-Verhältnis",
        water_absorption: "Wasseraufnahme",
        why_choose_this: "Warum dies wählen",
        vs: "vs"
    }
};

function updateFiles() {
    languages.forEach(lang => {
        const uiPath = path.join(localesDir, lang, 'ui.json');
        if (fs.existsSync(uiPath)) {
            const content = JSON.parse(fs.readFileSync(uiPath, 'utf8'));
            const newTranslations = translations[lang];

            // Add to a new 'style_page' section or root if you prefer
            // Adding to root for simplicity or under 'styles' in ui.json
            const stylePageSection = {
                ...newTranslations
            };

            // Merge into ui.json under 'style_details' namespace to be clean
            content.style_details = stylePageSection;

            fs.writeFileSync(uiPath, JSON.stringify(content, null, 2));
            console.log(`✅ Updated ${lang}/ui.json with style details`);
        }
    });
}

updateFiles();
