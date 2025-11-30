import React from 'react';
import { BeakerIcon, LightBulbIcon } from '@/components/ui/Icons';

export const DoughbotResultsPlaceholder: React.FC = () => {
    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
                2. Preliminary Diagnosis
            </h3>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-800">
                    <BeakerIcon className="h-5 w-5 text-slate-600" />
                    Possible Causes
                </h4>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                    <li>Diagnosis of potential causes will appear here.</li>
                    <li>Each cause will be explained based on baking science.</li>
                </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <h4 className="flex items-center gap-2 text-lg font-bold text-slate-800">
                    <LightBulbIcon className="h-5 w-5 text-yellow-600" />
                    Suggested Solutions
                </h4>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                    <li>Technical suggestions for correction will appear here.</li>
                    <li>Solutions will include recipe and process adjustments.</li>
                </ul>
            </div>
        </div>
    );
};
