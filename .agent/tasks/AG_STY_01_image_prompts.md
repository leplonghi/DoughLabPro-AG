# AG_STY_01 — Hero Image Prompts for Nanobanana 2 (Google Imagen 2)

## Goal
Generate a comprehensive JSON file containing one detailed image-generation prompt per active style definition, so the user can feed each prompt to **nanobanana 2 (Google Imagen 2)** and produce professional hero images. After generation, update the `images.hero` field in each style definition file to point to the correct local path.

---

## Instructions

### Step 1 — Generate the prompts file

Create the file: `scripts/image_prompts_nanobanana2.json`

The JSON structure must be:

```json
[
  {
    "styleId": "neapolitan_avpn_classic",
    "fileName": "neapolitan_avpn_classic_hero.png",
    "currentPath": "/images/styles/neapolitan_avpn_classic_hero.png",
    "prompt": "<detailed prompt for nanobanana 2>"
  },
  ...
]
```

### Step 2 — Prompt format for nanobanana 2

Each prompt must follow this exact template:

```
Professional food photography. [STYLE DESCRIPTION]. Shot from [ANGLE]. [LIGHTING].
Rustic wooden surface or marble table background. Shallow depth of field.
Mouthwatering, editorial quality. No text. No watermarks. 16:9 aspect ratio.
```

**Angle guidelines by category:**
- Pizza → 45-degree overhead shot showing the entire round pizza
- Bread/Baguette/Rolls → 3/4 angle showing crust texture and crumb cross-section
- Brioche/Enriched → Close-up 3/4 angle showing golden crust and soft interior
- Croissant/Pastry/Laminated → Side angle showing all layers, flaky texture
- Cookies/Confectionery → Top-down flat lay or stacked 3/4 view
- Buns/Burger Buns → 3/4 front angle showing height and texture

**Lighting guidelines:**
- Use "warm side lighting, golden hour tones" for most items
- Use "bright natural window light, clean shadows" for delicate pastry/white items
- Use "dramatic low-key lighting" for dark/char items (Chicago Deep Dish, New Haven)

### Step 3 — Generate prompts for ALL active styles

Create a prompt entry for each of the following style files:

**PIZZA:**
- `neapolitan_avpn_classic` → classic neapolitan pizza with leopard char spots, buffalo mozzarella, fresh basil
- `neapolitan_contemporary_high_hydration` → contemporary neapolitan pizza, highly blistered crust, artistic plating
- `neapolitan_home_oven_adapted` → neapolitan-style pizza made in home oven, slightly imperfect char
- `new_york_slice_shop` → classic New York-style pizza slice being folded, greasy, cheesy
- `chicago_deep_dish` → Chicago deep dish pizza, thick cornmeal crust, chunky tomato sauce on top, cast iron pan
- `detroit_style_classic` → Detroit-style pizza, rectangular, crispy caramelized cheese edge crust
- `california_style` → California-style gourmet pizza with arugula, prosciutto, seasonal vegetables
- `brazilian_pizzeria_gas_deck` → Brazilian-style pizza, gas deck oven, thick cheese layer, catupiry
- `roman_teglia_pan` → Roman pizza al teglia, thick focaccia-like, topped generously, rectangular pan
- `roman_scrocchiarella` → Roman thin-crust scrocchiarella, ultra-crispy, minimal toppings
- `roman_pinsa_modern` → modern Roman pinsa, oval shape, light airy crust, artisan toppings
- `sicilian_grandma_pan` → Sicilian grandma-style pan pizza, thick focaccia base, chunky toppings
- `sfincione_siciliano` → Sicilian sfincione, thick fluffy crust, tomato onion anchovy topping
- `new_haven_apizza` → New Haven apizza, charred coal-fired crust, minimalist white clam pizza
- `st_louis_thin` → St. Louis thin-crust pizza, cracker-thin, provel cheese, square cut
- `italian_trattoria_pizza` → rustic Italian trattoria wood-fired pizza, classic margherita
- `turkish_pide` → Turkish pide, boat-shaped flatbread, egg and ground meat filling
- `pizza_argentina_fugazzeta` → Argentine fugazzeta, thick onion focaccia pizza, caramelized onions
- `pizza_frita_montanara` → Neapolitan fried pizza montanara, puffy golden deep-fried dough, ricotta topping

**BREAD:**
- `pao_frances_brazil` → fresh Brazilian pão francês rolls, golden glossy crust, pestana cut visible
- `pao_sovado_brazil` → Brazilian pão sovado, soft round rolls, shiny egg wash surface
- `pao_de_leite_brazil` → Brazilian pão de leite, fluffy milk bread rolls, golden brown top
- `baguette_tradition_francaise` → classic French baguette tradition, crispy golden crust, cross-sections showing open crumb
- `sourdough_san_francisco` → San Francisco sourdough boule, dark blistered crust, elegant scoring
- `tartine_country_loaf` → Tartine-style country loaf, rustic ear score, beautiful open crumb
- `ciabatta_high_hydration` → Italian ciabatta, flat rustic shape, large irregular holes, dusted with flour
- `focaccia_genovese` → Genovese focaccia, dimpled golden surface, rosemary, olive oil sheen
- `challah_braided` → beautiful braided challah, golden sesame-topped, Sunday baker aesthetic
- `challah_jewish_braided` → traditional Jewish challah, six-strand braid, glossy
- `shokupan_milk_bread` → Japanese shokupan milk bread loaf, perfectly square, cotton-soft white interior
- `naan_flatbread` → tandoor-baked naan bread, charred spots, buttery sheen, folded slightly
- `pita_bread_flatbread` → freshly baked pita bread, puffed up, slight char spots
- `pretzel_dough_classic` → deep brown classic German pretzel, coarse salt, glossy lye crust
- `turkish_simit` → Turkish simit bread ring, sesame-encrusted, golden, street food aesthetic
- `pain_de_campagne` → rustic French pain de campagne, country loaf, wheat scoring, linen cloth
- `pain_de_mie_pullman` → perfect Pullman loaf, straight sides, soft white crumb, sliced
- `bagels_classic` → fresh New York bagels, shiny boiled surface, sesame and poppy seeds
- `wheat_tortilla` → fresh handmade flour tortilla, char spots from comal, slightly puffed
- `arepa_corn_flatbread` → Venezuelan/Colombian arepa, golden brown, griddled, split open showing filling
- `kaisersemmel_austrian` → Austrian kaisersemmel roll, five-petal pattern, crispy crust
- `injera_flatbread` → Ethiopian injera flatbread, spongy fermented teff, served with stews
- `pane_pugliese` → rustic Pugliese bread, semola durum, round loaf with golden crust
- `vollkornbrot_100_rye` → dense German vollkornbrot rye bread, dark, sliced, on cutting board
- `seventy_percent_rye_sour` → 70% rye sourdough, dark dense loaf, tangy aroma visual cues
- `whole_wheat_100` → 100% whole wheat loaf, hearty rustic slice, nutty appearance

