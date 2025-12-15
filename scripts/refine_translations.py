import json
import os

# Dictionary for manual refinements of untranslated keys found in step 280
MANUAL_TRANSLATIONS = {
    # Common PT
    "pt": {
        "paywall.pricing.locked": "Sua região de cobrança está bloqueada em <strong>{country}</strong>.",
        "paywall.pricing.provisional": "Preços para <strong>{country}</strong>. País final confirmado no checkout.",
        "tools.each_cause_will_be_explained_based_on_baking_scien": "Cada causa será explicada com base na ciência da panificação.",
        "tools.technical_suggestions_for_correction_will_appear_h": "Sugestões técnicas para correção aparecerão aqui.",
        "tools.solutions_will_include_recipe_and_process_adjustme": "Soluções incluirão ajustes de receita e processo.",
        "tools.fanforced_air_circulation": "Circulação de ar forçada",
        "doughbot_page.running_diagnosis": "Executando diagnóstico...",
        "doughbot_page.diagnosis_complete": "Diagnóstico Completo!",
        "doughbot_page.unlock_full_solution": "Desbloquear Solução Completa",
        "doughbot_page.ai_powered_diagnostic_engine_analyze_you": "Motor de diagnóstico por IA. Analise falhas e receba correções científicas.",
        "doughbot_page.e_g_my_65_hydration_dough_sat_in_the_fri": "Ex: Minha massa de 65% de hidratação ficou na geladeira por 24h...",
        "doughbot_page.doughbot_pro_diagnosis": "Diagnóstico Doughbot Pro",
        "styledetail_page.what_s_happening_chemically": "O que está acontecendo quimicamente?",
        "styledetail_page.pro_tips_from_the_masters": "Dicas Pro dos Mestres",
        "styledetail_page.what_happens_if": "O que acontece se...?",
        "styledetail_page.consequence": "Consequência:",
        "styledetail_page.correction": "Correção",
        "styledetail_page.style_comparisons": "Comparações de Estilo",
        "styledetail_page.why_choose_this": "Por que escolher este?",
        "styledetail_page.master_class_q_a": "Master Class Q&A",
        "styledetail_page.expert_analysis_and_logic_breakdown": "Análise de expert e lógica detalhada",
        "styledetail_page.solution": "Solução:",
        "styledetail_page.use_formula": "Usar Fórmula",
        "styledetail_page.historical_cultural_context": "Contexto Histórico e Cultural",
        "styledetail_page.global_presence": "Presença Global",
        "styledetail_page.regulation": "Regulação:",
        "styledetail_page.step_by_step_molecular_breakdown": "Detalhamento molecular passo-a-passo",
        "styledetail_page.references_validation": "Referências e Validação",
        "styledetail_page.scientifically_validated": "Cientificamente Validado",
        "styledetail_page.primary_sources": "Fontes Primárias",
        "styledetail_page.standard_60": "Padrão (60%)",
        "styledetail_page.high_80": "Alta (80%+)",
        "styledetail_page.high_humidity_gt_70": "Alta Umidade (&gt;70%)",
        "styledetail_page.hot_dry_climate": "Clima Quente/Seco",
        "styledetail_page.evaporation_increases_increase_hydration": "Evaporação aumenta. Aumente a hidratação em",
        "styledetail_page.target": "Alvo",
        "styledetail_page.heat_transfer": "Transferência de Calor",
        "styledetail_page.p_l_ratio": "Razão P/L",
        "styledetail_page.protein": "Proteína",
        "styledetail_page.adjust_baking_metrics_for_your_specific_": "Ajuste métricas para seu equipamento específico.",
        "language_page.coming_soon": "Em breve...",
        "proactivated_page.pro_activated": "Pro Ativado",
        "mylablevainpet_page.enjoy_full_access_to_levain_manager_your": "Aproveite acesso total ao Gerenciador de Levain. Seu teste expira em 7 dias.",
        "mylablevainpet_page.last_feeding": "Última Alimentação",
        "mylablevainpet_page.age": "Idade",
        "mylablevainpet_page.activity_chart": "Gráfico de Atividade",
        "mylablevainpet_page.rise_vs_time": "Crescimento vs Tempo",
        "mylablevainpet_page.acidity_tracking": "Rastreio de Acidez",
        "consistencydetail_page.test_series_not_found": "Série de testes não encontrada.",
        "consistencydetail_page.summary_of_your_controlled_test_series": "Resumo da sua série de testes controlados.",
        "consistencydetail_page.select_a_bake_to_associate": "Selecione uma fornada para associar...",
        "consistencydetail_page.series_notes": "Notas da Série",
        "consistencydetail_page.click_to_add_notes": "Clique para adicionar notas...",
        "consistencydetail_page.ai_analysis": "Análise de IA",
        "consistencydetail_page.coming_soon_ai_will_analyze_your_bake_re": "Em breve: IA analisará seus resultados.",
        "consistencydetail_page.test_parameters": "Parâmetros de Teste",
        "consistencydetail_page.variable": "Variável:",
        "consistencydetail_page.steps_tested": "Passos testados:",
        "levainmarketing_page.pro_feature_locked": "Recurso Pro Bloqueado",
        "levainmarketing_page.levain_manager": "Gerenciador de Levain",
        "levainmarketing_page.smart_schedule": "Cronograma Inteligente",
        "levainmarketing_page.health_tracking": "Monitoramento de Saúde",
        "levainmarketing_page.multiple_starters": "Múltiplos Fermentos",
        "levainlayout.tabs": "Abas",
        "levainform_page.create_edit_levain_placeholder": "Criar/Editar Levain (Placeholder)",
        "levainform_page.this_form_will_be_used_to_create_a_new_s": "Este formulário será usado para criar/editar fermento.",
        "levaindetail_page.levain_not_found": "Levain não encontrado",
        "levaindetail_page.health": "Saúde",
        "levaindetail_page.age": "Idade",
        "levaindetail_page.recent_feedings": "Alimentações Recentes",
        "levaininsights.based_on_feeding_consistency_and_recent_": "Baseado na consistência e atividade recente.",
        "levaininsights.log_at_least_2_feedings_to_see_analysis": "Registre ao menos 2 alimentações.",
        "levaininsights.last_20_feedings": "Últimas 20 alimentações",
        "levaininsights.avg_frequency": "Frequência Média",
        "levaininsights.avg_temp": "Temp Média",
        "levaininsights.total_feedings": "Total de Alimentações",
        "levainfeedingform.ratio_calculator": "Calculadora de Proporção",
        "levainfeedingform.whole_wheat": "Integral",
        "levainfeedingform.rye": "Centeio",
        "levainfeedingform.blend": "Mistura",
        "levainfeedingform.ratio_used": "Proporção Usada",
        "levainfeedingform.optional": "Opcional",
        "dashboard_page.total_bakes": "Total de Fornadas",
        "hydrationconverter_page.resulting_total_weight": "Peso Total Resultante:",
        "hydrationconverter_page.calculate_exactly_how_much_water_or_flou": "Calcule exatamente quanta água ou farinha adicionar.",
        "references_page.pizza_official_rules_and_associations": "Pizza – Regras Oficiais e Associações",
        "references_page.terminology_and_concepts": "Terminologia e Conceitos",
        "references_page.autolyse_fermentolyse_and_maturation": "Autólise, Fermentólise e Maturação"
    },
    # Common ES
    "es": {
        "paywall.pricing.locked": "Su región de facturación está bloqueada en <strong>{country}</strong>.",
        "paywall.pricing.provisional": "Precios para <strong>{country}</strong>. País final confirmado al pagar.",
         "tools.each_cause_will_be_explained_based_on_baking_scien": "Cada causa se explicará según la ciencia de la panadería.",
        "tools.technical_suggestions_for_correction_will_appear_h": "Las sugerencias técnicas aparecerán aquí.",
        "tools.solutions_will_include_recipe_and_process_adjustme": "Las soluciones incluirán ajustes de receta y proceso.",
        "tools.fanforced_air_circulation": "Circulación de aire forzada",
        "doughbot_page.running_diagnosis": "Ejecutando diagnóstico...",
        "doughbot_page.diagnosis_complete": "¡Diagnóstico Completo!",
        "doughbot_page.unlock_full_solution": "Desbloquear Solución Completa",
        "doughbot_page.ai_powered_diagnostic_engine_analyze_you": "Motor de diagnóstico por IA. Analiza fallos y recibe correcciones científicas.",
        "doughbot_page.e_g_my_65_hydration_dough_sat_in_the_fri": "Ej: Mi masa al 65% de hidratación estuvo en la nevera 24h...",
        "doughbot_page.doughbot_pro_diagnosis": "Diagnóstico Doughbot Pro",
        "styledetail_page.what_s_happening_chemically": "¿Qué está pasando químicamente?",
        "styledetail_page.pro_tips_from_the_masters": "Consejos Pro de Maestros",
        "styledetail_page.what_happens_if": "¿Qué pasa si...?",
        "styledetail_page.consequence": "Consecuencia:",
        "styledetail_page.correction": "Corrección",
        "styledetail_page.style_comparisons": "Comparaciones de Estilo",
        "styledetail_page.why_choose_this": "¿Por qué elegir este?",
        "styledetail_page.master_class_q_a": "Master Class Q&A",
        "styledetail_page.expert_analysis_and_logic_breakdown": "Análisis experto y desglose lógico",
        "styledetail_page.solution": "Solución:",
        "styledetail_page.use_formula": "Usar Fórmula",
        "styledetail_page.historical_cultural_context": "Contexto Histórico y Cultural",
        "styledetail_page.global_presence": "Presencia Global",
        "styledetail_page.regulation": "Regulación:",
        "styledetail_page.step_by_step_molecular_breakdown": "Desglose molecular paso a paso",
        "styledetail_page.references_validation": "Referencias y Validación",
        "styledetail_page.scientifically_validated": "Científicamente Validado",
        "styledetail_page.primary_sources": "Fuentes Primarias",
        "styledetail_page.standard_60": "Estándar (60%)",
        "styledetail_page.high_80": "Alta (80%+)",
        "styledetail_page.high_humidity_gt_70": "Alta Humedad (&gt;70%)",
        "styledetail_page.hot_dry_climate": "Clima Caliente/Seco",
        "styledetail_page.evaporation_increases_increase_hydration": "La evaporación aumenta. Aumenta la hidratación en",
        "styledetail_page.target": "Objetivo",
        "styledetail_page.heat_transfer": "Transferencia de Calor",
        "styledetail_page.p_l_ratio": "Razón P/L",
        "styledetail_page.protein": "Proteína",
        "styledetail_page.adjust_baking_metrics_for_your_specific_": "Ajusta métricas para tu equipo específico.",
        "language_page.coming_soon": "Próximamente...",
        "proactivated_page.pro_activated": "Pro Activado",
        "mylablevainpet_page.enjoy_full_access_to_levain_manager_your": "Disfruta acceso total al Gestor de Levain. Tu prueba expira en 7 días.",
        "mylablevainpet_page.last_feeding": "Última Alimentación",
        "mylablevainpet_page.age": "Edad",
        "mylablevainpet_page.activity_chart": "Gráfico de Actividad",
        "mylablevainpet_page.rise_vs_time": "Crecimiento vs Tiempo",
        "mylablevainpet_page.acidity_tracking": "Rastreo de Acidez",
        "consistencydetail_page.test_series_not_found": "Serie de pruebas no encontrada.",
        "consistencydetail_page.summary_of_your_controlled_test_series": "Resumen de tu serie de pruebas controladas.",
        "consistencydetail_page.select_a_bake_to_associate": "Selecciona una horneada para asociar...",
        "consistencydetail_page.series_notes": "Notas de la Serie",
        "consistencydetail_page.click_to_add_notes": "Clic para agregar notas...",
        "consistencydetail_page.ai_analysis": "Análisis de IA",
        "consistencydetail_page.coming_soon_ai_will_analyze_your_bake_re": "Próximamente: IA analizará tus resultados.",
        "consistencydetail_page.test_parameters": "Parámetros de Prueba",
        "consistencydetail_page.variable": "Variable:",
        "consistencydetail_page.steps_tested": "Pasos probados:",
        "levainmarketing_page.pro_feature_locked": "Función Pro Bloqueada",
        "levainmarketing_page.levain_manager": "Gestor de Levain",
        "levainmarketing_page.smart_schedule": "Agenda Inteligente",
        "levainmarketing_page.health_tracking": "Monitor de Salud",
        "levainmarketing_page.multiple_starters": "Múltiples Fermentos",
        "levainlayout.tabs": "Pestañas",
        "levainform_page.create_edit_levain_placeholder": "Crear/Editar Levain (Placeholder)",
        "levainform_page.this_form_will_be_used_to_create_a_new_s": "Este formulario se usará para crear/editar fermento.",
        "levaindetail_page.levain_not_found": "Levain no encontrado",
        "levaindetail_page.health": "Salud",
        "levaindetail_page.age": "Edad",
        "levaindetail_page.recent_feedings": "Alimentaciones Recientes",
        "levaininsights.based_on_feeding_consistency_and_recent_": "Basado en consistencia y actividad reciente.",
        "levaininsights.log_at_least_2_feedings_to_see_analysis": "Registra al menos 2 alimentaciones.",
        "levaininsights.last_20_feedings": "Últimas 20 alimentaciones",
        "levaininsights.avg_frequency": "Frecuencia Media",
        "levaininsights.avg_temp": "Temp Media",
        "levaininsights.total_feedings": "Total de Alimentaciones",
        "levainfeedingform.ratio_calculator": "Calculadora de Proporción",
        "levainfeedingform.whole_wheat": "Integral",
        "levainfeedingform.rye": "Centeno",
        "levainfeedingform.blend": "Mezcla",
        "levainfeedingform.ratio_used": "Proporción Usada",
        "levainfeedingform.optional": "Opcional",
        "dashboard_page.total_bakes": "Total de Horneadas",
        "hydrationconverter_page.resulting_total_weight": "Peso Total Resultante:",
        "hydrationconverter_page.calculate_exactly_how_much_water_or_flou": "Calcula exactamente cuánta agua o harina añadir.",
        "references_page.pizza_official_rules_and_associations": "Pizza – Reglas Oficiales y Asociaciones",
        "references_page.terminology_and_concepts": "Terminología y Conceptos",
        "references_page.autolyse_fermentolyse_and_maturation": "Autólisis, Fermentólisis y Maduración"
    }
}

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def apply_refinements(lang, namespace, overrides):
    path = os.path.join("public", "locales", lang, f"{namespace}.json")
    if not os.path.exists(path):
        print(f"Skipping {lang}/{namespace}, file not found.")
        return
    
    data = load_json(path)
    count = 0
    
    # Flatten checks for easier key lookup
    # But since overrides are flattened keys (e.g. "paywall.pricing.locked"), we need to traverse
    for flat_key, translated_val in overrides.items():
        parts = flat_key.split('.')
        current = data
        
        # Determine if top-level match needs recursive digging
        # Assuming the structure matches the dot notation
        
        success = True
        for i, part in enumerate(parts[:-1]):
            if part in current:
                current = current[part]
            else:
                success = False
                break
        
        if success:
            last_key = parts[-1]
            if last_key in current:
                # Update!
                if current[last_key] != translated_val:
                    current[last_key] = translated_val
                    count += 1
            else:
                # Key might be missing or structure mismatch, try to create it if parent exists
                # But strict matching is safer.
                pass
    
    if count > 0:
        print(f"Updated {count} keys in {lang}/{namespace}.json")
        save_json(path, data)
    else:
        print(f"No refinements needed for {lang}/{namespace}.json")

if __name__ == "__main__":
    print("Applying specific refinements...")
    for lang in ['pt', 'es']:
        apply_refinements(lang, 'common', MANUAL_TRANSLATIONS[lang])
    print("Refinement complete.")
