import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, AlertCircle } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { DoughRescueModal } from './DoughRescueModal';
import type { DoughyAssistantContextSnapshot } from '@/components/tools/doughyAssistant.types';

const AbstractDoughyAvatar = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="doughyPanelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#84CC16" />
                <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#doughyPanelGradient)" />
        <path d="M30 40 Q50 20 70 40 T90 60" stroke="white" strokeWidth="4" fill="none" opacity="0.5" />
        <circle cx="35" cy="45" r="5" fill="white" />
        <circle cx="65" cy="45" r="5" fill="white" />
        <path d="M35 65 Q50 75 65 65" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
);

interface Suggestion {
    id: string;
    label: string;
    text: string;
}

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
    suggestions?: Suggestion[];
    isLoading?: boolean;
}

interface DoughyAssistantPanelProps {
    isOpen: boolean;
    onClose: () => void;
    contextSnapshot: DoughyAssistantContextSnapshot;
}

const getStartChips = (t: (key: string, options?: Record<string, unknown>) => string): Suggestion[] => [
    {
        id: 'rescue',
        label: t('doughy_assistant.chips.rescue_label', { defaultValue: 'Rescue dough' }),
        text: t('doughy_assistant.chips.rescue_text', { defaultValue: 'My dough is failing. Help me recover it fast.' })
    },
    {
        id: 'recipe',
        label: t('doughy_assistant.chips.recipe_label', { defaultValue: 'Build recipe' }),
        text: t('doughy_assistant.chips.recipe_text', { defaultValue: 'Build a recipe for my current style and oven.' })
    },
    {
        id: 'learn',
        label: t('doughy_assistant.chips.learn_label', { defaultValue: 'Explain why' }),
        text: t('doughy_assistant.chips.learn_text', { defaultValue: 'Explain what changed in my dough in simple terms.' })
    },
];

const getInitialMessages = (t: (key: string, options?: Record<string, unknown>) => string): Message[] => [
    {
        id: '1',
        text: t('doughy_assistant.welcome', {
            defaultValue: 'I am Doughy. Tell me your goal and constraints, and I will give you a clear next step.'
        }),
        sender: 'bot',
        timestamp: new Date(),
        suggestions: getStartChips(t)
    }
];

