/**
 * Script Helper para Preenchimento de Estilos
 * 
 * Este script fornece templates e funções auxiliares para preencher
 * os campos de estilos de massa de forma consistente e completa.
 */

// ============================================================================
// TEMPLATE COMPLETO - COPIE E ADAPTE PARA CADA ESTILO
// ============================================================================

export const COMPLETE_STYLE_TEMPLATE = {
    // Campos básicos já existentes (não modificar)
    id: "style_id",
    title: "Style Title",
    subtitle: "Style Subtitle",
    category: "Pizza" | "Bread" | "Pastry",
    family: "Style Family",
    variantName: "Variant Name",
    origin: {
        country: "Country",
        region: "Region",
        period: "Time Period"
    },
    intro: "Brief introduction",
    history: "Historical context",

    // ========== NOVOS CAMPOS CULTURAIS ==========
    culturalContext: {
        significance: [
            "1. Significado cultural principal",
            "2. Importância histórica ou social",
            "3. Proteção legal ou reconhecimento",
            "4. Impacto cultural regional/global",
            "5. Valores ou tradições representados"
        ],
        consumptionContext: [
            "1. Onde e como é consumido",
            "2. Ocasiões típicas de consumo",
            "3. Forma de servir e comer",
            "4. Contexto social (família, rua, restaurante)",
            "5. Frequência e tradições de consumo"
        ],
        evolution: [
            "1. Origem histórica (data, local, criador)",
            "2. Desenvolvimento inicial (período)",
            "3. Expansão e popularização",
            "4. Industrialização ou padronização",
            "5. Renascimento artesanal (se aplicável)",
            "6. Status atual e tendências modernas"
        ],
        rituals: [
            "1. Ritual de preparação específico",
            "2. Costume de consumo tradicional",
            "3. Tradição cultural associada",
            "4. Debate ou preferência regional",
            "5. Sinal de qualidade ou autenticidade"
        ]
    },

    // ========== PERFIL DE SABOR ==========
    flavorProfile: {
        primaryFlavors: [
            "1. Sabor da massa/base",
            "2. Sabor dos ingredientes principais",
            "3. Notas de fermentação",
            "4. Sabores de cocção (char, caramelização)",
            "5. Perfil geral de sabor"
        ],
        aromaProfile: [
            "1. Aroma da massa assada",
            "2. Aromas de fermentação",
            "3. Aromas de ingredientes",
            "4. Aromas de cocção",
            "5. Impressão aromática geral"
        ],
        textureNotes: [
            "1. Textura da crosta/exterior",
            "2. Textura do miolo/interior",
            "3. Contraste de texturas",
            "4. Sensação na boca",
            "5. Descrição geral de textura"
        ],
        pairingRecommendations: [
            "1. Combinações clássicas",
            "2. Ingredientes complementares",
            "3. Bebidas recomendadas",
            "4. Acompanhamentos tradicionais",
            "5. O que evitar"
        ],
        flavorEvolution: [
            "1. Recém-saído do forno (0-X min): descrição",
            "2. Esfriando (X-Y min): descrição",
            "3. Temperatura ambiente: descrição",
            "4. Frio/dia seguinte: descrição",
            "5. Reaquecido (se aplicável): descrição"
        ]
    },

    // ========== CAMPOS TÉCNICOS ==========
    technicalFoundations: [
        "Fundamento técnico 1",
        "Fundamento técnico 2 (ex: Hydration: X-Y%)"
    ],

    doughImpact: [
        "1. Impacto da hidratação",
        "2. Efeito da fermentação",
        "3. Influência dos ingredientes",
        "4. Desenvolvimento de glúten",
        "5. Características finais da massa"
    ],

    bakingImpact: [
        "1. Efeito da temperatura",
        "2. Impacto do tipo de forno",
        "3. Tempo de cozimento",
        "4. Desenvolvimento de cor/crosta",
        "5. Resultado final característico"
    ],

    regionalVariants: [
        "Variante 1 - descrição breve",
        "Variante 2 - descrição breve",
        "Variante 3 - descrição breve",
        "Variante 4 - descrição breve"
    ],

    climateScenarios: [
        "Hot/Humid (>25°C, >70% RH): ajustes específicos",
        "Cold/Dry (<15°C, <40% RH): ajustes específicos",
        "Tropical: ajustes específicos",
        "High Altitude (>1500m): ajustes específicos"
    ],

    styleComparisons: [
        "vs. Estilo A: diferenças principais",
        "vs. Estilo B: diferenças principais",
        "vs. Estilo C: diferenças principais",
        "vs. Estilo D: diferenças principais"
    ],

    parameterSensitivity: [
        "Critical: parâmetro mais importante",
        "Highly sensitive: segundo parâmetro",
        "Parâmetro 3: importância",
        "Parâmetro 4: importância",
        "Parâmetro 5: importância"
    ],

    risks: [
        "Risco 1: causa e solução",
        "Risco 2: causa e solução",
        "Risco 3: causa e solução",
        "Risco 4: causa e solução",
        "Risco 5: causa e solução"
    ],

    notes: [
        "Nota técnica importante 1",
        "Nota técnica importante 2",
        "Nota técnica importante 3",
        "Nota técnica importante 4",
        "Nota técnica importante 5"
    ],

    faq: [
        {
            question: "Pergunta comum 1?",
            answer: "Resposta detalhada e técnica."
        },
        {
            question: "Pergunta comum 2?",
            answer: "Resposta detalhada."
        },
        {
            question: "Pergunta comum 3?",
            answer: "Resposta detalhada."
        },
        {
            question: "Pergunta comum 4?",
            answer: "Resposta detalhada."
        },
        {
            question: "Pergunta comum 5?",
            answer: "Resposta detalhada."
        }
    ],

    references: [
        {
            title: "Título da Referência 1",
            url: "https://url-completa.com",
            author: "Nome do Autor",
            year: 2021
        },
        {
            title: "Título da Referência 2",
            url: "https://url-completa.com",
            author: "Nome do Autor",
            year: 2020
        },
        {
            title: "Título da Referência 3",
            url: "https://url-completa.com",
            author: "Nome do Autor",
            year: 2019
        }
    ]
};

