import React from 'react';
import { StyleDefinition } from '../../types/styleDefinition';
import { Droplets, Thermometer, Clock, Gauge, Scale, Flame } from 'lucide-react';
import { useTranslation } from '@/i18n';

interface TechnicalProfileCardProps {
    profile: StyleDefinition['technicalProfile'];
}

export const TechnicalProfileCard: React.FC<TechnicalProfileCardProps> = ({ profile }) => {
  const { t } = useTranslation();
    return (
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="bg-stone-50 px-4 py-3 border-b border-stone-200 flex items-center justify-between">
                <h3 className="font-semibold text-stone-900 flex items-center">
                    <Gauge className="w-5 h-5 mr-2 text-lime-600" />{t('common.technical_profile')}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium 
          ${profile.difficulty === 'Expert' ? 'bg-red-100 text-red-800' :
                        profile.difficulty === 'Hard' ? 'bg-orange-100 text-orange-800' :
                            profile.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'}`}>
                    {profile.difficulty}
                </span>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hydration & Salt */}
                <div className="space-y-4">
                    <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-stone-500 flex items-center"><Droplets className="w-4 h-4 mr-1" />{t('common.hydration')}</span>
                            <span className="font-medium text-stone-900">{profile.hydrationRange[0]}% - {profile.hydrationRange[1]}%</span>
                        </div>
                        <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 rounded-full opacity-75"
                                style={{ width: `${Math.min(100, Math.max(0, (profile.hydrationRange[1] - 40) * 2))}%` }}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-stone-500 flex items-center"><Scale className="w-4 h-4 mr-1" />{t('common.salt')}</span>
                            <span className="font-medium text-stone-900">{profile.saltRange[0]}% - {profile.saltRange[1]}%</span>
                        </div>
                        <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-stone-400 rounded-full"
                                style={{ width: `${Math.min(100, profile.saltRange[1] * 20)}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Fermentation & Oven */}
                <div className="space-y-4">
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                        <h4 className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2 flex items-center">
                            <Clock className="w-3 h-3 mr-1" />{t('common.fermentation')}</h4>
                        <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                                <span className="text-amber-700">{t('styles.bulk')}</span>
                                <span className="text-amber-900 font-medium">{profile.fermentation.bulk}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-amber-700">{t('styles.proof')}</span>
                                <span className="text-amber-900 font-medium">{profile.fermentation.proof}</span>
                            </div>
                            {profile.fermentation.coldRetard && (
                                <div className="flex justify-between">
                                    <span className="text-amber-700">{t('styles.cold')}</span>
                                    <span className="text-amber-900 font-medium">{profile.fermentation.coldRetard}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                        <h4 className="text-xs font-semibold text-orange-800 uppercase tracking-wider mb-2 flex items-center">
                            <Flame className="w-3 h-3 mr-1" />{t('common.oven')}</h4>
                        <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                                <span className="text-orange-700">{t('styles.type')}</span>
                                <span className="text-orange-900 font-medium capitalize">{profile.oven.type.replace('_', ' ')}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-orange-700">{t('styles.temp')}</span>
                                <span className="text-orange-900 font-medium">{profile.oven.temperatureC[0]}-{profile.oven.temperatureC[1]}°C</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {profile.oven.notes && (
                <div className="px-4 py-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 italic">
                    Note: {profile.oven.notes}
                </div>
            )}
        </div>
    );
};
