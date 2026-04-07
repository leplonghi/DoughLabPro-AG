import { LearnArticleData } from '@/types/learn';
import { FlavorComponent } from '@/types/flavor';
import {
    Citation,
    CitationAnchor,
    CitationSourceType,
    DoughStyleDefinition,
    EditorialTextBlock,
    FlexibilityGuide,
    MediaAsset,
    Reference,
    StyleComparisonItem,
    StyleContentCompleteness,
    StyleEditorialStatus,
    StyleEditorialSummary,
    StyleEditorialViewModel,
    StyleLibraryCuration,
    StyleVariation,
} from '@/types/styles';

type TranslateFn = (key: string, options?: any) => string;

interface AdapterOptions {
    allStyles?: DoughStyleDefinition[];
    learnArticles?: LearnArticleData[];
    flavorComponents?: FlavorComponent[];
    t: TranslateFn;
}

const PLACEHOLDER_IMAGE = '/images/styles/placeholder-dough.png';

const FAMILY_LABELS: Record<DoughStyleDefinition['category'], string> = {
    pizza: 'Pizza',
    bread: 'Bread',
    enriched_bread: 'Enriched Bread',
    burger_bun: 'Buns',
    pastry: 'Pastry',
    cookie: 'Cookies',
    cookies_confectionery: 'Cookies & Confectionery',
    flatbread: 'Flatbreads',
    other: 'Other',
};

const EDITORIAL_LINES: Partial<Record<DoughStyleDefinition['category'], string>> = {
    pizza: 'Heat-driven dough systems with strong regional identity and topping logic.',
    bread: 'Crumb, crust, fermentation, and shaping patterns for staple breads.',
    enriched_bread: 'Soft, rich doughs where fat, sugar, and tenderness shape the outcome.',
    burger_bun: 'Soft service breads designed around sliceability, resilience, and moisture.',
    pastry: 'Layered or enriched systems where handling precision changes the final texture.',
    cookie: 'Structured sweet doughs balancing spread, chew, snap, and caramelization.',
    flatbread: 'Thin, direct doughs focused on fast shaping and high versatility.',
};

const categoryToFamily = (category: DoughStyleDefinition['category']) => FAMILY_LABELS[category] || 'Other';

const translate = (t: TranslateFn, value?: string | null, fallback = '') => {
    if (!value) return fallback;
    const translated = t(value, { defaultValue: value });
    return translated || value;
};

const toSentenceCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

const slugify = (value: string) =>
    value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

const inferCitationSourceType = (reference: Reference | string): CitationSourceType => {
    const raw = typeof reference === 'string'
        ? reference
        : `${reference.source} ${reference.url ?? ''} ${reference.notes ?? ''}`;
    const value = raw.toLowerCase();

    if (value.includes('youtube') || value.includes('masterclass') || value.includes('video')) return 'video';
    if (value.includes('avpn') || value.includes('consorzio') || value.includes('official') || value.includes('regulation') || value.includes('.org')) return 'institutional';
    if (value.includes('journal') || value.includes('study') || value.includes('science') || value.includes('seriouseats') || value.includes('article')) return 'article';
    if (value.includes('bible') || value.includes('handbook') || value.includes('book') || value.includes('manual')) return 'book';
    if (value.includes('doughlab')) return 'internal';
    return 'other';
};

const normalizeCitations = (style: DoughStyleDefinition, t: TranslateFn): Citation[] => {
    const refs = style.citations?.length ? style.citations : (style.references || []).map((reference, index) => {
        const raw = typeof reference === 'string'
            ? { source: reference }
            : reference;
        return {
            id: `ref-${index + 1}`,
            label: `${index + 1}`,
            sourceType: raw.sourceType || inferCitationSourceType(raw),
            title: translate(t, raw.source, raw.source),
            authors: raw.author ? [translate(t, raw.author, raw.author)] : undefined,
            publisher: raw.publisher ? translate(t, raw.publisher, raw.publisher) : undefined,
            year: raw.year,
            url: raw.url,
            accessedAt: raw.accessedAt,
            notes: raw.notes ? translate(t, raw.notes, raw.notes) : undefined,
        } as Citation;
    });

    return refs.map((citation, index) => ({
        ...citation,
        id: citation.id || `ref-${index + 1}`,
        label: citation.label || `${index + 1}`,
    }));
};

