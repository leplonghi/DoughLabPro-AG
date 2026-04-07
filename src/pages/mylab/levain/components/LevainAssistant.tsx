import React, { useMemo, useState } from 'react';
import { CloseIcon, SparklesIcon } from '@/components/ui/Icons';
import { askLevainAssistant } from '@/ai/assistantClient';
import { Levain } from '@/types';

interface LevainAssistantProps {
    isOpen: boolean;
    onClose: () => void;
    levain: Levain;
}

const SUGGESTED_QUESTIONS = [
    'What feeding ratio makes sense for the next 24 hours?',
    'How can I reduce acidity without losing strength?',
    'Is this starter better for pizza, bread, or enrichment right now?',
];

const LevainAssistant: React.FC<LevainAssistantProps> = ({ isOpen, onClose, levain }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const levainSnapshot = useMemo(() => {
        const lastFeed = levain.feedingHistory[0];
        return [
            `Hydration: ${levain.hydration}%`,
            `Base flour: ${levain.baseFlourType || 'Not set'}`,
            `Weight: ${levain.totalWeight}g`,
            `Last feed ratio: ${lastFeed?.ratio || 'Unknown'}`,
        ];
    }, [levain]);

    if (!isOpen) return null;

    const handleAsk = async (nextQuestion?: string) => {
        const prompt = (nextQuestion || question).trim();
        if (!prompt) return;

        try {
            setIsLoading(true);
            setError('');
            setQuestion(prompt);
            const response = await askLevainAssistant(levain, prompt);
            setAnswer(response);
        } catch (err) {
            console.error(err);
            setError("I couldn't reach the levain assistant right now. Please try again in a moment.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
                    <div>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                            <SparklesIcon className="h-5 w-5 text-indigo-500" />
                            Levain Assistant
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">{levain.name} is the current context for this conversation.</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
                        aria-label="Close levain assistant"
                    >
                        <CloseIcon className="h-5 w-5" />
                    </button>
                </div>

                <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
                    <aside className="border-r border-slate-200 bg-slate-50/70 p-5">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700">Current starter snapshot</h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                            {levainSnapshot.map((item) => (
                                <li key={item} className="rounded-xl bg-white px-3 py-2 shadow-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <h4 className="mt-6 text-sm font-bold uppercase tracking-wide text-slate-700">Suggested questions</h4>
                        <div className="mt-3 space-y-2">
                            {SUGGESTED_QUESTIONS.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleAsk(item)}
                                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </aside>

                    <section className="flex min-h-[420px] flex-col p-5">
                        <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            {answer ? (
                                <div className="space-y-4">
                                    <div className="rounded-xl bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-800">
                                        {question}
                                    </div>
                                    <div className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
                                        {answer}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex h-full items-center justify-center text-center text-sm text-slate-500">
                                    Ask about feeding, acidity, timing, or how to use this starter in your next bake.
                                </div>
                            )}
                            {error && (
                                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {error}
                                </div>
                            )}
                        </div>

                        <div className="mt-4 flex flex-col gap-3">
                            <textarea
                                rows={4}
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Ask about feeding cadence, acidity, flour choice, or when this starter is ready to bake."
                                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
                            />
                            <div className="flex justify-end">
                                <button
                                    onClick={() => handleAsk()}
                                    disabled={isLoading || !question.trim()}
                                    className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isLoading ? 'Thinking...' : 'Ask assistant'}
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LevainAssistant;
