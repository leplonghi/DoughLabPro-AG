import React, { useMemo, useState } from 'react';
import IngredientPageLayout from './IngredientPageLayout';
import { BookOpenIcon, SignalIcon, BeakerIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

type PairingGuide = {
    label: string;
    classic: string[];
    bold: string[];
    technicalNotes: string[];
};

const PAIRING_GUIDES: Record<string, PairingGuide> = {
    mozzarella: {
        label: 'Mozzarella',
        classic: ['Tomato sauce', 'Basil', 'Parmesan', 'Olive oil'],
        bold: ['Roasted grapes', 'Fermented chili honey', 'Anchovy butter'],
        technicalNotes: [
            'Low-intensity lactic flavor makes mozzarella an ideal base layer for stronger toppings.',
            'Its moisture needs balance. Pair with low-water ingredients or pre-drained vegetables.',
            'Acidic toppings help cut fat perception and keep the profile from feeling flat.',
        ],
    },
    gorgonzola: {
        label: 'Gorgonzola',
        classic: ['Walnuts', 'Pear', 'Honey', 'Fior di latte'],
        bold: ['Coffee reduction', 'Roasted pumpkin', 'Burnt orange zest'],
        technicalNotes: [
            'Blue cheeses are aromatic and saline, so they work best with sweetness or rich fat buffers.',
            'Use sparingly or blend with mild cheeses to avoid overwhelming the dough and sauce.',
            'Late finishing protects volatile aromas that disappear under long bake times.',
        ],
    },
    pumpkin: {
        label: 'Pumpkin',
        classic: ['Sage butter', 'Ricotta', 'Pancetta', 'Parmesan'],
        bold: ['Gorgonzola', 'Smoked almonds', 'Calabrian chili'],
        technicalNotes: [
            'Pumpkin brings moisture and sweetness, so it pairs well with salty or bitter counterpoints.',
            'Roasting first concentrates sugars and reduces sogginess on the pizza.',
            'Herbal fat like sage butter creates aromatic lift without burying the natural sweetness.',
        ],
    },
    red_onion: {
        label: 'Red Onion',
        classic: ['Sausage', 'Mozzarella', 'Peppers', 'Black olives'],
        bold: ['Blue cheese', 'Date syrup', 'Sumac yogurt'],
        technicalNotes: [
            'Raw red onion is sulfurous and sharp; cooked onion shifts toward sweetness and softness.',
            'It excels when paired with fatty meats or rich cheeses that can absorb its aromatic punch.',
            'Thin slicing reduces harshness and helps it cook evenly before the crust overbrowns.',
        ],
    },
    mushrooms: {
        label: 'Mushrooms',
        classic: ['Garlic', 'Mozzarella', 'Parsley', 'Thyme'],
        bold: ['Miso cream', 'Truffle pecorino', 'Pickled shallot'],
        technicalNotes: [
            'Mushrooms are umami-rich but water-heavy, so pre-cooking is critical for texture.',
            'They naturally reinforce browned and roasted flavors on the crust.',
            'Acidic garnishes added after the bake prevent the profile from feeling too earthy or muddy.',
        ],
    },
    prosciutto: {
        label: 'Prosciutto',
        classic: ['Arugula', 'Parmesan', 'Fior di latte', 'Fig'],
        bold: ['Charred peach', 'Whipped goat cheese', 'Pistachio pesto'],
        technicalNotes: [
            'Cured ham brings concentrated salt and aroma, so it usually works best post-bake.',
            'Sweet fruit and peppery greens create contrast without competing for intensity.',
            'Adding it after the oven protects texture and prevents overly dry, brittle slices.',
        ],
    },
};

const PairingToolPage: React.FC = () => {
    const { t } = useTranslation();
    const [selectedIngredient, setSelectedIngredient] = useState<keyof typeof PAIRING_GUIDES>('mozzarella');

    const selectedGuide = useMemo(() => PAIRING_GUIDES[selectedIngredient], [selectedIngredient]);

    return (
        <IngredientPageLayout
            title={t('learn.flavor_pairing_tool')}
            description="Choose an ingredient and get practical pairings with the science behind why they work."
            category={t('nav.tools')}
        >
            <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <label htmlFor="pairing-ingredient" className="mb-2 block text-sm font-bold text-slate-700">
                        Ingredient
                    </label>
                    <select
                        id="pairing-ingredient"
                        value={selectedIngredient}
                        onChange={(e) => setSelectedIngredient(e.target.value as keyof typeof PAIRING_GUIDES)}
                        className="block w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 text-sm font-medium text-slate-800 focus:border-dlp-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-dlp-brand/10"
                    >
                        {Object.entries(PAIRING_GUIDES).map(([value, guide]) => (
                            <option key={value} value={value}>
                                {guide.label}
                            </option>
                        ))}
                    </select>
                    <p className="mt-3 text-sm text-slate-500">
                        Use this as a fast sensory compass when you want balance, contrast, and fewer random topping experiments.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                            <BookOpenIcon className="h-5 w-5 text-slate-500" />
                            Classic Pairings
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-slate-700">
                            {selectedGuide.classic.map((item) => (
                                <li key={item} className="rounded-lg bg-white px-3 py-2 shadow-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <SignalIcon className="h-5 w-5 text-amber-500" />
                            Bold Pairings
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-slate-700">
                            {selectedGuide.bold.map((item) => (
                                <li key={item} className="rounded-lg bg-white px-3 py-2 shadow-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                            <BeakerIcon className="h-5 w-5 text-emerald-600" />
                            Technical Notes
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                            {selectedGuide.technicalNotes.map((note) => (
                                <li key={note} className="rounded-lg bg-white px-3 py-3 shadow-sm">
                                    {note}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </IngredientPageLayout>
    );
};

export default PairingToolPage;