const buildCitationAnchors = (sections: Array<{ sectionId: string; blockId: string; citationIds?: string[] }>): CitationAnchor[] =>
    sections
        .filter(section => section.citationIds && section.citationIds.length > 0)
        .map(section => ({
            sectionId: section.sectionId,
            blockId: section.blockId,
            citationIds: section.citationIds || [],
        }));

const getCompleteness = (style: DoughStyleDefinition, citations: Citation[], mediaGallery: MediaAsset[]): StyleContentCompleteness => {
    const richnessScore = [
        style.education?.q_and_a?.length || 0,
        style.deepDive?.proTips?.length || 0,
        style.comparisonSet?.length || style.education?.comparative_analysis?.length || 0,
        citations.length,
        mediaGallery.filter(asset => asset.src !== PLACEHOLDER_IMAGE).length,
    ].reduce((sum, current) => sum + current, 0);

    if (style.contentCompleteness) return style.contentCompleteness;
    if (richnessScore >= 10) return 'expert';
    if (richnessScore >= 5) return 'rich';
    return 'core';
};

const getEditorialStatus = (style: DoughStyleDefinition): StyleEditorialStatus => {
    if (style.editorialStatus) return style.editorialStatus;
    if (style.source === 'official') return 'official';
    if (style.source === 'user_ai') return 'experimental';
    return 'community';
};

const getLibraryCuration = (
    style: DoughStyleDefinition,
    completeness?: StyleContentCompleteness,
): StyleLibraryCuration => {
    if (style.libraryCuration) return style.libraryCuration;

    if (style.source !== 'official') {
        return {
            tier: 'community',
            visibility: 'standard',
            displayOrder: 9000,
            rationale: 'Community and custom styles stay visible, but should not displace the curated editorial spine.',
        };
    }

    return {
        tier: completeness === 'core' ? 'specialist' : 'core',
        visibility: completeness === 'core' ? 'hidden' : 'standard',
        displayOrder: completeness === 'core' ? 7000 : 5000,
        rationale: completeness === 'core'
            ? 'Useful specialist style kept available without crowding the flagship and core reading path.'
            : 'Core official style that belongs in the standard library even when it is not a flagship anchor.',
    };
};

const inferSignatureTrait = (style: DoughStyleDefinition, t: TranslateFn) => {
    if (style.editorialSummary?.signatureTrait) return translate(t, style.editorialSummary.signatureTrait, style.editorialSummary.signatureTrait);
    if (style.scientificProfile?.thermalProfile?.crumb_structure) {
        return translate(t, style.scientificProfile.thermalProfile.crumb_structure, style.scientificProfile.thermalProfile.crumb_structure);
    }
    if (style.technicalProfile?.recommendedUse?.length) {
        return translate(t, style.technicalProfile.recommendedUse[0], style.technicalProfile.recommendedUse[0]);
    }
    if (style.tags?.length) return translate(t, style.tags[0], style.tags[0]);
    return 'Regionally distinct fermentation and baking behavior';
};

const buildEditorialSummary = (style: DoughStyleDefinition, t: TranslateFn): StyleEditorialSummary => {
    const recommendedUse = style.technicalProfile?.recommendedUse?.map(item => translate(t, item, item)) || [];
    const firstWatchout = style.watchouts?.[0] || style.risks?.[0];

    return style.editorialSummary || {
        promise: translate(t, style.description, style.description),
        bestFor: recommendedUse[0] || 'Bakers who want a clearly defined regional result.',
        whenToUse: recommendedUse[1] || `Best when you want ${categoryToFamily(style.category).toLowerCase()} structure with repeatable process cues.`,
        notIdealFor: firstWatchout ? translate(t, firstWatchout, firstWatchout) : 'Not ideal when you need a forgiving dough with minimal process control.',
        signatureTrait: inferSignatureTrait(style, t),
    };
};

