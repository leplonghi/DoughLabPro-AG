import React, { useState, useMemo } from 'react';
import { Page, YeastType } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import LevainLayout from './LevainLayout';
import MyLabLayout from '../MyLabLayout';
import { PlusCircleIcon, SparklesIcon, LockClosedIcon, StarIcon, ClockIcon, BeakerIcon, BookOpenIcon } from '@/components/ui/Icons';
import { useCalculator } from '@/contexts/CalculatorContext';
import { getArticleById } from '@/data/learn';
import LevainFeedingForm from './components/LevainFeedingForm';
import LevainProfile from './components/LevainProfile';
import LevainInsights from './components/LevainInsights';
import { LockFeature } from '@/components/auth/LockFeature';
import LevainAssistant from './components/LevainAssistant';
import { calculateLevainStats, getEmotionColor } from '@/logic/levainPetUtils';
import LevainAvatar from '@/components/LevainAvatar';
import { canUseFeature, getCurrentPlan } from '@/permissions';
import { SocialShare } from '@/marketing/social/SocialShare';
import { useTranslation } from '@/i18n';

interface LevainDetailPageProps {
    levainId: string | null;
    onNavigate: (page: Page, params?: string) => void;
}

const LevainDetailPage: React.FC<LevainDetailPageProps> = ({ levainId, onNavigate }) => {
  const { t } = useTranslation();
    const { levains, openPaywall, user } = useUser();
    const [activeTab, setActiveTab] = useState<'summary' | 'feedings' | 'profile' | 'insights'>('summary');
    const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
    const [isAssistantOpen, setIsAssistantOpen] = useState(false);
    const { setConfig } = useCalculator();

    const plan = getCurrentPlan(user);

    const levain = useMemo(() => levains.find(l => l.id === levainId), [levains, levainId]);

    const handleUseInBake = () => {
        if (!levain) return;
        setConfig(prev => ({
            ...prev,
            yeastType: YeastType.USER_LEVAIN,
            levainId: levain.id
        }));
        onNavigate('calculator');
    };

    const stats = useMemo(() => {
        if (!levain) return null;
        return calculateLevainStats(levain);
    }, [levain]);

    if (!levain || !stats) {
        return (
            <MyLabLayout activePage="mylab/levain" onNavigate={onNavigate}>
                <div className="p-8 text-center">
                    <h2 className="text-xl font-bold text-slate-900 ">{t('mylab.levain_not_found')}</h2>
                    <button onClick={() => onNavigate('mylab/levain')} className="mt-4 text-dlp-brand-hover  hover:underline">{t('mylab.back_to_list')}</button>
                </div>
            </MyLabLayout>
        );
    }

    const emotionColor = getEmotionColor(stats.emotion);

    const renderSummary = () => (
        <div className="space-y-6 animate-fade-in">
            {/* Hero Card */}
            <div className="rounded-2xl border border-slate-200  bg-white  p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 ${emotionColor.split(' ')[1]}`}></div>

                <div className="mt-4 mb-4 transform hover:scale-105 transition-transform duration-300">
                    <LevainAvatar emotion={stats.emotion} size="lg" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900 ">{levain.name}</h2>
                <p className="text-sm text-slate-500  font-medium uppercase tracking-wider mt-1">Level {stats.level} Starter</p>

                {/* Health Bar */}
                <div className="w-full max-w-xs mt-6">
                    <div className="flex justify-between text-xs font-bold text-slate-500  mb-1">
                        <span>{t('mylab.health')}</span>
                        <span>{stats.healthScore.toFixed(0)}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100  rounded-full overflow-hidden ring-1 ring-slate-200 ">
                        <div
                            className={`h-full transition-all duration-1000 ease-out ${stats.healthScore > 50 ? 'bg-dlp-brand' : stats.healthScore > 20 ? 'bg-amber-500' : 'bg-red-500'}`}
                            style={{ width: `${stats.healthScore}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-slate-400  mt-2">
                        {stats.nextFeedingDue
                            ? `Next feeding due: ${stats.nextFeedingDue.toLocaleString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' })}`
                            : 'Starter is resting.'
                        }
                    </p>
                </div>

                <div className="mt-8 w-full flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => setIsFeedModalOpen(true)}
                        className="flex items-center justify-center gap-2 rounded-xl bg-dlp-brand py-3 px-8 font-bold text-white shadow-lg shadow-dlp-brand/20 transition-all hover:bg-dlp-brand hover:text-white-hover hover:scale-105 active:scale-95"
                    >
                        <PlusCircleIcon className="h-5 w-5" />{t('mylab.feed_now')}</button>

                    <button
                        onClick={handleUseInBake}
                        className="flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 text-slate-700 py-3 px-6 font-bold shadow-sm hover:bg-slate-50 transition-all hover:scale-105 active:scale-95"
                    >
                        <BeakerIcon className="h-5 w-5 text-blue-500" />{t('mylab.use_in_bake')}</button>

                    <LockFeature featureKey="levain.lab_full" customMessage="Unlock AI Assistant with Lab Pro." className="w-full sm:w-auto">
                        <button
                            onClick={() => setIsAssistantOpen(true)}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-indigo-50  text-indigo-600  border border-indigo-100  py-3 px-6 font-bold hover:bg-indigo-100 transition-colors"
                        >
                            <SparklesIcon className="h-5 w-5" />{t('mylab.ask_ai')}</button>
                    </LockFeature>

                    <SocialShare
                        title={`Meet ${levain.name}, my sourdough starter!`}
                        data={levain}
                        type="levain"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-slate-100 text-slate-700 py-3 px-6 font-bold hover:bg-slate-200 transition-colors"
                    />
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white  p-4 rounded-2xl border border-slate-200  shadow-sm">
                    <p className="text-xs text-slate-500  uppercase font-bold">{t('form.hydration')}</p>
                    <p className="text-xl font-bold text-slate-800 ">{levain.hydration}%</p>
                </div>
                <div className="bg-white  p-4 rounded-2xl border border-slate-200  shadow-sm">
                    <p className="text-xs text-slate-500  uppercase font-bold">{t('mylab.age')}</p>
                    <p className="text-xl font-bold text-slate-800 ">{Math.floor((Date.now() - new Date(levain.createdAt).getTime()) / (1000 * 60 * 60 * 24))} days</p>
                </div>
            </div>

            {/* Learn About Levain Behavior */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookOpenIcon className="h-5 w-5 text-dlp-brand" />{t('mylab.learn_about_levain_behavior')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { id: 'yeast-leavening-agents', summary: 'Understand the microbiology of wild yeast and bacteria in your starter.' },
                        { id: 'excess-acidity', summary: 'Learn how to control acid load to prevent gluten degradation.' },
                        { id: 'weak-gluten-structure', summary: 'Diagnose and fix weak dough caused by proteolysis or over-fermentation.' }
                    ].map(item => {
                        const article = getArticleById(item.id);
                        if (!article) return null;
                        return (
                            <a
                                key={item.id}
                                href={`#/learn/article/${article.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-dlp-brand hover:shadow-md transition-all group"
                            >
                                <h4 className="font-bold text-slate-800 group-hover:text-dlp-brand-hover transition-colors mb-2 line-clamp-1">
                                    {article.title}
                                </h4>
                                <p className="text-xs text-slate-600 line-clamp-3">
                                    {item.summary}
                                </p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const renderFeedings = () => {
        const renderHistoryList = (history: typeof levain.feedingHistory) => (
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {history.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(log => (
                    <div key={log.id} className="flex flex-col gap-1 rounded-xl bg-slate-50  p-4 text-sm border border-slate-100  hover:border-lime-200 transition-colors">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-slate-700 ">{new Date(log.date).toLocaleDateString()}</span>
                            <span className="text-xs text-slate-400  flex items-center gap-1"><ClockIcon className="h-3 w-3" /> {new Date(log.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div className="flex gap-4 mt-2 text-xs text-slate-600 ">
                            <span className="bg-white  px-2 py-0.5 rounded border border-slate-200  font-mono">Ratio: {log.ratio || '1:1:1'}</span>
                            <span>{log.flourAmount}g Flour / {log.waterAmount}g Water</span>
                        </div>
                        {log.notes && <p className="text-xs text-slate-500  italic mt-2">"{log.notes}"</p>}
                    </div>
                ))}
            </div>
        );

        return (
            <div className="rounded-2xl border border-slate-200  bg-white  p-6 shadow-sm animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900 ">{t('mylab.recent_feedings')}</h3>
                </div>
                {levain.feedingHistory.length === 0 ? (
                    <p className="text-sm text-center py-8 text-slate-500 ">{t('mylab.no_feedings_recorded_yet')}</p>
                ) : (
                    <LockFeature
                        featureKey="levain.lab_full"
                        fallback={
                            <>
                                {renderHistoryList(levain.feedingHistory.slice(0, 3))}
                                {levain.feedingHistory.length > 3 && (
                                    <div className="p-6 text-center bg-gradient-to-b from-slate-50 to-white   rounded-2xl border border-dashed border-lime-200  mt-6">
                                        <div className="flex justify-center mb-3 text-dlp-brand-hover ">
                                            <LockClosedIcon className="h-8 w-8" />
                                        </div>
                                        <p className="text-sm font-bold text-slate-800  mb-1">
                                            Pro keeps your full Levain feeding history forever.
                                        </p>
                                        <button
                                            onClick={() => openPaywall('levain')}
                                            className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-white bg-dlp-brand px-5 py-2.5 rounded-full hover:bg-dlp-brand hover:text-white-hover shadow-lg shadow-dlp-brand/20 transition-transform hover:scale-105 active:scale-95"
                                        >
                                            <StarIcon className="h-3 w-3" />{t('mylab.unlock_full_history')}</button>
                                    </div>
                                )}
                            </>
                        }
                    >
                        {renderHistoryList(levain.feedingHistory)}
                    </LockFeature>
                )}
            </div>
        );
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'summary': return renderSummary();
            case 'feedings': return renderFeedings();
            case 'profile': return <LevainProfile levain={levain} />;
            case 'insights': return (
                <LockFeature
                    featureKey="levain.lab_full"
                    customMessage="Track your Levain like a scientist. Visualize activity cycles, temperature correlation, and health scoring available in Pro."
                    className="min-h-[300px] flex items-center justify-center rounded-2xl overflow-hidden"
                >
                    <LevainInsights levain={levain} />
                </LockFeature>
            );
            default: return null;
        }
    }

    return (
        <MyLabLayout activePage="mylab/levain" onNavigate={onNavigate}>
            <LevainLayout levainName={levain.name} activeTab={activeTab} onTabChange={setActiveTab}>
                {renderTabContent()}
            </LevainLayout>
            <LevainFeedingForm
                isOpen={isFeedModalOpen}
                onClose={() => setIsFeedModalOpen(false)}
                levainId={levain.id}
            />
            <LevainAssistant
                isOpen={isAssistantOpen}
                onClose={() => setIsAssistantOpen(false)}
                levain={levain}
            />
        </MyLabLayout>
    );
};

export default LevainDetailPage;