export const DoughyAssistantPanel: React.FC<DoughyAssistantPanelProps> = ({ isOpen, onClose, contextSnapshot }) => {
    const { t } = useTranslation();
    const [messages, setMessages] = useState<Message[]>(() => getInitialMessages(t));
    const [inputValue, setInputValue] = useState('');
    const [isRescueOpen, setIsRescueOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    const getContextualSuggestions = (lastQuestion: string): Suggestion[] | undefined => {
        const lower = lastQuestion.toLowerCase();

        if (lower.includes('receita') || lower.includes('recipe')) {
            return [
                { id: 'calc', label: t('doughy_assistant.chips.calc_label', { defaultValue: 'Open calculator' }), text: t('doughy_assistant.chips.calc_text', { defaultValue: 'How should I configure the calculator for this?' }) },
                { id: 'style', label: t('doughy_assistant.chips.style_label', { defaultValue: 'Compare styles' }), text: t('doughy_assistant.chips.style_text', { defaultValue: 'Which style is best for my goal and oven?' }) },
            ];
        }

        if (lower.includes('problema') || lower.includes('help') || lower.includes('ajuda')) {
            return [
                {
                    id: 'rescue',
                    label: t('doughy_assistant.chips.rescue_flow_label', { defaultValue: 'Run rescue flow' }),
                    text: t('doughy_assistant.chips.rescue_flow_text', { defaultValue: 'Open the rescue flow and diagnose this issue.' })
                },
                {
                    id: 'tips',
                    label: t('doughy_assistant.chips.tips_label', { defaultValue: 'Quick fixes' }),
                    text: t('doughy_assistant.chips.tips_text', { defaultValue: 'Give me the top 3 adjustments with the highest impact.' })
                },
            ];
        }

        return getStartChips(t);
    };

    const handleSendMessage = async (textOverride?: string) => {
        const textToSend = textOverride || inputValue;
        if (!textToSend.trim() || isLoading) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: textToSend,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        if (!textOverride) setInputValue('');
        setIsLoading(true);

        const loadingMsg: Message = {
            id: (Date.now() + 1).toString(),
            text: t('common.thinking', { defaultValue: 'Thinking...' }),
            sender: 'bot',
            timestamp: new Date(),
            isLoading: true
        };
        setMessages(prev => [...prev, loadingMsg]);

        try {
            const { askGeneralAssistant } = await import('@/ai/assistantClient');
            const response = await askGeneralAssistant({
                question: textToSend,
                doughConfig: contextSnapshot.doughConfig,
                doughResult: contextSnapshot.doughResult,
                lastBatch: contextSnapshot.lastBatch,
                flour: contextSnapshot.flour,
                oven: contextSnapshot.oven,
                userPlan: contextSnapshot.userPlan,
                t
            });

            setMessages(prev => {
                const withoutLoading = prev.filter(m => !m.isLoading);
                return [...withoutLoading, {
                    id: (Date.now() + 2).toString(),
                    text: response,
                    sender: 'bot',
                    timestamp: new Date(),
                    suggestions: getContextualSuggestions(textToSend)
                }];
            });
        } catch (error) {
            console.error('Doughy AI Error:', error);
            setMessages(prev => {
                const withoutLoading = prev.filter(m => !m.isLoading);
                return [...withoutLoading, {
                    id: (Date.now() + 2).toString(),
                    text: t('doughy_assistant.error', { defaultValue: 'I had trouble processing that. Please try again in one sentence.' }),
                    sender: 'bot',
                    timestamp: new Date(),
                    suggestions: getStartChips(t)
                }];
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+5.6rem)] right-3 z-[100] flex flex-col items-end gap-3 print:hidden sm:bottom-6 sm:right-6 pointer-events-auto">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="mb-2 flex h-[min(500px,72vh)] w-[min(22rem,calc(100vw-1.25rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl origin-bottom-right ring-1 ring-black/5 sm:w-96"
                        >
                            <div className="bg-[#1B4332] p-4 flex items-center justify-between shrink-0 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30"></div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40 shadow-inner overflow-hidden">
                                        <AbstractDoughyAvatar />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm tracking-wide">
                                            {t('doughy_assistant.title', { defaultValue: 'Doughy' })}
                                        </h3>
                                        <p className="text-emerald-100/90 text-[10px] font-medium uppercase tracking-wider flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                                            {t('doughy_assistant.status', { defaultValue: 'Online' })}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-white/60 hover:text-white hover:bg-white/10 transition-all p-1.5 rounded-lg relative z-10"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scroll-smooth">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm transition-all ${msg.sender === 'user'
                                                ? 'bg-[#51a145] text-white rounded-tr-none shadow-emerald-900/5'
                                                : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-slate-200/50'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}

                                {messages.length > 0 &&
                                    messages[messages.length - 1].sender === 'bot' &&
                                    messages[messages.length - 1].suggestions && (
                                        <div className="flex flex-wrap gap-2 mt-2 ml-1">
                                            {messages[messages.length - 1].suggestions?.map(chip => (
                                                <button
                                                    key={chip.id}
                                                    onClick={() => handleSendMessage(chip.text)}
                                                    className="px-3 py-1.5 bg-white border border-emerald-100 text-emerald-700 text-xs font-medium rounded-full hover:bg-emerald-50 hover:border-emerald-200 transition-all shadow-sm"
                                                >
                                                    {chip.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                <div ref={messagesEndRef} />
                            </div>

                            <div className="p-3 bg-white border-t border-slate-100 relative z-20">
                                <div className="flex gap-2 items-end">
                                    <button
                                        onClick={() => setIsRescueOpen(true)}
                                        className="p-2.5 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors border border-rose-100 hover:border-rose-200 active:scale-95 flex-shrink-0"
                                        title="Emergency Dough Rescue"
                                    >
                                        <AlertCircle size={20} />
                                    </button>
                                    <div className="flex-1 relative">
                                        <textarea
                                            rows={1}
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder={t('doughy_assistant.placeholder', { defaultValue: 'Describe your dough goal or issue...' })}
                                            className="w-full pl-4 pr-10 py-3 rounded-xl bg-slate-100/50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#51a145]/20 focus:border-[#51a145] text-sm text-slate-700 placeholder-slate-400 resize-none transition-all"
                                            style={{ minHeight: '44px', maxHeight: '100px' }}
                                        />
                                    </div>
                                    <button
                                        onClick={() => handleSendMessage()}
                                        disabled={!inputValue.trim()}
                                        className="p-2.5 rounded-xl bg-[#1B4332] text-white hover:bg-[#2D6A4F] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-900/10 active:scale-95 flex-shrink-0"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <DoughRescueModal
                isOpen={isRescueOpen}
                onClose={() => setIsRescueOpen(false)}
            />
        </>
    );
};

export default DoughyAssistantPanel;