**BUNS:**
- `brioche_burger_bun` → golden brioche burger bun, sesame seeds, soft interior, split open
- `potato_burger_bun` → potato burger bun, pillowy soft, assembled as gourmet burger
- `soft_flour_bun` → soft standard burger bun, classic bakery style, on wooden board

**PASTRY:**
- `croissant_classic` → classic French croissant, all layers visible from side, golden flaky
- `pain_au_chocolat` → pain au chocolat, flaky layers, melted chocolate visible from end
- `pain_aux_raisins` → pain aux raisins spiral, golden, glazed, cream pastry filling
- `cinnamon_rolls_classic` → classic cinnamon rolls in pan, cream cheese frosting dripping
- `sweet_rolls_neutral` → soft sweet rolls, glossy glaze, pull-apart pan style
- `panettone_artisanal` → artisanal panettone, tall domed shape, candied fruits, dusted sugar
- `babka_sweet_bread` → chocolate babka, twisted swirl cut, caramel glaze
- `stollen_german` → German Christmas stollen, powdered sugar dusted, marzipan center visible
- `colomba_pasquale` → Italian colomba pasquale, dove shape, almond icing, candied orange
- `kouign_amann_breton` → Kouign-amann, caramelized sugar crust, flaky layers visible
- `pastel_de_nata_portuguese` → Portuguese pastel de nata, custard tart, charred top, ceramic tile bg
- `yeasted_donuts` → fluffy yeast donuts, glazed, filled, colorful bakery display
- `berliner_bomboloni` → Berliner/bomboloni, fried dough balls, dusted sugar, jam filling
- `malasadas_fried_dough` → Hawaiian malasadas, fried in sugar, warm from fryer aesthetic

**CONFECTIONERY:**
- `cookie_ny_choc_chip` → New York-style chocolate chip cookie, gooey center, crispy edges
- `cookie_classic_soft` → classic soft chocolate chip cookie, melty chips, warm bakery
- `cookie_shortbread_classic` → shortbread cookies, buttery golden, Scottish style
- `pate_sucree_classic` → pâte sucrée tart shell, crispy, golden, unfilled and filled versions
- `pate_sablee_classic` → pâte sablée tart, crumbly butter pastry, fruit tart styled
- `pate_a_choux_classic` → pâte à choux, cream puffs and éclairs, chocolate glaze
- `pastry_danish_classic` → Danish pastry, laminated dough, fruit custard spiral
- `puff_pastry_classic` → classic puff pastry, croissant-like layers, vol-au-vent or mille-feuille

**GLUTEN FREE:**
- `brazilian_cheese_bread` → Brazilian pão de queijo, golden cheese bread balls, stretchy interior

### Step 4 — Update image paths in style definitions

After generating the prompts file, for each style definition file:

1. Check if `images.hero` matches the expected filename pattern
2. If the filename is inconsistent or generic (e.g. just `placeholder-dough.png`), update it to use the style ID as the filename: `/images/styles/{styleId}_hero.png`
3. Set `images.dough` to `/images/styles/{styleId}_dough.png`
4. Set `images.crumb` to `/images/styles/{styleId}_crumb.png`

**Important:** Only update the path strings in the definition files. Do NOT delete or modify the actual PNG files in `public/images/styles/`.

### Step 5 — Output confirmation

After completing, output a summary table:
```
| Style ID | Hero Path (new) | Image Prompt Generated |
|----------|-----------------|----------------------|
| ...      | ...             | ✅ / ❌              |
```

---

## Acceptance Criteria
- [ ] `scripts/image_prompts_nanobanana2.json` exists and has one entry per active style
- [ ] Each prompt entry has: `styleId`, `fileName`, `currentPath`, `prompt`
- [ ] Each `prompt` is ≥ 30 words, descriptive, and follows the template
- [ ] All active style definitions have a correct `images.hero` path (no generic placeholder for hero)
- [ ] All active style definitions have `images.dough` and `images.crumb` paths set (even if pointing to future files)
- [ ] No actual PNG files were deleted or moved

---

## Notes
- The user generates the physical images using **nanobanana 2 (Google Imagen 2)**
- The `scripts/image_prompts_nanobanana2.json` file is the deliverable for the user to take to nanobanana 2
- Focus on food photography prompts: editorial, mouthwatering, professional
- Each image should feel like it belongs in a premium bakery app
- Reference visual style: "Ottolenghi cookbook photography", "Modernist Cuisine", "Salt Fat Acid Heat"