// ============================================================================
// REFERÊNCIAS BIBLIOGRÁFICAS PADRÃO
// ============================================================================

export const STANDARD_REFERENCES = {
    pizza: [
        {
            title: "Modernist Pizza",
            url: "https://modernistcuisine.com/books/modernist-pizza/",
            author: "Nathan Myhrvold, Francisco Migoya",
            year: 2021
        },
        {
            title: "The Pizza Bible",
            url: "https://www.amazon.com/Pizza-Bible-Worlds-Favorite-Styles/dp/1607746267",
            author: "Tony Gemignani",
            year: 2014
        },
        {
            title: "American Pie: My Search for the Perfect Pizza",
            url: "https://www.amazon.com/American-Pie-Search-Perfect-Pizza/dp/1580084222",
            author: "Peter Reinhart",
            year: 2003
        },
        {
            title: "PizzaMaking.com Forums",
            url: "https://www.pizzamaking.com/forum/",
            author: "Pizza Making Community",
            year: 2023
        }
    ],

    bread: [
        {
            title: "Bread: A Baker's Book of Techniques and Recipes",
            url: "https://www.amazon.com/Bread-Bakers-Book-Techniques-Recipes/dp/1118132718",
            author: "Jeffrey Hamelman",
            year: 2012
        },
        {
            title: "The Taste of Bread",
            url: "https://www.amazon.com/Taste-Bread-Raymond-Calvel/dp/0834216469",
            author: "Raymond Calvel",
            year: 2001
        },
        {
            title: "Modernist Bread",
            url: "https://modernistcuisine.com/books/modernist-bread/",
            author: "Nathan Myhrvold, Francisco Migoya",
            year: 2017
        },
        {
            title: "Tartine Bread",
            url: "https://www.amazon.com/Tartine-Bread-Chad-Robertson/dp/0811870413",
            author: "Chad Robertson",
            year: 2010
        }
    ],

    pastry: [
        {
            title: "Ferrandi Paris: Professional Baking",
            url: "https://www.amazon.com/Ferrandi-Paris-Professional-Baking-Fundamentals/dp/2080203266",
            author: "Ferrandi Paris",
            year: 2021
        },
        {
            title: "The Art of French Pastry",
            url: "https://www.amazon.com/Art-French-Pastry-Jacquy-Pfeiffer/dp/0307959139",
            author: "Jacquy Pfeiffer",
            year: 2013
        },
        {
            title: "Advanced Bread and Pastry",
            url: "https://www.amazon.com/Advanced-Bread-Pastry-Professional-Approach/dp/1418011754",
            author: "Michel Suas",
            year: 2008
        },
        {
            title: "Modernist Bread",
            url: "https://modernistcuisine.com/books/modernist-bread/",
            author: "Nathan Myhrvold, Francisco Migoya",
            year: 2017
        }
    ]
};

