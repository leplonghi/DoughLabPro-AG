
const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const langs = ['pt', 'es', 'fr', 'it', 'de'];

const dictionaries = {
    pt: {
        calculator: {
            add_component: "Adicionar Componente",
            add_ingredient_193: "Adicionar Ingrediente",
            advanced_391: "Avançado",
            after_baking_301: "Pós-Forno",
            ai_analysis: "Análise IA",
            application_moment: "Momento de Aplicação",
            assembly_components: "Componentes de Montagem",
            before_baking_302: "Pré-Forno",
            browse_library: "Navegar na Biblioteca",
            calculator: "Calculadora",
            custom_ingredients: "Ingredientes Personalizados",
            add_new: "Adicionar Novo",
            ingredient: "Ingrediente",
            percentage: "Porcentagem",
            weight: "Peso",
            fat: "Gordura",
            liquid: "Líquido",
            name: "Nome",
            remove: "Remover",
            ambient_temperature: "Temperatura Ambiente",
            environment: "Ambiente",
            leavening: "Fermentação",
            fermentation_technique: "Técnica de Fermentação",
            direct: "Direta",
            poolish: "Poolish",
            biga: "Biga",
            yeast_type: "Tipo de Fermento",
            generic_starter: "Levain Genérico",
            selected_levain: "Levain Selecionado",
            last_fed: "Última Alimentação",
            status: "Status",
            create_levain: "Criar Levain",
            advanced_ingredients: "Ingredientes Avançados",
            my_starter: "Meu Levain",
            quantity: "Quantidade",
            by_total_weight: "Por Peso Total",
            by_flour_weight: "Por Peso da Farinha",
            number_of_pizzas: "Número de Pizzas",
            number_of_loaves: "Número de Pães",
            weight_per_piece: "Peso por Peça",
            total_flour_weight: "Peso Total da Farinha",
            dough_style: "Estilo de Massa",
            find_a_style: "Encontrar um estilo...",
            target_style: "Estilo Alvo",
            target_hydration: "Hidratação Alvo",
            salt_range: "Faixa de Sal",
            description: "Descrição",
            preferment: "Pré-fermento",
            the_science: "A Ciência",
            pro_tip: "Dica Pro",
            critical_point: "Ponto Crítico",
            critical: "Crítico",
            tip: "Dica",
            technical: "Técnico",
            grandma: "Vovó",
            wizard: "Mago",
            wizard_mode_title: "Modo Mago",
            choose_style: "Escolha seu Estilo",
            define_quantity: "Definir Quantidade",
            dough_characteristics: "Características da Massa",
            guided: "Guiado",
            pro: "Pro",
            results: "Resultados",
            total_flour: "Farinha Total",
            total_water: "Água Total",
            total_salt: "Sal Total",
            total_oil: "Óleo Total",
            total_sugar: "Açúcar Total",
            total_yeast: "Fermento Total",
            total_dough: "Peso Total da Massa",
            single_ball: "Peso da Bola",
            final_dough_title: "Mistura Final",
            flour: "Farinha",
            water: "Água",
            salt: "Sal",
            oil: "Óleo",
            sugar: "Açúcar",
            yeast: "Fermento",
            share_button: "Compartilhar",
            download_pdf: "Baixar PDF",
            tools_title: "Ferramentas",
            category_filling: "Recheios",
            category_finish: "Finalizações",
            category_sauce: "Molhos",
            category_topping: "Coberturas",
            cheese_187: "Queijo",
            meat_188: "Carne",
            sauce_190: "Molho",
            vegetal_189: "Vegetal",
            finish_191: "Finalizar",
            mix: "Misturar",
            styles: {
                new_york_slice_name: "Nova Iorque (Fatia)",
                neapolitan: "Napolitana",
                sourdough: "Levain Natural",
                focaccia: "Focaccia",
                baguette: "Baguete"
            }
        },
        errors: {
            auth: {
                firebase_auth_failed_to_initialize: "Falha ao inicializar autenticação Firebase",
                failed_to_login_with_google_please_try_again: "Falha ao entrar com Google. Tente novamente.",
                invalid_email_or_password: "Email ou senha inválidos.",
                failed_to_login_please_try_again: "Falha ao entrar. Tente novamente.",
                failed_to_create_account_please_try_again: "Falha ao criar conta. Tente novamente.",
                failed_to_send_reset_email_please_try_again: "Falha ao enviar email de redefinição. Tente novamente."
            },
            an_error_occurred: "Ocorreu um erro."
        },
        notifications: {
            active_timers_402: "Timers Ativos",
            bake_complete_224: "Assado Completo",
            baking_alerts_273: "Alertas de Cozimento",
            biga_ready_223: "Biga Pronta",
            bulk_fermentation_277: "Fermentação em Massa",
            poolish_ready_222: "Poolish Pronto",
            preheat_oven_280: "Pré-aquecer Forno",
            time_remaining_276: "Tempo Restante",
            upcoming_403: "Próximos"
        },
        weather: {
            clear_sky_1: "Céu limpo",
            foggy_5: "Nevoeiro",
            heavy_rain_12: "Chuva forte",
            moderate_rain_11: "Chuva moderada",
            overcast_4: "Nublado",
            partly_cloudy_3: "Parcialmente nublado",
            thunderstorm_22: "Tempestade"
        }
    },
    es: {
        calculator: {
            add_component: "Añadir Componente",
            add_ingredient_193: "Añadir Ingrediente",
            advanced_391: "Avanzado",
            after_baking_301: "Post-Horno",
            assembly_components: "Componentes de Montaje",
            before_baking_302: "Pre-Horno",
            browse_library: "Explorar Biblioteca",
            calculator: "Calculadora",
            custom_ingredients: "Ingredientes Personalizados",
            add_new: "Añadir Nuevo",
            ingredient: "Ingrediente",
            percentage: "Porcentaje",
            weight: "Peso",
            fat: "Grasa",
            liquid: "Líquido",
            name: "Nombre",
            remove: "Eliminar",
            ambient_temperature: "Temperatura Ambiente",
            environment: "Ambiente",
            leavening: "Fermentación",
            fermentation_technique: "Técnica de Fermentación",
            direct: "Directa",
            poolish: "Poolish",
            biga: "Biga",
            yeast_type: "Tipo de Levadura",
            generic_starter: "Masa Madre Genérica",
            selected_levain: "Masa Madre Seleccionada",
            last_fed: "Última Alimentación",
            status: "Estado",
            create_levain: "Crear Masa Madre",
            advanced_ingredients: "Ingredientes Avanzados",
            my_starter: "Mi Masa Madre",
            quantity: "Cantidad",
            by_total_weight: "Por Peso Total",
            by_flour_weight: "Por Peso de Harina",
            number_of_pizzas: "Número de Pizzas",
            number_of_loaves: "Número de Panes",
            weight_per_piece: "Peso por Pieza",
            total_flour_weight: "Peso Total de Harina",
            dough_style: "Estilo de Masa",
            find_a_style: "Buscar un estilo...",
            target_style: "Estilo Objetivo",
            target_hydration: "Hidratación Objetivo",
            salt_range: "Rango de Sal",
            description: "Descripción",
            preferment: "Prefermento",
            the_science: "La Ciencia",
            pro_tip: "Consejo Pro",
            critical_point: "Punto Crítico",
            critical: "Crítico",
            tip: "Consejo",
            technical: "Técnico",
            grandma: "Abuela",
            wizard: "Mago",
            wizard_mode_title: "Modo Mago",
            choose_style: "Elige tu Estilo",
            define_quantity: "Definir Cantidad",
            dough_characteristics: "Características de la Masa",
            guided: "Guiado",
            pro: "Pro",
            results: "Resultados",
            total_flour: "Harina Total",
            total_water: "Agua Total",
            total_salt: "Sal Total",
            total_oil: "Aceite Total",
            total_sugar: "Azúcar Total",
            total_dough: "Peso Total de Masa",
            single_ball: "Peso de Bola",
            final_dough_title: "Mezcla Final",
            flour: "Harina",
            water: "Agua",
            salt: "Sal",
            oil: "Aceite",
            sugar: "Azúcar",
            yeast: "Levadura",
            share_button: "Compartir",
            download_pdf: "Descargar PDF",
            tools_title: "Herramientas",
            category_filling: "Rellenos",
            category_finish: "Acabados",
            category_sauce: "Salsas",
            category_topping: "Coberturas",
            cheese_187: "Queso",
            meat_188: "Carne",
            sauce_190: "Salsa",
            vegetal_189: "Vegetal",
            finish_191: "Finalizar",
            mix: "Mezclar",
            styles: {
                new_york_slice_name: "Nueva York (Rebanada)",
                neapolitan: "Napolitana",
                sourdough: "Masa Madre Natural",
                focaccia: "Focaccia",
                baguette: "Baguette"
            }
        },
        errors: {
            auth: {
                firebase_auth_failed_to_initialize: "Fallo al inicializar autenticación Firebase",
                failed_to_login_with_google_please_try_again: "Fallo al entrar con Google. Intente de nuevo.",
                invalid_email_or_password: "Email o contraseña inválidos.",
                failed_to_login_please_try_again: "Fallo al entrar. Intente de nuevo.",
                failed_to_create_account_please_try_again: "Fallo al crear cuenta. Intente de nuevo."
            },
            an_error_occurred: "Ocurrió un error."
        },
        notifications: {
            active_timers_402: "Temporizadores Activos",
            bake_complete_224: "Horneado Completo",
            baking_alerts_273: "Alertas de Horneado",
            biga_ready_223: "Biga Lista",
            bulk_fermentation_277: "Fermentación en Bloque",
            poolish_ready_222: "Poolish Listo",
            preheat_oven_280: "Precalentar Horno",
            time_remaining_276: "Tiempo Restante",
            upcoming_403: "Próximos"
        },
        weather: {
            clear_sky_1: "Cielo despejado",
            foggy_5: "Niebla",
            heavy_rain_12: "Lluvia fuerte",
            moderate_rain_11: "Lluvia moderada",
            overcast_4: "Nublado",
            partly_cloudy_3: "Parcialmente nublado",
            thunderstorm_22: "Tormenta"
        }
    },
    fr: {
        calculator: {
            add_component: "Ajouter Composant",
            add_ingredient_193: "Ajouter Ingrédient",
            advanced_391: "Avancé",
            after_baking_301: "Après Cuisson",
            ai_analysis: "Analyse IA",
            assembly_components: "Composants d'Assemblage",
            before_baking_302: "Avant Cuisson",
            browse_library: "Parcourir la Bibliothèque",
            calculator: "Calculatrice",
            custom_ingredients: "Ingrédients Personnalisés",
            add_new: "Ajouter Nouveau",
            ingredient: "Ingrédient",
            percentage: "Pourcentage",
            weight: "Poids",
            fat: "Matière Grasse",
            liquid: "Liquide",
            name: "Nom",
            remove: "Retirer",
            ambient_temperature: "Température Ambiante",
            environment: "Environnement",
            leavening: "Fermentation",
            fermentation_technique: "Technique de Fermentation",
            direct: "Directe",
            poolish: "Poolish",
            biga: "Biga",
            yeast_type: "Type de Levure",
            generic_starter: "Levain Générique",
            selected_levain: "Levain Sélectionné",
            last_fed: "Dernier Rafraîchi",
            status: "Statut",
            create_levain: "Créer Levain",
            advanced_ingredients: "Ingrédients Avancés",
            my_starter: "Mon Levain",
            quantity: "Quantité",
            by_total_weight: "Par Poids Total",
            by_flour_weight: "Par Poids de Farine",
            number_of_pizzas: "Nombre de Pizzas",
            number_of_loaves: "Nombre de Pains",
            weight_per_piece: "Poids par Pièce",
            total_flour_weight: "Poids Total de Farine",
            dough_style: "Style de Pâte",
            find_a_style: "Trouver un style...",
            target_style: "Style Cible",
            target_hydration: "Hydratation Cible",
            salt_range: "Plage de Sel",
            description: "Description",
            preferment: "Pré-ferment",
            the_science: "La Science",
            pro_tip: "Conseil Pro",
            critical_point: "Point Critique",
            critical: "Critique",
            tip: "Conseil",
            technical: "Technique",
            grandma: "Grand-mère",
            wizard: "Sorcier",
            wizard_mode_title: "Mode Sorcier",
            choose_style: "Choisissez votre Style",
            define_quantity: "Définir Quantité",
            dough_characteristics: "Caractéristiques de la Pâte",
            guided: "Guidé",
            pro: "Pro",
            results: "Résultats",
            total_flour: "Farine Totale",
            total_water: "Eau Totale",
            total_salt: "Sel Total",
            total_oil: "Huile Totale",
            total_sugar: "Sucre Total",
            total_dough: "Poids Total Pâte",
            single_ball: "Poids Pâton",
            final_dough_title: "Mélange Final",
            flour: "Farine",
            water: "Eau",
            salt: "Sel",
            oil: "Huile",
            sugar: "Sucre",
            yeast: "Levure",
            share_button: "Partager",
            download_pdf: "Télécharger PDF",
            tools_title: "Outils",
            category_filling: "Garnitures",
            category_finish: "Finitions",
            category_sauce: "Sauces",
            category_topping: "Garnitures",
            cheese_187: "Fromage",
            meat_188: "Viande",
            sauce_190: "Sauce",
            vegetal_189: "Végétal",
            finish_191: "Terminer",
            mix: "Mélanger",
            styles: {
                new_york_slice_name: "New York (Part)",
                neapolitan: "Napolitaine",
                sourdough: "Levain Naturel",
                focaccia: "Focaccia",
                baguette: "Baguette"
            }
        },
        errors: {
            auth: {
                firebase_auth_failed_to_initialize: "Échec initialisation Auth Firebase",
                failed_to_login_with_google_please_try_again: "Échec connexion Google. Réessayez.",
                invalid_email_or_password: "Email ou mot de passe invalide.",
                failed_to_login_please_try_again: "Échec connexion. Réessayez.",
                failed_to_create_account_please_try_again: "Échec création compte. Réessayez."
            },
            an_error_occurred: "Une erreur est survenue."
        },
        notifications: {
            active_timers_402: "Minuteurs Actifs",
            bake_complete_224: "Cuisson Terminée",
            baking_alerts_273: "Alertes Cuisson",
            biga_ready_223: "Biga Prête",
            bulk_fermentation_277: "Pointage (Vrac)",
            poolish_ready_222: "Poolish Prête",
            preheat_oven_280: "Préchauffer Four",
            time_remaining_276: "Temps Restant",
            upcoming_403: "À venir"
        },
        weather: {
            clear_sky_1: "Ciel dégagé",
            foggy_5: "Brouillard",
            heavy_rain_12: "Forte pluie",
            moderate_rain_11: "Pluie modérée",
            overcast_4: "Couvert",
            partly_cloudy_3: "Partiellement nuageux",
            thunderstorm_22: "Orage"
        }
    },
    it: {
        calculator: {
            add_component: "Aggiungi Componente",
            add_ingredient_193: "Aggiungi Ingrediente",
            advanced_391: "Avanzato",
            after_baking_301: "Dopo Cottura",
            ai_analysis: "Analisi IA",
            assembly_components: "Componenti di Assemblaggio",
            before_baking_302: "Prima Cottura",
            browse_library: "Sfoglia Libreria",
            calculator: "Calcolatrice",
            custom_ingredients: "Ingredienti Personalizzati",
            add_new: "Aggiungi Nuovo",
            ingredient: "Ingrediente",
            percentage: "Percentuale",
            weight: "Peso",
            fat: "Grasso",
            liquid: "Liquido",
            name: "Nome",
            remove: "Rimuovi",
            ambient_temperature: "Temperatura Ambiente",
            environment: "Ambiente",
            leavening: "Lievitazione",
            fermentation_technique: "Tecnica Fermentazione",
            direct: "Diretto",
            poolish: "Poolish",
            biga: "Biga",
            yeast_type: "Tipo Lievito",
            generic_starter: "Lievito Madre Generico",
            selected_levain: "Lievito Madre Selezionato",
            last_fed: "Ultimo Rinfresco",
            status: "Stato",
            create_levain: "Crea Lievito Madre",
            advanced_ingredients: "Ingredienti Avanzati",
            my_starter: "Mio Lievito",
            quantity: "Quantità",
            by_total_weight: "Per Peso Totale",
            by_flour_weight: "Per Peso Farina",
            number_of_pizzas: "Numero di Pizze",
            number_of_loaves: "Numero di Pani",
            weight_per_piece: "Peso per Pezzo",
            total_flour_weight: "Peso Totale Farina",
            dough_style: "Stile Impasto",
            find_a_style: "Trova uno stile...",
            target_style: "Stile Obiettivo",
            target_hydration: "Idratazione Obiettivo",
            salt_range: "Range Sale",
            description: "Descrizione",
            preferment: "Pre-fermento",
            the_science: "La Scienza",
            pro_tip: "Consiglio Pro",
            critical_point: "Punto Critico",
            critical: "Critico",
            tip: "Consiglio",
            technical: "Tecnico",
            grandma: "Nonna",
            wizard: "Mago",
            wizard_mode_title: "Modalità Mago",
            choose_style: "Scegli Stile",
            define_quantity: "Definisci Quantità",
            dough_characteristics: "Caratteristiche Impasto",
            guided: "Guidato",
            pro: "Pro",
            results: "Risultati",
            total_flour: "Farina Totale",
            total_water: "Acqua Totale",
            total_salt: "Sale Totale",
            total_oil: "Olio Totale",
            total_sugar: "Zucchero Totale",
            total_dough: "Peso Totale Impasto",
            single_ball: "Peso Panetto",
            final_dough_title: "Impasto Finale",
            flour: "Farina",
            water: "Acqua",
            salt: "Sale",
            oil: "Olio",
            sugar: "Zucchero",
            yeast: "Lievito",
            share_button: "Condividi",
            download_pdf: "Scarica PDF",
            tools_title: "Strumenti",
            category_filling: "Ripieni",
            category_finish: "Finiture",
            category_sauce: "Salse",
            category_topping: "Condimenti",
            cheese_187: "Formaggio",
            meat_188: "Carne",
            sauce_190: "Salsa",
            vegetal_189: "Vegetale",
            finish_191: "Finire",
            mix: "Impastare",
            styles: {
                new_york_slice_name: "New York (Fetta)",
                neapolitan: "Napoletana",
                sourdough: "Lievito Naturale",
                focaccia: "Focaccia",
                baguette: "Baguette"
            }
        },
        errors: {
            auth: {
                firebase_auth_failed_to_initialize: "Inizializzazione Auth Firebase fallita",
                failed_to_login_with_google_please_try_again: "Login Google fallito. Riprova.",
                invalid_email_or_password: "Email o password non validi.",
                failed_to_login_please_try_again: "Login fallito. Riprova.",
                failed_to_create_account_please_try_again: "Creazione account fallita. Riprova."
            },
            an_error_occurred: "Si è verificato un errore."
        },
        notifications: {
            active_timers_402: "Timer Attivi",
            bake_complete_224: "Cottura Completa",
            baking_alerts_273: "Avvisi Cottura",
            biga_ready_223: "Biga Pronta",
            bulk_fermentation_277: "Puntata (Massa)",
            poolish_ready_222: "Poolish Pronto",
            preheat_oven_280: "Preriscalda Forno",
            time_remaining_276: "Tempo Rimanente",
            upcoming_403: "In Arrivo"
        },
        weather: {
            clear_sky_1: "Cielo sereno",
            foggy_5: "Nebbia",
            heavy_rain_12: "Pioggia forte",
            moderate_rain_11: "Pioggia moderata",
            overcast_4: "Coperto",
            partly_cloudy_3: "Parzialmente nuvoloso",
            thunderstorm_22: "Temporale"
        }
    },
    de: {
        calculator: {
            add_component: "Komponente hinzufügen",
            add_ingredient_193: "Zutat hinzufügen",
            advanced_391: "Erweitert",
            after_baking_301: "Nach dem Backen",
            ai_analysis: "KI-Analyse",
            assembly_components: "Montagekomponenten",
            before_baking_302: "Vor dem Backen",
            browse_library: "Bibliothek durchsuchen",
            calculator: "Rechner",
            custom_ingredients: "Eigene Zutaten",
            add_new: "Neu Hinzufügen",
            ingredient: "Zutat",
            percentage: "Prozentsatz",
            weight: "Gewicht",
            fat: "Fett",
            liquid: "Flüssigkeit",
            name: "Name",
            remove: "Entfernen",
            ambient_temperature: "Raumtemperatur",
            environment: "Umgebung",
            leavening: "Gärung",
            fermentation_technique: "Gärtechnik",
            direct: "Direkt",
            poolish: "Poolish",
            biga: "Biga",
            yeast_type: "Hefeart",
            generic_starter: "Allgemeiner Sauerteig",
            selected_levain: "Gewählter Sauerteig",
            last_fed: "Zuletzt gefüttert",
            status: "Status",
            create_levain: "Sauerteig erstellen",
            advanced_ingredients: "Erweiterte Zutaten",
            my_starter: "Mein Sauerteig",
            quantity: "Menge",
            by_total_weight: "Nach Gesamtgewicht",
            by_flour_weight: "Nach Mehlgewicht",
            number_of_pizzas: "Anzahl Pizzen",
            number_of_loaves: "Anzahl Brote",
            weight_per_piece: "Stückgewicht",
            total_flour_weight: "Gesamtmehlgewicht",
            dough_style: "Teigstil",
            find_a_style: "Stil finden...",
            target_style: "Zielstil",
            target_hydration: "Zielhydratation",
            salt_range: "Salzbereich",
            description: "Beschreibung",
            preferment: "Vorteig",
            the_science: "Die Wissenschaft",
            pro_tip: "Profi-Tipp",
            critical_point: "Kritischer Punkt",
            critical: "Kritisch",
            tip: "Tipp",
            technical: "Technisch",
            grandma: "Oma",
            wizard: "Zauberer",
            wizard_mode_title: "Zauberermodus",
            choose_style: "Wähle deinen Stil",
            define_quantity: "Menge definieren",
            dough_characteristics: "Teigeigenschaften",
            guided: "Geführt",
            pro: "Pro",
            results: "Ergebnisse",
            total_flour: "Gesamtmehl",
            total_water: "Gesamtwasser",
            total_salt: "Gesamtsalz",
            total_oil: "Gesamtöl",
            total_sugar: "Gesamtzucker",
            total_dough: "Gesamtteiggewicht",
            single_ball: "Ballengewicht",
            final_dough_title: "Endgültige Mischung",
            flour: "Mehl",
            water: "Wasser",
            salt: "Salz",
            oil: "Öl",
            sugar: "Zucker",
            yeast: "Hefe",
            share_button: "Teilen",
            download_pdf: "PDF herunterladen",
            tools_title: "Werkzeuge",
            category_filling: "Füllungen",
            category_finish: "Veredelungen",
            category_sauce: "Soßen",
            category_topping: "Beläge",
            cheese_187: "Käse",
            meat_188: "Fleisch",
            sauce_190: "Soße",
            vegetal_189: "Gemüse",
            finish_191: "Fertigstellen",
            mix: "Mischen",
            styles: {
                new_york_slice_name: "New York (Scheibe)",
                neapolitan: "Neapolitanisch",
                sourdough: "Sauerteig",
                focaccia: "Focaccia",
                baguette: "Baguette"
            }
        },
        errors: {
            auth: {
                firebase_auth_failed_to_initialize: "Firebase Auth Init fehlgeschlagen",
                failed_to_login_with_google_please_try_again: "Google Login fehlgeschlagen. Bitte erneut versuchen.",
                invalid_email_or_password: "Ungültige E-Mail oder Passwort.",
                failed_to_login_please_try_again: "Login fehlgeschlagen. Bitte erneut versuchen.",
                failed_to_create_account_please_try_again: "Kontoerstellung fehlgeschlagen. Bitte erneut versuchen."
            },
            an_error_occurred: "Ein Fehler ist aufgetreten."
        },
        notifications: {
            active_timers_402: "Aktive Timer",
            bake_complete_224: "Backen beendet",
            baking_alerts_273: "Backalarme",
            biga_ready_223: "Biga bereit",
            bulk_fermentation_277: "Stockgare",
            poolish_ready_222: "Poolish bereit",
            preheat_oven_280: "Ofen vorheizen",
            time_remaining_276: "Verbleibende Zeit",
            upcoming_403: "Demnächst"
        },
        weather: {
            clear_sky_1: "Klarer Himmel",
            foggy_5: "Neblig",
            heavy_rain_12: "Starker Regen",
            moderate_rain_11: "Mäßiger Regen",
            overcast_4: "Bedeckt",
            partly_cloudy_3: "Teilweise bewölkt",
            thunderstorm_22: "Gewitter"
        }
    }
};

