
import React from 'react';
import { FlavorComponent } from '@/types/flavor';
import {
    CloseIcon,
    ExternalLinkIcon,
    AlertTriangleIcon,
    FireIcon,
    GlobeAltIcon,
    ClockIcon,
    LinkIcon,
    CheckCircleIcon
} from '@/components/ui/Icons';

interface FlavorComponentProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    component: FlavorComponent | null;
}

const FlavorComponentProfileModal: React.FC<FlavorComponentProfileModalProps> = ({
    isOpen,
    onClose,
    component,
}) => {
    if (!isOpen || !component) return null;

    // Render a 1-5 scale visualization
    const renderScale = (value: number, label: string) => {
        return (
            <div className="flex flex-col gap-1 items-center">
                <span className="text-xs font-semibold text-dlp-text-muted uppercase tracking-wider">{label}</span>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className={`h-2 w-8 rounded-full ${i <= value ? 'bg-dlp-accent' : 'bg-dlp-border'
                                }`}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
            <div className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-dlp-bg-card shadow-dlp-lg ring-1 ring-dlp-border text-dlp-text-primary overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-dlp-border p-5 bg-dlp-bg-muted">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-2xl font-bold font-display">{component.name}</h2>
                            <span className="px-2 py-0.5 rounded-full bg-dlp-accent/10 text-dlp-accent text-xs font-bold uppercase tracking-wide">
                                {component.category}
                            </span>
                            {component.isStandard && (
                                <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                                    <CheckCircleIcon className="w-3 h-3" /> Standard
                                </span>
                            )}
                        </div>
                        <p className="text-dlp-text-secondary">{component.description}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-dlp-text-muted hover:bg-dlp-border hover:text-dlp-text-secondary transition-colors"
                    >
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">

                    {/* Visual Flavor Profile */}
                    <div className="bg-dlp-bg-muted rounded-xl p-5 border border-dlp-border">
                        <h3 className="text-sm font-bold text-dlp-text-secondary uppercase tracking-widest mb-4">Flavor & Texture Profile</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {renderScale(component.flavorProfile.intensity, 'Intensity')}
                            {renderScale(component.flavorProfile.fat, 'Fat')}
                            {renderScale(component.flavorProfile.salinity, 'Salinity')}
                            {renderScale(component.flavorProfile.sweetness, 'Sweetness')}
                        </div>
                    </div>

                    {/* Thermal & Application */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <h3 className="flex items-center gap-2 text-sm font-bold text-dlp-text-secondary uppercase tracking-widest border-b border-dlp-border pb-2">
                                <FireIcon className="w-4 h-4" /> Thermal Behavior
                            </h3>
                            <p className="text-sm text-dlp-text-primary leading-relaxed">
                                {component.flavorProfile.thermalBehavior}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="flex items-center gap-2 text-sm font-bold text-dlp-text-secondary uppercase tracking-widest border-b border-dlp-border pb-2">
                                <ClockIcon className="w-4 h-4" /> Application Moment
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-lg text-sm font-bold ${component.applicationMoment === 'post_oven'
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'bg-orange-100 text-orange-700'
                                    }`}>
                                    {component.applicationMoment === 'post_oven' ? 'Post-Oven (Finish)' : 'Pre-Oven (Cooked)'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Context & Notes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Left Column: Origins & History */}
                        <div className="md:col-span-1 space-y-6">
                            <div>
                                <h4 className="flex items-center gap-2 text-xs font-bold text-dlp-text-muted uppercase mb-2">
                                    <GlobeAltIcon className="w-4 h-4" /> Origin
                                </h4>
                                <p className="text-sm font-medium">{component.origin}</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-dlp-text-muted uppercase mb-2">History</h4>
                                <p className="text-xs text-dlp-text-secondary leading-relaxed">{component.historyContext}</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-dlp-text-muted uppercase mb-2">Best For</h4>
                                <div className="flex flex-wrap gap-2">
                                    {component.commonStyles.map(s => (
                                        <span key={s} className="px-2 py-1 bg-dlp-bg-muted border border-dlp-border rounded text-xs text-dlp-text-secondary capitalize">
                                            {s.replace('_', ' ')}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Technical & Combinations */}
                        <div className="md:col-span-2 space-y-6">

                            {/* Technical Alert Box */}
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                <h4 className="flex items-center gap-2 text-sm font-bold text-yellow-800 uppercase mb-2">
                                    <AlertTriangleIcon className="w-4 h-4" /> Technical Notes
                                </h4>
                                <p className="text-sm text-yellow-900 leading-relaxed">
                                    {component.technicalNotes}
                                </p>
                            </div>

                            {/* Classic Combinations */}
                            <div>
                                <h4 className="text-sm font-bold text-dlp-text-secondary uppercase mb-3">Classic Combinations</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {component.classicCombinations.map((combo, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-dlp-text-primary">
                                            <span className="w-1.5 h-1.5 rounded-full bg-dlp-accent flex-shrink-0" />
                                            {combo}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* References */}
                    <div className="border-t border-dlp-border pt-6">
                        <h4 className="text-sm font-bold text-dlp-text-secondary uppercase mb-4">References & Authority</h4>
                        <div className="grid gap-3">
                            {component.references.map((ref, idx) => (
                                <a
                                    key={idx}
                                    href={ref.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block p-3 rounded-xl border border-dlp-border hover:border-dlp-accent hover:bg-dlp-bg-muted transition-all relative"
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h5 className="text-sm font-bold text-dlp-text-primary group-hover:text-dlp-accent transition-colors flex items-center gap-2">
                                                {ref.title}
                                                <ExternalLinkIcon className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                                            </h5>
                                            <p className="text-xs text-dlp-text-secondary mt-1">{ref.summary}</p>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${ref.sourceType === 'authority'
                                            ? 'bg-blue-50 text-blue-600 border-blue-100'
                                            : ref.sourceType === 'scientific'
                                                ? 'bg-purple-50 text-purple-600 border-purple-100'
                                                : 'bg-gray-50 text-gray-600 border-gray-100'
                                            }`}>
                                            {ref.sourceType}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FlavorComponentProfileModal;
