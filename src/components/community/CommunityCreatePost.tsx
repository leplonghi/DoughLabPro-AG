import React from 'react';
import { useRouter } from '@/contexts/RouterContext';
import { FeedIcon, ChevronRightIcon } from '@/components/ui/Icons';

const CommunityCreatePost: React.FC = () => {
    const { navigate } = useRouter();

    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center text-lime-600">
                    <FeedIcon className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Share your bake</h3>
                    <p className="text-xs text-slate-500">Inspire the community</p>
                </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Completed a great batch? Go to your lab history and publish it to the community feed!
            </p>

            <button
                onClick={() => navigate('mylab/fornadas')}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all active:scale-95"
            >
                Go to My Lab
                <ChevronRightIcon className="h-4 w-4" />
            </button>
        </div>
    );
};

export default CommunityCreatePost;
