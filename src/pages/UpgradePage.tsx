import React, { useState } from 'react';
import { checkoutProSubscription } from '@/services/payment';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom'; // Or use your custom router navigation if needed

interface UpgradePageProps {
    success?: boolean;
    cancel?: boolean;
}

export const UpgradePage: React.FC<UpgradePageProps> = ({ success, cancel }) => {
    const [isLoading, setIsLoading] = useState(false);
    // TODO: Replace with your actual Price ID from Stripe Dashboard
    const PRO_PRICE_ID = "price_1234567890";

    const handleUpgrade = async () => {
        setIsLoading(true);
        try {
            await checkoutProSubscription(PRO_PRICE_ID);
        } catch (error) {
            console.error(error);
            alert("Failed to start checkout. Please try again.");
            setIsLoading(false);
        }
    };

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
                <CheckCircleIcon className="h-16 w-16 text-green-500 mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Upgrade Successful!</h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    Thank you for upgrading to Pro. You now have access to all premium features.
                </p>
                <button
                    onClick={() => window.location.href = '/'} // Reload to refresh permissions if needed
                    className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                    Go to Home
                </button>
            </div>
        );
    }

    if (cancel) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
                <XCircleIcon className="h-16 w-16 text-red-500 mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Upgrade Cancelled</h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    You have cancelled the checkout process. No charges were made.
                </p>
                <button
                    onClick={() => window.location.href = '/upgrade'}
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                >
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">DoughLab Pro</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Unlock the Full Potential
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    Get unlimited recipes, advanced tools, dough analysis, and more.
                </p>

                <div className="mt-12 max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                            Pro Membership
                        </h3>
                        <p className="mt-6 text-base text-gray-500">
                            Perfect for serious bakers who want to track every detail and perfect their craft.
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-amber-600">
                                    What's included
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200" />
                            </div>
                            <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                {[
                                    'Unlimited Recipes',
                                    'Advanced Dough Calculations',
                                    'Levain Tracking',
                                    'Oven Analysis',
                                    'Priority Support',
                                    'Community Badges',
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start lg:col-span-1">
                                        <div className="flex-shrink-0">
                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                        </div>
                                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg leading-6 font-medium text-gray-900">
                            Pay once, own it forever (Example)
                        </p>
                        <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                            <span>$29</span>
                            <span className="ml-3 text-xl font-medium text-gray-500">USD</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            (This is a demo price)
                        </p>
                        <div className="mt-6">
                            <button
                                onClick={handleUpgrade}
                                disabled={isLoading}
                                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? <LoadingSpinner size="sm" color="white" /> : "Upgrade Now"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradePage;
