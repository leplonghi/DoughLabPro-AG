const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../public/locales');
const langs = ['pt', 'es', 'fr', 'it', 'de'];

// High-quality manual translations for Title and Description of popular styles
const dictionary = {
    // --- PIZZA STYLES ---
    neapolitan: {
        pt: { title: "Pizza Napolitana", desc: "A pizza original. Massa macia, fina e elástica com borda alta e macia (cornicione)." },
        es: { title: "Pizza Napolitana", desc: "La pizza original. Masa suave, fina y elástica con borde alto y tierno (corniscione)." },
        fr: { title: "Pizza Napolitaine", desc: "La pizza originale. Pâte moelleuse, fine et élastique avec une croûte haute (cornicione)." },
        it: { title: "Pizza Napoletana", desc: "La pizza originale. Impasto morbido, sottile ed elastico con cornicione alto." }, // Native
        de: { title: "Neapolitanische Pizza", desc: "Das Original. Weicher, dünner und elastischer Teig mit hohem Rand (Cornicione)." }
    },
    ny_style: {
        pt: { title: "Estilo Nova York", desc: "Fatias grandes e dobráveis com borda crocante. O clássico americano." },
        es: { title: "Estilo Nueva York", desc: "Rebanadas grandes y plegables con borde crujiente. El clásico americano." },
        fr: { title: "Style New-Yorkais", desc: "Grandes tranches pliables avec une croûte croustillante. Le classique américain." },
        it: { title: "Stile New York", desc: "Fette grandi e pieghevoli con crosta croccante. Il classico americano." },
        de: { title: "New York Style", desc: "Große, faltbare Stücke mit knusprigem Rand. Der amerikanische Klassiker." }
    },
    chicago_deep_dish: {
        pt: { title: "Chicago Deep Dish", desc: "Pizza grossa assada em assadeira funda, com queijo por baixo do molho." },
        es: { title: "Chicago Deep Dish", desc: "Pizza gruesa horneada en sartén honda, con queso debajo de la salsa." },
        fr: { title: "Chicago Deep Dish", desc: "Pizza épaisse cuite dans un moule creux, avec le fromage sous la sauce." },
        it: { title: "Chicago Deep Dish", desc: "Pizza spessa cotta in teglia fonda, con formaggio sotto la salsa." },
        de: { title: "Chicago Deep Dish", desc: "Dicke Pizza in tiefer Pfanne gebacken, Käse unter der Soße." }
    },
    detroit_style: {
        pt: { title: "Estilo Detroit", desc: "Retangular, massa alta e aerada com bordas de queijo crocante (frico)." },
        es: { title: "Estilo Detroit", desc: "Rectangular, masa alta y aireada con bordes de queso crujiente (frico)." },
        fr: { title: "Style Detroit", desc: "Rectangulaire, pâte épaisse et aérée avec des bords de fromage croustillants." },
        it: { title: "Stile Detroit", desc: "Rettangolare, impasto alto e arioso con bordi di formaggio croccante." },
        de: { title: "Detroit Style", desc: "Rechteckig, dicker Teig mit knusprigem Käserand." }
    },
    sicilian: {
        pt: { title: "Siciliana (Sfincione)", desc: "Pizza de tabuleiro grossa e esponjosa, origem da focaccia com molho." },
        es: { title: "Siciliana (Sfincione)", desc: "Pizza de bandeja gruesa y esponjosa, origen de la focaccia con salsa." },
        fr: { title: "Sicilienne (Sfincione)", desc: "Pizza sur plaque épaisse et spongieuse, ancêtre de la focaccia." },
        it: { title: "Siciliana (Sfincione)", desc: "Pizza in teglia spessa e spugnosa, tradizionalmente con pangrattato." },
        de: { title: "Sizilianisch (Sfincione)", desc: "Dicke, schwammige Blechpizza, Vorläufer der Focaccia." }
    },
    romana_teglia: {
        pt: { title: "Romana in Teglia", desc: "Alta hidratação, leve, crocante e aerada. Vendida ao taglio (pedaço)." },
        es: { title: "Romana in Teglia", desc: "Alta hidratación, ligera, crujiente y aireada. Vendida al corte." },
        fr: { title: "Romana in Teglia", desc: "Haute hydratation, légère, croustillante et alvéolée. Vendue à la coupe." },
        it: { title: "Romana in Teglia", desc: "Alta idratazione, leggera, croccante e alveolata. Venduta al taglio." },
        de: { title: "Romana in Teglia", desc: "Hohe Hydratation, leicht, knusprig und luftig." }
    },
    romana_tonda: { // Scrocchiarella
        pt: { title: "Romana Tonda", desc: "Fina como papel, super crocante (Scrocchiarella) e sem borda alta." },
        es: { title: "Romana Tonda", desc: "Fina como papel, super crujiente y sin borde alto." },
        fr: { title: "Romana Tonda", desc: "Fine comme du papier, très croustillante et sans bordure." },
        it: { title: "Romana Tonda", desc: "Sottile come carta, super croccante (Scrocchiarella) e senza cornicione." },
        de: { title: "Romana Tonda", desc: "Hauchdünn, super knusprig und ohne hohen Rand." }
    },
    calzone: {
        pt: { title: "Calzone", desc: "Pizza dobrada e selada, recheada com ricota, mozzarella e presunto." },
        es: { title: "Calzone", desc: "Pizza doblada y sellada, rellena de ricota, mozzarella y jamón." },
        fr: { title: "Calzone", desc: "Pizza pliée et scellée, farcie de ricotta, mozzarella et jambon." },
        it: { title: "Calzone", desc: "Pizza chiusa a mezzaluna, ripiena di ricotta, mozzarella e salumi." },
        de: { title: "Calzone", desc: "Gefaltete Pizza, gefüllt mit Ricotta, Mozzarella und Schinken." }
    },

    // --- BREAD STYLES ---
    sourdough_country: {
        pt: { title: "Pão de Campo (Sourdough)", desc: "O clássico rústico. Casca grossa, miolo aberto e sabor levemente ácido." },
        es: { title: "Pan de Campo (Masa Madre)", desc: "El clásico rústico. Corteza gruesa, miga abierta y sabor ligeramente ácido." },
        fr: { title: "Pain de Campagne (Levain)", desc: "Le classique rustique. Croûte épaisse, mie ouverte et saveur acidulée." },
        it: { title: "Pane di Campagna (Lievito Madre)", desc: "Il classico rustico. Crosta spessa, mollica aperta e sapore leggermente acido." },
        de: { title: "Landbrot (Sauerteig)", desc: "Der rustikale Klassiker. Dicke Kruste, offene Krume und säuerlicher Geschmack." }
    },
    baguette: {
        pt: { title: "Bagueta Tradicional", desc: "O ícone francês. Crocante, dourada e miolo cremoso." },
        es: { title: "Baguette Tradicional", desc: "El icono francés. Crujiente, dorada y miga cremosa." },
        fr: { title: "Baguette Tradition", desc: "L'icône française. Croustillante, dorée et mie crémeuse." },
        it: { title: "Baguette Tradizionale", desc: "L'icona francese. Croccante, dorata e mollica cremosa." },
        de: { title: "Baguette Traditionelle", desc: "Die französische Ikone. Knusprig, goldbraun und cremige Krume." }
    },
    ciabatta: {
        pt: { title: "Ciabatta", desc: "Pão italiano rústico de alta hidratação. Plano e perfeito para sanduíches." },
        es: { title: "Ciabatta", desc: "Pan italiano rústico de alta hidratación. Plano y perfecto para sándwiches." },
        fr: { title: "Ciabatta", desc: "Pain italien rustique à haute hydratation. Plat et parfait pour les sandwichs." },
        it: { title: "Ciabatta", desc: "Pane rustico ad alta idratazione. Piatto e perfetto per i panini." },
        de: { title: "Ciabatta", desc: "Rustikales italienisches Brot mit hoher Hydratation. Flach und perfekt für Sandwiches." }
    },
    focaccia: {
        pt: { title: "Focaccia Genovese", desc: "Clássica italiana rica em azeite, com covinhas (dimples) e sal grosso." },
        es: { title: "Focaccia Genovese", desc: "Clásica italiana rica en aceite de oliva, con hoyuelos y sal gruesa." },
        fr: { title: "Focaccia Genovese", desc: "Classique italien riche en huile d'olive, avec des fossettes et du gros sel." },
        it: { title: "Focaccia Genovese", desc: "Classica ligure, ricca di olio, con i tipici buchi e sale grosso." },
        de: { title: "Focaccia Genovese", desc: "Klassisch italienisch, reich an Olivenöl, mit Vertiefungen und grobem Salz." }
    },
    brioche: {
        pt: { title: "Brioche Francês", desc: "Rico, amanteigado e macio. Massa 'enriquecida' com ovos e manteiga." },
        es: { title: "Brioche Francés", desc: "Rico, mantecoso y tierno. Masa 'enriquecida' con huevos y mantequilla." },
        fr: { title: "Brioche", desc: "Riche, beurrée et tendre. Pâte enrichie aux œufs et au beurre." },
        it: { title: "Brioche", desc: "Ricco, burroso e soffice. Impasto arricchito con uova e burro." },
        de: { title: "Brioche", desc: "Reichhaltig, butterig und zart. Teig angereichert mit Eiern und Butter." }
    },
    challah: {
        pt: { title: "Challah", desc: "Pão trançado judaico, rico em ovos e óleo (sem laticínios)." },
        es: { title: "Jalá (Challah)", desc: "Pan trenzado judío, rico en huevos y aceite (sin lácteos)." },
        fr: { title: "Hallah", desc: "Pain tressé juif, riche en œufs et en huile (sans produits laitiers)." },
        it: { title: "Challah", desc: "Pane intrecciato ebraico, ricco di uova e olio (senza latticini)." },
        de: { title: "Challah", desc: "Jüdisches geflochtenes Brot, reich an Eiern und Öl (milchfrei)." }
    },
    bagel: {
        pt: { title: "Bagel NY Style", desc: "Denso, mastigável, fervido antes de assar." },
        es: { title: "Bagel Estilo NY", desc: "Denso, masticable, hervido antes de hornear." },
        fr: { title: "Bagel Style NY", desc: "Dense, moelleux, bouilli avant d'être cuit." },
        it: { title: "Bagel New York", desc: "Denso, gommoso, bollito prima della cottura." },
        de: { title: "Bagel New York Style", desc: "Dicht, zäh, vor dem Backen gekocht." }
    },
    burger_bun: {
        pt: { title: "Pão de Hambúrguer", desc: "Macio, leve e estruturado para segurar o hambúrguer." },
        es: { title: "Pan de Hamburguesa", desc: "Suave, ligero y estructurado para sostener la hamburguesa." },
        fr: { title: "Pain à Burger (Bun)", desc: "Moelleux, léger et structuré pour tenir le burger." },
        it: { title: "Panino per Hamburger", desc: "Soffice, leggero e strutturato per sostenere l'hamburger." },
        de: { title: "Burger Bun", desc: "Weich, leicht und stabil genug für den Burger." }
    },
    panettone: {
        pt: { title: "Panetone", desc: "O 'Monte Everest' da panificação. Massa mãe, frutas e fermentação longa." },
        es: { title: "Panettone", desc: "El 'Monte Everest' de la panadería. Masa madre, frutas y fermentación larga." },
        fr: { title: "Panettone", desc: "L'Everest de la boulangerie. Levain, fruits confits et longue fermentation." },
        it: { title: "Panettone", desc: "L'Everest della panificazione. Lievito madre, canditi e lunga lievitazione." },
        de: { title: "Panettone", desc: "Der 'Mount Everest' des Backens. Sauerteig, Früchte und lange Gärung." }
    },
    pretzels: {
        pt: { title: "Pretzel Alemão", desc: "Mergulhado em soda cáustica para cor escura e sabor único." },
        es: { title: "Pretzel Alemán", desc: "Bañado en sosa cáustica para color oscuro y sabor único." },
        fr: { title: "Bretzel", desc: "Trempé dans la soude pour une couleur foncée et un goût unique." },
        it: { title: "Pretzel", desc: "Immerso in soda caustica per colore scuro e sapore unico." },
        de: { title: "Brezel", desc: "In Lauge getaucht für dunkle Farbe und einzigartigen Geschmack." }
    },
    tortilla: {
        pt: { title: "Tortilla de Trigo", desc: "Fina, macia e sem fermentação. Para tacos e burritos." },
        es: { title: "Tortilla de Harina", desc: "Fina, suave y sin levadura. Para tacos y burritos." },
        fr: { title: "Tortilla de Blé", desc: "Fine, souple et sans levure. Pour tacos et burritos." },
        it: { title: "Tortilla di Grano", desc: "Sottile, morbida e senza lievito. Per tacos e burritos." },
        de: { title: "Weizentortilla", desc: "Dünn, weich und ungesäuert. Für Tacos und Burritos." }
    },
    pita: {
        pt: { title: "Pão Pita", desc: "Pão sírio com bolsa (pocket) natural formadp pelo vapor." },
        es: { title: "Pan de Pita", desc: "Pan plano con bolsillo natural formado por vapor." },
        fr: { title: "Pain Pita", desc: "Pain plat avec une poche naturelle formée par la vapeur." },
        it: { title: "Pane Pita", desc: "Pane piatto con tasca naturale formata dal vapore." },
        de: { title: "Pita", desc: "Fladenbrot mit natürlicher Tasche durch Dampf." }
    },
    shokupan: {
        pt: { title: "Shokupan (Pão de Leite Japonês)", desc: "O pão mais macio do mundo, feito com método Tangzhong." },
        es: { title: "Shokupan (Pan de Leche Japonés)", desc: "El pan más suave del mundo, hecho con método Tangzhong." },
        fr: { title: "Shokupan (Pain au Lait Japonais)", desc: "Le pain le plus moelleux, fait avec la méthode Tangzhong." },
        it: { title: "Shokupan", desc: "Il pane più soffice del mondo, fatto con metodo Tangzhong." },
        de: { title: "Shokupan (Japanisches Milchbrot)", desc: "Das weichste Brot, hergestellt mit Tangzhong-Methode." }
    }
};

