import { DoughStyleDefinition, EditorialTextBlock, StyleComparisonItem } from '@/types/styles';
import { arepa_corn_flatbread } from '@/data/styles/bread/arepa_corn_flatbread';
import { bagels_classic } from '@/data/styles/bread/bagels_classic';
import { baguette_tradition_francaise } from '@/data/styles/bread/baguette_tradition_francaise';
import { ciabatta_high_hydration } from '@/data/styles/bread/ciabatta_high_hydration';
import { focaccia_genovese } from '@/data/styles/bread/focaccia_genovese';
import { japanese_shokupan } from '@/data/styles/bread/japanese_shokupan';
import { naan_flatbread } from '@/data/styles/bread/naan_flatbread';
import { wheat_tortilla } from '@/data/styles/bread/wheat_tortilla';
import { pain_au_chocolat } from '@/data/styles/pastry/pain_au_chocolat';
import { brazilian_pizzeria_gas_deck } from '@/data/styles/pizza/brazilian_pizzeria_gas_deck';
import { chicago_deep_dish } from '@/data/styles/pizza/chicago_deep_dish';
import { detroit_style_classic } from '@/data/styles/pizza/detroit_style_classic';
import { neapolitan_avpn_classic } from '@/data/styles/pizza/neapolitan_avpn_classic';
import { new_haven_apizza } from '@/data/styles/pizza/new_haven_apizza';
import { new_york_slice_shop } from '@/data/styles/pizza/new_york_slice_shop';
import { roman_scrocchiarella } from '@/data/styles/pizza/roman_scrocchiarella';
import { roman_teglia_pan } from '@/data/styles/pizza/roman_teglia_pan';
import { sicilian_grandma_pan } from '@/data/styles/pizza/sicilian_grandma_pan';

const mapReferenceSourceType = (url?: string) => {
    if (!url) return 'other' as const;
    if (url.includes('gov') || url.includes('org') || url.includes('consorzio') || url.includes('avpn') || url.includes('buddyspizza')) return 'institutional' as const;
    if (url.includes('youtube') || url.includes('vimeo')) return 'video' as const;
    if (url.includes('amazon') || url.includes('rizzoli') || url.includes('books')) return 'book' as const;
    return 'article' as const;
};

const textBlocks = (items: string[], prefix: string, title: string): EditorialTextBlock[] =>
    items.slice(0, 4).map((body, index) => ({
        id: `${prefix}-${index + 1}`,
        title: index === 0 ? title : undefined,
        body,
        citationIds: ['ref-1'],
    }));

const buildComparisons = (style: any): StyleComparisonItem[] =>
    (style.styleComparisons || []).slice(0, 4).map((value, index) => {
        const [targetStyleName, difference] = value.split(' - ');
        return {
            id: `${style.id}-comparison-${index + 1}`,
            targetStyleName: targetStyleName || `Related style ${index + 1}`,
            difference: difference || value,
            whenToChoose: `Choose ${style.title} when its process and service behavior better match your target result.`,
            riskOfConfusion: 'This comparison is intentionally simplified and should be read alongside process, bake, and service differences.',
            citationIds: ['ref-1'],
        };
    });

