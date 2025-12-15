import os
import json

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

COMMON_PT = {
    "Unlock": "Desbloquear",
    "Unlimited Recipes": "Receitas Ilimitadas",
    "Community Access": "Acesso à Comunidade",
    "AI Assistant": "Assistente de IA",
    "Maybe Later": "Talvez Depois",
    "Send": "Enviar",
    "Equipment": "Equipamento",
    "Learn": "Aprender",
    "Read More": "Ler Mais",
    "Get Started": "Começar",
    "Sign In": "Entrar",
    "Sign Up": "Cadastrar",
    "Subscribe": "Assinar",
    "Features": "Recursos",
    "Pricing": "Preços",
    "About Us": "Sobre Nós",
    "Contact": "Contato",
    "Blog": "Blog",
    "Documentation": "Documentação",
    "Support": "Suporte",
    "FAQ": "FAQ",
    "Terms of Service": "Termos de Serviço",
    "Privacy Policy": "Política de Privacidade",
    "Cookie Policy": "Política de Cookies",
    "Copyright": "Direitos Autorais",
    "All Rights Reserved": "Todos os Direitos Reservados",
    "Language": "Idioma",
    "Settings": "Configurações",
    "Profile": "Perfil",
    "Dashboard": "Dashboard",
    "My Account": "Minha Conta",
    "Logout": "Sair",
    "Login": "Entrar",
    "Description": "Descrição",
    "Title": "Título",
    "Author": "Autor",
    "Date": "Data",
    "Category": "Categoria",
    "Tags": "Tags",
    "Search": "Buscar",
    "Share": "Compartilhar",
    "Comments": "Comentários",
    "Likes": "Curtidas",
    "Views": "Visualizações",
    "Related": "Relacionado",
    "Previous": "Anterior",
    "Next": "Próximo",
    "Home": "Início",
    "Greeting Short": "Olá",
    "Title Short": "Título Curto",
    "Placeholder Short": "Digite aqui...",
    "The Science": "A Ciência",
    "Mastering": "Dominando",
    "Understanding": "Entendendo",
    "Introduction": "Introdução",
    "Technique": "Técnica",
    "Fundamentals": "Fundamentos",
    "Advanced": "Avançado",
    "Basics": "Básico",
    "Tips & Tricks": "Dicas e Truques",
    "Guide": "Guia",
    "Tutorial": "Tutorial",
    "Recipe": "Receita",
    "Method": "Método",
    "Ingredients": "Ingredientes",
    "Instructions": "Instruções",
    "Notes": "Notas",
    "References": "Referências",
    "Conclusion": "Conclusão",
    "Summary": "Resumo",
    "Key Takeaways": "Principais Aprendizados",
    "What you will learn": "O que você vai aprender",
    "Prerequisites": "Pré-requisitos",
    "Duration": "Duração",
    "Level": "Nível",
    "Difficulty": "Dificuldade",
    "Easy": "Fácil",
    "Medium": "Médio",
    "Hard": "Difícil",
    "Expert": "Especialista",
    "Community": "Comunidade",
    "Join the discussion": "Participe da discussão",
    "Ask a question": "Faça uma pergunta",
    "Post a reply": "Responda",
    "Report": "Reportar",
    "Edit": "Editar",
    "Delete": "Excluir",
    "Save": "Salvar",
    "Cancel": "Cancelar",
    "Close": "Fechar",
    "Open": "Abrir",
    "Back": "Voltar",
    "Submit": "Enviar",
    "Update": "Atualizar",
    "Success": "Sucesso",
    "Error": "Erro",
    "Warning": "Aviso",
    "Info": "Info",
    "Loading...": "Carregando...",
    "Processing...": "Processando...",
    "Free": "Grátis",
    "Pro": "Pro",
    "Premium": "Premium",
    "Upgrade": "Melhorar",
    "Monthly": "Mensal",
    "Yearly": "Anual",
    "Lifetime": "Vitalício",
    "Best Value": "Melhor Valor",
    "Most Popular": "Mais Popular",
    "Recommended": "Recomendado",
    "Unlock Full Access": "Desbloquear Acesso Completo",
    "Start Free Trial": "Começar Teste Grátis",
    "No Credit Card Required": "Sem Cartão de Crédito",
    "Cancel Anytime": "Cancele a Qualquer Momento",
    "Secure Payment": "Pagamento Seguro",
    "Satisfaction Guaranteed": "Satisfação Garantida"
}

