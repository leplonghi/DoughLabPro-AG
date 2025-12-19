
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
    }
];