const parseLegacyStep = (stepValue: string, index: number, t: TranslateFn) => {
    const clean = translate(t, stepValue.replace(/\[Science:.*?\]/, '').trim(), stepValue.replace(/\[Science:.*?\]/, '').trim());
    const scienceMatch = stepValue.match(/\[Science: (.*?)\]/);
    const science = scienceMatch ? translate(t, scienceMatch[1], scienceMatch[1]) : undefined;
    const separatorIndex = clean.search(/[:.\-]/);

    return {
        id: `legacy-step-${index + 1}`,
        phase: index === 0 ? 'Mix' : index === 1 ? 'Bulk' : index === 2 ? 'Shape' : index === 3 ? 'Proof' : 'Bake',
        title: separatorIndex >= 0 ? clean.slice(0, separatorIndex).trim() : `Step ${index + 1}`,
        duration: 'Variable',
        summary: separatorIndex >= 0 ? clean.slice(separatorIndex + 1).trim() : clean,
        science,
        citationIds: science ? ['ref-1'] : [],
    };
};

const buildProcessTimeline = (style: DoughStyleDefinition, t: TranslateFn) => {
    if (style.processTimeline?.length) return style.processTimeline;
    if (style.customMethod?.length) {
        return style.customMethod.map((step, index) => ({
            id: `custom-${index + 1}`,
            phase: translate(t, step.phase, step.phase),
            title: translate(t, step.title, step.title),
            duration: step.durationLabel ? translate(t, step.durationLabel, step.durationLabel) : 'Variable',
            temperature: step.temperatureLabel ? translate(t, step.temperatureLabel, step.temperatureLabel) : undefined,
            summary: translate(t, step.actionInstructions, step.actionInstructions),
            science: step.technicalExplanation ? translate(t, step.technicalExplanation, step.technicalExplanation) : undefined,
            criticalPoint: step.criticalPoint ? translate(t, step.criticalPoint, step.criticalPoint) : undefined,
            citationIds: ['ref-1'],
        }));
    }

    if (style.technicalProfile?.fermentationSteps?.length) {
        return style.technicalProfile.fermentationSteps.map((step, index) => parseLegacyStep(step, index, t));
    }

    return [
        {
            id: 'fallback-mix',
            phase: 'Mix',
            title: 'Mix and organize the dough',
            duration: 'Variable',
            summary: 'Use this page as the canonical workflow reference while you adapt the process to your setup.',
            citationIds: ['ref-1'],
        },
    ];
};

const buildIdentity = (style: DoughStyleDefinition, t: TranslateFn, citationIds: string[]): EditorialTextBlock[] => {
    if (style.identity?.length) return style.identity;

    const blocks: EditorialTextBlock[] = [
        {
            id: 'identity-history',
            title: 'Historical context',
            body: translate(t, style.history, style.history),
            citationIds: citationIds.slice(0, 2),
        },
    ];

    if (style.culturalContext) {
        blocks.push({
            id: 'identity-culture',
            title: 'Cultural positioning',
            body: translate(t, style.culturalContext, style.culturalContext),
            citationIds: citationIds.slice(0, 2),
        });
    }

    blocks.push({
        id: 'identity-trait',
        title: 'What defines this style',
        body: inferSignatureTrait(style, t),
        citationIds: citationIds.slice(0, 1),
    });

    return blocks;
};

const buildQuickRead = (style: DoughStyleDefinition, summary: StyleEditorialSummary): EditorialTextBlock[] => [
    { id: 'quick-expect', title: 'What to expect', body: summary.promise, citationIds: ['ref-1'] },
    { id: 'quick-best-for', title: 'Best for', body: summary.bestFor, citationIds: ['ref-1'] },
    { id: 'quick-when', title: 'When to choose it', body: summary.whenToUse, citationIds: ['ref-1'] },
    { id: 'quick-not-ideal', title: 'Not ideal for', body: summary.notIdealFor, citationIds: ['ref-1'] },
];

