import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DoughRescueModal } from './DoughRescueModal';

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

// Enhanced Message Interface with Contextual Suggestions
interface Suggestion {
    id: string;
    label: string;
    text: string;
    action?: () => void; // Optional action trigger
}

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
    suggestions?: Suggestion[];
}

// 🧠 Conversational Knowledge Base - Question-Driven Approach
const START_CHIPS: Suggestion[] = [
    { id: 'rescue', label: '🚑 Help!', text: 'I need help with my dough' },
    { id: 'recipe', label: '📋 Recipe', text: 'I want to create a recipe' },
    { id: 'learn', label: '📚 Learn', text: 'I want to understand something' },
];

const KNOWLEDGE_BASE: Record<string, { text: string; suggestions?: Suggestion[] }> = {
    // ROOT
    'root': {
        text: "Hello. I'm Doughy, your technical baking assistant. What would you like to work on today?",
        suggestions: START_CHIPS
    },

    // 🚑 RESCUE - More investigative
    'rescue': {
        text: "I'll help you troubleshoot. First, tell me: what stage is your dough at right now? (mixing, resting, proofing, or ready to bake?)"
    },
    'rescue_mixing': {
        text: "What's happening during mixing? Is the dough too sticky, too dry, or not coming together?"
    },
    'rescue_sticky': {
        text: "Understood. A few questions:\n\n1. What's your flour type? (00, bread flour, all-purpose?)\n2. Did you measure by weight or volume?\n3. What hydration percentage are you targeting?"
    },
    'rescue_dry': {
        text: "Got it. Let me ask:\n\n1. How did you measure the flour?\n2. What's the room temperature?\n3. Has the dough been resting, or is this right after mixing?"
    },
    'rescue_not_rising': {
        text: "No fermentation activity. Let's check:\n\n1. How old is your yeast?\n2. What temperature was the water you used?\n3. How long has it been resting, and at what temperature?"
    },

    // 📋 RECIPE CREATION - Guided questions
    'recipe': {
        text: "Great! Let's build your recipe. First question: what are you making? (Pizza, bread, focaccia, or something else?)"
    },
    'recipe_pizza': {
        text: "Perfect. What style of pizza? (Neapolitan, NY-style, Roman, or another style?)"
    },
    'recipe_neapolitan': {
        text: "Excellent choice. Now:\n\n1. How many pizzas do you need?\n2. What's your oven's max temperature?\n3. When do you want to bake? (today, tomorrow, or later?)"
    },
    'recipe_bread': {
        text: "What type of bread? (Sourdough, baguette, sandwich loaf, or something else?)"
    },

    // 📚 LEARNING - Socratic method
    'learn': {
        text: "What topic interests you? (Hydration, fermentation, flour types, or baker's math?)"
    },
    'learn_hydration': {
        text: "Good question. Before I explain, tell me: have you worked with different hydration levels before? This helps me calibrate my explanation."
    },
    'learn_hydration_beginner': {
        text: "**Hydration Basics:**\n\nHydration = (Water ÷ Flour) × 100\n\nThink of it as how 'wet' your dough is:\n• 60% = Stiff, easy to shape (bagels)\n• 70% = Sticky but manageable (artisan bread)\n• 80%+ = Very wet (ciabatta, focaccia)\n\nWhat hydration level are you working with?"
    },
    'learn_fermentation': {
        text: "Fermentation is where flavor develops. What specifically do you want to know?\n\n• How long to ferment?\n• Cold vs. room temperature?\n• How to tell when it's ready?"
    },
    'learn_flour': {
        text: "Flour choice is critical. What's your main question:\n\n• Difference between flour types?\n• Protein content and gluten?\n• Which flour for which recipe?"
    },

    // TECHNICAL DEEP DIVES - Only when asked
    'hydration_deep': {
        text: "**Advanced Hydration:**\n\nFlour absorption varies by:\n• Protein content (12-14% typical)\n• Grain type (whole wheat absorbs more)\n• Milling fineness\n\nFor your flour, what's the protein percentage listed on the bag?"
    },
    'fermentation_timing': {
        text: "**Fermentation Timing:**\n\nIt depends on:\n• Yeast amount (more = faster)\n• Temperature (warmer = faster)\n• Desired flavor (longer = more complex)\n\nWhat's your timeline? Tell me when you want to bake."
    },
    'flour_protein': {
        text: "**Protein & Gluten:**\n\n• Low (8-10%): Pastries, cakes\n• Medium (10-12%): All-purpose, pizza\n• High (12-14%+): Bread, bagels\n\nHigher protein = stronger gluten = chewier texture.\n\nWhat are you making?"
    }
};

