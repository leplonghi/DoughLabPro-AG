import React from 'react';
import { useTranslation } from '@/i18n';
import { UnitSystem, OvenType } from '@/types';
import { useUser } from '@/contexts/UserProvider';
import { AffiliateDisclaimer } from '@/components/ui/AffiliateDisclaimer';

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
  const { t, locale, setLocale } = useTranslation(['settings', 'common', 'profile']);
  const {
    defaultAmbientTempC,
    setDefaultAmbientTempC,
    defaultOvenType,
    setDefaultOvenType
  } = useUser();
  const [unitSystem, setUnitSystem] = React.useState<UnitSystem>(UnitSystem.METRIC);

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

        </div>
      </div>
      <div className="mt-8">
        <AffiliateDisclaimer variant="footer" className="bg-transparent border-0 px-0" />
      </div>
    </div>

  );
};

export default SettingsPage;
