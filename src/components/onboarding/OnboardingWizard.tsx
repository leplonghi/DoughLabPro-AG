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
import { HydrationInput } from '@/components/calculator/HydrationInput';

interface OnboardingWizardProps {
    onComplete: () => void;
    onClose: () => void;
    initialStep?: number;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onComplete, onClose, initialStep = 0 }) => {
    const { t } = useTranslation(['common', 'auth']);
    const { updateUser, user } = useUser();
    const { handleConfigChange } = useCalculator();
    const [step, setStep] = useState(initialStep);

    // Local state for selections - Initialize from user if available
    // Local state for selections - Initialize from user if available
    const [skill, setSkill] = useState<'beginner' | 'intermediate' | 'advanced' | 'pro'>(user?.skillLevel || 'beginner');
    const [interest, setInterest] = useState<'pizza' | 'bread' | 'sourdough' | 'pastry'>(user?.primaryInterest as any || 'pizza');
    const [freq, setFreq] = useState<'weekly' | 'monthly' | 'occasionally'>(user?.bakingFrequency || 'weekly');
    const [enableSchedule, setEnableSchedule] = useState(user?.enableSmartSchedule || false);
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        try {
            // Save profile data
            if (user) {
                // We use 'as any' for interest to bypass potential strict type mismatch if 'pastry' isn't in User yet
                await updateUser({
                    skillLevel: skill,
                    primaryInterest: interest as any,
                    bakingFrequency: freq,
                    onboardingCompleted: true,
                    enableSmartSchedule: enableSchedule
                });
            }

            // Ensure localStorage is set as a fallback
            localStorage.setItem('dlp_onboarding_completed', 'true');

            // Configure calculator based on choices
            try {
                if (interest === 'pizza') {
                    handleConfigChange({ bakeType: 'PIZZAS', hydration: 62 });
                } else if (interest === 'bread') {
                    handleConfigChange({ bakeType: 'BREADS_SAVORY', hydration: 70 });
                } else if (interest === 'pastry') {
                    handleConfigChange({ bakeType: 'SWEETS_PASTRY', hydration: 45 });
                }
            } catch (configError) {
                console.error("Error applying calculator config:", configError);
                // Don't block onboarding completion if calc config fails
            }

            // Successfully finished logic
            onComplete();

        } catch (error) {
            console.error("Onboarding finish error", error);
            // Even if server save fails, we close the wizard locally to not trap the user
            // Fallback:
            localStorage.setItem('dlp_onboarding_completed', 'true');
            onComplete();
        } finally {
            setIsLoading(false);
        }
    };



    const steps = [
        // Step 0: Welcome
        {
            id: 'welcome',
            render: () => (
                <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                            className="w-full bg-dlp-brand-hover text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-lime-700 transition flex items-center justify-center gap-2"
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
                                            ? 'border-dlp-brand bg-lime-50 text-lime-700 ring-1 ring-dlp-brand'
                                            : 'border-slate-200 bg-white text-slate-600 hover:border-lime-300'
                                            }`}
                                    >
                                        {t(`auth.onboarding.level_${l}`, l.charAt(0).toUpperCase() + l.slice(1))}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium text-slate-700 block mb-2">{t('auth.onboarding.main_goal', 'Main Goal')}</label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { id: 'pizza', icon: '🍕', label: t('ui.pizza_337') },
                                    { id: 'bread', icon: '🥖', label: t('ui.bread_338') },
                                    { id: 'sourdough', icon: '🦠', label: t('ui.sourdough_339') },
                                    { id: 'pastry', icon: '🥐', label: t('ui.confectionery_340') }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setInterest(item.id as any)}
                                        className={`p-3 rounded-lg border text-sm font-medium transition-all flex flex-col items-center gap-1 ${interest === item.id
                                            ? 'border-dlp-brand bg-lime-50 text-lime-700 ring-1 ring-dlp-brand'
                                            : 'border-slate-200 bg-white text-slate-600 hover:border-lime-300'
                                            }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        {t(`auth.onboarding.goal_${item.id}`, { defaultValue: item.label })}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-slate-700 block mb-2">{t('auth.onboarding.planning_style', 'Planning Style')}</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => setEnableSchedule(false)}
                                className={`p-3 rounded-lg border text-sm font-medium transition-all ${!enableSchedule
                                    ? 'border-dlp-brand bg-lime-50 text-lime-700 ring-1 ring-dlp-brand'
                                    : 'border-slate-200 bg-white text-slate-600 hover:border-lime-300'
                                    }`}
                            >
                                <span className="block text-xl mb-1">🧠</span>
                                {t('auth.onboarding.style_feeling', 'By Feel')}
                            </button>
                            <button
                                onClick={() => setEnableSchedule(true)}
                                className={`p-3 rounded-lg border text-sm font-medium transition-all ${enableSchedule
                                    ? 'border-dlp-brand bg-lime-50 text-lime-700 ring-1 ring-dlp-brand'
                                    : 'border-slate-200 bg-white text-slate-600 hover:border-lime-300'
                                    }`}
                            >
                                <span className="block text-xl mb-1">📅</span>
                                {t('auth.onboarding.style_schedule', 'Smart Schedule')}
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={() => setStep(2)}
                        className="w-full mt-4 bg-dlp-brand-hover text-white py-3 rounded-lg font-semibold hover:bg-lime-700 transition"
                    >
                        {t('auth.onboarding.continue', 'Continue')}
                    </button>
                </div >
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
                        <HydrationInput
                            label={t('auth.onboarding.try_slider', 'Try changing hydration:')}
                            value={demoHydration}
                            onChange={(e) => setDemoHydration(Number(e.target.value))}
                            min={50}
                            max={85}
                            step={1}
                        />
                    </div>

                    <button
                        onClick={handleFinish}
                        disabled={isLoading}
                        className="w-full bg-dlp-brand-hover text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                {t('common.processing', { defaultValue: 'Processing...' })}
                            </>
                        ) : (
                            <>
                                {t('auth.onboarding.finish', 'Get Started')} <CheckIcon className="w-5 h-5" />
                            </>
                        )}
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
                        className="h-full bg-dlp-brand"
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


