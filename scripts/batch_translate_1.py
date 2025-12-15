import os
import json

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def update_nested(data, target_key, new_value):
    # This is a simplified updater, assuming unique keys or specific paths can be targeted if implemented fully.
    # For this script, we will traverse and update if key matches AND value equals old_value (English).
    pass

def apply_translations(base_dir, lang, translation_map):
    # translation_map is { namespace: { key: new_value } }
    
    apps_dir = os.path.join(base_dir, 'public', 'locales')
    
    for ns, updates in translation_map.items():
        path = os.path.join(apps_dir, lang, f"{ns}.json")
        en_path = os.path.join(apps_dir, 'en', f"{ns}.json")
        
        if not os.path.exists(path):
            print(f"Skipping {ns} in {lang} - file not found")
            continue
            
        data = load_json(path)
        en_data = load_json(en_path)
        
        # Helper to traverse and update
        def recursive_update(obj, en_obj, prefix=""):
            modified = False
            for k, v in obj.items():
                curr_key = f"{prefix}.{k}" if prefix else k
                
                # If value is string and needs translation
                if isinstance(v, str):
                    # Check if we have a direct update for this full key
                    if curr_key in updates:
                        if obj[k] != updates[curr_key]:
                            obj[k] = updates[curr_key]
                            modified = True
                    # Check if value matches English (untranslated) and we have a generic map (optional)
                    # For now, rely on explicit key mapping
                elif isinstance(v, dict):
                    # corresponding en_obj
                    sub_en = en_obj.get(k, {}) if isinstance(en_obj, dict) else {}
                    if recursive_update(v, sub_en, curr_key):
                        modified = True
            return modified

        if recursive_update(data, en_data):
            print(f"Updating {ns} ({lang})...")
            save_json(path, data)
        else:
            print(f"No changes for {ns} ({lang}).")