function translateStyles() {
    console.log('🍕 Putting styles in the oven (Translating)...');

    langs.forEach(lang => {
        const filePath = path.join(localesDir, lang, 'styles.json');

        if (!fs.existsSync(filePath)) {
            console.warn(`Warning: File not found for ${lang}: ${filePath}`);
            return;
        }

        let content;
        try {
            content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
            console.error(`Error parsing JSON for ${lang}:`, e);
            return;
        }

        let updateCount = 0;

        // Iterate over our manual dictionary
        for (const [key, translations] of Object.entries(dictionary)) {
            if (translations[lang]) {
                // The keys in styles.json might be exact matches OR require finding
                // We know from the codebase that keys are often snake_case.
                // However, inspecting the file shows keys like "baguette_tradition" and "baguette_tradition_desc".
                // I'll try to match specific known keys.

                // Construct potential keys
                // 1. Exact key (often used for title in some schemas)
                // 2. key + "_desc"

                // Let's look at the mapping logic. The simple keys in the dict need to map to the actual JSON keys.
                // I need a mapping from "my dict key" to "styles.json key".

                // Mapping:
                // neapolitan -> neapolitan
                // ny_style -> ny_style (or maybe 'new_york'?) -> Looking at file: "american_artisan"?? No.
                // Let's blindly guess standard naming, but also handle mismatches if I can see them.
                // Start with direct match.

                // DIRECT MATCH ATTEMPT
                if (content[key]) {
                    content[key] = translations[lang].title;
                    updateCount++;
                }
                if (content[`${key}_desc`]) {
                    content[`${key}_desc`] = translations[lang].desc;
                    updateCount++;
                }

                // SPECIAL MAPPINGS OBSERVED IN FILE
                // "baguette_tradition"
                if (key === 'baguette' && content['baguette_tradition']) {
                    content['baguette_tradition'] = translations[lang].title;
                    content['baguette_tradition_desc'] = translations[lang].desc;
                    updateCount++;
                }

                // "sourdough_country" might be "pain_de_campagne" or "country_loaf" or "sourdough"
                // I saw "sourdough_bread" in some places.
                // I'll add specific lookups if standard fails.
            }
        }

        // Manual Patches for specific known keys found in registry or styles.json
        // These are distinct from the loop above to ensure we hit the right file keys.

        const manualMap = {
            'neapolitan': 'neapolitan',
            'ny_style': 'ny_style',
            'baguette_tradition': 'baguette',
            'sourdough_country': 'sourdough_country',
            'ciabatta_classic': 'ciabatta',
            'focaccia_genovese': 'focaccia',
            'brioche_nanterre': 'brioche',
            'panettone_milano': 'panettone',
            'bagels_classic': 'bagel',
            'burger_buns_brioche': 'burger_bun',
            'pretzels_swabian': 'pretzels',
            'chicago_deep_dish': 'chicago_deep_dish',
            'detroit_red_top': 'detroit_style',
            'roman_pan_teglia': 'romana_teglia',
            'roman_scrocchiarella': 'romana_tonda'
        };

        for (const [fileKey, dictKey] of Object.entries(manualMap)) {
            if (dictionary[dictKey] && dictionary[dictKey][lang]) {
                // Title
                if (content[fileKey] && content[fileKey] === content[fileKey]) { // Exists
                    content[fileKey] = dictionary[dictKey][lang].title;
                    updateCount++;
                }
                // Desc
                if (content[`${fileKey}_desc`]) {
                    content[`${fileKey}_desc`] = dictionary[dictKey][lang].desc;
                    updateCount++;
                }
            }
        }

        if (updateCount > 0) {
            fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
            console.log(`✅ Updated ${updateCount} keys in ${lang}/styles.json`);
        } else {
            console.log(`⚠️ No keys matched for ${lang}. Check key names.`);
        }
    });
}

translateStyles();
