const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const languages = ['pt', 'es', 'fr', 'it', 'de', 'en'];

// Auth-related strings
const authStrings = {
    welcome_to_doughlab: {
        en: "Welcome to DoughLab Pro", pt: "Bem-vindo ao DoughLab Pro", es: "Bienvenido a DoughLab Pro", fr: "Bienvenue sur DoughLab Pro", it: "Benvenuto su DoughLab Pro", de: "Willkommen bei DoughLab Pro"
    },
    sign_in_button: {
        en: "Sign In", pt: "Entrar", es: "Iniciar Sesión", fr: "Se Connecter", it: "Accedi", de: "Anmelden"
    },
    create_account_button: {
        en: "Create Account", pt: "Criar Conta", es: "Crear Cuenta", fr: "Créer un Compte", it: "Crea Account", de: "Konto erstellen"
    },
    send_reset_link: {
        en: "Send Reset Link", pt: "Enviar Link de Redefinição", es: "Enviar Enlace de Restablecimiento", fr: "Envoyer le Lien de Réinitialisation", it: "Invia Link di Reset", de: "Reset-Link senden"
    },
    reset_password_instruction: {
        en: "Enter your email address and we'll send you a link to reset your password.",
        pt: "Digite seu endereço de e-mail e enviaremos um link para redefinir sua senha.",
        es: "Ingresa tu dirección de correo electrónico y te enviaremos un enlace para restablecer tu contraseña.",
        fr: "Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
        it: "Inserisci il tuo indirizzo email e ti invieremo un link per reimpostare la tua password.",
        de: "Geben Sie Ihre E-Mail-Adresse ein und wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts."
    },
    login_google_success: {
        en: "Successfully logged in with Google!", pt: "Login com Google realizado com sucesso!", es: "¡Inicio de sesión con Google exitoso!", fr: "Connexion avec Google réussie !", it: "Accesso con Google riuscito!", de: "Erfolgreich mit Google angemeldet!"
    },
    unauthorized_domain: {
        en: "This domain is not authorized for Google Sign-In. Please contact support.",
        pt: "Este domínio não está autorizado para Login com Google. Entre em contato com o suporte.",
        es: "Este dominio no está autorizado para el inicio de sesión con Google. Contacta al soporte.",
        fr: "Ce domaine n'est pas autorisé pour la connexion Google. Veuillez contacter le support.",
        it: "Questo dominio non è autorizzato per l'accesso con Google. Contatta il supporto.",
        de: "Diese Domain ist nicht für die Google-Anmeldung autorisiert. Bitte kontaktieren Sie den Support."
    },
    failed_google_login: {
        en: "Failed to login with Google. Please try again.", pt: "Falha ao fazer login com Google. Tente novamente.", es: "Error al iniciar sesión con Google. Inténtalo de nuevo.", fr: "Échec de la connexion avec Google. Veuillez réessayer.", it: "Accesso con Google non riuscito. Riprova.", de: "Anmeldung mit Google fehlgeschlagen. Bitte versuchen Sie es erneut."
    },
    fill_all_fields: {
        en: "Please fill in all fields.", pt: "Por favor, preencha todos os campos.", es: "Por favor, completa todos los campos.", fr: "Veuillez remplir tous les champs.", it: "Per favore, compila tutti i campi.", de: "Bitte füllen Sie alle Felder aus."
    },
    welcome_back: {
        en: "Welcome back!", pt: "Bem-vindo de volta!", es: "¡Bienvenido de nuevo!", fr: "Bon retour !", it: "Bentornato!", de: "Willkommen zurück!"
    },
    invalid_email_password: {
        en: "Invalid email or password.", pt: "E-mail ou senha inválidos.", es: "Correo electrónico o contraseña inválidos.", fr: "Email ou mot de passe invalide.", it: "Email o password non validi.", de: "Ungültige E-Mail oder Passwort."
    },
    failed_login: {
        en: "Failed to login. Please try again.", pt: "Falha ao fazer login. Tente novamente.", es: "Error al iniciar sesión. Inténtalo de nuevo.", fr: "Échec de la connexion. Veuillez réessayer.", it: "Accesso non riuscito. Riprova.", de: "Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut."
    },
    password_min_6: {
        en: "Password must be at least 6 characters.", pt: "A senha deve ter pelo menos 6 caracteres.", es: "La contraseña debe tener al menos 6 caracteres.", fr: "Le mot de passe doit comporter au moins 6 caractères.", it: "La password deve avere almeno 6 caratteri.", de: "Das Passwort muss mindestens 6 Zeichen lang sein."
    },
    account_created: {
        en: "Account created successfully!", pt: "Conta criada com sucesso!", es: "¡Cuenta creada con éxito!", fr: "Compte créé avec succès !", it: "Account creato con successo!", de: "Konto erfolgreich erstellt!"
    },
    email_in_use: {
        en: "Email is already in use.", pt: "Este e-mail já está em uso.", es: "El correo electrónico ya está en uso.", fr: "L'email est déjà utilisé.", it: "L'email è già in uso.", de: "Die E-Mail wird bereits verwendet."
    },
    failed_create_account: {
        en: "Failed to create account. Please try again.", pt: "Falha ao criar conta. Tente novamente.", es: "Error al crear la cuenta. Inténtalo de nuevo.", fr: "Échec de la création du compte. Veuillez réessayer.", it: "Creazione dell'account non riuscita. Riprova.", de: "Kontoerstellung fehlgeschlagen. Bitte versuchen Sie es erneut."
    },
    enter_email: {
        en: "Please enter your email address.", pt: "Por favor, digite seu endereço de e-mail.", es: "Por favor, ingresa tu dirección de correo electrónico.", fr: "Veuillez entrer votre adresse e-mail.", it: "Per favore, inserisci il tuo indirizzo email.", de: "Bitte geben Sie Ihre E-Mail-Adresse ein."
    },
    reset_email_sent: {
        en: "Password reset email sent!", pt: "E-mail de redefinição de senha enviado!", es: "¡Correo de restablecimiento de contraseña enviado!", fr: "Email de réinitialisation du mot de passe envoyé !", it: "Email di reset della password inviata!", de: "E-Mail zum Zurücksetzen des Passworts gesendet!"
    },
    no_account_found: {
        en: "No account found with this email.", pt: "Nenhuma conta encontrada com este e-mail.", es: "No se encontró ninguna cuenta con este correo.", fr: "Aucun compte trouvé avec cet email.", it: "Nessun account trovato con questa email.", de: "Kein Konto mit dieser E-Mail gefunden."
    },
    failed_reset: {
        en: "Failed to send reset email. Please try again.", pt: "Falha ao enviar e-mail de redefinição. Tente novamente.", es: "Error al enviar el correo de restablecimiento. Inténtalo de nuevo.", fr: "Échec de l'envoi de l'email de réinitialisation. Veuillez réessayer.", it: "Invio dell'email di reset non riuscito. Riprova.", de: "Senden der Reset-E-Mail fehlgeschlagen. Bitte versuchen Sie es erneut."
    },
    logged_in_guest: {
        en: "Logged in as Guest", pt: "Conectado como Visitante", es: "Conectado como Invitado", fr: "Connecté en tant qu'Invité", it: "Connesso come Ospite", de: "Als Gast angemeldet"
    },
    failed_guest: {
        en: "Failed to login as guest.", pt: "Falha ao fazer login como visitante.", es: "Error al iniciar sesión como invitado.", fr: "Échec de la connexion en tant qu'invité.", it: "Accesso come ospite non riuscito.", de: "Anmeldung als Gast fehlgeschlagen."
    }
};

