import React from 'react';
import { useUser } from '@/contexts/UserProvider';
import { UserCircleIcon, StarIcon, FireIcon } from '@/components/ui/Icons';
import { useTranslation } from '@/i18n';

const CommunityProfileSidebar: React.FC = () => {
    const { user, batches, isAuthenticated } = useUser();
    const { t } = useTranslation();

    if (!isAuthenticated || !user) {
        return (
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <div className="text-center">
                    <div className="mx-auto h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                        <UserCircleIcon className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Join the Community</h3>
                    <p className="text-sm text-slate-500 mb-4">Sign in to share your recipes and track your progress.</p>
                </div>
            </div>
        );
    }

    const publicBatches = batches.filter(b => b.isPublic).length;
    const totalBatches = batches.length;
    const totalRating = batches.reduce((acc, b) => acc + (b.rating || 0), 0);
    const avgRating = batches.filter(b => b.rating).length > 0
        ? (totalRating / batches.filter(b => b.rating).length).toFixed(1)
        : '-';

    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-lime-100 flex items-center justify-center text-lime-600 font-bold text-2xl">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg">{user.name || 'Baker'}</h3>
                    <p className="text-xs text-slate-500">Member</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-orange-500">
                            <FireIcon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Total Bakes</span>
                    </div>
                    <span className="font-bold text-slate-900">{totalBatches}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-yellow-500">
                            <StarIcon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Avg Rating</span>
                    </div>
                    <span className="font-bold text-slate-900">{avgRating}</span>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-500">Public Recipes</span>
                        <span className="font-bold text-slate-900">{publicBatches}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                        <div
                            className="bg-lime-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${totalBatches > 0 ? (publicBatches / totalBatches) * 100 : 0}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityProfileSidebar;
