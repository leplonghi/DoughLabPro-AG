import json
import re

# Carregar textos hardcoded
with open('docs/i18n-generated/hardcoded-texts.json', 'r', encoding='utf-8') as f:
    hardcoded = json.load(f)

# Carregar traduções existentes
with open('public/locales/en/translation.json', 'r', encoding='utf-8') as f:
    en_translations = json.load(f)

# Traduções automáticas PT
AUTO_TRANSLATE_PT = {
    # Ações
    "Share": "Compartilhar", "New": "Novo", "Create": "Criar", "Post": "Publicação",
    "Load More": "Carregar Mais", "Try Again": "Tentar Novamente", "Join": "Participar",
    "Unlock": "Desbloquear", "View": "Ver", "Plans": "Planos", "Feature": "Recurso",
    "Full": "Completo", "Access": "Acesso", "Premium": "Premium", "Content": "Conteúdo",
    "Locked": "Bloqueado", "Photo": "Foto", "Click to upload": "Clique para enviar",
    "Title": "Título", "Description": "Descrição", "Optional": "Opcional",
    "Start from Scratch": "Começar do Zero", "From My Lab": "Do Meu Lab",
    "The Result": "O Resultado", "Guidelines": "Diretrizes", "Privacy": "Privacidade",
    "Terms": "Termos", "Return to": "Voltar para", "Back to": "Voltar para",
    "Website": "Site", "Instagram": "Instagram", "My Bakes": "Minhas Fornadas",
    "Recommended": "Recomendado", "Gear": "Equipamento", "Feature Locked": "Recurso Bloqueado",
    "Back to Lab": "Voltar ao Lab", "Choose Your Style": "Escolha Seu Estilo",
    "Define Quantity": "Defina a Quantidade", "Customize Ingredients": "Personalize Ingredientes",
    "Fermentation Strategy": "Estratégia de Fermentação", "Baking Environment": "Ambiente de Assamento",
    "New Bake": "Nova Fornada", "My Batches": "Minhas Fornadas", "My Recipes": "Minhas Receitas",
    "My Flours": "Minhas Farinhas", "Timeline": "Linha do Tempo",
    "Hydration Converter": "Conversor de Hidratação", "Oven Analysis": "Análise de Forno",
    "Doughbot": "Doughbot", "Community Feed": "Feed da Comunidade",
    "Share Your Bake": "Compartilhe Sua Fornada", "The oven is cold": "O forno está frio",
    "Create a Post": "Criar uma Publicação", "Sort By": "Ordenar Por",
    "Unlock this Formula": "Desbloquear esta Fórmula", "DoughLab Pro": "DoughLab Pro",
    "Unlock Full Access": "Desbloquear Acesso Completo", "PRO": "PRO",
    "New Post": "Nova Publicação", "Posts": "Publicações", "Likes": "Curtidas",
    "Clones": "Clones", "Add a comment": "Adicionar um comentário",
    "Bake result": "Resultado da fornada", "NaCl": "NaCl",
    "Share this Bake": "Compartilhar esta Fornada",
}

# Traduções automáticas ES
AUTO_TRANSLATE_ES = {
    # Ações
    "Share": "Compartir", "New": "Nuevo", "Create": "Crear", "Post": "Publicación",
    "Load More": "Cargar Más", "Try Again": "Intentar de Nuevo", "Join": "Unirse",
    "Unlock": "Desbloquear", "View": "Ver", "Plans": "Planes", "Feature": "Función",
    "Full": "Completo", "Access": "Acceso", "Premium": "Premium", "Content": "Contenido",
    "Locked": "Bloqueado", "Photo": "Foto", "Click to upload": "Haz clic para subir",
    "Title": "Título", "Description": "Descripción", "Optional": "Opcional",
    "Start from Scratch": "Empezar desde Cero", "From My Lab": "Desde Mi Lab",
    "The Result": "El Resultado", "Guidelines": "Directrices", "Privacy": "Privacidad",
    "Terms": "Términos", "Return to": "Volver a", "Back to": "Volver a",
    "Website": "Sitio web", "Instagram": "Instagram", "My Bakes": "Mis Horneados",
    "Recommended": "Recomendado", "Gear": "Equipo", "Feature Locked": "Función Bloqueada",
    "Back to Lab": "Volver al Lab", "Choose Your Style": "Elige Tu Estilo",
    "Define Quantity": "Define la Cantidad", "Customize Ingredients": "Personaliza Ingredientes",
    "Fermentation Strategy": "Estrategia de Fermentación", "Baking Environment": "Ambiente de Horneado",
    "New Bake": "Nuevo Horneado", "My Batches": "Mis Lotes", "My Recipes": "Mis Recetas",
    "My Flours": "Mis Harinas", "Timeline": "Línea de Tiempo",
    "Hydration Converter": "Convertidor de Hidratación", "Oven Analysis": "Análisis de Horno",
    "Doughbot": "Doughbot", "Community Feed": "Feed de la Comunidad",
    "Share Your Bake": "Comparte Tu Horneado", "The oven is cold": "El horno está frío",
    "Create a Post": "Crear una Publicación", "Sort By": "Ordenar Por",
    "Unlock this Formula": "Desbloquear esta Fórmula", "DoughLab Pro": "DoughLab Pro",
    "Unlock Full Access": "Desbloquear Acceso Completo", "PRO": "PRO",
    "New Post": "Nueva Publicación", "Posts": "Publicaciones", "Likes": "Me gusta",
    "Clones": "Clones", "Add a comment": "Agregar un comentario",
    "Bake result": "Resultado del horneado", "NaCl": "NaCl",
    "Share this Bake": "Compartir este Horneado",
}