const INITIAL_MESSAGES: Message[] = [
    {
        id: '1',
        text: "Hi Chef! I'm Doughy. 🧑‍🍳 ready to help you calculate recipes or save a sticky situation.",
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

    // Auto-scroll to bottom of chat
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const findResponse = (input: string): { text: string; suggestions?: Suggestion[] } => {
        const lower = input.toLowerCase();

        // RESCUE FLOW - Investigative
        if (lower.includes('help') || lower.includes('rescue') || lower.includes('problem') || lower.includes('emergency')) {
            return KNOWLEDGE_BASE['rescue'];
        }

        // Stage-specific rescue
        if (lower.includes('mixing')) return KNOWLEDGE_BASE['rescue_mixing'];
        if (lower.includes('sticky') || lower.includes('wet')) return KNOWLEDGE_BASE['rescue_sticky'];
        if (lower.includes('dry') || lower.includes('hard') || lower.includes('crumbly')) return KNOWLEDGE_BASE['rescue_dry'];
        if (lower.includes('not rising') || lower.includes('no rise') || lower.includes('flat') || lower.includes('dead')) {
            return KNOWLEDGE_BASE['rescue_not_rising'];
        }

        // RECIPE CREATION FLOW
        if (lower.includes('recipe') || lower.includes('create') || lower.includes('make')) {
            return KNOWLEDGE_BASE['recipe'];
        }
        if (lower.includes('pizza')) {
            if (lower.includes('neapolitan')) return KNOWLEDGE_BASE['recipe_neapolitan'];
            return KNOWLEDGE_BASE['recipe_pizza'];
        }
        if (lower.includes('bread') || lower.includes('pão')) {
            return KNOWLEDGE_BASE['recipe_bread'];
        }

        // LEARNING FLOW - Socratic
        if (lower.includes('learn') || lower.includes('understand') || lower.includes('explain')) {
            return KNOWLEDGE_BASE['learn'];
        }
        if (lower.includes('hydration') || lower.includes('water')) {
            if (lower.includes('beginner') || lower.includes('basic') || lower.includes('yes')) {
                return KNOWLEDGE_BASE['learn_hydration_beginner'];
            }
            return KNOWLEDGE_BASE['learn_hydration'];
        }
        if (lower.includes('ferment') || lower.includes('proof') || lower.includes('rise')) {
            return KNOWLEDGE_BASE['learn_fermentation'];
        }
        if (lower.includes('flour') || lower.includes('protein')) {
            if (lower.includes('protein') || lower.includes('gluten')) {
                return KNOWLEDGE_BASE['flour_protein'];
            }
            return KNOWLEDGE_BASE['learn_flour'];
        }

        // DEEP TECHNICAL - Only when specifically asked
        if (lower.includes('timing') && lower.includes('ferment')) {
            return KNOWLEDGE_BASE['fermentation_timing'];
        }
        if (lower.includes('advanced') && lower.includes('hydration')) {
            return KNOWLEDGE_BASE['hydration_deep'];
        }

        // Special Commands
        if (lower.includes('open_rescue_tool')) {
            setTimeout(() => setIsRescueOpen(true), 500);
            return { text: "Opening the Rescue Tool interface...", suggestions: START_CHIPS };
        }

        // FALLBACK - Ask clarifying question
        return {
            text: "I want to help, but I need more context. Are you:\n\n• Troubleshooting a problem?\n• Creating a new recipe?\n• Learning about a technique?\n\nTell me more about what you're working on.",
            suggestions: START_CHIPS
        };
    };

    const handleSendMessage = (textOverride?: string) => {
        const textToSend = textOverride || inputValue;
        if (!textToSend.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: textToSend,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        if (!textOverride) setInputValue("");

        // Simulated AI response
        setTimeout(() => {
            const response = findResponse(textToSend);

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: response.text,
                sender: 'bot',
                timestamp: new Date(),
                suggestions: response.suggestions
            };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
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
