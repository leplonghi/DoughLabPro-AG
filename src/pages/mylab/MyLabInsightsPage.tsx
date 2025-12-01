import React from 'react';
import { Page } from '../../types';
import MyLabLayout from './MyLabLayout';
import { LockFeature } from '@/components/auth/LockFeature';
import { ChartBarIcon } from '@/components/ui/Icons';

const InsightCard: React.FC<{
    title: string;
    description: string;
    linkText: string;
    onLinkClick: () => void;
}> = ({ title, description, linkText, onLinkClick }) => (
    <div className="rounded-2xl border border-slate-200  bg-white  p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
        <div>
            <h3 className="text-lg font-bold text-slate-900 ">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 ">{description}</p>
        </div>
        <button onClick={onLinkClick} className="mt-4 text-sm font-semibold text-lime-600  hover:underline text-left">
            {linkText} &rarr;
        </button>
    </div>
);

const MyLabInsightsPage: React.FC<{ onNavigate: (page: Page) => void }> = ({ onNavigate }) => {
    return (
        <MyLabLayout activePage="mylab/insights" onNavigate={onNavigate}>
            <div className="animate-fade-in">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 ">Insights</h1>
                    <p className="mt-2 text-slate-600 ">
                        Analyze patterns and trends in your baking.
                    </p>
                </div>

                <LockFeature
                    featureKey="mylab.unlimited_advanced"
                    customMessage="Unlock deep insights into your baking habits, flour usage, and sensory notes with Lab Pro."
                    className="min-h-[25rem] flex items-center justify-center rounded-2xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        <InsightCard
                            title="Favorite Doughs"
                            description="See your most used dough recipes."
                            linkText="View My Doughs"
                            onLinkClick={() => onNavigate('mylab/massas')}
                        />
                        <InsightCard
                            title="Favorite Flours"
                            description="The flour you log most frequently."
                            linkText="Go to My Flours"
                            onLinkClick={() => onNavigate('mylab/farinhas')}
                        />
                        <InsightCard
                            title="Most Used Styles"
                            description="Discover which style you explore most."
                            linkText="View My Bakes"
                            onLinkClick={() => onNavigate('mylab/fornadas')}
                        />
                        <InsightCard
                            title="Sensory Notes"
                            description="A summary of common keywords from your notes."
                            linkText="Open Sensory Journal"
                            onLinkClick={() => onNavigate('mylab/diario-sensorial')}
                        />
                        <InsightCard
                            title="Common Errors"
                            description="Identify patterns in problems you log."
                            linkText="View My Bakes"
                            onLinkClick={() => onNavigate('mylab/fornadas')}
                        />
                        <InsightCard
                            title="MyLab Suggestions"
                            description="Based on your data, MyLab suggests experiments."
                            linkText="Go to Comparisons"
                            onLinkClick={() => onNavigate('mylab/comparacoes')}
                        />
                    </div>
                </LockFeature>
            </div>
        </MyLabLayout>
    );
};

export default MyLabInsightsPage;
