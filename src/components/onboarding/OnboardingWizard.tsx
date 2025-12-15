import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useUser } from '@/contexts/UserProvider';
import { useCalculator } from '@/contexts/CalculatorContext';
import {
    BeakerIcon,
    FireIcon,
    UserGroupIcon,
    ClockIcon,
    ChevronRightIcon,
    CheckIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'; // Adjust import based on your icon system or use standard ones
import { DoughConsistencyVisualizer } from '@/components/calculator/DoughConsistencyVisualizer';

interface OnboardingWizardProps {
    onComplete: () => void;
    onClose: () => void;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onComplete, onClose }) => {
    const { t } = useTranslation(['common', 'auth']);
    const { updateUser, user } = useUser();
    const { handleConfigChange } = useCalculator();
    const [step, setStep] = useState(0);

    // Local state for selections
    const [skill, setSkill] = useState<'beginner' | 'intermediate' | 'advanced' | 'pro'>('beginner');
    const [interest, setInterest] = useState<'pizza' | 'bread' | 'sourdough'>('pizza');
    const [freq, setFreq] = useState<'weekly' | 'monthly' | 'occasionally'>('weekly');

    // Demo state for the visualizer step
    const [demoHydration, setDemoHydration] = useState(60);

    const handleNext = async () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            await handleFinish();
        }
    };

    const handleFinish = async () => {
        // Save profile data
        if (user) {
            await updateUser({
                skillLevel: skill,
                primaryInterest: interest,
                bakingFrequency: freq,
                onboardingCompleted: true
            });
        }

        // Configure calculator based on choices
        if (interest === 'pizza') {
            handleConfigChange({ bakeType: 'PIZZAS', hydration: 62 });
        } else if (interest === 'bread') {
            handleConfigChange({ bakeType: 'BREADS_SAVORY', hydration: 70 });
        }

        onComplete();
    };

    const steps = [
        // Step 0: Welcome
        {
            id: 'welcome',
            render: () => (
                <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">🍕</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        {t('auth.onboarding.welcome_title', 'Welcome to DoughLab Pro')}
                    </h2>
                    <p className="text-slate-600">
                        {t('auth.onboarding.welcome_desc', 'Let\'s customize your experience in 30 seconds. We\'ll set up your lab based on your style.')}
                    </p>
                    <div className="pt-4">
                        <button
                            onClick={() => setStep(1)}
                            className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-amber-700 transition flex items-center justify-center gap-2"
                        >
                            Start <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )
        },
        // Step 1: Persona & Interest
        {
            id: 'persona',
            render: () => (
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-slate-800">{t('auth.onboarding.who_are_you', 'Tell us about your baking')}</h3>
                        <p className="text-sm text-slate-500">{t('auth.onboarding.who_are_you_sub', 'This helps us adjust difficulty and presets.')}</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium text-slate-700 block mb-2">{t('auth.onboarding.experience_level', 'Experience Level')}</label>
                            <div className="grid grid-cols-3 gap-2">
                                {(['beginner', 'intermediate', 'advanced'] as const).map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => setSkill(l)}
                                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${skill === l
                                                ? 'border-amber-500 bg-amber-50 text-amber-700 ring-1 ring-amber-500'
                                                : 'border-slate-200 bg-white text-slate-600 hover:border-amber-300'
                                            }`}
                                    >
                                        {t(`auth.onboarding.level_${l}`, l.charAt(0).toUpperCase() + l.slice(1))}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-700 block mb-2">{t('auth.onboarding.main_goal', 'Main Goal')}</label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { id: 'pizza', icon: '🍕', label: 'Pizza' },
                                    { id: 'bread', icon: '🥖', label: 'Bread' },
                                    { id: 'sourdough', icon: '🦠', label: 'Sourdough' } // Using microbe/jar icon concept
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setInterest(item.id as any)}
                                        className={`p-3 rounded-lg border text-sm font-medium transition-all flex flex-col items-center gap-1 ${interest === item.id
                                                ? 'border-amber-500 bg-amber-50 text-amber-700 ring-1 ring-amber-500'
                                                : 'border-slate-200 bg-white text-slate-600 hover:border-amber-300'
                                            }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setStep(2)}
                        className="w-full mt-4 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
                    >
                        {t('auth.onboarding.continue', 'Continue')}
                    </button>
                </div>
            )
        },
        // Step 2: Visualization Demo (Value Prop)
        {
            id: 'demo',
            render: () => (
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-slate-800">{t('auth.onboarding.magic_title', 'See before you bake')}</h3>
                        <p className="text-sm text-slate-500">{t('auth.onboarding.magic_sub', 'DoughLab helps you visualize dough consistency.')}</p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 block">
                            {t('auth.onboarding.try_slider', 'Try changing hydration:')}
                        </label>
                        <input
                            type="range"
                            min="50"
                            max="85"
                            value={demoHydration}
                            onChange={(e) => setDemoHydration(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                        />
                        <div className="flex justify-between text-xs text-slate-400 mt-1">
                            <span>50% (Dry)</span>
                            <span>85% (Wet)</span>
                        </div>

                        {/* The Component we just created */}
                        <DoughConsistencyVisualizer hydration={demoHydration} />
                    </div>

                    <button
                        onClick={handleFinish}
                        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2"
                    >
                        {t('auth.onboarding.finish', 'Get Started')} <CheckIcon className="w-5 h-5" />
                    </button>
                </div>
            )
        }
    ];

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
            >
                {/* Close button for safety */}
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-300 hover:text-slate-500">
                    <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Progress Bar */}
                <div className="h-1 bg-slate-100 w-full">
                    <motion.div
                        className="h-full bg-amber-500"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                    />
                </div>

                <div className="p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {steps[step].render()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};
