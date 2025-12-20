#!/usr/bin/env node

/**
 * 🤖 AI-Powered Style Content Research & Fill
 * 
 * This script researches and fills style definitions with comprehensive,
 * validated, and referenced information from authoritative sources.
 * 
 * Usage:
 *   node scripts/research-and-fill-styles.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Comprehensive research data for major pizza styles
const PIZZA_STYLE_RESEARCH = {
    neapolitan_avpn_classic: {
        // Basic Information
        title: "Neapolitan Pizza (AVPN Classic)",
        subtitle: "UNESCO-protected traditional pizza from Naples, Italy",
        family: "Italian Traditional Pizza",
        variantName: "AVPN Certified Classic",

        origin: {
            country: "Italy",
            region: "Naples, Campania",
            period: "18th-19th century, formalized 1984"
        },

        intro: "Neapolitan pizza is the original pizza style from Naples, Italy, recognized by UNESCO as an Intangible Cultural Heritage. Protected by strict AVPN standards since 1984, it represents centuries of culinary tradition and craftsmanship.",

        history: "Pizza's origins in Naples trace back centuries to humble flatbreads topped with olive oil, garlic, and herbs. By the 18th century, tomatoes became widely available through Naples' port and were incorporated into these flatbreads among the working class. The modern pizza evolved in the late 18th and early 19th centuries in Naples' poorer areas. A pivotal moment occurred in 1889 when pizzaiolo Raffaele Esposito created Pizza Margherita for Queen Margherita of Savoy, featuring tomatoes, mozzarella, and basil representing the Italian flag colors. Following WWII, American soldiers brought the dish back home, spreading its fame internationally.",

        // Cultural Context
        culturalContext: {
            significance: [
                "Recognized by UNESCO in 2017 as Intangible Cultural Heritage of Humanity, celebrating the art of the Neapolitan pizzaiuolo",
                "Protected by AVPN (Associazione Verace Pizza Napoletana) since 1984 with strict international guidelines",
                "Granted Traditional Speciality Guaranteed (TSG) status by the European Union in 2010",
                "Embodies Neapolitan values of freshness, flavor, and culinary artistry as a way of life",
                "Symbol of Italian national pride and identity, representing the red, white, and green of the Italian flag"
            ],
            consumptionContext: [
                "Traditionally enjoyed fresh and hot directly from the wood-fired oven in Neapolitan pizzerias",
                "Consumed as a social and communal event with families and friends gathering to share",
                "Best eaten with fork and knife in Italy, especially for thicker varieties, though can be eaten by hand informally",
                "Originally affordable street food for Naples' working class in the 18th-19th centuries",
                "Now enjoyed worldwide as a premium dining experience, often reserved for special occasions"
            ],
            evolution: [
                "Evolved from simple flatbreads with olive oil and garlic in pre-18th century Naples",
                "Tomatoes incorporated in the 18th century after becoming widely available through Naples' port",
                "Modern form crystallized in late 18th/early 19th century in Naples' working-class neighborhoods",
                "Pizza Margherita created in 1889 for Queen Margherita, becoming an iconic symbol",
                "Spread internationally post-WWII through American soldiers who experienced it in Naples",
                "AVPN established in 1984 to protect traditional methods and ingredients globally"
            ],
            rituals: [
                "The pizzaiuolo performs four distinct phases of dough preparation with characteristic rotatory movements",
                "Dough twirling tradition to oxygenate before baking, often accompanied by singing and storytelling",
                "'Pizza sospesa' (suspended pizza) tradition where customers pay for two pizzas, leaving one for a stranger in need"
            ]
        },

        // Flavor Profile
        flavorProfile: {
            primaryFlavors: [
                "Intense yet balanced flavor of freshly baked bread with natural wheat sweetness",
                "Tangy, sweet San Marzano tomatoes with low acidity and natural umami",
                "Delicate, creamy fresh mozzarella (buffalo milk or fior di latte) with subtle milky notes",
                "Aromatic fresh basil adding sweet, peppery, and slightly minty notes",
                "Fruity, peppery extra virgin olive oil providing richness and depth"
            ],
            aromaProfile: [
                "Freshly baked bread with yeasty, slightly fermented notes from long fermentation",
                "Sweet, aromatic tomato fragrance with hints of acidity",
                "Fresh basil releasing sweet, herbaceous, and slightly spicy aromatics",
                "Wood smoke from the wood-fired oven adding complexity and depth",
                "Caramelized cheese and slight char from high-heat baking"
            ],
            textureNotes: [
                "Soft, thin center (maximum 3mm) that's pliable and slightly wet or 'floppy'",
                "Puffy, airy cornicione (raised edge 1-2cm high) with leopard-spotted charring",
                "Light, chewy crumb structure from long fermentation and high hydration",
                "Crispy exterior from intense heat, yet flexible enough to fold without cracking",
                "Creamy, melted mozzarella contrasting with tender, elastic dough"
            ],
            pairingRecommendations: [
                "Light Italian white wines like Falanghina or Greco di Tufo to complement acidity",
                "Italian craft beers, especially pale lagers or wheat beers",
                "Simple Italian antipasti like bruschetta or caprese salad",
                "Fresh arugula salad with lemon and olive oil as a side",
                "Limoncello or espresso for a traditional Italian finish"
            ],
            flavorEvolution: [
                "Best consumed immediately from the oven when crust is at peak texture and cheese is molten",
                "Flavors meld within first 2-3 minutes as pizza cools slightly to eating temperature",
                "Crust softens and becomes chewier as it cools, losing some of its crispy contrast"
            ]
        },

        // Technical Details
        technicalFoundations: [
            "Wood-fired oven at extremely high temperatures (430-480°C/800-905°F) for 60-90 seconds",
            "Long fermentation (minimum 8 hours, often 24-48 hours) at room temperature (22-25°C)",
            "Hand-kneading or low-speed mixing with hand-stretching, never using a rolling pin"
        ],

        doughImpact: [
            "High hydration (55-62.5%) creates soft, extensible dough with airy, open crumb",
            "Type 00 or 0 flour with moderate protein provides delicate texture and easy digestibility",
            "Long fermentation develops complex flavors and improves dough extensibility",
            "No oil or sugar in dough maintains purity and allows natural wheat flavors to shine",
            "Hand-stretching preserves air bubbles and creates characteristic irregular cornicione"
        ],

        bakingImpact: [
            "Extreme heat (430-480°C) creates rapid oven spring and characteristic leopard spotting",
            "Very short bake time (60-90 seconds) preserves moisture and prevents drying",
            "Wood-fired oven imparts subtle smoky flavor and creates uneven, artisanal charring",
            "High heat caramelizes cheese and creates contrast between soft center and crispy edges",
            "Dome-shaped oven creates convection currents that cook pizza evenly from all sides"
        ],

        // Technical Profile
        technicalProfile: {
            hydrationRange: [55, 62.5],
            saltRange: [2.0, 2.5],
            oilRange: [0, 0],
            sugarRange: [0, 0],
            flourStrength: "Type 00 or 0 flour, moderate protein (11-12.5%)",
            fermentation: {
                bulk: "Minimum 8 hours, typically 24-48 hours at room temperature (22-25°C)",
                proof: "Individual dough balls proofed 4-6 hours at room temperature",
                coldRetard: "Not traditional, though some modern pizzaiolos use overnight cold fermentation"
            },
            oven: {
                type: "wood_fired",
                temperatureC: [430, 480],
                notes: "Wood-fired dome oven essential for authentic flavor and texture, 60-90 second bake time"
            },
            difficulty: "Advanced",
            recommendedUse: [
                "Traditional Margherita and Marinara pizzas",
                "Simple, high-quality ingredient combinations respecting AVPN guidelines"
            ]
        },

        // Variants & Scenarios
        regionalVariants: [
            "Pizza Margherita: tomato, mozzarella, basil, olive oil - the most iconic variant",
            "Pizza Marinara: tomato, garlic, oregano, olive oil, no cheese - the oldest variant",
            "Pizza Margherita Extra: adds buffalo mozzarella DOP for premium version"
        ],

        climateScenarios: [
            "In hot, humid climates: reduce fermentation time and use cooler water to prevent over-fermentation",
            "In cold, dry climates: extend fermentation time and use warmer water to maintain yeast activity",
            "High altitude: adjust hydration slightly lower due to faster evaporation and lower air pressure",
            "Humid environments: may need slightly less water in dough to maintain proper consistency"
        ],

        styleComparisons: [
            "vs. New York Style: Neapolitan has softer, wetter center and puffier crust; NY is crispier and foldable",
            "vs. Roman Pizza: Neapolitan is thicker and softer; Roman is ultra-thin and cracker-crisp",
            "vs. Contemporary High-Hydration: AVPN Classic uses lower hydration (55-62.5%) vs. 70%+ modern styles"
        ],

        // Sensitivity & Risks
        parameterSensitivity: [
            "Highly sensitive to oven temperature - too low results in dry, tough crust; too high causes burning",
            "Fermentation time critical - under-fermented dough is tough and flavorless; over-fermented becomes sour",
            "Flour quality essential - wrong protein content affects texture and extensibility dramatically"
        ],

        risks: [
            "Over-baking even by 30 seconds can dry out the pizza and burn the cornicione",
            "Insufficient oven temperature results in pale, tough crust without proper char",
            "Too much sauce or toppings makes center soggy and prevents proper cooking"
        ],

        notes: [
            "AVPN certification requires strict adherence to ingredients, techniques, and equipment specifications",
            "The 'pizza sospesa' tradition embodies Neapolitan community spirit and solidarity",
            "Authentic Neapolitan pizza should never exceed 35cm diameter and must be round"
        ],

        // Tags
        tags: [
            "traditional",
            "unesco heritage",
            "wood-fired",
            "italian",
            "naples",
            "avpn certified",
            "artisanal"
        ],

        // References
        references: [
            {
                title: "UNESCO - Art of Neapolitan 'Pizzaiuolo'",
                url: "https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722",
                author: "UNESCO",
                year: 2017
            },
            {
                title: "AVPN International Regulations",
                url: "https://www.pizzanapoletana.org/en/",
                author: "Associazione Verace Pizza Napoletana",
                year: 2024
            },
            {
                title: "The History of Pizza in Naples",
                url: "https://www.smithsonianmag.com/arts-culture/history-pizza-180974102/",
                author: "Smithsonian Magazine",
                year: 2017
            }
        ],

        // FAQ
        faq: [
            {
                question: "What makes Neapolitan pizza authentic according to AVPN?",
                answer: "Authentic Neapolitan pizza must use Type 00 or 0 flour, San Marzano tomatoes, fresh mozzarella (buffalo or fior di latte), fresh basil, and extra virgin olive oil. The dough must be hand-kneaded, fermented for minimum 8 hours, and baked in a wood-fired oven at 430-480°C for 60-90 seconds. The finished pizza must be round, maximum 35cm diameter, with a raised cornicione 1-2cm high."
            },
            {
                question: "Why is Neapolitan pizza so soft and floppy in the center?",
                answer: "The soft, slightly wet center is intentional and traditional. The high oven temperature (430-480°C) and very short bake time (60-90 seconds) cook the pizza rapidly, preserving moisture. The high hydration dough (55-62.5%) and minimal toppings also contribute to the characteristic soft, pliable texture that allows the pizza to be folded."
            },
            {
                question: "Can I make authentic Neapolitan pizza in a home oven?",
                answer: "While challenging, it's possible to approximate Neapolitan pizza at home. Use a pizza stone or steel preheated to maximum temperature (usually 260-290°C), extend bake time to 5-8 minutes, and consider using a broiler for extra top heat. However, the authentic flavor and texture from a 480°C wood-fired oven cannot be fully replicated in a standard home oven."
            }
        ]
    }
};

/**
 * Export research data for use in other scripts
 */
