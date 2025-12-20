import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DoughRescueModal } from './DoughRescueModal';
import { askGeneralAssistant } from '@/ai/assistantClient';
import { useCalculator } from '@/contexts/CalculatorContext';
import { useFlours } from '@/contexts/FloursProvider';
import { useBatches } from '@/contexts/BatchesProvider';
import { useAuth } from '@/contexts/AuthContext';

// Abstract Green Avatar Component
const AbstractDoughyAvatar = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="doughyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#84CC16" />
                <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#doughyGradient)" />
        <path d="M30 40 Q50 20 70 40 T90 60" stroke="white" strokeWidth="4" fill="none" opacity="0.5" />
        <circle cx="35" cy="45" r="5" fill="white" />
        <circle cx="65" cy="45" r="5" fill="white" />
        <path d="M35 65 Q50 75 65 65" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
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

// Smart Contextual Suggestions
const START_CHIPS: Suggestion[] = [
    { id: 'rescue', label: '🚑 Ajuda!', text: 'Preciso de ajuda com minha massa' },
    { id: 'recipe', label: '📋 Receita', text: 'Quero criar uma receita' },
    { id: 'learn', label: '📚 Aprender', text: 'Quero entender algo sobre panificação' },
];

const INITIAL_MESSAGES: Message[] = [
    {
        id: '1',
        text: "Olá Chef! Eu sou o Doughy 🧑‍🍳, seu assistente inteligente de panificação. Estou aqui para ajudar você a criar receitas perfeitas, resolver problemas e aprender técnicas avançadas. Como posso ajudar hoje?",
        sender: 'bot',
        timestamp: new Date(),
        suggestions: START_CHIPS
    }
];

export const DoughyAssistant: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const [isRescueOpen, setIsRescueOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Context hooks for intelligent responses
    const { config: doughConfig, result: doughResult } = useCalculator();
    const { flours } = useFlours();
    const { batches } = useBatches();
    const { user } = useAuth();

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
                    text: "Desculpe, tive um problema ao processar sua pergunta. Por favor, tente novamente.",
                    sender: 'bot',
                    timestamp: new Date(),
                    suggestions: START_CHIPS
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
                { id: 'rescue', label: '🚑 Ferramenta de Resgate', text: 'Abrir ferramenta de diagnóstico' },
                { id: 'tips', label: '💡 Dicas', text: 'Dicas para evitar problemas' },
            ];
        }

        return START_CHIPS;
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
            <div className={`fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 print:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>

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
                            <div className="bg-[#1B4332] p-4 flex items-center justify-between shrink-0 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30"></div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40 shadow-inner overflow-hidden">
                                        <AbstractDoughyAvatar />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm tracking-wide">Doughy AI</h3>
                                        <p className="text-emerald-100/90 text-[10px] font-medium uppercase tracking-wider flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                                            Online & Ready
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/60 hover:text-white hover:bg-white/10 transition-all p-1.5 rounded-lg relative z-10"
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
                                            placeholder="Ask about your dough..."
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

                {/* FAB */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative group h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-2xl flex items-center justify-center transition-all bg-white border-[3px] border-white overflow-hidden pointer-events-auto hover:shadow-emerald-900/20 z-[101]"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#51a145] to-[#1B4332] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Use the avatar image here as the button icon */}
                    <div className="w-full h-full p-2 z-10 relative">
                        <AbstractDoughyAvatar />
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
