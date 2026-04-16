const fs = require('fs');
const path = require('path');

const stylesData = [
    // PIZZA
    { id: 'neapolitan_avpn_classic', desc: 'classic neapolitan pizza with leopard char spots, buffalo mozzarella, fresh basil', category: 'pizza', char: false, delicate: false },
    { id: 'neapolitan_contemporary_high_hydration', desc: 'contemporary neapolitan pizza, highly blistered crust, artistic plating', category: 'pizza', char: false, delicate: false },
    { id: 'neapolitan_home_oven_adapted', desc: 'neapolitan-style pizza made in home oven, slightly imperfect char', category: 'pizza', char: false, delicate: false },
    { id: 'new_york_slice_shop', desc: 'classic New York-style pizza slice being folded, greasy, cheesy', category: 'pizza', char: false, delicate: false },
    { id: 'chicago_deep_dish', desc: 'Chicago deep dish pizza, thick cornmeal crust, chunky tomato sauce on top, cast iron pan', category: 'pizza', char: true, delicate: false },
    { id: 'detroit_style_classic', desc: 'Detroit-style pizza, rectangular, crispy caramelized cheese edge crust', category: 'pizza', char: false, delicate: false },
    { id: 'california_style', desc: 'California-style gourmet pizza with arugula, prosciutto, seasonal vegetables', category: 'pizza', char: false, delicate: false },
    { id: 'brazilian_pizzeria_gas_deck', desc: 'Brazilian-style pizza, gas deck oven, thick cheese layer, catupiry', category: 'pizza', char: false, delicate: false },
    { id: 'roman_teglia_pan', desc: 'Roman pizza al teglia, thick focaccia-like, topped generously, rectangular pan', category: 'pizza', char: false, delicate: false },
    { id: 'roman_scrocchiarella', desc: 'Roman thin-crust scrocchiarella, ultra-crispy, minimal toppings', category: 'pizza', char: false, delicate: false },
    { id: 'roman_pinsa_modern', desc: 'modern Roman pinsa, oval shape, light airy crust, artisan toppings', category: 'pizza', char: false, delicate: false },
    { id: 'sicilian_grandma_pan', desc: 'Sicilian grandma-style pan pizza, thick focaccia base, chunky toppings', category: 'pizza', char: false, delicate: false },
    { id: 'sfincione_siciliano', desc: 'Sicilian sfincione, thick fluffy crust, tomato onion anchovy topping', category: 'pizza', char: false, delicate: false },
    { id: 'new_haven_apizza', desc: 'New Haven apizza, charred coal-fired crust, minimalist white clam pizza', category: 'pizza', char: true, delicate: false },
    { id: 'st_louis_thin', desc: 'St. Louis thin-crust pizza, cracker-thin, provel cheese, square cut', category: 'pizza', char: false, delicate: false },
    { id: 'italian_trattoria_pizza', desc: 'rustic Italian trattoria wood-fired pizza, classic margherita', category: 'pizza', char: false, delicate: false },
    { id: 'turkish_pide', desc: 'Turkish pide, boat-shaped flatbread, egg and ground meat filling', category: 'pizza', char: false, delicate: false },
    { id: 'pizza_argentina_fugazzeta', desc: 'Argentine fugazzeta, thick onion focaccia pizza, caramelized onions', category: 'pizza', char: false, delicate: false },
    { id: 'pizza_frita_montanara', desc: 'Neapolitan fried pizza montanara, puffy golden deep-fried dough, ricotta topping', category: 'pizza', char: false, delicate: false },

    // BREAD
    { id: 'pao_frances_brazil', desc: 'fresh Brazilian pão francês rolls, golden glossy crust, pestana cut visible', category: 'bread', char: false, delicate: true },
    { id: 'pao_sovado_brazil', desc: 'Brazilian pão sovado, soft round rolls, shiny egg wash surface', category: 'bread', char: false, delicate: false },
    { id: 'pao_de_leite_brazil', desc: 'Brazilian pão de leite, fluffy milk bread rolls, golden brown top', category: 'enriched', char: false, delicate: true },
    { id: 'baguette_tradition_francaise', desc: 'classic French baguette tradition, crispy golden crust, cross-sections showing open crumb', category: 'bread', char: false, delicate: false },
    { id: 'sourdough_san_francisco', desc: 'San Francisco sourdough boule, dark blistered crust, elegant scoring', category: 'bread', char: true, delicate: false },
    { id: 'tartine_country_loaf', desc: 'Tartine-style country loaf, rustic ear score, beautiful open crumb', category: 'bread', char: false, delicate: false },
    { id: 'ciabatta_high_hydration', desc: 'Italian ciabatta, flat rustic shape, large irregular holes, dusted with flour', category: 'bread', char: false, delicate: false },
    { id: 'focaccia_genovese', desc: 'Genovese focaccia, dimpled golden surface, rosemary, olive oil sheen', category: 'bread', char: false, delicate: false },
    { id: 'challah_braided', desc: 'beautiful braided challah, golden sesame-topped, Sunday baker aesthetic', category: 'enriched', char: false, delicate: false },
    { id: 'challah_jewish_braided', desc: 'traditional Jewish challah, six-strand braid, glossy', category: 'enriched', char: false, delicate: false },
    { id: 'shokupan_milk_bread', desc: 'Japanese shokupan milk bread loaf, perfectly square, cotton-soft white interior', category: 'enriched', char: false, delicate: true },
    { id: 'naan_flatbread', desc: 'tandoor-baked naan bread, charred spots, buttery sheen, folded slightly', category: 'bread', char: true, delicate: false },
    { id: 'pita_bread_flatbread', desc: 'freshly baked pita bread, puffed up, slight char spots', category: 'bread', char: false, delicate: false },
    { id: 'pretzel_dough_classic', desc: 'deep brown classic German pretzel, coarse salt, glossy lye crust', category: 'bread', char: true, delicate: false },
    { id: 'turkish_simit', desc: 'Turkish simit bread ring, sesame-encrusted, golden, street food aesthetic', category: 'bread', char: false, delicate: false },
    { id: 'pain_de_campagne', desc: 'rustic French pain de campagne, country loaf, wheat scoring, linen cloth', category: 'bread', char: false, delicate: false },
    { id: 'pain_de_mie_pullman', desc: 'perfect Pullman loaf, straight sides, soft white crumb, sliced', category: 'enriched', char: false, delicate: true },
    { id: 'bagels_classic', desc: 'fresh New York bagels, shiny boiled surface, sesame and poppy seeds', category: 'bread', char: false, delicate: false },
    { id: 'wheat_tortilla', desc: 'fresh handmade flour tortilla, char spots from comal, slightly puffed', category: 'bread', char: false, delicate: false },
    { id: 'arepa_corn_flatbread', desc: 'Venezuelan/Colombian arepa, golden brown, griddled, split open showing filling', category: 'bread', char: false, delicate: false },
    { id: 'kaisersemmel_austrian', desc: 'Austrian kaisersemmel roll, five-petal pattern, crispy crust', category: 'bread', char: false, delicate: false },
    { id: 'injera_flatbread', desc: 'Ethiopian injera flatbread, spongy fermented teff, served with stews', category: 'bread', char: false, delicate: false },
    { id: 'pane_pugliese', desc: 'rustic Pugliese bread, semola durum, round loaf with golden crust', category: 'bread', char: false, delicate: false },
    { id: 'vollkornbrot_100_rye', desc: 'dense German vollkornbrot rye bread, dark, sliced, on cutting board', category: 'bread', char: true, delicate: false },
    { id: 'seventy_percent_rye_sour', desc: '70% rye sourdough, dark dense loaf, tangy aroma visual cues', category: 'bread', char: true, delicate: false },
    { id: 'whole_wheat_100', desc: '100% whole wheat loaf, hearty rustic slice, nutty appearance', category: 'bread', char: false, delicate: false },

    // BUNS
    { id: 'brioche_burger_bun', desc: 'golden brioche burger bun, sesame seeds, soft interior, split open', category: 'bun', char: false, delicate: false },
    { id: 'potato_burger_bun', desc: 'potato burger bun, pillowy soft, assembled as gourmet burger', category: 'bun', char: false, delicate: true },
    { id: 'soft_flour_bun', desc: 'soft standard burger bun, classic bakery style, on wooden board', category: 'bun', char: false, delicate: true },

    // PASTRY
    { id: 'croissant_classic', desc: 'classic French croissant, all layers visible from side, golden flaky', category: 'pastry', char: false, delicate: true },
    { id: 'pain_au_chocolat', desc: 'pain au chocolat, flaky layers, melted chocolate visible from end', category: 'pastry', char: false, delicate: true },
    { id: 'pain_aux_raisins', desc: 'pain aux raisins spiral, golden, glazed, cream pastry filling', category: 'pastry', char: false, delicate: true },
    { id: 'cinnamon_rolls_classic', desc: 'classic cinnamon rolls in pan, cream cheese frosting dripping', category: 'pastry', char: false, delicate: false },
    { id: 'sweet_rolls_neutral', desc: 'soft sweet rolls, glossy glaze, pull-apart pan style', category: 'pastry', char: false, delicate: true },
    { id: 'panettone_artisanal', desc: 'artisanal panettone, tall domed shape, candied fruits, dusted sugar', category: 'enriched', char: false, delicate: false },
    { id: 'babka_sweet_bread', desc: 'chocolate babka, twisted swirl cut, caramel glaze', category: 'enriched', char: false, delicate: false },
    { id: 'stollen_german', desc: 'German Christmas stollen, powdered sugar dusted, marzipan center visible', category: 'pastry', char: false, delicate: true },
    { id: 'colomba_pasquale', desc: 'Italian colomba pasquale, dove shape, almond icing, candied orange', category: 'pastry', char: false, delicate: true },
    { id: 'kouign_amann_breton', desc: 'Kouign-amann, caramelized sugar crust, flaky layers visible', category: 'pastry', char: false, delicate: false },
    { id: 'pastel_de_nata_portuguese', desc: 'Portuguese pastel de nata, custard tart, charred top, ceramic tile bg', category: 'pastry', char: true, delicate: false },
    { id: 'yeasted_donuts', desc: 'fluffy yeast donuts, glazed, filled, colorful bakery display', category: 'pastry', char: false, delicate: false },
    { id: 'berliner_bomboloni', desc: 'Berliner/bomboloni, fried dough balls, dusted sugar, jam filling', category: 'pastry', char: false, delicate: true },
    { id: 'malasadas_fried_dough', desc: 'Hawaiian malasadas, fried in sugar, warm from fryer aesthetic', category: 'pastry', char: false, delicate: false },

    // CONFECTIONERY
    { id: 'cookie_ny_choc_chip', desc: 'New York-style chocolate chip cookie, gooey center, crispy edges', category: 'cookie', char: false, delicate: false },
    { id: 'cookie_classic_soft', desc: 'classic soft chocolate chip cookie, melty chips, warm bakery', category: 'cookie', char: false, delicate: false },
    { id: 'cookie_shortbread_classic', desc: 'shortbread cookies, buttery golden, Scottish style', category: 'cookie', char: false, delicate: false },
    { id: 'pate_sucree_classic', desc: 'pâte sucrée tart shell, crispy, golden, unfilled and filled versions', category: 'cookie', char: false, delicate: true },
    { id: 'pate_sablee_classic', desc: 'pâte sablée tart, crumbly butter pastry, fruit tart styled', category: 'cookie', char: false, delicate: true },
    { id: 'pate_a_choux_classic', desc: 'pâte à choux, cream puffs and éclairs, chocolate glaze', category: 'pastry', char: false, delicate: true },
    { id: 'pastry_danish_classic', desc: 'Danish pastry, laminated dough, fruit custard spiral', category: 'pastry', char: false, delicate: true },
    { id: 'puff_pastry_classic', desc: 'classic puff pastry, croissant-like layers, vol-au-vent or mille-feuille', category: 'pastry', char: false, delicate: true },

    // GLUTEN FREE
    { id: 'brazilian_cheese_bread', desc: 'Brazilian pão de queijo, golden cheese bread balls, stretchy interior', category: 'bread', char: false, delicate: false },
];

