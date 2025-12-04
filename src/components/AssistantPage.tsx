import React, { useState } from 'react';
import { useTranslation } from '@/i18n';
import { SparklesIcon, UserCircleIcon, PaperAirplaneIcon, SpinnerIcon } from '@/components/ui/Icons';
import { DoughConfig, DoughResult, Oven, FlourDefinition, Batch } from '@/types';
import { askGeneralAssistant } from '@/ai/assistantClient';

interface AssistantPageProps {
    config?: DoughConfig;
    results?: DoughResult | null;
    unit?: string;
    onUnitChange?: (unit: any) => void; // Using any for simplicity in this context wrapper
    unitSystem?: string;
    onStartBatch?: () => void;
    lastBatch?: Batch; // For historical context
    flour?: FlourDefinition; // For ingredient context
    oven?: Oven; // For baking context
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const AssistantPage: React.FC<AssistantPageProps> = ({ config, results, lastBatch, flour, oven }) => {
    const { t } = useTranslation();
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: t('assistant_page.welcome') }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            // Using the renamed export 'askGeneralAssistant'
            const responseText = await askGeneralAssistant({
                question: userMessage,
                doughConfig: config,
                doughResult: results,
                lastBatch,
                flour,
                oven,
                t
            });

            setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'assistant', content: t('assistant_page.error') }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-10rem)] max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-white border-b border-slate-100 p-4 flex items-center gap-3">
                <div className="bg-lime-100 p-2 rounded-lg">
                    <SparklesIcon className="h-6 w-6 text-lime-600" />
                </div>
                <div>
                    <h2 className="font-bold text-slate-800">{t('assistant_page.title')}</h2>
                    <p className="text-xs text-slate-500">{t('assistant_page.subtitle')}</p>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-lime-100 text-lime-600'}`}>
                            {msg.role === 'user' ? <UserCircleIcon className="h-5 w-5" /> : <SparklesIcon className="h-5 w-5" />}
                        </div>
                        <div
                            className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${msg.role === 'user'
                                ? 'bg-indigo-600 text-white rounded-tr-none'
                                : 'bg-white text-slate-700 rounded-tl-none border border-slate-200'
                                }`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center flex-shrink-0">
                            <SparklesIcon className="h-5 w-5 animate-pulse" />
                        </div>
                        <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                            <SpinnerIcon className="h-4 w-4 text-lime-600 animate-spin" />
                            <span className="text-xs text-slate-500 font-medium">Thinking...</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-200">
                <div className="relative flex items-center gap-2">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={t('assistant_page.input_placeholder')}
                        className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none resize-none text-sm text-slate-700 placeholder-slate-400 min-h-[50px] max-h-[120px]"
                        rows={1}
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 p-2 bg-lime-500 hover:bg-lime-600 disabled:bg-slate-200 disabled:cursor-not-allowed text-white rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                </div>
                <div className="text-center mt-2">
                    <span className="text-[10px] text-slate-400">
                        AI can make mistakes. Please verify critical safety information.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AssistantPage;