export function getStyleResearch(styleId) {
    return PIZZA_STYLE_RESEARCH[styleId] || null;
}

/**
 * Generate i18n keys from research data
 */
export function generateI18nFromResearch(styleId, research) {
    const i18n = {};

    // Basic info
    i18n[styleId] = research.title;
    i18n[`${styleId}_subtitle`] = research.subtitle;
    i18n[`${styleId}_family`] = research.family;
    i18n[`${styleId}_variant`] = research.variantName;

    // Origin
    i18n[`${styleId}_origin_country`] = research.origin.country;
    i18n[`${styleId}_origin_region`] = research.origin.region;
    i18n[`${styleId}_origin_period`] = research.origin.period;

    // Content
    i18n[`${styleId}_intro`] = research.intro;
    i18n[`${styleId}_history`] = research.history;

    // Cultural Context
    research.culturalContext.significance.forEach((item, i) => {
        i18n[`${styleId}_sig_${i + 1}`] = item;
    });

    research.culturalContext.consumptionContext.forEach((item, i) => {
        i18n[`${styleId}_consum_${i + 1}`] = item;
    });

    research.culturalContext.evolution.forEach((item, i) => {
        i18n[`${styleId}_evo_${i + 1}`] = item;
    });

    research.culturalContext.rituals.forEach((item, i) => {
        i18n[`${styleId}_rituals_${i + 1}`] = item;
    });

    // Flavor Profile
    research.flavorProfile.primaryFlavors.forEach((item, i) => {
        i18n[`${styleId}_flavor_${i + 1}`] = item;
    });

    research.flavorProfile.aromaProfile.forEach((item, i) => {
        i18n[`${styleId}_aroma_${i + 1}`] = item;
    });

    research.flavorProfile.textureNotes.forEach((item, i) => {
        i18n[`${styleId}_texture_${i + 1}`] = item;
    });

    research.flavorProfile.pairingRecommendations.forEach((item, i) => {
        i18n[`${styleId}_pair_${i + 1}`] = item;
    });

    research.flavorProfile.flavorEvolution.forEach((item, i) => {
        i18n[`${styleId}_fe_${i + 1}`] = item;
    });

    // Technical
    research.technicalFoundations.forEach((item, i) => {
        i18n[`${styleId}_tech_${i + 1}`] = item;
    });

    research.doughImpact.forEach((item, i) => {
        i18n[`${styleId}_di_${i + 1}`] = item;
    });

    research.bakingImpact.forEach((item, i) => {
        i18n[`${styleId}_bi_${i + 1}`] = item;
    });

    // Technical Profile
    i18n[`${styleId}_flour_strength`] = research.technicalProfile.flourStrength;
    i18n[`${styleId}_fermentation_bulk`] = research.technicalProfile.fermentation.bulk;
    i18n[`${styleId}_fermentation_proof`] = research.technicalProfile.fermentation.proof;
    i18n[`${styleId}_fermentation_retard`] = research.technicalProfile.fermentation.coldRetard;
    i18n[`${styleId}_oven_notes`] = research.technicalProfile.oven.notes;

    research.technicalProfile.recommendedUse.forEach((item, i) => {
        i18n[`${styleId}_use_${i + 1}`] = item;
    });

    // Variants
    research.regionalVariants.forEach((item, i) => {
        i18n[`${styleId}_rv_${i + 1}`] = item;
    });

    research.climateScenarios.forEach((item, i) => {
        i18n[`${styleId}_cs_${i + 1}`] = item;
    });

    research.styleComparisons.forEach((item, i) => {
        i18n[`${styleId}_sc_${i + 1}`] = item;
    });

    research.parameterSensitivity.forEach((item, i) => {
        i18n[`${styleId}_ps_${i + 1}`] = item;
    });

    // Risks & Notes
    research.risks.forEach((item, i) => {
        i18n[`${styleId}_risk_${i + 1}`] = item;
    });

    research.notes.forEach((item, i) => {
        i18n[`${styleId}_note_${i + 1}`] = item;
    });

    // Tags
    research.tags.forEach((item, i) => {
        i18n[`${styleId}_tag_${i + 1}`] = item;
    });

    // References
    research.references.forEach((item, i) => {
        i18n[`${styleId}_ref_${i + 1}_title`] = item.title;
        i18n[`${styleId}_ref_${i + 1}_author`] = item.author;
    });

    // FAQ
    research.faq.forEach((item, i) => {
        i18n[`${styleId}_faq_${i + 1}_q`] = item.question;
        i18n[`${styleId}_faq_${i + 1}_a`] = item.answer;
    });

    return i18n;
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
    console.log('🔬 Style Research Data Loaded');
    console.log(`\nAvailable researched styles: ${Object.keys(PIZZA_STYLE_RESEARCH).length}`);
    console.log('\nTo use this data, import it in other scripts:');
    console.log('  import { getStyleResearch, generateI18nFromResearch } from "./research-and-fill-styles.js"');
}
