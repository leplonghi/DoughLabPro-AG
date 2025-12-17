import React from 'react';
import { useTranslation } from '@/i18n';
import { UnitSystem, OvenType, Unit } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { AffiliateDisclaimer } from '@/components/ui/AffiliateDisclaimer';
import { useCalculator } from '@/contexts/CalculatorContext';
import { useRouter } from '@/contexts/RouterContext';
import { FireIcon } from '@/components/ui/Icons';

const ChoiceButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full rounded-lg px-4 py-2 text-center text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 ${active
      ? 'bg-lime-500 text-white font-semibold shadow-md'
      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
      }`}
  >
    {children}
  </button>
);

const SettingsPage: React.FC = () => {
  const { t } = useTranslation(['settings', 'common', 'profile']);
  const {
    defaultAmbientTempC,
    setDefaultAmbientTempC,
    defaultOvenType,
    setDefaultOvenType,
    ovens
  } = useUser();
  const { unit, setUnit } = useCalculator();
  const { navigate } = useRouter();
  const [unitSystem, setUnitSystem] = React.useState<UnitSystem>(UnitSystem.METRIC);

  const handleAnalyzeOven = (ovenId: string) => {
    // Navigate to tools page with oven profiler and the selected oven
    navigate('tools/oven-profiler', ovenId);
  };

  return (
    <div className="mx-auto max-w-2xl animate-[fadeIn_0.5s_ease-in-out]">
      <button
        onClick={() => window.history.back()}
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
      >
        &larr; {t('common.back')}
      </button>

      <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200/50 sm:p-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">{t('general.general_settings')}</h1>

        <div className="space-y-8">
          {/* Unit System */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              {t('form.unit_system')}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <ChoiceButton
                active={unitSystem === UnitSystem.US_CUSTOMARY}
                onClick={() => setUnitSystem(UnitSystem.US_CUSTOMARY)}
              >
                {t('form.us_customary')}
              </ChoiceButton>
              <ChoiceButton
                active={unitSystem === UnitSystem.METRIC}
                onClick={() => setUnitSystem(UnitSystem.METRIC)}
              >
                {t('form.metric')}
              </ChoiceButton>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              {t('form.unit_system_tooltip')}
            </p>
          </div>

          {/* Default Measurement Unit */}
          <div className="border-t border-slate-200 pt-6">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Default Measurement Unit
            </label>
            <div className="grid grid-cols-3 gap-3">
              <ChoiceButton
                active={unit === 'g'}
                onClick={() => setUnit('g')}
              >
                Grams (g)
              </ChoiceButton>
              <ChoiceButton
                active={unit === 'oz'}
                onClick={() => setUnit('oz')}
              >
                Ounces (oz)
              </ChoiceButton>
              <ChoiceButton
                active={unit === 'volume'}
                onClick={() => setUnit('volume')}
              >
                Cups
              </ChoiceButton>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Choose your preferred unit for ingredient measurements in the calculator
            </p>
          </div>



          {/* Environment Defaults */}
          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">{t('general.environment_defaults')}</h2>
            <div className="space-y-6">

              {/* Default Ambient Temperature */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  {t('community_detail.ambient_temp')} ({unitSystem === UnitSystem.METRIC ? '°C' : '°F'})
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={defaultAmbientTempC}
                    onChange={(e) => setDefaultAmbientTempC(Number(e.target.value))}
                    className="block w-32 rounded-lg border-slate-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm p-2.5 border"
                  />
                  <span className="text-sm text-slate-500">
                    {t('settings_page.using_temp_as_base', { temp: defaultAmbientTempC })}
                  </span>
                </div>
              </div>

              {/* Default Oven Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">{t('common.default_oven_type')}</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.values(OvenType).map((type) => (
                    <ChoiceButton
                      key={type}
                      active={defaultOvenType === type}
                      onClick={() => setDefaultOvenType(type)}
                    >
                      {t(`profile.ovens.types.${type.toLowerCase()}`) || type}
                    </ChoiceButton>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* My Ovens Section */}
          <div className="border-t border-slate-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">{t('profile.ovens.title')}</h2>
              <button
                onClick={() => navigate('/profile')}
                className="text-sm text-lime-600 hover:text-lime-700 font-medium transition-colors"
              >
                {t('common.manage')}
              </button>
            </div>

            {ovens.length === 0 ? (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-slate-200">
                <FireIcon className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                <p className="text-sm text-slate-500">{t('profile.ovens.empty_state')}</p>
                <button
                  onClick={() => navigate('/profile')}
                  className="mt-3 text-sm text-lime-600 hover:text-lime-700 font-medium"
                >
                  {t('profile.ovens.add_oven')}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ovens.map((oven) => (
                  <div
                    key={oven.id}
                    className="relative rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-lime-300 hover:bg-lime-50/30 transition-all duration-200"
                  >
                    {oven.isDefault && (
                      <span className="absolute top-2 right-2 inline-flex items-center rounded-full bg-lime-100 px-2 py-0.5 text-xs font-medium text-lime-700">
                        {t('common.default')}
                      </span>
                    )}
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <FireIcon className="h-5 w-5 text-lime-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 truncate">{oven.name}</h3>
                        <div className="mt-1 space-y-0.5 text-xs text-slate-600">
                          <p>{t(`profile.ovens.types.${oven.type.toLowerCase()}`)}</p>
                          <p>Max: {oven.maxTemperature}°C</p>
                          <p>
                            {oven.hasSteel ? t('tools.baking_steel') : oven.hasStone ? 'Stone' : 'No surface'}
                          </p>
                        </div>
                        <button
                          onClick={() => handleAnalyzeOven(oven.id)}
                          className="mt-3 w-full flex items-center justify-center gap-1.5 rounded-lg bg-lime-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-lime-600 transition-colors"
                        >
                          <FireIcon className="h-3.5 w-3.5" />
                          {t('common.analyze_oven_profile')}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
      <div className="mt-8">
        <AffiliateDisclaimer variant="footer" className="bg-transparent border-0 px-0" />
      </div>
    </div>

  );
};

export default SettingsPage;
