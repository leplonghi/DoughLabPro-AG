import React from 'react';
import { LearnArticleData } from '@/types/learn';
import { HeartIcon } from '@/components/ui/Icons';

interface GrandmaRendererProps {
    data: LearnArticleData['grandmaVersion'];
}

export const GrandmaRenderer: React.FC<GrandmaRendererProps> = ({ data }) => {
    if (!data) return null;

    return (
        <div className="bg-[#FFF8F0] text-stone-800 p-8 rounded-3xl shadow-xl border-4 border-amber-200 relative overflow-hidden font-serif">
            {/* Ribbon */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-8 py-2 rounded-b-xl shadow-md font-bold tracking-wide uppercase text-sm z-10">
                Grandma Says
            </div>

            {/* Decorative Background Pattern */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 text-amber-100 opacity-50 pointer-events-none">
                <HeartIcon className="w-64 h-64" />
            </div>

            <div className="relative z-10 space-y-10 mt-8">
                {/* Intro */}
                <section className="text-center max-w-2xl mx-auto">
                    <p className="text-2xl italic leading-relaxed text-amber-900 font-medium">
                        "{data.intro || (data.introAnalogy ? `${data.introAnalogy} ${data.simpleExplanation || ''}` : data.simpleExplanation)}"
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* What It Does */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                        <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                            <span className="text-2xl">🍞</span> What does it do?
                        </h3>
                        <p className="text-lg leading-relaxed text-stone-700">
                            {data.whatItDoes}
                        </p>
                    </div>

                    {/* How To Use */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                        <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                            <span className="text-2xl">🥣</span> How to use it?
                        </h3>
                        <p className="text-lg leading-relaxed text-stone-700">
                            {data.howToUse || data.whyItMatters}
                        </p>
                    </div>
                </div>

                {/* Danger Signs */}
                <div className="flex items-start gap-4 bg-rose-50 p-6 rounded-2xl border border-rose-100">
                    <div className="bg-rose-100 p-2 rounded-full text-rose-500">
                        <HeartIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-rose-800 mb-1">Watch out for...</h3>
                        <p className="text-lg text-rose-900 italic">
                            {data.dangerSigns || data.softWarning}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