function getAngle(category) {
    if (category === 'pizza') return '45-degree overhead shot showing the entire round pizza';
    if (category === 'bread') return '3/4 angle showing crust texture and crumb cross-section';
    if (category === 'enriched') return 'Close-up 3/4 angle showing golden crust and soft interior';
    if (category === 'pastry') return 'Side angle showing all layers, flaky texture';
    if (category === 'cookie') return 'Top-down flat lay or stacked 3/4 view';
    if (category === 'bun') return '3/4 front angle showing height and texture';
    return '3/4 angle';
}

function getLighting(isChar, isDelicate) {
    if (isChar) return 'dramatic low-key lighting';
    if (isDelicate) return 'bright natural window light, clean shadows';
    return 'warm side lighting, golden hour tones';
}

const template = "Professional food photography. [STYLE]. Shot from [ANGLE]. [LIGHTING]. Rustic wooden surface or marble table background. Shallow depth of field. Mouthwatering, editorial quality. No text. No watermarks. 16:9 aspect ratio.";

const prompts = stylesData.map(item => {
    const angle = getAngle(item.category);
    const lighting = getLighting(item.char, item.delicate);
    const prompt = template
        .replace('[STYLE]', item.desc)
        .replace('[ANGLE]', angle)
        .replace('[LIGHTING]', lighting);

    return {
        styleId: item.id,
        fileName: `${item.id}_hero.png`,
        currentPath: `/images/styles/${item.id}_hero.png`,
        prompt: prompt
    };
});