const buildTechnicalProfile = (style: DoughStyleDefinition, t: TranslateFn) => {
    const hydration = style.technicalProfile?.hydration;
    const salt = style.technicalProfile?.salt;
    const ovenTemp = style.technicalProfile?.ovenTemp;
    const rheology = style.technicalProfile?.rheology;

    return [
        {
            id: 'hydration',
            label: 'Hydration',
            value: hydration ? `${hydration[0]}-${hydration[1]}%` : 'Variable',
            detail: 'Defines handling, extensibility, and moisture retention.',
        },
        {
            id: 'salt',
            label: 'Salt',
            value: salt ? `${salt[0]}-${salt[1]}%` : 'Variable',
            detail: 'Balances fermentation speed and overall flavor intensity.',
        },
        {
            id: 'fermentation',
            label: 'Fermentation',
            value: toSentenceCase(style.fermentationType.replace('_', ' ')),
            detail: 'Primary method used to structure flavor and gas retention.',
        },
        {
            id: 'difficulty',
            label: 'Difficulty',
            value: style.technicalProfile?.difficulty || style.difficulty,
            detail: 'How demanding the dough is in handling and timing.',
        },
        {
            id: 'oven',
            label: 'Oven range',
            value: ovenTemp ? `${ovenTemp[0]}-${ovenTemp[1]}°C` : 'Varies by adaptation',
            detail: 'Target window for the intended final texture.',
        },
        {
            id: 'flour',
            label: 'Flour profile',
            value: style.technicalProfile?.flourProfile?.type || style.technicalProfile?.flourStrength || 'Flexible flour profile',
            detail: style.technicalProfile?.flourProfile?.protein || 'Choose flour strength based on fermentation length.',
        },
        {
            id: 'behavior',
            label: 'Dough behavior',
            value: rheology?.description || 'Track extensibility, elasticity, and tension.',
            detail: rheology ? `Elasticity ${rheology.elasticity} · Extensibility ${rheology.extensibility}` : undefined,
        },
    ];
};

const buildScienceNotes = (style: DoughStyleDefinition, t: TranslateFn): EditorialTextBlock[] => {
    if (style.scienceNotes?.length) return style.scienceNotes;

    const notes: EditorialTextBlock[] = [];

    if (style.scientificProfile?.flourRheology?.science_explanation) {
        notes.push({
            id: 'science-flour',
            title: 'Flour mechanics',
            body: translate(t, style.scientificProfile.flourRheology.science_explanation, style.scientificProfile.flourRheology.science_explanation),
            citationIds: ['ref-1'],
        });
    }

    if (style.scientificProfile?.fermentationScience) {
        const fermentation = style.scientificProfile.fermentationScience;
        notes.push({
            id: 'science-fermentation',
            title: 'Fermentation logic',
            body: `${translate(t, fermentation.yeast_activity, fermentation.yeast_activity)} · ${translate(t, fermentation.organic_acids, fermentation.organic_acids)} · ${translate(t, fermentation.enzymatic_activity, fermentation.enzymatic_activity)}`,
            citationIds: ['ref-1'],
        });
    }

    if (style.scientificProfile?.thermalProfile) {
        const thermal = style.scientificProfile.thermalProfile;
        notes.push({
            id: 'science-thermal',
            title: 'Thermal profile',
            body: `${translate(t, thermal.oven_type, thermal.oven_type)} drives ${translate(t, thermal.crust_development, thermal.crust_development)} and ${translate(t, thermal.crumb_structure, thermal.crumb_structure)}.`,
            citationIds: ['ref-1'],
        });
    }

    if (!notes.length) {
        notes.push({
            id: 'science-fallback',
            title: 'Process logic',
            body: 'Use the dough behavior, hydration, and oven range together. This style is best understood by linking rheology, fermentation, and bake environment.',
            citationIds: ['ref-1'],
        });
    }

    return notes;
};

