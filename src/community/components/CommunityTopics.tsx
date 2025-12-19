import React from 'react';
import { Tag } from 'lucide-react';

export const CommunityTopics: React.FC = () => {
    const topics = [
        { name: 'Neapolitan', count: 128 },
        { name: 'Sourdough', count: 85 },
        { name: 'Pan Pizza', count: 64 },
        { name: 'New York Style', count: 42 },
        { name: 'Gluten Free', count: 19 },
        { name: 'Beginner', count: 156 },
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 font-semibold text-sm flex items-center gap-2 text-gray-800">
                <Tag className="h-4 w-4 text-lime-600" />
                Popular Topics
            </div>

            <div className="p-2">
                {topics.map((topic) => (
                    <button
                        key={topic.name}
                        className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md flex items-center justify-between group transition-colors"
                    >
                        <span className="text-sm text-gray-600 group-hover:text-lime-700 font-medium">#{topic.name}</span>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-lime-100 group-hover:text-lime-700">
                            {topic.count}
                        </span>
                    </button>
                ))}
            </div>

            <div className="p-3 border-t border-gray-50 text-center">
                <button className="text-xs text-lime-600 font-bold hover:text-lime-700 uppercase tracking-wider">
                    View All Topics
                </button>
            </div>
        </div>
    );
};