function deepMerge(target, source) {
    for (const key of Object.keys(source)) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]))
        }
    }
    Object.assign(target || {}, source)
    return target
}

function updateModules() {
    langs.forEach(lang => {
        // 1. Update calculator.json
        const calcPath = path.join(localesDir, lang, 'calculator.json');
        if (fs.existsSync(calcPath)) {
            const content = JSON.parse(fs.readFileSync(calcPath, 'utf8'));
            const newTranslations = dictionaries[lang].calculator;

            // Naive deep merge equivalent for specific top-level objects we know
            if (newTranslations.styles) {
                content.styles = { ...content.styles, ...newTranslations.styles };
                delete newTranslations.styles; // handled
            }
            if (newTranslations.ingredients) {
                // we didn't translate all ingredients, so we skip overwriting the whole object if we didn't provide it
                // but here we didn't provide it in dictionary yet, so it's safe.
            }

            Object.assign(content, newTranslations);
            fs.writeFileSync(calcPath, JSON.stringify(content, null, 2));
            console.log(`Updated ${lang}/calculator.json`);
        }

        // 2. Update errors.json
        const errorsPath = path.join(localesDir, lang, 'errors.json');
        if (fs.existsSync(errorsPath)) {
            const content = JSON.parse(fs.readFileSync(errorsPath, 'utf8'));
            const newTranslations = dictionaries[lang].errors;

            if (newTranslations.auth) {
                content.auth = { ...content.auth, ...newTranslations.auth };
            }
            content.an_error_occurred = newTranslations.an_error_occurred;

            fs.writeFileSync(errorsPath, JSON.stringify(content, null, 2));
            console.log(`Updated ${lang}/errors.json`);
        }

        // 3. Update notifications.json
        const notifPath = path.join(localesDir, lang, 'notifications.json');
        if (fs.existsSync(notifPath)) {
            const content = JSON.parse(fs.readFileSync(notifPath, 'utf8'));
            const newTranslations = dictionaries[lang].notifications;
            Object.assign(content, newTranslations);
            fs.writeFileSync(notifPath, JSON.stringify(content, null, 2));
            console.log(`Updated ${lang}/notifications.json`);
        }

        // 4. Update weather.json
        const weatherPath = path.join(localesDir, lang, 'weather.json');
        if (fs.existsSync(weatherPath)) {
            const content = JSON.parse(fs.readFileSync(weatherPath, 'utf8'));
            const newTranslations = dictionaries[lang].weather;
            Object.assign(content, newTranslations);
            fs.writeFileSync(weatherPath, JSON.stringify(content, null, 2));
            console.log(`Updated ${lang}/weather.json`);
        }
    });
}

updateModules();
