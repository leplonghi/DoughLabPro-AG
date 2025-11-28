import React from 'react';
import { PaywallOrigin } from '@/types';
import { CheckCircleIcon, StarIcon, LockClosedIcon } from './ui/Icons';
import { useUser } from '@/contexts/UserProvider';

interface PaywallModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigateToPlans: () => void;
    origin: PaywallOrigin | null;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
    isOpen,
    onClose,
    onNavigateToPlans,
    origin,
}) => {
    const { grantProAccess } = useUser();

    if (!isOpen) return null;

    const handleUpgrade = () => {
        // In a real app, this would trigger Stripe/Payment flow
        // For now, we simulate a successful upgrade
        if (confirm("Simulate successful payment?")) {
            grantProAccess();
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-scale-in ring-1 ring-white/50">
                {/* Header / Hero */}
                <div className="bg-gradient-to-br from-white to-slate-50 p-8 text-center relative overflow-hidden border-b border-slate-100">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-lime-300/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-lime-500/30">
                            <StarIcon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">Unlock DoughLab Pro</h2>
                        <p className="text-slate-600 text-sm max-w-xs mx-auto">
                            Take your baking to the professional level with advanced tools and insights.
                        </p>
                    </div>
                </div>

                {/* Body */}
                <div className="p-8">
                    <div className="space-y-4 mb-8">
                        <BenefitItem text="Unlimited Recipes & Batches" />
                        <BenefitItem text="Advanced Dough Calculator & Preferments" />
                        <BenefitItem text="Levain Health Tracking & Analytics" />
                        <BenefitItem text="Side-by-Side Batch Comparisons" />
                        <BenefitItem text="AI Dough Assistant (DoughBot)" />
                    </div>

                    <div className="bg-lime-50 rounded-xl p-4 mb-6 border border-lime-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-1">
                            <span className="bg-lime-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Best Value</span>
                        </div>
                        <p className="text-xs text-lime-700 uppercase tracking-wider font-bold mb-1">Pro Plan</p>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-3xl font-extrabold text-slate-900">$4.99</span>
                            <span className="text-slate-500 font-medium">/ month</span>
                        </div>
                        <p className="text-xs text-lime-600 mt-2 font-medium">Cancel anytime. 7-day free trial.</p>
                    </div>

                    <button
                        onClick={handleUpgrade}
                        className="w-full py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold rounded-xl shadow-lg shadow-lime-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] ring-1 ring-lime-400/50"
                    >
                        Start Free Trial
                    </button>

                    <button
                        onClick={onClose}
                        className="w-full mt-3 py-2 text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors"
                    >
                        Maybe later
                    </button>
                </div>
            </div>
        </div>
    );
};

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-lime-100 flex items-center justify-center">
            <CheckCircleIcon className="w-3.5 h-3.5 text-lime-600" />
        </div>
        <span className="text-slate-700 text-sm font-medium">{text}</span>
    </div>
);

export default PaywallModal;