// ============================================================================
// EXEMPLOS DE PREENCHIMENTO POR CATEGORIA
// ============================================================================

export const PIZZA_EXAMPLE_CONTENT = {
    culturalSignificance: [
        "Ícone da culinária [região] e cultura [país]",
        "Representa [valor cultural: tradição, inovação, fusão]",
        "Símbolo de [identidade: classe trabalhadora, elite, imigrantes]",
        "Proteção/reconhecimento: [UNESCO, DOP, IGP, ou cultural touchstone]",
        "Impacto global: [como se espalhou, adaptações]"
    ],

    flavorDescriptors: {
        crust: ["crocante", "macio", "mastigável", "arejado", "denso", "floury", "buttery"],
        sauce: ["ácido", "doce", "herbáceo", "rico", "leve", "chunky", "smooth"],
        cheese: ["cremoso", "salgado", "funky", "suave", "elástico", "derretido"],
        overall: ["equilibrado", "rico", "leve", "indulgente", "simples", "complexo"]
    }
};

export const BREAD_EXAMPLE_CONTENT = {
    culturalSignificance: [
        "Pão básico/especial da culinária [região]",
        "Consumido [diariamente/ocasionalmente] em [contexto]",
        "Tradição de [X] séculos, protegido por [lei/costume]",
        "Representa [valores: artesanato, simplicidade, qualidade]",
        "Parte essencial de [refeições, rituais, celebrações]"
    ],

    flavorDescriptors: {
        crumb: ["macio", "aberto", "denso", "arejado", "irregular", "uniforme"],
        crust: ["crocante", "fina", "grossa", "caramelizada", "dourada"],
        flavor: ["nutty", "ácido", "doce", "mineral", "fermentado", "puro trigo"],
        aroma: ["tostado", "fermentado", "caramelizado", "fresco"]
    }
};

// ============================================================================
// CHECKLIST DE VALIDAÇÃO
// ============================================================================

export const VALIDATION_CHECKLIST = {
    culturalContext: {
        significance: 5,
        consumptionContext: 5,
        evolution: 6,
        rituals: 5
    },
    flavorProfile: {
        primaryFlavors: 5,
        aromaProfile: 5,
        textureNotes: 5,
        pairingRecommendations: 5,
        flavorEvolution: 4
    },
    technical: {
        doughImpact: 5,
        bakingImpact: 5,
        regionalVariants: 4,
        climateScenarios: 4,
        styleComparisons: 4,
        parameterSensitivity: 5,
        risks: 5,
        notes: 5
    },
    faq: 5,
    references: 3 // mínimo
};

console.log('✅ Template de Estilos carregado com sucesso!');
console.log('📚 Use COMPLETE_STYLE_TEMPLATE como base');
console.log('📖 Consulte STANDARD_REFERENCES para referências');
console.log('✓ Valide com VALIDATION_CHECKLIST');
