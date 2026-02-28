import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { DoughRescueModal } from './DoughRescueModal';
import { askGeneralAssistant } from '@/ai/assistantClient';
import { useCalculator } from '@/contexts/CalculatorContext';
import { useFlours } from '@/contexts/FloursProvider';
import { useBatches } from '@/contexts/BatchesProvider';
import { useAuth } from '@/contexts/AuthContext';

// Doughy Avatar Component
const DoughyAvatar = ({ className = "w-full h-full" }: { className?: string }) => (
    <div className={`${className} bg-white rounded-full overflow-hidden flex items-center justify-center`}>
        <img
            src="/doughy-avatar.jpg"
            alt="Doughy Assistant"
            className="w-full h-full object-cover scale-110"
        />
    </div>
);

// Enhanced Message Interface
interface Suggestion {
    id: string;
    label: string;
    text: string;
    action?: () => void;
}

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
    suggestions?: Suggestion[];
    isLoading?: boolean;
}

// Smart Contextual Suggestions - will be generated based on user language
const getStartChips = (t: (key: string) => string): Suggestion[] => [
    { id: 'rescue', label: '🚑 ' + t('doughy.help'), text: t('doughy.help_text') },
    { id: 'recipe', label: '📋 ' + t('doughy.recipe'), text: t('doughy.recipe_text') },
    { id: 'learn', label: '📚 ' + t('doughy.learn'), text: t('doughy.learn_text') },
];

const getInitialMessages = (t: (key: string) => string): Message[] => [
    {
        id: '1',
        text: t('doughy.welcome'),
        sender: 'bot',
        timestamp: new Date(),
        suggestions: getStartChips(t)
    }
];

export const DoughyAssistant: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(() => getInitialMessages(t));
    const [inputValue, setInputValue] = useState("");
    const [isRescueOpen, setIsRescueOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Context hooks for intelligent responses
    const { config: doughConfig, results: doughResult } = useCalculator();
    const { flours } = useFlours();
    const { batches } = useBatches();
    const { appUser: user } = useAuth();

    // Auto-scroll to bottom of chat
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    // Get contextual data for AI
    const getContextualData = () => {
        const currentFlour = flours.find(f => f.id === doughConfig?.flourId);
        const lastBatch = batches.length > 0 ? batches[batches.length - 1] : undefined;
        const userPlan = user?.isPro ? 'pro' : 'free';

        // Convert FlourInventoryItem to FlourDefinition-compatible format
        const flourForAI = currentFlour ? {
            id: currentFlour.id,
            name: currentFlour.name,
            brand: currentFlour.brand || '',
            protein: currentFlour.protein,
            strengthW: 0, // Not available in inventory
            type: currentFlour.type as any,
            category: 'general' as any,
            recommendedUses: []
        } : undefined;

        return {
            doughConfig,
            flour: flourForAI,
            oven: undefined, // Oven context will be added later
            lastBatch,
            userPlan: userPlan as 'free' | 'pro'
        };
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
        if (!textOverride) setInputValue("");
        setIsLoading(true);

        // Add loading message
        const loadingMsg: Message = {
            id: (Date.now() + 1).toString(),
            text: "Pensando...",
            sender: 'bot',
            timestamp: new Date(),
            isLoading: true
        };
        setMessages(prev => [...prev, loadingMsg]);

        try {
            // Get AI response with full context
            const contextData = getContextualData();
            const response = await askGeneralAssistant({
                question: textToSend,
                doughConfig: contextData.doughConfig,
                doughResult,
                lastBatch: contextData.lastBatch,
                flour: contextData.flour,
                oven: contextData.oven,
                userPlan: contextData.userPlan,
                t
            });

            // Remove loading message and add real response
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
                    text: t('doughy.error'),
                    sender: 'bot',
                    timestamp: new Date(),
                    suggestions: getStartChips(t)
                }];
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Generate contextual suggestions based on conversation
    const getContextualSuggestions = (lastQuestion: string): Suggestion[] | undefined => {
        const lower = lastQuestion.toLowerCase();

        if (lower.includes('receita') || lower.includes('recipe')) {
            return [
                { id: 'calc', label: '🧮 Calcular', text: 'Como uso a calculadora?' },
                { id: 'style', label: '🎨 Estilos', text: 'Quais estilos você recomenda?' },
            ];
        }

        if (lower.includes('problema') || lower.includes('help') || lower.includes('ajuda')) {
            return [
                { id: 'rescue', label: '🚑 ' + t('doughy.rescue_tool'), text: t('doughy.rescue_tool_text') },
                { id: 'tips', label: '💡 ' + t('doughy.tips'), text: t('doughy.tips_text') },
            ];
        }

        return getStartChips(t);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Main Wrapper with pointer-events-none to prevent blocking clicks when closed */}
            <div className={`fixed bottom-20 sm:bottom-6 right-6 z-30 flex flex-col items-end gap-4 print:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-2xl shadow-xl border border-slate-200 w-80 sm:w-96 flex flex-col overflow-hidden mb-2 origin-bottom-right h-[500px] pointer-events-auto ring-1 ring-black/5"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-br from-emerald-50 to-lime-50 p-4 flex items-center justify-between shrink-0 relative overflow-hidden border-b border-emerald-100">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30"></div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center border-2 border-emerald-200 shadow-inner overflow-hidden">
                                        <DoughyAvatar />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-sm tracking-wide">{t('common:doughy_ai')}</h3>
                                        <p className="text-emerald-700 text-[10px] font-medium uppercase tracking-wider flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>{t('calculator:ingredient_creator.online_ready')}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-600 hover:text-slate-800 hover:bg-white/40 transition-all p-1.5 rounded-lg relative z-10"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Chat Body */}
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

                                {/* Suggestion Chips - Show if last message is from bot and has suggestions */}
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

                            {/* Footer / Input */}
                            <div className="p-3 bg-white border-t border-slate-100 relative z-20">
                                <div className="flex gap-2 items-end">
                                    <button
                                        onClick={() => setIsRescueOpen(true)}
                                        className="p-2.5 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-100 transition-colors border border-rose-100 hover:border-rose-200 active:scale-95 flex-shrink-0"
                                        title={t('common.emergency_dough_rescue')}
                                    >
                                        <AlertCircle size={20} />
                                    </button>
                                    <div className="flex-1 relative">
                                        <textarea
                                            rows={1}
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder={t('common.ask_about_your_dough')}
                                            className="w-full pl-4 pr-10 py-3 rounded-xl bg-slate-100/50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#51a145]/20 focus:border-[#51a145] text-sm text-slate-700 placeholder-slate-400 resize-none transition-all"
                                            style={{ minHeight: '44px', maxHeight: '100px' }}
                                        />
                                    </div>
                                    <button
                                        onClick={() => handleSendMessage()}
                                        disabled={!inputValue.trim()}
                                        className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-50 to-lime-50 text-slate-800 hover:bg-[#2D6A4F] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-emerald-900/10 active:scale-95 flex-shrink-0"
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* FAB */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative group h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-2xl flex items-center justify-center transition-all bg-white border-[3px] border-white overflow-hidden pointer-events-auto hover:shadow-emerald-900/20"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#51a145] to-[#1B4332] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Use the avatar image here as the button icon */}
                    <div className="w-full h-full p-2 z-10 relative">
                        <DoughyAvatar />
                    </div>

                    {!isOpen && (
                        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full z-20 shadow-sm animate-bounce"></span>
                    )}
                </motion.button>
            </div>

            <DoughRescueModal
                isOpen={isRescueOpen}
                onClose={() => setIsRescueOpen(false)}
            />
        </>
    );
};
