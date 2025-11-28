
import React from 'react';
import { useTranslation } from '@/i18n';
import { UnitSystem } from '@/types';
import { ProFeatureLock } from '@/components/ProFeatureLock';

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
  const { t } = useTranslation();
  const [unitSystem, setUnitSystem] = React.useState<UnitSystem>(UnitSystem.METRIC);

  return (
    <div className="mx-auto max-w-2xl animate-[fadeIn_0.5s_ease-in-out]">
      <button
        onClick={() => window.history.back()}
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
      >
        &larr; Back
      </button>

      <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200/50 sm:p-10">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">General Settings</h1>

        <div className="space-y-6">
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

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              App Theme
            </label>
            <ProFeatureLock
              featureKey="settings_theme"
              contextLabel="Customize App Appearance"
              origin="settings"
            >
              <div className="grid grid-cols-3 gap-3">
                <ChoiceButton active={true} onClick={() => { }}>Light</ChoiceButton>
                <ChoiceButton active={false} onClick={() => { }}>Dark</ChoiceButton>
                <ChoiceButton active={false} onClick={() => { }}>System</ChoiceButton>
              </div>
            </ProFeatureLock>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <p className="text-center text-slate-500">
              More settings coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