// IngredientCreator strings
const ingredientStrings = {
    select_from_library: {
        en: "Select from Library", pt: "Selecionar da Biblioteca", es: "Seleccionar de Biblioteca", fr: "Sélectionner depuis la Bibliothèque", it: "Seleziona dalla Libreria", de: "Aus der Bibliothek auswählen"
    },
    create_custom: {
        en: "Create Custom", pt: "Criar Personalizado", es: "Crear Personalizado", fr: "Créer Personnalisé", it: "Crea Personalizzato", de: "Benutzerdefiniert erstellen"
    },
    ingredient_name: {
        en: "Ingredient Name", pt: "Nome do Ingrediente", es: "Nombre del Ingrediente", fr: "Nom de l'Ingrédient", it: "Nome dell'Ingrediente", de: "Zutatenname"
    },
    category: {
        en: "Category", pt: "Categoria", es: "Categoría", fr: "Catégorie", it: "Categoria", de: "Kategorie"
    },
    topping: {
        en: "Topping", pt: "Cobertura", es: "Cobertura", fr: "Garniture", it: "Topping", de: "Belag"
    },
    sauce: {
        en: "Sauce", pt: "Molho", es: "Salsa", fr: "Sauce", it: "Salsa", de: "Soße"
    },
    filling: {
        en: "Filling", pt: "Recheio", es: "Relleno", fr: "Farce", it: "Ripieno", de: "Füllung"
    },
    glaze_finish: {
        en: "Glaze/Finish", pt: "Glacê/Acabamento", es: "Glaseado/Acabado", fr: "Glaçage/Finition", it: "Glassa/Finitura", de: "Glasur/Finish"
    },
    technical_questions: {
        en: "Technical Questions", pt: "Perguntas Técnicas", es: "Preguntas Técnicas", fr: "Questions Techniques", it: "Domande Tecniche", de: "Technische Fragen"
    },
    moisture_content: {
        en: "Moisture Content", pt: "Teor de Umidade", es: "Contenido de Humedad", fr: "Teneur en Humidité", it: "Contenuto di Umidità", de: "Feuchtigkeitsgehalt"
    },
    low_dry: {
        en: "Low (Dry)", pt: "Baixo (Seco)", es: "Bajo (Seco)", fr: "Bas (Sec)", it: "Basso (Secco)", de: "Niedrig (Trocken)"
    },
    medium: {
        en: "Medium", pt: "Médio", es: "Medio", fr: "Moyen", it: "Medio", de: "Mittel"
    },
    high_wet: {
        en: "High (Wet)", pt: "Alto (Úmido)", es: "Alto (Húmedo)", fr: "Haut (Humide)", it: "Alto (Umido)", de: "Hoch (Feucht)"
    },
    weight_load: {
        en: "Weight Load", pt: "Carga de Peso", es: "Carga de Peso", fr: "Charge de Poids", it: "Carico di Peso", de: "Gewichtsbelastung"
    },
    light_leafs: {
        en: "Light (Leafs/Spices)", pt: "Leve (Folhas/Temperos)", es: "Ligero (Hojas/Especias)", fr: "Léger (Feuilles/Épices)", it: "Leggero (Foglie/Spezie)", de: "Leicht (Blätter/Gewürze)"
    },
    heavy_meats: {
        en: "Heavy (Meats/Cheeses)", pt: "Pesado (Carnes/Queijos)", es: "Pesado (Carnes/Quesos)", fr: "Lourd (Viandes/Fromages)", it: "Pesante (Carni/Formaggi)", de: "Schwer (Fleisch/Käse)"
    },
    pre_bake: {
        en: "Pre-Bake", pt: "Pré-Forno", es: "Pre-Hornear", fr: "Pré-Cuisson", it: "Pre-Cottura", de: "Vor dem Backen"
    },
    post_bake: {
        en: "Post-Bake", pt: "Pós-Forno", es: "Post-Hornear", fr: "Post-Cuisson", it: "Post-Cottura", de: "Nach dem Backen"
    },
    has_creamy_base: {
        en: "Has Creamy/Fatty Base?", pt: "Tem Base Cremosa/Gordurosa?", es: "¿Tiene Base Cremosa/Grasa?", fr: "A une Base Crémeuse/Grasse ?", it: "Ha una Base Cremosa/Grassa?", de: "Hat eine cremige/fetthaltige Basis?"
    },
    analyze_with_ai: {
        en: "Analyze with AI", pt: "Analisar com IA", es: "Analizar con IA", fr: "Analyser avec l'IA", it: "Analizza con IA", de: "Mit KI analysieren"
    },
    analyzing_molecular: {
        en: "Analyzing molecular properties...", pt: "Analisando propriedades moleculares...", es: "Analizando propiedades moleculares...", fr: "Analyse des propriétés moléculaires...", it: "Analisi delle proprietà molecolari...", de: "Molekulare Eigenschaften werden analysiert..."
    },
    confidence: {
        en: "Confidence", pt: "Confiança", es: "Confianza", fr: "Confiance", it: "Affidabilità", de: "Konfidenz"
    },
    compatibility: {
        en: "Compatibility", pt: "Compatibilidade", es: "Compatibilidad", fr: "Compatibilité", it: "Compatibilità", de: "Kompatibilität"
    },
    validated: {
        en: "Validated", pt: "Validado", es: "Validado", fr: "Validé", it: "Validato", de: "Validiert"
    },
    variation: {
        en: "Variation", pt: "Variação", es: "Variación", fr: "Variation", it: "Variazione", de: "Variation"
    },
    experimental: {
        en: "Experimental", pt: "Experimental", es: "Experimental", fr: "Expérimental", it: "Sperimentale", de: "Experimentell"
    },
    moisture: {
        en: "Moisture", pt: "Umidade", es: "Humedad", fr: "Humidité", it: "Umidità", de: "Feuchtigkeit"
    },
    thermal: {
        en: "Thermal", pt: "Térmico", es: "Térmico", fr: "Thermique", it: "Termico", de: "Thermisch"
    },
    note: {
        en: "Note", pt: "Nota", es: "Nota", fr: "Note", it: "Nota", de: "Hinweis"
    },
    discard: {
        en: "Discard", pt: "Descartar", es: "Descartar", fr: "Supprimer", it: "Scarta", de: "Verwerfen"
    },
    save_to_lab: {
        en: "Save to Lab", pt: "Salvar no Lab", es: "Guardar en Lab", fr: "Enregistrer dans le Lab", it: "Salva nel Lab", de: "Im Lab speichern"
    },
    no_ingredients_found: {
        en: "No ingredients found", pt: "Nenhum ingrediente encontrado", es: "No se encontraron ingredientes", fr: "Aucun ingrédient trouvé", it: "Nessun ingrediente trovato", de: "Keine Zutaten gefunden"
    },
    post_oven: {
        en: "Post-Oven", pt: "Pós-Forno", es: "Post-Horno", fr: "Après-Four", it: "Post-Forno", de: "Nach dem Ofen"
    },
    pre_oven: {
        en: "Pre-Oven", pt: "Pré-Forno", es: "Pre-Horno", fr: "Avant-Four", it: "Pre-Forno", de: "Vor dem Ofen"
    },
    standard: {
        en: "Standard", pt: "Padrão", es: "Estándar", fr: "Standard", it: "Standard", de: "Standard"
    },
    all: {
        en: "All", pt: "Todos", es: "Todos", fr: "Tous", it: "Tutti", de: "Alle"
    },
    eg_spicy_honey: {
        en: "e.g. Spicy Honey", pt: "ex. Mel Picante", es: "ej. Miel Picante", fr: "ex. Miel Épicé", it: "es. Miele Piccante", de: "z.B. Scharfer Honig"
    },
    online_ready: {
        en: "Online & Ready", pt: "Online e Pronto", es: "En Línea y Listo", fr: "En Ligne et Prêt", it: "Online e Pronto", de: "Online und Bereit"
    }
};