fs.mkdirSync(path.join(__dirname, 'scripts'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'scripts', 'image_prompts_nanobanana2.json'), JSON.stringify(prompts, null, 2));
console.log("JSON generated.");

// Step 4: Update image paths in style definitions.
const targetDir = path.join(__dirname, 'src', 'data', 'styles');

function findTsFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findTsFiles(filePath, fileList);
        } else if (filePath.endsWith('.ts')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const allTsFiles = findTsFiles(targetDir);

// Collect output for step 5
const updatedFiles = [];
const failedFiles = [];

for (const filePath of allTsFiles) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Make sure this is actually a style definition we are tracking
    // For safety, let's extract the id directly from the file content or check our list.
    const idMatch = content.match(/id:\s*(['"])([^'"]+)\1/);
    if (!idMatch) continue;
    const currentId = idMatch[2];

    const isInList = stylesData.some(s => s.id === currentId);
    if (!isInList) continue; // Skip if not in our active styles list

    // Find the images block
    // We expect:
    // images: {
    //     hero: "...",
    //     dough: "...",
    //     crumb: "..."
    // }

    const originalContent = content;

    content = content.replace(/hero:\s*(['"]).*?\1/, `hero: "/images/styles/${currentId}_hero.png"`);
    content = content.replace(/dough:\s*(['"]).*?\1/, `dough: "/images/styles/${currentId}_dough.png"`);
    content = content.replace(/crumb:\s*(['"]).*?\1/, `crumb: "/images/styles/${currentId}_crumb.png"`);

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedFiles.push(currentId);
    }
}

// Prepare markdown table for step 5
let markdown = "| Style ID | Hero Path (new) | Image Prompt Generated |\n";
markdown += "|----------|-----------------|----------------------|\n";
for (const item of stylesData) {
    markdown += `| ${item.id} | /images/styles/${item.id}_hero.png | ✅ |\n`;
}

fs.writeFileSync(path.join(__dirname, 'scripts', 'summary.md'), markdown);
console.log("Files updated and summary created.");
