import React, { useState } from 'react';
import { DoughStyleDefinition } from '@/types/styles';
import { LibraryPageLayout } from '@/components/ui/LibraryPageLayout';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import { TechnicalBadge } from '@/components/ui/TechnicalBadge';
import { ProFeatureLock } from '@/components/ui/ProFeatureLock';
import { useUser } from '@/contexts/UserProvider';
import {
    BookOpenIcon,
    BeakerIcon,
    ClockIcon,
    GlobeAltIcon,
    SparklesIcon,
    ArrowLeftIcon,
    HeartIcon
} from '@/components/ui/Icons';
import ShareButton from '@/components/ui/ShareButton';
import { allLearnArticles } from '@/data/learn';
import { LearnArticleData } from '@/types/learn';
import { CalculatorIcon } from '@/components/ui/Icons';



interface StyleDetailPageProps {
    style: DoughStyleDefinition;
    onLoadAndNavigate: (style: DoughStyleDefinition) => void;
    onBack: () => void;
}

type TabType = 'essentials' | 'technique' | 'history' | 'variations' | 'experiments';

export const StyleDetailPage: React.FC<StyleDetailPageProps> = ({ style, onLoadAndNavigate, onBack }) => {
    const { isFavorite, toggleFavorite, hasProAccess } = useUser();
    const [activeTab, setActiveTab] = useState<TabType>('essentials');
    const favorited = isFavorite(style.id);

    const renderTabs = () => (
        <div className="flex overflow-x-auto border-b border-slate-200 mb-6 no-scrollbar">
            {[
                { id: 'essentials', label: 'Essentials' },
                { id: 'technique', label: 'Technique' },
                { id: 'history', label: 'History & Culture' },
                { id: 'variations', label: 'Variations' },
                { id: 'experiments', label: 'Experiments (MyLab)' },
            ].map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`px-6 py-3 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id
                        ? 'border-lime-500 text-slate-900'
                        : 'border-transparent text-slate-500 hover:text-slate-700'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );

    const renderEssentials = () => (
        <div className="space-y-8 animate-fade-in">
            {/* Technical Summary */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <SectionHeader title="Technical Profile" icon={<BeakerIcon className="h-5 w-5 text-indigo-600" />} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <TechnicalBadge
                        label="Hydration"
                        value={`${style.technicalProfile?.hydration[0]}-${style.technicalProfile?.hydration[1]}`}
                        unit="%"
                        color="blue"
                    />
                    <TechnicalBadge
                        label="Salt"
                        value={`${style.technicalProfile?.salt[0]}-${style.technicalProfile?.salt[1]}`}
                        unit="%"
                        color="slate"
                    />
                    <TechnicalBadge
                        label="Fermentation"
                        value={style.technicalProfile?.fermentation?.bulk || 'Standard'}
                        color="green"
                    />
                    <TechnicalBadge
                        label="Difficulty"
                        value={style.technicalProfile?.difficulty || 'Medium'}
                        color={style.technicalProfile?.difficulty === 'Expert' ? 'red' : 'slate'}
                    />
                </div>
            </section>

            {/* Description */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">About this Style</h3>
                <p className="text-slate-600 leading-relaxed">{style.description}</p>
            </section>

            {/* Pro Tips */}
            <section className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <SparklesIcon className="h-5 w-5" /> Pro Tips
                </h3>
                <ul className="space-y-2">
                    {style.notes?.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-amber-800">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                            {note}
                        </li>
                    ))}
                    {(!style.notes || style.notes.length === 0) && (
                        <li className="text-sm text-amber-800 italic">No specific pro tips available for this style.</li>
                    )}
                </ul>
            </section>

            {/* Related Learn Articles */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <SectionHeader title="Related Knowledge" icon={<BookOpenIcon className="h-5 w-5 text-indigo-600" />} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {allLearnArticles
                        .filter(article =>
                            article.tags?.some(tag => style.tags?.includes(tag))
                        )
                        .slice(0, 4)
                        .map(article => (
                            <div key={article.id} className="flex gap-3 p-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group cursor-pointer">
                                {article.thumbnailUrl && (
                                    <img src={article.thumbnailUrl} alt={article.title} className="w-16 h-16 rounded-lg object-cover" />
                                )}
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm group-hover:text-indigo-700 line-clamp-2">{article.title}</h4>
                                    <span className="text-xs text-slate-500 mt-1 block">{article.category}</span>
                                </div>
                            </div>
                        ))}
                    {allLearnArticles.filter(article => article.tags?.some(tag => style.tags?.includes(tag))).length === 0 && (
                        <p className="text-sm text-slate-500 italic col-span-2">Explore the Learn section for general baking science.</p>
                    )}
                </div>
            </section>
        </div>
    );

    const renderTechnique = () => (
        <div className="space-y-8 animate-fade-in">
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <SectionHeader title="Process & Handling" icon={<ClockIcon className="h-5 w-5 text-slate-600" />} />
                <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600">
                        <strong>Recommended Use:</strong> {style.technicalProfile?.recommendedUse}
                    </p>
                    <p className="text-slate-600 mt-4">
                        <strong>Oven Setup:</strong> {style.technicalProfile?.ovenRecommendations || style.technicalProfile?.oven?.notes}
                    </p>
                    {style.technicalProfile?.prefermentDescription && (
                        <p className="text-slate-600 mt-4">
                            <strong>Preferment:</strong> {style.technicalProfile.prefermentDescription}
                        </p>
                    )}
                </div>
            </section>
        </div>
    );

    const renderHistory = () => (
        <div className="space-y-8 animate-fade-in">
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <SectionHeader title="Origins & Culture" icon={<GlobeAltIcon className="h-5 w-5 text-teal-600" />} />
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="text-xs font-bold text-slate-500 uppercase block">Country</span>
                        <span className="font-semibold text-slate-800">{style.origin.country}</span>
                    </div>
                    {style.origin.region && (
                        <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
                            <span className="text-xs font-bold text-slate-500 uppercase block">Region</span>
                            <span className="font-semibold text-slate-800">{style.origin.region}</span>
                        </div>
                    )}
                    {style.origin.period && (
                        <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">
                            <span className="text-xs font-bold text-slate-500 uppercase block">Era</span>
                            <span className="font-semibold text-slate-800">{style.origin.period}</span>
                        </div>
                    )}
                </div>
                <div className="prose prose-slate max-w-none">
                    <h3 className="font-bold text-slate-900">History</h3>
                    <p>{style.history}</p>
                    {style.culturalContext && (
                        <>
                            <h3 className="font-bold text-slate-900 mt-6">Cultural Context</h3>
                            <p>{style.culturalContext}</p>
                        </>
                    )}
                </div>
            </section>

            {style.references && style.references.length > 0 && (
                <section className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">References</h3>
                    <ul className="space-y-3">
                        {style.references.map((ref, idx) => (
                            <li key={idx} className="text-sm text-slate-600">
                                <span className="font-semibold">{ref.source}</span>
                                {ref.author && <span> by {ref.author}</span>}
                                {ref.year && <span> ({ref.year})</span>}
                                {ref.url && (
                                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-600 hover:underline">
                                        Link
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );

    const renderVariations = () => (
        <div className="space-y-6 animate-fade-in">
            <ProFeatureLock featureKey="styles.detail" customMessage="Unlock full variation details with Pro." origin="styles.detail">
                {style.variations && style.variations.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {style.variations.map((variation) => (
                            <div key={variation.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-slate-800">{variation.title}</h4>
                                    {variation.type && (
                                        <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full uppercase">
                                            {variation.type}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-slate-600 mb-3">{variation.description}</p>
                                {variation.technicalAdjustments && (
                                    <div className="text-xs bg-slate-50 p-2 rounded border border-slate-100">
                                        <span className="font-semibold text-slate-700">Adjustments: </span>
                                        {variation.technicalAdjustments.hydration && (
                                            <span className="mr-2">Hydration: {variation.technicalAdjustments.hydration[0]}-{variation.technicalAdjustments.hydration[1]}%</span>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                        <p className="text-slate-500">No recorded variations for this style yet.</p>
                    </div>
                )}
            </ProFeatureLock>
        </div>
    );

    const renderExperiments = () => (
        <div className="space-y-6 animate-fade-in">
            <ProFeatureLock featureKey="styles.detail" customMessage="Unlock MyLab experiments for this style." origin="styles.detail">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                    <SectionHeader title="MyLab Experiments" icon={<BeakerIcon className="h-5 w-5 text-rose-600" />} />
                    <p className="text-slate-600 mb-6">
                        Suggested experiments to master this style in your environment.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-100">
                            <h4 className="font-bold text-rose-900 mb-2">Hydration Ladder</h4>
                            <p className="text-sm text-rose-800">Test 3 batches at {style.technicalProfile?.hydration[0]}%, {(style.technicalProfile?.hydration[0] || 60) + 2}%, and {(style.technicalProfile?.hydration[0] || 60) + 4}% hydration.</p>
                        </div>
                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                            <h4 className="font-bold text-indigo-900 mb-2">Fermentation Control</h4>
                            <p className="text-sm text-indigo-800">Compare ambient proof vs. 24h cold retard.</p>
                        </div>
                    </div>
                </div>
            </ProFeatureLock>
        </div>
    );

    return (
        <LibraryPageLayout>
            {/* Sticky Header */}
            <div className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center justify-between transition-all mb-6 -mx-4 sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8">
                <button onClick={onBack} className="text-sm font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1">
                    <ArrowLeftIcon className="h-4 w-4" /> Back
                </button>
                <span className="font-bold text-slate-800 hidden sm:block">{style.name}</span>
                <div className="flex gap-2">
                    <button
                        onClick={() => toggleFavorite({
                            id: style.id,
                            type: 'style',
                            title: style.name,
                            metadata: { category: style.category }
                        })}
                        className={`p-2 rounded-full hover:bg-slate-100 ${favorited ? 'text-pink-500' : 'text-slate-400'}`}
                    >
                        <HeartIcon className={`h-5 w-5 ${favorited ? 'fill-current' : ''}`} />
                    </button>
                    <ShareButton title={style.name} text={style.description} className="p-2 rounded-full hover:bg-slate-100 text-slate-400" />
                    <ProFeatureLock featureKey="styles.detail" customMessage="Unlock calculator integration" origin="styles.detail">
                        <button
                            onClick={() => onLoadAndNavigate(style)}
                            className="ml-2 bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold py-2 px-4 rounded-xl shadow-sm transition-all flex items-center gap-2"
                        >
                            <CalculatorIcon className="h-4 w-4" />
                            <span className="hidden sm:inline">Use in Calculator</span>
                        </button>
                    </ProFeatureLock>
                </div>
            </div>

            <PageHero
                title={style.name}
                subtitle={style.family}
                badges={
                    <>
                        <CategoryBadge category={style.category} />
                        {style.isCanonical && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-500/20 text-sky-200 border border-sky-500/30">
                                Official Standard
                            </span>
                        )}
                    </>
                }
            />

            {renderTabs()}

            <div className="min-h-[400px]">
                {activeTab === 'essentials' && renderEssentials()}
                {activeTab === 'technique' && renderTechnique()}
                {activeTab === 'history' && renderHistory()}
                {activeTab === 'variations' && renderVariations()}
                {activeTab === 'experiments' && renderExperiments()}
            </div>
        </LibraryPageLayout>
    );
};