const buildVariations = (style: DoughStyleDefinition, t: TranslateFn): StyleVariation[] => {
    if (style.variations?.length) {
        return style.variations.map((variation: any, index) => ({
            id: variation.id || `variation-${index + 1}`,
            name: translate(t, variation.name || variation.title || `Variation ${index + 1}`, variation.name || variation.title || `Variation ${index + 1}`),
            category: variation.category || 'formula',
            changes: translate(t, variation.changes || variation.description || variation.notes || 'Formula or process adjustments are applied here.', variation.changes || variation.description || variation.notes || 'Formula or process adjustments are applied here.'),
            rationale: translate(t, variation.rationale || variation.why || 'This shifts the style toward a different production context.', variation.rationale || variation.why || 'This shifts the style toward a different production context.'),
            expectedResult: translate(t, variation.expectedResult || variation.result || 'Expect a meaningful change in texture, handling, and final character.', variation.expectedResult || variation.result || 'Expect a meaningful change in texture, handling, and final character.'),
            linkedImageIds: variation.linkedImageIds,
            citationIds: ['ref-1'],
        }));
    }

    return [];
};

const buildFlexibilityGuides = (style: DoughStyleDefinition, t: TranslateFn): FlexibilityGuide[] => {
    if (style.flexibilityGuides?.length) return style.flexibilityGuides;

    const guides: FlexibilityGuide[] = [];

    style.deepDive?.whatIf?.forEach((item, index) => {
        guides.push({
            id: `what-if-${index + 1}`,
            scenario: translate(t, item.scenario, item.scenario),
            processChanges: translate(t, item.solution, item.solution),
            tradeoffs: translate(t, item.outcome, item.outcome),
            citationIds: ['ref-1'],
        });
    });

    if (style.technicalProfile?.ovenTemp?.[1] && style.technicalProfile.ovenTemp[1] > 320) {
        guides.push({
            id: 'home-oven',
            scenario: 'Home oven adaptation',
            substitutions: ['Use steel or stone and preload heat aggressively.'],
            processChanges: 'Shorten topping load, preheat longer, and use top heat or broiler to recover radiant energy.',
            tradeoffs: 'You will gain accessibility, but the crust and browning profile will shift away from the canonical version.',
            citationIds: ['ref-1'],
        });
    }

    guides.push({
        id: 'climate',
        scenario: 'Climate and flour availability',
        substitutions: ['Adjust water by 1-3% based on humidity.', 'Choose stronger flour for longer fermentation.'],
        processChanges: 'Use dough temperature and feel as your main control variables when ingredients or weather drift.',
        tradeoffs: 'Convenience improves, but the result may move from traditional toward adapted production.',
        citationIds: ['ref-1'],
    });

    return guides;
};

const buildComparisonSet = (style: DoughStyleDefinition, allStyles: DoughStyleDefinition[], t: TranslateFn): StyleComparisonItem[] => {
    if (style.comparisonSet?.length) return style.comparisonSet;

    if (style.education?.comparative_analysis?.length) {
        return style.education.comparative_analysis.map((item, index) => ({
            id: `comparison-${index + 1}`,
            targetStyleName: translate(t, item.target_style, item.target_style),
            difference: translate(t, item.difference, item.difference),
            whenToChoose: translate(t, item.why_choose_this, item.why_choose_this),
            riskOfConfusion: 'Both styles may look related at first glance, but hydration, bake profile, and service context diverge quickly.',
            citationIds: ['ref-1'],
        }));
    }

    const hydrationAverage = style.technicalProfile?.hydration
        ? (style.technicalProfile.hydration[0] + style.technicalProfile.hydration[1]) / 2
        : 65;

    return allStyles
        .filter(candidate => candidate.id !== style.id && candidate.category === style.category)
        .sort((left, right) => {
            const leftAverage = left.technicalProfile?.hydration
                ? (left.technicalProfile.hydration[0] + left.technicalProfile.hydration[1]) / 2
                : 65;
            const rightAverage = right.technicalProfile?.hydration
                ? (right.technicalProfile.hydration[0] + right.technicalProfile.hydration[1]) / 2
                : 65;
            return Math.abs(leftAverage - hydrationAverage) - Math.abs(rightAverage - hydrationAverage);
        })
        .slice(0, 3)
        .map((candidate, index) => ({
            id: `comparison-fallback-${index + 1}`,
            targetStyleId: candidate.id,
            targetStyleName: translate(t, candidate.name, candidate.name),
            difference: `${translate(t, candidate.description, candidate.description)} Compared with ${translate(t, style.name, style.name)}, it shifts hydration, handling, or bake logic in a noticeable way.`,
            whenToChoose: `Choose ${translate(t, candidate.name, candidate.name)} when you want ${inferSignatureTrait(candidate, t).toLowerCase()}.`,
            riskOfConfusion: `The family overlap is strong, but this style keeps its identity through ${inferSignatureTrait(style, t).toLowerCase()}.`,
            citationIds: ['ref-1'],
        }));
};