const convertGoldStyle = (style: any): Partial<DoughStyleDefinition> => ({
    editorialStatus: 'official',
    contentCompleteness: 'expert',
    editorialSummary: {
        promise: style.intro,
        bestFor: style.technicalProfile.recommendedUse?.[0] || `${style.title} bakers who want a more explicit technical reference page.`,
        whenToUse: style.technicalProfile.recommendedUse?.[1] || `Use this style when its regional logic and bake profile fit your oven and service context.`,
        notIdealFor: style.risks?.[0] || 'Not ideal when your workflow conflicts with the style’s core bake and fermentation behavior.',
        signatureTrait: style.flavorProfile?.textureNotes?.[0] || style.technicalFoundations?.[0] || style.title,
    },
    history: style.history,
    references: (style.references || []).map((reference) => ({
        source: reference.title,
        author: reference.author,
        year: reference.year ? String(reference.year) : undefined,
        url: reference.url,
        sourceType: mapReferenceSourceType(reference.url),
    })),
    citations: (style.references || []).map((reference, index) => ({
        id: `ref-${index + 1}`,
        label: String(index + 1),
        sourceType: mapReferenceSourceType(reference.url),
        title: reference.title,
        authors: reference.author ? [reference.author] : undefined,
        year: reference.year ? String(reference.year) : undefined,
        url: reference.url,
    })),
    identity: [
        {
            id: `${style.id}-identity-intro`,
            title: 'Editorial identity',
            body: style.intro,
            citationIds: ['ref-1'],
        },
        {
            id: `${style.id}-identity-history`,
            title: 'Historical context',
            body: style.history,
            citationIds: ['ref-1'],
        },
        ...(style.culturalContext?.significance?.length ? textBlocks(style.culturalContext.significance, `${style.id}-identity-significance`, 'Cultural significance') : []),
    ].slice(0, 4),
    scienceNotes: [
        ...textBlocks(style.technicalFoundations || [], `${style.id}-science-foundations`, 'Technical foundation'),
        ...textBlocks(style.doughImpact || [], `${style.id}-science-dough`, 'Dough behavior'),
        ...textBlocks(style.bakingImpact || [], `${style.id}-science-bake`, 'Baking behavior'),
    ].slice(0, 6),
    variations: (style.regionalVariants || []).slice(0, 4).map((variant, index) => ({
        id: `${style.id}-variation-${index + 1}`,
        name: variant.split(' - ')[0] || `Variation ${index + 1}`,
        category: 'regional',
        changes: variant,
        rationale: `This variation helps situate ${style.title} inside a broader regional or technical family.`,
        expectedResult: 'Use this branch to compare how process and service context shift the final style expression.',
        citationIds: ['ref-1'],
    })),
    flexibilityGuides: (style.climateScenarios || []).slice(0, 4).map((scenario, index) => ({
        id: `${style.id}-flex-${index + 1}`,
        scenario: scenario.split(':')[0] || `Scenario ${index + 1}`,
        processChanges: scenario,
        tradeoffs: 'Adapting to climate or production constraints changes timing, structure, or final texture; log those tradeoffs in My Lab.',
        citationIds: ['ref-1'],
    })),
    comparisonSet: buildComparisons(style),
    pairingContext: {
        canonical: style.flavorProfile?.pairingRecommendations?.slice(0, 2) || [],
        modern: style.flavorProfile?.pairingRecommendations?.slice(2, 4) || [],
        regional: style.flavorProfile?.pairingRecommendations?.slice(4, 6) || [],
        contextNotes: style.flavorProfile?.flavorEvolution?.slice(0, 2) || [],
    },
    integrationLinks: {
        calculatorPresetId: style.id,
    },
});

const GOLD_STANDARD_SOURCE_BY_ID: Record<string, any> = {
    'pizza-napoletana': neapolitan_avpn_classic,
    'pizza-teglia-romana': roman_teglia_pan,
    'pizza-tonda-romana': roman_scrocchiarella,
    'focaccia-genovese': focaccia_genovese,
    'ciabatta-classic': ciabatta_high_hydration,
    brazilian_gas_deck: brazilian_pizzeria_gas_deck,
    arepa: arepa_corn_flatbread,
    new_york_slice_v2: new_york_slice_shop,
    detroit_style_classic: detroit_style_classic,
    chicago_deep_dish: chicago_deep_dish,
    new_haven_apizza: new_haven_apizza,
    grandma_style_v2: sicilian_grandma_pan,
    nyc_bagel: bagels_classic,
    flour_tortilla_sonora: wheat_tortilla,
    baguette_tradition_francaise: baguette_tradition_francaise,
    japanese_shokupan: japanese_shokupan,
    naan_flatbread: naan_flatbread,
    pain_au_chocolat: pain_au_chocolat,
};

export const STYLE_GOLD_STANDARD_OVERRIDES: Record<string, Partial<DoughStyleDefinition>> = Object.fromEntries(
    Object.entries(GOLD_STANDARD_SOURCE_BY_ID).map(([id, style]) => [id, convertGoldStyle(style)]),
);