if __name__ == "__main__":
    base = os.getcwd()
    
    # PT TRANSLATIONS BATCH 1 (Auth + Common basics)
    pt_map = {
        "auth": {
            "auth.general": "Geral",
            "auth.free": "Grátis",
            "auth.log_in": "Entrar",
            "auth.sign_out": "Sair",
            "auth.back_to_login": "Voltar para o Login", # Fixed "to Entrar"
            "auth.promise": "Promessa"
        },
        "common": {
             "common.general": "Geral",
             "common.free": "Grátis",
             "common.user": "Usuário",
             "common.english": "Inglês",
             "common.other": "Outro",
             "common.added_water": "Água Adicionada",
             "common.factor": "Fator",
             "common.ribbon_stage": "Ponto de Fita",
             "common.creaming_method": "Método Cremoso",
             "common.puffpastry": "Massa Folhada",
             "common.oven_spring": "Salto de Forno",
             "common.new_york": "Nova York",
             "common.share_in_community": "Compartilhar na Comunidade",
             "common.describe_your_problem": "Descreva seu problema",
             "common.detailed_description": "Descrição Detalhada",
             "common.diagnose_problem": "Diagnosticar Problema",
             "common.try_again": "Tente Novamente",
             "common.start_new_diagnosis": "Iniciar Novo Diagnóstico",
             "common.the": "O/A",
             "common.switch_between": "Alternar entre",
             "common.batches": "Fornadas",
             "common.consistencies": "Consistências",
             "common.use_the": "Use o(a)",
             "common.connect_with_other_bakers_in_the": "Conecte-se com outros padeiros na",
             "common.access_a_suite_of_utilities_under_the": "Acesse um conjunto de utilitários sob",
             "common.oven_profiler": "Perfil de Forno",
             "common.hydration_converter": "Conversor de Hidratação",
             "common.manage_your_app_experience_in": "Gerencie sua experiência no app em",
             "common.contact_support": "Contatar Suporte",
             "common.start_bake": "Iniciar Assamento",
             "common.batch": "Fornada",
             "common.consistency_projects": "Projetos de Consistência",
             "common.use_in_calculator": "Usar na Calculadora",
             "common.agreement": "Acordo",
             "common.licensor": "Licenciante",
             "common.software_product": "Produto de Software",
             "common.infringement": "Infração",
             "common.copyright_infringement": "Violação de Direitos Autorais",
             "common.user": "Usuário",
             "common.company": "Empresa",
             "common.service": "Serviço",
             "common.application": "Aplicativo",
             "common.content": "Conteúdo",
             "common.marks": "Marcas",
             "common.contributions": "Contribuições",
             "common.app_preferences": "Preferências do App",
             "common.go_to_global_settings": "Ir para Configurações Globais",
             "common.legal_support": "Suporte Legal",
             "common.danger_zone": "Zona de Perigo",
             "common.go_pro_now": "Seja Pro Agora",
             "common.resources": "Recursos",
             "common.technical_references": "Referências Técnicas",
             "common.default_oven_type": "Tipo de Forno Padrão",
             "common.global_library": "Biblioteca Global",
             "common.any": "Qualquer",
             "common.clear_all_filters": "Limpar filtros",
             "common.method_suitability_matrix": "Matriz de Adequação de Método",
             "common.troubleshooting_scenarios": "Cenários de Solução de Problemas",
             "common.comparative_analysis": "Análise Comparativa",
             "common.tech_specs": "Especificações Técnicas",
             "common.hydration_dynamics": "Dinâmica de Hidratação",
             "common.thermal_engineering": "Engenharia Térmica",
             "common.flour_mechanics": "Mecânica da Farinha",
             "common.base_formula": "Fórmula Base",
             "common.launch_oven_profiler": "Iniciar Perfil de Forno",
             "common.failed_to_upload_image": "Falha ao enviar imagem",
             "common.global_dough_registry": "Registro Global de Massas",
             "common.explore_styles": "Explorar Estilos",
             "common.all_types": "Todos os Tipos",
             "common.clear_filters": "Limpar Filtros",
             "common.in_development": "Em Desenvolvimento",
             "common.professional_utilities": "Utilitários Profissionais",
             "common.baking_tools": "Ferramentas de Assamento",
             "common.go_to_home": "Ir para o Início",
             "common.unlock_the_full_potential": "Desbloqueie todo o potencial",
             "common.pro_membership": "Assinatura Pro",
             "common.leopard_spotting_due_to_rapid_gelatinization": "Manchas de leopardo devido à gelatinização rápida",
             "common.slow_due_to_cold_retard": "Lento devido ao retardo a frio",
             "common.lactic_dominant_over_acetic": "Lático dominante sobre Acético",
             "common.high_protease_activity_during_autolyse": "Alta atividade de protease durante autólise",
             "common.italian_pizza": "Pizza Italiana",
             "common.sourdough_bread": "Pão de Fermentação Natural",
             "common.high_heat": "Alta temperatura",
             "common.long_fermentation": "Longa fermentação",
             "common.medium": "Médio",
             "common.hard": "Difícil",
             "common.expert": "Especialista",
             "common.highly_sensitive_to_overproofing": "Altamente sensível ao excesso de fermentação",
             "common.eggshell_thin": "Fina como casca de ovo",
             "common.dough_becomes_too_sticky_to_stretch": "Massa fica muito pegajosa para esticar",
             "common.use_cold_water_or_reduce_autolyse": "Use água gelada ou reduza a autólise",
             "common.roman_teglia": "Teglia Romana",
             "common.better_for_toppings_density": "Melhor para densidade de coberturas",
             "common.explore": "Explorar"
        }
    }
    
    # ES TRANSLATIONS (Equivalent)
    es_map = {
        "auth": {
            "auth.general": "General",
            "auth.free": "Gratis",
            "auth.log_in": "Iniciar Sesión",
            "auth.sign_out": "Cerrar Sesión",
            "auth.back_to_login": "Volver al inicio",
            "auth.promise": "Promesa"
        },
        "common": {
             "common.general": "General",
             "common.free": "Gratis",
             "common.user": "Usuario",
             "common.english": "Inglés",
             "common.other": "Otro",
             "common.added_water": "Agua Añadida",
             "common.factor": "Factor",
             "common.ribbon_stage": "Punto de Cinta",
             "common.creaming_method": "Método Cremoso",
             "common.puffpastry": "Hojaldre",
             "common.oven_spring": "Salto de Horno",
             "common.new_york": "Nueva York",
             "common.share_in_community": "Compartir en Comunidad",
             "common.describe_your_problem": "Describe tu problema",
             "common.detailed_description": "Descripción Detallada",
             "common.diagnose_problem": "Diagnosticar Problema",
             "common.try_again": "Intentar de Nuevo",
             "common.start_new_diagnosis": "Iniciar Nuevo Diagnóstico",
             "common.the": "El/La",
             "common.switch_between": "Cambiar entre",
             "common.batches": "Lotes",
             "common.consistencies": "Consistencias",
             "common.use_the": "Usa el/la",
             "common.connect_with_other_bakers_in_the": "Conecta con otros panaderos en la",
             "common.access_a_suite_of_utilities_under_the": "Accede a utilidades bajo",
             "common.oven_profiler": "Perfilador de Horno",
             "common.hydration_converter": "Convertidor de Hidratación",
             "common.manage_your_app_experience_in": "Gestiona tu experiencia en",
             "common.contact_support": "Contactar Soporte",
             "common.start_bake": "Iniciar Horneado",
             "common.batch": "Lote",
             "common.consistency_projects": "Proyectos de Consistencia",
             "common.use_in_calculator": "Usar en Calculadora",
             "common.agreement": "Acuerdo",
             "common.licensor": "Licenciante",
             "common.software_product": "Producto de Software",
             "common.infringement": "Infracción",
             "common.copyright_infringement": "Violación de Derechos de Autor",
             "common.user": "Usuario",
             "common.company": "Empresa",
             "common.service": "Servicio",
             "common.application": "Aplicación",
             "common.content": "Contenido",
             "common.marks": "Marcas",
             "common.contributions": "Contribuciones",
             "common.app_preferences": "Preferencias",
             "common.go_to_global_settings": "Ir a Configuración Global",
             "common.legal_support": "Soporte Legal",
             "common.danger_zone": "Zona de Peligro",
             "common.go_pro_now": "Hazte Pro",
             "common.resources": "Recursos",
             "common.technical_references": "Referencias Técnicas",
             "common.default_oven_type": "Tipo de Horno Predeterminado",
             "common.global_library": "Biblioteca Global",
             "common.any": "Cualquiera",
             "common.clear_all_filters": "Limpiar filtros",
             "common.method_suitability_matrix": "Matriz de Idoneidad de Método",
             "common.troubleshooting_scenarios": "Escenarios de Solución de Problemas",
             "common.comparative_analysis": "Análisis Comparativo",
             "common.tech_specs": "Especificaciones Técnicas",
             "common.hydration_dynamics": "Dinámica de Hidratación",
             "common.thermal_engineering": "Ingeniería Térmica",
             "common.flour_mechanics": "Mecánica de la Harina",
             "common.base_formula": "Fórmula Base",
             "common.launch_oven_profiler": "Lanzar Perfilador de Horno",
             "common.failed_to_upload_image": "Error al subir imagen",
             "common.global_dough_registry": "Registro Global de Masas",
             "common.explore_styles": "Explorar Estilos",
             "common.all_types": "Todos los Tipos",
             "common.clear_filters": "Limpiar Filtros",
             "common.in_development": "En Desarrollo",
             "common.professional_utilities": "Utilidades Profesionales",
             "common.baking_tools": "Herramientas de Horneado",
             "common.go_to_home": "Ir al Inicio",
             "common.unlock_the_full_potential": "Desbloquea todo el potencial",
             "common.pro_membership": "Membresía Pro",
             "common.leopard_spotting_due_to_rapid_gelatinization": "Manchas de leopardo por gelatinización rápida",
             "common.slow_due_to_cold_retard": "Lento debido al retardo en frío",
             "common.lactic_dominant_over_acetic": "Láctico dominante sobre Acético",
             "common.high_protease_activity_during_autolyse": "Alta actividad de proteasa durante autólisis",
             "common.italian_pizza": "Pizza Italiana",
             "common.sourdough_bread": "Pan de Masa Madre",
             "common.high_heat": "Alta temperatura",
             "common.long_fermentation": "Larga fermentación",
             "common.medium": "Medio",
             "common.hard": "Difícil",
             "common.expert": "Experto",
             "common.highly_sensitive_to_overproofing": "Altamente sensible al exceso de fermentación",
             "common.eggshell_thin": "Fina como cáscara de huevo",
             "common.dough_becomes_too_sticky_to_stretch": "La masa se vuelve demasiado pegajosa para estirar",
             "common.use_cold_water_or_reduce_autolyse": "Usa agua fría o reduce la autólisis",
             "common.roman_teglia": "Teglia Romana",
             "common.better_for_toppings_density": "Mejor para densidad de coberturas",
             "common.explore": "Explorar"
        }
    }
    
    apply_translations(base, 'pt', pt_map)
    apply_translations(base, 'es', es_map)
