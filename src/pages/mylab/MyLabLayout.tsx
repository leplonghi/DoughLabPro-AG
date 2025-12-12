

import React, { ReactNode } from 'react';
import { Page } from '@/types';
import { useTranslation } from '@/i18n';
import {
  BeakerIcon,
  BookOpenIcon,
  ChartBarIcon,
  SparklesIcon,
  FlaskIcon,
  ScaleIcon,
  HomeIcon,
  DocumentTextIcon
} from '@/components/ui/Icons';

interface MyLabLayoutProps {
  children: ReactNode;
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const MyLabLayout: React.FC<MyLabLayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[500px] bg-slate-50/50">
      {children}
    </div>
  );
};

export default MyLabLayout;
