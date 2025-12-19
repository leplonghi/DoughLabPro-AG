import { StyleDefinition } from '../../../types/styleDefinition';
import i18n from '@/i18n';

const t = i18n.t.bind(i18n);

export const japanese_shokupan: StyleDefinition = {
  "id": "japanese_shokupan",
  "title": "Japanese Shokupan (Milk Bread)",
  "subtitle": t('styles.asian_milk_bread'),
  "category": t('styles.bread_11'),
  "family": t('styles.asian_milk_bread_2'),
  "variantName": "Japanese Shokupan (Milk Bread)",
  "origin": {
    "country": t('styles.japan_2'),
    "region": t('styles.nationwide_2'),
    "period": "20th century"
  },
  "intro": "The gold standard for sandwich bread in Japan, prized for its 'mochi-mochi' (chewy/soft) texture.",
  "history": "Shokupan (shoku = eating, pan = bread) emerged in Japan during the post-WWII era, heavily influenced by Western white bread but adapted to Japanese preferences for soft, chewy textures. The breakthrough was the adoption of the Yudane or Tangzhong method (pre-cooking a portion of flour and water), which allowed for extremely high moisture retention. It evolved from a daily staple to a luxury 'artisan boutique' item in the 21st century.",
  "culturalContext": {
    "significance": [
      "The 'holy grail' of soft breads in Japanese culinary culture",
      "Defined by the texture 'mochi-mochi' (elastic, springy, and soft)",
      "Central to the 'Kissa' (Japanese cafe) culture and the Nagoya breakfast style",
      "One of the few breads in the world sold by 'thickness' or 'number of slices' (e.g., 4-slice or 6-slice)",
      "Represents the Japanese philosophy of 'Kaizen'—constant refinement of a simple product"
    ],
    "consumptionContext": [
      "Traditionally served as 'Ogura Toast' (with sweet red bean paste and butter)",
      "The base for the world-famous 'Tamago Sando' (Japanese egg salad sandwich)",
      "Often used for 'Honey Toast' (a giant hollowed-out loaf filled with sweets)",
      "Must be sliced thick—typically 2 to 3 cm—to appreciate the internal pull",
      "Popular as a high-end gift bread in specialized boutiques"
    ],
    "evolution": [
      "1800s: Bread is introduced to Japan but remains a novelty",
      "1940s-50s: US wheat aid popularizes white bread as a school lunch staple",
      "1980s: The 'Yudane' method is perfected, bringing the signature 'mochi' texture",
      "2013-Present: The 'Nama Shokupan' craze—unbelievably soft, premium loaves intended to be eaten raw",
      "Present: High-precision home bread machines are designed specifically for Shokupan",
      "Future: Fusion with sourdough (Levain) to add complexity to the soft structure"
    ],
    "rituals": [
      "The Pull Test: tearing the loaf apart by hand to see the 'feathery' gluten strands",
      "The Bounce Test: pressing the crumb and watching it recover its shape completely",
      "The 'Kaku-shoku' vs 'Yama-shoku': choosing between a flat-top (lidded) or mountain-top (open) loaf",
      "Thick Butter Application: spreading a generous cube of cold butter on a salt-hot thick slice",
      "The Crust Removal: in some high-end cafes, the wafer-thin crust is meticulously trimmed"
    ]
  },
  "flavorProfile": {
    "primaryFlavors": [
      "Delicate milky sweetness from the inclusion of milk and sugar",
      "Rich creaminess from high-quality butter or heavy cream",
      "Pure white wheat flavor with zero acidity",
      "Subtle malty notes from the Yudane/Tangzhong process",
      "Intense toasted milk aroma when grilled"
    ],
    "aromaProfile": [
      "Warm milk and sweet cream",
      "Freshly baked vanilla or honey-like undertones",
      "Mildly yeasty but clean",
      "Toasted butter aroma during the final minutes of baking",
      "Sweet cereal and malt"
    ],
    "textureNotes": [
      "The 'Cloud' Crumb: incredibly fine, uniform, and feathery-soft",
      "Mochi-Mochi: a pleasant resistance followed by a melt-in-the-mouth finish",
      "Wafer-Thin Crust: so thin and soft it almost merges with the crumb",
      "Extreme Elasticity: you can compress it, and it will spring back like a sponge",
      "High Moisture: feels cool and 'damp' to the touch due to the roux"
    ],
    "pairingRecommendations": [
      "Spreads: Salted butter, condensed milk, or strawberry jam",
      "Japanese: Ogura (red bean) paste or Matcha spread",
      "Savory: Soft-boiled eggs, tonkatsu (pork cutlet), or Kewpie mayo milk-bread sandwiches",
      "Dessert: Whipped cream and fresh fruit (Fruit Sando)",
      "Beverage: Matcha latte, Japanese roasted tea (Hojicha), or cold milk"
    ],
    "flavorEvolution": [
      "Fresh (0-6 hours): Best eaten as 'Nama' (raw/un-toasted) for the softest experience",
      "12-24 Hours: Peak flavor integration; the sweetness becomes more pronounced",
      "Day 2: Best toasted; the high sugar/milk content creates a perfect golden-brown grid",
      "Stale: Makes the most luxurious French Toast or 'Shibuya' honey bread",
      "Freezing: Freezes perfectly if sliced beforehand; can be toasted directly from the freezer"
    ]
  },
  "technicalFoundations": [
    "Tangzhong (cooked flour/water paste) + Yeast.",
    "Hydration: 70-78%"
  ],
  "doughImpact": [
    "Yudane/Tangzhong (cooked roux) gelatinizes the starch, allowing it to hold significantly more water",
    "High enrichment (6-10% butter, 6-12% sugar) contributes to the extreme tenderness of the crumb",
    "Replacing water with milk (or milk powder) provides the signature white color and creamy taste",
    "Extensive kneading is required to develop a super-strong, fine gluten network for the 'feathery' pull",
    "Double-shaping (rolling the pieces like scrolls) creates the internal directional fibers for 'tearing'"
  ],
  "bakingImpact": [
    "Low to moderate heat (180-200°C) prevents the formation of a thick or hard crust",
    "Baking in a Pullman pan (with lid) creates a perfectly square, dense-but-soft crumb without a top bulge",
    "Lack of steam in the oven allows for a dry, paper-thin, non-crackle crust",
    "The 25-35 minute bake ensures the high moisture is 'set' without drying out the interior",
    "Brushing the top with milk or butter immediately after baking preserves softness and adds shine"
  ],
  "technicalProfile": {
    "hydrationRange": [
      70,
      78
    ],
    "saltRange": [
      1.8,
      2
    ],
    "oilRange": [
      6,
      10
    ],
    "sugarRange": [
      6,
      12
    ],
    "flourStrength": t('styles.highprotein_bread_flour'),
    "fermentation": {
      "bulk": "1–2 h at room temperature",
      "proof": "60–90 min in lidded or open pans",
      "coldRetard": t('styles.optional')
    },
    "oven": {
      "type": "electric_home",
      "temperatureC": [
        180,
        200
      ],
      "notes": t('styles.baked_gently_to_avoid_thick_crust_often_lidded_for')
    },
    "difficulty": "Hard",
    "recommendedUse": [
      t('common.sandwiches'),
      t('common.thick_toast'),
      t('common.dessert_bread')
    ]
  },
  "regionalVariants": [
    "Nama Shokupan - The ultra-luxury 'raw eating' version with heavy cream and honey",
    "Kaku-shoku - The traditional lidded square loaf, ideal for sandwiches",
    "Yama-shoku - The 'Mountain' version baked without a lid, creating a lighter, loftier dome",
    "Flavored Shokupan - Versions containing Matcha, Chocolate swirls, or Raisins",
    "Milk Shokupan - Made with 100% milk and no water for maximum richness"
  ],
  "climateScenarios": [
    "Hot/Humid: Use chilled milk and dough; the sugar and enrichment will make the dough rise very fast",
    "Cold/Dry: Use a warm proofing chamber (28°C); the enriched dough is heavy and needs help rising",
    "Winter: Ensure the Tangzhong is cooled properly before mixing to avoid killing the yeast",
    "Tropical: The high milk content can cause the dough to over-ferment and go 'sour' quickly—keep it cool"
  ],
  "styleComparisons": [
    "vs. Brioche: Shokupan is less 'eggy' and oily; it focuses on milk/water-roux for softness vs. fat",
    "vs. American Wonder Bread: Shokupan has much more structural integrity and a 'mochi' chew",
    "vs. Pain de Mie: Shokupan is wetter (due to Tangzhong) and much more elastic",
    "vs. Baguette: Opposite worlds. Shokupan is a soft cloud; Baguette is a crusty stick"
  ],
  "parameterSensitivity": [
    "Critical: Tangzhong Ratio - too little and it's just regular bread; too much and it's gummy",
    "Highly sensitive: Kneading - must reach full windowpane to achieve the 'stretch' and 'pull'",
    "Milk Temperature: If too hot during mixing, it will ruin the yeast and the bread won't rise",
    "Sugar Content: At 10%+, it starts to inhibit yeast, requiring slightly more fermentation time",
    "Pullman Lid Timing: If you close the lid too late, the dough will be squeezed and become dense"
  ],
  "risks": [
    "Gummy Middle: Caused by under-baking or a faulty Tangzhong ratio",
    "Collapsing Sides: 'Waisted' loaves occur when the bread is not unmolded immediately after baking",
    "Dense Bottom: Proofing temperature was too low, leading to poor bottom expansion",
    "Burnt Crust/Raw Center: Oven was too hot for the high-sugar/milk dough",
    "Lack of 'Pull': Insufficient kneading or incorrect rolling technique during shaping"
  ],
  "notes": [
    "Always let the Tangzhong cool completely before adding it to the main dough",
    "Use a Pullman pan for the classic square 'store-bought' look",
    "Roll the dough pieces like a Swiss roll to create the directional gluten for pulling",
    "Wait until the bread is completely cold before slicing - high moisture needs to set",
    "For the ultimate 'Tamago Sando', cut the slices 2cm thick and remove the crusts"
  ],
  "tags": [
    t('common.sandwiches'),
    t('common.thick_toast'),
    t('common.dessert_bread'),
    t('common.bread'),
    t('common.japan')
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
      "title": t('styles.modernist_bread_10'),
      "url": "https://modernistcuisine.com/books/modernist-bread/",
      "author": "Nathan Myhrvold, Francisco Migoya",
      "year": 2017
    },
    {
      "title": "Baking with Tangzhong",
      "url": "https://www.kingarthurbaking.com/blog/2018/03/26/introduction-to-tangzhong",
      "author": "King Arthur Baking",
      "year": 2018
    },
    {
      "title": "Japan: The Cookbook",
      "url": "https://www.amazon.com/Japan-Cookbook-Nancy-Singleton-Hachisu/dp/0714874741",
      "author": "Nancy Singleton Hachisu",
      "year": 2018
    },
    {
      "title": "The Art of Shokupan",
      "url": "https://www.justonecookbook.com/japanese-milk-bread-shokupan/",
      "author": "Namiko Chen",
      "year": 2020
    }
  ],
  "images": [],
  "diagrams": [],
  "faq": [
    {
      "question": "O que é Shokupan?",
      "answer": "Shokupan é o pão de forma japonês, famoso por ser incrivelmente macio, fofo e elástico. A tradução literal é 'pão para comer'. Ele se distingue pela textura 'mochi-mochi' (elástica e macia) e pelo uso do método Tangzhong ou Yudane."
    },
    {
      "question": "O que é o método Tangzhong (ou Yudane)?",
      "answer": "É uma técnica onde uma pequena parte da farinha e do líquido da receita são cozidos previamente até formarem um mingau ou roux. Isso gelatiniza o amido, permitindo que ele retenha muito mais água, resultando em um pão super úmido que permanece macio por dias."
    },
    {
      "question": "Por que o Shokupan é tão macio?",
      "answer": "Além do método Tangzhong, ele leva leite (ou leite em pó), açúcar e manteiga, que amaciam o glúten. A sova intensa também é fundamental para criar uma rede de glúten forte e fina que permite o pão 'desfiar' quando puxado."
    },
    {
      "question": "Qual a diferença entre o formato quadrado e o formato arredondado (montanha)?",
      "answer": "O quadrado (Kaku-shoku) é assado com tampa, o que cria um miolo mais denso e uniforme, ideal para sanduíches. O arredondado (Yama-shoku) é assado sem tampa, permitindo que o pão suba mais livremente, criando um miolo mais leve e aerado."
    },
    {
      "question": "Como se come o Shokupan no Japão?",
      "answer": "Ele é a base do famoso Tamago Sando (sanduíche de ovo) e da 'Honey Toast'. No café da manhã, é comum servi-lo em fatias bem grossas (2 a 3 cm), tostado com manteiga e pasta de feijão azuki doce (Ogura Toast)."
    }
  ],
  "isCanonical": true,
  "source": "official"
};
