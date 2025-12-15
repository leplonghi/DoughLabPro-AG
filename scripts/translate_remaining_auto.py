import os
import json
import re

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

COMMON_PT = {
    # Actions
    "Save": "Salvar", "Cancel": "Cancelar", "Close": "Fechar", "Details": "Detalhes",
    "Delete": "Excluir", "Edit": "Editar", "Add": "Adicionar", "Loading...": "Carregando...",
    "Back": "Voltar", "Next": "Próximo", "Finish": "Concluir", "Skip": "Pular",
    "Thinking...": "Pensando...", "Save Changes": "Salvar Alterações", "N/A": "N/A",
    "Sign In": "Entrar", "Sign Up": "Cadastrar", "Logout": "Sair", "Login": "Login",
    "Share": "Compartilhar", "Download PDF": "Baixar PDF", "Export failed": "Falha na exportação",
    "Share Your Formula": "Compartilhar Fórmula", "Master Formula": "Fórmula Mestra",
    "Download Image": "Baixar Imagem", "Reset All": "Redefinir Tudo", "Show Results": "Mostrar Resultados",
    "Remove": "Remover", "Unlock Now": "Desbloquear Agora", "Promise": "Promessa",
    "Try Again": "Tentar Novamente", "Start New Diagnosis": "Novo Diagnóstico",
    "Contact Support": "Contatar Suporte", "Start Bake": "Iniciar Fornada",
    "Use in Calculator": "Usar na Calculadora", "Go to Global Settings": "Ir para Configurações",
    "Go Pro Now": "Vire Pro Agora", "Clear all filters": "Limpar filtros",
    "Launch Oven Profiler": "Abrir Perfil de Forno", "Explore Styles": "Explorar Estilos",
    "Clear Filters": "Limpar Filtros", "Go to Home": "Ir para Início",
    "Unlock the Full Potential": "Desbloqueie o Potencial Completo",
    "Describe your problem": "Descreva seu problema", "Detailed Description": "Descrição Detalhada",
    "Diagnose Problem": "Diagnosticar Problema",

    # Nouns/Labels
    "Sticky dough": "Massa pegajosa", "Flat loaf": "Pão achatado",
    "Recommended Gear": "Equipamento Recomendado", "Pro": "Pro", "PRO": "PRO",
    "Base Flour Type": "Tipo de Farinha Base", "Feeding Schedule": "Cronograma de Alimentação",
    "Enable Feeding Reminders": "Ativar Lembretes de Alimentação",
    "Add ingredient": "Adicionar ingrediente", "Add variation": "Adicionar variação",
    "Skip Tour": "Pular Tour", "Choose Your Plan": "Escolha seu Plano",
    "Continue with Free": "Continuar com Grátis", "Most Popular": "Mais Popular",
    "Vol": "Vol", "AI Style Builder": "Construtor de Estilo IA",
    "Generate Style": "Gerar Estilo", "AI Generated Style": "Estilo Gerado por IA",
    "Overview": "Visão Geral", "Engineering": "Engenharia", "Science Lab": "Laboratório de Ciências",
    "Process Chemistry Logic": "Lógica Química do Processo", "Add Step": "Adicionar Passo",
    "Complete": "Completo", "NEW": "NOVO", "Use Style": "Usar Estilo",
    "Dough Characteristics": "Características da Massa", "Baking Profile": "Perfil de Assamento",
    "Target Style": "Estilo Alvo", "Technical Profile": "Perfil Técnico",
    "Hydration": "Hidratação", "Salt": "Sal", "Fermentation": "Fermentação",
    "Oven": "Forno", "Diagnostic Results": "Resultados do Diagnóstico",
    "Probable Causes": "Causas Prováveis", "Action Plan": "Plano de Ação",
    "Recommended Adjustments": "Ajustes Recomendados", "Possible Causes": "Causas Possíveis",
    "Suggested Solutions": "Soluções Sugeridas", "Baking Strategy": "Estratégia de Assamento",
    "Dough Adjustments": "Ajustes da Massa", "Oven Type": "Tipo de Forno",
    "Baking Surface": "Superfície de Assamento", "Rack Position": "Posição da Prateleira",
    "Analyze Oven Profile": "Analisar Perfil de Forno", "Toppings Library": "Biblioteca de Coberturas",
    "Pro Feature": "Recurso Pro", "Professional Baking Gear": "Equipamento Profissional",
    "Failed to load styles from service": "Falha ao carregar estilos",
    "Bread": "Pão", "Sandwiches": "Sanduíches", "Toast": "Torrada", "Global": "Global",
    "Snacks": "Lanches", "Pizza": "Pizza", "Other": "Outro", "Factor": "Fator",
    "Ribbon Stage": "Ponto de Fita", "Creaming Method": "Método Cremoso",
    "PuffPastry": "Massa Folhada", "Oven Spring": "Salto de Forno",
    "Share in Community": "Compartilhar na Comunidade", "Batches": "Fornadas",
    "Consistencies": "Consistências", "Oven Profiler": "Perfil de Forno",
    "Hydration Converter": "Conversor de Hidratação", "Batch": "Fornada",
    "Consistency Projects": "Projetos de Consistência", "Agreement": "Acordo",
    "Licensor": "Licenciador", "Software Product": "Produto de Software",
    "Infringement": "Infração", "Copyright Infringement": "Violação de Direitos Autorais",
    "User": "Usuário", "Company": "Empresa", "Service": "Serviço",
    "Application": "Aplicativo", "Content": "Conteúdo", "Marks": "Marcas",
    "Contributions": "Contribuições", "App Preferences": "Preferências do App",
    "Legal Support": "Suporte Legal", "Danger Zone": "Zona de Perigo",
    "Resources": "Recursos", "Technical References": "Referências Técnicas",
    "English": "Inglês", "Default Oven Type": "Tipo de Forno Padrão",
    "Global Library": "Biblioteca Global", "Any": "Qualquer",
    "Method Suitability Matrix": "Matriz de Adequação de Método",
    "Troubleshooting Scenarios": "Cenários de Solução de Problemas",
    "Comparative Analysis": "Análise Comparativa", "Tech Specs": "Especificações Técnicas",
    "Hydration Dynamics": "Dinâmica de Hidratação", "Thermal Engineering": "Engenharia Térmica",
    "Flour Mechanics": "Mecânica da Farinha", "Base Formula": "Fórmula Base",
    "Failed to upload image": "Falha ao enviar imagem",
    "Global Dough Registry": "Registro Global de Massas", "All Types": "Todos os Tipos",
    "In Development": "Em Desenvolvimento", "Professional Utilities": "Utilitários Profissionais",
    "Baking Tools": "Ferramentas de Panificação", "Pro Membership": "Assinatura Pro",
    "Italian Pizza": "Pizza Italiana", "Sourdough Bread": "Pão de Fermentação Natural",
    "High heat": "Alta temperatura", "Long fermentation": "Longa fermentação",
    "Medium": "Médio", "Hard": "Difícil", "Expert": "Especialista",
    
    # Countries
    "France": "França", "United States": "Estados Unidos", "Italy": "Itália",
    "Japan": "Japão", "Norway": "Noruega", "Brazil": "Brasil",
    "Middle East": "Oriente Médio", "Germany": "Alemanha", "Mexico": "México",
    "Eastern Europe": "Leste Europeu", "New York": "Nova York",
    
    # Common descriptions (Partial)
    "Breakfast bread": "Pão de café da manhã", "Dessert bread": "Pão de sobremesa",
    "Everyday bread": "Pão do dia a dia", "Table bread": "Pão de mesa"
}

