import json
import re

# Dicionário de traduções comuns EN -> PT
TRANSLATIONS_PT = {
    # Ações comuns
    "Save": "Salvar",
    "Cancel": "Cancelar",
    "Delete": "Excluir",
    "Edit": "Editar",
    "Close": "Fechar",
    "Back": "Voltar",
    "Next": "Próximo",
    "Previous": "Anterior",
    "Submit": "Enviar",
    "Confirm": "Confirmar",
    "Add": "Adicionar",
    "Remove": "Remover",
    "Update": "Atualizar",
    "Create": "Criar",
    "Search": "Buscar",
    "Filter": "Filtrar",
    "Sort": "Ordenar",
    "View": "Ver",
    "Download": "Baixar",
    "Upload": "Enviar",
    "Share": "Compartilhar",
    "Copy": "Copiar",
    "Paste": "Colar",
    "Cut": "Cortar",
    "Print": "Imprimir",
    "Export": "Exportar",
    "Import": "Importar",
    
    # Termos técnicos
    "Hydration": "Hidratação",
    "Fermentation": "Fermentação",
    "Temperature": "Temperatura",
    "Flour": "Farinha",
    "Water": "Água",
    "Salt": "Sal",
    "Yeast": "Fermento",
    "Sugar": "Açúcar",
    "Oil": "Óleo",
    "Dough": "Massa",
    "Pizza": "Pizza",
    "Bread": "Pão",
    "Levain": "Levain",
    "Starter": "Fermento Natural",
    "Recipe": "Receita",
    "Ingredient": "Ingrediente",
    "Method": "Método",
    "Technique": "Técnica",
    "Process": "Processo",
    "Result": "Resultado",
    "Quality": "Qualidade",
    "Texture": "Textura",
    "Flavor": "Sabor",
    "Aroma": "Aroma",
    "Color": "Cor",
    "Crust": "Crosta",
    "Crumb": "Miolo",
    "Oven": "Forno",
    "Baking": "Assamento",
    "Mixing": "Mistura",
    "Kneading": "Sovagem",
    "Proofing": "Fermentação",
    "Shaping": "Modelagem",
    
    # UI comum
    "Loading": "Carregando",
    "Error": "Erro",
    "Success": "Sucesso",
    "Warning": "Aviso",
    "Info": "Informação",
    "Help": "Ajuda",
    "Settings": "Configurações",
    "Profile": "Perfil",
    "Account": "Conta",
    "Login": "Entrar",
    "Logout": "Sair",
    "Sign in": "Entrar",
    "Sign up": "Cadastrar",
    "Register": "Registrar",
    "Forgot password": "Esqueci a senha",
    "Reset password": "Redefinir senha",
    "Change password": "Alterar senha",
    "Email": "Email",
    "Password": "Senha",
    "Username": "Nome de usuário",
    "Name": "Nome",
    "Phone": "Telefone",
    "Address": "Endereço",
    "City": "Cidade",
    "Country": "País",
    "Language": "Idioma",
    "Theme": "Tema",
    "Notifications": "Notificações",
    "Privacy": "Privacidade",
    "Terms": "Termos",
    "About": "Sobre",
    "Contact": "Contato",
    "Support": "Suporte",
    "FAQ": "Perguntas Frequentes",
    "Documentation": "Documentação",
    "Tutorial": "Tutorial",
    "Guide": "Guia",
    "Reference": "Referência",
    "Example": "Exemplo",
    "Demo": "Demonstração",
    "Beta": "Beta",
    "New": "Novo",
    "Popular": "Popular",
    "Featured": "Destaque",
    "Recommended": "Recomendado",
    "Trending": "Em Alta",
    "Latest": "Mais Recente",
    "All": "Todos",
    "None": "Nenhum",
    "Other": "Outro",
    "More": "Mais",
    "Less": "Menos",
    "Show": "Mostrar",
    "Hide": "Ocultar",
    "Expand": "Expandir",
    "Collapse": "Recolher",
    "Open": "Abrir",
    "Yes": "Sim",
    "No": "Não",
    "OK": "OK",
    "Got it": "Entendi",
    "Continue": "Continuar",
    "Skip": "Pular",
    "Finish": "Concluir",
    "Done": "Concluído",
    "Completed": "Completo",
    "Pending": "Pendente",
    "Active": "Ativo",
    "Inactive": "Inativo",
    "Enabled": "Ativado",
    "Disabled": "Desativado",
    "Online": "Online",
    "Offline": "Offline",
    "Available": "Disponível",
    "Unavailable": "Indisponível",
    "Free": "Grátis",
    "Pro": "Pro",
    "Premium": "Premium",
    "Basic": "Básico",
    "Advanced": "Avançado",
    "Professional": "Profissional",
    "Enterprise": "Empresarial",
}