function updateFiles() {
    languages.forEach(lang => {
        // Update ui.json with auth strings
        const uiPath = path.join(localesDir, lang, 'ui.json');
        if (fs.existsSync(uiPath)) {
            let content = JSON.parse(fs.readFileSync(uiPath, 'utf8'));
            if (!content.auth_messages) content.auth_messages = {};
            Object.keys(authStrings).forEach(key => {
                content.auth_messages[key] = authStrings[key][lang] || authStrings[key].en;
            });
            fs.writeFileSync(uiPath, JSON.stringify(content, null, 2));
            console.log(`✅ Updated ${lang}/ui.json with auth messages`);
        }

        // Update calculator.json with ingredient creator strings
        const calcPath = path.join(localesDir, lang, 'calculator.json');
        if (fs.existsSync(calcPath)) {
            let content = JSON.parse(fs.readFileSync(calcPath, 'utf8'));
            if (!content.ingredient_creator) content.ingredient_creator = {};
            Object.keys(ingredientStrings).forEach(key => {
                content.ingredient_creator[key] = ingredientStrings[key][lang] || ingredientStrings[key].en;
            });
            fs.writeFileSync(calcPath, JSON.stringify(content, null, 2));
            console.log(`✅ Updated ${lang}/calculator.json with ingredient creator`);
        }
    });
}

updateFiles();
