
import json
import os

# Path to the Portuguese common translation file
file_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\pt\common.json'

corrections = {
    "styledetail_page": {
        "the_hydration_logic": "A Lógica da Hidratação",
        "direct_method": "Método Direto",
        "the_scientific_process": "O Processo Científico",
        "flour_will_absorb_less_water_reduce_hydr": "A farinha absorverá menos água. Reduza a hidratação em",
        "evaporation_increases_increase_hydration": "A evaporação aumenta. Aumente a hidratação em",
        "home_oven_strategy_max_250_c": "Estratégia para Forno Doméstico (Máx 250°C)",
        "recommended_strength": "Força Recomendada",
        "p_l_ratio": "Relação P/L",
        "adjust_baking_metrics_for_your_specific_": "Ajuste métricas para seu equipamento específico.",
        "biga_stiff": "Biga (Dura)",
        "poolish_liquid": "Poolish (Líquido)"
    },
    "levaininsights": {
        "starter_health_score": "Pontuação de Saúde do Levain",
        "based_on_feeding_consistency_and_recent_": "Baseado na consistência de alimentação e atividade recente.",
        "no_insights_available": "Sem insights disponíveis"
    },
    "tools": {
        "high_hydration_risks": "Riscos de Alta Hidratação",
        "oven_type": "Tipo de Forno",
        "baking_surface": "Superfície de Assamento",
        "baking_steel": "Aço de Assamento",
        "analyze_oven_profile": "Analisar Perfil do Forno",
        "home_gas_oven": "Forno a Gás Doméstico",
        "home_electric_oven": "Forno Elétrico Doméstico",
        "convection_oven": "Forno de Convecção", 
        "convection_mode": "Modo Convecção"
    },
    "references_page": {
        "pizza_official_rules_and_associations": "Pizza – Regras Oficiais e Associações",
        "baking_technical_books": "Panificação – Livros Técnicos",
        "flour_technical_data_and_strength_w": "Farinha – Dados Técnicos e Força (W)"
    }
}

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    updated_count = 0
    
    for section, modifications in corrections.items():
        if section in data:
            for key, value in modifications.items():
                if key in data[section]:
                    data[section][key] = value
                    updated_count += 1
                else:
                    print(f"Key not found in {section}: {key}")
        else:
            print(f"Section not found: {section}")

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False) # indent 2 to match original style if roughly
        
    print(f"Successfully updated {updated_count} keys in {file_path}")

except Exception as e:
    print(f"Error updating file: {e}")