COMMON_ES = {
    "Unlock": "Desbloquear",
    "Unlimited Recipes": "Recetas Ilimitadas",
    "Community Access": "Acceso a la Comunidad",
    "AI Assistant": "Asistente IA",
    "Maybe Later": "Tal vez más tarde",
    "Send": "Enviar",
    "Equipment": "Equipo",
    "Learn": "Aprender",
    "Read More": "Leer más",
    "Get Started": "Empezar",
    "Sign In": "Iniciar sesión",
    "Sign Up": "Registrarse",
    "Subscribe": "Suscribirse",
    "Features": "Características",
    "Pricing": "Precios",
    "About Us": "Sobre nosotros",
    "Contact": "Contacto",
    "Blog": "Blog",
    "Documentation": "Documentación",
    "Support": "Soporte",
    "FAQ": "Preguntas Frecuentes",
    "Terms of Service": "Términos de Servicio",
    "Privacy Policy": "Política de Privacidad",
    "Cookie Policy": "Política de Cookies",
    "Copyright": "Derechos de Autor",
    "All Rights Reserved": "Todos los derechos reservados",
    "Language": "Idioma",
    "Settings": "Ajustes",
    "Profile": "Perfil",
    "Dashboard": "Tablero",
    "My Account": "Mi Cuenta",
    "Logout": "Cerrar sesión",
    "Login": "Iniciar sesión",
    "Description": "Descripción",
    "Title": "Título",
    "Author": "Autor",
    "Date": "Fecha",
    "Category": "Categoría",
    "Tags": "Etiquetas",
    "Search": "Buscar",
    "Share": "Compartir",
    "Comments": "Comentarios",
    "Likes": "Me gusta",
    "Views": "Vistas",
    "Related": "Relacionado",
    "Previous": "Anterior",
    "Next": "Siguiente",
    "Home": "Inicio",
    "Greeting Short": "Hola",
    "Title Short": "Título Corto",
    "Placeholder Short": "Escribe aquí...",
    "The Science": "La Ciencia",
    "Mastering": "Dominando",
    "Understanding": "Entendiendo",
    "Introduction": "Introducción",
    "Technique": "Técnica",
    "Fundamentals": "Fundamentos",
    "Advanced": "Avanzado",
    "Basics": "Básicos",
    "Tips & Tricks": "Consejos y Trucos",
    "Guide": "Guía",
    "Tutorial": "Tutorial",
    "Recipe": "Receta",
    "Method": "Método",
    "Ingredients": "Ingredientes",
    "Instructions": "Instrucciones",
    "Notes": "Notas",
    "References": "Referencias",
    "Conclusion": "Conclusión",
    "Summary": "Resumen",
    "Key Takeaways": "Puntos Clave",
    "What you will learn": "Lo que aprenderás",
    "Prerequisites": "Prerequisitos",
    "Duration": "Duración",
    "Level": "Nivel",
    "Difficulty": "Dificultad",
    "Easy": "Fácil",
    "Medium": "Medio",
    "Hard": "Difícil",
    "Expert": "Experto",
    "Community": "Comunidad",
    "Join the discussion": "Únete a la discusión",
    "Ask a question": "Haz una pregunta",
    "Post a reply": "Responder",
    "Report": "Reportar",
    "Edit": "Editar",
    "Delete": "Eliminar",
    "Save": "Guardar",
    "Cancel": "Cancelar",
    "Close": "Cerrar",
    "Open": "Abrir",
    "Back": "Atrás",
    "Submit": "Enviar",
    "Update": "Actualizar",
    "Success": "Éxito",
    "Error": "Error",
    "Warning": "Advertencia",
    "Info": "Info",
    "Loading...": "Cargando...",
    "Processing...": "Procesando...",
    "Free": "Gratis",
    "Pro": "Pro",
    "Premium": "Premium",
    "Upgrade": "Mejorar",
    "Monthly": "Mensual",
    "Yearly": "Anual",
    "Lifetime": "De vida",
    "Best Value": "Mejor Valor",
    "Most Popular": "Más Popular",
    "Recommended": "Recomendado",
    "Unlock Full Access": "Desbloquear Acceso Completo",
    "Start Free Trial": "Prueba Gratis",
    "No Credit Card Required": "No requiere tarjeta",
    "Cancel Anytime": "Cancela cuando quieras",
    "Secure Payment": "Pago Seguro",
    "Satisfaction Guaranteed": "Satisfacción Garantizada"
}

def translate_value(val, common_dict):
    if val in common_dict:
        return common_dict[val]
    # Simple case-insensitive
    for k, v in common_dict.items():
        if k.lower() == val.lower():
            return v
    return val

def process_file(lang, common_dict):
    path = os.path.join(os.getcwd(), 'public', 'locales', lang, 'marketing.json')
    if not os.path.exists(path):
        print(f"File not found: {path}, skipping.")
        return

    data = load_json(path)
    en_path = os.path.join(os.getcwd(), 'public', 'locales', 'en', 'marketing.json')
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
                    if lang_node[k] == v:
                        new_val = translate_value(v, common_dict)
                        if new_val != v:
                            lang_node[k] = new_val
                            modified = True
        return modified

    if walk_and_update(en_data, data):
        print(f"Updating {lang} marketing.json...")
        save_json(path, data)
    else:
        print(f"No changes for {lang} marketing.json.")

if __name__ == "__main__":
    print("Processing PT...")
    process_file('pt', COMMON_PT)
    print("Processing ES...")
    process_file('es', COMMON_ES)
