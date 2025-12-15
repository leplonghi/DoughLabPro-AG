
import json
import os

# Path to the Portuguese calculator translation file
file_path = r'c:\Users\eduar\OneDrive\Desktop\Antigravity\doughlabpro\public\locales\pt\calculator.json'

# Dictionary of specific key modifications (nested under 'styles' usually, but we'll check structure)
# The file structure is "form", "results", "calculator", "styles"

corrections = {
    "styles": {
        "try": "Experimente:",
        "define_the_parameters_of_your_custom_dough": "Defina os parâmetros da sua massa personalizada",
        "a_brief_appetizing_description_of_this_dough_style": "Uma descrição breve e apetitosa deste estilo de massa...",
        "explain_the_scientific": "Explicação Científica",
        "characteristics__tags": "Características e Tags",
        "consequence": "Consequência:",
        "solution": "Solução:",
        "historical__cultural_context": "Contexto Histórico e Cultural",
        "stepbystep_molecular_breakdown": "Análise molecular passo a passo",
        "references__validation": "Referências e Validação",
        "parameters_verified_against_cereal_chemistry_stand": "Parâmetros verificados conforme padrões de química de cereais.",
        "flour_will_absorb_less_water_reduce_hydration_by": "A farinha absorverá menos água. Reduza a hidratação em",
        "evaporation_increases_increase_hydration_by": "A evaporação aumenta. Aumente a hidratação em",
        "adjust_baking_metrics_for_your_specific_equipment": "Ajuste as métricas de cozimento para seu equipamento específico.",
        "my_custom_styles": "Meus Estilos Personalizados",
        "save_generated_style": "Salvar Estilo Gerado",
        "coming_soon_early_2026_roadmap": "Em Breve: Roadmap Início de 2026",
        "no_styles_match_your_filter": "Nenhum estilo corresponde ao seu filtro.",
        "try_adjusting_your_filters_or_search_terms": "Tente ajustar seus filtros ou termos de busca.",
        "discover_professional_dough_specifications_from_ar": "Descubra especificações profissionais de massas de todo o mundo.",
        "whats_happening_chemically": "O que está acontecendo quimicamente?",
        "what_happens_if": "O que Acontece Se...?",
        "why_choose_this": "Por que Escolher Isto?",
        "master_class_qa": "Master Class Perguntas e Respostas",
        "short_rest_after_mixing_to_hydrate_flour": "Curto descanso após misturar para hidratar a farinha",
        "no_fermentation_in_traditional_formulas": "Sem fermentação nas fórmulas tradicionais",
        "baked_in_oiled_sheet_pans_for_crisp_bottom_and_ten": "Assado em assadeiras untadas para fundo crocante e miolo macio.",
        "requires_strong_steam_at_the_beginning_of_the_bake": "Requer vapor forte no início do cozimento.",
        "often_topped_with_seeds_avoid_overbaking_to_keep_c": "Geralmente coberto com sementes; evite assar demais para manter o miolo macio.",
        "bake_with_good_steam_handle_gently_to_preserve_gas": "Asse com bom vapor; manuseie suavemente para preservar a estrutura de gás.",
        "baker_must_adapt_to_specific_grain_absorption_and_": "O padeiro deve adaptar-se à absorção e força específica do grão.",
        "baked_close_together_for_soft_pullapart_texture": "Assados próximos para textura macia e fácil de separar.",
        "used_as_the_base_for_stews_and_dishes_torn_by_hand": "Usado como base para ensopados e pratos, rasgado à mão para pegar a comida.",
        "bake_to_golden_color_without_overdrying": "Asse até ficar dourado sem ressecar.",
        "baked_gently_to_avoid_thick_crust_often_lidded_for": "Assado suavemente para evitar crosta grossa; muitas vezes com tampa para formato quadrado.",
        "cooked_quickly_on_hot_griddles_turned_once": "Cozido rapidamente em chapas quentes, virado uma vez.",
        "requires_good_steaming_scoring_adapted_to_dough_st": "Requer bom vapor; corte adaptado à força da massa.",
        "home_versions_use_very_hot_cast_iron_pans_or_stone": "Versões caseiras usam frigideiras de ferro fundido muito quentes ou pedras.",
        "works_well_in_dutch_ovens_or_steaminjected_decks": "Funciona bem em panelas de ferro ou fornos com injeção de vapor.",
        "lidded_pans_create_tight_square_crumb_structure": "Formas com tampa criam estrutura de miolo quadrada e compacta.",
        "requires_good_steaming_and_gentle_shaping_to_prese": "Requer bom vapor e modelagem suave para preservar o miolo aberto.",
        "often_baked_as_large_loaves_with_bold_crust": "Muitas vezes assado como pães grandes com crosta marcante.",
        "often_finished_with_egg_wash_or_sugar_toppings": "Muitas vezes finalizado com pincelada de ovo ou coberturas de açúcar.",
        "strong_steam_early_in_bake_to_create_thin_crisp_cr": "Vapor forte no início do cozimento para criar crosta fina e crocante.",
        "popular_in_bakeries_and_home_consumption_as_a_brea": "Popular em padarias e consumo doméstico como pão de café da manhã e lanche.",
        "often_glazed_for_a_slightly_glossy_crust": "Muitas vezes glaceado para uma crosta levemente brilhante.",
        "very_hot_stone_or_deck_encourages_pocket_formation": "Pedra ou lastro muito quente encoraja a formação de bolsa.",
        "consumed_as_dense_flavorful_loaves_sliced_thin_oft": "Consumido como pães densos e saborosos, fatiados finos, muitas vezes com coberturas salgadas.",
        "longer_bake_to_set_crumb_often_rested_before_slici": "Cozimento mais longo para firmar o miolo; muitas vezes descansado antes de fatiar.",
        "baked_in_artisan_bakeries_and_by_home_enthusiasts_": "Assado em padarias artesanais e por entusiastas em casa como referência de pão de levain.",
        "often_baked_in_dutch_ovens_or_steaminjected_decks": "Muitas vezes assado em panelas de ferro ou fornos com injeção de vapor.",
        "long_gentle_bake_bread_often_matured_24_h_before_s": "Cozimento longo e suave; pão muitas vezes maturado por 24h antes de fatiar.",
        "used_for_tacos_burritos_quesadillas_and_many_stree": "Usado para tacos, burritos, quesadillas e muitos formatos de comida de rua.",
        "cooked_quickly_on_hot_comal_or_skillet": "Cozido rapidamente em comal ou frigideira quente.",
        "careful_baking_to_avoid_dry_crumb_pan_loaves_are_c": "Cozimento cuidadoso para evitar miolo seco; pães de forma são comuns.",
        "chill_bowl_immediately_if_that_fails_it": "Resfrie a tigela imediatamente. Se falhar, isso",
        "start_braiding_from_the_middle_not_the_end_it_keep": "Comece a trançar do MEIO, não do fim. Isso mantém o pão simétrico.",
        "braid_loosely_the_oven_spring_will_fill_the_gaps": "Trance frouxamente; o salto de forno preencherá as lacunas.",
        "do_not_use_steam_you_want_a_soft_thin_skin_not_a_c": "NÃO use vapor. Você quer uma pele macia e fina, não uma crosta.",
        "potato_starch_holds_more_water_staying_soft_longer": "Amido de batata retém mais água, mantendo-se macio por mais tempo. Pães clássicos são apenas de trigo.",
        "the_golden_ratio_8090g_bun_matches_a_standard_46oz": "A Proporção Áurea. Pão de 80-90g combina perfeitamente com um hambúrguer padrão de 110-170g.",
        "both_melted_chocolate_gives_fudge_texture_cocoa_po": "Ambos. Chocolate derretido dá textura de fudge; Cacau em pó dá notas profundas de sabor.",
        "a_fully_proofed_croissant_should_wobble_like_jelly": "Um croissant totalmente fermentado deve tremer como gelatina quando a bandeja é agitada. Se",
        "a_poolish_preferment_adds_extensibility_to_the_dou": "Um pré-fermento poolish adiciona extensibilidade à massa, facilitando o rolo.",
        "mix_everything_to_make_a_smooth_dough_don": "Misture tudo para fazer uma massa lisa. Não",
        "flatten_dough_into_a_rectangle_wrap_and_chill_at_4": "Achate a massa em um retângulo, embrulhe e resfrie a 4°C por 6-12 horas.",
        "relaxes_gluten_and_chills_the_dough_to_match_the_p": "Relaxa o glúten e resfria a massa para combinar com a plasticidade do bloco de manteiga.",
        "put_the_butter_inside_the_dough_and_fold_the_dough": "Coloque a manteiga dentro da massa e dobre a massa sobre ela como um envelope.",
        "ensures_distinct_layers_of_fat_and_dough": "Garante camadas distintas de gordura e massa.",
        "roll_it_out_fold_it_like_a_letter_do_this_3_times": "Abra a massa, dobre como uma carta. Faça isso 3 vezes.",
        "if_proof_temperature_exceeds_29c_the_butter_will_l": "Se a temperatura de fermentação exceder 29°C, a manteiga vazará antes de assar.",
        "bake_at_200c_for_5_min_then_190c_for_1215_min_no_s": "Asse a 200°C por 5 min, depois 190°C por 12-15 min. Sem vapor ou vapor mínimo.",
        "hydrates_the_flour_completely_and_solidifies_the_b": "Hidrata a farinha completamente e solidifica a manteiga, prevenindo espalhamento.",
        "not_recommended": "Não Recomendado",
        "optional_rest_in_fridge_for_planning": "Descanso opcional na geladeira para planejamento",
        "cooked_on_griddle_and_sometimes_finished_in_oven": "Cozido na chapa e às vezes finalizado no forno.",
        "highgluten_flour_for_chewy_texture": "Farinha com alto glúten para textura mastigável",
        "shaped_rings_are_often_retarded_cold_overnight": "Anéis modelados são frequentemente retardados no frio durante a noite",
        "common_cold_proof_before_boiling_and_baking": "Fermentação fria comum antes de ferver e assar",
        "jewish_and_new_york_baking_traditions": "Tradições de panificação Judaica e de Nova York",
        "optional_overnight_retard_for_flavor": "Retardo opcional durante a noite para sabor",
        "baked_in_oiled_sheet_pans_for_crisp_bottom_and_ten": "Assado em assadeiras untadas para fundo crocante e miolo macio.",
        "allpurpose_or_bread_flour_medium_strength": "Farinha de trigo ou de pão, força média",
        "often_824_h_for_depth_of_flavor": "Frequentemente 8–24 h para profundidade de sabor",
        "varies_with_grain_blend_typically_medium_to_strong": "Varia com a mistura de grãos; tipicamente médio a forte",
        "common_for_flexibility_and_flavor": "Comum para flexibilidade e sabor",
        "bake_to_golden_color_without_overdrying": "Asse até a cor dourada sem ressecar.",
        "optional_bulk_retard_to_improve_flavor": "Retardo em bloco opcional para melhorar o sabor",
        "multiday_batter_fermentation_at_ambient_temperatur": "Fermentação de massa de vários dias à temperatura ambiente",
        "short_rest_before_ladling_onto_hot_surface": "Curto descanso antes de colocar na superfície quente",
        "ambient_fermentation_is_traditional": "Fermentação ambiente é tradicional",
        "optional_812_h_for_flavor": "Opcional 8–12 h para sabor",
        "expert": "Especialista",
        "easy": "Fácil",
        "medium": "Médio",
        "hard": "Difícil",
        "generic": "Genérico",
        "balanced": "Equilibrado",
        "wheat": "Trigo",
        "modern": "Moderno",
        "traditional": "Tradicional",
        "no_fermentation_in_traditional_formulas": "Sem fermentação nas fórmulas tradicionais",
        "optional_rest_in_fridge_for_planning": "Descanso opcional na geladeira para planejamento",
        "cooked_on_griddle_and_sometimes_finished_in_oven": "Cozido na chapa e às vezes finalizado no forno.",
        "highgluten_flour_for_chewy_texture": "Farinha com alto glúten para textura mastigável",
        "shaped_rings_are_often_retarded_cold_overnight": "Anéis modelados são frequentemente retardados no frio durante a noite",
        "common_cold_proof_before_boiling_and_baking": "Fermentação fria comum antes de ferver e assar",
        "the_iconic_symbol_of_french_baking": "O símbolo icônico da panificação francesa.",
        "forbidden_true_panettone_uses_only": "Proibido. O verdadeiro Panetone usa APENAS",
        "commercial_yeast": "Fermento Comercial?",
        "taste_is_sour": "Sabor é Ácido",
        "starter_was_too_acetic": "Levain estava muito acético.",
        "the_most_complex_sourdough_challenge_in_the_world": "O desafio de levain mais complexo do mundo.",
        "fast_and_consistent_sometimes_uses_tangzhong_for_s": "Rápido e consistente. Às vezes usa Tangzhong para maciez.",
        "ultrafluffy_white_japanese_sandwich_bread_the_secr": "Pão de forma japonês branco ultra macio. O segredo é o",
        "base_is_direct_but_modified_by_the_scalded_flour_p": "A base é direta, mas modificada pela pasta de farinha escaldada.",
        "cool_tangzhong_to_room_temp_before_adding_yeast": "Resfrie o Tangzhong até a temperatura ambiente antes de adicionar fermento.",
        "tangzhong_was_too_hot_when_added": "Tangzhong estava muito quente quando adicionado.",
        "whip_eggs_and_sugar_vigorously_to_the": "Bata os ovos e o açúcar vigorosamente até o",
        "use_ice_cold_butter_chunks_and_chill_dough_before_": "Use pedaços de manteiga gelada e resfrie a massa antes de assar.",
         "butter_was_too_warm_or_chemical_leavener_expired": "Manteiga estava muito quente ou fermento químico vencido.",
        "hydrates_the_flour_completely_and_solidifies_the_b": "Hidrata a farinha completamente e solidifica a manteiga, prevenindo espalhamento.",
        "choose_ny_style_for_a_gooey_center": "Escolha o estilo NY para um centro pegajoso.",
        "both_melted_chocolate_gives_fudge_texture_cocoa_po": "Ambos. Chocolate derretido dá textura de fudge; Cacau em pó dá notas profundas de sabor.",
        "the_ultimate_test_of_a_baker": "O teste definitivo de um padeiro",
        "a_fully_proofed_croissant_should_wobble_like_jelly": "Um croissant totalmente fermentado deve tremer como gelatina quando a bandeja é agitada. Se",
         "if_proof_temperature_exceeds_29c_the_butter_will_l": "Se a temperatura de fermentação exceder 29°C, a manteiga vazará antes de assar.",
         "bake_at_200c_for_5_min_then_190c_for_1215_min_no_s": "Asse a 200°C por 5 min, depois 190°C por 12-15 min. Sem vapor ou vapor mínimo.",
         "roll_the_log_loosely_to_allow_expansion": "Enrole o tronco frouxamente para permitir expansão.",
         "choose_cinnamon_rolls_for_cream_cheese_frosting_lo": "Escolha Cinnamon Rolls para amantes de cobertura de cream cheese.",
         "often_glazed_for_a_slightly_glossy_crust": "Geralmente glaceado para uma crosta levemente brilhante.", 
         "very_hot_stone_or_deck_encourages_pocket_formation": "Pedra ou lastro muito quente encoraja a formação de bolsos.",
         "short_proof_before_or_after_lye_bath_depending_on_": "Curta fermentação antes ou depois do banho de lixívia, dependendo do método",
         "frequently_retarded_for_flavor_and_handling": "Frequentemente retardado para sabor e manuseio",
         "consumed_as_dense_flavorful_loaves_sliced_thin_oft": "Consumido como pães densos e saborosos, fatiados finos, muitas vezes com coberturas salgadas.",
         "short_bulk_much_development_occurs_in_sour_build": "Fermentação em bloco curta; muito desenvolvimento ocorre na construção do fermento",
         "occasional_short_retards_possible": "Curtos retardos ocasionais possíveis",
         "longer_bake_to_set_crumb_often_rested_before_slici": "Cozimento mais longo para firmar o miolo; muitas vezes descansado antes de fatiar.",
         "baked_in_artisan_bakeries_and_by_home_enthusiasts_": "Assado em padarias artesanais e por entusiastas em casa como um pão de levain de referência.",
         "commonly_816_h_for_flavor_and_scoring": "Comumente 8–16 h para sabor e corte",
         "minimal_bulk_dough_is_more_like_a_paste": "Fermentação em bloco mínima; a massa é mais como uma pasta",
         "sometimes_retarded_to_manage_scheduling": "Às vezes retardado para gerenciar o cronograma",
         "long_gentle_bake_bread_often_matured_24_h_before_s": "Cozimento longo e suave; pão muitas vezes maturado 24 h antes de fatiar.",
         "blend_of_bread_flour_with_1030_wholegrain_or_rye": "Mistura de farinha de pão com 10–30% de integral ou centeio",
         "common_816_h_at_48c": "Comum 8–16 h a 4–8°C",
         "works_well_in_dutch_ovens_or_steaminjected_decks": "Funciona bem em panelas holandesas ou fornos com injeção de vapor.",
         "lidded_pans_create_tight_square_crumb_structure": "Formas com tampa criam estrutura de miolo quadrada e compacta.",
         "requires_good_steaming_and_gentle_shaping_to_prese": "Requer bom vapor e modelagem suave para preservar o miolo aberto.",
         "blend_of_bread_flour_and_durum_wheat_flours": "Mistura de farinha de pão e farinha de trigo duro",
         "often_baked_as_large_loaves_with_bold_crust": "Muitas vezes assado como pães grandes com crosta marcante.",
         "often_finished_with_egg_wash_or_sugar_toppings": "Muitas vezes finalizado com pincelada de ovo ou coberturas de açúcar.",
         "strong_steam_early_in_bake_to_create_thin_crisp_cr": "Vapor forte no início do cozimento para criar crosta fina e crocante.",
         "popular_in_bakeries_and_home_consumption_as_a_brea": "Popular em padarias e consumo doméstico como pão de café da manhã e lanche.",
         "careful_baking_to_avoid_dry_crumb_pan_loaves_are_c": "Cozimento cuidadoso para evitar miolo seco; pães de forma são comuns.",
         "requires_strong_steam_at_the_beginning_of_the_bake": "Requer vapor forte no início do cozimento.",
         "cooked_quickly_on_hot_griddles_turned_once": "Cozido rapidamente em chapas quentes, virado uma vez.",
         "often_topped_with_seeds_avoid_overbaking_to_keep_c": "Geralmente coberto com sementes; evite assar demais para manter o miolo macio.",
         "bake_with_good_steam_handle_gently_to_preserve_gas": "Asse com bom vapor; manuseie suavemente para preservar o gás.",
         "baker_must_adapt_to_specific_grain_absorption_and_": "O padeiro deve se adaptar à absorção específica e força do grão.",
         "baked_close_together_for_soft_pullapart_texture": "Assados próximos uns dos outros para uma textura macia de puxar.",
         "used_as_the_base_for_stews_and_dishes_torn_by_hand": "Usado como base para ensopados e pratos, rasgado à mão para pegar a comida.",
         "bake_to_golden_color_without_overdrying": "Asse até a cor dourada sem ressecar.",
         "baked_gently_to_avoid_thick_crust_often_lidded_for": "Assado suavemente para evitar crosta grossa; muitas vezes com tampa para formato quadrado.",
         "optional_overnight_bulk_to_improve_flavor": "Retardo em bloco durante a noite opcional para melhorar o sabor",
    }
}

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    styles = data.get('styles', {})
    
    # Iterate and apply corrections
    updated_count = 0
    for key, value in corrections['styles'].items():
        if key in styles:
            # Check if strict replacement or if we need to check if it matches existing bad value
            # We will just strictly replace it to be sure
            styles[key] = value
            updated_count += 1
        else:
            print(f"Key not found in styles: {key}")

    data['styles'] = styles
    
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
        
    print(f"Successfully updated {updated_count} keys in {file_path}")

except Exception as e:
    print(f"Error updating file: {e}")