# Dicionário EN -> ES
TRANSLATIONS_ES = {
    # Ações comuns
    "Save": "Guardar",
    "Cancel": "Cancelar",
    "Delete": "Eliminar",
    "Edit": "Editar",
    "Close": "Cerrar",
    "Back": "Volver",
    "Next": "Siguiente",
    "Previous": "Anterior",
    "Submit": "Enviar",
    "Confirm": "Confirmar",
    "Add": "Agregar",
    "Remove": "Quitar",
    "Update": "Actualizar",
    "Create": "Crear",
    "Search": "Buscar",
    "Filter": "Filtrar",
    "Sort": "Ordenar",
    "View": "Ver",
    "Download": "Descargar",
    "Upload": "Subir",
    "Share": "Compartir",
    "Copy": "Copiar",
    "Paste": "Pegar",
    "Cut": "Cortar",
    "Print": "Imprimir",
    "Export": "Exportar",
    "Import": "Importar",
    
    # Termos técnicos
    "Hydration": "Hidratación",
    "Fermentation": "Fermentación",
    "Temperature": "Temperatura",
    "Flour": "Harina",
    "Water": "Agua",
    "Salt": "Sal",
    "Yeast": "Levadura",
    "Sugar": "Azúcar",
    "Oil": "Aceite",
    "Dough": "Masa",
    "Pizza": "Pizza",
    "Bread": "Pan",
    "Levain": "Levain",
    "Starter": "Masa Madre",
    "Recipe": "Receta",
    "Ingredient": "Ingrediente",
    "Method": "Método",
    "Technique": "Técnica",
    "Process": "Proceso",
    "Result": "Resultado",
    "Quality": "Calidad",
    "Texture": "Textura",
    "Flavor": "Sabor",
    "Aroma": "Aroma",
    "Color": "Color",
    "Crust": "Corteza",
    "Crumb": "Miga",
    "Oven": "Horno",
    "Baking": "Horneado",
    "Mixing": "Mezcla",
    "Kneading": "Amasado",
    "Proofing": "Fermentación",
    "Shaping": "Formado",
    
    # UI comum
    "Loading": "Cargando",
    "Error": "Error",
    "Success": "Éxito",
    "Warning": "Advertencia",
    "Info": "Información",
    "Help": "Ayuda",
    "Settings": "Configuración",
    "Profile": "Perfil",
    "Account": "Cuenta",
    "Login": "Iniciar sesión",
    "Logout": "Cerrar sesión",
    "Sign in": "Iniciar sesión",
    "Sign up": "Registrarse",
    "Register": "Registrarse",
    "Forgot password": "Olvidé mi contraseña",
    "Reset password": "Restablecer contraseña",
    "Change password": "Cambiar contraseña",
    "Email": "Email",
    "Password": "Contraseña",
    "Username": "Nombre de usuario",
    "Name": "Nombre",
    "Phone": "Teléfono",
    "Address": "Dirección",
    "City": "Ciudad",
    "Country": "País",
    "Language": "Idioma",
    "Theme": "Tema",
    "Notifications": "Notificaciones",
    "Privacy": "Privacidad",
    "Terms": "Términos",
    "About": "Acerca de",
    "Contact": "Contacto",
    "Support": "Soporte",
    "FAQ": "Preguntas Frecuentes",
    "Documentation": "Documentación",
    "Tutorial": "Tutorial",
    "Guide": "Guía",
    "Reference": "Referencia",
    "Example": "Ejemplo",
    "Demo": "Demostración",
    "Beta": "Beta",
    "New": "Nuevo",
    "Popular": "Popular",
    "Featured": "Destacado",
    "Recommended": "Recomendado",
    "Trending": "Tendencia",
    "Latest": "Más Reciente",
    "All": "Todos",
    "None": "Ninguno",
    "Other": "Otro",
    "More": "Más",
    "Less": "Menos",
    "Show": "Mostrar",
    "Hide": "Ocultar",
    "Expand": "Expandir",
    "Collapse": "Contraer",
    "Open": "Abrir",
    "Yes": "Sí",
    "No": "No",
    "OK": "OK",
    "Got it": "Entendido",
    "Continue": "Continuar",
    "Skip": "Saltar",
    "Finish": "Finalizar",
    "Done": "Hecho",
    "Completed": "Completado",
    "Pending": "Pendiente",
    "Active": "Activo",
    "Inactive": "Inactivo",
    "Enabled": "Activado",
    "Disabled": "Desactivado",
    "Online": "En línea",
    "Offline": "Fuera de línea",
    "Available": "Disponible",
    "Unavailable": "No disponible",
    "Free": "Gratis",
    "Pro": "Pro",
    "Premium": "Premium",
    "Basic": "Básico",
    "Advanced": "Avanzado",
    "Professional": "Profesional",
    "Enterprise": "Empresarial",
}

def simple_translate(text, translations):
    """Tradução simples baseada em dicionário"""
    if not text or not isinstance(text, str):
        return text
    
    # Tentar tradução direta
    if text in translations:
        return translations[text]
    
    # Tentar tradução de palavras individuais
    words = text.split()
    translated_words = []
    for word in words:
        # Remover pontuação para comparação
        clean_word = word.strip('.,!?:;')
        if clean_word in translations:
            translated_words.append(word.replace(clean_word, translations[clean_word]))
        else:
            translated_words.append(word)
    
    result = ' '.join(translated_words)
    
    # Se não mudou nada, retornar original
    return result if result != text else text

def translate_dict(data, translations, lang_code):
    """Traduz recursivamente um dicionário"""
    if isinstance(data, dict):
        return {k: translate_dict(v, translations, lang_code) for k, v in data.items()}
    elif isinstance(data, str):
        translated = simple_translate(data, translations)
        # Se não conseguiu traduzir, manter original
        return translated
    else:
        return data

# Carregar arquivo EN
with open('public/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

# Traduzir para PT
print("Traduzindo para Português...")
pt_data = translate_dict(en_data, TRANSLATIONS_PT, 'pt')
with open('public/locales/pt/translation.json', 'w', encoding='utf-8') as f:
    json.dump(pt_data, f, indent=2, ensure_ascii=False)
print("✅ Português concluído")

# Traduzir para ES
print("Traduzindo para Espanhol...")
es_data = translate_dict(en_data, TRANSLATIONS_ES, 'es')
with open('public/locales/es/translation.json', 'w', encoding='utf-8') as f:
    json.dump(es_data, f, indent=2, ensure_ascii=False)
print("✅ Espanhol concluído")

print("\n🎉 Traduções automáticas concluídas!")
print(f"Total de chaves: {len(json.dumps(en_data))}")