const buildMediaGallery = (style: DoughStyleDefinition, t: TranslateFn): MediaAsset[] => {
    if (style.mediaGallery?.length) return style.mediaGallery;

    const title = translate(t, style.name, style.name);
    const localCredit = style.source === 'official' ? 'DoughLab Pro editorial library' : 'Style contributor upload';
    const images = style.images || { hero: PLACEHOLDER_IMAGE, dough: PLACEHOLDER_IMAGE, crumb: PLACEHOLDER_IMAGE };
    const assets: MediaAsset[] = [
        {
            id: 'media-hero',
            type: 'image',
            role: 'hero',
            src: images.hero || PLACEHOLDER_IMAGE,
            alt: `${title} hero presentation`,
            caption: 'Canonical visual reference for the style in service.',
            credit: localCredit,
        },
        {
            id: 'media-process',
            type: 'image',
            role: 'process',
            src: images.process || images.dough || images.hero || PLACEHOLDER_IMAGE,
            alt: `${title} dough during process`,
            caption: 'Process-stage visual used to teach handling, fermentation, or shaping.',
            credit: localCredit,
        },
        {
            id: 'media-dough',
            type: 'image',
            role: 'dough',
            src: images.dough || images.hero || PLACEHOLDER_IMAGE,
            alt: `${title} dough structure`,
            caption: 'Dough or structure view used to explain extensibility and strength.',
            credit: localCredit,
        },
        {
            id: 'media-result',
            type: 'image',
            role: 'result',
            src: images.result || images.crumb || images.hero || PLACEHOLDER_IMAGE,
            alt: `${title} final result`,
            caption: 'Final result used to evaluate crumb, crust, and bake profile.',
            credit: localCredit,
        },
        {
            id: 'media-variation',
            type: 'image',
            role: 'variation',
            src: images.variations?.[0] || images.crumb || images.hero || PLACEHOLDER_IMAGE,
            alt: `${title} variation`,
            caption: style.source === 'official'
                ? 'Variation slot ready for regional or technical adaptations.'
                : 'Add a variation image to deepen this community style.',
            credit: localCredit,
        },
    ];

    return assets;
};

const buildLearnMatches = (style: DoughStyleDefinition, learnArticles: LearnArticleData[], t: TranslateFn) => {
    if (!learnArticles.length) return [];

    const rawTags = new Set(
        [
            style.id,
            ...style.tags,
            ...(style.learnLinkTags || []),
            ...(style.relatedLearn || []),
            style.category,
            style.origin.country,
            style.origin.region,
        ]
            .filter(Boolean)
            .map(tag => slugify(translate(t, tag as string, tag as string))),
    );

    return learnArticles
        .map(article => {
            const articleTokens = new Set(
                [
                    article.id,
                    article.category,
                    article.title,
                    ...(article.tags || []),
                ].map(value => slugify(value))
            );
            let score = 0;
            rawTags.forEach(tag => {
                if (articleTokens.has(tag)) score += 3;
                if (tag && article.title.toLowerCase().includes(tag.replace(/-/g, ' '))) score += 1;
            });
            return { article, score };
        })
        .filter(item => item.score > 0)
        .sort((left, right) => right.score - left.score)
        .slice(0, 4)
        .map(item => item.article);
};

