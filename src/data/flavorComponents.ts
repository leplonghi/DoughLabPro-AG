
import { FlavorComponent } from '../types/flavor';

export const FLAVOR_COMPONENTS: FlavorComponent[] = [
    {
        id: 'mozzarella_low_moisture',
        name: 'Mozzarella (Low Moisture)',
        category: 'Cheese',
        description: 'The gold standard for New York and American-style pizzas. Aged, denser, and saltier than fresh mozzarella.',
        flavorProfile: {
            intensity: 3,
            fat: 4,
            salinity: 3,
            sweetness: 2,
            thermalBehavior: 'Melts evenly, browns/blisters beautifully (Maillard reaction).'
        },
        origin: 'Southern Italy roots, adapted by Italian-American immigrants.',
        historyContext: 'Developed to extend shelf life and transportability. Became the backbone of the NY Slice due to its reliable melt and lack of water release.',
        commonStyles: ['new_york_slice_v2', 'sicilian_grandma_pan', 'detroit_style_classic', 'chicago_deep_dish', 'pan_pizza'],
        ovenCompatibility: ['home_oven', 'deck_oven', 'conveyor'],
        classicCombinations: [
            'Pepperoni',
            'Sausage (Calabresa)',
            'Mushrooms + Onion + Olives'
        ],
        technicalNotes: 'Lower risk of "soggy pizza". Ideal when bake time > 6-8 minutes. Avoid pre-shredded bags (cellulose).',
        applicationMoment: 'pre_oven',
        variations: 'Blend with Provolone or Parmesan to intensify flavor.',
        references: [
            {
                title: 'The Science of Pizza Cheese',
                url: 'https://www.seriouseats.com/pizza-lab-best-cheese-for-pizza',
                summary: 'Serious Eats analysis confirming whole-milk low-moisture mozzarella prevents soggy crusts in standard ovens.',
                sourceType: 'scientific'
            }
        ],
        isStandard: true
    },
    {
        id: 'fior_di_latte',
        name: 'Fior di Latte',
        category: 'Cheese',
        description: 'Fresh cow\'s milk mozzarella. Delicate, milky, and soft.',
        flavorProfile: {
            intensity: 2,
            fat: 3,
            salinity: 1,
            sweetness: 4,
            thermalBehavior: 'Releases water (whey) when heated. Melts into pools.'
        },
        origin: 'Campania, Italy.',
        historyContext: 'The traditional choice for Neapolitan pizza alongside Buffalo Mozzarella. prized for its freshness.',
        commonStyles: ['pizza-napoletana'],
        ovenCompatibility: ['wood_fired', 'high_temp_gas'],
        classicCombinations: [
            'San Marzano Tomato + Basil + Olive Oil',
            'Grated Parmesan (fine)'
        ],
        technicalNotes: 'Excess moisture can compromise low-temp bakes. Not indicated for long bakes (> 6 mins). Must be drained well.',
        applicationMoment: 'pre_oven',
        variations: 'Mix with Low-Moisture Mozzarella in home ovens.',
        references: [
            {
                title: 'AVPN International Regulations',
                url: 'https://www.pizzanapoletana.org/en/ricetta_pizza_napoletana',
                summary: 'AVPN allows Fior di Latte (Appennino Meridionale DOP) cut into strips for Vera Pizza Napoletana.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'burrata',
        name: 'Burrata',
        category: 'Cheese',
        description: 'Extremely creamy, delicate milky flavor, firm shell with fluid interior.',
        flavorProfile: {
            intensity: 2,
            fat: 5,
            salinity: 2,
            sweetness: 5,
            thermalBehavior: 'Loses structure immediately if heated. Cream separates from whey.'
        },
        origin: 'Puglia, Italy. Symbol of contemporary high-gastronomy pizza.',
        historyContext: 'Created to reduce food waste by using scraps of mozzarella mixed with cream.',
        commonStyles: ['modern_artisan', 'focaccia-genovese'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Tomato + Basil',
            'Prosciutto Crudo',
            'Mortadella + Pistachio'
        ],
        technicalNotes: 'Overcooking separates fat and whey. Not indicated for long bakes.',
        applicationMoment: 'post_oven',
        variations: 'Substitute with Stracciatella for better control.',
        references: [
            {
                title: 'Burrata: The Queen of Italian Cheeses',
                url: 'https://www.lacucinaitaliana.com/italian-food/italian-dishes/burrata-recipes',
                summary: 'La Cucina Italiana recommends serving fresh and distinct from cooked ingredients to preserve texture.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'stracciatella',
        name: 'Stracciatella',
        category: 'Cheese',
        description: 'The creamy heart of the Burrata. Shreds of mozzarella soaked in fresh cream.',
        flavorProfile: {
            intensity: 2,
            fat: 5,
            salinity: 2,
            sweetness: 5,
            thermalBehavior: 'Becomes liquid when heated.'
        },
        origin: 'Puglia, Italy.',
        historyContext: 'Originally a method to save money by reusing cheese production scraps.',
        commonStyles: ['pizza-napoletana', 'pizza-teglia-romana'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Anchovies + Zucchini Flowers',
            'Spicy Salami + Honey',
            'Roasted Peppers'
        ],
        technicalNotes: 'Apply post-oven. If applied to a very hot pizza, it will spread rapidly. Ideal for "dipping" crusts or balancing spicy toppings.',
        applicationMoment: 'post_oven',
        variations: 'None significant.',
        references: [
            {
                title: 'Puglia\'s Stracciatella',
                url: 'https://www.greatitalianchefs.com/ingredients/stracciatella',
                summary: 'Great Italian Chefs highlights its usage as a finishing touch for pasta and pizza.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'brick_cheese',
        name: 'Wisconsin Brick Cheese',
        category: 'Cheese',
        description: 'Semi-soft cheese with a sweet, nutty flavor. High fat content.',
        flavorProfile: {
            intensity: 3,
            fat: 5,
            salinity: 3,
            sweetness: 3,
            thermalBehavior: 'The key to the "Frico". Melts and caramelizes against hot steel without burning.'
        },
        origin: 'Wisconsin, USA.',
        historyContext: 'Derived from white American cheddar, aged for a short period.',
        commonStyles: ['detroit_style_classic'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Pepperoni',
            'Tomato Sauce (Cooked)',
            'Butter'
        ],
        technicalNotes: 'Must be cubed, not shredded, for authentic melt.',
        applicationMoment: 'pre_oven',
        variations: 'Mild vs Aged (Aged is very pungent like Limburger). Standard Brick is mild.',
        references: [],
        isStandard: true
    },
    {
        id: 'mozzarella_di_bufala',
        name: 'Mozzarella di Bufala Campana',
        category: 'Cheese',
        description: 'PDO buffalo milk mozzarella. Tangier, richer, and creamier than cow milk mozzarella.',
        flavorProfile: {
            intensity: 4,
            fat: 5,
            salinity: 3,
            sweetness: 3,
            thermalBehavior: 'Releases significant moisture (whey) when cooked. Often added post-bake or drained well.'
        },
        origin: 'Campania, Italy.',
        historyContext: 'The original mozzarella for Neapolitan pizza.',
        commonStyles: ['neapolitan_avpn_classic', 'neapolitan_contemporary'],
        ovenCompatibility: ['wood_fired'],
        classicCombinations: [
            'Tomato Sauce (Raw)',
            'Basil',
            'Olive Oil'
        ],
        technicalNotes: 'Strain well before use to prevent soupy pizza.',
        applicationMoment: 'pre_oven',
        variations: 'Bocconcini, Treccia.',
        references: [],
        isStandard: true
    },
    {
        id: 'stracciatella',
        name: 'Stracciatella di Bufala',
        category: 'Cheese',
        description: 'Shreds of fresh mozzarella soaked in cream. The creamy heart of Burrata.',
        flavorProfile: {
            intensity: 4,
            fat: 5,
            salinity: 2,
            sweetness: 4,
            thermalBehavior: 'Separates if heated too much. Best applied fresh post-bake.'
        },
        origin: 'Puglia, Italy.',
        historyContext: 'Originally a way to use up leftover mozzarella scraps.',
        commonStyles: ['roman_pinsa_modern', 'neapolitan_contemporary'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Mortadella',
            'Pistachio',
            'Tomato Confit'
        ],
        technicalNotes: 'Keep chilled until the very last second.',
        applicationMoment: 'post_oven',
        variations: 'Burrata (encased version).',
        references: [],
        isStandard: true
    },
    {
        id: 'guava_paste',
        name: 'Guava Paste (Goiabada)',
        category: 'Pastry Filling',
        description: 'Dense, sweet conserve made from red guavas and sugar.',
        flavorProfile: {
            intensity: 5,
            fat: 0,
            salinity: 0,
            sweetness: 5,
            thermalBehavior: 'Melts into a molten, jam-like texture.'
        },
        origin: 'Brazil.',
        historyContext: 'The "Julieta" to the cheese "Romeu".',
        commonStyles: ['pao_de_queijo', 'brazilian_pizzeria'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Minas Cheese',
            'Catupiry',
            'Cream Cheese'
        ],
        technicalNotes: 'Cut into cubes or thin slices for pizza topping.',
        applicationMoment: 'pre_oven',
        variations: 'Goiabada Cascão (with bits of skin).',
        references: [],
        isStandard: true
    },
    {
        id: 'anchovies',
        name: 'Anchovies (Alici)',
        category: 'Meat',
        description: 'Salt-cured small forage fish. Intense umami bomb.',
        flavorProfile: {
            intensity: 5,
            fat: 3,
            salinity: 5,
            sweetness: 0,
            thermalBehavior: 'Melts into the sauce if chopped, or crisps up if whole.'
        },
        origin: 'Mediterranean.',
        historyContext: 'A staple of Roman pizza and the classic Marinara enhancement.',
        commonStyles: ['roman_scrocchiarella', 'neapolitan_avpn_classic'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Tomato Sauce',
            'Oregano',
            'Garlic'
        ],
        technicalNotes: 'Rinse salt-packed anchovies; drain oil-packed ones.',
        applicationMoment: 'pre_oven',
        variations: 'White Anchovies (Marinated), Salted Anchovies.',
        references: [],
        isStandard: true
    },
    {
        id: 'garlic_roasted',
        name: 'Roasted Garlic',
        category: 'Vegetal',
        description: 'Whole garlic cloves roasted until soft, sweet, and spreadable.',
        flavorProfile: {
            intensity: 4,
            fat: 2,
            salinity: 0,
            sweetness: 4,
            thermalBehavior: 'Already cooked; heats through and spreads.'
        },
        origin: 'Global.',
        historyContext: 'Mellows the harshness of raw garlic.',
        commonStyles: ['california_style', 'new_haven_apizza'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Chicken',
            'White Sauce',
            'Spinach'
        ],
        technicalNotes: 'Squeeze out of skins after roasting.',
        applicationMoment: 'pre_oven',
        variations: 'Black Garlic (Fermented).',
        references: [],
        isStandard: true
    },
    {
        id: 'provolone',
        name: 'Provolone',
        category: 'Cheese',
        description: 'Semi-hard spun paste cheese. Comes in two main varieties: Dolce (sweet) and Piccante (spicy/aged).',
        flavorProfile: {
            intensity: 4,
            fat: 4,
            salinity: 4,
            sweetness: 2,
            thermalBehavior: 'Melts well but maintains some elasticity. Piccante releases more oil.'
        },
        origin: 'Valpadana, Italy.',
        historyContext: 'A staple of Northern Italy, often used in baked pasta and aggressive pizza pairings.',
        commonStyles: ['pan_pizza', 'sicilian_grandma_pan', 'chicago_deep_dish'],
        ovenCompatibility: ['home_oven', 'electric'],
        classicCombinations: [
            'Calabresa + Onion',
            'Mushrooms + Ham'
        ],
        technicalNotes: 'Saltier than mozzarella. Use in a blend to avoid overpowering intensity.',
        applicationMoment: 'pre_oven',
        variations: 'Dolce (mild) vs Piccante (robust/spicy).',
        references: [
            {
                title: 'Provolone Valpadana DOP Recipes',
                url: 'https://www.provolonevalpadana.it/en/',
                summary: 'Consorzio suggestions for baked applications and pairings.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'pecorino_romano',
        name: 'Pecorino Romano',
        category: 'Finish',
        description: 'Hard, salty sheep\'s milk cheese. An umami bomb.',
        flavorProfile: {
            intensity: 5,
            fat: 3,
            salinity: 5,
            sweetness: 0,
            thermalBehavior: 'Does not melt efficiently; it crisps or oils off. Use grated.'
        },
        origin: 'Lazio / Sardinia, Italy.',
        historyContext: 'One of the world\'s oldest cheeses, a staple of Roman legionaries.',
        commonStyles: ['pizza-napoletana', 'pizza-teglia-romana', 'new_haven_apizza', 'pizza-tonda-romana'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Tomato + Garlic (Marinara backup)',
            'Carbonara Pizza',
            'Topping for cooked greens'
        ],
        technicalNotes: 'Usage: "Spolverata" (light dusting). Can be added pre-oven for a toasted flavor or post-oven for fresh sharpness. WARNING: Very salty; reduce dough salt or sauce salt if using heavily.',
        applicationMoment: 'post_oven',
        variations: 'Pecorino Sardo (milder), Pecorino Toscano.',
        references: [
            {
                title: 'Pecorino Romano PDO',
                url: 'https://www.pecorinoromano.com/en/',
                summary: 'Official consortium guidelines on the intense salinity and grating texture.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'parmesan',
        name: 'Parmigiano Reggiano / Grana',
        category: 'Finish',
        description: 'The King of Cheeses. Aged cow\'s milk cheese with crystalized tyrosine crunch.',
        flavorProfile: {
            intensity: 4,
            fat: 3,
            salinity: 4,
            sweetness: 3,
            thermalBehavior: 'Melts into a frico (crisp) if heaped; dissolves into sauce if grated fine.'
        },
        origin: 'Emilia-Romagna, Italy.',
        historyContext: 'Standard finish for high-quality pizzas worldwide to add savory depth.',
        commonStyles: ['pizza-napoletana', 'new_york_slice_v2', 'artisan'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Arugula + Prosciutto',
            'Meatballs',
            'Four Cheese'
        ],
        technicalNotes: 'Add pre-oven for a nutty, toasted crust. Add post-oven for fresh complexity. Grana Padano is a milder alternatives for baking;',
        applicationMoment: 'post_oven',
        variations: '12-month (milky) vs 36-month (intense).',
        references: [
            {
                title: 'Parmigiano Reggiano Guide',
                url: 'https://www.parmigianoreggiano.com/',
                summary: 'Official guide distinguishing age profiles and culinary uses.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'pepperoni',
        name: 'Pepperoni',
        category: 'Meat',
        description: 'American variety of spicy salami. Fine-grained, smoky, and paprika-rich.',
        flavorProfile: {
            intensity: 4,
            fat: 5,
            salinity: 4,
            sweetness: 1,
            thermalBehavior: 'Cups and chars (if natural casing). Releases significant orange grease.'
        },
        origin: 'USA (Italian-American adaptation).',
        historyContext: 'America\'s #1 topping. Modeled after spicy salamis of southern Italy but distinct.',
        commonStyles: ['new_york_slice_v2', 'sicilian_grandma_pan', 'detroit_style_classic'],
        ovenCompatibility: ['home_oven', 'deck_oven'],
        classicCombinations: [
            'Low Moisture Mozzarella + Pecorino Romano',
            'Cooked Tomato Sauce'
        ],
        technicalNotes: 'Excess fat can saturate delicate doughs. Ideal for structured pizzas.',
        applicationMoment: 'pre_oven',
        variations: 'Artisanal versions (less processed).',
        references: [
            {
                title: 'The Food Lab: Why Does Pepperoni Curl?',
                url: 'https://www.seriouseats.com/the-pizza-lab-why-does-pepperoni-curl',
                summary: 'Kenji López-Alt explains the fluid dynamics and casing tension required for the perfect cup.',
                sourceType: 'scientific'
            }
        ],
        isStandard: true
    },
    {
        id: 'mortadella',
        name: 'Mortadella (Bologna)',
        category: 'Meat',
        description: 'Emulsified pork sausage with cubes of fat (lardons) and pistachios. Silky and aromatic.',
        flavorProfile: {
            intensity: 3,
            fat: 5,
            salinity: 3,
            sweetness: 2,
            thermalBehavior: 'Best applied post-oven. Heating releases fat but alters the delicate texture.'
        },
        origin: 'Bologna, Emilia-Romagna, Italy.',
        historyContext: 'The noble ancestor of the American "Bologna". A symbol of the Italian economic boom.',
        commonStyles: ['neapolitan_contemporary', 'roman_teglia_pan', 'focaccia-genovese'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Pistachio Pesto',
            'Stracciatella',
            'Lemon Zest'
        ],
        technicalNotes: 'Always slice paper thin and drape in "rosettes" for volume and mouthfeel.',
        applicationMoment: 'post_oven',
        variations: 'Mortadella with Truffle.',
        references: [],
        isStandard: true
    },
    {
        id: 'calabresa',
        name: 'Calabresa',
        category: 'Meat',
        description: 'Smoked, slightly spicy cured pork sausage with firm texture.',
        flavorProfile: {
            intensity: 4,
            fat: 4,
            salinity: 4,
            sweetness: 1,
            thermalBehavior: 'Releases moderate fat. Browns well.',
        },
        origin: 'Brazil (derived from Italian sausages).',
        historyContext: 'Popular in Brazil and Italo-Brazilian variations.',
        commonStyles: ['brazilian_style', 'pan_pizza'],
        ovenCompatibility: ['wood_fired', 'home_oven'],
        classicCombinations: [
            'Onion + Mozzarella',
            'Olives + Oregano'
        ],
        technicalNotes: 'Good tolerance for long baking times. Releases moderate fat.',
        applicationMoment: 'pre_oven',
        variations: 'Thinly sliced or cubed.',
        references: [
            {
                title: 'A História da Pizza de Calabresa',
                url: 'https://gastrolandia.com.br/',
                summary: 'Referencing the cultural dominance of Calabresa in Brazilian pizzerias.',
                sourceType: 'variation'
            }
        ],
        isStandard: true
    },
    {
        id: 'presunto',
        name: 'Ham (Prosciutto Cotto)',
        category: 'Meat',
        description: 'Cooked cured pork leg. Mild, sweet, and soft.',
        flavorProfile: {
            intensity: 2,
            fat: 2,
            salinity: 3,
            sweetness: 2,
            thermalBehavior: 'Dries out rapidly. Loses flavor if overcooked.'
        },
        origin: 'Global.',
        historyContext: 'Used in the classic "Prosciutto e Funghi" or "Capricciosa".',
        commonStyles: ['pizza-teglia-romana', 'pizza-napoletana', 'classic_italian'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Mushrooms + Mozzarella',
            'Olives + Artichokes',
            'Pineapple (Controversial but standard)'
        ],
        technicalNotes: 'Protect under cheese to keep moist, or add late. If aiming for crispy (American style), place on top.',
        applicationMoment: 'pre_oven',
        variations: 'Praga Ham (Smoked), Rosemary Ham.',
        references: [
            {
                title: 'Prosciutto Cotto in Pizza',
                url: 'https://www.lacucinaitaliana.com/',
                summary: 'Standard usage in Capricciosa: balancing the salt of the olives and earthiness of mushrooms.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'cogumelos',
        name: 'Mushrooms (Funghi)',
        category: 'Vegetal',
        description: 'Earthy, umami-rich fungi. Porcini, Cremini, or Champignon.',
        flavorProfile: {
            intensity: 3,
            fat: 0,
            salinity: 0,
            sweetness: 1,
            thermalBehavior: 'Releases significant water. Shrinks considerably.'
        },
        origin: 'Global.',
        historyContext: 'A key autumn ingredient in Italy.',
        commonStyles: ['pizza-napoletana', 'artisan', 'pan_pizza'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Mozzarella + Ham',
            'Onion + Parmesan'
        ],
        technicalNotes: 'High moisture hazard. Pre-sautéing reduces humidity.',
        applicationMoment: 'pre_oven',
        variations: 'Dried Porcini (rehydrated) for intense flavor.',
        references: [
            {
                title: 'Handling Mushrooms for Pizza',
                url: 'https://www.bonappetit.com/test-kitchen/common-mistakes/article/mushrooms-common-mistakes',
                summary: 'Bon Appétit advises cooking moisture out of mushrooms before using as topping.',
                sourceType: 'scientific'
            }
        ],
        isStandard: true
    },
    {
        id: 'cebola',
        name: 'Onion',
        category: 'Vegetal',
        description: 'Sweet when caramelized, pungent when raw.',
        flavorProfile: {
            intensity: 3,
            fat: 0,
            salinity: 0,
            sweetness: 4,
            thermalBehavior: 'Caramelizes (sweetens) with high heat. Raw onions may release water.'
        },
        origin: 'Global. Universal ingredient in pizzas, focaccias, and calzones.',
        historyContext: 'Puglia\'s "Cipolla Rossa di Tropea" is famous for sweetness.',
        commonStyles: ['focaccia-genovese', 'sfincione-palermitano', 'pan_pizza', 'sicilian_grandma_pan', 'pizza-teglia-romana'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Calabresa',
            'Mushrooms + Provolone',
            'Olives'
        ],
        technicalNotes: 'Can release water if raw. Caramelization improves balance.',
        applicationMoment: 'pre_oven',
        variations: 'Red, White, Caramelized.',
        references: [
            {
                title: 'Onions in Pizza',
                url: 'https://www.saveur.com/',
                summary: 'Techniques for avoiding raw onion bite in fast-cook pizzas.',
                sourceType: 'variation'
            }
        ],
        isStandard: true
    },
    {
        id: 'azeitonas',
        name: 'Olives',
        category: 'Vegetal',
        description: 'Salty, intense, firm texture.',
        flavorProfile: {
            intensity: 4,
            fat: 4,
            salinity: 5,
            sweetness: 0,
            thermalBehavior: 'Warm up well. High salinity.',
        },
        origin: 'Mediterranean classic.',
        historyContext: 'Essential to the Mediterranean diet and pizza variations.',
        commonStyles: ['pizza-napoletana', 'sfincione-palermitano', 'sicilian_grandma_pan', 'focaccia-genovese'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Tomato + Onion',
            'Anchovies',
            'Hard Cheese'
        ],
        technicalNotes: 'High salinity - adjust dough salt if needed.',
        applicationMoment: 'pre_oven',
        variations: 'Black, Green, Cured, Sliced.',
        references: [
            {
                title: 'Selecting Olives',
                url: 'https://www.seriouseats.com/guide-to-olives',
                summary: 'Guide to olive varieties and their culinary applications.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'anchovies',
        name: 'Anchovies',
        category: 'Meat',
        description: 'Cured, oil-packed fillets. The ultimate umami seasoning.',
        flavorProfile: {
            intensity: 5,
            fat: 3,
            salinity: 5,
            sweetness: 0,
            thermalBehavior: 'Dissolves into sauce if cooked long. Become intense salt bombs if dried out.'
        },
        origin: 'Mediterranean / Cantabrian Sea.',
        historyContext: 'The original topping of the proto-pizzas in Naples.',
        commonStyles: ['pizza-napoletana', 'pizza-teglia-romana'],
        ovenCompatibility: ['wood_fired', 'electric'],
        classicCombinations: [
            'Tomato + Garlic + Oregano (Napoli)',
            'Olives + Capers',
            'None (eaten alone by purists)'
        ],
        technicalNotes: 'Love or hate ingredient. Add post-oven for highest quality fillets (Cantabrian) to preserve texture. Add pre-oven for generic fillets to melt them into the sauce.',
        applicationMoment: 'post_oven',
        variations: 'White Anchovies (Boquerones) - pickled, not salty (do not cook).',
        references: [
            {
                title: 'The History of Anchovies on Pizza',
                url: 'https://www.foodandwine.com/',
                summary: 'Tracing the roots of the salty fish back to Roman garum and early Naples street food.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'garlic_oregano',
        name: 'Garlic & Oregano',
        category: 'Finish',
        description: 'The aromatic foundation of the Marinara.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 0,
            sweetness: 1,
            thermalBehavior: 'Garlic burns instantly (bitter) -> slicing paper thin is key. Dried oregano blooms in oil.'
        },
        origin: 'Naples.',
        historyContext: 'The scent of the Neapolitan streets. The simplest, vegan, and most ancient pizza.',
        commonStyles: ['pizza-napoletana', 'new_haven_apizza', 'tomato_pie'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Tomato + Olive Oil',
            'Clams (White Pie)',
            'Chili Flakes'
        ],
        technicalNotes: 'Garlic: Slice paper thin (Goodfellas style) to melt, or mince for power. Never leave distinct chunks in high heat. Oregano: Dried Sicilian oregano has more flavor than fresh. Rub between palms to release oils.',
        applicationMoment: 'pre_oven',
        variations: 'Roasted Garlic (sweet/creamy).',
        references: [
            {
                title: 'Marinara: The Test of a Pizzaiolo',
                url: 'https://www.pizzanapoletana.org/en/ricetta_pizza_napoletana',
                summary: 'AVPN specification for Marinara: Garlic, Oregano, Oil, Tomato. Nothing else.',
                sourceType: 'authority'
            }
        ],
        isStandard: true
    },
    {
        id: 'ricotta',
        name: 'Ricotta',
        category: 'Cheese',
        description: 'Fresh whey cheese. Sweet, creamy, and grainy texture.',
        flavorProfile: {
            intensity: 2,
            fat: 3,
            salinity: 1,
            sweetness: 4,
            thermalBehavior: 'Does not melt. Dries out and browns if exposed directly. Retains moisture if enclosed.'
        },
        origin: 'Italy. A byproduct of cheese making (recooked whey).',
        historyContext: 'Classic filling for Calzone and Pizza Ripiena. Also used in dollops on white pizzas.',
        commonStyles: ['calzone', 'pizza-napoletana', 'new_york_slice_v2'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Spinach + Garlic',
            'Meatballs (white pie)',
            'Honey (post-oven)'
        ],
        technicalNotes: 'Drain well to prevent soggy calzones. High water activity. Protect under other toppings or inside dough.',
        applicationMoment: 'pre_oven',
        variations: 'Ricotta Salata (aged, salty, grateable).',
        references: [],
        isStandard: true
    },
    {
        id: 'fontina',
        name: 'Fontina',
        category: 'Cheese',
        description: 'Semi-soft cow\'s cheese from the Alps. Nutty, varying from mild to pungent.',
        flavorProfile: {
            intensity: 4,
            fat: 5,
            salinity: 3,
            sweetness: 3,
            thermalBehavior: 'Excellent meltability (fondue style). Flows easily.'
        },
        origin: 'Aosta Valley, Italy.',
        historyContext: 'Traditional melting cheese of the north.',
        commonStyles: ['artisan', 'northern_italian'],
        ovenCompatibility: ['electric', 'wood_fired'],
        classicCombinations: [
            'Truffle + Mushrooms',
            'Ham',
            'Polenta'
        ],
        technicalNotes: 'Standard fontina melts better than mozzarella but can be greasy. Use Valdostana DOP for authentic pungent flavor.',
        applicationMoment: 'pre_oven',
        variations: 'Fontal (industrial, milder).',
        references: [],
        isStandard: true
    },
    {
        id: 'prosciutto_crudo',
        name: 'Prosciutto Crudo (Parma/San Daniele)',
        category: 'Meat',
        description: 'Dry-cured ham. Delicate, salty, sweet, and umami-rich.',
        flavorProfile: {
            intensity: 4,
            fat: 4,
            salinity: 5,
            sweetness: 3,
            thermalBehavior: 'DO NOT COOK. Cooking destroys the delicate texture and makes it insanely salty.'
        },
        origin: 'Parma / San Daniele, Italy.',
        historyContext: 'A symbol of Italian charcuterie excellence.',
        commonStyles: ['featured_artisan', 'pizza-napoletana'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Arugula + Parmesan',
            'Burrata',
            'Figs'
        ],
        technicalNotes: 'Apply POST-OVEN only. The heat of the pizza releases the fat aroma without cooking the meat. Slicing must be paper thin.',
        applicationMoment: 'post_oven',
        variations: 'Jamon Iberico (Spanish alternative).',
        references: [],
        isStandard: true
    },
    {
        id: 'nduja',
        name: '\'Nduja',
        category: 'Meat',
        description: 'Spreadable spicy pork sausage. A paste of fat and Calabrian chilies.',
        flavorProfile: {
            intensity: 5,
            fat: 5,
            salinity: 4,
            sweetness: 1,
            thermalBehavior: 'Melts completely into a spicy oil pool.'
        },
        origin: 'Spilinga, Calabria.',
        historyContext: 'Originally a peasant food utilizing fatty scraps and abundant chilies.',
        commonStyles: ['modern_artisan', 'pizza-napoletana'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Burrata (to balance heat)',
            'Honey',
            'Red Onion'
        ],
        technicalNotes: 'A little goes a long way. Apply in small dollops (`< 5g`). It will liquefy, so account for extra oil on the pizza surface.',
        applicationMoment: 'pre_oven',
        variations: 'Vegetarian Nduja (peppers only).',
        references: [],
        isStandard: true
    },
    {
        id: 'italian_sausage',
        name: 'Italian Sausage (Fresh)',
        category: 'Meat',
        description: 'Raw pork sausage seasoned with fennel and anise.',
        flavorProfile: {
            intensity: 4,
            fat: 4,
            salinity: 3,
            sweetness: 2,
            thermalBehavior: 'Releases fat/juices. Needs to be pinched continuously to cook through.'
        },
        origin: 'Italian-American standard.',
        historyContext: 'A staple of Chicago and Midwest pizza culture.',
        commonStyles: ['chicago_deep_dish', 'pan_pizza', 'new_york_slice_v2'],
        ovenCompatibility: ['deck_oven', 'home_oven'],
        classicCombinations: [
            'Green Peppers + Onion',
            'Fennel Seeds',
            'Mushrooms'
        ],
        technicalNotes: 'Apply raw in small pinches (dime size) to ensure it cooks fully in the oven time. If using large chunks, pre-cook.',
        applicationMoment: 'pre_oven',
        variations: 'Sweet (Basil/Oregano) vs Hot (Red Pepper).',
        references: [],
        isStandard: true
    },
    {
        id: 'bacon',
        name: 'Bacon / Pancetta',
        category: 'Meat',
        description: 'Cured and smoked pork belly.',
        flavorProfile: {
            intensity: 5,
            fat: 5,
            salinity: 5,
            sweetness: 2,
            thermalBehavior: 'Renders significant fat. Crimps and crisps.'
        },
        origin: 'Global.',
        historyContext: 'Modern pizzaria standard.',
        commonStyles: ['pan_pizza', 'brazilian_style', 'artisan'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Chicken + Catupiry',
            'Corn + Mozzarella',
            'Carbonara (Egg + Pecorino)'
        ],
        technicalNotes: 'Salt bomb. Pre-cook if you want it super crispy or to reduce grease on the final pizza.',
        applicationMoment: 'pre_oven',
        variations: 'Pancetta (unsmoked Italian bacon) - more delicate.',
        references: [],
        isStandard: true
    },
    {
        id: 'capers',
        name: 'Capers',
        category: 'Vegetal',
        description: 'Pickled flower buds. Sharp, acidic, and salty.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 5,
            sweetness: 0,
            thermalBehavior: 'Dries out quickly. Best embedded in sauce.'
        },
        origin: 'Mediterranean.',
        historyContext: 'Partner to anchovies and olives in Puttanesca flavors.',
        commonStyles: ['pizza-napoletana', 'sicilian_grandma_pan'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Anchovies + Olives',
            'Tomato Sauce',
            'Tuna'
        ],
        technicalNotes: 'Rinse well! They are often packed in salt or strong vinegar. Their acidity cuts through rich cheeses.',
        applicationMoment: 'pre_oven',
        variations: 'Caper berries (larger, milder).',
        references: [],
        isStandard: true
    },
    {
        id: 'bell_pepper',
        name: 'Bell Peppers',
        category: 'Vegetal',
        description: 'Green, Red, or Yellow peppers. Crunchy and watery.',
        flavorProfile: {
            intensity: 3,
            fat: 0,
            salinity: 0,
            sweetness: 3,
            thermalBehavior: 'Releases lots of water. Skins can detach and get tough.'
        },
        origin: 'Americas, adapted globally.',
        historyContext: 'The "Supreme" pizza staple.',
        commonStyles: ['pan_pizza', 'new_york_slice_v2', 'brazilian_style'],
        ovenCompatibility: ['home_oven', 'conveyor'],
        classicCombinations: [
            'Onion + Sausage',
            'Ham',
            'Chicken'
        ],
        technicalNotes: 'High moisture warning. Slice very thin rings or roast beforehand to remove skin and water.',
        applicationMoment: 'pre_oven',
        variations: 'Roasted Red Peppers (jarred) - sweeter and softer.',
        references: [],
        isStandard: true
    },
    {
        id: 'eggplant',
        name: 'Eggplant (Aubergine)',
        category: 'Vegetal',
        description: 'Spongy texture, bitter-sweet flavor that absorbs oil.',
        flavorProfile: {
            intensity: 2,
            fat: 0,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Must be cooked. Raw eggplant on pizza is tough and unpalatable.'
        },
        origin: 'Sicily (Parmigiana di Melanzane).',
        historyContext: 'Key ingredient in Pizza Alla Norma.',
        commonStyles: ['sicilian_grandma_pan', 'pizza-napoletana'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Ricotta Salata + Tomato',
            'Parmesan',
            'Basil'
        ],
        technicalNotes: 'MANDATORY PRE-COOKING. Fry, roast, or grill slices before putting on pizza.',
        applicationMoment: 'pre_oven',
        variations: 'Pickled Eggplant (post-oven).',
        references: [],
        isStandard: true
    },
    {
        id: 'zucchini',
        name: 'Zucchini',
        category: 'Vegetal',
        description: 'Mild, fresh summer squash.',
        flavorProfile: {
            intensity: 1,
            fat: 0,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'High water content. Becomes mushy if thick; dries if thin.'
        },
        origin: 'Italy.',
        historyContext: 'Roman classic (Pizza Bianca with Zucchini).',
        commonStyles: ['pizza-teglia-romana', 'artisan'],
        ovenCompatibility: ['electric', 'wood_fired'],
        classicCombinations: [
            'Anchovies + Stracciatella',
            'Prawns',
            'Mint'
        ],
        technicalNotes: 'Slice into ribbons (mandoline) or julienne. Salting beforehand draws out moisture.',
        applicationMoment: 'pre_oven',
        variations: 'Zucchini Flowers (delicate, usually stuffed).',
        references: [],
        isStandard: true
    },
    {
        id: 'cherry_tomatoes',
        name: 'Cherry Tomatoes',
        category: 'Vegetal',
        description: 'Small, high-sugar tomatoes.',
        flavorProfile: {
            intensity: 3,
            fat: 0,
            salinity: 1,
            sweetness: 5,
            thermalBehavior: 'Explosive. Skins blister and pop. Juice concentrates into syrup.'
        },
        origin: 'Pachino, Sicily (famous variety).',
        historyContext: 'Modern alternative to sauce bases.',
        commonStyles: ['focaccia-genovese', 'pizza-napoletana', 'artisan'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Buffalo Mozzarella',
            'Pesto',
            'Arugula'
        ],
        technicalNotes: 'Cut in half to allow steam escape and prevent "boiling lava" effect in mouth.',
        applicationMoment: 'pre_oven',
        variations: 'Yellow Datterini (sweeter), Confit (slow roasted in oil).',
        references: [],
        isStandard: true
    },
    {
        id: 'tomato_sauce_raw',
        name: 'Tomato Sauce (Raw)',
        category: 'Sauce',
        description: 'Crushed tomatoes (Pelati), salt, maybe basil. Uncooked.',
        flavorProfile: {
            intensity: 3,
            fat: 0,
            salinity: 2,
            sweetness: 3,
            thermalBehavior: 'Cooks ON the pizza. Preserves fresh tomato acidity.'
        },
        origin: 'Naples.',
        historyContext: 'The only allowed sauce for AVPN Neapolitan pizza.',
        commonStyles: ['pizza-napoletana'],
        ovenCompatibility: ['wood_fired', 'high_temp_gas'],
        classicCombinations: [
            'Mozzarella + Basil',
            'Garlic + Oregano'
        ],
        technicalNotes: 'Requires high heat to reduce effectively. In a home oven, raw sauce can result in a wet, uncooked dough interface ("gum line"). Strain excess water.',
        applicationMoment: 'pre_oven',
        variations: 'San Marzano (DOP), Roma.',
        references: [],
        isStandard: true
    },
    {
        id: 'tomato_sauce_cooked',
        name: 'Tomato Sauce (Cooked/NY)',
        category: 'Sauce',
        description: 'Simmered with onions, garlic, herbs, and oil. Thicker and concentrated.',
        flavorProfile: {
            intensity: 4,
            fat: 2,
            salinity: 3,
            sweetness: 4,
            thermalBehavior: 'Stable. Does not release much water. Resists drying out.'
        },
        origin: 'New York / USA.',
        historyContext: 'Adapted for lower temperature ovens and longer bake times.',
        commonStyles: ['new_york_slice_v2', 'detroit_style_classic', 'pan_pizza'],
        ovenCompatibility: ['home_oven', 'deck_oven'],
        classicCombinations: [
            'Low Moisture Mozzarella',
            'Pepperoni',
            'Meatball'
        ],
        technicalNotes: 'Ideal for home ovens (250°C-). Prevents sogginess.',
        applicationMoment: 'pre_oven',
        variations: 'Vodka Sauce (cream added), Marinara (chunkier).',
        references: [],
        isStandard: true
    },
    {
        id: 'white_sauce',
        name: 'White Sauce (Béchamel/Cream)',
        category: 'Sauce',
        description: 'Milk/Cream thickened with roux or reduced.',
        flavorProfile: {
            intensity: 2,
            fat: 5,
            salinity: 2,
            sweetness: 3,
            thermalBehavior: 'Browns and bubbles. High fat content transfers heat efficiently to dough.'
        },
        origin: 'France/Italy.',
        historyContext: '"Pizza Bianca" base.',
        commonStyles: ['artisan', 'detroit_style_classic'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Spinach + Artichoke',
            'Chicken',
            'Corn'
        ],
        technicalNotes: 'Watch for breaking (separation of oil) at very high temps. keep coating thin.',
        applicationMoment: 'pre_oven',
        variations: 'Garlic Cream, Alfredo.',
        references: [],
        isStandard: true
    },
    {
        id: 'olive_oil_extra_virgin',
        name: 'Extra Virgin Olive Oil',
        category: 'Finish',
        description: 'The liquid gold. Adds fruitiness, pepperiness, and mouthfeel.',
        flavorProfile: {
            intensity: 3,
            fat: 5,
            salinity: 0,
            sweetness: 0,
            thermalBehavior: 'Fragrance compounds (polyphenols) are volatile and destroyed by high heat.'
        },
        origin: 'Mediterranean.',
        historyContext: 'Essential finish for almost all Italian pizzas.',
        commonStyles: ['pizza-napoletana', 'focaccia-genovese'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Everything'
        ],
        technicalNotes: 'Pre-oven: protects ingredients like basil, assists heat transfer. Post-oven: adds raw flavor and aroma. Use quality oil only for finish.',
        applicationMoment: 'post_oven',
        variations: 'Chili Oil, Truffle Oil, Garlic Oil.',
        references: [],
        isStandard: true
    },
    {
        id: 'basil_fresh',
        name: 'Fresh Basil',
        category: 'Finish',
        description: 'Sweet, peppery aromatic herb. The scent of Italy.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Blackens and turns bitter instantly if unprotected in high heat.'
        },
        origin: 'Genovese Basil is the standard.',
        historyContext: 'Queen Margherita\'s pizza garnish (Green).',
        commonStyles: ['pizza-napoletana', 'artisan'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Tomato + Mozzarella',
            'Garlic'
        ],
        technicalNotes: 'If baking: Place UNDER cheese/sauce or dip in oil to protect. Otherwise, apply fresh immediately AFTER baking to release aroma from steam.',
        applicationMoment: 'post_oven',
        variations: 'Thai Basil (anise heavy), Purple Basil.',
        references: [],
        isStandard: true
    },
    {
        id: 'oregano_dried',
        name: 'Dried Oregano',
        category: 'Finish',
        description: 'Dried herb with intense savory punch. Different profile than fresh.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 0,
            sweetness: 0,
            thermalBehavior: 'Blooms in hot oil. Resistant to heat.'
        },
        origin: 'Southern Italy / Sicily.',
        historyContext: 'The scent of "Pizzeria" worldwide.',
        commonStyles: ['new_york_slice_v2', 'sauce_pies', 'brazilian_style'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Tomato Sauce',
            'Mozzarella',
            'Calabresa'
        ],
        technicalNotes: 'Always rub between palms before sprinkling to release oils. Essential for NY Sauce and Marinara.',
        applicationMoment: 'pre_oven',
        variations: 'Fresh Oregano (milder, peppery).',
        references: [],
        isStandard: true
    },
    {
        id: 'malt_powder',
        name: 'Diastatic Malt Powder',
        category: 'Finish',
        description: 'Enzymatic additive that helps with browning and fermentation in long-cold-fermented doughs.',
        flavorProfile: {
            intensity: 2,
            fat: 0,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Promotes Maillard reaction and sugar conversion during baking.'
        },
        origin: 'Global / Industrial.',
        historyContext: 'Modern additive for controlling crust color in low-temperature home ovens.',
        commonStyles: ['new-york', 'baguette'],
        ovenCompatibility: ['home_oven', 'low_temp'],
        classicCombinations: ['Flour', 'Water'],
        technicalNotes: 'Dosage is critical (0.5% - 1%). Over-dosing leads to gummy, overly dark crust.',
        applicationMoment: 'pre_oven',
        variations: 'Non-diastatic malt (flavor only), Honey.',
        references: [],
        isStandard: true
    },
    {
        id: 'vanilla_madagascar',
        name: 'Madagascar Vanilla Bean',
        category: 'Spice',
        description: 'Quality vanilla extract or bean paste. The defining aroma of professional pastry.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 0,
            sweetness: 5,
            thermalBehavior: 'Volatile. Alcohol-based extracts lose intensity if baked long; beans are more stable.'
        },
        origin: 'Madagascar / Reunion Island.',
        historyContext: 'The standard for high-end patisserie since the 19th century.',
        commonStyles: ['ny-style-chip-cookie', 'fudgy-brownie', 'classic-cinnamon-roll'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Chocolate', 'Cream Cheese'],
        technicalNotes: 'Always add vanilla to the fat/butter phase to "lock" the aroma before baking.',
        applicationMoment: 'pre_oven',
        variations: 'Tahitian (floral), Mexican (spicy).',
        references: [],
        isStandard: true
    },
    {
        id: 'cinnamon_ceylon',
        name: 'Ceylon Cinnamon',
        category: 'Spice',
        description: 'True cinnamon, delicate and sweet. High essential oil content.',
        flavorProfile: {
            intensity: 5,
            fat: 0,
            salinity: 0,
            sweetness: 3,
            thermalBehavior: 'Heat-stable. Releases oils when baked with sugar and butter.'
        },
        origin: 'Sri Lanka.',
        historyContext: 'Prized for centuries as "true cinnamon" compared to the harsher Cassia variety.',
        commonStyles: ['classic-cinnamon-roll'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Brown Sugar', 'Apple', 'Dough'],
        technicalNotes: 'Mixing with fat prevents the "dry dust" mouthfeel and promotes even distribution.',
        applicationMoment: 'pre_oven',
        variations: 'Cassia (sharper, cheaper), Korintje.',
        references: [],
        isStandard: true
    },
    {
        id: 'dark_chocolate_70',
        name: 'Dark Chocolate (70%)',
        category: 'Pastry Filling',
        description: 'Bittersweet chocolate with high cocoa butter content. Ideal for melting and structure.',
        flavorProfile: {
            intensity: 5,
            fat: 4,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Melts at 34°C. Crystallizes when cooled unless tempered or mixed in dough.'
        },
        origin: 'Ecuador / Central America.',
        historyContext: 'Modern artisanal chocolate movement favors higher cocoa percentages for intense flavor.',
        commonStyles: ['ny-style-chip-cookie', 'fudgy-brownie'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Sea Salt', 'Vanilla', 'Butter'],
        technicalNotes: 'Use "chunks" for cookies to get distinct pools; finely chop for brownies for integration.',
        applicationMoment: 'pre_oven',
        variations: 'Milk Chocolate (sweeter), White Chocolate.',
        references: [],
        isStandard: true
    },
    {
        id: 'salted_butter_normandy',
        name: 'Salted French Butter (Normandy)',
        category: 'Dairy',
        description: 'Cultured butter with fleur de sel. High fat content (82%+).',
        flavorProfile: {
            intensity: 4,
            fat: 5,
            salinity: 4,
            sweetness: 3,
            thermalBehavior: 'Melts into crumb. Promotes golden browning in crust.'
        },
        origin: 'Normandy/Brittany, France.',
        historyContext: 'The traditional partner for a fresh baguette tradition.',
        commonStyles: ['baguette_tradition_francaise', 'croissant_classic'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Radishes + Sea Salt',
            'Jambon de Paris',
            'Honey'
        ],
        technicalNotes: 'For finish, use cold. For dough integration, use room temp.',
        applicationMoment: 'post_oven',
        variations: 'Unsalted (Doux), Demi-sel.',
        references: [],
        isStandard: true
    },
    {
        id: 'brie_de_meaux',
        name: 'Brie de Meaux',
        category: 'Cheese',
        description: 'Soft-ripened cow\'s milk cheese with a bloomy rind and mushroomy, buttery interior.',
        flavorProfile: {
            intensity: 4,
            fat: 4,
            salinity: 3,
            sweetness: 3,
            thermalBehavior: 'Becomes fluid when heated. Rind remains structured.'
        },
        origin: 'Île-de-France (near Paris).',
        historyContext: 'Known as the "King of Cheeses," a classic companion to the Parisian baguette.',
        commonStyles: ['baguette_tradition_francaise'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Walnuts + Honey',
            'Fresh Figs',
            'Apple Slices'
        ],
        technicalNotes: 'Best served at room temperature. If baked (e.g., in a sandwich), do it briefly to prevent complete liquefaction.',
        applicationMoment: 'post_oven',
        variations: 'Brie de Melun (stronger).',
        references: [],
        isStandard: true
    },
    {
        id: 'balsamic_modena',
        name: 'Balsamic Vinegar of Modena',
        category: 'Finish',
        description: 'Dark, syrupy, aged vinegar with complex sweet and acidic notes.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 0,
            sweetness: 5,
            thermalBehavior: 'Sugar content can burn/bitterize if baked. Use as finish.'
        },
        origin: 'Modena, Italy.',
        historyContext: 'Traditional condiment for Italian breads and salads.',
        commonStyles: ['ciabatta_high_hydration', 'focaccia-genovese'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Extra Virgin Olive Oil + Sea Salt',
            'Parmigiano Reggiano',
            'Strawberries'
        ],
        technicalNotes: 'Use "Aceto Balsamico Tradizionale" for raw finish; commercial "Glaze" for decor.',
        applicationMoment: 'post_oven',
        variations: 'Balsamic Glaze (thickened).',
        references: [],
        isStandard: true
    },
    {
        id: 'rosemary_fresh',
        name: 'Fresh Rosemary',
        category: 'Vegetal',
        description: 'Woody, aromatic herb with pine-like notes.',
        flavorProfile: {
            intensity: 5,
            fat: 0,
            salinity: 0,
            sweetness: 1,
            thermalBehavior: 'Infuses oil beautifully. Can become dry/needle-like if not protected.'
        },
        origin: 'Mediterranean.',
        historyContext: 'The fragrance of the Italian countryside and Roman street food.',
        commonStyles: ['focaccia-genovese', 'pizza-teglia-romana', 'roman_scrocchiarella'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Sea Salt + Olive Oil',
            'Potato Slices',
            'Lamb'
        ],
        technicalNotes: 'Strip needles from woody stems. Brush with oil before baking to prevent charring.',
        applicationMoment: 'pre_oven',
        variations: 'Dried (less aromatic).',
        references: [],
        isStandard: true
    },
    {
        id: 'fresh_clams',
        name: 'Fresh Clams (Shucked)',
        category: 'Seafood',
        description: 'Fresh Littleneck or Cherrystone clams, shucked and kept in their liquor.',
        flavorProfile: {
            intensity: 4,
            fat: 1,
            salinity: 5,
            sweetness: 2,
            thermalBehavior: 'Sears quickly in high heat, releasing briny liquor that seasons the dough.'
        },
        origin: 'Rhode Island / Connecticut coastline.',
        historyContext: 'The core of the New Haven White Clam Pie, popularized by Frank Pepe in the 1960s.',
        commonStyles: ['new_haven_apizza'],
        ovenCompatibility: ['coal_fired', 'high_temp_gas', 'deck_oven'],
        classicCombinations: [
            'Garlic + Oregano + Olive Oil',
            'Pecorino Romano',
            'Bacon (Modern variation)'
        ],
        technicalNotes: 'Never use canned clams for authentic results. Ensure the oven is at least 350°C to cook the clams quickly without making them rubbery.',
        applicationMoment: 'pre_oven',
        variations: 'Canned chopped clams (low quality substitute).',
        references: [],
        isStandard: true
    },
    {
        id: 'garlic_fresh',
        name: 'Fresh Garlic',
        category: 'Vegetal',
        description: 'Finely minced or sliced raw garlic cloves.',
        flavorProfile: {
            intensity: 5,
            fat: 0,
            salinity: 0,
            sweetness: 3,
            thermalBehavior: 'Mellows and sweetens when roasted; can become bitter if burnt.'
        },
        origin: 'Global.',
        historyContext: 'Essential aromatic for Italian and Mediterranean baking.',
        commonStyles: ['new_haven_apizza', 'pizza-napoletana', 'new_york_slice_v2', 'focaccia-genovese'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Tomato Sauce + Oregano (Marinara)',
            'Olive Oil + Clams',
            'Roasted Peppers'
        ],
        technicalNotes: 'Mince finely for even distribution. In high-heat ovens, submerge in oil or sauce to prevent rapid burning.',
        applicationMoment: 'pre_oven',
        variations: 'Garlic Oil, Confit Garlic.',
        references: [],
        isStandard: true
    },
    {
        id: 'oregano_dried',
        name: 'Dried Oregano (Mediterranean)',
        category: 'Spice',
        description: 'Highly aromatic dried herb, more intense than fresh.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 0,
            sweetness: 1,
            thermalBehavior: 'Releases essential oils upon heating.'
        },
        origin: 'Mediterranean / Greece / Italy.',
        historyContext: "The defining 'pizza' herb, particularly for Neapolitan and New York traditions.",
        commonStyles: ['new_haven_apizza', 'pizza-napoletana', 'new_york_slice_v2', 'sicilian_grandma_pan'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Tomato Sauce + Garlic',
            'Pecorino Romano',
            'Mozzarella'
        ],
        technicalNotes: 'Rub between palms when applying to wake up the oils. Higher stability in heat than fresh basil.',
        applicationMoment: 'pre_oven',
        variations: 'Fresh Oregano (milder).',
        references: [],
        isStandard: true
    },
    {
        id: 'provel_cheese',
        name: 'Provel Cheese',
        category: 'Cheese',
        description: 'A processed cheese blend of White Cheddar, Swiss, and Provolone with a hint of liquid smoke.',
        flavorProfile: {
            intensity: 4,
            fat: 4,
            salinity: 4,
            sweetness: 3,
            thermalBehavior: 'Extremely low melting point. Becomes gooey and creamy without being stringy.'
        },
        origin: 'St. Louis, Missouri (USA). Created by Costa Grocery in 1947.',
        historyContext: 'A regional icon of St. Louis. Designed specifically for the thin cracker crust to provide a "clean bite" that doesn\'t pull off the small square slices.',
        commonStyles: ['st_louis_thin'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Sweet Tomato Sauce + Oregano',
            'Italian Sausage',
            'Bacon'
        ],
        technicalNotes: 'Unique for its lack of stringiness. It coats the pizza in a creamy layer. Hard to find outside of the Midwest.',
        applicationMoment: 'pre_oven',
        variations: 'Substitute with a blend of young Provolone, Monterey Jack, and a drop of liquid smoke.',
        references: [],
        isStandard: true
    },
    {
        id: 'potato_slices',
        name: 'Potato Slices',
        category: 'Vegetal',
        description: 'Thinly sliced potatoes, often seasoned with rosemary and sea salt.',
        flavorProfile: {
            intensity: 2,
            fat: 1,
            salinity: 2,
            sweetness: 2,
            thermalBehavior: 'Crisps on the edges, remains soft in the center. Absorbs fat from cheese or oil.'
        },
        origin: 'Rome, Italy.',
        historyContext: 'The classic topping for "Pizza con Patate" in Roman bakeries (Taglio).',
        commonStyles: ['roman_teglia_pan'],
        ovenCompatibility: ['deck_oven', 'electric'],
        classicCombinations: [
            'Rosemary + Olive Oil',
            'Mozzarella + Black Pepper',
            'Pecorino Romano'
        ],
        technicalNotes: 'Slice paper thin (1-2mm) for even cooking. Pre-soaking in water removes excess starch for better crisping.',
        applicationMoment: 'pre_oven',
        variations: 'Potato Cream, Roasted Potato Chunks.',
        references: [],
        isStandard: true
    },
    {
        id: 'honey_raw',
        name: 'Raw Honey',
        category: 'Finish',
        description: 'Natural bee honey, providing floral sweetness and a glossy finish.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 0,
            sweetness: 5,
            thermalBehavior: 'Carmelizes rapidly. Can become bitter if burnt.'
        },
        origin: 'Global.',
        historyContext: 'Used in traditional Jewish breads (Challah) and high-end artisanal pizzas.',
        commonStyles: ['challah_jewish_braided', 'modern_artisan'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Goat Cheese + Walnuts',
            'Spicy Salami (Hot Honey)',
            'Salted Butter'
        ],
        technicalNotes: 'Apply post-oven for floral notes. Use in dough (pre-oven) for crust color and subtle sweetness.',
        applicationMoment: 'post_oven',
        variations: 'Spicy Honey, Clover Honey.',
        references: [],
        isStandard: true
    },
    {
        id: 'sesame_seeds',
        name: 'Sesame Seeds',
        category: 'Spice',
        description: 'Tiny, nutty-flavored seeds that add crunch and aroma when toasted.',
        flavorProfile: {
            intensity: 3,
            fat: 3,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Toast quickly. Release intense nutty oils when heated.'
        },
        origin: 'Global.',
        historyContext: 'Symbol of fertility and manna; essential for Bagels and Challah.',
        commonStyles: ['bagels_classic', 'challah_jewish_braided', 'burger_buns'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Honey',
            'Sea Salt',
            'Butter'
        ],
        technicalNotes: 'Brush dough with egg wash or water before applying to ensure they stick.',
        applicationMoment: 'pre_oven',
        variations: 'Black Sesame, Toasted Sesame.',
        references: [],
        isStandard: true
    },
    {
        id: 'poppy_seeds',
        name: 'Poppy Seeds',
        category: 'Spice',
        description: 'Small, blue-black seeds with a mild, nutty, and slightly earth flavor.',
        flavorProfile: {
            intensity: 2,
            fat: 2,
            salinity: 0,
            sweetness: 1,
            thermalBehavior: 'Maintain crunch and color when baked.'
        },
        origin: 'Central Europe.',
        historyContext: 'Traditional topping for Ashkenazi Jewish breads and lemon-based cakes.',
        commonStyles: ['bagels_classic', 'challah_jewish_braided'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Cream Cheese',
            'Lemon Zest',
            'Honey'
        ],
        technicalNotes: 'Best applied over an egg wash for maximum adhesion and visual contrast.',
        applicationMoment: 'pre_oven',
        variations: 'White Poppy Seeds.',
        references: [],
        isStandard: true
    },
    {
        id: 'seeds',
        name: 'Mixed Seeds',
        category: 'Spice',
        description: 'A blend of sunflower, pumpkin, flax, and sesame seeds.',
        flavorProfile: {
            intensity: 3,
            fat: 4,
            salinity: 1,
            sweetness: 2,
            thermalBehavior: 'Develop complex nutty aromas when toasted during baking.'
        },
        origin: 'Global.',
        historyContext: 'Symbol of health and rustic bread traditions.',
        commonStyles: ['whole_wheat_100', 'mixed_grain_sourdough', 'challah_jewish_braided'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Whole Grains',
            'Butter',
            'Honey'
        ],
        technicalNotes: 'Toasting seeds before adding to dough improves flavor but can affect hydration absorption.',
        applicationMoment: 'pre_oven',
        variations: 'Everything Bagel Seasoning.',
        references: [],
        isStandard: true
    },
    {
        id: 'cream_cheese',
        name: 'Cream Cheese',
        category: 'Dairy',
        description: 'Smooth, mild, and slightly tangy fresh cheese.',
        flavorProfile: {
            intensity: 2,
            fat: 5,
            salinity: 2,
            sweetness: 3,
            thermalBehavior: 'Softens but holds shape. Can brown slightly if baked.'
        },
        origin: 'USA (New York/Philadelphia).',
        historyContext: 'The inseparable partner of the New York Bagel since the late 19th century.',
        commonStyles: ['bagels_classic'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Smoked Salmon + Capers + Red Onion',
            'Everything Bagel Seasoning',
            'Fruit Jam'
        ],
        technicalNotes: 'For bagels, apply as a "shmear" (generous layer). For baking, use full-fat blocks for better structure.',
        applicationMoment: 'post_oven',
        variations: 'Whipped, Scallion, Veggie.',
        references: [],
        isStandard: true
    },
    {
        id: 'smoked_salmon',
        name: 'Smoked Salmon (Lox)',
        category: 'Seafood',
        description: 'Thinly sliced salmon, cured or smoked, with a rich, buttery, and salty profile.',
        flavorProfile: {
            intensity: 4,
            fat: 5,
            salinity: 4,
            sweetness: 2,
            thermalBehavior: 'Do not bake. High heat makes it salty and tough.'
        },
        origin: 'Pacific NW / Scandinavian roots, NYC deli icon.',
        historyContext: "The 'Lox' on a bagel is a NYC cultural staple, often served at Sunday brunch.",
        commonStyles: ['bagels_classic'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Cream Cheese + Red Onion + Capers',
            'Dill',
            'Lemon'
        ],
        technicalNotes: 'Always add cold after the bagel is toasted. Slicing translucent-thin is the sign of a master deli.',
        applicationMoment: 'post_oven',
        variations: 'Gravlax, Nova, Belly Lox.',
        references: [],
        isStandard: true
    },
    {
        id: 'candied_citrus',
        name: 'Candied Citrus Peel',
        category: 'Pastry Filling',
        description: 'Oranges and Citron peels cooked in sugar syrup until translucent and sweet.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 0,
            sweetness: 5,
            thermalBehavior: 'Softens during baking, infusing the dough with citrus oils.'
        },
        origin: 'Sicily, Italy.',
        historyContext: 'The soul of the Milanese Panettone; represents wealth and celebration.',
        commonStyles: ['panettone_artisanal', 'stollen_german'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Raisins + Vanilla',
            'Dark Chocolate',
            'Honey'
        ],
        technicalNotes: 'Use high-quality artisan peel (not industrial cubes) for the best aroma and mouthfeel.',
        applicationMoment: 'pre_oven',
        variations: 'Orange, Citron (Cedro), Lemon.',
        references: [],
        isStandard: true
    },
    {
        id: 'raisins',
        name: 'Raisins (Sultanas)',
        category: 'Pastry Filling',
        description: 'Dried grapes, often soaked in water or rum before use.',
        flavorProfile: {
            intensity: 3,
            fat: 0,
            salinity: 1,
            sweetness: 5,
            thermalBehavior: 'Plump up during baking as they absorb moisture from the dough.'
        },
        origin: 'Global.',
        historyContext: 'Essential for traditional celebration breads across Europe.',
        commonStyles: ['panettone_artisanal', 'challah_jewish_braided', 'stollen_german'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Cinnamon',
            'Walnuts',
            'Rum'
        ],
        technicalNotes: 'Soak in water or liqueur for at least 12 hours before adding to dough to prevent them from drying out the crumb.',
        applicationMoment: 'pre_oven',
        variations: 'Golden Sultanas, Dark Thompson.',
        references: [],
        isStandard: true
    },
    {
        id: 'citrus_zest',
        name: 'Fresh Citrus Zest',
        category: 'Finish',
        description: 'The aromatic outer layer of citrus fruits, containing intense essential oils.',
        flavorProfile: {
            intensity: 5,
            fat: 0,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Highly volatile. Aroma is most intense when fresh.'
        },
        origin: 'Global.',
        historyContext: 'The universal aromatic boost for pastries and breads.',
        commonStyles: ['panettone_artisanal', 'japanese_milk_bread', 'brioche_classic'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Vanilla',
            'Sugar',
            'Butter'
        ],
        technicalNotes: 'Zest directly into the sugar or fat to capture the essential oils immediately.',
        applicationMoment: 'pre_oven',
        variations: 'Lemon, Orange, Lime, Grapefruit.',
        references: [],
        isStandard: true
    },
    {
        id: 'brown_sugar',
        name: 'Brown Sugar (Dark)',
        category: 'Spice',
        description: 'Sucrose crystals with a high coating of molasses, providing a deep caramel flavor.',
        flavorProfile: {
            intensity: 4,
            fat: 0,
            salinity: 0,
            sweetness: 5,
            thermalBehavior: 'Melts and caramelizes into a sticky syrup when heated with butter.'
        },
        origin: 'Global.',
        historyContext: 'The key to the American sticky bun and cinnamon roll traditions.',
        commonStyles: ['cinnamon_rolls', 'babka_sweet_bread'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Cinnamon',
            'Butter',
            'Pecans'
        ],
        technicalNotes: 'Pack firmly during measurement. The molasses content keeps the pastry moist.',
        applicationMoment: 'pre_oven',
        variations: 'Light Brown Sugar (milder), Muscovado.',
        references: [],
        isStandard: true
    },
    {
        id: 'pecan_nuts',
        name: 'Pecan Nuts',
        category: 'Vegetal',
        description: 'Rich, buttery, and slightly sweet nuts with a distinctive wrinkled shell.',
        flavorProfile: {
            intensity: 3,
            fat: 5,
            salinity: 0,
            sweetness: 3,
            thermalBehavior: 'Toast beautifully. Fat content releases when heated.'
        },
        origin: 'North America.',
        historyContext: 'A staple of Southern American and Philadelphia-style "Sticky Buns".',
        commonStyles: ['cinnamon_rolls', 'american_biscuits'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Brown Sugar',
            'Cinnamon',
            'Maple Syrup'
        ],
        technicalNotes: 'Always toast briefly before adding for maximum aroma. Chop coarsely for better texture integration.',
        applicationMoment: 'pre_oven',
        variations: 'Walnuts (earthier substitute).',
        references: [],
        isStandard: true
    },
    {
        id: 'walnuts',
        name: 'Walnuts',
        category: 'Vegetal',
        description: 'Earthier, slightly bitter, and crunchy nuts.',
        flavorProfile: {
            intensity: 4,
            fat: 5,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Develop deep roasted flavor when baked.'
        },
        origin: 'Central Asia / Mediterranean.',
        historyContext: 'Traditional pairing for Eastern European breads like Babka and Povatizsa.',
        commonStyles: ['babka_sweet_bread', 'whole_wheat_100'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Dark Chocolate',
            'Honey',
            'Blue Cheese'
        ],
        technicalNotes: 'Toasting reduces bitterness. Breaking into irregular pieces provides a rustic texture.',
        applicationMoment: 'pre_oven',
        variations: 'English Walnuts, Black Walnuts.',
        references: [],
        isStandard: true
    },
    {
        id: 'pistachio',
        name: 'Pistachios',
        category: 'Vegetal',
        description: 'Bright green, floral, and nutty-sweet kernels.',
        flavorProfile: {
            intensity: 3,
            fat: 4,
            salinity: 1,
            sweetness: 3,
            thermalBehavior: 'Lose bright green color if over-baked. Best as a finish or protected in filling.'
        },
        origin: 'Middle East.',
        historyContext: 'Symbol of luxury in Mediterranean and Middle Eastern pastries; modern artisan pizza icon.',
        commonStyles: ['modern_artisan', 'mortadella_pistachio', 'babka_sweet_bread'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Mortadella',
            'Honey',
            'Rose Water'
        ],
        technicalNotes: 'Use unsalted, shelled pistachios. Skinning them (blanching) reveals the brightest green color.',
        applicationMoment: 'post_oven',
        variations: 'Bronte Pistachio (highest quality).',
        references: [],
        isStandard: true
    },
    {
        id: 'nutmeg',
        name: 'Ground Nutmeg',
        category: 'Spice',
        description: 'Warm, nutty, and slightly sweet spice with a powerful aroma.',
        flavorProfile: {
            intensity: 5,
            fat: 0,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Heat-stable. Aroma intensifies during frying/baking.'
        },
        origin: 'Indonesia / Moluccas.',
        historyContext: 'The traditional secret ingredient of the classic American donut and Dutch olykoeks.',
        commonStyles: ['yeasted_donuts', 'beignets'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Cinnamon',
            'Vanilla',
            'Milk'
        ],
        technicalNotes: 'Always use freshly grated for maximum impact. A tiny amount goes a long way.',
        applicationMoment: 'pre_oven',
        variations: 'Mace (outer shell, similar but milder).',
        references: [],
        isStandard: true
    },
    {
        id: 'strawberry_jam',
        name: 'Strawberry Jam',
        category: 'Pastry Filling',
        description: 'Sweet, bright red fruit preserve with subtle acidity.',
        flavorProfile: {
            intensity: 3,
            fat: 0,
            salinity: 0,
            sweetness: 5,
            thermalBehavior: 'If baked inside, it can boil/explode. Best injected post-fry.'
        },
        origin: 'Global.',
        historyContext: 'Classic filling for Berliners, Sufganiyot, and American jelly donuts.',
        commonStyles: ['yeasted_donuts', 'japanese_milk_bread'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Vanilla Glaze',
            'Powdered Sugar',
            'Cream'
        ],
        technicalNotes: 'Strain for smooth injection. Use high-fruit content jams for better flavor balance.',
        applicationMoment: 'post_oven',
        variations: 'Raspberry (tarter), Apricot.',
        references: [],
        isStandard: true
    },
    {
        id: 'vanilla_glaze',
        name: 'Vanilla Glaze',
        category: 'Finish',
        description: 'A smooth, sweet coating made of powdered sugar, milk, and vanilla.',
        flavorProfile: {
            intensity: 3,
            fat: 1,
            salinity: 1,
            sweetness: 5,
            thermalBehavior: 'Sets as it cools, forming a thin, translucent crackly shell.'
        },
        origin: 'USA.',
        historyContext: 'The defining finish of the Krispy Kreme and Dunkin styles.',
        commonStyles: ['yeasted_donuts', 'cinnamon_rolls'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Sprinkles',
            'Chocolate Drizzle',
            'Cinnamon'
        ],
        technicalNotes: 'Apply while the donut is slightly warm to ensure a even, thin coating.',
        applicationMoment: 'post_oven',
        variations: 'Maple Glaze, Chocolate Glaze.',
        references: [],
        isStandard: true
    },
    {
        id: 'catupiry',
        name: 'Catupiry (Requeijão Culinário)',
        category: 'Cheese',
        description: 'A unique Brazilian processed cheese, ultra-creamy, mild, and highly heat-stable.',
        flavorProfile: {
            intensity: 3,
            fat: 4,
            salinity: 3,
            sweetness: 2,
            thermalBehavior: 'Does not melt into oil; maintains its shape even at high heat.'
        },
        origin: 'Lambari, Minas Gerais, Brazil (1911).',
        historyContext: 'Created by Italian immigrants Mario and Isaura Silvestrini; became a national icon.',
        commonStyles: ['brazilian_pizzeria', 'esfiha'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Chicken (Frango com Catupiry)',
            'Corn',
            'Shrimp'
        ],
        technicalNotes: 'Apply in characteristic concentric circles using a pastry bag or the specialized Tube.',
        applicationMoment: 'pre_oven',
        variations: 'Requeijão Cremoso (thinner).',
        references: [],
        isStandard: true
    },
    {
        id: 'boiled_eggs',
        name: 'Hard Boiled Eggs (Sliced)',
        category: 'Dairy',
        description: 'Eggs cooked until solid and sliced into rounds.',
        flavorProfile: {
            intensity: 2,
            fat: 3,
            salinity: 1,
            sweetness: 1,
            thermalBehavior: 'Can become rubbery if double-baked at very high heat.'
        },
        origin: 'Global.',
        historyContext: 'Defining element of the "Portuguese" pizza in Brazil.',
        commonStyles: ['brazilian_pizzeria'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Ham',
            'Onions',
            'Olives'
        ],
        technicalNotes: 'Slice with an egg-cutter for uniform presentation. Place on top of cheese to protect the yolk from drying.',
        applicationMoment: 'pre_oven',
        variations: 'Quail eggs (smaller).',
        references: [],
        isStandard: true
    },
    {
        id: 'minas_cheese',
        name: 'Queijo Minas (Padrão)',
        category: 'Cheese',
        description: 'Traditional Brazilian semi-hard cheese, mild, milky, and slightly acidic.',
        flavorProfile: {
            intensity: 3,
            fat: 3,
            salinity: 3,
            sweetness: 2,
            thermalBehavior: "Melts well but maintains some structure; doesn't release much oil."
        },
        origin: 'Minas Gerais, Brazil.',
        historyContext: 'The heart of the "Pão de Queijo" heritage and Brazilian colonial breakfast.',
        commonStyles: ['pao_de_queijo', 'brazilian_pizzeria'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Guava Paste (Romeu e Julieta)',
            'Coffee',
            'Honey'
        ],
        technicalNotes: 'For pizza, grate coarsely. Provides a "homestyle" flavor that contrasts with industrial mozzarella.',
        applicationMoment: 'pre_oven',
        variations: 'Canastra (artisanal, cured), Serro.',
        references: [],
        isStandard: true
    },
    {
        id: 'cherry_tomatoes_confit',
        name: 'Cherry Tomatoes (Confit)',
        category: 'Vegetal',
        description: 'Small, sweet tomatoes slow-cooked in olive oil with garlic and herbs.',
        flavorProfile: {
            intensity: 4,
            fat: 3,
            salinity: 2,
            sweetness: 5,
            thermalBehavior: 'Already soft. In the oven, they caramelize further and release intense juices.'
        },
        origin: 'France (Confit technique) / Italy (Gourmet Pizza).',
        historyContext: 'Crucial ingredient for the "Gourmet" Pizza revolution in Italy.',
        commonStyles: ['neapolitan_contemporary', 'modern_artisan'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Stracciatella',
            'Basil Oil',
            'Anchovies'
        ],
        technicalNotes: 'Do not bake at high heat for too long or they will lose their shape. Best added halfway through or post-bake.',
        applicationMoment: 'post_oven',
        variations: 'Semi-dried tomatoes.',
        references: [],
        isStandard: true
    },
    {
        id: 'condensed_milk',
        name: 'Condensed Milk (Sweetened)',
        category: 'Dairy',
        description: 'Thick, sweetened cow\'s milk with a creamy, caramel-like flavor. Standard for Asian enriched breads.',
        flavorProfile: {
            intensity: 5,
            fat: 3,
            salinity: 1,
            sweetness: 5,
            thermalBehavior: 'Caramelizes and browns deeply in the dough. Retains moisture.'
        },
        origin: 'Global / Popular in Asia & Latin America.',
        historyContext: 'A key ingredient in Hokkaido Milk Bread and Brazilian Pão de Leite for a "milky" aroma.',
        commonStyles: ['enriched_bread', 'pastry'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Matcha',
            'Strawberries',
            'Soft Bread'
        ],
        technicalNotes: 'Count as 50% sugar and 50% liquid. Over-dosing can make the dough overly sticky.',
        applicationMoment: 'pre_oven',
        variations: 'Evaporated milk (no sugar), Dulce de leche.',
        references: [],
        isStandard: true
    },
    {
        id: 'black_sesame',
        name: 'Black Sesame Seeds',
        category: 'Spice',
        description: 'Small black seeds with a much deeper, nuttier flavor than white sesame. Often used in Asian pastry.',
        flavorProfile: {
            intensity: 4,
            fat: 5,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Fragrant and crunchy when toasted. Does not burn as easily as white sesame.'
        },
        origin: 'East Asia.',
        historyContext: 'Traditional garnish for Japanese and Chinese breads and desserts.',
        commonStyles: ['enriched_bread', 'pastry'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Red Bean Paste',
            'Matcha',
            'Hokkaido Milk Bread'
        ],
        technicalNotes: 'Grind into a paste (Nerigoma) for intense flavor integration or use whole for visual contrast.',
        applicationMoment: 'pre_oven',
        variations: 'White Sesame, Toasted Sesame Oil.',
        references: [],
        isStandard: true
    },
    {
        id: 'requeijao_cremoso',
        name: 'Requeijão Cremoso (Brazilian)',
        category: 'Cheese',
        description: 'A creamy, spreadable processed cheese typical of Brazil. Similar to a thicker Melter cream cheese, but with a unique lactic tang.',
        flavorProfile: {
            intensity: 3,
            fat: 5,
            salinity: 4,
            sweetness: 2,
            thermalBehavior: 'Melts into a thick, lava-like consistency. Resists separation at high heat.'
        },
        origin: 'Brazil.',
        historyContext: 'The soul of Brazilian "Salgados" (savory snacks) and the most popular filling for Pão de Batata.',
        commonStyles: ['pizza', 'enriched_bread'],
        ovenCompatibility: ['any'],
        classicCombinations: [
            'Chicken (Frango com Catupiry)',
            'Corn',
            'Potato Bread'
        ],
        technicalNotes: 'Applied via a piping bag into the center of dough balls before baking. Use "Culinary" version for best results in ovens.',
        applicationMoment: 'pre_oven',
        variations: 'Catupiry (premium brand), Cheddar Cream.',
        references: [],
        isStandard: true
    },
    {
        id: 'yogurt_plain',
        name: 'Yogurt (Plain/Greek)',
        category: 'Dairy',
        description: 'Fermented milk product that tenders the crumb and adds a tangy lactic acid flavor.',
        flavorProfile: {
            intensity: 3,
            fat: 2,
            salinity: 1,
            sweetness: 2,
            thermalBehavior: 'Acidity weakens gluten network, creating softer textures.'
        },
        origin: 'Global',
        historyContext: 'Ancient tenderizer for flatbreads in India and the Middle East.',
        commonStyles: ['naan_flatbread', 'pita_bread_flatbread'],
        ovenCompatibility: ['tandoor', 'home_oven'],
        classicCombinations: ['Honey', 'Garlic', 'Coriander'],
        technicalNotes: 'Acidity can speed up yeast activity initially but degrade gluten if left too long.',
        applicationMoment: 'pre_oven',
        variations: 'Buttermilk, Kefir.',
        references: [],
        isStandard: true
    },
    {
        id: 'butter_dry_84',
        name: 'Dry Butter (84% Fat)',
        category: 'Dairy',
        description: 'Professional "Tourage" butter with higher fat and lower water content. Essential for puff pastry.',
        flavorProfile: {
            intensity: 3,
            fat: 5,
            salinity: 0,
            sweetness: 2,
            thermalBehavior: 'Higher melting point and plasticity allows for thinner layers without breakage.'
        },
        origin: 'France / New Zealand',
        historyContext: 'Developed for industrial and artisanal lamination efficiency.',
        commonStyles: ['puff_pastry_classic', 'croissant_classic', 'pastry_danish_classic'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Flour', 'Sugar'],
        technicalNotes: 'Melting point: 34-36°C. Standard butter melts at 32°C.',
        applicationMoment: 'pre_oven',
        variations: 'Sheet Butter, Beurre de Tourage.',
        references: [],
        isStandard: true
    },
    {
        id: 'ghee_clarified_butter',
        name: 'Ghee (Clarified Butter)',
        category: 'Dairy',
        description: 'Pure butterfat with milk solids removed. High smoke point and intense nutty aroma.',
        flavorProfile: {
            intensity: 4,
            fat: 5,
            salinity: 0,
            sweetness: 3,
            thermalBehavior: 'Stable at high temperatures. Does not burn like regular butter.'
        },
        origin: 'India',
        historyContext: 'The sacred fat of Indian cuisine, essential for Naan and Roti.',
        commonStyles: ['naan_flatbread', 'paratha'],
        ovenCompatibility: ['tandoor', 'skillet'],
        classicCombinations: ['Garlic', 'Nigella Seeds'],
        technicalNotes: 'Brush immediately after baking for maximum aroma absorption.',
        applicationMoment: 'post_oven',
        variations: 'Clarified Butter, Brown Butter.',
        references: [],
        isStandard: true
    },
    {
        id: 'nigella_seeds',
        name: 'Nigella Seeds (Kalorji)',
        category: 'Spice',
        description: 'Small black seeds with notes of onion, oregano, and black pepper.',
        flavorProfile: {
            intensity: 4,
            fat: 2,
            salinity: 0,
            sweetness: 0,
            thermalBehavior: 'Toasts quickly on the surface of bread.'
        },
        origin: 'South Asia / Middle East',
        historyContext: 'The visual and flavor signature of authentic Naan.',
        commonStyles: ['naan_flatbread', 'turkish_pide'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Ghee', 'Coriander'],
        technicalNotes: 'Sprinkle on wet dough surface before baking.',
        applicationMoment: 'pre_oven',
        variations: 'Black Sesame (visual only), Onion Seeds.',
        references: [],
        isStandard: true
    },
    {
        id: 'lard_pork_fat',
        name: 'Lard (Pork Fat)',
        category: 'Dairy',
        description: 'Rendered pork fat. The secret to the flakiest pastries and the softest tortillas.',
        flavorProfile: {
            intensity: 3,
            fat: 5,
            salinity: 1,
            sweetness: 1,
            thermalBehavior: 'Creates distinct layers (lamination) due to large crystal structure.'
        },
        origin: 'Global (historically dominant fat before vegetable oils)',
        historyContext: 'Essential for authentic Mexican Wheat Tortillas and Cuban Bread.',
        commonStyles: ['wheat_tortilla', 'pie_dough', 'cuban_bread'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Flour', 'Salt'],
        technicalNotes: 'Use "Leaf Lard" for neutral flavor in pastries.',
        applicationMoment: 'pre_oven',
        variations: 'Vegetable Shortening (Crisco), Duck Fat.',
        references: [],
        isStandard: true
    },
    {
        id: 'caraway_seeds',
        name: 'Caraway Seeds (Kümmel)',
        category: 'Spice',
        description: 'Aromatic split seeds with a distinct anise/licorice flavor. The soul of Rye bread.',
        flavorProfile: {
            intensity: 4,
            fat: 2,
            salinity: 0,
            sweetness: 0,
            thermalBehavior: 'Flavor intensifies with baking.'
        },
        origin: 'Central Europe / Germany',
        historyContext: 'Traditional digestive aid paired with heavy rye breads.',
        commonStyles: ['vollkornbrot_100_rye', 'seventy_percent_rye_sour', 'ny_deli_rye'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Rye', 'Salt'],
        technicalNotes: 'Can be ground or used whole.',
        applicationMoment: 'pre_oven',
        variations: 'Fennel, Anise.',
        references: [],
        isStandard: true
    },
    {
        id: 'sunflower_seeds',
        name: 'Sunflower Seeds',
        category: 'Spice',
        description: 'Nutty, rich seeds that resist burning on the crust better than smaller seeds.',
        flavorProfile: {
            intensity: 3,
            fat: 4,
            salinity: 0,
            sweetness: 1,
            thermalBehavior: 'Toasts to a deep brown.'
        },
        origin: 'Americas (native), popularized in Europe',
        historyContext: 'Staple of German "Vollkornbrot" and multi-grain mixes.',
        commonStyles: ['vollkornbrot_100_rye', 'mixed_grain_sourdough'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Honey', 'Whole Wheat'],
        technicalNotes: 'Soak (soaker) before adding to dough to prevent them from stealing water.',
        applicationMoment: 'pre_oven',
        variations: 'Pumpkin Seeds.',
        references: [],
        isStandard: true
    },
    {
        id: 'poppy_seeds',
        name: 'Poppy Seeds (Mohn)',
        category: 'Spice',
        description: 'Tiny blue-black seeds with a nutty, earthy flavor and crunchy texture.',
        flavorProfile: {
            intensity: 3,
            fat: 4,
            salinity: 0,
            sweetness: 0,
            thermalBehavior: 'Resists heat well.'
        },
        origin: 'Eastern Europe',
        historyContext: 'Used extensively in Jewish (Challah) and Slavic baking.',
        commonStyles: ['challah_jewish_braided', 'bagels_classic'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Lemon', 'Honey'],
        technicalNotes: 'Can be ground into a paste (Mohn mass).',
        applicationMoment: 'pre_oven',
        variations: 'Chia Seeds.',
        references: [],
        isStandard: true
    },
    {
        id: 'vanilla_bean',
        name: 'Vanilla Bean (Madagascar/Tahiti)',
        category: 'Spice',
        description: 'The complex, floral aroma of cured orchid pods. Essential for pastry.',
        flavorProfile: {
            intensity: 5,
            fat: 0,
            salinity: 0,
            sweetness: 4, // Perception of sweetness
            thermalBehavior: 'Volatile compounds can bake off; seeds remain stable.'
        },
        origin: 'Mexico (Native), Madagascar',
        historyContext: 'The world\'s most popular flavor, cultivated by the Totonacs.',
        commonStyles: ['pastry_danish_classic', 'brioche_feuilletee', 'panettone_artisanal'],
        ovenCompatibility: ['any'],
        classicCombinations: ['Butter', 'Cream', 'Sugar'],
        technicalNotes: 'Use the scraped seeds (caviar) for visual appeal and strongest flavor.',
        applicationMoment: 'pre_oven',
        variations: 'Extract, Paste.',
        references: [],
        isStandard: true
    }
];
