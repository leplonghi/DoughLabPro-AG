import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const localesDir = path.join(__dirname, '../public/locales');
const targetLangs = ['es', 'pt'];

// Dictionary of manual translations for common terms
const dictionary = {
    // General & UI
    "Generating...": { pt: "Gerando...", es: "Generando..." },
    "Select Commercial Flour": { pt: "Selecionar Farinha Comercial", es: "Seleccionar Harina Comercial" },
    "Technical Specifications": { pt: "Especificações Técnicas", es: "Especificaciones Técnicas" },
    "Active": { pt: "Ativo", es: "Activo" },
    "Add New Preset": { pt: "Adicionar Nova Predefinição", es: "Añadir Nuevo Preajuste" },
    "Admin": { pt: "Admin", es: "Admin" },
    "Advanced Calculator Mode": { pt: "Modo Calculadora Avançada", es: "Modo Calculadora Avanzada" },
    "Affiliate Disclosure": { pt: "Divulgação de Afiliados", es: "Divulgación de Afiliados" },
    "After Baking": { pt: "Após Assar", es: "Después de Hornear" },
    "All Purpose": { pt: "Uso Geral", es: "Todo Uso" },
    "An error occurred.": { pt: "Ocorreu um erro.", es: "Ocurrió un error." },
    "Analytics": { pt: "Análises", es: "Analítica" },
    "Anchovies": { pt: "Anchovas", es: "Anchoas" },
    "Arugula": { pt: "Rúcula", es: "Rúcula" },
    "Assembly Line": { pt: "Linha de Montagem", es: "Línea de Montaje" },
    "Bake": { pt: "Assar", es: "Hornear" },
    "Baker's %": { pt: "% do Padeiro", es: "% del Panadero" },
    "Baking": { pt: "Assando", es: "Horneando" },
    "Baking Environment": { pt: "Ambiente de Cozimento", es: "Ambiente de Horneado" },
    "Basic Calculator": { pt: "Calculadora Básica", es: "Calculadora Básica" },
    "Batch": { pt: "Lote", es: "Lote" },
    "Batch Balanced": { pt: "Lote Equilibrado", es: "Lote Equilibrado" },
    "Before Baking": { pt: "Antes de Assar", es: "Antes de Hornear" },
    "Bell Pepper": { pt: "Pimentão", es: "Pimiento" },
    "Biga": { pt: "Biga", es: "Biga" },
    "Black Olives": { pt: "Azeitonas Pretas", es: "Aceitunas Negras" },
    "Boiled Egg": { pt: "Ovo Cozido", es: "Huevo Cocido" },
    "Bread": { pt: "Pão", es: "Pan" },
    "Bulk": { pt: "Massa", es: "Masa" },
    "Bulk Ferment": { pt: "Fermentação em Massa", es: "Fermentación en Bloque" },
    "Buttery": { pt: "Amanteigado", es: "Mantecoso" },
    "Calculate Shopping List": { pt: "Calcular Lista de Compras", es: "Calcular Lista de Compras" },
    "Change Cover": { pt: "Alterar Capa", es: "Cambiar Portada" },
    "Change Photo": { pt: "Alterar Foto", es: "Cambiar Foto" },
    "Chewy": { pt: "Firme", es: "Masticable" },
    "Choose Your Style": { pt: "Escolha Seu Estilo", es: "Elige Tu Estilo" },
    "Community Access": { pt: "Acesso à Comunidade", es: "Acceso a la Comunidad" },
    "Confectionery": { pt: "Confeitaria", es: "Confitería" },
    "Contact": { pt: "Contato", es: "Contacto" },
    "Contact & Social": { pt: "Contato e Social", es: "Contacto y Redes" },
    "Contemporary": { pt: "Contemporânea", es: "Contemporánea" },
    "Cook": { pt: "Cozinhar", es: "Cocinar" },
    "Cooked Ham": { pt: "Presunto Cozido", es: "Jamón Cocido" },
    "Cookie Policy": { pt: "Política de Cookies", es: "Política de Cookies" },
    "Corn": { pt: "Milho", es: "Maíz" },
    "Create Custom Styles": { pt: "Criar Estilos Personalizados", es: "Crear Estilos Personalizados" },
    "Crushed Pistachios": { pt: "Pistache Triturado", es: "Pistachos Triturados" },
    "Current Plan": { pt: "Plano Atual", es: "Plan Actual" },
    "Custom": { pt: "Personalizado", es: "Personalizado" },
    "Customize Ratios": { pt: "Personalizar Proporções", es: "Personalizar Proporciones" },
    "Define Yield": { pt: "Definir Rendimento", es: "Definir Rendimiento" },
    "Dense Crumb": { pt: "Miolo Denso", es: "Miga Densa" },
    "Direct Method": { pt: "Método Direto", es: "Método Directo" },
    "Discarded": { pt: "Descartado", es: "Descartado" },
    "Dough Diagnostic": { pt: "Diagnóstico da Massa", es: "Diagnóstico de Masa" },
    "DoughLab Pro": { pt: "DoughLab Pro", es: "DoughLab Pro" },
    "Download PDF": { pt: "Baixar PDF", es: "Descargar PDF" },
    "Easy": { pt: "Fácil", es: "Fácil" },
    "Emergency Dough Rescue": { pt: "Resgate de Emergência da Massa", es: "Rescate de Emergencia de Masa" },
    "Enriched": { pt: "Enriquecida", es: "Enriquecida" },
    "Enter": { pt: "Entrar", es: "Entrar" },
    "Enthusiast": { pt: "Entusiasta", es: "Entusiasta" },
    "Europe": { pt: "Europa", es: "Europa" },
    "Exact": { pt: "Exato", es: "Exacto" },
    "Expert": { pt: "Especialista", es: "Experto" },
    "Export PDF": { pt: "Exportar PDF", es: "Exportar PDF" },
    "Export to PDF": { pt: "Exportar para PDF", es: "Exportar a PDF" },
    "Extra Virgin Olive Oil": { pt: "Azeite Extra Virgem", es: "Aceite de Oliva Virgen Extra" },
    "Fair": { pt: "Razoável", es: "Razonable" },
    "Fermentation Strategy": { pt: "Estratégia de Fermentação", es: "Estrategia de Fermentación" },
    "Fermenting": { pt: "Fermentando", es: "Fermentando" },
    "Finish": { pt: "Finalizar", es: "Finalizar" },
    "Flatbread": { pt: "Pão Achatado", es: "Pan Plano" },
    "Flour": { pt: "Farinha", es: "Harina" },
    "Fresh Basil": { pt: "Manjericão Fresco", es: "Albahaca Fresca" },
    "Global": { pt: "Global", es: "Global" },
    "Good": { pt: "Bom", es: "Bueno" },
    "Gorgonzola": { pt: "Gorgonzola", es: "Gorgonzola" },
    "Grilled Chicken": { pt: "Frango Grelhado", es: "Pollo a la Parrilla" },
    "Gummy Interior": { pt: "Interior Pegajoso", es: "Interior Gomoso" },
    "Hard": { pt: "Difícil", es: "Difícil" },
    "Heavy load": { pt: "Carga pesada", es: "Carga pesada" },
    "High Hydration": { pt: "Alta Hidratação", es: "Alta Hidratación" },
    "Hungry": { pt: "Faminto", es: "Hambriento" },
    "Hydration Adjuster": { pt: "Ajuste de Hidratação", es: "Ajuste de Hidratación" },
    "Impossible to handle": { pt: "Impossível de manusear", es: "Imposible de manejar" },
    "Intellectual Property": { pt: "Propriedade Intelectual", es: "Propiedad Intelectual" },
    "Intensity": { pt: "Intensidade", es: "Intensidad" },
    "Italian Sausage": { pt: "Linguiça Italiana", es: "Salchicha Italiana" },
    "Italy": { pt: "Itália", es: "Italia" },
    "Lab Capacity Reached": { pt: "Capacidade do Lab Atingida", es: "Capacidad del Lab Alcanzada" },
    "Leeks": { pt: "Alho-poró", es: "Puerros" },
    "Legal Overview": { pt: "Visão Geral Legal", es: "Resumen Legal" },
    "Lemon Zest": { pt: "Raspas de Limão", es: "Ralladura de Limón" },
    "Levain Management": { pt: "Gestão de Levain", es: "Gestión de Levain" },
    "Levain Monitor": { pt: "Monitor de Levain", es: "Monitor de Levain" },
    "Logistics": { pt: "Logística", es: "Logística" },
    "Low-Moisture Mozzarella": { pt: "Mussarela de Baixa Umidade", es: "Mozzarella de Baja Humedad" },
    "Master Pizzaiolo": { pt: "Pizzaiolo Mestre", es: "Maestro Pizzaiolo" },
    "Maybe Later": { pt: "Talvez Mais Tarde", es: "Quizás Más Tarde" },
    "Medium": { pt: "Médio", es: "Medio" },
    "Melting": { pt: "Derretimento", es: "Derretido" },
    "Mixing": { pt: "Mistura", es: "Mezcla" },
    "Mozzarella": { pt: "Mussarela", es: "Mozzarella" },
    "Mushrooms": { pt: "Cogumelos", es: "Champiñones" },
    "My Lab": { pt: "Meu Lab", es: "Mi Lab" },
    "New Variant": { pt: "Nova Variante", es: "Nueva Variante" },
    "Next": { pt: "Próximo", es: "Siguiente" },
    "No notes": { pt: "Sem notas", es: "Sin notas" },
    "Notes": { pt: "Notas", es: "Notas" },
    "Notification": { pt: "Notificação", es: "Notificación" },
    "Official": { pt: "Oficial", es: "Oficial" },
    "Oil": { pt: "Óleo", "es": "Aceite" },
    "Onion": { pt: "Cebola", "es": "Cebolla" },
    "Origin": { pt: "Origem", "es": "Origen" },
    "Other": { pt: "Outro", "es": "Otro" },
    "Oven": { pt: "Forno", "es": "Horno" },
    "Ovens": { pt: "Fornos", "es": "Hornos" },
    "Pale Crust": { pt: "Crosta Pálida", "es": "Corteza Pálida" },
    "Pan": { pt: "Forma", "es": "Molde" },
    "Pastry": { pt: "Massas/Confeitaria", "es": "Pastelería" },
    "Pepperoni": { pt: "Pepperoni", "es": "Pepperoni" },
    "Phase": { pt: "Fase", "es": "Fase" },
    "Photos": { pt: "Fotos", "es": "Fotos" },
    "Pizza": { pt: "Pizza", "es": "Pizza" },
    "Poolish": { pt: "Poolish", "es": "Poolish" },
    "Preset": { pt: "Predefinição", "es": "Preajuste" },
    "Privacy Policy": { pt: "Política de Privacidade", "es": "Política de Privacidad" },
    "Pro Member": { pt: "Membro Pro", "es": "Miembro Pro" },
    "Process Title": { pt: "Título do Processo", "es": "Título del Proceso" },
    "Production Economics": { pt: "Economia de Produção", "es": "Economía de Producción" },
    "Production Hub": { pt: "Centro de Produção", "es": "Centro de Producción" },
    "Profile": { pt: "Perfil", "es": "Perfil" },
    "Prosciutto": { pt: "Presunto Cru", "es": "Prosciutto" },
    "Protein": { pt: "Proteína", "es": "Proteína" },
    "Quantity": { pt: "Quantidade", "es": "Cantidad" },
    "Rating": { pt: "Avaliação", "es": "Calificación" },
    "Ready": { pt: "Pronto", "es": "Listo" },
    "Recipe": { pt: "Receita", "es": "Receta" },
    "Recommended": { pt: "Recomendado", "es": "Recomendado" },
    "References": { pt: "Referências", "es": "Referencias" },
    "Reset Password": { pt: "Redefinir Senha", "es": "Restablecer Contraseña" },
    "Salt": { pt: "Sal", "es": "Sal" },
    "Sauce": { pt: "Molho", "es": "Salsa" },
    "Save": { pt: "Salvar", "es": "Guardar" },
    "Save Changes": { pt: "Salvar Alterações", "es": "Guardar Cambios" },
    "Schedule": { pt: "Agendar", "es": "Programar" },
    "Search": { pt: "Buscar", "es": "Buscar" },
    "See how Pro can take you further.": { pt: "Veja como o Pro pode te levar além.", es: "Mira cómo Pro puede llevarte más lejos." },
    "Select Level": { pt: "Selecionar Nível", es: "Seleccionar Nivel" },
    "Send": { pt: "Enviar", es: "Enviar" },
    "Settings": { pt: "Configurações", es: "Configuración" },
    "Share": { pt: "Compartilhar", es: "Compartir" },
    "Shopping List": { pt: "Lista de Compras", es: "Lista de Compras" },
    "Sign In": { pt: "Entrar", es: "Iniciar Sesión" },
    "Sign Out": { pt: "Sair", es: "Cerrar Sesión" },
    "Sign Up": { pt: "Cadastrar", es: "Registrarse" },
    "Simple pricing. No surprises.": { pt: "Preço simples. Sem surpresas.", es: "Precios simples. Sin sorpresas." },
    "Skip": { pt: "Pular", es: "Omitir" },
    "Sourdough": { pt: "Fermentação Natural", es: "Masa Madre" },
    "Source": { pt: "Fonte", es: "Fuente" },
    "Standard": { pt: "Padrão", es: "Estándar" },
    "Start Baking": { pt: "Começar a Assar", es: "Empezar a Hornear" },
    "Start Process": { pt: "Iniciar Processo", es: "Iniciar Proceso" },
    "Status": { pt: "Status", es: "Estado" },
    "Stop": { pt: "Parar", es: "Detener" },
    "Strategy": { pt: "Estratégia", es: "Estrategia" },
    "Strength": { pt: "Força", es: "Fuerza" },
    "Style": { pt: "Estilo", es: "Estilo" },
    "Sugar": { pt: "Açúcar", es: "Azúcar" },
    "Technical References": { pt: "Referências Técnicas", es: "Referencias Técnicas" },
    "Temperature": { pt: "Temperatura", es: "Temperatura" },
    "Terms of Service": { pt: "Termos de Serviço", es: "Términos de Servicio" },
    "Timeline": { pt: "Cronograma", es: "Línea de Tiempo" },
    "Timer": { pt: "Temporizador", es: "Temporizador" },
    "Tips": { pt: "Dicas", es: "Consejos" },
    "Title": { pt: "Título", es: "Título" },
    "Topping": { pt: "Cobertura", es: "Ingrediente" },
    "Total": { pt: "Total", es: "Total" },
    "Total Duration": { pt: "Duração Total", es: "Duración Total" },
    "Total Mass": { pt: "Massa Total", es: "Masa Total" },
    "Type": { pt: "Tipo", es: "Tipo" },
    "Undo": { pt: "Desfazer", es: "Deshacer" },
    "Unit System": { pt: "Sistema de Unidades", es: "Sistema de Unidades" },
    "Unknown": { pt: "Desconhecido", es: "Desconocido" },
    "Unlock": { pt: "Desbloquear", es: "Desbloquear" },
    "Update": { pt: "Atualizar", es: "Actualizar" },
    "Upload Photo": { pt: "Enviar Foto", es: "Subir Foto" },
    "User": { pt: "Usuário", es: "Usuario" },
    "Variation": { pt: "Variação", es: "Variación" },
    "View All": { pt: "Ver Tudo", es: "Ver Todo" },
    "View Plans": { pt: "Ver Planos", es: "Ver Planes" },
    "Water": { pt: "Água", es: "Agua" },
    "Website": { pt: "Site", es: "Sitio Web" },
    "Welcome": { pt: "Bem-vindo", es: "Bienvenido" },
    "Wind": { pt: "Vento", es: "Viento" },
    "Yeast": { pt: "Fermento", es: "Levadura" },
    "Yield": { pt: "Rendimento", es: "Rendimiento" },
    "Your Formula Awaits": { pt: "Sua Fórmula Aguarda", es: "Tu Fórmula Espera" },
    "Anonymous": { pt: "Anônimo", es: "Anónimo" },
    "Baker": { pt: "Padeiro", es: "Panadero" },
    "Best Container": { pt: "Melhor Recipiente", es: "Mejor Recipiente" },
    "Close": { pt: "Fechar", es: "Cerrar" },
    "Loading...": { pt: "Carregando...", es: "Cargando..." }
};