COMMON_ES = {
    # Actions
    "Save": "Guardar", "Cancel": "Cancelar", "Close": "Cerrar", "Details": "Detalles",
    "Delete": "Eliminar", "Edit": "Editar", "Add": "Añadir", "Loading...": "Cargando...",
    "Back": "Atrás", "Next": "Siguiente", "Finish": "Finalizar", "Skip": "Omitir",
    "Thinking...": "Pensando...", "Save Changes": "Guardar Cambios", "N/A": "N/A",
    "Sign In": "Iniciar Sesión", "Sign Up": "Registrarse", "Logout": "Cerrar Sesión", "Login": "Login",
    "Share": "Compartir", "Download PDF": "Descargar PDF", "Export failed": "Error de exportación",
    "Share Your Formula": "Compartir Fórmula", "Master Formula": "Fórmula Maestra",
    "Download Image": "Descargar Imagen", "Reset All": "Restablecer Todo", "Show Results": "Mostrar Resultados",
    "Remove": "Quitar", "Unlock Now": "Desbloquear Ahora", "Promise": "Promesa",
    "Try Again": "Intentar de Nuevo", "Start New Diagnosis": "Nuevo Diagnóstico",
    "Contact Support": "Contactar Soporte", "Start Bake": "Iniciar Horneada",
    "Use in Calculator": "Usar en Calculadora", "Go to Global Settings": "Ir a Ajustes Globales",
    "Go Pro Now": "Hazte Pro Ahora", "Clear all filters": "Borrar filtros",
    "Launch Oven Profiler": "Abrir Perfilador de Horno", "Explore Styles": "Explorar Estilos",
    "Clear Filters": "Borrar Filtros", "Go to Home": "Ir a Inicio",
    "Unlock the Full Potential": "Desbloquea el Potencial Completo",
    "Describe your problem": "Describe tu problema", "Detailed Description": "Descripción Detallada",
    "Diagnose Problem": "Diagnosticar Problema",

    # Nouns/Labels
    "Sticky dough": "Masa pegajosa", "Flat loaf": "Pan plano",
    "Recommended Gear": "Equipo Recomendado", "Pro": "Pro", "PRO": "PRO",
    "Base Flour Type": "Tipo de Harina Base", "Feeding Schedule": "Horario de Alimentación",
    "Enable Feeding Reminders": "Activar Recordatorios",
    "Add ingredient": "Añadir ingrediente", "Add variation": "Añadir variación",
    "Skip Tour": "Saltar Tour", "Choose Your Plan": "Elige tu Plan",
    "Continue with Free": "Continuar con Gratis", "Most Popular": "Más Popular",
    "Vol": "Vol", "AI Style Builder": "Constructor de Estilo IA",
    "Generate Style": "Generar Estilo", "AI Generated Style": "Estilo Generado por IA",
    "Overview": "Visión General", "Engineering": "Ingeniería", "Science Lab": "Laboratorio de Ciencias",
    "Process Chemistry Logic": "Lógica Química del Proceso", "Add Step": "Añadir Paso",
    "Complete": "Completo", "NEW": "NUEVO", "Use Style": "Usar Estilo",
    "Dough Characteristics": "Características de la Masa", "Baking Profile": "Perfil de Horneado",
    "Target Style": "Estilo Objetivo", "Technical Profile": "Perfil Técnico",
    "Hydration": "Hidratación", "Salt": "Sal", "Fermentation": "Fermentación",
    "Oven": "Horno", "Diagnostic Results": "Resultados de Diagnóstico",
    "Probable Causes": "Causas Probables", "Action Plan": "Plan de Acción",
    "Recommended Adjustments": "Ajustes Recomendados", "Possible Causes": "Causas Posibles",
    "Suggested Solutions": "Soluciones Sugeridas", "Baking Strategy": "Estrategia de Horneado",
    "Dough Adjustments": "Ajustes de Masa", "Oven Type": "Tipo de Horno",
    "Baking Surface": "Superficie de Horneado", "Rack Position": "Posición de Rejilla",
    "Analyze Oven Profile": "Analizar Perfil de Horno", "Toppings Library": "Biblioteca de Coberturas",
    "Pro Feature": "Función Pro", "Professional Baking Gear": "Equipo Profesional",
    "Failed to load styles from service": "Error al cargar estilos",
    "Bread": "Pan", "Sandwiches": "Sándwiches", "Toast": "Tostada", "Global": "Global",
    "Snacks": "Meriendas", "Pizza": "Pizza", "Other": "Otro", "Factor": "Factor",
    "Ribbon Stage": "Punto de Cinta", "Creaming Method": "Método de Cremado",
    "PuffPastry": "Hojaldre", "Oven Spring": "Salto de Horno",
    "Share in Community": "Compartir en Comunidad", "Batches": "Lotes",
    "Consistencies": "Consistencias", "Oven Profiler": "Perfilador de Horno",
    "Hydration Converter": "Convertidor de Hidratación", "Batch": "Lote",
    "Consistency Projects": "Proyectos de Consistencia", "Agreement": "Acuerdo",
    "Licensor": "Licenciador", "Software Product": "Producto de Software",
    "Infringement": "Infracción", "Copyright Infringement": "Infracción de Derechos",
    "User": "Usuario", "Company": "Empresa", "Service": "Servicio",
    "Application": "Aplicación", "Content": "Contenido", "Marks": "Marcas",
    "Contributions": "Contribuciones", "App Preferences": "Preferencias de App",
    "Legal Support": "Soporte Legal", "Danger Zone": "Zona de Peligro",
    "Resources": "Recursos", "Technical References": "Referencias Técnicas",
    "English": "Inglés", "Default Oven Type": "Tipo de Horno Predeterminado",
    "Global Library": "Biblioteca Global", "Any": "Cualquiera",
    "Method Suitability Matrix": "Matriz de Idoneidad",
    "Troubleshooting Scenarios": "Escenarios de Solución",
    "Comparative Analysis": "Análisis Comparativo", "Tech Specs": "Especificaciones Técnicas",
    "Hydration Dynamics": "Dinámica de Hidratación", "Thermal Engineering": "Ingeniería Térmica",
    "Flour Mechanics": "Mecánica de Harina", "Base Formula": "Fórmula Base",
    "Failed to upload image": "Error al subir imagen",
    "Global Dough Registry": "Registro Global de Masas", "All Types": "Todos los Tipos",
    "In Development": "En Desarrollo", "Professional Utilities": "Utilidades Profesionales",
    "Baking Tools": "Herramientas de Horneado", "Pro Membership": "Membresía Pro",
    "Italian Pizza": "Pizza Italiana", "Sourdough Bread": "Pan de Masa Madre",
    "High heat": "Alta temperatura", "Long fermentation": "Larga fermentación",
    "Medium": "Medio", "Hard": "Difícil", "Expert": "Experto",
    
    # Countries
    "France": "Francia", "United States": "Estados Unidos", "Italy": "Italia",
    "Japan": "Japón", "Norway": "Noruega", "Brazil": "Brasil",
    "Middle East": "Oriente Medio", "Germany": "Alemania", "Mexico": "México",
    "Eastern Europe": "Europa del Este", "New York": "Nueva York",

    # Common descriptions
    "Breakfast bread": "Pan de desayuno", "Dessert bread": "Pan de postre",
    "Everyday bread": "Pan de diario", "Table bread": "Pan de mesa"
}