const getStyleKeywordSignals = (style: DoughStyleDefinition, t: TranslateFn) => {
    const normalized = [
        style.id,
        style.category,
        style.fermentationType,
        style.origin.country,
        style.origin.region,
        translate(t, style.name, style.name),
        translate(t, style.description, style.description),
        ...(style.tags || []).map(tag => translate(t, tag, tag)),
    ]
        .filter(Boolean)
        .map(value => slugify(String(value)));

    const signals = new Set(normalized);

    if ((style.technicalProfile?.hydration?.[1] || 0) >= 75) signals.add('high-hydration');
    if (style.fermentationType === 'cold') signals.add('cold-fermentation');
    if (style.category === 'pizza') {
        signals.add('oven-types-and-constraints');
        signals.add('baking-surfaces-and-heat-transfer');
    }
    if (style.category === 'bread') {
        signals.add('flour');
        signals.add('gluten');
        signals.add('fermentation');
    }
    if (style.category === 'pastry') {
        signals.add('fats');
        signals.add('sugars');
        signals.add('lamination');
    }

    return signals;
};

const buildFlavorMatches = (style: DoughStyleDefinition, flavorComponents: FlavorComponent[], t: TranslateFn) => {
    const styleSignals = getStyleKeywordSignals(style, t);

    return flavorComponents
        .map(component => {
            let score = 0;

            if (component.commonStyles.includes(style.id)) score += 6;
            if ((style.pairings?.canonical || []).some(pairing => component.name.toLowerCase().includes(String(pairing).toLowerCase()))) score += 2;
            if (styleSignals.has('pizza') && ['Cheese', 'Sauce', 'Finish', 'Meat'].includes(component.category)) score += 1;
            if (styleSignals.has('bread') && ['Cheese', 'Bread Filling', 'Finish'].includes(component.category)) score += 1;

            const searchableText = `${component.name} ${component.description} ${component.origin} ${component.variations}`.toLowerCase();
            styleSignals.forEach(signal => {
                const phrase = signal.replace(/-/g, ' ');
                if (phrase.length > 3 && searchableText.includes(phrase)) score += 1;
            });

            return { component, score };
        })
        .filter(item => item.score > 0)
        .sort((left, right) => right.score - left.score)
        .slice(0, 6)
        .map(item => item.component);
};

const buildIntegrationLinks = (
    style: DoughStyleDefinition,
    learnArticles: LearnArticleData[],
    flavorComponents: FlavorComponent[],
    t: TranslateFn,
): StyleEditorialViewModel['integrationLinks'] => {
    const matchedLearn = buildLearnMatches(style, learnArticles, t).map(article => article.id);
    const matchedFlavors = buildFlavorMatches(style, flavorComponents, t).map(component => component.id);

    return {
        ...style.integrationLinks,
        calculatorPresetId: style.integrationLinks?.calculatorPresetId || style.id,
        learnArticleIds: style.integrationLinks?.learnArticleIds || matchedLearn,
        flavorComponentIds: style.integrationLinks?.flavorComponentIds || matchedFlavors,
        myLabTemplateIds: style.integrationLinks?.myLabTemplateIds || [],
        communityReferenceIds: style.integrationLinks?.communityReferenceIds || [],
    };
};

export const getStyleCatalogMeta = (style: DoughStyleDefinition, options: AdapterOptions) => {
    const summary = buildEditorialSummary(style, options.t);
    const citations = normalizeCitations(style, options.t);
    const mediaGallery = buildMediaGallery(style, options.t);
    const contentCompleteness = getCompleteness(style, citations, mediaGallery);
    const libraryCuration = getLibraryCuration(style, contentCompleteness);

    return {
        id: style.id,
        title: translate(options.t, style.name, style.name),
        description: translate(options.t, style.description, style.description),
        familyLabel: categoryToFamily(style.category),
        regionLabel: [style.origin.country, style.origin.region].filter(Boolean).join(' · '),
        difficulty: style.technicalProfile?.difficulty || style.difficulty,
        hydrationRange: style.technicalProfile?.hydration || [60, 65],
        signatureTrait: summary.signatureTrait,
        completeness: contentCompleteness,
        editorialStatus: getEditorialStatus(style),
        libraryTier: libraryCuration.tier,
        visibility: libraryCuration.visibility,
        displayOrder: libraryCuration.displayOrder,
        isIndispensable: Boolean(libraryCuration.isIndispensable),
        curationNote: libraryCuration.rationale,
        image: mediaGallery[0]?.src || PLACEHOLDER_IMAGE,
        editorialLine: EDITORIAL_LINES[style.category] || 'A structured dough style ready for deeper study.',
    };
};