function translateMissingKeys() {
    console.log('🔄 Starting dictionary-based translation...');

    let totalUpdated = 0;

    targetLangs.forEach(lang => {
        const targetDir = path.join(localesDir, lang);
        const files = fs.readdirSync(targetDir).filter(file => file.endsWith('.json'));

        console.log(`\nProcessing ${lang.toUpperCase()}...`);

        files.forEach(file => {
            const filePath = path.join(targetDir, file);
            let content;
            try {
                content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            } catch (e) {
                console.error(`Error reading ${file}: ${e.message}`);
                return;
            }

            let updated = false;
            let fileUpdates = 0;

            function updateRecursively(obj) {
                Object.keys(obj).forEach(key => {
                    const value = obj[key];
                    if (typeof value === 'object' && value !== null) {
                        updateRecursively(value);
                    } else if (typeof value === 'string') {
                        // Check if value is in dictionary
                        if (dictionary[value] && dictionary[value][lang]) {
                            obj[key] = dictionary[value][lang];
                            updated = true;
                            fileUpdates++;
                            totalUpdated++;
                        }
                    }
                });
            }

            updateRecursively(content);

            if (updated) {
                fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
                console.log(`   ✅ Updated ${file}: Translated ${fileUpdates} keys.`);
            }
        });
    });

    console.log(`\n🎉 Translation complete! Updated ${totalUpdated} keys.`);
}

translateMissingKeys();
