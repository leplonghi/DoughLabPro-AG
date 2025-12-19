import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const chicago_deep_dish: StyleDefinition = {
  "id": "chicago_deep_dish",
  "title": t('styles.chicago_deep_dish'),
  "subtitle": t('styles.american_pan_pizza'),
  "category": t('styles.pizza_3'),
  "family": t('styles.american_pan_pizza_2'),
  "variantName": t('styles.chicago_deep_dish_2'),
  "origin": {
    "country": t('styles.united_states_6'),
    "region": t('styles.chicago_2'),
    "period": "1940s"
  },
  "intro": t('styles.a_hearty_knifeandfork_meal_iconic_to_chicago_culin'),
  "history": "Invented in Chicago, this style features a deep, buttery crust pressed into a pan, filled with cheese, toppings, and topped with chunky tomato sauce.",
  "culturalContext": {
    "significance": [
      "Icon of Chicago cuisine and Midwestern American food culture",
      "Represents Chicago's bold, unapologetic approach to food - bigger is better",
      "Symbol of Italian-American adaptation and innovation in the 1940s",
      "Cultural rivalry with New York pizza - 'pizza vs casserole' debate",
      "Tourist attraction: visitors seek out Pizzeria Uno, Lou Malnati's, Giordano's"
    ],
    "consumptionContext": [
      "Sit-down restaurant meal, never street food or by-the-slice",
      "Eaten with knife and fork - too thick and heavy to fold",
      "Special occasion food: celebrations, tourist visits, game days",
      "Long wait times (30-45 min) make it a leisurely dining experience",
      "Often shared family-style, one pizza feeds 2-3 people easily"
    ],
    "evolution": [
      "1943: Ike Sewell and Ric Riccardo open Pizzeria Uno, creating deep dish",
      "1950s-1960s: Style spreads to Chicago pizzerias, becomes city signature",
      "1970s: Stuffed pizza variation emerges (two crusts with filling)",
      "1980s-1990s: National chains spread Chicago style across America",
      "2000s: Gourmet versions with artisan ingredients emerge",
      "Modern: Frozen versions available nationwide, but fresh remains superior"
    ],
    "rituals": [
      "The long wait: ordering deep dish means committing to 30-45 minute bake time",
      "Reverse layering: cheese first, then toppings, sauce on top (opposite of thin crust)",
      "Butter-brushed crust edges: creates golden, flaky rim",
      "Cutting into wedges: revealing the towering layers is part of the experience",
      "Leftovers tradition: reheats well, often better the next day"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Rich, buttery crust with cornmeal crunch and slight sweetness",
      "Massive cheese layer: gooey, stretchy mozzarella with mild tang",
      "Chunky tomato sauce on top: bright, acidic, herb-forward",
      "Savory toppings: Italian sausage, peppers, onions layered throughout",
      "Overall: rich, indulgent, almost casserole-like in heartiness"
    ],
    "aromaProfile": [
      "Butter and toasted cornmeal from the crust",
      "Melted cheese with slight caramelization",
      "Tomato sauce with oregano, basil, and garlic",
      "Italian sausage and fennel (if used)",
      "Overall: rich, savory, comfort-food aroma"
    ],
    "textureNotes": [
      "Flaky, buttery crust similar to pie dough - tender and rich",
      "Thick, gooey cheese layer that stretches when pulled",
      "Chunky tomato sauce with visible tomato pieces",
      "Hearty, substantial bite - fork-and-knife required",
      "Overall: multi-layered, casserole-like texture, very filling"
    ],
    "pairingRecommendations": [
      "Classic: Italian sausage, green peppers, onions, mushrooms",
      "Traditional: Pepperoni, spinach, or vegetarian with extra veggies",
      "Beverage: Cold beer (lager or ale), Italian red wine, or soda",
      "Side: Simple green salad to balance the richness",
      "Avoid: Too many toppings - the pizza is already very heavy and rich"
    ],
    "flavorEvolution": [
      "Fresh from oven (0-10 min): Molten hot, cheese bubbling, crust crispy",
      "10-20 min: Settles and sets, easier to eat, flavors meld beautifully",
      "Room temperature: Still good, cheese firms up, crust remains tender",
      "Next day cold: Cult favorite - flavors concentrate, crust stays flaky",
      "Reheated: Excellent in oven - revives crust crispness, melts cheese again"
    ]
  },
  "technicalFoundations": [
    "Direct dough, often with cornmeal or semolina in the blend.",
    "Hydration: 50-60%"
  ],
  "doughImpact": [
    "Low hydration (50-60%) creates tender, flaky crust similar to pastry",
    "High fat content (15-20% oil/butter) produces rich, buttery flavor and texture",
    "Cornmeal addition provides crunch and prevents sticking to pan",
    "Lower protein flour creates tender, not chewy, crust",
    "Dough is pressed into pan, not stretched - creates thick walls to hold filling"
  ],
  "bakingImpact": [
    "Long bake time (30-45 min) required to cook through thick layers",
    "Lower temperature (200-230°C) prevents burning while ensuring interior cooks",
    "Deep pan creates tall edges that contain massive amount of toppings",
    "Sauce on top protects cheese from burning during long bake",
    "Butter-brushed edges create golden, flaky crust rim"
  ],
  "technicalProfile": {
    "hydrationRange": [
      50,
      60
    ],
    "saltRange": [
      1.5,
      2
    ],
    "oilRange": [
      15,
      20
    ],
    "sugarRange": [
      1,
      3
    ],
    "flourStrength": "All-purpose or pastry/bread blend, lower protein for tenderness",
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": "20–40 min in pan",
      "coldRetard": t('styles.optional_overnight')
    },
    "oven": {
      "type": "gas_deck",
      "temperatureC": [
        200,
        230
      ],
      "notes": "Long bake time (30-45 min) due to thickness and toppings."
    },
    "difficulty": t('styles.medium_34'),
    "recommendedUse": [
      t('common.deep_dish_pizza'),
      "Casserole-style pizza"
    ]
  },
  "regionalVariants": [
    "Classic Deep Dish (Pizzeria Uno) - Original style, moderate depth",
    "Stuffed Pizza (Giordano's, Nancy's) - Two crusts with filling in between",
    "Pan Pizza (Lou Malnati's) - Slightly thinner than deep dish, buttery crust",
    "Tavern-Style Thin (South Side) - Chicago's other pizza, thin and crispy"
  ],
  "climateScenarios": [
    "Hot/Humid (>25°C, >70% RH): Reduce proof time, use cooler water (18-20°C)",
    "Cold/Dry (<15°C, <40% RH): Extend proof time, use warmer water (25-28°C)",
    "Tropical: Keep dough refrigerated, reduce fat slightly to prevent greasiness",
    "High Altitude (>1500m): Increase liquid by 2-3%, reduce bake time slightly"
  ],
  "styleComparisons": [
    "vs. New York: Deep dish is thick, fork-and-knife, casserole-like vs thin, foldable",
    "vs. Detroit: Deep dish has sauce on top, flakier crust vs crispy bottom, cheese edges",
    "vs. Neapolitan: Deep dish is heavy, rich, long bake vs light, quick, wood-fired",
    "vs. Sicilian: Deep dish is deeper, more toppings, sauce on top vs thinner, simpler"
  ],
  "parameterSensitivity": [
    "Critical: Sauce must go on top to prevent cheese from burning during long bake",
    "Fat content essential: 15-20% creates the signature buttery, flaky crust",
    "Bake time critical: 30-45 min needed, shorter leaves center raw, longer burns edges",
    "Pan depth matters: 2-3 inch deep pans are standard, shallower isn't true deep dish",
    "Cheese amount: generous layer needed, but too much creates greasy, heavy result"
  ],
  "risks": [
    "Soggy bottom: Insufficient bake time or too much sauce",
    "Burnt edges: Oven too hot or bake time too long",
    "Raw center: Oven too cool, insufficient bake time, or too many toppings",
    "Greasy pizza: Too much cheese or sausage, excess fat not drained",
    "Tough crust: Over-mixing dough or using high-protein flour"
  ],
  "notes": [
    "Authentic Chicago deep dish has sauce on TOP, cheese on bottom - reverse of normal pizza",
    "Cornmeal in dough and on pan prevents sticking and adds texture",
    "One deep dish pizza is very filling - typically serves 2-3 people",
    "Locals often prefer tavern-style thin crust for regular eating, deep dish for special occasions",
    "The 'pizza vs casserole' debate with New Yorkers is a point of Chicago pride"
  ],
  "tags": [
    t('common.deep_dish_pizza'),
    "Casserole-style pizza",
    t('common.pizza'),
    t('common.united_states')
  ],
  "applyInApp": {
    "calculator": [],
    "styles": [],
    "mylab": [],
    "levain": [],
    "tools": []
  },
  "references": [
    {
      "title": t('styles.modernist_pizza_2'),
      "url": "https://modernistcuisine.com/books/modernist-pizza/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2021
    },
    {
      "title": t('styles.chicago_pizza_history'),
      "url": "https://www.choosechicago.com/articles/food-drink/chicago-pizza-history/",
      "author": "Choose Chicago",
      "year": 2023
    },
    {
      "title": "The Pizza Bible",
      "url": "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
      "author": "Tony Gemignani",
      "year": 2014
    },
    {
      "title": "Pizza: A Slice of American History",
      "url": "https://www.smithsonianmag.com/arts-culture/pizza-a-slice-of-american-history-21474158/",
      "author": "Liz Ronk",
      "year": 2012
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "What's the difference between deep dish and stuffed pizza?",
      "answer": "Deep dish has one crust pressed into a deep pan with cheese, toppings, and sauce on top. Stuffed pizza (Chicago-style stuffed) has TWO crusts - a bottom crust, then cheese and toppings, then a top crust, then sauce on top of that. Stuffed pizza is even taller and more filling. Giordano's and Nancy's are famous for stuffed pizza."
    },
    {
      "question": "Why does the sauce go on top instead of the bottom?",
      "answer": "The sauce goes on top to protect the cheese from burning during the long 30-45 minute bake time. If cheese were on top, it would burn before the thick crust and massive amount of toppings cooked through. The reverse layering (cheese first, then toppings, then sauce) is one of deep dish's defining characteristics."
    },
    {
      "question": "Can I make deep dish in a regular cake pan?",
      "answer": "Yes! A 9-10 inch round cake pan (2-3 inches deep) works well for home deep dish pizza. Cast iron skillets also work excellently. The key is having tall sides to contain the filling. Grease the pan well with butter or oil, and consider adding cornmeal to prevent sticking. Professional pizzerias use specialized deep dish pans, but home alternatives work fine."
    },
    {
      "question": "Why is my deep dish crust tough instead of flaky?",
      "answer": "Tough crust usually means: 1) Using high-protein bread flour instead of all-purpose or pastry flour, 2) Over-mixing the dough, developing too much gluten, 3) Insufficient fat (need 15-20% oil or butter), 4) Rolling or stretching instead of pressing into pan. Deep dish crust should be tender and flaky like pie crust, not chewy like bread."
    },
    {
      "question": "How do I prevent a soggy bottom crust?",
      "answer": "Prevent soggy crust by: 1) Baking at correct temperature (200-230°C) for full 30-45 minutes, 2) Not overloading with sauce - chunky sauce on top should be moderate, 3) Pre-baking crust for 5-10 minutes before adding toppings, 4) Using a pizza stone or placing pan on lowest oven rack for maximum bottom heat, 5) Letting pizza rest 5-10 minutes after baking so layers set."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