def translate_value(val, common_dict):
    if val in common_dict:
        return common_dict[val]
    # Simple case-insensitive
    for k, v in common_dict.items():
        if k.lower() == val.lower():
            return v
    # Clean string check
    cleaned = val.strip().rstrip('.').rstrip(':')
    for k, v in common_dict.items():
        if k.lower() == cleaned.lower():
            return v
    return val

def process_file(lang, namespace, common_dict):
    path = os.path.join(os.getcwd(), 'public', 'locales', lang, f'{namespace}.json')
    if not os.path.exists(path):
        print(f"File not found: {path}, skipping.")
        return

    data = load_json(path)
    # We load EN to verify original value if needed, but primarily we translate values that look like keys or are identical to EN
    en_path = os.path.join(os.getcwd(), 'public', 'locales', 'en', f'{namespace}.json')
    en_data = load_json(en_path)

    def walk_and_update(en_node, lang_node):
        modified = False
        for k, v in en_node.items():
            if k not in lang_node:
                if isinstance(v, dict):
                    lang_node[k] = {}
                    walk_and_update(v, lang_node[k])
                else:
                    lang_node[k] = translate_value(v, common_dict)
                modified = True
            else:
                if isinstance(v, dict):
                    if isinstance(lang_node[k], dict):
                        if walk_and_update(v, lang_node[k]):
                            modified = True
                else:
                    # Check if same as EN
                    if lang_node[k] == v:
                        new_val = translate_value(v, common_dict)
                        if new_val != v:
                            lang_node[k] = new_val
                            modified = True
                        
                        # Special heuristic for _2, _3 suffix
                        match = re.search(r'_(\d+)$', k)
                        if match:
                             # Try to check if there is a base key like "user" for "user_2"
                             base_key = k[:match.start()]
                             if base_key in en_node:
                                 # We can't easily get the translated base key value here without lookback
                                 # But we can check if the VALUE is in our dict
                                 pass
        return modified

    if walk_and_update(en_data, data):
        print(f"Updating {lang} {namespace}.json...")
        save_json(path, data)
    else:
        print(f"No changes for {lang} {namespace}.json.")

if __name__ == "__main__":
    for ns in ['common', 'auth', 'dashboard']:
         print(f"Processing PT {ns}...")
         process_file('pt', ns, COMMON_PT)
         print(f"Processing ES {ns}...")
         process_file('es', ns, COMMON_ES)
