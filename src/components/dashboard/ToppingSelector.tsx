
import React, { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { Check, ChevronsUpDown, Search, Plus } from 'lucide-react';
import { ToppingCombination } from '@/types';
import { useTranslation } from '@/i18n';

interface ToppingSelectorProps {
    selectedId: string;
    toppings: ToppingCombination[];
    onChange: (id: string) => void;
    onNew: () => void;
}

export const ToppingSelector: React.FC<ToppingSelectorProps> = ({
    selectedId,
    toppings,
    onChange,
    onNew
}) => {
    const { t } = useTranslation();
    const [query, setQuery] = useState('');

    const selectedTopping = toppings.find(t => t.id === selectedId);

    const filteredToppings =
        query === ''
            ? toppings
            : toppings.filter((topping) =>
                topping.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            );

    // Grouping
    const grouped = filteredToppings.reduce((acc, topping) => {
        const cat = topping.category || 'other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(topping);
        return acc;
    }, {} as Record<string, ToppingCombination[]>);

    return (
        <div className="w-full">
            <Combobox value={selectedId} onChange={onChange}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-slate-50 border border-slate-200 text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm transition-all hover:border-slate-300">
                        <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-slate-900 bg-transparent focus:ring-0 font-medium placeholder-slate-400"
                            displayValue={(id: string) => {
                                const found = toppings.find(t => t.id === id);
                                return found ? found.name : '';
                            }}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder={t('common:select_flavor_profile')}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronsUpDown
                                className="h-4 w-4 text-slate-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options anchor="bottom" className="w-[var(--input-width)] max-h-60 overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50 empty:invisible">
                            {filteredToppings.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none px-4 py-2 text-slate-500 italic">{t('common:nothing_found')}</div>
                            ) : (
                                <>
                                    {Object.entries(grouped).map(([category, items]) => (
                                        <React.Fragment key={category}>
                                            <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/50 sticky top-0 backdrop-blur-sm border-y border-slate-50">
                                                {category}
                                            </div>
                                            {(items as ToppingCombination[]).map((person) => (
                                                <Combobox.Option
                                                    key={person.id}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 transition-colors ${active ? 'bg-[#51a145]/10 text-[#2d5a27]' : 'text-slate-900'
                                                        }`
                                                    }
                                                    value={person.id}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <div className="flex flex-col">
                                                                <span className={`block truncate ${selected ? 'font-bold' : 'font-medium'}`}>
                                                                    {person.name}
                                                                </span>
                                                                <span className={`block truncate text-[10px] ${active ? 'text-[#51a145]' : 'text-slate-400'}`}>
                                                                    {person.referenceTag}
                                                                </span>
                                                            </div>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#51a145]">
                                                                    <Check className="h-4 w-4" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                </>
                            )}

                            {/* Add New Button always visible at bottom */}
                            <div className="border-t border-slate-100 mt-1 pt-1 p-1">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onNew();
                                    }}
                                    className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-bold text-[#51a145] hover:bg-[#51a145]/10 rounded-lg transition-colors cursor-pointer"
                                >
                                    <Plus size={16} />{t('common:create_new_preset')}</button>
                            </div>
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};
