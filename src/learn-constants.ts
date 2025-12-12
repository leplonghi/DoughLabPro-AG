

import { Tutorial, TutorialSection, YeastType } from './types';
import { useTranslation } from '@/i18n';

export const TUTORIALS: Tutorial[] = [
  {
    id: 'maturacao_fria',
    section: TutorialSection.FERMENTATION,
    title: 'Cold Fermentation: Why and How',
    image: 'https://images.unsplash.com/photo-1627435199109-6_m8J4s_V-0?q=80&w=2070&auto=format&fit=crop',
    intro: 'Dough maturation in a refrigerated environment (typically 3-5°C for 12 to 72 hours) allows yeast to work more slowly while enzymes in the flour—amylases and proteases—break down protein and starch complexes more effectively.',
    why: '<ul><li>{t('learn.allows_for_greater_flavor_and_aroma_development')}</li><li>{t('learn.relaxes_the_gluten_network_improving_extensibility')}</li><li>{t('learn.provides_more_consistent_and_repeatable_results_re')}</li></ul>',
    howTo: '<ol><li>{t('learn.use_a_scale_to_weigh_ingredients_precisely')}</li><li>{t('learn.mix_and_ball_the_dough_normally')}</li><li>{t('learn.place_in_a_sealed_container_and_refrigerate_at_35c')}</li><li>{t('learn.remove_12h_before_opening_on_the_workbench_to_brin')}</li></ol>',
    tips: [
      'Avoid putting warm dough boxes directly in the fridge to prevent condensation.',
      'In hot environments (>28°C), mix in the morning and refrigerate immediately.',
      'Use strong flour (W ≥ 280) for best results with long fermentation.'
    ],
    reference: {
      name: t('learn.gozney_blog__pizza_dough_hydration_explained'),
      url: "https://eu.gozney.com/blogs/news/pizza-dough-hydration-explained"
    },
    accessLevel: 'free'
  },
  {
    id: 'biga_vs_poolish',
    section: TutorialSection.FERMENTATION,
    title: 'Preferments: Biga vs Poolish – The Technical Choice',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Among the most used preferments by technical pizza makers are Poolish (~100% hydration) and Biga (~45-60% hydration). Each brings distinct characteristics to fermentation, flavor, and dough structure.',
    why: '<ul><li>{t('learn.poolish_favors_a_light_more_open_crumb')}</li><li>{t('learn.biga_favors_a_strong_structure_and_chewy_texture')}</li><li>{t('learn.the_choice_changes_flavor_profile_texture_and_hand')}</li></ul>',
    howTo: '<p>– For Poolish: Mix 100% flour/water + small amount of yeast, ferment 8-18h.<br>– For Biga: Low hydration (~45-55%), ferment 12-24h, incorporate as ~20% of total flour.</p>',
    tips: [
      'If kneading by hand, Poolish is easier to incorporate.',
      'Avoid Poolish in very hot environments without refrigeration as it degrades quickly.',
      'Biga requires strong flour to support the fermentation structure.'
    ],
    reference: {
      name: t('learn.pizzablab__biga_vs_poolish_for_pizza_dough'),
      url: "https://www.pizzablab.com/learning-and-resources/general-articles/biga-vs-poolish/"
    },
    accessLevel: 'pro'
  },
   {
    id: 'pizza_detroit',
    section: TutorialSection.TECHNIQUES,
    title: 'Detroit Style Pizza: A Complete Guide',
    image: 'https://images.unsplash.com/photo-1633342537224-3c6c5233fe2a?q=80&w=2070&auto=format&fit=crop',
    intro: 'Detroit Style pizza is known for its high hydration dough baked in rectangular steel pans with high edges, cheese spread to the perimeter, and an airy texture.',
    why: '<ul><li>{t('learn.high_hydration_yields_an_extremely_airy_crumb')}</li><li>The pan style creates caramelized cheese edges (frico).</li><li>{t('learn.differs_from_neapolitan_in_technique_and_equipment')}</li></ul>',
    howTo: '<ol><li>{t('learn.mix_dough_with_6575_hydration')}</li><li>{t('learn.ferment_using_direct_method_or_poolish_for_1824h')}</li><li>{t('learn.place_in_oiled_pan_and_stretch_to_corners')}</li><li>Bake for 12-15 min in a hot oven (~260°C).</li></ol>',
    tips: [
      'Use high-protein bread flour (≥ 12.5%) for structure.',
      'Grease the pan generously with oil for a fried bottom crust.',
      'If using a home oven, bake on the bottom rack to ensure crispness.'
    ],
    reference: {
      name: t('learn.ooni_blog__detroit_style_pizza'),
      url: "https://ooni.com/blogs/ooni-insights/pizza-dough-hydration-explained"
    },
    accessLevel: 'pro',
    calculatorAction: {
        mode: 'basic',
        presetId: 'pizza_detroit'
    }
  },
  {
    id: 'hidratacao_alta',
    section: TutorialSection.INGREDIENTS,
    title: 'High Hydration: 70%+ in Pizza Dough',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Entering the world of >70% hydration requires refined technique and sensitivity, resulting in highly aerated crumbs and light crusts.',
    why: '<ul><li>{t('learn.higher_hydration__more_steam__more_open_alveoli')}</li><li>{t('learn.relaxed_gluten_network_favors_expansion')}</li><li>{t('learn.delivers_professionallevel_lightness')}</li></ul>',
    howTo: '<ol><li>Select desired hydration % (e.g., 72%).</li><li>{t('learn.use_the_coil_fold_technique_during_bulk_fermentati')}</li><li>{t('learn.handle_gently_on_a_wellfloured_surface')}</li><li>{t('learn.bake_at_high_temperature_to_spring_quickly')}</li></ol>',
    tips: [
      'Use high absorption flour (W300+) to hold the water.',
      'In hot environments (>28°C), use cold water to slow fermentation.',
      'For home ovens, stick to 65-68% hydration for easier handling.'
    ],
    reference: {
      name: 'Ooni – Pizza Dough Hydration Explained',
      url: 'https://ooni.com/blogs/ooni-insights/pizza-dough-hydration-explained',
    },
    accessLevel: 'free',
    calculatorAction: {
      mode: 'advanced',
    },
  },
  {
    id: 'ddt_controle',
    section: TutorialSection.ENVIRONMENT,
    title: 'Desired Dough Temperature (DDT) Control',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'DDT is the target temperature of your dough after mixing. Controlling it ensures consistent fermentation rates regardless of the season.',
    why: '<ul><li>{t('learn.without_temperature_control_fermentation_is_unpred')}</li><li>{t('learn.ddt_brings_consistency_and_repeatability')}</li><li>{t('learn.crucial_for_timing_your_bake_schedule_perfectly')}</li></ul>',
    howTo: '<ol><li>{t('learn.measure_flour_and_room_temperature')}</li><li>Use the app\'s DDT logic to calculate water temp.</li><li>Adjust water temperature (use ice if needed).</li><li>{t('learn.mix_and_verify_final_temp_with_a_probe_thermometer')}</li></ol>',
    tips: [
      'Target 23-25°C for most doughs.',
      'In summer, chill your flour or use ice water.',
      'Friction from mixing adds heat; account for your mixer type.'
    ],
    reference: {
      name: 'The Perfect Loaf – Importance of Dough Temperature',
      url: 'https://www.theperfectloaf.com/the-importance-of-dough-temperature-in-baking/',
    },
    accessLevel: 'pro',
    calculatorAction: {
      mode: 'advanced',
    },
  },
  {
    id: 'superficies_assamento',
    section: TutorialSection.TECHNIQUES,
    title: 'Baking Surfaces: Stone vs Steel',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'The surface you bake on dictates heat transfer. Steel conducts faster (good for home ovens), while stone/biscotto is gentler (good for high heat).',
    why: '<ul><li>{t('learn.steel_fast_heat_transfer_great_for_250300c_ovens')}</li><li>{t('learn.stone_balanced_heat_standard_for_deck_ovens')}</li><li>{t('learn.biscotto_low_conductivity_essential_for_485c_neapo')}</li></ul>',
    howTo: '<ol><li>{t('learn.identify_your_oven_type')}</li><li>If home oven (max 250°C), get a Baking Steel.</li><li>If high-temp oven (>400°C), use a stone or Saputo biscotto.</li><li>{t('learn.preheat_the_surface_for_at_least_4560_minutes')}</li></ol>',
    tips: [
      'Steel can burn bottoms if used above 350°C.',
      'Thicker stones retain more heat for consecutive bakes.',
      'Never wash a hot stone with water (it will crack).'
    ],
    reference: {
      name: 'PizzaBlab – Steel vs. Stone for Pizza Surfaces',
      url: 'https://www.pizzablab.com/learning-and-resources/baking/pizza-baking-surfaces-guide/',
    },
    accessLevel: 'pro',
  },
  {
    id: 'gestao_levain',
    section: TutorialSection.FERMENTATION,
    title: 'Sourdough Management & Integration',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Using natural leaven (sourdough/levain) adds complexity and digestibility. The t('learn.my_levain') module helps you track and integrate it into recipes.',
    why: '<ul><li>{t('learn.complex_flavor_profile_from_wild_yeast_and_bacteri')}</li><li>{t('learn.improved_digestibility_and_keeping_quality')}</li><li>{t('learn.personalizes_your_product_uniquely')}</li></ul>',
    howTo: '<ol><li>{t('learn.register_your_starter_in_levain_pet')}</li><li>{t('learn.in_calculator_select_my_levain_as_yeast_type')}</li><li>Input percentage (e.g., 20%).</li><li>App adjusts water/flour in final dough automatically.</li></ol>',
    tips: [
      'Feed starter at peak activity for sweet, active dough.',
      'Use a stiff starter (Liebig) for panettone or strong breads.',
      'Track feeding ratios (1:2:2 vs 1:5:5) to control acidity.'
    ],
    reference: {
      name: 'King Arthur Baking – Sourdough Guide',
      url: 'https://www.kingarthurbaking.com/learn/guides/sourdough',
    },
    accessLevel: 'pro',
    calculatorAction: {
      mode: 'advanced',
      yeastType: YeastType.USER_LEVAIN
    }
  },
  {
    id: 'recheios_proporcoes',
    section: TutorialSection.TECHNIQUES,
    title: 'Toppings & Ratios: Balancing the Pizza',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'A great dough can be ruined by overloading. This guide covers ideal sauce-to-cheese ratios for different styles.',
    why: '<ul><li>Ensures proper bake (no soggy center).</li><li>Balances flavors (salt, acid, fat).</li><li>{t('learn.professional_consistency_in_every_slice')}</li></ul>',
    howTo: '<ol><li>{t('learn.check_the_toppings_tab_in_the_style_guide')}</li><li>{t('learn.weigh_your_cheese_and_sauce')}</li><li>Distribute evenly, leaving the rim clear (for Neapolitan).</li><li>{t('learn.for_neapolitan_80g_sauce_100g_cheese')}</li></ol>',
    tips: [
      'Less is more. Allow the dough flavor to shine.',
      'Drain wet mozzarella to prevent soupiness.',
      'Add delicate herbs (basil) post-bake.'
    ],
    reference: {
      name: 'Serious Eats – The Pizza Lab: Sauce-to-Cheese Ratios',
      url: 'https://www.seriouseats.com/pizza-lab-sauce-cheese-ratios-build-tips-4167416',
    },
    accessLevel: 'pro',
  },
  {
    id: 'hidratacao_gluten',
    section: TutorialSection.INGREDIENTS,
    title: 'Hydration & Gluten Science',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Water activates gluten. Understanding how hydration affects gluten structure is key to mastering open crumb.',
    why: '<ul><li>{t('learn.water_allows_gluten_proteins_to_slide_and_align')}</li><li>More water = more steam = more lift (oven spring).</li><li>{t('learn.high_hydration_requires_gentle_handling_to_keep_ga')}</li></ul>',
    howTo: '<ol><li>{t('learn.start_with_6065_hydration_to_master_kneading')}</li><li>{t('learn.move_to_70_once_comfortable_with_sticky_dough')}</li><li>{t('learn.use_autolyse_to_help_gluten_formation')}</li><li>{t('learn.use_folds_instead_of_kneading_for_wet_doughs')}</li></ol>',
    tips: [
      'Whole wheat drinks more water; increase hydration.',
      'Salt tightens gluten; water relaxes it.',
      'Use wet hands to handle high hydration dough.'
    ],
    reference: {
      name: 'BakerPedia – Gluten Hydration',
      url: 'https://bakerpedia.com/processes/gluten-hydration/',
    },
    accessLevel: 'free',
  },
  {
    id: 'troubleshooting_massa',
    section: TutorialSection.TROUBLESHOOTING,
    title: 'Dough Troubleshooting: Common Faults',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Sticky dough? Dense crumb? Pale crust? Diagnose and fix common pizza problems.',
    why: '<ul><li>Identify root causes (fermentation, hydration, heat).</li><li>{t('learn.stop_repeating_the_same_mistakes')}</li><li>{t('learn.learn_to_adjust_variables_on_the_fly')}</li></ul>',
    howTo: '<ol><li>Identify the symptom (e.g., t('learn.dough_snaps_back')).</li><li>{t('learn.check_the_troubleshooting_guide')}</li><li>Apply the fix (e.g., "Rest dough 20 mins").</li><li>{t('learn.note_the_change_in_your_journal')}</li></ol>',
    tips: [
      'Snap-back = Gluten too tight. Let it rest.',
      'Sticky = Too much water or under-kneaded.',
      'Pale = Undercooked or over-fermented (no sugar left).',
      'Dense = Under-fermented or dead yeast.'
    ],
    reference: {
      name: 'Pizza Today – Troubleshooting Pizza Dough',
      url: 'https://pizzatoday.com/news/troubleshooting-your-pizza-dough-a-guide-to-making-pizza-better/147346/',
    },
    accessLevel: 'pro',
  },
  {
    id: 'banco_farinhas',
    section: TutorialSection.INGREDIENTS,
    title: 'Flour Library & Characteristics',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Not all flours are created equal. Protein content (W), P/L ratio, and absorption vary wildly.',
    why: '<ul><li>00 Flour is for high heat; Bread Flour for home ovens.</li><li>{t('learn.protein__dictates_gluten_potential')}</li><li>{t('learn.using_the_wrong_flour_causes_tearing_or_toughness')}</li></ul>',
    howTo: '<ol><li>{t('learn.check_your_flour_bag_for_protein_')}</li><li>{t('learn.use_the_flours_section_to_find_your_type')}</li><li>{t('learn.adjust_hydration_based_on_flour_strength')}</li><li>{t('learn.record_the_flour_used_in_your_batches')}</li></ol>',
    tips: [
      'Caputo Pizzeria (Blue) is the gold standard for Neapolitan.',
      'High gluten flour (14%+) creates chewy NY style crust.',
      'All-purpose is often too weak for long fermentation.'
    ],
    reference: {
      name: 'The Perfect Loaf – Flour Guide',
      url: 'https://www.theperfectloaf.com/guides/flour-guide/',
    },
    accessLevel: 'pro',
  },
  {
    id: 'escalas_precisao',
    section: TutorialSection.FUNDAMENTALS,
    title: 'Scales & Baker\'s Percentage',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Baking is chemistry. Precision is key. Baker\'s percentage makes scaling recipes easy.',
    why: '<ul><li>Volume (cups) is inaccurate. Weight (grams) is precise.</li><li>Baker\'s % allows scaling up or down instantly.</li><li>{t('learn.flour_is_always_100_everything_else_is_a_ratio')}</li></ul>',
    howTo: '<ol><li>Get a digital scale (0.1g precision for yeast).</li><li>{t('learn.input_your_desired_total_flour_or_dough_weight')}</li><li>{t('learn.the_app_calculates_everything_based_on_percentages')}</li><li>{t('learn.follow_the_weights_exactly')}</li></ol>',
    tips: [
      '1g of yeast can make a huge difference.',
      'Salt should be 2-3% of flour weight.',
      'Water % = Hydration.'
    ],
    reference: {
      name: 'King Arthur Baking – Baker\'s Percentage',
      url: 'https://www.kingarthurbaking.com/pro/reference/bakers-percentage',
    },
    accessLevel: 'free'
  },
  {
    id: 'modo_pratico_avancado',
    section: TutorialSection.FUNDAMENTALS,
    title: 'Basic vs. Advanced Mode',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'DoughLab offers two ways to calculate: Guided (Basic) for quick presets, and Advanced for full control.',
    why: '<ul><li>{t('learn.guided_best_for_beginners_or_quick_standard_recipe')}</li><li>{t('learn.advanced_unlock_every_slider_for_experimentation')}</li><li>{t('learn.grow_with_the_tool_as_you_learn')}</li></ul>',
    howTo: '<ol><li>{t('learn.toggle_the_mode_switch_at_the_top_of_the_calculato')}</li><li>{t('learn.basic_restricts_inputs_to_safe_ranges')}</li><li>{t('learn.advanced_unlocks_fermentation_methods_oil_sugar_et')}</li></ol>',
    tips: [
      'Start with Basic presets to get a feel.',
      'Switch to Advanced when you want to tweak hydration or yeast.',
      'Save your custom parameters as a user preset.'
    ],
    reference: {
      name: 'DoughLab User Guide',
      url: '#',
    },
    accessLevel: 'free'
  },
  {
    id: 'modo_reverso',
    section: TutorialSection.TECHNIQUES,
    title: 'Reverse Calculation Mode',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Have a fixed amount of flour or starter? Use Reverse Mode to calculate the rest of the recipe around it.',
    why: '<ul><li>{t('learn.reduce_waste_by_using_up_leftovers')}</li><li>{t('learn.calculate_based_on_available_flour_bag_size')}</li><li>{t('learn.adapt_recipes_to_specific_constraints')}</li></ul>',
    howTo: '<ol><li>{t('learn.select_by_flour_weight_in_the_quantity_section')}</li><li>{t('learn.enter_the_amount_of_flour_you_have')}</li><li>{t('learn.the_app_calculates_total_dough_and_other_ingredien')}</li></ol>',
    tips: [
      'Great for using up discard starter.',
      'Perfect for "one bag of flour" batches.',
    ],
    reference: {
      name: 'DoughLab Features',
      url: '#',
    },
    accessLevel: 'pro'
  },
  {
    id: 'referencias_credibilidade',
    section: TutorialSection.FUNDAMENTALS,
    title: 'Technical Credibility & Sources',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Our calculator isn\'t magic; it\'s math and science. We base our logic on industry standards.',
    why: '<ul><li>{t('learn.reliable_results_depend_on_proven_ratios')}</li><li>{t('learn.we_cite_sources_like_avpn_modernist_cuisine_and_ma')}</li><li>{t('learn.transparency_builds_trust_in_your_tools')}</li></ul>',
    howTo: '<ol><li>{t('learn.check_the_references_page_for_our_library')}</li><li>{t('learn.read_the_why_section_in_tutorials')}</li><li>{t('learn.verify_logic_against_standard_textbooks')}</li></ol>',
    tips: [
      'Always question "magic" recipes.',
      'Trust ratios over absolute recipes.',
      'Experiment and log your own results.'
    ],
    reference: {
      name: 'DoughLab References',
      url: '#/references',
    },
    accessLevel: 'free'
  },
  {
    id: 'no_knead_method',
    section: TutorialSection.TECHNIQUES,
    title: 'No-Knead Method',
    image: 'https://images.unsplash.com/photo-1589301773952-79055811c47c?q=80&w=2070&auto=format&fit=crop',
    intro: 'Let time do the work. The No-Knead method uses long fermentation and high hydration to develop gluten passively.',
    why: '<ul><li>{t('learn.effortless_dough_development')}</li><li>{t('learn.creates_complex_flavor_via_long_fermentation')}</li><li>{t('learn.requires_no_mixer_or_heavy_labor')}</li></ul>',
    howTo: '<ol><li>Mix ingredients just until combined (shaggy mass).</li><li>{t('learn.cover_and_let_sit_for_1218_hours_at_room_temp')}</li><li>{t('learn.gluten_forms_itself_shape_and_bake')}</li></ol>',
    tips: [
      'Works best with hydration > 70%.',
      'Use a Dutch Oven to bake bread for steam retention.',
      'Great for focaccia and rustic breads.'
    ],
    reference: {
      name: "Jim Lahey / NYT – No-Knead Bread",
      url: "https://cooking.nytimes.com/recipes/11376-no-knead-bread"
    },
    accessLevel: 'pro'
  },
  {
    id: 'scoring_techniques',
    section: TutorialSection.TECHNIQUES,
    title: 'Scoring: The Art of the Cut',
    image: 'https://images.unsplash.com/photo-1585399103509-24d119a9f11f?q=80&w=2070&auto=format&fit=crop',
    intro: 'Scoring isn\'t just decoration. It controls how dough expands in the oven, preventing blowouts.',
    why: '<ul><li>{t('learn.directs_oven_spring_expansion')}</li><li>{t('learn.prevents_uncontrolled_tearing')}</li><li>Creates the "ear" (grigne) in artisan bread.</li></ul>',
    howTo: '<ol><li>{t('learn.use_a_lame_or_razor_blade')}</li><li>{t('learn.cut_decisively_at_a_45degree_angle')}</li><li>{t('learn.score_just_before_baking')}</li></ol>',
    tips: [
      'Cold dough scores easier.',
      'One long slash for baguettes/batards.',
      'Deep cuts for maximum opening.'
    ],
    reference: {
      name: t('learn.king_arthur_baking__scoring_bread'),
      url: "https://www.kingarthurbaking.com/blog/2017/10/20/bread-scoring-techniques"
    },
    accessLevel: 'pro'
  },
  {
    id: 'baking_methods',
    section: TutorialSection.FUNDAMENTALS,
    title: 'Baking Methods Overview',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop',
    intro: 'Straight dough, sponge & dough, sourdough. Understanding the mixing methods.',
    why: '<ul><li>{t('learn.straight_all_ingredients_at_once_fast_simple')}</li><li>Sponge: Preferment + Final Mix. Better flavor/texture.</li><li>{t('learn.sourdough_wild_yeast_complex_sour_longest_process')}</li></ul>',
    howTo: '<ol><li>{t('learn.choose_method_based_on_time_available')}</li><li>{t('learn.direct_is_fine_for_sameday_pizza')}</li><li>{t('learn.use_preferments_for_nextday_optimization')}</li></ol>',
    tips: [
      'Autolyse can be added to any method.',
      'Mixing order matters (Salt last usually).',
      'Temperature control is vital for all.'
    ],
    reference: {
      name: "Baker's Manual",
      url: "#"
    },
    accessLevel: 'free'
  },
  {
    id: 'pizza_baking_science',
    section: TutorialSection.ENVIRONMENT,
    title: 'The Physics of Pizza Baking',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop',
    intro: 'Thermodynamics in the oven: Conduction, Convection, and Radiation.',
    why: '<ul><li>Conduction: Heat from stone to base (crispness).</li><li>Radiation: Heat from flame/dome to top (browning).</li><li>Convection: Air movement (even cooking).</li></ul>',
    howTo: '<ol><li>{t('learn.balance_top_and_bottom_heat')}</li><li>{t('learn.use_steel_for_conduction_in_home_ovens')}</li><li>Use broiler (grill) for radiation in home ovens.</li></ol>',
    tips: [
      'Preheat surfaces thoroughly.',
      'Rotate pizza for even radiation exposure.',
      'Steam interferes with crust formation (except for bread).'
    ],
    reference: {
      name: t('learn.modernist_cuisine__the_physics_of_food'),
      url: "https://modernistcuisine.com/"
    },
    accessLevel: 'pro'
  },
  {
    id: 'cold_retard_flavor',
    section: TutorialSection.FERMENTATION,
    title: 'Cold Retard & Flavor Development',
    image: 'https://images.unsplash.com/photo-1627435199109-6_m8J4s_V-0?q=80&w=2070&auto=format&fit=crop',
    intro: 'Retarding dough in the fridge (cold fermentation) is the secret to professional flavor.',
    why: '<ul><li>Slows yeast, allows enzymes to create sugars/acids.</li><li>{t('learn.produces_blisters_on_crust')}</li><li>{t('learn.fits_baking_into_your_schedule')}</li></ul>',
    howTo: '<ol><li>{t('learn.mix_and_bulk_ferment_a_bit')}</li><li>{t('learn.place_in_fridge_for_2472_hours')}</li><li>{t('learn.remove_2h_before_baking_to_warm_up')}</li></ol>',
    tips: [
      '48-72 hours is the sweet spot for pizza.',
      'Ensure airtight seal to prevent drying.',
      'Cold dough is easier to handle initially.'
    ],
    reference: {
      name: t('learn.serious_eats__the_pizza_lab'),
      url: "https://www.seriouseats.com/the-pizza-lab-how-long-should-i-let-my-dough-cold-ferment"
    },
    accessLevel: 'pro'
  },
  {
    id: 'yeast_types_dosage',
    section: TutorialSection.INGREDIENTS,
    title: 'Yeast Types & Dosage',
    image: 'https://images.unsplash.com/photo-1617470715842-9ebd65b8a03f?q=80&w=2070&auto=format&fit=crop',
    intro: 'Instant (IDY), Active Dry (ADY), Fresh (Cake). What\'s the difference?',
    why: '<ul><li>{t('learn.idy_concentrated_mix_directly')}</li><li>{t('learn.ady_needs_activation_in_water')}</li><li>{t('learn.fresh_perishable_traditional_fast_acting')}</li></ul>',
    howTo: '<ol><li>IDY use 1/3 of Fresh weight.</li><li>{t('learn.ady_use_4050_of_fresh_weight')}</li><li>{t('learn.use_the_app_to_convert_automatically')}</li></ol>',
    tips: [
      'IDY is the most consistent for home use.',
      'Fresh yeast gives great pop but expires fast.',
      'Never kill yeast with hot water (>50°C).'
    ],
    reference: {
      name: t('learn.the_spruce_eats__yeast_types'),
      url: "https://www.thespruceeats.com/yeast-varieties-1328651"
    },
    accessLevel: 'free'
  },
  {
    id: 'stretch_and_fold_technique',
    section: TutorialSection.TECHNIQUES,
    title: 'Stretch & Fold Technique',
    image: 'https://images.unsplash.com/photo-1614532843595-3b74b1df092b?q=80&w=2070&auto=format&fit=crop',
    intro: 'Build strength without kneading. Perfect for wet doughs.',
    why: '<ul><li>{t('learn.organizes_gluten_strands_gently')}</li><li>{t('learn.traps_air_for_open_crumb')}</li><li>{t('learn.easy_on_the_hands')}</li></ul>',
    howTo: '<ol><li>{t('learn.grab_edge_of_dough_stretch_up_fold_over_center')}</li><li>{t('learn.rotate_bowl_90_degrees_repeat_4_times')}</li><li>{t('learn.do_this_every_30_mins_during_bulk_fermentation')}</li></ol>',
    tips: [
      'Wet hands prevent sticking.',
      'Be gentle, don\'t tear the dough.',
      'Stop when dough holds shape.'
    ],
    reference: {
      name: t('learn.peter_reinhart__artisan_breads_every_day'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'connected_oven_profile',
    section: TutorialSection.ENVIRONMENT,
    title: 'Oven Profiling',
    image: 'https://images.unsplash.com/photo-1579752048924-f53d5c58746b?q=80&w=2070&auto=format&fit=crop',
    intro: 'Understand your oven\'s weak and hot spots.',
    why: '<ul><li>{t('learn.every_oven_is_different')}</li><li>{t('learn.calibration_ensures_recipe_success')}</li><li>{t('learn.adapt_baking_times_to_your_reality')}</li></ul>',
    howTo: '<ol><li>{t('learn.use_an_oven_thermometer_to_check_real_temp')}</li><li>{t('learn.map_hot_spots_using_the_toast_test')}</li><li>{t('learn.adjust_rack_position_for_balance')}</li></ol>',
    tips: [
      'Most home ovens run cooler than stated.',
      'Preheat fully (cycle on/off).',
      'Use a stone/steel to stabilize temp.'
    ],
    reference: {
      name: t('learn.the_kitchn__oven_hot_spots'),
      url: "https://www.thekitchn.com/how-to-find-your-ovens-hot-spots-165634"
    },
    accessLevel: 'pro'
  },
  {
    id: 'error_logging_diary',
    section: TutorialSection.TROUBLESHOOTING,
    title: 'Logging Errors to Learn',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2070&auto=format&fit=crop',
    intro: 'Your failures are your best teachers. Log them.',
    why: '<ul><li>Identify patterns (e.g., always over-proofing in summer).</li><li>{t('learn.finetune_variables')}</li><li>{t('learn.track_progress_over_time')}</li></ul>',
    howTo: '<ol><li>{t('learn.use_the_notes_section_in_your_batches')}</li><li>{t('learn.record_ambient_temp_times_and_visual_results')}</li><li>{t('learn.rate_your_bake_honestly')}</li></ol>',
    tips: [
      'Take photos of crumb and crust.',
      'Note what you changed from last time.',
      'Review notes before next bake.'
    ],
    reference: {
      name: "The Bread Baker's Apprentice",
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'recipe_scaling',
    section: TutorialSection.TECHNIQUES,
    title: 'Recipe Scaling',
    image: 'https://images.unsplash.com/photo-1627888636881-8985b671f49b?q=80&w=2070&auto=format&fit=crop',
    intro: 'Doubling or halving recipes safely.',
    why: '<ul><li>Baker\'s % makes scaling linear.</li><li>Yeast doesn\'t always scale linearly (thermal mass).</li><li>{t('learn.mixer_capacity_constraints')}</li></ul>',
    howTo: '<ol><li>{t('learn.use_the_app_to_scale_based_on_flour_weight')}</li><li>{t('learn.watch_dough_temperature_in_large_batches')}</li><li>Don\'t overload your mixer.</li></ol>',
    tips: [
      'Large batches retain heat more; use colder water.',
      'Divide dough into manageable chunks.',
      'Check fermentation earlier for large masses.'
    ],
    reference: {
      name: t('learn.professional_baking__wayne_gisslen'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'long_term_fermentation',
    section: TutorialSection.FERMENTATION,
    title: 'Extended Fermentation',
    image: 'https://images.unsplash.com/photo-1594311242637-a2d2a4585c54?q=80&w=2070&auto=format&fit=crop',
    intro: 'Pushing fermentation to 48, 72, or 96 hours.',
    why: '<ul><li>{t('learn.maximum_flavor_development')}</li><li>{t('learn.full_gluten_breakdown_for_tenderness')}</li><li>{t('learn.digestibility_benefits')}</li></ul>',
    howTo: '<ol><li>{t('learn.reduce_yeast_significantly')}</li><li>Keep temp very low (fridge).</li><li>{t('learn.use_strong_flour_to_withstand_breakdown')}</li></ol>',
    tips: [
      'Watch for dough degradation (becoming soup).',
      'Acid load increases significantly.',
      'Sugars deplete; crust might be pale.'
    ],
    reference: {
      name: t('learn.the_pizza_bible'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'natural_fermentation_levain',
    section: TutorialSection.FERMENTATION,
    title: 'Natural Fermentation (Levain)',
    image: 'https://images.unsplash.com/photo-1560181313-a5370557e411?q=80&w=2070&auto=format&fit=crop',
    intro: 'Baking with wild yeast.',
    why: '<ul><li>{t('learn.unique_flavor_profile')}</li><li>{t('learn.gut_health_benefits')}</li><li>{t('learn.selfsufficiency')}</li></ul>',
    howTo: '<ol><li>{t('learn.maintain_a_healthy_starter')}</li><li>{t('learn.use_app_to_calculate_levain_amount')}</li><li>{t('learn.expect_longer_rise_times')}</li></ol>',
    tips: [
      'Starter health is key.',
      'Float test is unreliable; watch volume.',
      'Temperature control is crucial for sourness.'
    ],
    reference: {
      name: t('learn.tartine_bread'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'micro_batch_mode',
    section: TutorialSection.TECHNIQUES,
    title: 'Micro-Batch Baking',
    image: 'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=2070&auto=format&fit=crop',
    intro: 'Making just one pizza or loaf.',
    why: '<ul><li>{t('learn.testing_new_flours')}</li><li>{t('learn.lunch_for_one')}</li><li>{t('learn.practicing_skills_cheaply')}</li></ul>',
    howTo: '<ol><li>{t('learn.set_quantity_to_1')}</li><li>{t('learn.use_small_bowls')}</li><li>{t('learn.hand_mixing_is_often_easier')}</li></ol>',
    tips: [
      'Measuring small yeast amounts is hard; use a 0.01g scale.',
      'Small doughs cool/warm fast.',
      'Great for experiments.'
    ],
    reference: {
      name: t('learn.doughlab_tips'),
      url: "#"
    },
    accessLevel: 'free'
  },
  {
    id: 'visual_indicators_photography',
    section: TutorialSection.TROUBLESHOOTING,
    title: 'Visual Indicators',
    image: 'https://images.unsplash.com/photo-1513312999432-a7afa260d8a0?q=80&w=2070&auto=format&fit=crop',
    intro: 'Knowing when dough is ready by sight and touch.',
    why: '<ul><li>{t('learn.time_is_just_an_estimate')}</li><li>Dough tells you when it\'s ready.</li><li>{t('learn.volume_jiggle_poke_test')}</li></ul>',
    howTo: '<ol><li>{t('learn.poke_test_indentation_should_spring_back_slowly')}</li><li>Volume: Mark container to see 2x/3x rise.</li><li>{t('learn.jiggle_should_wobble_like_jelly')}</li></ol>',
    tips: [
      'Watch the dough, not the clock.',
      'Take photos to learn your dough\'s look.',
      'Different flours look different.'
    ],
    reference: {
      name: "The Bread Baker's Apprentice",
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'prefermentos_poolish_biga_sponge',
    section: TutorialSection.FERMENTATION,
    title: 'Poolish vs Biga vs Sponge',
    image: 'placeholder_url_prefermentos.jpg',
    intro: 'Detailed comparison of preferment types.',
    why: '<ul><li>{t('learn.poolish_100_hydration_enzyme_activity_extensibilit')}</li><li>{t('learn.biga_50_hydration_strength_acidity')}</li><li>{t('learn.sponge_general_term_often_enriched')}</li></ul>',
    howTo: '<ol><li>{t('learn.choose_based_on_desired_crust_texture')}</li><li>Biga = Chewy/Crispy.</li><li>Poolish = Light/Crispy.</li></ol>',
    tips: [
      'Dissolve poolish in water first.',
      'Chop biga into water to incorporate.',
      'Account for preferment flour in total hydration.'
    ],
    reference: {
      name: t('learn.king_arthur_baking'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'mistura_tempos_amassamento',
    section: TutorialSection.TECHNIQUES,
    title: 'Mixing Times & Gluten',
    image: 'placeholder_url_mistura_amassamento.jpg',
    intro: 'How long to knead?',
    why: '<ul><li>{t('learn.undermixed_poor_structure_dense')}</li><li>{t('learn.optimally_mixed_windowpane_strong')}</li><li>{t('learn.overmixed_breakdown_sticky_white')}</li></ul>',
    howTo: '<ol><li>{t('learn.mix_until_shaggy')}</li><li>Rest (autolyse).</li><li>{t('learn.knead_until_smooth')}</li><li>{t('learn.check_windowpane')}</li></ol>',
    tips: [
      'It\'s hard to over-mix by hand.',
      'Mixers can over-heat dough quickly.',
      'Extensibility vs Elasticity balance.'
    ],
    reference: {
      name: t('learn.modernist_bread'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'controle_temp_umidade_ambiente',
    section: TutorialSection.ENVIRONMENT,
    title: 'Ambient Temp & Humidity',
    image: 'placeholder_url_controle_ambiente_massa.jpg',
    intro: 'Your kitchen environment affects your dough.',
    why: '<ul><li>{t('learn.heat_accelerates_fermentation')}</li><li>{t('learn.dry_air_forms_skin_on_dough')}</li><li>{t('learn.humidity_affects_hydration_absorption')}</li></ul>',
    howTo: '<ol><li>{t('learn.monitor_room_temp')}</li><li>{t('learn.cover_dough_to_protect_from_dry_air')}</li><li>{t('learn.adjust_water_temp_to_compensate_for_room_temp')}</li></ol>',
    tips: [
      'Summer baking requires cold water.',
      'Winter baking needs a warm spot.',
      'Use a proofing box for consistency.'
    ],
    reference: {
      name: t('learn.the_perfect_loaf'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'metodos_cozimento_superficies',
    section: TutorialSection.TECHNIQUES,
    title: 'Advanced Baking Surfaces',
    image: 'placeholder_url_forno_superficie.jpg',
    intro: 'Going beyond the stone.',
    why: '<ul><li>{t('learn.steel_maximum_conductivity')}</li><li>{t('learn.biscotto_controlled_heat_for_900f')}</li><li>{t('learn.screen_airflow_prevents_burning')}</li></ul>',
    howTo: '<ol><li>{t('learn.match_surface_to_oven_temp_and_pizza_style')}</li><li>Season your steels/pans.</li><li>{t('learn.clean_stones_by_heat_not_water')}</li></ol>',
    tips: [
      'Thicker steel = more thermal mass.',
      'Screens help set pizza before moving to stone.',
      'Don\'t shock stones thermally.'
    ],
    reference: {
      name: t('learn.pizza_making_forum'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'tecnica_autolise',
    section: TutorialSection.TECHNIQUES,
    title: 'Autolyse',
    image: 'placeholder_url_autolyse.jpg',
    intro: 'The pause that refreshes dough.',
    why: '<ul><li>{t('learn.hydrates_flour_fully')}</li><li>{t('learn.starts_enzyme_activity')}</li><li>{t('learn.relaxes_gluten_for_easier_kneading')}</li></ul>',
    howTo: '<ol><li>{t('learn.mix_flour_and_water_only')}</li><li>{t('learn.rest_2060_mins')}</li><li>Add salt/yeast and knead.</li></ol>',
    tips: [
      'Essential for whole wheat.',
      'Shortens kneading time.',
      'Don\'t add salt during autolyse (usually).'
    ],
    reference: {
      name: t('learn.raymond_calvel'),
      url: "#"
    },
    accessLevel: 'free'
  },
  {
    id: 'tecnica_tangzhong_yudane',
    section: TutorialSection.TECHNIQUES,
    title: 'Tangzhong & Yudane',
    image: 'placeholder_url_tangzhong.jpg',
    intro: 'Asian techniques for soft, fluffy bread.',
    why: '<ul><li>{t('learn.pregelatinized_starch_holds_water')}</li><li>{t('learn.higher_hydration_without_stickiness')}</li><li>{t('learn.extends_shelf_life')}</li></ul>',
    howTo: '<ol><li>Cook 5-10% of flour with water/milk (1:5 ratio).</li><li>{t('learn.cool_to_room_temp')}</li><li>{t('learn.add_to_dough_mix')}</li></ol>',
    tips: [
      'Cook until lines appear in roux.',
      'Account for water in roux in total hydration.',
      'Makes incredible burger buns.'
    ],
    reference: {
      name: t('learn.the_woks_of_life'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'modo_reverso_adaptativo2',
    section: TutorialSection.TECHNIQUES,
    title: 'Adaptive Reverse Mode',
    image: 'placeholder_url_modo_reverso_adaptativo2.jpg',
    intro: 'Advanced reverse calculations.',
    why: '<ul><li>{t('learn.handling_complex_preferment_leftovers')}</li><li>{t('learn.balancing_multiple_flours')}</li></ul>',
    howTo: '<ol><li>{t('learn.enter_what_you_have')}</li><li>{t('learn.app_balances_the_rest')}</li></ol>',
    tips: [
      'Double check your inputs.',
      'Weigh leftovers accurately.'
    ],
    reference: {
      name: t('learn.doughlab_pro'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'alta_hidratacao_tecnicas',
    section: TutorialSection.INGREDIENTS,
    title: 'Mastering High Hydration',
    image: 'placeholder_url_alta_hidracao.jpg',
    intro: 'Handling dough like water.',
    why: '<ul><li>{t('learn.open_crumb')}</li><li>{t('learn.crispy_crust')}</li><li>{t('learn.artisan_quality')}</li></ul>',
    howTo: '<ol><li>Use basin/tub for bulk.</li><li>{t('learn.coil_folds_are_mandatory')}</li><li>{t('learn.gentle_shaping')}</li></ol>',
    tips: [
      'Don\'t add flour during shaping; use water or oil on hands.',
      'Bake dark for best flavor.',
      'Requires strong flour.'
    ],
    reference: {
      name: t('learn.open_crumb_mastery'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'gerenciar_batch_diario',
    section: TutorialSection.TROUBLESHOOTING,
    title: 'Journaling Mastery',
    image: 'placeholder_url_diario_batches.jpg',
    intro: 'How to keep a useful baking log.',
    why: '<ul><li>{t('learn.memory_is_fallible')}</li><li>{t('learn.data_reveals_trends')}</li><li>{t('learn.replication_requires_records')}</li></ul>',
    howTo: '<ol><li>{t('learn.log_immediately_after_baking')}</li><li>{t('learn.be_specific_about_changes')}</li><li>{t('learn.rate_objectively')}</li></ol>',
    tips: [
      'Note ambient temp.',
      'Note flour brand.',
      'Note feelings/texture.'
    ],
    reference: {
      name: t('learn.doughlab'),
      url: "#"
    },
    accessLevel: 'free'
  },
  {
    id: 'cadastro_farinhas_substituicoes',
    section: TutorialSection.INGREDIENTS,
    title: 'Flour Substitution Logic',
    image: 'placeholder_url_cadastro_farinhas.jpg',
    intro: 'Swapping flours safely.',
    why: '<ul><li>{t('learn.different_protein_levels')}</li><li>{t('learn.different_absorption')}</li><li>{t('learn.availability_issues')}</li></ul>',
    howTo: '<ol><li>{t('learn.match_protein_content_closest')}</li><li>{t('learn.adjust_water_if_moving_from_white_to_whole')}</li><li>{t('learn.expect_texture_changes')}</li></ol>',
    tips: [
      'AP != Bread Flour.',
      'Cake flour is too weak for pizza.',
      'Semolina adds crunch.'
    ],
    reference: {
      name: t('learn.the_joy_of_cooking'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'sustentabilidade_impacto_ambiental',
    section: TutorialSection.ENVIRONMENT,
    title: 'Sustainable Baking',
    image: 'placeholder_url_sustentabilidade_massas.jpg',
    intro: 'Baking with the planet in mind.',
    why: '<ul><li>{t('learn.ovens_use_energy')}</li><li>{t('learn.ingredients_have_footprints')}</li><li>{t('learn.waste_reduction')}</li></ul>',
    howTo: '<ol><li>{t('learn.bake_multiple_items_at_once')}</li><li>{t('learn.source_local_flour')}</li><li>Don\'t waste discard.</li></ol>',
    tips: [
      'Preheat efficiently.',
      'Use discard for crackers/pancakes.',
      'Buy bulk.'
    ],
    reference: {
      name: t('learn.sustainable_food_trust'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'assistente_voz_comandos',
    section: TutorialSection.TECHNIQUES,
    title: 'Hands-Free Baking',
    image: 'placeholder_url_assistente_voz.jpg',
    intro: 'Using voice assistants in the kitchen.',
    why: '<ul><li>Doughy hands can\'t touch screens.</li><li>{t('learn.timers_are_essential')}</li><li>{t('learn.recipe_readback')}</li></ul>',
    howTo: '<ol><li>"Set timer for 20 mins".</li><li>t('learn.convert_grams_to_cups').</li></ol>',
    tips: [
      'Keep device clean.',
      'Use smart displays for visual aid.',
    ],
    reference: {
      name: t('learn.tech_in_kitchen'),
      url: "#"
    },
    accessLevel: 'pro'
  },
  {
    id: 'leaderboard_desafios_comunidade',
    section: TutorialSection.FUNDAMENTALS,
    title: 'Community Challenges',
    image: 'placeholder_url_leaderboard_desafios.jpg',
    intro: 'Gamifying your baking.',
    why: '<ul><li>{t('learn.motivation_to_practice')}</li><li>{t('learn.learn_new_styles')}</li><li>{t('learn.connect_with_others')}</li></ul>',
    howTo: '<ol><li>{t('learn.check_weekly_challenge')}</li><li>{t('learn.bake_and_post')}</li><li>{t('learn.earn_badges')}</li></ol>',
    tips: [
      'Be supportive of others.',
      'Try something outside your comfort zone.',
      'Have fun!'
    ],
    reference: {
      name: t('learn.doughlab_community'),
      url: "#"
    },
    accessLevel: 'pro'
  }
];