def text_to_key(text):
    """Converte texto em chave de tradução"""
    # Remover pontuação
    key = re.sub(r'[^\w\s]', '', text)
    # Converter para snake_case
    key = key.lower().replace(' ', '_')
    # Limitar tamanho
    key = key[:50]
    return key

def get_section_from_path(file_path):
    """Determina seção baseada no caminho do arquivo"""
    if 'community' in file_path:
        return 'community'
    elif 'calculator' in file_path:
        return 'calculator'
    elif 'mylab' in file_path:
        return 'mylab'
    elif 'learn' in file_path:
        return 'learn'
    elif 'tools' in file_path:
        return 'tools'
    elif 'auth' in file_path:
        return 'auth'
    elif 'ui' in file_path:
        return 'ui'
    else:
        return 'general'

def add_translation(translations, section, key, value):
    """Adiciona tradução ao dicionário"""
    if section not in translations:
        translations[section] = {}
    
    # Evitar duplicatas
    if key in translations[section]:
        # Adicionar sufixo numérico
        i = 2
        while f"{key}_{i}" in translations[section]:
            i += 1
        key = f"{key}_{i}"
    
    translations[section][key] = value
    return f"{section}.{key}"

# Processar textos e criar traduções
new_en = {}
new_pt = {}
new_es = {}

total_added = 0
file_mappings = {}  # file_path -> {old_text: new_key}

print("🔄 Processando textos hardcoded...\n")

for file_path, texts in hardcoded.items():
    section = get_section_from_path(file_path)
    file_mappings[file_path] = {}
    
    for text in texts:
        key = text_to_key(text)
        full_key = add_translation(new_en, section, key, text)
        
        # Traduzir PT
        pt_text = AUTO_TRANSLATE_PT.get(text, text)
        add_translation(new_pt, section, key, pt_text)
        
        # Traduzir ES
        es_text = AUTO_TRANSLATE_ES.get(text, text)
        add_translation(new_es, section, key, es_text)
        
        file_mappings[file_path][text] = full_key
        total_added += 1

print(f"✅ Criadas {total_added} novas chaves\n")

# Mesclar com traduções existentes
en_translations.update(new_en)

# Salvar EN
with open('public/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_translations, f, indent=2, ensure_ascii=False)
print("✅ EN atualizado")

# Carregar e atualizar PT
with open('public/locales/pt/translation.json', 'r', encoding='utf-8') as f:
    pt_translations = json.load(f)
pt_translations.update(new_pt)
with open('public/locales/pt/translation.json', 'w', encoding='utf-8') as f:
    json.dump(pt_translations, f, indent=2, ensure_ascii=False)
print("✅ PT atualizado")

# Carregar e atualizar ES
with open('public/locales/es/translation.json', 'r', encoding='utf-8') as f:
    es_translations = json.load(f)
es_translations.update(new_es)
with open('public/locales/es/translation.json', 'w', encoding='utf-8') as f:
    json.dump(es_translations, f, indent=2, ensure_ascii=False)
print("✅ ES atualizado")

# Salvar mapeamento para uso posterior
with open('docs/i18n-generated/text-to-key-mapping.json', 'w', encoding='utf-8') as f:
    json.dump(file_mappings, f, indent=2, ensure_ascii=False)
print("✅ Mapeamento salvo")

print(f"\n🎉 {total_added} chaves adicionadas aos 3 idiomas!")