export const getStyleEditorialViewModel = (style: DoughStyleDefinition, options: AdapterOptions): StyleEditorialViewModel => {
    const allStyles = options.allStyles || [];
    const learnArticles = options.learnArticles || [];
    const flavorComponents = options.flavorComponents || [];
    const citations = normalizeCitations(style, options.t);
    const citationIds = citations.map(citation => citation.id);
    const summary = buildEditorialSummary(style, options.t);
    const processTimeline = buildProcessTimeline(style, options.t);
    const scienceNotes = buildScienceNotes(style, options.t);
    const variations = buildVariations(style, options.t);
    const flexibilityGuides = buildFlexibilityGuides(style, options.t);
    const comparisonSet = buildComparisonSet(style, allStyles, options.t);
    const mediaGallery = buildMediaGallery(style, options.t);
    const contentCompleteness = getCompleteness(style, citations, mediaGallery);
    const libraryCuration = getLibraryCuration(style, contentCompleteness);

    const citationAnchors = buildCitationAnchors([
        ...buildIdentity(style, options.t, citationIds).map(block => ({ sectionId: 'identity', blockId: block.id, citationIds: block.citationIds })),
        ...buildQuickRead(style, summary).map(block => ({ sectionId: 'quick-read', blockId: block.id, citationIds: block.citationIds })),
        ...processTimeline.map(step => ({ sectionId: 'process', blockId: step.id, citationIds: step.citationIds })),
        ...scienceNotes.map(block => ({ sectionId: 'science', blockId: block.id, citationIds: block.citationIds })),
        ...variations.map(item => ({ sectionId: 'variations', blockId: item.id, citationIds: item.citationIds })),
        ...flexibilityGuides.map(item => ({ sectionId: 'flexibility', blockId: item.id, citationIds: item.citationIds })),
        ...comparisonSet.map(item => ({ sectionId: 'comparisons', blockId: item.id, citationIds: item.citationIds })),
    ]);

    return {
        id: style.id,
        title: translate(options.t, style.name, style.name),
        subtitle: translate(options.t, style.description, style.description),
        familyLabel: categoryToFamily(style.category),
        categoryLabel: categoryToFamily(style.category),
        regionLabel: [style.origin.country, style.origin.region].filter(Boolean).join(' · '),
        difficulty: style.technicalProfile?.difficulty || style.difficulty,
        hydrationRange: style.technicalProfile?.hydration || [60, 65],
        signatureTrait: summary.signatureTrait,
        contentCompleteness,
        editorialStatus: getEditorialStatus(style),
        libraryCuration,
        editorialSummary: summary,
        identity: buildIdentity(style, options.t, citationIds),
        quickRead: buildQuickRead(style, summary),
        technicalProfile: buildTechnicalProfile(style, options.t),
        processTimeline,
        scienceNotes,
        variations,
        flexibilityGuides,
        comparisonSet,
        pairingContext: {
            canonical: style.pairings?.canonical || style.pairingContext?.canonical || [],
            modern: style.pairings?.modern || style.pairingContext?.modern || [],
            regional: style.pairings?.regional || style.pairingContext?.regional || [],
            contextNotes: style.pairingContext?.contextNotes || style.notes.slice(0, 3).map(note => translate(options.t, note, note)),
        },
        integrationLinks: buildIntegrationLinks(style, learnArticles, flavorComponents, options.t),
        mediaGallery,
        citations,
        citationAnchors,
    };
};
