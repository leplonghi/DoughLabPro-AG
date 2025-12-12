

import React from 'react';
import { useTranslation } from '@/i18n';

const LevainFormPage: React.FC = () => {
  const { t } = useTranslation();
    return (
        <div>
            <h1 className="text-2xl font-bold">Create/Edit Levain (Placeholder)</h1>
            <p className="mt-4">{t('mylab.this_form_will_be_used_to_create_a_new_starter_or_')}</p>
        </div>
    );
};

export default LevainFormPage;
